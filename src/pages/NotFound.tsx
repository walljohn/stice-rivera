import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-32 text-center">
      <h1 className="font-display text-6xl mb-4">404</h1>
      <p className="text-stone-dark mb-8">We couldn't find the page you're looking for.</p>
      <Link
        to="/"
        className="inline-block bg-ink text-paper px-8 py-3.5 text-sm tracking-widest-plus uppercase hover:bg-ink/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  )
}
