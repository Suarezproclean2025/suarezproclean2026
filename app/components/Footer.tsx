import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Business Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Suarez Cleaning Services LLC</h3>
            <p className="text-gray-400 mb-2">Orange County, CA</p>
         <a
  href="mailto:contact@suarezproclean.com"
  className="text-gray-400 mb-2 block"
>
  contact@suarezproclean.com
</a>

<a
  href="tel:+19493579256"
  className="text-emerald-400 hover:text-emerald-300 transition-colors"
>
  (949) 357-9256
</a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="#services"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="#why-us"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Why Us
              </Link>
              <Link
                href="#areas"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Areas
              </Link>
            </div>
          </div>

          {/* Column 3: Copyright ONLY — social removed */}
          <div>
    

            {/* Social icons fully removed */}

            <p className="text-gray-400 text-sm">
              © {currentYear} Suarez Cleaning Services LLC. All rights reserved.
            </p>

            <p className="text-gray-500 text-sm mt-2">
              Created by{" "}
              <a
                href="https://codevostudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
              >
                Codevo Studio
              </a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
