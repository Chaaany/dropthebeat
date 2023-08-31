/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/v1/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ];
  },
}

module.exports = nextConfig
