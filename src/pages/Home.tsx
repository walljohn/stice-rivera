import { Link } from 'react-router-dom'
import { useState } from 'react'
import { bestsellers, newIn, products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'
import { formatPrice } from '../lib/format'
import { useCart } from '../store/cart'

const testimonials = [
  {
    name: 'Marcus',
    flag: 'US',
    text: 'The quality caught me off guard for the price point. The linen shirt fits exactly how it looked in photos, and it only got softer after the first wash.',
  },
  {
    name: 'Théo',
    flag: 'FR',
    text: 'Ordered two colors of the tee to pair with different trousers. Same weight and finish you get from brands twice the price. Very happy.',
  },
  {
    name: 'Owen',
    flag: 'UK',
    text: 'Shipping took a little longer than expected but the pants were worth the wait — the drape is excellent and they hold their shape all day.',
  },
  {
    name: 'Diego',
    flag: 'ES',
    text: 'Good quality for an honest price. Customer service answered my sizing question within a day. Would order again.',
  },
]

const looks = [
  {
    image: products[8].images[0],
    items: [products[8], products[10]],
  },
  {
    image: products[1].images[0],
    items: [products[2], products[9]],
  },
  {
    image: products[4].images[0],
    items: [products[4], products[9]],
  },
]

export default function Home() {
  const [tab, setTab] = useState<'ALL' | (typeof categories)[number]>('ALL')
  const add = useCart((s) => s.add)

  const shown = tab === 'ALL' ? bestsellers : bestsellers.filter((p) => p.category === tab)

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[86vh] min-h-[520px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1781455817728-4d6638713f78?w=1800&q=80&fit=crop&auto=format"
          alt="Stice Rivera summer collection, overlooking the Mediterranean coast"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/5 to-transparent" />
        <div className="relative h-full flex flex-col items-center justify-end text-center text-paper pb-16 px-4">
          <p className="text-xs tracking-widest-plus uppercase mb-3">Summer Collection '26</p>
          <h1 className="font-display text-5xl sm:text-7xl mb-6">Stice Rivera</h1>
          <Link
            to="/shop"
            className="bg-paper text-ink px-8 py-3.5 text-sm tracking-widest-plus uppercase hover:bg-stone transition-colors"
          >
            See the Collection
          </Link>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl sm:text-4xl">Bestsellers</h2>
          <Link to="/shop?bestsellers=1" className="text-sm tracking-widest-plus uppercase border-b border-ink pb-0.5 hidden sm:block">
            View All
          </Link>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-6 mb-4 -mx-1 px-1 scrollbar-thin">
          {(['ALL', ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`whitespace-nowrap px-4 py-2 text-xs tracking-widest-plus uppercase border transition-colors ${
                tab === c ? 'bg-ink text-paper border-ink' : 'border-stone hover:border-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {shown.slice(0, 8).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="text-center mt-10 sm:hidden">
          <Link to="/shop?bestsellers=1" className="text-sm tracking-widest-plus uppercase border-b border-ink pb-0.5">
            View All Bestsellers ({bestsellers.length})
          </Link>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-stone/50 py-12">
        <p className="text-center font-display text-2xl sm:text-3xl">97,274+ customers trust Stice Rivera</p>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-paper p-6 border border-stone">
              <div className="flex text-clay mb-3" aria-hidden>
                {'★★★★★'}
              </div>
              <p className="text-sm leading-relaxed text-ink/80">{t.text}</p>
              <p className="text-xs text-stone-dark mt-4 tracking-wide uppercase">
                {t.name} · Verified Customer · {t.flag}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* New In */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl sm:text-4xl">New In</h2>
          <Link to="/shop?new=1" className="text-sm tracking-widest-plus uppercase border-b border-ink pb-0.5 hidden sm:block">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {newIn.slice(0, 8).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Coastal editorial band */}
      <section className="relative h-[60vh] min-h-[380px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515400276915-8aa3a8fd70f4?w=1800&q=80&fit=crop&auto=format"
          alt="Positano, on the Amalfi Coast"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-paper px-4">
          <p className="text-xs tracking-widest-plus uppercase mb-4">From the South of France to the Amalfi Coast</p>
          <p className="font-display text-3xl sm:text-5xl max-w-xl leading-tight text-balance">
            Cut for terraces, boat decks, and long lunches that run past sundown.
          </p>
        </div>
      </section>

      {/* Shop the look */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-display text-3xl sm:text-4xl mb-8 text-center">Shop the Look</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {looks.map((look, i) => (
            <div key={i} className="relative group">
              <img src={look.image} alt="" className="aspect-[3/4] w-full object-cover" />
              <div className="mt-4 space-y-3">
                {look.items.map((item) => (
                  <div key={item.slug} className="flex items-center justify-between gap-3">
                    <Link to={`/product/${item.slug}`} className="text-sm hover:text-clay">
                      {item.name}
                    </Link>
                    <span className="text-sm text-stone-dark">{formatPrice(item.price)}</span>
                  </div>
                ))}
                <button
                  onClick={() => look.items.forEach((item) => add(item, item.colors[0], item.sizes[Math.floor(item.sizes.length / 2)]))}
                  className="w-full border border-ink py-2.5 text-xs tracking-widest-plus uppercase hover:bg-ink hover:text-paper transition-colors mt-2"
                >
                  Add All to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brand statement */}
      <section className="bg-ink text-paper py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="font-display text-2xl sm:text-3xl leading-snug">
            Stice Rivera is a modern label rooted in timeless aesthetics and quiet confidence.
            Crafted with care. Designed to last. Worn to express.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 text-sm tracking-widest-plus uppercase border-b border-paper pb-0.5"
          >
            Our Story
          </Link>
        </div>
      </section>
    </div>
  )
}
