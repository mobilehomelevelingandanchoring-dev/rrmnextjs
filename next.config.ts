import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // SEO-friendly 301 redirects
  async redirects() {
    return [
      // --- Old SPA index.html fallback ---

      // --- Common old route patterns from migration ---
      // index.html fallback
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      // Old .html extensions
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/faq.html',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms-conditions.html',
        destination: '/terms-conditions',
        permanent: true,
      },

      // --- Alternate URL patterns people might try ---
      {
        source: '/service/:slug*',
        destination: '/services/:slug*',
        permanent: true,
      },
      {
        source: '/location/:slug*',
        destination: '/locations/:slug*',
        permanent: true,
      },
      {
        source: '/area/:slug*',
        destination: '/areas/:slug*',
        permanent: true,
      },
      {
        source: '/problem/:slug*',
        destination: '/problems/:slug*',
        permanent: true,
      },
      {
        source: '/surface/:slug*',
        destination: '/surfaces/:slug*',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/faqs',
        destination: '/faq',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [];
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
