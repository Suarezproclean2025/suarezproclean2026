import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Huntington Beach CA | Office Cleaning | Suarez Cleaning',
  description: 'Professional commercial cleaning in Huntington Beach, CA. Office cleaning, janitorial services, floor care for Huntington Beach businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Huntington Beach', 'office cleaning Huntington Beach CA', 'janitorial services Huntington Beach', 'Huntington Beach commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Huntington Beach CA | Suarez Cleaning',
    description: 'Reliable commercial cleaning for Huntington Beach businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/huntington-beach',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/huntington-beach' },
}

export default function HuntingtonBeachPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/huntington-beach',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Huntington Beach', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Huntington Beach' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Huntington Beach, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Huntington Beach, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Professional commercial cleaning for Huntington Beach businesses, restaurants, retail, and offices. Serving Surf City USA with reliable, eco-friendly cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Services in Huntington Beach</h2>
            <p className="text-lg text-gray-600 mb-12">From Main Street to Pacific City, we provide comprehensive cleaning for all Huntington Beach commercial properties.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Daily office cleaning for Huntington Beach businesses.</p></Link>
              <Link href="/nightly-janitorial" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Nightly Janitorial</h3><p className="text-gray-600">Overnight janitorial and maintenance services.</p></Link>
              <Link href="/floor-care" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Floor Care</h3><p className="text-gray-600">Complete floor maintenance and restoration.</p></Link>
              <Link href="/day-porter-services" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Day Porter</h3><p className="text-gray-600">On-site cleaning during business hours.</p></Link>
              <Link href="/post-construction-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Post-Construction</h3><p className="text-gray-600">Cleanup after construction or remodeling.</p></Link>
              <Link href="/commercial-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Commercial Cleaning</h3><p className="text-gray-600">Customized cleaning plans for all businesses.</p></Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Huntington Beach Businesses Trust Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Coastal Experience</h3><p className="text-gray-600">We understand the unique needs of beachside businesses. Sand, salt air, and high tourist traffic require specialized cleaning approaches.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Restaurant & Retail Experts</h3><p className="text-gray-600">Extensive experience cleaning restaurants, cafes, and retail shops along Main Street and Pacific City.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Licensed & Insured</h3><p className="text-gray-600">Fully licensed, bonded, and insured. Your property is protected with comprehensive coverage.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly</h3><p className="text-gray-600">Green cleaning products available. Safe for employees, customers, and the ocean environment.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Huntington Beach Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Main Street</div>
              <div className="p-4 bg-gray-50 rounded">Pacific City</div>
              <div className="p-4 bg-gray-50 rounded">Downtown HB</div>
              <div className="p-4 bg-gray-50 rounded">Huntington Harbour</div>
              <div className="p-4 bg-gray-50 rounded">Seacliff area</div>
              <div className="p-4 bg-gray-50 rounded">Beach Boulevard</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Huntington Beach Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you clean restaurants in Huntington Beach?</summary><p className="mt-4 text-gray-600">Yes! We specialize in cleaning restaurants, cafes, and food service businesses throughout Huntington Beach with health-code compliant procedures.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you service businesses near the beach?</summary><p className="mt-4 text-gray-600">Absolutely. We service all Huntington Beach areas including Main Street, Pacific City, the Pier area, and Beach Boulevard.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What's included in your cleaning service?</summary><p className="mt-4 text-gray-600">All services include trash removal, restroom sanitization, floor care, surface cleaning, and detailed attention to high-touch areas. Customized checklists available.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Huntington Beach Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Huntington Beach business.</p>
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
