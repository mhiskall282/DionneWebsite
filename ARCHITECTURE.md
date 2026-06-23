# System Architecture — dionnetweneboah.com

> Technical architecture reference for developers and maintainers.

---

## 1. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USER'S BROWSER                              │
│                                                                     │
│   React SPA (Vite)  ──── react-router-dom ────► Public Pages       │
│                     ──── /admin route ────────► Admin CMS           │
└───────────────────────────────┬─────────────────────────────────────┘
                                │ fetch /api/*
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       VERCEL PLATFORM                               │
│                                                                     │
│  Static Files (CDN)          Serverless Functions (/api)            │
│  ├── index.html              ├── api/index.ts  (Express Router)     │
│  ├── /assets/* (images)      ├── api/auth.ts   (JWT Auth)          │
│  └── JS/CSS bundles          ├── api/blogs.ts  (Blog CRUD)         │
│                              ├── api/books.ts  (Books CRUD)         │
│                              ├── api/newsletter.ts (Email)          │
│                              └── api/upload.ts (File uploads)       │
│                                        │                            │
└────────────────────────────────────────┼────────────────────────────┘
                                         │
              ┌──────────────────────────┼──────────────────────────┐
              │                          │                           │
              ▼                          ▼                           ▼
    ┌─────────────────┐      ┌─────────────────────┐    ┌──────────────────┐
    │  Neon Postgres  │      │   Vercel Blob        │    │   Zoho Mail      │
    │  (Database)     │      │   (Image Storage)    │    │   (SMTP Email)   │
    │                 │      │                      │    │                  │
    │  - Posts        │      │  - Book covers       │    │  - Newsletter    │
    │  - Books        │      │  - Blog images       │    │  - Broadcasts    │
    │  - Subscribers  │      │  - Speaking photos   │    │  - Unsubscribe   │
    │  - Users        │      │                      │    │                  │
    └─────────────────┘      └─────────────────────┘    └──────────────────┘
```

---

## 2. Frontend Architecture

### Framework
- **React 18** with **TypeScript**
- **Vite** as bundler and dev server
- **react-router-dom v6** for client-side routing

### Page Routes

| Route | Component | Access |
|---|---|---|
| `/` | `Index.tsx` | Public |
| `/about` | `About.tsx` | Public |
| `/books` | `Books.tsx` | Public |
| `/speaking` | `Speaking.tsx` | Public |
| `/blogs` | `Blogs.tsx` | Public |
| `/resources` | `Resources.tsx` | Public |
| `/admin` | `AdminLayout.tsx` | Protected (JWT) |
| `/admin/blogs` | `BlogsManager.tsx` | Protected |
| `/admin/books` | `BooksManager.tsx` | Protected |
| `/admin/newsletter` | `NewsletterManager.tsx` | Protected |
| `/admin/settings` | `Settings.tsx` | Protected (Admin only) |

### Styling System
- **Tailwind CSS v3** with a custom brand theme
- **shadcn/ui** component library (built on Radix UI)
- **Brand colors**: Burgundy (`#982330`), Gold (`#FFD700`), Cream (`#FFF8F0`)
- **Fonts**: Playfair Display (headings), Inter (body)
- **Animations**: AOS (Animate On Scroll) for scroll-triggered animations

### State Management
- **TanStack Query** for server state / API data fetching
- **React useState/useEffect** for local component state
- **localStorage** for JWT token persistence and cookie consent

---

## 3. Backend Architecture

### Runtime
- **Express.js v5** running as Vercel Serverless Functions
- All API routes are mounted at `/api/*`
- Single entry point: `api/index.ts` exports the Express app

### API Endpoints

#### Auth (`api/auth.ts`)
| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/login` | Authenticate and receive JWT token |
| `GET` | `/api/verify` | Verify an existing JWT token |

#### Blogs (`api/blogs.ts`)
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/blogs` | No | List all published blogs |
| `POST` | `/api/blogs` | Yes | Create a new blog post |
| `PUT` | `/api/blogs/:id` | Yes | Update a blog post |
| `DELETE` | `/api/blogs/:id` | Yes | Delete a blog post |

#### Books (`api/books.ts`)
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/books` | No | List all published books |
| `POST` | `/api/books` | Yes | Add a new book |
| `PUT` | `/api/books/:id` | Yes | Update a book |
| `DELETE` | `/api/books/:id` | Yes | Delete a book |

#### Newsletter (`api/newsletter.ts`)
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/subscribe` | No | Subscribe an email |
| `GET` | `/api/unsubscribe` | No | Unsubscribe via token link |
| `GET` | `/api/subscribers` | Yes | List all subscribers |
| `POST` | `/api/send-newsletter` | Yes | Send broadcast email |

#### Upload (`api/upload.ts`)
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/upload` | Yes | Upload image to Vercel Blob |

### Authentication Flow

```
1. User enters credentials on /admin/login
2. POST /api/login
   ├── Check User table in database
   ├── If DB empty → check ADMIN_EMAIL/ADMIN_PASSWORD from .env
   └── If match → bcrypt.compare(password, hash)
3. JWT token signed with JWT_SECRET, expires in 7 days
4. Token stored in localStorage as 'admin_token'
5. All protected routes send: Authorization: Bearer <token>
6. Middleware verifies token on every protected request
```

---

## 4. Database Schema

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String
  slug      String   @unique    // URL slug OR external URL
  imageUrl  String?
  published Boolean  @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Book {
  id           String   @id @default(cuid())
  title        String
  description  String
  imageUrl     String?
  purchaseLink String?
  published    Boolean  @default(false)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model Subscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
}

model User {
  id          String   @id @default(cuid())
  email       String   @unique
  password    String                       // bcrypt hashed
  name        String?
  role        String   @default("MANAGER") // "ADMIN" or "MANAGER"
  permissions String                       // JSON string array
  createdAt   DateTime @default(now())
}
```

---

## 5. Deployment Pipeline

```
Developer pushes to GitHub (main branch)
           │
           ▼
    Vercel detects push
           │
           ▼
    Build: pnpm build (vite build)
           │
           ├── Frontend: Static HTML/JS/CSS → Vercel CDN
           └── Backend: api/* → Vercel Serverless Functions
           │
           ▼
    Live at dionnetweneboah.com (~2 minutes)
```

### Environment Variables Required in Vercel

```
DATABASE_URL
DATABASE_URL_UNPOOLED
ADMIN_EMAIL
ADMIN_PASSWORD
JWT_SECRET
ZOHO_EMAIL
ZOHO_PASSWORD
BLOB_READ_WRITE_TOKEN
```

---

## 6. File Storage

- **Provider**: Vercel Blob
- **Upload flow**: Admin uploads file → `api/upload.ts` → Vercel Blob → returns `blob.url` → stored in database as `imageUrl`
- **Access**: All blob URLs are public, no auth required to view images
- **Token**: `BLOB_READ_WRITE_TOKEN` must be set in environment

---

## 7. Email System

- **Provider**: Zoho Mail (SMTP)
- **Host**: `smtp.zoho.com`, Port `465` (SSL)
- **From**: `hello@dionnetweneboah.com`
- **Newsletter unsubscribe**: Uses a token-based URL (`/api/unsubscribe?token=...`) that is unique per subscriber email (base64 encoded)
- **Broadcast**: Admin writes subject + body in Newsletter Manager, sends to all active subscribers

---

## 8. Security Considerations

| Concern | Implementation |
|---|---|
| Password storage | bcrypt with salt rounds |
| API authentication | JWT Bearer tokens (7-day expiry) |
| Secrets management | Environment variables only, never in code |
| CORS | Configured in Express middleware |
| .env file | Listed in `.gitignore`, never committed |
| Database | TLS/SSL required, connection via Neon |

> **Note**: If credentials are ever exposed (e.g., accidentally committed to git), immediately rotate: Neon DB password, Vercel Blob token, JWT secret, and Zoho app password.

---

## 9. Known Constraints & Notes

- `bcrypt` requires native build scripts. Run `pnpm approve-builds` after installing dependencies on a new machine.
- Prisma generates client files at build time. If the DB schema changes, run `npx prisma generate` and `npx prisma db push`.
- Vite serves the Express API at `/api/*` in development via a proxy configured in `vite.config.ts`.
- On Windows, stop the dev server before running `npx prisma generate` to avoid file locking errors.
