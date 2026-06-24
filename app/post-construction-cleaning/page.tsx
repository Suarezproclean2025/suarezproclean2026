import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Post Construction Cleaning Orange County CA | Suarez Cleaning',
  description: 'Professional post construction cleaning in Orange County, CA. Dust removal, debris cleanup, final cleaning for new builds & renovations. Licensed & insured. Call (949) 357-9256!',
  keywords: ['post construction cleaning Orange County', 'construction cleanup OC', 'final cleaning after construction Orange County CA', 'new construction cleaning services'],
  openGraph: {
    title: 'Post Construction Cleaning Orange County | Suarez Cleaning',
    description: 'Expert post-construction cleaning for Orange County. Thorough cleanup after construction, renovation, or remodeling projects.',
    url: 'https://www.suarezproclean.com/post-construction-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/post-construction-cleaning',
  },
}

const cities = [{ name: 'Irvine', slug: '/irvine' }, { name: 'Newport Beach', slug: '/newport-beach' }, { name: 'Costa Mesa', slug: '/costa-mesa' }, { name: 'Santa Ana', slug: '/santa-ana' }, { name: 'Anaheim', slug: '/anaheim' }]

export default function PostConstructionCleaning() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Post Construction Cleaning Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your construction site into a move-in ready space with Suarez Cleaning Services' comprehensive post-construction cleaning. We remove dust, debris, and construction residue from Orange County commercial properties, leaving your facility spotless and ready for occupancy.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Post-Construction Cleaning Process</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              We follow a systematic three-phase approach to ensure every surface, corner, and detail is thoroughly cleaned after construction or renovation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { phase: 'Phase 1', title: 'Rough Clean', desc: 'Initial cleanup removing large debris, trash, and construction materials. Sweeping floors, removing stickers from windows, and clearing work areas. This phase happens immediately after construction completion.' },
                { phase: 'Phase 2', title: 'Light Clean', desc: 'Detailed dusting of all surfaces including walls, ceilings, vents, and fixtures. Cleaning windows, wiping doors and frames, vacuuming carpets, and mopping hard floors. Removing construction dust from every surface.' },
                { phase: 'Phase 3', title: 'Final Clean', desc: 'Touch-up cleaning ensuring move-in ready condition. Polishing glass and mirrors, sanitizing restrooms and kitchens, detailed floor care, and final inspection. Your space is 100% ready for occupancy.' },
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-8 border-2 border-cyan-200">
                  <div className="text-cyan-500 font-bold text-lg mb-2">{item.phase}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">What's Included in Post-Construction Cleaning?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Complete Dust Removal', desc: 'Construction dust settles everywhere. We dust and wipe all surfaces including walls, ceilings, vents, light fixtures, shelves, and every horizontal and vertical surface.' },
                { title: 'Window & Glass Cleaning', desc: 'Removing stickers, labels, paint spots, and construction residue from windows, glass doors, mirrors, and glass partitions. Interior and exterior cleaning for crystal clarity.' },
                { title: 'Floor Cleaning & Restoration', desc: 'Sweeping, vacuuming, mopping all floor types. Removing adhesives, paint spots, and construction debris. Floor buffing and polishing to restore original finish.' },
                { title: 'Restroom Sanitization', desc: 'Deep cleaning and sanitizing all restrooms. Cleaning toilets, sinks, mirrors, counters, fixtures. Removing construction dust and ensuring restrooms are move-in ready.' },
                { title: 'Kitchen & Break Room Cleanup', desc: 'Thorough cleaning of kitchens and break rooms. Cabinets, counters, appliances, sinks, and all surfaces. Ensuring food preparation areas are sanitary and ready for use.' },
                { title: 'Debris & Trash Removal', desc: 'Complete removal of all construction debris, leftover materials, packaging, and trash. Proper disposal according to local regulations. Site left clean and hazard-free.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Post-Construction Cleaning Service Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all duration-300 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-white">{city.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-cyan-50 mt-1">Post-Construction →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
            {[
              { q: 'How long does post-construction cleaning take?', a: 'Timeline depends on project size and condition. Small offices (5,000 sq ft) typically take 1-2 days. Larger commercial buildings (50,000+ sq ft) may require 3-5 days. We provide accurate timelines during your consultation and work efficiently to meet your occupancy deadline.' },
              { q: 'When should post-construction cleaning be scheduled?', a: 'Schedule post-construction cleaning after all construction work is complete and before furniture installation or move-in. This allows us to clean every surface without obstacles. We coordinate with your project timeline to ensure seamless transition.' },
              { q: 'Do you clean both interior and exterior after construction?', a: 'Yes! We provide comprehensive interior and exterior post-construction cleaning. This includes windows, storefronts, parking areas, entryways, and building exteriors. We ensure your entire property is presentation-ready.' },
              { q: 'What\'s the difference between post-construction and regular cleaning?', a: 'Post-construction cleaning is far more intensive than regular cleaning. It requires specialized equipment, techniques, and products to remove construction dust, adhesives, paint spots, and debris. Regular cleaning companies aren\'t equipped for post-construction cleanup.' },
              { q: 'How much does post-construction cleaning cost in Orange County?', a: 'Pricing varies based on project size, construction type, and cleaning level required. Typical costs range from $0.10-$0.30 per square foot. We provide detailed, free quotes after assessing your specific project needs. Call (949) 357-9256 for pricing.' },
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg mb-4 group">
                <summary className="px-6 py-5 cursor-pointer font-semibold text-gray-900 hover:text-cyan-600 list-none flex justify-between">
                  <span>{faq.q}</span>
                  <svg className="w-6 h-6 text-cyan-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Move In? Let Us Handle the Cleanup</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">Professional post-construction cleaning that transforms your construction site into a move-in ready space.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-bold text-lg shadow-xl">Get Free Quote</Link>
              <a href="tel:+19493579256" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-bold text-lg">Call (949) 357-9256</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
