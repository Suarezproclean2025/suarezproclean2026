import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suarezproclean.com'

  // All Orange County cities for SEO coverage
  const orangeCountyCities = [
    'Anaheim', 'Santa Ana', 'Irvine', 'Huntington Beach', 'Garden Grove',
    'Orange', 'Fullerton', 'Costa Mesa', 'Mission Viejo', 'Newport Beach',
    'Buena Park', 'Lake Forest', 'Tustin', 'Yorba Linda', 'Westminster',
    'Aliso Viejo', 'Brea', 'Laguna Niguel', 'Fountain Valley', 'Placentia',
    'Rancho Santa Margarita', 'Cypress', 'Stanton', 'San Clemente',
    'Laguna Beach', 'Dana Point', 'Seal Beach', 'La Habra', 'San Juan Capistrano',
    'Laguna Hills', 'Laguna Woods', 'La Palma', 'Los Alamitos', 'Villa Park'
  ]

  // Core pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Add city-specific service pages to sitemap
  // Note: You'll need to create these pages if you want them indexed
  const cityRoutes = orangeCountyCities.map((city) => ({
    url: `${baseUrl}/services/${city.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...cityRoutes]
}
