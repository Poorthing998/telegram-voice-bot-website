import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { TELEGRAM_BOT_URL, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Voice Notes to Text — Convert Voice Memos to Organized Notes',
  description: 'Turn rambling voice notes into clean, organized text. TypeGone transcribes, removes filler, and formats your voice memos into structured notes automatically.',
  keywords: ['voice notes to text', 'voice memo to text', 'convert voice note', 'transcribe voice notes', 'voice note converter', 'voice memo transcription'],
  alternates: { canonical: 'https://typegone.app/use-cases/notes' },
};

export default function VoiceNotesPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Use Cases', url: '/use-cases/notes' },
        { name: 'Voice Notes', url: '/use-cases/notes' },
      ])} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <Link href="/voice-to-text" className="hover:text-text-muted transition-colors">Voice to Text</Link>
            <span>/</span>
            <span className="text-text-muted">Voice Notes</span>
          </nav>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            Voice Notes to Text.<br />
            <span className="text-gradient">Organized Instantly.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-8 leading-relaxed">
            Your brain dumps ideas faster than your fingers can type. Capture thoughts by voice and let TypeGone turn them into clean, organized notes you can actually use.
          </p>

          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-base">
            Try Free — No Signup
          </a>
        </div>
      </section>

      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <div className="prose-tg">
            <h2>The Problem with Voice Notes</h2>
            <p>
              Voice notes are great for capturing ideas in the moment. But going back to listen to a 3-minute ramble to find that one important point? Painful. Most voice notes end up forgotten because they&apos;re too inconvenient to process later.
            </p>

            <h2>TypeGone Fixes This</h2>
            <p>
              Record your voice note through TypeGone instead. In seconds, you get a formatted text version — organized, de-cluttered, and easy to scan. Key points extracted, filler removed, grammar fixed. Your stream of consciousness becomes actionable notes.
            </p>

            <h2>Common Use Cases</h2>
            <ul>
              <li><strong>Idea capture</strong> — Record brainstorms on the go, get organized bullet points</li>
              <li><strong>Journal entries</strong> — Speak your thoughts, get clean paragraphs</li>
              <li><strong>Research notes</strong> — Dictate observations, get structured summaries</li>
              <li><strong>Task lists</strong> — Ramble about what you need to do, get a clean to-do list</li>
              <li><strong>Content drafts</strong> — Speak your blog post or article outline, get a formatted draft</li>
            </ul>

            <h2>Why TypeGone Over Regular Transcription</h2>
            <p>
              A regular transcription tool gives you every &quot;um,&quot; &quot;uh,&quot; and false start. TypeGone&apos;s Enhanced mode understands you&apos;re taking notes and formats accordingly — with bullet points, paragraphs, or numbered lists depending on the content. The output is ready to paste into Notion, Google Docs, or any other tool.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <CTASection title="Your notes, organized" subtitle="Speak freely. Get structured notes in seconds." />
      </ScrollReveal>
    </>
  );
}
