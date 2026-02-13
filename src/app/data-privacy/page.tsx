import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema, generateFAQSchema, DATA_PRIVACY_FAQS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Data Ownership & Privacy — Zero Data Retention Voice to Text',
  description: 'TypeGone never stores your voice recordings or transcriptions. Zero data retention, no model training, no data selling. Your voice is processed in real time and immediately deleted.',
  keywords: ['voice to text privacy', 'secure voice transcription', 'zero data retention', 'private speech to text', 'GDPR voice to text', 'voice data security', 'encrypted voice transcription'],
  alternates: { canonical: 'https://typegone.com/data-privacy' },
};

export default function DataPrivacyPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Data Privacy', url: '/data-privacy' }])} />
      <JsonLd data={generateFAQSchema(DATA_PRIVACY_FAQS)} />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-muted">Data Privacy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-mint/20 text-mint text-xs font-semibold mb-8" style={{ background: 'rgba(0,229,160,0.06)' }}>
            🔒 Zero Data Retention
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            Your Voice. Your Data.<br />
            <span className="text-gradient">Your Control.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-4 leading-relaxed">
            TypeGone is built on a simple principle: we process your voice and give you the text. We don&apos;t keep any of it. Not your audio, not your transcriptions, not your context data — nothing.
          </p>
        </div>
      </section>

      {/* Data Ownership Cards */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight">Data Ownership &amp; Privacy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center text-2xl mb-5">🗑️</div>
              <h3 className="font-display font-bold text-lg mb-3">Zero Data Retention</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                None of your dictation data — audio, transcripts, or edits — is stored or used for model training by us or any third party. TypeGone only retains anonymous usage statistics, such as total word count and message count.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan/10 flex items-center justify-center text-2xl mb-5">🚫</div>
              <h3 className="font-display font-bold text-lg mb-3">No Data Selling</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We never sell your data. Ever. You own your data — our entire business model relies on selling software credits, not user information. Your content is not our product.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 rounded-2xl bg-lavender/10 flex items-center justify-center text-2xl mb-5">☁️</div>
              <h3 className="font-display font-bold text-lg mb-3">Cloud Processing</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Transcription is performed on the cloud to ensure the highest accuracy and low-latency performance. Your audio is transmitted securely, processed in real time, and immediately discarded once the result is returned to your device.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Contextual Processing & Security */}
      <ScrollReveal>
        <section className="max-w-6xl mx-auto px-6 mt-8">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight">Contextual Processing &amp; Security</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card p-8">
              <div className="w-12 h-12 rounded-2xl bg-warm/10 flex items-center justify-center text-2xl mb-5">🧠</div>
              <h3 className="font-display font-bold text-lg mb-3">Context Awareness</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                When you use TypeGone, we process your voice audio along with limited contextual information — such as the application you&apos;re using and relevant text within it — to deliver accurate, context-aware transcriptions.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Both your audio and contextual data are processed in real time on our cloud servers and <strong className="text-text-primary">immediately discarded once the result is returned to your device</strong>. We do not store, log, or retain any of this content.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                The only exception is when you voluntarily submit feedback, in which case we collect necessary diagnostic information to help resolve your issue. If you submit feedback, we may collect the associated diagnostic information and, with your explicit consent, pseudonymized text or corrections to improve TypeGone for all users.
              </p>
            </div>

            <div className="card p-8">
              <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center text-2xl mb-5">🛡️</div>
              <h3 className="font-display font-bold text-lg mb-3">Security &amp; Encryption</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                We employ industry-standard encryption for all data, both in transit and at rest. Your voice recordings are encrypted using TLS from the moment they leave your device until processing is complete.
              </p>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                Strict access controls and regular security audits are in place to safeguard your information. No human at TypeGone ever hears your voice recordings or reads your transcriptions.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Only essential, automated systems process your data during the real-time transcription pipeline. Once text is delivered, nothing persists.
              </p>
            </div>
          </div>

          <div className="card p-8">
            <div className="w-12 h-12 rounded-2xl bg-mint/10 flex items-center justify-center text-2xl mb-5">🤝</div>
            <h3 className="font-display font-bold text-lg mb-3">Third-Party AI Partners</h3>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              TypeGone utilizes leading LLM providers (such as OpenAI) to deliver its transcription and text formatting services. We have strict <strong className="text-text-primary">&quot;zero retention&quot; agreements</strong> with all third-party providers, ensuring your data is never stored or used for model training.
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              Data sent to these providers is processed in memory and discarded immediately after delivering the result. No voice recordings, transcriptions, or contextual data are stored, cached, or logged by any of our AI partners. We carefully vet every provider and maintain contractual guarantees around data handling, configured for zero retention by the providers, ensuring no storage or use beyond the immediate processing required to deliver the service.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* How data flows — visual */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-24">
          <div className="text-center mb-12">
            <div className="section-line mx-auto mb-6" />
            <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight">How Your Data Flows</h2>
            <p className="text-text-dim text-sm mt-3 max-w-md mx-auto">Every step is real-time. Nothing is stored.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '01', icon: '🎤', title: 'You Speak', desc: 'Audio is captured on your device and encrypted before transmission.' },
              { num: '02', icon: '☁️', title: 'Cloud Processing', desc: 'Audio is transcribed and formatted in real time using AI. Context preferences applied.' },
              { num: '03', icon: '📤', title: 'Text Delivered', desc: 'Formatted text is returned to your device. The result you see is the only copy.' },
              { num: '04', icon: '🗑️', title: 'Data Deleted', desc: 'Audio, transcription, and all intermediate data are immediately purged from all servers.' },
            ].map((step) => (
              <div key={step.num} className="card p-6 text-center relative overflow-hidden">
                <div className="absolute top-3 right-3 font-display font-extrabold text-4xl text-white/[0.03]">{step.num}</div>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-display font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-text-dim text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Privacy promise */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-24">
          <div className="card p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-mint/[0.04] rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-display font-extrabold text-2xl md:text-3xl mb-10 tracking-tight">The TypeGone Privacy Promise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: '✅', text: 'Voice recordings are never stored' },
                  { icon: '✅', text: 'Transcriptions are never stored' },
                  { icon: '✅', text: 'No data used for AI training' },
                  { icon: '✅', text: 'No data sold to third parties' },
                  { icon: '✅', text: 'Industry-standard encryption in transit' },
                  { icon: '✅', text: 'Zero retention with all AI providers' },
                  { icon: '✅', text: 'No human access to your content' },
                  { icon: '✅', text: 'Anonymous usage stats only' },
                  { icon: '✅', text: 'Context data discarded after processing' },
                  { icon: '✅', text: 'Feedback collected only with your consent' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-mint text-lg">{item.icon}</span>
                    <span className="text-text-primary text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Related links */}
      <ScrollReveal>
        <section className="max-w-5xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href="/privacy" className="card p-6 group flex items-start gap-4">
              <span className="text-2xl mt-0.5">📜</span>
              <div>
                <h3 className="font-display font-bold text-sm mb-1 group-hover:text-mint transition-colors">Privacy Policy</h3>
                <p className="text-text-dim text-xs">Full legal privacy policy covering all personal data handling.</p>
              </div>
            </Link>
            <Link href="/terms" className="card p-6 group flex items-start gap-4">
              <span className="text-2xl mt-0.5">📋</span>
              <div>
                <h3 className="font-display font-bold text-sm mb-1 group-hover:text-mint transition-colors">Terms of Service</h3>
                <p className="text-text-dim text-xs">Complete terms governing your use of TypeGone services.</p>
              </div>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal className="mt-24 mb-24">
        <FAQSection faqs={DATA_PRIVACY_FAQS} title="Data Privacy FAQ" />
      </ScrollReveal>
    </>
  );
}
