import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lityum-pil-sagligi-hesaplayici';
const title = 'Lityum Pil Sağlığı Hesaplayıcı';
const description =
  'Döngü sayısı, voltaj ve sıcaklığa göre lityum pilinizin Sağlık Durumunu (SoH) hesaplayın. Enerji ömrünü maksimize etmek için bilimsel rehber.';

const faqData = [
  {
    question: 'Pil kimyasal bozulması nedir?',
    answer:
      'Her şarj ve deşarj döngüsünde, lityum hücreleri enerji depolama kapasitelerini azaltan mikro çatlaklar ve kimyasal tortu birikimi (S.E.I.) yaşarlar. Bu kaçınılmaz bir süreçtir ancak iyi alışkanlıklarla yavaşlatılabilir.',
  },
  {
    question: 'Neden %80\'e kadar şarj edilmesi önerilir?',
    answer:
      'Lityum piller ekstrem voltajlarda (%0 ve %100) daha fazla strese maruz kalırlar. Şarjı %20 ile %80 arasında tutmak, ısıyı ve iç basıncı azaltarak hücre ömrünü üç katına çıkarabilir.',
  },
  {
    question: 'Isı pil ömrünü nasıl etkiler?',
    answer:
      'Isı, bir numaralı düşmandır. Optimal ortam sıcaklığının (25 derece) üzerindeki her 10 derecelik artış için, kimyasal bozulma hızı kabaca iki katına çıkar.',
  },
  {
    question: 'Tam bir şarj döngüsü nedir?',
    answer:
      'Bir döngü, pil kapasitesinin %100\'ünün kullanılmasıdır ancak bunun bir kerede olması gerekmez. Bugün %50 kullanır, şarj eder ve yarın %50 kullanırsanız, 1 tam döngüyü tamamlamış olursunuz.',
  },
];

const howToData = [
  {
    name: 'Orijinal kapasiteyi belirleyin',
    text: 'Cihazınızın kutusuna veya üreticinin web sitesine bakarak pilinizin yeniyken sahip olduğu mAh değerini bulun.',
  },
  {
    name: 'Mevcut döngü sayısını kontrol edin',
    text: 'Birçok sistem (iOS veya Android 14 gibi), pilinizin kaç şarj döngüsü biriktirdiğini görmenize olanak tanır.',
  },
  {
    name: 'Teknik verileri girin',
    text: 'Hesaplama motorumuzun SoH değerini tahmin edebilmesi için mevcut voltaj, döngü sayısı ve sıcaklığı ayarlayın.',
  },
  {
    name: 'Teşhisi analiz edin',
    text: 'Sağlık yüzdesini kontrol edin. %80\'in altındaysanız, performans düşüşleri veya beklenmedik kapanmalar fark etmeye başlayabilirsiniz.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Zamanın kimyası: lityum piller neden ölür', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir lityum-iyon pil statik bir enerji kutusu değil, üretildiği andan itibaren sürekli bozulma halinde olan dinamik bir kimyasal ekosistemdir. Her şarj ve deşarj döngüsü, her sıcaklık değişimi ve ekstrem voltajlardaki her dakika, iyon akışını engelleyen yan ürünlere katkıda bulunur.',
    },
    { type: 'title', text: 'Temel bozulma mekanizmaları', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI katmanı:</strong> katı elektrolit arayüzü zamanla büyür, aktif lityumu tüketir ve iç direnci artırır. <strong>Elektrolit oksidasyonu:</strong> 4.1V üzerindeki voltajlar oksidasyonu hızlandırır ve pilin şişmesine neden olabilir. <strong>Lityum Kaplama:</strong> düşük sıcaklıklarda şarj etmek, lityumu metalik formda biriktirerek separatörü delebilecek dendritler oluşturur.',
    },
    { type: 'title', text: '%100 miti: gece boyu şarj etmek neden bir hatadır', level: 3 },
    {
      type: 'paragraph',
      html: 'Bir lityum iyonu için %100 şarjda (4.2V) olmak yüksek stresli bir durumdur. Araştırmalar, cihazı <strong>%20 ile %80</strong> arasında tutmanın döngü ömrünü ikiye veya üçe katladığını göstermektedir. Ayrıca, 25°C üzerindeki her 10°C için kimyasal bozulma hızı kabaca iki katına çıkar.',
    },
    { type: 'title', text: 'Enerji hayatta kalma protokolü', level: 3 },
    {
      type: 'paragraph',
      html: 'Bir pili asla 0°C\'nin altında şarj etmeyin: lityum anot üzerinde birikerek kalıcı hasara neden olur. Hızlı şarj, lokalize ısı ve mekanik stres oluşturur; sadece kesinlikle gerekli olduğunda kullanın. Uzun süreli depolama için pili serin bir yerde %50 dolulukta tutun.',
    },
  ],
  ui: {
    badge: 'Li-Ion Pil',
    title: 'Pil Sağlığı Hesaplayıcı',
    description: 'Lityum-İyon hücreleri için teknik bozulma teşhisi.',
    paramsTitle: 'Hücre Parametreleri',
    voltageLabel: 'Mevcut Voltaj',
    cyclesLabel: 'Şarj Döngüleri',
    tempLabel: 'Sıcaklık',
    voltageHint: 'Nominal aralık: 3.0V (boş) ile 4.2V (dolu).',
    labelUsefulLife: 'Kullanım Ömrü',
    yearsPrefix: 'Tah.',
    yearsSuffix: 'yıl',
    metricThermalStress: 'Termal Stres',
    metricVoltageStress: 'Voltaj Stresi',
    metricLithiumPlating: 'Lityum Kaplama',
    statusExcelente: 'Mükemmel Durum',
    statusBueno: 'İyi Durum',
    statusRegular: 'Orta Durum',
    statusCritico: 'Kritik Durum',
    indicatorTempNormal: 'Normal',
    indicatorTempCritical: 'Kritik',
    indicatorVoltageHigh: 'Yüksek',
    indicatorVoltageLow: 'Düşük',
    indicatorPlatingRisk: 'Yüksek Risk',
    indicatorPlatingOk: 'Risk Yok',
    recTemp: 'Elektrolit oksidasyonunu önlemek için ortam sıcaklığını düşürün veya havalandırmayı iyileştirin.',
    recVoltageHigh: 'Pili uzun süre %100 şarjda (4.2V) tutmaktan kaçının.',
    recVoltageLow: 'Derin deşarjlardan kaçının; %20 ile %80 arasındaki döngüler pil ömrünü iki katına çıkarır.',
    recSohLow: 'Kapasite optimal standardın altına düştü. Otonomi yetersizse değişim yapmayı düşünün.',
    recDefault: 'Mevcut alışkanlıklarınızı koruyun -piliniz ideal çalışma aralığında.',
  },
};
