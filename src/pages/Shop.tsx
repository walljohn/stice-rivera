import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products, categories, type Category } from '../data/products'
import ProductCard from '../components/ProductCard'

type Sort = 'featured' | 'price-asc' | 'price-desc'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const activeCategory = params.get('category') as Category | null
  const bestsellersOnly = params.get('bestsellers') === '1'
  const newOnly = params.get('new') === '1'
  const query = (params.get('q') ?? '').trim().toLowerCase()
  const [sort, setSort] = useState<Sort>('featured')

  const filtered = useMemo(() => {
    let list = products.slice()
    if (activeCategory) list = list.filter((p) => p.category === activeCategory)
    if (bestsellersOnly) list = list.filter((p) => p.bestseller)
    if (newOnly) list = list.filter((p) => p.isNew)
    if (query) {
      list = list.filter((p) =>
        [p.name, p.category, p.description, ...p.colors, ...p.details]
          .join(' ')
          .toLowerCase()
          .includes(query),
      )
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    return list
  }, [activeCategory, bestsellersOnly, newOnly, query, sort])

  function selectCategory(c: Category | null) {
    const next = new URLSearchParams()
    if (c) next.set('category', c)
    setParams(next)
  }

  const title = query
    ? `Results for "${params.get('q')}"`
    : bestsellersOnly
      ? 'Bestsellers'
      : newOnly
        ? 'New In'
        : (activeCategory ?? 'Shop All')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center mb-10">
        <h1 className="font-display text-4xl sm:text-5xl">{title}</h1>
        <p className="text-stone-dark text-sm mt-2">{filtered.length} products</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-stone pb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => selectCategory(null)}
            className={`px-4 py-2 text-xs tracking-widest-plus uppercase border transition-colors ${
              !activeCategory && !bestsellersOnly && !newOnly ? 'bg-ink text-paper border-ink' : 'border-stone hover:border-ink'
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => selectCategory(c)}
              className={`px-4 py-2 text-xs tracking-widest-plus uppercase border transition-colors ${
                activeCategory === c ? 'bg-ink text-paper border-ink' : 'border-stone hover:border-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as Sort)}
          className="text-xs tracking-widest-plus uppercase border border-stone px-3 py-2 bg-paper"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-stone-dark py-20">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
