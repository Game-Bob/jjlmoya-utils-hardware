import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ups-calisma-suresi-hesaplayici';
const title = 'UPS Çalışma Süresi Hesaplayıcı';
const description = 'UPS pil çalışma süresini, toplam korunan yükü, kullanılabilir watt-saati ve PC\'ler, monitörler, yönlendiriciler, NAS cihazları ve ev laboratuvarı donanımı için önerilen VA boyutunu hesaplayın.';

const faqData = [
  {
    question: 'UPS çalışma süresi nasıl hesaplanır?',
    answer: 'UPS\'e bağlı her cihazın watt değerini toplayın, UPS pil watt-saatini invertör verimliliğiyle çarpın, saklamak istediğiniz rezervi çıkarın, ardından kullanılabilir watt-saati yük wattına bölün. Saat cinsinden sonuç, dakika için 60 ile çarpılabilir.',
  },
  {
    question: 'Gerçek UPS çalışma süresi neden tahminden farklıdır?',
    answer: 'Çalışma süresi pil yaşı, sıcaklık, deşarj hızı, invertör verimliliği, yük ani artışları ve üretici kesme voltajına göre değişir. Sonucu bir planlama tahmini olarak değerlendirin ve kontrollü bir kapatma testiyle doğrulayın.',
  },
  {
    question: 'UPS\'i watt\'a göre mi yoksa VA\'ya göre mi boyutlandırmalıyım?',
    answer: 'Her ikisini de kontrol edin. Watt, UPS\'in sağlayabileceği gerçek gücü belirtirken, VA güç faktörünü içerir. UPS, yükünüzü watt olarak aşmalı ve bağlı ekipman için yeterli VA marjına sahip olmalıdır.',
  },
  {
    question: 'Ne kadar UPS marjı bırakmalıyım?',
    answer: 'Pratik bir hedef, normal yükü UPS watt değerinin yaklaşık %70-80\'inin altında tutmaktır. Bu, başlangıç ani yükselmeleri, pil yaşlanması ve gelecekteki cihazlar için alan bırakır.',
  },
  {
    question: 'UPS\'e yazıcı veya ısıtıcı bağlayabilir miyim?',
    answer: 'UPS açıkça derecelendirilmedikçe lazer yazıcılardan, ısıtıcılardan ve diğer yüksek ani yükselme yüklerinden kaçının. İnvertörü aşırı yükleyebilir ve çalışma süresini ciddi şekilde azaltabilirler.',
  },
];

const howToData = [
  {
    name: 'Korunan cihazları listele',
    text: 'Elektrik kesintisi sırasında çevrimiçi kalması gereken cihazları girin: bilgisayar, monitör, yönlendirici, modem, NAS ve ağ anahtarı gibi.',
  },
  {
    name: 'Gerçekçi watt değeri girin',
    text: 'Mümkün olduğunda prizden ölçülen gücü kullanın. Yalnızca güç kaynağı değerlerine sahipseniz, maksimum etiket değeri yerine beklenen çalışma yüküne düşürün.',
  },
  {
    name: 'Pil kapasitesini ve varsayımları ayarlayın',
    text: 'UPS pil watt-saatini, invertör verimliliğini, güç faktörünü ve kontrollü kapatma için saklamak istediğiniz rezerv yüzdesini girin.',
  },
  {
    name: 'Çalışma süresini ve VA önerisini okuyun',
    text: 'Tahmini dakikaları ve önerilen VA\'yı satın alma veya yapılandırma kılavuzu olarak kullanın, ardından güvenli bir kesinti tatbikatıyla kurulumu doğrulayın.',
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

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
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
      text: 'UPS Çalışma Süresi Hesaplayıcı: Pil Yedekleme Süresini Tahmin Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir UPS çalışma süresi tahmini iki pratik soruyu yanıtlar: bir elektrik kesintisi sırasında donanımınız ne kadar süre çevrimiçi kalabilir ve UPS bağlı yük için yeterince büyük mü. Bu hesaplayıcı cihaz watt değerini, pil watt-saatini, invertör verimliliğini, güç faktörünü ve kapatma rezervini birleştirerek sonucun basit bir pil kapasitesi bölmesinden daha gerçekçi bir planlamaya yakın olmasını sağlar.',
    },
    {
      type: 'title',
      text: 'Çalışma Süresi Formülü',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat cinsinden tahmini çalışma süresi <strong>kullanılabilir pil watt-saatinin toplam yük W\'a bölümüdür</strong>. Kullanılabilir watt-saat, basılı pil kapasitesi değildir: invertör kayıpları ve kontrollü kapatma için saklamak istediğiniz rezerv için düzeltilmelidir. Örneğin, %86 verimlilikte ve %20 rezervli 432 Wh\'lik bir pil yaklaşık 297 Wh kullanılabilir enerji sağlar.',
    },
    {
      type: 'table',
      headers: ['Giriş', 'Neden önemli', 'Pratik rehberlik'],
      rows: [
        ['Yük watt', 'Çalışma süresini doğrudan kontrol eder', 'Özellikle oyun bilgisayarları ve NAS sistemleri için mümkün olduğunda priz ölçer ile ölçün.'],
        ['Pil Wh', 'Enerji havuzunu belirler', 'Üretici pil verilerini veya nominal voltaj ile amper-saat çarpımını kullanın.'],
        ['Verimlilik', 'İnvertör kaybını hesaba katar', 'Birçok tüketici UPS ünitesi için %80-90 makul bir planlama aralığıdır.'],
        ['Güç faktörü', 'Watt\'ı VA\'ya dönüştürür', 'Biliniyorsa UPS teknik özelliklerini kullanın; bütçe ve orta seviye ünitelerde 0,6-0,8 yaygındır.'],
        ['Rezerv', 'Kapatma marjını korur', 'Kontrollü PC veya sunucu kapatması için %10-25 mantıklıdır.'],
      ],
    },
    {
      type: 'title',
      text: 'Ne Kadar Çalışma Süresine İhtiyacınız Var?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 dakika: kısa dalgalanmaları atlatmak veya bir masaüstü bilgisayarı güvenle kapatmak için yeterlidir.',
        '10-20 dakika: yönlendiriciler, modemler, NAS üniteleri ve küçük ev laboratuvarı düğümleri için kullanışlıdır.',
        '30+ dakika: ağ sürekliliği, uzaktan çalışma ve sık kesinti olan yerler için daha iyidir.',
        'Birkaç saat: genellikle yalnızca bir masaüstü UPS\'i değil, daha büyük bir pil sistemi gerektirir.',
      ],
    },
    {
      type: 'title',
      text: 'UPS Seçerken Watt ve VA Karşılaştırması',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'UPS ürün isimleri genellikle VA\'yı duyurur, ancak watt değeri gerçek ekipman için daha katı sınırdır. 900 VA\'lık bir UPS yalnızca 540 W destekleyebilirken, başka bir 900 VA modeli 600 W veya daha fazlasını destekleyebilir. Her iki değeri de kontrol edin ve aşırı yük alarmları, kısalan pil ömrü ve kesinti sırasında başarısız transferlerden kaçınmak için normal çalışmayı maksimumun altında tutun.',
    },
    {
      type: 'title',
      text: 'Çalışma Süresi Tahminlerini Bozan Yükler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Oyun bilgisayarları saniyeler içinde düşük boşta tüketimden yüksek GPU tüketimine geçebilir.',
        'Monitörler parlaklık, HDR modu ve panel boyutuna göre keskin şekilde değişir.',
        'NAS cihazları disk başlatma ve yeniden yapılandırma sırasında ek güç çeker.',
        'Lazer yazıcılar, ısıtıcılar, pompalar ve kompresörler, özellikle desteklenmedikçe kötü UPS yükleridir.',
        'Eski piller, orijinal kapasitelerinin önerdiğinden çok daha az çalışma süresi sağlayabilir.',
      ],
    },
    {
      type: 'title',
      text: 'Güvenli Doğrulama Kontrol Listesi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testten önce UPS\'i tamamen şarj edin.',
        'Açık çalışmaları kaydedin ve kritik yazma işlemleri veya ürün yazılımı güncellemeleri sırasında test yapmaktan kaçının.',
        'Ekipmanı değil, duvar gücünü çıkarın ve UPS yük yüzdesini ve pil tahminini izleyin.',
        'Pil tükenmeden önce PC, NAS veya sunucunuzun kapatma sinyalini aldığını doğrulayın.',
        'Kurşun-asit UPS pilleri hızla yaşlandığı için testi birkaç ayda bir tekrarlayın.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Korunan yük',
    addDevice: 'Cihaz ekle',
    deviceName: 'Cihaz',
    watts: 'Watt',
    remove: 'Cihazı kaldır',
    batteryWh: 'Pil kapasitesi (Wh)',
    efficiency: 'İnvertör verimliliği',
    powerFactor: 'Güç faktörü',
    reserve: 'Kapatma rezervi',
    totalLoad: 'Toplam yük',
    runtime: 'Tahmini çalışma süresi',
    recommendedUps: 'Önerilen boyut',
    usableEnergy: 'Kullanılabilir enerji',
    minutes: 'dk',
    hours: 'sa',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'UPS varsayımları',
    presetDesktop: 'Masaüstü bilgisayar',
    presetMonitor: '27 inç monitör',
    presetRouter: 'Yönlendirici ve modem',
    presetNas: 'İki yuvalı NAS',
    percentUnit: '%',
    bandLight: 'rahat yedekleme aralığı, önerilen UPS yaklaşık',
    bandBalanced: 'dengeli yedekleme aralığı, önerilen UPS yaklaşık',
    bandHeavy: 'kısa yedekleme aralığı; daha büyük bir pil düşünün veya yükü yaklaşık olarak azaltın',
    summaryPrefix: 'Bu kurulum şu süreye sahip:',
  },
};
