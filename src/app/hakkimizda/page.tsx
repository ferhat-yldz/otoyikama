import { Metadata } from 'next';
import Image from 'next/image';
import { Header, Footer } from '@/components/layout';
import { WhatsAppButton } from '@/components/ui';
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
            <main>
                {/* Hero Section */}
                <section className="page-hero">
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
                <section className="section">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section bg-[var(--color-bg-secondary)]">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                                Değerlerimiz
                            </h2>
                            <p className="text-[var(--color-text-secondary)]">
                                İşimizi yaparken bizi yönlendiren temel değerlerimiz
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="card p-6 text-center">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-text-muted)]">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section">
                    <div className="container">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-[var(--color-text-muted)]">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]">
                    <div className="container">
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Aracınız İçin En İyisini Sunuyoruz
                            </h2>
                            <p className="text-white/80 mb-8">
                                Profesyonel ekibimizle tanışın ve aracınıza hak ettiği bakımı sağlayın.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href={SITE_CONFIG.social.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100"
                                >
                                    Randevu Al
                                </a>
                                <a
                                    href="/iletisim"
                                    className="btn bg-transparent border-2 border-white hover:bg-white hover:text-[var(--color-primary)]"
                                    style={{ color: 'white' }}
                                >
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
