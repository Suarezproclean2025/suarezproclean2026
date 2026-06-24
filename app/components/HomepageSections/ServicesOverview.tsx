import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    slug: '/office-cleaning',
    image: '/images/SuarezCS_office.png',
    title: 'Office Cleaning',
    description: 'Professional office cleaning in Orange County, including desks, floors, kitchens, restrooms, and high-touch disinfection.',
  },
  {
    slug: '/nightly-janitorial',
    image: '/images/SuarezCS_night_Janitor.png',
    title: 'Nightly Janitorial',
    description: 'Reliable nightly janitorial services in Orange County with after-hours cleaning, alarm lock-up, and photo checklist reporting.',
  },
  {
    slug: '/floor-care',
    image: '/images/SuarezCS_Floor_care.png',
    title: 'Floor Care',
    description: 'Expert floor care services — carpet extraction, hard floor scrubbing & buffing, and VCT strip & wax for Orange County businesses.',
  },
  {
    slug: '/post-construction-cleaning',
    image: '/images/SuarezCS_post-construction.png',
    title: 'Post-Construction',
    description: 'Post-construction cleaning in Orange County, dust removal, glass polishing, and detailed cleanup for move-in ready spaces.',
  },
  {
    slug: '/move-in-cleaning',
    image: '/images/SuarezCS_movein_out.png',
    title: 'Move-In/Out Cleaning',
    description: 'Move-in and move-out cleaning services across Orange County, deep cleans for tenant turnover, property managers, and landlords.',
  },
  {
    slug: '/day-porter-services',
    image: '/images/SuarezCS_Janito.png',
    title: 'Day Porter Services',
    description: 'Day porter services in Orange County — on-site attendants to maintain restrooms, lobbies, and high-traffic areas throughout the day.',
  },
]

export default function ServicesOverview() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center animate-fade-in-up">
          Professional Commercial Cleaning Services in Orange County
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto animate-fade-in">
          Suarez Cleaning Services offers comprehensive commercial cleaning solutions tailored to Orange County businesses. From daily office cleaning to specialized floor care, we deliver consistent, high-quality results.
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              href={service.slug}
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} services in Orange County, CA`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-cyan-500 font-medium group-hover:text-cyan-600 inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/commercial-cleaning"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
