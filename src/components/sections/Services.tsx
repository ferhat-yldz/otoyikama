'use client';

import { SERVICES, type Service } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

// Helper component for each service item
function ServiceShowcase({ service, index }: { service: Service, index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const isEven = index % 2 === 0;

    return (
        <section ref={ref} className="py-24 md:py-32 overflow-hidden border-t border-[var(--color-border)] last:border-b">
            <div className="container">
                <div className={cn(
                    "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                    !isEven && "md:flex-row-reverse"
                )}>
                    {/* Visual Side */}
                    <div className="w-full md:w-1/2">
                        <ScrollAnimation animation={isEven ? 'fade-right' : 'fade-left'} duration={0.8}>
                            <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[16/9] overflow-hidden group rounded-lg">
                                <div className="absolute inset-0 bg-black" />

                                {/* Service Image */}
                                {service.image && (
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                )}

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Content Side */}
                    <motion.div
                        style={{ y, opacity }}
                        className="w-full md:w-1/2"
                    >
                        <ScrollAnimation animation={isEven ? 'fade-left' : 'fade-right'} duration={0.8} delay={0.2}>
                            <span className="text-[var(--color-primary)] text-xs tracking-[0.2em] uppercase font-bold mb-4 block">
                                H i z m e t &nbsp; {index + 1}
                            </span>

                            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                                {service.title}
                            </h2>

                            <p className="text-[var(--color-text-secondary)] text-lg font-light leading-relaxed mb-8 max-w-lg">
                                {service.description}
                            </p>

                            <div className="flex flex-col gap-4">
                                {service.features.slice(0, 3).map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                                        <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full" />
                                        {feature}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link
                                    href={`/hizmetlerimiz/${service.id}`}
                                    className="inline-block border-b border-[var(--color-text-primary)] pb-1 text-sm tracking-[0.1em] uppercase hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
                                >
                                    Detaylı İncele &nbsp; &rarr;
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function Services() {
    return (
        <div className="bg-black">
            {SERVICES.slice(0, 3).map((service, index) => (
                <ServiceShowcase key={service.id} service={service} index={index} />
            ))}

            <div className="py-24 text-center border-t border-[var(--color-border)]">
                <Link
                    href="/hizmetlerimiz"
                    className="inline-block btn btn-outline border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-black py-4 px-12 text-sm tracking-widest"
                >
                    TÜM HİZMETLERİMİZİ GÖRÜNTÜLE
                </Link>
            </div>
        </div>
    );
}
