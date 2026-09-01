import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart, cartCount } from '../store/cart'
import { categories } from '../data/products'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [term, setTerm] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const lines = useCart((s) => s.lines)
  const openCart = useCart((s) => s.open)
  const count = cartCount(lines)

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  function submitSearch(e: React.FormEvent) {
    e.preventDefault()
    const q = term.trim()
    if (!q) return
    navigate(`/shop?q=${encodeURIComponent(q)}`)
    setSearchOpen(false)
    setTerm('')
  }

  const navLink =
    'text-xs tracking-wide uppercase hover:text-clay transition-colors whitespace-nowrap'

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-20 gap-3">
          <div className="flex items-center gap-6 min-w-0 overflow-hidden">
            <button
              className="lg:hidden p-2 -ml-2 flex-shrink-0"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <BarsIcon />
            </button>

            <nav className="hidden lg:flex items-center gap-5 min-w-0">
              <NavLink to="/shop" className={navLink}>
                Shop All
              </NavLink>
              {categories.slice(0, 3).map((c) => (
                <NavLink
                  key={c}
                  to={`/shop?category=${encodeURIComponent(c)}`}
                  className={navLink}
                >
                  {c}
                </NavLink>
              ))}
            </nav>
          </div>

          <Link
            to="/"
            className="font-display text-xl sm:text-3xl tracking-wide whitespace-nowrap justify-self-center"
          >
            Stice Rivera
          </Link>

          <div className="flex items-center gap-4 justify-self-end">
            <button
              className="hidden sm:block p-2"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
            >
              <SearchIcon />
            </button>
            <button
              className="relative p-2"
              aria-label="Open cart"
              onClick={openCart}
            >
              <BagIcon />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-ink text-paper text-[10px] leading-none rounded-full h-4 w-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <form onSubmit={submitSearch} className="pb-4 animate-fade-in">
            <div className="flex items-center gap-3 border-b border-ink pb-2">
              <SearchIcon />
              <input
                ref={searchRef}
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Escape' && setSearchOpen(false)}
                placeholder="Search for linen, stripes, knitwear…"
                className="flex-1 bg-transparent outline-none text-sm py-1"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
                className="p-1"
              >
                <CloseIcon />
              </button>
            </div>
          </form>
        )}
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-ink/40" onClick={() => setMenuOpen(false)}>
          <div
            className="bg-paper h-full w-72 max-w-[80%] p-6 flex flex-col gap-5 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-display text-xl">Menu</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-1">
                <CloseIcon />
              </button>
            </div>
            <NavLink to="/shop" className={navLink} onClick={() => setMenuOpen(false)}>
              Shop All
            </NavLink>
            {categories.map((c) => (
              <NavLink
                key={c}
                to={`/shop?category=${encodeURIComponent(c)}`}
                className={navLink}
                onClick={() => setMenuOpen(false)}
              >
                {c}
              </NavLink>
            ))}
            <div className="h-px bg-stone my-2" />
            <NavLink to="/about" className={navLink} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/faq" className={navLink} onClick={() => setMenuOpen(false)}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={navLink} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function BarsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
function SearchIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13.5 13.5L17.5 17.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
function BagIcon() {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
      <path
        d="M5 7V5.5a5 5 0 0110 0V7M2.5 7h15l-1 12.5h-13L2.5 7z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}
function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
