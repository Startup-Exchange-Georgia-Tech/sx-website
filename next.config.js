/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/apply',
        destination: 'https://l.linklyhq.com/l/1RKJB',
        permanent: false,
      }
    ]
  },
  reactStrictMode: true,
}

module.exports = nextConfig
