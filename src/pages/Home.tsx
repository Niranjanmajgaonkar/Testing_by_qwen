import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl"></div>
        </div>
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            <span className="text-amber-300 text-sm font-medium tracking-wide">Premium Coffee Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
            Life Begins After
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Coffee
            </span>
          </h1>
          <p className="text-lg md:text-xl text-emerald-200/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Handcrafted beverages made with love, premium beans sourced from the finest farms around the world. Experience coffee like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              Explore Our Menu
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-emerald-400/30 hover:border-amber-400/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/5 backdrop-blur-sm"
            >
              Visit Us Today
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { number: '15+', label: 'Years' },
              { number: '50K+', label: 'Customers' },
              { number: '4.9', label: 'Rating' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.number}</div>
                <div className="text-xs text-emerald-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-amber-400/60 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mt-3 mb-4 tracking-tight">The Brew & Bean Difference</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We're passionate about serving you the perfect cup every single time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Ethically Sourced',
                description: 'Our beans come from sustainable farms that treat workers fairly and protect the environment.',
              },
              {
                icon: '🎨',
                title: 'Crafted with Art',
                description: 'Every drink is a masterpiece, prepared by our skilled baristas with precision and creativity.',
              },
              {
                icon: '🏠',
                title: 'Cozy Atmosphere',
                description: 'A warm, inviting space designed for conversations, work, or quiet contemplation.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-amber-900/5"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-emerald-50 group-hover:bg-amber-50 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">Popular Picks</span>
              <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mt-3 tracking-tight">Customer Favorites</h2>
            </div>
            <Link to="/menu" className="mt-4 md:mt-0 text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2 group">
              View Full Menu
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Cappuccino', price: '₹180', emoji: '☕', tag: 'Bestseller' },
              { name: 'Cold Brew', price: '₹240', emoji: '🧊', tag: 'Refreshing' },
              { name: 'Croissant', price: '₹150', emoji: '🥐', tag: 'Fresh Daily' },
              { name: 'Matcha Latte', price: '₹220', emoji: '🍵', tag: 'Trending' },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#faf8f5] rounded-2xl p-6 hover:bg-emerald-950 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-emerald-100 group-hover:bg-amber-500/20 text-emerald-700 group-hover:text-amber-300 text-xs font-medium rounded-full transition-colors duration-500">
                    {item.tag}
                  </span>
                </div>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </div>
                <h3 className="text-lg font-bold text-emerald-950 group-hover:text-white transition-colors duration-500 mb-1">
                  {item.name}
                </h3>
                <p className="text-amber-600 group-hover:text-amber-400 font-bold text-lg transition-colors duration-500">
                  {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">What Our Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Best coffee in town! The atmosphere is so cozy and the staff is incredibly friendly. My go-to spot every morning.",
                name: 'Priya Sharma',
                role: 'Regular Customer',
              },
              {
                text: "Their cappuccino is absolutely divine. I've tried coffee shops all over the world and this one stands out.",
                name: 'Rahul Deshmukh',
                role: 'Coffee Enthusiast',
              },
              {
                text: "Perfect place to work remotely. Great WiFi, amazing coffee, and the pastries are to die for!",
                name: 'Sneha Patil',
                role: 'Freelancer',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-emerald-900/50 backdrop-blur-sm rounded-2xl border border-emerald-800/50 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-emerald-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-emerald-800/50">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-emerald-950 font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-emerald-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Ready for Your Perfect Cup?</h2>
              <p className="text-emerald-200 mb-8 text-lg max-w-xl mx-auto">
                Visit us today and discover why coffee lovers choose Brew & Bean.
              </p>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-emerald-950 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20"
              >
                View Our Menu
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
