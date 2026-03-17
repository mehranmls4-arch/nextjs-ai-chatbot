'use client';

const deals = [
  {
    id: 1,
    title: "Family Feast Deal",
    description: "4 burgers, 2 pizzas, fries & drinks",
    original: "$65.99",
    price: "$45.99",
    savings: "30% OFF"
  },
  {
    id: 2,
    title: "Combo Meal Special",
    description: "Burger, fries, drink & dessert",
    original: "$18.99",
    price: "$12.99",
    savings: "32% OFF"
  },
  {
    id: 3,
    title: "Weekend Special",
    description: "Any large pizza + appetizer",
    original: "$24.99",
    price: "$16.99",
    savings: "32% OFF"
  },
];

export function DealsSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 font-semibold mb-2">Limited Time Offers</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Exclusive Deals & Promotions
          </h2>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="group relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-orange-600/50 transition-all duration-300 hover-lift premium-shadow"
            >
              {/* Savings badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-4 py-2 rounded-full bg-orange-600 text-white font-bold text-sm">
                  {deal.savings}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {deal.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {deal.description}
                  </p>
                </div>

                {/* Pricing */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg text-gray-500 line-through">
                      {deal.original}
                    </span>
                    <span className="text-3xl font-bold text-yellow-500">
                      {deal.price}
                    </span>
                  </div>
                  <button className="w-full px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promotion banner */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-red-700/50 text-center">
          <p className="text-gray-300 mb-2">Limited to orders placed today!</p>
          <p className="text-sm text-gray-400">Delivery available in select areas. Minimum order requirements apply.</p>
        </div>
      </div>
    </section>
  );
}
