'use client';

export default function StatsSection() {
  return (
    <section className="py-16 px-4 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">4.6+</div>
            <p className="text-gray-400 text-sm">Average Rating</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">10K+</div>
            <p className="text-gray-400 text-sm">Happy Customers</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">6</div>
            <p className="text-gray-400 text-sm">Branches</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">30min</div>
            <p className="text-gray-400 text-sm">Avg Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
