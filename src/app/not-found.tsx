import Link from 'next/link';
import { Header, Footer } from '@/components/layout';

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="min-h-screen flex items-center justify-center pt-48">
                <div className="container">
                    <div className="text-center max-w-xl mx-auto">
                        {/* 404 Icon */}
                        <div className="text-9xl font-bold gradient-text mb-4">404</div>

                        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                            Sayfa Bulunamadı
                        </h1>

                        <p className="text-[var(--color-text-secondary)] mb-8">
                            Aradığınız sayfa mevcut değil veya taşınmış olabilir.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/" className="btn btn-primary">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                                Anasayfaya Dön
                            </Link>
                            <Link href="/iletisim" className="btn btn-outline">
                                İletişime Geç
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
