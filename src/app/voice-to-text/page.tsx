import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { TELEGRAM_BOT_URL, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI Voice to Text Converter — Convert Speech to Formatted Text',
  description:
    'Convert your voice to perfectly formatted text with TypeGone. AI-powered speech to text that removes filler words, fixes grammar, and formats output as emails, notes, or summaries. Free to try.',
  keywords: [
    'voice to text',
    'speech to text',
    'voice to text converter',
    'speech to text online',
    'convert voice to text',
    'AI transcription',
    'voice to text AI',
    'best voice to text app',
    'voice to text free',
    'dictation to text',
  ],
  alternates: {
    canonical: 'https://typegone.app/voice-to-text',
  },
};

const faqs = [
  {
    question: 'How accurate is TypeGone\'s voice to text conversion?',
    answer: 'TypeGone uses advanced AI models for transcription, achieving over 95% accuracy across all 9 supported languages. The AI also understands context, so it corrects common misheard words and phrases automatically.',
  },
  {
    question: 'Can I use TypeGone for long voice recordings?',
    answer: 'Yes. The Starter plan supports short recordings, while the Standard plan handles longer messages. The Pro plan ($10/250 messages) supports the longest voice recordings available.',
  },
  {
    question: 'How does TypeGone compare to other voice to text apps?',
    answer: 'Unlike basic transcription tools, TypeGone doesn\'t just convert speech to text — it formats the output intelligently. It removes filler words, fixes grammar, and structures your speech as emails, summaries, notes, or action items. Most voice to text apps only give you raw transcription.',
  },
  {
    question: 'Does voice to text work offline?',
    answer: 'TypeGone requires an internet connection to process your voice through AI models. This enables the highest quality transcription and formatting that offline tools can\'t match.',
  },
  {
    question: 'What file formats does TypeGone output?',
    answer: 'TypeGone outputs clean, formatted text that you can copy and paste anywhere — email clients, document editors, messaging apps, note-taking tools, or any other application.',
  },
];

export default function VoiceToTextPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Voice to Text', url: '/voice-to-text' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-8" style={{ background: 'rgba(0,229,160,0.06)' }}>
            Voice to Text
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            AI Voice to Text<br />
            <span className="text-gradient">That Actually Formats.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-8 leading-relaxed">
            Most voice to text tools give you a wall of raw words. TypeGone gives you polished, structured text — emails, summaries, notes, action items — automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-base">
              Try Free — No Signup
            </a>
            <Link href="/#demo" className="inline-flex items-center gap-2 px-6 py-4 btn-secondary text-base">
              See Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Content — long-form for SEO */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <div className="prose-tg">
            <h2>Why TypeGone Is Different From Other Voice to Text Tools</h2>
            <p>
              Traditional voice to text converters stop at transcription. You speak, they write down your words — filler words, stammers, and all. Then you spend 10 minutes editing what should have been a 30-second task.
            </p>
            <p>
              TypeGone goes further. It understands what you&apos;re <strong>trying to say</strong>, not just what you said. The AI strips out &quot;um,&quot; &quot;uh,&quot; &quot;like,&quot; and other verbal crutches. It fixes grammar. And it formats your speech into the right structure based on context — whether that&apos;s a professional email, a meeting summary, a to-do list, or clean notes.
            </p>

            <h2>How Voice to Text Works with TypeGone</h2>
            <p>
              The process takes three steps and under 30 seconds total:
            </p>
            <ol>
              <li><strong>Speak naturally</strong> — Open TypeGone on Telegram or the desktop app. Hit record and talk. Don&apos;t worry about being perfect. Ramble, change your mind, go off on tangents.</li>
              <li><strong>AI processes your voice</strong> — TypeGone transcribes your speech, identifies the intent (email? note? summary?), removes filler, fixes grammar, and formats everything.</li>
              <li><strong>Copy perfect text</strong> — Get polished, ready-to-use text. Copy it and paste it wherever you need.</li>
            </ol>

            <h2>4 Voice to Text Processing Modes</h2>
            <p>
              Not every situation needs the same level of processing. TypeGone offers four modes:
            </p>
            <ul>
              <li><strong>Direct</strong> — Raw transcription, exactly what you said. Good for dictation where you want precise control.</li>
              <li><strong>Light Clean</strong> — Removes filler words and fixes grammar while keeping your natural voice and phrasing.</li>
              <li><strong>Enhanced</strong> — Full AI formatting. Detects whether you&apos;re writing an email, note, summary, or action list and formats accordingly. This is the most popular mode.</li>
              <li><strong>AI Chat</strong> — Ask questions by voice and get intelligent responses. Like having a voice-powered assistant.</li>
            </ul>

            <h2>Voice to Text in 9 Languages</h2>
            <p>
              TypeGone supports English, Farsi, German, Spanish, French, Russian, Turkish, Arabic, and Chinese. The auto-detect feature identifies your language automatically — just speak and let TypeGone figure it out.
            </p>

            <h2>Voice to Text Speed: 5.3× Faster Than Typing</h2>
            <p>
              The average person types at 45 words per minute. Speaking naturally, you produce up to 240 words per minute. That&apos;s a 5.3× speed advantage. TypeGone lets you capture thoughts at the speed of speech while getting output quality that matches careful, edited typing.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Use case cards */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-8 tracking-tight text-center">
            Popular Voice to Text Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link href="/use-cases/emails" className="card p-8 group">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-mint transition-colors">Voice to Email</h3>
              <p className="text-text-muted text-sm leading-relaxed">Speak your email, get a perfectly formatted, professional message ready to send.</p>
            </Link>
            <Link href="/use-cases/notes" className="card p-8 group">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-mint transition-colors">Voice Notes to Text</h3>
              <p className="text-text-muted text-sm leading-relaxed">Turn rambling voice notes into organized, readable text instantly.</p>
            </Link>
            <Link href="/use-cases/meeting-notes" className="card p-8 group">
              <div className="text-3xl mb-4">🗓️</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-mint transition-colors">Meeting Notes</h3>
              <p className="text-text-muted text-sm leading-relaxed">Record meeting takeaways by voice and get structured action items and summaries.</p>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="mt-24">
        <FAQSection faqs={faqs} title="Voice to Text FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Try voice to text free"
          subtitle="3 messages, no signup. See the difference AI formatting makes."
        />
      </ScrollReveal>
    </>
  );
}
