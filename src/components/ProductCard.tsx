import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { formatPrice } from '../lib/format'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.bestseller && (
            <span className="bg-ink text-paper text-[10px] tracking-widest-plus uppercase px-2 py-1">
              Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="bg-paper text-ink text-[10px] tracking-widest-plus uppercase px-2 py-1 border border-ink/20">
              New In
            </span>
          )}
          {product.compareAt && (
            <span className="bg-clay text-paper text-[10px] tracking-widest-plus uppercase px-2 py-1">
              Sale
            </span>
          )}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-sm">{product.name}</h3>
        <div className="mt-1 flex items-center gap-2 text-sm">
          {product.compareAt ? (
            <>
              <span className="text-clay">{formatPrice(product.price)}</span>
              <span className="text-stone-dark line-through">{formatPrice(product.compareAt)}</span>
            </>
          ) : (
            <span>{formatPrice(product.price)}</span>
          )}
        </div>
        <div className="mt-1 text-xs text-stone-dark">
          {product.colors[0]}
          {product.colors.length > 1 ? ` · ${product.colors.length} colours` : ''}
        </div>
      </div>
    </Link>
  )
}
