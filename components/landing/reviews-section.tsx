'use client';

const reviews = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    comment: "Absolutely the best fast food I've ever had. The quality and freshness are unmatched. Will definitely order again!",
    verified: true
  },
  {
    id: 2,
    name: "James Chen",
    rating: 5,
    comment: "Fast delivery, premium quality, and the taste is exceptional. Big Pan Foods has set a new standard.",
    verified: true
  },
  {
    id: 3,
    name: "Amelia Rodriguez",
    rating: 5,
    comment: "Finally found a fast food place that doesn't compromise on quality. Worth every penny!",
    verified: true
  },
];

export function ReviewsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-500 font-semibold mb-2">Customer Love</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            What Our Customers Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 mb-6 italic">
                "{review.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">
                    {review.name}
                  </p>
                  {review.verified && (
                    <p className="text-xs text-green-400 mt-1">
                      ✓ Verified Customer
                    </p>
                  )}
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800">
            <p className="text-4xl font-bold text-yellow-500 mb-2">4.9★</p>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800">
            <p className="text-4xl font-bold text-yellow-500 mb-2">10K+</p>
            <p className="text-gray-400">Happy Customers</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 border border-gray-800">
            <p className="text-4xl font-bold text-yellow-500 mb-2">98%</p>
            <p className="text-gray-400">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
