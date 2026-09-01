import { useState } from 'react'

const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping arrives in 5–8 business days; express in 2–3 business days. Orders over $150 ship free via standard.',
  },
  {
    q: 'What is your return policy?',
    a: 'We accept returns within 30 days of delivery for unworn items with tags attached. See our Refund Policy for full details.',
  },
  {
    q: 'How do I find my size?',
    a: 'Each product page lists true-to-size guidance in the details section. If you\'re between sizes, we generally recommend sizing up for our relaxed-fit pieces.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'We currently ship within the United States, Canada, and the EU. Rates are calculated at checkout based on destination.',
  },
  {
    q: 'How should I care for my garments?',
    a: 'Cold wash, hang dry when possible. Specific care instructions are included with every item and on the product page.',
  },
  {
    q: 'Can I change or cancel my order?',
    a: 'Reach out within 2 hours of placing your order and we\'ll do our best to update it before it ships. After that, please use our return process.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <h1 className="font-display text-4xl text-center mb-12">Frequently Asked Questions</h1>
      <div className="divide-y divide-stone border-t border-b border-stone">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center py-5 text-left"
            >
              <span className="text-sm sm:text-base">{f.q}</span>
              <span className="text-xl leading-none flex-shrink-0 ml-4">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="text-sm text-stone-dark leading-relaxed pb-5 pr-8">{f.a}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
