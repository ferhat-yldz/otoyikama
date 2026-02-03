import { Metadata } from 'next';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { WhatsAppButton } from '@/components/ui';
import { SITE_CONFIG, SERVICES } from '@/constants';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz',
    description: `${SITE_CONFIG.name} olarak sunduğumuz profesyonel oto yıkama hizmetleri. İç dış yıkama, VIP yıkama, pasta cila, seramik kaplama ve daha fazlası.`,
};

export default function HizmetlerimizPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                                Profesyonel Araç Bakım <span className="gradient-text">Hizmetleri</span>
                            </h1>
                            <p className="text-lg text-[var(--color-text-secondary)]">
                                Uzman kadromuz ve premium ürünlerimizle aracınıza hak ettiği bakımı sunuyoruz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section">
                    <div className="container">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {SERVICES.map((service, index) => (
                                <Link
                                    key={service.id}
                                    href={`/hizmetlerimiz/${service.id}`}
                                    className="card p-8 group"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Icon */}
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                        {service.title}
                                    </h2>
                                    <p className="text-[var(--color-text-muted)] mb-6">
                                        {service.shortDescription}
                                    </p>

                                    {/* Arrow */}
                                    <div className="flex items-center text-[var(--color-primary)] font-medium">
                                        <span>Detaylı Bilgi</span>
                                        <svg
                                            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Aracınız İçin En İyi Bakımı Sunuyoruz
                            </h2>
                            <p className="text-white/80 mb-8">
                                Hemen randevu alın, aracınızı ilk günkü parlaklığına kavuşturalım.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={SITE_CONFIG.social.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp ile Randevu
                                </a>
                                <a
                                    href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                                    className="btn bg-white/20 text-white border-2 border-white/30 hover:bg-white/30"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {SITE_CONFIG.contact.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
