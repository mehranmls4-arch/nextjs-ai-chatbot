'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 p-8 rounded-lg bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/50">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">
              Join Our Community
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to get exclusive deals, new menu items, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Big Pan Foods</h2>
            <p className="text-gray-400 text-sm mb-6">
              Premium fast food delivery with a commitment to quality, freshness, and customer satisfaction.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300">
                f
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300">
                📷
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-900 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-300">
                ▶️
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Support Chat</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>25+ Locations</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>1-800-BIG-FOOD</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <span>info@bigpanfoods.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>10 AM - 11 PM Daily</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; 2024 Big Pan Foods. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
