'use client';

import { ScrollAnimation } from '@/components/ui';

const FEATURES = [
    {
        title: "Uzman Kadro",
        description: "Sertifikalı ve deneyimli profesyonellerden oluşan elit ekip.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        )
    },
    {
        title: "Premium Ürünler",
        description: "Dünya standartlarında, boya dostu üst segment bakım ürünleri.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        title: "%100 Memnuniyet",
        description: "Koşulsuz müşteri memnuniyeti ve uygulama garantisi.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Zamanında Teslim",
        description: "Randevunuza sadık kalarak, en değerli varlığınız zamanı koruyoruz.",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

export function Features() {
    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {FEATURES.map((feature, index) => (
                        <ScrollAnimation key={index} animation="fade-up" delay={index}>
                            <div className="group text-center">
                                <div className="w-20 h-20 mx-auto rounded-full bg-black border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] group-hover:border-[var(--color-primary)] transition-all duration-500 mb-8">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-serif text-[var(--color-text-primary)] mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] font-light leading-relaxed px-4">
                                    {feature.description}
                                </p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
