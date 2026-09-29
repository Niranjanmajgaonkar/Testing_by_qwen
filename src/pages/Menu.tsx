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
      <section className="bg-gradient-to-br from-stone-900 to-amber-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h1>
          <p className="text-stone-300 text-lg max-w-2xl mx-auto">
            From classic espressos to creative specials — there's something for every palate.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-stone-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {item.emoji}
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-sm font-bold rounded-full">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h3>
                <p className="text-stone-500 text-sm mb-3">{item.description}</p>
                <span className="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">
                  {item.category}
                </span>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-6xl mb-4">🔍</p>
              <p className="text-stone-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
