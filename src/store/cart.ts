import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from '../data/products'

export interface CartLine {
  slug: string
  name: string
  price: number
  image: string
  color: string
  size: string
  qty: number
}

interface CartState {
  lines: CartLine[]
  isOpen: boolean
  open: () => void
  close: () => void
  add: (product: Product, color: string, size: string, qty?: number) => void
  remove: (slug: string, color: string, size: string) => void
  setQty: (slug: string, color: string, size: string, qty: number) => void
  clear: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      add: (product, color, size, qty = 1) => {
        const existing = get().lines.find(
          (l) => l.slug === product.slug && l.color === color && l.size === size,
        )
        if (existing) {
          set({
            lines: get().lines.map((l) =>
              l === existing ? { ...l, qty: l.qty + qty } : l,
            ),
          })
        } else {
          set({
            lines: [
              ...get().lines,
              {
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.images[0],
                color,
                size,
                qty,
              },
            ],
          })
        }
        set({ isOpen: true })
      },
      remove: (slug, color, size) =>
        set({
          lines: get().lines.filter(
            (l) => !(l.slug === slug && l.color === color && l.size === size),
          ),
        }),
      setQty: (slug, color, size, qty) =>
        set({
          lines: get().lines.map((l) =>
            l.slug === slug && l.color === color && l.size === size ? { ...l, qty } : l,
          ),
        }),
      clear: () => set({ lines: [] }),
    }),
    { name: 'stice-rivera-cart' },
  ),
)

export function cartCount(lines: CartLine[]) {
  return lines.reduce((n, l) => n + l.qty, 0)
}

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((n, l) => n + l.qty * l.price, 0)
}
