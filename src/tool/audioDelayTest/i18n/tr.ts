import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ses-gecikme-testi';
const title = 'Ses Gecikme Testi';
const description = 'Hoparlörler, kulaklıklar, Bluetooth cihazlar ve video oynatmada algılanan ses gecikmesini tarayıcı içi lokal darbe testi ile test edin.';

const faq = [
  {
    question: 'Bu ses gecikme testi tam olarak neyi ölçer?',
    answer: 'İsteğe bağlı mikrofon modu, tarayıcı tarafından planlanan bir tık sesi ile mikrofonunuz tarafından yakalanması arasındaki süreyi tahmin eder. Manuel mod, kulakla görsel ve işitsel hizalamayı ayarlamanıza yardımcı olur. Hiçbir mod tüm donanım zincirinizin laboratuvar düzeyinde mutlak ölçümü değildir.',
  },
  {
    question: 'Mikrofon olmadan Bluetooth gecikmesini test edebilir miyim?',
    answer: 'Evet. Darbe dizisini başlatın, Bluetooth u seçin ve flaş ile tık sesi aynı anda gerçekleşiyormuş gibi görünene kadar hizalama kaydırıcısını hareket ettirin. Sonuç, kesin bir donanım gecikmesi iddiası yerine bir hizalama düzeltmesi olarak kaydedilir.',
  },
  {
    question: 'Mikrofon modu neden izin gerektirir?',
    answer: 'Tarayıcının, hoparlörlerinizden veya oda akustiğinden geçtikten sonra test tık sesini duyabilmesi için mikrofon erişimine ihtiyacı vardır. Ses tamamen tarayıcıda yerel olarak işlenir ve yüklenmez.',
  },
  {
    question: 'Mikrofon sonucu neden değişkenlik gösterebilir?',
    answer: 'Oda yansımaları, mikrofon işlemesi, otomatik kazanç kontrolü ve işletim sistemi arabellekleri sonucu etkileyebilir. Sayıyı mevcut kurulumunuz için tahmini bir değer olarak değerlendirin.',
  },
  {
    question: 'Hangi test modunu seçmeliyim?',
    answer: 'Oda içi dinleme için Hoparlörler, doğrudan çıkış için Kablolu kulaklıklar, kablosuz cihazlar için Bluetooth ve ekran ile oynatıcı kontrolü için Video senkronizasyonunu seçin.',
  },
  {
    question: 'Test mikrofon sesimi bir sunucuya gönderiyor mu?',
    answer: 'Hayır. Mikrofon akışı yalnızca tarayıcı analizörü tarafından yerel olarak okunur ve test ses kayıtlarını yüklemez.',
  },
];

const howTo = [
  {
    name: 'Oynatma yolunu seçin',
    text: 'Test ettiğiniz kurulumu tanımlamak için hoparlörler, kablolu kulaklıklar, Bluetooth veya video senkronizasyonunu seçin.',
  },
  {
    name: 'Manuel darbe ile başlayın',
    text: 'Testi başlat düğmesine basın ve turkuaz görsel darbeyi izlerken kısa tık sesini dinleyin. İkisi eşleşene kadar kaydırıcıyı kullanın.',
  },
  {
    name: 'Gerekirse mikrofon ölçümünü ekleyin',
    text: 'Mikrofonu etkinleştir düğmesine basın, izin verin, mikrofonu dinleme konumuna yerleştirin ve diziyi tekrar çalıştırın.',
  },
  {
    name: 'Sonucu bir tahmin olarak okuyun',
    text: 'Ortanca gecikmeyi ve güven düzeyini yalnızca mevcut kurulumunuz için bir yol gösterici olarak kullanın.',
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
    { type: 'title', text: 'Bluetooth ve Video Senkronizasyonu İçin Ses Gecikme Testi', level: 2 },
    {
      type: 'paragraph',
      html: 'Bu tarayıcı tabanlı ses gecikme testi, şu anda kullandığınız cihazdaki görsel ipucu ile ses arasındaki zaman farkını kontrol etmenize yardımcı olur. Bluetooth kulaklıklar, kablosuz hoparlörler, kablolu kulaklıklar ve video senkronizasyon kontrolleri için kullanışlıdır. Araç, bir dosya indirmenize gerek kalmadan tarayıcı içinde yerel olarak kısa tık sesleri üretir.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Mikrofon erişimi olmadan başlatın',
      badge: 'Yerel ve gizli',
      html: '<p>Manuel darbe testi mikrofon olmadan çalışır. Görsel işaretçiyi izleyin ve ses ile flaş aynı anda gerçekleşiyormuş gibi hissedilene kadar kaydırıcıyı ayarlayın. Bu, kesin bir donanım gecikmesi iddiasında bulunmadan faydalı bir düzeltme sağlar.</p>',
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
        'Başlamadan önce Bluetooth u seçin ve rahat bir dinleme ses seviyesi ayarlayın.',
        'Oynatma için kullandığınız aynı tarayıcı ve cihazdan darbe dizisini çalıştırın.',
        'Uzun bir müzik parçasını değerlendirmek yerine görsel darbeyi doğrudan tık sesiyle karşılaştırın.',
        'İki ipucu buluşana kadar hizalama kaydırıcısını hareket ettirin ve düzeltmeyi kaydedin.',
        'Kodek, işletim sistemi, tarayıcı veya mesafeyi değiştirdikten sonra testi tekrarlayın.',
      ],
    },
    {
      type: 'table',
      headers: ['Mod', 'İçin en iyisi', 'Temel kısıtlama'],
      rows: [
        ['Hoparlörler', 'Oda dinlemesi ve TV hoparlörleri', 'Oda mesafesi ve yansımalar akustik yolu etkiler.'],
        ['Kablolu kulaklıklar', 'Doğrudan kulaklık çıkışı', 'Mikrofon, kapalı kulaklıklardan gelen sesi yakalamakta zorlanabilir.'],
        ['Bluetooth', 'Kablosuz kulaklıklar ve hoparlörler', 'Kodek arabelleğe alması cihazlar ve uygulamalar arasında farklılık gösterir.'],
        ['Video senkronizasyonu', 'Ekran ve oynatıcı hizalaması', 'Video oynatıcı kendi kare işleme gecikmesini ekleyebilir.'],
      ],
    },
    {
      type: 'title',
      text: 'İsteğe Bağlı Mikrofon Ölçümü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mikrofon erişimi etkinleştirildiğinde, araç her tık sesi için yerel mikrofon analizörünü izler ve planlanan ses olayından tespit edilen akustik tepe noktasına kadar geçen süreyi kaydeder. Sonuç, tek bir yansımanın tahmini bozmasını önlemek için örneklerin ortancasını kullanır.',
    },
    {
      type: 'tip',
      title: 'Mikrofonu dinlediğiniz yere yerleştirin',
      html: 'Hoparlörler için mikrofonu oturduğunuz konuma yerleştirin ve odayı sessiz tutun. Video senkronizasyonu testlerinde alışılmış düzeninizi kullanın.',
    },
    {
      type: 'title',
      text: 'Tarayıcı Ses Gecikmesi Sonuçları Neden Değişir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ses gecikmesi tüm zincir boyunca oluşur: tarayıcı AudioContext saati, işletim sistemi arabellekleri, donanım kodlaması ve hoparlör sürücüleri. Mikrofon kendi yakalama yolunu ekler. Bu nedenle test, ekipmanınızın mevcut bileşimini tanımlar.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sonucu bir tahmin olarak değerlendirin',
      badge: 'Yalnızca tahmin',
      html: '<p>Sonucu kurulumları karşılaştırmak veya belirgin senkronizasyon sorunlarını gidermek için kullanın. Üretici özelliğinin veya kalibre edilmiş bir laboratuvar ölçümünün yerini almaz.</p>',
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
    calibrationHint: 'Flaş ve tık çakışana kadar kaydırıcıyı hareket ettirin',
    calibrationEarly: 'Ses önde',
    calibrationLate: 'Görsel önde',
    calibrationCenter: 'Hizalandı',
    visualLane: 'Görsel',
    audioLane: 'Ses',
    statusReady: 'Hazır',
    statusRunning: 'Darbe dizisi aktif',
    statusWaiting: 'Darbe bekleniyor',
    resultTitle: 'Mevcut ölçüm',
    latencyLabel: 'Ölçülen gecikme',
    alignmentLabel: 'Hizalama düzeltmesi',
    confidenceLabel: 'Güven düzeyi',
    samplesLabel: 'Örnekler',
    notMeasured: 'Ölçülmedi',
    manualConfidence: 'Yalnızca manuel',
    lowConfidence: 'Düşük güven',
    mediumConfidence: 'Orta güven',
    highConfidence: 'Yüksek güven',
    noMic: 'Mikrofon girişi bu tarayıcıda kullanılamıyor',
    permissionDenied: 'Mikrofon izni verilmedi',
    limitationTitle: 'Sonucu bir tahmin olarak okuyun',
    limitationText: 'Oda yansımaları, mikrofon işlemesi ve arabellekler ölçülen gecikmeyi değiştirir. Hiçbir ses verisi yüklenmez.',
    copyReport: 'Raporu kopyala',
    copied: 'Kopyalandı',
    reset: 'Sıfırla',
    safety: 'Düşük ses seviyesiyle başlayın. Ses bozulursa testi durdurun.',
    pulse: 'SENKRON',
  },
};
