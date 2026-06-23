# Project Handover Document
## dionnetweneboah.com — Official Website

**Prepared by:** John Okyere 
**Handover Date:** June 2026  
**Project Owner:** Dionne Tweneboah  
**Website:** https://dionnetweneboah.com

---

## 📋 Executive Summary

This document serves as the official handover package for the website **dionnetweneboah.com**. It contains everything needed for a new developer or administrator to understand, operate, maintain, and extend the platform.

The site is a full-stack web application built for Dionne Tweneboah — Lawyer, Author, Speaker, and Founder of the Nzuri Uhai Foundation. It includes a public-facing website and a private admin content management system (CMS).

---

## ⏰ Hosting & Subscription Timeline

| Service | Provider | Status | Action Required |
|---|---|---|---|
| **Web Hosting & Deployment** | Vercel | ✅ Active — ~6 months remaining | Renew or transfer before expiry |
| **Domain** | (Check DNS registrar) | ✅ Active | Renew domain annually |
| **Database** | Neon (Free/Paid tier) | ✅ Active | Upgrade if traffic grows |
| **Email** | Zoho Mail | ✅ Active | Renew Zoho subscription |
| **Image Storage** | Vercel Blob | ✅ Included with Vercel | Monitor storage limits |

> [!IMPORTANT]
> **The original developer's Vercel hosting plan covers approximately 6 months from the handover date (June 2026).** After this period, the project owner must either:
> 1. Take over the Vercel account and billing directly, **OR**
> 2. Transfer the project to a new Vercel account (free tier available), **OR**
> 3. Migrate to an alternative hosting provider (e.g., Railway, Render, DigitalOcean)

---

## 🔑 Credentials & Access

> [!CAUTION]
> **ALL credentials listed below should be changed immediately upon handover.** The project owner should set their own secure passwords and store them in a password manager.

### Accounts to Transfer or Create

| Account | Where | What to do |
|---|---|---|
| **Vercel** | vercel.com | Transfer project ownership or invite as team member |
| **Neon Database** | neon.tech | Create new account, create new DB, update `DATABASE_URL` |
| **Zoho Mail** | zoho.com | Ensure access to `hello@dionnetweneboah.com` |
| **GitHub Repository** | github.com | Transfer repository ownership |
| **Domain Registrar** | (Check current registrar) | Ensure domain ownership is with project owner |

### Environment Variables to Reset

After handover, generate fresh values for ALL of these:

```
DATABASE_URL           → Get from new Neon project
DATABASE_URL_UNPOOLED  → Get from new Neon project
ADMIN_EMAIL            → Set to owner's preferred email
ADMIN_PASSWORD         → Set a strong new password
JWT_SECRET             → Generate: node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
ZOHO_EMAIL             → Owner's Zoho email
ZOHO_PASSWORD          → Owner's Zoho app password
BLOB_READ_WRITE_TOKEN  → Generate from Vercel → Storage → Blob
```

---

## 🖥️ Daily Operations Guide

### How to Log Into the Admin Panel

1. Go to: **https://dionnetweneboah.com/admin**
2. Enter your admin email and password
3. You will be taken to the Dashboard

### How to Add a Blog Post

1. Admin Panel → **Blogs** (left sidebar)
2. Click **"New Post"**
3. Fill in: Title, Content, and optionally upload an image
4. **Slug field**: If this is a blog you wrote, enter a URL slug (e.g., `my-first-post`). If you're linking to an **external article**, paste the full URL here (e.g., `https://bbc.com/article/...`)
5. Toggle **Published** to make it visible on the website
6. Click **Save**

### How to Add a Book

1. Admin Panel → **Books** (left sidebar)
2. Click **"Add Book"**
3. Fill in: Title, Description, Purchase Link, and upload a cover image
4. Toggle **Published** to make it visible
5. Click **Save**

### How to Send a Newsletter

1. Admin Panel → **Newsletter** (left sidebar)
2. View the list of subscribers
3. Click **"Send Newsletter"**
4. Write your Subject and Message body
5. Click **Send** — all active subscribers will receive it

### How to Add a Team Manager

1. Admin Panel → **Settings** (left sidebar)
2. Scroll to **Team Members**
3. Click **"Add User"**
4. Enter their name, email, password, and select their permissions
5. Click **Save**

### How to Change Your Password

1. Admin Panel → **Settings** (left sidebar)
2. Under **Account**, enter your current and new password
3. Click **Update Password**

---

## 🛠️ Developer Handover Guide

### Setting Up a New Development Environment

```bash
# Prerequisites: Node.js v18+, pnpm
npm install -g pnpm

# Clone the repository
git clone https://github.com/YOUR_ORG/DionneWebsite.git
cd DionneWebsite

# Install dependencies
pnpm install

# Approve native build scripts (bcrypt requires this)
pnpm approve-builds

# Create .env file with all required variables (see README.md)
# Then generate the Prisma client:
npx prisma generate

# Push schema to database (first time only)
npx prisma db push

# Run the development server
pnpm run dev
```

### Deploying to Vercel

```bash
# Every push to main deploys automatically
git push origin main

# To deploy manually, install Vercel CLI:
npm install -g vercel
vercel --prod
```

### Making Database Schema Changes

```bash
# 1. Edit prisma/schema.prisma
# 2. Apply changes to the database:
npx prisma db push
# 3. Regenerate the Prisma client:
npx prisma generate
```

### Troubleshooting Common Issues

| Problem | Likely Cause | Fix |
|---|---|---|
| Login returns "Internal Server Error" | Prisma client not generated | Run `npx prisma generate` then restart dev server |
| Images not showing | Assets not in `public/assets/` | Copy images from `src/assets/` to `public/assets/` |
| "bcrypt" build warning | Native addon not approved | Run `pnpm approve-builds` |
| `.env` file not loading | Wrong file location | Ensure `.env` is at the project root |
| Newsletter not sending | Missing Zoho credentials | Set `ZOHO_EMAIL` and `ZOHO_PASSWORD` in `.env` |

---

## 📂 Key Files Reference

| File | Purpose |
|---|---|
| `README.md` | Developer quickstart guide |
| `ARCHITECTURE.md` | Full system architecture documentation |
| `HANDOVER.md` | This document |
| `.env` | **Secret credentials** — never commit this |
| `prisma/schema.prisma` | Database table definitions |
| `api/auth.ts` | Login logic |
| `api/newsletter.ts` | Email system |
| `src/pages/admin/Settings.tsx` | User management UI |
| `src/components/SEO.tsx` | SEO meta tags component |
| `tailwind.config.ts` | Brand colors and theme |
| `vercel.json` | Vercel routing configuration |

---

## 📞 Support & Escalation

### For Website Content Changes
- Use the **Admin Panel** at `/admin` — no developer needed for blogs, books, and newsletters

### For Technical Issues
- Refer to `README.md` and `ARCHITECTURE.md` first
- Check Vercel deployment logs at `vercel.com/dashboard`
- Check Neon database status at `neon.tech`

### For Hosting & Billing
- **Vercel**: vercel.com/dashboard → Billing
- **Neon**: neon.tech → Billing
- **Domain**: Contact your domain registrar

---

## 📜 Terms & Conditions of Handover

The following terms govern this project handover between the original developer and the project owner (Dionne Tweneboah / authorised representative):

### 1. Handover Scope
The original developer hereby transfers all project source code, documentation, and associated configuration files to the project owner. This includes:
- Full source code repository
- Database schema and migrations
- All documentation files (README, ARCHITECTURE, HANDOVER)
- Guidance on accessing and operating third-party services

### 2. Hosting Responsibility
- The original developer's Vercel hosting plan covers approximately **6 months** from the date of this handover (June 2026).
- After this period, **full hosting responsibility transfers to the project owner**, including all associated costs.
- The project owner is responsible for renewing or migrating the hosting before the 6-month period expires.
- No guarantee is made that the original developer's Vercel account will remain active after this period.

### 3. Third-Party Services
The project relies on the following third-party services, which are the project owner's responsibility to maintain after handover:
- **Neon** (database hosting) — subject to Neon's own pricing and terms
- **Vercel** (hosting and serverless functions) — subject to Vercel's pricing and terms
- **Zoho** (email service) — subject to Zoho's pricing and terms
- **Domain registrar** — subject to registrar's pricing and terms

### 4. Security Responsibilities
Upon handover, the project owner is responsible for:
- Rotating all credentials and API keys immediately
- Maintaining the security of the `.env` file and environment variables
- Ensuring the `.env` file is never committed to version control
- Managing admin user accounts and access

### 5. Liability
- The original developer provides the codebase "as-is" at the time of handover
- The original developer is not liable for any downtime, data loss, or security incidents occurring after the handover date
- The original developer is not responsible for costs incurred through third-party service usage

### 6. Intellectual Property
- The website design, content, and brand materials belong to Dionne Tweneboah
- The source code developed for this project is owned by the project owner upon full handover
- Third-party libraries and frameworks remain under their respective open-source licenses

### 7. Support After Handover
- The original developer is under no obligation to provide ongoing technical support after the handover date
- Any post-handover support agreements must be negotiated separately and in writing

### 8. Acknowledgement
By proceeding with the handover, both parties acknowledge that:
- The project owner has received all necessary documentation
- The project owner understands their responsibilities regarding hosting and service renewals
- The project owner accepts the terms outlined in this document

---

*Document prepared: June 2026*  
*Project: dionnetweneboah.com*  
*Version: 1.0*
