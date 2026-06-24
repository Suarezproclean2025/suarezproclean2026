import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Business Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Suarez Cleaning Services LLC</h3>
            <p className="text-gray-400 mb-2">Orange County, CA</p>
            <a href="mailto:contact@suarezproclean.com" className="text-gray-400 mb-2 block hover:text-cyan-400 transition-colors">
              contact@suarezproclean.com
            </a>
            <a href="tel:+19493579256" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              (949) 357-9256
            </a>
            <p className="text-gray-400 text-sm mt-4">Licensed, bonded & insured. Serving all of Orange County since 2015.</p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <div className="flex flex-col gap-2">
              <Link href="/office-cleaning" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Office Cleaning</Link>
              <Link href="/nightly-janitorial" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Nightly Janitorial</Link>
              <Link href="/floor-care" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Floor Care</Link>
              <Link href="/day-porter-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Day Porter Services</Link>
              <Link href="/post-construction-cleaning" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Post-Construction Cleaning</Link>
              <Link href="/move-in-cleaning" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Move In Cleaning</Link>
              <Link href="/move-out-cleaning" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Move Out Cleaning</Link>
              <Link href="/janitorial-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Janitorial Services</Link>
              <Link href="/commercial-cleaning" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Commercial Cleaning</Link>
            </div>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <div className="flex flex-col gap-2">
              <Link href="/irvine" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Irvine</Link>
              <Link href="/newport-beach" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Newport Beach</Link>
              <Link href="/costa-mesa" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Costa Mesa</Link>
              <Link href="/santa-ana" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Santa Ana</Link>
              <Link href="/anaheim" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Anaheim</Link>
              <Link href="/tustin" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Tustin</Link>
              <Link href="/laguna-hills" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Laguna Hills</Link>
              <Link href="/lake-forest" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Lake Forest</Link>
              <Link href="/huntington-beach" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Huntington Beach</Link>
              <Link href="/fullerton" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Fullerton</Link>
            </div>
          </div>

          {/* Column 4: Quick Links & Copyright */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 mb-6">
              <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Get a Quote</Link>
              <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</Link>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Suarez Cleaning Services LLC. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Created by{" "}
              <a href="https://codevostudio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
                Codevo Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
