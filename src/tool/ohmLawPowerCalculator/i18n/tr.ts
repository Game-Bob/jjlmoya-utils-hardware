import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ohm Kanunu ve Elektriksel Güç Hesaplayıcı',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Bu Ohm kanunu hesaplayıcısı neyi çözer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gerilim, akım, direnç veya güç değerlerinden bilinen iki pozitif değeri girin. Hesaplayıcı diğer iki değeri bulur.' },
    },
    {
      '@type': 'Question',
      name: 'Hesaplayıcı hangi birimleri kullanır?',
      acceptedAnswer: { '@type': 'Answer', text: 'Gerilim için volt, akım için amper, direnç için ohm ve güç için watt birimlerini kullanır.' },
    },
    {
      '@type': 'Question',
      name: 'Güç ve direnci bilinen değerler olarak kullanabilir miyim?',
      acceptedAnswer: { '@type': 'Answer', text: 'Evet. Hesaplayıcı karekök bağıntılarını kullanarak gerilim ve akımı elde eder.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Ohm kanunu ile elektriksel değerler nasıl hesaplanır',
  step: [
    { '@type': 'HowToStep', name: 'Bilinen iki değeri seçin', text: 'Gerilim, akım, direnç veya güç arasından bildiğiniz iki büyüklüğü etkinleştirin.' },
    { '@type': 'HowToStep', name: 'Ölçümleri girin', text: 'Etkin alanlara pozitif değerler yazın.' },
    { '@type': 'HowToStep', name: 'Sonucu okuyun', text: 'Devre şeması ve gösterge hesaplanan iki değeri ve kullanılan formülü gösterir.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Bir devrede gerilim akım direnç veya güç hesaplama', level: 2 },
  { type: 'paragraph', html: 'Basit bir devrede iki elektriksel büyüklüğü biliyorsanız, diğer ikisini bulmak için yeterli bilgiye sahipsiniz demektir. Elinizdeki çifti girin; bu Ohm kanunu hesaplayıcısı eksik değerleri volt, amper, ohm ve watt cinsinden hesaplar.' },
  { type: 'paragraph', html: 'Örneğin, 6 Ω ve 24 W elde etmek için 12 V ve 2 A girin. 5 V ve 10 W girdiğinizde 2 A ve 2,5 Ω elde edersiniz. Bir direnci kontrol ederken, LED akımını tahmin ederken veya amfi yükünü hesaplarken oldukça kullanışlıdır.' },
  { type: 'title', text: 'Hangi Ohm kanunu formülünü kullanmalısınız', level: 3 },
  { type: 'paragraph', html: 'Doğru denklem mevcut iki ölçüme bağlıdır. Tümü Ohm kanunu V = I x R ve güç bağıntısı P = V x I denklemlerinin türevleridir.' },
  { type: 'table', headers: ['Bilinenler', 'Hesaplananlar', 'Kullanılan Formül'], rows: [
    ['Gerilim ve akım', 'Direnç ve güç', 'R = V / I ve P = V x I'],
    ['Gerilim ve direnç', 'Akım ve güç', 'I = V / R ve P = V² / R'],
    ['Gerilim ve güç', 'Akım ve direnç', 'I = P / V ve R = V² / P'],
    ['Akım ve direnç', 'Gerilim ve güç', 'V = I x R ve P = I² x R'],
    ['Akım ve güç', 'Gerilim ve direnç', 'V = P / I ve R = P / I²'],
    ['Direnç ve güç', 'Gerilim ve akım', 'V = √(P x R) ve I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Güvenli bileşen seçimi için gücü kontrol edin', html: 'Hesaplayıcı 24 W veriyorsa, bileşenin en az bu kadar gücü ısı olarak harcayabilmesi gerekir. Her zaman bir güvenlik payı bırakın.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'ohm-kanunu-guc-hesaplayici',
  title: 'Ohm Kanunu ve Elektriksel Güç Hesaplayıcı',
  description: 'Bilinen iki değerden gerilim, akım, direnç ve elektriksel gücü hesaplamak için Ohm kanunu hesaplayıcısı.',
  ui: {
    instructions: 'Bildiğiniz iki değeri seçin ve girin. Devre kalan çifti SI birimlerinde hesaplar.',
    knownLabel: 'Bilinen iki değeri seçin',
    useAsKnownLabel: 'Bilinen olarak kullan',
    voltageLabel: 'Gerilim',
    currentLabel: 'Akım',
    resistanceLabel: 'Direnç',
    powerLabel: 'Güç',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Devreyi tamamlayın',
    resultHint: 'İki bilinen terminal eksik çifti hesaplar.',
    formulaTitle: 'Devre göstergesi',
    formulaHint: 'Işıklı terminaller bilinmektedir. Bakır yollar denklemleri gösterir.',
    statusTitle: 'Hesaplama durumu',
    statusEmpty: 'Başlamak için iki pozitif değer girin.',
    statusInvalid: 'Her iki bilinen değer de sıfırdan büyük olmalıdır.',
    statusReady: 'Devre bağıntısı çözüldü.',
    presetTitle: 'Gerçek bir yükten başlayın',
    presetLed: 'LED göstergesi',
    presetUsb: 'USB yükü',
    presetAmplifier: 'Amfi yükü',
    resetLabel: 'Sıfırla',
    orbitCaption: 'Devreyi kapatmak için iki terminal seçin.',
    knownBadge: 'Bilinen',
    solvedBadge: 'Hesaplanan',
    unitVoltage: 'volt',
    unitCurrent: 'amper',
    unitResistance: 'ohm',
    unitPower: 'watt',
    formulaVoltageCurrent: 'R = V / I ve P = V x I',
    formulaVoltageResistance: 'I = V / R ve P = V² / R',
    formulaVoltagePower: 'I = P / V ve R = V² / P',
    formulaCurrentResistance: 'V = I x R ve P = I² x R',
    formulaCurrentPower: 'V = P / I ve R = P / I²',
    formulaResistancePower: 'V = √(P x R) ve I = √(P / R)',
    seoTitle: 'Ohm kanunu hesaplayıcı',
  },
  seo,
  faqTitle: 'Ohm kanunu hakkında sıkça sorulan sorular',
  faq: [
    { question: 'Gerilim ve akımı biliyorum. Ne elde ederim?', answer: 'Direnç ve güç elde edersiniz. Örneğin 12 V ve 2 A, 6 Ω ve 24 W üretir.' },
    { question: 'Bir direncin harcadığı gücü hesaplayabilir miyim?', answer: 'Evet. Harcanan gücü watt cinsinden bulmak için gerilim ve direnç veya akım ve direnç girin.' },
    { question: 'Giriş olarak güç ve gerilimi kullanabilir miyim?', answer: 'Evet. İkisini de girin; hesaplayıcı akımı (I = P / V) ve direnci (R = V² / P) bulur.' },
    { question: 'Ohm kanunu her bileşen için geçerli midir?', answer: 'Hayır. Bu hesaplayıcı basit ohmik bileşenleri modeller. Diyotlar doğrusal olmayan özellik gösterir.' },
  ],
  bibliographyTitle: 'Formül kaynakları',
  bibliography,
  howTo: [
    { name: 'Bilinen iki değeri seçin', text: 'Bildiğiniz iki büyüklüğü etkinleştirin.' },
    { name: 'Pozitif ölçümleri girin', text: 'Volt, amper, ohm veya watt değerlerini yazın.' },
    { name: 'Sonucu okuyun', text: 'Hesaplanan değerleri ve formülü görün.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
