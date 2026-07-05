import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oled-ekran-yanik-duzeltici';
const title = 'OLED Ekran Yanık Düzeltici';
const description =
  'Hızlı RGB renk döngüleri, beyaz gürültü, zorunlu fotosensitivite uyarısı ve yerleşik bir zamanlayıcı ile tam ekran OLED yanık düzeltici ve LCD takılı piksel çalıştırıcı çalıştırın.';

const faqData = [
  {
    question: 'OLED yanık düzeltici kalıcı yanığı giderebilir mi?',
    answer:
      'Hiçbir tarayıcı aracı kalıcı organik alt piksel aşınmasını tersine çeviremez. Bir piksel çalıştırıcı geçici görüntü tutulmasını azaltabilir, hafif gölgelenmeyi daha az görünür hale getirebilir veya bir izin geçici tutulma mı yoksa kalıcı yanık mı olduğunu teşhis etmeye yardımcı olabilir.',
  },
  {
    question: 'Bu, fotosensitif epilepsisi olan kişiler için güvenli mi?',
    answer:
      'Test, hızla yanıp sönen renkler ve yüksek kontrastlı parazit kullanır. Fotosensitif epilepsi, migren duyarlılığı, nöbet riski veya yanıp sönen ışıklardan rahatsızlık duyan kişiler çalıştırmamalıdır.',
  },
  {
    question: 'Bu, takılı bir LCD pikseli onarabilir mi?',
    answer:
      'Alt piksel durumunu hızla değiştirerek kırmızı, yeşil, mavi veya beyaz olarak takılı kalan bir piksele bazen yardımcı olabilir. Ölü siyah bir pikseli veya fiziksel panel hasarını onaramaz.',
  },
  {
    question: 'Piksel çalıştırıcıyı ne kadar süre çalıştırmalıyım?',
    answer:
      'Takılı bir piksel veya hafif görüntü tutulması için 5 ila 10 dakika ile başlayın. Daha uzun çalışmalar denetlenmeli, parlaklık makul seviyede tutulmalı ve ekranın soğumasına izin verilmelidir.',
  },
  {
    question: 'Araç neden video yerine canvas kullanıyor?',
    answer:
      'Desenler doğrudan HTML5 Canvas içinde oluşturulur, bu nedenle sayfanın ağır video dosyalarına ihtiyacı yoktur. Bu, yüklemeyi hızlı tutar ve renk ve gürültü döngüsünü tam ekran boyutuna duyarlı hale getirir.',
  },
];

const howToData = [
  {
    name: 'Fotosensitivite uyarısını okuyun',
    text: 'Yanıp sönen ışık, yüksek kontrastlı desenler, migren veya nöbet riski sizi veya yakınınızdaki birini etkileyebilecekse devam etmeyin.',
  },
  {
    name: 'Kısa bir ilk çalıştırma ayarlayın',
    text: 'İlk geçiş için 5 ila 10 dakika seçin, Hibrit modu seçin ve parlaklığı rahat bir seviyede tutun.',
  },
  {
    name: 'Tam ekran onarımı başlatın',
    text: 'Uyarıyı onaylayın, Onarımı Başlat düğmesine basın ve canvasın diğer pencereleri ekran üzerine taşımadan RGB renkleri ve paraziti döndürmesine izin verin.',
  },
  {
    name: 'İzi daha sonra inceleyin',
    text: 'Testi durdurun, nötr gri, beyaz, siyah, kırmızı, yeşil ve mavi ekranları gösterin, ardından gölgeli görüntünün veya takılı pikselin değişip değişmediğini karşılaştırın.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'OLED Yanık Düzeltici ve LCD Takılı Piksel Çalıştırıcı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu OLED ekran yanık düzeltici, geçici görüntü tutulması, hafif gölgeli görüntüler ve bazı takılı LCD pikseller için tam ekran bir piksel çalıştırıcıdır. Hızlı kırmızı, yeşil, mavi, beyaz, siyah, sarı ve parazit desenlerini doğrudan HTML5 Canvas içinde oluşturur. Video dosyası, harici görüntü kaynağı veya indirme adımı yoktur: tarayıcı her kareyi mevcut ekran boyutunda boyar.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fotosensitivite uyarısı',
      icon: 'mdi:alert',
      badge: 'Zorunlu',
      html: 'Onarım deseni hızlı flaşlar, yüksek kontrastlı geçişler ve beyaz parazit kullanır. Fotosensitif epilepsiniz, nöbet riskiniz, migren duyarlılığınız, yanıp sönen ışıklar tarafından tetiklenen baş dönmeniz varsa veya yakınınızdaki biri etkilenebilirse çalıştırmayın. Göz yorgunluğu, mide bulantısı, baş ağrısı veya rahatsızlık hissederseniz hemen durdurun.',
    },
    {
      type: 'paragraph',
      html: 'Araç, pratik soru şu olduğunda faydalıdır: <strong>bu iz solabilen geçici bir tutulma mı yoksa kalıcı panel aşınması mı?</strong> Denetimli kısa bir çalıştırma bazen tutulan statik arayüz öğelerinin neden olduğu gölgeli bir görüntüyü azaltabilir ve bazen bir renge takılı kalmış bir alt pikseli uyandırabilir. Aşınmış OLED malzemesini yeniden oluşturamaz, çatlamış bir katmanı onaramaz, ölü bir sürücü hattını geri getiremez veya kurtarmayı garanti edemez.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'yüklenen video dosyası', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'birincil alt piksel çalıştırması', icon: 'mdi:palette' },
        { value: '1-120 dk', label: 'yerleşik oturum zamanlayıcısı', icon: 'mdi:timer-outline' },
        { value: '%100', label: 'istemci tarafında yürütme', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Yanık, Görüntü Tutulması ve Gölgelenme Ne Anlama Gelir',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'OLED yanığı',
          definition: 'Organik alt piksellerin kalıcı dengesiz aşınması. Statik bir logo, görev çubuğu, gezinme çubuğu veya oyun arayüzü, bu pikseller panelin geri kalanından farklı yaşlandığı için görünür bir şekil bırakabilir.',
        },
        {
          term: 'Geçici görüntü tutulması',
          definition: 'Statik içerik kaybolduktan sonra kalan kısa süreli gölgeli bir görüntü. Normal karışık içerik, bir telafi döngüsü veya bir piksel çalıştırma deseni ile solabilir.',
        },
        {
          term: 'LCD takılı piksel',
          definition: 'Kırmızı, yeşil, mavi, beyaz veya başka bir sabit renkte takılı kalan bir piksel veya alt piksel. Sorun fiziksel hasar değilse hızlı durum değişiklikleri bazen onu serbest bırakabilir.',
        },
        {
          term: 'Ölü piksel',
          definition: 'Artık ışığı doğru şekilde yaymadığı veya iletmediği için siyah kalan bir piksel. Bir tarayıcı piksel çalıştırıcısı normalde gerçekten ölü bir pikseli canlandıramaz.',
        },
        {
          term: 'LCD gölgelenme',
          definition: 'Yavaş piksel tepkisinin neden olduğu hareket izleri. Bu, ekran yanığından farklıdır, ancak kullanıcılar genellikle her ikisini de gölgeli görüntüler olarak tanımlar.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Geçici tutulma',
          description: 'Genellikle karışık içerik, ekran yenileme rutinleri veya kısa bir RGB ve gürültü oturumundan sonra solar.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Statik içerikten sonra görünür', 'Kenarlarda genellikle daha yumuşak', 'Dakikalar veya saatler içinde düzelebilir'],
        },
        {
          title: 'Kalıcı yanık',
          description: 'Dinlenme, telafi döngüleri ve çeşitli içerikten sonra görünür kalan dengesiz OLED aşınması.',
          icon: 'mdi:contrast-circle',
          points: ['Uzun süreli statik arayüzle eşleşir', 'Düz renklerde en belirgin', 'Çalıştırmadan sonra kaybolmaz'],
        },
        {
          title: 'Takılı piksel',
          description: 'Büyük bir gölgeli görüntü yerine bir renge kilitlenmiş tek bir nokta veya küçük küme.',
          icon: 'mdi:grain',
          points: ['Genellikle bir piksel genişliğinde', 'Kırmızı, yeşil, mavi veya beyaz olabilir', 'Bazen hızlı renk değişimlerine yanıt verir'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Piksel Çalıştırıcıyı Güvenle Kullanma',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Özellikle OLED telefonlar, OLED TVler ve dizüstü OLED panellerde ilk çalıştırmadan önce parlaklığı azaltın.',
        '5 ila 10 dakika ile başlayın; uzun oturumlar sırasında ekranı gözetimsiz bırakmayın.',
        'Etkilenen alanın panelin geri kalanıyla aynı deseni alması için tam ekran kullanın.',
        'Odayı yanıp sönen ışık konusunda bilgilendirin; testi rıza göstermemiş kişilerin yanında çalıştırmayın.',
        'Panel alışılmadık şekilde ısınırsa, tarayıcı ağır şekilde takılırsa veya rahatsızlık hissederseniz durdurun.',
        'Çalıştırmadan sonra sonuçları karşılaştırmak için nötr gri, beyaz, siyah, kırmızı, yeşil ve mavi ekranları inceleyin.',
      ],
    },
    {
      type: 'table',
      headers: ['Sorun', 'İlk Mod', 'İlk Süre', 'Parlaklık Yönergesi'],
      rows: [
        ['Hafif OLED gölgeli görüntü', 'Hibrit RGB artı parazit', '5-10 dakika', 'Rahat, maksimum değil'],
        ['Taze statik logo tutulması', 'RGB döngüsü', '10-20 dakika', 'Orta parlaklık'],
        ['Tek renkli takılı LCD piksel', 'Parazit veya Hibrit', '5-15 dakika', 'Normal masaüstü parlaklığı'],
        ['Eski kalıcı yanık', 'Yalnızca teşhis için Hibrit', '5 dakika', 'Yüksek parlaklıkta uzun çalıştırmalardan kaçının'],
        ['Ölü siyah piksel', 'Onarım olarak önerilmez', 'Yalnızca inceleme', 'Hiçbir piksel çalıştırıcısı kurtarmayı garanti edemez'],
      ],
    },
    {
      type: 'tip',
      title: 'Önce kısa oturumlar kullanın',
      html: 'Uzun bir yanıp sönme oturumu otomatik olarak daha iyi değildir. Bir iz geçiciyse, kısa bir geçişten sonra genellikle bir değişiklik görürsünüz. Makul bir deneme ve normal bir panel yenileme rutininden sonra hiçbir şey değişmezse, sorun kalıcı aşınma veya bir donanım kusuru olabilir.',
    },
    {
      type: 'title',
      text: 'RGB Döngüsü, Beyaz Gürültü ve Hibrit Mod Arasında Seçim',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Farklı bozulmalar farklı desenlere yanıt verir. Kırmızı yeşil mavi döngüsü, birincil alt pikselleri kontrollü bir sırayla çalıştırır. Beyaz gürültü, birçok küçük alanda parlaklığı hızla değiştirir, bu da izole takılı pikselleri ortaya çıkarmaya ve çalıştırmaya yardımcı olabilir. Hibrit mod her ikisi arasında geçiş yapar, bu da sorunun görüntü tutulması mı yoksa tembel bir alt piksel mi olduğundan emin olmadığınızda en iyi ilk seçim haline getirir.',
    },
    {
      type: 'table',
      headers: ['Mod', 'Ne Yapar', 'En İyisi İçin', 'Dikkat Edin'],
      rows: [
        ['RGB döngüsü', 'Tam ekran birincil ve yüksek kontrastlı alanlar', 'OLED tutulması ve renk kanalı incelemesi', 'Görünür yanıp sönme'],
        ['Beyaz gürültü', 'Panel genelinde rastgele siyah beyaz parazit', 'Tek takılı pikseller ve küçük kümeler', 'Daha yüksek görsel yoğunluk'],
        ['Hibrit', 'Renk alanları ve parazit arasında geçiş yapar', 'Genel OLED yanık düzeltici iş akışı', 'Önce kısa bir zamanlayıcı kullanın'],
      ],
    },
    {
      type: 'proscons',
      title: 'Çevrimiçi piksel çalıştırıcı: gerçekçi faydalar ve sınırlar',
      items: [
        {
          pro: 'Yazılım yüklemeden veya video dosyaları yüklemeden anında tarayıcıda çalışır.',
          con: 'Kalıcı OLED malzeme aşınmasını veya fiziksel panel hasarını tersine çeviremez.',
        },
        {
          pro: 'Tam ekran canvas, ekranı oluşturulan RGB ve parazit kareleriyle kaplar.',
          con: 'Tarayıcı zamanlaması, cihaz performansı ve tam ekran desteği animasyon tutarlılığını etkileyebilir.',
        },
        {
          pro: 'Üretici panel bakım rutinlerini denemeden önce ilk teşhis için kullanışlıdır.',
          con: 'Belirgin kusurları olan yeni paneller için garanti hizmetinin yerini almamalıdır.',
        },
      ],
    },
    {
      type: 'title',
      text: 'OLEDe Özel Rehberlik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'OLED pikseller kendi ışığını yayar. Statik bir öğe saatlerce ekranda kaldığında, o öğenin altındaki alt pikseller farklı hızda yaşlanabilir. Bu nedenle yanık genellikle TV kanal logolarının, telefon durum çubuklarının, gezinme düğmelerinin, oyun arayüzlerinin, yayın uygulaması kenar çubuklarının veya masaüstü görev çubuklarının şeklini takip eder. Bir piksel çalıştırıcı geçici tutulmayı daha hızlı soldursa da, kalıcı farklı yaşlanma bir malzeme sorunu olarak kalır.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Önce yerleşik panel bakımını kontrol edin',
      html: 'Birçok OLED TV, monitör, dizüstü bilgisayar ve telefon; piksel yenileme, panel yenileme, logo karartma, ekran kaydırma, görev çubuğu karartma veya telafi döngüleri içerir. Üretici rutinini talimatlarına göre kullanın, özellikle ekran garanti kapsamındaysa. Bu çevrimiçi araç en iyi şekilde nazik bir teşhis ve geçici tutulma çalıştırması olarak değerlendirilir, panel bakım yazılımının yerine geçmez.',
    },
    {
      type: 'list',
      items: [
        'Gölgeli görüntü yeniyse, kalıcı yanık olduğunu varsaymadan önce ekranın çeşitli içerik göstermesine veya dinlenmesine izin verin.',
        'İz yıllar öncesine ait statik bir logoyla eşleşiyorsa, bir piksel çalıştırıcının onu tamamen kaldırması olası değildir.',
        'Panelin yerleşik bir yenileme döngüsü varsa, yalnızca üreticinin önerdiği sıklıkta çalıştırın.',
        'Saatlerce maksimum parlaklıkta test desenleri çalıştırmaktan kaçının; ısı ve parlaklık aşınmaya katkıda bulunur.',
        'Tekrarı önlemek için görev çubuklarını gizleyin, ekran koruyucuları etkinleştirin ve statik arayüz parlaklığını azaltın.',
      ],
    },
    {
      type: 'title',
      text: 'LCD Takılı Piksel Rehberliği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LCD paneller OLED panellerle aynı şekilde yanmaz, ancak takılı pikseller, basınç izleri, panel kusurları ve geçici görüntü kalıcılığı gösterebilir. Kırmızı, yeşil, mavi, camgöbeği, eflatun, sarı veya beyaz olarak takılı kalan bir piksel, doğru şekilde geçiş yapmayan bir alt pikselden kaynaklanabilir. Garantili bir çevrimiçi onarım olmasa da hızlı değişiklikler bazen yardımcı olabilir.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ölü piksel ve takılı piksel karşılaştırması',
      icon: 'mdi:information-outline',
      badge: 'Teşhis',
      html: 'Renkli bir noktanın şansı siyah bir noktadan daha iyidir. Her test renginde siyah bir piksel genellikle ölü veya engellenmiştir. Bazı arka planlarda değişen ancak diğerlerinde değişmeyen renkli bir piksel, takılı bir alt piksel olabilir ve kısa bir piksel çalıştırma oturumu için daha iyi bir adaydır.',
    },
    {
      type: 'summary',
      title: 'Basınç veya fiziksel yöntemler kullanmadan önce',
      items: [
        'OLED panellere, dokunmatik ekranlara veya hassas dizüstü ekranlarına sertçe bastırmayın.',
        'Keskin aletlerden, beze sarılı kalemlerden ve yüzeyi çizebilecek herhangi bir yöntemden kaçının.',
        'Önce yazılım çalıştırmasını kullanın, kusur devam ederse garanti desteğine başvurun.',
        'Ekran yeniyse ve iade politikaları hala geçerliyse kusuru makro fotoğraflarla belgeleyin.',
      ],
    },
    {
      type: 'title',
      text: 'Canvas Neden Ağır Bir Onarım Videosundan Daha İyidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Video tabanlı bir yanık düzeltici, kodlanmış kareleri indirmek, çözmek, ekrana ölçeklemek ve sıkıştırmanın tam geçişleri yumuşatmadığını ummak zorundadır. Bu araç her kareyi doğrudan tarayıcıda oluşturur. RGB alanları dolgundur, gürültü mevcut canvas boyutu için oluşturulur ve sayfa yüklemeyi yavaşlatacak veya PageSpeedi düşürecek büyük medya dosyalarından kaçınır.',
    },
    {
      type: 'list',
      items: [
        'Harici video dosyası olmaması, daha hızlı ilk işleme ve daha az ağ bağımlılığı anlamına gelir.',
        'Canvas çıktısı, bir video çözünürlüğü ile sınırlı kalmak yerine tam ekran yüzeyine ölçeklenir.',
        'Zamanlayıcı, bir videoyu sonsuza kadar döngüye sokmak yerine onarımı otomatik olarak durdurabilir.',
        'Mod, hız, süre ve yoğunluk başka bir dosya yüklemeden değiştirilebilir.',
      ],
    },
    {
      type: 'message',
      title: 'Pratik bir beklenti',
      ariaLabel: 'Yanık düzeltici beklentisi',
      html: 'Bu aracı kontrollü bir ilk adım olarak kullanın: geçici tutulmayı azaltın, olası bir takılı pikseli çalıştırın ve kanıt toplayın. İz çeşitli içerikten, yerleşik panel yenileme rutinlerinden ve dikkatli kısa çalıştırma oturumlarından sonra hala duruyorsa, bunu bir donanım veya garanti sorunu olarak ele alın.',
    },
  ],
  ui: {
    safetyTitle: 'Yanıp sönen ışık uyarısı',
    safetyBody: 'Bu onarım deseni hızla dolgun renkler ve yüksek kontrastlı parazit yayar. Siz veya yakınınızdaki biri fotosensitif epilepsi, nöbet, migren, baş dönmesi veya yanıp sönen ışık hassasiyetinden etkilenebilecekse kullanmayın.',
    safetyChecklist: 'Parlaklığı makul tutun, oturumu denetleyin ve rahatsızlık hissederseniz hemen durdurun.',
    safetyConfirm: 'Fotosensitivite riskini anlıyorum ve onarım düğmesini etkinleştirmek istiyorum.',
    safetyContinue: 'Ayarlara devam et',
    startRepair: 'Onarımı Başlat (Tam Ekran)',
    controlsLabel: 'OLED ekran onarım kontrolleri',
    modeLabel: 'Desen modu',
    modeCycle: 'RGB döngüsü',
    modeNoise: 'Beyaz gürültü',
    modeHybrid: 'Hibrit',
    modeCycleDescription: 'Görüntü tutulması ve kanal kontrolü için dolgun birincil renkler.',
    modeNoiseDescription: 'Tek takılı pikseller ve küçük kümeler için yüksek frekanslı parazit.',
    modeHybridDescription: 'En iyi ilk geçiş: RGB alanlarını statik doku ile değiştirir.',
    speedLabel: 'Döngü hızı',
    durationLabel: 'Süre',
    durationShort: '5 dk',
    durationStandard: '10 dk',
    durationDeep: '20 dk',
    durationShortDescription: 'Hızlı kontrol',
    durationStandardDescription: 'Önerilen',
    durationDeepDescription: 'Denetimli çalıştırma',
    fullscreenHint: 'Tam ekran OLED yanık onarım canvası',
    intensityLabel: 'Parazit yoğunluğu',
    warningBadge: 'Yanıp sönen içerik',
  },
};
