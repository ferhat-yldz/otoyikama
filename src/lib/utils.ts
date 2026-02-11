/**
 * Yardımcı fonksiyonlar
 */

import { SITE_CONFIG } from '@/constants';

/**
 * Telefon numarasını formatlar
 */
export function formatPhone(phone: string): string {
    return phone.replace(/\s/g, '');
}

/**
 * WhatsApp linki oluşturur
 */
export function getWhatsAppLink(message?: string): string {
    const baseUrl = `https://wa.me/${SITE_CONFIG.contact.phoneRaw.replace('+', '')}`;
    if (message) {
        return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }
    return baseUrl;
}

/**
 * Telefon linkini oluşturur
 */
export function getPhoneLink(): string {
    return `tel:${SITE_CONFIG.contact.phoneRaw}`;
}

/**
 * Email linkini oluşturur
 */
export function getEmailLink(subject?: string): string {
    const baseUrl = `mailto:${SITE_CONFIG.contact.email}`;
    if (subject) {
        return `${baseUrl}?subject=${encodeURIComponent(subject)}`;
    }
    return baseUrl;
}

/**
 * Slug oluşturur (Türkçe karakter desteği ile)
 */
export function slugify(text: string): string {
    const turkishCharMap: Record<string, string> = {
        'ç': 'c', 'Ç': 'C',
        'ğ': 'g', 'Ğ': 'G',
        'ı': 'i', 'İ': 'I',
        'ö': 'o', 'Ö': 'O',
        'ş': 's', 'Ş': 'S',
        'ü': 'u', 'Ü': 'U',
    };

    return text
        .split('')
        .map(char => turkishCharMap[char] || char)
        .join('')
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * Görsel boyutunu optimize eder
 */
export function getOptimizedImageUrl(url: string, width?: number): string {
    // Sanity veya diğer CMS'ler için uyarlanabilir
    if (width && url.includes('sanity')) {
        return `${url}?w=${width}&auto=format`;
    }
    return url;
}

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Performanslı ve conflict-free class birleştirme
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
