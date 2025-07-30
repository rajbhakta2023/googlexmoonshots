/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['placehold.co', 'assets.mixkit.co'],
  },
}

module.exports = nextConfig 