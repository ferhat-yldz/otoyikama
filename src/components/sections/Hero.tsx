import { SITE_CONFIG } from '@/constants';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg)] via-[var(--color-bg-secondary)] to-[var(--color-bg)]" />

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px),
                                         linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Content */}
            <div className="container relative z-10 pt-36">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-8 animate-fade-in">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                        <span className="text-sm text-[var(--color-primary)] font-medium">
                            {SITE_CONFIG.contact.city}&apos;nın Güvenilir Oto Yıkama Merkezi
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <span className="text-[var(--color-text-primary)]">Aracınız</span>
                        <br />
                        <span className="gradient-text">İlk Günkü Gibi</span>
                        <br />
                        <span className="text-[var(--color-text-primary)]">Parlasın</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Profesyonel ekibimiz ve özel ekipmanlarımızla aracınıza hak ettiği bakımı sunuyoruz.
                        <span className="text-[var(--color-primary)]"> Detaylı temizlik, pasta cila ve seramik kaplama</span> hizmetleri.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <a
                            href={SITE_CONFIG.social.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary text-lg px-8 py-4 glow"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Hemen Randevu Al
                        </a>
                        <a
                            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                            className="btn text-lg px-8 py-4 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                            style={{
                                color: 'white',
                                border: '2px solid rgba(255, 255, 255, 0.5)',
                                background: 'transparent'
                            }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {SITE_CONFIG.contact.phone}
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">10+</div>
                            <div className="text-sm text-[var(--color-text-muted)]">Yıllık Deneyim</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">5000+</div>
                            <div className="text-sm text-[var(--color-text-muted)]">Mutlu Müşteri</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">8+</div>
                            <div className="text-sm text-[var(--color-text-muted)]">Farklı Hizmet</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-1">%100</div>
                            <div className="text-sm text-[var(--color-text-muted)]">Memnuniyet</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
