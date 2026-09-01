import { Link } from 'react-router-dom'
import { useCart, cartSubtotal } from '../store/cart'
import { formatPrice } from '../lib/format'

export default function CartDrawer() {
  const { isOpen, close, lines, remove, setQty } = useCart()
  const subtotal = cartSubtotal(lines)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/40 animate-fade-in" onClick={close} />
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-paper flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone">
          <h2 className="font-display text-xl">Your Bag ({lines.reduce((n, l) => n + l.qty, 0)})</h2>
          <button onClick={close} aria-label="Close cart" className="p-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-stone-dark">Your bag is empty.</p>
            <Link
              to="/shop"
              onClick={close}
              className="text-sm tracking-widest-plus uppercase border-b border-ink pb-0.5"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 divide-y divide-stone">
              {lines.map((l) => (
                <div key={`${l.slug}-${l.color}-${l.size}`} className="flex gap-4 py-5">
                  <img src={l.image} alt={l.name} className="h-24 w-20 object-cover bg-stone flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <h3 className="text-sm">{l.name}</h3>
                      <span className="text-sm whitespace-nowrap">{formatPrice(l.price * l.qty)}</span>
                    </div>
                    <p className="text-xs text-stone-dark mt-1">
                      {l.color} / {l.size}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-stone">
                        <button
                          className="px-2.5 py-1 text-sm"
                          onClick={() => setQty(l.slug, l.color, l.size, Math.max(1, l.qty - 1))}
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-2 text-sm min-w-[1.5rem] text-center">{l.qty}</span>
                        <button
                          className="px-2.5 py-1 text-sm"
                          onClick={() => setQty(l.slug, l.color, l.size, l.qty + 1)}
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-xs text-stone-dark underline underline-offset-2 hover:text-ink"
                        onClick={() => remove(l.slug, l.color, l.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-t border-stone">
              <div className="flex justify-between text-sm mb-1">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-stone-dark mb-4">Shipping and taxes calculated at checkout.</p>
              <Link
                to="/checkout"
                onClick={close}
                className="block w-full text-center bg-ink text-paper py-3.5 text-sm tracking-widest-plus uppercase hover:bg-ink/90 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
