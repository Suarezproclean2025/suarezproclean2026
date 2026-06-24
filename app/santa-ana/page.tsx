import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Santa Ana CA | Office & Janitorial Services | Suarez Cleaning',
  description: 'Professional commercial cleaning in Santa Ana, CA. Office cleaning, janitorial services, floor care for Santa Ana businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Santa Ana', 'office cleaning Santa Ana CA', 'janitorial services Santa Ana', 'Santa Ana commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Santa Ana CA | Suarez Cleaning',
    description: 'Trusted commercial cleaning for Santa Ana businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/santa-ana',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/santa-ana' },
}

export default function SantaAnaPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/santa-ana',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Santa Ana', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Santa Ana' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Santa Ana, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Santa Ana, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Reliable commercial cleaning for Santa Ana offices, government buildings, medical facilities, and retail spaces. Serving Orange County's largest city with professional, affordable cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Services in Santa Ana</h2>
            <p className="text-lg text-gray-600 mb-12">Comprehensive cleaning solutions for Santa Ana businesses of all sizes. From downtown offices to industrial parks, we deliver consistent quality.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Professional office cleaning for Santa Ana businesses.</p></Link>
              <Link href="/nightly-janitorial" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Nightly Janitorial</h3><p className="text-gray-600">Overnight janitorial and maintenance services.</p></Link>
              <Link href="/floor-care" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Floor Care</h3><p className="text-gray-600">Complete floor maintenance and restoration.</p></Link>
              <Link href="/day-porter-services" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Day Porter</h3><p className="text-gray-600">On-site cleaning during business hours.</p></Link>
              <Link href="/post-construction-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Post-Construction</h3><p className="text-gray-600">Cleanup after construction or remodeling.</p></Link>
              <Link href="/move-in-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Move In/Out Cleaning</h3><p className="text-gray-600">Deep cleaning for tenant transitions.</p></Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Santa Ana Businesses Trust Suarez Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Experienced & Reliable</h3><p className="text-gray-600">Over 10 years of commercial cleaning experience in Santa Ana. We show up on time, every time.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Affordable Pricing</h3><p className="text-gray-600">Competitive rates without compromising quality. Free estimates with no obligation.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Fully Licensed</h3><p className="text-gray-600">Licensed, bonded, and insured. Your property is protected with comprehensive coverage.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Custom Plans</h3><p className="text-gray-600">Cleaning schedules tailored to your business needs. Daily, weekly, or monthly service available.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Santa Ana Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Downtown Santa Ana</div>
              <div className="p-4 bg-gray-50 rounded">MainPlace Mall area</div>
              <div className="p-4 bg-gray-50 rounded">Santa Ana Business District</div>
              <div className="p-4 bg-gray-50 rounded">French Park</div>
              <div className="p-4 bg-gray-50 rounded">Heninger Park area</div>
              <div className="p-4 bg-gray-50 rounded">Delhi area</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Santa Ana Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you clean government buildings in Santa Ana?</summary><p className="mt-4 text-gray-600">Yes, we have experience cleaning government offices, courthouses, and municipal buildings in Santa Ana with proper security clearances.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What industries do you serve in Santa Ana?</summary><p className="mt-4 text-gray-600">We serve offices, medical facilities, retail stores, restaurants, schools, warehouses, and industrial properties throughout Santa Ana.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Can you provide emergency cleaning services?</summary><p className="mt-4 text-gray-600">Yes, we offer same-day and emergency cleaning services for Santa Ana businesses. Call us immediately for urgent cleaning needs.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Santa Ana Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Santa Ana business. Call now!</p>
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
