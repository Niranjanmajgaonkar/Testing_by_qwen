import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="text-7xl mb-6 animate-bounce-slow">☕</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Life Begins After
            <span className="block text-amber-400 mt-2">Coffee</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Handcrafted beverages made with love, premium beans sourced from the finest farms around the world. Experience coffee like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/30"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white/30 hover:border-amber-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Visit Us Today
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Why Choose Us?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">We're passionate about serving you the perfect cup every single time.</p>
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
                className="group p-8 rounded-2xl bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">What Our Customers Say</h2>
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
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-stone-900">{testimonial.name}</p>
                  <p className="text-sm text-stone-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-amber-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready for Your Perfect Cup?</h2>
          <p className="text-amber-100 mb-8 text-lg">
            Visit us today and discover why coffee lovers choose Brew & Bean.
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-4 bg-white text-amber-900 font-bold rounded-full hover:bg-amber-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Our Menu →
          </Link>
        </div>
      </section>
    </div>
  );
}
