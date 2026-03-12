import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Blog — TypeGone',
  description: 'Guides, product updates, and founder stories from the TypeGone team. Learn how to get more done with voice-to-text, vibe coding, and AI productivity tools.',
  keywords: ['TypeGone blog', 'voice to text tips', 'vibe coding', 'build app without coding', 'indie hacker', 'AI productivity', 'side project'],
  alternates: { canonical: 'https://www.typegone.com/blog' },
  openGraph: {
    type: 'website',
    url: 'https://www.typegone.com/blog',
    title: 'Blog — TypeGone',
    description: 'Guides, product updates, and founder stories from the TypeGone team.',
    siteName: 'TypeGone',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — TypeGone',
    description: 'Guides, product updates, and founder stories from the TypeGone team.',
  },
};

const posts = [
  {
    slug: 'how-i-built-an-app-without-coding',
    title: 'How I Built an App Without Coding Experience — After Work, for $20',
    date: 'March 12, 2026',
    readTime: '8 min read',
    description:
      'I built a Telegram bot, a desktop app, and an Android keyboard in 30 days. No CS degree. No co-founder. No venture money. Just nights, weekends, and $20 a month in tools.',
    tags: ['Founder Story', 'Vibe Coding', 'Side Project'],
    image: '/blog/hero-how-i-built.jpg',
    imageAlt: 'Developer coding late at night at a dual-monitor desk',
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }])} />

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-12">
        <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
          <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-muted">Blog</span>
        </nav>

        <div className="section-line mb-6" />
        <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">
          Blog
        </h1>
        <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
          Guides, product updates, and founder stories. Everything we&apos;re learning while building TypeGone.
        </p>
      </section>

      {/* Posts */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group block overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
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

                  <h2 className="font-display font-bold text-lg md:text-xl mb-2 group-hover:text-mint transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-text-dim">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span className="ml-auto text-mint/70 group-hover:text-mint transition-colors font-medium">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
