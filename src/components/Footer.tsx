import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">☕</span>
              <span className="text-lg font-bold text-white">
                Brew <span className="text-amber-400">&</span> Bean
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Crafting perfect cups since 2010. Every sip tells a story of passion, quality, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-sm hover:text-amber-400 transition-colors">Our Menu</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-amber-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-amber-400">7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-amber-400">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-amber-400">8:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 text-center text-sm">
          <p>© 2026 Brew & Bean Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
