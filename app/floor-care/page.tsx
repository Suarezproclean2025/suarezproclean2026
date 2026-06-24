import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Floor Care Services Orange County CA | Stripping, Waxing & Buffing | Suarez Cleaning',
  description: 'Professional floor care services in Orange County - VCT stripping & waxing, carpet extraction, floor buffing & polishing. All commercial floor types. Call (949) 357-9256!',
  keywords: ['floor care Orange County', 'VCT stripping waxing OC', 'commercial floor buffing Orange County CA', 'carpet extraction services OC'],
  openGraph: {
    title: 'Floor Care Services Orange County | Stripping, Waxing & Buffing',
    description: 'Expert commercial floor care for Orange County businesses. Stripping, waxing, buffing, carpet cleaning & more.',
    url: 'https://www.suarezproclean.com/floor-care',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/floor-care',
  },
}

const cities = [
  { name: 'Irvine', slug: '/irvine' },
  { name: 'Newport Beach', slug: '/newport-beach' },
  { name: 'Costa Mesa', slug: '/costa-mesa' },
  { name: 'Santa Ana', slug: '/santa-ana' },
  { name: 'Anaheim', slug: '/anaheim' },
]

export default function FloorCare() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Floor Care Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your investment and make a lasting impression with professional floor care from Suarez Cleaning Services. We specialize in VCT stripping and waxing, carpet extraction, floor buffing, and polishing for commercial facilities throughout Orange County.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-lg">
                  Get a Free Floor Care Quote
                </Link>
                <a href="tel:+19493579256" className="border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-medium text-lg">
                  Call (949) 357-9256
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Comprehensive Floor Care Services
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              From routine maintenance to deep restoration, we provide complete floor care solutions for all commercial floor types including VCT, vinyl, tile, hardwood, concrete, and carpet.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'VCT Stripping & Waxing', desc: 'Complete removal of old wax and finish, thorough cleaning, and application of multiple coats of high-quality commercial floor finish. Restores VCT floors to like-new condition with long-lasting protection.' },
                { title: 'Floor Buffing & Polishing', desc: 'High-speed buffing to restore shine, remove scuff marks, and maintain floor appearance between stripping cycles. Regular buffing extends finish life and keeps floors looking professional.' },
                { title: 'Commercial Carpet Extraction', desc: 'Deep cleaning using hot water extraction methods that remove embedded dirt, allergens, and stains. Extends carpet life, improves indoor air quality, and restores appearance.' },
                { title: 'Floor Scrubbing & Burnishing', desc: 'Automatic floor scrubbing for large commercial spaces, followed by high-speed burnishing for ultra-high gloss finishes. Ideal for warehouses, retail spaces, and high-traffic facilities.' },
                { title: 'Grout & Tile Cleaning', desc: 'Specialized cleaning and sealing of grout lines, restoring tile floors to their original appearance. Sealing protects against future staining and makes maintenance easier.' },
                { title: 'Concrete Floor Maintenance', desc: 'Cleaning, sealing, and polishing of concrete floors in warehouses, garages, and industrial facilities. Includes epoxy coating preparation and maintenance.' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Professional Floor Care Matters
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Extended Floor Lifespan', desc: 'Regular professional maintenance can extend floor life by 5-10 years, saving thousands in premature replacement costs.' },
                { title: 'Professional First Impressions', desc: 'Clean, shiny floors immediately communicate professionalism and attention to detail to clients and visitors.' },
                { title: 'Safety & Liability Reduction', desc: 'Properly maintained floors reduce slip-and-fall risks. We apply anti-slip finishes and maintain proper traction standards.' },
                { title: 'Improved Indoor Air Quality', desc: 'Deep carpet extraction removes allergens, dust mites, and pollutants trapped in fibers, creating healthier indoor environments.' },
                { title: 'Cost-Effective Maintenance', desc: 'Regular floor care is far more economical than premature floor replacement. Protect your investment with scheduled maintenance.' },
                { title: 'Compliance & Standards', desc: 'Many industries require specific floor maintenance standards. We ensure your floors meet all health, safety, and industry regulations.' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Floor Care Service Areas in Orange County
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all duration-300 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-white">{city.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-cyan-50 mt-1">Floor Care →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Floor Care FAQs
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                { q: 'How often should VCT floors be stripped and waxed?', a: 'High-traffic commercial VCT floors typically need stripping and waxing 2-4 times per year. Moderate-traffic areas may only need it 1-2 times annually. Regular buffing between stripping cycles extends finish life. We\'ll recommend a schedule based on your traffic patterns.' },
                { q: 'How long does floor wax need to dry before we can walk on it?', a: 'Floor wax typically needs 4-8 hours to dry completely, depending on humidity and number of coats applied. We schedule floor care services after hours or on weekends to minimize disruption. Most facilities are ready for normal traffic the next business day.' },
                { q: 'What\'s the difference between buffing and burnishing?', a: 'Buffing uses lower speed (175-300 RPM) to clean and restore shine between stripping cycles. Burnishing uses high speed (1000-2000+ RPM) to create ultra-high gloss finishes and is more aggressive. Both maintain floor appearance but serve different purposes.' },
                { q: 'Can you clean carpets without disrupting our business?', a: 'Absolutely. We perform carpet extraction after hours or on weekends. Most carpets dry within 4-6 hours using our professional equipment. We can also use air movers to accelerate drying time for urgent situations.' },
                { q: 'Do you offer floor care maintenance programs?', a: 'Yes! We offer scheduled floor care maintenance programs tailored to your facility\'s needs and budget. Regular maintenance is more cost-effective than waiting for floors to deteriorate. We\'ll create a custom program with optimal frequencies.' },
              ].map((faq, index) => (
                <details key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden group">
                  <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-cyan-600 transition-colors list-none flex items-center justify-between">
                    <span>{faq.q}</span>
                    <svg className="w-6 h-6 text-cyan-500 flex-shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Restore Your Floors to Like-New Condition</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">
              Professional floor care that protects your investment and impresses your clients. Free quotes for Orange County businesses.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-bold text-lg shadow-xl">
                Get Floor Care Quote
              </Link>
              <a href="tel:+19493579256" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-bold text-lg">
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
