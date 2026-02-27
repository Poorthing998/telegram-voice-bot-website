import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import JsonLd from '@/components/JsonLd';
import { TELEGRAM_BOT_URL, ANDROID_DOWNLOAD_URL, generateOrganizationSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Start Using TypeGone Free — AI Voice to Text in Seconds',
  description:
    'Turn your voice into polished emails, notes, summaries, and meeting notes with AI. 3 free messages, no signup. Works on Telegram, Android, and desktop.',
  alternates: {
    canonical: 'https://www.typegone.com/start',
  },
  robots: { index: true, follow: true },
};

const benefits = [
  { icon: '⚡', headline: '5× faster than typing', body: 'Average person types 45 wpm. You speak 240 wpm. TypeGone makes both the input and the editing instant.' },
  { icon: '🧹', headline: 'No editing required', body: 'AI removes filler words, fixes grammar, and formats output before you even see the text.' },
  { icon: '📋', headline: 'Formatted, not transcribed', body: 'Speak an email draft — get a real email. Speak meeting notes — get structured bullet points and action items.' },
  { icon: '🌍', headline: '9 languages', body: 'English, Farsi, German, Spanish, French, Russian, Turkish, Arabic, Chinese. Auto-detect included.' },
  { icon: '🔒', headline: 'Zero data stored', body: 'Audio is processed in real time and immediately deleted. No logging, no training on your voice. Ever.' },
  { icon: '📱', headline: 'Works everywhere', body: 'Telegram bot, Android keyboard, Windows/macOS/Linux desktop app. Voice type in any app on any device.' },
];

const outputTypes = [
  { emoji: '📧', label: 'Email', detail: 'Professional, casual, friendly, or formal tone' },
  { emoji: '📋', label: 'Summary', detail: 'Key points extracted automatically' },
  { emoji: '📝', label: 'Notes', detail: 'Structured with headers and bullets' },
  { emoji: '✅', label: 'To-Do List', detail: 'Action items with verbs and priorities' },
  { emoji: '💬', label: 'Message', detail: 'Natural, conversational tone' },
  { emoji: '🤝', label: 'Meeting Notes', detail: 'Decisions, actions, follow-ups' },
];

const plans = [
  { name: 'Free Trial', price: '$0', messages: '3 messages', note: 'No signup needed', highlight: false },
  { name: 'Starter', price: '$3', messages: '100 messages', note: 'All modes & languages', highlight: false },
  { name: 'Standard', price: '$5', messages: '250 messages', note: 'Priority processing', highlight: true },
  { name: 'Pro', price: '$10', messages: '600 messages', note: 'Desktop app + mobile keyboard', highlight: false },
];

const testimonials = [
  { quote: "I write 20+ emails a day. TypeGone cut the time in half. I just speak and it formats them perfectly.", author: "Marketing manager" },
  { quote: "As a non-native English speaker, TypeGone polishes my English while keeping my ideas. Game changer.", author: "Software engineer" },
  { quote: "I use it for meeting notes after every call. Takes 30 seconds, gives me a structured summary with action items.", author: "Product lead" },
];

export default function StartPage() {
  return (
    <>
      <JsonLd data={generateOrganizationSchema()} />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,229,160,0.07) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-20 w-full text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-8" style={{ background: 'rgba(0,229,160,0.06)' }}>
            3 messages free — no credit card, no signup
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl tracking-tight mb-6 leading-[1.03]">
            Stop typing.<br />
            <span className="text-gradient">Start speaking.</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-4 leading-relaxed">
            TypeGone turns your messy voice recordings into polished, professional text — emails, notes, summaries, action items — in seconds.
          </p>
          <p className="text-base text-text-muted/70 mb-12">
            No editing. No cleanup. Just speak and copy.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 btn-primary text-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.829.941z"/></svg>
              Try Free on Telegram
            </a>
            <Link
              href="/mobile"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 btn-secondary text-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
              Android Keyboard
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-text-muted/60">
            <span>✓ No signup required</span>
            <span>✓ Works instantly</span>
            <span>✓ Voice data never stored</span>
            <span>✓ 9 languages</span>
          </div>
        </div>
      </section>

      {/* ═══ DEMO — BEFORE/AFTER ═══ */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 mt-8">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight text-center">
            See the difference
          </h2>
          <p className="text-text-muted text-center mb-10">Same voice message. Two very different results.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-8 border-red-500/20">
              <div className="text-xs font-semibold text-red-400/70 uppercase tracking-widest mb-4">Standard voice typing</div>
              <p className="text-text-muted text-sm leading-relaxed italic">
                &ldquo;Hey uh just wanted to follow up on um you know the proposal we discussed like last week or maybe the week before I think it would be good to uh schedule a call or something to go over the details if that works for you&rdquo;
              </p>
              <div className="mt-4 text-xs text-red-400/60">Raw transcription. Still needs editing.</div>
            </div>
            <div className="card p-8 border-mint/20" style={{ borderColor: 'rgba(0,229,160,0.2)' }}>
              <div className="text-xs font-semibold text-mint uppercase tracking-widest mb-4">TypeGone — Enhanced Mode</div>
              <div className="text-sm leading-relaxed">
                <p className="text-white/90 mb-1">Hi,</p>
                <p className="text-white/90 mb-3">I wanted to follow up on the proposal we discussed recently. Would you be available for a call to go over the details?</p>
                <p className="text-white/90">Looking forward to hearing from you.</p>
              </div>
              <div className="mt-4 text-xs text-mint/60">Ready to send. Zero editing.</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ BENEFITS ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-12 tracking-tight text-center">
            Why 1,000s of people switched to TypeGone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.headline} className="card p-7">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-display font-bold text-base mb-1.5">{b.headline}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ OUTPUT TYPES ═══ */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight text-center">
            Speak it. Get the right format.
          </h2>
          <p className="text-text-muted text-center mb-10 max-w-lg mx-auto">TypeGone detects what you&apos;re trying to write and formats accordingly — or you choose.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {outputTypes.map((o) => (
              <div key={o.label} className="card p-6 text-center">
                <div className="text-3xl mb-2">{o.emoji}</div>
                <div className="font-display font-bold text-base mb-1">{o.label}</div>
                <div className="text-text-muted text-xs">{o.detail}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ TESTIMONIALS ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-12 tracking-tight text-center">
            What users say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.author} className="card p-8">
                <div className="text-mint text-2xl mb-4 font-serif leading-none">&ldquo;</div>
                <p className="text-white/80 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                <div className="text-text-muted text-xs font-medium uppercase tracking-wide">{t.author}</div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ PRICING ═══ */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight text-center">
            Simple pricing
          </h2>
          <p className="text-text-muted text-center mb-10">Start free. Pay only if you love it.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {plans.map((plan) => (
              <div key={plan.name} className={`card p-6 text-center flex flex-col ${plan.highlight ? 'border-mint/30 ring-1 ring-mint/20' : ''}`}>
                {plan.highlight && (
                  <div className="text-mint text-[10px] font-bold uppercase tracking-widest mb-3">Most popular</div>
                )}
                <div className="font-display font-extrabold text-3xl mb-1">{plan.price}</div>
                <div className="font-display font-bold text-sm mb-1">{plan.name}</div>
                <div className="text-mint text-sm font-semibold mb-2">{plan.messages}</div>
                <div className="text-text-muted text-xs flex-1">{plan.note}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted/60 text-xs mt-6">Pay with Telegram Stars or USDT. No recurring charges.</p>
        </section>
      </ScrollReveal>

      {/* ═══ PLATFORMS ═══ */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-24">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight text-center">
            Voice type everywhere
          </h2>
          <p className="text-text-muted text-center mb-10">Three ways to use TypeGone — pick what fits your workflow.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-display font-bold text-lg mb-2">Telegram Bot</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">Send a voice message, get polished text back. Works on every device with Telegram.</p>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 btn-primary text-sm">
                Start on Telegram →
              </a>
            </div>
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="text-4xl mb-4">⌨️</div>
              <h3 className="font-display font-bold text-lg mb-2">Android Keyboard</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">AI voice keyboard for every app on your phone. Gmail, WhatsApp, Instagram — everywhere.</p>
              <a href={ANDROID_DOWNLOAD_URL} className="px-6 py-2.5 btn-secondary text-sm">
                Download APK →
              </a>
            </div>
            <div className="card p-8 text-center flex flex-col items-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="font-display font-bold text-lg mb-2">Desktop App</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">Global keyboard shortcuts. Voice type in any app on Windows, macOS, or Linux.</p>
              <Link href="/download" className="px-6 py-2.5 btn-secondary text-sm">
                Download Desktop →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ FINAL CTA ═══ */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-32 mb-24">
          <div className="relative text-center py-24 overflow-hidden rounded-3xl border border-white/[0.04] bg-gradient-to-b from-mint/[0.04] to-transparent">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/[0.06] rounded-full blur-[140px] pointer-events-none" />
            <div className="relative z-10 px-6">
              <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-5 tracking-tight">
                Ready to stop typing?
              </h2>
              <p className="text-text-muted mb-4 text-lg">3 free messages. No signup. No credit card.</p>
              <p className="text-text-muted/60 text-sm mb-12">Just open Telegram and start speaking.</p>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-12 py-5 btn-primary text-xl font-bold"
              >
                Try TypeGone Free →
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
