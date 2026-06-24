import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Nightly Janitorial Services Orange County CA | Suarez Cleaning',
  description: 'Reliable nightly janitorial services in Orange County, CA. After-hours office cleaning, trash removal, floor care & more. Background-checked staff. Call (949) 357-9256 for FREE quote!',
  keywords: ['nightly janitorial services Orange County', 'after hours cleaning OC', 'overnight janitorial Orange County CA', 'commercial janitorial services nightly'],
  openGraph: {
    title: 'Nightly Janitorial Services Orange County | Suarez Cleaning',
    description: 'Professional nightly janitorial services for Orange County businesses. Reliable, thorough, after-hours cleaning.',
    url: 'https://www.suarezproclean.com/nightly-janitorial',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/nightly-janitorial',
  },
}

const cities = [
  { name: 'Irvine', slug: '/irvine' },
  { name: 'Newport Beach', slug: '/newport-beach' },
  { name: 'Costa Mesa', slug: '/costa-mesa' },
  { name: 'Santa Ana', slug: '/santa-ana' },
  { name: 'Anaheim', slug: '/anaheim' },
]

export default function NightlyJanitorial() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Nightly Janitorial Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Wake up to a spotless office every morning. Suarez Cleaning Services provides reliable, thorough nightly janitorial services for businesses across Orange County. Our after-hours cleaning teams work while you rest, ensuring your facility is pristine and ready for the next business day.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-lg">
                  Get a Free Quote
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
              What's Included in Our Nightly Janitorial Service?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Our comprehensive nightly janitorial checklist ensures every area of your facility receives thorough cleaning and maintenance, night after night.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Complete Floor Maintenance', desc: 'Vacuuming all carpeted areas, sweeping and mopping hard floors, buffing high-traffic zones, and spot-cleaning stains. We maintain all floor types to perfection.' },
                { title: 'Restroom Deep Cleaning', desc: 'Thorough sanitization of toilets, urinals, sinks, mirrors, and counters. Restocking paper products, soap, and sanitary supplies. Odor elimination and disinfection.' },
                { title: 'Trash & Recycling Collection', desc: 'Emptying all waste bins throughout the facility, replacing liners, sorting recyclables, and proper disposal. Kitchen break room cleanup included.' },
                { title: 'Surface Dusting & Wiping', desc: 'Dusting all horizontal surfaces including desks, shelves, window sills, and furniture. Wiping down workstations, phones, keyboards, and office equipment.' },
                { title: 'Kitchen & Break Room Sanitization', desc: 'Cleaning countertops, sinks, appliances (exterior), microwaves, and refrigerators. Wiping tables, chairs, and common dining areas. Floor mopping.' },
                { title: 'High-Touch Point Disinfection', desc: 'Sanitizing doorknobs, light switches, elevator buttons, stair railings, copiers, and all frequently touched surfaces to prevent germ spread.' },
                { title: 'Glass & Window Cleaning', desc: 'Interior glass cleaning including windows, glass doors, partitions, and conference room walls. Maintaining a bright, professional appearance.' },
                { title: 'Security & Alarm Management', desc: 'We coordinate with your security protocols, including alarm lock-up/unlock procedures, key management, and photo documentation of completed work.' },
                { title: 'Supply Restocking', desc: 'Monitoring and restocking restroom supplies, paper towels, toilet paper, hand soap, and break room essentials. We notify you when bulk supplies need ordering.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Nightly Janitorial Services?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Zero Business Disruption', desc: 'Our after-hours cleaning means we never interfere with your daily operations, employee productivity, or client meetings. Your office is cleaned when it\'s empty.' },
                { title: 'Consistent Cleanliness Standards', desc: 'Nightly cleaning ensures your facility maintains professional standards every single day. No more weekend buildup or Monday morning messes.' },
                { title: 'Enhanced Employee Satisfaction', desc: 'Employees appreciate arriving to a clean, fresh workspace every morning. It boosts morale, productivity, and shows you value their work environment.' },
                { title: 'Improved Indoor Air Quality', desc: 'Regular nightly vacuuming and dusting removes allergens, dust, and pollutants that accumulate during the day, creating healthier breathing conditions.' },
                { title: 'Extended Facility Lifespan', desc: 'Daily maintenance of floors, carpets, furniture, and fixtures prevents wear buildup and extends the life of your investments, saving money long-term.' },
                { title: 'Professional Image Maintenance', desc: 'A consistently clean office impresses clients, prospects, and visitors who visit during business hours, reinforcing your professional brand.' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Nightly Janitorial Process
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { step: '1', title: 'Evening Arrival', desc: 'Our team arrives after your business closes, typically between 6-9 PM depending on your schedule.' },
                { step: '2', title: 'Systematic Cleaning', desc: 'We follow a detailed checklist covering all areas: floors, restrooms, kitchens, workspaces, and common areas.' },
                { step: '3', title: 'Quality Documentation', desc: 'Photo proof of completed work is documented and sent to you, ensuring transparency and accountability.' },
                { step: '4', title: 'Security Lock-Up', desc: 'We secure your facility, set alarms if required, and ensure everything is ready for the next business day.' },
              ].map((item, index) => (
                <div key={index} className="relative bg-cyan-50 rounded-xl p-6 border-2 border-cyan-200">
                  <div className="absolute -top-4 -left-4 bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Nightly Janitorial Service Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all duration-300 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-white">{city.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-cyan-50 mt-1">Janitorial Services →</p>
                </Link>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">Serving all Orange County cities including Garden Grove, Orange, Mission Viejo, Huntington Beach, Fullerton, and more.</p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                { q: 'What time do nightly janitorial services typically start?', a: 'Most nightly janitorial services begin between 6:00 PM and 9:00 PM, after your business closes. We work around your schedule to ensure zero disruption. Some facilities prefer midnight or early morning cleaning (4-6 AM). We\'ll accommodate your preferred timeframe.' },
                { q: 'How much does nightly janitorial service cost in Orange County?', a: 'Pricing depends on facility size, cleaning frequency, and specific requirements. Typical nightly janitorial services range from $0.05-$0.15 per square foot. We provide free, customized quotes based on your exact needs. Contact us at (949) 357-9256 for pricing.' },
                { q: 'Do you provide your own cleaning supplies and equipment?', a: 'Yes! We bring all professional-grade cleaning supplies, equipment, and products needed for thorough nightly cleaning. If you prefer us to use your supplies or specific eco-friendly products, we\'re happy to accommodate that preference.' },
                { q: 'What if we need cleaning on weekends or holidays?', a: 'We offer flexible scheduling including weekends and holidays. Many offices require lighter cleaning on weekends or special deep-cleaning sessions. We\'ll create a custom schedule that matches your facility\'s needs, including holiday coverage.' },
                { q: 'How do you ensure quality and accountability?', a: 'Every nightly cleaning session includes photo documentation of completed work. Supervisors conduct random inspections, and we maintain detailed checklists. If any issue arises, we respond within 24 hours to address it immediately.' },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for Reliable Nightly Cleaning?</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">
              Join Orange County businesses that trust Suarez Cleaning Services for consistent, thorough nightly janitorial services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-bold text-lg shadow-xl">
                Get Free Quote
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
