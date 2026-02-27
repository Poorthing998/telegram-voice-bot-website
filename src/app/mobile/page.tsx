import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import {
  ANDROID_DOWNLOAD_URL,
  TELEGRAM_BOT_URL,
  MOBILE_FAQS,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateMobileAppSchema,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'TypeGone Mobile — AI Voice Keyboard for Android | Type with Your Voice in Any App',
  description:
    'TypeGone Mobile is a custom AI-powered Android keyboard. Tap the mic, speak, and get polished, AI-formatted text inserted directly into any app. Choose AI modes: Tidy Speech, Write Email, Summarize, and Translate. Download free for Android.',
  keywords: [
    'AI voice keyboard Android',
    'voice to text keyboard app',
    'AI keyboard Android',
    'voice typing keyboard',
    'Android voice keyboard',
    'speech to text keyboard',
    'custom Android keyboard',
    'voice input Android',
    'AI voice typing Android',
    'voice to text any app',
    'Android keyboard voice',
    'TypeGone Android',
    'voice keyboard app',
    'AI text input keyboard',
  ],
  alternates: { canonical: 'https://www.typegone.com/mobile' },
  openGraph: {
    title: 'TypeGone Mobile — AI Voice Keyboard for Android',
    description:
      'A custom Android keyboard that converts your voice to perfectly formatted text in any app. AI modes include Tidy Speech, Write Email, Summarize, and Translate.',
    url: 'https://www.typegone.com/mobile',
    type: 'website',
  },
};

const aiModes = [
  {
    name: 'Tidy Speech',
    emoji: '✨',
    desc: 'Cleans up filler words ("um," "uh," "like"), fixes grammar and punctuation, and restructures choppy sentences — while keeping your natural voice and tone intact.',
    example: '"um so like I wanted to say that the meeting is uh moved to Friday" → "The meeting has been moved to Friday."',
    color: 'mint',
  },
  {
    name: 'Write Email',
    emoji: '📧',
    desc: 'Turns your spoken thoughts into a properly structured professional email, complete with greeting, body, and sign-off.',
    example: '"tell Sarah the deadline is Thursday not Friday and ask her to confirm" → Fully formatted professional email.',
    color: 'cyan',
  },
  {
    name: 'AI Prompt',
    emoji: '🤖',
    desc: 'Structures your rambling speech into a clear, detailed prompt optimised for AI tools like ChatGPT, Claude, and Gemini.',
    example: '"I want an app that tracks habits and shows streaks" → Structured, detailed AI prompt.',
    color: 'lavender',
  },
  {
    name: 'Summarize',
    emoji: '📋',
    desc: 'Condenses long spoken content into concise, scannable bullet points. Great for meeting recaps, voice memos, and quick notes.',
    example: 'A 2-minute voice note → 4 clean bullet points with key takeaways.',
    color: 'warm',
  },
  {
    name: 'Translate to EN',
    emoji: '🌍',
    desc: 'Speak in any language and receive polished, natural-sounding English text. Supports all languages recognised by the AI transcription engine.',
    example: 'Spoken French, Spanish, Farsi, Arabic → Clean English output.',
    color: 'coral',
  },
];

const keyboardFeatures = [
  {
    icon: '⌨️',
    title: 'Full Keyboard Functionality',
    desc: 'TypeGone is a complete, production-quality keyboard. Type normally with the full QWERTY layout, use autocomplete, and seamlessly switch between typing and voice input — all within the same keyboard.',
  },
  {
    icon: '🎙️',
    title: 'One-Tap Voice Input',
    desc: 'Tap the mic, choose your AI mode, speak. The formatted result is inserted directly into the active text field — no copy-paste, no app switching, no friction.',
  },
  {
    icon: '🌍',
    title: 'Multi-Language Keyboard',
    desc: 'Full keyboard layouts for English (QWERTY), Persian, Arabic, Spanish, French, German, Russian, and Portuguese. Swipe on the spacebar to instantly switch languages.',
  },
  {
    icon: '🎨',
    title: 'Dynamic Theming',
    desc: 'Light and dark themes that sync automatically between the TypeGone companion app and the keyboard. Your preference, your keyboard.',
  },
  {
    icon: '🔄',
    title: 'Auto-Updates',
    desc: 'The in-app updater automatically checks for new versions and prompts you to update. Always stay on the latest release without manually visiting a download page.',
  },
  {
    icon: '🔒',
    title: 'Zero Data Retention',
    desc: 'Your voice and text are processed in real time and never stored. The same zero data retention guarantee that applies to all TypeGone products applies here too.',
  },
];

const howItWorksSteps = [
  {
    num: '01',
    icon: '⌨️',
    title: 'Set TypeGone as your keyboard',
    desc: 'Install the app, sign in, then enable TypeGone in Android keyboard settings. It takes under two minutes and works in every app on your device.',
  },
  {
    num: '02',
    icon: '🎙️',
    title: 'Tap mic and select your AI mode',
    desc: 'Open any app with a text field — WhatsApp, Gmail, Slack, Twitter, anything. Tap the microphone on the TypeGone keyboard and select your AI mode.',
  },
  {
    num: '03',
    icon: '✨',
    title: 'Speak. Get polished text.',
    desc: 'Speak naturally. TypeGone processes your voice with AI, applies your chosen transformation, and injects the formatted result directly into the text field.',
  },
];

const keyboardLayouts = [
  { flag: '🇬🇧', lang: 'English', layout: 'QWERTY' },
  { flag: '🇮🇷', lang: 'Persian', layout: 'فارسی' },
  { flag: '🇸🇦', lang: 'Arabic', layout: 'عربي' },
  { flag: '🇪🇸', lang: 'Spanish', layout: 'QWERTY' },
  { flag: '🇫🇷', lang: 'French', layout: 'AZERTY' },
  { flag: '🇩🇪', lang: 'German', layout: 'QWERTZ' },
  { flag: '🇷🇺', lang: 'Russian', layout: 'Кириллица' },
  { flag: '🇧🇷', lang: 'Portuguese', layout: 'QWERTY' },
];

export default function MobilePage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Mobile App', url: '/mobile' }])} />
      <JsonLd data={generateMobileAppSchema()} />
      <JsonLd data={generateFAQSchema(MOBILE_FAQS)} />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
        <div
          className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 70% 70%, rgba(0,229,160,0.07) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-text-dim mb-10">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-muted" aria-current="page">Mobile App</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div>
              <div
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-8"
                style={{ background: 'rgba(0,229,160,0.06)' }}
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint" />
                </span>
                Android Keyboard — v1.3.0 Available Now
              </div>

              <h1
                className="font-display font-extrabold tracking-tight mb-6 leading-[1.05]"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 4.8rem)' }}
              >
                Type with your voice.<br />
                <span className="text-gradient">In any app.</span>
              </h1>

              <p className="text-xl text-text-muted max-w-xl mb-4 leading-relaxed font-light">
                TypeGone is a custom Android keyboard with built-in AI. Tap the mic, speak, choose a mode — and polished text appears right where you were typing.
              </p>
              <p className="text-base text-text-dim max-w-lg mb-10 leading-relaxed">
                Works across every app on your device — WhatsApp, Gmail, Slack, Instagram, Chrome, Notes. If you can type there, you can speak there.
              </p>

              {/* Download CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Android */}
                <div className="flex flex-col items-start gap-1.5">
                  <a
                    href={ANDROID_DOWNLOAD_URL}
                    download="TypeGone.v1.3.0.apk"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary text-base"
                    aria-label="Download TypeGone for Android, version 1.3.0 APK"
                  >
                    {/* Android robot icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0007.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 10.1867.3432 13.2339 0 16.9996h24c-.3435-3.7657-2.6892-6.8129-6.1185-7.678"/>
                    </svg>
                    Download for Android
                  </a>
                  <span className="text-xs text-text-dim pl-1">v1.3.0 &middot; APK &middot; Android 6.0+</span>
                </div>

                {/* iOS coming soon */}
                <div className="flex flex-col items-start gap-1.5">
                  <span
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-secondary text-base opacity-50 cursor-not-allowed select-none"
                    aria-label="iOS version coming soon"
                    role="button"
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

              <div className="flex items-center gap-5 text-xs text-text-dim">
                <span className="flex items-center gap-1.5">✅ Free to try</span>
                <span className="flex items-center gap-1.5">✅ Works in every app</span>
                <span className="hidden sm:flex items-center gap-1.5">✅ <Link href="/data-privacy" className="hover:text-text-muted transition-colors underline underline-offset-2">Zero data retention</Link></span>
              </div>
            </div>

            {/* Right: Keyboard mockup */}
            <div className="flex items-center justify-center" aria-hidden="true">
              <div className="w-full max-w-[340px]">
                {/* Phone frame */}
                <div className="relative mx-auto rounded-[2.5rem] border-2 border-white/10 bg-surface/60 shadow-2xl overflow-hidden" style={{ aspectRatio: '9/16', maxHeight: '480px' }}>
                  {/* App content area */}
                  <div className="absolute inset-x-0 top-0 h-[55%] p-5 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-mint to-cyan flex items-center justify-center text-xs font-bold text-base">T</div>
                      <div className="flex-1 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center px-3">
                        <div className="flex gap-0.5">
                          {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-0.5 rounded-full bg-mint/60 animate-wave-bar" style={{ height: `${8 + i * 3}px`, animationDelay: `${i * 0.1}s` }} />
                          ))}
                        </div>
                        <span className="ml-2 text-[9px] text-coral/70 font-mono">● REC</span>
                      </div>
                    </div>
                    <div className="flex-1 rounded-xl bg-white/[0.02] border border-white/[0.04] p-3 overflow-hidden">
                      <div className="space-y-2">
                        <div className="h-2 bg-white/[0.08] rounded-full w-full" />
                        <div className="h-2 bg-white/[0.08] rounded-full w-4/5" />
                        <div className="h-2 bg-white/[0.08] rounded-full w-full" />
                        <div className="h-2 bg-white/[0.08] rounded-full w-3/5" />
                        <div className="mt-3 h-2 bg-mint/30 rounded-full w-full animate-pulse" />
                        <div className="h-2 bg-mint/20 rounded-full w-5/6" />
                      </div>
                    </div>
                  </div>

                  {/* Keyboard area */}
                  <div className="absolute inset-x-0 bottom-0 h-[48%] bg-base-light/80 border-t border-white/[0.06] p-2">
                    {/* Mode bar */}
                    <div className="flex gap-1 mb-2 overflow-hidden">
                      {['Tidy Speech', 'Email', 'Summarize', 'Translate'].map((mode, i) => (
                        <div
                          key={mode}
                          className={`px-2 py-1 rounded-lg text-[7px] font-semibold whitespace-nowrap ${i === 0 ? 'bg-mint/20 text-mint border border-mint/30' : 'bg-white/[0.04] text-text-dim border border-white/[0.06]'}`}
                        >
                          {mode}
                        </div>
                      ))}
                    </div>
                    {/* Keyboard rows */}
                    {[
                      ['Q','W','E','R','T','Y','U','I','O','P'],
                      ['A','S','D','F','G','H','J','K','L'],
                      ['Z','X','C','V','B','N','M'],
                    ].map((row, ri) => (
                      <div key={ri} className="flex justify-center gap-0.5 mb-0.5">
                        {row.map((key) => (
                          <div key={key} className="flex-1 max-w-[26px] py-1.5 rounded-md bg-white/[0.06] border border-white/[0.04] text-[7px] font-medium text-center text-text-dim">
                            {key}
                          </div>
                        ))}
                      </div>
                    ))}
                    {/* Bottom bar with mic */}
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex-1 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.04] text-[7px] text-center text-text-dim/40">
                        space
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-mint to-cyan flex items-center justify-center shadow-[0_0_10px_rgba(0,229,160,0.4)]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                          <line x1="12" y1="19" x2="12" y2="23"/>
                          <line x1="8" y1="23" x2="16" y2="23"/>
                        </svg>
                      </div>
                      <div className="flex-none py-1.5 px-2 rounded-lg bg-white/[0.04] border border-white/[0.04] text-[7px] text-center text-text-dim/40">
                        ⏎
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-16" aria-labelledby="how-it-works-heading">
          <div className="text-center mb-14">
            <div className="section-line mx-auto mb-6" aria-hidden="true" />
            <h2 id="how-it-works-heading" className="font-display font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">How it works</h2>
            <p className="text-text-dim text-base">Three taps. Polished text in any app.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorksSteps.map((step) => (
              <div key={step.num} className="card p-8 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 font-display font-extrabold text-6xl text-white/[0.03]" aria-hidden="true">{step.num}</div>
                <div className="text-3xl mb-5" aria-hidden="true">{step.icon}</div>
                <h3 className="font-display font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ AI MODES ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24" aria-labelledby="ai-modes-heading">
          <div className="text-center mb-14">
            <div className="section-line mx-auto mb-6" aria-hidden="true" />
            <h2 id="ai-modes-heading" className="font-display font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">5 AI voice modes.</h2>
            <p className="text-text-dim text-base max-w-lg mx-auto">
              Not just transcription. Each mode applies a different AI transformation to your speech before inserting the result.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aiModes.map((mode) => (
              <div key={mode.name} className="card p-8 group relative overflow-hidden">
                <div className="flex items-start gap-5">
                  <div className="text-3xl shrink-0 mt-1" aria-hidden="true">{mode.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg mb-2">{mode.name}</h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4">{mode.desc}</p>
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.04] p-4">
                      <p className="text-[11px] font-mono text-text-dim leading-relaxed">{mode.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Placeholder: custom modes teaser */}
            <div className="card p-8 border-dashed opacity-60 flex items-center justify-center text-center">
              <div>
                <div className="text-3xl mb-3" aria-hidden="true">✚</div>
                <p className="font-display font-bold text-sm text-text-muted mb-1">Custom Modes</p>
                <p className="text-xs text-text-dim">Define your own AI prompts for any transformation you need.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ ENABLING KEYBOARD GUIDE ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24" aria-labelledby="setup-heading">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-mint/[0.04] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
              <div className="section-line mb-6" aria-hidden="true" />
              <h2 id="setup-heading" className="font-display font-extrabold text-2xl md:text-3xl mb-3 tracking-tight">Enable TypeGone in 2 minutes</h2>
              <p className="text-text-dim text-sm max-w-lg mb-10">After downloading and installing the APK, follow these steps to activate your AI keyboard.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ol className="flex flex-col gap-5" aria-label="Setup steps for TypeGone Android keyboard">
                  {[
                    { step: '1', label: 'Install the APK', desc: 'Download and install TypeGone.v1.3.0.apk. You may need to enable "Install from unknown sources" in your Android settings for this one-time setup.' },
                    { step: '2', label: 'Sign in to TypeGone', desc: 'Open the TypeGone app and sign in with your account. This syncs your authentication to the keyboard.' },
                    { step: '3', label: 'Enable in keyboard settings', desc: 'Go to Settings → System → Languages & input → On-screen keyboard → Manage on-screen keyboards, then toggle TypeGone on.' },
                    { step: '4', label: 'Set as default', desc: 'Set TypeGone as your default keyboard. You\'re ready — open any app with a text field and tap the mic.' },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-4">
                      <span className="w-7 h-7 rounded-full bg-mint/[0.12] border border-mint/20 text-mint text-xs font-bold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                        {item.step}
                      </span>
                      <div>
                        <span className="text-text-primary text-sm font-semibold block mb-0.5">{item.label}</span>
                        <p className="text-text-dim text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="flex flex-col justify-center gap-4">
                  <a
                    href={ANDROID_DOWNLOAD_URL}
                    download="TypeGone.v1.3.0.apk"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary text-base"
                    aria-label="Download TypeGone APK for Android v1.3.0"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0007.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 10.1867.3432 13.2339 0 16.9996h24c-.3435-3.7657-2.6892-6.8129-6.1185-7.678"/>
                    </svg>
                    Download APK — Android
                  </a>
                  <span className="text-xs text-text-dim text-center">v1.3.0 &middot; Android 6.0+</span>

                  <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-xs text-text-dim leading-relaxed">
                      <strong className="text-text-muted">Already have a TypeGone account?</strong> Your credits are shared across all platforms — Telegram, desktop, and mobile keyboard. No new account required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ KEYBOARD FEATURES ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24" aria-labelledby="features-heading">
          <div className="text-center mb-14">
            <div className="section-line mx-auto mb-6" aria-hidden="true" />
            <h2 id="features-heading" className="font-display font-extrabold text-3xl md:text-4xl mb-4 tracking-tight">Built as a real keyboard.</h2>
            <p className="text-text-dim text-base max-w-lg mx-auto">Not a voice overlay, not a gimmick. A complete, production-quality keyboard with AI voice built in.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyboardFeatures.map((f) => (
              <div key={f.title} className="card p-7">
                <div className="text-2xl mb-4" aria-hidden="true">{f.icon}</div>
                <h3 className="font-display font-bold mb-2">{f.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ LANGUAGE SUPPORT ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24" aria-labelledby="languages-heading">
          <div className="card p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="section-line mb-6" aria-hidden="true" />
              <h2 id="languages-heading" className="font-display font-extrabold text-2xl md:text-3xl mb-2 tracking-tight">8 keyboard layouts.</h2>
              <p className="text-text-dim text-sm mb-10 max-w-xl">
                Switch between full keyboard layouts instantly by swiping on the spacebar. Each layout is optimised for its language — including right-to-left support for Arabic and Persian.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {keyboardLayouts.map((l) => (
                  <div key={l.lang} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-center">
                    <div className="text-2xl mb-1.5" aria-hidden="true">{l.flag}</div>
                    <div className="text-xs font-semibold text-text-muted">{l.lang}</div>
                    <div className="text-[10px] text-text-dim mt-0.5 font-mono">{l.layout}</div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-xs text-text-dim">
                Voice recognition supports additional languages. The AI voice modes process and return text in English by default, with translation handled by the &quot;Translate to EN&quot; mode.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-mint/[0.04] rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ IOS COMING SOON ═══ */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 mt-24" aria-labelledby="ios-heading">
          <div className="card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-lavender/[0.04] rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-lavender/20 text-lavender text-xs font-semibold mb-6"
                style={{ background: 'rgba(139,109,255,0.06)' }}
              >
                🍎 iOS App — In Development
              </div>
              <h2 id="ios-heading" className="font-display font-extrabold text-2xl md:text-3xl mb-4 tracking-tight">iOS is coming soon.</h2>
              <p className="text-text-muted text-sm max-w-md mx-auto mb-8 leading-relaxed">
                We are actively building the TypeGone keyboard for iPhone and iPad. iOS users can use TypeGone now via the Telegram bot or the macOS desktop app while the iOS keyboard is in development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 btn-primary text-sm"
                  aria-label="Try TypeGone free on Telegram while iOS app is in development (opens in new tab)"
                >
                  Try Free on Telegram
                </a>
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 px-6 py-3 btn-secondary text-sm"
                  aria-label="Download TypeGone desktop app for macOS"
                >
                  Download Desktop (macOS)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══ VS GBOARD ═══ */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-24" aria-labelledby="comparison-heading">
          <div className="text-center mb-14">
            <div className="section-line mx-auto mb-6" aria-hidden="true" />
            <h2 id="comparison-heading" className="font-display font-extrabold text-2xl md:text-4xl mb-4 tracking-tight">TypeGone vs. built-in voice typing</h2>
            <p className="text-text-dim text-base max-w-lg mx-auto">
              Google&apos;s built-in voice typing gives you raw words. TypeGone gives you formatted, usable text.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Regular voice typing */}
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-sm" aria-hidden="true">🎙️</div>
                <h3 className="font-display font-bold text-base">Gboard / Built-in Voice Typing</h3>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-text-muted" role="list" aria-label="Built-in voice typing limitations">
                {[
                  'Raw word-for-word transcription',
                  'Filler words ("um", "uh") included',
                  'No formatting or structure',
                  'No email, notes, or summary output',
                  'Single language per session',
                  'No AI processing applied',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-text-dim/40 mt-0.5 shrink-0" aria-hidden="true">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* TypeGone */}
            <div className="card p-8 glow-mint pricing-pop relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-mint to-cyan flex items-center justify-center text-sm font-bold text-base" aria-hidden="true">T</div>
                <h3 className="font-display font-bold text-base">TypeGone Keyboard</h3>
                <span className="ml-auto text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-mint/15 text-mint">Better</span>
              </div>
              <ul className="flex flex-col gap-3 text-sm text-white" role="list" aria-label="TypeGone keyboard advantages">
                {[
                  'AI-formatted, polished output',
                  'Filler words automatically removed',
                  'Structured: emails, notes, bullet points',
                  '5 AI modes: Write Email, Summarize, Translate',
                  '8 keyboard language layouts',
                  'AI processing applied before insertion',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-mint mt-0.5 shrink-0" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 text-sm text-text-dim">
            See how TypeGone compares to other voice tools. <Link href="/compare" className="text-mint/60 hover:text-mint underline underline-offset-2">Full comparison →</Link>
          </p>
        </section>
      </ScrollReveal>

      {/* ═══ FAQ ═══ */}
      <ScrollReveal className="mt-24">
        <FAQSection faqs={MOBILE_FAQS} title="Mobile App FAQ" />
      </ScrollReveal>

      {/* ═══ CTA ═══ */}
      <ScrollReveal>
        <section className="max-w-4xl mx-auto px-6 mt-16 mb-8">
          <div className="card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-mint/[0.05] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-4 tracking-tight">
                Your voice. Any app. AI-formatted.
              </h2>
              <p className="text-text-muted text-sm max-w-md mx-auto mb-8 leading-relaxed">
                Download TypeGone for Android and start typing with your voice — in every app, with AI modes that actually format your speech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={ANDROID_DOWNLOAD_URL}
                  download="TypeGone.v1.3.0.apk"
                  className="inline-flex items-center gap-2 px-8 py-4 btn-primary text-base"
                  aria-label="Download TypeGone for Android"
                >
                  Download for Android
                </a>
                <a
                  href={TELEGRAM_BOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 btn-secondary text-sm"
                  aria-label="Try TypeGone free on Telegram (opens in new tab)"
                >
                  Try Free on Telegram
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
}
