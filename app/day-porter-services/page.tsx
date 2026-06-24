import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Day Porter Services Orange County CA | On-Site Cleaning | Suarez Cleaning',
  description: 'Professional day porter services in Orange County, CA. On-site cleaning attendants for restrooms, lobbies & high-traffic areas. Licensed & insured. Call (949) 357-9256!',
  keywords: ['day porter services Orange County', 'on-site cleaning attendant OC', 'commercial porter service Orange County CA', 'daytime janitorial Orange County'],
  openGraph: {
    title: 'Day Porter Services Orange County | On-Site Cleaning Attendants',
    description: 'Professional day porter services for Orange County businesses. On-site cleaning maintenance throughout business hours.',
    url: 'https://www.suarezproclean.com/day-porter-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.suarezproclean.com/day-porter-services',
  },
}

const cities = [{ name: 'Irvine', slug: '/irvine' }, { name: 'Newport Beach', slug: '/newport-beach' }, { name: 'Costa Mesa', slug: '/costa-mesa' }, { name: 'Santa Ana', slug: '/santa-ana' }, { name: 'Anaheim', slug: '/anaheim' }]

export default function DayPorterServices() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-cyan-50 via-white to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Day Porter Services in Orange County, CA
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Keep your facility pristine throughout the business day with Suarez Cleaning Services' professional day porters. Our on-site cleaning attendants maintain restrooms, lobbies, break rooms, and high-traffic areas in real-time, ensuring your Orange County business always looks its best.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-lg">Get a Free Quote</Link>
                <a href="tel:+19493579256" className="border-2 border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors font-medium text-lg">Call (949) 357-9256</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">What Does a Day Porter Do?</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
              Day porters provide continuous, on-site cleaning maintenance during business hours, addressing cleaning needs as they arise and keeping your facility spotless from open to close.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: 'Restroom Maintenance & Restocking', desc: 'Continuous monitoring and cleaning of restrooms throughout the day. Wiping counters, cleaning sinks, restocking paper towels and toilet paper, mopping floors, and maintaining sanitary conditions.' },
                { title: 'Lobby & Entrance Area Upkeep', desc: 'Maintaining pristine first impressions by cleaning entryways, sweeping lobbies, wiping reception desks, cleaning glass doors, and ensuring welcome areas are always presentable.' },
                { title: 'Break Room & Kitchen Cleaning', desc: 'Continuous cleanup of employee break rooms including wiping tables, cleaning microwaves, emptying trash, washing dishes, sanitizing counters, and maintaining a hygienic eating environment.' },
                { title: 'Trash Collection & Recycling', desc: 'Regular emptying of trash bins throughout the facility, replacing liners, sorting recyclables, and transporting waste to designated disposal areas to prevent overflow and odors.' },
                { title: 'Spill Response & Emergency Cleaning', desc: 'Immediate response to spills, accidents, and unexpected messes. Quick cleanup prevents slip hazards, maintains safety, and minimizes disruption to your business operations.' },
                { title: 'High-Traffic Area Maintenance', desc: 'Continuous attention to high-traffic zones including hallways, elevators, stairwells, and common areas. Sweeping, spot-mopping, and removing debris to keep these areas clean and safe.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Benefits of Day Porter Services</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Consistent Cleanliness All Day', desc: 'Unlike nightly cleaning only, day porters maintain cleanliness continuously. Your facility looks professional from 8 AM to 6 PM, not just in the morning.' },
                { title: 'Immediate Spill & Accident Response', desc: 'Spills are cleaned within minutes, not hours. This improves safety, reduces liability, and prevents messes from becoming bigger problems.' },
                { title: 'Enhanced Professional Image', desc: 'Clients and visitors always see a clean, well-maintained facility. Day porters ensure your business makes the right impression throughout the day.' },
                { title: 'Improved Employee Morale', desc: 'Employees appreciate clean restrooms, tidy break rooms, and a well-maintained workspace. It shows you value their comfort and work environment.' },
                { title: 'Reduced Burden on Staff', desc: 'Your employees focus on their jobs, not cleaning duties. Day porters handle all cleaning tasks, freeing your team to be more productive.' },
                { title: 'Flexible, Scalable Service', desc: 'Need a porter for 4 hours or 8 hours? Full-time or part-time? We customize day porter schedules to match your facility\'s traffic and needs.' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Day Porter Service Areas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {cities.map((city, index) => (
                <Link key={index} href={city.slug} className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl transition-all duration-300 group">
                  <h3 className="font-semibold text-gray-900 group-hover:text-white">{city.name}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-cyan-50 mt-1">Day Porter →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Day Porter FAQs</h2>
            {[
              { q: 'How many hours can a day porter work?', a: 'Day porter services are fully customizable. Common schedules include 4-hour shifts (morning or afternoon), 6-hour shifts, or full 8-hour coverage. We\'ll recommend optimal hours based on your facility size, traffic patterns, and budget.' },
              { q: 'What\'s the difference between a day porter and nightly janitorial?', a: 'Nightly janitorial provides deep cleaning after hours when the building is empty. Day porters provide continuous maintenance during business hours, handling restrooms, spills, trash, and high-traffic areas in real-time. Many facilities benefit from both services.' },
              { q: 'How much does day porter service cost in Orange County?', a: 'Day porter pricing typically ranges from $20-$35 per hour depending on duties, facility size, and shift length. Full-time day porters (40 hours/week) are more cost-effective than hourly arrangements. We provide free customized quotes.' },
              { q: 'Do day porters bring their own supplies?', a: 'Yes, our day porters arrive with all necessary cleaning supplies, equipment, and products. They maintain a portable cleaning cart stocked with everything needed for restroom maintenance, spill response, and general cleaning tasks.' },
              { q: 'What types of businesses need day porter services?', a: 'Day porters are ideal for high-traffic facilities: office buildings, shopping centers, medical offices, schools, gyms, restaurants, warehouses, event venues, and any business where cleanliness throughout the day is critical.' },
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Keep Your Facility Clean All Day Long</h2>
            <p className="text-xl md:text-2xl mb-8 text-cyan-50 max-w-3xl mx-auto">Professional day porter services for Orange County businesses. Consistent cleanliness, immediate response, professional image.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-colors font-bold text-lg shadow-xl">Get Day Porter Quote</Link>
              <a href="tel:+19493579256" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-bold text-lg">Call (949) 357-9256</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
