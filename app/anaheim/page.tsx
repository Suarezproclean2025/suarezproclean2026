import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Anaheim CA | Office & Janitorial Services | Suarez Cleaning',
  description: 'Professional commercial cleaning in Anaheim, CA. Office cleaning, janitorial, floor care for Anaheim businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Anaheim', 'office cleaning Anaheim CA', 'janitorial services Anaheim', 'Anaheim commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Anaheim CA | Suarez Cleaning',
    description: 'Reliable commercial cleaning for Anaheim businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/anaheim',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/anaheim' },
}

export default function AnaheimPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/anaheim',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Anaheim', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Anaheim' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Anaheim, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Anaheim, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Professional commercial cleaning for Anaheim hotels, offices, retail, and entertainment venues. Serving the heart of Orange County with reliable, affordable cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Services in Anaheim</h2>
            <p className="text-lg text-gray-600 mb-12">From Disneyland area hotels to Anaheim Convention Center businesses, we provide comprehensive cleaning for all commercial properties.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Professional office cleaning for Anaheim businesses.</p></Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Anaheim Businesses Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Tourism Industry Experience</h3><p className="text-gray-600">Specialized cleaning for hotels, restaurants, and entertainment venues near Disneyland and Convention Center.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Flexible Scheduling</h3><p className="text-gray-600">We work around your business hours, including nights, weekends, and holidays.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Licensed & Insured</h3><p className="text-gray-600">Fully licensed, bonded, and insured. Your Anaheim property is protected.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly Options</h3><p className="text-gray-600">Green cleaning products available. Safe for employees, guests, and the environment.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Anaheim Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Disneyland Resort area</div>
              <div className="p-4 bg-gray-50 rounded">Anaheim Convention Center</div>
              <div className="p-4 bg-gray-50 rounded">Anaheim GardenWalk</div>
              <div className="p-4 bg-gray-50 rounded">Platinum Triangle</div>
              <div className="p-4 bg-gray-50 rounded">Anaheim Hills</div>
              <div className="p-4 bg-gray-50 rounded">Downtown Anaheim</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Anaheim Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you clean hotels near Disneyland?</summary><p className="mt-4 text-gray-600">Yes! We specialize in cleaning hotels, motels, and hospitality venues in the Disneyland area with flexible scheduling to accommodate high occupancy periods.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Can you service businesses near the Convention Center?</summary><p className="mt-4 text-gray-600">Absolutely. We service all businesses near Anaheim Convention Center including restaurants, retail, and corporate offices with event-aware scheduling.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What's your pricing for Anaheim businesses?</summary><p className="mt-4 text-gray-600">Pricing varies based on facility size and cleaning frequency. Most Anaheim businesses pay $150-$500 per cleaning. Contact us for a free estimate.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Anaheim Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Anaheim business.</p>
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
