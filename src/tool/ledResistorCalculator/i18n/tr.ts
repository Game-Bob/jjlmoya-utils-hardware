import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedResistorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-direnc-hesaplayici';
const title = 'LED seri direnç hesaplayıcı';
const description = 'Besleme gerilimi, ileri gerilim ve akımdan LED seri direncini bulun, sonra en yakın E12 veya E24 değeri ile güvenli gücü seçin.';

const faqData = [
  { question: '5 V Arduino pinindeki kırmızı LED için hangi direnç gerekir?', answer: 'Tipik kırmızı 5 mm LED 2,0 V ve 20 mA ile 5 V üzerinde 150 ohm ve dirençte yaklaşık 60 mW ister. 125 mW veya 250 mW metal film yeter. Birçok çekmece 220 ohm kullanır: LED biraz daha sönük çalışır ve ileri gerilim düşükse daha güvenli kalır.' },
  { question: 'LED direnci nasıl hesaplanır?', answer: 'İleri gerilimi beslemeden çıkarın, sonra amper cinsinden akıma bölün. 5 V üzerinde 2 V ve 20 mA kırmızı LED için tam direnç (5 - 2) / 0,02 = 150 ohm.' },
  { question: 'Hangi ileri gerilimi kullanmalıyım?', answer: 'İstediğiniz akımda üretici veri kağıdındaki tipik ileri gerilimi kullanın. Buradaki renk yongaları tipik lotlardır, sizin LED\'iniz değil. Başlangıç: kızılötesi 1,3 V, kırmızı 2,0 V, sarı veya yeşil 2,2 V, mavi veya beyaz 3,2 V.' },
  { question: 'Araç tam ohm yerine neden E12 veya E24 gösteriyor?', answer: 'Delikli ve yonga dirençler tercih sayı serilerinde satılır. E12 adımları yaklaşık yüzde 20, E24 adımları yüzde 10 aralıktadır. Hesaplayıcı en yakın tercih değerini alır, eşitlikte LED\'i aşırı sürmemek için daha yüksek direnci seçer.' },
  { question: 'Paralel LED\'ler tek direnci paylaşabilir mi?', answer: 'Hayır. En düşük ileri gerilimli LED akımın çoğunu alır ve yanabilir. LED\'leri bir dirençte seri bağlayın veya her paralel kola kendi direncini verin.' },
  { question: 'Seri direnç ne zaman yetmez?', answer: '1 W sınıfı yayıcılar, LED şeritler, uzun otomotiv dizileri ve gerilim düşünce kararlı akım isteyen yüklerde tek direnci atlayın. Bunlar sabit akım sürücüsü ister. Direnç sert hatta bir gösterge LED\'ini sınırlar, akım kaynağı değildir.' },
];

const howToData = [
  { name: 'LED rengini seçin', text: 'Tezgâhtaki parçaya uyan diyoda dokunun. Tipik ileri gerilim ve 20 mA gösterge akımı yüklenir.' },
  { name: 'Hattı seçin', text: 'Mantık pinleri için Arduino 5 V veya 3,3 V MCU, panel beslemesi için 9 V, 12 V veya 24 V kullanın.' },
  { name: 'Karttaki parçayı okuyun', text: 'Direnç alınacak değeri, kullanılacak gücü ve renk halkalarını gösterir. LED listeniz farklıysa veri kağıdı değerlerini açın.' },
  { name: 'Lehimlemeden önce polariteyi kontrol edin', text: 'Akım anottan girer, katottan toprağa çıkar. Düşüm 1 V altındaysa veya direnç ısınıyorsa veri kağıdını doğrulayın.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<LedResistorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'LED seri direnç hesaplayıcı', level: 2 },
    { type: 'paragraph', html: 'Ayrık LED akımla sürülen bir diyottur. Seri direnç o akımı Ohm yasasıyla kurar: <code>R = (Vs - n x Vf) / If</code>. Bu hesaplayıcı tarayıcıda çözer, E12 veya E24 parçaya oturtur, renk halkalarını boyar ve iki kat paylı bir güç adlandırır.' },
    { type: 'title', text: 'Arduino 5 V pininde kırmızı LED', level: 3 },
    { type: 'paragraph', html: 'İnsanların yazdığı arama "5 V kırmızı LED için hangi direnç". Tipik Vf 20 mA\'de 2,0 V, yani <code>(5 - 2) / 0,02 = 150 ohm</code> ve dirençte 60 mW. 150 ohm, 125 mW veya 250 mW alın. Çekmeceden 220 ohm da olur: akım yaklaşık 14 mA\'e düşer ve LED sönükleşir, durum pininde çoğu zaman istenen budur.' },
    { type: 'table', headers: ['LED rengi', 'Tipik Vf', 'Tipik If', '5 V direnç'], rows: [['Kızılötesi', '1,3 V', '20 mA', '180 ohm'], ['Kırmızı', '2,0 V', '20 mA', '150 ohm'], ['Sarı veya yeşil', '2,2 V', '20 mA', '150 ohm'], ['Mavi veya beyaz', '3,2 V', '20 mA', '91 ohm'], ['Morötesi', '3,4 V', '20 mA', '82 ohm']] },
    { type: 'title', text: 'E12 ve E24 tercih değerleri', level: 3 },
    { type: 'paragraph', html: 'Dirençler IEC tercih sayı serisinde üretilir. E12 yaygın yüzde 10 kümedir: 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 ve onlukları. E24 yüzde 5 kümesini 11, 13, 16, 20, 24, 30, 36, 43, 51, 62, 75 ve 91 ile doldurur. Araç en yakını seçer, eşit mesafede LED biraz daha sönük çalışsın diye daha yüksek direnci alır.' },
    { type: 'title', text: 'Seri direncin yetmediği yer', level: 3 },
    { type: 'paragraph', html: 'Direnç bir akım kaynağı değildir. Yalnız seçilen besleme ve Vf için akımı kurar. Paralel LED\'lerde tek direnç paylaşmayın: en düşük Vf akımı kapar. 1 W yayıcı, LED şerit veya uzun 12 V otomotiv dizisinde tek direnç kullanmayın. Bunlar sabit akım sürücüsü ister. Renk önayarları tipik lotlardır; anma akımındaki veri kağıdı Vf asıl sayıdır.' },
    { type: 'list', items: ['Veri kağıdı daha fazlasına izin vermedikçe gösterge LED\'lerini 10 mA ile 20 mA yakınında tutun.', 'Her paralel LED\'e kendi direncini verin.', 'Düşüm 1 V altındaysa küçük bir Vf değişimi akımı çok kaydırır.', '12 V üzerinde direnç çoğu zaman 0,5 W ister, 125 mW film yetmez.', 'Lehimlemeden önce anot, katot, tepe akımı ve gücü doğrulayın.'] },
    { type: 'tip', title: 'Tipik Vf sizin lotunuz değil', html: 'Buradaki kırmızı, mavi ve beyaz yongalar 5 mm göstergeler için başlangıçtır. Hat 3,3 V ise, LED güç sınıfıysa veya parça kızılötesi ise üretici eğrisini ölçün veya okuyun.' },
    { type: 'diagnostic', variant: 'warning', title: 'Direnç akım kaynağı değildir', html: 'Besleme düşerse, LED Vf sıcaklıkla kayarsa veya birkaç LED paralel bağlanırsa akım hareket eder. Kartı tezgah başlangıcı olarak kullanın, sonra ölçün.' },
  ],
  ui: {
    colorHeader: 'LED',
    colorInfrared: 'IR',
    colorRed: 'Kırmızı',
    colorOrange: 'Turuncu',
    colorYellow: 'Sarı',
    colorGreen: 'Yeşil',
    colorBlue: 'Mavi',
    colorWhite: 'Beyaz',
    colorUv: 'UV',
    supplyHeader: 'Hat',
    supplyArduino: 'Arduino 5 V',
    supplyMcu: '3,3 V MCU',
    supply9: '9 V',
    supply12: '12 V',
    supply24: '24 V',
    supplyUnit: 'V',
    forwardHeader: 'Veri kağıdı Vf',
    forwardUnit: 'V',
    currentHeader: 'Veri kağıdı If',
    currentUnit: 'mA',
    countHeader: 'Seri LED',
    seriesHeader: 'Tercih serisi',
    seriesE12: 'E12',
    seriesE24: 'E24',
    showDatasheet: 'Veri kağıdı değerleri',
    hideDatasheet: 'Veri kağıdını gizle',
    buyLabel: 'Parça',
    powerLabel: 'Güç',
    seriesShort: 'Seri',
    statusTight: 'Az gerilim kaldı',
    statusHotter: 'Direnç ısınacak',
    statusOverdriven: 'Akım yüksek',
    statusNoHeadroom: 'Besleme LED\'i yakamaz',
    statusInvalid: 'Girdileri kontrol edin',
    supplyLabel: 'Besleme',
    resistorLabel: 'Direnç',
    ledLabel: 'LED',
    groundLabel: 'GND',
    anodeLabel: 'A+',
    cathodeLabel: 'K-',
    note: 'Renk yongaları tipik Vf kullanır, sizin lotunuz değil. Paralel LED\'lerde tek direnç paylaşmayın.',
  },
};
