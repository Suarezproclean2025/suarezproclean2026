import Link from 'next/link'
import { MdRequestQuote } from "react-icons/md";


export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Text + CTAs */}
          <div className="animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Commercial Cleaning & Janitorial Services in Orange County, CA
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional office, building, and floor cleaning — reliable, insured, and eco-friendly.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium text-lg inline-block"
              >
                Request a Free Quote
              </Link>
              <Link
                href="#services"
                className="border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-50 hover:shadow-md hover:scale-105 transition-all duration-300 font-medium text-lg inline-block"
              >
                See Services
              </Link>
            </div>

            {/* Badges */}
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Licensed & Insured
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Flexible Schedules (Daily/Weekly)
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform duration-300">
                <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Eco-friendly Options
              </li>
            </ul>
          </div>

          {/* Hero Side Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 animate-slide-in-right hover:shadow-cyan-200 hover:scale-105 transition-all duration-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Fast Quote</h2>
            <MdRequestQuote className='w-8 h-8 text-cyan-600'/>
            <p className="text-gray-600 mb-6">2-3 minute form. We'll text you back.</p>
            <Link
              href="/contact"
              className="block w-full bg-cyan-500 text-white px-6 py-4 rounded-lg hover:bg-cyan-600 hover:shadow-lg transition-all duration-300 font-medium text-center text-lg mb-4 transform hover:scale-105"
            >
              Start Now
            </Link>
            <p className="text-sm text-gray-500 text-center">
              Serving: Irvine, Newport Beach, Costa Mesa, Santa Ana, Anaheim, & more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}