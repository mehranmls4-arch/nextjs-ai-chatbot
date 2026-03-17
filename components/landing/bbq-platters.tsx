'use client';

export default function BbqPlatters() {
  return (
    <section id="bbq" className="py-20 px-4 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Menu Grid */}
          <div>
            <h3 className="text-white font-semibold mb-6">BBQ Platters</h3>
            
            <div className="space-y-3">
              <div className="p-4 border border-white/10 rounded-lg hover:border-orange-500/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">BBQ Platter (2 Persons)</h4>
                  <span className="text-orange-400">Rs. 1,299</span>
                </div>
                <p className="text-gray-400 text-sm">Includes rice, kababs, tikka & paratha</p>
              </div>

              <div className="p-4 border border-white/10 rounded-lg hover:border-orange-500/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">BBQ Platter (4 Persons)</h4>
                  <span className="text-orange-400">Rs. 2,499</span>
                </div>
                <p className="text-gray-400 text-sm">Includes rice, kababs, tikka & paratha</p>
              </div>

              <div className="p-4 border border-white/10 rounded-lg hover:border-orange-500/50 transition">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">BBQ Platter (6 Persons)</h4>
                  <span className="text-orange-400">Rs. 3,499</span>
                </div>
                <p className="text-gray-400 text-sm">Includes rice, kababs, tikka & paratha</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-orange-500">BBQ</span><br/>
              PLATTERS
            </h2>
            
            <p className="text-gray-300 text-lg mb-8">
              Grilled, smoky, and built to share. Rice, kababs, tikka & paratha—packed fresh.
            </p>

            <p className="text-gray-400 text-base mb-8">
              Our BBQ platters are perfect for gatherings, parties, or when you just want to feast with family. Each item is carefully prepared and grilled to perfection.
            </p>

            <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-lg transition">
              Build a Platter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
