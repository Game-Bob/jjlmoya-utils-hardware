import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-scroll-mouse';
const title = 'Tes Scroll Mouse';
const description = 'Diagnosis lompatan roda gulir, lompatan mundur, arah gulir yang tidak konsisten, dan sinyal encoder yang lemah dengan tes roda gulir berbasis browser lokal.';

const faqData = [
  {
    question: 'Apa yang dideteksi oleh tes scroll mouse?',
    answer: 'Tes scroll mouse merekam peristiwa roda dan mencari perubahan arah yang tidak stabil, delta kecil yang lemah, dan pengguliran yang tidak konsisten. Gejala ini sering muncul ketika encoder roda kotor, aus, tidak sejajar, atau memiliki gangguan elektronik.',
  },
  {
    question: 'Apa itu lompatan gulir mundur?',
    answer: 'Lompatan mundur terjadi ketika Anda menggulir ke satu arah tetapi komputer menerima peristiwa singkat ke arah yang berlawanan. Jika berulang selama pengguliran yang stabil, itu adalah tanda kuat dari pantulan encoder atau kontaminasi.',
  },
  {
    question: 'Apakah tes ini berfungsi dengan touchpad?',
    answer: 'Ya, tetapi hasilnya paling bermakna untuk roda mouse fisik. Touchpad dan roda gulir halus menciptakan banyak delta kecil, sehingga kontrol sensitivitas membantu memisahkan gerakan halus yang disengaja dari jitter yang mencurigakan.',
  },
  {
    question: 'Apakah tes ini mengunggah data mouse saya?',
    answer: 'Tidak. Perhitungan berjalan secara lokal di browser Anda. Alat ini hanya menggunakan peristiwa roda saat penunjuk berada di dalam area penangkapan.',
  },
];

const howToData = [
  {
    name: 'Tempatkan penunjuk di atas panel penangkapan',
    text: 'Pindahkan kursor ke area lab gulir sehingga halaman dapat menangkap peristiwa roda tanpa menggerakkan dokumen di sekitarnya.',
  },
  {
    name: 'Gulir secara stabil dalam satu arah',
    text: 'Uji satu arah pada satu waktu: putar perlahan ke atas untuk beberapa klik, reset atau jeda, lalu uji ke bawah secara terpisah. Perubahan arah cepat yang disengaja dapat menciptakan bacaan lompatan mundur palsu.',
  },
  {
    name: 'Perhatikan lompatan mundur',
    text: 'Jika penghitung pembalikan meningkat saat jari Anda masih bergerak dalam satu arah, ulangi gerakan yang sama untuk mengonfirmasi polanya.',
  },
  {
    name: 'Sesuaikan sensitivitas',
    text: 'Naikkan sensitivitas untuk touchpad halus atau turunkan untuk pengujian roda mekanis yang ketat. Skor stabilitas segera diperbarui.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Tes Scroll Mouse: Temukan Lompatan Roda dan Lompatan Mundur',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Roda mouse yang rusak jarang langsung mati total. Biasanya dimulai dengan gejala kecil: satu klik menggulir ke arah yang salah, halaman melompat ke atas saat Anda menggulir ke bawah, atau roda terasa normal tetapi browser menerima peristiwa yang tidak konsisten. Tes scroll mouse ini merekam sinyal yang mencapai browser dan menyoroti pola yang relevan untuk diagnosis.',
    },
    {
      type: 'paragraph',
      html: 'Tujuannya bukan untuk mengukur seberapa jauh halaman bergerak. Sinyal yang berguna adalah <strong>konsistensi arah</strong>. Saat Anda memutar roda mekanis secara stabil ke bawah, aliran peristiwa seharusnya tetap ke arah itu. Peristiwa pendek dengan arah berlawanan dalam jendela waktu yang sempit mencurigakan karena sesuai dengan cara encoder gulir yang kotor atau aus salah membaca gerakan roda.',
    },
    {
      type: 'title',
      text: 'Apa yang Diukur Alat Ini',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Total tik roda yang ditangkap di dalam panel uji',
        'Lompatan mundur: perubahan tanda cepat yang terjadi saat arah sebelumnya masih baru',
        'Lari bersih terpanjang: berapa banyak peristiwa berturut-turut yang tetap dalam arah yang konsisten',
        'Delta terakhir: arah dan ukuran mentah dari peristiwa roda terbaru',
        'Aktivitas vertikal versus horizontal, berguna untuk roda miring dan touchpad',
      ],
    },
    {
      type: 'table',
      headers: ['Sinyal', 'Pola Sehat', 'Pola Mencurigakan'],
      rows: [
        ['Roda vertikal', 'Rangkaian panjang peristiwa naik atau turun selama pengguliran stabil', 'Peristiwa naik/turun bergantian saat jari Anda mempertahankan satu arah'],
        ['Kemiringan horizontal', 'Peristiwa kiri atau kanan hanya saat menggunakan gestur miring atau horizontal', 'Gerakan samping tak terduga selama penggunaan roda vertikal normal'],
        ['Delta kecil', 'Nilai kecil sesekali pada roda halus atau touchpad', 'Proporsi tinggi nilai kecil yang tidak stabil pada roda mekanis bertakik'],
        ['Skor stabilitas', 'Tetap tinggi di beberapa lintasan yang disengaja', 'Turun berulang kali karena pembalikan terjadi di tes arah yang sama'],
      ],
    },
    {
      type: 'title',
      text: 'Penyebab Umum Lompatan Roda Gulir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sebagian besar roda mouse menggunakan encoder yang mengubah putaran menjadi pulsa. Debu, oksidasi, kontak yang aus, poros roda yang longgar, masalah penyaringan firmware, atau kabel yang rusak dapat membuat pulsa tersebut tidak konsisten. Ketika encoder secara singkat melaporkan fase yang salah, sistem operasi dapat menerima peristiwa roda dengan arah berlawanan meskipun roda terus bergerak ke arah semula.',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan Penyebab', 'Pemeriksaan Berikutnya'],
      rows: [
        ['Halaman melompat ke atas saat menggulir ke bawah', 'Pantulan encoder atau kotoran di mekanisme roda', 'Lakukan lintasan turun perlahan dan amati penghitung pembalikan'],
        ['Hanya satu aplikasi yang menggulir buruk', 'Penghalusan aplikasi, mode zoom, atau pintasan mouse kustom', 'Uji di browser dan bandingkan dengan aplikasi lain'],
        ['Roda berfungsi setelah ditiup, lalu gagal lagi', 'Perpindahan kotoran sementara atau kontak encoder yang aus', 'Ulangi setelah beberapa menit penggunaan normal'],
        ['Muncul gerakan horizontal tak terduga', 'Derau roda miring, gestur touchpad, atau pemetaan driver', 'Periksa meter sumbu horizontal saat menggulir vertikal'],
        ['Mouse nirkabel menggulir tidak menentu', 'Baterai lemah, jarak penerima, atau interferensi', 'Uji ulang dengan baterai baru dan penerima dekat mouse'],
      ],
    },
    {
      type: 'title',
      text: 'Cara Menguji dengan Andal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tempatkan penunjuk di dalam panel penangkapan sebelum menggulir agar halaman mencegah gerakan halaman normal',
        'Uji satu arah pada satu waktu: gulir perlahan ke atas selama 10 hingga 20 tik roda tanpa mengubah arah',
        'Reset atau jeda, lalu ulangi lintasan satu arah yang sama ke bawah',
        'Jangan bergantian cepat antara atas dan bawah, karena perubahan arah cepat yang disengaja dapat terlihat seperti lompatan mundur',
        'Jika pembalikan muncul, ulangi arah yang bermasalah beberapa kali untuk mengonfirmasi bahwa itu dapat direproduksi',
        'Bandingkan dengan mouse lain di komputer yang sama jika Anda perlu memisahkan perangkat keras dari perangkat lunak',
      ],
    },
    {
      type: 'title',
      text: 'Menafsirkan Skor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Skor stabilitas adalah ringkasan cepat. Skor tinggi berarti alat melihat arah yang konsisten dan sedikit delta kecil yang tidak pasti. Skor rendah tidak secara otomatis membuktikan mouse rusak, terutama pada touchpad atau roda halus resolusi tinggi, tetapi lompatan mundur berulang selama tes satu arah yang lambat adalah bukti kuat adanya masalah roda yang sebenarnya.',
    },
    {
      type: 'table',
      headers: ['Hasil', 'Arti', 'Tindakan yang Direkomendasikan'],
      rows: [
        ['Tidak ada pembalikan dan lari bersih panjang', 'Sinyal roda tampak konsisten', 'Lanjutkan pengujian hanya jika gejala muncul dalam penggunaan nyata'],
        ['Satu pembalikan terisolasi', 'Mungkin perubahan arah yang tidak disengaja atau satu peristiwa gangguan', 'Ulangi arah yang sama secara perlahan'],
        ['Beberapa pembalikan di lintasan yang sama', 'Kemungkinan pantulan encoder, kotoran, atau keausan roda', 'Uji ulang di komputer lain dan dokumentasikan hasilnya'],
        ['Banyak peristiwa jitter tetapi tidak ada pembalikan', 'Sensitivitas mungkin terlalu rendah untuk jenis perangkat ini', 'Naikkan sensitivitas untuk touchpad atau perangkat gulir halus'],
        ['Peristiwa horizontal selama penggunaan roda vertikal', 'Kemungkinan derau roda miring atau derau pemetaan driver', 'Nonaktifkan perangkat lunak mouse kustom dan uji ulang'],
      ],
    },
    {
      type: 'title',
      text: 'Roda Mekanis vs Touchpad',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Roda mekanis bertakik biasanya menghasilkan langkah arah yang jelas. Touchpad atau roda putar bebas dapat menghasilkan banyak delta kecil karena sistem operasi menerapkan pengguliran halus. Itulah mengapa alat ini menyertakan kontrol sensitivitas: menaikkannya mengabaikan gerakan kecil dan membuat tes fokus pada perubahan arah yang cukup besar untuk menjadi penting.',
    },
    {
      type: 'title',
      text: 'Yang Harus Dicoba Sebelum Mengganti Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Uji di browser lain untuk mengesampingkan penangan roda khusus halaman',
        'Nonaktifkan perangkat lunak mouse pabrikan, akselerasi gulir, atau lapisan makro selama diagnosis',
        'Untuk mouse nirkabel, gunakan baterai baru dan dekatkan penerima',
        'Bersihkan sekitar roda dengan udara bertekanan saat mouse dicabut atau dimatikan',
        'Jika mouse dalam garansi, rekam pola pembalikan yang berulang sebagai bukti',
      ],
    },
    {
      type: 'paragraph',
      html: 'Pengujian berbasis browser tidak dapat memeriksa encoder secara elektrik, tetapi dapat menunjukkan dengan tepat apa yang diterima oleh perangkat lunak normal Anda. Jika browser menerima peristiwa roda dengan arah yang salah selama pengguliran satu arah yang hati-hati, aplikasi lain juga dapat menerimanya.',
    },
  ],
  ui: {
    badge: 'Lab Sinyal Roda',
    captureTitle: 'Gulir di dalam panel sinyal',
    captureHint: 'Gunakan lintasan roda satu arah yang stabil untuk mengekspos lompatan mundur',
    focusLockTitle: 'Aktifkan zona gulir ini',
    focusLockText: 'Klik zona ini dan gulir di sini. Halaman tidak akan bergerak saat zona ini aktif.',
    stabilityScore: 'Skor stabilitas',
    statusIdle: 'Gulir di atas panel untuk mulai mengukur konsistensi roda',
    statusClean: 'Arah roda stabil dalam sampel yang ditangkap',
    statusWarning: 'Lompatan mundur terdeteksi selama pengguliran baru-baru ini',
    statusMixed: 'Banyak delta kecil terdeteksi; sesuaikan sensitivitas untuk perangkat ini',
    directionNote: 'Uji satu arah pada satu waktu. Berganti cepat antara atas dan bawah dapat menciptakan bacaan lompatan mundur palsu.',
    totalTicks: 'Tik',
    reversals: 'Pembalikan',
    longestRun: 'Lari terbaik',
    lastDelta: 'Delta terakhir',
    verticalAxis: 'Vertikal',
    horizontalAxis: 'Horizontal',
    dominantDirection: 'Arah terakhir',
    upward: 'Atas',
    downward: 'Bawah',
    leftward: 'Kiri',
    rightward: 'Kanan',
    noDirection: 'Tidak ada gerakan',
    noDataValue: '-',
    sensitivityLabel: 'Sensitivitas jitter',
    sensitivityUnit: 'delta',
    reset: 'Reset',
    logTitle: 'Aliran peristiwa roda',
    emptyLog: 'Gulir di atas panel dengan gerakan roda yang lambat dan stabil.',
    cleanEvent: 'bersih',
    reversalEvent: 'lompatan mundur',
    jitterEvent: 'delta kecil',
  },
};
