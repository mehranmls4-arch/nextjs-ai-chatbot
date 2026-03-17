'use client';

import Image from 'next/image';

const featuredItems = [
  {
    id: 1,
    name: "Premium Beef Burger",
    description: "Juicy premium beef patty with aged cheddar",
    price: "$9.99",
    badge: "Bestseller",
    image: "/images/premium-burger.jpg"
  },
  {
    id: 2,
    name: "Signature Pan Pizza",
    description: "Crispy crust with fresh mozzarella and toppings",
    price: "$12.99",
    badge: "Chef's Choice",
    image: "/images/signature-pizza.jpg"
  },
  {
    id: 3,
    name: "Spicy Chicken Wrap",
    description: "Grilled chicken with fresh vegetables",
    price: "$8.99",
    badge: "Popular",
    image: "/images/chicken-wrap.jpg"
  },
  {
    id: 4,
    name: "Golden Crispy Fries",
    description: "Hand-cut potatoes fried to perfection",
    price: "$4.99",
    badge: "New",
    image: "/images/golden-fries.jpg"
  },
  {
    id: 5,
    name: "Premium Chicken Platter",
    description: "Flame-grilled chicken with seasonal sides",
    price: "$13.99",
    badge: "Bestseller",
    image: "/images/chicken-platter.jpg"
  },
  {
    id: 6,
    name: "Chocolate Indulgence",
    description: "Rich chocolate dessert with creamy filling",
    price: "$5.99",
    badge: "Popular",
    image: "/images/chocolate-dessert.jpg"
  },
];

export function FeaturedMenu() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold mb-2">Our Selection</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Featured Menu Items
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Handpicked favorites from our premium menu, carefully prepared with the finest ingredients.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden border border-gray-800 hover:border-red-700/50 transition-all duration-300 hover-lift premium-shadow"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold">
                {item.badge}
              </div>

              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <span className="text-2xl font-bold text-yellow-500">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm">
                    Add to Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold rounded-lg transition-all duration-300 premium-shadow">
            View Complete Menu
          </button>
        </div>
      </div>
    </section>
  );
}
