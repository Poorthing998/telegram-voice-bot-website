import { Metadata } from 'next';

// ═══════════════════════════════════════
// SITE CONFIG
// ═══════════════════════════════════════

export const SITE_URL = 'https://typegone.app';
export const SITE_NAME = 'TypeGone';
export const SITE_DESCRIPTION = 'Stop typing. Start speaking. TypeGone turns messy voice ramblings into polished, professional text in seconds using AI.';
export const TELEGRAM_BOT_URL = 'https://t.me/easywriteai_bot';

// ═══════════════════════════════════════
// METADATA GENERATOR
// ═══════════════════════════════════════

interface PageSEO {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generateMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-default.png',
  noIndex = false,
  keywords = [],
}: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      'voice to text',
      'speech to text',
      'AI transcription',
      'voice typing',
      'TypeGone',
      ...keywords,
    ],
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
  };
}

// ═══════════════════════════════════════
// JSON-LD STRUCTURED DATA
// ═══════════════════════════════════════

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: SITE_DESCRIPTION,
    sameAs: [TELEGRAM_BOT_URL],
  };
}

export function generateSoftwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Windows, macOS, Linux, Web',
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    offers: [
      {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        name: 'Starter',
        description: '3 free messages, all processing modes',
      },
      {
        '@type': 'Offer',
        price: '5',
        priceCurrency: 'USD',
        name: 'Standard',
        description: '100 messages, all modes and languages, priority processing',
      },
      {
        '@type': 'Offer',
        price: '10',
        priceCurrency: 'USD',
        name: 'Pro',
        description: '250 messages, longest voice support, desktop app access',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Convert Voice to Text with TypeGone',
    description: 'Turn your voice recordings into polished, formatted text in 3 simple steps.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Record your voice',
        text: 'Open TypeGone on Telegram or the desktop app and hold the mic button. Speak naturally — ramble, pause, go off on tangents.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'AI processes your speech',
        text: 'TypeGone transcribes your voice, strips filler words like "um" and "uh", fixes grammar, and formats the text based on your chosen mode.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Copy and use your text',
        text: 'Get a polished email, summary, note, or action list. Copy it and paste it wherever you need.',
        position: 3,
      },
    ],
    totalTime: 'PT30S',
  };
}

// ═══════════════════════════════════════
// COMMON FAQs (reused across pages)
// ═══════════════════════════════════════

export const COMMON_FAQS = [
  {
    question: 'What is TypeGone?',
    answer:
      'TypeGone is an AI-powered voice-to-text tool that converts messy voice recordings into clean, structured, professional text. It removes filler words, fixes grammar, and formats output as emails, notes, summaries, or action items.',
  },
  {
    question: 'How does TypeGone work?',
    answer:
      'You record a voice message via Telegram or the TypeGone desktop app. The AI transcribes your speech, removes filler words, corrects grammar, and formats the text based on your selected processing mode (Direct, Light Clean, Enhanced, or AI Chat).',
  },
  {
    question: 'Is TypeGone free to use?',
    answer:
      'Yes, TypeGone offers 3 free messages with no signup required. After that, the Standard plan is $5 for 100 messages, and the Pro plan is $10 for 250 messages.',
  },
  {
    question: 'What languages does TypeGone support?',
    answer:
      'TypeGone supports 9 languages: English, Farsi (فارسی), German (Deutsch), Spanish (Español), French (Français), Russian (Русский), Turkish (Türkçe), Arabic (العربية), and Chinese (中文). It also has an auto-detect mode.',
  },
  {
    question: 'Is my voice data private?',
    answer:
      'Yes. Audio is processed and immediately deleted. TypeGone does not store or train on your voice data. Privacy is built into the core architecture.',
  },
  {
    question: 'How fast is TypeGone?',
    answer:
      'TypeGone processes your voice in 2-3 seconds. Speaking is up to 5.3× faster than typing, at up to 240 words per minute compared to the average 45 wpm typing speed.',
  },
  {
    question: 'What are the processing modes?',
    answer:
      'TypeGone offers 4 modes: Direct (raw transcription), Light Clean (removes filler, fixes grammar), Enhanced (full formatting as emails, summaries, notes), and AI Chat (voice-powered conversation with AI).',
  },
];
