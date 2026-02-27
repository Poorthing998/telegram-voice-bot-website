'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TELEGRAM_BOT_URL } from '@/lib/seo';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Use Cases', href: '/#demo' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Mobile App', href: '/mobile' },
  { label: 'Voice to Text', href: '/voice-to-text' },
  { label: 'Privacy', href: '/data-privacy' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-white/[0.04] backdrop-blur-xl bg-base/80"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="TypeGone home">
          <Image
            src="/logo.png"
            alt="TypeGone Logo"
            width={220}
            height={72}
            className="w-auto h-12 lg:h-14 object-contain"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div
          className="hidden md:flex items-center gap-10 text-[13px] font-medium text-white/70"
          role="list"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="listitem"
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-[13px] font-medium text-white/80 border border-white/[0.14] rounded-xl hover:border-white/30 hover:text-white transition-all duration-300"
            aria-label="Download TypeGone for Android, iOS, Windows, macOS"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download
          </Link>

          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 btn-primary text-sm"
            aria-label="Try TypeGone free on Telegram (opens in new tab)"
          >
            ▶ Try Free
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition-colors"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
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
        <div
          id="mobile-menu"
          className="flex flex-col md:hidden border-t border-white/[0.04] bg-base/95 backdrop-blur-xl px-6 py-5 gap-1"
          role="menu"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={() => setMobileOpen(false)}
              className="py-3 text-sm text-white/75 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-3 mt-4">
            <Link
              href="/download"
              role="menuitem"
              onClick={() => setMobileOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 btn-secondary text-sm"
              aria-label="Download TypeGone for Android, Desktop, and more"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </Link>

            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 btn-primary text-sm"
              aria-label="Try TypeGone free on Telegram (opens in new tab)"
            >
              Try Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}