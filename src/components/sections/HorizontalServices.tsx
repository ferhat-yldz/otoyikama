'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

function ServiceCard({ service }: { service: typeof SERVICES[number] }) {
    return (
        <div className="relative h-[400px] w-[300px] md:w-[400px] flex-shrink-0 group overflow-hidden rounded-2xl bg-[#111]">
            {/* Background Image (if available, otherwise gradient) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#222] to-[#000] z-0">
                {/* Placeholder for service image if we had one */}
                <div className="absolute inset-0 opacity-20 bg-[var(--color-primary)] mix-blend-overlay group-hover:opacity-30 transition-opacity" />
            </div>

            <div className="relative z-10 h-full flex flex-col p-8 justify-between">
                <div>
                    <div className="text-4xl mb-4 text-[var(--color-primary)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                        {service.shortDescription}
                    </p>
                </div>

                <Link
                    href={`/hizmetlerimiz/${service.id}`}
                    className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase hover:text-white transition-colors"
                >
                    Detayları Gör
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-[var(--color-primary)]/50 transition-colors duration-500" />
        </div>
    );
}

export function HorizontalServices() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="container mb-8 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        Hizmetlerimiz
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-xl">
                        Aracınız için sunduğumuz premium bakım çözümlerini yana kaydırarak keşfedin.
                    </p>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-4 md:px-20 min-w-max">
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-10 left-0 w-full h-1 bg-white/10">
                    <motion.div
                        className="h-full bg-[var(--color-primary)]"
                        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                    />
                </div>
            </div>
        </section>
    );
}
