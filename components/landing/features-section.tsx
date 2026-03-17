'use client';

const features = [
  {
    icon: "⭐",
    title: "Premium Ingredients",
    description: "Only the finest quality ingredients sourced daily for maximum freshness"
  },
  {
    icon: "🧼",
    title: "Hygienic Preparation",
    description: "Certified kitchen standards with strict hygiene protocols"
  },
  {
    icon: "⚡",
    title: "Lightning Fast Delivery",
    description: "30-minute delivery guarantee or your order is on us"
  },
  {
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description: "Trained culinary professionals crafting each dish with care"
  },
  {
    icon: "❤️",
    title: "Customer First",
    description: "Your satisfaction is our highest priority, always"
  },
  {
    icon: "🔒",
    title: "Fresh Guarantee",
    description: "Made fresh to order - never pre-prepared or frozen"
  },
];

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Why Choose Big Pan Foods
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We set the standard for premium fast food, combining speed with quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover-lift premium-shadow-sm"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">
                {feature.description}
              </p>

              {/* Accent line */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
