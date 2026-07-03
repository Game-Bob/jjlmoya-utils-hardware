import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fare-cift-tiklama-testi';
const title = 'Fare Çift Tıklama Testi';
const description =
  'Her fare düğmesini test edin ve tarayıcınızda düğme başına zamanlama ile istenmeyen çift tıklamaları, aşınmış anahtarları ve temas sıçramasını tespit edin.';

const faqData = [
  {
    question: 'Fare çift tıklama sorunu nedir?',
    answer:
      'Çift tıklama sorunu, bir fiziksel basışın iki tıklama olarak raporlanmasıyla oluşur. Sol düğmeyi, sağ düğmeyi, tekerlek tıklamasını veya yan düğmeleri etkileyebilir ve genellikle anahtar aşınması, temas sıçraması, ürün yazılımı anti-sıçrama ayarları veya kablosuz sinyal kararsızlığından kaynaklanır.',
  },
  {
    question: 'Hangi aralık şüpheli sayılır?',
    answer:
      'Tıklamalar arasındaki çok kısa aralıklar şüphelidir çünkü insan çift tıklamaları genellikle daha fazla zaman alır. Bu araç 80 ms eşikle başlar, ancak fareye ve test tarzınıza bağlı olarak ayarlayabilirsiniz.',
  },
  {
    question: 'Bir tarayıcı anahtarın bozuk olduğunu kanıtlayabilir mi?',
    answer:
      'Bir tarayıcı elektrik anahtarını doğrudan inceleyemez, ancak işletim sisteminizin aldığı tıklama olaylarını kaydedebilir. Tek tıklama testi sırasında tekrarlanan şüpheli aralıklar, sıçrama veya istenmeyen çift tıklamanın güçlü kanıtıdır.',
  },
  {
    question: 'Nasıl doğru test etmeliyim?',
    answer:
      'Yavaş ve bilinçli tıklayın, tek basışları hedefleyin. Kasıtlı olarak çift tıklamadığınız halde şüpheli sayacı artıyorsa, testi başka bir USB bağlantı noktasında, başka bir tarayıcıda ve mümkünse başka bir bilgisayarda tekrarlayın.',
  },
];

const howToData = [
  {
    name: 'Algılama eşiğini ayarlayın',
    text: '80 ms ile başlayın. Katı anahtar sıçrama tespiti için düşürün veya cihazınız biraz daha geniş kazara aralıklar üretiyorsa yükseltin.',
  },
  {
    name: 'Normal tek tıklama gibi tıklayın',
    text: 'Fare görselinin üzerinde her fare düğmesine birer birer tıklayın. İlk geçişte kasıtlı olarak çift tıklamayın.',
  },
  {
    name: 'Şüpheli sayacı izleyin',
    text: 'Tek tıklamalar yaparken şüpheli olaylar görünürse, hangi görsel düğmenin vurgulandığını kontrol edin ve kompakt olay çipleriyle karşılaştırın.',
  },
  {
    name: 'Başka bir cihazla karşılaştırın',
    text: 'Sağlıklı bir fare, aynı eşik altında yüksek skor tutmalıdır. Cihazları karşılaştırmak, donanım arızalarını yazılım ayarlarından ayırmaya yardımcı olur.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Fare Çift Tıklama Testi: Düğme Sıçramasını Çevrimiçi Teşhis Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir kez bastığınızda çift tıklayan bir fare sadece can sıkıcı değildir. Yanlışlıkla klasörleri açabilir, sürükle-bırak eylemlerini iptal edebilir, bir oyunda iki atış yapabilir, tarayıcı sekmelerini kapatabilir veya siz kullanamadan bağlam menülerinin açılıp kapanmasına neden olabilir. Bu çevrimiçi fare çift tıklama testi, yararlı tanı sinyaline odaklanır: <strong>işletim sisteminiz tarafından raporlanan düğme olayları arasındaki zaman aralığı</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Basit bir tıklama sayacının aksine, bu araç her düğmeyi bağımsız olarak izler: sol tıklama, sağ tıklama, tekerlek tıklaması, tarayıcı geri ve tarayıcı ileri. Bu önemlidir çünkü bir farenin sol düğmesi hala sağlıklıyken sağ düğmesi arızalı olabilir veya aylarca oyun oynama veya üretkenlik kısayolları kullanımından sonra sadece hatalı ateşleyen aşınmış bir yan düğme olabilir.',
    },
    {
      type: 'title',
      text: 'Bu Fare Düğmesi Testi Neyi Ölçer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bir fare düğmesine bastığınızda, tarayıcı düğme kodunu içeren bir işaretçi olayı alır. Araç, aynı fiziksel düğme için son zaman damgasını saklar ve aynı düğmenin bir sonraki basışıyla karşılaştırır. Aralık seçtiğiniz eşikten daha kısaysa, olay şüpheli olarak işaretlenir çünkü normal kasıtlı ikinci tıklama genellikle daha uzun sürer.',
    },
    {
      type: 'list',
      items: [
        'Sol düğme: dosya açarken, metin seçerken veya pencere sürüklerken kazara çift tıklamaları tespit etmek için kullanışlıdır',
        'Sağ düğme: bağlam menüleri titreştiğinde, iki kez açıldığında veya hemen kapandığında kullanışlıdır',
        'Tekerlek düğmesi: orta tıklamanın birden fazla sekme açtığı veya yoğun gezinme sonrası başarısız olduğu fareler için kullanışlıdır',
        'Geri ve İleri düğmeleri: yan anahtarlı oyuncu fareleri ve üretkenlik fareleri için kullanışlıdır',
        'Düğme başına zamanlama: sol tıklamayı sağ tıklamayla karıştırıp yanlış çift tıklama olarak adlandırmayı önler',
      ],
    },
    {
      type: 'title',
      text: 'Fareler Neden Çift Tıklamaya Başlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Çoğu fare, her düğmenin altında küçük mekanik anahtarlar kullanır. Anahtar kontakları kapandığında, metal yerleşmeden önce çok kısa bir süre için elektriksel olarak sıçrayabilir. Fare ürün yazılımı normalde bu gürültüyü anti-sıçrama mantığı ile filtreler. Anahtar aşındıkça, sıçrama daha uzun, daha gürültülü veya tutarsız hale gelebilir, böylece bilgisayar parmağınız sadece bir fiziksel basış yapmış olsa bile iki düğme basışı alır.',
    },
    {
      type: 'paragraph',
      html: 'Çift tıklama her zaman aynı şeyden kaynaklanmaz. Mekanik anahtar aşınması, çok agresif ayarlanmış ürün yazılımı anti-sıçraması, anahtar içindeki toz veya oksidasyon, kablosuz paket kararsızlığı, makro yazılımı, hasarlı bir kablo veya kazara çift tıklamaları fark etmeyi kolaylaştıran bir işletim sistemi ayarı olabilir.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası Neden', 'Ne Test Edilmeli'],
      rows: [
        ['Bir tıklama dosyaları çift tıklanmış gibi açar', 'Sol anahtar sıçraması veya işletim sistemi çift tıklama hızı karışıklığı', '80 ms\'de yavaş tek basışlarla Sol tuşu test edin'],
        ['Sağ tıklama menüsü titreşir veya kapanır', 'Sağ anahtar sıçraması veya bağlam menülerini yakalayan yazılım', 'Sağ tuşu test edin ve fare yardımcı programlarını geçici olarak devre dışı bırakın'],
        ['Orta tıklama iki sekme açar', 'Tekerlek anahtarı aşınması', 'Tekerleği bilinçli tek basışlarla test edin'],
        ['Geri düğmesi iki sayfa atlar', 'Yan anahtar sıçraması veya tarayıcı kısayol tekrarı', 'Geri ve İleri\'yi ayrı ayrı test edin'],
        ['Sadece kablosuzda oluyor', 'Kablosuz parazit, düşük pil veya alıcı yerleşimi', 'Kablolu olarak yeniden test edin veya alıcıyı yaklaştırın'],
      ],
    },
    {
      type: 'title',
      text: 'Doğru Anti-Sıçrama Eşiğini Seçme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eşik, bu aracın hala şüpheli olarak kabul ettiği maksimum aralıktır. Varsayılan değer, <strong>80 ms</strong>, pratik bir orta yoldur: birçok istenmeyen çift olayı yakalayacak kadar katı, ancak her normal kasıtlı çift tıklamanın bir donanım arızası haline gelmesine neden olacak kadar agresif değil.',
    },
    {
      type: 'table',
      headers: ['Eşik', 'En İyisi İçin', 'Nasıl Yorumlanır'],
      rows: [
        ['30-50 ms', 'Katı elektriksel sıçrama kontrolleri', 'Aşınmış bir anahtardan çok hızlı çift olayları onaylamak için iyi'],
        ['60-90 ms', 'Genel fare çift tıklama teşhisi', 'Çoğu oyuncu ve ofis faresi için en iyi varsayılan aralık'],
        ['100-140 ms', 'Aralıklı aşınmış anahtarlar', 'Fare bazen daha geniş kazara aralıklar oluşturduğunda kullanışlıdır'],
        ['150-180 ms', 'Stres testi ve zayıf anahtarlar', 'Dikkatli kullanın, çünkü hızlı kasıtlı çift tıklamalar bu aralığa düşebilir'],
      ],
    },
    {
      type: 'title',
      text: 'Güvenilir Bir Test Nasıl Yapılır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'İlk geçişte, kasıtlı olarak çift tıklamayın. İmleç fare görselinin üzerindeyken her fare düğmesine yavaş ve bilinçli olarak, birer birer basın. Sağlıklı bir anahtar kararlı tek olaylar üretmelidir. Yavaş tek basışlar sırasında şüpheli sayacı artıyorsa, deseni doğrulamak için aynı düğme testini birkaç kez tekrarlayın.',
    },
    {
      type: 'list',
      items: [
        'Sol tuşu 20 ila 30 yavaş basışla, sonra Sağ, sonra Tekerlek, sonra yan düğmeleri test edin',
        'Düğme sıçramasını test ederken fareyi sürüklemeyin, çünkü hareket zamanlama sonucundan dikkati dağıtabilir',
        'Bir düğme şüpheli olaylar gösteriyorsa, USB bağlantı noktasını veya tarayıcıyı değiştirdikten sonra aynı testi tekrarlayın',
        'Kablosuz fareler için, yeni bir pil ve alıcı fareye yakın olacak şekilde test edin',
        'Yalnızca bir düğme tekrar tekrar başarısız oluyorsa, arıza muhtemelen tüm cihaz yerine o belirli anahtardadır',
      ],
    },
    {
      type: 'title',
      text: 'Sonuçları Yorumlama',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sonuç', 'Anlamı', 'Önerilen Sonraki Adım'],
      rows: [
        ['Birçok basıştan sonra 0 şüpheli olay', 'Test edilen düğmeler seçilen eşik altında sağlıklı görünüyor', 'Varsayılan eşiği koruyun veya belirtiler geri dönerse daha sonra tekrar test edin'],
        ['1 izole şüpheli olay', 'Gerçek bir sıçrama veya kazara hızlı basış olabilir', 'Sonuç çıkarmadan önce aynı düğmeyi yavaşça tekrarlayın'],
        ['Bir düğmede tekrarlanan şüpheli olaylar', 'Anahtar sıçraması veya aşınmış kontakların güçlü işareti', 'Başka bir bilgisayarda test edin ve sonucu belgeleyin'],
        ['Her düğmede şüpheli olaylar', 'Yazılım, sürücü, makro yardımcı programı veya tarayıcı ortamı olabilir', 'Fare yazılımını devre dışı bırakın ve yeniden test edin'],
        ['Sadece kablosuz mod başarısız', 'Muhtemelen pil, alıcı yerleşimi veya parazit', 'Kablolu modu deneyin veya alıcıyı yaklaştırın'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Sağlık puanı hızlı bir özettir, nihai bir karar değildir. En önemli kanıt, <strong>hangi düğmenin</strong> şüpheli olaylar ürettiği ve aynı düğmeye yavaşça bastığınızda desenin tekrar edip etmediğidir. Aceleci bir test sırasındaki tek bir kötü olay, bilinçli tek basışlar sırasındaki beş şüpheli sağ tıklama olayından daha az anlamlıdır.',
    },
    {
      type: 'title',
      text: 'Fareyi Değiştirmeden Önce',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Fare yazılımınızın bir anti-sıçrama süresi ayarı olup olmadığını kontrol edin ve değiştirdikten sonra tekrar test edin',
        'Teşhis sırasında makroları, hızlı ateş profillerini veya düğme yeniden eşlemelerini devre dışı bırakın',
        'Özellikle bir hub veya ön panel konektörü kullanıyorsanız, farklı bir USB bağlantı noktası deneyin',
        'Kablosuz fareler için, dongle\'ı fare altlığının yakınında bir uzatma kablosuyla test edin',
        'Donanım arızasını yazılım davranışından ayırmak için aynı bilgisayarda başka bir fareyle karşılaştırın',
      ],
    },
    {
      type: 'title',
      text: 'Onarım, Garanti ve Kanıt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Arıza mekanikse, dış kabuğu temizlemek sorunu nadiren kalıcı olarak çözer çünkü sorun anahtar kontaklarının içindedir. Bazı kullanıcılar mikro anahtarı değiştirir, ancak bu lehimleme gerektirir ve her fare için buna değmez. Fare garanti kapsamındaysa, aynı düğmede tekrarlanan şüpheli aralıklar, sorunu desteğe açıklarken yararlı kanıtlardır.',
    },
    {
      type: 'paragraph',
      html: 'Garanti talepleri için, arızalı düğmeye yavaşça basarken kısa bir ekran kaydı yapın. Olay çiplerinin düğme etiketini ve şüpheli zamanlamayı gösterdiğinden emin olun. Bu, "farem bazen çift tıklıyor" demekten daha nettir çünkü gerçek düğmeyi ve istenmeyen çift olayın yaklaşık zamanlamasını gösterir.',
    },
    {
      type: 'title',
      text: 'Tarayıcı Tabanlı Fare Testinin Sınırlamaları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu test, tarayıcıya ulaşan olayları ölçer. Anahtar içindeki elektrik dalga biçimini doğrudan inceleyemez ve her sürücüyü, işletim sistemini veya satıcı yardımcı programını atlayamaz. Bu yine de yararlıdır: tarayıcı çift olaylar alıyorsa, normal uygulamalarınız da alabilir. Mühendislik düzeyinde doğrulama için osiloskoplar veya anahtar test cihazları gibi donanım araçları daha derin kanıt sağlar, ancak çoğu kullanıcı teşhisi için gerekli değildir.',
    },
  ],
  ui: {
    badge: 'Anti-Sıçrama Laboratuvarı',
    clickTarget: 'Düğme Matrisi',
    clickTargetHint: 'Sol, sağ, tekerlek, geri ve ileriye basın',
    totalClicks: 'Toplam',
    suspiciousClicks: 'Şüpheli',
    fastestGap: 'En hızlı aralık',
    healthScore: 'Sağlık puanı',
    thresholdLabel: 'Algılama eşiği',
    thresholdUnit: 'ms',
    cleanEvent: 'temiz',
    suspiciousEvent: 'şüpheli',
    reset: 'Sıfırla',
    statusIdle: 'Bağımsız olarak test etmek için her fare düğmesine basın',
    statusClean: 'Şüpheli düğme sıçraması tespit edilmedi',
    statusWarning: 'Bir fare düğmesinde şüpheli sıçrama tespit edildi',
    lastGap: 'Son olay',
    logTitle: 'Son düğme olayları',
    emptyLog: 'Fare gövdesi üzerinde herhangi bir fare düğmesine basın.',
    leftButton: 'Sol',
    middleButton: 'Tekerlek',
    rightButton: 'Sağ',
    backButton: 'Geri',
    forwardButton: 'İleri',
    otherButton: 'Diğer',
  },
};
