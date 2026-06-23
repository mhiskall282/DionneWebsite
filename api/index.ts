import express from 'express';
import cors from 'cors';
import authRouter from '../backend/auth.js';
import blogsRouter from '../backend/blogs.js';
import booksRouter from '../backend/books.js';
import newsletterRouter from '../backend/newsletter.js';
import uploadRouter from '../backend/upload.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const apiRouter = express.Router();
apiRouter.use('/auth', authRouter);
apiRouter.use('/blogs', blogsRouter);
apiRouter.use('/books', booksRouter);
apiRouter.use('/newsletter', newsletterRouter);
apiRouter.use('/upload', uploadRouter);

// Health check
apiRouter.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Vercel Monolithic Backend is running.' });
});

// Handle both Vercel (/api/...) and Local Vite (/...) routes seamlessly
app.use('/api', apiRouter);
app.use('/', apiRouter);

// Export default for Vite middleware, and also export app for Vercel
export default app;
