import { TELEGRAM_BOT_URL } from '@/lib/seo';

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function CTASection({
  title = 'Ready to stop typing?',
  subtitle = '3 free messages. No signup. Just speak.',
  buttonText = 'Start on Telegram',
}: CTAProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 mt-32 mb-24">
      <div className="relative text-center py-24 overflow-hidden rounded-3xl border border-white/[0.04] bg-gradient-to-b from-mint/[0.04] to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint/[0.06] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-mint/[0.06] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-mint/[0.03] pointer-events-none" />

        <div className="relative z-10 px-6">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-text-muted mb-12 text-lg">{subtitle}</p>
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 btn-primary text-lg"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
