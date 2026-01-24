/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Fix: Enable TypeScript checking
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
      },
      {
        protocol: 'https',
        hostname: 'agsckarachi.edu.pk',
      },
    ],
    formats: ['image/webp', 'image/avif'], // Enable modern image formats
  },

}

export default nextConfig
