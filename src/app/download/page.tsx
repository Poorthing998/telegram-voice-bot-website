import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema, generateFAQSchema, TELEGRAM_BOT_URL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Download TypeGone Desktop App — Voice to Text Anywhere on Your Computer',
  description: 'Download the TypeGone desktop app for Windows, macOS, and Linux. System-wide voice to text with global keyboard shortcuts. Press a hotkey, speak, get polished text pasted anywhere.',
  keywords: ['voice to text desktop app', 'speech to text desktop', 'voice typing desktop', 'dictation app Windows', 'dictation app Mac', 'global shortcut voice to text'],
  alternates: { canonical: 'https://typegone.app/download' },
};

const DOWNLOAD_FAQS = [
  { question: 'What operating systems does TypeGone desktop support?', answer: 'TypeGone desktop is currently in beta for Windows 10+, macOS 12+, and Linux (Ubuntu 22.04+, Debian, Fedora). All three platforms receive the same features and updates.' },
  { question: 'How do global keyboard shortcuts work?', answer: 'You configure a hotkey (like Ctrl+Shift+V) in TypeGone settings. When pressed in any application, a small recording overlay appears. Speak naturally, and when you stop or press the hotkey again, TypeGone processes your voice and pastes the formatted text directly where your cursor is.' },
  { question: 'Can I create custom shortcuts with different AI prompts?', answer: 'Yes. You can set up multiple shortcuts, each with its own AI prompt. For example: one shortcut for "compose a professional email reply," another for "summarize this into bullet points," another for "translate to German." Each shortcut triggers recording and applies its specific prompt to the transcription.' },
  { question: 'Does the desktop app work offline?', answer: 'No. TypeGone requires an internet connection because voice processing and AI formatting happen on our cloud servers. This ensures the highest accuracy and lets us support all processing modes and languages.' },
  { question: 'Do I need a separate account for the desktop app?', answer: 'The desktop app uses the same account and credits as the Telegram bot. Your messages, settings, and credit balance are shared across both platforms.' },
  { question: 'Is the desktop app free?', answer: 'The desktop app is included with all paid plans. Pro plan users ($10/600 messages) get full desktop app access. During beta, desktop access may be available on lower tiers as well.' },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Download', url: '/download' }])} />
      <JsonLd data={generateFAQSchema(DOWNLOAD_FAQS)} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-muted">Download</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/20 text-cyan text-xs font-semibold mb-8" style={{ background: 'rgba(0,212,255,0.06)' }}>
            🖥️ Desktop App — Beta
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            Voice to text.<br />
            <span className="text-gradient">Anywhere on your computer.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-10 leading-relaxed">
            Press a hotkey in any app — email, Slack, Google Docs, VS Code, anywhere — speak naturally, and polished text appears right where your cursor is. No copy-paste. No switching windows.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              Download for Windows
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-secondary text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M2 12h20"/></svg>
              Download for macOS
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-3 px-6 py-4 btn-secondary text-base">
              Linux
            </a>
          </div>

          <div className="flex items-center gap-5 text-xs text-text-dim">
            <span>Windows 10+</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>macOS 12+</span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Ubuntu 22.04+ / Debian / Fedora</span>
          </div>
        </div>
      </section>

      {/* How Shortcuts Work */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="text-center mb-14">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">How it works</h2>
            <p className="text-text-dim text-base">Three keystrokes. Zero friction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Press your hotkey', desc: 'Configure any keyboard shortcut (like ⌘+Shift+V). Press it anywhere — in Gmail, Slack, Notion, VS Code, Word, or any app with a text field.', icon: '⌨️' },
              { num: '02', title: 'Speak naturally', desc: 'A minimal overlay appears. Talk the way you think — ramble, pause, change direction. TypeGone handles the mess.', icon: '🎙️' },
              { num: '03', title: 'Text appears at your cursor', desc: 'AI transcribes, cleans, and formats. The result is pasted directly where your cursor was — no copy-paste, no window switching.', icon: '✨' },
            ].map((step) => (
              <div key={step.num} className="card p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 font-display font-extrabold text-6xl text-white/[0.03]">{step.num}</div>
                <div className="text-3xl mb-5">{step.icon}</div>
                <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Custom Prompts */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-warm/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="section-line mb-6" />
                <h2 className="font-display font-extrabold text-2xl md:text-4xl mb-4 tracking-tight">Custom shortcuts.<br />Custom AI prompts.</h2>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Set up multiple hotkeys, each with its own AI instruction. One shortcut to draft emails. Another to summarize. Another to translate. You decide what each shortcut does.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    { keys: '⌘+Shift+E', prompt: '"Write a professional email reply"' },
                    { keys: '⌘+Shift+S', prompt: '"Summarize this into 3 bullet points"' },
                    { keys: '⌘+Shift+T', prompt: '"Translate to German, keep formal tone"' },
                    { keys: '⌘+Shift+N', prompt: '"Format as structured meeting notes"' },
                  ].map((s) => (
                    <div key={s.keys} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <span className="font-mono text-xs text-cyan shrink-0 px-2 py-1 rounded-lg bg-cyan/[0.08]">{s.keys}</span>
                      <span className="text-text-dim text-xs">→</span>
                      <span className="text-text-muted text-xs">{s.prompt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[340px] rounded-2xl border border-white/[0.06] bg-surface/50 p-6">
                  <div className="flex items-center gap-2 mb-5 text-text-dim text-[10px]">
                    <div className="w-2 h-2 rounded-full bg-coral/50" />
                    <div className="w-2 h-2 rounded-full bg-warm/50" />
                    <div className="w-2 h-2 rounded-full bg-mint/50" />
                    <span className="ml-2 font-mono">Shortcut Settings</span>
                  </div>
                  <div className="space-y-3">
                    {['Email Reply', 'Quick Summary', 'Translate DE', 'Meeting Notes'].map((name, i) => (
                      <div key={name} className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-mint' : 'bg-white/20'}`} />
                          <span className="text-xs text-text-muted">{name}</span>
                        </div>
                        <span className="font-mono text-[10px] text-text-dim/60">⌘⇧{['E','S','T','N'][i]}</span>
                      </div>
                    ))}
                    <button className="w-full py-2 rounded-lg border border-dashed border-white/[0.08] text-xs text-text-dim/50 hover:text-text-dim hover:border-white/20 transition-colors">
                      + Add Shortcut
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Features Grid */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '⚡', title: 'Instant Paste', desc: 'Processed text pastes directly at your cursor. No clipboard juggling. No alt-tabbing.' },
              { icon: '🎨', title: 'Minimal Overlay', desc: 'Small floating widget during recording. No full-screen takeover. Stays out of your way.' },
              { icon: '🔄', title: 'Same Account', desc: 'Uses your existing TypeGone account and credits. Shared balance across Telegram and desktop.' },
              { icon: '🌍', title: '9 Languages', desc: 'Full language support on desktop. Speak in English, German, Farsi, or any supported language.' },
              { icon: '🧠', title: 'All 4 Modes', desc: 'Direct transcription, light cleanup, full formatting, and AI chat — all available per-shortcut.' },
              { icon: '🔒', title: 'Zero Retention', desc: 'Same privacy guarantees as Telegram. Voice processed and deleted instantly. Nothing stored.' },
            ].map((f) => (
              <div key={f.title} className="card p-7">
                <div className="text-2xl mb-4">{f.icon}</div>
                <h3 className="font-display font-bold mb-2">{f.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Telegram fallback */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 mt-24">
          <div className="card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-mint/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">📱</div>
              <h2 className="font-display font-extrabold text-xl md:text-2xl mb-3">Not ready for desktop?</h2>
              <p className="text-text-muted text-sm max-w-md mx-auto mb-6">
                TypeGone is fully functional on Telegram right now. Same AI, same formatting, same speed. No installation needed.
              </p>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm">
                Try Free on Telegram
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="mt-24">
        <FAQSection faqs={DOWNLOAD_FAQS} title="Desktop App FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection />
      </ScrollReveal>
    </>
  );
}
