const testimonials = [
  {
    name: 'MC',
    role: 'CEO',
    company: 'Platinum Auto',
    city: 'Orange County',
    rating: 5,
    text: 'Great services, Luz is very professional and her team had my shop\'s office clean for the grand opening day. Thanks!',
    verified: true,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          What Orange County Businesses Say About Us
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what business owners and facility managers across Orange County say about Suarez Cleaning Services.
        </p>

        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-10 shadow-xl border-2 border-cyan-200"
            >
              <div className="flex items-center gap-2 mb-4">
                <StarRating rating={testimonial.rating} />
                {testimonial.verified && (
                  <span className="ml-auto bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    ✓ Verified Client
                  </span>
                )}
              </div>
              
              <blockquote className="text-xl text-gray-700 leading-relaxed italic mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              
              <div className="border-t border-cyan-200 pt-4">
                <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
                <p className="text-cyan-600 font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Join our satisfied clients across Orange County
          </p>
          <a
            href="/contact"
            className="inline-block bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-700 transition-colors font-semibold text-lg"
          >
            Get Your Free Quote Today
          </a>
        </div>
      </div>
    </section>
  )
}
