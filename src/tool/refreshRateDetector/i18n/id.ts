import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'detektor-refresh-rate-monitor';
const title = 'Monitor Refresh Rate Detector';
const description = 'Deteksi refresh rate monitor Anda secara instan dengan presisi menggunakan requestAnimationFrame. Uji stabilitas frame dan bandingkan dengan standar industri.';

const faqData = [
  {
    question: 'Apa itu refresh rate (Hz)?',
    answer: 'Refresh rate adalah berapa kali per detik monitor Anda memperbarui gambar. Monitor 60Hz memperbarui 60 kali per detik, sedangkan 144Hz memperbarui 144 kali. Rate yang lebih tinggi menghasilkan gerakan yang lebih mulus.',
  },
  {
    question: 'Seberapa akurat detektor ini?',
    answer: 'Alat ini menggunakan requestAnimationFrame, yang sinkron dengan siklus refresh monitor Anda. Akurasi bergantung pada beban sistem. Mode stabil mengukur untuk periode yang lebih lama demi presisi yang lebih besar.',
  },
  {
    question: 'Apa perbedaan antara mode Stabil dan Cepat?',
    answer: 'Mode Cepat mengukur untuk waktu singkat (~3 detik) untuk umpan balik cepat. Mode Stabil memakan waktu lebih lama (~10 detik) untuk menyaring gangguan sistem dan memberikan hasil yang lebih andal.',
  },
  {
    question: 'Mengapa Hz yang terdeteksi berbeda dengan spesifikasi monitor saya?',
    answer: 'Ini bisa terjadi jika: koneksi kabel longgar, driver sudah usang, atau penskalaan OS mengganggu. Coba cabut dan pasang kembali kabel layar Anda, atau perbarui driver GPU.',
  },
  {
    question: 'Berapa refresh rate yang didukung monitor modern?',
    answer: 'Standar umum adalah 60Hz (dasar), 75Hz, 120Hz, 144Hz (gaming), 240Hz (gaming kompetitif), dan 360Hz (e-sports profesional).',
  },
];

const howToData = [
  {
    name: 'Buka alat',
    text: 'Cukup buka halaman ini. Detektor mulai mengukur segera.',
  },
  {
    name: 'Tunggu stabilisasi',
    text: 'Pilih mode Stabil atau Cepat. Biarkan pengukuran selesai tanpa menggeser jendela.',
  },
  {
    name: 'Periksa speedometer',
    text: 'Refresh rate monitor Anda muncul sebagai dial yang mulus, dengan statistik benchmark (min/maks/rata-rata).',
  },
  {
    name: 'Bandingkan dengan standar',
    text: 'Alat ini menunjukkan standar mana yang sesuai dengan monitor Anda (60, 75, 120, 144, 240, 360Hz).',
  },
  {
    name: 'Opsional: uji frame skipping',
    text: 'Lihat kotak animasi yang melintasi layar untuk mengonfirmasi fluiditas secara visual.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Monitor Refresh Rate Detector: Uji Hz Layar Anda Secara Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deteksi refresh rate monitor Anda (60Hz, 144Hz, 240Hz, dll.) secara instan dengan presisi. Uji stabilitas frame dan verifikasi apakah layar Anda berfungsi sesuai spesifikasi teknisnya.',
    },
    {
      type: 'title',
      text: 'Mengapa Refresh Rate Monitor Itu Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Refresh rate menentukan seberapa mulus gerakan muncul di layar Anda. Gamer mendapat manfaat dari monitor 144Hz+, sementara pengguna umum merasa 60Hz sudah cukup. Alat ini membantu memastikan monitor Anda benar-benar memberikan refresh rate yang diiklankan.',
    },
    {
      type: 'title',
      text: 'Cara Mendeteksi Refresh Rate Anda',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Buka detektor ini—pengukuran dimulai segera',
        'Pilih antara mode pengukuran Cepat (3 detik) atau Stabil (10 detik)',
        'Baca Hz monitor Anda dari dial speedometer',
        'Bandingkan dengan standar industri (60, 75, 120, 144, 240, 360Hz)',
      ],
    },
    {
      type: 'title',
      text: 'Standar Refresh Rate Umum',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Standar', 'Kegunaan', 'Pengguna Tipikal'],
      rows: [
        ['60Hz', 'Komputasi Umum', 'Kantor, Menjelajah Web'],
        ['75Hz', 'Gaming Ringan', 'Gamer Kasual'],
        ['120Hz', 'Multimedia', 'Konsol, Streaming'],
        ['144Hz', 'Gaming Kompetitif', 'FPS, Game Cepat'],
        ['240Hz+', 'E-sports Profesional', 'Pro Gamer, Streamer'],
      ],
    },
    {
      type: 'title',
      text: 'Pemecahan Masalah: Layar Menampilkan Hz Lebih Rendah dari yang Diharapkan',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Periksa koneksi kabel HDMI/DisplayPort—kabel longgar mengurangi bandwidth',
        'Perbarui driver GPU Anda (NVIDIA, AMD, Intel)',
        'Periksa pengaturan layar OS untuk memastikan refresh rate tinggi telah diaktifkan',
        'Coba kabel atau port yang berbeda pada monitor Anda',
        'Mulai ulang komputer Anda dan uji kembali',
      ],
    },
    {
      type: 'title',
      text: 'Teknologi di Balik Detektor Ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat ini menggunakan API requestAnimationFrame browser, yang sinkron langsung dengan siklus refresh monitor Anda. Dengan mengukur waktu antar frame animasi, kami menghitung refresh rate Anda yang tepat dengan presisi tinggi—tanpa perlu perangkat keras khusus.',
    },
  ],
  ui: {
    badge: 'Uji Layar',
    title: 'Monitor Refresh Rate Detector',
    description: 'Deteksi refresh rate layar Anda secara instan',
    modeStable: 'Stabil (10 detik, presisi)',
    modeFast: 'Cepat (3 detik, kilat)',
    measurementStatus: 'Mengukur...',
    currentHz: 'Saat Ini',
    averageHz: 'Rata-rata',
    maxHz: 'Maksimum',
    minHz: 'Minimum',
    standardDetected: 'Standar Terdeteksi',
    frameSkippingTest: 'Uji Frame Skipping',
    startMeasurement: 'Mulai Pengukuran',
    resetMeasurement: 'Atur Ulang',
    copyResult: 'Salin Hasil',
    copiedFeedback: 'Berhasil disalin ke papan klip!',
    optimalConfiguration: '[OK] Konfigurasi Optimal',
    suboptimalConfiguration: '[PERINGATAN] Di Bawah Optimal',
    unstableRefreshRate: '[PERINGATAN] Refresh Rate Tidak Stabil',
    measurementNotStarted: 'Siap untuk mengukur',
    switchMonitorHint: 'Seret jendela ke monitor lain untuk mengujinya',
    incompatibleBrowserMsg: 'Browser Anda tidak mendukung requestAnimationFrame',
  },
};
