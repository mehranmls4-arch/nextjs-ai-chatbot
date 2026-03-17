'use client';

const reviews = [
  {
    id: 1,
    name: "Ahsan",
    rating: 5,
    comment: "Fast delivery and taste is always consistent.",
    verified: true,
    initial: "A"
  },
  {
    id: 2,
    name: "Hira",
    rating: 5,
    comment: "Broast is crispy and fresh. Family loves it.",
    verified: true,
    initial: "H"
  },
  {
    id: 3,
    name: "Noman",
    rating: 5,
    comment: "Best value deals. Highly recommended.",
    verified: true,
    initial: "N"
  },
  {
    id: 4,
    name: "Sara",
    rating: 5,
    comment: "The deg biryani is amazing! Perfect for family dinners.",
    verified: true,
    initial: "S"
  },
  {
    id: 5,
    name: "Ali",
    rating: 5,
    comment: "Late night cravings solved! Open till 3 AM.",
    verified: true,
    initial: "A"
  },
  {
    id: 6,
    name: "Fatima",
    rating: 5,
    comment: "BBQ platter was delicious and well packed.",
    verified: true,
    initial: "F"
  },
];

export default function ReviewsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Customer <span className="text-orange-500">Love</span>
          </h2>
          <p className="text-gray-400">Real feedback from real hunger.</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-6">
                "{review.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-sm">
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    {review.name}
                  </p>
                  {review.verified && (
                    <p className="text-xs text-green-400 mt-0.5">
                      Verified Customer
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">4.6+</p>
            <p className="text-gray-400 text-sm">Average Rating</p>
          </div>
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">10K+</p>
            <p className="text-gray-400 text-sm">Happy Customers</p>
          </div>
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">6</p>
            <p className="text-gray-400 text-sm">Cities Covered</p>
          </div>
          <div className="p-4">
            <p className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">30min</p>
            <p className="text-gray-400 text-sm">Avg Delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
