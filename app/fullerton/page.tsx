import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Fullerton CA | Office & Janitorial Services | Suarez Cleaning',
  description: 'Professional commercial cleaning in Fullerton, CA. Office cleaning, janitorial services, floor care for Fullerton businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Fullerton', 'office cleaning Fullerton CA', 'janitorial services Fullerton', 'Fullerton commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Fullerton CA | Suarez Cleaning',
    description: 'Trusted commercial cleaning for Fullerton businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/fullerton',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/fullerton' },
}

export default function FullertonPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/fullerton',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Fullerton', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Fullerton' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Fullerton, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Fullerton, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Professional commercial cleaning for Fullerton offices, CSUF area businesses, downtown retail, and industrial parks. Serving North Orange County with reliable, affordable cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Services in Fullerton</h2>
            <p className="text-lg text-gray-600 mb-12">From Downtown Fullerton to CSUF, we provide comprehensive cleaning for all commercial properties in the area.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Daily office cleaning for Fullerton businesses.</p></Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Fullerton Businesses Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Local Expertise</h3><p className="text-gray-600">We know Fullerton's business community. Over 10 years serving local offices, retail, restaurants, and industrial properties.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Reliable Service</h3><p className="text-gray-600">Consistent, professional cleaning. Same trained team every visit for quality assurance.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Competitive Pricing</h3><p className="text-gray-600">Fair, transparent pricing with no hidden fees. Customized plans to fit your budget.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Quality Guaranteed</h3><p className="text-gray-600">100% satisfaction guarantee. If you're not happy, we'll make it right at no extra cost.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Fullerton Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Downtown Fullerton</div>
              <div className="p-4 bg-gray-50 rounded">CSUF area</div>
              <div className="p-4 bg-gray-50 rounded">Fullerton Business District</div>
              <div className="p-4 bg-gray-50 rounded">Harbor Boulevard</div>
              <div className="p-4 bg-gray-50 rounded">State College area</div>
              <div className="p-4 bg-gray-50 rounded">Sunny Hills area</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Fullerton Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you service businesses near CSUF?</summary><p className="mt-4 text-gray-600">Yes! We service all businesses near Cal State Fullerton including restaurants, retail, offices, and student housing commercial spaces.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What types of businesses do you clean in Fullerton?</summary><p className="mt-4 text-gray-600">We clean offices, retail stores, restaurants, medical facilities, industrial warehouses, and all commercial properties in Fullerton.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">How do I get a quote for my Fullerton business?</summary><p className="mt-4 text-gray-600">Simply call us at (949) 357-9256 or fill out our contact form. We'll provide a free, no-obligation estimate within 24 hours.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Fullerton Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Fullerton business.</p>
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
