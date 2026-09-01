import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-stone mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl text-paper">Stice Rivera</span>
            <p className="text-sm text-stone-dark mt-4 leading-relaxed max-w-[26ch]">
              Elevated essentials, honestly priced. Designed to last, worn to express.
            </p>
          </div>
          <div>
            <h4 className="text-paper text-xs tracking-widest-plus uppercase mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop" className="hover:text-paper">Shop All</Link></li>
              <li><Link to="/shop?bestsellers=1" className="hover:text-paper">Bestsellers</Link></li>
              <li><Link to="/shop?new=1" className="hover:text-paper">New In</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-paper text-xs tracking-widest-plus uppercase mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/contact" className="hover:text-paper">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-paper">FAQ</Link></li>
              <li><a href="mailto:hello@sticerivera.com" className="hover:text-paper">hello@sticerivera.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-paper text-xs tracking-widest-plus uppercase mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/legal/imprint" className="hover:text-paper">Imprint</Link></li>
              <li><Link to="/legal/terms" className="hover:text-paper">Terms of Service</Link></li>
              <li><Link to="/legal/privacy" className="hover:text-paper">Privacy Policy</Link></li>
              <li><Link to="/legal/refund" className="hover:text-paper">Refund Policy</Link></li>
              <li><Link to="/legal/withdrawal" className="hover:text-paper">Withdrawal Form</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-dark">
          <span>&copy; {new Date().getFullYear()} Stice Rivera. All rights reserved.</span>
          <span className="tracking-widest-plus uppercase">USD $</span>
        </div>
      </div>
    </footer>
  )
}
