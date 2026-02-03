'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { WhatsAppButton } from '@/components/ui';
import { SITE_CONFIG } from '@/constants';

// Galeri fotoğrafları - public/images/gallery klasöründen
const galleryItems = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery/foto${i + 1}.jpg`,
    alt: `Profesyonel Oto Yıkama Çalışması ${i + 1}`,
}));

export default function GaleriPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? galleryItems.length - 1 : selectedImage - 1);
        }
    };

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === galleryItems.length - 1 ? 0 : selectedImage + 1);
        }
    };

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                                Çalışmalarımızdan <span className="gradient-text">Örnekler</span>
                            </h1>
                            <p className="text-lg text-[var(--color-text-secondary)]">
                                Profesyonel oto yıkama ve bakım hizmetlerimizden kareler
                            </p>
                        </div>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="section">
                    <div className="container">
                        <div className="gallery-grid">
                            {galleryItems.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="gallery-item"
                                    onClick={() => openLightbox(index)}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="gallery-image"
                                    />
                                    <div className="gallery-overlay">
                                        <div className="gallery-zoom-icon">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-[var(--color-bg-secondary)]">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                                Aracınız da Böyle Parlasın!
                            </h2>
                            <p className="text-[var(--color-text-secondary)] mb-8">
                                Hemen randevu alın, aracınızı ilk günkü gibi teslim edelim.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={SITE_CONFIG.social.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp ile Randevu
                                </a>
                                <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="btn btn-outline">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />

            {/* Lightbox Modal */}
            {selectedImage !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={galleryItems[selectedImage].src}
                            alt={galleryItems[selectedImage].alt}
                            fill
                            sizes="100vw"
                            className="lightbox-image"
                            priority
                        />
                    </div>

                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="lightbox-counter">
                        {selectedImage + 1} / {galleryItems.length}
                    </div>
                </div>
            )}
        </>
    );
}
