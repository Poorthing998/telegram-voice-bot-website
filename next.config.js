/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO: Trailing slashes for consistent URLs
  trailingSlash: false,

  async redirects() {
    return [
      // Redirect www to non-www for consistent canonical URLs
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.typegone.com' }],
        destination: 'https://typegone.com/:path*',
        permanent: true,
      },
      // Redirect old Voxly URLs
      {
        source: '/voxly',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // SEO: Security & performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },

  // Performance
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['typegone.com'],
  },
};

module.exports = nextConfig;
