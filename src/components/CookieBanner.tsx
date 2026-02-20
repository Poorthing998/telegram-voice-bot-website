'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so it doesn't flash on initial paint
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
    if (consent === 'accepted') {
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
    });
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:left-6 sm:right-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div
        className="max-w-3xl mx-auto rounded-2xl border border-white/10 backdrop-blur-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        style={{ background: 'rgba(15, 26, 46, 0.95)' }}
      >
        {/* Icon */}
        <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,229,160,0.12)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E5A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        {/* Text */}
        <p className="flex-1 text-sm leading-relaxed" style={{ color: '#9BABC5' }}>
          We use cookies to understand how you use TypeGone and to improve your experience.{' '}
          <Link href="/privacy" className="underline underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: '#00E5A0' }}>
            Privacy Policy
          </Link>
        </p>

        {/* Actions */}
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium rounded-xl border border-white/10 transition-all hover:border-white/20 hover:bg-white/5"
            style={{ color: '#9BABC5' }}
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-bold rounded-xl transition-all hover:opacity-90"
            style={{ background: '#00E5A0', color: '#060B14' }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
