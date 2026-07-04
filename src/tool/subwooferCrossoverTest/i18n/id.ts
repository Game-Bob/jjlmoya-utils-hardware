import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-crossover-subwoofer-online';
const title = 'Tes Crossover Subwoofer';
const description =
  'Jalankan sapuan sinus dari 200 Hz ke 10 Hz di browser Anda untuk menemukan di mana subwoofer Anda melemah, hilang, atau beralih ke speaker utama.';

const faqData = [
  {
    question: 'Apa yang diukur oleh tes crossover subwoofer?',
    answer:
      'Ini membantu Anda mendengar titik di mana bass berhenti terdengar kontinu antara speaker utama dan subwoofer. Celah, perubahan level mendadak, atau rentang yang hilang dapat menunjukkan frekuensi crossover yang salah, masalah fase, pembatalan ruangan, atau batas subwoofer.',
  },
  {
    question: 'Mengapa tes ini menyapu dari 200 Hz turun ke 10 Hz?',
    answer:
      'Sebagian besar crossover home theater berada antara 60 Hz dan 120 Hz, sementara banyak speaker kompak mulai kehilangan output di atas atau di bawah rentang tersebut. Menyapu dari 200 Hz membuat peralihan speaker-ke-subwoofer mudah didengar sebelum nada mencapai sub-bass dalam.',
  },
  {
    question: 'Bisakah tes bass subwoofer online ini merusak speaker?',
    answer:
      'Ya, frekuensi sangat rendah pada volume tinggi dapat membebani speaker kecil atau menekan subwoofer. Mulailah dengan pelan, hindari mode bass yang diperkuat, dan segera hentikan jika Anda mendengar suara berderik, ketukan, atau tekanan mekanis.',
  },
  {
    question: 'Apakah frekuensi penurunan yang ditandai adalah pengaturan crossover yang tepat yang harus saya gunakan?',
    answer:
      'Tidak. Anggap sebagai petunjuk pendengaran, bukan pengukuran laboratorium. Pengaturan crossover terbaik juga bergantung pada spesifikasi speaker, penempatan ruangan, fase, koreksi jarak, dan target kalibrasi.',
  },
];

const howToData = [
  {
    name: 'Atur level mendengarkan yang aman',
    text: 'Kecilkan volume sistem terlebih dahulu. Sapuan menggunakan gelombang sinus yang dihasilkan, sehingga bass dapat menjadi intens meskipun volume browser terlihat rendah.',
  },
  {
    name: 'Mulai sapuan 200 Hz ke 10 Hz',
    text: 'Tekan Mulai sapuan dan dengarkan dari tempat duduk biasa Anda. Nada bergerak stabil melalui rentang bass di mana subwoofer, speaker utama, dan akustik ruangan tumpang tindih.',
  },
  {
    name: 'Dengarkan penurunan atau peralihan',
    text: 'Perhatikan saat bass menjadi lebih lemah, menghilang, berubah lokasi, atau terdengar tidak seimbang antara subwoofer dan speaker utama.',
  },
  {
    name: 'Tandai frekuensi',
    text: 'Tekan Tandai penurunan pada titik masalah pertama yang jelas. Gunakan frekuensi tersebut sebagai petunjuk untuk menyesuaikan crossover, fase, penempatan, atau koreksi ruangan.',
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
  inLanguage: 'id',
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
    { type: 'title', text: 'Temukan Celah Bass Antara Speaker Anda Dan Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'Subwoofer seharusnya tidak terdengar seperti kotak terpisah di sudut. Bass harus tetap merata saat nada berpindah dari speaker utama ke sub. Tes ini menyapu dari <strong>200 Hz ke 10 Hz</strong> sehingga Anda dapat mendengar zona tepat di mana peralihan menjadi lemah, bergemuruh, terlokalisasi, atau sunyi.',
    },
    {
      type: 'table',
      headers: ['Apa yang Anda dengar', 'Apa artinya biasanya', 'Apa yang dicoba dulu'],
      rows: [
        ['Bass menghilang sekitar 70-100 Hz', 'Subwoofer dan speaker mungkin saling membatalkan di dekat crossover.', 'Balik fase, sesuaikan jarak/delay, lalu ulangi sapuan.'],
        ['Bass bergemuruh di satu pita sempit', 'Mode ruangan atau terlalu banyak tumpang tindih antara speaker dan subwoofer.', 'Turunkan crossover sedikit atau pindahkan subwoofer/posisi mendengarkan.'],
        ['Bass sepertinya berasal dari lokasi subwoofer', 'Crossover mungkin terlalu tinggi atau level subwoofer terlalu panas.', 'Coba 80 Hz atau lebih rendah dan kurangi gain subwoofer.'],
        ['Bass dalam memudar di bawah 30-40 Hz', 'Batas ekstensi normal untuk banyak sub, terutama model kompak.', 'Periksa spesifikasi subwoofer sebelum mengejar masalah yang mungkin bersifat fisik.'],
      ],
    },
    { type: 'title', text: 'Apa Yang Diberitahukan Frekuensi Penurunan Kepada Anda', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gunakan frekuensi yang ditandai sebagai petunjuk penyetelan',
      badge: 'Petunjuk mendengarkan',
      html: '<p>Jika titik yang ditandai dekat dengan crossover AVR Anda, masalahnya mungkin integrasi: fase, jarak, polaritas, level, atau kemiringan filter. Jika titik yang ditandai jauh lebih rendah, Anda mungkin mendengar subwoofer mencapai batas outputnya. Jika masalah banyak berubah saat Anda menggerakkan kepala, ruangan mendominasi hasilnya.</p>',
    },
    {
      type: 'title',
      text: 'Rentang Crossover Umum',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipe speaker', 'Titik awal crossover tipikal', 'Mengapa'],
      rows: [
        ['Satelit kecil', '100-150 Hz', 'Kabinet kecil biasanya tidak dapat memainkan bass atas yang bersih pada level bioskop.'],
        ['Speaker rak buku', '70-100 Hz', 'Seringkali cukup bass untuk peralihan bersih tanpa membuat sub terlokalisasi.'],
        ['Speaker berdiri', '50-80 Hz', 'Woofer yang lebih besar dapat menangani lebih banyak mid-bass, tetapi ruangan mungkin masih lebih memilih manajemen bass subwoofer.'],
        ['Pengaturan gaya THX', '80 Hz', 'Default praktis yang berfungsi baik untuk banyak sistem dan mengarahkan bass dalam ke sub.'],
      ],
    },
    { type: 'title', text: 'Masalah Crossover Atau Masalah Ruangan?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Masalah crossover atau fase',
          description: 'Titik lemah muncul di dekat frekuensi crossover dan membaik setelah mengubah fase, polaritas, jarak, atau pengaturan crossover.',
          points: ['Biasanya dapat diulang dari kursi yang sama.', 'Sering berpusat di sekitar 60-120 Hz.'],
        },
        {
          title: 'Pembatalan ruangan',
          description: 'Titik lemah berubah drastis saat Anda menggerakkan kepala, berganti kursi, atau memindahkan subwoofer jarak pendek.',
          points: ['Sangat bergantung posisi.', 'Sering diselesaikan lebih dengan penempatan daripada pengaturan.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Cara terbaik menjalankan tes',
      html: 'Duduklah di tempat Anda benar-benar menonton film atau mendengarkan musik. Jangan berdiri di samping subwoofer. Crossover yang terdengar bagus di samping kabinet masih bisa meninggalkan celah di sofa.',
    },
    {
      type: 'summary',
      title: 'Apa yang diubah setelah sapuan',
      items: [
        'Jika celah dekat dengan crossover saat ini, coba perubahan 10 Hz dan ulangi sapuan.',
        'Coba sakelar fase subwoofer atau pengaturan delay jika pita lemah berada di dekat crossover.',
        'Jika bass menjadi lebih kuat di satu kursi dan menghilang di kursi lain, pindahkan subwoofer sebelum mengubah semua pengaturan AVR.',
        'Setelah perubahan penempatan atau crossover, jalankan kembali koreksi ruangan agar receiver mengukur pengaturan baru.',
        'Gunakan frekuensi yang ditandai untuk memandu penyetelan, lalu konfirmasi dengan musik, film, dan garis bass yang dikenal.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Sapuan frekuensi rendah subwoofer',
    currentFrequency: 'Frekuensi saat ini',
    targetFrequency: 'Target',
    elapsed: 'Berlalu',
    statusReady: 'Siap untuk sapuan rendah',
    statusRunning: 'Sedang menyapu turun',
    statusStopped: 'Sapuan dihentikan',
    start: 'Mulai sapuan',
    stop: 'Hentikan sapuan',
    markDropout: 'Tandai penurunan',
    reset: 'Atur ulang',
    volume: 'Level output',
    duration: 'Durasi sapuan',
    safeStart: 'Mulai dengan volume rendah, lalu tandai frekuensi pertama di mana bass menjadi sulit didengar.',
    roomNote: 'Posisi ruangan dan fase dapat mengubah hasil secara dramatis.',
    dropoutLabel: 'Titik yang ditandai',
    dropoutEmpty: 'Belum ditandai',
    crossoverEstimate: 'Perkiraan titik penurunan',
  },
};
