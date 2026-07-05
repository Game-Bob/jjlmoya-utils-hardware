import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'penganalisis-dpi-mouse';
const title = 'Penganalisis DPI mouse';
const description =
  'Ukur DPI mouse nyata Anda secara online dengan menggerakkan mouse sejauh jarak fisik yang diketahui dan membandingkan pergerakan penunjuk yang ditangkap dalam piksel.';

const faqData = [
  {
    question: 'Bagaimana cara kerja penguji DPI mouse online?',
    answer:
      'Alat ini meminta Anda menggerakkan mouse melintasi jarak fisik yang diketahui, merekam peristiwa gerakan browser, mengoreksi nilai yang ditangkap dengan devicePixelRatio, dan membagi piksel yang dihasilkan dengan jarak dalam inci.',
  },
  {
    question: 'Mengapa DPI nyata bisa berbeda dari nilai yang tercetak pada mouse?',
    answer:
      'Toleransi sensor, langkah firmware, perilaku permukaan, penskalaan sistem operasi, akselerasi penunjuk, dan pengaturan profil game dapat membuat gerakan terukur berbeda dari DPI nominal yang dipilih di perangkat lunak.',
  },
  {
    question: 'Haruskah akselerasi penunjuk dinonaktifkan sebelum pengujian?',
    answer:
      'Ya. Nonaktifkan Enhance Pointer Precision di Windows dan kurva akselerasi vendor apa pun jika Anda ingin pengukuran DPI yang bersih. Biarkan aktif hanya jika Anda sengaja ingin melihat bagaimana pengaturan normal Anda berperilaku.',
  },
  {
    question: 'Jarak fisik apa yang sebaiknya saya gunakan?',
    answer:
      'Jarak yang lebih jauh mengurangi kesalahan tangan. Lebar kartu kredit nyaman digunakan, tetapi lintasan penggaris 100 mm atau 4 inci biasanya lebih dapat diulang jika meja Anda memiliki cukup ruang.',
  },
];

const howToData = [
  {
    name: 'Pilih referensi fisik',
    text: 'Gunakan 5 atau 10 mm untuk DPI sangat tinggi, 1 inci untuk pengujian konvensional, atau referensi lebih panjang jika Anda memiliki cukup ruang di meja.',
  },
  {
    name: 'Tahan tombol tangkap',
    text: 'Tekan dan tahan target tangkap di layar, lalu gerakkan mouse secara fisik ke kanan sejauh jarak yang dipilih.',
  },
  {
    name: 'Lepas di tanda fisik',
    text: 'Lepaskan tombol saat mouse mencapai tanda fisik nyata di meja Anda. Alat ini menghitung piksel per inci dan melaporkan DPI yang terukur.',
  },
  {
    name: 'Ulangi pada kecepatan berbeda',
    text: 'Lakukan lintasan lambat dan cepat. Jika DPI berubah drastis, akselerasi penunjuk atau penghalusan sensor mungkin memengaruhi hasil.',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Penguji DPI mouse online: ukur sensitivitas sensor nyata', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah mouse dapat mengiklankan 800, 1600, 3200, atau 26000 DPI, tetapi nilai yang penting dalam game dan pekerjaan presisi adalah gerakan yang benar-benar sampai ke komputer. Penguji DPI mouse online ini mengukur nilai praktis tersebut dengan membandingkan gerakan fisik yang diketahui dengan gerakan penunjuk yang ditangkap di browser. Hasilnya dinyatakan sebagai piksel per inci, satuan yang sama yang umum digunakan ketika orang berbicara tentang DPI atau CPI mouse.',
    },
    {
      type: 'paragraph',
      html: 'Pengujian ini sengaja dibuat lokal dan sederhana: tahan target tangkap, gerakkan mouse tepat ke kanan sejauh jarak fisik yang dipilih, dan lepaskan. Alat ini mengakumulasi delta gerakan asli alih-alih menggunakan skrip laju polling atau uji mouse umum. Karena perhitungan berjalan di browser Anda, tidak diperlukan unduhan driver, akun, atau unggahan cloud.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Kondisi pengujian penting',
      html: 'Untuk pengukuran DPI yang bersih, nonaktifkan akselerasi penunjuk sistem operasi dan kurva akselerasi vendor. Jika akselerasi tetap aktif, hasilnya menggambarkan perilaku penunjuk Anda saat ini, bukan pengaturan sensor mentah.',
    },
    { type: 'title', text: 'Cara Kerja Perhitungan DPI Nyata', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI berarti titik per inci. Dalam konteks mouse, pengguna sering menggunakan DPI dan CPI secara bergantian untuk menggambarkan berapa banyak hitungan atau piksel penunjuk yang dihasilkan ketika mouse bergerak satu inci fisik. Penganalisis ini merekam gerakan horizontal selama lintasan terkontrol, mengonversi jarak yang dipilih ke inci, lalu membagi piksel yang ditangkap dengan inci. Misalnya, jika mouse melaporkan 3200 piksel terkoreksi sejauh 2 inci, nilai terukurnya sekitar 1600 DPI.',
    },
    {
      type: 'list',
      items: [
        'Pilih referensi pendek seperti 10 mm untuk DPI sangat tinggi atau referensi lebih panjang untuk DPI rendah.',
        'Tahan kontrol tangkap tengah agar browser merekam gerakan hanya selama lintasan.',
        'Gerakkan secara fisik ke kanan, jaga jalur selurus mungkin.',
        'Lepas di tanda fisik nyata dan baca DPI yang dihitung.',
        'Ulangi beberapa kali dan rata-ratakan lintasan yang konsisten alih-alih memercayai satu lintasan.',
      ],
    },
    {
      type: 'table',
      headers: ['Gerakan ditangkap', 'Jarak fisik', 'DPI terukur'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm lebar kartu kredit', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'Buat goresan bersih',
      html: 'Satu goresan horizontal lebih penting daripada jarak yang jauh. Untuk DPI sangat tinggi, gunakan preset 5 mm atau 10 mm: ini menjaga gerakan cukup kecil untuk tetap berada di dalam layar sambil tetap memberikan kalkulator referensi fisik yang diketahui. Bilah kemajuan hanyalah meteran sinyal masukan; penggaris atau kartu di meja adalah titik berhenti.',
    },
    { type: 'title', text: 'Mengapa DPI Terukur Bisa Berbeda dari DPI yang Diiklankan', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI yang diiklankan sering kali merupakan langkah firmware yang dapat dipilih, bukan nilai bersertifikat laboratorium untuk setiap permukaan dan setiap unit. Dua mouse yang diatur ke DPI nominal yang sama dapat terasa berbeda jika sensor, penskalaan firmware, tinggi kaki luncur, tekstur permukaan, perilaku angkat, atau pengaturan sistem operasinya berbeda. Variasi kecil itu normal; variasi besar biasanya berarti pengaturan pengujian atau jalur perangkat lunak memengaruhi pengukuran.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'DPI nominal',
          description: 'Nilai yang ditampilkan di perangkat lunak mouse atau tercetak di halaman produk. Berguna sebagai titik awal, tetapi bukan bukti keluaran gerakan nyata.',
          points: ['Mudah dibaca', 'Dapat menyembunyikan penskalaan firmware', 'Bervariasi per profil'],
        },
        {
          title: 'DPI terukur',
          description: 'Nilai yang dihitung dari perpindahan fisik dan gerakan penunjuk yang ditangkap. Terbaik untuk mencocokkan satu mouse dengan yang lain.',
          highlight: true,
          points: ['Praktis dan dapat diulang', 'Sensitif terhadap akurasi tangan', 'Menunjukkan perilaku pengaturan nyata'],
        },
        {
          title: 'Sensitivitas dalam game',
          description: 'Respons kamera atau kursor akhir setelah game mengalikan masukan mouse dengan nilai sensitivitasnya sendiri.',
          points: ['Apa yang benar-benar Anda rasakan', 'Spesifik game', 'Bukan pengukuran sensor'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Kelebihan dan kekurangan pengukuran DPI berbasis browser',
      items: [
        { pro: 'Tidak perlu instalasi driver', con: 'Browser melihat gerakan penunjuk yang diproses, bukan sinyal listrik sensor' },
        { pro: 'Baik untuk membandingkan mouse dan profil dengan cepat', con: 'Pengaturan akselerasi dapat mendistorsi hasil jika dibiarkan aktif' },
        { pro: 'Bekerja dengan referensi fisik umum', con: 'Penyelarasan tangan dan tanda meja memengaruhi pengulangan' },
      ],
    },
    { type: 'title', text: 'Menyiapkan Windows, macOS, dan Perangkat Lunak Mouse', level: 3 },
    {
      type: 'paragraph',
      html: 'Sebelum menggunakan pengukur DPI, buat jalur masukan senetral mungkin. Di Windows, matikan Enhance Pointer Precision jika Anda menginginkan perilaku mentah. Di perangkat lunak vendor, nonaktifkan angle snapping, akselerasi, kontrol riak, penghalusan, atau bantuan khusus permukaan kecuali Anda sengaja ingin mengukurnya. Di macOS, akselerasi penunjuk adalah bagian dari jalur kursor normal, sehingga nilai tersebut harus diperlakukan sebagai hasil sistem praktis, bukan hasil sensor mentah.',
    },
    {
      type: 'table',
      headers: ['Pengaturan', 'Direkomendasikan untuk DPI mentah', 'Alasan'],
      rows: [
        ['Akselerasi penunjuk', 'Mati', 'Akselerasi mengubah keluaran gerakan tergantung pada kecepatan'],
        ['Tingkat DPI perangkat lunak mouse', 'Satu tingkat tetap', 'Mencegah perubahan profil yang tidak disengaja selama pengujian'],
        ['Angle snapping', 'Mati', 'Dapat memodifikasi gerakan diagonal dan menutupi keluaran sensor alami'],
        ['Penskalaan sistem operasi', 'Biarkan normal, alat mengoreksi dengan devicePixelRatio', 'Penganalisis menetralkan zoom browser dan rasio piksel tampilan dalam perhitungannya'],
        ['Overlay game atau makro', 'Mati', 'Perangkat lunak tambahan dapat mencegat masukan dan membuat lintasan tidak konsisten'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: 'Mencocokkan dua mouse',
      html: 'Ukur mouse lama tiga kali, catat rata-ratanya, lalu sesuaikan tingkat DPI mouse baru hingga nilai terukurnya mendekati. Ini sering kali lebih berguna daripada menyalin angka dari satu aplikasi vendor ke aplikasi lain karena keluaran sensor nyata bisa berbeda.',
    },
    { type: 'title', text: 'Memilih Referensi Fisik yang Tepat', level: 3 },
    {
      type: 'paragraph',
      html: 'Antarmuka mencakup referensi pendek untuk DPI tinggi dan referensi lebih panjang untuk DPI lebih rendah. Gunakan 5 atau 10 mm saat penunjuk Anda melintasi layar dengan gerakan tangan kecil. Gunakan 1 inci, 50 mm, atau lebar kartu 85.6 mm saat mouse dikonfigurasi mendekati nilai desktop umum atau penembak taktis.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: 'milimeter dalam satu inci' },
        { value: '85.6', label: 'milimeter dalam lebar kartu kredit umum' },
        { value: '3+', label: 'lintasan ulang disarankan sebelum memercayai profil' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: 'Titik per inci, umumnya digunakan untuk menggambarkan gerakan penunjuk yang dihasilkan oleh satu inci pergerakan mouse.' },
        { term: 'CPI', definition: 'Hitungan per inci, istilah berorientasi sensor yang sering kali lebih akurat secara teknis untuk mouse.' },
        { term: 'Akselerasi', definition: 'Pengaturan atau kurva yang mengubah keluaran penunjuk tergantung pada kecepatan gerakan.' },
        { term: 'devicePixelRatio', definition: 'Rasio browser antara piksel CSS dan piksel layar fisik, digunakan di sini untuk menormalkan efek zoom dan penskalaan tampilan.' },
        { term: 'Angle snapping', definition: 'Koreksi firmware atau perangkat lunak yang meluruskan gerakan, terkadang berguna untuk menggambar tetapi tidak disukai oleh banyak pemain kompetitif.' },
      ],
    },
    { type: 'title', text: 'Membaca Indikator Akselerasi', level: 3 },
    {
      type: 'paragraph',
      html: 'Indikator akselerasi bukanlah bukti laboratorium kurva sistem operasi. Ini adalah peringatan praktis berdasarkan variasi kecepatan gerakan selama lintasan yang ditangkap. Jika lintasan lambat dan cepat menghasilkan nilai DPI yang sangat berbeda, akselerasi, penghalusan, perilaku permukaan, atau gerakan tangan yang tidak konsisten mungkin terlibat. Pengaturan mentah yang baik seharusnya menghasilkan DPI terukur yang serupa di beberapa lintasan ketika jarak fisiknya sama.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Saat hasil melonjak',
      html: 'Jika satu lintasan menunjukkan 780 DPI dan berikutnya 950 DPI dengan jarak yang sama, jangan langsung menyalahkan mouse. Periksa pengaturan akselerasi, tingkatkan jarak pengujian, jaga jalur mouse tetap horizontal, dan pastikan penunjuk tidak mengenai tepi layar selama lintasan.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa pengujian DPI yang andal',
      items: [
        'Gunakan referensi fisik yang terukur, sebaiknya 100 mm atau lebih panjang.',
        'Gerakkan secara horizontal ke kanan dan berhenti tepat di tanda.',
        'Nonaktifkan akselerasi untuk perbandingan profil mentah.',
        'Lakukan setidaknya tiga lintasan dan bandingkan sebarannya.',
        'Gunakan DPI terukur untuk mencocokkan mouse, bukan hanya label DPI yang diiklankan.',
      ],
    },
    {
      type: 'message',
      title: 'Catatan privasi',
      html: 'Uji akselerasi mouse dan perhitungan DPI ini berjalan secara lokal di browser. Alat ini tidak memerlukan akses driver, nomor seri perangkat, atau log masukan yang diunggah.',
    },
  ],
  ui: {
    badge: 'Lab DPI nyata',
    referenceLabel: 'Referensi',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'Kartu',
    lineStart: 'Mulai',
    holdButton: 'Tahan dan gerakkan sejauh jarak yang dipilih',
    holdHint: 'Gunakan penggaris atau kartu nyata di meja. Jangan berhenti karena bilah terisi.',
    progressLabel: 'Sinyal masukan',
    activeHint: 'Melacak gerakan',
    dpiLabel: 'DPI terukur',
    pixelsLabel: 'Gerakan terkoreksi',
    distanceReadout: 'Jarak fisik',
    ratioLabel: 'Rasio piksel',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'Siap menangkap',
    statusTracking: 'Melacak gerakan...',
    statusDone: 'Pengukuran selesai',
    reset: 'Atur ulang',
    accelerationTitle: 'Sinyal akselerasi',
    accelerationHint: 'Ulangi pada kecepatan lambat dan cepat untuk membandingkan konsistensi.',
    accelerationLow: 'stabil',
    accelerationMedium: 'variabel',
    accelerationHigh: 'penyimpangan tinggi',
    sampleCount: 'Sampel',
  },
};
