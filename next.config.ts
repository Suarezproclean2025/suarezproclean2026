/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce www domain canonical
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'suarezproclean.com',
          },
        ],
        destination: 'https://www.suarezproclean.com/:path*',
        permanent: true,
      },
    ]
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.suarezproclean.com',
      },
      {
        protocol: 'https',
        hostname: 'suarezproclean.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Compression enabled by default in Next.js 15
  compress: true,
  
  // React strict mode off for performance
  reactStrictMode: false,
};

export default nextConfig;