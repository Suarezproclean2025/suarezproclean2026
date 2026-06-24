import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Janitorial Services Orange County CA | Professional Janitorial | Suarez Cleaning',
  description: 'Professional janitorial services in Orange County, CA. Nightly cleaning, office maintenance & custom plans. Licensed, insured & reliable. Call (949) 357-9256!',
  keywords: ['janitorial services Orange County', 'professional janitorial OC', 'commercial janitorial Orange County CA', 'janitorial cleaning services'],
  openGraph: {
    title: 'Janitorial Services Orange County | Professional Janitorial | Suarez Cleaning',
    description: 'Comprehensive janitorial services for Orange County businesses. Customized cleaning plans, reliable staff, quality guaranteed.',
    url: 'https://www.suarezproclean.com/janitorial-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/janitorial-services',
  },
}

const services = [
  { name: 'Office Cleaning', slug: '/office-cleaning' },
  { name: 'Nightly Janitorial', slug: '/nightly-janitorial' },
  { name: 'Day Porter Services', slug: '/day-porter-services' },
  { name: 'Floor Care', slug: '/floor-care' },
  { name: 'Post-Construction', slug: '/post-construction-cleaning' },
  { name: 'Move-In/Out Cleaning', slug: '/move-in-cleaning' },
]

const cities = [{ name: 'Irvine', slug: '/irvine' }, { name: 'Newport Beach', slug: '/newport-beach' }, { name: 'Costa Mesa', slug: '/costa-mesa' }, { name: 'Santa Ana', slug: '/santa-ana' }, { name: 'Anaheim', slug: '/anaheim' }]

export default function JanitorialServices() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Janitorial Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Suarez Cleaning Services provides comprehensive janitorial services for businesses throughout Orange County. From daily office maintenance to specialized cleaning programs, our professional janitorial teams deliver consistent, high-quality results that keep your facility spotless, healthy, and professional.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-lg">Get Free Quote</Link>
                <a href="tel:+19493579256" className="border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-medium text-lg">Call (949) 357-9256</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Janitorial Service Offerings</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              We offer a complete range of janitorial services that can be customized to meet your facility's specific needs, schedule, and budget.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Link key={index} href={service.slug} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-cyan-300 transition-all">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-cyan-600">{service.name}</h3>
                  <p className="text-cyan-500 font-medium">Learn More →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Janitorial Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Customized Cleaning Plans', desc: 'Every facility is unique. We create tailored janitorial programs based on your specific needs, traffic patterns, industry requirements, and budget.' },
                { title: 'Trained Professional Staff', desc: 'Our janitorial teams are thoroughly trained, background-checked, and supervised. They understand commercial cleaning standards and deliver consistent quality.' },
                { title: 'Reliable & Consistent', desc: '98% on-time service rate. You can count on our janitorial teams to show up as scheduled, every time, and deliver the same high-quality cleaning consistently.' },
                { title: 'Eco-Friendly Options', desc: 'We offer green janitorial services using EPA-approved, environmentally safe products that are effective yet gentle on the environment and indoor air quality.' },
                { title: 'Quality Guarantee', desc: '100% satisfaction guarantee on all janitorial services. If you\'re not completely satisfied, we\'ll re-clean at no additional cost within 24 hours.' },
                { title: 'Licensed & Fully Insured', desc: 'We\'re fully licensed, bonded, and insured with comprehensive liability coverage. Certificates of Insurance (COI) available upon request for your building management.' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {['Corporate Offices', 'Medical & Dental Offices', 'Retail Stores', 'Schools & Educational', 'Restaurants', 'Warehouses', 'Fitness Centers', 'Churches & Religious', 'Professional Services'].map((industry, index) => (
                <div key={index} className="flex items-center gap-3 bg-cyan-50 rounded-lg px-6 py-4">
                  <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-900 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Janitorial Service Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all">
                  <h3 className="font-semibold text-gray-900">{city.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Janitorial →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Professional Janitorial Services?</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">Join 250+ Orange County businesses that trust Suarez Cleaning Services for reliable, quality janitorial services.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 font-bold text-lg shadow-xl">Get Janitorial Quote</Link>
              <a href="tel:+19493579256" className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 font-bold text-lg">Call (949) 357-9256</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
