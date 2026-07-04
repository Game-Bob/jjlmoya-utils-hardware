import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usb-guc-butcesi-hesaplayici';
const title = 'USB Güç Bütçesi Hesaplayıcı';
const description = 'Bir USB portunun, şarj cihazının, hub\'ın, kablonun veya USB-C PD profilinin, rezerv payı ve kablo voltaj düşümü sonrası cihazlarınıza güvenle güç sağlayıp sağlayamayacağını kontrol edin.';

const faqData = [
  {
    question: 'Bir USB portunun cihazımı çalıştırabileceğini nasıl anlarım?',
    answer: 'Toplam cihaz watt değerini USB kaynak watt değeriyle karşılaştırın, ardından rezerv payı ayırın ve kablo voltaj düşümünü tahmin edin. Kablo uzun, ince veya 5 voltta yüksek akım taşıyorsa, nominal watt yüksek görünse bile bir kurulum başarısız olabilir.',
  },
  {
    question: 'USB gücü için kablo uzunluğu neden önemlidir?',
    answer: 'Bakırdan akan akım voltaj düşümü oluşturur. Uzun kablolar ve ince iletkenler daha fazla dirence sahiptir, bu nedenle cihaz şarj cihazının sağladığından daha az voltaj alabilir. Bu özellikle Raspberry Pi kartları, sabit diskler, LED şeritler, dock\'lar ve veri yolundan beslenen hub\'lar için önemlidir.',
  },
  {
    question: 'Hangi rezerv payını kullanmalıyım?',
    answer: 'Normal elektronik için en az yüzde 20, motorlar, sürücüler, radyolar veya ani yüklü kartlar için yüzde 30 ve adaptör kalitesi bilinmiyorsa veya cihaz sürekli çalışması gerekiyorsa daha fazlasını kullanın.',
  },
  {
    question: 'Bu, USB-C PD görüşme testlerinin yerini alabilir mi?',
    answer: 'Hayır. Hesaplayıcı elektriksel bütçeyi kontrol eder. Bir şarj cihazının, kablo e-işaretleyicisinin, cihazın veya hub\'ın belirli bir Power Delivery profilini gerçekten görüşüp görüşmediğini doğrulamaz.',
  },
];

const howToData = [
  { name: 'Bir kaynak profili seçin', text: 'Yaygın bir USB veya USB-C PD profili seçin veya voltaj ve akımı manuel olarak düzenleyin.' },
  { name: 'Kabloyu tanımlayın', text: 'Kablo uzunluğunu ve iletken kalınlığını girin. Yüksek AWG numaralı ince teller daha fazla voltaj düşümüne neden olur.' },
  { name: 'Yükü ekleyin', text: 'Watt cinsinden bir cihaz yükü ve aynı kaynağı paylaşan cihaz sayısını girin.' },
  { name: 'Durumu okuyun', text: 'Kurulumun güvenli olup olmadığına karar vermek için durum, kablo düşümü, son voltaj, kullanım ve rezerv payını kullanın.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'USB gücü bir bütçedir, etiket değil', level: 2 },
    {
      type: 'paragraph',
      html: '15 W, 45 W veya 100 W olarak işaretlenmiş bir USB şarj cihazı, kaynağın doğru koşullar altında neler sunabileceğini açıklar. Cihazınız yalnızca protokol görüşmesi, akım sınırları, kablo direnci, konnektör kalitesi, hub kayıpları ve yük ani yükselmelerinden sonraki sonucu görür. Bu hesaplayıcı pratik elektrik sorusuna odaklanır: kablo düşümü ve rezerv marjı sonrası, çalıştırmak istediğiniz donanım için yeterli güç kaldı mı?',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 varsayılan akım', value: '0,5 A' },
        { label: '5 V\'ta USB-C varsayılan maksimum', value: '3 A' },
        { label: 'Önerilen rezerv', value: '%20+' },
      ],
    },
    { type: 'title', text: 'Sonuç nasıl yorumlanır', level: 3 },
    {
      type: 'table',
      headers: ['Durum', 'Anlamı', 'En iyi sonraki adım'],
      rows: [
        ['Güvenli', 'Yük, seçilen rezervden sonra kaynak değerinin içine sığar ve tahmini cihaz voltajı sağlıklı kalır.', 'Kurulumu kullanın, ancak adaptör küçük veya kapalıysa ısıya dikkat edin.'],
        ['Sıkışık', 'Yük, ayrılmış limite yakın veya kablo düşümü anlamlı hale geliyor.', 'Kabloyu kısaltın, daha kalın iletkenler seçin, yükü azaltın veya daha yüksek bir güç profiline geçin.'],
        ['Bütçe aşımı', 'Yük, kullanılabilir kaynak gücünü aşıyor veya cihaz tarafı voltajı muhtemelen çok düşük.', 'Daha güçlü bir şarj cihazı, güçlü hub, daha kısa kablo veya daha yüksek bir USB-C PD voltajı görüşen bir cihaz kullanın.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Watt yeterli olduğunda ancak cihaz hâlâ sıfırlanıyorsa',
      html: '<p>Başlangıç akımı, bir cihaz etiketinde yazılı ortalama watt değerinden çok daha yüksek olabilir. Bir 5 V kaynağı, aynı watt değeri için bir 20 V PD profilinden daha hızlı voltaj kaybeder çünkü daha fazla akım taşıması gerekir. Birçok düşük maliyetli kablo, dış kılıfı kalın görünse bile ince güç iletkenleri kullanır ve veri yolundan beslenen hub\'lar bir üst akım bütçesini her alt akım cihazı arasında paylaştırır.</p>',
    },
    { type: 'title', text: 'Kablo voltaj düşümü basit terimlerle', level: 3 },
    {
      type: 'paragraph',
      html: 'Voltaj düşümü, akım kablo direncinden aktığında oluşan kayıptır. USB gücünde güç yolunda iki iletken bulunur, bu nedenle hesaplayıcı gidiş-dönüş uzunluğunu kullanır. Bir metre kablo, güç döngüsü için elektriksel olarak iki metre bakırdır. Daha düşük AWG numaraları daha kalındır ve genellikle yüksek akım yükleri için daha iyidir.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Kısa kalın kablo', description: 'Raspberry Pi kartları, SSD muhafazaları, geliştirme kitleri ve ani akım çeken USB-C dock\'lar için en iyisidir.' },
        { title: 'Uzun ince kablo', description: 'Düşük güç sensörleri veya yavaş şarj için kabul edilebilir, ancak sürücüler, LED yükleri ve hesaplama kartları için risklidir.' },
        { title: 'Daha yüksek voltaj PD', description: 'Aynı watt değeri için akımı azaltır, bu da kablo kaybını düşürür, ancak yalnızca kaynak, kablo ve cihaz bunu görüşürse.' },
      ],
    },
    {
      type: 'tip',
      title: 'Pratik kural',
      html: 'Hesaplayıcı kurulumun sıkışık olduğunu söylüyorsa, bunu bir saha uyarısı olarak kabul edin. USB arızaları genellikle net bir güç sorunu gibi görünmeden önce rastgele bağlantı kopmaları, voltaj düşmeleri, yavaş şarj, parazitli ses veya depolama hataları olarak ortaya çıkar.',
    },
    {
      type: 'summary',
      title: 'Bu hesaplayıcı en çok ne için uygundur',
      items: [
        'USB hub\'ları, tek kartlı bilgisayarları, harici sürücüleri, geliştirme kartlarını, ışıkları, fanları ve küçük laboratuvar kurulumlarını planlama.',
        'USB 2.0, USB 3.x, USB-C ve USB Power Delivery kaynak profillerini karşılaştırma.',
        'Bir kablonun bir yük için çok uzun veya çok ince olup olmadığını tahmin etme.',
        'Bir şarj cihazı veya güçlü hub satın almadan önce makul bir rezerv seçme.',
      ],
    },
  ],
  ui: {
    profileLabel: 'USB kaynak profili',
    metricUnits: 'Metrik',
    imperialUnits: 'ABD',
    voltageLabel: 'Kaynak voltajı (V)',
    currentLabel: 'Kaynak akımı (A)',
    cableLengthLabel: 'Kablo uzunluğu',
    wireGaugeLabel: 'Güç teli kalınlığı',
    deviceLoadLabel: 'Cihaz başına yük (W)',
    devicesLabel: 'Cihazlar',
    headroomLabel: 'Rezerv payı (%)',
    sourcePower: 'Kaynak gücü',
    requiredPower: 'Gereken güç',
    cableDrop: 'Kablo düşümü',
    deviceVoltage: 'Cihaz voltajı',
    headroom: 'Rezerv',
    utilization: 'Kullanım',
    safeStatus: 'Güç bütçesi güvenli görünüyor',
    tightStatus: 'Güç bütçesi sıkışık',
    overStatus: 'Bütçe aşımı veya voltaj düşümü riski',
    safeAdvice: 'Yük seçilen rezervle uyumludur. Kaliteli bir kablo kullanın ve uzun çalışmalarda ısıyı kontrol edin.',
    tightAdvice: 'Limite yakınsınız. Kablo uzunluğunu azaltın, daha kalın iletkenler kullanın, yükü düşürün veya daha güçlü bir profil seçin.',
    overAdvice: 'Bu kurulumun voltaj düşmesi veya kısıtlama yaşaması muhtemeldir. Güçlü bir hub, daha güçlü adaptör veya daha yüksek voltajlı bir USB-C PD profili kullanın.',
    busLane: 'USB kaynağı',
    loadLane: 'Cihaz yükü',
    cableLane: 'düşüm',
    boardEyebrow: 'Canlı USB güç yolu',
    sourceSocket: 'Besleme soketi',
    deviceSocket: 'Donanım yükü',
    energyFlow: 'enerji akışı',
    reservedLabel: 'rezerv sonrası kullanılabilir',
  },
};
