import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-gecikme-testi';
const title = 'Input Lag & Sistem Gecikmesi Testi';
const description = 'Yüksek hassasiyetli zamanlama ve kare senkronizasyonu kullanarak donanım girdi gecikmesi ve sistem gecikmesini ölçen çevrim içi araç.';

const faqData = [
  {
    question: 'Input lag ve sistem gecikmesi nedir?',
    answer: 'Input lag, kullanıcının fiziksel bir eylemi (fareye tıklama veya klavyede bir tuşa basma) ile ekranda güncellenmiş görsel çıktının görünmesi arasındaki toplam zaman gecikmesidir.',
  },
  {
    question: 'Bu çevrim içi gecikme testi girdi gecikmesini nasıl ölçer?',
    answer: 'performance.now() kullanarak donanım olay zaman damgalarını yakalar ve olaydan işlemeye kadar olan zaman farkını hesaplamak için bunları sonraki requestAnimationFrame kare döngüleriyle ilişkilendirir.',
  },
  {
    question: 'Oyunlar için iyi bir input lag değeri nedir?',
    answer: '10 ms nin altı rekabetçi e-sporlar için son derece hızlı kabul edilir. 10 ms ile 20 ms arası hızlı, 20 ms ile 35 ms arası makul ve 35 ms üzeri fark edilir bir gecikmedir.',
  },
  {
    question: 'Bilgisayarımdaki input lag değerini nasıl düşürebilirim?',
    answer: 'Monitör yenileme hızınızı artırın, VSync i kapatın, G-Sync veya FreeSync i açın, USB fare bildirim hızını 1000Hz üzerine çıkarın ve NVIDIA Reflex i etkinleştirin.',
  },
  {
    question: 'Ekran yenileme hızı input lag değerini etkiler mi?',
    answer: 'Evet. Daha yüksek yenileme hızları kare süresini kısaltır. 60Hz bir ekranın kare süresi 16,67 ms iken, 240Hz bir ekranın kare süresi yalnızca 4,17 ms dir.',
  },
];

const howToData = [
  {
    name: 'Test modunu seçin',
    text: 'Anında Yanıt, Tuş Basma Gecikmesi veya Görsel Tepki Gecikmesi modunu seçin.',
  },
  {
    name: 'Fiziksel girdiler gerçekleştirin',
    text: 'Donanım girdi olayları oluşturmak için hedef kutunun içine tıklayın veya tuşlara basın.',
  },
  {
    name: 'Gerçek zamanlı gecikme ölçümlerini gözlemleyin',
    text: 'Hesaplanan ortalama, minimum, maksimum gecikme ve sapma (jitter) değerlerini inceleyin.',
  },
  {
    name: 'Ekran kare zamanlamasını kontrol edin',
    text: 'Ekran yenileme kararlılığını doğrulamak için mevcut FPS ve kare süresini izleyin.',
  },
  {
    name: 'Ölçüm geçmişini analiz edin',
    text: 'Gecikme sıçramalarını ve sapmaları belirlemek için geçmiş günlüğünü inceleyin.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Sistem Gecikmesi',
  modeInstant: 'Anında Yanıt',
  modeKey: 'Tuş Basma Gecikmesi',
  modeVisual: 'Görsel Tepki Gecikmesi',
  targetClickPrompt: 'Gecikmeyi ölçmek için bu kutunun içine tıklayın veya dokunun',
  targetKeyPrompt: 'Klavye gecikmesini ölçmek için herhangi bir tuşa (veya Boşluk tuşuna) basın',
  targetWaitPrompt: 'Yeşil arka planı bekleyin...',
  targetNowPrompt: 'ŞİMDİ TIKLAYIN!',
  labelAvgLatency: 'Ortalama Gecikme',
  labelMinLatency: 'Minimum Gecikme',
  labelMaxLatency: 'Maksimum Gecikme',
  labelJitter: 'Gecikme Sapması (Standart Sapma)',
  labelFps: 'Mevcut FPS',
  labelFrameTime: 'Kare Süresi',
  labelSamples: 'Örnekler',
  labelGrade: 'Gecikme Derecesi',
  gradeUltraFast: 'Çok Hızlı (<10ms)',
  gradeFast: 'Hızlı (10-20ms)',
  gradeModerate: 'Makul (20-35ms)',
  gradeHigh: 'Yüksek (>35ms)',
  btnReset: 'Ölçümleri Sıfırla',
  btnCopyReport: 'Benchmark Raporunu Kopyala',
  reportCopied: 'Rapor Kopyalandı!',
  historyTitle: 'Son Gecikme Ölçümleri',
  pipelineTitle: 'Donanım Sinyal Yolu Gecikme Analizi',
  distributionTitle: 'Gecikme Frekans Dağılımı',
  sampleCol: 'Örnek',
  typeCol: 'Girdi Türü',
  latencyCol: 'Ölçülen Gecikme',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'PC Oyunlarında Input Lag ve Sistem Gecikmesi Nedir?',
    },
    {
      type: 'paragraph',
      html: 'Input lag (girdi gecikmesi), kullanıcının fiziksel bir eylemi gerçekleştirmesi (fare düğmesine tıklaması veya klavye tuşuna basması) ile ekranda görsel yanıtın işlenmesi arasındaki kesin zaman farkını temsil eder. Rekabetçi e-sporlarda ve hızlı oyunlarda sistem gecikmesini en aza indirmek hedefleme hassasiyeti ve tepki hızı için kritik önem taşır. Toplam sistem gecikmesi; USB bildirimi, işletim sistemi olay işleme, oyun motoru işleme, GPU kare arabellekleri ve ekran piksel tepki sürelerinin birikiminden oluşur.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'E-Spor Hedef Gecikmesi',
          trend: 'En ideal seviye',
        },
        {
          value: '1000 Hz',
          label: 'Standart USB Bildirim Hızı',
          trend: '1.0 ms aralık',
        },
        {
          value: '240 Hz',
          label: 'Yüksek Yenilemeli Monitör',
          trend: '4.16 ms kare süresi',
        },
        {
          value: '16.6 ms',
          label: '60Hz Kare Süresi',
          trend: 'Temel ekran gecikmesi',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Tarayıcı Tabanlı Gecikme Ölçümü Nasıl Çalışır?',
      html: 'Bu test, <code>performance.now()</code> aracılığıyla elde edilen yüksek hassasiyetli donanım zaman damgalarını DOM girdi olaylarıyla (<code>pointerdown</code> ve <code>keydown</code>) birleştirir. Olay kaydını <code>requestAnimationFrame</code> aracılığıyla ekran yenileme döngüleriyle senkronize ederek, fiziki eylemden ekran güncellenmesine kadar geçen zaman farkını doğrudan tarayıcınızda hesaplar.',
    },
    {
      type: 'title',
      text: 'Anahtardan Ekrana Donanım Sinyal Yolu',
    },
    {
      type: 'paragraph',
      html: 'Girdi gecikmesini etkili bir şekilde teşhis etmek ve azaltmak için fiziksel anahtar tetiklemesinden ekran görüntüsüne kadar olan sinyal zincirini anlamak gerekir. Toplam sistem gecikmesi; çevre birimi, işletim sistemi, işleme motoru ve ekran paneli gecikmelerinin toplamıdır.',
    },
    {
      type: 'table',
      headers: ['Zincir Bileşeni', 'Tipik Gecikme', 'Temel Darboğaz', 'Optimasyon Stratejisi'],
      rows: [
        ['Çevre Birimi Anahtarı', '0.2 ms - 5.0 ms', 'Mekanik sıçrama gecikmesi', 'Optik anahtarlar kullanın'],
        ['USB Bildirim Hızı', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz', 'Bildirim hızını 1000Hz üzerine çıkarın'],
        ['İşletim Sistemi Kuyruğu', '0.5 ms - 3.0 ms', 'Arka plan işletim sistemi görevleri', 'Windows Oyun Modunu açın'],
        ['Oyun İşleme Motoru', '4.0 ms - 20.0 ms', 'Yüksek CPU yükü', 'NVIDIA Reflex / AMD Anti-Lag kullanın'],
        ['GPU Kare Arabelleği', '8.0 ms - 33.0 ms', 'VSync açık, çoklu arabellek', 'VSync i kapatın, VRR kullanın'],
        ['Ekran Görüntü İşleme', '1.0 ms - 15.0 ms', 'TV/Monitör görüntü işlemcileri', 'TV veya monitörde Oyun Modunu açın'],
      ],
    },
    {
      type: 'tip',
      title: 'Yüksek Ekran Kartı Yükünde İşleme Gecikmesi Nasıl Düşürülür?',
      html: 'Ekran kartı %99 kullanım oranına ulaştığında, grafik sürücüsü kareleri önceden arabelleğe alır. Bu durum ciddi bir input lag (genellikle 30 ms ile 50 ms arası) yaratır. Kare hızınızı GPU nun maksimum kapasitesinin biraz altına sınırlayın veya NVIDIA Reflex i etkinleştirin.',
    },
    {
      type: 'title',
      text: 'Oyuncu Faresi, Klavye ve Dokunmatik Ekran Gecikme Karşılaştırması',
    },
    {
      type: 'paragraph',
      html: 'Farklı girdi cihazları, kullanılan donanım mimarisine ve iletişim protokollerine bağlı olarak belirgin gecikme farklılıkları gösterir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Oyuncu Fareleri',
          description: 'Hızlı kablosuz (2.4GHz) veya kablolu bağlantı.',
          highlight: '0.5ms - 2ms Gecikme',
          points: [
            '1000Hz ile 8000Hz arası bildirim hızı',
            'Sıçrama gecikmesi olmayan optik anahtarlar',
            'Çok düşük hareket gecikmeli sensörler',
          ],
        },
        {
          title: 'Mekanik Klavyeler',
          description: 'Sıçrama kontrollü matris taraması.',
          highlight: '1ms - 10ms Gecikme',
          points: [
            'Hızlı tetiklemeli Hall-effect manyetik anahtarlar',
            '8000Hz e kadar matris tarama hızı',
            'Ayarlanabilir aktivasyon mesafesi',
          ],
        },
        {
          title: 'Mobil Dokunmatik Ekranlar',
          description: 'Mobil cihazlarda kapasitif örnekleme.',
          highlight: '15ms - 45ms Gecikme',
          points: [
            'Dokunmatik örnekleme hızı (120Hz - 480Hz)',
            'İşletim sistemi görüntü birleştirici gecikmesi',
            'Kapasitif filtreleme algoritmaları',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Ekran Yenileme Hızının Ekran Gecikmesine Etkisi',
    },
    {
      type: 'paragraph',
      html: 'Monitörün yenileme hızı, olası minimum görüntüleme gecikmesini doğrudan belirler.',
    },
    {
      type: 'list',
      items: [
        '60 Hz Ekran: 1 kare = 16.67 ms kare süresi (Ortalama ekran gecikmesi: ~8.33 ms)',
        '120 Hz Ekran: 1 kare = 8.33 ms kare süresi (Ortalama ekran gecikmesi: ~4.16 ms)',
        '144 Hz Ekran: 1 kare = 6.94 ms kare süresi (Ortalama ekran gecikmesi: ~3.47 ms)',
        '240 Hz Ekran: 1 kare = 4.17 ms kare süresi (Ortalama ekran gecikmesi: ~2.08 ms)',
        '360 Hz Ekran: 1 kare = 2.78 ms kare süresi (Ortalama ekran gecikmesi: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Fiziksel girdiden ekrandaki görsel yanıta kadar geçen toplam süre.',
        },
        {
          term: 'Jitter (Gecikme Sapması)',
          definition: 'Ölçümlerin standart sapması olup sistemin zamanlama kararlılığını gösterir.',
        },
        {
          term: 'VSync (Dikey Senkronizasyon)',
          definition: 'Ekran yırtılmasını önler ancak girdi gecikmesini önemli ölçüde artırır.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'G-Sync ve FreeSync gibi monitör yenilemesini GPU çıktısına dinamik olarak eşleyen teknolojiler.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Tarayıcı Tabanlı Gecikme Ölçümünün Avantajları ve Sınırları',
    },
    {
      type: 'paragraph',
      html: 'Gecikmeyi tarayıcı içinde ölçmek, özel donanım ekipmanı gerektirmeden anında erişim sağlar.',
    },
    {
      type: 'proscons',
      title: 'Tarayıcı Ölçüm Değerlendirmesi',
      items: [
        {
          pro: 'Yazılım kurulumu veya özel donanım gerektirmez',
          con: 'Tarayıcı olay döngüsünden ve işletim sistemi pencere yöneticisinden etkilenir',
        },
        {
          pro: 'performance.now ile mikro saniye hassasiyetinde zamanlayıcı',
          con: 'Ekran piksellerinin optik tepki süresini doğrudan ölçemez',
        },
        {
          pro: 'Farklı çevre birimleri arasında anında karşılaştırmalı test',
          con: 'Güvenlik nedenleriyle tarayıcı zamanlayıcı hassasiyet sınırlandırması',
        },
      ],
    },
    {
      type: 'title',
      text: 'Yüksek Input Lag Durumunda Teşhis',
    },
    {
      type: 'paragraph',
      html: 'Test sonuçlarınız yüksek gecikme (>30 ms) gösteriyorsa, aşağıdaki ayarları kontrol edin.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Yüksek Gecikme Teşhis Bildirimi',
      html: 'Ortalama input lag değeriniz 35ms yi aşıyorsa, ekran kartı sürücünüzde VSync in açık olup olmadığını kontrol edin. Tarayıcıda donanım hızlandırmasının kapalı olması da işlemciye ek yük bindirerek gecikmeyi artırabilir.',
    },
    {
      type: 'title',
      text: 'Sistem Gecikmesini Düşürmek İçin Adım Adım Rehber',
    },
    {
      type: 'paragraph',
      html: 'Sistem gecikmesini azaltmak için bu teknik adımları takip edin.',
    },
    {
      type: 'summary',
      title: 'Gecikme Optimizasyon Kontrol Listesi',
      items: [
        'Fare USB bildirim hızını kendi yazılımından 1000Hz veya üzerine ayarlayın.',
        'Windows ayarlarından Donanım Hızlandırmalı GPU Zamanlamasını (HAGS) açın.',
        'Görüntü işleme gecikmesini baypas etmek için TV veya monitörde Oyun Modunu etkinleştirin.',
        'Genel VSync i kapatın ve G-Sync veya FreeSync kullanın.',
        'Destekleyen oyunlarda NVIDIA Reflex veya AMD Anti-Lag ı açın.',
        'Tarayıcı ayarlarında Donanım Hızlandırmasının açık olduğundan emin olun.',
      ],
    },
    {
      type: 'message',
      title: 'Güvenilir Ölçümler İçin İpucu',
      html: 'En doğru sonuçlar için arka plan uygulamalarını kapatın, tarayıcıyı tam ekranda çalıştırın ve en az 15-20 test örneği alın.',
    },
  ],
};
