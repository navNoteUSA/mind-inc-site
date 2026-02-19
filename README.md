# Mind AI Inc. Website

Minimal, enterprise-style holding company website for **Mind AI Inc.** (`www.mind-inc.io`), positioned as the parent platform behind navNote.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn project conventions (`components/ui`)
- Lucide React icons

## Project Structure

- `app/page.tsx` - Main website content
- `components/ui/responsive-hero-banner.tsx` - Integrated 21st.dev hero component
- `components/demo.tsx` - Hero demo usage example
- `app/globals.css` - Tailwind + theme tokens + motion utilities
- `app/opengraph-image.tsx` - Dynamic OG/Twitter image
- `app/sitemap.ts`, `app/robots.ts` - SEO metadata routes
- `next.config.ts` - Security headers

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Gates

```bash
npm run lint
npm run build
```

## Brand/Content Notes

- Primary domain: `https://www.mind-inc.io`
- Parent platform messaging aligned to navNote positioning
- navNote links currently point to `https://www.navnote.net`

## Deployment

See `DEPLOYMENT.md` for production deployment and DNS steps.
