import { Metadata } from 'next';
import { SITE_CONFIG } from '@/constants';

export const metadata: Metadata = {
    title: 'KVKK Aydınlatma Metni | BETSAN OTO YIKAMA',
    description: 'Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aydınlatma metnimiz.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function KVKKPage() {
    return (
        <div className="container py-24 md:py-32">
            <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
                <h1 className="text-3xl font-bold mb-8">KVKK Aydınlatma Metni</h1>

                <p className="lead">
                    <strong>{SITE_CONFIG.name}</strong> ("Şirket") olarak, kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz.
                    Bu bilinçle, Şirket olarak ürün ve hizmetlerimizden faydalanan kişiler dahil, Şirket ile ilişkili tüm şahıslara ait her türlü kişisel verilerin
                    6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVK Kanunu")'na uygun olarak işlenerek, muhafaza edilmesine büyük önem atfetmekteyiz.
                    Bu sorumluluğumuzun tam idraki ile KVK Kanunu kapsamında tanımlı "Veri Sorumlusu" sıfatıyla, kişisel verilerinizi aşağıda izah edildiği surette
                    ve mevzuat tarafından emredilen sınırlar çerçevesinde işlemekteyiz.
                </p>

                <h3>1. Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları</h3>
                <p>
                    Kişisel verileriniz, Şirketimiz tarafından verilen hizmet, ürün ya da ticari faaliyete bağlı olarak değişkenlik gösterebilmekle birlikte;
                    otomatik ya da otomatik olmayan yöntemlerle, Şirketimiz birimleri ve ofisler, topluluk şirketleri, internet sitesi, sosyal medya mecraları,
                    mobil uygulamalar ve benzeri vasıtalarla sözlü, yazılı ya da elektronik olarak toplanabilecektir. Şirketimiz ve Topluluk Şirketlerimizin sunduğu
                    ürün ve hizmetlerden yararlandığınız müddetçe oluşturularak ve güncellenerek kişisel verileriniz işlenebilecektir.
                </p>

                <h3>2. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği</h3>
                <p>
                    Toplanan kişisel verileriniz; Şirketimiz tarafından sunulan ürün ve hizmetlerden sizleri faydalandırmak için gerekli çalışmaların iş birimlerimiz
                    tarafından yapılması, Şirketimiz ve Şirketimizle iş ilişkisi içerisinde olan kişilerin hukuki ve ticari güvenliğinin temini, Şirketimizin ticari
                    ve iş stratejilerinin belirlenmesi ve uygulanması ile Şirketimizin insan kaynakları politikalarının yürütülmesinin temini amaçlarıyla;
                    iş ortaklarımıza, tedarikçilerimize, Topluluk Şirketlerine, Şirket yetkililerine, hissedarlarımıza, kanunen yetkili kamu kurumları ve özel kişilere,
                    KVK Kanunu’nun 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
                </p>

                <h3>3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h3>
                <p>
                    Kişisel verileriniz, her türlü sözlü, yazılı ya da elektronik ortamda, yukarıda yer verilen amaçlar doğrultusunda Şirketçe sunduğumuz ürün ve hizmetlerin
                    belirlenen yasal çerçevede sunulabilmesi ve bu kapsamda Şirketimizin sözleşme ve yasadan doğan mesuliyetlerini eksiksiz ve doğru bir şekilde yerine
                    getirebilmesi gayesi ile edinilir. Bu hukuki sebeple toplanan kişisel verileriniz KVK Kanunu’nun 5. ve 6. maddelerinde belirtilen kişisel veri
                    işleme şartları ve amaçları kapsamında bu metnin (1) ve (2) numaralı maddelerinde belirtilen amaçlarla da işlenebilmekte ve aktarılabilmektedir.
                </p>

                <h3>4. Kişisel Veri Sahibinin KVK Kanunu’nun 11. Maddesinde Sayılan Hakları</h3>
                <p>
                    Kişisel veri sahipleri olarak, haklarınıza ilişkin taleplerinizi, işbu Aydınlatma Metni’nde aşağıda düzenlenen yöntemlerle Şirketimize iletmeniz
                    durumunda Şirketimiz talebin niteliğine göre talebi en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandıracaktır. Ancak, işlemin
                    ayrıca bir maliyeti gerektirmesi hâlinde, Şirketimiz tarafından Kişisel Verileri Koruma Kurulunca belirlenen tarifedeki ücret alınacaktır.
                    Bu kapsamda kişisel veri sahipleri;
                </p>
                <ul>
                    <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                    <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                    <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                    <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                    <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                    <li>KVK Kanunu’nun ve ilgili diğer kanun hükümlerine uygun olarak işlenmiş olmasına rağmen, işlenmesini gerektiren sebeplerin ortadan kalkması hâlinde kişisel verilerin silinmesini veya yok edilmesini isteme ve bu kapsamda yapılan işlemin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                    <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
                    <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.</li>
                </ul>

                <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="text-lg font-semibold mb-2">İletişim</h4>
                    <p>
                        KVK Kanunu’nun 13. maddesinin 1. fıkrası gereğince, yukarıda belirtilen haklarınızı kullanmak ile ilgili talebinizi, yazılı veya Kişisel
                        Verileri Koruma Kurulu’nun belirlediği diğer yöntemlerle Şirketimize iletebilirsiniz. Başvurunuzu <strong>{SITE_CONFIG.contact.email}</strong>
                        adresine güvenli elektronik imzalı olarak veya şirketimizin <strong>{SITE_CONFIG.contact.address}</strong> adresine yazılı olarak iletebilirsiniz.
                    </p>
                </div>
            </div>
        </div>
    );
}
