import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:
          process.env.NEXT_PUBLIC_IMAGE_HOSTNAME || 'www.laventanaweb.com',
      },
    ],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ['@heroui/react'],
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_BASE_URL || ''],
    },
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: '/app/[locale]/api/:path*',
  //       locale: false,
  //     },
  //   ];
  // },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // {
          //   key: 'Cache-Control',
          //   value: 'public, max-age=31536000, inmutable',
          // },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      },
    ];
  },
};

const nextConfigTranslate = withNextIntl(nextConfig);

export default nextConfigTranslate;
