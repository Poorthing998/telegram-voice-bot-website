import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Blog — TypeGone',
  description: 'Stories, building logs, and founder notes from TypeGone. How we built a voice-to-text app across Telegram, Android, and desktop — after hours, for $20.',
  keywords: ['TypeGone blog', 'vibe coding', 'build app without coding', 'indie hacker', 'founder story', 'side project'],
  alternates: { canonical: 'https://www.typegone.com/blog' },
  openGraph: {
    type: 'website',
    url: 'https://www.typegone.com/blog',
    title: 'Blog — TypeGone',
    description: 'Stories, building logs, and founder notes from TypeGone.',
    siteName: 'TypeGone',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — TypeGone',
    description: 'Stories, building logs, and founder notes from TypeGone.',
  },
};

const posts = [
  {
    slug: 'how-i-built-an-app-without-coding',
    title: 'How I Built an App Without Coding Experience — After Work, for $20',
    date: 'March 2025',
    readTime: '8 min read',
    description:
      'I built a Telegram bot, a desktop app, and an Android keyboard in 30 days. No CS degree. No co-founder. No venture money. Just nights, weekends, and $20 a month in tools.',
    tags: ['Founder Story', 'Vibe Coding', 'Side Project'],
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }])} />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-16">
        <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
          <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-muted">Blog</span>
        </nav>

        <div className="section-line mb-6" />
        <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
          From the Founder
        </h1>
        <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
          Building in public. Stories, lessons, and honest notes on shipping TypeGone after hours.
        </p>
      </section>

      {/* Posts */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 pb-32">
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-8 group block"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-mint/20 text-mint"
                      style={{ background: 'rgba(0,229,160,0.06)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-display font-bold text-xl md:text-2xl mb-3 group-hover:text-mint transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-text-muted text-sm leading-relaxed mb-5 max-w-2xl">
                  {post.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-text-dim">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                  <span className="ml-auto text-mint/70 group-hover:text-mint transition-colors font-medium">
                    Read the story →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
