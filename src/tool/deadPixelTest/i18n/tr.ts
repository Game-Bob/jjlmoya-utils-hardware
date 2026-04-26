import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'olu-piksel-testi-ekran-tamiri';
const title = 'Ölü Piksel Testi ve Ekran Tamir Aracı';
const description =
  'Monitörünüzde ölü veya takılı kalmış piksel olup olmadığını kontrol edin ve çevrimiçi yüksek frekanslı strobe aracımızla bunları onarın.';

const faqData = [
  {
    question: 'Ölü piksel ile takılı kalmış piksel arasındaki fark nedir?',
    answer:
      'Ölü piksel, güç almadığı için (yanmış transistör) kalıcı olarak siyahtır. Takılı kalmış piksel (stuck pixel) genellikle parlak bir renktedir (kırmızı, yeşil veya mavi) ve hızlı strobe uyarımı ile canlandırılabilir.',
  },
  {
    question: 'Onarım aracı (Strobe) nasıl çalışır?',
    answer:
      'Aracımız, ana renklerin yüksek hızda hızlıca yanıp sönmesini sağlar. Bu, pikselin takılı kalmış sıvı kristalini kilidini açmaya zorlayabilir. Aracın 10 ila 30 dakika çalıştırılması önerilir.',
  },
  {
    question: 'Sıcaklık nedeniyle ölü piksel oluşabilir mi?',
    answer:
      'Evet, aşırı sıcaklıklar paneli etkileyebilir. Ancak en yaygın nedenler üretim hataları veya sıvı kristal elektrik kontaklarına zarar veren fiziksel darbelerdir.',
  },
  {
    question: 'Garanti kapsamında kaç ölü piksele izin verilir?',
    answer:
      'Bu, üreticiye ve ISO 9241-307 standardına bağlıdır. Genellikle markalar, Sınıf 1 panellerde 2 veya 3 parlak piksele kadarını "normal" kabul ederken, Sınıf 0 panellerde hiç hataya izin vermez.',
  },
];

const howToData = [
  {
    name: 'Ekranı temizleyin',
    text: 'Başlamadan önce, toz ile ölü pikseli karıştırmamak için monitörünüzü mikrofiber bir bezle iyice temizleyin.',
  },
  {
    name: 'Tam ekran moduna geçin',
    text: 'Tarayıcı arayüzünün hata tespitini engellememesi için F11\'e veya tam ekran düğmesine basın.',
  },
  {
    name: 'Renkleri değiştirin',
    text: 'Siyah, beyaz, kırmızı, yeşil ve mavi arka planlar arasında geçiş yapın. Arka plan rengiyle eşleşmeyen noktaları arayın.',
  },
  {
    name: 'Onarım döngüsünü başlatın',
    text: 'Parlak bir nokta bulursanız, Strobe aracını onun üzerine konumlandırın ve en az 20 dakika çalıştırın.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
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
      text: 'Tam Rehber: Ölü Pikseller, Takılı Pikseller ve Nasıl Onarılır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ekranınızda renk değiştirmeyen garip bir nokta mı fark ettiniz? Bu bir panel hatası olabilir. Bu araç, monitörünüzde <strong>ölü piksel</strong> veya <strong>takılı kalmış piksel</strong> olup olmadığını teşhis etmenize yardımcı olur ve bunları onarmayı denemeniz için bir çözüm sunar.',
    },
    {
      type: 'title',
      text: 'Ölü Piksel ile Takılı Kalmış Piksel Arasındaki Fark Nedir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Modern monitörlerde, her birinin belirgin özellikleri ve çözümleri olan iki ana piksel hatası türü vardır.',
    },
    {
      type: 'title',
      text: 'Takılı Kalmış Piksel (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'En yaygın hatadır. Bir veya daha fazla alt pikselin (Kırmızı, Yeşil veya Mavi) "açık" durumda takılı kalmasıyla oluşur. <strong>Belirti:</strong> Karanlık bir arka planda kalıcı, parlak renkli bir nokta (kırmızı, yeşil, mavi veya beyaz) görürsünüz. <strong>Genellikle onarılabilir.</strong> Sıvı kristal hala yanıt verir; sadece belirli bir polarizasyonda "kilitlenmiştir". Strobe onarım aracımız, hızlı voltaj uyarımı ile kilidi açmaya çalışır.',
    },
    {
      type: 'title',
      text: 'Ölü Piksel (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Pikseli kontrol eden transistör tamamen bozulduğunda ve ışık geçirmediğinde oluşur. <strong>Belirti:</strong> Özellikle açık veya beyaz arka planlarda görülen kalıcı siyah bir nokta. <strong>Onarılması zordur (genellikle kalıcıdır).</strong> Hasar donanım düzeyindedir (yanmış devre). Hiçbir elektriksel uyarı bunu düzeltemez. Genellikle panel değişimi gerektirir.',
    },
    {
      type: 'title',
      text: 'Strobe Onarım Aracı Nasıl Çalışır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '"Pikseli Onar" işlevi, <strong>Pixel Exercising</strong> olarak bilinen bir tekniği kullanır. Etkilenen alan üzerinde yüksek frekanslı rastgele bir gürültü deseni (hızlı renk yanıp sönmesi) oluşturur.',
    },
    {
      type: 'title',
      text: 'Mekanizma: Sıvı Kristal ve Voltaj',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'LCD monitörler, uygulanan voltaja göre şeffaflıklarını değiştiren sıvı kristaller kullanır. Bir alt piksel takıldığında, kristalin belirli bir polarizasyonda "donduğu" anlamına gelir. Hızlı voltaj değişiklikleri (hızlı ana renk değişimleri yoluyla elde edilir), kristali "egzersiz yaptırmaya" ve durum değiştirmeye zorlamaya çalışır.',
    },
    {
      type: 'title',
      text: 'Kullanım Önerileri',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Aracı etkilenen alan üzerinde en az <strong>10 ila 20 dakika</strong> çalıştırmanız önerilir.</li><li>İşe yaramazsa, daha uzun seanslar (1 saate kadar) deneyin veya piksel üzerine mikrofiber bir bezle çok hafif basınç uygulayın (risk size aittir).</li><li>Bazı durumlarda, Strobe\'u etkinleştirmeden önce monitörü bir saç kurutma makinesiyle (düşük sıcaklıkta) nazikçe ısıtmak sonuçları iyileştirir.</li></ul>',
    },
    {
      type: 'title',
      text: 'Epilepsi Uyarısı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onarım modu, yüksek hızda hızlı yanıp sönen ışıklar kullanır. Işığa duyarlı epilepsiniz veya ışık hassasiyetiniz varsa <strong>bu işlevi KULLANMAYIN</strong>. Yanıp sönen desenlere maruz kalmak, duyarlı kişilerde nöbetleri tetikleyebilir.',
    },
    {
      type: 'title',
      text: 'Garanti veya Değişim Ne Zaman İstenmeli?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kusurlu pikselleri (özellikle birden fazla ölü pikseli) onaylarsanız, testimizi garanti talepleri için kanıt olarak kullanabilirsiniz. Birçok üretici, 2-3\'ten fazla parlak pikseli veya 1 ölü pikseli, ISO 9241-307 (Sınıf 1) standardı kapsamında değiştirme hakkı veren bir üretim hatası olarak kabul eder.',
    },
    {
      type: 'title',
      text: 'Ölü Piksel Standartlarının Tarihi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Onlarca yıldır LCD monitörler, üretim karmaşıklığı nedeniyle piksel hatalarından muzdarip olmuştur. Bir Full HD panel (1920×1080) 6.220.800 piksel (18.662.400 alt piksel) içerir. İstatistiksel hata payı kaçınılmazdır. Bu nedenle, monitör sınıfına göre "kabul edilebilir ölü pikselleri" tanımlamak için ISO 9241-307 gibi standartlar mevcuttur.',
    },
  ],
  ui: {
    badge: 'Ekran Yardımcı Aracı',
    title: 'Ölü veya takılı pikseller mi?',
    description:
      'Saf tek renklerle monitörünüzün durumunu kontrol edin ve yüksek frekanslı uyarı aracımızla takılı kalmış pikselleri onarın.',
    btnStartTest: 'Testi Başlat',
    btnStartFix: 'Pikseli Onar',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Tam Ekran',
    kbdSpace: 'Boşluk',
    kbdSpaceLabel: 'Renk Değiştir',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Çıkış',
    colorBlack: 'Siyah',
    colorWhite: 'Beyaz',
    colorRed: 'Kırmızı',
    colorGreen: 'Yeşil',
    colorBlue: 'Mavi',
    btnToggleFixer: 'Onarım Aracını Aç (Strobe)',
    btnExit: 'Çıkış (ESC)',
  },
};
