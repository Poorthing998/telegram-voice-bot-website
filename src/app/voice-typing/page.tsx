import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { TELEGRAM_BOT_URL, ANDROID_DOWNLOAD_URL, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Voice Typing App — AI That Formats While You Speak | TypeGone',
  description:
    'Voice typing that goes beyond dictation. TypeGone uses AI to clean up filler words, fix grammar, and format your speech as emails, notes, or summaries — in 9 languages. Try free.',
  keywords: [
    'voice typing',
    'voice typing app',
    'voice typing software',
    'voice typing online',
    'voice typing on desktop',
    'best voice typing app',
    'voice typing AI',
    'voice typing Android',
    'hands-free typing',
    'dictation software',
    'voice to text typing',
    'AI voice typing',
  ],
  alternates: {
    canonical: 'https://www.typegone.com/voice-typing',
  },
};

const faqs = [
  {
    question: 'What is voice typing?',
    answer: 'Voice typing is the practice of using your voice to input text instead of a keyboard. You speak naturally and the software transcribes your words. Modern AI voice typing tools like TypeGone go further — they also clean up filler words, fix grammar, and format your speech into structured text like emails, notes, or summaries.',
  },
  {
    question: 'How is TypeGone different from Google\'s voice typing (Gboard)?',
    answer: 'Google\'s voice typing gives you raw transcription — exactly what you said, filler words and all. TypeGone applies AI on top of transcription: it removes "um," "uh," "like," "you know," fixes grammar, and formats output based on what you\'re trying to write. The result is polished, ready-to-use text, not a wall of unedited words.',
  },
  {
    question: 'Does TypeGone work as a voice typing keyboard on Android?',
    answer: 'Yes. TypeGone Mobile is a custom Android keyboard that replaces your default keyboard system-wide. It works in every app — Gmail, WhatsApp, Instagram, Chrome, and more. Tap the mic, choose an AI mode (Tidy Speech, Write Email, Summarize, Translate), speak, and formatted text is inserted directly into the text field. Download the APK from typegone.com/mobile.',
  },
  {
    question: 'Can I use voice typing on my desktop?',
    answer: 'Yes. The TypeGone desktop app (beta for Windows, macOS, Linux) supports system-wide voice typing with global keyboard shortcuts. Press a hotkey in any application — your email client, Slack, Notion, Google Docs — speak, and formatted text appears at your cursor. No copy-paste required.',
  },
  {
    question: 'How fast is voice typing compared to keyboard typing?',
    answer: 'The average person types at 45 words per minute. Speaking naturally produces up to 240 words per minute — a 5.3× speed advantage. With TypeGone, you also skip the editing step, since the AI formats your words automatically. Most users complete tasks in under 30 seconds that would normally take several minutes.',
  },
  {
    question: 'What languages does TypeGone voice typing support?',
    answer: 'TypeGone supports 9 languages: English, Farsi (Persian), German, Spanish, French, Russian, Turkish, Arabic, and Chinese. There\'s also an auto-detect mode that identifies your spoken language automatically.',
  },
  {
    question: 'Is voice typing private and secure?',
    answer: 'TypeGone operates under a strict zero data retention policy. Your voice recording is processed in real time and immediately deleted — never stored, logged, or used for AI model training. We have zero-retention agreements with all AI providers.',
  },
  {
    question: 'What is the best voice typing app in 2025?',
    answer: 'For raw transcription, Whisper and Google\'s built-in voice typing are solid. For formatted output — emails, summaries, notes, meeting notes — TypeGone is unmatched. It\'s the only voice typing tool that automatically formats your speech into ready-to-use text without any manual editing.',
  },
];

const platforms = [
  {
    icon: '🤖',
    title: 'Telegram Bot',
    desc: 'Send a voice message to the TypeGone bot. Get back a polished email, summary, or note in seconds. Works on any device with Telegram.',
    link: TELEGRAM_BOT_URL,
    cta: 'Try on Telegram',
    external: true,
  },
  {
    icon: '⌨️',
    title: 'Android Keyboard',
    desc: 'Replace your default keyboard with TypeGone. Voice type in any app — Gmail, WhatsApp, Chrome, Notes — system-wide.',
    link: '/mobile',
    cta: 'Get Android App',
    external: false,
  },
  {
    icon: '🖥️',
    title: 'Desktop App',
    desc: 'Global keyboard shortcuts bring voice typing to every app on Windows, macOS, and Linux. Text pastes directly at your cursor.',
    link: '/download',
    cta: 'Download Desktop',
    external: false,
  },
];

const comparisons = [
  { feature: 'Raw transcription', typegone: true, gboard: true, windows: true },
  { feature: 'Filler word removal', typegone: true, gboard: false, windows: false },
  { feature: 'Grammar correction', typegone: true, gboard: false, windows: false },
  { feature: 'Email formatting', typegone: true, gboard: false, windows: false },
  { feature: 'Summary output', typegone: true, gboard: false, windows: false },
  { feature: 'Meeting notes', typegone: true, gboard: false, windows: false },
  { feature: '9 languages', typegone: true, gboard: true, windows: false },
  { feature: 'Desktop + Android + Telegram', typegone: true, gboard: false, windows: false },
  { feature: 'Zero data retention', typegone: true, gboard: false, windows: false },
];

export default function VoiceTypingPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Voice Typing', url: '/voice-typing' },
        ])}
      />
      <JsonLd data={generateFAQSchema(faqs)} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-8" style={{ background: 'rgba(0,229,160,0.06)' }}>
            Voice Typing
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            Voice Typing That<br />
            <span className="text-gradient">Writes for You.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-4 leading-relaxed">
            Most voice typing tools transcribe your rambling and leave the mess for you to fix. TypeGone uses AI to remove filler words, fix grammar, and format your speech — all before you see the text.
          </p>
          <p className="text-lg text-text-muted max-w-2xl mb-8 leading-relaxed">
            Speak naturally. Get polished emails, notes, summaries, and more — automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-base">
              Try Free — No Signup
            </a>
            <Link href="/mobile" className="inline-flex items-center gap-2 px-6 py-4 btn-secondary text-base">
              Android Keyboard ↓
            </Link>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-6 text-sm text-text-muted">
            <span className="flex items-center gap-2"><span className="text-mint font-bold">5.3×</span> faster than typing</span>
            <span className="flex items-center gap-2"><span className="text-mint font-bold">9</span> languages</span>
            <span className="flex items-center gap-2"><span className="text-mint font-bold">3</span> platforms</span>
            <span className="flex items-center gap-2"><span className="text-mint font-bold">0</span> data stored</span>
          </div>
        </div>
      </section>

      {/* The problem */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 mt-8">
          <div className="prose-tg">
            <h2>Why Standard Voice Typing Falls Short</h2>
            <p>
              Google Voice Typing, Windows Speech Recognition, and Apple Dictation all do the same thing: they write down what you said. That&apos;s it.
            </p>
            <p>
              You say: <em>&ldquo;Hey, uh, just wanted to follow up on, like, you know, the project we were talking about last week, I think it would be, um, good to maybe schedule a call or something.&rdquo;</em>
            </p>
            <p>
              Standard voice typing gives you exactly that — every um, uh, and like included. Then you spend the next 5 minutes editing.
            </p>
            <p>
              TypeGone gives you: <em>&ldquo;Hi, I wanted to follow up on the project we discussed last week. Would you be available for a call?&rdquo;</em>
            </p>
            <p>
              That&apos;s the difference between a transcription tool and a voice typing tool built for real work.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* How it works */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight text-center">
            How TypeGone Voice Typing Works
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-xl mx-auto">Three steps. Under 30 seconds. No editing required.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Speak naturally', desc: 'Open TypeGone on Telegram, the Android keyboard, or the desktop app. Just talk. Ramble, change your mind, go off on tangents — the AI handles it.' },
              { step: '02', title: 'AI formats your speech', desc: 'TypeGone strips filler words, corrects grammar, detects your intent (email? notes? summary?), and structures the text accordingly — in 2-3 seconds.' },
              { step: '03', title: 'Copy ready-to-use text', desc: 'Get polished, formatted text. Copy it anywhere — or on desktop, it pastes directly where your cursor is. No editing, no cleanup.' },
            ].map((item) => (
              <div key={item.step} className="card p-8">
                <div className="text-mint font-display font-extrabold text-5xl mb-4 opacity-40">{item.step}</div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Comparison table */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight text-center">
            TypeGone vs Other Voice Typing Tools
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-xl mx-auto">Standard tools transcribe. TypeGone formats.</p>
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-4 text-text-muted font-medium">Feature</th>
                  <th className="p-4 text-center font-display font-bold text-mint">TypeGone</th>
                  <th className="p-4 text-center text-text-muted font-medium">Gboard</th>
                  <th className="p-4 text-center text-text-muted font-medium">Win Dictation</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} className={i < comparisons.length - 1 ? 'border-b border-white/[0.04]' : ''}>
                    <td className="p-4 text-white/80">{row.feature}</td>
                    <td className="p-4 text-center">{row.typegone ? <span className="text-mint font-bold">✓</span> : <span className="text-white/20">—</span>}</td>
                    <td className="p-4 text-center">{row.gboard ? <span className="text-white/50">✓</span> : <span className="text-white/20">—</span>}</td>
                    <td className="p-4 text-center">{row.windows ? <span className="text-white/50">✓</span> : <span className="text-white/20">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* Platforms */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight text-center">
            Voice Typing on Every Platform
          </h2>
          <p className="text-text-muted text-center mb-12 max-w-xl mx-auto">TypeGone works however and wherever you work.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div key={p.title} className="card p-8 flex flex-col">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                {p.external ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 btn-primary text-sm self-start">
                    {p.cta}
                  </a>
                ) : (
                  <Link href={p.link} className="inline-flex items-center gap-2 px-5 py-2.5 btn-secondary text-sm self-start">
                    {p.cta}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Long-form SEO content */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 mt-24">
          <div className="prose-tg">
            <h2>Voice Typing for Professionals</h2>
            <p>
              If you write a lot for work — emails, meeting notes, Slack messages, reports, documentation — voice typing is one of the highest-leverage productivity upgrades you can make. The bottleneck isn&apos;t thinking; it&apos;s the time it takes to get words from your brain to the screen.
            </p>
            <p>
              TypeGone is built specifically for this workflow. Instead of transcribing your stream of consciousness verbatim, it interprets your intent and formats accordingly:
            </p>
            <ul>
              <li><strong>Dictating an email?</strong> TypeGone creates a properly structured message with a greeting, body, and sign-off. Choose tone: professional, casual, friendly, or formal.</li>
              <li><strong>Summarizing a call?</strong> Get a bullet-point summary with key decisions and action items automatically extracted.</li>
              <li><strong>Capturing notes?</strong> TypeGone organizes your rambling into headers and grouped topics.</li>
              <li><strong>Sending a Slack message?</strong> Get a concise, conversational message — not a transcription dump.</li>
            </ul>

            <h2>Voice Typing on Android with TypeGone Keyboard</h2>
            <p>
              The TypeGone Android keyboard is the most capable AI voice typing keyboard available. Unlike Google&apos;s Gboard microphone which just transcribes, TypeGone&apos;s keyboard applies AI modes before inserting text:
            </p>
            <ul>
              <li><strong>Tidy Speech</strong> — Clean up filler words, fix grammar, keep your natural voice intact.</li>
              <li><strong>Write Email</strong> — Format your speech as a professional email, ready to send.</li>
              <li><strong>Summarize</strong> — Condense your speech into a compact summary.</li>
              <li><strong>Translate to EN</strong> — Speak in any language, get English text output.</li>
              <li><strong>AI Prompt</strong> — Structure your speech for optimal use as an AI prompt.</li>
            </ul>
            <p>
              The keyboard works in every app on your Android device. <Link href="/mobile">Download the TypeGone keyboard</Link> to bring AI voice typing to your phone.
            </p>

            <h2>Desktop Voice Typing with Keyboard Shortcuts</h2>
            <p>
              The TypeGone desktop app (beta) turns any application on your computer into a voice typing surface. Set global keyboard shortcuts — like <code>⌘+Shift+V</code> for quick transcribe, <code>⌘+Shift+E</code> for email dictation — and press them anywhere:
            </p>
            <ul>
              <li>In Gmail → speak your reply → press enter to send</li>
              <li>In Slack → speak your message → it appears in the chat box</li>
              <li>In Google Docs → dictate a section → formatted text is inserted</li>
              <li>In any app → set a custom prompt per shortcut for any task</li>
            </ul>
            <p>
              <Link href="/download">Download the TypeGone desktop app</Link> for Windows, macOS, or Linux.
            </p>

            <h2>Voice Typing in 9 Languages</h2>
            <p>
              TypeGone supports voice typing in English, Farsi (Persian), German, Spanish, French, Russian, Turkish, Arabic, and Chinese. Auto-detect mode identifies your language automatically — just speak and TypeGone figures it out. The full interface is localized in all supported languages.
            </p>

            <h2>Privacy and Voice Typing</h2>
            <p>
              Voice typing raises legitimate privacy concerns — your voice contains personal information. TypeGone takes this seriously. All audio is encrypted in transit, processed in real time, and immediately deleted. We operate under a strict <Link href="/data-privacy">zero data retention policy</Link>: no audio stored, no transcriptions logged, no model training on your data.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="mt-24">
        <FAQSection faqs={faqs} title="Voice Typing FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection
          title="Start voice typing for free"
          subtitle="3 messages free. No signup. Speak and see the difference."
        />
      </ScrollReveal>
    </>
  );
}
