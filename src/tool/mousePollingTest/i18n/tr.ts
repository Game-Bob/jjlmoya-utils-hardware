import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fare-polling-hizi-testi-online';
const title = 'Çevrimiçi Fare Polling Rate Testi';
const description =
  'Farenizin gerçek Hz değerini kontrol edin. Profesyonel aracımızla oyuncu farenizin 1000Hz veya daha fazla çalışıp çalışmadığını doğrulayın.';

const faqData = [
  {
    question: 'Farenin Polling Rate\'i (Bildirim Hızı) nedir?',
    answer:
      'Farenin konumunu bilgisayara bildirme sıklığıdır ve Hz cinsinden ölçülür. 1000Hz\'lik bir bildirim hızı, farenin her 1 milisaniyede bir veri gönderdiği anlamına gelir ve çok daha akıcı bir hareket sağlar.',
  },
  {
    question: 'Testim neden sürekli 1000Hz\'e ulaşmıyor?',
    answer:
      'Tarayıcı, bildirim hızını yalnızca fare hareket halindeyken ölçebilir. Yavaş hareket ettirirseniz veya CPU\'nuz çok meşgulse ölçüm dalgalanabilir. Gerçek maksimum zirveyi elde etmek için fareyi hızlı daireler çizerek hareket ettirin.',
  },
  {
    question: 'Mümkün olan en yüksek bildirim hızına sahip olmak daha mı iyidir?',
    answer:
      'Gecikmeyi azalttığı için oyun oynamak için (1000Hz veya daha fazla) genellikle evet. Ancak 4000Hz veya 8000Hz gibi aşırı yüksek hızlar çok fazla CPU kaynağı tüketir ve tüm oyunlar bunlar için optimize edilmemiştir.',
  },
  {
    question: 'Monitör yenileme hızı fareyi nasıl etkiler?',
    answer:
      '144Hz veya 240Hz monitörünüz varsa, düşük bir bildirim hızı (125Hz) imlecin kesik kesik görünmesine neden olur. Yüksek frekanslı monitörler için en az 500Hz veya 1000Hz kullanılması esastır.',
  },
];

const howToData = [
  {
    name: 'Test alanını hazırlayın',
    text: 'İmleci aracın yakalama bölgesinin içine yerleştirin.',
  },
  {
    name: 'Fareyi hızlıca hareket ettirin',
    text: 'Hızlı ve geniş dairesel hareketler yapın. Araç, donanım tarafından gönderilen her mousemove olayı arasındaki aralıkları hesaplayacaktır.',
  },
  {
    name: 'İstikrar grafiğini gözlemleyin',
    text: 'Hz çizgisinin sabit olup olmadığını veya ani düşüşler olup olmadığını kontrol edin; bu durum kablosuz farelerde paraziti veya CPU sorunlarını gösterebilir.',
  },
  {
    name: 'Tepki süresini analiz edin',
    text: 'Milisaniye cinsinden ortalama gecikmeyi (Delay) kontrol edin. İyi bir oyuncu faresi, ortalama gecikme süresini 1ms\'ye yakın tutmalıdır.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Polling Rate Hakkında Kesin Kılavuz', level: 2 },
    {
      type: 'paragraph',
      html: 'Farenizi mousepad üzerinde fiziksel olarak hareket ettirdiğinizde, bu analog hareket bilgisayarınızın anlayacağı dijital sinyallere dönüştürülmelidir. <strong>Polling Rate</strong>, farenin konumunu bilgisayara "bildirme" sıklığıdır. Hertz (Hz) cinsinden ölçülür.',
    },
    { type: 'title', text: 'Polling Rate Seviyeleri ve Kullanımları', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — Fare her 8 milisaniyede bir bildirim yapar. Ofis kullanımı için uygundur ancak 144Hz monitörlerde kesik kesik hissettirir. <strong>1000 Hz</strong> — Oyun oynamanın altın standardı: her 1 ms\'de bir bildirim yapar. Algılanabilir bir gecikme olmaksızın akıcı hareket. <strong>8000 Hz</strong> — En son teknoloji (Razer, Logitech). Her 0,125 ms\'de bir bildirim yapar ancak güçlü bir CPU gerektirir.',
    },
    { type: 'title', text: 'Hz Neden Dalgalanıyor?', level: 3 },
    {
      type: 'paragraph',
      html: 'Tamamen normal. Çoğu modern fare, güç tasarrufu sağlamak için dinamik bir bildirim hızına sahiptir. Fareyi yavaş hareket ettirirseniz, daha az yeni veri olduğu için daha az bildirim gönderir. Yalnızca hızlı ve sürekli hareketler sensörü gerçek maksimum zirvesine taşır.',
    },
    { type: 'title', text: 'Polling Rate ve DPI: Büyük Karışıklık', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Eman Başına Nokta)</strong> hassasiyettir: imlecin bir inçlik fiziksel hareket başına kaç piksel hareket ettiğidir. <strong>Hz (Polling Rate)</strong> ise güncelleme sıklığıdır: bu hareketin ne kadar akıcı ve zamanında bildirildiğidir. Her iki parametre de birbirinden bağımsızdır ve birbirini tamamlar.',
    },
  ],
  ui: {
    badge: 'Fare Testi',
    title: 'Polling Rate Kontrolü',
    description: 'Hz değerini ölçmek için fareyi hızlı daireler çizerek hareket ettirin.',
    labelAvg: 'Ortalama',
    labelPeak: 'Zirve',
    placeholder: 'Fareyi burada hareket ettirin',
  },
};
