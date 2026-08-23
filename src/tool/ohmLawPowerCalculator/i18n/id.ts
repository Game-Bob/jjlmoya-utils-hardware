import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Hukum Ohm dan Daya Listrik',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Apa yang dihitung oleh kalkulator hukum Ohm ini?',
      acceptedAnswer: { '@type': 'Answer', text: 'Masukkan dua nilai positif untuk tegangan, arus, resistansi, atau daya. Kalkulator akan menghitung dua nilai sisanya.' },
    },
    {
      '@type': 'Question',
      name: 'Satuan apa yang digunakan oleh kalkulator?',
      acceptedAnswer: { '@type': 'Answer', text: 'Menggunakan volt untuk tegangan, ampere untuk arus, ohm untuk resistansi, dan watt untuk daya.' },
    },
    {
      '@type': 'Question',
      name: 'Bisakah saya menggunakan daya dan resistansi sebagai nilai diketahui?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ya. Kalkulator menggunakan rumus akar kuadrat untuk menghitung tegangan dan arus.' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cara menghitung besaran listrik dengan hukum Ohm',
  step: [
    { '@type': 'HowToStep', name: 'Pilih dua nilai diketahui', text: 'Aktifkan dua besaran yang sudah Anda ketahui: tegangan, arus, resistansi, atau daya.' },
    { '@type': 'HowToStep', name: 'Masukkan pengukuran', text: 'Ketik nilai positif di bidang yang aktif.' },
    { '@type': 'HowToStep', name: 'Baca hasilnya', text: 'Skema rangkaian dan tampilan menunjukkan nilai yang dihitung dan rumus yang digunakan.' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: 'Menghitung tegangan arus resistansi atau daya dalam rangkaian', level: 2 },
  { type: 'paragraph', html: 'Jika Anda mengetahui dua besaran listrik dalam rangkaian sederhana, Anda memiliki cukup informasi untuk menghitung dua besaran sisanya. Masukkan pasangan data yang ada, dan kalkulator hukum Ohm ini akan menghasilkan nilai sisanya dalam volt, ampere, ohm, dan watt.' },
  { type: 'paragraph', html: 'Sebagai contoh, masukkan 12 V dan 2 A untuk mendapatkan 6 Ω dan 24 W. Masukkan 5 V dan 10 W untuk mendapatkan 2 A dan 2,5 Ω. Sangat berguna untuk memeriksa resistor, memperkirakan arus LED, atau menghitung beban penguat.' },
  { type: 'title', text: 'Rumus hukum Ohm mana yang harus Anda gunakan', level: 3 },
  { type: 'paragraph', html: 'Persamaan yang tepat bergantung pada dua pengukuran yang tersedia. Semua merupakan turunan langsung dari hukum Ohm V = I x R dan rumus daya P = V x I.' },
  { type: 'table', headers: ['Diketahui', 'Dihitung', 'Rumus yang digunakan'], rows: [
    ['Tegangan dan arus', 'Resistansi dan daya', 'R = V / I dan P = V x I'],
    ['Tegangan dan resistansi', 'Arus dan daya', 'I = V / R dan P = V² / R'],
    ['Tegangan dan daya', 'Arus dan resistansi', 'I = P / V dan R = V² / P'],
    ['Arus dan resistansi', 'Tegangan dan daya', 'V = I x R dan P = I² x R'],
    ['Arus dan daya', 'Tegangan dan resistansi', 'V = P / I dan R = P / I²'],
    ['Resistansi dan daya', 'Tegangan dan arus', 'V = √(P x R) dan I = √(P / R)'],
  ] },
  { type: 'tip', title: 'Gunakan daya terdisipasi untuk memilih komponen aman', html: 'Jika kalkulator menunjukkan 24 W, komponen harus mampu mendisipasikan setidaknya daya tersebut sebagai panas. Selalu sisakan batas aman.' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'kalkulator-hukum-ohm-daya',
  title: 'Kalkulator Hukum Ohm dan Daya Listrik',
  description: 'Kalkulator hukum Ohm untuk menghitung tegangan, arus, resistansi, dan daya listrik dari dua nilai diketahui.',
  ui: {
    instructions: 'Pilih dua nilai diketahui dan masukkan nilainya. Rangkaian akan menghitung pasangan sisanya dalam satuan SI.',
    knownLabel: 'Pilih dua nilai diketahui',
    useAsKnownLabel: 'Gunakan sebagai diketahui',
    voltageLabel: 'Tegangan',
    currentLabel: 'Arus',
    resistanceLabel: 'Resistansi',
    powerLabel: 'Daya',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: 'Lengkapi rangkaian',
    resultHint: 'Dua terminal diketahui menghitung pasangan sisanya.',
    formulaTitle: 'Pembacaan rangkaian',
    formulaHint: 'Terminal menyala diketahui. Jalur tembaga menunjukkan persamaan.',
    statusTitle: 'Status perhitungan',
    statusEmpty: 'Masukkan dua nilai positif untuk memulai.',
    statusInvalid: 'Kedua nilai diketahui harus lebih besar dari nol.',
    statusReady: 'Perhitungan hubungan rangkaian selesai.',
    presetTitle: 'Mulai dari beban nyata',
    presetLed: 'Indikator LED',
    presetUsb: 'Beban USB',
    presetAmplifier: 'Beban penguat',
    resetLabel: 'Atur ulang',
    orbitCaption: 'Pilih dua terminal untuk menutup rangkaian.',
    knownBadge: 'Diketahui',
    solvedBadge: 'Dihitung',
    unitVoltage: 'volt',
    unitCurrent: 'ampere',
    unitResistance: 'ohm',
    unitPower: 'watt',
    formulaVoltageCurrent: 'R = V / I dan P = V x I',
    formulaVoltageResistance: 'I = V / R dan P = V² / R',
    formulaVoltagePower: 'I = P / V dan R = V² / P',
    formulaCurrentResistance: 'V = I x R dan P = I² x R',
    formulaCurrentPower: 'V = P / I dan R = P / I²',
    formulaResistancePower: 'V = √(P x R) dan I = √(P / R)',
    seoTitle: 'Kalkulator hukum Ohm',
  },
  seo,
  faqTitle: 'Pertanyaan umum tentang hukum Ohm',
  faq: [
    { question: 'Saya tahu tegangan dan arus. Apa yang saya dapatkan?', answer: 'Anda mendapatkan resistansi dan daya. Misalnya 12 V dan 2 A menghasilkan 6 Ω dan 24 W.' },
    { question: 'Bisakah menghitung daya terdisipasi pada resistor?', answer: 'Ya. Masukkan tegangan dan resistansi, atau arus dan resistansi, untuk menghitung daya dalam watt.' },
    { question: 'Bisakah menggunakan daya dan tegangan sebagai masukan?', answer: 'Ya. Masukkan keduanya; kalkulator menghitung arus (I = P / V) dan resistansi (R = V² / P).' },
    { question: 'Apakah hukum Ohm berlaku untuk semua komponen?', answer: 'Tidak. Alat ini memodelkan komponen ohmik sederhana. Dioda memiliki sifat non-linear.' },
  ],
  bibliographyTitle: 'Referensi rumus',
  bibliography,
  howTo: [
    { name: 'Pilih dua nilai diketahui', text: 'Aktifkan dua besaran diketahui.' },
    { name: 'Masukkan pengukuran positif', text: 'Ketik volt, ampere, ohm, atau watt.' },
    { name: 'Baca hasilnya', text: 'Lihat nilai terhitung dan rumus yang digunakan.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
