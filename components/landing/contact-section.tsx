'use client';

export function ContactSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Connect With Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find our locations, get in touch, or order your favorite meals through multiple convenient channels.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-green-600/50 transition-all duration-300 text-center hover-lift">
            <p className="text-4xl mb-4">💬</p>
            <h3 className="font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-4">Quick orders & support</p>
            <button className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm">
              Chat with us
            </button>
          </div>

          {/* Phone */}
          <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-blue-600/50 transition-all duration-300 text-center hover-lift">
            <p className="text-4xl mb-4">📞</p>
            <h3 className="font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm mb-4">Available 24/7</p>
            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm">
              Call us
            </button>
          </div>

          {/* Email */}
          <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-purple-600/50 transition-all duration-300 text-center hover-lift">
            <p className="text-4xl mb-4">✉️</p>
            <h3 className="font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm mb-4">We respond quickly</p>
            <a href="mailto:info@bigpanfoods.com" className="w-full block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm">
              Send email
            </a>
          </div>

          {/* Location */}
          <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-orange-600/50 transition-all duration-300 text-center hover-lift">
            <p className="text-4xl mb-4">📍</p>
            <h3 className="font-bold text-white mb-2">Locations</h3>
            <p className="text-gray-400 text-sm mb-4">25+ branches</p>
            <button className="w-full px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm">
              Find near you
            </button>
          </div>
        </div>

        {/* Service Hours & Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hours */}
          <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Service Hours</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-yellow-500 font-semibold">10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-yellow-500 font-semibold">9:00 AM - 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-yellow-500 font-semibold">9:00 AM - 11:00 PM</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-6 border-t border-gray-800 pt-6">
              Delivery may be extended during peak hours. Call for special timings.
            </p>
          </div>

          {/* Delivery Areas */}
          <div className="p-8 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Delivery Coverage</h3>
            <div className="space-y-3 text-gray-300">
              <p>✓ Downtown District</p>
              <p>✓ Midtown Area</p>
              <p>✓ Suburban Zones</p>
              <p>✓ Business District</p>
              <p>✓ Residential Areas</p>
              <p>✓ Shopping Centers</p>
            </div>
            <p className="text-gray-500 text-sm mt-6 border-t border-gray-800 pt-6">
              Minimum order: $10. Fast delivery in 30-45 minutes for most areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
