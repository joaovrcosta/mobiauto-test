/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['image1.mobiauto.com.br'],
  },
}

module.exports = nextConfig
