/**
 * Persistent, non-dismissible notice for the public preview deployment.
 * The catalogue is placeholder product on stock photography and checkout takes
 * no payment — a visitor must never be able to mistake this for a live shop.
 */
export default function PreviewBanner() {
  return (
    <div className="bg-clay text-paper text-[11px] sm:text-xs leading-snug">
      <div className="max-w-7xl mx-auto px-4 py-2 text-center">
        <strong className="tracking-widest-plus uppercase">Preview</strong>
        <span className="mx-2 opacity-50">·</span>
        Design prototype. Products shown are placeholders, not for sale — no orders can be
        placed and no payment is taken.
      </div>
    </div>
  )
}
