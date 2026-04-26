import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-keyboard-online';
const title = 'Tes Keyboard Online & Detektor Ghosting';
const description = 'Periksa apakah keyboard Anda mengalami Ghosting atau Key Jamming. Visualizer tombol real-time dan penghitung N-Key Rollover.';

const faqData = [
  {
    question: 'Apa itu Ghosting pada keyboard?',
    answer: 'Ini adalah cacat yang terjadi ketika Anda menekan beberapa tombol sekaligus dan komputer tidak mendaftarkan beberapa di antaranya. Hal ini dikarenakan keterbatasan dalam matriks listrik internal keyboard yang tidak dapat memproses kombinasi tertentu.',
  },
  {
    question: 'Apa yang dimaksud dengan N-Key Rollover (NKRO)?',
    answer: 'NKRO berarti keyboard dapat mendaftarkan tombol sebanyak yang dapat Anda tekan secara bersamaan tanpa kegagalan. Ini adalah fitur premium, umum pada keyboard mekanis dan gaming kelas atas.',
  },
  {
    question: 'Mengapa keyboard saya gagal saat saya menekan 3 tombol sekaligus?',
    answer: 'Sebagian besar keyboard kantor murah memiliki rollover 2 atau 3 tombol. Ini cukup untuk mengetik tetapi tidak cukup untuk gaming intensif atau pintasan kompleks.',
  },
  {
    question: 'Bagaimana cara memperbaiki tombol yang tidak merespons?',
    answer: 'Jika tes tidak mendeteksi penekanan tombol, itu bisa jadi karena kotoran di bawah Switch, kegagalan kontak listrik, atau kabel yang rusak. Coba bersihkan keyboard dengan udara bertekanan sebelum menyerah.',
  },
];

const howToData = [
  {
    name: 'Fokuskan visualizer',
    text: 'Klik di mana saja pada halaman untuk memastikan browser memiliki fokus dan dapat menangkap penekanan tombol perangkat keras.',
  },
  {
    name: 'Jalankan tes respons',
    text: 'Tekan setiap tombol pada keyboard Anda satu per satu. Tombol yang sesuai di layar akan menyala hijau jika berfungsi dengan benar.',
  },
  {
    name: 'Periksa ghosting',
    text: 'Tekan tombol gaming umum (W, A, S, D, Spasi, Shift) sekaligus untuk melihat apakah mereka terkunci atau semuanya menyala.',
  },
  {
    name: 'Verifikasi rollover maksimum',
    text: 'Coba tekan tombol sebanyak mungkin dengan kedua tangan dan perhatikan penghitung penekanan tombol simultan maksimum.',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
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
      text: 'Tes Keyboard Online: Deteksi Ghosting dan N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat interaktif untuk diagnosis keyboard. Periksa apakah perangkat periferal Anda mengalami ghosting, jamming, atau keterbatasan rollover. Visual yang jelas dengan dukungan untuk semua jenis keyboard.',
    },
    {
      type: 'title',
      text: 'Apa itu Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ghosting terjadi ketika Anda menekan kombinasi tombol tertentu dan keyboard mendaftarkan penekanan tombol hantu yang tidak Anda lakukan. Hal ini dikarenakan keterbatasan dalam matriks sirkuit internal.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover dan Rollover Maksimum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Memungkinkan pendaftaran semua tombol yang ditekan secara bersamaan. <strong>6KRO:</strong> Batas standar USB lama. <strong>2-3KRO:</strong> Umum pada keyboard murah, cukup untuk mengetik.',
    },
    {
      type: 'title',
      text: 'Keyboard Mekanik vs Membran',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Keyboard mekanik memiliki Switch individual dengan dioda terisolasi, menghilangkan ghosting. Keyboard membran berbagi jalur konduktor, menyebabkan kegagalan dalam kombinasi simultan.',
    },
  ],
  ui: {
    badge: 'Tes Input',
    title: 'Tes Keyboard dan Detektor Ghosting',
    description: 'Verifikasi N-Key Rollover dan deteksi tombol yang gagal.',
    simultaneousLabel: 'Simultan',
    eventLogLabel: 'Log Kejadian',
    resetBtn: 'Reset',
  },
};
