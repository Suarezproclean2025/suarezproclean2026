import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Costa Mesa CA | Office & Janitorial | Suarez Cleaning',
  description: 'Professional commercial cleaning in Costa Mesa, CA. Office cleaning, janitorial services, floor care for Costa Mesa businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Costa Mesa', 'office cleaning Costa Mesa CA', 'janitorial services Costa Mesa', 'Costa Mesa commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Costa Mesa CA | Suarez Cleaning',
    description: 'Reliable commercial cleaning for Costa Mesa businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/costa-mesa',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/costa-mesa' },
}

export default function CostaMesaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/costa-mesa',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Costa Mesa', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Costa Mesa' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Costa Mesa, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Costa Mesa, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Trusted commercial cleaning for Costa Mesa businesses. Office cleaning, janitorial services, and customized cleaning plans. Serving the South Coast Metro area since 2015.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Services We Offer in Costa Mesa</h2>
            <p className="text-lg text-gray-600 mb-12">From South Coast Metro to Mesa Del Mar, we provide comprehensive cleaning for all Costa Mesa commercial properties.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Daily office cleaning for Costa Mesa businesses.</p></Link>
              <Link href="/nightly-janitorial" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Nightly Janitorial</h3><p className="text-gray-600">Overnight janitorial and maintenance services.</p></Link>
              <Link href="/floor-care" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Floor Care</h3><p className="text-gray-600">Complete floor maintenance and restoration.</p></Link>
              <Link href="/day-porter-services" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Day Porter</h3><p className="text-gray-600">On-site cleaning during business hours.</p></Link>
              <Link href="/post-construction-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Post-Construction</h3><p className="text-gray-600">Cleanup after construction or remodeling.</p></Link>
              <Link href="/janitorial-services" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Janitorial Services</h3><p className="text-gray-600">Comprehensive janitorial solutions.</p></Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Costa Mesa Businesses Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Local Experience</h3><p className="text-gray-600">Over 10 years serving Costa Mesa businesses. We understand local needs and building requirements.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Competitive Pricing</h3><p className="text-gray-600">Fair, transparent pricing with no hidden fees. Customized plans to fit your budget.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Professional Staff</h3><p className="text-gray-600">Trained, background-checked cleaners. Consistent team for quality and reliability.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Satisfaction Guaranteed</h3><p className="text-gray-600">100% satisfaction guarantee. If you're not happy, we'll make it right at no extra cost.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Areas We Serve in Costa Mesa</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">South Coast Metro</div>
              <div className="p-4 bg-gray-50 rounded">Mesa Del Mar</div>
              <div className="p-4 bg-gray-50 rounded">Eastside Costa Mesa</div>
              <div className="p-4 bg-gray-50 rounded">Westside Costa Mesa</div>
              <div className="p-4 bg-gray-50 rounded">Harbor area</div>
              <div className="p-4 bg-gray-50 rounded">Paularino Avenue</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Costa Mesa Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">How quickly can you start cleaning our Costa Mesa office?</summary><p className="mt-4 text-gray-600">We can typically begin services within 1-3 business days. Same-week service is often available for urgent needs.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you service businesses near South Coast Plaza?</summary><p className="mt-4 text-gray-600">Yes! We service all Costa Mesa areas including South Coast Metro, South Coast Plaza, and surrounding business districts.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What's included in your cleaning service?</summary><p className="mt-4 text-gray-600">All services include trash removal, restroom sanitization, floor care, surface cleaning, and detailed attention to high-touch areas. Customized checklists available.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Costa Mesa Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Costa Mesa business.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg">Call (949) 357-9256</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
