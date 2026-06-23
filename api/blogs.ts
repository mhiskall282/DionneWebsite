import { Router, Request, Response } from 'express';
import { prisma } from './prisma.js';
import { requireAuth } from './auth.js';

const router = Router();

// GET all blogs (public) - optionally filter by published
router.get('/', async (req: Request, res: Response) => {
  try {
    const { all } = req.query;
    const posts = await prisma.post.findMany({
      where: all ? {} : { published: true },
      orderBy: { createdAt: 'desc' },
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// GET single blog by slug (public)
router.get('/:slug', async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.findUnique({
      where: { slug: req.params.slug },
    });
    if (!post) {
      res.status(404).json({ error: 'Blog post not found' });
      return;
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog post' });
  }
});

// POST create blog (protected)
router.post('/', requireAuth, async (req: Request, res: Response) => {
  try {
    const { title, content, slug, imageUrl, published } = req.body;
    const post = await prisma.post.create({
      data: { title, content, slug, imageUrl, published },
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create blog post' });
  }
});

// PUT update blog (protected)
router.put('/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    const { title, content, slug, imageUrl, published } = req.body;
    const post = await prisma.post.update({
      where: { id: req.params.id },
      data: { title, content, slug, imageUrl, published },
    });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update blog post' });
  }
});

// DELETE blog (protected)
router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    await prisma.post.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
});

export default router;
