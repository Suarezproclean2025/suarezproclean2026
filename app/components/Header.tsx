'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/SuarezCS-logo.png"
              alt="Suarez Cleaning Logo"
              width={128}
              height={128}
              className="w-28 h-36"
              priority
            />
            <span className="font-bold text-lg text-stone-400 hidden sm:block">
              Suarez Cleaning Services LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative group">
              <button className="text-stone-400 hover:text-cyan-500 transition-colors flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/office-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Office Cleaning</Link>
                <Link href="/nightly-janitorial" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Nightly Janitorial</Link>
                <Link href="/floor-care" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Floor Care</Link>
                <Link href="/day-porter-services" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Day Porter Services</Link>
                <Link href="/post-construction-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Post-Construction</Link>
                <Link href="/move-in-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Move In Cleaning</Link>
                <Link href="/move-out-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Move Out Cleaning</Link>
                <Link href="/janitorial-services" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Janitorial Services</Link>
                <Link href="/commercial-cleaning" className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-700">Commercial Cleaning</Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="bg-cyan-700 text-stone-400 px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
            >
              Get a Quote
            </Link>
            <a href="tel:9493579256" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
              (949) 357-9256
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-400"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <details className="text-stone-400">
              <summary className="hover:text-cyan-500 transition-colors py-2 cursor-pointer">Services</summary>
              <div className="pl-4 flex flex-col gap-2 mt-2">
                <Link href="/office-cleaning" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Office Cleaning</Link>
                <Link href="/nightly-janitorial" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Nightly Janitorial</Link>
                <Link href="/floor-care" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Floor Care</Link>
                <Link href="/day-porter-services" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Day Porter</Link>
                <Link href="/post-construction-cleaning" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Post-Construction</Link>
                <Link href="/move-in-cleaning" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Move In Cleaning</Link>
                <Link href="/move-out-cleaning" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Move Out Cleaning</Link>
                <Link href="/janitorial-services" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Janitorial Services</Link>
                <Link href="/commercial-cleaning" className="text-sm hover:text-cyan-500 py-1" onClick={() => setMobileMenuOpen(false)}>Commercial Cleaning</Link>
              </div>
            </details>
            <Link
              href="/contact"
              className="bg-cyan-700 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
            <a href="tel:9493579256" className="text-cyan-400 font-semibold text-center py-2">
              (949) 357-9256
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}