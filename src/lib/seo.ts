import { Metadata } from 'next';

export const SITE_URL = 'https://typegone.com';
export const SITE_NAME = 'TypeGone';
export const SITE_DESCRIPTION = 'Stop typing. Start speaking. TypeGone turns messy voice recordings into polished, professional text in seconds using AI. Emails, summaries, notes, to-do lists — just speak.';
export const TELEGRAM_BOT_URL = 'https://t.me/easywriteai_bot';
export const SUPPORT_EMAIL = 'hello@typegone.com';

interface PageSEO {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}

export function generateMetadata({ title, description, path = '', ogImage = '/og-default.png', noIndex = false, keywords = [] }: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title, description,
    keywords: ['voice to text', 'speech to text', 'AI transcription', 'voice typing', 'TypeGone', ...keywords],
    authors: [{ name: SITE_NAME }], creator: SITE_NAME, publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'en_US', url, title, description, siteName: SITE_NAME, images: [{ url: ogImage, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export function generateOrganizationSchema() {
  return { '@context': 'https://schema.org', '@type': 'Organization', name: SITE_NAME, url: SITE_URL, logo: `${SITE_URL}/logo.png`, description: SITE_DESCRIPTION, contactPoint: { '@type': 'ContactPoint', email: SUPPORT_EMAIL, contactType: 'customer support' }, sameAs: [TELEGRAM_BOT_URL] };
}

export function generateSoftwareAppSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: SITE_NAME,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Windows, macOS, Linux, Web, Telegram',
    description: SITE_DESCRIPTION, url: SITE_URL,
    offers: [
      { '@type': 'Offer', price: '0', priceCurrency: 'USD', name: 'Free Trial', description: '3 free messages, all processing modes' },
      { '@type': 'Offer', price: '3', priceCurrency: 'USD', name: 'Starter', description: '100 messages, all modes and languages' },
      { '@type': 'Offer', price: '5', priceCurrency: 'USD', name: 'Standard', description: '250 messages, priority processing' },
      { '@type': 'Offer', price: '10', priceCurrency: 'USD', name: 'Pro', description: '600 messages, desktop app access' },
    ],
    featureList: 'Voice to text, AI formatting, Filler word removal, 9 languages, 7 output types, 4 processing modes, Desktop app, Telegram bot, Keyboard shortcuts, Custom prompts',
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${SITE_URL}${item.url}` })) };
}

export function generateHowToSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'How to Convert Voice to Text with TypeGone',
    description: 'Turn your voice recordings into polished, formatted text in 3 simple steps.',
    step: [
      { '@type': 'HowToStep', name: 'Record your voice', text: 'Open TypeGone on Telegram or the desktop app. Speak naturally — ramble, pause, go off on tangents. Or press a global keyboard shortcut on your desktop.', position: 1 },
      { '@type': 'HowToStep', name: 'AI processes your speech', text: 'TypeGone transcribes, strips filler words, fixes grammar, and formats based on your chosen mode and output type. Choose from 4 processing modes and 7 output formats.', position: 2 },
      { '@type': 'HowToStep', name: 'Copy and use your text', text: 'Get a polished email, summary, note, to-do list, or chat message. Copy it anywhere — or on desktop, it pastes directly where your cursor is.', position: 3 },
    ],
    totalTime: 'PT30S',
  };
}

// ═══════════════════════════════════════════════════════════════
// HOMEPAGE FAQ — query-based for SEO (targets "how to...", "can I...", "does...")
// ═══════════════════════════════════════════════════════════════

export const HOMEPAGE_FAQS = [
  { question: 'What is TypeGone and how does it work?', answer: 'TypeGone is an AI-powered voice-to-text tool that converts messy voice recordings into clean, structured, professional text. You record a voice message via Telegram or the desktop app, and the AI transcribes, removes filler words, corrects grammar, and formats the output as emails, notes, summaries, to-do lists, chat messages, or meeting notes — in seconds.' },
  { question: 'How do I convert voice to text with TypeGone?', answer: 'Just open the TypeGone Telegram bot or desktop app and send a voice message. On desktop, press a global keyboard shortcut (like Cmd+Shift+V) in any application, speak, and polished text appears where your cursor is. No extra steps — speak and the formatted text is ready.' },
  { question: 'Is TypeGone free to use?', answer: 'Yes. TypeGone offers 3 free messages with no signup required. After that, the Starter plan is $3 for 100 messages, Standard is $5 for 250 messages, and Pro is $10 for 600 messages. Pay with Telegram Stars or USDT (TRC20). You can also earn free messages by inviting friends through the referral program.' },
  { question: 'What languages does TypeGone support?', answer: 'TypeGone supports 9 languages: English, Farsi (Persian), German, Spanish, French, Russian, Turkish, Arabic, and Chinese, plus an auto-detect mode that identifies your language automatically. The entire interface is localized in all supported languages.' },
  { question: 'Is my voice data private and secure?', answer: 'Yes. TypeGone operates under a zero data retention policy. Audio is processed in real time and immediately deleted — never stored, logged, or used for AI model training. We have strict zero-retention agreements with all AI providers. We use industry-standard TLS encryption for all data in transit.' },
  { question: 'What are the different processing modes?', answer: 'TypeGone offers 4 modes: Direct (raw word-for-word transcription), Light Clean (removes filler words, fixes grammar, keeps your natural voice), Enhanced (full AI formatting into 7 output types with tone selection), and AI Chat (ask questions by voice, get intelligent answers back).' },
  { question: 'What output formats are available?', answer: 'In Enhanced mode, TypeGone supports 7 output types: Email (with tone: professional, casual, friendly, formal), Summary, Notes, To-Do List, Chat Message, Meeting Notes, and General. You can reformat the same recording into any type after transcription without re-recording.' },
  { question: 'How fast is TypeGone compared to typing?', answer: 'The average person types at 45 wpm. Speaking naturally produces up to 240 wpm — a 5.3× speed advantage. TypeGone processes voice in 2-3 seconds, so the entire workflow from speaking to having polished text takes under 30 seconds.' },
  { question: 'Can I change the format after transcription?', answer: 'Yes. After any transcription, tap "Change Mode" to reformat the same voice recording into a different output type — email, notes, meeting notes, to-do list — without re-recording. You can also copy, retry, or save any transcription.' },
  { question: 'Does TypeGone work in Telegram groups?', answer: 'Yes. Add TypeGone to any Telegram group. Admins can enable auto-transcription so every voice message is automatically converted to text. Or members can reply to any voice message to transcribe it on demand. Group admins control the processing mode and language for the entire group.' },
  { question: 'What is the TypeGone desktop app?', answer: 'The desktop app (beta for Windows, macOS, Linux) gives you system-wide voice-to-text with global keyboard shortcuts. Press a hotkey anywhere — your email client, Docs, Slack, any app — speak naturally, and polished text pastes directly where your cursor is. You can set up custom AI prompts per shortcut for specific tasks.' },
  { question: 'Can I create custom shortcuts with custom prompts?', answer: 'Yes. The TypeGone desktop app lets you configure multiple keyboard shortcuts, each with its own custom AI prompt. For example, one shortcut for "summarize this," another for "reply professionally," and another for "translate to German." Press the shortcut, speak, and the AI applies your custom prompt to format the output.' },
  { question: 'How does TypeGone remove filler words?', answer: 'TypeGone\'s AI automatically detects and strips filler words like "um," "uh," "like," "you know," "basically," "actually," "I mean," and similar verbal artifacts. In Light Clean mode, it removes fillers while keeping your natural voice intact. In Enhanced mode, it goes further with full restructuring and formatting.' },
];

// ═══════════════════════════════════════════════════════════════
// DATA PRIVACY FAQ — query-based
// ═══════════════════════════════════════════════════════════════

export const DATA_PRIVACY_FAQS = [
  { question: 'Does TypeGone store my voice recordings?', answer: 'No. Audio is processed in real time and immediately discarded once text is returned. We do not store, log, or retain any voice recordings on our servers. This applies to both the Telegram bot and the desktop application.' },
  { question: 'Is my data used to train AI models?', answer: 'No. We have strict zero-retention agreements with all AI providers, including OpenAI. Your data is never stored or used for model training by us or any third party. Data is processed in memory and discarded immediately after delivering the result.' },
  { question: 'Does TypeGone sell my data?', answer: 'Never. We do not sell, share, or monetize your data. Our business model relies entirely on selling software credits. Your content is not our product.' },
  { question: 'What data does TypeGone retain?', answer: 'Only anonymous usage statistics (message count, processing mode used, language) and account info (Telegram user ID, preferences, payment records). Actual voice audio and transcription content is never stored.' },
  { question: 'How is my data encrypted?', answer: 'We use industry-standard TLS encryption for all data in transit between your device and our servers. Your voice recordings are encrypted from the moment they leave your device until processing is complete. Strict access controls and regular security audits safeguard your information.' },
  { question: 'What happens to context data from the desktop app?', answer: 'The desktop app processes limited contextual information (like the active application) to optimize formatting. This context is treated identically to voice data — processed in real time and immediately discarded. No screen content or application data is stored.' },
  { question: 'Can I request deletion of my data?', answer: 'Yes. You can contact us at hello@typegone.com to request deletion of all your account data. Since we don\'t store voice or transcription content, the only data to delete is your account preferences and usage statistics.' },
  { question: 'Is TypeGone GDPR compliant?', answer: 'TypeGone is designed with privacy-by-design principles. Our zero data retention policy for voice and transcription content means we collect minimal personal data. EU/EEA residents can exercise their rights under GDPR including access, correction, deletion, and data portability by contacting us.' },
];
