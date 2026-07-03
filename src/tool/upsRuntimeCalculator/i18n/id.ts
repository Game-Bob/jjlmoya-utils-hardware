import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-durasi-ups';
const title = 'Kalkulator Durasi UPS';
const description = 'Perkirakan durasi baterai UPS, total beban terlindungi, watt-jam yang dapat digunakan, dan ukuran VA yang direkomendasikan untuk PC, monitor, router, NAS, dan perangkat lab rumahan.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung durasi UPS?',
    answer: 'Jumlahkan watt setiap perangkat yang terhubung ke UPS, kalikan watt-jam baterai UPS dengan efisiensi inverter, kurangi cadangan yang ingin dipertahankan, lalu bagi watt-jam yang dapat digunakan dengan watt beban. Hasil dalam jam dapat dikalikan 60 untuk mendapatkan menit.',
  },
  {
    question: 'Mengapa durasi UPS sebenarnya berbeda dari perkiraan?',
    answer: 'Durasi berubah seiring usia baterai, suhu, laju pengosongan, efisiensi inverter, lonjakan beban, dan tegangan pemutusan pabrikan. Perlakukan hasil sebagai estimasi perencanaan, lalu verifikasi dengan uji pematian terkendali.',
  },
  {
    question: 'Apakah saya harus memilih UPS berdasarkan watt atau VA?',
    answer: 'Periksa keduanya. Watt menunjukkan daya nyata yang dapat disalurkan UPS, sedangkan VA mencakup faktor daya. UPS harus melampaui beban Anda dalam watt dan memiliki ruang kepala VA yang cukup untuk peralatan yang terhubung.',
  },
  {
    question: 'Berapa banyak ruang kepala UPS yang harus saya pertahankan?',
    answer: 'Target praktisnya adalah menjaga beban normal di bawah sekitar 70-80% dari peringkat watt UPS. Ini menyisakan ruang untuk lonjakan awal, penuaan baterai, dan perangkat masa depan.',
  },
  {
    question: 'Bisakah saya menyambungkan printer atau pemanas ke UPS?',
    answer: 'Hindari printer laser, pemanas, dan beban lonjakan tinggi lainnya kecuali UPS secara eksplisit dinilai untuk itu. Mereka dapat membebani inverter dan secara drastis mengurangi durasi.',
  },
];

const howToData = [
  {
    name: 'Daftarkan perangkat yang dilindungi',
    text: 'Masukkan perangkat yang harus tetap menyala selama pemadaman, seperti komputer, monitor, router, modem, NAS, dan switch jaringan.',
  },
  {
    name: 'Masukkan watt realistis',
    text: 'Gunakan daya terukur dari stopkontak bila memungkinkan. Jika hanya memiliki peringkat catu daya, kurangi ke beban operasi yang diharapkan alih-alih menggunakan nilai label maksimum.',
  },
  {
    name: 'Atur kapasitas baterai dan asumsi',
    text: 'Masukkan watt-jam baterai UPS, efisiensi inverter, faktor daya, dan persentase cadangan yang ingin dipertahankan untuk pematian yang aman.',
  },
  {
    name: 'Baca durasi dan rekomendasi VA',
    text: 'Gunakan estimasi menit dan VA yang direkomendasikan sebagai panduan pembelian atau konfigurasi, lalu validasi pengaturan dengan latihan pemadaman yang aman.',
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

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
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
      text: 'Kalkulator Durasi UPS: Perkirakan Waktu Cadangan Baterai',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Perkiraan durasi UPS menjawab dua pertanyaan praktis: berapa lama perangkat keras Anda dapat tetap menyala selama pemadaman listrik, dan apakah UPS cukup besar untuk beban yang terhubung. Kalkulator ini menggabungkan watt perangkat, watt-jam baterai, efisiensi inverter, faktor daya, dan cadangan pematian sehingga hasilnya lebih mendekati perencanaan nyata daripada sekadar pembagian kapasitas baterai.',
    },
    {
      type: 'title',
      text: 'Rumus Durasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perkiraan durasi dalam jam adalah <strong>watt-jam baterai yang dapat digunakan dibagi total beban W</strong>. Watt-jam yang dapat digunakan bukanlah kapasitas baterai yang tercetak: harus disesuaikan dengan kerugian inverter dan cadangan yang ingin dipertahankan untuk pematian yang aman. Misalnya, baterai 432Wh dengan efisiensi 86% dan cadangan 20% menyediakan sekitar 297Wh energi yang dapat digunakan.',
    },
    {
      type: 'table',
      headers: ['Input', 'Mengapa penting', 'Panduan praktis'],
      rows: [
        ['Watt beban', 'Langsung mengontrol durasi', 'Ukur dengan meteran dinding bila memungkinkan, terutama untuk PC gaming dan sistem NAS.'],
        ['Wh baterai', 'Menentukan cadangan energi', 'Gunakan data baterai pabrikan atau tegangan nominal dikalikan ampere-jam.'],
        ['Efisiensi', 'Memperhitungkan kerugian inverter', '80-90% adalah rentang perencanaan yang wajar untuk banyak UPS konsumen.'],
        ['Faktor daya', 'Mengonversi watt ke VA', 'Gunakan spesifikasi UPS jika diketahui; 0,6-0,8 umum untuk unit anggaran dan kelas menengah.'],
        ['Cadangan', 'Menjaga margin pematian', '10-25% masuk akal untuk pematian PC atau server yang terkendali.'],
      ],
    },
    {
      type: 'title',
      text: 'Berapa Banyak Durasi yang Anda Butuhkan?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 menit: cukup untuk melewati kedipan singkat atau mematikan desktop dengan aman.',
        '10-20 menit: berguna untuk router, modem, NAS, dan node lab rumahan kecil.',
        '30+ menit: lebih baik untuk kontinuitas jaringan, kerja jarak jauh, dan lokasi dengan pemadaman sering.',
        'Beberapa jam: biasanya memerlukan sistem baterai yang lebih besar, bukan hanya UPS desktop.',
      ],
    },
    {
      type: 'title',
      text: 'Watt vs VA Saat Memilih UPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nama produk UPS sering mengiklankan VA, tetapi peringkat watt adalah batasan yang lebih keras untuk peralatan nyata. UPS 900VA mungkin hanya mendukung 540W, sementara model 900VA lainnya mungkin mendukung 600W atau lebih. Periksa kedua peringkat dan jaga operasi normal di bawah maksimum untuk menghindari alarm kelebihan beban, masa pakai baterai yang lebih pendek, dan kegagalan transfer saat pemadaman.',
    },
    {
      type: 'title',
      text: 'Beban yang Mendistorsi Perkiraan Durasi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'PC gaming dapat berubah dari konsumsi idle rendah ke konsumsi GPU tinggi dalam hitungan detik.',
        'Monitor sangat bervariasi menurut kecerahan, mode HDR, dan ukuran panel.',
        'Perangkat NAS menarik daya ekstra selama putaran disk dan pembangunan ulang.',
        'Printer laser, pemanas, pompa, dan kompresor adalah beban UPS yang buruk kecuali didukung secara khusus.',
        'Baterai lama dapat memberikan durasi yang jauh lebih rendah dari yang disarankan kapasitas aslinya.',
      ],
    },
    {
      type: 'title',
      text: 'Daftar Periksa Validasi Aman',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Isi penuh UPS sebelum pengujian.',
        'Simpan pekerjaan yang terbuka dan hindari pengujian selama penulisan kritis atau pembaruan firmware.',
        'Cabut daya dinding, bukan peralatan, dan perhatikan persentase beban UPS serta estimasi baterai.',
        'Konfirmasi bahwa PC, NAS, atau server Anda menerima sinyal pematian sebelum baterai habis.',
        'Ulangi pengujian setiap beberapa bulan karena baterai timbal-asam UPS cepat menua.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Beban terlindungi',
    addDevice: 'Tambah perangkat',
    deviceName: 'Perangkat',
    watts: 'Watt',
    remove: 'Hapus perangkat',
    batteryWh: 'Kapasitas baterai (Wh)',
    efficiency: 'Efisiensi inverter',
    powerFactor: 'Faktor daya',
    reserve: 'Cadangan pematian',
    totalLoad: 'Beban total',
    runtime: 'Perkiraan durasi',
    recommendedUps: 'Ukuran yang disarankan',
    usableEnergy: 'Energi yang dapat digunakan',
    minutes: 'mnt',
    hours: 'jam',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'Asumsi UPS',
    presetDesktop: 'PC Desktop',
    presetMonitor: 'Monitor 27 inci',
    presetRouter: 'Router dan modem',
    presetNas: 'NAS dua ruang',
    percentUnit: '%',
    bandLight: 'jendela cadangan yang nyaman dengan UPS yang direkomendasikan sekitar',
    bandBalanced: 'jendela cadangan yang seimbang dengan UPS yang direkomendasikan sekitar',
    bandHeavy: 'jendela cadangan pendek; pertimbangkan baterai yang lebih besar atau kurangi beban sekitar',
    summaryPrefix: 'Pengaturan ini memiliki',
  },
};
