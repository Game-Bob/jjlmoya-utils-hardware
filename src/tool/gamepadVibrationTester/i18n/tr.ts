import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'oyun-kolu-titresim-testi-online';
const title = 'Çevrimiçi Oyun Kolu Titreşim Testi';
const description =
  'Tarayıcınızda oyun kolunuzun haptik motorlarını ve Dual-Rumble titreşimini test edin. Xbox, DualShock, DualSense ve genel kontrolcüleri destekler.';

const faqData = [
  {
    question: 'Oyun kolumu çevrimiçi test etmek için neye ihtiyacım var?',
    answer:
      'Oyun kolunuzu USB kablosuyla bilgisayara veya mobil cihaza bağlamanız ya da Bluetooth üzerinden eşleştirmeniz yeterlidir. Bağlandıktan sonra algılanması için herhangi bir düğmeye basın.',
  },
  {
    question: 'Her oyun kolu modeliyle çalışır mı?',
    answer:
      'Cihazınız ve işletim sisteminiz desteklediği sürece bilinen markaların (PlayStation veya Xbox gibi) çoğu modern oyun kolu uyumludur.',
  },
  {
    question: 'Oyun kolumun sağ tarafı solundan daha az titriyor, bu normal mi?',
    answer:
      'Evet, tamamen normal. Oyun kollarında genellikle bir tarafın güçlü, derin titreşimleri, diğer tarafın ise hızlı, hafif titreşimleri işlediği asimetrik bir tasarım bulunur.',
  },
  {
    question: 'Bu testleri çalıştırmak çok pil tüketir mi?',
    answer:
      'Titreşim, kablosuz bir oyun kolundaki en enerji tüketen işlevlerden biridir. Sürekli ve uzun testler çalıştırmak pili normalden daha hızlı tüketecektir.',
  },
];

const howToData = [
  {
    name: 'Oyun kolunu bağlayın ve açın',
    text: 'Oyun kolunuzu USB kablosu veya Bluetooth aracılığıyla PC, Mac veya mobil cihazınıza bağlayın.',
  },
  {
    name: 'Oyun kolunda bir düğmeye basın',
    text: 'Tarayıcılar, oyun kolunun algılanması ve web iletişiminin başlaması için en az bir düğmeye basmanızı gerektirir.',
  },
  {
    name: 'Titreşim motorlarını ayarlayın',
    text: 'Güçlü Motor (Düşük) ve İnce Motor (Yüksek) gücünü bağımsız olarak yapılandırın.',
  },
  {
    name: 'Desenleri çalıştırın',
    text: 'Hazır ayarlardan birine basın veya parametreleri manuel olarak yapılandırıp her bir bileşeni hissetmek için sinyali gönderin.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'Haptik titreşim nasıl çalışır — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Oyun kolunuzun titreşimini nasıl denetlersiniz', level: 2 },
    {
      type: 'paragraph',
      html: 'Haptik geri bildirim, oyun donanımının en sürükleyici öğelerinden biridir. Bir motor arızalandığında ilk semptomlar genellikle anormal vızıltı veya asimetrik titreşimlerdir. Bunları erken teşhis etmek büyük arızaları önler.',
    },
    { type: 'title', text: 'Neden titreşim testi yapılmalı?', level: 3 },
    {
      type: 'paragraph',
      html: 'İkinci el bir oyun kolu satın alırken, sürücüleri güncelledikten sonra veya bir düşmeden sonra haptik motorları test etmek gerçek donanım arızalarını yazılım sorunlarından ayırmaya yardımcı olur. Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro ve genel USB oyun kollarıyla uyumludur.',
    },
    { type: 'title', text: 'Dual-Rumble ve Lineer Aktüatör Mimarisi Karşılaştırması', level: 3 },
    {
      type: 'paragraph',
      html: 'Klasik oyun kolları (Xbox, DualShock) iki asimetrik mikro motor kullanır: sol motor derin, gmbürtülü titreşimler üretir; sağdaki ise hızlı, tiz vızıltılar çıkarır. DualSense gibi gelişmiş cihazlar doku ve direnci simüle eden lineer aktüatörler kullanır.',
    },
    { type: 'title', text: 'Semptom bazlı teşhis kılavuzu', level: 3 },
    {
      type: 'paragraph',
      html: 'Her motoru bağımsız olarak %100 güçte etkinleştirin. Her ikisi de aynı sesi çıkarıyorsa oyun kolu tek motorlu bir kopya olabilir. Biri yanıt vermiyorsa kasayı açmadan önce bağlantıyı kontrol edin. Kısmi yoğunlukları test edin: kaliteli motorlar bir açma/kapama düğmesi gibi değil, kademeli olarak yanıt verir.',
    },
  ],
  ui: {
    badge: 'Titreşim Testi',
    title: 'Oyun Kolu Titreşim Test Edici',
    description: 'Oyun kolunuzun Dual-Rumble motoru üzerinde doğrudan kontrol.',
    deviceDisconnected: 'Oyun Kolu Bağlantısı Kesildi',
    deviceDisconnectedSub: 'Başlamak için oyun kolunuzdaki bir düğmeye basın',
    deviceFallback: 'Oyun Kolu Bağlandı',
    deviceConnectedSub: 'Kararlı bağlantı. Teste hazır.',
    noSupportWarning: "Tarayıcınızda Dual-Rumble desteği algılanmadı. Temel genel titreşim kullanılıyor.",
    tabPresets: 'En İyi Hazır Ayarlar',
    tabCustom: 'Saf Hassasiyet',
    presetHeavyTitle: 'Çekiç Darbesi',
    presetHeavyDesc: '300ms boyunca ağır motor maksimumda. Güçlü bir darbeyi simüle eder.',
    presetLightTitle: 'Arı Vızıltısı',
    presetLightDesc: 'Yalnızca sağ motor. Olağandışı vızıltıları tespit etmek için idealdir.',
    presetHeartbeatTitle: 'Kalp Atışı',
    presetHeartbeatDesc: 'Hafif ardışık darbeler. Eylemsizlik tutuşunu kontrol etmek için mükemmeldir.',
    presetSongTitle: 'Madeni Para Ritmi',
    presetSongDesc: 'Ardışık madeni para seslerini simüle eder. Kısa ve dokunsal.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Queen'in klasiği ellerinizde: güm, güm, şak!",
    presetEarthquakeTitle: 'Maksimum Deprem!',
    presetEarthquakeDesc: 'Her iki motor da %100 patlayıcı güçte. ÇOK yoğun.',
    customStrongLabel: 'Güçlü Kuvvet (Sol)',
    customWeakLabel: 'Zayıf Kuvvet (Sağ)',
    customDurationLabel: 'Darbe Süresi',
    btnSendSignal: 'SİNYALİ ŞİMDİ GÖNDER',
  },
};
