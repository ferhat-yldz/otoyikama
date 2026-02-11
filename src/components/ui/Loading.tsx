'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/constants';

export default function Loading() {
    const [speedLines, setSpeedLines] = useState<{ id: number; top: number; width: number; duration: number; delay: number }[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Generate random speed lines on client-side only to avoid hydration mismatch
        const lines = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            width: Math.random() * 300 + 100,
            duration: Math.random() * 0.5 + 0.2, // Very fast
            delay: Math.random() * 2,
        }));
        setSpeedLines(lines);

        // Simulate loading time with progress
        const duration = 2500;
        const interval = 25;
        const steps = duration / interval;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
            setProgress(newProgress);

            if (currentStep >= steps) {
                clearInterval(timer);
                setTimeout(() => setIsLoading(false), 500);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
                >
                    {/* 1. Moving Background (Speed Effect) */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        {/* Speed Lines */}
                        {speedLines.map((line) => (
                            <motion.div
                                key={line.id}
                                className="absolute h-[1px] bg-white/20 rounded-full"
                                style={{
                                    top: `${line.top}%`,
                                    left: '100%',
                                    width: `${line.width}px`,
                                }}
                                animate={{ x: '-200vw' }}
                                transition={{
                                    duration: line.duration,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: line.delay
                                }}
                            />
                        ))}
                    </div>

                    {/* 2. Moving Road/Grid Floor */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 z-0 perspective-[100px]">
                        <motion.div
                            className="w-full h-full bg-[linear-gradient(90deg,transparent_49%,rgba(212,175,55,0.1)_50%,transparent_51%),linear-gradient(0deg,transparent_49%,rgba(212,175,55,0.1)_50%,transparent_51%)] bg-[length:100px_100px]"
                            style={{ transform: "rotateX(60deg) scale(2)" }}
                            animate={{ backgroundPosition: ["0px 0px", "-100px 0px"] }}
                            transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        </motion.div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center mt-10">
                        {/* Car Container with Suspension Vibration */}
                        <motion.div
                            className="relative w-80 h-40 md:w-[500px] md:h-[250px] mb-4"
                            animate={{ y: [0, 1.5, -1.5, 0] }} // Subtle high-freq vibration
                            transition={{ duration: 0.05, repeat: Infinity }}
                        >
                            <svg viewBox="0 0 600 250" className="w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
                                <defs>
                                    {/* Realistic Metallic Paint Effect - Solar Beam Yellow */}
                                    <linearGradient id="body-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#FFF7cc" /> {/* Highlight top */}
                                        <stop offset="20%" stopColor="#FFD700" /> {/* Main Yellow */}
                                        <stop offset="50%" stopColor="#FFC125" /> {/* Mid Tone */}
                                        <stop offset="80%" stopColor="#DAA520" /> {/* Shadow Tone */}
                                        <stop offset="100%" stopColor="#8B6508" /> {/* Deep Shadow */}
                                    </linearGradient>

                                    {/* Metallic Noise Texture */}
                                    <filter id="metallic-noise">
                                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
                                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.3 0" result="coloredNoise" />
                                        <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="compositeNoise" />
                                        <feBlend mode="multiply" in="compositeNoise" in2="SourceGraphic" />
                                    </filter>

                                    {/* Glass Gradient */}
                                    <linearGradient id="glass-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#111" />
                                        <stop offset="50%" stopColor="#000" />
                                        <stop offset="100%" stopColor="#222" />
                                    </linearGradient>

                                    {/* Rim Gradient */}
                                    <radialGradient id="rim-gradient" cx="50%" cy="50%" r="50%">
                                        <stop offset="60%" stopColor="#1a1a1a" />
                                        <stop offset="70%" stopColor="#333" />
                                        <stop offset="80%" stopColor="#1a1a1a" />
                                        <stop offset="95%" stopColor="#d4af37" />
                                        <stop offset="100%" stopColor="transparent" />
                                    </radialGradient>
                                </defs>

                                {/* Car Body - Base Shape */}
                                <g filter="url(#metallic-noise)">
                                    <path
                                        d="M 40 160 Q 40 130 130 115 L 190 110 L 250 65 H 410 L 470 115 Q 530 120 550 145 Q 560 160 550 170 H 520 L 510 160 H 430 L 420 170 H 190 L 180 160 H 80 L 70 170 H 40 Z"
                                        fill="url(#body-gradient)"
                                    />
                                </g>

                                {/* 3D Highlights / Contours using Overlay Gradients */}
                                <path
                                    d="M 40 145 Q 150 145 550 155"
                                    stroke="rgba(255,255,255,0.4)"
                                    strokeWidth="1"
                                    fill="none"
                                    style={{ mixBlendMode: 'overlay' }}
                                />
                                <path
                                    d="M 250 65 L 190 110"
                                    stroke="rgba(255,255,255,0.3)"
                                    strokeWidth="2"
                                    fill="none"
                                />

                                {/* Window Construction */}
                                <path
                                    d="M 200 110 L 255 70 H 400 L 450 110 Z"
                                    fill="url(#glass-gradient)"
                                    stroke="#333"
                                    strokeWidth="1"
                                />
                                {/* Window Reflection */}
                                <path
                                    d="M 255 70 L 290 110 H 260 L 230 70 Z"
                                    fill="rgba(255,255,255,0.1)"
                                />

                                {/* Side Mirror */}
                                <path
                                    d="M 200 110 L 190 100 H 210 L 215 110 Z"
                                    fill="#111"
                                />

                                {/* Door Cut Line */}
                                <path
                                    d="M 220 110 V 160 M 220 160 L 210 160"
                                    stroke="rgba(0,0,0,0.3)"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                <path
                                    d="M 380 110 V 160 M 380 160 L 390 160"
                                    stroke="rgba(0,0,0,0.3)"
                                    strokeWidth="1"
                                    fill="none"
                                />
                                {/* Door Handle */}
                                <rect x="340" y="115" width="20" height="4" rx="2" fill="rgba(0,0,0,0.5)" />

                                {/* BRANDING: BETSAN OTO YIKAMA */}
                                <g transform="skewX(-15)">
                                    <text
                                        x="340" y="145"
                                        textAnchor="middle"
                                        fill="#111"
                                        style={{ fontStyle: 'italic', fontWeight: '900', fontFamily: 'sans-serif', letterSpacing: '2px', fontSize: '24px' }}
                                        opacity="0.9"
                                    >
                                        BETSAN
                                    </text>
                                    <text
                                        x="340" y="160"
                                        textAnchor="middle"
                                        fill="#333"
                                        style={{ fontWeight: '700', fontFamily: 'sans-serif', letterSpacing: '4px', fontSize: '10px' }}
                                        opacity="0.8"
                                    >
                                        OTO YIKAMA
                                    </text>
                                </g>

                                {/* Wheels */}
                                <g transform="translate(135, 160)">
                                    <motion.g animate={{ rotate: 360 }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}>
                                        <circle r="34" fill="#000" /> {/* Tire */}
                                        <circle r="24" fill="url(#rim-gradient)" /> {/* Rim */}
                                        {/* Spokes */}
                                        {[0, 60, 120, 180, 240, 300].map(deg => (
                                            <rect key={deg} x="-3" y="-24" width="6" height="48" fill="#333" transform={`rotate(${deg})`} />
                                        ))}
                                    </motion.g>
                                    {/* Motion Blur Overlay */}
                                    <circle r="34" fill="rgba(0,0,0,0.3)" />
                                </g>

                                <g transform="translate(470, 160)">
                                    <motion.g animate={{ rotate: 360 }} transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}>
                                        <circle r="34" fill="#000" />
                                        <circle r="24" fill="url(#rim-gradient)" />
                                        {[0, 60, 120, 180, 240, 300].map(deg => (
                                            <rect key={deg} x="-3" y="-24" width="6" height="48" fill="#333" transform={`rotate(${deg})`} />
                                        ))}
                                    </motion.g>
                                    <circle r="34" fill="rgba(0,0,0,0.3)" />
                                </g>

                                {/* Headlight Beam */}
                                <path d="M 550 145 L 850 110 L 850 180 Z" fill="url(#headlight-beam)" opacity="0.15" />
                                <defs>
                                    <linearGradient id="headlight-beam" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="white" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Wind Lines */}
                                <motion.path
                                    d="M 0 100 H 150"
                                    stroke="white" strokeWidth="1" strokeOpacity="0.2"
                                    initial={{ x: -100, opacity: 0 }} animate={{ x: 600, opacity: [0, 0.4, 0] }} transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.path
                                    d="M 50 60 H 200"
                                    stroke="white" strokeWidth="1" strokeOpacity="0.1"
                                    initial={{ x: -100, opacity: 0 }} animate={{ x: 600, opacity: [0, 0.3, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: 0.2, ease: "linear" }}
                                />
                            </svg>
                        </motion.div>

                        {/* Speedometer Percentage Text */}
                        <div className="text-center mt-[-10px]">
                            <motion.div
                                className="text-5xl md:text-7xl font-bold text-white font-manrope tracking-tighter tabular-nums drop-shadow-2xl"
                            >
                                {progress}
                                <span className="text-2xl md:text-3xl text-[var(--color-primary)] ml-1">%</span>
                            </motion.div>
                            <motion.div
                                className="text-xs text-[var(--color-primary)] tracking-[0.4em] uppercase mt-2 font-bold opacity-80"
                            >
                                HIZLANIYOR
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
