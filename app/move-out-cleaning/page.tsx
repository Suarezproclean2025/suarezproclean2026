import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Move Out Cleaning Services Orange County CA | Suarez Cleaning',
  description: 'Professional move out cleaning in Orange County, CA. Deep cleaning for tenant turnover & lease compliance. Property managers trust us. Call (949) 357-9256!',
  keywords: ['move out cleaning Orange County', 'move-out cleaning services OC', 'tenant turnover cleaning Orange County CA', 'commercial move out cleaners'],
  openGraph: {
    title: 'Move Out Cleaning Services Orange County | Suarez Cleaning',
    description: 'Thorough move-out cleaning for Orange County commercial properties. Meet lease requirements and leave spaces spotless.',
    url: 'https://www.suarezproclean.com/move-out-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/move-out-cleaning',
  },
}

const cities = [{ name: 'Irvine', slug: '/irvine' }, { name: 'Newport Beach', slug: '/newport-beach' }, { name: 'Costa Mesa', slug: '/costa-mesa' }, { name: 'Santa Ana', slug: '/santa-ana' }, { name: 'Anaheim', slug: '/anaheim' }]

export default function MoveOutCleaning() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Move Out Cleaning Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leave your old Orange County commercial space spotless and meet all lease requirements with Suarez Cleaning Services' professional move-out cleaning. We help tenants and property managers ensure smooth transitions with thorough deep cleaning that protects security deposits and prepares spaces for new occupants.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Comprehensive Move Out Cleaning Checklist</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Our detailed move-out cleaning ensures you leave the space in excellent condition, meeting lease requirements and making a smooth handover to the next tenant.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Complete Space Deep Clean', desc: 'Thorough cleaning of every room, office, conference room, and common area. Dusting, wiping, and sanitizing all surfaces from floor to ceiling, including walls, baseboards, and light fixtures.' },
                { title: 'Floor Cleaning & Restoration', desc: 'Deep vacuuming of carpets, sweeping and mopping hard floors, spot treatment for stains. We restore floors to the best possible condition to avoid cleaning-related lease penalties.' },
                { title: 'Restroom Deep Cleaning', desc: 'Complete sanitization of all restrooms. Cleaning toilets, urinals, sinks, mirrors, counters, fixtures, and tiles. Removing soap scum, hard water stains, and ensuring restrooms are spotless.' },
                { title: 'Kitchen & Break Room Cleaning', desc: 'Deep cleaning all kitchen areas including appliances (interior/exterior), cabinets, counters, sinks, and backsplashes. Removing all food residue, grease, and odors.' },
                { title: 'Window & Glass Cleaning', desc: 'Interior window cleaning, glass door cleaning, mirror polishing, and removal of any stickers, tape residue, or marks left during occupancy. Ensuring all glass surfaces are crystal clear.' },
                { title: 'Trash Removal & Final Walkthrough', desc: 'Complete removal of all remaining trash, debris, and personal items. Final quality inspection and walkthrough to ensure the space meets lease cleaning requirements before key handover.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Benefits of Professional Move Out Cleaning</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Protect Your Security Deposit', desc: 'Professional cleaning ensures you meet lease cleaning requirements, maximizing your chances of full security deposit return and avoiding cleaning-related deductions.' },
                { title: 'Meet Lease Obligations', desc: 'Most commercial leases require professional cleaning before move-out. We ensure you fulfill all contractual obligations and avoid penalties or disputes with landlords.' },
                { title: 'Smooth Property Transition', desc: 'For property managers, professional move-out cleaning prepares the space quickly for new tenants, minimizing vacancy time and ensuring consistent property standards.' },
                { title: 'Save Time During Move', desc: 'Moving is stressful and time-consuming. Let professionals handle the cleaning while you focus on relocating your business, equipment, and operations.' },
                { title: 'Professional Documentation', desc: 'We provide cleaning documentation and photos showing the space\'s condition at handover. This protects both tenants and property managers in case of disputes.' },
                { title: 'Maintain Professional Reputation', desc: 'Leaving your old space in excellent condition reflects positively on your business. It demonstrates professionalism and respect for the property and future occupants.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Service Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all">
                  <h3 className="font-semibold text-gray-900">{city.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">Move Out Cleaning →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
            {[
              { q: 'Is move out cleaning required by my lease?', a: 'Most commercial leases include cleaning requirements before move-out. Check your lease agreement for specific cleaning obligations. Many require professional cleaning to restore the space to its original condition. We work directly with lease requirements to ensure full compliance.' },
              { q: 'How much does move out cleaning cost?', a: 'Pricing depends on space size, condition, and lease cleaning requirements. Typical costs range from $0.10-$0.25 per square foot. We provide free, detailed quotes after assessing your space and reviewing lease requirements. Call (949) 357-9256 for pricing.' },
              { q: 'When should I schedule move out cleaning?', a: 'Schedule move-out cleaning after all your furniture, equipment, and personal items have been removed from the space. This allows us to clean every surface thoroughly. Ideally, schedule 1-2 days before your lease end date or key handover.' },
              { q: 'Can you work with property managers and landlords?', a: 'Absolutely! We regularly work with property managers, landlords, and real estate agents to ensure smooth transitions. We can coordinate scheduling, provide cleaning documentation, and work directly with all parties to meet everyone\'s requirements.' },
              { q: 'What if the space needs repairs in addition to cleaning?', a: 'While we specialize in cleaning, we can identify and document any damage or repairs needed during our cleaning process. We provide photo documentation and detailed reports that help distinguish normal wear and tear from actual damage.' },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Leave Your Space Spotless & Protect Your Deposit</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">Professional move-out cleaning that meets lease requirements and ensures smooth transitions.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-bold text-lg shadow-xl">Get Move Out Quote</Link>
              <a href="tel:+19493579256" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-bold text-lg">Call (949) 357-9256</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
