import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Move In Cleaning Services Orange County CA | Suarez Cleaning',
  description: 'Professional move in cleaning in Orange County, CA. Deep cleaning for new tenants & property managers. Thorough, reliable & insured. Call (949) 357-9256 for FREE quote!',
  keywords: ['move in cleaning Orange County', 'move-in cleaning services OC', 'tenant turnover cleaning Orange County CA', 'commercial move in cleaners'],
  openGraph: {
    title: 'Move In Cleaning Services Orange County | Suarez Cleaning',
    description: 'Thorough move-in cleaning for Orange County commercial properties. Deep cleaning for new tenants and property transitions.',
    url: 'https://www.suarezproclean.com/move-in-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/move-in-cleaning',
  },
}

const cities = [{ name: 'Irvine', slug: '/irvine' }, { name: 'Newport Beach', slug: '/newport-beach' }, { name: 'Costa Mesa', slug: '/costa-mesa' }, { name: 'Santa Ana', slug: '/santa-ana' }, { name: 'Anaheim', slug: '/anaheim' }]

export default function MoveInCleaning() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Move In Cleaning Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Start fresh in your new Orange County commercial space with Suarez Cleaning Services' thorough move-in cleaning. We deep clean every surface, ensuring your new office, retail space, or facility is spotless and ready for business from day one.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">What's Included in Move In Cleaning?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Our comprehensive move-in cleaning covers every inch of your new commercial space, from floors to ceilings, ensuring a pristine start for your business.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Complete Dust & Debris Removal', desc: 'Removing all dust, dirt, and construction residue left by previous occupants. Wiping every surface including walls, ceilings, vents, light fixtures, and hidden corners.' },
                { title: 'Deep Floor Cleaning', desc: 'Thorough vacuuming, sweeping, mopping, and scrubbing of all floor types. Carpet deep cleaning, hard floor restoration, and stain removal to bring floors to like-new condition.' },
                { title: 'Restroom Sanitization', desc: 'Complete deep cleaning and disinfection of all restrooms. Cleaning toilets, sinks, mirrors, counters, fixtures, and tiles. Ensuring restrooms are hygienic and move-in ready.' },
                { title: 'Kitchen & Break Room Deep Clean', desc: 'Thorough cleaning of all kitchen areas including cabinets (inside/out), counters, appliances, sinks, and backsplashes. Sanitizing all food preparation surfaces.' },
                { title: 'Window & Glass Cleaning', desc: 'Interior and exterior window cleaning, glass door cleaning, mirror polishing, and glass partition cleaning. Removing stickers, residue, and fingerprints for crystal clarity.' },
                { title: 'Closet & Storage Area Cleaning', desc: 'Cleaning all closets, storage rooms, and cabinet interiors. Removing遗留 items, dusting shelves, and ensuring storage spaces are clean and ready for your use.' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Why Professional Move In Cleaning Matters</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Fresh Start for Your Business', desc: 'Starting in a professionally cleaned space sets the tone for your business. Employees and clients immediately notice the cleanliness and professionalism.' },
                { title: 'Health & Safety First', desc: 'Previous occupants leave behind germs, allergens, and contaminants. Deep cleaning eliminates health hazards and creates a safe environment for your team.' },
                { title: 'Save Time & Stress', desc: 'Moving is stressful enough. Let us handle the cleaning while you focus on setting up your business, unpacking, and getting operations running smoothly.' },
                { title: 'Professional Image from Day One', desc: 'First impressions matter. A spotless new space impresses clients, boosts employee morale, and demonstrates your commitment to quality from the start.' },
                { title: 'Meet Lease Requirements', desc: 'Many commercial leases require professional cleaning before move-in or after move-out. We ensure you meet all lease obligations and avoid penalties.' },
                { title: 'Identify Maintenance Issues', desc: 'Our thorough cleaning process helps identify any maintenance issues, repairs needed, or damage that should be documented before you take occupancy.' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Move In Cleaning Service Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all">
                  <h3 className="font-semibold text-gray-900">{city.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Move In Cleaning →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
            {[
              { q: 'How long does move in cleaning take?', a: 'Timeline depends on space size and condition. Small offices (2,000-5,000 sq ft) typically take 4-6 hours. Larger commercial spaces (10,000+ sq ft) may require 1-2 full days. We provide accurate timelines during consultation and work efficiently to meet your move-in date.' },
              { q: 'When should I schedule move in cleaning?', a: 'Schedule move-in cleaning after all previous occupants have moved out and before you move your furniture and equipment in. This allows us to clean every surface without obstacles. Ideally, schedule 1-3 days before your planned move-in date.' },
              { q: 'Do you clean after renovations or construction?', a: 'Yes! We specialize in both move-in cleaning and post-construction cleaning. If your space has been renovated, we recommend our post-construction cleaning service which is more intensive and specifically designed to remove construction dust and debris.' },
              { q: 'How much does move in cleaning cost in Orange County?', a: 'Pricing varies based on space size, condition, and cleaning level required. Typical costs range from $0.10-$0.25 per square foot. We provide detailed, free quotes after assessing your specific space. Call (949) 357-9256 for pricing.' },
              { q: 'Do you provide move in cleaning for residential properties?', a: 'We specialize in commercial move-in cleaning for offices, retail spaces, warehouses, and commercial facilities. For residential move-in cleaning, we recommend contacting residential cleaning specialists who focus on homes and apartments.' },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Start Fresh in a Spotless New Space</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">Professional move-in cleaning for Orange County commercial properties. Thorough, reliable, ready for your business.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-bold text-lg shadow-xl">Get Move In Quote</Link>
              <a href="tel:+19493579256" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-bold text-lg">Call (949) 357-9256</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
