import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-tarama-hizi-testi-hertz';
const title = 'Oyun Kolu Polling Rate ve Hertz Testi';
const description = 'USB veya Bluetooth oyun kolunuzun tarayıcıda algılanan yenileme hızını, rapor aralığını ve milisaniye cinsinden zamanlama kararlılığını ölçün.';

const faq = [
  {
    question: 'Bu oyun kolu polling rate testi neleri ölçer?',
    answer: 'Analog çubuğu hareket ettirirken tarayıcıdaki Gamepad API zaman damgası değişikliklerini ölçer. Görüntülenen Hertz değeri, tarayıcıda gözlemlenen güncelleme hızıdır ve USB veri yolunun doğrudan elektriksel ölçümü değildir.',
  },
  {
    question: 'Tarayıcı oyun kolunun 1000 Hz hızında çalıştığını doğrulayabilir mi?',
    answer: 'Zaman damgası güncellemelerinin sayfaya akıcı bir şekilde ulaşıp ulaşmadığını gösterebilir ancak donanım düzeyinde bir 1000 Hz USB hız aşırtmasını belgeleyemez.',
  },
  {
    question: 'Analog çubuğu neden sürekli dairesel olarak çevirmeliyim?',
    answer: 'Sürekli dairesel hareket her iki ekseni de sürekli değiştirir ve kararlı bir yeni durum akışı sağlar. Çubuğu sabit tutmak yeterli veri üretmez.',
  },
  {
    question: 'USB ve Bluetooth bağlantı performansını karşılaştırabilir miyim?',
    answer: 'Evet, aynı tarayıcıda her iki bağlantı için aynı süre ve dairesel hareketle testi tekrarlayarak frekans, aralık ve jitter değerlerini karşılaştırabilirsiniz.',
  },
];

const howTo = [
  {
    name: 'Oyun kolunu bağlayın ve etkinleştirin',
    text: 'Oyun kolunu USB veya Bluetooth ile bağlayın ve tarayıcının Gamepad API üzerinden algılaması için herhangi bir tuşa basın.',
  },
  {
    name: 'Cihazı ve ölçüm süresini seçin',
    text: 'Listeden oyun kolunu seçin ve dengeli bir ilk ölçüm için 10 saniyelik süreyi ayarlayın.',
  },
  {
    name: 'Analog çubuğu sürekli çevirin',
    text: 'Ölçümü başlatın ve ilerleme halkası dolana kadar sol analog çubuğu pürüzsüz daireler halinde çevirin.',
  },
  {
    name: 'Gözlemlenen hızı ve kararlılığı inceleyin',
    text: 'Aynı test koşulları altında ortalama Hertz, milisaniye aralığı ve jitter değerlerini karşılaştırın.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Oyun kolu polling rate hakkında sıkça sorulan sorular',
  faq,
  bibliographyTitle: 'Teknik referanslar',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Oyun kolunun tarayıcıda algılanan güncelleme hızını ölçün',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç, analog çubuk hareket ederken seçilen oyun kolunun yüksek çözünürlüklü zaman damgalarını izler. Anormal sapmaları temizler, ortalama rapor aralığını hesaplar ve bunu gözlemlenen Hertz değerine dönüştürür (1000 bölü milisaniye). Tüm işlem yerel olarak çalışır.',
    },
    {
      type: 'table',
      headers: ['Metrik', 'Bu değer neyi gösterir', 'Tek başına neyi kanıtlamaz'],
      rows: [
        ['Gözlemlenen hız', 'Sayfanın her saniye okuduğu raporların frekansı', 'USB bağlantı noktasının doğrudan elektriksel hızını'],
        ['Ortalama aralık', 'Zaman damgası güncellemeleri arasında geçen ortalama süre', 'Ekrana kadar olan toplam girdi gecikmesini'],
        ['Jitter (dalgalanma)', '5. ve 95. yüzdelik dilimler arasındaki zaman farkı', 'Tek başına donanımsal bir arızayı'],
        ['Güvenilirlik', 'Test sırasında toplanan örneklerin miktarı ve düzeni', 'Endüstriyel laboratuvar kalibrasyon hassasiyetini'],
      ],
    },
    {
      type: 'title',
      text: 'Tekrarlanabilir bir Hertz testi nasıl yapılır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Arka plandaki ağır uygulamaları kapatın, sekmeyi odaklanmış tutun ve her denemede aynı analog çubuğu sabit bir hızla çevirin. Kablo, Bluetooth veya sistem ayarlarını karşılaştırırken aynı tarayıcıyı ve test süresini kullanın.',
    },
    {
      type: 'tip',
      title: 'Daima aynı koşullar altında karşılaştırın',
      html: 'Kablo veya USB bağlantı noktasını değiştirdikten sonra en az iki test yapın. Anlık tek bir yüksek değer yerine, düşük jitterlı kararlı bir hız daha önemlidir.',
    },
    {
      type: 'title',
      text: 'Bu test neden toplam girdi gecikmesini (Input Lag) ölçmez',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gamepad API, işletim sistemi ve tarayıcı tarafından işlendikten sonraki oyun kolu verilerini okur. Kablonun elektriksel yanıt süresini veya ekranın yenileme gecikmesini ölçmez. Gözlemlenen aralık web tabanlı karşılaştırmalar için mükemmeldir ancak toplam gecikmeyi temsil etmez.',
    },
  ],
  ui: {
    privacyNote: '%100 yerel sinyal işleme',
    stepConnect: 'Bağlayın ve tuşa basın',
    stepMove: 'Çubuğu dairesel çevirin',
    stepRead: 'Hız ve kararlılığı karşılaştırın',
    deviceLabel: 'Algılanan aktif oyun kolu',
    devicePlaceholder: 'Algılamak için oyun kolundaki bir tuşa basın',
    deviceFallback: 'Bağlı oyun kolu',
    durationLabel: 'Ölçüm süresi',
    durationFive: '5 sn',
    durationTen: '10 sn',
    durationTwenty: '20 sn',
    startAction: 'Testi başlat',
    stopAction: 'Durdur',
    resetAction: 'Sıfırla',
    orbitInstruction: 'Ölçüm sırasında sol analog çubuğu daireler halinde çevirin',
    traceLabel: 'Canlı zaman damgası grafiği',
    observedRateLabel: 'Gözlemlenen hız',
    intervalLabel: 'Ortalama aralık',
    jitterLabel: 'Dalgalanma (Jitter)',
    samplesLabel: 'Geçerli örnekler',
    confidenceLabel: 'Test güvenilirliği',
    confidenceLow: 'Düşük',
    confidenceMedium: 'Orta',
    confidenceHigh: 'Yüksek',
    statusWaiting: 'Uyumlu bir oyun kolu bekleniyor',
    statusReady: 'Oyun kolu hazır. Başparmağınız çubuktayken başlata basın.',
    statusMeasuring: 'Zaman damgaları yerel olarak kaydediliyor',
    statusNeedsMovement: 'Veri toplamak için çubuğu daha geniş dairelerle çevirin',
    statusComplete: 'Test tamamlandı. Karşılaştırmak için aynı koşullarda tekrarlayın.',
    statusUnsupported: 'Tarayıcınız Gamepad API yi desteklemiyor',
    statusDisconnected: 'Aktif oyun kolu yok. Bir tane bağlayın ve tuşa basın.',
    statusStopped: 'Test durduruldu. Kısmi sonuç görüntülenmeye devam ediyor.',
    limitHeading: 'Tarayıcı ölçümünün teknik sınırı',
    limitBody: 'Gamepad API üzerinden görünen güncellemeleri ölçer. USB hız aşırtmasını veya toplam gecikmeyi belgelemez.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'aralık',
    progressLabel: 'Ölçüm ilerlemesi',
  },
};
