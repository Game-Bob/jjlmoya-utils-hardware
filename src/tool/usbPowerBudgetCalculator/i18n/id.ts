import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-anggaran-daya-usb';
const title = 'Kalkulator Anggaran Daya USB';
const description = 'Periksa apakah port USB, pengisi daya, hub, kabel, atau profil USB-C PD dapat memberi daya perangkat Anda dengan aman setelah memperhitungkan ruang cadangan dan penurunan tegangan kabel.';

const faqData = [
  {
    question: 'Bagaimana cara mengetahui apakah port USB dapat memberi daya perangkat saya?',
    answer: 'Bandingkan total watt perangkat dengan watt sumber USB, sisakan ruang cadangan dan perkirakan penurunan tegangan kabel. Pengaturan dapat gagal bahkan ketika watt nominal terlihat tinggi jika kabel panjang, tipis, atau membawa arus tinggi pada 5 volt.',
  },
  {
    question: 'Mengapa panjang kabel penting untuk daya USB?',
    answer: 'Arus yang mengalir melalui tembaga menciptakan penurunan tegangan. Kabel panjang dan konduktor tipis memiliki lebih banyak resistansi, sehingga perangkat mungkin menerima lebih sedikit tegangan dari yang disediakan pengisi daya. Ini sangat penting untuk papan Raspberry Pi, hard drive, strip LED, dock, dan hub bertenaga bus.',
  },
  {
    question: 'Ruang cadangan apa yang harus saya gunakan?',
    answer: 'Gunakan setidaknya 20 persen untuk elektronik normal, 30 persen untuk motor, drive, radio, atau papan dengan beban lonjakan, dan lebih banyak lagi jika kualitas adaptor tidak diketahui atau perangkat harus berjalan terus-menerus.',
  },
  {
    question: 'Bisakah ini menggantikan pengujian negosiasi USB-C PD?',
    answer: 'Tidak. Kalkulator memeriksa anggaran listrik. Ini tidak memverifikasi apakah pengisi daya, e-marker kabel, perangkat, atau hub benar-benar menegosiasikan profil Power Delivery tertentu.',
  },
];

const howToData = [
  { name: 'Pilih profil sumber', text: 'Pilih profil USB atau USB-C PD umum, atau edit tegangan dan arus secara manual.' },
  { name: 'Jelaskan kabel', text: 'Masukkan panjang kabel dan ukuran konduktor. Kabel tipis dengan AWG tinggi menyebabkan lebih banyak penurunan tegangan.' },
  { name: 'Tambahkan beban', text: 'Masukkan satu beban perangkat dalam watt dan jumlah perangkat yang berbagi sumber yang sama.' },
  { name: 'Baca status', text: 'Gunakan status, penurunan kabel, tegangan akhir, utilisasi, dan ruang cadangan untuk memutuskan apakah pengaturan aman.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Daya USB adalah anggaran, bukan label', level: 2 },
    {
      type: 'paragraph',
      html: 'Pengisi daya USB bertanda 15 W, 45 W, atau 100 W menjelaskan apa yang dapat ditawarkan sumber dalam kondisi yang tepat. Perangkat Anda hanya melihat hasilnya setelah negosiasi protokol, batas arus, resistansi kabel, kualitas konektor, kerugian hub, dan lonjakan beban. Kalkulator ini berfokus pada pertanyaan listrik praktis: setelah penurunan kabel dan margin cadangan, apakah masih ada cukup daya untuk perangkat keras yang ingin Anda jalankan?',
    },
    {
      type: 'stats',
      items: [
        { label: 'Arus default USB 2.0', value: '0,5 A' },
        { label: 'Maksimum default USB-C pada 5 V', value: '3 A' },
        { label: 'Cadangan yang direkomendasikan', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Cara menafsirkan hasil', level: 3 },
    {
      type: 'table',
      headers: ['Status', 'Arti', 'Langkah selanjutnya terbaik'],
      rows: [
        ['Aman', 'Beban sesuai dengan kapasitas sumber setelah cadangan yang dipilih dan tegangan perangkat yang diperkirakan tetap sehat.', 'Gunakan pengaturan, tetapi perhatikan panas jika adaptor kecil atau tertutup.'],
        ['Sempit', 'Beban mendekati batas yang dicadangkan atau penurunan kabel mulai berarti.', 'Pendekkan kabel, pilih konduktor yang lebih tebal, kurangi beban, atau pindah ke profil daya yang lebih tinggi.'],
        ['Melebihi anggaran', 'Beban melebihi daya sumber yang dapat digunakan atau tegangan di sisi perangkat kemungkinan terlalu rendah.', 'Gunakan pengisi daya yang lebih kuat, hub bertenaga, kabel yang lebih pendek, atau perangkat yang menegosiasikan tegangan USB-C PD yang lebih tinggi.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ketika watt cukup tetapi perangkat masih mereset',
      html: '<p>Arus awal bisa jauh lebih tinggi daripada watt rata-rata yang tercetak pada label perangkat. Catu daya 5 V kehilangan tegangan lebih cepat daripada profil PD 20 V untuk watt yang sama karena harus membawa lebih banyak arus. Banyak kabel murah menggunakan konduktor daya tipis bahkan ketika jaket luar terlihat tebal, dan hub bertenaga bus berbagi satu anggaran hulu di setiap perangkat hilir.</p>',
    },
    { type: 'title', text: 'Penurunan tegangan kabel secara sederhana', level: 3 },
    {
      type: 'paragraph',
      html: 'Penurunan tegangan adalah kerugian yang terjadi ketika arus mengalir melalui resistansi kabel. Daya USB memiliki dua konduktor di jalur daya, jadi kalkulator menggunakan panjang pulang-pergi. Kabel satu meter secara elektrik adalah dua meter tembaga untuk loop daya. Nomor AWG yang lebih rendah lebih tebal dan biasanya lebih baik untuk beban arus tinggi.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Kabel pendek tebal', description: 'Terbaik untuk papan Raspberry Pi, enclosure SSD, kit pengembangan, dan dock USB-C yang menarik arus lonjakan.' },
        { title: 'Kabel panjang tipis', description: 'Dapat diterima untuk sensor daya rendah atau pengisian lambat, tetapi berisiko untuk drive, beban LED, dan papan komputasi.' },
        { title: 'PD tegangan lebih tinggi', description: 'Mengurangi arus untuk watt yang sama, yang menurunkan kerugian kabel, tetapi hanya jika sumber, kabel, dan perangkat menegosiasikannya.' },
      ],
    },
    {
      type: 'tip',
      title: 'Aturan praktis',
      html: 'Jika kalkulator mengatakan pengaturannya sempit, perlakukan sebagai peringatan lapangan. Kegagalan USB sering muncul sebagai pemutusan acak, penurunan tegangan, pengisian lambat, audio berisik, atau kesalahan penyimpanan sebelum terlihat seperti masalah daya yang jelas.',
    },
    {
      type: 'summary',
      title: 'Untuk apa kalkulator ini paling cocok',
      items: [
        'Merencanakan hub USB, komputer papan tunggal, drive eksternal, papan pengembangan, lampu, kipas, dan pengaturan lab kecil.',
        'Membandingkan profil sumber USB 2.0, USB 3.x, USB-C, dan USB Power Delivery.',
        'Memperkirakan apakah kabel terlalu panjang atau terlalu tipis untuk suatu beban.',
        'Memilih cadangan yang masuk akal sebelum membeli pengisi daya atau hub bertenaga.',
      ],
    },
  ],
  ui: {
    profileLabel: 'Profil sumber USB',
    metricUnits: 'Metrik',
    imperialUnits: 'AS',
    voltageLabel: 'Tegangan sumber (V)',
    currentLabel: 'Arus sumber (A)',
    cableLengthLabel: 'Panjang kabel',
    wireGaugeLabel: 'Ukuran kabel daya',
    deviceLoadLabel: 'Beban per perangkat (W)',
    devicesLabel: 'Perangkat',
    headroomLabel: 'Cadangan (%)',
    sourcePower: 'Daya sumber',
    requiredPower: 'Daya yang diperlukan',
    cableDrop: 'Penurunan kabel',
    deviceVoltage: 'Tegangan perangkat',
    headroom: 'Cadangan',
    utilization: 'Utilisasi',
    safeStatus: 'Anggaran daya terlihat aman',
    tightStatus: 'Anggaran daya sempit',
    overStatus: 'Melebihi anggaran atau risiko penurunan tegangan',
    safeAdvice: 'Beban sesuai dengan cadangan yang dipilih. Gunakan kabel berkualitas dan periksa panas selama pengoperasian lama.',
    tightAdvice: 'Anda mendekati batas. Kurangi panjang kabel, gunakan konduktor yang lebih tebal, turunkan beban, atau pilih profil yang lebih kuat.',
    overAdvice: 'Pengaturan ini kemungkinan akan mengalami penurunan tegangan atau pelambatan. Gunakan hub bertenaga, adaptor yang lebih kuat, atau profil USB-C PD tegangan yang lebih tinggi.',
    busLane: 'Sumber USB',
    loadLane: 'Beban perangkat',
    cableLane: 'penurunan',
    boardEyebrow: 'Jalur daya USB langsung',
    sourceSocket: 'Soket sumber',
    deviceSocket: 'Beban perangkat keras',
    energyFlow: 'aliran energi',
    reservedLabel: 'dapat digunakan setelah cadangan',
  },
};
