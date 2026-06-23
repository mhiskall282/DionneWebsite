import express from 'express';
import cors from 'cors';
import authRouter from './auth';
import blogsRouter from './blogs';
import booksRouter from './books';
import newsletterRouter from './newsletter';
import uploadRouter from './upload';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRouter);
app.use('/blogs', blogsRouter);
app.use('/books', booksRouter);
app.use('/newsletter', newsletterRouter);
app.use('/upload', uploadRouter);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Vercel Monolithic Backend is running.' });
});

// Export default for Vite middleware, and also export app for Vercel
export default app;
