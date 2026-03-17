'use client';

export function AboutSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 flex items-center justify-center text-gray-600 overflow-hidden group">
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <p className="text-4xl mb-4">🍽️</p>
                <p className="font-semibold">Big Pan Foods Team</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-600/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-600/10 rounded-full blur-2xl" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-red-500 font-semibold mb-2">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
                Crafting Premium Fast Food Excellence
              </h2>
            </div>

            <div className="space-y-6 text-gray-300">
              <p>
                Big Pan Foods was born from a simple belief: fast food doesn't have to compromise on quality. We started with a vision to revolutionize the fast-food industry by combining premium ingredients, expert preparation, and lightning-fast delivery.
              </p>
              <p>
                Every item on our menu is carefully crafted using only the finest ingredients sourced daily. Our team of expert chefs brings passion and precision to every dish, ensuring consistent excellence in every bite.
              </p>
              <p>
                From our hygienic preparation standards to our commitment to customer satisfaction, we set the benchmark for what premium fast food should be. Join thousands of satisfied customers who have experienced the Big Pan Foods difference.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-800">
              <div>
                <p className="text-3xl font-bold text-yellow-500 mb-2">2019</p>
                <p className="text-sm text-gray-400">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-yellow-500 mb-2">25+</p>
                <p className="text-sm text-gray-400">Locations</p>
              </div>
            </div>

            {/* CTA */}
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 premium-shadow">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
