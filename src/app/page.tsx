import { Metadata } from 'next';
import HeroVisual from '@/components/HeroVisual';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import {
  TELEGRAM_BOT_URL,
  COMMON_FAQS,
  generateHowToSchema,
  generateFAQSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'TypeGone — AI Voice to Text | Speak Messy, Get Perfect Text',
  description:
    'TypeGone converts your messy voice recordings into polished, formatted text in seconds. AI-powered voice to text with smart formatting, filler word removal, and 9 language support. Try free on Telegram.',
  keywords: [
    'voice to text',
    'speech to text',
    'AI voice transcription',
    'voice typing',
    'dictation app',
    'convert voice to text online',
    'voice to email',
    'voice notes to text',
    'filler word remover',
    'speech to text app',
  ],
  alternates: {
    canonical: 'https://typegone.app',
  },
};

// ═══════════════════════════════════════
// SECTION DATA
// ═══════════════════════════════════════

const features = [
  { icon: '📋', title: 'Smart Formatting', desc: 'Auto-detects emails, summaries, notes, action items. Formats to match.', color: '#00E5A0' },
  { icon: '🧹', title: 'Kills Filler Words', desc: 'Strips "um", "uh", "like", stutters. You sound more articulate than you are.', color: '#FF6B6B' },
  { icon: '⚡', title: '2-Second Processing', desc: 'By the time you switch windows, it\'s done. Faster than you can alt-tab.', color: '#00D4FF' },
  { icon: '🧠', title: '4 Processing Modes', desc: 'Raw transcription, light cleanup, full formatting, or AI chat. Your call.', color: '#8B6DFF' },
  { icon: '🌍', title: '9 Languages', desc: 'English, Farsi, German, Spanish, French, Russian, Turkish, Arabic, Chinese. Auto-detect included.', color: '#FFB800' },
  { icon: '🔒', title: 'Private by Default', desc: 'Audio processed and deleted instantly. We don\'t store or train on your voice data.', color: '#00E5A0' },
];

const modes = [
  { emoji: '📝', name: 'Direct', desc: 'Raw transcription. Exactly what you said, word for word.', popular: false },
  { emoji: '✨', name: 'Light Clean', desc: 'Remove filler, fix grammar. Keep your natural voice.', popular: false },
  { emoji: '🎯', name: 'Enhanced', desc: 'Full formatting: emails, notes, summaries, action lists.', popular: true },
  { emoji: '💬', name: 'AI Chat', desc: 'Ask questions by voice. Get intelligent answers back.', popular: false },
];

const languages = [
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇮🇷', name: 'فارسی' },
  { flag: '🇩🇪', name: 'Deutsch' },
  { flag: '🇪🇸', name: 'Español' },
  { flag: '🇫🇷', name: 'Français' },
  { flag: '🇷🇺', name: 'Русский' },
  { flag: '🇹🇷', name: 'Türkçe' },
  { flag: '🇸🇦', name: 'العربية' },
  { flag: '🇨🇳', name: '中文' },
];

// ═══════════════════════════════════════
// PAGE
// ═══════════════════════════════════════

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={generateHowToSchema()} />
      <JsonLd data={generateFAQSchema(COMMON_FAQS)} />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG effects */}
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div
          className="absolute bottom-[-5%] left-[-10%] w-[120%] h-[55%] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #00E5A0 0%, #00B880 50%, #008F60 100%)',
            transform: 'skewY(-6deg)',
            transformOrigin: 'top left',
            opacity: 0.08,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* LEFT — Copy */}
            <div className="flex flex-col items-start">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-10 opacity-0 animate-fade-up"
                style={{ background: 'rgba(0,229,160,0.06)', animationDelay: '0.1s' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                </span>
                Desktop app now in beta
              </div>

              {/* H1 — critical for SEO */}
              <h1
                className="font-display font-extrabold tracking-tight mb-8 opacity-0 animate-fade-up"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.02, animationDelay: '0.2s' }}
              >
                <span className="block">Typing is</span>
                <span className="block">
                  <span className="line-through decoration-[3px] decoration-coral/60" style={{ textDecorationSkipInk: 'none' }}>
                    dead
                  </span>
                  <span className="text-gradient">.</span>
                </span>
              </h1>

              {/* Subheadline with target keywords */}
              <p
                className="text-xl md:text-2xl text-text-muted max-w-xl mb-4 leading-relaxed font-light opacity-0 animate-fade-up"
                style={{ animationDelay: '0.4s' }}
              >
                AI voice to text that actually works.
              </p>
              <p
                className="text-base text-text-dim max-w-lg mb-12 leading-relaxed opacity-0 animate-fade-up"
                style={{ animationDelay: '0.5s' }}
              >
                TypeGone captures your chaotic voice, strips the filler, nails the structure, and delivers polished text in seconds.
                Emails, notes, summaries — done before you finish the thought.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.6s' }}
              >
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-base"
                >
                  Try Free on Telegram
                </a>
                <a href="#demo" className="inline-flex items-center gap-2 px-6 py-4 btn-secondary text-base">
                  ▶ See it work
                </a>
              </div>

              {/* Trust */}
              <div
                className="flex items-center gap-5 text-xs text-text-dim opacity-0 animate-fade-up"
                style={{ animationDelay: '0.7s' }}
              >
                <span className="flex items-center gap-1.5">✅ No signup needed</span>
                <span className="flex items-center gap-1.5">✅ 3 free messages</span>
                <span className="hidden sm:flex items-center gap-1.5">✅ 9 languages</span>
              </div>
            </div>

            {/* RIGHT — Visual */}
            <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DEMO ═══ */}
      <ScrollReveal>
        <section id="demo" className="max-w-6xl mx-auto px-6 mt-12">
          <div className="text-center mb-14">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">
              See the magic
            </h2>
            <p className="text-text-dim text-base max-w-md mx-auto">
              Your messy voice goes in. Polished, formatted text comes out.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.06] overflow-hidden bg-gradient-to-b from-surface to-base-light">
            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              {/* Center arrow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-[14px] bg-gradient-to-br from-mint to-cyan shadow-[0_0_30px_rgba(0,229,160,0.3)]">
                <span className="text-base font-bold">→</span>
              </div>

              {/* Input */}
              <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/[0.04]">
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-2.5 h-2.5 rounded-full bg-coral/70" />
                  <span className="font-mono text-[11px] text-coral/60 uppercase tracking-[0.2em] font-medium">
                    Voice Input
                  </span>
                </div>
                <p className="text-text-muted leading-[2] text-[15px] font-light">
                  So I was thinking{' '}
                  <span className="text-coral/40 line-through decoration-coral/30">um</span> maybe we could{' '}
                  <span className="text-coral/40 line-through decoration-coral/30">like</span> schedule the launch for Tuesday?{' '}
                  <span className="text-coral/40 line-through decoration-coral/30">Uh</span> actually make it Wednesday because{' '}
                  <span className="text-coral/40 line-through decoration-coral/30">you know</span> the marketing team needs more time and{' '}
                  <span className="text-coral/40 line-through decoration-coral/30">I think</span> we should also invite the design team
                </p>
              </div>

              {/* Output */}
              <div className="p-10 md:p-14 bg-white/[0.01]">
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-2.5 h-2.5 rounded-full bg-mint/80" />
                  <span className="font-mono text-[11px] text-mint/60 uppercase tracking-[0.2em] font-medium">
                    Formatted Output
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  {['Reschedule product launch to Wednesday', 'Allocate additional prep time for marketing team', 'Invite design team for pre-launch review'].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <span className="text-mint mt-0.5 shrink-0 text-lg">✓</span>
                      <p className="text-text-primary text-[15px] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 text-[10px] font-mono text-mint/50">
                  ⚡ Processed in 1.8s
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ SPEED ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-32">
          <div className="card p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <div className="section-line mb-6" />
              <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-3 tracking-tight">
                5.3× faster than typing.
              </h2>
              <p className="text-text-dim text-sm mb-14 max-w-md">
                Your thoughts move at the speed of speech. Now your text does too.
              </p>

              <div className="mb-10">
                <div className="flex justify-between text-sm mb-3">
                  <span className="flex items-center gap-2 text-text-dim">⌨️ Typing</span>
                  <span className="font-mono text-text-dim text-xs">45 wpm</span>
                </div>
                <div className="h-3 bg-white/[0.03] rounded-full overflow-hidden">
                  <div className="h-full bg-text-dim/30 rounded-full" style={{ width: '18%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-white font-semibold flex items-center gap-2 text-sm">
                    🎤 With TypeGone
                  </span>
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-gradient">
                    up to 240 wpm
                  </span>
                </div>
                <div className="h-5 bg-white/[0.03] rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-mint via-cyan to-[#00B8FF] rounded-full relative overflow-hidden"
                    style={{ width: '100%' }}
                  >
                    <div className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                  </div>
                </div>
                <p className="mt-3 text-xs text-mint/70 flex items-center justify-end gap-1.5 font-semibold font-mono">
                  📈 5.3× faster
                </p>
              </div>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-mint/[0.04] rounded-full blur-[120px] pointer-events-none" />
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ HOW IT WORKS ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">
              Three steps. Zero friction.
            </h2>
            <p className="text-text-dim text-base">Works in Telegram now. Desktop app coming.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Speak', desc: 'Hold the mic and talk naturally. Ramble, pause, go off on tangents — we\'ve got you.', icon: '🎙️', color: 'mint' },
              { num: '02', title: 'AI Processes', desc: 'TypeGone transcribes, strips filler, fixes grammar, and formats everything perfectly.', icon: '✨', color: 'cyan' },
              { num: '03', title: 'Done', desc: 'Copy your polished email, summary, or action list. Paste it anywhere. That\'s it.', icon: '📋', color: 'warm' },
            ].map((step) => (
              <div key={step.num} className="card p-10 text-center relative overflow-hidden group">
                <div className="absolute top-6 right-6 font-display font-extrabold text-7xl text-white/[0.03]">{step.num}</div>
                <div className="text-4xl mb-6">{step.icon}</div>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ FEATURES ═══ */}
      <ScrollReveal>
        <section id="features" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">
              Built for people<br />who think fast.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card p-8 group">
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ LANGUAGES ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-32">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="section-line mb-6" />
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-2">Speak in your language.</h2>
              <p className="text-text-dim text-sm mb-10">TypeGone processes and formats your voice in 9 languages — with more coming.</p>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, i) => (
                  <span
                    key={lang.name}
                    className={`px-4 py-2 rounded-xl text-sm font-medium ${
                      i === 0
                        ? 'bg-mint/[0.08] border border-mint/20 text-mint'
                        : 'bg-white/[0.03] border border-white/[0.06] text-text-muted'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-text-dim">Auto-detect mode available — just speak, TypeGone figures out the language.</p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-mint/[0.04] rounded-full blur-[80px] pointer-events-none" />
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ MODES ═══ */}
      <ScrollReveal>
        <section id="modes" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">
              One voice. Four outputs.
            </h2>
            <p className="text-text-dim text-base">Choose how TypeGone processes your speech.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modes.map((m) => (
              <div
                key={m.name}
                className={`card p-7 text-center relative overflow-hidden group ${
                  m.popular ? 'glow-mint pricing-pop' : ''
                }`}
              >
                {m.popular && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-mint/15 text-mint text-[9px] font-bold uppercase tracking-wider">
                    Popular
                  </div>
                )}
                <div className="text-3xl mb-4">{m.emoji}</div>
                <h3 className={`font-display font-bold mb-2 ${m.popular ? 'text-mint' : ''}`}>{m.name}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ PRICING ═══ */}
      <ScrollReveal>
        <section id="pricing" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">Simple pricing.</h2>
            <p className="text-text-dim text-base">Start free. Scale when you need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Starter */}
            <div className="card p-8 flex flex-col">
              <h3 className="font-display font-bold text-xl mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-7">
                <span className="text-4xl font-display font-extrabold">$0</span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-10 flex-1 text-sm text-text-muted">
                <li className="flex items-center gap-3">✓ 3 free messages</li>
                <li className="flex items-center gap-3">✓ All processing modes</li>
                <li className="flex items-center gap-3">✓ Telegram access</li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl border border-white/[0.08] text-white text-sm font-semibold text-center hover:bg-white/[0.04] transition-all block">
                Start Free
              </a>
            </div>

            {/* Standard */}
            <div className="card pricing-pop p-8 flex flex-col relative glow-mint">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-mint to-cyan text-base">
                Most Popular
              </div>
              <h3 className="font-display font-bold text-xl mb-2">Standard</h3>
              <div className="flex items-baseline gap-1 mb-7">
                <span className="text-4xl font-display font-extrabold">$5</span>
                <span className="text-sm text-text-dim">/ 100 msgs</span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-10 flex-1 text-sm text-white">
                <li className="flex items-center gap-3"><span className="text-mint">✓</span> 100 messages</li>
                <li className="flex items-center gap-3"><span className="text-mint">✓</span> All modes & languages</li>
                <li className="flex items-center gap-3"><span className="text-mint">✓</span> Priority processing</li>
                <li className="flex items-center gap-3"><span className="text-mint">✓</span> History & favorites</li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl btn-primary text-sm text-center block">
                Get Standard
              </a>
            </div>

            {/* Pro */}
            <div className="card p-8 flex flex-col">
              <h3 className="font-display font-bold text-xl mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-7">
                <span className="text-4xl font-display font-extrabold">$10</span>
                <span className="text-sm text-text-dim">/ 250 msgs</span>
              </div>
              <ul className="flex flex-col gap-3.5 mb-10 flex-1 text-sm text-text-muted">
                <li className="flex items-center gap-3">✓ 250 messages</li>
                <li className="flex items-center gap-3">✓ Everything in Standard</li>
                <li className="flex items-center gap-3">✓ Longest voice support</li>
                <li className="flex items-center gap-3">✓ Desktop app access</li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-3 rounded-xl border border-white/[0.08] text-white text-sm font-semibold text-center hover:bg-white/[0.04] transition-all block">
                Get Pro
              </a>
            </div>
          </div>

          {/* Payment methods */}
          <div className="max-w-4xl mx-auto mt-10 pt-8 border-t border-white/[0.04]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 text-xs text-text-dim">
                <span>① Telegram Stars</span>
                <span className="w-5 h-px bg-white/[0.06]" />
                <span>② or USDT (TRC20)</span>
                <span className="w-5 h-px bg-white/[0.06]" />
                <span>③ Instant access</span>
              </div>
              <div className="text-xs font-semibold text-mint/70 flex items-center gap-2 bg-mint/[0.06] px-4 py-2 rounded-full border border-mint/15">
                🛡️ Verified automatically
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ FAQ — generates Google rich results ═══ */}
      <ScrollReveal className="mt-32">
        <FAQSection faqs={COMMON_FAQS} />
      </ScrollReveal>

      {/* ═══ CTA ═══ */}
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </>
  );
}
