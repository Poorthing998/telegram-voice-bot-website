import { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { generateBreadcrumbSchema, SUPPORT_EMAIL } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'TypeGone Privacy Policy — how we handle your data, voice recordings, and personal information. Zero data retention on all voice content.',
  alternates: { canonical: 'https://www.typegone.com/privacy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy' }])} />

      <section className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
          <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
          <span>/</span>
          <span className="text-text-muted">Privacy Policy</span>
        </nav>

        <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-text-dim text-sm mb-12">Last Updated: February 14, 2026</p>

        <div className="prose-tg">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how TypeGone (&quot;TypeGone,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and handles your personal data (&quot;Personal Data&quot;) and what choices you have when you use our website, Telegram bot, desktop application, and related services (collectively, the &quot;Services&quot;). By using the Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please do not access or use the Services.
          </p>
          <p>
            For details on how we handle your voice data and transcription content specifically, see our <Link href="/data-privacy">Data Ownership &amp; Privacy</Link> page.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>A. Account Information</h3>
          <p>
            When you use TypeGone through Telegram, we receive basic profile information provided by Telegram (user ID, first name, username, language preference). If you use our desktop application, you may create an account with an email address. We use this information to provide the Services and communicate with you.
          </p>

          <h3>B. Voice &amp; Transcription Data (Customer Content)</h3>
          <p>
            When you send a voice message, we process your audio along with your selected preferences (language, processing mode, output type, tone) to deliver accurate, context-aware results. <strong>Your audio and the resulting transcription are processed in real time and immediately discarded once text is returned to your device.</strong> We do not store, log, or retain any voice recordings or transcription content on our servers.
          </p>
          <p>
            The desktop app additionally processes limited contextual information, such as the active application, to optimize formatting. This context is processed identically — used in real time and immediately discarded.
          </p>
          <p>
            The only exception is when you voluntarily submit feedback, in which case we collect necessary diagnostic information to help resolve your issue. If you submit feedback, we may collect associated diagnostic information and, with your explicit consent, pseudonymized text or corrections to improve TypeGone for all users.
          </p>

          <h3>C. Usage Data</h3>
          <p>
            We collect anonymous usage statistics to operate and improve the Services, including: total message count, processing mode used, audio duration, language selected, referral code usage, and general interaction patterns. This data is aggregate and does not include your actual voice content or transcription text. We may also process device type, browser type, IP address, and other diagnostic data related to your interaction with the Services.
          </p>

          <h3>D. Payment Information</h3>
          <p>
            Payments are processed through Telegram Stars (handled entirely by Telegram) or USDT cryptocurrency (processed on the TRON blockchain). We do not collect or store credit card numbers, bank account details, or other financial information directly. We retain records of completed transactions (amount, date, plan purchased, wallet address for crypto) for accounting purposes.
          </p>

          <h3>E. Third-Party Platforms</h3>
          <p>
            When you use TypeGone through Telegram, we receive information from Telegram identifying your account in accordance with Telegram&apos;s permissions. Connecting to the Services through Telegram is subject to Telegram&apos;s own terms and privacy policy. We may retain account information received from these platforms.
          </p>

          <h3>F. Other Information</h3>
          <p>
            You may choose to provide additional information such as feedback, survey responses, or support requests.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>TypeGone may use Personal Data and Usage Data for the following purposes:</p>
          <ul>
            <li><strong>Service operation</strong> — To provide, update, maintain, monitor, and protect the Services. Voice data and contextual information are processed in real time and not retained.</li>
            <li><strong>Communication</strong> — To provide customer and technical support, and to send service-related messages.</li>
            <li><strong>Billing &amp; administration</strong> — For transactional, billing, account management, and administrative matters.</li>
            <li><strong>Compliance</strong> — To comply with applicable laws and regulations or a court or other legal order.</li>
            <li><strong>Risk mitigation</strong> — To detect violations of our Terms, enforce our legal agreements, and prevent fraud or misuse of the Services.</li>
            <li><strong>Improvement</strong> — To develop and improve the Services using aggregate, anonymized data. If you voluntarily opt in to sharing corrections for model improvement, we may use that explicitly shared content to enhance TypeGone for all users.</li>
          </ul>
          <p>
            We do not use your personal information for advertising, behavioral profiling, or selling to third parties.
          </p>

          <h2>4. Cookies &amp; Analytics</h2>
          <p>
            Our website may use cookies and third-party analytics services (such as Google Analytics) to understand how visitors use our site. This applies to our marketing website only and does not include any voice, transcription, or dictation-related content. You may install browser add-ons to opt out of analytics tracking.
          </p>

          <h2>5. Data Sharing</h2>
          <p>We do not sell your personal data. We may share information only in these circumstances:</p>
          <ul>
            <li><strong>Service providers</strong> — Third-party AI providers (with zero retention), cloud infrastructure, and payment processors, solely to deliver the Services. Your data is never used to train these services.</li>
            <li><strong>Legal compliance</strong> — When required by law, regulation, or valid legal process.</li>
            <li><strong>Safety &amp; protection</strong> — To protect the rights, safety, or property of TypeGone, our users, or the public.</li>
            <li><strong>Business transfers</strong> — In connection with any merger, sale of assets, financing, or acquisition of all or a portion of our business, in reliance on our legitimate business interests.</li>
          </ul>

          <h2>6. Data Retention</h2>
          <ul>
            <li><strong>Voice &amp; transcription data:</strong> Zero retention. Processed in real time, immediately discarded. No voice recordings, transcriptions, or screen context data are stored on our servers.</li>
            <li><strong>Account information:</strong> Retained while your account is active and as long as necessary to provide the Services, comply with legal obligations, and resolve disputes.</li>
            <li><strong>Voluntarily submitted feedback:</strong> Retained only as long as needed to resolve the matter, unless you explicitly consent to its use for improvement.</li>
            <li><strong>Website usage data:</strong> Basic analytics (page visits on the marketing website) may be retained for internal analysis.</li>
            <li><strong>Payment records:</strong> Retained as required by applicable tax and accounting laws.</li>
          </ul>

          <h2>7. Data Security</h2>
          <p>
            We implement technical, administrative, and physical safeguards to protect information from loss, misuse, and unauthorized access. All data transmitted between your device and our servers is encrypted using industry-standard TLS encryption. Access to systems and data is restricted to authorized personnel. While no method of transmission is 100% secure, we use commercially reasonable measures to protect your Personal Data.
          </p>

          <h2>8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed on servers located outside your country of residence, including in the United States. We take reasonable steps to ensure your data is treated securely and in accordance with this policy. No transfer of your Personal Data will take place to an organization or country without adequate controls in place.
          </p>

          <h2>9. Your Data Protection Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to or restrict certain processing</li>
            <li>Receive a copy of your data in a structured, machine-readable format</li>
            <li>Withdraw your consent at any time where we rely on consent to process your information</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. We may ask you to verify your identity before responding. EU/EEA residents have the right to complain to a Data Protection Authority about our collection and use of Personal Data.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            The Services are not intended for children under 13 (or 16 in the EU/EEA). We do not knowingly collect personal information from children. If you believe a child has provided us with Personal Data, contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and we will delete it.
          </p>

          <h2>11. Third-Party Links</h2>
          <p>
            The Services may contain links to third-party websites or services. We are not responsible for the content or privacy practices of those sites. We encourage you to read their privacy policies before providing information to them.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be communicated through the Services or via email. The notice will specify a reasonable period after which the new terms take effect. Modifications will not apply retroactively. We encourage you to review this policy periodically.
          </p>

          <h2>13. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
