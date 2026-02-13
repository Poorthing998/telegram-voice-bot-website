import Link from 'next/link';
import { TELEGRAM_BOT_URL } from '@/lib/seo';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-base py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-mint to-cyan flex items-center justify-center font-display font-bold text-base text-xs">
                T
              </div>
              <span className="font-display font-bold text-sm text-text-dim">TypeGone</span>
            </Link>
            <p className="text-xs text-text-dim leading-relaxed">
              AI-powered voice to text that understands context, formatting, and intent. Stop typing, start speaking.
            </p>
          </div>

          {/* Product — internal links help SEO */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-text-muted mb-4">Product</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text-dim">
              <li><Link href="/#features" className="hover:text-text-muted transition-colors">Features</Link></li>
              <li><Link href="/#pricing" className="hover:text-text-muted transition-colors">Pricing</Link></li>
              <li><Link href="/#modes" className="hover:text-text-muted transition-colors">Processing Modes</Link></li>
              <li><Link href="/download" className="hover:text-text-muted transition-colors">Download Desktop App</Link></li>
            </ul>
          </div>

          {/* Use Cases — SEO landing pages */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-text-muted mb-4">Use Cases</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text-dim">
              <li><Link href="/voice-to-text" className="hover:text-text-muted transition-colors">Voice to Text</Link></li>
              <li><Link href="/use-cases/emails" className="hover:text-text-muted transition-colors">Voice to Email</Link></li>
              <li><Link href="/use-cases/notes" className="hover:text-text-muted transition-colors">Voice Notes to Text</Link></li>
              <li><Link href="/use-cases/meeting-notes" className="hover:text-text-muted transition-colors">Meeting Notes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-text-muted mb-4">Company</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-text-dim">
              <li><Link href="/privacy" className="hover:text-text-muted transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-text-muted transition-colors">Terms of Service</Link></li>
              <li><a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-text-muted transition-colors">Telegram Bot</a></li>
              <li><Link href="/compare" className="hover:text-text-muted transition-colors">Compare</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-text-dim/50">© {new Date().getFullYear()} TypeGone. All rights reserved.</span>
          <div className="flex items-center gap-4 text-xs text-text-dim/50">
            <span>Made for people who think faster than they type.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
