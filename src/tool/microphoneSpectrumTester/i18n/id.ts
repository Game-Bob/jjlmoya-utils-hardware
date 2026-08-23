import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'uji-mikrofon-penganalisis-spektrum';
const title = 'Uji Mikrofon dan Penganalisis Spektrum';
const description = 'Uji input mikrofon, tingkat suara langsung, kliping, kebisingan ruangan, dan respons frekuensi secara lokal di peramban Anda dengan spektrum real-time yang privat.';

const faq = [
  {
    question: 'Apakah pengujian mikrofon ini merekam atau mengunggah suara saya?',
    answer: 'Tidak. Aliran suara mikrofon langsung hanya terhubung ke penganalisis di dalam peramban Anda. Alat ini tidak membuat rekaman audio, tidak menghubungkan penganalisis ke output suara, dan tidak mengunggah sampel mikrofon ke server.',
  },
  {
    question: 'Apa arti dBFS pada pengukur tingkat suara?',
    answer: 'dBFS berarti desibel relatif terhadap skala penuh digital (Full Scale). Nol dBFS adalah puncak digital tertinggi yang dapat diwakili, sehingga pembacaan normal bernilai negatif. Ini berbeda dengan pengukuran tekanan suara terkalibrasi dalam dB SPL.',
  },
  {
    question: 'Bagaimana cara mengetahui jika mikrofon saya mengalami kliping?',
    answer: 'Bicaralah pada tingkat suara terkeras yang Anda harapkan. Jika puncak berulang kali mencapai indikator kliping merah di dekat nol dBFS, kurangi gain mikrofon, jauhi mikrofon, atau nonaktifkan pemrosesan input agresif di sistem operasi Anda.',
  },
  {
    question: 'Apa yang ditunjukkan oleh pengukuran kebisingan ruangan?',
    answer: 'Penangkapan tiga detik menghitung rata-rata tingkat RMS digital saat Anda diam. Ini membantu membandingkan pengaturan di peramban dan ruangan yang sama, meskipun kontrol gain otomatis dan peredam bising dapat mengubah hasilnya.',
  },
  {
    question: 'Mengapa frekuensi dominan berubah saat saya berbicara?',
    answer: 'Suara manusia mengandung frekuensi dasar yang berubah-ubah, harmonik, konsonan, dan kebisingan. Tampilan melaporkan bin penganalisis terkuat antara 60 Hz dan 12 kHz, sehingga perubahan frekuensi adalah hal yang wajar.',
  },
  {
    question: 'Apakah penganalisis spektrum ini dapat menyertifikasi kualitas mikrofon?',
    answer: 'Tidak. Ini adalah pemeriksaan praktis di peramban untuk input, tingkat suara, kliping, kebisingan, dan aktivitas frekuensi visual. Sertifikasi respons frekuensi memerlukan perangkat keras terkalibrasi dan lingkungan pengukuran yang terkontrol.',
  },
];

const howTo = [
  {
    name: 'Berikan izin akses mikrofon',
    text: 'Tekan Mulai mikrofon dan setujui izin peramban. Pemrosesan dimulai hanya setelah tindakan eksplisit ini.',
  },
  {
    name: 'Bicara pada jarak kerja normal Anda',
    text: 'Gunakan suara normal atau tingkat instrumen Anda dan amati pembacaan dBFS langsung, puncak, dan pergerakan spektrum.',
  },
  {
    name: 'Periksa momen suara terkeras yang diperkirakan',
    text: 'Naikkan suara Anda atau mainkan bagian terkeras. Usahakan untuk menghindari kliping merah berulang sambil mempertahankan sinyal yang jelas.',
  },
  {
    name: 'Tangkap kebisingan ruangan',
    text: 'Tetap diam dan tekan Tangkap tiga detik. Bandingkan tingkat kebisingan yang tersimpan setelah mengubah ruangan, perangkat, gain, atau pengaturan.',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Cara Menguji Mikrofon di Peramban Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pengujian mikrofon ini menjawab pertanyaan diagnostik awal tanpa perlu memasang aplikasi: apakah input yang dipilih menghasilkan sinyal, apakah tingkat suaranya dapat digunakan, apakah momen keras mengalami kliping, dan frekuensi mana yang aktif? Tekan Mulai mikrofon, bicara dari posisi kerja Anda, dan lihat indikator langsung.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Analisis lokal yang privat',
      badge: 'Tanpa perekaman',
      html: '<p>Peramban Anda meminta izin mikrofon karena input audio bersifat sensitif. Alat ini menghubungkan aliran tersebut hanya ke penganalisis lokal. Alat ini tidak mengirimkan sampel ke server dan menghentikan trek media saat Anda menekan Hentikan mikrofon.</p>',
    },
    {
      type: 'title',
      text: 'Membaca Tingkat Mikrofon dalam dBFS',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nilai langsung utama adalah estimasi RMS yang mewakili energi jendela waktu saat ini. Indikator puncak menunjukkan sampel absolut tertinggi. Keduanya menggunakan dBFS, di mana nol adalah skala penuh digital dan sinyal yang lebih senyap memiliki nilai negatif.',
    },
    {
      type: 'table',
      headers: ['Pembacaan', 'Arti pembacaan', 'Tindakan yang dicoba'],
      rows: [
        ['Senyap atau di bawah -60 dBFS', 'Input yang dipilih tidak menghasilkan sinyal uji yang berguna', 'Periksa perangkat, tombol bisu, izin, dan tingkat input sistem operasi'],
        ['Lemah di bawah -35 dBFS', 'Sinyal mungkin sulit digunakan tanpa gain tambahan', 'Mendekatlah ke mikrofon atau tingkatkan gain input sambil mengamati puncak'],
        ['Sehat', 'Sinyal saat ini memiliki tingkat yang memadai dan headroom yang terlihat', 'Ulangi dengan suara terkeras yang diperkirakan'],
        ['Tinggi di atas -6 dBFS puncak', 'Hanya menyisakan sedikit headroom digital', 'Kurangi gain atau tambah jarak sebelum momen keras'],
        ['Kliping di dekat 0 dBFS', 'Satu atau lebih sampel mencapai batas maksimum digital', 'Kurangi gain dan ulangi bagian terkeras'],
      ],
    },
    {
      type: 'title',
      text: 'Menggunakan Spektrum Mikrofon Langsung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tampilan spektrum memetakan frekuensi dari 60 Hz hingga 12 kHz pada busur logaritma, sementara pita bercahaya menampilkan bentuk gelombang saat ini. Gunakan tampilan ini untuk memastikan frekuensi bass, midrange, dan treble mencapai peramban.',
    },
    {
      type: 'tip',
      title: 'Bandingkan satu perubahan pada satu waktu',
      html: 'Tangkap kebisingan ruangan, ubah satu pengaturan, lalu tangkap lagi dari posisi yang sama. Peredam bising sistem operasi dapat mengubah karakteristik suara mikrofon.',
    },
    {
      type: 'title',
      text: 'Mengapa Ini Bukan Pengukur Suara Terkalibrasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sampel peramban menggambarkan sinyal digital setelah melewati perangkat dan pendorong. Sampel ini tidak mencerminkan tekanan suara akustik aktual. Oleh karena itu alat ini melaporkan dBFS dan bukan dB SPL.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gunakan peralatan terkalibrasi untuk kepatuhan resmi',
      badge: 'Pemeriksaan praktis saja',
      html: '<p>Gunakan alat ini untuk mengatasi masalah panggilan, streaming, dan perekaman. Gunakan mikrofon pengukuran terkalibrasi untuk analisis ruangan profesional atau standar keselamatan.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Izinkan mikrofon',
    journeySpeak: '2. Bicara secara alami',
    journeyInspect: '3. Periksa tingkat dan spektrum',
    startMicrophone: 'Mulai mikrofon',
    stopMicrophone: 'Hentikan mikrofon',
    deviceLabel: 'Perangkat input',
    defaultDevice: 'Mikrofon bawaan',
    statusIdle: 'Menunggu izin',
    statusRequesting: 'Meminta akses mikrofon',
    statusLive: 'Mendengarkan secara lokal',
    statusUnsupported: 'Akses mikrofon tidak tersedia di peramban ini',
    statusDenied: 'Izin mikrofon tidak diberikan',
    statusError: 'Mikrofon tidak dapat dimulai',
    levelLabel: 'Tingkat langsung',
    peakLabel: 'Puncak',
    frequencyLabel: 'Frekuensi dominan',
    noiseFloorLabel: 'Kebisingan ruangan',
    captureNoise: 'Tangkap tiga detik',
    capturingNoise: 'Tetap diam saat kebisingan ruangan diukur',
    noiseCaptured: 'Kebisingan ruangan ditangkap',
    roomToneHint: 'Pertahankan gain dan posisi normal, lalu diam selama tiga detik.',
    unmeasured: 'Belum diukur',
    noSignalLevel: 'Tidak ada sinyal',
    noSignalPeak: 'Tidak ada sinyal',
    noSignalFrequency: 'Tidak ada sinyal',
    silentSignal: 'Tidak ada sinyal berguna',
    quietSignal: 'Input lemah',
    healthySignal: 'Headroom sehat',
    hotSignal: 'Sinyal tinggi',
    clippingSignal: 'Kliping terdeteksi',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Spektrum mikrofon logaritma dan bentuk gelombang langsung',
    limitationTitle: 'Peramban bukan pengukur suara terkalibrasi',
    limitationText: 'Pembacaan adalah dBFS digital setelah pemrosesan perangkat, bukan dB SPL akustik. Sinyal tetap berada di peramban ini dan tidak diunggah.',
  },
};
