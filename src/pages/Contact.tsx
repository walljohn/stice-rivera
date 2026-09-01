import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div className="max-w-xl mx-auto px-4 py-20">
      <h1 className="font-display text-4xl text-center mb-3">Contact Us</h1>
      <p className="text-center text-stone-dark text-sm mb-12">
        hello@sticerivera.com · Mon–Fri, 9am–5pm
      </p>

      {sent ? (
        <div className="text-center border border-stone p-10">
          <p className="font-display text-2xl mb-2">Message Received</p>
          <p className="text-sm text-stone-dark">
            This is a demo form — no message was actually sent. In a live store, we'd reply within one business day.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="input" />
            <input required type="email" placeholder="Email" className="input" />
          </div>
          <input placeholder="Order number (optional)" className="input" />
          <textarea required placeholder="Message" rows={5} className="input resize-none" />
          <button
            type="submit"
            className="w-full bg-ink text-paper py-4 text-sm tracking-widest-plus uppercase hover:bg-ink/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
