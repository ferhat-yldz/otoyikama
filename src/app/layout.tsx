import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG, SERVICES } from '@/constants';
import Loading from '@/components/ui/Loading';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  // Temel Bilgiler
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.contact.city} Profesyonel Oto Yıkama`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
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
    '@type': ['AutoWash', 'AutomotiveBusiness', 'LocalBusiness'],
    '@id': `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.url}/images/LOGO.png`,
      width: '512',
      height: '512',
    },
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
    image: [
      `${SITE_CONFIG.url}/og-image.jpg`,
      `${SITE_CONFIG.url}/images/LOGO.png`
    ],
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
        name: 'Yeşilyurt',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Battalgazi',
      }
    ],
    // Hizmet Kataloğu
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Oto Bakım ve Yıkama Hizmetleri',
      itemListElement: SERVICES.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
        },
        position: index + 1
      }))
    },
    // Google Maps bağlantısı
    hasMap: SITE_CONFIG.maps.directionsUrl || 'https://maps.app.goo.gl/XocF25jURahs5TXr8',
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
      SITE_CONFIG.social.whatsapp,
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

import { Suspense } from 'react';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import CookieConsent from '@/components/ui/CookieConsent';
import { FloatingActionPanel } from '@/components/layout';
import PageTransition from '@/components/layout/PageTransition';

// ... (imports remain the same)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${manrope.variable} ${playfair.variable}`}>
      <head>
        <JsonLdSchema />
        <link rel="icon" href="/images/LOGO.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/LOGO.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        suppressHydrationWarning={true}
        className="font-sans bg-[var(--color-bg)] text-[var(--color-text-primary)] antialiased selection:bg-[var(--color-primary)] selection:text-white overflow-x-hidden min-h-screen"
      >
        <Loading />
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <PageTransition>
          {children}
        </PageTransition>
        <FloatingActionPanel />
        <CookieConsent />
      </body>
    </html>
  );
}
