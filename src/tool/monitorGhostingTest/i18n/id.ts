import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-ghosting-monitor';
const title = 'Tes Ghosting Monitor';
const description =
  'Uji ghosting monitor, blur gerakan, jejak overdrive, dan perilaku respons piksel dengan bilah bergerak, teks, dan pola gerakan layar penuh.';

const faqData = [
  {
    question: 'Apa itu ghosting monitor?',
    answer:
      'Ghosting monitor adalah jejak yang terlihat mengikuti objek bergerak ketika piksel tidak dapat bertransisi cukup cepat. Ini umum terjadi pada panel LCD lambat, mode overdrive yang tidak disetel dengan baik, dan layar yang berjalan di bawah kecepatan refresh optimalnya.',
  },
  {
    question: 'Bisakah tes ini mengukur waktu respons yang tepat?',
    answer:
      'Tes browser tidak dapat menggantikan peralatan lab seperti kamera pursuit atau fotodioda, tetapi dapat mengungkapkan artefak gerakan yang terlihat, membandingkan pengaturan monitor, dan membantu Anda memilih mode overdrive yang paling tidak buram.',
  },
  {
    question: 'Mengapa overdrive terkadang menciptakan jejak terang?',
    answer:
      'Overdrive mendorong piksel lebih keras untuk membuat transisi lebih cepat. Jika melampaui bayangan target, Anda mungkin melihat ghosting terbalik: lingkaran terang atau berwarna di belakang objek bergerak.',
  },
  {
    question: 'Haruskah saya menguji pada latar belakang gelap atau terang?',
    answer:
      'Keduanya. Beberapa panel mengaburkan transisi gelap-ke-abu-abu lebih dari transisi terang-ke-gelap, jadi mengubah latar belakang mengungkapkan artefak yang dapat disembunyikan oleh satu pola.',
  },
];

const howToData = [
  {
    name: 'Atur kecepatan gerakan',
    text: 'Mulai dekat kecepatan default, kemudian tingkatkan hingga jejak menjadi mudah diperiksa tanpa kehilangan jejak objek.',
  },
  {
    name: 'Ubah kekuatan jejak',
    text: 'Gunakan kontrol jejak untuk membuat persistensi lebih mudah dilihat saat membandingkan pengaturan monitor.',
  },
  {
    name: 'Uji beberapa latar belakang',
    text: 'Beralih antara latar belakang gelap, terang, dan kisi untuk mengungkapkan pengaburan hitam, ghosting terbalik, dan lingkaran overdrive.',
  },
  {
    name: 'Bandingkan pengaturan overdrive',
    text: 'Buka OSD monitor Anda dan uji mode Mati, Normal, Cepat, dan Ekstrem. Pilih mode dengan gerakan paling jelas dan halo paling sedikit.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Tes Ghosting Monitor: Periksa Blur Gerakan dan Respons Piksel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ghosting monitor muncul ketika objek bergerak meninggalkan jejak yang terlihat di belakangnya. Ini dapat membuat game terasa kabur, membuat teks bergulir lebih sulit dibaca, dan membuat monitor dengan kecepatan refresh tinggi terlihat lebih buruk dari yang diharapkan. Tes ghosting monitor ini memberi Anda bilah bergerak, teks, dan pola kontras tinggi sehingga Anda dapat membandingkan mode overdrive, kecepatan refresh, latar belakang, dan kecepatan gerakan tanpa menginstal perangkat lunak.',
    },
    {
      type: 'paragraph',
      html: 'Tes ini dirancang untuk inspeksi praktis. Ini tidak mengklaim waktu respons abu-abu-ke-abu-abu tingkat laboratorium, tetapi membantu menjawab pertanyaan yang sebenarnya dimiliki kebanyakan pengguna: <strong>pengaturan monitor mana yang terlihat paling bersih di mata saya pada layar ini?</strong>',
    },
    {
      type: 'title',
      text: 'Seperti Apa Ghosting Itu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bayangan gelap mengikuti objek bergerak, sering disebut pengaburan hitam',
        'Lingkaran pucat atau berwarna di belakang objek, sering disebabkan oleh overdrive yang berlebihan',
        'Jejak transparan panjang yang membuat tepi terlihat lembut',
        'Beberapa salinan samar dari objek, terutama pada layar dengan respons piksel lambat',
        'Kejelasan tidak merata antara latar belakang gelap, terang, dan kisi',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Blur Gerakan, dan Ghosting Terbalik',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefak', 'Apa yang Anda Lihat', 'Penyebab Umum'],
      rows: [
        ['Ghosting', 'Salinan yang lebih gelap atau pudar mengikuti objek', 'Respons piksel terlalu lambat untuk kecepatan gerakan'],
        ['Blur gerakan', 'Seluruh objek bergerak terlihat lembut', 'Blur sample-and-hold, kecepatan refresh rendah, atau blur pelacakan mata'],
        ['Ghosting terbalik', 'Lingkaran terang atau jejak berlebih berwarna', 'Pengaturan overdrive terlalu agresif'],
        ['Pengaburan hitam', 'Adegan gelap meninggalkan bayangan berat', 'Transisi gelap panel VA lambat'],
        ['Gagap', 'Gerakan melompat alih-alih mengalir', 'Frame pacing, FPS rendah, atau beban browser/sistem'],
      ],
    },
    {
      type: 'title',
      text: 'Alur Kerja Diagnostik Praktis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mulai dengan monitor Anda diatur ke resolusi asli dan kecepatan refresh stabil tertinggi. Jika Anda memiliki monitor 144Hz, 165Hz, 240Hz, atau 360Hz, konfirmasikan bahwa sistem operasi benar-benar menggunakan mode itu sebelum menilai kejelasan gerakan. Buka tes dalam layar penuh, pilih target bilah kejelasan, dan perhatikan tepi belakang objek bergerak. Tepi belakang adalah tempat jejak hantu, pengaburan gelap, dan lingkaran overdrive terang paling mudah dibandingkan.',
    },
    {
      type: 'list',
      items: [
        'Gunakan latar belakang gelap untuk mengungkapkan pengaburan hitam dan transisi gelap lambat',
        'Gunakan latar belakang terang untuk mengungkapkan lingkaran overdrive berwarna',
        'Gunakan latar belakang kisi untuk memeriksa kejelasan tepi terhadap garis referensi kontras tinggi',
        'Gunakan target teks ketika masalah nyata Anda adalah pengguliran buram atau teks bergerak yang sulit dibaca',
        'Gunakan layar penuh sebelum menilai monitor, karena chrome browser dan penskalaan dapat mengalihkan dari artefak gerakan',
        'Tingkatkan kecepatan hanya setelah Anda dapat mengikuti objek dengan nyaman',
        'Bandingkan satu pengaturan monitor pada satu waktu sehingga Anda tahu apa yang berubah',
      ],
    },
    {
      type: 'title',
      text: 'Memilih Pengaturan Overdrive Terbaik untuk Monitor Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebagian besar monitor gaming menyertakan pengaturan overdrive yang disebut Mati, Normal, Cepat, Lebih Cepat, Ekstrem, Waktu Respons, atau Trace Free. Opsi tercepat tidak selalu yang terbaik. Pengaturan moderat sering memberikan keseimbangan terbaik: lebih sedikit blur daripada Mati, tetapi lebih sedikit halo daripada Ekstrem.',
    },
    {
      type: 'table',
      headers: ['Mode Overdrive', 'Hasil yang Diharapkan', 'Rekomendasi'],
      rows: [
        ['Mati', 'Paling sedikit kelebihan, tetapi lebih banyak blur', 'Dasar yang berguna untuk perbandingan'],
        ['Normal', 'Pengurangan blur moderat', 'Seringkali terbaik untuk penggunaan harian'],
        ['Cepat', 'Gerakan lebih tajam dengan beberapa risiko halo', 'Baik jika jejak tetap bersih'],
        ['Ekstrem', 'Klaim waktu respons terendah, risiko kelebihan tertinggi', 'Hindari jika jejak terbalik terang muncul'],
        ['Adaptif/Variabel', 'Perilaku berubah dengan kecepatan refresh', 'Uji ulang pada rentang FPS yang benar-benar Anda gunakan'],
      ],
    },
    {
      type: 'title',
      text: 'Apa yang Harus Diubah Ketika Tes Terlihat Buruk',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Apa yang Anda Lihat', 'Kemungkinan Penyebab', 'Yang Harus Dicoba'],
      rows: [
        ['Jejak gelap panjang di belakang target', 'Transisi piksel gelap lambat atau overdrive lemah', 'Coba mode overdrive yang lebih kuat, uji ulang pada latar belakang gelap dan kisi'],
        ['Lingkaran terang atau garis berwarna di belakang target', 'Kelebihan overdrive atau ghosting terbalik', 'Turunkan overdrive satu tingkat dan bandingkan pada kecepatan refresh nyata Anda'],
        ['Gerakan terlihat melompat bukannya buram', 'Frame pacing, beban browser, atau ketidakcocokan kecepatan refresh', 'Tutup aplikasi berat, aktifkan layar penuh, konfirmasi kecepatan refresh OS'],
        ['Teks menjadi tidak terbaca saat bergerak', 'Blur sample-and-hold, kecepatan refresh rendah, atau respons lambat', 'Tingkatkan kecepatan refresh, uji pola teks, bandingkan mode overdrive'],
        ['Artefak berubah saat FPS berubah', 'VRR atau perilaku overdrive adaptif', 'Uji ulang pada rentang FPS tempat Anda benar-benar bermain atau bekerja'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Kecepatan Refresh Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kecepatan refresh yang lebih tinggi mengurangi waktu setiap frame tetap terlihat, yang dapat membuat gerakan terlihat lebih jelas. Namun, kecepatan refresh saja tidak menghilangkan ghosting. Monitor 240Hz dengan transisi piksel lambat masih dapat mengaburkan, sementara panel 144Hz yang disetel dengan baik mungkin terlihat lebih bersih daripada panel yang lebih cepat yang disetel dengan buruk.',
    },
    {
      type: 'table',
      headers: ['Kecepatan Refresh', 'Waktu Frame', 'Apa yang Diharapkan'],
      rows: [
        ['60Hz', '16,7 ms', 'Mudah melihat blur sample-and-hold dan gerakan lebih lambat'],
        ['120Hz', '8,3 ms', 'Jauh lebih mulus, tetapi respons piksel masih penting'],
        ['144Hz', '6,9 ms', 'Dasar gaming umum untuk kejelasan gerakan'],
        ['240Hz', '4,2 ms', 'Sangat mulus jika penyetelan respons baik'],
        ['360Hz', '2,8 ms', 'Menuntut: penyetelan overdrive yang buruk menjadi jelas'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming, dan Pengujian Dunia Nyata',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kecepatan refresh variabel dapat mengubah perilaku monitor karena beberapa layar menggunakan penyetelan overdrive yang berbeda pada kecepatan refresh yang berbeda. Jika masalah Anda hanya muncul di game, jangan menguji hanya pada kecepatan refresh maksimum desktop. Uji lagi pada rentang FPS tempat Anda benar-benar bermain, terutama sekitar 60 FPS, 90 FPS, 120 FPS, dan batas frame rate apa pun yang Anda gunakan.',
    },
    {
      type: 'list',
      items: [
        'Jika ghosting lebih buruk pada FPS rendah, monitor mungkin memiliki penyetelan overdrive variabel yang lemah',
        'Jika halo hanya muncul pada kecepatan refresh tinggi, mode overdrive mungkin terlalu agresif',
        'Jika gerakan gagap sementara jejak tetap pendek, masalahnya mungkin frame pacing daripada respons piksel',
        'Jika layar penuh terlihat berbeda dari mode jendela, periksa penskalaan browser, penskalaan OS, dan perilaku kompositor',
      ],
    },
    {
      type: 'title',
      text: 'Pemecahan Masalah Hasil Buruk',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Konfirmasi bahwa kabel layar Anda mendukung kecepatan refresh target',
        'Nonaktifkan penghalusan gerakan, Black Frame Insertion, atau mode MPRT saat membandingkan overdrive normal',
        'Uji ulang setelah mengalihkan monitor ke resolusi aslinya',
        'Gunakan layar penuh atau kurangi zoom browser jika gerakan tampak tidak konsisten',
        'Tutup aplikasi latar belakang berat jika animasi gagap',
        'Uji pola yang sama setelah mengubah pengaturan kecepatan refresh panel kontrol GPU',
        'Coba kabel atau port lain jika monitor tidak dapat mencapai kecepatan refresh yang diiklankan',
        'Uji ulang dengan VRR aktif dan nonaktif ketika ghosting berubah antara desktop dan game',
      ],
    },
    {
      type: 'title',
      text: 'Batasan Tes Ghosting Online',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tes ghosting berbasis browser bergantung pada waktu animasi browser, beban GPU, komposisi sistem operasi, dan konfigurasi tampilan Anda. Ini sangat baik untuk perbandingan visual, tetapi pengukuran waktu respons yang tepat memerlukan peralatan khusus seperti kamera pursuit, fotodioda, atau metode berbasis osiloskop. Gunakan tes ini untuk memilih pengaturan dan mengenali artefak yang jelas, bukan untuk mensertifikasi klaim waktu respons pabrikan.',
    },
  ],
  ui: {
    badge: 'Kejelasan Gerakan',
    speedLabel: 'Kecepatan gerakan',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Kekuatan jejak',
    backgroundLabel: 'Latar belakang',
    backgroundDark: 'Gelap',
    backgroundLight: 'Terang',
    backgroundGrid: 'Kisi',
    patternLabel: 'Target uji',
    patternBars: 'Bilah kejelasan',
    patternText: 'Blok teks',
    patternUfo: 'UFO',
    pursuitLabel: 'Panduan pursuit',
    pursuitOn: 'Aktif',
    pursuitOff: 'Nonaktif',
    fullscreen: 'Layar penuh',
    exitFullscreen: 'Keluar layar penuh',
    pause: 'Jeda',
    resume: 'Lanjutkan',
    targetText: 'GERAKAN',
    estimatedBlur: 'estimasi blur',
    frameStep: 'Langkah frame',
    persistence: 'Persistensi',
    sampleCount: 'Sampel jejak',
    instructions: 'Perhatikan tepi belakang target bergerak sambil mengubah kecepatan, kekuatan jejak, latar belakang, mode layar penuh, dan pengaturan overdrive monitor.',
    reset: 'Atur Ulang',
  },
};
