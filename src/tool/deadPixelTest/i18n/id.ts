import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';

const slug = 'tes-pixel-mati-perbaikan-layar';
const title = 'Tes Pixel Mati dan Alat Perbaikan Layar';
const description =
  'Periksa apakah monitor Anda memiliki pixel mati atau macet dan perbaiki secara online dengan alat strobe frekuensi tinggi kami.';

const faqData = [
  {
    question: 'Apa perbedaan antara pixel mati dan pixel macet?',
    answer:
      'Pixel mati (dead pixel) secara permanen berwarna hitam karena tidak menerima daya (transistor terbakar). Pixel macet (stuck pixel) biasanya berwarna cerah (merah, hijau, atau biru) dan dapat diaktifkan kembali dengan stimulasi strobe cepat.',
  },
  {
    question: 'Bagaimana cara kerja alat perbaikan (Strobe)?',
    answer:
      'Alat kami menghasilkan kedipan cepat warna-warna primer dengan kecepatan tinggi. Ini dapat memaksa kristal cair pixel yang macet untuk terlepas. Disarankan untuk membiarkannya bekerja selama 10 hingga 30 menit.',
  },
  {
    question: 'Bisakah pixel mati muncul karena suhu?',
    answer:
      'Ya, suhu ekstrem dapat memengaruhi panel. Namun, penyebab paling umum adalah cacat manufaktur atau benturan fisik yang merusak kontak listrik kristal cair.',
  },
  {
    question: 'Berapa banyak pixel mati yang tercakup dalam garansi?',
    answer:
      'Ini tergantung pada produsen dan standar ISO 9241-307. Umumnya, merek menganggap hingga 2 atau 3 pixel terang sebagai "normal" pada panel Kelas 1, sementara panel Kelas 0 tidak memperbolehkan cacat sama sekali.',
  },
];

const howToData = [
  {
    name: 'Bersihkan layar',
    text: 'Sebelum memulai, bersihkan monitor Anda secara menyeluruh dengan kain mikrofiber untuk menghindari kekeliruan antara debu dengan pixel mati.',
  },
  {
    name: 'Masuk ke mode layar penuh',
    text: 'Tekan F11 atau tombol layar penuh agar antarmuka browser tidak mengganggu deteksi cacat.',
  },
  {
    name: 'Ganti warna',
    text: 'Beralih di antara latar belakang hitam, putih, merah, hijau, dan biru. Cari titik apa pun yang tidak sesuai dengan warna latar belakang.',
  },
  {
    name: 'Mulai siklus perbaikan',
    text: 'Jika Anda menemukan titik terang, posisikan alat Strobe di atasnya dan biarkan berjalan setidaknya selama 20 menit.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<PixelesPantallaUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Standar',
  bibliography: [
    {
      name: 'ISO/IEC 9241-307: Ergonomi tampilan dan peralatan terkait',
      url: 'https://www.iso.org/standard/72025.html',
    },
    {
      name: 'Kebijakan Pixel Mati - Standar Umum (VESA)',
      url: 'https://www.vesa.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Panduan Lengkap: Pixel Mati, Pixel Macet, dan Cara Memperbaikinya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Melihat titik aneh di layar Anda yang tidak berubah warna? Itu bisa jadi merupakan cacat panel. Alat ini membantu Anda mendiagnosis apakah monitor Anda memiliki <strong>pixel mati</strong> atau <strong>pixel macet</strong> dan menawarkan solusi untuk mencoba memperbaikinya.',
    },
    {
      type: 'title',
      text: 'Apa Perbedaan Antara Pixel Mati dan Pixel Macet?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ada dua jenis utama cacat pixel pada monitor modern, masing-masing dengan karakteristik dan solusi yang berbeda.',
    },
    {
      type: 'title',
      text: 'Pixel Macet (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah cacat yang paling umum. Terjadi ketika satu atau lebih subpixel (Merah, Hijau, atau Biru) macet dalam kondisi "menyala". <strong>Gejala:</strong> Anda akan melihat titik berwarna terang yang permanen (merah, hijau, biru, atau putih) pada latar belakang gelap. <strong>Sering kali dapat diperbaiki.</strong> Kristal cair masih merespons; ia hanya "terkunci" pada polarisasi tertentu. Alat perbaikan Strobe kami mencoba membukanya dengan stimulasi tegangan cepat.',
    },
    {
      type: 'title',
      text: 'Pixel Mati (Dead Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Terjadi ketika transistor yang mengontrol pixel gagal total dan tidak membiarkan cahaya lewat. <strong>Gejala:</strong> Titik hitam permanen, terutama terlihat pada latar belakang terang atau putih. <strong>Sulit diperbaiki (biasanya permanen).</strong> Kerusakan terjadi pada tingkat hardware (sirkuit terbakar). Tidak ada stimulasi listrik yang dapat memperbaikinya. Biasanya memerlukan penggantian panel.',
    },
    {
      type: 'title',
      text: 'Bagaimana Cara Kerja Alat Perbaikan Strobe?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fungsi "Perbaiki Pixel" menggunakan teknik yang dikenal sebagai <strong>Pixel Exercising</strong>. Alat ini menghasilkan pola noise acak frekuensi tinggi (kedipan warna cepat) di atas area yang terkena dampak.',
    },
    {
      type: 'title',
      text: 'Mekanisme: Kristal Cair dan Tegangan',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Monitor LCD menggunakan kristal cair yang mengubah transparansinya berdasarkan tegangan yang diberikan. Ketika subpixel macet, itu berarti kristal tersebut "membeku" dalam polarisasi tertentu. Perubahan tegangan yang cepat (dicapai melalui pergeseran warna primer yang cepat) mencoba untuk "melatih" kristal dan memaksanya untuk berubah status.',
    },
    {
      type: 'title',
      text: 'Rekomendasi Penggunaan',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Disarankan untuk menjalankan alat ini di atas area yang terkena dampak setidaknya selama <strong>10 hingga 20 menit</strong>.</li><li>Jika tidak berhasil, coba sesi yang lebih lama (hingga 1 jam) atau berikan tekanan yang sangat ringan dengan kain mikrofiber di atas pixel tersebut (dengan risiko Anda sendiri).</li><li>Dalam beberapa kasus, menghangatkan monitor secara lembut dengan pengering rambut (pada suhu rendah) sebelum mengaktifkan Strobe dapat meningkatkan hasil.',
    },
    {
      type: 'title',
      text: 'Peringatan Epilepsi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mode perbaikan menggunakan lampu yang berkedip cepat dengan kecepatan tinggi. Jika Anda memiliki epilepsi fotosensitif atau sensitivitas cahaya, <strong>JANGAN gunakan fungsi ini</strong>. Paparan terhadap pola berkedip dapat memicu kejang pada individu yang rentan.',
    },
    {
      type: 'title',
      text: 'Kapan Harus Mencari Garansi atau Penggantian',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika Anda mengonfirmasi pixel yang rusak (terutama beberapa pixel mati), Anda dapat menggunakan tes kami sebagai bukti untuk klaim garansi. Banyak produsen menganggap lebih dari 2-3 pixel terang atau 1 pixel mati sebagai cacat manufaktur yang memenuhi syarat untuk penggantian berdasarkan standar ISO 9241-307 (Kelas 1).',
    },
    {
      type: 'title',
      text: 'Sejarah Standar Pixel Mati',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Selama beberapa dekade, monitor LCD telah mengalami cacat pixel karena kompleksitas manufaktur. Panel Full HD (1920×1080) berisi 6.220.800 pixel (18.662.400 subpixel). Probabilitas statistik cacat tidak dapat dihindari. Itulah sebabnya standar seperti ISO 9241-307 ada untuk menentukan "pixel mati yang dapat diterima" berdasarkan kelas monitor.',
    },
  ],
  ui: {
    badge: 'Utilitas Layar',
    title: 'Pixel mati atau macet?',
    description:
      'Periksa kondisi monitor Anda dengan warna solid murni dan perbaiki pixel yang macet dengan alat stimulasi frekuensi tinggi kami.',
    btnStartTest: 'Mulai Tes',
    btnStartFix: 'Perbaiki Pixel',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Layar Penuh',
    kbdSpace: 'Spasi',
    kbdSpaceLabel: 'Ganti Warna',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Keluar',
    colorBlack: 'Hitam',
    colorWhite: 'Putih',
    colorRed: 'Merah',
    colorGreen: 'Hijau',
    colorBlue: 'Biru',
    btnToggleFixer: 'Buka Alat Perbaikan (Strobe)',
    btnExit: 'Keluar (ESC)',
  },
};
