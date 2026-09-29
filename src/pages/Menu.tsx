import { useState } from 'react';

const categories = ['All', 'Hot Coffee', 'Cold Coffee', 'Tea', 'Pastries', 'Specials'];

const menuItems = [
  // Hot Coffee
  { name: 'Espresso', price: '₹120', category: 'Hot Coffee', description: 'Rich, bold single shot', emoji: '☕' },
  { name: 'Cappuccino', price: '₹180', category: 'Hot Coffee', description: 'Espresso with steamed milk foam', emoji: '☕' },
  { name: 'Latte', price: '₹200', category: 'Hot Coffee', description: 'Smooth espresso with creamy milk', emoji: '🥛' },
  { name: 'Mocha', price: '₹220', category: 'Hot Coffee', description: 'Chocolate meets espresso perfection', emoji: '🍫' },
  { name: 'Americano', price: '₹150', category: 'Hot Coffee', description: 'Espresso diluted with hot water', emoji: '☕' },
  { name: 'Flat White', price: '₹210', category: 'Hot Coffee', description: 'Velvety microfoam over espresso', emoji: '🤍' },

  // Cold Coffee
  { name: 'Iced Latte', price: '₹220', category: 'Cold Coffee', description: 'Chilled espresso with cold milk', emoji: '🧊' },
  { name: 'Cold Brew', price: '₹240', category: 'Cold Coffee', description: 'Slow-steeped for 12 hours', emoji: '🥶' },
  { name: 'Frappuccino', price: '₹260', category: 'Cold Coffee', description: 'Blended ice coffee delight', emoji: '🥤' },
  { name: 'Iced Mocha', price: '₹250', category: 'Cold Coffee', description: 'Chocolate, espresso & ice', emoji: '🍫' },

  // Tea
  { name: 'Masala Chai', price: '₹100', category: 'Tea', description: 'Traditional spiced Indian tea', emoji: '🫖' },
  { name: 'Green Tea', price: '₹120', category: 'Tea', description: 'Light, refreshing & healthy', emoji: '🍵' },
  { name: 'Earl Grey', price: '₹140', category: 'Tea', description: 'Classic bergamot flavored tea', emoji: '🍵' },
  { name: 'Matcha Latte', price: '₹220', category: 'Tea', description: 'Japanese powdered green tea', emoji: '🍃' },

  // Pastries
  { name: 'Croissant', price: '₹150', category: 'Pastries', description: 'Buttery, flaky French classic', emoji: '🥐' },
  { name: 'Blueberry Muffin', price: '₹130', category: 'Pastries', description: 'Fresh blueberries in every bite', emoji: '🫐' },
  { name: 'Chocolate Cake', price: '₹180', category: 'Pastries', description: 'Rich, moist chocolate goodness', emoji: '🍰' },
  { name: 'Cinnamon Roll', price: '₹160', category: 'Pastries', description: 'Warm, gooey & irresistible', emoji: '🍩' },

  // Specials
  { name: 'Caramel Macchiato', price: '₹280', category: 'Specials', description: 'Vanilla, caramel & espresso layers', emoji: '✨' },
  { name: 'Lavender Latte', price: '₹260', category: 'Specials', description: 'Floral notes meet creamy espresso', emoji: '💜' },
  { name: 'Affogato', price: '₹200', category: 'Specials', description: 'Espresso poured over vanilla gelato', emoji: '🍨' },
  { name: 'Turmeric Latte', price: '₹230', category: 'Specials', description: 'Golden milk with warming spices', emoji: '🌟' },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">Discover</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-3 mb-4 tracking-tight">Our Menu</h1>
          <p className="text-emerald-200/80 text-lg max-w-2xl mx-auto">
            From classic espressos to creative specials — there's something for every palate.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-950 text-amber-400 shadow-md'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-emerald-900 border border-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-slate-500 text-sm">
              Showing <span className="font-semibold text-emerald-900">{filteredItems.length}</span> items
              {activeCategory !== 'All' && <span> in <span className="font-semibold text-emerald-900">{activeCategory}</span></span>}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 hover:border-amber-200 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-emerald-50 group-hover:bg-amber-50 rounded-xl flex items-center justify-center transition-colors duration-500">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {item.emoji}
                    </span>
                  </div>
                  <span className="px-4 py-1.5 bg-emerald-950 text-amber-400 text-sm font-bold rounded-lg">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-emerald-950 mb-1 group-hover:text-amber-700 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-xs rounded-full border border-slate-100">
                    {item.category}
                  </span>
                  <button className="text-amber-600 hover:text-amber-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    Add
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-slate-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
