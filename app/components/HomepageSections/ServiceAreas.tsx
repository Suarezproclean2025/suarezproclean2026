import Link from 'next/link'

const cities = [
  { name: 'Irvine', slug: '/irvine' },
  { name: 'Newport Beach', slug: '/newport-beach' },
  { name: 'Costa Mesa', slug: '/costa-mesa' },
  { name: 'Santa Ana', slug: '/santa-ana' },
  { name: 'Anaheim', slug: '/anaheim' },
  { name: 'Tustin', slug: '/tustin' },
  { name: 'Laguna Hills', slug: '/laguna-hills' },
  { name: 'Lake Forest', slug: '/lake-forest' },
  { name: 'Huntington Beach', slug: '/huntington-beach' },
  { name: 'Fullerton', slug: '/fullerton' },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 via-white to-cyan-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Commercial Cleaning Service Areas in Orange County
        </h2>
        
        <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto">
          Suarez Cleaning Services proudly serves businesses throughout Orange County, California. No matter where your business is located, our professional cleaning teams are ready to serve you.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {cities.map((city, index) => (
            <Link
              key={index}
              href={city.slug}
              className="bg-white rounded-lg shadow-md px-6 py-4 text-center hover:bg-cyan-500 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 group-hover:text-white">
                {city.name}
              </h3>
              <p className="text-sm text-gray-600 group-hover:text-cyan-50 mt-1">
                Commercial Cleaning →
              </p>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Serving All of Orange County & Surrounding Areas
          </h3>
          
          <p className="text-gray-700 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
            In addition to our primary service areas, we provide commercial cleaning services throughout Orange County including: Garden Grove, Orange, Mission Viejo, Buena Park, Yorba Linda, Westminster, Aliso Viejo, Brea, Laguna Niguel, Fountain Valley, Placentia, Rancho Santa Margarita, Cypress, Stanton, San Clemente, Laguna Beach, Dana Point, Seal Beach, La Habra, San Juan Capistrano, Laguna Woods, La Palma, Los Alamitos, Villa Park, and all surrounding Southern California communities.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
            Our centralized location and experienced cleaning crews allow us to efficiently serve the entire Orange County region with consistent, high-quality commercial cleaning services. Whether you&apos;re in a bustling downtown office or a suburban business park, we&apos;ll be there.
          </p>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-cyan-500 text-white px-8 py-4 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-lg"
            >
              Get a Free Quote for Your Location
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
