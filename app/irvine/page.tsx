import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Irvine CA | Office & Janitorial | Suarez Cleaning',
  description: 'Professional commercial cleaning services in Irvine, CA. Office cleaning, janitorial, floor care & more. Serving Irvine businesses since 2015. Licensed & insured. Call (949) 357-9256!',
  keywords: ['commercial cleaning Irvine CA', 'office cleaning Irvine', 'janitorial services Irvine California', 'Irvine commercial cleaners', 'cleaning services Irvine business'],
  openGraph: {
    title: 'Commercial Cleaning Services Irvine CA | Suarez Cleaning',
    description: 'Top-rated commercial cleaning for Irvine businesses. Office cleaning, janitorial services, floor care & more. Licensed, insured & eco-friendly.',
    url: 'https://www.suarezproclean.com/irvine',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/irvine',
  },
}

export default function IrvinePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Suarez Cleaning Services',
    image: 'https://www.suarezproclean.com/images/SuarezCS-logo.png',
    url: 'https://www.suarezproclean.com/irvine',
    telephone: '+19493579256',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Irvine',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: 'Irvine',
    },
    serviceType: [
      'Commercial Cleaning',
      'Office Cleaning',
      'Janitorial Services',
      'Floor Care',
      'Day Porter Services',
    ],
  }

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-200 font-semibold mb-2">Serving Irvine, CA</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Commercial Cleaning Services in Irvine, CA
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              Professional office cleaning, janitorial services, and commercial cleaning solutions for Irvine businesses. Trusted by 200+ companies across Orange County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-center">
                Get a Free Quote
              </Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg text-center">
                Call (949) 357-9256
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <span>✅ Licensed & Insured</span>
              <span>✅ Eco-Friendly Products</span>
              <span>✅ 200+ Happy Clients</span>
              <span>✅ Same-Day Service Available</span>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Commercial Cleaning Services in Irvine
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl">
              We offer comprehensive cleaning solutions tailored to Irvine businesses. From office buildings to medical facilities, we deliver consistent, high-quality results.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/office-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Office Cleaning</h3>
                <p className="text-gray-600">Daily, weekly, or monthly office cleaning for Irvine businesses. Desks, restrooms, break rooms & more.</p>
              </Link>
              <Link href="/nightly-janitorial" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Nightly Janitorial</h3>
                <p className="text-gray-600">Overnight janitorial services for Irvine offices. Trash removal, floor care, restroom sanitization.</p>
              </Link>
              <Link href="/floor-care" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Floor Care</h3>
                <p className="text-gray-600">Stripping, waxing, buffing, carpet cleaning for all commercial flooring in Irvine facilities.</p>
              </Link>
              <Link href="/day-porter-services" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Day Porter Services</h3>
                <p className="text-gray-600">On-site cleaning attendants during business hours for Irvine offices and retail spaces.</p>
              </Link>
              <Link href="/post-construction-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Post-Construction</h3>
                <p className="text-gray-600">Thorough cleanup after construction or renovation projects in Irvine commercial spaces.</p>
              </Link>
              <Link href="/move-in-cleaning" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Move In/Out Cleaning</h3>
                <p className="text-gray-600">Deep cleaning for tenant transitions in Irvine office buildings and commercial properties.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Irvine Businesses Choose Suarez Cleaning
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">We've been serving Irvine businesses for over 10 years. We understand the unique needs of local offices, retail spaces, and medical facilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Reliable & Consistent</h3>
                <p className="text-gray-600">Same trained team every time. No surprises, no missed cleanings. We show up on time, every time.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Eco-Friendly Options</h3>
                <p className="text-gray-600">Green cleaning products available. Safe for employees, customers, and the environment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Licensed & Insured</h3>
                <p className="text-gray-600">Fully licensed, bonded, and insured. Your Irvine property is protected with our comprehensive coverage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas in Irvine */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Areas We Serve in Irvine
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We clean commercial properties throughout Irvine, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">Irvine Business Complex</div>
              <div className="p-4 bg-gray-50 rounded">Irvine Spectrum</div>
              <div className="p-4 bg-gray-50 rounded">John Wayne Airport Area</div>
              <div className="p-4 bg-gray-50 rounded">University of Irvine Area</div>
              <div className="p-4 bg-gray-50 rounded">Woodbury</div>
              <div className="p-4 bg-gray-50 rounded">Tustin Ranch</div>
              <div className="p-4 bg-gray-50 rounded">Northwood</div>
              <div className="p-4 bg-gray-50 rounded">Quartier</div>
              <div className="p-4 bg-gray-50 rounded">Legacy Park</div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions About Commercial Cleaning in Irvine
            </h2>
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-blue-900 cursor-pointer">
                  What commercial cleaning services do you offer in Irvine?
                </summary>
                <p className="mt-4 text-gray-600">
                  We provide office cleaning, nightly janitorial services, floor care, day porter services, post-construction cleaning, move-in/out cleaning, and customized cleaning plans for all Irvine businesses.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-blue-900 cursor-pointer">
                  How much does commercial cleaning cost in Irvine?
                </summary>
                <p className="mt-4 text-gray-600">
                  Pricing depends on facility size, cleaning frequency, and specific needs. Most Irvine businesses pay between $150-$500 per cleaning. Contact us for a free, no-obligation quote tailored to your needs.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-blue-900 cursor-pointer">
                  Are your cleaning products safe for employees and customers?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes! We use eco-friendly, EPA-approved cleaning products that are safe for people, pets, and the environment. Green cleaning options are available upon request.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-blue-900 cursor-pointer">
                  Do you provide cleaning supplies and equipment?
                </summary>
                <p className="mt-4 text-gray-600">
                  Yes, we bring all necessary cleaning supplies, equipment, and products. You don't need to provide anything. Our team is fully equipped to handle any commercial cleaning job.
                </p>
              </details>
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="font-bold text-lg text-blue-900 cursor-pointer">
                  How quickly can you start cleaning our Irvine office?
                </summary>
                <p className="mt-4 text-gray-600">
                  We can typically begin services within 1-3 business days of signing an agreement. For urgent needs, same-day or next-day service may be available.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Experience Cleaner Spaces in Irvine?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 200+ Irvine businesses that trust Suarez Cleaning. Get your free quote today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg">
                Get a Free Quote
              </Link>
              <a href="tel:9493579256" className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg">
                Call (949) 357-9256
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
