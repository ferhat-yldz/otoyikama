/**
 * BETSAN OTO YIKAMA - Tema ve Renk Şeması
 * 
 * ⚠️ ÖNEMLİ: Tüm renkleri buradan değiştirebilirsin!
 * Bu dosyayı düzenlediğinde tüm site otomatik güncellenecek.
 * 
 * Renk formatları:
 * - HEX: #1a1a2e
 * - RGB: rgb(26, 26, 46)
 * - HSL: hsl(240, 28%, 14%)
 */

export const THEME = {
    colors: {
        // ═══════════════════════════════════════════════════════════
        // 🎨 ANA RENKLER (Primary)
        // Ana marka renkleri - Butonlar, vurgular, önemli öğeler
        // ═══════════════════════════════════════════════════════════
        primary: {
            DEFAULT: "#0ea5e9",    // Ana mavi - Sky 500
            light: "#38bdf8",      // Açık mavi - Sky 400
            dark: "#0284c7",       // Koyu mavi - Sky 600
            50: "#f0f9ff",
            100: "#e0f2fe",
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
        },

        // ═══════════════════════════════════════════════════════════
        // 🔶 İKİNCİL RENKLER (Secondary)
        // Vurgu renkleri - CTA butonları, özel öğeler
        // ═══════════════════════════════════════════════════════════
        secondary: {
            DEFAULT: "#f59e0b",    // Turuncu/Altın - Amber 500
            light: "#fbbf24",      // Açık turuncu - Amber 400
            dark: "#d97706",       // Koyu turuncu - Amber 600
        },

        // ═══════════════════════════════════════════════════════════
        // 🌙 ARKA PLAN RENKLERİ (Background)
        // Sayfa arka planları ve kartlar
        // ═══════════════════════════════════════════════════════════
        background: {
            DEFAULT: "#0f172a",    // Ana arka plan - Slate 900
            secondary: "#1e293b",  // İkincil arka plan - Slate 800
            tertiary: "#334155",   // Üçüncül arka plan - Slate 700
            card: "#1e293b",       // Kart arka planı
            cardHover: "#334155",  // Kart hover durumu
        },

        // ═══════════════════════════════════════════════════════════
        // 📝 METİN RENKLERİ (Text)
        // Başlıklar, paragraflar, etiketler
        // ═══════════════════════════════════════════════════════════
        text: {
            primary: "#f8fafc",    // Ana metin - Slate 50
            secondary: "#cbd5e1",  // İkincil metin - Slate 300
            muted: "#94a3b8",      // Soluk metin - Slate 400
            inverse: "#0f172a",    // Ters metin (açık arka plan için)
        },

        // ═══════════════════════════════════════════════════════════
        // ✅ DURUM RENKLERİ (Status)
        // Başarı, hata, uyarı mesajları
        // ═══════════════════════════════════════════════════════════
        status: {
            success: "#22c55e",    // Yeşil - Green 500
            error: "#ef4444",      // Kırmızı - Red 500
            warning: "#f59e0b",    // Sarı - Amber 500
            info: "#3b82f6",       // Mavi - Blue 500
        },

        // ═══════════════════════════════════════════════════════════
        // 🔲 BORDER & DIVIDER
        // Çerçeveler ve ayırıcılar
        // ═══════════════════════════════════════════════════════════
        border: {
            DEFAULT: "#334155",    // Varsayılan border - Slate 700
            light: "#475569",      // Açık border - Slate 600
            dark: "#1e293b",       // Koyu border - Slate 800
        },

        // ═══════════════════════════════════════════════════════════
        // 🌈 GRADIENT (Gradyan Renkleri)
        // Hero section ve özel alanlar için
        // ═══════════════════════════════════════════════════════════
        gradient: {
            from: "#0ea5e9",       // Başlangıç rengi
            via: "#8b5cf6",        // Orta renk (opsiyonel)
            to: "#f59e0b",         // Bitiş rengi
        },

        // ═══════════════════════════════════════════════════════════
        // 🟢 WHATSAPP
        // WhatsApp butonu için özel renkler
        // ═══════════════════════════════════════════════════════════
        whatsapp: {
            DEFAULT: "#25D366",
            hover: "#128C7E",
        },
    },

    // ═══════════════════════════════════════════════════════════
    // 📐 SPACING & SIZING
    // Boşluklar ve boyutlar
    // ═══════════════════════════════════════════════════════════
    spacing: {
        section: "80px",         // Section arası boşluk
        sectionMobile: "48px",   // Mobil section boşluğu
        container: "1280px",     // Max container genişliği
    },

    // ═══════════════════════════════════════════════════════════
    // 🔤 TYPOGRAPHY
    // Font aileleri ve boyutları
    // ═══════════════════════════════════════════════════════════
    fonts: {
        heading: "'Inter', sans-serif",
        body: "'Inter', sans-serif",
    },

    // ═══════════════════════════════════════════════════════════
    // 🎭 EFFECTS
    // Gölgeler ve efektler
    // ═══════════════════════════════════════════════════════════
    effects: {
        shadow: {
            sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
            md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
            xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            glow: "0 0 20px rgba(14, 165, 233, 0.3)",
        },
        borderRadius: {
            sm: "4px",
            DEFAULT: "8px",
            md: "12px",
            lg: "16px",
            xl: "24px",
            full: "9999px",
        },
        transition: {
            fast: "150ms ease",
            DEFAULT: "300ms ease",
            slow: "500ms ease",
        },
    },
} as const;

// CSS Custom Properties olarak export (globals.css için)
export const CSS_VARIABLES = `
  :root {
    /* Primary Colors */
    --color-primary: ${THEME.colors.primary.DEFAULT};
    --color-primary-light: ${THEME.colors.primary.light};
    --color-primary-dark: ${THEME.colors.primary.dark};
    
    /* Secondary Colors */
    --color-secondary: ${THEME.colors.secondary.DEFAULT};
    --color-secondary-light: ${THEME.colors.secondary.light};
    --color-secondary-dark: ${THEME.colors.secondary.dark};
    
    /* Background Colors */
    --color-bg: ${THEME.colors.background.DEFAULT};
    --color-bg-secondary: ${THEME.colors.background.secondary};
    --color-bg-card: ${THEME.colors.background.card};
    
    /* Text Colors */
    --color-text-primary: ${THEME.colors.text.primary};
    --color-text-secondary: ${THEME.colors.text.secondary};
    --color-text-muted: ${THEME.colors.text.muted};
    
    /* Border Colors */
    --color-border: ${THEME.colors.border.DEFAULT};
    
    /* WhatsApp */
    --color-whatsapp: ${THEME.colors.whatsapp.DEFAULT};
    --color-whatsapp-hover: ${THEME.colors.whatsapp.hover};
  }
`;

export type Theme = typeof THEME;
