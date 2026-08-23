import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'uji-kamera-webcam-privat-online';
const title = 'Uji Kamera Webcam Privat';
const description = 'Periksa izin kamera, pratinjau video langsung, resolusi, rasio aspek, orientasi, dan kelancaran bingkai sebelum rapat.';

const faq = [
  {
    question: 'Apakah pengujian webcam ini merekam atau mengunggah video saya?',
    answer: 'Tidak. Halaman ini hanya meminta aliran video langsung lokal untuk pratinjau dan tidak pernah meminta akses mikrofon. Halaman tidak membuat rekaman atau mengunggah data apa pun.',
  },
  {
    question: 'Mengapa peramban meminta izin akses kamera?',
    answer: 'Situs web tidak dapat membuka kamera tanpa izin peramban. Petunjuk izin memungkinkan Anda memilih apakah halaman ini dapat menerima aliran video lokal.',
  },
  {
    question: 'Apa perbedaan antara FPS terkonfigurasi dan FPS teramati?',
    answer: 'FPS terkonfigurasi adalah target yang diminta untuk pratinjau ini. FPS teramati memperkirakan berapa banyak bingkai yang benar-benar tiba saat tab terlihat.',
  },
  {
    question: 'Mengapa resolusi yang tersedia bisa berbeda dari spesifikasi kamera?',
    answer: 'Sistem operasi, driver kamera, dan peramban memilih mode yang kompatibel bersama. Aplikasi lain atau pembatasan daya dapat menghasilkan resolusi lebih rendah.',
  },
];

const howTo = [
  {
    name: 'Buka pratinjau privat',
    text: 'Pilih Buka kamera dan izinkan akses video di petunjuk peramban. Akses audio tidak diminta.',
  },
  {
    name: 'Periksa bingkai dan gambar',
    text: 'Periksa fokus, pencahayaan, latar belakang, dan posisi mata pada pratinjau langsung.',
  },
  {
    name: 'Verifikasi aliran video',
    text: 'Baca resolusi, rasio aspek, orientasi, dan pengiriman bingkai yang diterima.',
  },
  {
    name: 'Ganti atau hentikan kamera',
    text: 'Pilih kamera lain yang tersedia untuk perbandingan, atau pilih Hentikan kamera untuk menutup semua trek.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum Pengujian Webcam',
  faq,
  bibliographyTitle: 'Sumber Pengaturan dan Pemecahan Masalah Kamera',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Uji Webcam Anda Sebelum Panggilan Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gunakan pratinjau lokal ini untuk memastikan kamera berfungsi dengan baik sebelum rapat online: apakah kamera terbuka, apakah perangkat yang benar terpilih, dan apakah tampilan video bergerak dengan lancar.',
    },
    {
      type: 'list',
      items: [
        'Pilih kamera yang tepat jika lebih dari satu perangkat terhubung',
        'Posisikan kamera sejajar dengan mata dan pertahankan posisi wajah di bagian atas bingkai',
        'Berikan pencahayaan depan pada wajah Anda daripada duduk membelakangi jendela terang',
        'Tutup aplikasi rapat lain jika kamera terasa sibuk atau terblokir',
        'Periksa resolusi dan pengiriman bingkai langsung pada layar pratinjau',
      ],
    },
    {
      type: 'title',
      text: 'Solusi untuk Kamera Hitam atau Tidak Tersedia',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Gejala', 'Penyebab Mungkin', 'Tindakan Disarankan'],
      rows: [
        ['Izin ditolak', 'Akses kamera diblokir di situs atau pengaturan privasi', 'Izinkan akses kamera di pengaturan peramban lalu muat ulang halaman'],
        ['Pratinjau hitam atau sibuk', 'Aplikasi rapat lain sedang menggunakan kamera', 'Tutup Zoom, Teams, atau Meet lalu coba lagi'],
        ['Gambar salah', 'Kamera virtual atau sekunder terpilih', 'Pilih sumber kamera lain pada menu opsi'],
        ['Gambar gelap atau buram', 'Pencahayaan depan kurang atau silau dari belakang', 'Arahkan cahaya ke wajah Anda atau gunakan lampu meja'],
        ['Video tersendat', 'Pencahayaan rendah atau beban komputer tinggi', 'Tambahkan cahaya dan tutup aplikasi berat'],
      ],
    },
    {
      type: 'title',
      text: 'Memahami Resolusi dan Pengiriman Bingkai',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Resolusi 1280 × 720 biasanya cukup untuk panggilan rapat standar. Resolusi 1920 × 1080 memberikan tampilan lebih tajam tetapi membutuhkan koneksi yang stabil. FPS terkonfigurasi adalah target awal, sedangkan FPS teramati mengukur kecepatan sebenarnya saat tab aktif.',
    },
    {
      type: 'tip',
      title: 'Sesuaikan kondisi uji dengan rapat sebenarnya',
      html: 'Lakukan pengujian pada waktu dan pencahayaan yang sama dengan panggilan rapat Anda. Karena aplikasi panggilan video dapat memotong gambar, lakukan pemeriksaan akhir pada aplikasi utama Anda.',
    },
    {
      type: 'title',
      text: 'Posisi Bingkai dan Pencahayaan Ideal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Naikkan posisi kamera hingga sejajar dengan mata dan beri sedikit ruang di atas kepala. Pastikan cahaya utama berada di depan Anda. Jika Anda menggunakan kacamata, posisikan lampu sedikit ke samping untuk menghindari pantulan pada lensa.',
    },
  ],
  ui: {
    privacyNote: 'Tanpa perekaman · Tanpa pengunggahan · Tanpa audio',
    permissionHeading: 'Siap memeriksa kamera Anda?',
    permissionBody: 'Buka pratinjau langsung privat untuk memeriksa gambar dan format video yang tersedia di tab ini. Menghentikan kamera akan menutup semua akses seketika.',
    startAction: 'Buka kamera',
    stopAction: 'Hentikan kamera',
    retryAction: 'Coba lagi',
    deviceLabel: 'Sumber kamera',
    devicePlaceholder: 'Pilih kamera',
    defaultDevice: 'Kamera',
    mirrorAction: 'Tampilan cermin',
    guideAction: 'Panduan bingkai',
    stageLabel: 'Area pratinjau webcam privat',
    resolutionLabel: 'Resolusi',
    aspectLabel: 'Rasio aspek',
    orientationLabel: 'Orientasi',
    configuredFpsLabel: 'FPS terkonfigurasi',
    observedFpsLabel: 'FPS teramati',
    frameDeliveryLabel: 'Pengiriman bingkai',
    landscapeValue: 'Lansekap',
    portraitValue: 'Potret',
    squareValue: 'Persegi',
    frameStable: 'Mendekati target',
    frameReduced: 'Di bawah target',
    frameConstrained: 'Sangat berkurang',
    framePending: 'Menunggu bingkai',
    statusIdle: 'Kamera ditutup. Buka saat Anda siap memeriksa pratinjau.',
    statusStarting: 'Menunggu izin kamera dan bingkai video pertama',
    statusReady: 'Pratinjau aktif. Periksa fokus, cahaya, bingkai, dan kelancaran.',
    statusStopped: 'Kamera dihentikan. Semua trek video dari pengujian ini ditutup.',
    statusHidden: 'Jaga tab ini tetap terlihat untuk mengukur FPS yang akurat.',
    statusUnsupported: 'Peramban ini tidak mendukung akses kamera.',
    errorPermissionDenied: 'Izin kamera ditolak. Izinkan di pengaturan peramban lalu coba lagi.',
    errorNoCamera: 'Kamera tidak ditemukan. Hubungkan perangkat lalu coba lagi.',
    errorInUse: 'Kamera tidak dapat dimulai. Tutup aplikasi lain lalu coba lagi.',
    errorSecureContext: 'Akses kamera memerlukan HTTPS atau localhost.',
    errorGeneric: 'Kamera tidak dapat dibuka. Periksa izin dan ketersediaan perangkat.',
    limitHeading: 'Apa yang dikonfirmasi pengujian ini',
    limitBody: 'Ini mengonfirmasi kualitas gambar dan kelancaran pada tab ini. Pengujian ini tidak menilai fokus otomatis lensa atau pemrosesan aplikasi pihak ketiga.',
    localOnlyLabel: 'Pemeriksaan kamera privat',
    emptyValue: 'Tidak tersedia',
    fpsUnit: 'FPS',
  },
};
