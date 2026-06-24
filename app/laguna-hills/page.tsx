import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Laguna Hills CA | Office Cleaning | Suarez Cleaning',
  description: 'Professional commercial cleaning in Laguna Hills, CA. Office cleaning, janitorial services, floor care for Laguna Hills businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Laguna Hills', 'office cleaning Laguna Hills CA', 'janitorial services Laguna Hills', 'Laguna Hills commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Laguna Hills CA | Suarez Cleaning',
    description: 'Professional commercial cleaning for Laguna Hills businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/laguna-hills',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/laguna-hills' },
}

export default function LagunaHillsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/laguna-hills',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Laguna Hills', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Laguna Hills' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Laguna Hills, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Laguna Hills, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Professional commercial cleaning for Laguna Hills offices, medical buildings, and retail centers. Serving South Orange County with reliable, eco-friendly cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Services in Laguna Hills</h2>
            <p className="text-lg text-gray-600 mb-12">From Laguna Hills Business Park to El Toro Road, we provide comprehensive cleaning for all commercial properties in the area.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Daily office cleaning for Laguna Hills businesses.</p></Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Laguna Hills Businesses Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">South OC Experts</h3><p className="text-gray-600">We specialize in serving South Orange County businesses. Local knowledge, reliable service, competitive pricing.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly Products</h3><p className="text-gray-600">Green cleaning options available. Safe for employees, clients, and the environment.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Licensed & Insured</h3><p className="text-gray-600">Fully licensed, bonded, and insured. Comprehensive coverage for your protection.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Quality Guaranteed</h3><p className="text-gray-600">100% satisfaction guarantee. If you're not happy, we'll make it right at no extra cost.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Laguna Hills Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Laguna Hills Business Park</div>
              <div className="p-4 bg-gray-50 rounded">El Toro Road</div>
              <div className="p-4 bg-gray-50 rounded">Alicia Parkway</div>
              <div className="p-4 bg-gray-50 rounded">Moulton Parkway</div>
              <div className="p-4 bg-gray-50 rounded">Laguna Hills Village</div>
              <div className="p-4 bg-gray-50 rounded">Serrano area</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Laguna Hills Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What areas of Laguna Hills do you service?</summary><p className="mt-4 text-gray-600">We service all of Laguna Hills including the Business Park, El Toro Road corridor, Alicia Parkway, Moulton Parkway, and surrounding areas.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you also serve nearby cities?</summary><p className="mt-4 text-gray-600">Yes! We serve all of South Orange County including Laguna Niguel, Mission Viejo, Aliso Viejo, Lake Forest, and Laguna Beach.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">How do I get a quote for my Laguna Hills business?</summary><p className="mt-4 text-gray-600">Simply call us at (949) 357-9256 or fill out our contact form. We'll provide a free, no-obligation estimate within 24 hours.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Laguna Hills Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Laguna Hills business.</p>
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
