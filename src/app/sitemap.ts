import { MetadataRoute } from 'next';
import { SITE_CONFIG, SERVICES } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_CONFIG.url;

    // Statik sayfalar
    const staticPages = [
        '',
        '/hakkimizda',
        '/hizmetlerimiz',
        '/galeri',
        '/iletisim',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Hizmet sayfaları
    const servicePages = SERVICES.map((service) => ({
        url: `${baseUrl}/hizmetlerimiz/${service.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...servicePages];
}
