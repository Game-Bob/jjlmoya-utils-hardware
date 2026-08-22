import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ses-gecikmesi-testi';
const title = 'Ses Gecikmesi Testi';
const description = 'Hoparlörler, kulaklıklar, Bluetooth cihazları ve video senkronizasyonundaki algılanan ses gecikmesini tespiti edin.';

const faq = [
  {
    question: 'Bu ses gecikmesi testi tam olarak neyi ölçer?',
    answer: 'İsteğe bağlı mikrofon modu, tarayıcı tarafından zamanlanan tık sesi ile mikrofonun algıladığı an arasındaki süreyi tahmin eder.',
  },
  {
    question: 'Mikrofon olmadan Bluetooth gecikmesini test edebilir miyim?',
    answer: 'Evet. İmpuls dizisini başlatın, Bluetooth seçeneğini seçin ve flaş ile tık sesi aynı ana denk gelene kadar kaydırıcıyı ayarlayın.',
  },
  {
    question: 'Mikrofon modunun neden izne ihtiyacı var?',
    answer: 'Tarayıcının, hoparlörden yayılan test sesini dinleyebilmesi için mikrofona erişmesi gerekir. İşlem yerel olarak yapılır.',
  },
  {
    question: 'Mikrofon ölçüm sonucu neden değişebilir?',
    answer: 'Oda yansımaları, mikrofon işlemesi ve işletim sistemi arabellekleri sonucu değiştirebilir.',
  },
  {
    question: 'Hangi test modunu seçmeliyim?',
    answer: 'Oda için Hoparlörler, doğrudan kablolu çıkış için Kablolu Kulaklıklar ve kablosuz için Bluetooth modunu seçin.',
  },
  {
    question: 'Mikrofon sesim bir sunucuya gönderiliyor mu?',
    answer: 'Hayır. Mikrofon akışı yalnızca tarayıcı belleğinde yerel olarak analiz edilir ve hiçbir ses kaydı yüklenmez.',
  },
];

const howTo = [
  {
    name: 'Oynatma yolunu seçin',
    text: 'Hoparlörler, kablolu kulaklıklar, Bluetooth veya video senkronizasyonunu seçin.',
  },
  {
    name: 'Manuel impuls ile başlayın',
    text: 'Testi başlat butonuna basın, tık sesini dinleyin ve kaydırıcıyı görsel sinyalle eşleşene kadar ayarlayın.',
  },
  {
    name: 'Gerekirse mikrofon ölçümünü etkinleştirin',
    text: 'Mikrofonu etkinleştir butonuna tıklayın, izin verin ve mikrofonu dinleme noktasına yerleştirin.',
  },
  {
    name: 'Sonucu bir tahmin olarak değerlendirin',
    text: 'Kurulumları karşılaştırmak için ortanca gecikme süresini ve güvenilirlik değerini kullanın.',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Bluetooth ve Video Senkronizasyonu İçin Ses Gecikmesi Testi', level: 2 },
    {
      type: 'paragraph',
      html: 'Bu tarayıcı tabanlı ses gecikmesi testi, görsel sinyal ile ses arasındaki zaman farkını değerlendirmenize yardımcı olur.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Mikrofon erişimi olmadan başlayın',
      badge: 'Yerel ve gizli',
      html: '<p>Manuel test mikrofon olmadan çalışır. Görsel işareti takip edin ve kaydırıcıyı ayarlayın.</p>',
    },
    {
      type: 'title',
      text: 'Bluetooth Ses Gecikmesi Nasıl Test Edilir',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Bluetooth modunu seçin ve rahat bir ses seviyesi ayarlayın.',
        'İmpuls dizisini tarayıcınızdan başlatın.',
        'Görsel flaş ile duyulabilir tık sesini karşılaştırın.',
        'İki sinyal örtüşene kadar hizalama kaydırıcısını ayarlayın.',
        'Kodek veya cihaz değiştirdiğinizde testi tekrarlayın.',
      ],
    },
    {
      type: 'table',
      headers: ['Mod', 'Şunun için en iyisi', 'Ana sınırlama'],
      rows: [
        ['Hoparlörler', 'Oda dinlemesi ve TV', 'Mesafe ve oda yansımaları ölçümü etkiler.'],
        ['Kablolu kulaklıklar', 'Doğrudan analog çıkış', 'Mikrofon kapalı kulaklıkları algılamakta zorlanabilir.'],
        ['Bluetooth', 'Kablosuz cihazlar', 'Kodek arabelleği cihaza göre değişir.'],
        ['Video senkronizasyonu', 'Ekran ve oynatıcı hizalaması', 'Video oynatıcı kendi görüntü gecikmesini ekleyebilir.'],
      ],
    },
    {
      type: 'title',
      text: 'İsteğe Bağlı Mikrofon Ölçümü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mikrofon erişimi etkinleştirildiğinde araç, sesin yayılması ile akustik tepe noktası arasındaki süreyi ölçer.',
    },
    {
      type: 'tip',
      title: 'Mikrofonu dinleme noktasına yerleştirin',
      html: 'Hoparlörler için mikrofonu genellikle oturduğunuz yere yerleştirin ve sessiz bir ortam sağlayın.',
    },
    {
      type: 'title',
      text: 'Ses Gecikmesi Sonuçları Neden Değişir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ses gecikmesi tüm zincirden kaynaklanır: AudioContext saati, işletim sistemi arabellekleri ve Bluetooth kodeki.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sonuçların Değerlendirilmesi',
      badge: 'Tahmini değer',
      html: '<p>Sonucu kurulumları karşılaştırmak için kullanın. Profesyonel laboratuvar ölçümünün yerini almaz.</p>',
    },
  ],
  ui: {
    badge: 'Gecikme gözlemevi',
    modeLabel: 'Oynatma yolu',
    modeSpeakers: 'Hoparlörler',
    modeWired: 'Kablolu',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Video senkronizasyonu',
    startTest: 'Testi başlat',
    stopTest: 'Testi durdur',
    enableMic: 'Mikrofonu etkinleştir',
    micEnabled: 'Mikrofon hazır',
    calibrationTitle: 'Hizalama düzeltmesi',
    calibrationHint: 'Flaş ve tık sesi eşleşene kadar kaydırıcıyı hareket ettirin',
    calibrationEarly: 'Ses önde',
    calibrationLate: 'Görsel önde',
    calibrationCenter: 'Hizalandı',
    visualLane: 'Görsel',
    audioLane: 'Ses',
    statusReady: 'Hazır',
    statusRunning: 'İmpuls dizisi çalışıyor',
    statusWaiting: 'İmpuls bekleniyor',
    resultTitle: 'Mevcut ölçüm',
    latencyLabel: 'Ölçülen gecikme',
    alignmentLabel: 'Hizalama düzeltmesi',
    confidenceLabel: 'Güvenilirlik',
    samplesLabel: 'Örnekler',
    notMeasured: 'Ölçülmedi',
    manualConfidence: 'Yalnızca manuel',
    lowConfidence: 'Düşük güvenilirlik',
    mediumConfidence: 'Orta güvenilirlik',
    highConfidence: 'Yüksek güvenilirlik',
    noMic: 'Mikrofon girişi bu tarayıcıda kullanılamıyor',
    permissionDenied: 'Mikrofon izni verilmedi',
    limitationTitle: 'Sonucu bir tahmin olarak okuyun',
    limitationText: 'Oda yansımaları ve sistem arabellekleri ölçümü değiştirir. Hiçbir ses verisi yüklenmez.',
    copyReport: 'Raporu kopyala',
    copied: 'Kopyalandı',
    reset: 'Sıfırla',
    safety: 'Düşük ses seviyesi ile başlayın. Seste bozulma olursa testi durdurun.',
    pulse: 'SENKRON',
  },
};
