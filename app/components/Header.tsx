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
            <Link href="#services" className="text-stone-400 hover:text-cyan-500 transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="text-stone-400 hover:text-cyan-500 transition-colors">
              Why Us
            </Link>
            <Link href="#areas" className="text-stone-400 hover:text-cyan-500 transition-colors">
              Areas
            </Link>
            <Link
              href="/contact"
              className="bg-cyan-700 text-stone-400 px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors font-medium"
            >
              Get a Quote
            </Link>
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
            <Link
              href="#services"
              className="text-stone-400 hover:text-cyan-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#why-us"
              className="text-stone-400 hover:text-cyan-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="#areas"
              className="text-stone-400 hover:text-cyan-500 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Areas
            </Link>
            <Link
              href="/contact"
              className="bg-cyan-700 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors font-medium text-center"
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