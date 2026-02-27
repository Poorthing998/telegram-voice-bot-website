import { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import JsonLd from '@/components/JsonLd';
import { TELEGRAM_BOT_URL, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI Meeting Notes — Voice to Meeting Summary with Action Items',
  description: 'Capture meeting takeaways by voice and get organized summaries with action items. TypeGone turns your post-meeting voice recap into structured notes in seconds.',
  keywords: ['meeting notes AI', 'voice meeting notes', 'meeting summary tool', 'AI meeting summary', 'voice to meeting notes', 'meeting action items'],
  alternates: { canonical: 'https://www.typegone.com/use-cases/meeting-notes' },
};

const faqs = [
  { question: 'How does TypeGone create meeting notes from voice?', answer: 'After a meeting, speak your takeaways for 30-60 seconds. TypeGone transcribes, removes filler words, and structures the output into sections: topics discussed, key decisions, action items with owners, and follow-ups.' },
  { question: 'Can TypeGone record an entire meeting?', answer: 'TypeGone is designed for post-meeting voice recaps, not live meeting recording. Speak your takeaways after the meeting and get structured notes in seconds. For live recording, dedicated tools like Otter.ai are better suited.' },
  { question: 'What format do meeting notes come in?', answer: 'Meeting notes include: Topics Discussed (main themes), Key Decisions (what was agreed), Action Items (who does what, with deadlines if mentioned), and additional notes. All cleanly formatted and ready to share.' },
  { question: 'Can I share meeting notes via email or Slack?', answer: 'Yes. Copy the formatted output and paste it into any app — email, Slack, Notion, Asana, Jira, or any project management tool. You can also reformat the same recording as an email to send directly to participants.' },
];

export default function MeetingNotesPage() {
  return (
    <>
      <JsonLd data={generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Use Cases', url: '/use-cases/meeting-notes' },
        { name: 'Meeting Notes', url: '/use-cases/meeting-notes' },
      ])} />
      <JsonLd data={generateFAQSchema(faqs)} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-text-muted transition-colors">Home</Link>
            <span>/</span>
            <Link href="/voice-to-text" className="hover:text-text-muted transition-colors">Voice to Text</Link>
            <span>/</span>
            <span className="text-text-muted">Meeting Notes</span>
          </nav>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight mb-6 leading-[1.05]">
            Meeting Notes.<br />
            <span className="text-gradient">Effortless.</span>
          </h1>

          <p className="text-xl text-text-muted max-w-2xl mb-8 leading-relaxed">
            After every meeting, take 30 seconds to speak your takeaways. TypeGone formats them into a structured summary with action items, decisions, and follow-ups.
          </p>

          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-base">
            Try Free — No Signup
          </a>
        </div>
      </section>

      <ScrollReveal>
        <section className="max-w-3xl mx-auto px-6 mt-16">
          <div className="prose-tg">
            <h2>The Post-Meeting Problem</h2>
            <p>
              You leave a meeting with a head full of decisions, action items, and follow-ups. You tell yourself you&apos;ll write them down &quot;in a minute.&quot; Three hours later, half the details are gone.
            </p>
            <p>
              TypeGone lets you capture everything in a 30-second voice recap right after the meeting, while it&apos;s still fresh. The AI organizes it into a proper meeting summary.
            </p>

            <h2>What TypeGone Generates</h2>
            <ul>
              <li><strong>Key decisions</strong> — What was decided in the meeting</li>
              <li><strong>Action items</strong> — Who needs to do what, and by when</li>
              <li><strong>Discussion points</strong> — Main topics covered</li>
              <li><strong>Follow-ups</strong> — What needs to happen next</li>
            </ul>

            <h2>How to Use It</h2>
            <p>
              Right after your meeting, open TypeGone (on Telegram or desktop), select <strong>Enhanced mode</strong>, and speak for 30-60 seconds about what happened. Just ramble through the key points. TypeGone handles the structure.
            </p>
            <p>
              Copy the output and paste it into Slack, email it to participants, or add it to your project management tool. Done in under a minute.
            </p>

            <h2>Other Ways to Use TypeGone</h2>
            <p>
              Meeting notes are just one output. TypeGone can also turn your voice into <Link href="/use-cases/emails">professional emails</Link>, <Link href="/use-cases/notes">structured notes</Link>, to-do lists, and more. The <Link href="/download">desktop app</Link> lets you use global keyboard shortcuts to capture notes right after a meeting without switching apps.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal className="mt-24">
        <FAQSection faqs={faqs} title="Meeting Notes FAQ" />
      </ScrollReveal>

      <ScrollReveal>
        <CTASection title="Never lose meeting notes again" subtitle="30 seconds of talking beats 15 minutes of note-taking." />
      </ScrollReveal>
    </>
  );
}
