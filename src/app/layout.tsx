import type { Metadata } from 'next';
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import JsonLd from '@/components/JsonLd';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundAtmosphere from '@/components/BackgroundAtmosphere';
import CookieBanner from '@/components/CookieBanner';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, generateOrganizationSchema, generateSoftwareAppSchema } from '@/lib/seo';

// ═══ FONTS — loaded optimally by Next.js ═══
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
});

// ═══ GLOBAL METADATA ═══
export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — Your voice. Perfected.`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'voice to text',
    'speech to text AI',
    'voice transcription',
    'AI text formatter',
    'voice typing app',
    'convert voice to text',
    'voice memo to text',
    'TypeGone',
    'dictation software',
    'voice notes to email',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: `${SITE_NAME} — Your voice. Perfected.`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'TypeGone — AI Voice to Text',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Your voice. Perfected.`,
    description: SITE_DESCRIPTION,
    images: ['/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Add your verification codes
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Structured Data — Organization + Software */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateSoftwareAppSchema()} />

        {/* Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%2300E5A0'/><text x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle' font-size='16' font-weight='bold' fill='%23060B14' font-family='sans-serif'>T</text></svg>"
        />

        {/* Google Consent Mode — defaults to denied until user accepts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                wait_for_update: 500,
              });
              gtag('js', new Date());
              gtag('config', 'G-6W1CMNMELM');
            `,
          }}
        />
      </head>

      <body className="relative min-h-screen font-body">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6W1CMNMELM"
          strategy="afterInteractive"
        />

        <BackgroundAtmosphere />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
