import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '@/constants';

// Inter font - Modern ve okunabilir
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  // Temel Bilgiler
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.contact.city} Profesyonel Oto Yıkama`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.seo.keywords],

  // Yazar ve Yayıncı
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (Facebook, LinkedIn vb.)
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.seo.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.contact.city} Profesyonel Oto Yıkama`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.contact.city} Profesyonel Oto Yıkama`,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },

  // Alternatif Diller
  alternates: {
    canonical: SITE_CONFIG.url,
  },

  // Diğer Meta Taglar
  category: 'Oto Yıkama',
  classification: 'Araç Bakım Hizmetleri',
};

// Viewport Ayarları
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0ea5e9',
};

// JSON-LD Schema - LocalBusiness
function JsonLdSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoWash',
    '@id': SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Çavuşoğlu, Dekor Sokak No:16',
      addressLocality: SITE_CONFIG.contact.district,
      addressRegion: SITE_CONFIG.contact.city,
      postalCode: SITE_CONFIG.contact.postalCode,
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.maps.coordinates.lat,
      longitude: SITE_CONFIG.maps.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    image: `${SITE_CONFIG.url}/og-image.jpg`,
    priceRange: '₺₺',
    currenciesAccepted: 'TRY',
    paymentAccepted: 'Cash, Credit Card',
    areaServed: [
      {
        '@type': 'City',
        name: 'Malatya',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Battalgazi',
      },
    ],
    // Google Maps bağlantısı
    hasMap: 'https://maps.app.goo.gl/WBHMAWpAYYJcYXW78',
    // Google yorumlarından puan
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      'https://maps.app.goo.gl/WBHMAWpAYYJcYXW78',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <JsonLdSchema />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
