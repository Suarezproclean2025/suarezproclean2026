import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orange County Commercial Cleaning & Janitorial Services | Suarez Cleaning',
  description: 'Suarez Cleaning Services LLC provides trusted commercial cleaning and janitorial services in Orange County, CA. Office cleaning, nightly janitors, floor care, move-in/out cleaning, and post-construction cleanup. Licensed, insured, and eco-friendly. Request a free quote today.',
  keywords: 'Orange County cleaning services, commercial cleaning Orange County, janitorial services Orange County, office cleaning Orange County, nightly janitorial Orange County, floor care Orange County, move out cleaning Orange County, post construction cleaning Orange County, day porter services Orange County, eco-friendly cleaning Orange County',
  openGraph: {
    title: 'Orange County Commercial Cleaning & Janitorial Services | Suarez Cleaning',
    description: 'Professional commercial cleaning and janitorial services in Orange County, CA. Licensed, insured, and eco-friendly.',
    url: 'https://suarezproclean.com',
    siteName: 'Suarez Cleaning Services LLC',
    images: [
      {
        url: '/images/SuarezCS_logo.png',
        width: 600,
        height: 900,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Suarez Cleaning Services LLC',
              image: 'https://suarezproclean.com/images/SuarezCS_logo.png',
              telephone: '+19493579256',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Orange County',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
              url: 'https://suarezproclean.com',
              sameAs: [
                'https://www.facebook.com/SuarezCleaningServices',
                'https://www.instagram.com/SuarezCleaningServices',
              ],
              priceRange: '$$',
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}