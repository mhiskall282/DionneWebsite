import { Router, Request, Response } from 'express';
import { requireAuth } from './auth';
import { put } from '@vercel/blob';
import multer from 'multer';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', requireAuth, upload.single('file'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file provided' });
      return;
    }

    // Process the file using Vercel Blob
    const blob = await put(req.file.originalname, req.file.buffer, {
      access: 'public',
    });

    res.status(200).json({ url: blob.url });
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

export default router;
