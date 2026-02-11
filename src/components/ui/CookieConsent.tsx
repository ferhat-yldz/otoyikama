'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // Here you would typically initialize analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out dark:bg-slate-900/95 dark:border-slate-800">
            <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        size daha iyi bir deneyim sunmak için çerezleri (cookies) kullanıyoruz. Sitemizi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
                        Daha fazla bilgi için <Link href="/gizlilik-politikasi" className="text-blue-600 hover:text-blue-700 underline dark:text-blue-400 dark:hover:text-blue-300">Gizlilik Politikamızı</Link> inceleyebilirsiniz.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleDecline}
                        className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
                    >
                        Reddet
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg shadow-blue-500/30 transition-all hover:shadow-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                    >
                        Kabul Et
                    </button>
                </div>
            </div>
        </div>
    );
}
