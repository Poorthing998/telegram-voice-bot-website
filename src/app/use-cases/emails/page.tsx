import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { TELEGRAM_BOT_URL, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Voice to Email — Dictate Emails by Voice with AI Formatting',
  description:
    'Write emails 5× faster by speaking. TypeGone converts your voice into professionally formatted emails with proper subject lines, greetings, and structure. Try free.',
  keywords: [
    'voice to email',
    'dictate email',
    'speak to email',
    'email by voice',
    'voice email writer',
    'AI email from voice',
    'voice dictation email',
  ],
  alternates: { canonical: 'https://www.typegone.com/use-cases/emails' },
};

const faqs = [
  {
    question: 'Can TypeGone write professional emails from my voice?',
    answer: 'Yes. In Enhanced mode, TypeGone detects when you\'re composing an email and automatically formats it with a proper greeting, body paragraphs, and sign-off. It removes filler words and corrects grammar so your email sounds professional.',
  },
  {
    question: 'Does it add subject lines automatically?',
    answer: 'When TypeGone detects an email format, it suggests an appropriate subject line based on the content of your message. You can use it as-is or modify it.',
  },
  {
    question: 'What about tone — can I dictate casual and formal emails?',
    answer: 'TypeGone adapts to your speaking style. If you speak casually, the output maintains a conversational tone. If you use more formal language, the formatting matches. The Enhanced mode strikes a professional balance by default.',
  },
];

export default function VoiceToEmailPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Use Cases', url: '/use-cases/emails' },
        { name: 'Voice to Email', url: '/use-cases/emails' },
      ])} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <Link href="/voice-to-text" className="hover:text-text-muted transition-colors">Voice to Text</Link>
            <span>/</span>
            <span className="text-text-muted">Emails</span>
          </nav>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            Write Emails by Voice.<br />
            <span className="text-gradient">5× Faster.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-8 leading-relaxed">
            Stop staring at a blank email. Just say what you want to communicate and TypeGone formats it into a professional email — greeting, structure, sign-off, and all.
          </p>

          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-base">
            Try Voice to Email Free
          </a>
        </div>
      </section>

      {/* Demo section */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-16">
          <div className="rounded-3xl border border-white/[0.06] overflow-hidden bg-gradient-to-b from-surface to-base-light">
            <div className="grid grid-cols-1 md:grid-cols-2 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-12 h-12 rounded-[14px] bg-gradient-to-br from-mint to-cyan shadow-[0_0_30px_rgba(0,229,160,0.3)]">
                <span className="text-base font-bold">→</span>
              </div>

              <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/[0.04]">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-coral/70" />
                  <span className="font-mono text-[11px] text-coral/60 uppercase tracking-[0.2em]">You said</span>
                </div>
                <p className="text-text-muted leading-[2] text-[15px] font-light">
                  &quot;Hey <span className="text-coral/40 line-through">um</span> I need to email Sarah about the quarterly report being delayed <span className="text-coral/40 line-through">uh</span> tell her it&apos;ll be ready by Friday and <span className="text-coral/40 line-through">like</span> apologize for the delay and mention we found some discrepancies we needed to fix&quot;
                </p>
              </div>

              <div className="p-10 md:p-14 bg-white/[0.01]">
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-mint/80" />
                  <span className="font-mono text-[11px] text-mint/60 uppercase tracking-[0.2em]">TypeGone output</span>
                </div>
                <div className="text-[15px] leading-relaxed">
                  <p className="text-text-dim text-xs mb-3 font-mono">Subject: Q4 Report — Updated Timeline</p>
                  <p className="text-text-primary mb-3">Hi Sarah,</p>
                  <p className="text-text-muted mb-3">I wanted to let you know that the quarterly report will be ready by Friday. We apologize for the delay — our team identified some discrepancies in the data that needed to be corrected to ensure accuracy.</p>
                  <p className="text-text-muted mb-3">Thank you for your patience. Please let me know if you need anything in the meantime.</p>
                  <p className="text-text-primary">Best regards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Content */}
      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 mt-20">
          <div className="prose-tg">
            <h2>Why Voice to Email Changes Everything</h2>
            <p>
              The average professional sends 40 emails per day and spends 2.5 hours writing them. That&apos;s because typing an email involves composing, editing, re-reading, and formatting — every single time.
            </p>
            <p>
              With TypeGone, you speak naturally for 20 seconds and get a polished email in return. The AI handles greeting, tone, structure, and sign-off. You just say what you want to communicate.
            </p>

            <h2>How It Works</h2>
            <p>
              Set TypeGone to <strong>Enhanced mode</strong>, then record a voice message explaining what you want your email to say. The AI detects the email format, generates a subject line, structures the body, and adds professional formatting. Copy, paste into your email client, and send.
            </p>

            <h2>Perfect For</h2>
            <ul>
              <li>Busy professionals who send 20+ emails daily</li>
              <li>People who think faster than they type</li>
              <li>Non-native English speakers who want polished output</li>
              <li>Anyone tired of staring at blank email drafts</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mt-24">
        <FAQSection faqs={faqs} title="Voice to Email FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection title="Write your next email by voice" subtitle="20 seconds of speaking beats 5 minutes of typing." />
      </ScrollReveal>
    </>
  );
}
