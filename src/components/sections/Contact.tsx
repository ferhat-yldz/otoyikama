import { SITE_CONFIG } from '@/constants';

export function Contact() {
    return (
        <section className="section bg-[var(--color-bg)]" id="iletisim">
            <div className="container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
                        İletişim
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                        Bize <span className="gradient-text">Ulaşın</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)]">
                        Randevu almak veya hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="space-y-6 mb-8">
                            {/* Address */}
                            <a
                                href={SITE_CONFIG.maps.directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Adres</h4>
                                    <p className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors">{SITE_CONFIG.contact.address}</p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                                className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] flex-shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">Telefon</h4>
                                    <p className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors">
                                        {SITE_CONFIG.contact.phone}
                                    </p>
                                </div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href={SITE_CONFIG.social.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-whatsapp)]/10 border border-[var(--color-whatsapp)]/20 hover:bg-[var(--color-whatsapp)]/20 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-whatsapp)] flex items-center justify-center text-white flex-shrink-0">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">WhatsApp</h4>
                                    <p className="text-[var(--color-text-muted)]">
                                        Hızlı iletişim için WhatsApp&apos;tan yazın
                                    </p>
                                </div>
                            </a>

                            {/* Working Hours */}
                            <div className="flex items-start gap-4 p-6 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]">
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-[var(--color-text-primary)] mb-2">Çalışma Saatleri</h4>
                                    <div className="space-y-1 text-sm text-[var(--color-text-muted)]">
                                        <p>Pazartesi - Cumartesi: {SITE_CONFIG.workingHours.weekdays}</p>
                                        <p>Pazar: {SITE_CONFIG.workingHours.sunday}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] h-[500px]">
                        <iframe
                            src={SITE_CONFIG.maps.embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="BETSAN OTO YIKAMA Konum"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
