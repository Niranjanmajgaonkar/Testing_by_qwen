import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-lg">☕</span>
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">
                  Brew <span className="text-amber-400">&</span> Bean
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-500">Premium Coffee</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-emerald-400">
              Crafting perfect cups since 2010. Every sip tells a story of passion, quality, and community.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-amber-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/menu" className="text-sm hover:text-amber-400 transition-colors duration-200">Our Menu</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-amber-400 transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>123 Coffee Lane</li>
              <li>Koregaon Park, Pune</li>
              <li className="text-amber-400">+91 98765 43210</li>
              <li className="text-amber-400">hello@brewandbean.in</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-amber-400">7AM - 9PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-amber-400">8AM - 10PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-amber-400">8AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-emerald-500">© 2026 Brew & Bean Coffee Shop. All rights reserved.</p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Twitter'].map((social) => (
              <span key={social} className="text-xs text-emerald-500 hover:text-amber-400 cursor-pointer transition-colors">
                {social}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
