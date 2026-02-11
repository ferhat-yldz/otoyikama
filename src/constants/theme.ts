/**
 * BETSAN OTO YIKAMA - Tema ve Renk Şeması
 * 
 * ⚠️ ÖNEMLİ: Tüm renkleri buradan değiştirebilirsin!
 * Bu dosyayı düzenlediğinde tüm site otomatik güncellenecek.
 * 
 * DESIGN SYSTEM: "SILENT LUXURY"
 */

export const THEME = {
    colors: {
        // ═══════════════════════════════════════════════════════════
        // 🎨 ANA RENKLER (Primary) - Arctic Blue / Cyan
        // ═══════════════════════════════════════════════════════════
        primary: {
            DEFAULT: "#00D2FF",    // Cyan / Electric Blue
            light: "#5EEad4",      // Light Cyan
            dark: "#0090B0",       // Dark Cyan
            50: "#F0FDFA",
            100: "#CCFBF1",
            200: "#99F6E4",
            300: "#5EEAD4",
            400: "#2DD4BF",
            500: "#14B8A6",
            600: "#0D9488",
            700: "#0F766E",
            800: "#115E59",
            900: "#134E4A",
        },

        // ═══════════════════════════════════════════════════════════
        // 🔶 İKİNCİL RENKLER (Secondary) - Silver / Platinum
        // ═══════════════════════════════════════════════════════════
        secondary: {
            DEFAULT: "#E2E8F0",    // Silver / Platinum
            light: "#F8FAFC",      // White Silver
            dark: "#94A3B8",       // Dark Silver
        },

        // ═══════════════════════════════════════════════════════════
        // 🌙 ARKA PLAN RENKLERİ (Background) - Deep Matte Black
        // ═══════════════════════════════════════════════════════════
        background: {
            DEFAULT: "#0F1115",    // Deep Matte Black
            secondary: "#181A20",  // Soft Black (Cards)
            tertiary: "#23262F",   // Lighter Black
            card: "#181A20",       // Card BG
            cardHover: "#23262F",  // Card Hover
        },

        // ═══════════════════════════════════════════════════════════
        // 📝 METİN RENKLERİ (Text)
        // ═══════════════════════════════════════════════════════════
        text: {
            primary: "#F8FAFC",    // Pure White
            secondary: "#94A3B8",  // Silver Grey
            muted: "#64748B",      // Deep Grey
            inverse: "#0F1115",    // Black (for light controls)
        },

        // ═══════════════════════════════════════════════════════════
        // ✅ DURUM RENKLERİ (Status)
        // ═══════════════════════════════════════════════════════════
        status: {
            success: "#10B981",    // Emerald
            error: "#EF4444",      // Red
            warning: "#F59E0b",    // Amber
            info: "#3B82F6",       // Blue
        },

        // ═══════════════════════════════════════════════════════════
        // 🔲 BORDER & DIVIDER
        // ═══════════════════════════════════════════════════════════
        border: {
            DEFAULT: "rgba(255, 255, 255, 0.08)", // Subtle Border
            light: "rgba(255, 255, 255, 0.15)",   // Highlight Border
            dark: "rgba(0, 0, 0, 0.2)",           // Dark Border
        },

        // ═══════════════════════════════════════════════════════════
        // 🌈 GRADIENT (Gradyan Renkleri)
        // ═══════════════════════════════════════════════════════════
        gradient: {
            from: "#00D2FF",       // Cyan
            via: "#5EEad4",        // Light Cyan
            to: "#0090B0",         // Dark Cyan
        },

        // ═══════════════════════════════════════════════════════════
        // 🟢 WHATSAPP
        // ═══════════════════════════════════════════════════════════
        whatsapp: {
            DEFAULT: "#25D366",
            hover: "#128C7E",
        },
    },

    // ═══════════════════════════════════════════════════════════
    // 📐 SPACING & SIZING
    // ═══════════════════════════════════════════════════════════
    spacing: {
        section: "120px",        // More whitespace for luxury feel
        sectionMobile: "60px",
        container: "1400px",     // Wider container
    },

    // ═══════════════════════════════════════════════════════════
    // 🔤 TYPOGRAPHY
    // ═══════════════════════════════════════════════════════════
    fonts: {
        heading: "'Playfair Display', serif", // Luxury Serif
        body: "'Manrope', sans-serif",        // Modern Sans
    },

    // ═══════════════════════════════════════════════════════════
    // 🎭 EFFECTS
    // ═══════════════════════════════════════════════════════════
    effects: {
        shadow: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            DEFAULT: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            md: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            lg: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            xl: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            glow: "0 0 30px rgba(212, 175, 55, 0.15)", // Gold Glow
        },
        borderRadius: {
            sm: "2px",
            DEFAULT: "4px", // Sharper corners for luxury
            md: "8px",
            lg: "12px",
            xl: "16px",
            full: "9999px",
        },
        transition: {
            fast: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
            DEFAULT: "400ms cubic-bezier(0.4, 0, 0.2, 1)",
            slow: "700ms cubic-bezier(0.4, 0, 0.2, 1)", // Slower, smoother transitions
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
    --color-bg-tertiary: ${THEME.colors.background.tertiary};
    --color-bg-card: ${THEME.colors.background.card};
    --color-bg-card-hover: ${THEME.colors.background.cardHover};
    
    /* Text Colors */
    --color-text-primary: ${THEME.colors.text.primary};
    --color-text-secondary: ${THEME.colors.text.secondary};
    --color-text-muted: ${THEME.colors.text.muted};
    --color-text-inverse: ${THEME.colors.text.inverse};
    
    /* Border Colors */
    --color-border: ${THEME.colors.border.DEFAULT};
    --color-border-light: ${THEME.colors.border.light};
    --color-border-dark: ${THEME.colors.border.dark};
    
    /* WhatsApp */
    --color-whatsapp: ${THEME.colors.whatsapp.DEFAULT};
    --color-whatsapp-hover: ${THEME.colors.whatsapp.hover};
  }
`;

export type Theme = typeof THEME;
