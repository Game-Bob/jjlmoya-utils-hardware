import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'uji-delai-audio';
const title = 'Uji Delai Audio';
const description = 'Uji penundaan audio pada speaker, headphone, perangkat Bluetooth, dan sinkronisasi video dengan tes pulsa lokal di peramban.';

const faq = [
  {
    question: 'Apa yang diukur oleh tes penundaan audio ini?',
    answer: 'Mode mikrofon opsional memperkirakan interval antara pulsa yang dijadwalkan peramban dan tangkapan suara oleh mikrofon.',
  },
  {
    question: 'Bisakah saya menguji latensi Bluetooth tanpa mikrofon?',
    answer: 'Ya. Mulai urutan impuls, pilih Bluetooth, dan geser pengatur kelurusan hingga kedipan dan klik terdengar bersamaan.',
  },
  {
    question: 'Mengapa mode mikrofon memerlukan izin akses?',
    answer: 'Peramban memerlukan akses mikrofon untuk mendeteksi klik uji setelah merambat di dalam ruangan. Pemrosesan dilakukan lokal.',
  },
  {
    question: 'Mengapa hasil mikrofon bisa bervariasi?',
    answer: 'Pantulan ruangan, pemrosesan mikrofon, kontrol penguatan otomatis, dan penyangga sistem operasi dapat mengubah hasil.',
  },
  {
    question: 'Mode pengujian mana yang harus saya pilih?',
    answer: 'Pilih Speaker untuk ruangan, Headphone kabel untuk jalur langsung, Bluetooth untuk nirkabel, dan Sinkro video untuk pemutar media.',
  },
  {
    question: 'Apakah rekaman suara mikrofon dikirim ke server?',
    answer: 'Tidak. Aliran suara mikrofon dianalisis secara lokal di dalam memori peramban dan tidak ada rekaman yang diunggah.',
  },
];

const howTo = [
  {
    name: 'Pilih jalur pemutaran',
    text: 'Pilih speaker, headphone kabel, Bluetooth, atau sinkronisasi video.',
  },
  {
    name: 'Mulai dengan impuls manual',
    text: 'Klik Mulai tes, dengarkan bunyi klik, dan amati impuls visual. Sesuaikan penggeser alignment.',
  },
  {
    name: 'Aktifkan pengukuran mikrofon jika diperlukan',
    text: 'Klik Aktifkan mikrofon, berikan izin, dan tempatkan mikrofon di posisi dengar utama.',
  },
  {
    name: 'Baca hasil sebagai perkiraan setup',
    text: 'Gunakan median penundaan dan nilai kepercayaan untuk membandingkan perangkat.',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Uji Penundaan Audio untuk Bluetooth dan Sinkronisasi Video', level: 2 },
    {
      type: 'paragraph',
      html: 'Uji penundaan audio berbasis peramban ini membantu Anda memeriksa selisih waktu antara sinyal visual dan suara pada perangkat Anda saat ini.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pengujian awal tanpa akses mikrofon',
      badge: 'Privasi terjamin',
      html: '<p>Pengujian impuls manual dapat berjalan tanpa mikrofon. Perhatikan penanda visual cian dan sesuaikan penggeser alignment.</p>',
    },
    {
      type: 'title',
      text: 'Cara Menguji Latensi Audio Bluetooth',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Pilih Bluetooth dan atur volume pada tingkat yang nyaman.',
        'Jalankan urutan impuls dari peramban dan perangkat yang sama.',
        'Bandingkan kedipan visual secara langsung dengan bunyi klik.',
        'Geser pengatur alignment hingga kedua sinyal terasa pas.',
        'Ulangi pengujian jika Anda mengubah kodek atau perangkat.',
      ],
    },
    {
      type: 'table',
      headers: ['Mode', 'Sangat baik untuk', 'Keterbatasan utama'],
      rows: [
        ['Speaker', 'Pemutaran ruang dan speaker TV', 'Jarak ruang dan pantulan mempengaruhi jalur akustik.'],
        ['Headphone kabel', 'Keluaran headphone langsung', 'Mikrofon mungkin sulit mendengar headphone tertutup.'],
        ['Bluetooth', 'Headphone dan speaker nirkabel', 'Penyangga kodek dapat berubah tergantung aplikasi.'],
        ['Sinkro video', 'Penyelarasan tampilan dan pemutar', 'Pemutar video dapat menambah penundaan bingkai sendiri.'],
      ],
    },
    {
      type: 'title',
      text: 'Pengukuran Mikrofon Opsional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat akses mikrofon diaktifkan, alat akan mencatat selisih waktu antara klik terprogram dan puncak suara akustik yang tertangkap mikrofon.',
    },
    {
      type: 'tip',
      title: 'Posisikan mikrofon di tempat Anda mendengarkan',
      html: 'Untuk speaker ruangan, letakkan mikrofon di posisi duduk Anda dan pastikan ruangan dalam keadaan tenang.',
    },
    {
      type: 'title',
      text: 'Mengapa Hasil Penundaan Audio Peramban Bervariasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Penundaan audio merupakan hasil gabungan dari peramban, penyangga sistem operasi, kodek Bluetooth, dan driver speaker.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interpretasi Hasil',
      badge: 'Hanya perkiraan',
      html: '<p>Gunakan angka ini untuk membandingkan perangkat. Alat ini bukan pengganti alat ukur laboratorium profesional.</p>',
    },
  ],
  ui: {
    badge: 'Observatorium Latensi',
    modeLabel: 'Jalur Pemutaran',
    modeSpeakers: 'Speaker',
    modeWired: 'Kabel',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Sinkro video',
    startTest: 'Mulai tes',
    stopTest: 'Hentikan tes',
    enableMic: 'Aktifkan mikrofon',
    micEnabled: 'Mikrofon siap',
    calibrationTitle: 'Koreksi Penyelarasan',
    calibrationHint: 'Geser pengatur hingga kedipan dan klik bertepatan',
    calibrationEarly: 'Audio mendahului',
    calibrationLate: 'Visual mendahului',
    calibrationCenter: 'Selaras',
    visualLane: 'Visual',
    audioLane: 'Audio',
    statusReady: 'Siap',
    statusRunning: 'Urutan impuls berjalan',
    statusWaiting: 'Menunggu impuls',
    resultTitle: 'Pembacaan Saat Ini',
    latencyLabel: 'Penundaan terukur',
    alignmentLabel: 'Koreksi alignment',
    confidenceLabel: 'Tingkat kepercayaan',
    samplesLabel: 'Sampel',
    notMeasured: 'Belum diukur',
    manualConfidence: 'Manual saja',
    lowConfidence: 'Kepercayaan rendah',
    mediumConfidence: 'Kepercayaan sedang',
    highConfidence: 'Kepercayaan tinggi',
    noMic: 'Input mikrofon tidak tersedia di peramban ini',
    permissionDenied: 'Izin mikrofon tidak diberikan',
    limitationTitle: 'Baca hasil sebagai perkiraan setup',
    limitationText: 'Pantulan ruang dan penyangga sistem dapat mengubah hasil penundaan. Tidak ada data suara yang diunggah.',
    copyReport: 'Salin laporan',
    copied: 'Tersalin',
    reset: 'Setel ulang',
    safety: 'Mulai dengan volume rendah. Hentikan jika suara mengalami distorsi.',
    pulse: 'SINKRO',
  },
};
