import { Router, Request, Response } from 'express';
import { prisma } from './prisma';
import { requireAuth } from './auth';
import nodemailer from 'nodemailer';
import * as xlsx from 'xlsx';

const router = Router();

// POST subscribe (public)
router.post('/', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ error: 'Email is required' });
      return;
    }
    
    // Check if already subscribed
    const existing = await prisma.subscriber.findUnique({ where: { email } });
    if (existing) {
      res.status(200).json({ message: 'Already subscribed' });
      return;
    }

    const subscriber = await prisma.subscriber.create({
      data: { email },
    });
    res.status(201).json(subscriber);
  } catch (err) {
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// GET all subscribers (protected)
router.get('/', requireAuth, async (req: Request, res: Response) => {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch subscribers' });
  }
});

// POST send email (protected)
router.post('/send', requireAuth, async (req: Request, res: Response) => {
  try {
    const { subject, message, recipientEmails } = req.body;

    // Use environment variables for Nodemailer config. 
    // In production, user will configure Zoho SMTP details here.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'hello@dionnetweneboah.com',
        pass: process.env.SMTP_PASS || 'your_zoho_password',
      },
    });

    // Beautiful HTML template for the email
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaeb; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #982330; padding: 20px; text-align: center;">
          <h1 style="color: #FFD700; margin: 0; font-size: 24px;">Dionne Tweneboah</h1>
        </div>
        <div style="padding: 30px; background-color: #ffffff; color: #333333; line-height: 1.6;">
          <h2 style="color: #982330; font-size: 20px; margin-top: 0;">${subject}</h2>
          <div style="font-size: 16px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #eaeaeb;">
          <p style="color: #888888; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} Dionne Tweneboah. All rights reserved.</p>
        </div>
      </div>
    `;

    // Send emails in a loop or bcc
    const info = await transporter.sendMail({
      from: `"Dionne Tweneboah" <${process.env.SMTP_USER || 'hello@dionnetweneboah.com'}>`,
      to: recipientEmails.join(', '),
      subject: subject,
      html: htmlTemplate,
    });

    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email. Check SMTP config.' });
  }
});

// GET export excel (protected)
router.get('/export', requireAuth, async (req: Request, res: Response) => {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: { createdAt: 'desc' },
      select: { email: true, createdAt: true, active: true }
    });

    // Create a new workbook and worksheet
    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(subscribers.map(sub => ({
      Email: sub.email,
      'Subscribed At': sub.createdAt.toISOString().split('T')[0],
      Active: sub.active ? 'Yes' : 'No'
    })));

    xlsx.utils.book_append_sheet(wb, ws, 'Subscribers');

    // Write workbook to buffer
    const buffer = xlsx.write(wb, { type: 'buffer', bookType: 'xlsx' });

    // Send the buffer as a file download
    res.setHeader('Content-Disposition', 'attachment; filename="subscribers.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.send(buffer);
  } catch (err) {
    res.status(500).json({ error: 'Failed to export subscribers' });
  }
});

export default router;
