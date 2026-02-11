'use client';

import { SITE_CONFIG } from '@/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    return (
        <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Texture & Gradients */}
            <div className="absolute inset-0">
                {/* Gold/Amber Gradient Mesh - Subtle Luxury */}
                <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-[#D4AF37] rounded-full blur-[100px] md:blur-[180px] opacity-[0.03] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[200px] h-[200px] md:w-[600px] md:h-[600px] bg-[#B8860B] rounded-full blur-[80px] md:blur-[150px] opacity-[0.03]" />

                {/* Overlay Texture */}
                <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/noise.png')] mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
            </div>

            <motion.div
                style={{ opacity, scale, y }}
                className="container relative z-10 text-center px-4"
            >
                <div className="mb-8 relative inline-block">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50"
                    />
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[var(--color-primary)] text-xs md:text-sm tracking-[0.4em] uppercase font-bold px-4 py-2 block"
                    >
                        Malatya'nın En Prestijli Araç Bakım Merkezi
                    </motion.span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-medium leading-[0.9] mb-6 md:mb-8 text-white tracking-tighter">
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        Mükemmellik
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="block italic font-light text-white/80"
                    >
                        Detayla Buluştu
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="max-w-2xl mx-auto text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 tracking-wide"
                >
                    Sıradan bir temizlik değil. <br className="hidden md:block" />
                    Aracınız için tasarlanmış kapsamlı bir <span className="text-white font-normal">yenilenme deneyimi.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link
                        href={SITE_CONFIG.social.whatsapp}
                        className="group relative px-8 py-4 bg-white text-black min-w-[200px] overflow-hidden"
                    >
                        <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-bold transition-colors duration-300 group-hover:text-white">Randevu Al</span>
                        <div className="absolute inset-0 bg-[var(--color-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>

                    <Link
                        href="/hizmetlerimiz"
                        className="px-8 py-4 bg-transparent border border-white/20 text-white min-w-[200px] hover:bg-white/5 transition-all duration-300"
                    >
                        <span className="text-sm tracking-[0.2em] uppercase font-bold">Hizmetleri Keşfet</span>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Kaydır</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent opacity-30" />
            </motion.div>
        </section>
    );
}
