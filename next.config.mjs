/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    turbopack: {}, // Explicitly configure turbopack to resolve conflict
  },
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
      {
        protocol: 'https',
        hostname: 'www.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
    formats: ['image/webp', 'image/avif'], // Enable modern image formats
  },
  // Enable compression
  compress: true,
  // Enable static optimization where possible
  output: 'standalone',
  // Optimize page loading
  trailingSlash: false,
  // Enable experimental features
  modularizeImports: {
    "lucide-react": {
      transform: "lucide-react/{{kebabCase member}}",
    },
  },
}

export default nextConfig
