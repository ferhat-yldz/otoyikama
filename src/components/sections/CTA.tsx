'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';

export function CTA() {
    return (
        <section className="py-16 md:py-32 relative overflow-hidden bg-black">
            {/* Dynamic Background */}
            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                {/* Subtle Background Image */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[url('/images/gallery/foto17.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black" />
                </div>

                {/* Ambient Glows - Subtle but effective */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-primary)] rounded-full blur-[120px] opacity-[0.03] animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--color-primary-dark)] rounded-full blur-[120px] opacity-[0.03]" />

                {/* Seamless Transition Masks */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
            </div>

            <div className="container relative z-10 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-medium text-white mb-6 md:mb-8 leading-tight">
                            Aracınız En İyisini <br />
                            <span className="text-[var(--color-text-secondary)]">Hak Ediyor</span>
                        </h2>

                        <p className="text-base md:text-xl text-[var(--color-text-secondary)] font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                            Premium bakım hizmetlerimizle aracınıza değer katın.
                            İlk günkü parlaklığına kavuşmak için hemen randevu oluşturun.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                            <Link
                                href={SITE_CONFIG.social.whatsapp}
                                className="group relative w-full sm:w-auto px-10 py-5 bg-[var(--color-primary)] text-black text-sm tracking-[0.2em] uppercase font-bold hover:bg-[#F6E05E] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:-translate-y-1"
                            >
                                <span className="relative z-10">Hemen Randevu Al</span>
                            </Link>
                            <Link
                                href="/iletisim"
                                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-xs md:text-sm tracking-[0.2em] uppercase font-bold hover:bg-white/5 transition-colors duration-300"
                            >
                                Bize Ulaşın
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
