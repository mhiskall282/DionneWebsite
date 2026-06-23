import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

// In production, these should be set in Vercel environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'hello@dionnetweneboah.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Millionaireby35$';
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-for-development';

export interface AuthRequest extends Request {
  user?: { email: string };
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
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({ token, user: { email } });
  } else {
    res.status(401).json({ error: 'Invalid email or password' });
  }
});

router.get('/me', requireAuth, (req: AuthRequest, res) => {
  res.status(200).json({ user: req.user });
});

export default router;
