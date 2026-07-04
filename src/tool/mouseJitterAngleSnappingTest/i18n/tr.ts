import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fare-titreme-acisi-testi';
const title = 'Fare Titreşim ve Açı Düzeltme Testi';
const description =
  'Sensör titreşimini, dengesiz takibi ve hareketi yapay olarak düzleştiren açı düzeltmeyi veya öngörüyü tespit etmek için çevrimiçi ham fare izleri çizin.';

const faqData = [
  {
    question: 'Fare titreşimi nedir?',
    answer:
      'Fare titreşimi, eliniz düzgün hareket ettiğinde bile imleç yolundaki istenmeyen sallanma veya gürültülü harekettir. Kirli bir sensör penceresinden, kötü bir yüzeyden, yüksek kalkış davranışından, elektriksel gürültüden, kablosuz kararsızlıktan veya seçilen DPI\'da zorlanan bir sensörden kaynaklanabilir.',
  },
  {
    question: 'Açı düzeltme nedir?',
    answer:
      'Açı düzeltme, bazen öngörü olarak adlandırılır, fare yazılımının hafif kusurlu insan hareketini daha düz yatay, dikey veya çapraz çizgilere dönüştürmeye çalıştığı bir düzeltme özelliğidir. Bazı ofis kullanıcıları bunu beğenir, ancak birçok oyuncu ve sanatçı öngörüsüz ham hareketi tercih eder.',
  },
  {
    question: 'Bu test fare sensörümün bozuk olduğunu kanıtlayabilir mi?',
    answer:
      'Sensörü elektriksel olarak inceleyemez, ancak tarayıcınızın aldığı hareket yolunu gösterir. Tekrarlanan yumuşak geçişler gürültülü noktalar, ani sapmalar veya doğal olmayan şekilde düz bölümler oluşturuyorsa, sonuç fare, yüzey, DPI, kablosuz bağlantı veya yazılım ayarlarını sorun gidermek için faydalı bir kanıttır.',
  },
  {
    question: 'En güvenilir sonuç için nasıl çizmeliyim?',
    answer:
      'Yavaş çapraz çizgiler, orta hızda eğriler ve uzun yatay geçişler çizin. Aynı hareketi birkaç kez test edin. Titreşimi yavaş kontrollü çizgilerde görmek daha kolaydır, açı düzeltmeyi ise çapraz hareket şüpheli derecede düz veya basamaklı hale geldiğinde tespit etmek daha kolaydır.',
  },
];

const howToData = [
  {
    name: 'Sensörü ve fare altlığını temizleyin',
    text: 'Test etmeden önce sensör penceresindeki toz veya tüyleri temizleyin ve sabit bir fare altlığı veya masa yüzeyi kullanın.',
  },
  {
    name: 'Yavaş çapraz çizgiler çizin',
    text: 'Farenin ana düğmesini basılı tutun ve birkaç çapraz çizgi çizin. Ham bir sensör doğal el değişimini göstermeli, tek bir açıya mükemmel şekilde zorlanmış bir çizgi değil.',
  },
  {
    name: 'Yumuşak eğriler çizin',
    text: 'Daireler, S-eğrileri ve yaylar yapın. Titreşim, amaçlanan eğrinin dışına sıçrayan kaba, gürültülü noktalar olarak görünür.',
  },
  {
    name: 'DPI ve yüzey ayarlarını karşılaştırın',
    text: 'Sorunun ne zaman ortaya çıktığını bulmak için aynı hareketi farklı DPI seviyelerinde, yoklama hızlarında, kalkış ayarlarında ve yüzeylerde tekrarlayın.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Çevrimiçi Fare Titreşim Testi: Sensör Gürültüsünü ve Açı Düzeltmeyi Kontrol Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İyi bir fare sensörü, görünür gürültü eklemeden veya yolu gizlice düzeltmeden elinizi takip etmelidir. Sensör kirli olduğunda, yüzeyin izlenmesi zor olduğunda, DPI donanım için çok yüksek olduğunda veya yazılım öngörü uyguladığında, imleç yolu doğal hissettirmeyebilir. Bu fare titreşim testi, ham izler çizmenize ve sensör sorunlarının belirsiz olmak yerine görünür hale gelmesi için bireysel okuma noktalarını incelemenize olanak tanır.',
    },
    {
      type: 'paragraph',
      html: 'Test etmenin en faydalı yolu basittir: kontrollü çizgiler ve eğriler çizin, ardından izin şekline bakın. Sağlıklı bir ham sensör, küçük insan kusurlarıyla hareketinizi takip eden bir yol üretir. Gürültülü bir sensör kaba noktalar, küçük ani sapmalar ve düzensiz yalpalama üretir. Açı düzeltme veya öngörü özellikli bir fare, çapraz veya yatay hareketi, yazılım elinizi düzeltiyormuş gibi doğal olmayan şekilde düz gösterebilir.',
    },
    {
      type: 'title',
      text: 'Fare Titreşimi Nasıl Görünür',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fare titreşimi, normal el titremesiyle aynı şey değildir. Herkes hafif kusurlu çizgiler çizer. Eliniz yavaş ve istikrarlı hareket ettiğinde bile noktalar hareket yönünden dışarı sıçradığında titreşim şüpheli hale gelir. Genellikle bir çizginin etrafında bulanık bir kenar, küçük yan ani sıçramalar veya pürüzsüz yerine çizik gibi görünen bir iz olarak ortaya çıkar.',
    },
    {
      type: 'table',
      headers: ['İz Deseni', 'Olası Anlamı', 'Sonraki Adım'],
      rows: [
        ['Yavaş çizgiler sırasında küçük rastgele ani sapmalar', 'Sensör gürültüsü, kir veya yüzey izleme sorunu', 'Sensör penceresini temizleyin ve farklı bir fare altlığı deneyin'],
        ['Yalnızca yüksek DPI\'da titreşim', 'Sensör veya yazılım bu hassasiyette zorlanıyor', '400, 800, 1600 ve 3200 DPI\'da yeniden test edin'],
        ['Yalnızca kablosuz modda sert hareket', 'Pil, alıcı mesafesi veya parazit', 'Alıcıyı yaklaştırın ve yeni bir pille test edin'],
        ['Kalkış yakınında veya fareyi eğerken gürültü', 'Kalkış mesafesi veya yüzeyle düzensiz temas', 'Fareyi düz tutun ve mümkünse kalkış mesafesini azaltın'],
        ['Bir masada titreşim var, diğerinde yok', 'Yüzey dokusu veya yansıtıcılık sorunu', 'Optik sensörler için tasarlanmış mat bir fare altlığı kullanın'],
      ],
    },
    {
      type: 'title',
      text: 'Açı Düzeltme Nasıl Görünür',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Açı düzeltme titreşimden farklıdır. Gürültü eklemek yerine, doğal değişimi ortadan kaldırır. Elle çapraz bir çizgi çizerseniz, ham bir sensör küçük insan sapmalarını korumalıdır. Açı düzeltme etkinken, çizgi mükemmel düz yatay, dikey veya çapraz bir yöne kilitlenebilir. Bu, masaüstü çizimini kolaylaştırabilir, ancak genellikle rekabetçi nişan alma, piksel sanatı, fotoğraf düzenleme ve imlecin elle tam olarak eşleşmesi gereken herhangi bir görev için istenmez.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ham sensör davranışı',
          description: 'İz, küçük doğal eğriler ve düzeltmeler dahil olmak üzere elinizi takip eder. Çapraz çizgiler, hareketiniz mükemmel olmadıkça matematiksel olarak kusursuz değildir.',
        },
        {
          title: 'Açı düzeltme davranışı',
          description: 'İz, özellikle yatay, dikey veya 45 derece gibi yaygın açıların yakınında, uzun bölümler boyunca şüpheli derecede düz görünür.',
        },
        {
          title: 'Titreşim davranışı',
          description: 'İz gürültülü, bulanık veya dikenli hale gelir. Çok düz olmak yerine, dengesiz ve kaba görünür.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Farenizi Doğru Şekilde Test Etme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Temiz bir sensör penceresi ve bilinen iyi bir fare altlığı ile başlayın',
        'Köşeden köşeye yavaş çapraz çizgiler çizin ve aynı hareketi birkaç kez tekrarlayın',
        'Düz çizgilerde görünmeyebilecek titreşimi ortaya çıkarmak için daireler ve S-eğrileri çizin',
        'Birden fazla DPI seviyesinde test edin, çünkü bazı sensörler çok yüksek hassasiyette daha gürültülü hale gelir',
        'Mümkünse açı düzeltme, öngörü, yüzey ayarlama veya hızlanma gibi üretici yazılımı özelliklerini devre dışı bırakın',
        'Fareniz her ikisini de destekliyorsa kablolu ve kablosuz modları karşılaştırın',
        'Fare arızasını yüzey sorunlarından ayırmak için aynı yüzeyde başka bir fareyle karşılaştırın',
      ],
    },
    {
      type: 'title',
      text: 'Puanları Yorumlama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Araç, bir titreşim puanı, bir açı düzeltme puanı, doğrusallık, ortalama sapma ve yakalanan örnek sayısını gösterir. Bu değerler en iyi karşılaştırmalı olarak kullanılır. Bir değişkeni değiştirdikten sonra aynı el hareketiyle aynı çizgiyi çizin: DPI, yüzey, kablosuz alıcı yerleşimi veya fare yazılım ayarı. Bir puan, yüzeyi değiştirdikten veya sensörü temizledikten sonra düşerse, olası bir neden bulmuşsunuzdur.',
    },
    {
      type: 'table',
      headers: ['Sonuç', 'Ne Önerdiği', 'Pratik Eylem'],
      rows: [
        ['Düşük titreşim ve düşük düzeltme', 'Sensör yolu doğal ve kararlı görünüyor', 'Mevcut ayarları koruyun ve bunu referans olarak kullanın'],
        ['Yüksek titreşim, düşük düzeltme', 'Fare izliyor ancak yol gürültülü', 'Sensörü temizleyin, yüzeyi değiştirin, DPI\'ı düşürün ve yeniden test edin'],
        ['Düşük titreşim, yüksek düzeltme', 'Yol yazılım tarafından düzeltilmiş olabilir', 'Fare yazılımında öngörü veya açı düzeltme seçeneklerini arayın'],
        ['Yüksek titreşim ve yüksek düzeltme', 'İz dengesiz ve aşırı düzeltilmiş olabilir', 'Fare yazılım profillerini sıfırlayın ve varsayılan ayarlardan yeniden test edin'],
        ['Puanlar yüzeye göre güçlü şekilde değişiyor', 'Sensör bir yüzey dokusunu veya yansıtıcılığını sevmiyor', 'En temiz izi veren yüzeyi kullanın'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Yoklama Hızı ve Fare Titreşimi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yüksek DPI otomatik olarak daha iyi izleme anlamına gelmez. Bazı fareler orta DPI\'da temiz çalışır ancak çok yüksek DPI\'da daha fazla görünür gürültü gösterir, çünkü küçük sensör hataları daha büyük imleç hareketine dönüşür. Yoklama hızı da izin hissini değiştirebilir. Daha yüksek bir yoklama hızı daha sık güncelleme sağlar, ancak kirli bir sensörü, kötü bir yüzeyi veya yazılım öngörüsünü düzeltemez.',
    },
    {
      type: 'paragraph',
      html: 'Adil bir karşılaştırma için el hareketinizi benzer tutun ve her seferinde bir ayarı değiştirin. Örneğin, aynı çapraz çizgiyi 800 DPI, 1600 DPI ve 3200 DPI\'da çizin. Yol yalnızca en yüksek değerde bulanıklaşıyorsa, en iyi çözüm fareyi değiştirmek yerine DPI\'ı düşürmek ve oyun içi hassasiyeti ayarlamak olabilir.',
    },
    {
      type: 'title',
      text: 'Fare Sensörü Titreşiminin Yaygın Nedenleri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Optik sensör penceresinin yakınında toz, tüy veya yağ',
        'Parlak, yansıtıcı, şeffaf veya düzensiz yüzeyler',
        'Küçük sensör hatalarını büyüten çok yüksek DPI ayarları',
        'Düşük pil veya kablosuz parazit',
        'Alıcının fareden uzakta veya metal PC kasasının arkasında olması',
        'Yazılım filtreleri, yüzey kalibrasyonu veya üretici yazılım profilleri',
        'Fare eğildiğinde veya hızlı hareket ettirildiğinde kalkış mesafesi sorunları',
        'Yoğun kullanım sonrası aşınmış veya hasar görmüş sensör merceği',
      ],
    },
    {
      type: 'title',
      text: 'Oyuncular ve Tasarımcılar Neden Önemser',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Oyunlarda titreşim, nişangah elin tam olarak amaçladığı yerde durmadığı için mikro ayarlamaları zorlaştırabilir. Açı düzeltme de aynı derecede sorunlu olabilir: düz masaüstü çizgileri çizmeye yardımcı olabilir, ancak küçük nişan düzeltmelerini de bozabilir ve çapraz takibi filtrelenmiş hissettirebilir. Tasarımcılar, illüstratörler, CAD kullanıcıları ve fotoğraf editörleri için sensör düzeltmesi, serbest el hareketini daha az dürüst ve kontrol etmesi daha zor hale getirebilir.',
    },
    {
      type: 'paragraph',
      html: 'Bir farenin iyi olması için mükemmel bir ize ihtiyacı yoktur. İnsan hareketi doğal olarak kusurludur. Uyarı işaretleri tekrarlanabilirdir: aynı yüzey her zaman gürültülü noktalar oluşturur, aynı DPI her zaman ani sapmalar oluşturur veya aynı fare her zaman çaprazları şüpheli derecede düz yaparken başka bir fare yapmaz.',
    },
    {
      type: 'title',
      text: 'Yeni Bir Fare Almadan Önce',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Fare kapalıyken sensör penceresini dikkatlice temizleyin',
        'Tercihen mat kumaş veya hibrit oyun yüzeyi olan farklı bir fare altlığı deneyin',
        'DPI\'ı düşürün ve yazılım hassasiyetiyle telafi edin',
        'Açı düzeltme, öngörü, işaretçi hassasiyeti ve hızlanma seçeneklerini devre dışı bırakın',
        'Kablosuz alıcıyı bir USB uzatma kablosu kullanarak yaklaştırın',
        'Üretici yazılımı destekliyorsa fare yazılım profilini güncelleyin veya sıfırlayın',
        'Karşılaştırma için aynı bilgisayar ve yüzeyde başka bir fare test edin',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Faydalı tanı kuralı',
      html: '<p>Tek bir garip iz yeterli değildir. Önemli olan tekrarlanabilir bir desendir. Titreşim veya açı düzeltme aynı ayarlar altında tekrar tekrar ortaya çıkıyor ve sensörü temizlediğinizde, yüzeyi değiştirdiğinizde, DPI\'ı düşürdüğünüzde veya öngörüyü devre dışı bıraktığınızda kayboluyorsa, en olası nedeni bulmuşsunuzdur.</p>',
    },
  ],
  ui: {
    badge: 'Ham Sensör İzi',
    canvasLabel: 'Fare titreşim ve açı düzeltme testi çizim alanı',
    canvasHint: 'Yavaş çaprazlar, daireler ve eğriler çizin. Düzensiz takibi kolayca fark etmek için bireysel sensör noktaları görünür kalır.',
    pointerPrompt: 'Basılı tutun ve çizim alanı içinde çizin',
    samples: 'Örnekler',
    jitterScore: 'Titreşim',
    snappingScore: 'Düzeltme',
    straightness: 'Doğrusallık',
    rawDeviation: 'Ort. sapma',
    statusIdle: 'Ham fare hareketini yakalamak için alan içinde çizin',
    statusHealthy: 'İz son örneklerde doğal ve kararlı görünüyor',
    statusJitter: 'Son izde gürültülü hareket tespit edildi',
    statusSnapping: 'Şüpheli derecede düz hareket tespit edildi',
    statusMixed: 'İzde hem titreşim hem de olası açı düzeltme görünüyor',
    reset: 'Sıfırla',
    holdShift: 'İpucu: her seferinde bir değişikliği test edin. DPI, yüzey, kablosuz mod ve öngörü ayarları izi değiştirebilir.',
    sensitivity: 'Algılama hassasiyeti',
    low: 'kararlı',
    high: 'katı',
    traceLog: 'İz olayları',
    emptyLog: 'Olay günlüğünü başlatmak için birkaç kontrollü çizgi çizin.',
    jitterEvent: 'titreşim',
    snappingEvent: 'açı düzeltme',
    combinedEvent: 'titreşim ve açı düzeltme',
    cleanEvent: 'temiz iz',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
