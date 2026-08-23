import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-penundaan-audio';
const title = 'Uji Penundaan Audio';
const description = 'Uji penundaan audio pada speaker, headphone, perangkat Bluetooth, dan pemutaran video dengan uji pulsa browser lokal.';

const faq = [
  {
    question: 'Apa yang diukur oleh uji penundaan audio ini?',
    answer: 'Mode mikrofon opsional mengestimasi waktu antara klik yang dijadwalkan browser dan klik yang ditangkap mikrofon Anda. Mode manual membantu menyelaraskan penanda visual dan audio menggunakan pendengaran Anda. Kedua mode bertujuan memberikan estimasi praktis untuk jalur perangkat Anda.',
  },
  {
    question: 'Bisakah saya menguji latensi Bluetooth tanpa mikrofon?',
    answer: 'Ya. Mulai urutan pulsa, pilih Bluetooth, dan geser pengatur penyelarasan hingga kilatan visual dan suara klik terasa bersamaan. Hasil disimpan sebagai koreksi penyelarasan daripada diklaim sebagai latensi perangkat keras yang presisi.',
  },
  {
    question: 'Mengapa mode mikrofon memerlukan izin akses?',
    answer: 'Browser memerlukan izin akses mikrofon untuk mendengarkan klik uji setelah merambat melalui speaker atau ruang akustik Anda. Audio diproses secara lokal di browser dan tidak pernah diunggah ke server.',
  },
  {
    question: 'Mengapa hasil mikrofon bisa bervariasi atau kurang akurat?',
    answer: 'Pantulan ruangan, pemrosesan mikrofon, kontrol penguatan otomatis, penyangga sistem operasi, dan jarak antara speaker serta mikrofon dapat memengaruhi hasil. Gunakan angka ini sebagai estimasi untuk konfigurasi saat ini.',
  },
  {
    question: 'Mode pengujian mana yang harus saya pilih?',
    answer: 'Pilih Speaker untuk pemutaran ruangan, Headphone kabel untuk jalur headphone langsung, Bluetooth untuk perangkat nirkabel, dan Sinkronisasi video saat memeriksa kombinasi layar dan pemutar media.',
  },
  {
    question: 'Apakah pengujian ini mengunggah audio mikrofon saya ke server?',
    answer: 'Tidak. Aliran audio mikrofon dibaca secara lokal oleh penganalisis browser dan alat ini tidak mengunggah sampel rekaman audio.',
  },
];

const howTo = [
  {
    name: 'Pilih jalur pemutaran',
    text: 'Pilih speaker, headphone kabel, Bluetooth, atau sinkronisasi video agar laporan sesuai dengan perangkat yang Anda periksa.',
  },
  {
    name: 'Mulai dengan pulsa manual',
    text: 'Tekan Mulai uji dan dengarkan klik pendek sambil mengamati penanda visual cyan. Gunakan pengatur penyelarasan hingga keduanya terasa bersamaan.',
  },
  {
    name: 'Tambahkan pengukuran mikrofon jika diperlukan',
    text: 'Tekan Aktifkan mikrofon, berikan izin akses, letakkan mikrofon di posisi mendengarkan, dan jalankan urutan pulsa kembali.',
  },
  {
    name: 'Baca hasil sebagai estimasi pengaturan',
    text: 'Gunakan penundaan median dan tingkat kepercayaan hanya sebagai estimasi pengaturan saat ini setelah mengubah perangkat, browser, atau jarak.',
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
    { type: 'title', text: 'Uji Penundaan Audio Untuk Bluetooth Dan Sinkronisasi Video', level: 2 },
    {
      type: 'paragraph',
      html: 'Uji penundaan audio berbasis browser ini membantu Anda memeriksa selisih waktu antara isyarat visual dan suara pada perangkat yang Anda gunakan sekarang. Pengujian ini sangat berguna untuk headphone Bluetooth, speaker nirkabel, headphone kabel, dan pemeriksaan sinkronisasi video. Alat ini menghasilkan klik pendek secara lokal di browser tanpa mewajibkan Anda mengunduh berkas uji.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Mulai tanpa akses mikrofon',
      badge: 'Privat dan lokal',
      html: '<p>Uji pulsa manual dapat berjalan tanpa mikrofon. Amati penanda visual cyan dan dengarkan suara klik, lalu geser pengatur penyelarasan hingga keduanya terasa bersamaan. Ini memberikan koreksi pengaturan yang berguna tanpa berpura-pura mengukur latensi perangkat keras secara mutlak.</p>',
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
        'Pilih Bluetooth dan atur tingkat volume yang nyaman sebelum memulai pengujian.',
        'Jalankan urutan pulsa dari browser dan perangkat yang sama dengan yang Anda gunakan untuk pemutaran.',
        'Bandingkan pulsa visual langsung dengan suara klik daripada menilai lagu musik yang panjang.',
        'Geser pengatur penyelarasan hingga kedua isyarat bertemu, lalu catat koreksi penyelarasan.',
        'Ulangi pengujian setelah mengubah codec, sistem operasi, browser, atau jarak.',
      ],
    },
    {
      type: 'table',
      headers: ['Mode', 'Terbaik untuk', 'Keterbatasan utama'],
      rows: [
        ['Speaker', 'Pemutaran ruangan dan speaker TV', 'Jarak ruangan dan pantulan suara mempengaruhi jalur akustik.'],
        ['Headphone kabel', 'Output headphone langsung', 'Mikrofon mungkin kesulitan mendengar suara dari headphone tertutup.'],
        ['Bluetooth', 'Headphone dan speaker nirkabel', 'Penyangga codec dapat bervariasi antar perangkat dan aplikasi.'],
        ['Sinkronisasi video', 'Penyelarasan layar dan pemutar media', 'Pemutar video dapat menambahkan penundaan penyajian bingkai sendiri.'],
      ],
    },
    {
      type: 'title',
      text: 'Pengukuran Mikrofon Opsional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat akses mikrofon tersedia, alat ini mengamati penganalisis mikrofon lokal untuk setiap klik dan mencatat waktu yang berlalu dari peristiwa audio yang dijadwalkan hingga puncak akustik yang terdeteksi. Hasilnya menggunakan nilai median dari sampel agar pantulan tunggal tidak merusak estimasi. Lencana tingkat kepercayaan juga mempertimbangkan sebaran data.',
    },
    {
      type: 'tip',
      title: 'Posisikan mikrofon di tempat Anda mendengarkan',
      html: 'Untuk speaker, tempatkan mikrofon di posisi tempat Anda duduk mendengarkan dan jaga agar ruangan tetap tenang. Untuk pengujian sinkronisasi video, gunakan susunan pemutar dan layar yang sama dengan yang Anda gunakan sehari-hari.',
    },
    {
      type: 'title',
      text: 'Mengapa Hasil Penundaan Audio Browser Bervariasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Penundaan audio terjadi di sepanjang seluruh rantai: jam AudioContext browser, penyangga sistem operasi, pengodean perangkat keras, dan penggerak speaker. Mikrofon juga menambahkan jalur penangkapan dan pemrosesannya sendiri. Oleh karena itu, pengujian ini mendeskripsikan kombinasi perangkat, browser, ruangan, dan pengaturan saat ini.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gunakan hasil sebagai estimasi',
      badge: 'Hanya estimasi',
      html: '<p>Gunakan hasil ini untuk membandingkan konfigurasi atau mengatasi masalah sinkronisasi yang jelas. Hasil ini tidak menggantikan spesifikasi pabrikan atau sistem pengukuran yang terkalibrasi.</p>',
    },
  ],
  ui: {
    badge: 'Observatorium latensi',
    modeLabel: 'Jalur pemutaran',
    modeSpeakers: 'Speaker',
    modeWired: 'Kabel',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Sinkronisasi video',
    startTest: 'Mulai uji',
    stopTest: 'Hentikan uji',
    enableMic: 'Aktifkan mikrofon',
    micEnabled: 'Mikrofon siap',
    calibrationTitle: 'Koreksi penyelarasan',
    calibrationHint: 'Geser pengatur hingga kilatan dan klik bertemu',
    calibrationEarly: 'Audio mendahului',
    calibrationLate: 'Visual mendahului',
    calibrationCenter: 'Terselaraskan',
    visualLane: 'Visual',
    audioLane: 'Audio',
    statusReady: 'Siap',
    statusRunning: 'Urutan pulsa berjalan',
    statusWaiting: 'Menunggu pulsa',
    resultTitle: 'Pengukuran saat ini',
    latencyLabel: 'Penundaan terukur',
    alignmentLabel: 'Koreksi penyelarasan',
    confidenceLabel: 'Tingkat kepercayaan',
    samplesLabel: 'Sampel',
    notMeasured: 'Belum diukur',
    manualConfidence: 'Manual saja',
    lowConfidence: 'Kepercayaan rendah',
    mediumConfidence: 'Kepercayaan sedang',
    highConfidence: 'Kepercayaan tinggi',
    noMic: 'Input mikrofon tidak tersedia di browser ini',
    permissionDenied: 'Izin akses mikrofon tidak diberikan',
    limitationTitle: 'Baca hasil sebagai estimasi pengaturan',
    limitationText: 'Pantulan ruangan, pemrosesan mikrofon, dan penyangga dapat mengubah penundaan terukur. Tidak ada audio yang diunggah.',
    copyReport: 'Salin laporan',
    copied: 'Tersalin',
    reset: 'Atur ulang',
    safety: 'Mulai dengan volume rendah. Hentikan jika sinyal tidak nyaman.',
    pulse: 'SINKRON',
  },
};
