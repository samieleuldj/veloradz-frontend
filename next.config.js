/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://api.veloradz.shop/admin',
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: 'https://api.veloradz.shop/admin/:path*',
        permanent: false,
      },
      {
        source: '/product/louis-vuitton-spidi',
        destination: '/product/louis-vuitton-speedy',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/products/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/brand/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*',
        headers: [
          // Tell browsers not to upgrade to HTTP/3 (QUIC) when Cloudflare passes this through.
          { key: 'Alt-Svc', value: 'clear' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256],
  },
};

module.exports = nextConfig;
