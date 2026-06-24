import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Lake Forest CA | Office & Janitorial | Suarez Cleaning',
  description: 'Professional commercial cleaning in Lake Forest, CA. Office cleaning, janitorial services, floor care for Lake Forest businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Lake Forest', 'office cleaning Lake Forest CA', 'janitorial services Lake Forest', 'Lake Forest commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Lake Forest CA | Suarez Cleaning',
    description: 'Trusted commercial cleaning for Lake Forest businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/lake-forest',
    type: 'website',
  },
  alternates: { canonical: 'https://www.suarezproclean.com/lake-forest' },
}

export default function LakeForestPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/lake-forest',
    telephone: '+19493579256',
    priceRange: '$$',
    address: { '@type': 'PostalAddress', addressLocality: 'Lake Forest', addressRegion: 'CA', addressCountry: 'US' },
    areaServed: { '@type': 'City', name: 'Lake Forest' },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Lake Forest, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Lake Forest, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Professional commercial cleaning for Lake Forest offices, retail centers, and medical facilities. Serving South Orange County with reliable, eco-friendly cleaning solutions.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Cleaning Services in Lake Forest</h2>
            <p className="text-lg text-gray-600 mb-12">From Lake Forest Drive to Portola Hills, we provide comprehensive cleaning for all commercial properties in the area.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Daily office cleaning for Lake Forest businesses.</p></Link>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Lake Forest Businesses Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Local Knowledge</h3><p className="text-gray-600">We know Lake Forest's business community. Over 10 years serving local offices, retail, and medical facilities.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Professional Team</h3><p className="text-gray-600">Trained, background-checked cleaners. Consistent team for quality and reliability.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Flexible Scheduling</h3><p className="text-gray-600">Daily, weekly, monthly, or custom schedules. We work around your business hours.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly Options</h3><p className="text-gray-600">Green cleaning products available. Safe for employees, clients, and the environment.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Lake Forest Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Lake Forest Drive</div>
              <div className="p-4 bg-gray-50 rounded">Foothill Ranch</div>
              <div className="p-4 bg-gray-50 rounded">Portola Hills</div>
              <div className="p-4 bg-gray-50 rounded">Serrano Summit</div>
              <div className="p-4 bg-gray-50 rounded">Commerce Center</div>
              <div className="p-4 bg-gray-50 rounded">El Toro area</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Lake Forest Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you service Foothill Ranch and Portola Hills?</summary><p className="mt-4 text-gray-600">Yes! We service all Lake Forest areas including Foothill Ranch, Portola Hills, and surrounding business parks.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What industries do you serve in Lake Forest?</summary><p className="mt-4 text-gray-600">We serve offices, medical facilities, retail stores, restaurants, schools, warehouses, and all commercial properties in Lake Forest.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">How quickly can you start cleaning?</summary><p className="mt-4 text-gray-600">We can typically begin services within 1-3 business days. Same-week service is often available for urgent needs.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Lake Forest Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional commercial cleaning for your Lake Forest business.</p>
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
