import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    // Ana sayfalar
    const routes = [
        '',
        '/hakkimizda',
        '/hizmetlerimiz',
        '/galeri',
        '/iletisim',
    ];

    // Hizmet sayfaları
    const serviceRoutes = [
        '/hizmetlerimiz/normal-ic-dis-yikama',
        '/hizmetlerimiz/vip-yikama',
        '/hizmetlerimiz/full-detay-temizlik',
        '/hizmetlerimiz/pasta-cila',
        '/hizmetlerimiz/seramik-kaplama',
        '/hizmetlerimiz/koltuk-temizleme',
        '/hizmetlerimiz/motor-yikama',
        '/hizmetlerimiz/jant-temizligi',
    ];

    const allRoutes = [...routes, ...serviceRoutes];

    return allRoutes.map(route => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.includes('/hizmetlerimiz/') ? 0.7 : 0.8,
    }));
}
