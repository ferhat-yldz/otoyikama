'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { WhatsAppButton, ScrollAnimation } from '@/components/ui';
import { SITE_CONFIG } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Galeri fotoğrafları - public/images/gallery klasöründen
// Kategori eklendi
const galleryItems = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `/images/gallery/foto${i + 1}.jpg`,
    alt: `Profesyonel Oto Yıkama Çalışması ${i + 1}`,
    category: i % 3 === 0 ? 'ic-temizlik' : i % 3 === 1 ? 'dis-yikama' : 'koruma',
    size: i % 5 === 0 ? 'large' : 'normal', // Masonry için
}));

const CATEGORIES = [
    { id: 'all', label: 'Tümü' },
    { id: 'ic-temizlik', label: 'İç Temizlik' },
    { id: 'dis-yikama', label: 'Dış Yıkama' },
    { id: 'koruma', label: 'Koruma & Kaplama' },
];

export default function GaleriPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory);

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
            setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
        }
    };

    const goToNext = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === filteredItems.length - 1 ? 0 : selectedImage + 1);
        }
    };

    return (
        <>
            <Header />
            <main className="bg-[var(--color-bg)] min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--color-bg-secondary)]/50" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />

                    <div className="container relative z-10 text-center">
                        <ScrollAnimation animation="fade-down">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Sanat Eserine <span className="gradient-text">Dönüşen Araçlar</span>
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fade-up" delay={1}>
                            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
                                Uyguladığımız işlemlerden seçkiler. Her bir karede emeğimiz ve detaylara verdiğimiz önem saklı.
                            </p>
                        </ScrollAnimation>

                        {/* Filters */}
                        <ScrollAnimation animation="fade-up" delay={2} className="flex flex-wrap justify-center gap-2">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={cn(
                                        "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                        activeCategory === cat.id
                                            ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25"
                                            : "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]/80 hover:text-white"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="pb-24">
                    <div className="container">
                        <ScrollAnimation animation="fade-up">
                            <motion.div
                                layout
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                            >
                                <AnimatePresence>
                                    {filteredItems.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3 }}
                                            className={cn(
                                                "relative group cursor-pointer overflow-hidden rounded-xl bg-[var(--color-bg-secondary)]",
                                                item.size === 'large' ? "md:col-span-2 md:row-span-2" : ""
                                            )}
                                            onClick={() => openLightbox(index)}
                                        >
                                            <div className="relative aspect-square w-full h-full">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Lightbox Modal */}
                <AnimatePresence>
                    {selectedImage !== null && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-2 md:p-8"
                            onClick={closeLightbox}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all z-[70] backdrop-blur-sm"
                                onClick={closeLightbox}
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Previous Button */}
                            <button
                                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all z-[70] backdrop-blur-sm group"
                                onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Image Container */}
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                className="relative w-full h-full max-w-[95vw] md:max-w-7xl max-h-[85vh] md:max-h-[90vh] flex items-center justify-center pointer-events-none"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="relative w-full h-full pointer-events-auto">
                                    <Image
                                        src={filteredItems[selectedImage].src}
                                        alt={filteredItems[selectedImage].alt}
                                        fill
                                        sizes="95vw"
                                        className="object-contain drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Counter */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm border border-white/10">
                                        {selectedImage + 1} / {filteredItems.length}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Next Button */}
                            <button
                                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all z-[70] backdrop-blur-sm group"
                                onClick={(e) => { e.stopPropagation(); goToNext(); }}
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
