import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';

const slug = 'online-ses-ve-frekans-ureteci';
const title = 'Çevrimiçi Ses ve Frekans Üreteci';
const description =
  'Sinüs, kare, üçgen ve testere dişi dalgalar oluşturun. Hoparlörlerinizi, kulaklıklarınızı veya subwoofer\'ınızı 20Hz ile 20kHz arasındaki frekanslarla test edin.';

const faqData = [
  {
    question: 'Frekans üreteci ne için kullanılır?',
    answer:
      'Hoparlörlerin ve kulaklıkların frekans tepkisini test etmek, mobilyalardaki istenmeyen rezonansları tespit etmek, işitme aralığınızdaki boşlukları bulmak ve hatta çentik (notch) terapisi yoluyla kulak çınlamasını sakinleştirmeye yardımcı olmak için kullanılır.',
  },
  {
    question: 'Sinüs dalgası ile kare dalga arasındaki fark nedir?',
    answer:
      'Sinüs dalgası, harmonik içermeyen saf bir tondur (pürüzsüz ve yuvarlak). Kare dalga tek harmonikler açısından zengindir ve çok daha agresif veya dijital bir sese sahiptir. Üçgen dalga, ses sentezi için yararlı olan ikisinin arasında bir yerdedir.',
  },
  {
    question: 'Bu araçla hoparlörlerime zarar verebilir miyim?',
    answer:
      'Evet, uç frekanslarda (özellikle 30Hz altındaki baslar veya 15kHz üzerindeki tizler) çok yüksek ses seviyeleri kullanırsanız zarar verebilirsiniz. Her zaman düşük bir sistem sesiyle başlayın ve kademeli olarak artırın.',
  },
  {
    question: 'İnsan işitme aralığı nedir?',
    answer:
      'Teorik olarak 20Hz ile 20.000Hz (20kHz) arasıdır. Ancak yaşlandıkça 15kHz\'in üzerindeki sesleri duyma yeteneğini kaybetmek normaldir. Bu test, kişisel üst sınırınızı doğrulamanıza yardımcı olabilir.',
  },
];

const howToData = [
  {
    name: 'Dalga formu türünü seçin',
    text: 'Yapmak istediğiniz testin türüne bağlı olarak Sinüs (saf), Kare, Üçgen veya Testere dişi arasından seçim yapın.',
  },
  {
    name: 'Frekansı ayarlayın',
    text: 'İşitilebilir spektrumda gezinmek için kaydırıcıyı hareket ettirin. Referans frekanslara hızlıca erişmek için 60Hz, 440Hz veya 1kHz kısayollarını kullanın.',
  },
  {
    name: 'Ses seviyesini kontrol edin',
    text: 'Oynat düğmesine basmadan önce hoparlör sesinizin düşük olduğundan emin olun. Kazancı (gain) doğrudan araç üzerinden ayarlayabilirsiniz.',
  },
  {
    name: 'Tepkiyi analiz edin',
    text: 'Olası bozulmaları veya sesin kaybolduğu anları dinleyin. Bu, ses donanımınızın fiziksel sınırlarını gösterecektir.',
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    {
      name: 'MDN Web Docs — Web Audio API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'ISO 226:2023 — Equal-loudness contours',
      url: 'https://www.iso.org/standard/83117.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Frekanslar ve Ses Dalgaları Hakkında Her Şey', level: 2 },
    {
      type: 'paragraph',
      html: 'Ses, hareket halindeki saf fiziktir. Bu araç, göğsünüzde hissedebileceğiniz en derin baslardan yalnızca hayvanların algılayabileceği ultrasonik tizlere kadar ses dalgalarını gerçek zamanlı olarak manipüle etmenizi sağlar.',
    },
    { type: 'title', text: 'İnsan İşitme Aralığı ve Presbikuzi', level: 3 },
    {
      type: 'paragraph',
      html: 'Sağlıklı bir insan kulağı <strong>20Hz ile 20kHz</strong> arasındaki sesleri algılar. Yaşla birlikte üst sınır düşer: 50 yaşın üzerindeki çoğu yetişkin 12kHz\'in üzerini duyamaz. "Sivrisinek tonu" olarak bilinen 17.4kHz tonu, genellikle sadece gençlerin geçebildiği klasik bir testtir.',
    },
    { type: 'title', text: 'Dalga Türleri ve Kullanımları', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinüs:</strong> Tibbi işitme testlerinde ve enstrüman kalibrasyonunda kullanılan, harmonik içermeyen saf ton. <strong>Kare:</strong> Tek harmonikler açısından zengin, retro 8-bit konsollar gibi ses çıkarır. <strong>Testere dişi:</strong> Elektronik müzik sentezleyicilerinin temeli olan tüm harmonikleri içerir. <strong>Üçgen:</strong> Sinüs ve kare arasındaki orta nokta; kare dalgadan daha pürüzsüz ancak sinüs dalgasından daha fazla harmonik içeriğe sahip.',
    },
    { type: 'title', text: 'Hoparlör Testi ve Titreşimle Temizleme', level: 3 },
    {
      type: 'paragraph',
      html: 'Maksimum ses seviyesinde kare veya testere dişi şeklinde düşük frekanslı bir dalga (genellikle <strong>165Hz</strong>), hoparlör diyaframını şiddetle titremeye zorlayarak ızgarada hapsolmuş su damlacıklarını mekanik olarak dışarı atar. Çok yüksek frekansları uzun süre maksimum seste çalmayın: Duyamasanız bile enerji, ekipmanınızın tweeter\'larına zarar verebilir.',
    },
  ],
  ui: {
    badge: 'Ses Üreteci',
    title: 'Ses Üreteci',
    description: 'Ses testleri için saf frekanslar oluşturun.',
    freqLabel: 'Frekans',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bas)',
    rangeMax: '20kHz (Ultrason)',
    waveLabel: 'Dalga Formu',
    waveSine: 'Sinüs',
    waveSquare: 'Kare',
    waveSawtooth: 'Testere dişi',
    waveTriangle: 'Üçgen',
    volLabel: 'Ses Seviyesi',
    btnPlay: 'SESİ OYNAT',
    btnStop: 'DURDUR',
  },
};
