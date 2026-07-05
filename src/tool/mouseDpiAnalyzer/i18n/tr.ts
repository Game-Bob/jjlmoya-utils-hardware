import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fare-dpi-analizoru';
const title = 'Fare DPI analizörü';
const description =
  'Farenizi bilinen bir fiziksel mesafe kadar hareket ettirerek ve yakalanan işaretçi hareketini piksel olarak karşılaştırarak gerçek fare DPI değerinizi çevrimiçi ölçün.';

const faqData = [
  {
    question: 'Çevrimiçi bir fare DPI test cihazı nasıl çalışır?',
    answer:
      'Sizden fareyi bilinen bir fiziksel mesafe boyunca hareket ettirmenizi ister, tarayıcı hareket olaylarını kaydeder, yakalanan değerleri devicePixelRatio ile düzeltir ve elde edilen pikselleri inç cinsinden mesafeye böler.',
  },
  {
    question: 'Gerçek DPI neden farenin üzerinde yazan değerden farklı olabilir?',
    answer:
      'Sensör toleransları, ürün yazılımı kademeleri, yüzey davranışı, işletim sistemi ölçeklendirmesi, işaretçi hızlandırması ve oyun profili ayarları, ölçülen hareketin yazılımda seçilen nominal DPI değerinden farklı olmasına neden olabilir.',
  },
  {
    question: 'Testten önce işaretçi hızlandırması devre dışı bırakılmalı mı?',
    answer:
      'Evet. Temiz bir DPI ölçümü istiyorsanız, Windows\'ta İşaretçi Hassasiyetini Artır\'ı ve tüm üretici hızlandırma eğrilerini devre dışı bırakın. Yalnızca normal kurulumunuzun nasıl davrandığını görmek istediğinizde etkin bırakın.',
  },
  {
    question: 'Hangi fiziksel mesafeyi kullanmalıyım?',
    answer:
      'Daha uzun mesafeler el hatasını azaltır. Bir kredi kartı genişliği kullanışlıdır, ancak masanızda yeterli alan varsa 100 mm veya 4 inçlik bir cetvel geçişi genellikle daha tekrarlanabilirdir.',
  },
];

const howToData = [
  {
    name: 'Fiziksel bir referans seçin',
    text: 'Çok yüksek DPI için 5 veya 10 mm, geleneksel test için 1 inç veya yeterli masa alanınız olduğunda daha uzun referanslar kullanın.',
  },
  {
    name: 'Yakalama düğmesini basılı tutun',
    text: 'Ekrandaki orta yakalama hedefini basılı tutun, ardından fareyi fiziksel olarak tam olarak seçilen mesafe kadar sağa hareket ettirin.',
  },
  {
    name: 'Fiziksel işarette bırakın',
    text: 'Fare masanızdaki gerçek fiziksel işarete ulaştığında düğmeyi bırakın. Araç inç başına pikseli hesaplar ve ölçülen DPI\'ı raporlar.',
  },
  {
    name: 'Farklı hızlarda tekrarlayın',
    text: 'Yavaş ve hızlı geçişler yapın. DPI büyük ölçüde değişiyorsa, işaretçi hızlandırması veya sensör yumuşatması sonucu etkiliyor olabilir.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Çevrimiçi Fare DPI test cihazı: gerçek sensör hassasiyetini ölçün', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir fare 800, 1600, 3200 veya 26000 DPI değerini tanıtabilir, ancak oyunlarda ve hassas işlerde önemli olan değer, bilgisayara gerçekten ulaşan harekettir. Bu çevrimiçi fare DPI test cihazı, bilinen bir fiziksel hareketi tarayıcıda yakalanan işaretçi hareketiyle karşılaştırarak bu pratik değeri ölçer. Sonuç, fare DPI veya CPI hakkında konuşulurken yaygın olarak kullanılan aynı birim olan inç başına piksel olarak ifade edilir.',
    },
    {
      type: 'paragraph',
      html: 'Test kasıtlı olarak yerel ve basittir: yakalama hedefini basılı tutun, fareyi seçilen fiziksel mesafe kadar tam olarak sağa hareket ettirin ve bırakın. Araç, yoklama hızı betiği veya genel bir fare testi kullanmak yerine yerel hareket deltalarını biriktirir. Hesaplama tarayıcınızda çalıştığı için sürücü indirme, hesap veya buluta yükleme gerekmez.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Önemli test koşulu',
      html: 'Temiz bir DPI ölçümü için, işletim sistemi işaretçi hızlandırmasını ve üretici hızlandırma eğrilerini devre dışı bırakın. Hızlandırma etkin kalırsa, sonuç ham sensör ayarını değil, mevcut işaretçi davranışınızı tanımlar.',
    },
    { type: 'title', text: 'Gerçek DPI Hesaplaması Nasıl Çalışır', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI, inç başına nokta anlamına gelir. Fare bağlamında, kullanıcılar genellikle fare bir fiziksel inç hareket ettiğinde kaç sayım veya işaretçi pikseli üretildiğini tanımlamak için DPI ve CPI\'ı birbirinin yerine kullanır. Bu analizör, kontrollü bir geçiş sırasında yatay hareketi kaydeder, seçilen mesafeyi inçe dönüştürür, ardından yakalanan pikselleri inçe böler. Örneğin, fare 2 inç boyunca 3200 düzeltilmiş piksel bildirirse, ölçülen değer yaklaşık 1600 DPI olur.',
    },
    {
      type: 'list',
      items: [
        'Çok yüksek DPI için 10 mm gibi kısa bir referans veya düşük DPI için daha uzun bir referans seçin.',
        'Tarayıcının yalnızca geçiş sırasında hareketi kaydetmesi için orta yakalama kontrolünü basılı tutun.',
        'Fiziksel olarak sağa doğru hareket edin, yolu mümkün olduğunca düz tutun.',
        'Gerçek fiziksel işarette bırakın ve hesaplanan DPI\'ı okuyun.',
        'Bir geçişe güvenmek yerine birkaç kez tekrarlayın ve tutarlı geçişlerin ortalamasını alın.',
      ],
    },
    {
      type: 'table',
      headers: ['Yakalanan hareket', 'Fiziksel mesafe', 'Ölçülen DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm kredi kartı genişliği', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Vuruşu temiz yapın',
      html: 'Tek bir yatay vuruş, uzun bir mesafeden daha önemlidir. Çok yüksek DPI için 5 mm veya 10 mm ön ayarını kullanın: hareketi ekran içinde kalacak kadar küçük tutar ve hesaplayıcıya bilinen bir fiziksel referans verir. İlerleme çubuğu yalnızca bir giriş sinyali göstergesidir; masadaki cetvel veya kart durma noktasıdır.',
    },
    { type: 'title', text: 'Ölçülen DPI Neden Tanıtılan DPI\'dan Farklı Olabilir', level: 3 },
    {
      type: 'paragraph',
      html: 'Tanıtılan DPI genellikle seçilebilir bir ürün yazılımı kademesidir, her yüzey ve her birim için laboratuvar sertifikalı bir değer değildir. Aynı nominal DPI\'a ayarlanmış iki fare, sensörleri, ürün yazılımı ölçeklendirmesi, kayma ayak yüksekliği, yüzey dokusu, kaldırma davranışı veya işletim sistemi ayarları farklıysa farklı hissedebilir. Küçük değişiklik normaldir; büyük değişiklik genellikle test kurulumunun veya yazılım yolunun ölçümü etkilediği anlamına gelir.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nominal DPI',
          description: 'Fare yazılımında gösterilen veya ürün sayfasında yazılı olan değer. Başlangıç noktası olarak faydalıdır, ancak gerçek hareket çıktısının kanıtı değildir.',
          points: ['Okunması kolay', 'Ürün yazılımı ölçeklendirmesini gizleyebilir', 'Profile göre değişebilir'],
        },
        {
          title: 'Ölçülen DPI',
          description: 'Fiziksel hareket ve yakalanan işaretçi hareketinden hesaplanan değer. Bir fareyi diğeriyle eşleştirmek için en iyisidir.',
          highlight: true,
          points: ['Pratik ve tekrarlanabilir', 'El hassasiyetine duyarlı', 'Gerçek kurulum davranışını gösterir'],
        },
        {
          title: 'Oyun içi hassasiyet',
          description: 'Oyun, fare girdisini kendi hassasiyet değeriyle çarptıktan sonraki nihai kamera veya imleç tepkisi.',
          points: ['Gerçekte hissettiğiniz şey', 'Oyuna özel', 'Bir sensör ölçümü değildir'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Tarayıcı tabanlı DPI ölçümünün artıları ve eksileri',
      items: [
        { pro: 'Sürücü kurulumu gerekmez', con: 'Tarayıcı, elektrik sensör sinyalini değil, işlenmiş işaretçi hareketini görür' },
        { pro: 'Fareleri ve profilleri hızlıca karşılaştırmak için iyidir', con: 'Hızlandırma ayarları etkin bırakılırsa sonucu bozabilir' },
        { pro: 'Yaygın fiziksel referanslarla çalışır', con: 'El hizalaması ve masa işaretleri tekrarlanabilirliği etkiler' },
      ],
    },
    { type: 'title', text: 'Windows, macOS ve Fare Yazılımını Hazırlama', level: 3 },
    {
      type: 'paragraph',
      html: 'Bir DPI ölçer kullanmadan önce, girdi yolunu mümkün olduğunca nötr hale getirin. Windows\'ta, ham davranış istiyorsanız İşaretçi Hassasiyetini Artır\'ı kapatın. Üretici yazılımında, kasıtlı olarak ölçmek istemediğiniz sürece açı yakalama, hızlandırma, dalgalanma kontrolü, yumuşatma veya yüzeye özel yardımcıları devre dışı bırakın. macOS\'ta, işaretçi hızlandırması normal imleç yolunun bir parçasıdır, bu nedenle değer ham sensör sonucu olarak değil, pratik bir sistem sonucu olarak değerlendirilmelidir.',
    },
    {
      type: 'table',
      headers: ['Ayar', 'Ham DPI için önerilen', 'Neden'],
      rows: [
        ['İşaretçi hızlandırması', 'Kapalı', 'Hızlandırma, hıza bağlı olarak hareket çıktısını değiştirir'],
        ['Fare yazılımı DPI kademesi', 'Sabit tek kademe', 'Test sırasında kazara profil değişikliklerini önler'],
        ['Açı yakalama', 'Kapalı', 'Çapraz hareketi değiştirebilir ve doğal sensör çıktısını maskeleyebilir'],
        ['İşletim sistemi ölçeklendirmesi', 'Normal bırakın, araç devicePixelRatio ile düzeltir', 'Analizör, hesaplamasında tarayıcı yakınlaştırmasını ve ekran piksel oranını nötrler'],
        ['Oyun kaplamaları veya makrolar', 'Kapalı', 'Ekstra yazılım girdiyi yakalayabilir ve geçişleri tutarsız hale getirebilir'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'İki fareyi eşleştirme',
      html: 'Eski fareyi üç kez ölçün, ortalamayı not edin, ardından yeni farenin ölçülen değeri yakın olana kadar DPI kademesini ayarlayın. Gerçek sensör çıktısı farklılık gösterebileceğinden, bu genellikle numarayı bir üretici uygulamasından diğerine kopyalamaktan daha faydalıdır.',
    },
    { type: 'title', text: 'Doğru Fiziksel Referansı Seçme', level: 3 },
    {
      type: 'paragraph',
      html: 'Arayüz, yüksek DPI için kısa referanslar ve daha düşük DPI için daha uzun referanslar içerir. İşaretçiniz küçük el hareketiyle ekranı geçtiğinde 5 veya 10 mm kullanın. Fare yaygın masaüstü veya taktik nişancı değerlerine daha yakın yapılandırıldığında 1 inç, 50 mm veya 85.6 mm kart genişliğini kullanın.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'bir inçteki milimetre' },
        { value: '85.6', label: 'yaygın bir kredi kartı genişliğindeki milimetre' },
        { value: '3+', label: 'bir profile güvenmeden önce önerilen tekrar geçiş sayısı' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'İnç başına nokta, genellikle bir inçlik fare hareketiyle üretilen işaretçi hareketini tanımlamak için kullanılır.' },
        { term: 'CPI', definition: 'İnç başına sayım, fareler için genellikle teknik olarak daha doğru olan sensör odaklı bir terim.' },
        { term: 'Hızlandırma', definition: 'Hareket hızına bağlı olarak işaretçi çıktısını değiştiren bir ayar veya eğri.' },
        { term: 'devicePixelRatio', definition: 'CSS pikselleri ile fiziksel ekran pikselleri arasındaki tarayıcı oranı, burada yakınlaştırma ve ekran ölçeklendirme etkilerini normalleştirmek için kullanılır.' },
        { term: 'Açı yakalama', definition: 'Hareketi düzelten ürün yazılımı veya yazılım düzeltmesi, bazen çizim için faydalıdır ancak birçok rekabetçi oyuncu tarafından sevilmez.' },
      ],
    },
    { type: 'title', text: 'Hızlandırma Göstergesini Okuma', level: 3 },
    {
      type: 'paragraph',
      html: 'Hızlandırma göstergesi, işletim sistemi eğrisinin bir laboratuvar kanıtı değildir. Yakalanan geçiş sırasındaki hareket hızı değişimine dayanan pratik bir uyarıdır. Yavaş ve hızlı geçişler çok farklı DPI değerleri üretiyorsa, hızlandırma, yumuşatma, yüzey davranışı veya tutarsız el hareketi etkili olabilir. İyi bir ham kurulum, fiziksel mesafe aynı olduğunda birden fazla geçişte benzer ölçülen DPI üretmelidir.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Sonuç sıçradığında',
      html: 'Bir geçiş aynı mesafede 780 DPI ve sonraki 950 DPI diyorsa, hemen fareyi suçlamayın. Hızlandırma ayarlarını kontrol edin, test mesafesini artırın, fare yolunu yatay tutun ve geçiş sırasında işaretçinin ekran kenarına çarpmadığından emin olun.',
    },
    {
      type: 'summary',
      title: 'Güvenilir DPI testi kontrol listesi',
      items: [
        'Ölçülmüş bir fiziksel referans kullanın, tercihen 100 mm veya daha uzun.',
        'Yatay olarak sağa hareket edin ve tam işarette durun.',
        'Ham profil karşılaştırmaları için hızlandırmayı devre dışı bırakın.',
        'En az üç geçiş yapın ve yayılımı karşılaştırın.',
        'Sadece tanıtılan DPI etiketlerini değil, fareleri eşleştirmek için ölçülen DPI\'ı kullanın.',
      ],
    },
    {
      type: 'message',
      title: 'Gizlilik notu',
      html: 'Bu fare hızlandırma testi ve DPI hesaplaması tarayıcıda yerel olarak çalışır. Aracın sürücü erişimine, cihaz seri numaralarına veya yüklenen girdi günlüklerine ihtiyacı yoktur.',
    },
  ],
  ui: {
    badge: 'Gerçek DPI Laboratuvarı',
    referenceLabel: 'Referans',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Kart',
    lineStart: 'Başlat',
    holdButton: 'Basılı tut ve seçilen mesafeyi hareket ettir',
    holdHint: 'Masada gerçek bir cetvel veya kart kullanın. Çubuk dolduğu için durmayın.',
    progressLabel: 'Giriş sinyali',
    activeHint: 'Hareket izleniyor',
    dpiLabel: 'Ölçülen DPI',
    pixelsLabel: 'Düzeltilmiş hareket',
    distanceReadout: 'Fiziksel mesafe',
    ratioLabel: 'Piksel oranı',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Yakalamaya hazır',
    statusTracking: 'Hareket izleniyor...',
    statusDone: 'Ölçüm tamamlandı',
    reset: 'Sıfırla',
    accelerationTitle: 'Hızlandırma sinyali',
    accelerationHint: 'Tutarlılığı karşılaştırmak için yavaş ve hızlı hızlarda tekrarlayın.',
    accelerationLow: 'kararlı',
    accelerationMedium: 'değişken',
    accelerationHigh: 'yüksek sapma',
    sampleCount: 'Örnekler',
  },
};
