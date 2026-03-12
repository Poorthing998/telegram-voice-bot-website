import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'How I Built an App Without Coding — After Work, for $20',
  description:
    'I built a Telegram bot, desktop app, and Android keyboard in 30 days with no CS degree. Here\'s how I did it after work, using $20/month in tools.',
  keywords: [
    'build an app without coding',
    'vibe coding',
    'side project app',
    'non-developer build app',
    'indie hacker tools',
    'Claude AI coding',
    'Telegram bot',
    'Android keyboard',
    'desktop app',
    'voice to text',
    'founder story',
    'no CS degree',
    'Google Antigravity',
    'after work',
    'side project',
    'TypeGone',
    'AI tools',
    'weekend project',
  ],
  alternates: { canonical: `${SITE_URL}/blog/how-i-built-an-app-without-coding` },
  openGraph: {
    type: 'article',
    url: `${SITE_URL}/blog/how-i-built-an-app-without-coding`,
    title: 'How I Built an App Without Coding — After Work, for $20',
    description:
      'I built a Telegram bot, desktop app, and Android keyboard in 30 days with no CS degree. Here\'s how I did it after work, using $20/month in tools.',
    siteName: 'TypeGone',
    publishedTime: '2025-03-01T00:00:00.000Z',
    authors: ['Ben'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How I Built an App Without Coding — After Work, for $20',
    description:
      'I built a Telegram bot, desktop app, and Android keyboard in 30 days with no CS degree. Here\'s how I did it after work, using $20/month in tools.',
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How I Built an App Without Coding Experience — After Work, for $20',
  description:
    "I built a Telegram bot, a desktop app, and an Android keyboard in 30 days. No CS degree. No co-founder. No venture money. Just nights, weekends, and $20 a month in tools.",
  url: `${SITE_URL}/blog/how-i-built-an-app-without-coding`,
  datePublished: '2025-03-01T00:00:00.000Z',
  author: {
    '@type': 'Person',
    name: 'Ben',
    jobTitle: 'Strategic Marketing Manager & Founder of TypeGone',
  },
  publisher: {
    '@type': 'Organization',
    name: 'TypeGone',
    url: SITE_URL,
  },
  keywords: 'build an app without coding, vibe coding, side project, indie hacker, TypeGone, Claude AI',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/blog/how-i-built-an-app-without-coding`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I build an app without coding experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, especially for simpler first projects like bots, browser tools, or automation scripts. AI tools like Claude can explain errors, suggest fixes, and guide architecture decisions in plain language. Expect a steep early learning curve, but the barrier is lower than it was two years ago.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build an app as a non-developer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on scope. A Telegram bot can be functional in a weekend. A desktop app with a UI took me roughly three to four weeks of part-time work. An Android keyboard took an additional month of evenings and weekends.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools do non-developers use to build apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Claude Pro ($20/month) for coding guidance, Google Antigravity for free cloud infrastructure, and platform-specific free tools like Android Studio and the Telegram Bot API. The actual cost is low. The investment is time.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is vibe coding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vibe coding is building software using AI assistance without deep programming knowledge. You describe what you want, the AI writes or explains the code, and you iterate based on results. The term has become common in 2024–2025 as AI coding tools have matured.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a non-developer build first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with a Telegram bot or browser extension. They have the lowest environment complexity, the fastest feedback loop, and enough constraints to force clear thinking about what the product actually does.',
      },
    },
  ],
};

export default function HowIBuiltPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'How I Built an App Without Coding', url: '/blog/how-i-built-an-app-without-coding' },
        ])}
      />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-10">
        <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
          <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-text-muted transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-text-muted">How I Built an App Without Coding</span>
        </nav>

        <div className="flex flex-wrap gap-2 mb-6">
          {['Founder Story', 'Vibe Coding', 'Side Project'].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-mint/20 text-mint"
              style={{ background: 'rgba(0,229,160,0.06)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mb-6 leading-[1.1]">
          How I Built an App Without Coding Experience — After Work, for $20
        </h1>

        <p className="text-text-muted text-lg leading-relaxed mb-8">
          I built a Telegram bot, a desktop app, and an Android keyboard in 30 days. No CS degree.
          No co-founder. No venture money. Just nights, weekends, and $20 a month in tools.
        </p>

        <div className="flex items-center gap-4 text-sm text-text-dim pb-10 border-b border-white/[0.06]">
          <span>By <span className="text-text-muted font-medium">Ben</span></span>
          <span>·</span>
          <span>March 2025</span>
          <span>·</span>
          <span>8 min read</span>
        </div>
      </section>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose-tg">

          <p>
            If you&apos;ve ever wondered whether you can build an app without coding knowledge, this
            is the honest version of that story.
          </p>

          <h2>Who I Am (Not a Developer)</h2>

          <p>
            A year ago I started teaching myself to code with zero background in it. My degree is in
            counseling psychology. I work full-time as a Strategic Marketing Manager. I learned
            English on my own. My approach to every new skill has always been the same: start, break
            things, figure it out.
          </p>

          <p>
            I began with Claude, probably version 2.5 or 2.7. I became what people now call a vibe
            coder before anyone was using that term. I was asking an AI to explain code I had never
            seen, building things I didn&apos;t fully understand, and learning as I went. It felt
            natural. It&apos;s how I&apos;ve always learned.
          </p>

          <h2>The First Project I Won&apos;t Name</h2>

          <p>
            Before TypeGone, I spent months building a budgeting web app. I won&apos;t share the
            name because I still love it and I&apos;m not done with it.
          </p>

          <p>
            It got close. Real close. I had signups, real user feedback, iterated the UI until it
            looked clean. Then I ran the numbers and the margins were brutal. It would need serious
            advertising spend and full-time commitment to reach viability. I needed income stability.
            I shelved it, not without some grief, and moved on.
          </p>

          <p>
            That project taught me more about building without coding than any course could have.
            I&apos;m glad I did it. I&apos;m also glad I was honest with myself about what it would
            take.
          </p>

          <h2>How TypeGone Started</h2>

          <p>
            Two months ago I had a specific problem. My thoughts move faster than my hands type.
            I&apos;m a decent typist, but when I&apos;m writing a long AI prompt or working through
            something with real nuance, the friction kills my train of thought.
          </p>

          <p>
            So I built a Telegram bot. Just for myself. It would take a voice message, strip filler
            words, fix grammar, and return structured text: email format, notes, to-do lists. I
            called it TypeGone because typing was, functionally, gone.
          </p>

          <p>
            I showed it to colleagues. One said: make it a desktop app. Another said: build it for
            Android.
          </p>

          <p>
            Both suggestions scared me. As a product manager I&apos;d sat in rooms with CTOs
            explaining that projects like these take six months and a team of three minimum. I decided
            not to listen to that instinct.
          </p>

          <h2>What It Takes to Build an App Without a Developer</h2>

          <p>The total paid cost was $20 a month. Here&apos;s the full stack:</p>

          <ul>
            <li><strong>Claude Pro</strong> — $20/month, used for every coding question, debugging session, and architecture decision</li>
            <li><strong>Google Antigravity</strong> — Google&apos;s free-tier suite of tools and cloud infrastructure that most people don&apos;t realize they already have access to</li>
            <li><strong>Telegram Bot API</strong> — free</li>
            <li><strong>Android Studio</strong> — free</li>
            <li><strong>Google Analytics</strong> — free</li>
            <li><strong>Supabase</strong> — free</li>
            <li><strong>Render</strong> — free</li>
            <li><strong>Vercel</strong> — free</li>
          </ul>

          <p>That&apos;s it. Everything else was time.</p>

          <h2>How I Built It: The Honest Version</h2>

          <p>
            I work full-time. I&apos;m in the last semester of a Master of Arts in counseling
            psychology. I have a life and a body that needs sleep.
          </p>

          <p>
            I built TypeGone on weekends and in the hours after work. Not heroically grinding through
            the night every single day, but consistently. When I had two hours, I used two hours.
            When I had Saturday, I used Saturday.
          </p>

          <p>
            <strong>Telegram bot first.</strong> The most forgiving environment to build in. A
            message in, a message out. No native UI, no device APIs. Just logic. This is where
            I&apos;d recommend anyone start when building an app without coding experience.
          </p>

          <p>
            <strong>Then the desktop app.</strong> I was nervous. But when I sat down and started
            asking Claude the right questions, the complexity dissolved faster than I expected. By
            that point I had enough context from the budgeting app and the Telegram bot that I could
            debug quickly.
          </p>

          <p>
            <strong>Then Android.</strong> This was the one that surprised me most. Everyone had
            told me Android development is painful. The keyboard alone took six hours just to compile
            correctly the first time. I sat there staring at error messages I&apos;d never seen,
            asking Claude to explain each one, fixing, recompiling, failing again. But I shipped it.
            In the same month. It became version 1.3.0. There&apos;s an APK on the website right now.
          </p>

          <h2>One Friday Night Until 3 a.m.</h2>

          <p>
            The website, domain, name, and SEO setup all happened in a single Friday night. I
            registered typegone.com, built the landing page, connected Google Analytics, wrote the
            meta descriptions, and went to sleep around 3.
          </p>

          <p>
            Within 30 days, Google had already indexed the site and was sending organic traffic. Only
            a dozen visitors, but they found it without a single ad or promotion. Google decided the
            page was worth showing. For a site that didn&apos;t exist a month earlier, that was the
            signal I needed.
          </p>

          <h2>Can Anyone Build an App Without Coding Knowledge?</h2>

          <p>I think yes, with caveats.</p>

          <p>
            The tools exist now to make building without a CS degree genuinely possible. Claude can
            explain errors in plain language, help you understand architecture decisions, and debug
            code you don&apos;t fully understand. Google&apos;s free infrastructure removes cost as a
            barrier. The ceiling is higher than most people realize.
          </p>

          <p>What it still requires:</p>

          <ul>
            <li>Patience with repeated failures</li>
            <li>The ability to ask precise questions</li>
            <li>Consistency over time, not heroic sprints</li>
            <li>Some prior exposure to how software works (even from a non-technical PM role)</li>
          </ul>

          <p>
            I&apos;m not writing this to suggest it&apos;s effortless. The six-hour Android compile
            session was real. But it was not insurmountable.
          </p>

          <h2>What I Want You to Take From This</h2>

          <p>
            I spent years believing a product idea required a team, a budget, a technical
            co-founder, and a spreadsheet before you could start.
          </p>

          <p>None of that is true anymore.</p>

          <p>
            The only constraint that actually mattered was hours available per week. Not skill, not
            money, not permission.
          </p>

          <p>
            If you have an idea you&apos;ve been sitting on because you don&apos;t have the technical
            background, the budget, or the time — I&apos;d push back on all three. The tools exist.
            The access is there.
          </p>

          <p>The CTOs weren&apos;t wrong about what things used to take. They just hadn&apos;t updated their priors.</p>

          <h2>Where TypeGone Is Now</h2>

          <p>
            TypeGone is live at{' '}
            <Link href="/" className="text-mint/70 hover:text-mint underline underline-offset-2">
              typegone.com
            </Link>
            . You can try it free on Telegram with no signup — three messages to see if it works for
            you. There&apos;s an Android keyboard and a desktop app. I launched on Product Hunt.
            I&apos;m still building it, still after hours, still in the last semester of a degree,
            still in the same job.
          </p>

          <p>I have no plans to quit anything. I have every plan to keep shipping.</p>

          <p>Try it and see what happens.</p>

        </div>

        {/* FAQ */}
        <ScrollReveal>
          <div className="mt-20 pt-12 border-t border-white/[0.06]">
            <div className="section-line mb-6" />
            <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-10">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-6">
              {[
                {
                  q: 'Can I build an app without coding experience?',
                  a: 'Yes, especially for simpler first projects like bots, browser tools, or automation scripts. AI tools like Claude can explain errors, suggest fixes, and guide architecture decisions in plain language. Expect a steep early learning curve, but the barrier is lower than it was two years ago.',
                },
                {
                  q: 'How long does it take to build an app as a non-developer?',
                  a: 'Depends on scope. A Telegram bot can be functional in a weekend. A desktop app with a UI took me roughly three to four weeks of part-time work. An Android keyboard took an additional month of evenings and weekends.',
                },
                {
                  q: 'What tools do non-developers use to build apps?',
                  a: 'Claude Pro ($20/month) for coding guidance, Google Antigravity for free cloud infrastructure, and platform-specific free tools like Android Studio and the Telegram Bot API. The actual cost is low. The investment is time.',
                },
                {
                  q: 'What is vibe coding?',
                  a: 'Vibe coding is building software using AI assistance without deep programming knowledge. You describe what you want, the AI writes or explains the code, and you iterate based on results. The term has become common in 2024–2025 as AI coding tools have matured.',
                },
                {
                  q: 'What should a non-developer build first?',
                  a: 'Start with a Telegram bot or browser extension. They have the lowest environment complexity, the fastest feedback loop, and enough constraints to force clear thinking about what the product actually does.',
                },
              ].map(({ q, a }) => (
                <div key={q} className="card p-6">
                  <h3 className="font-display font-bold text-base mb-2">{q}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Author bio */}
        <div className="mt-16 pt-10 border-t border-white/[0.06]">
          <p className="text-xs text-text-dim italic leading-relaxed">
            <span className="font-semibold not-italic text-text-muted">Ben</span> is the founder of
            TypeGone, a voice-to-text productivity app available on Telegram, Android, and desktop.
            He is a Strategic Marketing Manager and a master&apos;s student in counseling psychology.
          </p>
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-12 card p-8 text-center">
            <h2 className="font-display font-extrabold text-xl md:text-2xl mb-3 tracking-tight">
              Try TypeGone free — no signup needed
            </h2>
            <p className="text-text-muted text-sm mb-6">
              Three free messages on Telegram. See the formatting for yourself.
            </p>
            <a
              href="https://t.me/easywriteai_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm"
            >
              ▶ Try Free on Telegram
            </a>
          </div>
        </ScrollReveal>
      </article>
    </>
  );
}
