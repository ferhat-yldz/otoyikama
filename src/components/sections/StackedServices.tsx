'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { SERVICES } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import Image from 'next/image';

// Card Component
function StackedCard({
    service,
    index,
    total,
    scrollYProgress,
    position
}: {
    service: typeof SERVICES[number],
    index: number,
    total: number,
    scrollYProgress: MotionValue<number>,
    position: number // Current position in the visual stack (0 = top)
}) {
    // Scroll Distribution
    const step = 1 / total;
    const start = index * step;
    const end = start + step;

    // Animation Transforms
    const xDir = index % 2 === 0 ? 1000 : -1000;
    const rotateDir = index % 2 === 0 ? 15 : -15;

    const x = useTransform(scrollYProgress, [start, end], [0, xDir]);
    const rotate = useTransform(scrollYProgress, [start, end], [0, rotateDir]);
    // User requested NO transparency fade-out. Kept opaque during slide.
    const opacity = useTransform(scrollYProgress, [start, end], [1, 1]);

    // Stack Entry Logic
    const currentStackIndex = useTransform(scrollYProgress, value => value * total);
    const dist = useTransform(currentStackIndex, (current) => index - current);

    const scale = useTransform(dist, [0, 1, 2, 3, 13], [1, 0.95, 0.9, 0.85, 0.8]);
    const y = useTransform(dist, [0, 1, 2, 3, 13], [0, 15, 30, 45, 100]);

    return (
        <motion.div
            style={{
                x,
                rotate,
                scale,
                y,
                opacity,
                zIndex: total - index,
            }}
            className={cn(
                "absolute top-0 origin-top",
                "w-[85vw] md:w-[450px] aspect-[3/5] md:aspect-[3/4]", // Mobile: Wider & Taller (85vw), Desktop: Fixed
                "rounded-[2rem] shadow-2xl overflow-hidden",
                "bg-black border border-white/10 will-change-transform" // Pure black for seamless blend
            )}
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105" // Full opacity
                    sizes="(max-width: 768px) 90vw, 450px"
                    priority={index < 2} // Prioritize first couple of cards
                />
                {/* Gradient Overlay - Lighter on top to show image, dark on bottom for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col p-10">
                {/* Top: Number (Subtle) */}
                <div className="flex justify-end">
                    <span className="text-8xl font-black text-white/5 font-serif leading-none tracking-tighter mix-blend-overlay">
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                </div>

                {/* Bottom: Text & Action */}
                <div className="mt-auto">
                    <h3 className="text-4xl font-bold text-white mb-4 font-serif leading-none tracking-tight">
                        {service.title}
                    </h3>

                    <p className="text-white/60 text-sm leading-relaxed mb-8 line-clamp-3 font-light tracking-wide">
                        {service.description}
                    </p>

                    <Link
                        href={`/hizmetlerimiz/${service.id}`}
                        className="group w-full py-5 flex items-center justify-between px-0 border-t border-white/10 hover:border-white/30 transition-all duration-500"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 group-hover:text-white transition-colors">
                            Detayları Gör
                        </span>
                        <span className="w-8 h-8 flex items-center justify-center text-white/50 group-hover:text-[var(--color-primary)] group-hover:translate-x-2 transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

import { headerStore } from '@/lib/headerStore';
import { useMotionValueEvent } from 'framer-motion';

export function StackedServices() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Increased height to ensure user has enough "scroll room" for 13 cards
    // 13 cards * 40vh per swipe = ~520vh seems reasonable.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Control global header visibility based on this section's progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // If we are actively scrolling through this section (between 1% and 99%), hide the header completely.
        if (latest > 0.01 && latest < 0.99) {
            headerStore.setHidden(true);
        } else {
            headerStore.setHidden(false);
        }
    });

    return (
        <section ref={containerRef} className="relative h-[1200vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* Header Text - More Minimal */}
                <div className="absolute top-[8%] text-center z-20 w-full px-4 mix-blend-difference pointer-events-none">
                    <p className="text-white/40 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">
                        Hizmetlerimiz
                    </p>
                    <h2 className="text-3xl md:text-4xl font-serif text-white/90">
                        Premium Bakım
                    </h2>
                </div>

                {/* Cards Container */}
                <div className="relative w-full max-w-[450px] aspect-[3/4] flex items-center justify-center mt-32 z-10">
                    {/* Render in reverse order so the first card (index 0) is last in DOM text, ensuring it sits on top regardless of z-index quirks */}
                    {[...SERVICES].reverse().map((service, i) => {
                        const originalIndex = SERVICES.length - 1 - i;
                        return (
                            <StackedCard
                                key={service.id}
                                service={service}
                                index={originalIndex}
                                total={SERVICES.length}
                                scrollYProgress={scrollYProgress}
                                position={originalIndex}
                            />
                        );
                    })}

                    {/* Final "End of Stack" Message - Appears behind last card (First in DOM logically for background) */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="text-center opacity-20">
                            <div className="text-6xl mb-4 grayscale">✨</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
