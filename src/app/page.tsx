import { Metadata } from 'next';
import Link from 'next/link';
import HeroVisual from '@/components/HeroVisual';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import {
  TELEGRAM_BOT_URL,
  ANDROID_DOWNLOAD_URL,
  HOMEPAGE_FAQS,
  generateHowToSchema,
  generateFAQSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'TypeGone — AI Voice to Text | Android Keyboard, Desktop App & Telegram Bot',
  description:
    'TypeGone converts messy voice recordings into polished emails, summaries, notes, and meeting notes. AI-powered voice-to-text across every platform — Android keyboard, desktop app (Windows/macOS), and Telegram bot. Smart formatting, filler word removal, 9 languages. Try free.',
  keywords: [
    'voice to text', 'speech to text', 'AI voice transcription', 'voice typing', 'dictation app',
    'AI voice keyboard Android', 'voice keyboard app', 'Android voice to text keyboard',
    'convert voice to text online', 'voice to email', 'voice notes to text', 'filler word remover',
    'speech to text app', 'voice to text desktop app', 'voice keyboard shortcut', 'custom voice commands',
    'voice to text telegram', 'AI text formatter', 'voice memo converter', 'AI keyboard',
  ],
  alternates: { canonical: 'https://typegone.com/' },
};

const features = [
  { icon: '📋', title: 'Smart Formatting', desc: 'Auto-detects emails, summaries, notes, action items, chat messages, meeting notes. Formats to match.', link: '/voice-to-text' },
  { icon: '🧹', title: 'Kills Filler Words', desc: 'Strips "um," "uh," "like," "you know," stutters, and verbal artifacts. You sound more articulate than you are.' },
  { icon: '⚡', title: '2-Second Processing', desc: 'By the time you switch windows, it\'s done. AI processes your voice faster than you can alt-tab.' },
  { icon: '🧠', title: '4 Processing Modes', desc: 'Raw transcription, light cleanup, full formatting, or AI chat. Each with different output types.', link: '/#modes' },
  { icon: '🌍', title: '9 Languages + Auto-Detect', desc: 'English, Farsi, German, Spanish, French, Russian, Turkish, Arabic, Chinese. Auto-detect included.' },
  { icon: '🔒', title: 'Zero Data Retention', desc: 'Audio processed and deleted instantly. We don\'t store or train on your voice data. Ever.', link: '/data-privacy' },
];

const outputTypes = [
  { emoji: '📧', name: 'Email', desc: 'Professional emails with greeting, body, and sign-off. Choose tone: professional, casual, friendly, or formal.', link: '/use-cases/emails' },
  { emoji: '📋', name: 'Summary', desc: 'Concise overview with key bullet points extracted from your speech.' },
  { emoji: '📝', name: 'Notes', desc: 'Structured notes with headers, bullet points, and grouped topics.', link: '/use-cases/notes' },
  { emoji: '✅', name: 'To-Do List', desc: 'Actionable tasks with verbs, deadlines, and priority tags extracted automatically.' },
  { emoji: '💬', name: 'Message', desc: 'Conversational text for chat apps — natural, flowing, personality intact.' },
  { emoji: '🤝', name: 'Meeting Notes', desc: 'Topics discussed, key decisions, action items with owners, and follow-ups.', link: '/use-cases/meeting-notes' },
  { emoji: '📄', name: 'General', desc: 'Clean, well-formatted text with proper paragraphs and punctuation.' },
];

const modes = [
  { emoji: '📝', name: 'Direct', desc: 'Raw transcription. Exactly what you said, word for word. No AI processing, no changes.' },
  { emoji: '✨', name: 'Light Clean', desc: 'Remove filler words like "um" and "uh," fix grammar and punctuation. Keep your natural voice and phrasing intact.' },
  { emoji: '🎯', name: 'Enhanced', desc: 'Full AI formatting into 7 output types: emails, notes, summaries, to-dos, messages, meeting notes, general.', popular: true },
  { emoji: '💬', name: 'AI Chat', desc: 'Ask questions by voice. Get intelligent, detailed answers back — like a voice-powered assistant.' },
];

const languages = [
  { flag: '🇬🇧', name: 'English' }, { flag: '🇮🇷', name: 'فارسی' }, { flag: '🇩🇪', name: 'Deutsch' },
  { flag: '🇪🇸', name: 'Español' }, { flag: '🇫🇷', name: 'Français' }, { flag: '🇷🇺', name: 'Русский' },
  { flag: '🇹🇷', name: 'Türkçe' }, { flag: '🇸🇦', name: 'العربية' }, { flag: '🇨🇳', name: '中文' },
];

const shortcuts = [
  { keys: ['⌘', 'Shift', 'V'], label: 'Quick Transcribe', desc: 'Speak naturally, get clean text. Default shortcut for everyday use.', mode: 'Enhanced → General' },
  { keys: ['⌘', 'Shift', 'E'], label: 'Dictate Email', desc: 'Custom prompt: "Format as a professional email with greeting and sign-off."', mode: 'Enhanced → Email' },
  { keys: ['⌘', 'Shift', 'T'], label: 'Translate', desc: 'Custom prompt: "Translate my speech to German and format properly."', mode: 'Custom Prompt' },
  { keys: ['⌘', 'Shift', 'S'], label: 'Summarize', desc: 'Custom prompt: "Summarize what I just said into 3 bullet points."', mode: 'Custom Prompt' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={generateHowToSchema()} />
      <JsonLd data={generateFAQSchema(HOMEPAGE_FAQS)} />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-grid pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-10%] w-[120%] h-[55%] pointer-events-none" style={{ background: 'linear-gradient(135deg, #00E5A0 0%, #00B880 50%, #008F60 100%)', transform: 'skewY(-6deg)', transformOrigin: 'top left', opacity: 0.08 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-10 opacity-0 animate-fade-up" style={{ background: 'rgba(0,229,160,0.06)', animationDelay: '0.1s' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                </span>
                Android keyboard now available — v1.3.0
              </div>

              <h1 className="font-display font-extrabold tracking-tight mb-8 opacity-0 animate-fade-up" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.02, animationDelay: '0.2s' }}>
                <span className="block">Typing is</span>
                <span className="block">
                  <span className="line-through decoration-[3px] decoration-coral/60" style={{ textDecorationSkipInk: 'none' }}>dead</span>
                  <span className="text-gradient">.</span>
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-text-muted max-w-xl mb-4 leading-relaxed font-light opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                AI voice to text that actually formats.
              </p>
              <p className="text-base text-text-dim max-w-lg mb-12 leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                TypeGone captures your chaotic voice, strips filler, nails the structure, and delivers polished <Link href="/use-cases/emails" className="text-mint/70 hover:text-mint underline underline-offset-2">emails</Link>, <Link href="/use-cases/notes" className="text-mint/70 hover:text-mint underline underline-offset-2">notes</Link>, <Link href="/use-cases/meeting-notes" className="text-mint/70 hover:text-mint underline underline-offset-2">meeting notes</Link>, to-do lists, and more — in seconds. As an <Link href="/mobile" className="text-mint/70 hover:text-mint underline underline-offset-2">Android keyboard</Link>, <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="text-mint/70 hover:text-mint underline underline-offset-2">Telegram bot</a>, or <Link href="/download" className="text-mint/70 hover:text-mint underline underline-offset-2">desktop app</Link>.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-base"
                  aria-label="Try TypeGone free on Telegram, no signup required (opens in new tab)"
                >
                  Try Free on Telegram
                  <span className="text-xs opacity-50 font-normal">— no signup</span>
                </a>
                <a
                  href={ANDROID_DOWNLOAD_URL}
                  download="TypeGone.v1.3.0.apk"
                  className="inline-flex items-center gap-2 px-6 py-3.5 btn-secondary text-sm"
                  aria-label="Download TypeGone for Android, version 1.3.0"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0007.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 10.1867.3432 13.2339 0 16.9996h24c-.3435-3.7657-2.6892-6.8129-6.1185-7.678"/>
                  </svg>
                  Download for Android
                </a>
              </div>

              <div className="flex items-center gap-5 text-xs text-text-dim opacity-0 animate-fade-up" style={{ animationDelay: '0.7s' }}>
                <span className="flex items-center gap-1.5">✅ No signup</span>
                <span className="flex items-center gap-1.5">✅ 3 free messages</span>
                <span className="hidden sm:flex items-center gap-1.5">✅ <Link href="/data-privacy" className="hover:text-text-muted transition-colors underline underline-offset-2">Zero data retention</Link></span>
              </div>

              <div className="flex items-center gap-4 mt-4 text-xs text-text-dim opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <Link href="/mobile" className="hover:text-text-muted transition-colors underline underline-offset-2">Android keyboard</Link>
                <span className="w-px h-3 bg-white/10" aria-hidden="true" />
                <Link href="/download" className="hover:text-text-muted transition-colors underline underline-offset-2">All platforms →</Link>
              </div>
            </div>

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
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">See the magic</h2>
            <p className="text-text-dim text-base max-w-md mx-auto">Your messy voice goes in. Polished, formatted text comes out.</p>
          </div>

          <div className="rounded-3xl border border-white/[0.06] overflow-hidden bg-gradient-to-b from-surface to-base-light">
            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-[14px] bg-gradient-to-br from-mint to-cyan shadow-[0_0_30px_rgba(0,229,160,0.3)]">
                <span className="text-base font-bold">→</span>
              </div>
              <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/[0.04]">
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-2.5 h-2.5 rounded-full bg-coral/70" />
                  <span className="font-mono text-[11px] text-coral/60 uppercase tracking-[0.2em] font-medium">Voice Input</span>
                </div>
                <p className="text-text-muted leading-[2] text-[15px] font-light">
                  So I was thinking <span className="text-coral/40 line-through decoration-coral/30">um</span> maybe we could <span className="text-coral/40 line-through decoration-coral/30">like</span> schedule the launch for Tuesday? <span className="text-coral/40 line-through decoration-coral/30">Uh</span> actually make it Wednesday because <span className="text-coral/40 line-through decoration-coral/30">you know</span> the marketing team needs more time and <span className="text-coral/40 line-through decoration-coral/30">I think</span> we should also invite the design team and <span className="text-coral/40 line-through decoration-coral/30">oh yeah</span> remind Jake to prepare the demo
                </p>
              </div>
              <div className="p-10 md:p-14 bg-white/[0.01]">
                <div className="flex items-center gap-2.5 mb-8">
                  <div className="w-2.5 h-2.5 rounded-full bg-mint/80" />
                  <span className="font-mono text-[11px] text-mint/60 uppercase tracking-[0.2em] font-medium">Enhanced → To-Do List</span>
                </div>
                <div className="flex flex-col gap-3">
                  {['Reschedule product launch to Wednesday', 'Allocate additional prep time for marketing team', 'Invite design team for pre-launch review', 'Remind Jake to prepare demo'].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <span className="text-mint mt-0.5 shrink-0">☐</span>
                      <p className="text-text-primary text-[15px] font-medium">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 text-[10px] font-mono text-mint/50">
                  <span>⚡ Processed in 1.8s</span>
                  <span className="text-text-dim">·</span>
                  <span className="text-text-dim/60">Tap &quot;Change Mode&quot; to reformat as email, notes, or summary</span>
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
              <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-3 tracking-tight">5.3× faster than typing.</h2>
              <p className="text-text-dim text-sm mb-14 max-w-md">Your thoughts move at the speed of speech. Now your text does too.</p>
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
                  <span className="text-white font-semibold flex items-center gap-2 text-sm">🎤 With TypeGone</span>
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-gradient">up to 240 wpm</span>
                </div>
                <div className="h-5 bg-white/[0.03] rounded-full overflow-hidden relative">
                  <div className="h-full bg-gradient-to-r from-mint via-cyan to-[#00B8FF] rounded-full relative overflow-hidden" style={{ width: '100%' }}>
                    <div className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer" />
                  </div>
                </div>
                <p className="mt-3 text-xs text-mint/70 flex items-center justify-end gap-1.5 font-semibold font-mono">📈 5.3× faster</p>
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
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">Three steps. Zero friction.</h2>
            <p className="text-text-dim text-base">On <Link href="/mobile" className="text-mint/60 hover:text-mint underline underline-offset-2">Android</Link>, <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="text-mint/60 hover:text-mint underline underline-offset-2">Telegram</a>, and <Link href="/download" className="text-mint/60 hover:text-mint underline underline-offset-2">desktop</Link>.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Speak', desc: 'Hold the mic in Telegram — or press a global hotkey on desktop — and talk naturally. Ramble, pause, go off on tangents. TypeGone handles the chaos.', icon: '🎙️' },
              { num: '02', title: 'AI Processes', desc: 'TypeGone transcribes, strips filler words, fixes grammar, and formats based on your mode: email, notes, to-do, summary, meeting notes, or chat message.', icon: '✨' },
              { num: '03', title: 'Done', desc: 'Copy your polished text and paste it anywhere. On desktop, text pastes directly where your cursor is. Tap "Change Mode" to reformat without re-recording.', icon: '📋' },
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
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">Built for people<br />who think fast.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card p-8 group">
                <div className="text-3xl mb-5">{f.icon}</div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed mb-3">{f.desc}</p>
                {f.link && <Link href={f.link} className="text-xs text-mint/60 hover:text-mint transition-colors underline underline-offset-2">Learn more →</Link>}
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ MODES ═══ */}
      <ScrollReveal>
        <section id="modes" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">4 processing modes.</h2>
            <p className="text-text-dim text-base">Choose how TypeGone handles your voice.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modes.map((m) => (
              <div key={m.name} className={`card p-7 text-center relative overflow-hidden group ${m.popular ? 'glow-mint pricing-pop' : ''}`}>
                {m.popular && <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-mint/15 text-mint text-[9px] font-bold uppercase tracking-wider">Popular</div>}
                <div className="text-3xl mb-4">{m.emoji}</div>
                <h3 className={`font-display font-bold mb-2 ${m.popular ? 'text-mint' : ''}`}>{m.name}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ OUTPUT TYPES (Enhanced mode) ═══ */}
      <ScrollReveal>
        <section id="outputs" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">7 output formats.</h2>
            <p className="text-text-dim text-base max-w-lg mx-auto">In Enhanced mode, TypeGone detects your intent and formats accordingly. Or pick the format yourself.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outputTypes.slice(0, 6).map((o) => (
              <div key={o.name} className="card p-7 group">
                <div className="text-2xl mb-4">{o.emoji}</div>
                <h3 className="font-display font-bold mb-2">{o.name}</h3>
                <p className="text-text-muted text-xs leading-relaxed mb-2">{o.desc}</p>
                {o.link && <Link href={o.link} className="text-xs text-mint/50 hover:text-mint transition-colors underline underline-offset-2">See example →</Link>}
              </div>
            ))}
          </div>
          <div className="max-w-sm mx-auto mt-5">
            <div className="card p-7 text-center group">
              <div className="text-2xl mb-4">{outputTypes[6].emoji}</div>
              <h3 className="font-display font-bold mb-2">{outputTypes[6].name}</h3>
              <p className="text-text-muted text-xs leading-relaxed">{outputTypes[6].desc}</p>
            </div>
          </div>
          <p className="text-center mt-8 text-sm text-text-dim">
            Don&apos;t like the result? <strong className="text-text-muted">Tap &quot;Change Mode&quot;</strong> after any transcription to reformat into a different type — without re-recording.
          </p>
        </section>
      </ScrollReveal>

      {/* ═══ DESKTOP APP — EXPANDED ═══ */}
      <ScrollReveal>
        <section id="desktop" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/[0.04] rounded-full blur-[140px] pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/20 text-cyan text-xs font-semibold mb-6" style={{ background: 'rgba(0,212,255,0.06)' }}>
                  🖥️ Desktop App — Beta
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-4xl mb-4 tracking-tight">
                  Voice to text.<br />Anywhere on your computer.
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  The TypeGone desktop app gives you <strong className="text-text-primary">system-wide voice-to-text with global keyboard shortcuts</strong>. Press a hotkey in any application — your email client, Google Docs, Slack, VS Code, anywhere — speak naturally, and polished text appears right where your cursor is.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { label: 'Global shortcuts', desc: 'Configure custom keyboard shortcuts. Press, speak, done. Text pastes directly into your active app.' },
                    { label: 'Custom AI prompts', desc: 'Each shortcut can have its own AI prompt — "summarize," "reply professionally," "translate to German," or anything you define.' },
                    { label: 'Works everywhere', desc: 'Any text field in any application. Email, docs, chat, code editors, browsers — if you can type there, TypeGone can speak there.' },
                    { label: 'Overlay recording', desc: 'Minimal floating widget appears when recording. Shows real-time audio levels. Stays out of your way.' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <span className="text-cyan mt-0.5 shrink-0">▸</span>
                      <div>
                        <span className="text-text-primary text-sm font-semibold">{item.label}</span>
                        <p className="text-text-dim text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href="/download" className="inline-flex items-center gap-2 px-5 py-3 btn-secondary text-sm">
                    Download Beta
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/30">Win / Mac / Linux</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[320px] rounded-2xl border border-white/[0.06] bg-surface/50 p-6 font-mono text-[13px] leading-relaxed">
                  <div className="flex items-center gap-2 mb-4 text-text-dim text-[10px]">
                    <div className="w-2 h-2 rounded-full bg-coral/50" />
                    <div className="w-2 h-2 rounded-full bg-warm/50" />
                    <div className="w-2 h-2 rounded-full bg-mint/50" />
                    <span className="ml-2">TypeGone Desktop</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] mb-3">
                    <span className="text-mint text-xs">⌘</span>
                    <span className="text-text-dim">+</span>
                    <span className="text-mint text-xs">Shift</span>
                    <span className="text-text-dim">+</span>
                    <span className="text-mint text-xs">V</span>
                    <span className="ml-auto text-[10px] text-text-dim">Record</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-0.5 rounded-full bg-mint/60" style={{ height: `${10 + Math.random() * 14}px` }} />
                      ))}
                    </div>
                    <span className="text-[10px] text-coral/60">● REC</span>
                  </div>
                  <div className="text-text-muted text-xs">
                    <span className="text-mint/50">→</span> Hi Sarah, I wanted to follow up on our conversation about the project timeline...
                  </div>
                  <div className="mt-3 text-[10px] text-mint/40">✓ Pasted to Gmail</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ MOBILE APP — KEYBOARD ═══ */}
      <ScrollReveal>
        <section id="mobile" className="max-w-6xl mx-auto px-6 mt-16">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-mint/[0.04] rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-6" style={{ background: 'rgba(0,229,160,0.06)' }}>
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                  </span>
                  Android Keyboard — Available Now
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-4xl mb-4 tracking-tight">
                  AI voice keyboard.<br />Every app on your phone.
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  TypeGone Mobile is a <strong className="text-text-primary">full custom Android keyboard</strong> with AI built in. Tap the mic, choose a mode — Tidy Speech, Write Email, Summarize, Translate — and polished text appears directly in whatever you are typing.
                </p>
                <div className="flex flex-col gap-4 mb-8">
                  {[
                    { label: 'Works in every app', desc: 'WhatsApp, Gmail, Slack, Instagram, Chrome — wherever you type, TypeGone types smarter.' },
                    { label: '5 AI voice modes', desc: 'Tidy Speech, Write Email, AI Prompt, Summarize, Translate. Pick your mode, speak, done.' },
                    { label: '8 keyboard layouts', desc: 'QWERTY, Persian, Arabic, French, German, Spanish, Russian, Portuguese. Swipe spacebar to switch.' },
                    { label: 'Synced account', desc: 'Same account and credits as your Telegram bot and desktop app. One login, everywhere.' },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <span className="text-mint mt-0.5 shrink-0" aria-hidden="true">▸</span>
                      <div>
                        <span className="text-text-primary text-sm font-semibold">{item.label}</span>
                        <p className="text-text-dim text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={ANDROID_DOWNLOAD_URL}
                    download="TypeGone.v1.3.0.apk"
                    className="inline-flex items-center gap-2 px-5 py-3 btn-primary text-sm"
                    aria-label="Download TypeGone for Android v1.3.0"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0007.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 10.1867.3432 13.2339 0 16.9996h24c-.3435-3.7657-2.6892-6.8129-6.1185-7.678"/>
                    </svg>
                    Download for Android
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/30">v1.3.0</span>
                  </a>
                  <Link href="/mobile" className="inline-flex items-center gap-2 px-5 py-3 btn-secondary text-sm">
                    Learn more →
                  </Link>
                </div>
              </div>

              {/* Mobile keyboard mockup */}
              <div className="flex items-center justify-center" aria-hidden="true">
                <div className="w-full max-w-[240px]">
                  <div className="relative mx-auto rounded-[2rem] border-2 border-white/10 bg-surface/60 overflow-hidden" style={{ aspectRatio: '9/16', maxHeight: '380px' }}>
                    {/* App area */}
                    <div className="absolute inset-x-0 top-0 h-[52%] p-4 flex flex-col gap-2">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-mint to-cyan flex items-center justify-center text-[10px] font-bold text-base">T</div>
                        <span className="text-[9px] text-text-dim">TypeGone Keyboard</span>
                      </div>
                      <div className="flex-1 rounded-lg bg-white/[0.02] border border-white/[0.04] p-2">
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-white/[0.08] rounded-full w-full" />
                          <div className="h-1.5 bg-white/[0.08] rounded-full w-5/6" />
                          <div className="h-1.5 bg-mint/30 rounded-full w-full" />
                          <div className="h-1.5 bg-mint/20 rounded-full w-4/5" />
                        </div>
                      </div>
                    </div>
                    {/* Keyboard */}
                    <div className="absolute inset-x-0 bottom-0 h-[50%] bg-base-light/80 border-t border-white/[0.06] p-1.5">
                      <div className="flex gap-1 mb-1.5 overflow-hidden">
                        {['✨ Tidy', '📧 Email', '📋 Sum'].map((m, i) => (
                          <div key={m} className={`px-1.5 py-0.5 rounded text-[6px] font-semibold whitespace-nowrap ${i === 0 ? 'bg-mint/20 text-mint' : 'bg-white/[0.04] text-text-dim'}`}>{m}</div>
                        ))}
                      </div>
                      {[['Q','W','E','R','T','Y','U','I','O','P'], ['A','S','D','F','G','H','J','K','L'], ['Z','X','C','V','B','N','M']].map((row, ri) => (
                        <div key={ri} className="flex justify-center gap-0.5 mb-0.5">
                          {row.map((key) => (
                            <div key={key} className="flex-1 max-w-[20px] py-1 rounded text-[6px] font-medium text-center bg-white/[0.06] text-text-dim">{key}</div>
                          ))}
                        </div>
                      ))}
                      <div className="flex items-center gap-0.5 mt-0.5">
                        <div className="flex-1 py-1 rounded text-[6px] text-center text-text-dim/40 bg-white/[0.03]">space</div>
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-mint to-cyan flex items-center justify-center shadow-[0_0_8px_rgba(0,229,160,0.4)]">
                          <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                          </svg>
                        </div>
                        <div className="py-1 px-1.5 rounded text-[6px] text-center text-text-dim/40 bg-white/[0.03]">⏎</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-[9px] text-text-dim mt-3">Works in any Android app</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ CUSTOM SHORTCUTS ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight">Custom shortcuts. Custom prompts.</h2>
            <p className="text-text-dim text-sm max-w-lg mx-auto">Set up multiple keyboard shortcuts, each with its own AI instruction. One press, speak, and the right format appears.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {shortcuts.map((s) => (
              <div key={s.label} className="card p-6 group">
                <div className="flex items-center gap-1.5 mb-3">
                  {s.keys.map((key, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      {i > 0 && <span className="text-text-dim text-[10px]">+</span>}
                      <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] font-mono text-[11px] text-mint/70">{key}</span>
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-sm mb-1">{s.label}</h3>
                <p className="text-text-dim text-xs leading-relaxed mb-2">{s.desc}</p>
                <span className="text-[10px] font-mono text-text-dim/50">{s.mode}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-xs text-text-dim">
            Define as many shortcuts as you need. Each one is fully configurable — mode, language, output type, tone, and custom prompt.
          </p>
        </section>
      </ScrollReveal>

      {/* ═══ LANGUAGES ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-32">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="section-line mb-6" />
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-2">Speak in your language.</h2>
              <p className="text-text-dim text-sm mb-10">TypeGone processes and formats your voice in 9 languages. The entire interface is localized too — every button, label, and notification speaks your language.</p>
              <div className="flex flex-wrap gap-3">
                {languages.map((l, i) => (
                  <span key={l.name} className={`px-4 py-2 rounded-xl text-sm font-medium ${i === 0 ? 'bg-mint/[0.08] border border-mint/20 text-mint' : 'bg-white/[0.03] border border-white/[0.06] text-text-muted'}`}>
                    {l.flag} {l.name}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-text-dim">Auto-detect mode available — just speak, TypeGone figures out the language. You can also set different languages for different <Link href="/#desktop" className="text-mint/50 hover:text-mint underline underline-offset-2">desktop shortcuts</Link>.</p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-mint/[0.04] rounded-full blur-[80px] pointer-events-none" />
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ TELEGRAM FEATURES ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight">Telegram Features</h2>
            <p className="text-text-dim text-sm mt-3">Everything you need, right inside Telegram.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card p-7">
              <div className="text-2xl mb-4">👥</div>
              <h3 className="font-display font-bold text-base mb-2">Group Transcription</h3>
              <p className="text-text-muted text-xs leading-relaxed">Add TypeGone to any group. Admins enable auto-transcription so every voice message is converted to text. Or reply to transcribe on demand.</p>
            </div>
            <div className="card p-7">
              <div className="text-2xl mb-4">🔄</div>
              <h3 className="font-display font-bold text-base mb-2">Reformat Anytime</h3>
              <p className="text-text-muted text-xs leading-relaxed">Every transcription comes with action buttons: Copy, Retry, Change Mode, and Save. Reformat the same voice into any output without re-recording.</p>
            </div>
            <div className="card p-7">
              <div className="text-2xl mb-4">📜</div>
              <h3 className="font-display font-bold text-base mb-2">History &amp; Stats</h3>
              <p className="text-text-muted text-xs leading-relaxed">Browse your full transcription history with pagination. Save favorites. View your stats — total messages, words processed, time saved.</p>
            </div>
            <div className="card p-7">
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="font-display font-bold text-base mb-2">Quick Mode Switch</h3>
              <p className="text-text-muted text-xs leading-relaxed">Switch between Direct, Light, Enhanced, and AI Chat modes with a single tap. Your preference is remembered for the next recording.</p>
            </div>
            <div className="card p-7">
              <div className="text-2xl mb-4">🎁</div>
              <h3 className="font-display font-bold text-base mb-2">Referral Program</h3>
              <p className="text-text-muted text-xs leading-relaxed">Share your referral link. When a friend joins, you both get 10 free messages. No limits on how many friends you can invite.</p>
            </div>
            <div className="card p-7">
              <div className="text-2xl mb-4">🌍</div>
              <h3 className="font-display font-bold text-base mb-2">Localized Interface</h3>
              <p className="text-text-muted text-xs leading-relaxed">The entire bot interface — buttons, menus, notifications, processing stages — is translated into all 9 supported languages.</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ PRICING ═══ */}
      <ScrollReveal>
        <section id="pricing" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">Simple pricing.</h2>
            <p className="text-text-dim text-base">Start free. Pay as you go. No subscriptions required.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {/* Free */}
            <div className="card p-7 flex flex-col">
              <h3 className="font-display font-bold text-lg mb-2">Free</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-display font-extrabold">$0</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm text-text-muted">
                <li className="flex items-center gap-2.5">✓ 3 messages</li>
                <li className="flex items-center gap-2.5">✓ All 4 modes</li>
                <li className="flex items-center gap-2.5">✓ No signup</li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl border border-white/[0.08] text-white text-sm font-semibold text-center hover:bg-white/[0.04] transition-all block">
                Start Free
              </a>
            </div>

            {/* Starter */}
            <div className="card p-7 flex flex-col">
              <h3 className="font-display font-bold text-lg mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-display font-extrabold">$3</span>
                <span className="text-xs text-text-dim">/ 100 msgs</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm text-text-muted">
                <li className="flex items-center gap-2.5">✓ 100 messages</li>
                <li className="flex items-center gap-2.5">✓ All modes &amp; languages</li>
                <li className="flex items-center gap-2.5">✓ History &amp; favorites</li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl border border-white/[0.08] text-white text-sm font-semibold text-center hover:bg-white/[0.04] transition-all block">
                Get Starter
              </a>
            </div>

            {/* Standard */}
            <div className="card pricing-pop p-7 flex flex-col relative glow-mint">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-gradient-to-r from-mint to-cyan text-base">
                Popular
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Standard</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-display font-extrabold">$5</span>
                <span className="text-xs text-text-dim">/ 250 msgs</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm text-white">
                <li className="flex items-center gap-2.5"><span className="text-mint">✓</span> 250 messages</li>
                <li className="flex items-center gap-2.5"><span className="text-mint">✓</span> Priority processing</li>
                <li className="flex items-center gap-2.5"><span className="text-mint">✓</span> All 7 output types</li>
                <li className="flex items-center gap-2.5"><span className="text-mint">✓</span> Reformat &amp; history</li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl btn-primary text-sm text-center block">
                Get Standard
              </a>
            </div>

            {/* Pro */}
            <div className="card p-7 flex flex-col">
              <h3 className="font-display font-bold text-lg mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-display font-extrabold">$10</span>
                <span className="text-xs text-text-dim">/ 600 msgs</span>
              </div>
              <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm text-text-muted">
                <li className="flex items-center gap-2.5">✓ 600 messages</li>
                <li className="flex items-center gap-2.5">✓ Everything in Standard</li>
                <li className="flex items-center gap-2.5">✓ Longest voice support</li>
                <li className="flex items-center gap-2.5">✓ Desktop app access</li>
              </ul>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="w-full py-2.5 rounded-xl border border-white/[0.08] text-white text-sm font-semibold text-center hover:bg-white/[0.04] transition-all block">
                Get Pro
              </a>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-white/[0.04]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4 text-xs text-text-dim">
                <span>⭐ Telegram Stars</span>
                <span className="w-5 h-px bg-white/[0.06]" />
                <span>💰 USDT (TRC20)</span>
                <span className="w-5 h-px bg-white/[0.06]" />
                <span>🎁 <Link href="/#referral" className="text-mint/50 hover:text-mint underline underline-offset-2">Invite friends for free credits</Link></span>
              </div>
              <div className="text-xs text-text-dim/70">Credits never expire. No subscription required.</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ REFERRAL ═══ */}
      <ScrollReveal>
        <section id="referral" className="max-w-6xl mx-auto px-6 mt-32">
          <div className="card p-8 md:p-12 relative overflow-hidden text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-warm/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🎁</div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight">Invite Friends, Earn Free Messages</h2>
              <p className="text-text-muted text-sm max-w-md mx-auto mb-6">
                Share your referral link. When a friend joins, you both get 10 free messages. No limits on how many friends you can invite.
              </p>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm">
                Get Your Referral Link
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ USE CASES ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-32">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Popular Use Cases</h2>
            <p className="text-text-dim text-sm mt-3 max-w-md mx-auto">TypeGone adapts to what you need. Here are the most popular ways people use it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link href="/use-cases/emails" className="card p-8 group">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-mint transition-colors">Voice to Email</h3>
              <p className="text-text-muted text-sm leading-relaxed">Speak your email, get a professional message with greeting, structure, and sign-off. Choose your tone: professional, casual, friendly, or formal.</p>
            </Link>
            <Link href="/use-cases/notes" className="card p-8 group">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-mint transition-colors">Voice Notes to Text</h3>
              <p className="text-text-muted text-sm leading-relaxed">Turn rambling voice notes into organized, readable text with headers, bullet points, and grouped topics.</p>
            </Link>
            <Link href="/use-cases/meeting-notes" className="card p-8 group">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-mint transition-colors">Meeting Notes</h3>
              <p className="text-text-muted text-sm leading-relaxed">Record takeaways by voice after any meeting, get structured summaries with action items, decisions, and follow-ups.</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <div className="card p-7 group">
              <div className="text-2xl mb-3">✅</div>
              <h3 className="font-display font-bold text-base mb-2">Voice to To-Do List</h3>
              <p className="text-text-dim text-xs leading-relaxed">Rattle off everything you need to do. TypeGone extracts actionable tasks with verbs, deadlines, and priority tags.</p>
            </div>
            <div className="card p-7 group">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-display font-bold text-base mb-2">Voice to Summary</h3>
              <p className="text-text-dim text-xs leading-relaxed">Speak a long explanation and get a concise summary with key bullet points — perfect for recaps and briefs.</p>
            </div>
            <div className="card p-7 group">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="font-display font-bold text-base mb-2">AI Chat by Voice</h3>
              <p className="text-text-dim text-xs leading-relaxed">Ask questions by voice, get intelligent answers. Use TypeGone as a hands-free AI assistant for research, brainstorming, or quick lookups.</p>
            </div>
          </div>
          <p className="text-center mt-8">
            <Link href="/voice-to-text" className="text-sm text-mint/60 hover:text-mint underline underline-offset-2">Explore all voice to text features →</Link>
          </p>
        </section>
      </ScrollReveal>

      {/* ═══ PRIVACY TRUST BAR ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-32">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <div className="section-line mb-6" />
                <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight">Your privacy is non-negotiable.</h2>
                <p className="text-text-muted text-sm leading-relaxed max-w-lg">
                  Zero data retention. No model training. No data selling. Voice is processed and deleted instantly. We have strict zero-retention agreements with all AI providers. Read our full <Link href="/privacy" className="text-mint/60 hover:text-mint underline underline-offset-2">Privacy Policy</Link> and <Link href="/terms" className="text-mint/60 hover:text-mint underline underline-offset-2">Terms of Service</Link>.
                </p>
              </div>
              <Link href="/data-privacy" className="inline-flex items-center gap-2 px-6 py-3 btn-secondary text-sm shrink-0">
                🔒 Read Our Data Privacy Promise
              </Link>
            </div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-mint/[0.03] rounded-full blur-[100px] pointer-events-none" />
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ FAQ ═══ */}
      <ScrollReveal className="mt-32">
        <FAQSection faqs={HOMEPAGE_FAQS} />
      </ScrollReveal>

      {/* ═══ CTA ═══ */}
      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </>
  );
}
