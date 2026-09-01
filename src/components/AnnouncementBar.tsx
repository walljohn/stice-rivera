const messages = [
  'FREE SHIPPING ON ALL ORDERS OVER $150',
  'NEW ARRIVALS — SHOP THE AUTUMN EDIT',
  '30-DAY RETURNS, NO QUESTIONS ASKED',
]

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-paper text-xs tracking-widest-plus uppercase overflow-hidden">
      <div className="flex items-center justify-center gap-10 py-2.5 px-4 text-center">
        <span className="hidden sm:inline">{messages[0]}</span>
        <span className="sm:hidden">{messages[1]}</span>
      </div>
    </div>
  )
}
