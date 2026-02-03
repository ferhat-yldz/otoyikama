import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Görsel Optimizasyonu
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', // Sanity CMS için
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Geçici görseller için
      },
    ],
    // Cihaz boyutları
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Deneysel Özellikler
  experimental: {
    // Optimizasyon
    optimizePackageImports: ['lucide-react'],
  },

  // Headers - Güvenlik ve Performans
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
