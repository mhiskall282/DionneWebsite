import { Router, Request, Response } from 'express';
import { prisma } from './prisma.js';
import { requireAuth } from './auth.js';
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

    // Send Welcome Email
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.zoho.com',
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER || 'newsletters@dionnetweneboah.com',
          pass: process.env.SMTP_PASS,
        },
      });

      const welcomeTemplate = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaeb; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #982330; padding: 20px; text-align: center;">
            <h1 style="color: #FFD700; margin: 0; font-size: 24px;">Welcome to the Community!</h1>
          </div>
          <div style="padding: 30px; background-color: #ffffff; color: #333333; line-height: 1.6;">
            <h2 style="color: #982330; font-size: 20px; margin-top: 0;">Hi there,</h2>
            <div style="font-size: 16px;">
              <p>Thank you for joining my mailing list! I'm so excited to have you here.</p>
              <p>Get ready for honest conversations on growth, purpose, and becoming your best self. Every message I send is crafted to inspire you to rise above the ordinary and step boldly into your calling.</p>
              <p>Stay tuned for updates on my books, speaking engagements, and exclusive resources.</p>
              <p>Warmly,<br><strong>Dionne Tweneboah</strong></p>
            </div>
          </div>
          <div style="background-color: #f9f9f9; padding: 15px; text-align: center; border-top: 1px solid #eaeaeb;">
            <p style="color: #888888; font-size: 12px; margin: 0; margin-bottom: 8px;">&copy; ${new Date().getFullYear()} Dionne Tweneboah. All rights reserved.</p>
            <p style="margin: 0; font-size: 12px;">
              <a href="https://dionnetweneboah.com/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: #982330; text-decoration: underline;">Unsubscribe</a>
            </p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Dionne Tweneboah" <${process.env.SMTP_USER || 'newsletters@dionnetweneboah.com'}>`,
        to: email,
        subject: "Welcome to my Newsletter! It's your time to shine 🌟",
        html: welcomeTemplate,
      });
    } catch (emailErr) {
      console.error('Failed to send welcome email:', emailErr);
      // We don't fail the subscription if the email fails
    }

    res.status(201).json(subscriber);
  } catch (err) {
    console.error('Subscription error:', err);
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
        user: process.env.SMTP_USER || 'newsletters@dionnetweneboah.com',
        pass: process.env.SMTP_PASS,
      },
    });

    // Send emails sequentially to customize the unsubscribe link for each recipient
    const sendPromises = recipientEmails.map(async (email: string) => {
      // Create a customized template with an unsubscribe link for this specific email
      const customHtmlTemplate = `
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
            <p style="color: #888888; font-size: 12px; margin: 0; margin-bottom: 8px;">&copy; ${new Date().getFullYear()} Dionne Tweneboah. All rights reserved.</p>
            <p style="margin: 0; font-size: 12px;">
              <a href="https://dionnetweneboah.com/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: #982330; text-decoration: underline;">Unsubscribe from these emails</a>
            </p>
          </div>
        </div>
      `;

      return transporter.sendMail({
        from: `"Dionne Tweneboah" <${process.env.SMTP_USER || 'newsletters@dionnetweneboah.com'}>`,
        to: email,
        subject: subject,
        html: customHtmlTemplate,
      });
    });

    await Promise.all(sendPromises);

    res.json({ success: true, count: recipientEmails.length });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email. Check SMTP config.' });
  }
});

// GET unsubscribe (public)
router.get('/unsubscribe', async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (!email) {
      res.status(400).send("Email parameter is missing.");
      return;
    }

    await prisma.subscriber.delete({
      where: { email }
    });

    res.send(`
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
        <h1 style="color: #982330;">Unsubscribed Successfully</h1>
        <p>You have been removed from our mailing list. You can close this window.</p>
      </div>
    `);
  } catch (err) {
    // If the record doesn't exist, it throws an error. We can just gracefully say they are unsubscribed anyway.
    res.send(`
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
        <h1 style="color: #982330;">Unsubscribed</h1>
        <p>You are no longer on the mailing list.</p>
      </div>
    `);
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
