import { Router, Request, Response } from 'express';
import { prisma } from './prisma.js';
import { requireAuth } from './auth.js';

const router = Router();

// GET all books (public)
router.get('/', async (req: Request, res: Response) => {
  try {
    const { all } = req.query;
    const books = await prisma.book.findMany({
      where: all ? {} : { published: true },
      orderBy: { createdAt: 'asc' },
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// POST create book (protected)
router.post('/', requireAuth, async (req: Request, res: Response) => {
  try {
    const { title, description, imageUrl, purchaseLink, published } = req.body;
    const book = await prisma.book.create({
      data: { title, description, imageUrl, purchaseLink, published },
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create book' });
  }
});

// PUT update book (protected)
router.put('/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    const { title, description, imageUrl, purchaseLink, published } = req.body;
    const book = await prisma.book.update({
      where: { id: req.params.id },
      data: { title, description, imageUrl, purchaseLink, published },
    });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update book' });
  }
});

// DELETE book (protected)
router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    await prisma.book.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
});

export default router;
