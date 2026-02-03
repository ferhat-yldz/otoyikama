'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_CONFIG } from '@/constants';

// Navigasyon linkleri
const navLinks = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    {
        label: 'Hizmetlerimiz',
        href: '/hizmetlerimiz',
        children: [
            { label: 'Normal İç Dış Yıkama', href: '/hizmetlerimiz/normal-ic-dis-yikama' },
            { label: 'VIP Yıkama', href: '/hizmetlerimiz/vip-yikama' },
            { label: 'Full Detay Temizlik', href: '/hizmetlerimiz/full-detay-temizlik' },
            { label: 'Pasta Cila', href: '/hizmetlerimiz/pasta-cila' },
            { label: 'Seramik Kaplama', href: '/hizmetlerimiz/seramik-kaplama' },
            { label: 'Koltuk Temizleme', href: '/hizmetlerimiz/koltuk-temizleme' },
        ],
    },
    { label: 'Galeri', href: '/galeri' },
    { label: 'İletişim', href: '/iletisim' },
];

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

    // Aktif sayfa kontrolü
    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    // Scroll dinleyicisi
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobil menü açıkken scroll'u engelle
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                padding: isScrolled ? 'var(--header-padding-scrolled) 0' : 'var(--header-padding) 0',
                backgroundColor: isScrolled ? 'var(--header-bg)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                boxShadow: isScrolled ? 'var(--header-shadow)' : 'none',
            }}
        >
            <div className="container">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
                        <div className="relative w-[140px] h-[48px] sm:w-[180px] sm:h-[60px] group-hover:scale-105 transition-transform">
                            <Image
                                src="/images/LOGO.png"
                                alt={SITE_CONFIG.name}
                                fill
                                sizes="180px"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-4">
                        {navLinks.map(link => (
                            <div
                                key={link.href}
                                className="relative"
                                onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={`px-4 py-2.5 rounded-lg transition-all font-medium text-sm xl:text-base whitespace-nowrap ${isActive(link.href)
                                        ? 'bg-[var(--color-nav-active)] font-bold shadow-lg'
                                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-secondary)]'
                                        }`}
                                    style={isActive(link.href) ? { color: 'var(--color-nav-active-text)' } : {}}
                                >
                                    {link.label}
                                    {link.children && (
                                        <svg
                                            className="inline-block ml-1 w-3.5 h-3.5 xl:w-4 xl:h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.children && activeDropdown === link.href && (
                                    <div className="absolute top-full left-0 mt-2 w-64 bg-[var(--color-bg-secondary)] rounded-xl shadow-xl border border-[var(--color-border)] overflow-hidden animate-fade-in">
                                        {link.children.map(child => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-3 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-tertiary)] transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons - Desktop */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
                        <a
                            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                            className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span className="font-medium text-sm xl:text-base whitespace-nowrap">{SITE_CONFIG.contact.phone}</span>
                        </a>
                        <a
                            href={SITE_CONFIG.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary text-sm xl:text-base px-4 xl:px-6 py-2.5"
                        >
                            Randevu Al
                        </a>
                    </div>

                    {/* Mobile Phone & Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        {/* Mobile Phone */}
                        <a
                            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--color-bg-secondary)]/80 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <span className="font-medium text-sm">{SITE_CONFIG.contact.phone}</span>
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            className="p-2.5 text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Menü"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/50 z-[55]"
                    style={{ top: 'calc(var(--header-padding) * 2 + 48px)' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Panel - Header altından açılır */}
            <div
                className={`lg:hidden absolute left-4 right-4 bg-[var(--color-bg)] z-[60] transform transition-all duration-300 ease-out shadow-1xl border border-[var(--color-border)] rounded-2xl overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                style={{ top: 'calc(100% + 8px)' }}
            >
                {/* Mobile Menu Content */}
                <div className="p-4 overflow-y-auto max-h-[calc(80vh-2rem)]">
                    {/* Navigation Links */}
                    <nav className="space-y-1 mb-6">
                        {navLinks.map(link => (
                            <div key={link.href}>
                                {link.children ? (
                                    // Alt menüsü olan linkler için button kullan
                                    <>
                                        <button
                                            className={`flex items-center justify-between w-full py-3 px-4 rounded-lg transition-all font-medium ${isActive(link.href)
                                                ? 'bg-[var(--color-nav-active)] font-bold'
                                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-secondary)]'
                                                }`}
                                            style={isActive(link.href) ? { color: 'var(--color-nav-active-text)' } : {}}
                                            onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === link.href ? null : link.href)}
                                        >
                                            {link.label}
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenuOpen === link.href ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {/* Alt menü - Accordion */}
                                        <div className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === link.href ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="pl-4 mt-1 space-y-1 border-l-2 border-[var(--color-border)] ml-3">
                                                {link.children.map(child => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className="block py-2.5 px-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-secondary)] rounded-lg transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    // Normal linkler
                                    <Link
                                        href={link.href}
                                        className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all font-medium ${isActive(link.href)
                                            ? 'bg-[var(--color-nav-active)] font-bold'
                                            : 'text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-secondary)]'
                                            }`}
                                        style={isActive(link.href) ? { color: 'var(--color-nav-active-text)' } : {}}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="border-t border-[var(--color-border)] my-4" />

                    {/* Contact & CTA */}
                    <div className="grid grid-cols-2 gap-3">
                        <a
                            href={SITE_CONFIG.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp justify-center py-3 text-sm"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>
                        <a
                            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                            className="btn btn-primary justify-center py-3 text-sm"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Ara
                        </a>
                    </div>

                    {/* Working Hours */}
                    <div className="mt-4 p-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                                <svg className="w-4 h-4 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Pzt-Cmt: {SITE_CONFIG.workingHours.weekdays}</span>
                            </div>
                            <span className="text-[var(--color-text-muted)]">Pazar: {SITE_CONFIG.workingHours.sunday}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
