/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:locale/onsen-egg',
        destination: '/:locale/events/onsen-egg',
        permanent: true,
      },
      {
        source: '/:locale/onsen-egg/:path*',
        destination: '/:locale/events/onsen-egg/:path*',
        permanent: true,
      },
      {
        source: '/:locale/meteor-shower',
        destination: '/:locale/events/meteor-shower',
        permanent: true,
      },
      {
        source: '/:locale/guides/housing/blueprints',
        destination: '/:locale/guides/housing#blueprints',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
