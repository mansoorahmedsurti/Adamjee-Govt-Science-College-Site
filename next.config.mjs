/** @type {import('next').NextConfig} */
const nextConfig = {
  typedRoutes: true, // moved out of experimental
  typescript: {
    ignoreBuildErrors: false,
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
      {
        protocol: 'https',
        hostname: 'www.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  // output: 'standalone',
  trailingSlash: false,
}

export default nextConfig