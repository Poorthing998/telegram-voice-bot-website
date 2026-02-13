# TypeGone SEO Launch Strategy

## What's Already Done (In This Codebase)

### Technical SEO ✅
- **Next.js SSR/SSG** — pages render server-side, fully crawlable by Google
- **Metadata API** — unique `<title>`, `<meta description>`, Open Graph, Twitter cards per page
- **Canonical URLs** — every page has `<link rel="canonical">` preventing duplicate content
- **Structured Data (JSON-LD)** — Organization, SoftwareApplication, HowTo, FAQ, Breadcrumb schemas injected per page
- **Sitemap generation** — `next-sitemap` auto-generates sitemap.xml on build
- **robots.txt** — properly configured
- **Semantic HTML** — proper heading hierarchy (H1 → H2 → H3), semantic elements
- **Font optimization** — Next.js `next/font` loads Google Fonts with zero layout shift
- **Security headers** — X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- **Internal linking** — footer links to all key pages, cross-links between use case pages

### Content Pages ✅
- **Homepage** — targets "voice to text", "speech to text", "AI transcription"
- **/voice-to-text** — primary keyword landing page, long-form content, FAQ
- **/use-cases/emails** — targets "voice to email", "dictate email"
- **/use-cases/notes** — targets "voice notes to text", "voice memo converter"
- **/use-cases/meeting-notes** — targets "AI meeting notes", "meeting summary"
- **FAQ sections** — on homepage and landing pages, generates Google rich results

---

## What You Need To Do (Before Launch)

### 1. Create an OG Image
Generate a 1200×630px image for social sharing. Place it at `/public/og-default.png`.

**Prompt for Midjourney or similar:**
> A sleek dark blue promotional banner for "TypeGone" app. Shows a microphone icon on the left transforming into organized text lines on the right. Electric mint green (#00E5A0) accent color on deep navy (#060B14) background. Text reads "TypeGone — Your voice. Perfected." Clean, minimal, tech-forward. --ar 1200:630 --v 6

### 2. Google Search Console Setup
1. Go to https://search.google.com/search-console
2. Add property: `https://typegone.app`
3. Verify via DNS TXT record (recommended) or HTML meta tag
4. Once verified, submit sitemap: `https://typegone.app/sitemap.xml`
5. Add your verification code to `layout.tsx` → `metadata.verification.google`

### 3. Google Analytics / Plausible
Choose one:
- **Google Analytics 4** — add GA4 tag via `next/script`
- **Plausible** (recommended, privacy-focused) — add script tag

### 4. Domain Configuration
- Point `typegone.app` to Vercel
- Enable HTTPS (auto on Vercel)
- Set up `www` → non-www redirect (or vice versa — pick one and stick with it)
- If migrating from a previous domain, set up 301 redirects

### 5. Create Missing Pages
These pages are referenced in the footer but need content:
- `/privacy` — Privacy Policy (required for app stores and trust)
- `/terms` — Terms of Service
- `/download` — Desktop app download page (when ready)
- `/compare` — Comparison page vs competitors (high-value SEO page)

---

## SEO Strategy: First 90 Days

### Week 1-2: Technical Foundation
- [x] Deploy Next.js site to Vercel
- [ ] Set up Google Search Console + submit sitemap
- [ ] Set up analytics
- [ ] Create OG image
- [ ] Verify all pages render correctly (use Google's URL Inspection tool)
- [ ] Test mobile responsiveness (Google prioritizes mobile-first indexing)
- [ ] Run Lighthouse audit — target 90+ on Performance, Accessibility, SEO

### Week 3-4: Content Expansion
Create these additional landing pages:

| Page | Target Keywords | Priority |
|------|----------------|----------|
| `/compare` | "TypeGone vs Otter", "best voice to text app" | High |
| `/voice-to-text/german` | "Sprache zu Text", "voice to text deutsch" | Medium |
| `/voice-to-text/farsi` | "تبدیل صدا به متن" | Medium |
| `/blog/voice-to-text-guide` | "how to convert voice to text" | High |
| `/blog/why-voice-typing-faster` | "voice typing vs keyboard typing speed" | Medium |

### Week 5-8: Link Building & Authority
- **Product Hunt launch** — high-quality backlink + initial traffic
- **Submit to directories**: AlternativeTo, SaaSHub, Product Hunt, BetaList, There's An AI For That
- **Telegram communities** — share in relevant groups (productivity, AI tools)
- **Create a GitHub repo** — even a landing page repo gets a backlink from github.com
- **Answer questions on Reddit/Quora** — search for "voice to text" questions, provide value + mention TypeGone where relevant (don't spam)

### Month 3+: Content Marketing
- Write 2-4 blog posts per month targeting long-tail keywords
- Create comparison content (TypeGone vs X)
- Build language-specific landing pages for each supported language
- Guest post on productivity/tech blogs

---

## Keyword Research: Primary Targets

### Tier 1 — High Intent (target on main pages)
| Keyword | Monthly Volume | Difficulty | Target Page |
|---------|---------------|------------|-------------|
| voice to text | 110K | High | /voice-to-text |
| speech to text | 90K | High | /voice-to-text |
| voice to text converter | 22K | Medium | /voice-to-text |
| voice typing | 18K | Medium | / |
| dictation app | 8K | Medium | / |

### Tier 2 — Use Case Keywords (target on landing pages)
| Keyword | Monthly Volume | Difficulty | Target Page |
|---------|---------------|------------|-------------|
| voice to email | 1.2K | Low | /use-cases/emails |
| voice memo to text | 2.4K | Low | /use-cases/notes |
| meeting notes AI | 3.6K | Medium | /use-cases/meeting-notes |
| voice note transcription | 1.8K | Low | /use-cases/notes |

### Tier 3 — Long Tail (target in blog posts)
| Keyword | Target Content |
|---------|---------------|
| how to convert voice to text on phone | Blog post |
| best voice to text app 2026 | Comparison page |
| voice to text for non-native speakers | Blog post |
| voice typing speed vs keyboard | Blog post |
| AI that removes filler words | /voice-to-text |

---

## Technical SEO Checklist

- [x] Unique title tags per page (50-60 chars)
- [x] Unique meta descriptions per page (150-160 chars)
- [x] H1 tag on every page (only one per page)
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Alt text on all images (when you add images)
- [x] Canonical URLs set
- [x] Structured data (Organization, Software, FAQ, HowTo, Breadcrumbs)
- [x] Internal linking between pages
- [x] Mobile responsive
- [x] Fast loading (Next.js SSG + font optimization)
- [ ] Core Web Vitals passing (check after deploy)
- [ ] HTTPS enabled
- [ ] No broken links (check with Screaming Frog or similar)
- [ ] Image optimization (use `next/image` with WebP/AVIF)

---

## Rich Results You'll Get

With the structured data already implemented:

1. **FAQ Rich Results** — your FAQ sections will show expandable Q&A directly in Google search results
2. **HowTo Rich Results** — the 3-step process can appear as a step-by-step guide in search
3. **Software App** — pricing and rating info can appear in knowledge panels
4. **Breadcrumbs** — clean navigation trail in search results
5. **Sitelinks** — Google will auto-generate sitelinks from your internal page structure

---

## Quick Wins After Launch

1. **Google Search Console** — set up immediately, submit sitemap
2. **AlternativeTo listing** — free, high-authority backlink
3. **Product Hunt** — schedule a launch, get initial backlinks + traffic
4. **Create the /compare page** — comparison keywords have high purchase intent
5. **Add blog section** — target "how to" and "best" keywords with helpful content
6. **Hreflang tags** — when you create language-specific pages, add hreflang for international SEO

---

## Notes on Domain Authority

TypeGone is a new domain, so it starts with zero authority. This means:

- You won't rank for competitive terms ("voice to text") immediately
- Focus on **long-tail keywords** first ("voice to email converter for professionals")
- Every quality backlink compounds over time
- Consistent content publishing signals freshness to Google
- FAQ rich results can help you appear above even higher-authority competitors

Realistically, expect to see meaningful organic traffic starting around month 3-4 with consistent effort.
