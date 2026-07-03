import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-klik-ganda-mouse';
const title = 'Tes Klik Ganda Mouse';
const description =
  'Uji setiap tombol mouse dan deteksi klik ganda yang tidak diinginkan, sakelar yang aus, dan pantulan kontak dengan pengaturan waktu per tombol di browser Anda.';

const faqData = [
  {
    question: 'Apa itu masalah klik ganda mouse?',
    answer:
      'Masalah klik ganda terjadi ketika satu tekanan fisik dilaporkan sebagai dua klik. Ini dapat memengaruhi tombol kiri, tombol kanan, klik roda, atau tombol samping, dan biasanya disebabkan oleh keausan sakelar, pantulan kontak, pengaturan anti-pantul firmware, atau ketidakstabilan sinyal nirkabel.',
  },
  {
    question: 'Jarak apa yang dianggap mencurigakan?',
    answer:
      'Jarak yang sangat pendek antara klik dianggap mencurigakan karena klik ganda manusia biasanya membutuhkan waktu lebih lama. Alat ini dimulai dengan ambang 80 ms, tetapi Anda dapat menyesuaikannya tergantung pada mouse dan gaya pengujian Anda.',
  },
  {
    question: 'Bisakah browser membuktikan sakelar rusak?',
    answer:
      'Browser tidak dapat memeriksa sakelar listrik secara langsung, tetapi dapat merekam peristiwa klik yang diterima sistem operasi Anda. Jarak mencurigakan yang berulang selama pengujian klik tunggal adalah bukti kuat adanya pantulan atau klik ganda yang tidak diinginkan.',
  },
  {
    question: 'Bagaimana cara menguji dengan benar?',
    answer:
      'Klik perlahan dan sengaja, bertujuan untuk tekanan tunggal. Jika penghitung mencurigakan naik bahkan ketika Anda tidak sengaja melakukan klik ganda, ulangi pengujian di port USB lain, browser lain, dan komputer lain jika memungkinkan.',
  },
];

const howToData = [
  {
    name: 'Atur ambang deteksi',
    text: 'Mulai dengan 80 ms. Turunkan untuk deteksi pantulan sakelar yang ketat atau naikkan jika perangkat Anda menghasilkan celah tidak sengaja yang sedikit lebih lebar.',
  },
  {
    name: 'Klik seperti klik tunggal normal',
    text: 'Tekan setiap tombol mouse satu klik pada satu waktu di atas visual mouse. Jangan sengaja melakukan klik ganda selama putaran pertama.',
  },
  {
    name: 'Amati penghitung mencurigakan',
    text: 'Jika peristiwa mencurigakan muncul saat Anda melakukan klik tunggal, periksa tombol visual mana yang disorot dan bandingkan dengan chip peristiwa ringkas.',
  },
  {
    name: 'Bandingkan dengan perangkat lain',
    text: 'Mouse yang sehat seharusnya mempertahankan skor tinggi di bawah ambang yang sama. Membandingkan perangkat membantu memisahkan kesalahan perangkat keras dari pengaturan perangkat lunak.',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: 'Tes Klik Ganda Mouse: Diagnosis Pantulan Tombol Secara Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html:
        'Mouse yang melakukan klik ganda saat Anda menekan sekali bukan hanya menjengkelkan. Ini dapat membuka folder secara tidak sengaja, membatalkan tindakan seret dan lepas, menembak dua kali dalam game, menutup tab browser, atau membuat menu klik kanan muncul dan menghilang sebelum Anda dapat menggunakannya. Tes klik ganda mouse online ini berfokus pada sinyal diagnostik yang berguna: <strong>jarak waktu antara peristiwa tombol yang dilaporkan oleh sistem operasi Anda</strong>.',
    },
    {
      type: 'paragraph',
      html:
        'Tidak seperti penghitung klik biasa, alat ini melacak setiap tombol secara independen: klik kiri, klik kanan, klik roda, kembali browser, dan maju browser. Itu penting karena mouse dapat memiliki tombol kanan yang rusak sementara tombol kirinya masih sehat, atau tombol samping yang aus yang hanya salah tembak setelah berbulan-bulan bermain game atau menggunakan pintasan produktivitas.',
    },
    {
      type: 'title',
      text: 'Apa yang Diukur oleh Tes Tombol Mouse Ini',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Saat Anda menekan tombol mouse, browser menerima peristiwa penunjuk yang berisi kode tombol. Alat ini menyimpan stempel waktu terakhir untuk tombol fisik yang sama dan membandingkannya dengan tekanan berikutnya dari tombol yang sama. Jika jaraknya lebih pendek dari ambang yang Anda pilih, peristiwa tersebut ditandai sebagai mencurigakan karena klik kedua yang disengaja normal biasanya memakan waktu lebih lama.',
    },
    {
      type: 'list',
      items: [
        'Tombol kiri: berguna untuk mendeteksi klik ganda tidak sengaja saat membuka file, memilih teks, atau menyeret jendela',
        'Tombol kanan: berguna saat menu konteks berkedip, terbuka dua kali, atau langsung tertutup',
        'Tombol roda: berguna untuk mouse di mana klik tengah membuka banyak tab atau gagal setelah penjelajahan berat',
        'Tombol Kembali dan Maju: berguna untuk mouse gaming dan mouse produktivitas dengan sakelar samping',
        'Pengaturan waktu per tombol: menghindari pencampuran klik kiri dengan klik kanan dan menyebutnya klik ganda palsu',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Mouse Mulai Melakukan Klik Ganda',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Kebanyakan mouse menggunakan sakelar mekanis kecil di bawah setiap tombol. Ketika kontak sakelar menutup, logam dapat memantul secara listrik untuk periode yang sangat singkat sebelum stabil. Firmware mouse biasanya menyaring kebisingan itu dengan logika anti-pantul. Saat sakelar aus, pantulan dapat menjadi lebih lama, lebih bising, atau tidak konsisten, sehingga komputer menerima dua tekanan tombol meskipun jari Anda hanya melakukan satu tekanan fisik.',
    },
    {
      type: 'paragraph',
      html:
        'Klik ganda tidak selalu disebabkan oleh hal yang sama. Ini bisa berupa keausan sakelar mekanis, anti-pantul firmware yang diatur terlalu agresif, debu atau oksidasi di dalam sakelar, ketidakstabilan paket nirkabel, perangkat lunak makro, kabel yang rusak, atau pengaturan sistem operasi yang membuat klik ganda tidak sengaja lebih mudah terlihat.',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan Penyebab', 'Yang Harus Diuji'],
      rows: [
        ['Satu klik membuka file seolah-olah diklik ganda', 'Pantulan sakelar kiri atau kebingungan kecepatan klik ganda OS', 'Uji Kiri dengan tekanan tunggal lambat pada 80 ms'],
        ['Menu klik kanan berkedip atau menutup', 'Pantulan sakelar kanan atau perangkat lunak yang mencegat menu konteks', 'Uji Kanan dan nonaktifkan utilitas mouse sementara'],
        ['Klik tengah membuka dua tab', 'Keausan sakelar roda', 'Uji Roda dengan tekanan tunggal yang disengaja'],
        ['Tombol kembali melompat dua halaman', 'Pantulan sakelar samping atau pengulangan pintasan browser', 'Uji Kembali dan Maju secara terpisah'],
        ['Hanya terjadi secara nirkabel', 'Interferensi nirkabel, baterai rendah, atau penempatan penerima', 'Uji ulang dengan kabel atau dekatkan penerima'],
      ],
    },
    {
      type: 'title',
      text: 'Memilih Ambang Anti-Pantul yang Tepat',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Ambang adalah jarak maksimum yang masih dianggap mencurigakan oleh alat ini. Nilai default, <strong>80 ms</strong>, adalah titik tengah praktis: cukup ketat untuk menangkap banyak peristiwa duplikat yang tidak diinginkan, tetapi tidak begitu agresif sehingga setiap klik ganda normal yang disengaja menjadi kegagalan perangkat keras.',
    },
    {
      type: 'table',
      headers: ['Ambang', 'Terbaik Untuk', 'Cara Menafsirkannya'],
      rows: [
        ['30-50 ms', 'Pemeriksaan pantulan listrik yang ketat', 'Baik untuk mengonfirmasi peristiwa duplikat yang sangat cepat dari sakelar yang aus'],
        ['60-90 ms', 'Diagnosis klik ganda mouse umum', 'Rentang default terbaik untuk sebagian besar mouse gaming dan kantor'],
        ['100-140 ms', 'Sakelar aus intermiten', 'Berguna ketika mouse terkadang menciptakan celah tidak sengaja yang lebih lebar'],
        ['150-180 ms', 'Uji stres dan sakelar lemah', 'Gunakan dengan hati-hati, karena klik ganda sengaja yang cepat dapat masuk ke dalam rentang ini'],
      ],
    },
    {
      type: 'title',
      text: 'Cara Menjalankan Tes yang Andal',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Untuk putaran pertama, jangan sengaja melakukan klik ganda. Tekan setiap tombol mouse secara perlahan dan sengaja, satu tombol pada satu waktu, sementara kursor berada di atas visual mouse. Sakelar yang sehat seharusnya menghasilkan peristiwa tunggal yang stabil. Jika penghitung mencurigakan meningkat selama tekanan tunggal lambat, ulangi tes tombol yang sama beberapa kali untuk mengonfirmasi polanya.',
    },
    {
      type: 'list',
      items: [
        'Uji Kiri dengan 20 hingga 30 tekanan lambat, lalu Kanan, lalu Roda, lalu tombol samping',
        'Jangan seret mouse saat menguji pantulan tombol, karena gerakan dapat mengganggu hasil waktu',
        'Jika tombol menunjukkan peristiwa mencurigakan, ulangi pengujian yang sama setelah mengganti port USB atau browser',
        'Untuk mouse nirkabel, uji dengan baterai baru dan penerima dekat dengan mouse',
        'Jika hanya satu tombol yang gagal berulang kali, kesalahannya mungkin pada sakelar spesifik itu daripada seluruh perangkat',
      ],
    },
    {
      type: 'title',
      text: 'Menafsirkan Hasil',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Hasil', 'Arti', 'Langkah Selanjutnya yang Disarankan'],
      rows: [
        ['0 peristiwa mencurigakan setelah banyak tekanan', 'Tombol yang diuji terlihat sehat di bawah ambang yang dipilih', 'Pertahankan ambang default atau uji lagi nanti jika gejala kembali'],
        ['1 peristiwa mencurigakan terisolasi', 'Bisa jadi pantulan nyata atau tekanan cepat yang tidak sengaja', 'Ulangi tombol yang sama secara perlahan sebelum menarik kesimpulan'],
        ['Peristiwa mencurigakan berulang pada satu tombol', 'Tanda kuat pantulan sakelar atau kontak yang aus', 'Uji di komputer lain dan dokumentasikan hasilnya'],
        ['Peristiwa mencurigakan pada setiap tombol', 'Bisa jadi perangkat lunak, driver, utilitas makro, atau lingkungan browser', 'Nonaktifkan perangkat lunak mouse dan uji ulang'],
        ['Hanya mode nirkabel yang gagal', 'Kemungkinan baterai, penempatan penerima, atau interferensi', 'Coba mode kabel atau dekatkan penerima'],
      ],
    },
    {
      type: 'paragraph',
      html:
        'Skor kesehatan adalah ringkasan cepat, bukan keputusan akhir. Bukti terpenting adalah <strong>tombol mana</strong> yang menghasilkan peristiwa mencurigakan dan apakah polanya berulang saat Anda menekan tombol yang sama secara perlahan. Satu peristiwa buruk selama pengujian terburu-buru kurang berarti daripada lima peristiwa mencurigakan klik kanan selama tekanan tunggal yang disengaja.',
    },
    {
      type: 'title',
      text: 'Sebelum Mengganti Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Periksa apakah perangkat lunak mouse Anda memiliki pengaturan waktu anti-pantul dan uji lagi setelah mengubahnya',
        'Nonaktifkan makro, profil rapid-fire, atau pemetaan ulang tombol selama diagnosis',
        'Coba port USB yang berbeda, terutama jika Anda menggunakan hub atau konektor panel depan',
        'Untuk mouse nirkabel, uji dengan dongle pada kabel ekstensi di dekat alas mouse',
        'Bandingkan dengan mouse lain di komputer yang sama untuk memisahkan kegagalan perangkat keras dari perilaku perangkat lunak',
      ],
    },
    {
      type: 'title',
      text: 'Perbaikan, Garansi, dan Bukti',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Jika kesalahannya mekanis, membersihkan cangkang luar jarang memperbaikinya secara permanen karena masalahnya ada di dalam kontak sakelar. Beberapa pengguna mengganti sakelar mikro, tetapi itu memerlukan penyolderan dan tidak sepadan untuk setiap mouse. Jika mouse masih dalam garansi, jarak mencurigakan berulang pada tombol yang sama adalah bukti berguna saat menjelaskan masalah ke dukungan.',
    },
    {
      type: 'paragraph',
      html:
        'Untuk klaim garansi, rekam tangkapan layar singkat saat Anda menekan tombol yang gagal secara perlahan. Pastikan chip peristiwa menunjukkan label tombol dan waktu yang mencurigakan. Ini lebih jelas daripada mengatakan "mouse saya terkadang klik ganda" karena menunjukkan tombol sebenarnya dan perkiraan waktu dari peristiwa duplikat yang tidak diinginkan.',
    },
    {
      type: 'title',
      text: 'Keterbatasan Tes Mouse Berbasis Browser',
      level: 3,
    },
    {
      type: 'paragraph',
      html:
        'Tes ini mengukur peristiwa yang mencapai browser. Ini tidak dapat memeriksa langsung bentuk gelombang listrik di dalam sakelar, dan tidak dapat melewati setiap driver, sistem operasi, atau utilitas vendor. Itu tetap berguna: jika browser menerima peristiwa duplikat, aplikasi normal Anda juga dapat menerimanya. Untuk validasi tingkat rekayasa, alat perangkat keras seperti osiloskop atau penguji sakelar memberikan bukti lebih mendalam, tetapi tidak diperlukan untuk sebagian besar diagnostik pengguna.',
    },
  ],
  ui: {
    badge: 'Lab Anti-Pantul',
    clickTarget: 'Matriks Tombol',
    clickTargetHint: 'Tekan kiri, kanan, roda, kembali, dan maju',
    totalClicks: 'Total',
    suspiciousClicks: 'Mencurigakan',
    fastestGap: 'Jarak tercepat',
    healthScore: 'Skor kesehatan',
    thresholdLabel: 'Ambang deteksi',
    thresholdUnit: 'ms',
    cleanEvent: 'bersih',
    suspiciousEvent: 'mencurigakan',
    reset: 'Atur Ulang',
    statusIdle: 'Tekan setiap tombol mouse untuk mengujinya secara mandiri',
    statusClean: 'Tidak ada pantulan tombol mencurigakan yang terdeteksi',
    statusWarning: 'Pantulan mencurigakan terdeteksi pada tombol mouse',
    lastGap: 'Peristiwa terakhir',
    logTitle: 'Peristiwa tombol terbaru',
    emptyLog: 'Tekan tombol mouse apa pun di atas badan mouse.',
    leftButton: 'Kiri',
    middleButton: 'Roda',
    rightButton: 'Kanan',
    backButton: 'Kembali',
    forwardButton: 'Maju',
    otherButton: 'Lainnya',
  },
};
