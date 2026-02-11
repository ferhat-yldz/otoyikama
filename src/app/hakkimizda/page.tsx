import { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { WhatsAppButton, ScrollAnimation } from '@/components/ui';
import { SITE_CONFIG } from '@/constants';

export const metadata: Metadata = {
    title: 'Hakkımızda',
    description: `${SITE_CONFIG.name} hakkında bilgi edinin. ${SITE_CONFIG.contact.city}'da yılların deneyimiyle profesyonel oto yıkama hizmetleri sunuyoruz.`,
};

export default function HakkimizdaPage() {
    const values = [
        {
            icon: '🎯',
            title: 'Kalite Odaklılık',
            description: 'Her işimizde en yüksek kalite standartlarını hedefliyoruz.',
        },
        {
            icon: '🤝',
            title: 'Güvenilirlik',
            description: 'Müşterilerimizle kurduğumuz güven ilişkisi en değerli varlığımızdır.',
        },
        {
            icon: '💡',
            title: 'Yenilikçilik',
            description: 'Sektördeki en son teknoloji ve yöntemleri takip ediyoruz.',
        },
        {
            icon: '♻️',
            title: 'Çevre Bilinci',
            description: 'Çevre dostu ürünler ve sürdürülebilir uygulamalar kullanıyoruz.',
        },
    ];

    const stats = [
        { number: '10+', label: 'Yıllık Deneyim' },
        { number: '5000+', label: 'Mutlu Müşteri' },
        { number: '8+', label: 'Farklı Hizmet' },
        { number: '6', label: 'Uzman Personel' },
    ];

    return (
        <>
            <Header />
            <main className="pt-32 md:pt-40 overflow-x-hidden">
                {/* Hero Section */}
                <section className="page-hero pb-12 md:pb-20">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                                {SITE_CONFIG.contact.city}&apos;nın Güvenilir{' '}
                                <span className="gradient-text">Oto Yıkama</span> Merkezi
                            </h1>
                            <p className="text-lg text-[var(--color-text-secondary)]">
                                Yılların deneyimiyle aracınıza profesyonel bakım hizmetleri sunuyoruz.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="section overflow-hidden">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <ScrollAnimation animation="fade-right">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
                                        Hikayemiz
                                    </h2>
                                    <div className="space-y-4 text-[var(--color-text-secondary)]">
                                        <p>
                                            <strong className="text-[var(--color-text-primary)]">{SITE_CONFIG.name}</strong>,
                                            {SITE_CONFIG.contact.city}&apos;da araç sahiplerine en kaliteli temizlik ve bakım
                                            hizmetlerini sunmak amacıyla kurulmuştur.
                                        </p>
                                        <p>
                                            Yılların getirdiği tecrübe ve deneyimle, sektördeki en son teknolojileri ve
                                            yöntemleri kullanarak müşterilerimize hizmet veriyoruz. Profesyonel ekibimiz,
                                            her aracı kendi aracıymış gibi özenle temizler.
                                        </p>
                                        <p>
                                            Müşteri memnuniyetini her şeyin üstünde tutan anlayışımızla, binlerce araç
                                            sahibinin güvenini kazandık. Amacımız, aracınızı ilk günkü gibi parlak ve
                                            temiz bir şekilde size teslim etmektir.
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                            <ScrollAnimation animation="fade-left" delay={0.2}>
                                <div className="relative">
                                    <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/images/about/foto1.jpg"
                                            alt="Betsan Oto Yıkama - Profesyonel Araç Bakımı"
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    {/* Floating Badge */}
                                    <div className="absolute -bottom-6 -right-6 glass rounded-xl p-6 shadow-xl">
                                        <div className="text-3xl font-bold text-[var(--color-primary)]">10+</div>
                                        <div className="text-sm text-[var(--color-text-muted)]">Yıllık Deneyim</div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section bg-[var(--color-bg-secondary)]">
                    <div className="container">
                        <ScrollAnimation animation="fade-up">
                            <div className="text-center max-w-2xl mx-auto mb-12">
                                <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                                    Değerlerimiz
                                </h2>
                                <p className="text-[var(--color-text-secondary)]">
                                    İşimizi yaparken bizi yönlendiren temel değerlerimiz
                                </p>
                            </div>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                                    <div className="card p-6 text-center">
                                        <div className="text-4xl mb-4">{value.icon}</div>
                                        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                                            {value.title}
                                        </h3>
                                        <p className="text-sm text-[var(--color-text-muted)]">
                                            {value.description}
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section">
                    <div className="container">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                                    <div className="text-center">
                                        <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
                                            {stat.number}
                                        </div>
                                        <div className="text-[var(--color-text-muted)]">{stat.label}</div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                {/* CTA Section */}
                <section className="relative py-24 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/gallery/foto5.jpg" // Using an existing gallery image
                            alt="CTA Background"
                            fill
                            className="object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
                    </div>

                    <div className="container relative z-10">
                        <div className="max-w-3xl mx-auto text-center p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">
                                Aracınız İçin <span className="text-[var(--color-primary)]">En İyisini</span> Seçin
                            </h2>
                            <p className="text-white/70 mb-10 text-lg font-light leading-relaxed">
                                Profesyonel ekibimizle tanışın, aracınıza hak ettiği değeri verin. İlk günkü parlaklığına bizimle kavuşsun.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <a
                                    href={SITE_CONFIG.social.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative px-8 py-4 bg-[var(--color-primary)] text-black font-bold uppercase tracking-widest text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp İle Randevu
                                    </span>
                                </a>
                                <a
                                    href="/iletisim"
                                    className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all hover:bg-white/10 hover:border-white/40 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    İletişime Geç
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
