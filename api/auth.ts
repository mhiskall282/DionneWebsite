import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma } from './prisma';

const router = Router();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@dionnetweneboah.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Millionaireby35$';
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-development';

export interface AuthRequest extends Request {
  user?: { id: string; email: string; role: string; permissions: string[] };
}

// Authentication Middleware to protect routes
export const requireAuth = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized: Missing or invalid token' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if any users exist in the database
    const userCount = await prisma.user.count();
    
    // If no users exist, automatically create the super admin on first login attempt using env variables
    if (userCount === 0 && email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          name: "Admin",
          role: "ADMIN",
          permissions: JSON.stringify(["manage_blogs", "manage_books", "manage_newsletters", "manage_users"])
        }
      });
      const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role, permissions: JSON.parse(newUser.permissions) }, JWT_SECRET, { expiresIn: '7d' });
      res.status(200).json({ token, user: { email: newUser.email, role: newUser.role } });
      return;
    }

    // Authenticate against database
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role, permissions: JSON.parse(user.permissions) }, JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ token, user: { email: user.email, role: user.role } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/me', requireAuth, (req: AuthRequest, res: Response) => {
  res.status(200).json({ user: req.user });
});

// Change Password
router.post('/change-password', requireAuth, async (req: AuthRequest, res: Response) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });

    const user = await prisma.user.findUnique({ where: { id: req.user.id } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Incorrect current password' });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }
    });

    res.json({ success: true, message: 'Password changed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to change password' });
  }
});

// GET all users (Admin only)
router.get('/users', requireAuth, async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });
  
  const users = await prisma.user.findMany({
    select: { id: true, email: true, name: true, role: true, permissions: true, createdAt: true }
  });
  res.json(users);
});

// POST create user (Admin only)
router.post('/users', requireAuth, async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });

  try {
    const { email, password, name, role, permissions } = req.body;
    
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: role || 'MANAGER',
        permissions: JSON.stringify(permissions || [])
      },
      select: { id: true, email: true, name: true, role: true, permissions: true, createdAt: true }
    });

    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// DELETE user (Admin only)
router.delete('/users/:id', requireAuth, async (req: AuthRequest, res: Response) => {
  if (req.user?.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });
  
  try {
    if (req.params.id === req.user.id) {
      return res.status(400).json({ error: 'Cannot delete yourself' });
    }

    await prisma.user.delete({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

export default router;
