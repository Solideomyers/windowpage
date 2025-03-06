import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import withBundleAnalyzer from '@next/bundle-analyzer'

const withBundleA = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'false',
});
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // crossOrigin: 'anonymous',
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
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,

    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_BASE_URL || ''],
    },
  },
  
};

const nextConfigTranslate = withBundleA(withNextIntl(nextConfig));

export default nextConfigTranslate;
