import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  TELEGRAM_BOT_URL,
  ANDROID_DOWNLOAD_URL,
} from '@/lib/seo';

const WINDOWS_DOWNLOAD_URL =
  'https://github.com/Poorthing998/telegram-voice-bot-website/releases/download/v1.0.0/TypeGone-Setup-1.1.0.exe';
const MACOS_DOWNLOAD_URL =
  'https://github.com/Poorthing998/telegram-voice-bot-website/releases/download/v1.0.0/TypeGone-1.0.0-arm64.dmg';

export const metadata: Metadata = {
  title: 'Download TypeGone — Android, iOS, Windows, macOS | All Platforms',
  description:
    'Download TypeGone for Android (AI voice keyboard), Windows, macOS, or use it instantly on Telegram. One AI voice-to-text account works across every platform. Free to start.',
  keywords: [
    'download TypeGone',
    'TypeGone Android download',
    'voice to text app download',
    'AI keyboard Android download',
    'voice to text desktop app',
    'download speech to text',
    'TypeGone APK',
    'voice keyboard download',
    'dictation app download',
    'TypeGone Windows',
    'TypeGone macOS',
    'AI voice to text all platforms',
  ],
  alternates: { canonical: 'https://typegone.com/download' },
};

const DOWNLOAD_FAQS = [
  {
    question: 'Which platform should I start with?',
    answer:
      'If you are on Android, download the TypeGone keyboard app — it works in every app on your device and gives you the most seamless experience. If you are on a computer, the desktop app gives you system-wide voice input with global keyboard shortcuts. Or try TypeGone instantly on Telegram with no installation required.',
  },
  {
    question: 'Do I need a separate account for each platform?',
    answer:
      'No. TypeGone uses a single account across all platforms. Sign in once — on Android, desktop, or Telegram — and your credits, preferences, and settings are shared everywhere.',
  },
  {
    question: 'How do I install TypeGone on Android?',
    answer:
      'Download the APK from this page, install it on your device (enable "Install from unknown sources" if prompted), open the TypeGone app and sign in, then go to Settings → System → Languages & input → On-screen keyboard → Manage on-screen keyboards and toggle TypeGone on. Set it as your default keyboard to use AI voice typing in any app.',
  },
  {
    question: 'Is the Android APK safe to install?',
    answer:
      'Yes. The TypeGone APK is the official release built from the same source as the app. Android will show a warning when installing APKs from outside the Play Store — this is a standard OS prompt. TypeGone is not on the Play Store yet, so direct APK installation is the only way to get the app on Android right now.',
  },
  {
    question: 'What operating systems does TypeGone desktop support?',
    answer:
      'TypeGone desktop is currently in beta for Windows 10+ and macOS 12+ (Apple Silicon). Linux support is coming soon. All platforms use the same global shortcut system — press a hotkey in any app, speak, and polished text appears.',
  },
  {
    question: 'How do global keyboard shortcuts work on desktop?',
    answer:
      'Configure a hotkey (like Ctrl+Shift+V) in TypeGone settings. Press it in any application and a small recording overlay appears. Speak naturally, and when you stop or press the hotkey again, TypeGone processes your voice and pastes the formatted text directly where your cursor is.',
  },
  {
    question: 'Does the desktop app work offline?',
    answer:
      'No. TypeGone requires an internet connection because voice processing and AI formatting happen on cloud servers. This ensures the highest accuracy and supports all AI modes and languages.',
  },
  {
    question: 'Is the iOS app available?',
    answer:
      'The TypeGone iOS keyboard is currently in development. In the meantime, iOS and macOS users can use TypeGone via the Telegram bot or the macOS desktop app. We will announce the iOS release when it is ready.',
  },
];

export default function DownloadPage() {
  return (
    <>
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Download', url: '/download' },
        ])}
      />
      <JsonLd data={generateFAQSchema(DOWNLOAD_FAQS)} />

      {/* ═══ HERO ═══ */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-text-muted transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-muted" aria-current="page">
              Download
            </span>
          </nav>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            TypeGone on<br />
            <span className="text-gradient">every device.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-8 leading-relaxed">
            One AI voice-to-text account. Works as an Android keyboard, a desktop app with global shortcuts, and a Telegram bot. Pick your platform — your credits and settings sync everywhere.
          </p>

          <div className="flex items-center gap-4 text-sm text-text-dim">
            <span className="flex items-center gap-1.5">✅ Single account</span>
            <span className="w-px h-4 bg-white/10" aria-hidden="true" />
            <span className="flex items-center gap-1.5">✅ Credits shared</span>
            <span className="w-px h-4 bg-white/10" aria-hidden="true" />
            <span className="flex items-center gap-1.5">✅ Free to start</span>
          </div>
        </div>
      </section>

      {/* ═══ MOBILE — PRIMARY ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-8" aria-labelledby="mobile-section-heading">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(0,229,160,0.07) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/20 text-mint text-xs font-semibold"
                  style={{ background: 'rgba(0,229,160,0.06)' }}
                >
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-50" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                  </span>
                  New — Mobile Keyboard
                </div>
              </div>

              <h2 id="mobile-section-heading" className="font-display font-extrabold text-2xl md:text-4xl mb-4 tracking-tight">
                Android Keyboard
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-xl">
                A custom AI-powered Android keyboard. Works in <strong className="text-text-primary">every app on your device</strong> — WhatsApp, Gmail, Slack, Instagram, Chrome. Tap the mic, choose an AI mode, speak, and polished text appears right where your cursor is.
              </p>

              {/* AI Modes preview */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['✨ Tidy Speech', '📧 Write Email', '🤖 AI Prompt', '📋 Summarize', '🌍 Translate'].map((mode) => (
                  <span
                    key={mode}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.03] border border-white/[0.06] text-text-muted"
                  >
                    {mode}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Android Download */}
                <div className="flex flex-col items-start gap-1.5">
                  <a
                    href={ANDROID_DOWNLOAD_URL}
                    download="TypeGone.v1.3.0.apk"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary text-base w-full sm:w-auto"
                    aria-label="Download TypeGone for Android, version 1.3.0 APK"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0007.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 10.1867.3432 13.2339 0 16.9996h24c-.3435-3.7657-2.6892-6.8129-6.1185-7.678"/>
                    </svg>
                    Download for Android
                  </a>
                  <span className="text-xs text-text-dim pl-1">v1.3.0 &middot; APK &middot; Android 6.0+</span>
                </div>

                {/* iOS Coming Soon */}
                <div className="flex flex-col items-start gap-1.5">
                  <span
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-secondary text-base opacity-50 cursor-not-allowed select-none w-full sm:w-auto"
                    role="button"
                    aria-label="iOS version is coming soon"
                    aria-disabled="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 134.4-318 266.5-318 99.8 0 162.9 65.4 219.8 65.4 55.3 0 127.1-67.7 228-67.7 34.8 0 119.2 4.2 196.5 71.4zm-240-175.2c43.1-49.4 73.5-117.8 73.5-186.2 0-9.6-.9-19.2-2.6-27.4-70.1 2.6-152.4 47.1-202.3 106-37.6 41.9-73.9 110.7-73.9 180.5 0 10.3 1.6 20.5 2.6 23.8 4.5.6 9.7 1.3 14.9 1.3 63.1 0 139.1-42.5 187.8-98z"/>
                    </svg>
                    Download for iOS
                  </span>
                  <span className="text-xs text-text-dim pl-1">Coming soon</span>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/mobile" className="text-xs text-mint/60 hover:text-mint transition-colors underline underline-offset-2">
                  Learn more about the mobile keyboard →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ DESKTOP APP ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-8" aria-labelledby="desktop-section-heading">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/20 text-cyan text-xs font-semibold mb-8"
                style={{ background: 'rgba(0,212,255,0.06)' }}
              >
                🖥️ Desktop App — Beta
              </div>

              <h2 id="desktop-section-heading" className="font-display font-extrabold text-2xl md:text-4xl mb-4 tracking-tight">
                Desktop App
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-xl">
                System-wide voice-to-text for your computer. Press a global keyboard shortcut in <strong className="text-text-primary">any application</strong> — Gmail, Slack, Notion, VS Code, Word — speak, and polished text pastes where your cursor is. No copy-paste. No window switching.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Windows */}
                <div className="flex flex-col items-start gap-1.5">
                  <a
                    href={WINDOWS_DOWNLOAD_URL}
                    download="TypeGone-Setup-1.1.0.exe"
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 btn-primary text-sm"
                    aria-label="Download TypeGone for Windows, version 1.1.0, 79 megabytes"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3 3h9v9H3zm10 0h9v9h-9zM3 13h9v9H3zm10 0h9v9h-9z" />
                    </svg>
                    Download for Windows
                  </a>
                  <span className="text-xs text-text-dim pl-1">v1.1.0 &middot; 79 MB &middot; Windows 10+</span>
                </div>

                {/* macOS */}
                <div className="flex flex-col items-start gap-1.5">
                  <a
                    href={MACOS_DOWNLOAD_URL}
                    download="TypeGone-1.0.0-arm64.dmg"
                    className="inline-flex items-center justify-center gap-3 px-7 py-3.5 btn-secondary text-sm"
                    aria-label="Download TypeGone for macOS Apple Silicon, version 1.0.0, 96 megabytes"
                  >
                    <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor" aria-hidden="true">
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 134.4-318 266.5-318 99.8 0 162.9 65.4 219.8 65.4 55.3 0 127.1-67.7 228-67.7 34.8 0 119.2 4.2 196.5 71.4zm-240-175.2c43.1-49.4 73.5-117.8 73.5-186.2 0-9.6-.9-19.2-2.6-27.4-70.1 2.6-152.4 47.1-202.3 106-37.6 41.9-73.9 110.7-73.9 180.5 0 10.3 1.6 20.5 2.6 23.8 4.5.6 9.7 1.3 14.9 1.3 63.1 0 139.1-42.5 187.8-98z"/>
                    </svg>
                    Download for macOS
                  </a>
                  <span className="text-xs text-text-dim pl-1">v1.0.0 &middot; 96 MB &middot; Apple Silicon (M1/M2/M3)</span>
                </div>

                {/* Linux */}
                <div className="flex flex-col items-start gap-1.5">
                  <span
                    className="inline-flex items-center justify-center gap-3 px-6 py-3.5 btn-secondary text-sm opacity-50 cursor-not-allowed select-none"
                    role="button"
                    aria-label="Linux version coming soon"
                    aria-disabled="true"
                  >
                    Linux
                  </span>
                  <span className="text-xs text-text-dim pl-1">Coming soon</span>
                </div>
              </div>

              {/* Desktop How It Works */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.04]">
                {[
                  { icon: '⌨️', title: 'Press your hotkey', desc: 'Any app. Gmail, Slack, VS Code, Word — wherever your cursor is.' },
                  { icon: '🎙️', title: 'Speak naturally', desc: 'A minimal overlay appears. Ramble, pause, change direction. TypeGone handles it.' },
                  { icon: '✨', title: 'Text appears at cursor', desc: 'AI formats and pastes directly. No copy-paste, no switching windows.' },
                ].map((step) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">{step.icon}</span>
                    <div>
                      <p className="text-text-primary text-sm font-semibold mb-0.5">{step.title}</p>
                      <p className="text-text-dim text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ TELEGRAM ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-8" aria-labelledby="telegram-section-heading">
          <div className="card p-10 md:p-12 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/20 text-cyan text-xs font-semibold mb-6"
                  style={{ background: 'rgba(0,212,255,0.06)' }}
                >
                  📱 No Installation Required
                </div>
                <h2 id="telegram-section-heading" className="font-display font-extrabold text-xl md:text-2xl mb-3 tracking-tight">
                  Telegram Bot
                </h2>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  The fastest way to start. Open the TypeGone Telegram bot, send a voice message, and get back formatted text — emails, notes, summaries, to-dos. No download, no signup, 3 free messages.
                </p>
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm"
                  aria-label="Try TypeGone free on Telegram (opens in new tab)"
                >
                  Try Free on Telegram
                  <span className="text-xs opacity-50 font-normal">— no signup</span>
                </a>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { icon: '⚡', label: 'Instant access', desc: 'Open the bot and send a voice message. Done.' },
                  { icon: '🔄', label: 'Reformat anytime', desc: 'Change output type after transcription without re-recording.' },
                  { icon: '👥', label: 'Works in groups', desc: 'Add to Telegram groups for auto-transcription of all voice messages.' },
                  { icon: '🎁', label: 'Referral program', desc: 'Invite friends and both of you get 10 free messages.' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-base shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                    <div>
                      <span className="text-text-primary text-xs font-semibold">{item.label}</span>
                      <span className="text-text-dim text-xs ml-2">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ PLATFORM COMPARISON TABLE ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24" aria-labelledby="platform-comparison-heading">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" aria-hidden="true" />
            <h2 id="platform-comparison-heading" className="font-display font-extrabold text-2xl md:text-3xl mb-4 tracking-tight">
              Which platform is right for you?
            </h2>
          </div>

          <div className="rounded-2xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-sm" role="table" aria-label="TypeGone platform comparison">
              <thead>
                <tr className="border-b border-white/[0.04]">
                  <th className="p-5 text-left text-text-dim font-medium text-xs" scope="col">Feature</th>
                  <th className="p-5 text-center text-mint font-semibold text-xs" scope="col">Android</th>
                  <th className="p-5 text-center text-cyan font-semibold text-xs" scope="col">Desktop</th>
                  <th className="p-5 text-center text-text-muted font-semibold text-xs" scope="col">Telegram</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Works in any app', android: true, desktop: true, telegram: false, note: 'Telegram: Telegram only' },
                  { feature: 'AI voice modes', android: true, desktop: true, telegram: true },
                  { feature: 'Custom AI prompts', android: false, desktop: true, telegram: false },
                  { feature: 'No installation needed', android: false, desktop: false, telegram: true },
                  { feature: 'Full keyboard functionality', android: true, desktop: false, telegram: false },
                  { feature: '8 keyboard language layouts', android: true, desktop: false, telegram: false },
                  { feature: 'Global keyboard shortcuts', android: false, desktop: true, telegram: false },
                  { feature: 'Group transcription', android: false, desktop: false, telegram: true },
                  { feature: 'Dark / light theme', android: true, desktop: false, telegram: false },
                  { feature: 'Zero data retention', android: true, desktop: true, telegram: true },
                ].map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/[0.04] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                    <td className="p-5 text-text-muted text-xs">{row.feature}</td>
                    <td className="p-5 text-center text-sm" aria-label={`Android: ${row.android ? 'Yes' : 'No'}`}>
                      {row.android ? <span className="text-mint">✓</span> : <span className="text-text-dim/30">—</span>}
                    </td>
                    <td className="p-5 text-center text-sm" aria-label={`Desktop: ${row.desktop ? 'Yes' : 'No'}`}>
                      {row.desktop ? <span className="text-cyan">✓</span> : <span className="text-text-dim/30">—</span>}
                    </td>
                    <td className="p-5 text-center text-sm" aria-label={`Telegram: ${row.telegram ? 'Yes' : 'No'}`}>
                      {row.telegram ? <span className="text-white/60">✓</span> : <span className="text-text-dim/30">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ FAQ ═══ */}
      <ScrollReveal className="mt-24">
        <FAQSection faqs={DOWNLOAD_FAQS} title="Download FAQ" />
      </ScrollReveal>

      {/* ═══ FINAL CTA ═══ */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 mt-16 mb-8">
          <div className="card p-8 md:p-12 text-center relative overflow-hidden">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-mint/[0.04] rounded-full blur-[100px] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-xl md:text-2xl mb-3 tracking-tight">
                Not sure where to start?
              </h2>
              <p className="text-text-muted text-sm max-w-md mx-auto mb-6">
                Try TypeGone free on Telegram — no download, no signup. When you&apos;re ready, get the Android keyboard or desktop app and use the same account.
              </p>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm"
                aria-label="Try TypeGone free on Telegram (opens in new tab)"
              >
                Try Free on Telegram
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
