'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function ExtraordinaryHero() {
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position state
    const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Auto-Roaming Spotlight for Mobile (Ghost Finger)
    useEffect(() => {
        let animationFrameId: number;
        let startTime = Date.now();

        const checkAndAnimate = () => {
            // Strictly check for mobile width
            const isMobile = window.innerWidth < 768;

            // If on Desktop (not mobile), ensure we stop any running animation
            if (!isMobile) {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                return;
            }

            // Animation Loop
            const animate = () => {
                const time = (Date.now() - startTime) / 1000;
                const width = window.innerWidth;
                const height = window.innerHeight;

                const cx = width / 2;
                const cy = height / 2;
                const rx = width * 0.35;
                const ry = height * 0.25;

                const x = cx + rx * Math.cos(time * 0.8) + (Math.sin(time * 0.3) * 50);
                const y = cy + ry * Math.sin(time * 0.6) * Math.cos(time * 0.3);

                mouseX.set(x);
                mouseY.set(y);

                animationFrameId = requestAnimationFrame(animate);
            };

            // Start loop if not already running (simplified logic: just call animate)
            animate();
        };

        // Run initially
        checkAndAnimate();

        // Handle Resize to stop/start dynamically
        const handleResize = () => {
            // Cancel existing to restart check
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            checkAndAnimate();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to run once on mount

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 1. Dark Overlay (Default State) */}
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
                {/* Noise removed for pure black */}

                <div className="text-center relative z-20 pointer-events-none">
                    <p className="text-white/20 text-sm tracking-[0.5em] uppercase mb-4">
                        Keşfetmek İçin Gezin
                    </p>
                    <h1 className="text-6xl md:text-9xl font-bold text-white/10 tracking-tighter">
                        BETSAN
                    </h1>
                </div>
            </div>

            {/* 2. Revealed Content (Masked Layer) */}
            <motion.div
                className="absolute inset-0 z-20 flex items-center justify-center bg-black"
                style={{
                    maskImage: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(circle 250px at ${x}px ${y}px, black 10%, transparent 90%)`
                    ),
                    WebkitMaskImage: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(circle 250px at ${x}px ${y}px, black 10%, transparent 90%)`
                    ),
                }}
            >
                {/* Detailed Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/images/gallery/foto1.jpg" // Using a gallery image for high detail
                        alt="Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black opacity-80" />
                </div>

                {/* Revealed Text Content Removed as per user request */}
            </motion.div>

            {/* 3. Interactive Custom Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-50 hidden md:block mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
            />

            {/* 4. Absolute Navigation/Actions (Always Visible/Clickable) */}
            <div className="absolute bottom-20 md:bottom-12 left-0 right-0 z-40 flex flex-col md:flex-row items-center justify-center gap-4 px-4">
                <Link
                    href="/hizmetlerimiz"
                    className="group relative px-8 py-4 bg-[var(--color-primary)] text-black font-bold uppercase tracking-widest text-xs md:text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] w-full md:w-auto text-center"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Hizmetleri İncele
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>

                <Link
                    href="/iletisim"
                    className="group relative px-8 py-4 bg-black/30 backdrop-blur-md border border-white/20 text-white font-bold uppercase tracking-widest text-xs md:text-sm rounded-full overflow-hidden transition-all hover:bg-white/10 hover:border-white/40 w-full md:w-auto text-center"
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        İletişime Geç
                        <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    );
}
