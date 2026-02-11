'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG, SERVICES } from '@/constants';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

import { headerStore } from '@/lib/headerStore';

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [forceHidden, setForceHidden] = useState(false);

    // Subscribe to headerStore for forced hiding (e.g. in StackedServices)
    useEffect(() => {
        const unsubscribe = headerStore.subscribe(({ isHidden }) => {
            setForceHidden(isHidden);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // Auto-hide header on scroll down
    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            const previous = scrollY.getPrevious() ?? 0;
            // Hide if scrolling down and past 100px. Show if scrolling up.
            if (latest > previous && latest > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        });
        return () => unsubscribe();
    }, [scrollY]);

    // Derived visibility state
    const isVisible = !forceHidden && !hidden;

    // Scroll Effects
    const headerBg = useTransform(
        scrollY,
        [0, 100],
        ["rgba(15, 17, 21, 0)", "rgba(15, 17, 21, 0.9)"]
    );


    const headerBorder = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
    );

    const headerPadding = useTransform(
        scrollY,
        [0, 100],
        ["2rem", "1rem"]
    );

    const backdropBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    }, [isMobileMenuOpen]);

    const navLinks = [
        { label: 'Anasayfa', href: '/' },
        { label: 'Hakkımızda', href: '/hakkimizda' },
        { label: 'Hizmetlerimiz', href: '/hizmetlerimiz', megaMenu: true },
        { label: 'Galeri', href: '/galeri' },
        { label: 'İletişim', href: '/iletisim' },
    ];

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: '-100%' },
                }}
                animate={!isVisible ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{
                    backgroundColor: headerBg,
                    borderBottomColor: headerBorder,
                    borderBottomWidth: 1,
                    paddingTop: headerPadding,
                    paddingBottom: headerPadding,
                    backdropFilter: backdropBlur,
                }}
                className="fixed top-0 left-0 right-0 z-50 border-transparent transition-colors"
            >
                <div className="container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-0">
                        {/* Logo Icon (B) */}
                        <div className="relative w-[45px] h-[45px] lg:w-[130px] lg:h-[130px]">
                            <Image
                                src="/images/LOGO.png"
                                alt={SITE_CONFIG.name}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Text */}
                        <div className="flex flex-col -ml-1 lg:-ml-3 justify-center">
                            <span className="text-4xl lg:text-[4rem] font-serif font-bold text-white leading-[0.8]">
                                etsan
                            </span>
                            <span className="text-[0.6rem] lg:text-[0.9rem] tracking-[0.3em] text-[var(--color-primary)] uppercase font-sans font-bold pl-0.5 lg:pl-1.5 leading-none">
                                Oto Yıkama
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.href}
                                className="relative group h-full flex items-center"
                                onMouseEnter={() => link.megaMenu && setActiveDropdown('services')}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-xs font-bold tracking-[0.15em] uppercase transition-colors duration-300 py-4",
                                        pathname === link.href ? "text-[var(--color-primary)]" : "text-[var(--color-text-secondary)] hover:text-white"
                                    )}
                                >
                                    {link.label}
                                </Link>

                                {/* Active Indicator */}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="activeNavIndicator"
                                        className="absolute bottom-0 left-0 right-0 h-px bg-[var(--color-primary)]"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}

                                {/* Mega Menu */}
                                {link.megaMenu && (
                                    <AnimatePresence>
                                        {activeDropdown === 'services' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[800px]"
                                            >
                                                <div className="bg-[#0F1115] border border-[var(--color-border)] rounded-sm shadow-2xl p-8 relative overflow-hidden">
                                                    {/* Decorative Line */}
                                                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50" />

                                                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                                                        {SERVICES.map((service) => (
                                                            <Link
                                                                key={service.id}
                                                                href={`/hizmetlerimiz/${service.id}`}
                                                                className="group/item flex items-start gap-4 p-2 transition-all hover:translate-x-1"
                                                            >
                                                                <span className="text-[var(--color-primary)] opacity-50 text-xl group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">
                                                                    ✦
                                                                </span>
                                                                <div>
                                                                    <h4 className="font-serif text-base text-[var(--color-text-primary)] group-hover/item:text-[var(--color-primary)] transition-colors">
                                                                        {service.title}
                                                                    </h4>
                                                                    <p className="text-xs text-[var(--color-text-muted)] mt-1 line-clamp-1 font-sans">
                                                                        {service.shortDescription}
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex justify-between items-center">
                                                        <span className="text-xs text-[var(--color-text-muted)] tracking-wider">
                                                            PREMIUM ARAÇ BAKIM HİZMETLERİ
                                                        </span>
                                                        <Link href="/hizmetlerimiz" className="text-xs font-bold text-[var(--color-primary)] tracking-widest uppercase hover:text-white transition-colors">
                                                            TÜM HİZMETLERİ GÖR &rarr;
                                                        </Link>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        <a
                            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                            className="text-xs font-bold tracking-widest text-white hover:text-[var(--color-primary)] transition-colors"
                        >
                            {SITE_CONFIG.contact.phone}
                        </a>
                        <Link
                            href={SITE_CONFIG.social.whatsapp}
                            className="btn btn-outline py-2 px-6 text-xs"
                        >
                            RANDEVU AL
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-white relative z-50 group"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="w-8 h-[14px] flex flex-col justify-between items-end">
                            <span className={cn("w-full h-[1px] bg-current transition-all duration-300", isMobileMenuOpen && "rotate-45 translate-y-[6px]")} />
                            <span className={cn("w-2/3 h-[1px] bg-current transition-all duration-300 group-hover:w-full", isMobileMenuOpen && "opacity-0")} />
                            <span className={cn("w-full h-[1px] bg-current transition-all duration-300", isMobileMenuOpen && "-rotate-45 -translate-y-[7px]")} />
                        </div>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay - Moved outside header to escape transform context */}
            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-black z-[9999] lg:hidden flex flex-col items-center justify-center text-white h-[100dvh] overscroll-none touch-none"
                    >
                        {/* Mobile Menu Header (Close Button) */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="relative w-[40px] h-[40px]">
                                <Image
                                    src="/images/LOGO.png"
                                    alt={SITE_CONFIG.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 pointer-events-auto"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="w-full flex-1 flex flex-col justify-start items-center gap-8 pt-32 pb-32 px-6 overflow-y-auto no-scrollbar z-[900]">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}

                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-3xl md:text-4xl font-serif italic transition-colors block w-full py-2 pointer-events-auto",
                                            pathname === link.href ? "text-[var(--color-primary)]" : "text-white hover:text-[var(--color-primary)]"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Menu Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute bottom-0 left-0 right-0 p-8 border-t border-white/10 bg-black/80 backdrop-blur-sm z-[1000]"
                        >
                            <div className="flex flex-col gap-4">
                                <Link
                                    href={SITE_CONFIG.social.whatsapp}
                                    className="w-full py-4 bg-[var(--color-primary)] text-black text-center text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors rounded-sm"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Hemen Randevu Al
                                </Link>
                                <div className="text-center text-white/40 text-xs tracking-widest uppercase mt-2">
                                    {SITE_CONFIG.contact.phone}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
