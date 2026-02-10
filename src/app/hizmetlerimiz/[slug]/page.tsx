import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { WhatsAppButton } from '@/components/ui';
import { SITE_CONFIG, SERVICES } from '@/constants';

// Hizmet detayları (CMS'e taşınacak)
const serviceDetails: Record<string, {
    description: string;
    features: string[];
    process: string[];
    duration: string;
    price: string;
}> = {
    'normal-ic-dis-yikama': {
        description: 'Aracınızın hem dış yüzeyinin hem de iç mekanının profesyonel ekibimiz tarafından detaylı şekilde temizlenmesi işlemidir. Bu işlem, aracın estetik görünümünü korumasının yanı sıra, uzun ömürlü olmasına da katkı sağlar.',
        features: [
            'Dış yüzey köpüklü yıkama',
            'Jant ve lastik temizliği',
            'İç mekan vakumlama',
            'Torpido ve konsol silme',
            'Cam temizliği',
            'Paspas yıkama',
            'Plastik aksam parlatma',
            'Koku giderme',
        ],
        process: [
            'Ön yıkama ile yüzey tozlarının temizlenmesi',
            'Köpüklü yıkama uygulaması',
            'Jant ve lastik detay temizliği',
            'Durulama ve kurulama',
            'İç mekan vakumlama',
            'Yüzey silme ve parlatma',
        ],
        duration: '45-60 dakika',
        price: '₺200 - ₺300',
    },
    'vip-yikama': {
        description: 'Standart iç-dış yıkamadan çok daha kapsamlı ve detaylı bir araç temizlik hizmetidir. Özel ekipmanlar ve premium ürünlerle aracınızın her detayına özen gösterilir.',
        features: [
            'Premium köpüklü dış yıkama',
            'Detaylı jant temizliği',
            'Motor bölümü temizliği',
            'Derin iç mekan temizliği',
            'Deri bakım uygulaması',
            'Cam su kaydırıcı',
            'Lastik parlatma',
            'Araç parfümü',
        ],
        process: [
            'Detaylı ön inceleme',
            'Premium köpük uygulaması',
            'El yıkama ile detaylı temizlik',
            'Motor bölümü temizliği',
            'İç mekan derin temizlik',
            'Deri ve plastik bakım',
            'Final kontrol ve parfüm',
        ],
        duration: '90-120 dakika',
        price: '₺400 - ₺600',
    },
    'full-detay-temizlik': {
        description: 'Aracınızın hem iç hem de dış kısmının en kapsamlı şekilde temizlenmesi, yenilenmesi ve korunmasını içeren profesyonel hizmettir. Her santimetreye özel ilgi gösterilir.',
        features: [
            'Tam dış detay temizlik',
            'Kil uygulaması',
            'Tek aşama polisaj',
            'Seramik koruma spreyi',
            'Tam iç detay temizlik',
            'Koltuk şampuanlama',
            'Tavan temizliği',
            'Bagaj temizliği',
        ],
        process: [
            'Kapsamlı durum değerlendirmesi',
            'Dış yüzey dekontaminasyon',
            'Kil uygulaması',
            'Polisaj işlemi',
            'Koruma uygulaması',
            'İç mekan derin temizlik',
            'Koltuk ve döşeme şampuanlama',
            'Final detay ve kontrol',
        ],
        duration: '4-6 saat',
        price: '₺1500 - ₺2500',
    },
    'pasta-cila': {
        description: 'Araç boyasını yenilemek, parlaklık kazandırmak ve korumak için yapılan profesyonel işlemdir. Çizikleri giderir ve boyaya yeni bir görünüm kazandırır.',
        features: [
            'Boya yüzey analizi',
            'Dekontaminasyon',
            'Çok aşamalı polisaj',
            'İnce çizik giderme',
            'Swirl mark düzeltme',
            'Boya koruma',
            'Yüksek parlaklık',
            'UV koruma',
        ],
        process: [
            'Boya durumu incelemesi',
            'Yıkama ve kurulama',
            'Kil uygulaması',
            'Pasta ile çizik giderme',
            'Cila ile parlaklık',
            'Wax ile koruma',
        ],
        duration: '3-5 saat',
        price: '₺1000 - ₺2000',
    },
    'seramik-kaplama': {
        description: 'Nano teknoloji ile aracınızın boyasını uzun süreli koruma altına alan, parlaklık kazandıran ve dış etkenlere karşı dayanıklı hale getiren profesyonel uygulamadır.',
        features: [
            '9H sertlik koruması',
            'Hidrofobik etki',
            'UV ışın koruması',
            'Kimyasal direnç',
            'Çizilmeye dayanıklılık',
            '2-5 yıl koruma',
            'Kolay temizlenebilirlik',
            'Derin parlaklık',
        ],
        process: [
            'Detaylı yüzey hazırlığı',
            'Dekontaminasyon',
            'Polisaj ile yüzey düzeltme',
            'IPA ile yağ giderme',
            'Seramik kaplama uygulaması',
            '24 saat kürleme süresi',
        ],
        duration: '1-2 gün',
        price: '₺3000 - ₺8000',
    },
    'koltuk-temizleme': {
        description: 'Araç koltuklarındaki kir, leke, toz ve kötü kokuları profesyonel temizlik ürünleri ve ekipmanları ile gideriyoruz. Kumaş ve deri koltuklar için özel uygulamalar sunuyoruz.',
        features: [
            'Kumaş koltuk şampuanlama',
            'Deri koltuk temizliği',
            'Deri nemlendirme',
            'Leke çıkarma',
            'Koku giderme',
            'Antibakteriyel uygulama',
            'Hızlı kuruma',
            'Renk canlandırma',
        ],
        process: [
            'Koltuk tipi belirleme',
            'Vakumlama',
            'Uygun temizleyici seçimi',
            'Şampuanlama/temizlik',
            'Durulama',
            'Kurutma',
            'Bakım ürünü uygulama',
        ],
        duration: '2-3 saat',
        price: '₺500 - ₺1000',
    },
    'motor-yikama': {
        description: 'Motor bölümünün güvenli ve detaylı temizliğidir. Özel ürünler ve dikkatli uygulama ile motor performansını etkilemeden temizlik sağlanır.',
        features: [
            'Güvenli temizlik',
            'Yağ ve kir giderme',
            'Plastik aksam parlatma',
            'Koruma spreyi',
            'Görsel yenileme',
            'Sızıntı tespiti kolaylığı',
        ],
        process: [
            'Motor soğutma',
            'Hassas noktaların korunması',
            'Temizleyici uygulama',
            'Fırçalama',
            'Durulama',
            'Kurulama ve parlatma',
        ],
        duration: '30-45 dakika',
        price: '₺200 - ₺350',
    },
    'jant-temizligi': {
        description: 'Araç jantlarını fren tozu, kir, yağ, zift ve pas gibi birikintilerden arındırmak için yapılan profesyonel bakım işlemidir.',
        features: [
            'Fren tozu temizliği',
            'Demir tozu giderme',
            'Zift temizliği',
            'Jant parlatma',
            'Lastik parlatma',
            'Koruma uygulaması',
        ],
        process: [
            'Jant yüzey analizi',
            'Özel temizleyici uygulama',
            'Fırçalama',
            'Durulama',
            'Kurulama',
            'Parlatıcı uygulama',
        ],
        duration: '30-45 dakika',
        price: '₺150 - ₺250',
    },
    'far-temizligi': {
        description: 'Matlaşmış, sararmış ve ışık geçirgenliğini kaybetmiş farlarınızın profesyonel yöntemlerle yenilenmesi ve parlatılması işlemidir. Gece sürüş güvenliğiniz için önemlidir.',
        features: [
            'Matlık giderme',
            'Sarılık temizliği',
            'Çizik giderme',
            'Parlaklık kazandırma',
            'UV koruma uygulaması',
            'Uzun süreli netlik',
        ],
        process: [
            'Far yüzey analizi',
            'Zımpara ile yüzey düzeltme',
            'Polisaj uygulaması',
            'İnce çizik giderme',
            'UV koruyucu uygulama',
            'Final kontrol',
        ],
        duration: '45-60 dakika',
        price: '₺200 - ₺400',
    },
    'klima-temizligi': {
        description: 'Araç klima sisteminin dezenfekte edilmesi, bakteri ve küf oluşumunun önlenmesi, kötü kokuların giderilmesi için yapılan profesyonel bakım işlemidir.',
        features: [
            'Klima dezenfeksiyonu',
            'Bakteri giderme',
            'Küf önleme',
            'Koku giderme',
            'Polen filtresi kontrolü',
            'Sağlıklı hava akışı',
        ],
        process: [
            'Klima sistemi kontrolü',
            'Filtre kontrolü/değişimi',
            'Evaporatör temizliği',
            'Dezenfektan uygulama',
            'Koku giderici uygulama',
            'Sistem test ve kontrol',
        ],
        duration: '30-45 dakika',
        price: '₺150 - ₺300',
    },
    'arac-alti-yikama': {
        description: 'Araç alt aksamının, şasinin tuz, çamur, kir ve korozif maddelerden arındırılması işlemidir. Özellikle kış aylarında tuz hasarını önlemek için önemlidir.',
        features: [
            'Şasi temizliği',
            'Tuz giderme',
            'Çamur temizliği',
            'Pas önleme',
            'Koruma uygulaması',
            'Uzun ömürlü koruma',
        ],
        process: [
            'Araç kaldırma',
            'Ön yıkama',
            'Basınçlı yıkama',
            'Detay temizlik',
            'Koruyucu uygulama',
            'Kontrol ve indirme',
        ],
        duration: '30-45 dakika',
        price: '₺100 - ₺200',
    },
    'cam-kirec-lekesi-temizligi': {
        description: 'Araç camlarındaki inatçı kireç lekeleri, su izleri ve mineral birikintilerinin profesyonel ürünlerle temizlenmesi işlemidir. Net görüş için önemlidir.',
        features: [
            'Kireç lekesi giderme',
            'Su izi temizliği',
            'Mineral çözme',
            'Cam parlatma',
            'Su kaydırıcı uygulama',
            'Kristal netlik',
        ],
        process: [
            'Cam yüzey analizi',
            'Özel kireç çözücü uygulama',
            'Bekleme süresi',
            'Mekanik temizlik',
            'Durulama',
            'Su kaydırıcı uygulama',
        ],
        duration: '30-45 dakika',
        price: '₺100 - ₺200',
    },
    'zift-temizligi': {
        description: 'Araç boyası üzerindeki zift, asfalt kalıntıları ve yapışkan maddelerin boyaya zarar vermeden profesyonelce temizlenmesi işlemidir.',
        features: [
            'Zift çözme',
            'Asfalt kalıntısı giderme',
            'Yapışkan temizliği',
            'Boya koruma',
            'Yüzey parlatma',
            'Koruma uygulaması',
        ],
        process: [
            'Zift noktalarının tespiti',
            'Özel zift çözücü uygulama',
            'Bekleme süresi',
            'Yumuşak temizleme',
            'Yüzey kontrolü',
            'Parlatma ve koruma',
        ],
        duration: '30-60 dakika',
        price: '₺150 - ₺300',
    },
};

// Static params for SSG
export async function generateStaticParams() {
    return SERVICES.map(service => ({
        slug: service.id,
    }));
}

// Dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICES.find(s => s.id === slug);

    if (!service) {
        return {
            title: 'Hizmet Bulunamadı',
        };
    }

    return {
        title: service.title,
        description: `${SITE_CONFIG.name} - ${service.title}: ${service.shortDescription}`,
    };
}

export default async function HizmetDetayPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES.find(s => s.id === slug);
    const details = serviceDetails[slug];

    if (!service || !details) {
        notFound();
    }

    // Diğer hizmetler
    const otherServices = SERVICES.filter(s => s.id !== slug).slice(0, 3);

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="page-hero">
                    <div className="container">
                        {/* Breadcrumb */}
                        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8">
                            <Link href="/" className="hover:text-[var(--color-primary)]">Anasayfa</Link>
                            <span>/</span>
                            <Link href="/hizmetlerimiz" className="hover:text-[var(--color-primary)]">Hizmetlerimiz</Link>
                            <span>/</span>
                            <span className="text-[var(--color-text-primary)]">{service.title}</span>
                        </nav>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-primary)]/5 flex items-center justify-center text-5xl mb-6">
                                    {service.icon}
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6">
                                    {service.title}
                                </h1>
                                <p className="text-lg text-[var(--color-text-secondary)] mb-8">
                                    {details.description}
                                </p>

                                {/* Quick Info */}
                                <div className="flex flex-wrap gap-4 mb-8">
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-bg-tertiary)]">
                                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-sm text-[var(--color-text-secondary)]">{details.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-secondary)]/10">
                                        <span className="text-sm font-semibold text-[var(--color-secondary)]">{details.price}</span>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={`${SITE_CONFIG.social.whatsapp}?text=${encodeURIComponent(`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Randevu Al
                                    </a>
                                    <a href={`tel:${SITE_CONFIG.contact.phoneRaw}`} className="btn btn-outline">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        Hemen Ara
                                    </a>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] flex items-center justify-center">
                                    <div className="text-8xl">{service.icon}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features & Process */}
                <section className="section">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Features */}
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                                    Hizmet Özellikleri
                                </h2>
                                <div className="space-y-3">
                                    {details.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)]"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-[var(--color-text-secondary)]">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Process */}
                            <div>
                                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
                                    Uygulama Süreci
                                </h2>
                                <div className="space-y-4">
                                    {details.process.map((step, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white font-bold flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 pt-2">
                                                <p className="text-[var(--color-text-secondary)]">{step}</p>
                                                {index < details.process.length - 1 && (
                                                    <div className="w-0.5 h-6 bg-[var(--color-border)] ml-4 mt-2" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Services */}
                <section className="section bg-[var(--color-bg-secondary)]">
                    <div className="container">
                        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-8 text-center">
                            Diğer Hizmetlerimiz
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {otherServices.map(otherService => (
                                <Link
                                    key={otherService.id}
                                    href={`/hizmetlerimiz/${otherService.id}`}
                                    className="card p-6 group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-2xl mb-4">
                                        {otherService.icon}
                                    </div>
                                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-sm text-[var(--color-text-muted)]">
                                        {otherService.shortDescription}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
