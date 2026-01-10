export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
          Why Choose Us
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Checklist */}
          <div className="animate-slide-in-left">
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  Trusted Orange County cleaning company with background-checked staff
                </span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  Detailed cleaning checklists with photo proof for accountability
                </span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  Eco-friendly cleaning products available upon request
                </span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">
                  Fully licensed, insured, and COI available for your building
                </span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Our janitorial company in Orange County provides eco-friendly cleaning, licensed and insured staff, and reliable nightly cleaning schedules.
            </p>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-slide-in-right">
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="text-4xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-gray-600 text-sm">On-time</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">24hr</div>
              <div className="text-gray-600 text-sm">Issue resolution</div>
            </div>
            <div className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-cyan-500 mb-2 group-hover:scale-110 transition-transform duration-300">250+</div>
              <div className="text-gray-600 text-sm">Spaces cleaned</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}