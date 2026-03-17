'use client';

interface HeroSectionProps {
  setSelectedBranch: (branch: string) => void;
}

export default function HeroSection({ setSelectedBranch }: HeroSectionProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-950">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{
        backgroundImage: 'linear-gradient(135deg, rgba(196, 30, 58, 0.2) 0%, rgba(212, 88, 15, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%)'
      }} />

      {/* Animated accent elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-red-900/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-900/15 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center">
        <div className="space-y-8">
          {/* Subheading */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-red-700/30 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="text-sm font-medium text-yellow-400">Premium Fast Food Delivery</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight text-balance">
            <span className="text-orange-500">BIG PAN</span> FOODS
            <br />
            <span className="text-3xl md:text-5xl font-normal text-gray-300">Premium Fast Food Delivery</span>
          </h1>

          {/* Subheading text */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-balance">
            We deliver across 5 cities in Pakistan with 6 branches. Free delivery within city limits. Late-night cravings? We've got you covered with extended delivery hours.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 justify-center text-sm md:text-base">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/40 border border-gray-700">
              <span className="text-orange-400">⭐</span>
              <span className="text-gray-300">Rated 4.6+</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/40 border border-gray-700">
              <span className="text-orange-400">🚚</span>
              <span className="text-gray-300">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/40 border border-gray-700">
              <span className="text-orange-400">❤️</span>
              <span className="text-gray-300">Family Favorite</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover-lift premium-shadow">
              Order Now
            </button>
            <button className="px-8 py-4 border-2 border-yellow-500 hover:bg-yellow-500/10 text-yellow-400 font-semibold rounded-lg transition-all duration-300 hover-lift premium-shadow-sm">
              View Menu
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
