'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TELEGRAM_BOT_URL } from '@/lib/seo';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Demo', href: '/#demo' },
  { label: 'Modes', href: '/#modes' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Voice to Text', href: '/voice-to-text' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] backdrop-blur-xl bg-base/80">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-mint to-cyan flex items-center justify-center font-display font-extrabold text-base text-sm shadow-[0_0_24px_-4px_rgba(0,229,160,0.5)] group-hover:shadow-[0_0_36px_-4px_rgba(0,229,160,0.6)] transition-shadow duration-300">
            T
          </div>
          <span className="font-display font-bold text-lg tracking-tight">TypeGone</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium text-white/40">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white/90 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-white/50 border border-white/[0.08] rounded-xl hover:border-white/20 hover:text-white/80 transition-all duration-300"
          >
            Download
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/30">
              Beta
            </span>
          </Link>
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 btn-primary text-sm"
          >
            ▶ Try Free
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col md:hidden border-t border-white/[0.04] bg-base/95 backdrop-blur-xl px-6 py-5 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-4">
            <Link href="/download" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 btn-secondary text-sm">
              Download
            </Link>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 btn-primary text-sm"
            >
              Try Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
