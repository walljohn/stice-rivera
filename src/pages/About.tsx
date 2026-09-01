export default function About() {
  return (
    <div>
      <div className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1786540610338-0fec664e7db4?w=1800&q=80&fit=crop&auto=format"
          alt="Stice Rivera studio"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30 flex items-center justify-center">
          <h1 className="font-display text-5xl text-paper">Our Story</h1>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-20 space-y-6 text-ink/80 leading-relaxed">
        <p>
          Stice Rivera began with a simple frustration: clothing that looked and felt expensive
          almost always was. We set out to build a line of elevated essentials — linen shirting,
          heavyweight knits, cloth that drapes the way it should — without the markup that usually
          comes with it.
        </p>
        <p>
          Every piece is developed in small batches with mills we've worked with for years, cut to
          fits that hold up in real life, and priced the way we'd want to pay for it ourselves. No
          middlemen, no seasonal markdown games — just clothing built to be worn often and to last.
        </p>
        <p>
          We're a small team, and we read every piece of feedback that comes through. If something
          isn't right, tell us — we'll make it right.
        </p>
        <p className="font-display text-2xl text-ink pt-4">— The Stice Rivera Team</p>
      </div>
    </div>
  )
}
