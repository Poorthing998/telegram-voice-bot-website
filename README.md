# TypeGone Website

Next.js 14 landing page for TypeGone — AI-powered voice to text.

## Tech Stack

- **Next.js 14** — App Router, SSR/SSG, Metadata API
- **React 18** — Server Components + Client Components
- **Tailwind CSS** — Custom design system
- **Framer Motion** — Animations (ready for use)
- **next-sitemap** — Auto-generated sitemap + robots.txt
- **TypeScript** — Full type safety

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build & Deploy

```bash
npm run build    # Builds Next.js + generates sitemap
npm start        # Runs production server
```

### Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy (auto-detected as Next.js)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, nav, footer, global SEO)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Design system + component styles
│   ├── voice-to-text/
│   │   └── page.tsx            # /voice-to-text landing page
│   ├── use-cases/
│   │   ├── emails/page.tsx     # /use-cases/emails
│   │   ├── notes/page.tsx      # /use-cases/notes
│   │   └── meeting-notes/page.tsx
│   ├── compare/                # TODO: Comparison page
│   ├── blog/                   # TODO: Blog section
│   └── (legal)/                # TODO: Privacy, Terms
├── components/
│   ├── BackgroundAtmosphere.tsx
│   ├── CTASection.tsx
│   ├── FAQSection.tsx
│   ├── Footer.tsx
│   ├── HeroVisual.tsx
│   ├── JsonLd.tsx
│   ├── Navbar.tsx
│   └── ScrollReveal.tsx
└── lib/
    └── seo.ts                  # SEO utilities, structured data, FAQs
```

## SEO

See `SEO-STRATEGY.md` for the full launch strategy including:
- Technical SEO checklist
- Keyword targets
- Content roadmap
- Link building plan
- First 90 days playbook

## TODO

- [ ] Create OG image (1200x630)
- [ ] Set up Google Search Console
- [ ] Add Google Analytics / Plausible
- [ ] Create /privacy and /terms pages
- [ ] Create /compare page
- [ ] Create /download page
- [ ] Add blog section
- [ ] Language-specific landing pages
