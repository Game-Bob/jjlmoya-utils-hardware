import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';

const slug = 'tes-mouse-polling-rate-online';
const title = 'Tes Mouse Polling Rate Online';
const description =
  'Periksa Hz asli mouse Anda. Verifikasi apakah mouse gaming Anda bekerja pada 1000Hz atau lebih dengan alat profesional kami.';

const faqData = [
  {
    question: 'Apa itu Polling Rate pada mouse?',
    answer:
      'Ini adalah frekuensi di mana mouse melaporkan posisinya ke komputer, diukur dalam Hz. Polling rate 1000Hz berarti mouse mengirimkan data setiap 1 milidetik, memberikan gerakan yang jauh lebih mulus.',
  },
  {
    question: 'Mengapa tes saya tidak mencapai 1000Hz secara konstan?',
    answer:
      'Browser hanya dapat mengukur polling rate saat mouse sedang bergerak. Jika Anda menggerakkannya perlahan atau CPU Anda sangat sibuk, pengukurannya mungkin berfluktuasi. Gerakkan mouse dalam lingkaran cepat untuk mendapatkan puncak maksimum yang sebenarnya.',
  },
  {
    question: 'Apakah lebih baik memiliki polling rate setinggi mungkin?',
    answer:
      'Umumnya ya untuk gaming (1000Hz atau lebih), karena mengurangi lag. Namun, rate yang sangat tinggi (4000Hz atau 8000Hz) memakan banyak sumber daya CPU dan tidak semua game dioptimalkan untuk itu.',
  },
  {
    question: 'Bagaimana refresh rate monitor memengaruhi mouse?',
    answer:
      'Jika Anda memiliki monitor 144Hz atau 240Hz, polling rate yang rendah (125Hz) akan membuat penunjuk terlihat patah-patah. Untuk monitor frekuensi tinggi, sangat penting untuk menggunakan setidaknya 500Hz atau 1000Hz.',
  },
];

const howToData = [
  {
    name: 'Siapkan area pengujian',
    text: 'Tempatkan kursor di dalam zona penangkapan alat.',
  },
  {
    name: 'Gerakkan mouse dengan cepat',
    text: 'Lakukan gerakan melingkar yang cepat dan lebar. Alat ini akan menghitung interval antara setiap kejadian mousemove yang dikirim oleh perangkat keras.',
  },
  {
    name: 'Amati grafik stabilitas',
    text: 'Periksa apakah garis Hz konstan atau mengalami penurunan tiba-tiba, yang bisa mengindikasikan gangguan pada mouse nirkabel atau masalah CPU.',
  },
  {
    name: 'Analisis waktu respons',
    text: 'Periksa rata-rata Delay dalam milidetik. Mouse gaming yang baik harus tetap dekat dengan latensi rata-rata 1ms.',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'Gamepad Polling Rate — Logitech',
      url: 'https://www.logitechg.com/en-us/innovation/delta-zero.html',
    },
    {
      name: 'USB HID Polling Rate — USB Implementers Forum',
      url: 'https://www.usb.org/hid',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Panduan Definitif tentang Polling Rate', level: 2 },
    {
      type: 'paragraph',
      html: 'Saat Anda menggerakkan mouse secara fisik di atas mousepad, gerakan analog tersebut harus diterjemahkan menjadi sinyal digital yang dipahami komputer Anda. <strong>Polling Rate</strong> adalah frekuensi di mana mouse "melaporkan" posisinya ke PC. Ini diukur dalam Hertz (Hz).',
    },
    { type: 'title', text: 'Tingkat Polling Rate dan Kegunaannya', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> — Mouse melapor setiap 8 milidetik. Baik untuk penggunaan kantor tetapi terasa patah-patah pada monitor 144Hz. <strong>1000 Hz</strong> — Standar emas gaming: melapor setiap 1 ms. Gerakan mulus tanpa lag yang terasa. <strong>8000 Hz</strong> — Teknologi mutakhir (Razer, Logitech). Melapor setiap 0,125 ms tetapi membutuhkan CPU yang kuat.',
    },
    { type: 'title', text: 'Mengapa Hz saya Berfluktuasi?', level: 3 },
    {
      type: 'paragraph',
      html: 'Sangat normal. Sebagian besar mouse modern memiliki polling rate dinamis untuk menghemat daya. Jika Anda menggerakkan mouse secara perlahan, ia mengirimkan lebih sedikit laporan karena datanya lebih sedikit. Hanya gerakan cepat dan terus-menerus yang mendorong sensor ke puncak maksimum yang sebenarnya.',
    },
    { type: 'title', text: 'Polling Rate vs DPI: Kebingungan Besar', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> adalah sensitivitas: berapa banyak piksel yang digerakkan kursor per inci gerakan fisik. <strong>Hz (Polling Rate)</strong> adalah frekuensi pembaruan: seberapa mulus dan tepat waktu gerakan tersebut dilaporkan. Kedua parameter tersebut independen dan saling melengkapi.',
    },
  ],
  ui: {
    badge: 'Tes Mouse',
    title: 'Pemeriksa Polling Rate',
    description: 'Gerakkan mouse dalam lingkaran cepat untuk mengukur Hz.',
    labelAvg: 'Rata-rata',
    labelPeak: 'Puncak',
    placeholder: 'Gerakkan mouse di sini',
  },
};
