import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useCart, cartSubtotal } from '../store/cart'
import { formatPrice } from '../lib/format'

const SHIPPING_THRESHOLD = 150
const STANDARD_SHIPPING = 8
const EXPRESS_SHIPPING = 22

export default function Checkout() {
  const navigate = useNavigate()
  const { lines, clear } = useCart()
  const subtotal = cartSubtotal(lines)
  const [shipMethod, setShipMethod] = useState<'standard' | 'express'>('standard')
  const [submitting, setSubmitting] = useState(false)

  const shippingCost = subtotal >= SHIPPING_THRESHOLD && shipMethod === 'standard' ? 0 : shipMethod === 'standard' ? STANDARD_SHIPPING : EXPRESS_SHIPPING
  const tax = subtotal * 0.0725
  const total = subtotal + shippingCost + tax

  if (lines.length === 0 && !submitting) {
    return <Navigate to="/shop" replace />
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    const orderNumber = `SR${Math.floor(100000 + Math.random() * 900000)}`
    setTimeout(() => {
      navigate('/order-confirmation', { state: { orderNumber, total } })
      clear()
    }, 900)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="bg-clay/10 border border-clay/30 text-clay text-xs text-center py-2.5 px-4 mb-10 tracking-wide">
        DEMO CHECKOUT — this is a preview store. No payment is processed and no card details are transmitted or stored.
      </div>

      <div className="grid lg:grid-cols-5 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-10">
          <section>
            <h2 className="text-xs tracking-widest-plus uppercase text-stone-dark mb-4">Contact</h2>
            <input required type="email" placeholder="Email address" className="input" />
          </section>

          <section>
            <h2 className="text-xs tracking-widest-plus uppercase text-stone-dark mb-4">Shipping Address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="First name" className="input" />
              <input required placeholder="Last name" className="input" />
              <input required placeholder="Address" className="input sm:col-span-2" />
              <input placeholder="Apartment, suite, etc. (optional)" className="input sm:col-span-2" />
              <input required placeholder="City" className="input" />
              <input required placeholder="State / Province" className="input" />
              <input required placeholder="ZIP / Postal code" className="input" />
              <input required placeholder="Country" defaultValue="United States" className="input" />
              <input required type="tel" placeholder="Phone" className="input sm:col-span-2" />
            </div>
          </section>

          <section>
            <h2 className="text-xs tracking-widest-plus uppercase text-stone-dark mb-4">Shipping Method</h2>
            <div className="space-y-2">
              <label className="flex items-center justify-between border border-stone px-4 py-3 cursor-pointer has-[:checked]:border-ink">
                <span className="flex items-center gap-3 text-sm">
                  <input
                    type="radio"
                    name="ship"
                    checked={shipMethod === 'standard'}
                    onChange={() => setShipMethod('standard')}
                  />
                  Standard (5–8 business days)
                </span>
                <span className="text-sm">
                  {subtotal >= SHIPPING_THRESHOLD ? 'Free' : formatPrice(STANDARD_SHIPPING)}
                </span>
              </label>
              <label className="flex items-center justify-between border border-stone px-4 py-3 cursor-pointer has-[:checked]:border-ink">
                <span className="flex items-center gap-3 text-sm">
                  <input
                    type="radio"
                    name="ship"
                    checked={shipMethod === 'express'}
                    onChange={() => setShipMethod('express')}
                  />
                  Express (2–3 business days)
                </span>
                <span className="text-sm">{formatPrice(EXPRESS_SHIPPING)}</span>
              </label>
            </div>
          </section>

          <section>
            <h2 className="text-xs tracking-widest-plus uppercase text-stone-dark mb-4">Payment (demo — not processed)</h2>
            <div className="grid gap-4">
              <input required placeholder="Card number" inputMode="numeric" maxLength={19} className="input" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM / YY" className="input" />
                <input required placeholder="CVC" inputMode="numeric" maxLength={4} className="input" />
              </div>
              <input required placeholder="Name on card" className="input" />
            </div>
          </section>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-ink text-paper py-4 text-sm tracking-widest-plus uppercase hover:bg-ink/90 transition-colors disabled:opacity-60"
          >
            {submitting ? 'Placing Order…' : `Place Order — ${formatPrice(total)}`}
          </button>
        </form>

        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="bg-stone/40 p-6 sticky top-28">
            <h2 className="text-xs tracking-widest-plus uppercase text-stone-dark mb-5">Order Summary</h2>
            <div className="space-y-4 max-h-80 overflow-y-auto pr-1">
              {lines.map((l) => (
                <div key={`${l.slug}-${l.color}-${l.size}`} className="flex gap-3">
                  <div className="relative flex-shrink-0">
                    <img src={l.image} alt={l.name} className="h-16 w-14 object-cover bg-stone" />
                    <span className="absolute -top-2 -right-2 bg-ink text-paper text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                      {l.qty}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{l.name}</p>
                    <p className="text-xs text-stone-dark">{l.color} / {l.size}</p>
                  </div>
                  <span className="text-sm whitespace-nowrap">{formatPrice(l.price * l.qty)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-dark/30 mt-5 pt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between text-base pt-2 border-t border-stone-dark/30 mt-2">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
