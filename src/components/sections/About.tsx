import { SITE_CONFIG } from '@/constants';

export function About() {
    const features = [
        {
            icon: '🎯',
            title: 'Profesyonel Ekip',
            description: 'Deneyimli ve eğitimli personelimiz aracınıza en iyi hizmeti sunar.',
        },
        {
            icon: '🧴',
            title: 'Premium Ürünler',
            description: 'Sadece en kaliteli ve araç dostane ürünleri kullanıyoruz.',
        },
        {
            icon: '⚡',
            title: 'Hızlı Servis',
            description: 'Zamanınızın değerli olduğunu biliyoruz, hızlı ve etkili çalışıyoruz.',
        },
        {
            icon: '💯',
            title: '%100 Memnuniyet',
            description: 'Müşteri memnuniyeti bizim için en önemli önceliktir.',
        },
    ];

    return (
        <section className="section bg-[var(--color-bg-secondary)]" id="hakkimizda">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Content */}
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
                            Hakkımızda
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
                            {SITE_CONFIG.contact.city}&apos;da{' '}
                            <span className="gradient-text">Güvenilir</span> Oto Yıkama
                        </h2>
                        <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                            <strong className="text-[var(--color-text-primary)]">{SITE_CONFIG.name}</strong>,
                            {' '}yılların deneyimiyle {SITE_CONFIG.contact.city}&apos;da araç sahiplerine profesyonel
                            temizlik ve bakım hizmetleri sunmaktadır. Modern ekipmanlarımız ve uzman
                            kadromuzla aracınızın her detayına özen gösteriyoruz.
                        </p>
                        <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                            İç dış yıkamadan detaylı temizliğe, pasta ciladan seramik kaplamaya kadar
                            geniş hizmet yelpazemizle aracınızı ilk günkü parlaklığına kavuşturuyoruz.
                        </p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors"
                                >
                                    <span className="text-2xl">{feature.icon}</span>
                                    <div>
                                        <h4 className="font-semibold text-[var(--color-text-primary)] mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-sm text-[var(--color-text-muted)]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Visual */}
                    <div className="relative">
                        {/* Main Card */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]">
                            {/* Placeholder for image - will be replaced with CMS image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <div className="text-6xl mb-4">🚗</div>
                                    <p className="text-lg font-medium opacity-90">
                                        Profesyonel Araç Bakımı
                                    </p>
                                </div>
                            </div>

                            {/* Overlay Pattern */}
                            <div
                                className="absolute inset-0 opacity-10"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: '20px 20px',
                                }}
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 glass rounded-xl p-6 shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-[var(--color-text-primary)]">10+ Yıl</div>
                                    <div className="text-sm text-[var(--color-text-muted)]">Sektör Deneyimi</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 shadow-xl">
                            <div className="flex items-center gap-2">
                                <span className="text-[var(--color-secondary)]">⭐⭐⭐⭐⭐</span>
                                <span className="text-sm font-medium text-[var(--color-text-primary)]">5.0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
