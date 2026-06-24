import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services Orange County CA | Suarez Cleaning',
  description: 'Top-rated commercial cleaning services in Orange County, CA. Office cleaning, janitorial, floor care & more. Licensed, insured & eco-friendly. Call (949) 357-9256 for FREE quote!',
  keywords: ['commercial cleaning Orange County', 'commercial cleaning services OC', 'best commercial cleaners Orange County CA', 'professional commercial cleaning'],
  openGraph: {
    title: 'Commercial Cleaning Services Orange County | Suarez Cleaning',
    description: 'Comprehensive commercial cleaning for Orange County businesses. Customized plans, licensed staff, eco-friendly options.',
    url: 'https://www.suarezproclean.com/commercial-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/commercial-cleaning',
  },
}

const services = [
  { name: 'Office Cleaning', slug: '/office-cleaning' },
  { name: 'Nightly Janitorial', slug: '/nightly-janitorial' },
  { name: 'Floor Care', slug: '/floor-care' },
  { name: 'Day Porter Services', slug: '/day-porter-services' },
  { name: 'Post-Construction', slug: '/post-construction-cleaning' },
  { name: 'Move-In/Out Cleaning', slug: '/move-in-cleaning' },
]

const cities = [{ name: 'Irvine', slug: '/irvine' }, { name: 'Newport Beach', slug: '/newport-beach' }, { name: 'Costa Mesa', slug: '/costa-mesa' }, { name: 'Santa Ana', slug: '/santa-ana' }, { name: 'Anaheim', slug: '/anaheim' }]

export default function CommercialCleaning() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Commercial Cleaning Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Suarez Cleaning Services is Orange County's trusted provider of comprehensive commercial cleaning solutions. From daily office cleaning to specialized floor care, we deliver consistent, high-quality results for businesses of all sizes across Orange County, California.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Commercial Cleaning Services</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              We offer a complete range of commercial cleaning services tailored to meet the unique needs of Orange County businesses. Every service is customizable to your specific requirements.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Choose Suarez Cleaning Services?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Licensed & Insured', desc: 'Fully licensed, bonded, and insured with comprehensive liability coverage. COIs available upon request.' },
                { title: 'Background-Checked Staff', desc: 'Every team member undergoes thorough background checks before hiring for your security and peace of mind.' },
                { title: 'Eco-Friendly Options', desc: 'Green cleaning solutions using EPA-approved products that are effective yet environmentally responsible.' },
                { title: 'Customized Cleaning Plans', desc: 'Every business is unique. We create tailored cleaning programs based on your specific needs and budget.' },
                { title: 'Quality Guarantee', desc: '100% satisfaction guarantee. If you\'re not happy, we\'ll re-clean at no additional cost within 24 hours.' },
                { title: '24/7 Availability', desc: 'Flexible scheduling including evenings, nights, weekends, and emergency cleaning when you need it.' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Service Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all">
                  <h3 className="font-semibold text-gray-900 group-hover:text-white">{city.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Professional Commercial Cleaning?</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">Join 250+ Orange County businesses that trust Suarez Cleaning Services.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 font-bold text-lg shadow-xl">Request Quote</Link>
              <a href="tel:+19493579256" className="border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 font-bold text-lg">Call (949) 357-9256</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
