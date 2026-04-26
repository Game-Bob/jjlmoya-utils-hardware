import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-yenileme-hizi-dedektoru';
const title = 'Monitör Yenileme Hızı Dedektörü';
const description = 'requestAnimationFrame kullanarak monitörünüzün yenileme hızını anında ve hassasiyetle tespit edin. Kare kararlılığını test edin ve endüstri standartlarıyla karşılaştırın.';

const faqData = [
  {
    question: 'Yenileme hızı (Hz) nedir?',
    answer: 'Yenileme hızı, monitörünüzün görüntüyü saniyede kaç kez güncellediğidir. 60Hz bir monitör saniyede 60 kez, 144Hz bir monitör ise saniyede 144 kez yenilenir. Daha yüksek hızlar daha akıcı hareket sağlar.',
  },
  {
    question: 'Bu dedektör ne kadar hassas?',
    answer: 'Bu araç, monitörünüzün yenileme döngüsüyle senkronize olan requestAnimationFrame\'i kullanır. Hassasiyet sistem yüküne bağlıdır. Kararlı mod, daha yüksek hassasiyet için daha uzun süre ölçüm yapar.',
  },
  {
    question: 'Kararlı ve Hızlı mod arasındaki fark nedir?',
    answer: 'Hızlı mod, hızlı geri bildirim için kısa bir süre (~3 saniye) ölçüm yapar. Kararlı mod, sistem gürültüsünü filtrelemek ve daha güvenilir sonuçlar sağlamak için daha uzun (~10 saniye) sürer.',
  },
  {
    question: 'Tespit edilen Hz neden monitörümün belirttiğinden farklı?',
    answer: 'Bu durum şu nedenlerle olabilir: kablo bağlantınız gevşek olabilir, sürücüler güncel olmayabilir veya işletim sistemi ölçeklendirmesi çakışıyor olabilir. Ekran kablonuzu çıkarıp takmayı veya GPU sürücülerini güncellemeyi deneyin.',
  },
  {
    question: 'Modern monitörler hangi yenileme hızlarını destekler?',
    answer: 'Yaygın standartlar 60Hz (temel), 75Hz, 120Hz, 144Hz (oyun), 240Hz (rekabetçi oyun) ve 360Hz\'dir (profesyonel e-spor).',
  },
];

const howToData = [
  {
    name: 'Aracı yükleyin',
    text: 'Sadece bu sayfayı açın. Dedektör hemen ölçüme başlar.',
  },
  {
    name: 'Kararlı hale gelmesini bekleyin',
    text: 'Kararlı veya Hızlı modu seçin. Ölçümün pencereyi hareket ettirmeden tamamlanmasına izin verin.',
  },
  {
    name: 'Hız göstergesini kontrol edin',
    text: 'Monitörünüzün yenileme hızı, karşılaştırmalı istatistiklerle (min/maks/ort) birlikte pürüzsüz bir kadranda görünür.',
  },
  {
    name: 'Standartlarla karşılaştırın',
    text: 'Araç, monitörünüzün hangi standartla eşleştiğini gösterir (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Opsiyonel: kare atlama testi',
    text: 'Akıcılığı görsel olarak doğrulamak için ekrandan geçen animasyonlu kareyi izleyin.',
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

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Monitör Yenileme Hızı Dedektörü: Ekran Hz Değerinizi Online Test Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitörünüzün yenileme hızını (60Hz, 144Hz, 240Hz, vb.) anında ve hassasiyetle tespit edin. Kare kararlılığını test edin ve ekranınızın belirtilen teknik özelliklerde çalışıp çalışmadığını doğrulayın.',
    },
    {
      type: 'title',
      text: 'Monitör Yenileme Hızı Neden Önemlidir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yenileme hızı, hareketin ekranınızda ne kadar akıcı göründüğünü belirler. Oyuncular 144Hz+ monitörlerden faydalanırken, genel kullanıcılar 60Hz\'i yeterli bulur. Bu araç, monitörünüzün reklamı yapılan yenileme hızını gerçekten sunup sunmadığını doğrulamaya yardımcı olur.',
    },
    {
      type: 'title',
      text: 'Yenileme Hızınızı Nasıl Tespit Edersiniz?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bu dedektörü yükleyin – ölçüm hemen başlar',
        'Hızlı (3s) veya Kararlı (10s) ölçüm modu arasında seçim yapın',
        'Monitörünüzün Hz değerini hız göstergesi kadranından okuyun',
        'Endüstri standartlarıyla (60, 75, 120, 144, 240, 360Hz) karşılaştırın',
      ],
    },
    {
      type: 'title',
      text: 'Yaygın Yenileme Hızı Standartları',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standart', 'Kullanım Durumu', 'Tipik Kullanıcı'],
      rows: [
        ['60Hz', 'Genel Bilgisayar Kullanımı', 'Ofis, Web Gezintisi'],
        ['75Hz', 'Hafif Oyun', 'Gündelik Oyuncular'],
        ['120Hz', 'Multimedya', 'Konsol, Akış'],
        ['144Hz', 'Rekabetçi Oyun', 'FPS, Hızlı Oyunlar'],
        ['240Hz+', 'Profesyonel e-Spor', 'Profesyonel Oyuncular, Yayıncılar'],
      ],
    },
    {
      type: 'title',
      text: 'Sorun Giderme: Ekran Beklenenden Daha Düşük Hz Gösteriyor',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'HDMI/DisplayPort kablo bağlantılarını kontrol edin – gevşek kablolar bant genişliğini düşürür',
        'GPU sürücülerinizi güncelleyin (NVIDIA, AMD, Intel)',
        'Yüksek yenileme hızının etkinleştirildiğinden emin olmak için işletim sistemi ekran ayarlarını kontrol edin',
        'Monitörünüzdeki farklı kabloları veya bağlantı noktalarını deneyin',
        'Bilgisayarınızı yeniden başlatın ve tekrar test edin',
      ],
    },
    {
      type: 'title',
      text: 'Bu Dedektörün Arkasındaki Teknoloji',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu araç, doğrudan monitörünüzün yenileme döngüsüyle senkronize olan tarayıcının requestAnimationFrame API\'sini kullanır. Animasyon kareleri arasındaki süreyi ölçerek, özel bir donanıma gerek duymadan tam yenileme hızınızı yüksek hassasiyetle hesaplarız.',
    },
  ],
  ui: {
    badge: 'Ekran Testi',
    title: 'Yenileme Hızı Dedektörü',
    description: 'Ekranınızın yenileme hızını anında tespit edin',
    modeStable: 'Kararlı (10s, hassas)',
    modeFast: 'Hızlı (3s, seri)',
    measurementStatus: 'Ölçülüyor...',
    currentHz: 'Mevcut',
    averageHz: 'Ortalama',
    maxHz: 'Maksimum',
    minHz: 'Minimum',
    standardDetected: 'Tespit Edilen Standart',
    frameSkippingTest: 'Kare Atlama Testi',
    startMeasurement: 'Ölçümü Başlat',
    resetMeasurement: 'Sıfırla',
    copyResult: 'Sonucu Kopyala',
    copiedFeedback: 'Panoya kopyalandı!',
    optimalConfiguration: '[OK] Optimal Yapılandırma',
    suboptimalConfiguration: '[UYARI] Optimal Altı',
    unstableRefreshRate: '[UYARI] Kararsız Yenileme Hızı',
    measurementNotStarted: 'Ölçüme hazır',
    switchMonitorHint: 'Test etmek için pencereyi başka bir monitöre sürükleyin',
    incompatibleBrowserMsg: 'Tarayıcınız requestAnimationFrame\'i desteklemiyor',
  },
};
