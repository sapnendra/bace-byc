# IYF Bhopal / BACE Platform

Production-grade Next.js application for IYF Bhopal and BACE (Bhaktivedanta Academic and Cultural Education), covering public storytelling pages, multi-location BACE pages, donation and registration flows, and admin management panels.

## Overview

This project includes:

- Public marketing and informational pages
- Multi-location BACE pages (shared template-driven architecture)
- Dedicated Srila Prabhupada biography and legacy page
- Alumni listing and protected alumni details flow
- Donation workflow with receipt generation and leaderboard
- Review and registration workflows
- Admin dashboard and operational pages
- API routes for auth, admissions, alumni, gallery, donations, and reviews

## Tech Stack

- Framework: Next.js 16.1.2 (App Router)
- Runtime: React 19
- Language: TypeScript
- Styling: Tailwind CSS (custom design tokens)
- Animations: Framer Motion, GSAP
- Smooth Scrolling: Lenis
- Database: MongoDB + Mongoose
- Auth: NextAuth
- Validation: Zod
- Charts: Recharts
- Media: Cloudinary

## Current Route Map

### Public Pages

- `/`
- `/about`
- `/admissions`
- `/bace-life`
- `/barsana-bace`
- `/bhaktivedanta-bace`
- `/contact`
- `/donation`
- `/events-courses`
- `/gallery`
- `/iskcon-girls-forum`
- `/iskcon-kids-forum`
- `/iskcon-youth-forum`
- `/jp-bace`
- `/our-alumani`
- `/our-alumani/registration`
- `/parents-view`
- `/prabhupada`
- `/reviews`
- `/saket-dham-bace`
- `/seminars`
- `/testimonials`
- `/vrindavan-bace`

### Admin Pages

- `/admin`
- `/admin/login`
- `/admin/dashboard`
- `/admin/alumni`
- `/admin/donations`
- `/admin/gallery`
- `/admin/registrations`
- `/admin/reviews`

### API Endpoints

- `/api/auth/[...nextauth]`
- `/api/register`
- `/api/reviews`
- `/api/gallery`
- `/api/donation`
- `/api/donation/[id]`
- `/api/donation/leaderboard`
- `/api/alumni`
- `/api/alumni/register`
- `/api/alumni/upload-image`
- `/api/alumni/verify-password`
- `/api/admin/alumni`
- `/api/admin/gallery`
- `/api/admin/gallery/[id]`
- `/api/admin/seed`

## BACE Locations (Implemented)

The following location pages are live and use a shared template component:

- Jagannath Puri BACE: `/jp-bace`
- Vrindavan BACE: `/vrindavan-bace`
- Bhaktivedanta BACE: `/bhaktivedanta-bace`
- Barsana BACE: `/barsana-bace`
- Saket Dham BACE: `/saket-dham-bace`

Shared template:

- `src/components/bace-location/BaceLocationPage.tsx`

This template keeps structure, styling, and responsiveness consistent across all location pages.

## Prabhupada Biography Page

Dedicated storytelling route:

- `/prabhupada`

Includes:

- Hero impact introduction
- Biography narrative block
- Journey-to-the-West highlight
- Vertical timeline milestones
- Teachings grid
- Books and contribution section
- Legacy section
- Quote section
- ISKCON Bhopal mission bridge section

## Project Structure

```text
src/
├── app/
│   ├── (public)/                # Public route group
│   │   ├── layout.tsx           # Public layout with shared SEO metadata
│   │   ├── page.tsx             # Homepage
│   │   ├── prabhupada/
│   │   │   ├── layout.tsx       # Page-specific SEO metadata
│   │   │   └── page.tsx
│   │   └── ...other public pages
│   ├── admin/                   # Admin pages
│   ├── api/                     # API routes
│   └── layout.tsx               # Root layout (fonts and global CSS)
├── components/
│   ├── bace-location/           # Shared BACE location template
│   ├── jp-bace/                 # Reusable hero/about/contact pieces
│   ├── forms/                   # Admissions, donation, review, alumni forms
│   ├── layout/                  # Header and footer
│   ├── home/                    # Homepage sections
│   ├── admin/                   # Admin UI blocks
│   └── ui/                      # Core reusable UI (Button, Container, etc.)
├── lib/
│   ├── mongodb.ts
│   ├── cloudinary.ts
│   ├── rbac.ts
│   ├── validations/
│   └── utils/
├── models/                      # Mongoose models
├── styles/
└── types/
```

## Design System

Design tokens are defined in `tailwind.config.ts`.

Core token families:

- Saffron
- Beige
- Forest
- Charcoal
- Gold

Typography:

- Serif: Playfair Display
- Sans: Inter

Contributor rules:

- Use Tailwind theme tokens and existing component patterns
- Avoid introducing ad hoc colors, fonts, and disconnected visual styles

## SEO Setup

- Root metadata in `src/app/layout.tsx`
- Public group metadata in `src/app/(public)/layout.tsx`
- Route-specific metadata where needed (example: `src/app/(public)/prabhupada/layout.tsx`)

## Responsiveness

The codebase uses mobile-first Tailwind patterns with iterative responsive hardening across public pages.

When adding pages:

- Prefer scale classes (`h-72`, `sm:h-96`) over rigid large pixel utilities
- Reuse existing `Container` and section spacing conventions
- Test at `sm`, `md`, `lg`, and desktop breakpoints before merge

## Environment Variables

Copy `.env.local.example` to `.env.local`:

```bash
cp .env.local.example .env.local
```

Required values:

- `MONGODB_URI`
- `NEXT_PUBLIC_APP_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Development admin seed credentials are configurable via:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `ADMIN_NAME`

## Scripts

```bash
npm run dev     # Start local development server
npm run build   # Production build
npm run start   # Run production server
npm run lint    # Lint checks
npm run prod    # Build + start
```

## Local Setup

1. Install dependencies

```bash
npm install
```

2. Configure environment

```bash
cp .env.local.example .env.local
```

3. Start the development server

```bash
npm run dev
```

4. Open in browser

- `http://localhost:3000`

## Build and Deployment

Recommended platform: Vercel.

Deployment checklist:

- Set all environment variables
- Run `npm run build` successfully
- Verify critical routes: homepage, BACE pages, prabhupada page, donation, admissions, admin login

## Notes

- Naming in some existing routes/components follows legacy conventions (for example, `our-alumani`). Keep compatibility unless doing coordinated route refactors.
- Header navigation may include entries for future pages; ensure links are backed by routes before production release.

---

Built for IYF Bhopal and BACE: spiritual growth, disciplined living, and value-based youth transformation.
