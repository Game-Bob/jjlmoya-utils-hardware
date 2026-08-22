import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'penguji-polling-rate-gamepad-hertz';
const title = 'Penguji Polling Rate dan Hertz Gamepad';
const description = 'Ukur tingkat pembaruan yang terdeteksi peramban, interval laporan, dan stabilitas waktu gamepad USB atau Bluetooth Anda.';

const faq = [
  {
    question: 'Apa yang diukur oleh penguji polling rate gamepad ini?',
    answer: 'Alat ini mengukur perubahan stempel waktu Gamepad API di peramban saat Anda menggerakkan stik analog. Nilai Hertz yang ditampilkan adalah tingkat pembaruan teramati di peramban dan bukan pengukuran listrik langsung pada bus USB.',
  },
  {
    question: 'Bisakah peramban memverifikasi apakah pengontrol berjalan pada 1000 Hz?',
    answer: 'Peramban dapat menunjukkan apakah pembaruan stempel waktu tiba dengan lancar di halaman, tetapi tidak dapat menyertifikasi overclocking USB perangkat keras. Pewaktu peramban dan sistem operasi dapat mengelompokkan laporan.',
  },
  {
    question: 'Mengapa saya perlu memutar stik analog dalam lingkaran?',
    answer: 'Gerakan memutar secara terus-menerus mengubah kedua sumbu secara konsisten dan menghasilkan aliran status baru. Membiarkan stik diam tidak akan menghasilkan cukup perubahan status.',
  },
  {
    question: 'Bisakah saya membandingkan kinerja USB dan Bluetooth?',
    answer: 'Ya, lakukan pengujian dengan durasi dan gerakan memutar yang sama pada setiap koneksi di peramban yang sama untuk membandingkan frekuensi, interval, dan jitter.',
  },
];

const howTo = [
  {
    name: 'Hubungkan dan aktifkan pengontrol',
    text: 'Hubungkan pengontrol melalui kabel USB atau Bluetooth lalu tekan tombol apa saja agar peramban mendeteksinya melalui Gamepad API.',
  },
  {
    name: 'Pilih perangkat dan durasi pengujian',
    text: 'Pilih pengontrol dari daftar dan tentukan durasi sepuluh detik untuk pengukuran awal yang seimbang.',
  },
  {
    name: 'Putar stik analog secara terus-menerus',
    text: 'Mulai pengujian dan putar stik kiri dalam lingkaran halus hingga cincin kemajuan selesai.',
  },
  {
    name: 'Baca tingkat teramati dan stabilitas',
    text: 'Bandingkan Hertz, interval rata-rata dalam milidetik, dan jitter di bawah kondisi pengujian yang sama.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum Polling Rate Gamepad',
  faq,
  bibliographyTitle: 'Referensi Teknis',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Ukur tingkat pembaruan gamepad teramati di peramban',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini memantau stempel waktu resolusi tinggi dari pengontrol yang dipilih saat stik analog bergerak. Alat memfilter lonjakan ekstrem, menghitung interval rata-rata antar laporan, dan mengonversinya menjadi Hertz teramati (1000 dibagi milidetik). Seluruh analisis berjalan secara lokal di halaman.',
    },
    {
      type: 'table',
      headers: ['Pembacaan', 'Arti nilai ini', 'Hal yang tidak dibuktikan'],
      rows: [
        ['Tingkat teramati', 'Frekuensi laporan yang dibaca halaman setiap detik', 'Polling rate listrik langsung pada port USB'],
        ['Interval pembaruan', 'Waktu rata-rata antara pembaruan stempel waktu', 'Total latensi input hingga tampilan layar'],
        ['Jitter (sebaran)', 'Selisih waktu antara persentil ke-5 dan ke-95', 'Kerusakan perangkat keras secara pasti'],
        ['Tingkat kepercayaan', 'Konsistensi dan jumlah sampel yang dikumpulkan', 'Akurasi kalibrasi laboratorium industri'],
      ],
    },
    {
      type: 'title',
      text: 'Cara melakukan pengujian Hertz yang dapat diulang',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tutup aplikasi latar belakang yang berat, biarkan tab tetap fokus, dan putar stik yang sama secara konsisten pada setiap pengujian. Gunakan peramban dan durasi yang sama saat membandingkan kabel, adaptor Bluetooth, atau pengaturan sistem operasi.',
    },
    {
      type: 'tip',
      title: 'Bandingkan selalu dalam kondisi yang sama',
      html: 'Lakukan minimal dua kali pengujian setelah mengganti kabel atau port USB. Satu lonjakan tinggi kurang berguna dibandingkan frekuensi stabil dengan jitter rendah.',
    },
    {
      type: 'title',
      text: 'Mengapa ini bukan pengujian latensi input total',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gamepad API membaca data pengontrol setelah diproses oleh sistem operasi dan peramban. Alat ini tidak mengukur respons listrik pada kabel maupun waktu penyajian pada layar. Interval teramati sangat baik untuk perbandingan web tetapi bukan latensi input total.',
    },
  ],
  ui: {
    privacyNote: 'Pemrosesan sinyal 100% lokal',
    stepConnect: 'Hubungkan dan tekan tombol',
    stepMove: 'Putar stik dalam lingkaran',
    stepRead: 'Bandingkan frekuensi dan stabilitas',
    deviceLabel: 'Gamepad aktif terdeteksi',
    devicePlaceholder: 'Tekan tombol apa saja pada pengontrol untuk mendeteksi',
    deviceFallback: 'Gamepad terhubung',
    durationLabel: 'Jendela pengukuran',
    durationFive: '5 dtk',
    durationTen: '10 dtk',
    durationTwenty: '20 dtk',
    startAction: 'Mulai pengujian',
    stopAction: 'Hentikan',
    resetAction: 'Atur ulang',
    orbitInstruction: 'Putar stik kiri dalam lingkaran selama pengujian',
    traceLabel: 'Jejak stempel waktu langsung',
    observedRateLabel: 'Tingkat teramati',
    intervalLabel: 'Interval rata-rata',
    jitterLabel: 'Sebaran (Jitter)',
    samplesLabel: 'Sampel valid',
    confidenceLabel: 'Kepercayaan uji',
    confidenceLow: 'Rendah',
    confidenceMedium: 'Sedang',
    confidenceHigh: 'Tinggi',
    statusWaiting: 'Menunggu pengontrol yang kompatibel',
    statusReady: 'Pengontrol siap. Tekan mulai dengan jempol siap di stik.',
    statusMeasuring: 'Merekam stempel waktu secara lokal',
    statusNeedsMovement: 'Putar stik dalam lingkaran lebih lebar untuk mengumpulkan data',
    statusComplete: 'Pengujian selesai. Ulangi dalam kondisi yang sama untuk membandingkan.',
    statusUnsupported: 'Peramban Anda tidak mendukung Gamepad API',
    statusDisconnected: 'Tidak ada pengontrol aktif. Hubungkan satu dan tekan tombol.',
    statusStopped: 'Pengujian dihentikan. Hasil parsial tetap terlihat.',
    limitHeading: 'Batas teknis pengukuran peramban',
    limitBody: 'Mengukur pembaruan yang terlihat melalui Gamepad API. Tidak menyertifikasi overclocking USB atau latensi total.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'interval',
    progressLabel: 'Kemajuan pengukuran',
  },
};
