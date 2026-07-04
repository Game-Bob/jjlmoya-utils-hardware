import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'subwoofer-crossover-testi-online';
const title = 'Subwoofer Crossover Testi';
const description =
  'Tarayıcınızda 200 Hz\'den 10 Hz\'e sinüs taraması yaparak subwoofer\'ınızın nerede zayıfladığını, kesildiğini veya ana hoparlörlere geçiş yaptığını bulun.';

const faqData = [
  {
    question: 'Bir subwoofer crossover testi neyi ölçer?',
    answer:
      'Ana hoparlörleriniz ile subwoofer arasında basın sürekli olarak duyulmadığı noktayı belirlemenize yardımcı olur. Bir boşluk, ani seviye değişikliği veya eksik bir aralık; yanlış crossover frekansına, faz sorununa, oda iptaline veya subwoofer sınırına işaret edebilir.',
  },
  {
    question: 'Bu test neden 200 Hz\'den 10 Hz\'e tarama yapar?',
    answer:
      'Çoğu ev sineması crossover\'ı 60 Hz ile 120 Hz arasında bulunurken, birçok kompakt hoparlör bu aralığın üstünde veya altında çıkış kaybetmeye başlar. 200 Hz\'den tarama yapmak, ton derin sub-basa ulaşmadan önce hoparlör-subwoofer geçişini duymayı kolaylaştırır.',
  },
  {
    question: 'Bu çevrimiçi subwoofer bas testi hoparlörlere zarar verebilir mi?',
    answer:
      'Evet, yüksek ses seviyesinde çok düşük frekanslar küçük hoparlörleri aşırı yükleyebilir veya bir subwoofer\'ı zorlayabilir. Düşük sesle başlayın, güçlendirilmiş bas modlarından kaçının ve takırtı, vuruntu veya mekanik zorlanma duyarsanız hemen durdurun.',
  },
  {
    question: 'İşaretlenen düşüş frekansı, kullanmam gereken tam crossover ayarı mıdır?',
    answer:
      'Hayır. Bunu bir laboratuvar ölçümü olarak değil, bir dinleme ipucu olarak değerlendirin. En iyi crossover ayarı ayrıca hoparlör özelliklerine, oda yerleşimine, faza, mesafe düzeltmesine ve kalibrasyon hedefine bağlıdır.',
  },
];

const howToData = [
  {
    name: 'Güvenli bir dinleme seviyesi ayarlayın',
    text: 'Önce sistem sesini kısın. Tarama, üretilmiş bir sinüs dalgası kullanır, bu nedenle tarayıcı sesi mütevazı görünse bile bas yoğunlaşabilir.',
  },
  {
    name: '200 Hz - 10 Hz taramasını başlatın',
    text: 'Taramayı Başlat düğmesine basın ve normal oturma yerinizden dinleyin. Ton, subwoofer\'ların, ana hoparlörlerin ve oda akustiğinin örtüştüğü bas aralığında sabit bir şekilde hareket eder.',
  },
  {
    name: 'Düşüşü veya geçişi dinleyin',
    text: 'Basın zayıfladığı, kaybolduğu, konum değiştirdiği veya subwoofer ile ana hoparlörler arasında dengesiz duyulduğu ana dikkat edin.',
  },
  {
    name: 'Frekansı işaretleyin',
    text: 'İlk net sorun noktasında Düşüşü İşaretle düğmesine basın. Bu frekansı crossover, faz, yerleşim veya oda düzeltmesini ayarlamak için bir ipucu olarak kullanın.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Hoparlörleriniz Ve Subwoofer Arasındaki Bas Boşluğunu Bulun', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir subwoofer, köşede ayrı bir kutu gibi duyulmamalıdır. Notalar ana hoparlörlerinizden sub\'a geçerken bas eşit kalmalıdır. Bu test <strong>200 Hz\'den 10 Hz\'e</strong> tarama yapar, böylece geçişin zayıf, gümbürtülü, konumlandırılabilir veya sessiz hale geldiği tam bölgeyi duyabilirsiniz.',
    },
    {
      type: 'table',
      headers: ['Ne duyuyorsunuz', 'Genellikle ne anlama gelir', 'İlk ne denenmeli'],
      rows: [
        ['Bas 70-100 Hz civarında kaybolur', 'Subwoofer ve hoparlörler crossover yakınında birbirini iptal ediyor olabilir.', 'Fazı ters çevirin, mesafe/gecikmeyi ayarlayın, ardından taramayı tekrarlayın.'],
        ['Bas dar bir bantta gümbürtülü hale gelir', 'Oda modu veya hoparlörler ile subwoofer arasında çok fazla örtüşme.', 'Crossover\'ı biraz düşürün veya subwoofer\'ı/dinleme pozisyonunu hareket ettirin.'],
        ['Bas subwoofer\'ın konumundan geliyor gibi', 'Crossover çok yüksek veya subwoofer seviyesi çok yüksek olabilir.', '80 Hz veya daha düşüğünü deneyin ve subwoofer kazancını azaltın.'],
        ['Derin bas 30-40 Hz altında kaybolur', 'Birçok sub için normal uzatma sınırı, özellikle kompakt modellerde.', 'Fiziksel olabilecek bir sorunu kovalamadan önce subwoofer özelliklerini kontrol edin.'],
      ],
    },
    { type: 'title', text: 'Düşüş Frekansı Size Ne Söyler', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'İşaretlenmiş frekansı ayar ipucu olarak kullanın',
      badge: 'Dinleme ipuçları',
      html: '<p>İşaretlenen nokta AVR crossover\'ınıza yakınsa, sorun muhtemelen entegrasyondur: faz, mesafe, polarite, seviye veya filtrelerin eğimi. İşaretlenen nokta çok daha düşükse, subwoofer\'ın çıkış sınırına ulaştığını duyuyor olabilirsiniz. Başınızı hareket ettirdiğinizde sorun çok değişiyorsa, oda sonuca hakimdir.</p>',
    },
    {
      type: 'title',
      text: 'Yaygın Crossover Aralıkları',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Hoparlör tipi', 'Tipik crossover başlangıç noktası', 'Neden'],
      rows: [
        ['Küçük uydular', '100-150 Hz', 'Küçük kabinler genellikle sinema seviyelerinde temiz üst bas çalamaz.'],
        ['Kitaplık hoparlörleri', '70-100 Hz', 'Genellikle sub\'ı konumlandırılabilir hale getirmeden temiz bir geçiş için yeterli bas.'],
        ['Kule hoparlörler', '50-80 Hz', 'Daha büyük woofer\'lar daha fazla orta bas işleyebilir, ancak oda yine de subwoofer bas yönetimini tercih edebilir.'],
        ['THX tarzı kurulum', '80 Hz', 'Birçok sistem için iyi çalışan ve derin bası sub\'a yönlendiren pratik bir varsayılan değer.'],
      ],
    },
    { type: 'title', text: 'Crossover Sorunu Mu Oda Sorunu Mu?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crossover veya faz sorunu',
          description: 'Zayıf nokta crossover frekansı yakınında görünür ve faz, polarite, mesafe veya crossover ayarını değiştirdikten sonra iyileşir.',
          points: ['Genellikle aynı koltuktan tekrarlanabilir.', 'Çoğunlukla 60-120 Hz civarında merkezlenir.'],
        },
        {
          title: 'Oda iptali',
          description: 'Zayıf nokta, başınızı hareket ettirdiğinizde, koltuk değiştirdiğinizde veya subwoofer\'ı kısa bir mesafe kaydırdığınızda önemli ölçüde değişir.',
          points: ['Pozisyona çok bağlıdır.', 'Genellikle ayarlardan çok yerleşimle çözülür.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Testi çalıştırmanın en iyi yolu',
      html: 'Gerçekten film izlediğiniz veya müzik dinlediğiniz yerde oturun. Subwoofer\'ın yanında durmayın. Kabinin yanında iyi ses veren bir crossover, kanepede hala bir boşluk bırakabilir.',
    },
    {
      type: 'summary',
      title: 'Taramadan sonra ne değiştirilmeli',
      items: [
        'Boşluk mevcut crossover\'a yakınsa, 10 Hz değişiklikler deneyin ve taramayı tekrarlayın.',
        'Zayıf bant crossover yakınındaysa, subwoofer faz anahtarını veya gecikme ayarını deneyin.',
        'Bas bir koltukta güçlenir ve diğerinde kaybolursa, tüm AVR ayarlarını değiştirmeden önce subwoofer\'ı hareket ettirin.',
        'Yerleşim veya crossover değişikliklerinden sonra, alıcının yeni kurulumu ölçmesi için oda düzeltmesini yeniden çalıştırın.',
        'İşaretlenmiş frekansı ayarlamaya rehberlik etmesi için kullanın, ardından müzik, filmler ve tanıdık bas hatlarıyla onaylayın.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Subwoofer düşük frekans taraması',
    currentFrequency: 'Mevcut frekans',
    targetFrequency: 'Hedef',
    elapsed: 'Geçen süre',
    statusReady: 'Düşük taramaya hazır',
    statusRunning: 'Aşağı tarıyor',
    statusStopped: 'Tarama durduruldu',
    start: 'Taramayı başlat',
    stop: 'Taramayı durdur',
    markDropout: 'Düşüşü işaretle',
    reset: 'Sıfırla',
    volume: 'Çıkış seviyesi',
    duration: 'Tarama süresi',
    safeStart: 'Düşük sesle başlayın, ardından basın duyulması zorlaştığı ilk frekansı işaretleyin.',
    roomNote: 'Oda konumu ve faz, sonucu önemli ölçüde değiştirebilir.',
    dropoutLabel: 'İşaretlenmiş nokta',
    dropoutEmpty: 'Henüz işaretlenmedi',
    crossoverEstimate: 'Tahmini düşüş noktası',
  },
};
