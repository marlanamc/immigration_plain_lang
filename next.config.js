/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for root deployment
  // basePath: '/immigration_plain_lang',
  // assetPrefix: '/immigration_plain_lang/',
}

module.exports = nextConfig 