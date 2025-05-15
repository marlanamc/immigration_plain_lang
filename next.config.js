/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: '/immigration_plain_lang',
  assetPrefix: '/immigration_plain_lang/',
}

module.exports = nextConfig 