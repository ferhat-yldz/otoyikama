import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { WhatsAppButton } from '@/components/ui';
import NextImage from 'next/image';
import { SITE_CONFIG, SERVICES } from '@/constants';
import { Manrope, Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
const manrope = Manrope({ subsets: ['latin'] });

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
            'Koruma uygulaması',
        ],
        duration: '30-45 dakika',
        price: '₺100 - ₺200',
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
    const service = SERVICES.find((s) => s.id === slug);
    if (!service) return { title: 'Hizmet Bulunamadı' };

    return {
        title: `${service.title} | ${SITE_CONFIG.name}`,
        description: service.shortDescription,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.id === slug);
    const details = serviceDetails[slug];

    if (!service || !details) {
        notFound();
    }

    return (
        <>
            <Header />
            <WhatsAppButton />

            <main className={`min-h-screen bg-[var(--color-bg)] ${manrope.className}`}>
                {/* 1. Immersive Hero Section */}
                <section className="relative h-[85vh] w-full overflow-hidden flex items-end">
                    {/* Background Image with Slow Zoom */}
                    <div className="absolute inset-0 z-0">
                        <div className="relative w-full h-full animate-kenburns">
                            <NextImage
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover object-center brightness-50"
                                priority
                                sizes="100vw"
                            />
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-black/50 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
                    </div>

                    {/* Hero Content */}
                    <div className="container relative z-10 pb-20 md:pb-32">
                        <div className="max-w-4xl">
                            {/* Decorative Line */}
                            <div className="w-24 h-1 bg-[var(--color-primary)] mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }} />

                            <h1 className={`${playfair.className} text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in-up`} style={{ animationDelay: '0.2s' }}>
                                {service.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                                {details.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <div className="px-6 py-3 border border-white/20 rounded-full backdrop-blur-sm bg-white/5 flex items-center gap-3">
                                    <span className="text-[var(--color-primary)]">⏱</span>
                                    <span className="text-white/90 text-sm tracking-wider uppercase font-medium">{details.duration}</span>
                                </div>
                                <div className="px-6 py-3 border border-white/20 rounded-full backdrop-blur-sm bg-white/5 flex items-center gap-3">
                                    <span className="text-[var(--color-primary)]">🏷</span>
                                    <span className="text-white/90 text-sm tracking-wider uppercase font-medium">{details.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Process & Content Section */}
                <section className="py-24 relative z-10">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                            {/* Left: Process Timeline */}
                            <div>
                                <h3 className={`${playfair.className} text-3xl md:text-4xl text-white mb-12 flex items-center gap-4`}>
                                    <span className="text-[var(--color-primary)] text-2xl">01</span>
                                    Uygulama Süreci
                                </h3>

                                <div className="relative border-l border-white/10 pl-8 ml-4 space-y-12">
                                    {details.process.map((step, index) => (
                                        <div key={index} className="relative group">
                                            {/* Dot with Pulse Effect */}
                                            <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border border-[var(--color-primary)] bg-[var(--color-bg)] group-hover:bg-[var(--color-primary)] transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                                                {/* Strong Pulse Animation */}
                                                <div className="absolute -inset-2 rounded-full bg-[var(--color-primary)] animate-ping opacity-40" style={{ animationDuration: '2s', animationDelay: `${index * 0.5}s` }} />

                                                {/* Inner Glow */}
                                                <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] opacity-30 animate-pulse" style={{ animationDuration: '3s', animationDelay: `${index * 0.5}s` }} />
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="text-xl text-white/90 font-medium group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                                    {step}
                                                </h4>
                                                <p className="text-white/40 text-sm leading-relaxed">
                                                    Profesyonel ekipmanlar ve uzman dokunuşlarla gerçekleştirilen aşama.
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Premium Features Grid */}
                            <div>
                                <h3 className={`${playfair.className} text-3xl md:text-4xl text-white mb-12 flex items-center gap-4`}>
                                    <span className="text-[var(--color-primary)] text-2xl">02</span>
                                    Hizmet İçeriği
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {details.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="group p-6 bg-white/[0.02] border border-white/5 hover:border-[var(--color-primary)]/30 rounded-xl transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-1"
                                        >
                                            <div className="w-10 h-10 mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 transition-colors">
                                                <span className="text-[var(--color-primary)] text-xl">✦</span>
                                            </div>
                                            <h5 className="text-white/90 text-lg font-medium mb-2 group-hover:text-white transition-colors">
                                                {feature}
                                            </h5>
                                        </div>
                                    ))}
                                </div>

                                {/* Call to Action Box */}
                                <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent border border-[var(--color-primary)]/20 text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[var(--color-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <h4 className={`${playfair.className} text-2xl text-white mb-4 relative z-10`}>
                                        Aracınıza Hak Ettiği Değeri Verin
                                    </h4>
                                    <p className="text-white/60 mb-8 relative z-10">
                                        Hemen randevunuzu oluşturun, size özel ayrıcalıklı hizmetin keyfini çıkarın.
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                        <Link
                                            href={SITE_CONFIG.social.whatsapp}
                                            className="px-8 py-4 bg-[var(--color-primary)] text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl hover:scale-105"
                                        >
                                            Randevu Al
                                        </Link>
                                        <a
                                            href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                                            className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 rounded-sm"
                                        >
                                            Hemen Ara
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Decorative Bottom Gradient */}
                <div className="h-32 bg-gradient-to-b from-[var(--color-bg)] to-black relative z-10" />
            </main>

            <Footer />
        </>
    );
}
