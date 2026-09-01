import { Link, Navigate, useLocation } from 'react-router-dom'
import { formatPrice } from '../lib/format'

export default function OrderConfirmation() {
  const location = useLocation()
  const state = location.state as { orderNumber?: string; total?: number } | null

  if (!state?.orderNumber) return <Navigate to="/" replace />

  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="h-14 w-14 rounded-full bg-ink text-paper flex items-center justify-center mx-auto mb-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="font-display text-4xl mb-3">Thank You</h1>
      <p className="text-stone-dark mb-1">Your order has been placed.</p>
      <p className="text-sm text-stone-dark mb-8">
        Order <span className="text-ink font-medium">#{state.orderNumber}</span>
        {typeof state.total === 'number' && <> · {formatPrice(state.total)}</>}
      </p>
      <p className="text-xs text-clay bg-clay/10 border border-clay/30 inline-block px-4 py-2 mb-10">
        This is a demo store — no real order was processed and no email will be sent.
      </p>
      <div>
        <Link
          to="/shop"
          className="inline-block bg-ink text-paper px-8 py-3.5 text-sm tracking-widest-plus uppercase hover:bg-ink/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
