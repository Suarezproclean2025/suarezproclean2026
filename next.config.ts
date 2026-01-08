/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'suarezproclean.com',
      },
    ],
  },
};

export default nextConfig;