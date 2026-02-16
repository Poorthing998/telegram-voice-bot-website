'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-12">
        <div className="section-line mx-auto mb-6" />
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">{title}</h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="card overflow-hidden"
            style={{ borderRadius: '16px' }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
              aria-expanded={openIndex === i}
            >
              <h3 className="font-display font-semibold pr-4">{faq.question}</h3>
              <span
                className="text-text-dim text-xl shrink-0 transition-transform duration-300"
                style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)' }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: openIndex === i ? '400px' : '0',
                opacity: openIndex === i ? 1 : 0,
              }}
            >
              <p className="px-6 pb-6 text-sm text-text-muted leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
