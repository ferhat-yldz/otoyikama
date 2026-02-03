/**
 * Genel TypeScript tip tanımlamaları
 */

// Navigation Link tipi
export interface NavLink {
    label: string;
    href: string;
    children?: NavLink[];
}

// Hizmet tipi
export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    description?: string;
    icon: string;
    image?: string;
    features?: string[];
}

// İletişim formu tipi
export interface ContactForm {
    name: string;
    phone: string;
    email?: string;
    message: string;
    service?: string;
}

// SEO Metadata tipi
export interface SEOMetadata {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
}

// Galeri item tipi
export interface GalleryItem {
    id: string;
    src: string;
    alt: string;
    category?: string;
    width?: number;
    height?: number;
}

// Çalışma saatleri tipi
export interface WorkingHours {
    day: string;
    hours: string;
    isOpen: boolean;
}

// Social link tipi
export interface SocialLink {
    platform: 'instagram' | 'facebook' | 'twitter' | 'youtube' | 'whatsapp';
    url: string;
    label: string;
}
