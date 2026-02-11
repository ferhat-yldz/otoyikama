import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants';

export const metadata: Metadata = {
    title: 'Gizlilik Politikası | BETSAN OTO YIKAMA',
    description: 'Gizlilik politikamız ve veri güvenliği ilkelerimiz.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="container py-24 md:py-32">
            <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
                <h1 className="text-3xl font-bold mb-8">Gizlilik Politikası</h1>

                <p className="lead">
                    <strong>{SITE_CONFIG.name}</strong> ("Biz"), kullanıcılarımızın gizliliğini korumayı taahhüt eder. Bu Gizlilik Politikası, web sitemizi
                    kullandığınızda bilgilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar.
                </p>

                <h3>1. Topladığımız Bilgiler</h3>
                <p>
                    Web sitemizi ziyaret ettiğinizde, aşağıdaki türde bilgileri toplayabiliriz:
                </p>
                <ul>
                    <li><strong>Kişisel Bilgiler:</strong> İletişim formu aracılığıyla gönüllü olarak sağladığınız ad, e-posta adresi ve telefon numarası gibi bilgiler.</li>
                    <li><strong>Otomatik Bilgiler:</strong> IP adresi, tarayıcı türü, işletim sistemi ve ziyaret ettiğiniz sayfalar gibi teknik veriler. Bu veriler çerezler (cookies) aracılığıyla toplanabilir.</li>
                </ul>

                <h3>2. Bilgilerin Kullanımı</h3>
                <p>
                    Topladığımız bilgileri şu amaçlarla kullanabiliriz:
                </p>
                <ul>
                    <li>Hizmetlerimizi sunmak ve geliştirmek,</li>
                    <li>Sizden gelen taleplere yanıt vermek,</li>
                    <li>Site trafiğini analiz etmek ve kullanıcı deneyimini iyileştirmek,</li>
                    <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
                </ul>

                <h3>3. Çerezler (Cookies)</h3>
                <p>
                    Web sitemiz, kullanıcı deneyimini geliştirmek için çerezleri kullanır. Çerezler, tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır.
                    Çerezleri tarayıcı ayarlarınızdan engelleyebilirsiniz, ancak bu durumda sitenin bazı özellikleri düzgün çalışmayabilir.
                </p>

                <h3>4. Bilgi Güvenliği</h3>
                <p>
                    Kişisel verilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri almaktayız. Ancak, internet üzerinden yapılan hiçbir veri iletiminin
                    %100 güvenli olduğunu garanti edemeyiz.
                </p>

                <h3>5. Üçüncü Taraf Bağlantılar</h3>
                <p>
                    Web sitemiz, diğer web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik uygulamalarından sorumlu değiliz. Ziyaret ettiğiniz her sitenin gizlilik
                    politikasını incelemenizi öneririz.
                </p>

                <h3>6. Değişiklikler</h3>
                <p>
                    Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayınlandığı tarihten itibaren geçerli olacaktır.
                </p>

                <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="text-lg font-semibold mb-2">İletişim</h4>
                    <p>
                        Gizlilik Politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz:<br />
                        <strong>E-posta:</strong> {SITE_CONFIG.contact.email}<br />
                        <strong>Adres:</strong> {SITE_CONFIG.contact.address}
                    </p>
                </div>
            </div>
        </div>
    );
}
