'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/SuarezCS_logo.png"
              alt="Suarez Cleaning Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="font-bold text-lg text-gray-900 hidden sm:block">
              Suarez Cleaning Services LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#services" className="text-gray-700 hover:text-emerald-500 transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="text-gray-700 hover:text-emerald-500 transition-colors">
              Why Us
            </Link>
            <Link href="#areas" className="text-gray-700 hover:text-emerald-500 transition-colors">
              Areas
            </Link>
            <Link
              href="/contact"
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors font-medium"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
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
            <Link
              href="#services"
              className="text-gray-700 hover:text-emerald-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="text-gray-700 hover:text-emerald-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#areas"
              className="text-gray-700 hover:text-emerald-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Areas
            </Link>
            <Link
              href="/contact"
              className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors font-medium text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}