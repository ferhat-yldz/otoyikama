import Link from 'next/link';
import { SERVICES } from '@/constants';

export function Services() {
    return (
        <section className="section bg-[var(--color-bg)]" id="hizmetler">
            <div className="container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-4">
                        Hizmetlerimiz
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                        Profesyonel Araç Bakım <span className="gradient-text">Hizmetleri</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)]">
                        Uzman kadromuz ve premium ürünlerimizle aracınıza en iyi bakımı sunuyoruz.
                        Her hizmetimiz titizlikle ve özenle gerçekleştirilir.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <Link
                            key={service.id}
                            href={`/hizmetlerimiz/${service.id}`}
                            className="card p-6 group cursor-pointer"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-[var(--color-text-muted)] mb-4">
                                {service.shortDescription}
                            </p>

                            {/* Arrow */}
                            <div className="flex items-center text-[var(--color-primary)] text-sm font-medium">
                                <span>Detaylı Bilgi</span>
                                <svg
                                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
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

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link href="/hizmetlerimiz" className="btn btn-outline">
                        Tüm Hizmetleri Gör
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
