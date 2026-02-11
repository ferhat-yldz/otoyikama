'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, SERVICES } from '@/constants';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-[var(--color-border)] pt-32 pb-16">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
                    {/* Brand & Map (Span 4) */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-flex items-center gap-0 mb-2">
                            {/* Logo Icon (B) */}
                            <div className="relative w-[45px] h-[45px] lg:w-[130px] lg:h-[130px]">
                                <Image
                                    src="/images/LOGO.png"
                                    alt={SITE_CONFIG.name}
                                    fill
                                    className="object-contain opacity-90"
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
                        <p className="text-[var(--color-text-secondary)] text-sm font-light leading-relaxed max-w-sm">
                            {SITE_CONFIG.description}
                        </p>

                        {/* Minimal Map Link */}
                        <a
                            href={SITE_CONFIG.maps.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors border-b border-transparent hover:border-[var(--color-primary)] pb-1"
                        >
                            Haritada Göster &rarr;
                        </a>
                    </div>

                    {/* Navigation Columns (Span 8) */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-primary)] mb-8">
                                Kurumsal
                            </h4>
                            <ul className="space-y-4">
                                {[
                                    { label: 'Anasayfa', href: '/' },
                                    { label: 'Hakkımızda', href: '/hakkimizda' },
                                    { label: 'Galeri', href: '/galeri' },
                                    { label: 'İletişim', href: '/iletisim' },
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-light"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-primary)] mb-8">
                                Hizmetler
                            </h4>
                            <ul className="space-y-4">
                                {SERVICES.slice(0, 5).map((service) => (
                                    <li key={service.id}>
                                        <Link
                                            href={`/hizmetlerimiz/${service.id}`}
                                            className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-light"
                                        >
                                            {service.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-primary)] mb-8">
                                İletişim
                            </h4>
                            <ul className="space-y-6">
                                <li>
                                    <span className="block text-xs text-[var(--color-text-muted)] mb-1">Adres</span>
                                    <span className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed block">
                                        {SITE_CONFIG.contact.address}
                                    </span>
                                </li>
                                <li>
                                    <span className="block text-xs text-[var(--color-text-muted)] mb-1">Telefon</span>
                                    <a
                                        href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors font-light"
                                    >
                                        {SITE_CONFIG.contact.phone}
                                    </a>
                                </li>
                                <li>
                                    <span className="block text-xs text-[var(--color-text-muted)] mb-1">E-posta</span>
                                    <span className="text-sm text-[var(--color-text-secondary)] font-light">
                                        {SITE_CONFIG.contact.email}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-[var(--color-text-muted)] font-light text-center md:text-left">
                        &copy; {currentYear} {SITE_CONFIG.name}. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/kvkk" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors font-light">
                            KVKK
                        </Link>
                        <Link href="/gizlilik" className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors font-light">
                            Gizlilik
                        </Link>
                    </div>
                </div>

                {/* Company Credit */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] text-[var(--color-text-muted)] font-light opacity-50 uppercase tracking-[0.2em]">
                        WebSite : Betsan Yazılım Teknoloji Mühendislik San. Ve Tic. Ltd. Şti
                    </p>
                </div>
            </div>
        </footer>
    );
}
