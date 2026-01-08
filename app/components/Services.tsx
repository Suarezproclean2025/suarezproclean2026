import Image from 'next/image'

const services = [
  {
    image: '/images/SuarezCS_office.png',
    title: 'Office Cleaning',
    description: 'Professional office cleaning in Orange County, including desks, floors, kitchens, restrooms, and high-touch disinfection.',
  },
  {
    image: '/images/SuarezCS_night_Janitor.png',
    title: 'Nightly Janitorial',
    description: 'Reliable nightly janitorial services in Orange County with after-hours cleaning, alarm lock-up, and photo checklist reporting.',
  },
  {
    image: '/images/SuarezCS_Floor_care.png',
    title: 'Floor Care',
    description: 'Expert floor care services — carpet extraction, hard floor scrubbing & buffing, and VCT strip & wax for Orange County businesses.',
  },
  {
    image: '/images/SuarezCS_post construction.png',
    title: 'Post-Construction',
    description: 'Post-construction cleaning in Orange County, dust removal, glass polishing, and detailed cleanup for move-in ready spaces.',
  },
  {
    image: '/images/SuarezCS_movein_out.png',
    title: 'Move-In/Out',
    description: 'Move-in and move-out cleaning services across Orange County, deep cleans for tenant turnover, property managers, and landlords.',
  },
  {
    image: '/images/SuarezCS_Janito.png',
    title: 'Day Porter',
    description: 'Day porter services in Orange County on-site attendants to maintain restrooms, lobbies, and high-traffic areas throughout the day.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">
          Services
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}