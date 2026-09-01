import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProduct, relatedProducts } from '../data/products'
import { formatPrice } from '../lib/format'
import { useCart } from '../store/cart'
import ProductCard from '../components/ProductCard'

export default function Product() {
  const { slug } = useParams()
  const product = slug ? getProduct(slug) : undefined
  const add = useCart((s) => s.add)

  const [activeImage, setActiveImage] = useState(0)
  const [color, setColor] = useState(product?.colors[0] ?? '')
  const [size, setSize] = useState('')
  const [added, setAdded] = useState(false)
  const [error, setError] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const related = relatedProducts(product)

  function handleAdd() {
    if (!size) {
      setError(true)
      return
    }
    setError(false)
    add(product!, color, size)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <nav className="text-xs text-stone-dark mb-8 tracking-wide">
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-ink">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/5] bg-stone overflow-hidden">
            <img src={product.images[activeImage]} alt={product.name} className="h-full w-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-3 mt-3">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 aspect-[4/5] overflow-hidden border-2 ${
                    activeImage === i ? 'border-ink' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="lg:pt-2">
          {product.bestseller && (
            <span className="inline-block bg-ink text-paper text-[10px] tracking-widest-plus uppercase px-2 py-1 mb-3">
              Best Seller
            </span>
          )}
          <h1 className="font-display text-3xl sm:text-4xl">{product.name}</h1>
          <div className="mt-3 flex items-center gap-3">
            {product.compareAt ? (
              <>
                <span className="text-lg text-clay">{formatPrice(product.price)}</span>
                <span className="text-lg text-stone-dark line-through">{formatPrice(product.compareAt)}</span>
              </>
            ) : (
              <span className="text-lg">{formatPrice(product.price)}</span>
            )}
          </div>

          <p className="text-sm text-ink/80 leading-relaxed mt-6">{product.description}</p>

          {/* Color */}
          <div className="mt-8">
            <p className="text-xs tracking-widest-plus uppercase text-stone-dark mb-3">
              Colour: <span className="text-ink">{color}</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-4 py-2 text-xs border transition-colors ${
                    color === c ? 'border-ink bg-ink text-paper' : 'border-stone hover:border-ink'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="text-xs tracking-widest-plus uppercase text-stone-dark mb-3">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setSize(s)
                    setError(false)
                  }}
                  className={`min-w-[3rem] px-3 py-2 text-xs border transition-colors ${
                    size === s ? 'border-ink bg-ink text-paper' : 'border-stone hover:border-ink'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {error && <p className="text-clay text-xs mt-2">Please select a size.</p>}
          </div>

          <button
            onClick={handleAdd}
            className="w-full mt-8 bg-ink text-paper py-4 text-sm tracking-widest-plus uppercase hover:bg-ink/90 transition-colors"
          >
            {added ? 'Added to Bag ✓' : 'Add to Bag'}
          </button>

          <div className="mt-10 border-t border-stone pt-6">
            <p className="text-xs tracking-widest-plus uppercase text-stone-dark mb-3">Details</p>
            <ul className="text-sm text-ink/80 space-y-1.5">
              {product.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="text-stone-dark">—</span>
                  {d}
                </li>
              ))}
              {product.origin && (
                <li className="flex gap-2">
                  <span className="text-stone-dark">—</span>
                  Made in {product.origin}
                </li>
              )}
            </ul>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-stone-dark">
            <div className="border border-stone p-4">
              <p className="text-ink font-medium mb-1">Free Shipping</p>
              On all orders over $150
            </div>
            <div className="border border-stone p-4">
              <p className="text-ink font-medium mb-1">Easy Returns</p>
              30 days, no questions asked
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display text-3xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
