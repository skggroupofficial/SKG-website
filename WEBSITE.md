# Shri Kuber Group — Website

Production marketing website for **Shri Kuber Group (SKG)**, built on the SKG
design system in this repository. Deployed on **Vercel**.

> The design system (tokens, components, brand board) is documented in
> [`readme.md`](./readme.md). This file covers the production website that
> consumes it.

## Stack

- **Next.js 15** (App Router, React 19) · **TypeScript** (strict)
- **Design system**: the existing `tokens/*.css` + `css/components.css` are
  imported verbatim as the single source of truth; the three brand fonts are
  self-hosted via `next/font/local` (see `app/fonts.ts`).
- **Motion**: Framer Motion (kinetic hero, page interactions), Lenis (calm
  smooth scroll), CSS/IntersectionObserver reveals + count-ups. Everything
  honours `prefers-reduced-motion`.
- **Icons**: `@phosphor-icons/react` (SSR-safe, tree-shaken).
- **SEO/GEO**: Metadata API, JSON-LD (Organization/RealEstateAgent, WebSite,
  Breadcrumb, Project/Hotel, FAQ, Article), `sitemap.ts`, `robots.ts`
  (AI crawlers welcomed), dynamic OG image (`app/opengraph-image.tsx`),
  `public/llms.txt`.
- **Forms**: React Hook Form + Zod; serverless route at `app/api/enquire`
  emails via Resend (graceful no-op fallback when unconfigured) with a
  honeypot + consent gate.
- **Analytics**: Vercel Analytics + Speed Insights.

## Routes

`/` · `/projects` · `/projects/[slug]` · `/approach` · `/hospitality` ·
`/partnerships` · `/journal` · `/journal/[slug]` · `/leadership` · `/contact`
plus `/api/enquire`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, OG image.

## Structure

```
app/            routes, layout, metadata, sitemap/robots/OG, manifest
components/ds/  ported design-system primitives (typed TSX)
components/site/ Container, SectionHeading, Figure, Header, Footer, ProjectCard, EnquiryForm, icons
components/motion/ Reveal, SmoothScroll (Lenis), KineticHeading, CountUp
content/        typed content (brand, projects, journal, divisions, …) — CMS-ready boundary
lib/            seo.ts (metadata), jsonld.ts (structured data), cn.ts
tokens/, css/   design-system CSS (imported verbatim — do not duplicate)
assets/         self-hosted fonts + brand source; public/ holds served assets
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (type-checked)
npm run start    # serve the production build
```

## Environment

All optional — the site runs with none set. See [`.env.example`](./.env.example).

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Enables contact-form email delivery. Without it, enquiries are validated and logged server-side (the form still succeeds). |
| `ENQUIRY_TO` | Enquiry recipient (default `info@shrikubergroup.com`). |
| `ENQUIRY_FROM` | From address (must be a Resend-verified sender). |

## Deploy (Vercel)

Import the repo into Vercel — the framework auto-detects as Next.js. Set the
optional env vars above. `vercel.json` pins the `bom1` (Mumbai) region for an
India-first audience. Set the production domain so canonical/OG URLs resolve
(currently `https://www.shrikubergroup.com` in `content/brand.ts`).

## Content & imagery

Project, journal, leadership and contact content live in typed modules under
`content/`. They are launch content (some details are placeholder) — swap real
values in place. Imagery uses the on-brand `Figure` placeholder (lattice +
monogram + warm grade); drop real photography in via `<Figure src="…" />`.
