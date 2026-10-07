# Loro Parque Tickets

Database-driven affiliate travel site targeting **"Loro Parque Tickets"** (Puerto de la Cruz, Tenerife).
Next.js 14 App Router · Neon Postgres · Tailwind · Tiptap CMS.

Theme: rainforest teal, parrot coral and papaya orange on a soft sage-ivory base, with Fraunces serif headings.

## Quick start

```bash
npm install
# .env is already configured for this project's own Neon database.
node scripts/setup-db.mjs      # creates tables + seeds starter content (safe to re-run)
npm run dev                    # http://localhost:3000   (admin: /admin)
```

Admin credentials live in `.env` (`ADMIN_EMAIL`, `ADMIN_PASSWORD`). Rotate them before going live.
Never commit `.env`; use `.env.example` as the template.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | This project's Neon database (pooled, server-side only) |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Owner account for `/admin` |
| `ADMIN_SESSION_SECRET` | Signs admin session cookies (**required in production**) |
| `NEXT_PUBLIC_SITE_URL` | Public URL (also set in `lib/site.ts` → `SITE_URL`) |
| `BLOB_STORE_ID`, `BLOB_READ_WRITE_TOKEN` | Vercel Blob for image uploads (create a new store) |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 id; nothing loads when empty |

## Content (all editable in /admin)

Homepage (hero, every section, header nav, footer, theme colours, SEO), Tickets (title, price,
image, booking link), Blog posts (Tiptap), FAQs, About, Contact, Privacy, Indexing, Users.
Ratings/reviews are optional: leave at 0 and no stars or `aggregateRating` appear.

## Production

```bash
npm run build && npm start
```
# loro-parque
