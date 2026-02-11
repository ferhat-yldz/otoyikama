/**
 * BETSAN OTO YIKAMA - Site Sabitleri
 * Bu dosya tüm site genelinde kullanılan sabit verileri içerir.
 * Değişiklik yapmak için sadece bu dosyayı düzenlemeniz yeterli.
 */

export const SITE_CONFIG = {
    // İşletme Bilgileri
    name: "BETSAN OTO YIKAMA",
    shortName: "Betsan",
    slogan: "Profesyonel Araç Bakım Hizmetleri",
    description: "Malatya'da profesyonel oto yıkama, detaylı iç temizlik, pasta cila ve seramik kaplama hizmetleri. BETSAN OTO YIKAMA ile aracınız ilk günkü gibi parlasın.",

    // İletişim Bilgileri
    contact: {
        phone: "0533 067 66 46",
        phoneRaw: "+905330676646", // WhatsApp ve tel: linkleri için
        email: "info@malatyaotoyıkama.com",
        address: "Çavuşoğlu, Dekor Sokak No:16, 44000 Yeşilyurt/Malatya",
        city: "Malatya",
        district: "Yeşilyurt",
        postalCode: "44000",
    },

    // Çalışma Saatleri
    workingHours: {
        weekdays: "08:00 - 20:00",
        saturday: "08:00 - 20:00",
        sunday: "09:00 - 18:00",
    },

    // Sosyal Medya
    social: {
        instagram: "https://www.instagram.com/malatyabetsanotoyikama/",
        facebook: "https://facebook.com/betsanotoyikama",
        whatsapp: "https://wa.me/905330676646",
    },

    // Google Maps
    maps: {
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.5!2d38.3!3d38.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDIxJzAwLjAiTiAzOMKwMTgnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890",
        directionsUrl: "https://maps.app.goo.gl/XocF25jURahs5TXr8",
        coordinates: {
            lat: 38.35,
            lng: 38.3,
        },
    },

    // SEO
    seo: {
        locale: "tr_TR",
        type: "website",
    },

    // Domain
    url: "https://malatyaotoyıkama.com",
} as const;

// Hizmetler Listesi
export const SERVICES = [
    {
        id: "normal-ic-dis-yikama",
        title: "Normal İç Dış Yıkama",
        shortDescription: "Aracınızın hem dış yüzeyinin hem de iç mekanının detaylı temizliği.",
        description: "Aracınızın dış yüzeyinde biriken kir, toz ve çamur kalıntılarını özel pH dengeli şampuanlar ile çizmeden temizliyoruz. İç mekanda ise koltuk, paspas ve göğüs temizliği ile ferah bir sürüş deneyimi sunuyoruz.",
        features: ["Köpüklü Dış Yıkama", "İç Süpürme ve Toz Alma", "Paspas Temizliği", "Lastik Parlatma", "Hızlı Cila"],
        icon: "🚿",
        image: "/images/services/normal-ic-dis-yikama/cover.jpg",
    },
    {
        id: "vip-yikama",
        title: "VIP Yıkama",
        shortDescription: "Özel ekipmanlar ve premium ürünlerle kapsamlı temizlik hizmeti.",
        description: "Standart yıkamanın ötesinde, aracınızın her detayına özen gösterilen premium bir bakım paketidir. Özel cilalı şampuanlar, detaylı jant temizliği ve iç mekan dezenfeksiyonu içerir.",
        features: ["Demir Tozu Temizliği", "Motor Koruma", "Klima Dezenfeksiyonu", "Detaylı Jant Bakımı", "Premium Cila"],
        icon: "⭐",
        image: "/images/services/vip-yikama/cover.jpg",
    },
    {
        id: "full-detay-temizlik",
        title: "Full Detay Temizlik",
        shortDescription: "Aracınızın her santimetresine özel ilgi ile en kapsamlı temizlik.",
        description: "Aracınızın tavanından tabanına, koltuklarından motoruna kadar her noktasının en ince ayrıntısına kadar temizlendiği, aracınızı fabrika çıkış temizliğine döndüren kapsamlı hizmetimizdir.",
        features: ["Tavan & Taban Temizliği", "Koltuk Yıkama & Kurutma", "Motor Detaylı Temizlik", "Bagaj Detaylı Temizlik", "Koku Giderme"],
        icon: "✨",
        image: "/images/services/full-detay-temizlik/cover.jpg",
    },
    {
        id: "pasta-cila",
        title: "Pasta Cila & Boya Koruma",
        shortDescription: "Boyayı yenilemek, parlaklık kazandırmak ve korumak için profesyonel uygulama.",
        description: "Zamanla matlaşan, kılcal çiziklerle dolu araç boyasını ilk günkü parlaklığına kavuşturuyoruz. Profesyonel pasta uygulaması ile çizikleri gideriyor, cila ile derinlemesine parlaklık ve koruma sağlıyoruz.",
        features: ["Kılcal Çizik Giderme", "Hare Giderme", "Boya Parlatma", "Boya Koruma", "Su İtici Özellik"],
        icon: "💎",
        image: "/images/services/pasta-cila/cover.jpg",
    },
    {
        id: "seramik-kaplama",
        title: "Seramik Kaplama",
        shortDescription: "Nano teknoloji ile uzun süreli boya koruma ve parlaklık.",
        description: "Aracınızın boyasını kuş pisliği, reçine, asit yağmurları ve güneş yanıklarına karşı koruyan, 9H sertliğinde kristalize bir katman oluşturan üst düzey koruma sistemidir.",
        features: ["3-5 Yıl Garanti", "9H Sertlik Derecesi", "Hidrofobik Etki", "Yüksek Parlaklık", "Kolay Temizlenebilirlik"],
        icon: "🛡️",
        image: "/images/services/seramik-kaplama/cover.jpg",
    },
    {
        id: "koltuk-temizleme",
        title: "Koltuk Temizleme",
        shortDescription: "Kumaş ve deri koltuklar için derin temizlik hizmeti.",
        description: "Koltuklarınızdaki inatçı lekeleri, kirleri ve bakterileri özel vakumlu makineler ve kumaş türüne uygun deterjanlarla derinlemesine temizliyoruz. Deri koltuklar için özel bakım ve koruma uyguluyoruz.",
        features: ["Leke Çıkarma", "Buharlı Temizlik", "Kötü Koku Giderme", "Deri Bakım & Koruma", "Hızlı Kuruma"],
        icon: "🪑",
        image: "/images/services/koltuk-temizleme/cover.jpg",
    },
    {
        id: "motor-yikama",
        title: "Motor Yıkama",
        shortDescription: "Motor bölümünün güvenli ve detaylı temizliği.",
        description: "Motor bloğunda biriken yağ, kir ve toz tabakalarını, motora ve elektronik aksama zarar vermeyen özel solüsyonlarla temizliyor ve koruma altına alıyoruz.",
        features: ["Yağ & Kir Çözücü", "Elektronik Aksam Koruma", "Plastik Aksam Parlatma", "Uzun Süreli Temizlik", "Güvenli İşlem"],
        icon: "🔧",
        image: "/images/services/motor-yikama/cover.jpg",
    },
    {
        id: "jant-temizligi",
        title: "Jant Temizliği",
        shortDescription: "Fren tozu, kir ve pas gibi birikintilerden arındırma.",
        description: "Jantlarınıza yapışan balata tozlarını ve yol kirlerini, jant boyasına zarar vermeyen pH nötr temizleyiciler ile derinlemesine temizliyor ve parlatıyoruz.",
        features: ["Balata Tozu Temizliği", "Demir Tozu Sökücü", "Jant Parlatma", "Lastik Siyahlatma", "Koruyucu Katman"],
        icon: "🎡",
        image: "/images/services/jant-temizligi/cover.jpg",
    },
    {
        id: "far-temizligi",
        title: "Far Temizliği",
        shortDescription: "Matlaşmış ve sararmış farların parlatılması ve yenilenmesi.",
        description: "Güneşten ve dış etkenlerden dolayı sararmış, matlaşmış farlarınızı özel zımpara ve polisaj işlemleriyle ilk günkü şeffaflığına kavuşturuyor, gece görüş kalitenizi artırıyoruz.",
        features: ["Sararma Giderme", "Çizik Giderme", "UV Koruma", "Daha İyi Aydınlatma", "Estetik Görünüm"],
        icon: "💡",
        image: "/images/services/far-temizligi/cover.jpg",
    },
    {
        id: "klima-temizligi",
        title: "Klima Dezenfeksiyonu",
        shortDescription: "Klima sisteminin dezenfekte edilmesi ve kötü kokuların giderilmesi.",
        description: "Klima kanallarında oluşan bakteri, küf ve kötü kokuları ozon teknolojisi veya özel dezenfektanlarla temizleyerek aracınızın havasını tazeliyoruz.",
        features: ["Bakteri Temizliği", "Kötü Koku Giderme", "Ferah Hava", "Sağlıklı Sürüş", "Kanal Temizliği"],
        icon: "❄️",
        image: "/images/services/klima-temizligi/cover.jpg",
    },
    {
        id: "arac-alti-yikama",
        title: "Araç Altı Yıkama",
        shortDescription: "Şasi ve araç altının tuz, çamur ve kirlerden arındırılması.",
        description: "Özellikle kış aylarında araç altına yapışan tuz ve kimyasalların, ayrıca çamur birikintilerinin tazyikli su ile detaylıca temizlenmesi işlemidir.",
        features: ["Korozyon Önleme", "Şasi Temizliği", "Tuz ve Kimyasal Arındırma", "Detaylı Durulama", "Pas Önleme"],
        icon: "🚙",
        image: "/images/services/arac-alti-yikama/cover.jpg",
    },
    {
        id: "cam-kirec-lekesi-temizligi",
        title: "Cam Kireç Temizliği",
        shortDescription: "Camlardaki inatçı kireç lekelerinin profesyonelce temizlenmesi.",
        description: "Cam yüzeylerinde suyun kurumasıyla oluşan inatçı kireç lekelerini, cama zarar vermeden özel kimyasallar ve polisaj işlemi ile gideriyoruz.",
        features: ["Kireç Sökme", "Cam Parlatma", "Su Kaydırıcı Etki", "Pürüzsüz Yüzey", "Net Görüş"],
        icon: "🪟",
        image: "/images/services/cam-kirec-lekesi-temizligi/cover.jpg",
    },
    {
        id: "zift-temizligi",
        title: "Zift Temizliği",
        shortDescription: "Araç boyasına zarar vermeden zift ve asfalt kalıntılarının temizlenmesi.",
        description: "Yol çalışmaları ve sıcak asfalt nedeniyle araç boyasına yapışan zift lekelerini, boyaya zarar vermeden özel çözücüler ile temizliyoruz.",
        features: ["Zift Sökme", "Asfalt Lekesi Temizliği", "Boya Koruma", "Pürüzsüz Yüzey", "Güvenli İşlem"],
        icon: "🧽",
        image: "/images/services/zift-temizligi/cover.jpg",
    },
] as const;

export type Service = typeof SERVICES[number];
