import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema, generateFAQSchema, TELEGRAM_BOT_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'TypeGone vs Otter, Whisper, Google & More — Voice to Text Comparison 2026',
  description: 'Compare TypeGone to Otter.ai, Whisper, Google Speech-to-Text, Apple Dictation, and other voice to text apps. See why TypeGone\'s AI formatting, filler removal, and instant output types set it apart.',
  keywords: ['best voice to text app 2026', 'otter.ai alternative', 'voice to text comparison', 'AI transcription comparison', 'whisper alternative', 'TypeGone vs Otter', 'speech to text app comparison'],
  alternates: { canonical: 'https://www.typegone.com/compare' },
};

const COMPARE_FAQS = [
  { question: 'What makes TypeGone different from Otter.ai?', answer: 'Otter.ai is a meeting transcription tool designed for real-time recording of live conversations. TypeGone is a voice-to-text formatting tool: you speak a voice message, and the AI turns it into polished emails, notes, to-do lists, summaries, or meeting notes. TypeGone removes filler words, fixes grammar, and structures the output — Otter gives you a raw transcript.' },
  { question: 'How is TypeGone different from OpenAI Whisper?', answer: 'Whisper is a speech recognition model that produces raw transcripts. TypeGone uses Whisper (and other models) as part of its pipeline, but adds AI-powered formatting: filler removal, grammar correction, and automatic structuring into 7 output formats. Whisper gives you words; TypeGone gives you usable text.' },
  { question: 'Is TypeGone better than built-in dictation (Apple, Google, Windows)?', answer: 'Built-in dictation tools transcribe word-for-word with no formatting. TypeGone adds intelligent processing: it removes filler words, fixes grammar, and can format your speech into emails, summaries, notes, and more. It also supports 9 languages with auto-detect and works across platforms.' },
  { question: 'Can TypeGone replace my transcription service?', answer: 'TypeGone is optimized for short-to-medium voice messages (up to several minutes). For long-form transcription of hour-long meetings or interviews, dedicated services like Otter or Rev may be better suited. TypeGone excels at turning quick voice inputs into formatted, usable text.' },
  { question: 'What is the best voice to text app in 2026?', answer: 'It depends on your use case. For turning voice messages into formatted text (emails, notes, to-dos), TypeGone is purpose-built for this. For live meeting transcription, Otter.ai is strong. For raw speech recognition, Whisper is excellent. For basic dictation, your OS has built-in tools. TypeGone is the best choice when you want your voice to become ready-to-use text, not just a transcript.' },
];

const competitors = [
  {
    name: 'TypeGone',
    highlight: true,
    features: {
      'AI formatting (emails, notes, to-dos)': true,
      'Filler word removal': true,
      'Grammar correction': true,
      '7 output types': true,
      '4 processing modes': true,
      '9 languages + auto-detect': true,
      'Desktop app with global shortcuts': true,
      'Telegram integration': true,
      'Reformat after transcription': true,
      'Zero data retention': true,
      'Free tier': '3 msgs',
      'Starting price': '$3 / 100 msgs',
    },
  },
  {
    name: 'Otter.ai',
    features: {
      'AI formatting (emails, notes, to-dos)': false,
      'Filler word removal': false,
      'Grammar correction': false,
      '7 output types': false,
      '4 processing modes': false,
      '9 languages + auto-detect': false,
      'Desktop app with global shortcuts': false,
      'Telegram integration': false,
      'Reformat after transcription': false,
      'Zero data retention': false,
      'Free tier': '300 min/mo',
      'Starting price': '$16.99/mo',
    },
  },
  {
    name: 'Whisper (OpenAI)',
    features: {
      'AI formatting (emails, notes, to-dos)': false,
      'Filler word removal': false,
      'Grammar correction': false,
      '7 output types': false,
      '4 processing modes': false,
      '9 languages + auto-detect': true,
      'Desktop app with global shortcuts': false,
      'Telegram integration': false,
      'Reformat after transcription': false,
      'Zero data retention': 'Varies',
      'Free tier': 'Open source',
      'Starting price': 'Free / API cost',
    },
  },
  {
    name: 'Built-in Dictation',
    subtitle: 'Apple / Google / Windows',
    features: {
      'AI formatting (emails, notes, to-dos)': false,
      'Filler word removal': false,
      'Grammar correction': false,
      '7 output types': false,
      '4 processing modes': false,
      '9 languages + auto-detect': 'Partial',
      'Desktop app with global shortcuts': 'Partial',
      'Telegram integration': false,
      'Reformat after transcription': false,
      'Zero data retention': 'Varies',
      'Free tier': 'Free',
      'Starting price': 'Free',
    },
  },
];

const featureKeys = Object.keys(competitors[0].features);

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <span className="text-mint font-bold">✓</span>;
  if (value === false) return <span className="text-text-dim/40">✗</span>;
  return <span className="text-text-dim text-xs">{value}</span>;
}

export default function ComparePage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Compare', url: '/compare' }])} />
      <JsonLd data={generateFAQSchema(COMPARE_FAQS)} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-8">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-muted">Compare</span>
          </nav>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            TypeGone vs.<br />
            <span className="text-gradient">Everything else.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
            Most voice-to-text tools give you a raw transcript. TypeGone gives you a polished email, structured notes, or a to-do list. Here&apos;s how it compares.
          </p>
        </div>
      </section>

      {/* Key Differentiator */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-mint/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <div className="section-line mb-6" />
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-4 tracking-tight">The core difference</h2>
              <p className="text-text-muted leading-relaxed max-w-2xl">
                Traditional voice-to-text tools are <strong className="text-text-primary">transcription tools</strong> — they turn speech into words. TypeGone is a <strong className="text-mint">voice formatting tool</strong> — it turns speech into ready-to-use text. Emails with greetings and sign-offs. Notes with headers and structure. To-do lists with action verbs. Meeting summaries with decisions and action items. The difference between getting a transcript and getting something you can actually send.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Comparison Table */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight">Feature comparison</h2>
          </div>

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 text-xs text-text-dim font-normal w-[220px]">Feature</th>
                  {competitors.map((c) => (
                    <th key={c.name} className={`text-center py-4 px-3 ${c.highlight ? 'bg-mint/[0.04] rounded-t-2xl' : ''}`}>
                      <div className={`font-display font-bold text-sm ${c.highlight ? 'text-mint' : 'text-text-muted'}`}>{c.name}</div>
                      {c.subtitle && <div className="text-[10px] text-text-dim mt-0.5">{c.subtitle}</div>}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureKeys.map((key, i) => (
                  <tr key={key} className={i < featureKeys.length - 1 ? 'border-b border-white/[0.03]' : ''}>
                    <td className="py-3 px-4 text-xs text-text-muted">{key}</td>
                    {competitors.map((c) => (
                      <td key={`${c.name}-${key}`} className={`text-center py-3 px-3 ${c.highlight ? 'bg-mint/[0.04]' : ''} ${c.highlight && i === featureKeys.length - 1 ? 'rounded-b-2xl' : ''}`}>
                        <CellValue value={c.features[key as keyof typeof c.features]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* Individual Comparisons */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight">Detailed comparisons</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8">
              <h3 className="font-display font-bold text-lg mb-4">TypeGone vs. Otter.ai</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Otter.ai is built for live meeting recording and long-form transcription. It excels at capturing hour-long meetings with speaker identification. TypeGone is built for the opposite use case: short voice inputs that need to become <em>formatted</em> text. Where Otter gives you a raw transcript of a meeting, TypeGone gives you a polished email, a structured to-do list, or meeting notes with action items — from a 30-second voice message.
              </p>
              <p className="text-text-dim text-xs">Best for: People who want formatted output, not raw transcripts.</p>
            </div>

            <div className="card p-8">
              <h3 className="font-display font-bold text-lg mb-4">TypeGone vs. OpenAI Whisper</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Whisper is a state-of-the-art speech recognition model — and it&apos;s part of TypeGone&apos;s pipeline. But Whisper alone gives you raw text with every &quot;um,&quot; &quot;uh,&quot; and false start intact. TypeGone adds a full AI formatting layer on top: filler removal, grammar correction, and intelligent structuring into emails, notes, summaries, to-do lists, messages, and meeting notes.
              </p>
              <p className="text-text-dim text-xs">Best for: People who want usable text, not raw speech output.</p>
            </div>

            <div className="card p-8">
              <h3 className="font-display font-bold text-lg mb-4">TypeGone vs. Built-in Dictation</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Apple Dictation, Google Voice Typing, and Windows Speech Recognition are word-for-word transcription tools. They don&apos;t format, don&apos;t remove fillers, and don&apos;t structure output. TypeGone takes your messy spoken input and turns it into something you can actually send — with proper formatting, grammar, and structure.
              </p>
              <p className="text-text-dim text-xs">Best for: People who want to speak like a human and send like a professional.</p>
            </div>

            <div className="card p-8">
              <h3 className="font-display font-bold text-lg mb-4">TypeGone vs. Typeless</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Typeless focuses on desktop-first dictation with context-aware transcription baked into your OS. TypeGone takes a platform-flexible approach: it works on Telegram today (no installation, instant access) with a desktop app in beta. TypeGone&apos;s strength is its 7 AI output formats and the ability to reformat any transcription after the fact.
              </p>
              <p className="text-text-dim text-xs">Best for: People who want Telegram-first access with flexible AI formatting.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <div className="card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-mint/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3">Try it yourself. 3 free messages.</h2>
              <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">No signup. No credit card. Open TypeGone on Telegram, send a voice message, and see the difference.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-primary text-sm">
                  Try Free on Telegram
                </a>
                <Link href="/download" className="inline-flex items-center justify-center gap-2 px-6 py-3 btn-secondary text-sm">
                  Download Desktop Beta
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="mt-24">
        <FAQSection faqs={COMPARE_FAQS} title="Comparison FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </>
  );
}
