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
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;700&display=swap');
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-block {
    animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f1ee; font-family: 'Inter', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" class="animate-block" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(153, 36, 48, 0.1);">
          
          <!-- Logo Bar -->
          <tr>
            <td align="center" style="padding: 30px; background-color: #ffffff;">
              <img src="https://www.dionnetweneboah.com/assets/logo.png" width="180" style="display: block; max-width: 100%;" alt="Dionne Tweneboah Logo">
            </td>
          </tr>

          <!-- Hero Image -->
          <tr>
            <td style="position: relative;">
              <img src="https://www.dionnetweneboah.com/assets/news-image.jpg" width="600" style="display: block; width: 100%; max-width: 600px; height: auto;" alt="Dionne Tweneboah">
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 40px 50px; text-align: center;">
              <h1 style="font-family: 'Playfair Display', Georgia, serif; color: #992430; font-size: 32px; font-weight: 700; margin: 0 0 15px 0;">Welcome to the<br>Inner Circle ✨</h1>
              
              <p style="font-size: 16px; color: #555555; line-height: 1.6; margin: 0 0 25px 0;">
                You are here because you refuse to settle for ordinary. Get ready for real conversations on growth, purpose, and becoming your absolute best self.
              </p>
              
              <!-- Divider -->
              <table width="60" border="0" cellspacing="0" cellpadding="0" align="center" style="margin-bottom: 25px;">
                <tr><td style="border-top: 3px solid #FFD700;"></td></tr>
              </table>

              <!-- Big Bold Quote -->
              <p style="font-family: 'Playfair Display', Georgia, serif; font-size: 22px; color: #992430; font-style: italic; margin: 0 0 25px 0; line-height: 1.4;">
                "True success isn't about recognition or wealth; it's about the lives you touch and the change you inspire."
              </p>

              <!-- CTA / Highlight -->
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin-bottom: 30px;">
                <tr>
                  <td style="background-color: #992430; padding: 14px 28px; border-radius: 30px;">
                    <a href="https://www.dionnetweneboah.com" style="color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600; letter-spacing: 1px;">EXPLORE THE WEBSITE</a>
                  </td>
                </tr>
              </table>
              
              <p style="font-size: 16px; color: #555555; margin: 0;">Keep shining,<br><strong style="color: #992430;">Dionne Tweneboah</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #992430; padding: 40px; text-align: center;">
              <p style="font-family: 'Playfair Display', serif; color: #FFD700; font-size: 20px; margin: 0 0 20px 0;">Let's Connect</p>
              
              <!-- Social Icons -->
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 0 10px;">
                    <a href="https://www.instagram.com/"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="30" style="display:block; filter: brightness(0) invert(1);"></a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://www.linkedin.com/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="30" style="display:block; filter: brightness(0) invert(1);"></a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://twitter.com/"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="30" style="display:block; filter: brightness(0) invert(1);"></a>
                  </td>
                </tr>
              </table>
              
              <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin: 0 0 15px 0;">&copy; ${new Date().getFullYear()} Dionne Tweneboah. All rights reserved.</p>
              <p style="margin: 0;">
                <a href="https://dionnetweneboah.com/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: rgba(255,215,0,0.8); font-size: 12px; text-decoration: underline;">Update preferences or unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;700&display=swap');
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-block {
    animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }
</style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f1ee; font-family: 'Inter', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" border="0" cellspacing="0" cellpadding="0" class="animate-block" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(153, 36, 48, 0.1);">
          
          <!-- Header Bar with Logo -->
          <tr>
            <td align="center" style="padding: 25px; background-color: #ffffff; border-bottom: 3px solid #FFD700;">
              <img src="https://www.dionnetweneboah.com/assets/logo.png" width="160" style="display: block; max-width: 100%;" alt="Dionne Tweneboah Logo">
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 45px;">
              <h2 style="font-family: 'Playfair Display', Georgia, serif; color: #992430; font-size: 26px; margin: 0 0 25px 0; line-height: 1.3;">${subject}</h2>
              
              <div style="font-size: 16px; color: #4a4a4a; line-height: 1.7; margin-bottom: 35px;">
                ${message.replace(/\n/g, '<br>')}
              </div>
              
              <!-- Sign Off -->
              <table border="0" cellspacing="0" cellpadding="0" style="border-top: 1px solid #f0f0f0; width: 100%; padding-top: 25px;">
                <tr>
                  <td width="70">
                    <img src="https://www.dionnetweneboah.com/assets/dionne-portrait.jpg" width="60" height="60" style="border-radius: 50%; display: block; object-fit: cover;" alt="Dionne Tweneboah">
                  </td>
                  <td style="padding-left: 15px;">
                    <p style="margin: 0; font-size: 14px; color: #888888;">With purpose,</p>
                    <p style="margin: 2px 0 0 0; font-family: 'Playfair Display', Georgia, serif; font-size: 20px; font-weight: 700; color: #992430;">Dionne Tweneboah</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #992430; padding: 35px; text-align: center;">
              <!-- Social Icons -->
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="margin-bottom: 25px;">
                <tr>
                  <td style="padding: 0 10px;">
                    <a href="https://www.instagram.com/"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" width="24" style="display:block; filter: brightness(0) invert(1);"></a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://www.linkedin.com/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width="24" style="display:block; filter: brightness(0) invert(1);"></a>
                  </td>
                  <td style="padding: 0 10px;">
                    <a href="https://twitter.com/"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" width="24" style="display:block; filter: brightness(0) invert(1);"></a>
                  </td>
                </tr>
              </table>
              
              <p style="color: rgba(255,255,255,0.7); font-size: 12px; margin: 0 0 10px 0;">&copy; ${new Date().getFullYear()} Dionne Tweneboah. All rights reserved.</p>
              <p style="margin: 0;">
                <a href="https://dionnetweneboah.com/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: rgba(255,215,0,0.8); font-size: 12px; text-decoration: underline;">Update your preferences</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
