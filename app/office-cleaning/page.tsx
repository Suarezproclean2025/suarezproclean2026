import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Office Cleaning Services Orange County CA | Suarez Cleaning',
  description: 'Professional office cleaning services in Orange County, CA. Daily, weekly, or custom schedules. Desks, floors, restrooms, kitchens & more. Licensed & insured. Call (949) 357-9256 for FREE quote!',
  keywords: ['office cleaning Orange County', 'commercial office cleaning OC', 'professional office cleaners Orange County CA', 'daily office cleaning service'],
  openGraph: {
    title: 'Office Cleaning Services Orange County | Suarez Cleaning',
    description: 'Expert office cleaning for Orange County businesses. Customized plans, eco-friendly options, licensed & insured staff.',
    url: 'https://www.suarezproclean.com/office-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/office-cleaning',
  },
}

const cities = [
  { name: 'Irvine', slug: '/irvine' },
  { name: 'Newport Beach', slug: '/newport-beach' },
  { name: 'Costa Mesa', slug: '/costa-mesa' },
  { name: 'Santa Ana', slug: '/santa-ana' },
  { name: 'Anaheim', slug: '/anaheim' },
]

export default function OfficeCleaning() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Office Cleaning Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Keep your Orange County office spotless, healthy, and productive with Suarez Cleaning Services. We provide customized office cleaning solutions for businesses of all sizes across Irvine, Newport Beach, Costa Mesa, and all of Orange County.
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

        {/* What's Included */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              What's Included in Our Office Cleaning Service?
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Our comprehensive office cleaning checklist covers every area of your workspace, ensuring a clean, healthy, and professional environment for your employees and visitors.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Workstation & Desk Cleaning', desc: 'Dusting, wiping, and sanitizing all desks, workstations, cubicles, and office furniture. We clean keyboards, phones, and high-touch surfaces.' },
                { title: 'Floor Care & Vacuuming', desc: 'Complete vacuuming of carpeted areas, sweeping and mopping of hard floors, and spot treatment as needed. Floor maintenance programs available.' },
                { title: 'Restroom Sanitization', desc: 'Thorough cleaning and disinfection of all restrooms including toilets, sinks, mirrors, counters, restocking supplies, and odor control.' },
                { title: 'Kitchen & Break Room Cleaning', desc: 'Cleaning countertops, appliances, microwaves, refrigerators (exterior), sinks, and common dining areas. Trash removal and sanitization.' },
                { title: 'Conference & Meeting Rooms', desc: 'Complete cleaning of conference tables, chairs, presentation equipment, whiteboards, and all surfaces in meeting spaces.' },
                { title: 'Lobby & Reception Areas', desc: 'First impressions matter. We clean and maintain your reception desk, waiting areas, entryways, and lobby furniture to perfection.' },
                { title: 'Trash & Recycling Removal', desc: 'Emptying all trash and recycling bins throughout the office, replacing liners, and proper disposal according to local regulations.' },
                { title: 'High-Touch Surface Disinfection', desc: 'Sanitizing doorknobs, light switches, elevator buttons, handrails, and all frequently touched surfaces to reduce germ spread.' },
                { title: 'Window & Glass Cleaning', desc: 'Interior window cleaning, glass door cleaning, and partition wiping to maintain a bright, professional appearance.' },
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Professional Office Cleaning
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Improved Employee Productivity', desc: 'Studies show that clean offices boost employee productivity by up to 20%. A clutter-free, sanitized workspace helps your team focus and perform at their best.' },
                { title: 'Reduced Sick Days', desc: 'Regular disinfection of high-touch surfaces significantly reduces the spread of cold, flu, and other illnesses, keeping your team healthy and reducing absenteeism.' },
                { title: 'Professional First Impressions', desc: 'A consistently clean office makes a powerful impression on clients, prospects, and visitors, reinforcing your brand reputation and professionalism.' },
                { title: 'Extended Facility Lifespan', desc: 'Regular cleaning and maintenance of carpets, floors, furniture, and fixtures extends their lifespan, protecting your investment and reducing replacement costs.' },
                { title: 'Enhanced Employee Morale', desc: 'Employees appreciate working in a clean, well-maintained environment. It shows you care about their health, comfort, and overall workplace experience.' },
                { title: 'Compliance & Standards', desc: 'Many industries have specific cleanliness and sanitation requirements. Our professional service ensures you meet or exceed all regulatory standards.' },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Office Cleaning for Every Industry
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              We specialize in office cleaning for diverse industries throughout Orange County, understanding the unique requirements of each sector.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {['Corporate Offices', 'Medical & Dental Offices', 'Law Firms', 'Accounting & Financial Services', 'Tech Companies & Startups', 'Real Estate Offices', 'Insurance Agencies', 'Marketing & Creative Agencies', 'Non-Profit Organizations'].map((industry, index) => (
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

        {/* Service Areas */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Office Cleaning Service Areas in Orange County
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              We provide professional office cleaning throughout Orange County. Click your city to learn more about our services in your area.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all duration-300 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-white">{city.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-cyan-50 mt-1">Office Cleaning →</p>
                </Link>
              ))}
            </div>

            <p className="text-center text-gray-600 mt-8">
              We also serve: Garden Grove, Orange, Mission Viejo, Buena Park, Yorba Linda, Westminster, and all surrounding OC cities.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Office Cleaning
            </h2>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                { q: 'How often should an office be professionally cleaned?', a: 'Most offices benefit from daily or nightly cleaning 3-5 times per week. High-traffic offices or those with many employees may require daily service. Smaller offices with fewer staff might do well with 2-3 cleanings per week. We\'ll recommend the optimal frequency based on your specific needs during your free consultation.' },
                { q: 'Do you clean after hours to avoid disrupting our work?', a: 'Yes! The majority of our office cleaning is performed after business hours—evenings, nights, or early mornings—so we never disrupt your operations. We can also work during off-peak hours if you prefer daytime cleaning.' },
                { q: 'What eco-friendly cleaning products do you use?', a: 'We offer green cleaning options using EPA-approved, environmentally safe products that are effective yet gentle on the environment. These products are ideal for offices prioritizing employee health and sustainability. Simply request eco-friendly cleaning when getting your quote.' },
                { q: 'Are your office cleaners insured and bonded?', a: 'Absolutely. All Suarez Cleaning Services team members are fully insured, bonded, and background-checked. We provide Certificates of Insurance (COI) upon request for your building management or property requirements.' },
                { q: 'Can we customize our office cleaning checklist?', a: 'Yes! Every office has unique needs. We create customized cleaning checklists based on your facility layout, traffic patterns, industry requirements, and specific priorities. You decide what gets cleaned, how often, and to what standard.' },
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

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready for a Cleaner Office?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">
              Get a free, customized office cleaning quote for your Orange County business. No obligation, no pressure—just a clean workspace.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-bold text-lg shadow-xl">
                Request Free Quote
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
