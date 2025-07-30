/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['placehold.co', 'assets.mixkit.co'],
  },
}

module.exports = nextConfig 