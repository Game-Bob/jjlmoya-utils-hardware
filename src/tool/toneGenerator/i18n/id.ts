import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generator-nada-frekuensi-online';
const title = 'Generator Nada dan Frekuensi Online';
const description =
  'Hasilkan gelombang sinus, kotak, segitiga, dan gigi gergaji. Uji speaker, headphone, atau subwoofer Anda dengan frekuensi dari 20Hz hingga 20kHz.';

const faqData = [
  {
    question: 'Untuk apa generator frekuensi digunakan?',
    answer:
      'Digunakan untuk menguji respons frekuensi speaker dan headphone, mendeteksi resonansi yang tidak diinginkan pada furnitur, menemukan celah dalam rentang pendengaran Anda, atau bahkan membantu meredakan tinnitus melalui terapi notch.',
  },
  {
    question: 'Apa perbedaan gelombang sinus versus gelombang kotak?',
    answer:
      'Gelombang sinus adalah nada murni tanpa harmonik (halus dan bulat). Gelombang kotak kaya akan harmonik ganjil dan terdengar jauh lebih agresif atau digital. Gelombang segitiga berada di antaranya, berguna untuk sintesis audio.',
  },
  {
    question: 'Bisakah saya merusak speaker saya dengan alat ini?',
    answer:
      'Ya, jika Anda menggunakan volume sangat tinggi pada frekuensi ekstrem (terutama bass di bawah 30Hz atau treble di atas 15kHz). Selalu mulai dengan volume sistem yang rendah dan tingkatkan secara bertahap.',
  },
  {
    question: 'Berapa rentang pendengaran manusia?',
    answer:
      'Secara teoritis 20Hz hingga 20.000Hz (20kHz). Namun, seiring bertambahnya usia, adalah normal jika kemampuan mendengar di atas 15kHz berkurang. Tes ini dapat membantu memverifikasi batas atas pribadi Anda.',
  },
];

const howToData = [
  {
    name: 'Pilih jenis bentuk gelombang',
    text: 'Pilih antara Sinus (murni), Kotak, Segitiga, atau Gigi Gergaji tergantung pada jenis pengujian yang ingin Anda lakukan.',
  },
  {
    name: 'Sesuaikan frekuensi',
    text: 'Gerakkan penggeser untuk menavigasi spektrum yang dapat didengar. Gunakan pintasan 60Hz, 440Hz, atau 1kHz untuk mengakses frekuensi referensi dengan cepat.',
  },
  {
    name: 'Kontrol volume',
    text: 'Pastikan volume speaker Anda rendah sebelum menekan Play. Anda dapat menyesuaikan gain langsung dari alat.',
  },
  {
    name: 'Analisis respons',
    text: 'Dengarkan kemungkinan distorsi atau saat-saat ketika suara menghilang. Ini akan menunjukkan batas fisik perangkat keras audio Anda.',
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Segala Hal Tentang Frekuensi dan Gelombang Suara', level: 2 },
    {
      type: 'paragraph',
      html: 'Suara adalah fisika murni dalam gerakan. Alat ini memungkinkan Anda memanipulasi gelombang suara secara real time, dari bass terdalam yang dapat Anda rasakan di dada hingga nada tinggi ultrasonik yang hanya dapat dirasakan oleh hewan.',
    },
    { type: 'title', text: 'Rentang Pendengaran Manusia dan Presbikusis', level: 3 },
    {
      type: 'paragraph',
      html: 'Telinga manusia yang sehat merasakan suara antara <strong>20Hz dan 20kHz</strong>. Seiring bertambahnya usia, batas atas menurun: kebanyakan orang dewasa di atas 50 tahun tidak dapat mendengar di atas 12kHz. Nada 17,4kHz, yang dikenal sebagai "mosquito tone", adalah tes klasik yang biasanya hanya bisa dilewati oleh remaja.',
    },
    { type: 'title', text: 'Jenis Gelombang dan Kegunaannya', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sinus:</strong> nada murni tanpa harmonik, digunakan dalam tes pendengaran medis dan kalibrasi instrumen. <strong>Kotak:</strong> kaya akan harmonik ganjil, terdengar seperti konsol 8-bit retro. <strong>Gigi Gergaji:</strong> mengandung semua harmonik, dasar dari synthesizer musik elektronik. <strong>Segitiga:</strong> titik tengah antara sinus dan kotak -lebih halus dari kotak tetapi dengan konten harmonik lebih banyak daripada sinus.',
    },
    { type: 'title', text: 'Pengujian Speaker dan Pembersihan Getaran', level: 3 },
    {
      type: 'paragraph',
      html: 'Gelombang frekuensi rendah (biasanya <strong>165Hz</strong>) pada volume maksimum dengan bentuk kotak atau gigi gergaji memaksa diafragma speaker bergetar hebat, secara mekanis mengeluarkan tetesan air yang terjebak di kisi-kisi. Jangan memutar frekuensi yang sangat tinggi pada volume maksimum untuk waktu yang lama: meskipun Anda tidak dapat mendengarnya, energinya dapat merusak tweeter peralatan Anda.',
    },
  ],
  ui: {
    badge: 'Generator Audio',
    title: 'Generator Nada',
    description: 'Hasilkan frekuensi murni untuk pengujian audio.',
    freqLabel: 'Frekuensi',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (Sub-bass)',
    rangeMax: '20kHz (Ultrasonik)',
    waveLabel: 'Bentuk Gelombang',
    waveSine: 'Sinus',
    waveSquare: 'Kotak',
    waveSawtooth: 'Gigi Gergaji',
    waveTriangle: 'Segitiga',
    volLabel: 'Volume',
    btnPlay: 'PUTAR NADA',
    btnStop: 'BERHENTI',
  },
};
