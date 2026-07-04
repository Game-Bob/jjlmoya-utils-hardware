import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobil-sensor-testi';
const title = 'Mobil Sensör Testi';
const description = 'Telefonunuzda jiroskop, ivmeölçer, hareket sensörü ve su terazisi testini çevrimiçi olarak çalıştırarak eğim, dönüş, sapma ve sensör kalibrasyon sorunlarını kontrol edin.';

const faqData = [
  {
    question: 'Telefon jiroskopumu çevrimiçi olarak nasıl test edebilirim?',
    answer: 'Testi telefonda açın, Kalibrasyonu Başlat\'a dokunun, istenirse hareket erişimine izin verin, ardından cihazı döndürün ve eğin. Çalışan bir jiroskop ve yön sensörü, alpha, beta ve gamma değerlerini donma veya ani sıçramalar olmadan düzgün bir şekilde güncellemelidir.',
  },
  {
    question: 'İvmeölçeri bir su terazisi ile test edebilir miyim?',
    answer: 'Evet. Testi başlattıktan sonra telefonu düz bir masaya koyun. Baloncuğun merkeze yakın bir yerde sabitlenmesi ve ivme değerlerinin sabit kalması gerekir. Telefon hareketsizken baloncuk ciddi şekilde kayıyorsa, ivmeölçerin kalibrasyona ihtiyacı olabilir veya kılıf, masa ya da cihaz donanımı müdahale ediyor olabilir.',
  },
  {
    question: 'iPhone neden hareket izni istiyor?',
    answer: 'iPhone ve iPad\'de Safari, web sitelerinin hareket ve yön sensörlerine erişmeden önce bir dokunuş gerektirir. İzin reddedilirse, siz hareket erişimine izin verene kadar test jiroskop veya ivmeölçer verilerini okuyamaz.',
  },
  {
    question: 'Bu, bozuk bir pusulayı onarabilir veya kalibre edebilir mi?',
    answer: 'Hiçbir tarayıcı aracı donanımı onaramaz veya sistem pusula kalibrasyonunu zorlayamaz. Bu test belirtileri tanımlamanıza yardımcı olur: donmuş okumalar, gürültülü hareket, sapma, eksik izin veya sensörleri sunmayan bir tarayıcı.',
  },
];

const howToData = [
  { name: 'Testi telefonunuzda açın', text: 'Teşhis etmek istediğiniz iPhone, iPad, Android telefon veya tabletin aynısını kullanın. Masaüstü tarayıcıların genellikle sunacak hareket sensörleri yoktur.' },
  { name: 'Hareket erişimine izin verin', text: 'Kalibrasyonu Başlat\'a dokunun ve tarayıcınız gösteriyorsa hareket veya yön izin istemini kabul edin.' },
  { name: 'Eğim ve dönüşü test edin', text: 'Telefonu öne eğin, sola ve sağa yatırın, ardından masanın üzerinde düz bir şekilde döndürün. Alpha, beta, gamma ve ivmedeki yumuşak değişiklikleri izleyin.' },
  { name: 'Düz bir yüzeyde sapmayı kontrol edin', text: 'Telefonu birkaç saniye hareketsiz bırakın. Sağlıklı bir sensör, sürekli gezinmek, ani sıçramalar yapmak veya donmak yerine sabitlenmelidir.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Telefonlar için çevrimiçi jiroskop ve ivmeölçer testi', level: 2 },
    {
      type: 'paragraph',
      html: 'Bu mobil sensör testini, ekran döndürme yanlış geldiğinde, oyunlar veya AR uygulamaları kaydığında, bir su terazisi uygulaması hatalı göründüğünde, navigasyon yanlış yönü gösterdiğinde veya telefon eğime doğru tepki vermediğinde kullanın. Test, jiroskop, ivmeölçer, dönüş ve su terazisi davranışını canlı olarak gösterir, böylece tarayıcı izin sorununu gerçek bir sensör veya kalibrasyon sorunundan ayırt edebilirsiniz.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Ana arama amacı', value: 'jiroskopu çevrimiçi test et' },
        { label: 'Ayrıca kontrol eder', value: 'ivmeölçer sapması' },
        { label: 'En iyi cihaz', value: 'telefon veya tablet' },
      ],
    },
    { type: 'title', text: 'Her sensör okuması size ne söyler', level: 3 },
    {
      type: 'table',
      headers: ['Okuma', 'Kullanım alanı', 'Uyarı işaretleri'],
      rows: [
        ['Alpha', 'Dikey eksen etrafındaki dönüşü kontrol etme, pusula benzeri hareket ve yön değişiklikleri için kullanışlıdır.', 'Telefon düz döndürüldüğünde değişmez, büyük miktarlarda sıçrar veya sıfırda donar.'],
        ['Beta', 'Ekran döndürme, oyunlar, kamera seviyeleme ve AR kontrolleri için ön-arka eğimi kontrol etme.', 'Yanlış yönde hareket eder, bir değerde takılı kalır veya telefon hareketsizken kaymaya devam eder.'],
        ['Gamma', 'Yatay döndürme, yarış oyunları, su terazisi uygulamaları ve sabitleyiciler için sol-sağ yatışı kontrol etme.', 'Bir taraf farklı tepki verir, değerler gürültülüdür veya baloncuk düz bir masada asla merkeze dönmez.'],
        ['İvme X/Y/Z', 'İvmeölçer tepkisini, sarsıntı algılamayı, yerçekimi yönünü ve hareket kararlılığını kontrol etme.', 'Hareketsizken büyük sıçramalar, harekete tepki yok veya kılıf çıkarıldıktan sonra dengesiz okumalar.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Bu testin teşhis etmeye yardımcı olduğu belirtiler',
      html: '<p>Canlı değerleri kullanarak çalışmayan otomatik döndürme, gecikmeli hissedilen jiroskop, ivmeölçer sapması, pusula kalibrasyon uyarıları, kayan AR takibi, kamera seviye hataları, bir tarafa çeken hareket kontrolleri veya yalnızca yerel uygulamalarda hareket bildiren ancak tarayıcıda bildirmeyen bir telefonu araştırın.</p>',
    },
    { type: 'title', text: 'Jiroskop vs ivmeölçer vs pusula', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Jiroskop', description: 'Dönüş hızını ölçer. AR, oyunlar, kamera sabitleme, hareket kontrolleri ve yumuşak yön değişiklikleri için önemlidir.' },
        { title: 'İvmeölçer', description: 'İvmeyi ve yerçekimi yönünü ölçer. Eğim, sarsıntı algılama, adım algılama ve dijital su terazisi davranışını sağlar.' },
        { title: 'Pusula / manyetometre', description: 'Yönü tahmin etmeye yardımcı olur, ancak mıknatıslar, metal nesneler, araç tutucuları, kılıflar, hoparlörler, dizüstü bilgisayarlar ve yakındaki elektronik cihazlar tarafından bozulabilir.' },
      ],
    },
    { type: 'title', text: 'Sensör kalibrasyonu nasıl düzgün şekilde test edilir', level: 3 },
    {
      type: 'list',
      items: [
        'Test etmeden önce manyetik kılıfları, MagSafe cüzdanlarını, metal tutucuları, kontrolcü klipslerini ve aksesuarları çıkarın.',
        'Telefonu sağlam, düz bir masaya koyun ve sapmayı değerlendirmeden önce birkaç saniye bekleyin.',
        'Telefonu hemen sallamak yerine her eksende yavaşça döndürün.',
        'Tarayıcı veri göstermiyorsa Safari veya Chrome\'u yerel bir sensör veya pusula uygulamasıyla karşılaştırın.',
        'Okumalar birden fazla uygulamada donmuşsa cihazı yeniden başlatın ve testi tekrarlayın.',
      ],
    },
    {
      type: 'tip',
      title: 'iPhone ve Android izin notu',
      html: 'iPhone ve iPad\'de Safari, bir dokunuştan sonra hareket ve yön izni isteyebilir. Android\'de Chrome genellikle hareket sensörlerini daha doğrudan sunar, ancak gizlilik ayarları, tarayıcı bayrakları, pil tasarruf modları ve gömülü web görünümleri yine de sensör verilerini engelleyebilir veya azaltabilir.',
    },
    {
      type: 'table',
      headers: ['Sorun', 'Olası neden', 'Sonraki adım'],
      rows: [
        ['Hiçbir değer değişmiyor', 'İzin reddedildi, desteklenmeyen tarayıcı, masaüstü cihaz veya kısıtlı web görünümü.', 'Telefonun kendisinde açın, Safari veya Chrome kullanın, hareket erişimine izin verin ve sayfayı yeniden yükleyin.'],
        ['Baloncuk masada kayıyor', 'Kalibrasyon sorunu, düz olmayan yüzey, kılıf müdahalesi veya ivmeölçer gürültüsü.', 'Kılıfı çıkarın, bilinen düz bir yüzey kullanın, yeniden başlatın ve yerel bir su terazisi uygulamasıyla karşılaştırın.'],
        ['Pusula yönü yanlış', 'Manyetik müdahale veya sistem pusula kalibrasyonu.', 'Metal/elektronikten uzaklaşın ve işletim sisteminin pusula kalibrasyon akışını kullanın.'],
        ['Değerler sıçrıyor veya ani yükseliyor', 'Sensör gürültüsü, hasarlı donanım, agresif tarayıcı kısıtlaması veya ani fiziksel hareket.', 'Hareketsizken test edin, ağır uygulamaları kapatın ve başka bir tarayıcı veya yerel uygulama ile karşılaştırın.'],
      ],
    },
    {
      type: 'summary',
      title: 'Bu test ne işe yarar',
      items: [
        'Uygulama yüklemeden bir telefon jiroskopunu çevrimiçi test etme.',
        'Canlı bir su terazisi ile ivmeölçer sapmasını kontrol etme.',
        'Hareket kontrollerinin donanım, kalibrasyon, izin veya tarayıcı desteği nedeniyle başarısız olup olmadığını bulma.',
        'Telefonu AR, oyunlar, kamera seviyeleme, navigasyon veya ekran döndürme sorun giderme için hazırlama.',
      ],
    },
  ],
  ui: {
    startButton: 'Kalibrasyonu Başlat',
    permissionHint: 'Hareket sensörlerinin kilidini açmak için bir kez dokunun',
    privacyBadge: 'Yerel sensör verisi',
    privacyCopy: 'Yön ve hareket okumaları bu tarayıcı oturumu içinde kalır.',
    orientationPanel: 'Yön',
    motionPanel: 'Hareket',
    bubblePanel: 'Dijital su terazisi',
    statusReady: 'Sensör izni için hazır',
    statusWaiting: 'Tarayıcı izni bekleniyor',
    statusDenied: 'Sensör erişimi reddedildi veya kullanılamıyor',
    statusUnsupported: 'Hareket sensörleri bu tarayıcı tarafından sunulmuyor',
    statusActive: 'Canlı sensör akışı aktif',
    steadyLabel: 'Sabit',
    movingLabel: 'Hareketli',
    shakingLabel: 'Sallanıyor',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Seviye sapması',
    motionMagnitudeLabel: 'Hareket büyüklüğü',
    cubeLabel: '3D cihaz yön küpü',
    bubbleLabel: 'Su terazisi göstergesi',
    calibrationLabel: 'Canlı derece',
  },
};
