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
        keywords: [
            "malatya oto yıkama",
            "betsan oto yıkama",
            "yeşilyurt oto yıkama",
            "araç yıkama malatya",
            "oto detay temizlik",
            "pasta cila malatya",
            "seramik kaplama malatya",
            "iç temizlik oto",
            "profesyonel araç bakımı",
        ],
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
        icon: "🚿",
    },
    {
        id: "vip-yikama",
        title: "VIP Yıkama",
        shortDescription: "Özel ekipmanlar ve premium ürünlerle kapsamlı temizlik hizmeti.",
        icon: "⭐",
    },
    {
        id: "full-detay-temizlik",
        title: "Full Detay Temizlik",
        shortDescription: "Aracınızın her santimetresine özel ilgi ile en kapsamlı temizlik.",
        icon: "✨",
    },
    {
        id: "pasta-cila",
        title: "Pasta Cila",
        shortDescription: "Boyayı yenilemek, parlaklık kazandırmak ve korumak için profesyonel uygulama.",
        icon: "💎",
    },
    {
        id: "seramik-kaplama",
        title: "Seramik Kaplama",
        shortDescription: "Nano teknoloji ile uzun süreli boya koruma ve parlaklık.",
        icon: "🛡️",
    },
    {
        id: "koltuk-temizleme",
        title: "Koltuk Temizleme",
        shortDescription: "Kumaş ve deri koltuklar için derin temizlik hizmeti.",
        icon: "🪑",
    },
    {
        id: "motor-yikama",
        title: "Motor Yıkama",
        shortDescription: "Motor bölümünün güvenli ve detaylı temizliği.",
        icon: "🔧",
    },
    {
        id: "jant-temizligi",
        title: "Jant Temizliği",
        shortDescription: "Fren tozu, kir ve pas gibi birikintilerden arındırma.",
        icon: "🎡",
    },
    {
        id: "far-temizligi",
        title: "Far Temizliği",
        shortDescription: "Matlaşmış ve sararmış farların parlatılması ve yenilenmesi.",
        icon: "💡",
    },
    {
        id: "klima-temizligi",
        title: "Klima Temizliği",
        shortDescription: "Klima sisteminin dezenfekte edilmesi ve kötü kokuların giderilmesi.",
        icon: "❄️",
    },
    {
        id: "arac-alti-yikama",
        title: "Araç Altı Yıkama",
        shortDescription: "Şasi ve araç altının tuz, çamur ve kirlerden arındırılması.",
        icon: "🚙",
    },
    {
        id: "cam-kirec-lekesi-temizligi",
        title: "Cam Kireç Lekesi Temizliği",
        shortDescription: "Camlardaki inatçı kireç lekelerinin profesyonelce temizlenmesi.",
        icon: "🪟",
    },
    {
        id: "zift-temizligi",
        title: "Zift Temizliği",
        shortDescription: "Araç boyasına zarar vermeden zift ve asfalt kalıntılarının temizlenmesi.",
        icon: "🧽",
    },
] as const;

export type Service = typeof SERVICES[number];
