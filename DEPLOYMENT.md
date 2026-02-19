# Deployment Guide (www.mind-inc.io)

This project is optimized for Vercel deployment.

## 1) Create/Link Vercel Project

From this repo root:

```bash
npm i -g vercel
vercel login
vercel link
```

When prompted:

- Framework preset: Next.js
- Build command: `next build` (default)
- Output: `.next` (default)

## 2) Deploy

Preview deploy:

```bash
vercel
```

Production deploy:

```bash
vercel --prod
```

## 3) Attach Domain

In Vercel project settings:

1. Add domain: `mind-inc.io`
2. Add domain: `www.mind-inc.io`
3. Set `www.mind-inc.io` as primary
4. Configure redirect from apex (`mind-inc.io`) to `www.mind-inc.io`

## 4) DNS Records

At your DNS provider:

- `A` record for apex `@` -> `76.76.21.21` (Vercel)
- `CNAME` for `www` -> `cname.vercel-dns.com`

Vercel dashboard will confirm valid records.

## 5) SSL + Security

- SSL cert is auto-provisioned by Vercel
- App-level security headers are configured in `next.config.ts`
- Verify HTTPS redirect is active

## 6) Post-Deploy Checks

- `https://www.mind-inc.io` loads successfully
- `https://mind-inc.io` redirects to `https://www.mind-inc.io`
- `https://www.mind-inc.io/robots.txt` exists
- `https://www.mind-inc.io/sitemap.xml` exists
- Social preview pulls OG image correctly
