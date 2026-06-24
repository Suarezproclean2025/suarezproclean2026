import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Newport Beach CA | Office Cleaning | Suarez Cleaning',
  description: 'Professional commercial cleaning in Newport Beach, CA. Premium office cleaning, janitorial & floor care for upscale businesses. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Newport Beach', 'office cleaning Newport Beach CA', 'janitorial services Newport Beach', 'Newport Beach commercial cleaners'],
  openGraph: {
    title: 'Commercial Cleaning Newport Beach CA | Suarez Cleaning',
    description: 'Premium commercial cleaning services for Newport Beach businesses. Office cleaning, janitorial, floor care & more.',
    url: 'https://www.suarezproclean.com/newport-beach',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/newport-beach',
  },
}

export default function NewportBeachPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/newport-beach',
    telephone: '+19493579256',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Newport Beach',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Newport Beach',
    },
    serviceType: ['Commercial Cleaning', 'Office Cleaning', 'Janitorial Services', 'Floor Care'],
  }

  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Newport Beach, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Cleaning Services in Newport Beach, CA</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">Premium commercial cleaning for Newport Beach offices, medical facilities, and retail spaces. Eco-friendly products, reliable service, competitive pricing.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">Get a Free Quote</Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">Call (949) 357-9256</a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services in Newport Beach</h2>
            <p className="text-lg text-gray-600 mb-12">Comprehensive cleaning solutions for Newport Beach businesses, from corporate offices to high-end retail.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3><p className="text-gray-600">Professional office cleaning for Newport Beach businesses.</p></Link>
              <Link href="/nightly-janitorial" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Nightly Janitorial</h3><p className="text-gray-600">Overnight janitorial services for offices and facilities.</p></Link>
              <Link href="/floor-care" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Floor Care</h3><p className="text-gray-600">Complete floor maintenance and restoration services.</p></Link>
              <Link href="/day-porter-services" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Day Porter</h3><p className="text-gray-600">On-site cleaning attendants during business hours.</p></Link>
              <Link href="/post-construction-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Post-Construction</h3><p className="text-gray-600">Thorough cleanup after construction projects.</p></Link>
              <Link href="/commercial-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition"><h3 className="text-xl font-bold text-blue-900 mb-2">Commercial Cleaning</h3><p className="text-gray-600">Customized cleaning plans for all businesses.</p></Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Newport Beach Businesses Trust Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Premium Quality</h3><p className="text-gray-600">We deliver exceptional results that meet Newport Beach's high standards. Meticulous attention to detail on every job.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly</h3><p className="text-gray-600">Green cleaning products safe for employees, clients, and the coastal environment.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Reliable Team</h3><p className="text-gray-600">Consistent, professional staff. Same trained team every visit for quality assurance.</p></div>
              <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="text-xl font-bold text-blue-900 mb-2">Flexible Scheduling</h3><p className="text-gray-600">Daily, weekly, monthly, or custom schedules. We work around your business hours.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Newport Beach Areas We Serve</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Newport Center</div>
              <div className="p-4 bg-gray-50 rounded">Fashion Island</div>
              <div className="p-4 bg-gray-50 rounded">John Wayne Airport</div>
              <div className="p-4 bg-gray-50 rounded">Balboa Island</div>
              <div className="p-4 bg-gray-50 rounded">Lido Isle</div>
              <div className="p-4 bg-gray-50 rounded">Corona del Mar</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs - Newport Beach Commercial Cleaning</h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Do you service all of Newport Beach?</summary><p className="mt-4 text-gray-600">Yes, we serve all Newport Beach areas including Newport Center, Fashion Island, Balboa Island, Corona del Mar, and surrounding communities.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">What types of businesses do you clean?</summary><p className="mt-4 text-gray-600">We clean offices, medical facilities, retail stores, restaurants, law firms, financial services, and all commercial properties in Newport Beach.</p></details>
              <details className="bg-white p-6 rounded-lg shadow-sm"><summary className="font-bold text-lg text-blue-900 cursor-pointer">Can you provide references from Newport Beach clients?</summary><p className="mt-4 text-gray-600">Absolutely! We have numerous satisfied clients throughout Newport Beach. Contact us for references and case studies.</p></details>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Newport Beach Cleaning Quote</h2>
            <p className="text-xl text-blue-100 mb-8">Professional, reliable, eco-friendly commercial cleaning for your business.</p>
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
