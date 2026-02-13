# TypeGone SEO Launch Strategy

## Current Site Map (10 pages)

| URL | Target Keywords | Priority |
|---|---|---|
| `/` | "voice to text", "AI transcription", "TypeGone" | 1.0 |
| `/voice-to-text` | "voice to text converter", "speech to text online" | 0.9 |
| `/compare` | "best voice to text app 2026", "otter.ai alternative" | 0.9 |
| `/download` | "voice to text desktop app", "dictation app Mac" | 0.9 |
| `/use-cases/emails` | "voice to email", "dictate email" | 0.8 |
| `/use-cases/notes` | "voice notes to text", "voice memo to text" | 0.8 |
| `/use-cases/meeting-notes` | "meeting notes AI", "voice meeting summary" | 0.8 |
| `/data-privacy` | "secure voice to text", "private speech to text" | 0.7 |
| `/privacy` | Privacy policy (legal) | 0.7 |
| `/terms` | Terms of service (legal) | 0.7 |

## Structured Data (JSON-LD) on Every Page

- **Organization schema** — global (layout.tsx)
- **SoftwareApplication schema** — global (layout.tsx)
- **HowTo schema** — homepage
- **FAQ schema** — homepage, voice-to-text, data-privacy, download, compare, all use-cases
- **Breadcrumb schema** — all subpages

## Pre-Launch Checklist

1. [ ] Create OG image (1200×630px) — save as `/public/og-default.png`
2. [ ] Set up Google Search Console + submit sitemap
3. [ ] Add analytics (GA4 or Plausible) — add to layout.tsx
4. [ ] Configure domain (HTTPS enforced, www → non-www redirect)
5. [ ] Lighthouse audit — target 90+ on all metrics
6. [ ] Rich Results Test — validate FAQ + HowTo schemas at search.google.com/test/rich-results

## First 90 Days

### Week 1-2: Technical Foundation
- Google Search Console verified + sitemap submitted
- Analytics installed
- OG image created with Midjourney/Canva
- Lighthouse 90+ on Performance, Accessibility, SEO

### Week 3-4: Content Expansion
- Language-specific pages: `/voice-to-text/german`, `/voice-to-text/farsi`
- First 2 blog posts:
  - "How to Convert Voice to Text in 2026" (target: "how to convert voice to text")
  - "Why Voice Typing is 5× Faster Than Keyboard" (target: "voice typing vs keyboard")

### Week 5-8: Link Building
- Submit to: AlternativeTo, Product Hunt, SaaSHub, BetaList, There's An AI For That
- Share on Reddit: r/productivity, r/VoiceRecognition, r/telegram
- Quora answers on voice-to-text topics
- GitHub: Open-source a utility or publish TypeGone's API docs

### Month 3+: Content Marketing
- 2-4 blog posts per month targeting long-tail keywords
- Guest posts on productivity/tech blogs
- Build comparison pages for specific competitors

## Internal Linking Strategy

Every page links to at least 2-3 other pages:
- Homepage → voice-to-text, use-cases, data-privacy, download, compare
- Voice-to-text → use-cases, download, compare, data-privacy
- Use cases → voice-to-text, other use cases, data-privacy
- Compare → voice-to-text, download
- Download → voice-to-text, compare
- Data privacy → privacy policy

## Expected Rich Results

1. **FAQ dropdowns** — homepage, voice-to-text, compare, download, data-privacy, all use cases
2. **HowTo steps** — homepage
3. **Software application** — knowledge panel with pricing
4. **Breadcrumbs** — all subpages
5. **Sitelinks** — auto-generated after indexing

## Deployment

```bash
# Build and verify
npm run build
npx next-sitemap

# Deploy to Vercel
git push origin main
# Vercel auto-deploys on push
```
