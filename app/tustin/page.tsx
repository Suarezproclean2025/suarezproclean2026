import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Tustin CA | Office & Janitorial Services | Suarez Cleaning',
  description: 'Professional commercial cleaning in Tustin, CA. Office cleaning, janitorial, floor care for Tustin businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Tustin', 'office cleaning Tustin CA', 'janitorial services Tustin', 'Tustin commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Tustin CA | Suarez Cleaning',
    description: 'Trusted commercial cleaning for Tustin businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/tustin',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/tustin' },
}

export default function TustinPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/tustin',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Tustin', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Tustin' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Tustin, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Tustin, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Professional commercial cleaning for Tustin offices, retail, medical facilities, and industrial parks. Serving Tustin and the Legacy area with reliable, affordable cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commercial Cleaning Services in Tustin</h2>
            <p className="text-lg text-gray-600 mb-12">Comprehensive cleaning solutions for Tustin businesses. From Old Town to Tustin Legacy, we deliver consistent, professional results.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Daily office cleaning for Tustin businesses.</p></Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Tustin Businesses Trust Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Local Expertise</h3><p className="text-gray-600">We know Tustin's business community. Over 10 years serving local offices, retail, and industrial properties.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Reliable Service</h3><p className="text-gray-600">Consistent, professional cleaning. Same trained team every visit for quality assurance.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Customized Plans</h3><p className="text-gray-600">Cleaning schedules tailored to your business. Daily, weekly, or monthly service available.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Fair Pricing</h3><p className="text-gray-600">Transparent, competitive pricing with no hidden fees. Free estimates with no obligation.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Tustin Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Tustin Legacy</div>
              <div className="p-4 bg-gray-50 rounded">Old Town Tustin</div>
              <div className="p-4 bg-gray-50 rounded">Tustin Business Park</div>
              <div className="p-4 bg-gray-50 rounded">El Camino Real corridor</div>
              <div className="p-4 bg-gray-50 rounded">Tustin Ranch</div>
              <div className="p-4 bg-gray-50 rounded">North Tustin</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Tustin Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you service Tustin Legacy businesses?</summary><p className="mt-4 text-gray-600">Yes! We service all businesses in Tustin Legacy including retail stores, restaurants, offices, and the movie theater.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What types of businesses do you clean in Tustin?</summary><p className="mt-4 text-gray-600">We clean offices, retail stores, medical facilities, restaurants, industrial warehouses, and all commercial properties in Tustin.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">How often should we schedule commercial cleaning?</summary><p className="mt-4 text-gray-600">Most Tustin businesses choose daily or weekly cleaning. We'll recommend a schedule based on your facility size, foot traffic, and specific needs.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Tustin Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Tustin business.</p>
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
