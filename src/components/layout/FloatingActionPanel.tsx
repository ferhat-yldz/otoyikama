'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { headerStore } from '@/lib/headerStore';
import { SITE_CONFIG } from '@/constants';

export function FloatingActionPanel() {
    const [isVisible, setIsVisible] = useState(false); // Initially hidden
    const [isForceHidden, setIsForceHidden] = useState(false);

    // Subscribe to headerStore for forced hiding (StackedServices)
    useEffect(() => {
        const unsubscribe = headerStore.subscribe(({ isHidden }) => {
            setIsForceHidden(isHidden);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // Scroll Detection to show/hide based on position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Derived visibility: Visible if scrolled down AND not forced hidden
    const shouldShow = isVisible && !isForceHidden;

    return (
        <AnimatePresence>
            {shouldShow && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className="fixed bottom-6 left-4 right-4 z-40 md:hidden"
                >
                    <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl p-2 flex items-center justify-between gap-2 max-w-md mx-auto">

                        {/* Call Button (Left) */}
                        <a
                            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                            className="flex flex-col items-center justify-center w-16 h-14 rounded-xl hover:bg-white/5 transition-colors text-white/80"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <span className="text-[10px] mt-1 font-medium">Ara</span>
                        </a>

                        {/* Appointment Button (Center - Prominent) */}
                        <Link
                            href={SITE_CONFIG.social.whatsapp}
                            className="flex-1 bg-[var(--color-primary)] text-black font-bold text-sm uppercase tracking-wider h-12 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-transform"
                        >
                            Randevu Al
                        </Link>

                        {/* WhatsApp Button (Right) */}
                        <Link
                            href={SITE_CONFIG.social.whatsapp}
                            className="flex flex-col items-center justify-center w-16 h-14 rounded-xl hover:bg-white/5 transition-colors text-white/80"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            <span className="text-[10px] mt-1 font-medium">WhatsApp</span>
                        </Link>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
