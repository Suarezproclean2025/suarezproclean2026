import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

// All Orange County cities for maximum SEO coverage
const orangeCountyCities = [
  'Anaheim', 'Santa Ana', 'Irvine', 'Huntington Beach', 'Garden Grove',
  'Orange', 'Fullerton', 'Costa Mesa', 'Mission Viejo', 'Newport Beach',
  'Buena Park', 'Lake Forest', 'Tustin', 'Yorba Linda', 'Westminster',
  'Aliso Viejo', 'Brea', 'Laguna Niguel', 'Fountain Valley', 'Placentia',
  'Rancho Santa Margarita', 'Cypress', 'Stanton', 'San Clemente', 
  'Laguna Beach', 'Dana Point', 'Seal Beach', 'La Habra', 'San Juan Capistrano',
  'Laguna Hills', 'Laguna Woods', 'La Palma', 'Los Alamitos', 'Villa Park'
]

export const metadata: Metadata = {
  metadataBase: new URL('https://suarezproclean.com'),
  
  title: {
    default: 'Commercial Cleaning Orange County CA | Janitorial Services | Suarez Cleaning',
    template: '%s | Suarez Cleaning Services'
  },
  
  description: `#1 Commercial Cleaning & Janitorial Services in Orange County, CA. Serving ${orangeCountyCities.slice(0, 12).join(', ')} & all OC cities. Office cleaning, nightly janitorial, floor care, post-construction cleanup. Licensed, insured & eco-friendly. 24/7 service. Call (949) 357-9256 for FREE quote!`,
  
  keywords: [
    // Primary keywords
    'commercial cleaning Orange County',
    'commercial cleaning Orange County CA',
    'janitorial services Orange County',
    'janitorial services Orange County CA',
    'Orange County commercial cleaning',
    'Orange County janitorial services',
    'OC commercial cleaners',
    'OC janitorial services',
    
    // Service-specific long-tail keywords
    'office cleaning Orange County',
    'office cleaning Orange County CA',
    'nightly janitorial services Orange County',
    'commercial office cleaning Orange County',
    'professional janitorial services Orange County',
    'business cleaning services Orange County',
    'commercial building cleaning Orange County',
    'medical office cleaning Orange County',
    'retail store cleaning Orange County',
    'restaurant cleaning Orange County',
    'warehouse cleaning Orange County',
    'gym cleaning services Orange County',
    'church cleaning services Orange County',
    'school cleaning services Orange County',
    
    // Specialized services
    'floor care Orange County',
    'floor stripping and waxing Orange County',
    'floor buffing Orange County',
    'carpet cleaning Orange County commercial',
    'window cleaning Orange County commercial',
    'post construction cleaning Orange County',
    'post construction cleanup Orange County',
    'move out cleaning Orange County commercial',
    'move in cleaning Orange County commercial',
    'day porter services Orange County',
    'porter service Orange County',
    'disinfection services Orange County',
    'COVID cleaning Orange County',
    'deep cleaning Orange County commercial',
    
    // City-specific keywords (major cities first for SEO priority)
    ...['Anaheim', 'Santa Ana', 'Irvine', 'Huntington Beach', 'Garden Grove', 
        'Orange', 'Fullerton', 'Costa Mesa', 'Mission Viejo', 'Newport Beach'].flatMap(city => [
      `commercial cleaning ${city}`,
      `commercial cleaning ${city} CA`,
      `janitorial services ${city}`,
      `janitorial services ${city} CA`,
      `office cleaning ${city}`,
      `${city} commercial cleaning`,
      `${city} janitorial services`,
    ]),
    
    // Quality and trust indicators
    'licensed commercial cleaning Orange County',
    'insured janitorial services Orange County',
    'bonded cleaning company Orange County',
    'eco-friendly cleaning Orange County',
    'green cleaning services Orange County',
    'best commercial cleaning Orange County',
    'top janitorial services Orange County',
    'affordable commercial cleaning Orange County',
    'reliable janitorial services Orange County',
    'professional cleaning company Orange County',
    '24/7 cleaning services Orange County',
    'emergency cleaning services Orange County',
    
    // Area variations
    'commercial cleaning services in Orange County',
    'janitorial services in Orange County',
    'commercial cleaners near me Orange County',
    'janitorial companies Orange County',
    'cleaning companies Orange County CA',
    'commercial cleaning contractors Orange County',
  ].join(', '),
  
  authors: [{ name: 'Suarez Cleaning Services LLC' }],
  creator: 'Suarez Cleaning Services LLC',
  publisher: 'Suarez Cleaning Services LLC',
  
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://suarezproclean.com',
    siteName: 'Suarez Cleaning Services LLC',
    title: 'Commercial Cleaning Orange County CA | #1 Janitorial Services | Suarez Cleaning',
    description: `Premier commercial cleaning & janitorial services serving all Orange County cities: ${orangeCountyCities.slice(0, 10).join(', ')} & more. Licensed, insured & eco-friendly. FREE quotes: (949) 357-9256`,
    images: [
      {
        url: '/images/SuarezCS_logo.png',
        width: 1200,
        height: 630,
        alt: 'Suarez Cleaning Services - Orange County Commercial Cleaning & Janitorial Services',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning Orange County | Janitorial Services',
    description: 'Professional commercial cleaning serving all of Orange County, CA. Licensed & insured.',
    images: ['/images/SuarezCS_logo.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  alternates: {
    canonical: 'https://suarezproclean.com',
  },
  
  category: 'Commercial Cleaning Services',
  
  other: {
    'msapplication-TileColor': '#2b5797',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Comprehensive Schema.org structured data for maximum SEO impact
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@graph': [
      // Primary LocalBusiness Schema
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://suarezproclean.com/#organization',
        name: 'Suarez Cleaning Services LLC',
        alternateName: ['Suarez Pro Clean', 'Suarez Cleaning', 'Suarez Janitorial'],
        legalName: 'Suarez Cleaning Services LLC',
        description: 'Professional commercial cleaning and janitorial services serving all of Orange County, California. Specializing in office cleaning, nightly janitorial, floor care, and post-construction cleanup.',
        
        url: 'https://suarezproclean.com',
        telephone: '+19493579256',
        email: 'info@suarezproclean.com',
        
        image: {
          '@type': 'ImageObject',
          url: 'https://suarezproclean.com/images/SuarezCS_logo.png',
          width: 600,
          height: 900,
          caption: 'Suarez Cleaning Services Logo'
        },
        
        logo: {
          '@type': 'ImageObject',
          url: 'https://suarezproclean.com/images/SuarezCS_logo.png',
          width: 600,
          height: 900,
        },
        
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Orange County',
          addressRegion: 'CA',
          addressCountry: 'US',
          postalCode: '92868',
        },
        
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.7175,
          longitude: -117.8311,
        },
        
        // Comprehensive area served for all OC cities
        areaServed: orangeCountyCities.map(city => ({
          '@type': 'City',
          name: city,
          '@id': `https://suarezproclean.com/services/${city.toLowerCase().replace(/\s+/g, '-')}`,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Orange County',
            '@id': 'https://suarezproclean.com/#orange-county',
            containedInPlace: {
              '@type': 'State',
              name: 'California',
              '@id': 'https://suarezproclean.com/#california'
            }
          }
        })),
        
        priceRange: '$$',
        paymentAccepted: 'Cash, Check, Credit Card, Debit Card, Bank Transfer',
        currenciesAccepted: 'USD',
        
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '19:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '08:00',
            closes: '18:00'
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '00:00',
            closes: '23:59',
            description: 'Emergency services available'
          }
        ],
        
        sameAs: [
          'https://www.facebook.com/SuarezCleaningServices',
          'https://www.instagram.com/SuarezCleaningServices',
        ],
        
        // Services offered with detailed schema
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Commercial Cleaning & Janitorial Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Commercial Janitorial Services',
                description: 'Professional nightly and daily janitorial services for offices, buildings, and commercial facilities throughout Orange County',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Office Cleaning Services',
                description: 'Complete office cleaning and maintenance services including dusting, vacuuming, sanitizing, and trash removal',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Floor Care & Maintenance',
                description: 'Professional floor stripping, waxing, buffing, polishing, and regular maintenance for all floor types',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Post-Construction Cleaning',
                description: 'Detailed cleanup and debris removal after construction or renovation projects',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Move In/Out Cleaning',
                description: 'Thorough deep cleaning services for commercial spaces during tenant transitions',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Day Porter Services',
                description: 'On-site daytime maintenance and cleaning support for high-traffic commercial facilities',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Medical Office Cleaning',
                description: 'Specialized sanitization and cleaning for medical facilities, clinics, and healthcare offices',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Eco-Friendly Green Cleaning',
                description: 'Environmentally safe cleaning using eco-friendly products and sustainable practices',
                provider: { '@id': 'https://suarezproclean.com/#organization' },
                areaServed: { '@id': 'https://suarezproclean.com/#orange-county' }
              }
            }
          ]
        },
        
        // Aggregate rating for trust signals
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '87',
          bestRating: '5',
          worstRating: '1'
        },
      },
      
      // Website Schema
      {
        '@type': 'WebSite',
        '@id': 'https://suarezproclean.com/#website',
        url: 'https://suarezproclean.com',
        name: 'Suarez Cleaning Services LLC - Orange County Commercial Cleaning',
        description: 'Professional commercial cleaning and janitorial services for all of Orange County, California',
        publisher: {
          '@id': 'https://suarezproclean.com/#organization'
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://suarezproclean.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      },
      
      // Service Area Business
      {
        '@type': 'Service',
        '@id': 'https://suarezproclean.com/#commercial-cleaning-service',
        serviceType: 'Commercial Cleaning and Janitorial Services',
        name: 'Orange County Commercial Cleaning Services',
        description: 'Comprehensive commercial cleaning and janitorial services for businesses throughout Orange County, California',
        provider: {
          '@id': 'https://suarezproclean.com/#organization'
        },
        areaServed: orangeCountyCities.map(city => ({
          '@type': 'City',
          name: `${city}, CA`,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Orange County',
            containedInPlace: {
              '@type': 'State',
              name: 'California'
            }
          }
        })),
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: 'https://suarezproclean.com',
          servicePhone: {
            '@type': 'ContactPoint',
            telephone: '+19493579256',
            contactType: 'Customer Service',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish']
          }
        }
      },
      
      // Breadcrumb Schema
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://suarezproclean.com/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://suarezproclean.com'
          }
        ]
      }
    ]
  }

  return (
    <html lang="en-US">
      <head>
        {/* Critical Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        
        {/* Geo-targeting meta tags for local SEO */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Orange County, California" />
        <meta name="geo.position" content="33.7175;-117.8311" />
        <meta name="ICBM" content="33.7175, -117.8311" />
        
        {/* Additional local SEO signals */}
        <meta property="business:contact_data:street_address" content="Orange County" />
        <meta property="business:contact_data:locality" content="Orange County" />
        <meta property="business:contact_data:region" content="CA" />
        <meta property="business:contact_data:postal_code" content="92868" />
        <meta property="business:contact_data:country_name" content="United States" />
        <meta property="business:contact_data:phone_number" content="+19493579256" />
        
        {/* Language and content type */}
        <meta httpEquiv="content-language" content="en-US" />
        <link rel="alternate" hrefLang="en-US" href="https://suarezproclean.com" />
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}