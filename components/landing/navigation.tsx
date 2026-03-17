'use client';

import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white font-bold text-lg">
              🍽️
            </div>
            <span className="text-xl font-bold text-white hidden sm:block">
              Big Pan Foods
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Menu</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Deals</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-6 py-2 text-red-500 border border-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300 font-semibold">
              Sign In
            </button>
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 font-semibold">
              Order Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 py-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">Home</a>
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">Menu</a>
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">Deals</a>
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">About</a>
            <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">Contact</a>
            <div className="px-4 py-2">
              <button className="w-full px-6 py-2 text-red-500 border border-red-500 hover:bg-red-500/10 rounded-lg transition-all duration-300 font-semibold">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
