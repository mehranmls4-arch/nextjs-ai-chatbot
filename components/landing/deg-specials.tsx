'use client';

export default function DegSpecials() {
  return (
    <section id="deg" className="py-20 px-4 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              SIGNATURE<br/>
              <span className="text-orange-500">DEG SPECIALS</span>
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Slow-cooked, sealed, and delivered hot. Perfect for family dinners & late-night feasts.
            </p>

            <p className="text-gray-400 text-base mb-8">
              Our traditional deg cooking method ensures every grain of rice is infused with rich flavors. Grilled to perfection.
            </p>

            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition">
              Order a Deg
            </button>
          </div>

          {/* Right side - Menu Grid */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-6">Deg Menu</h3>
            
            <div className="space-y-3">
              <div className="p-4 border border-white/10 rounded-lg hover:border-orange-500/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">Chicken Deg Biryani</h4>
                  <span className="text-orange-400">Rs. 1,499</span>
                </div>
                <p className="text-gray-400 text-sm">Serves 5-6 persons • Sealed packaging</p>
              </div>

              <div className="p-4 border border-white/10 rounded-lg hover:border-orange-500/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">Beef Deg Biryani</h4>
                  <span className="text-orange-400">Rs. 1,799</span>
                </div>
                <p className="text-gray-400 text-sm">Serves 5-6 persons • Sealed packaging</p>
              </div>

              <div className="p-4 border border-white/10 rounded-lg hover:border-orange-500/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">Mixed Deg Biryani</h4>
                  <span className="text-orange-400">Rs. 1,899</span>
                </div>
                <p className="text-gray-400 text-sm">Serves 5-6 persons • Sealed packaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
