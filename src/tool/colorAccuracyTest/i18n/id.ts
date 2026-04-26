import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-akurasi-warna';
const title = 'Tes Akurasi Warna: Spectrum Canvas';
const description =
  'Kalibrasi layar Anda dengan presisi. Uji ruang warna sRGB dan DCI-P3, deteksi pergeseran warna, ukur akurasi dengan metrik Delta E, dan buat laporan kalibrasi profesional.';

const faqData = [
  {
    question: 'Apa itu akurasi warna dan mengapa itu penting?',
    answer:
      'Akurasi warna mengukur seberapa setia layar mereproduksi warna dibandingkan dengan referensi standar. Bagi desainer, fotografer, dan pembuat konten, warna yang akurat sangat penting untuk memastikan karya Anda terlihat konsisten di berbagai perangkat.',
  },
  {
    question: 'Apa perbedaan antara sRGB dan DCI-P3?',
    answer:
      'sRGB adalah ruang warna standar untuk web dan layar konsumen. DCI-P3 adalah gamut warna yang lebih luas yang digunakan dalam bioskop digital dan layar profesional. DCI-P3 mencakup sekitar 25% lebih banyak warna daripada sRGB.',
  },
  {
    question: 'Apa itu Delta E dan bagaimana cara mengukurnya?',
    answer:
      'Delta E (ΔE) adalah pengukuran numerik dari perbedaan warna yang dirasakan oleh mata manusia. Delta E di bawah 1 tidak terlihat, di bawah 2 sangat baik, di bawah 4 dapat diterima, dan di atas 4 menjadi nyata. Pengujian kami menggunakan kalkulasi Delta E CIE 1976.',
  },
  {
    question: 'Bisakah saya menggunakan alat ini untuk mengkalibrasi hardware saya?',
    answer:
      'Alat ini memberikan referensi kalibrasi visual dan pengukuran akurasi. Untuk kalibrasi profesional, Anda harus menggabungkan hasil ini dengan alat kalibrasi hardware (kolorimeter) dan software khusus seperti ColorThink atau Datacolor SpyderCheckr.',
  },
  {
    question: 'Ruang warna apa saja yang diuji?',
    answer:
      'Kami menguji sRGB (standar), DCI-P3 (bioskop), dan akurasi white point melalui iluminan standar D65 (6500K) dan D93 (9300K). Pengujian juga mencakup verifikasi koreksi gamma.',
  },
];

const howToData = [
  {
    name: 'Pilih Gamut Anda',
    text: 'Pilih antara sRGB (standar web/konsumen) atau DCI-P3 (bioskop profesional). Layar Anda akan menyesuaikan palet pengujiannya.',
  },
  {
    name: 'Beri Nama Hardware Anda (Opsional)',
    text: 'Masukkan nama deskriptif untuk monitor atau perangkat Anda (misalnya, "MacBook Pro 16 M1"). Ini mempersonalisasi laporan Anda.',
  },
  {
    name: 'Masuk ke Mode Layar Penuh',
    text: 'Tekan F11 atau tombol layar penuh untuk menghilangkan UI browser dan memastikan area tampilan maksimal untuk pengujian yang akurat.',
  },
  {
    name: 'Selesaikan Tes Warna',
    text: 'Lanjutkan melalui Kemurnian Spektral (warna solid), Dinamika Gradien (transisi halus), Deteksi Black Crush (detail bayangan), dan Kalibrasi White Point.',
  },
  {
    name: 'Tinjau Hasil & Ekspor',
    text: 'Buat laporan visual dengan visualisasi Gamut 3D, metrik Delta E, dan rekomendasi kalibrasi. Ekspor sebagai PDF untuk pengarsipan.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
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
      text: 'Tes Akurasi Warna Profesional: Kalibrasi Layar Anda dengan Presisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas adalah alat pengujian akurasi warna tingkat profesional yang dirancang untuk siapa saja yang bergantung pada pekerjaan kritis warna. Baik Anda seorang fotografer, desainer, pembuat konten, atau penggemar hardware, alat ini membantu Anda <strong>mendiagnosis pergeseran warna</strong>, <strong>mengukur akurasi layar</strong>, dan <strong>membuat laporan kalibrasi</strong>.',
    },
    {
      type: 'title',
      text: 'Mengapa Akurasi Warna Itu Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perbedaan satu poin persentase saja dalam reproduksi warna dapat berarti perbedaan antara momen "wow" dan reaksi "itu terlihat aneh". Layar profesional memberikan akurasi dalam <strong>Delta E &lt; 2</strong>. Layar konsumen sering kali bergeser ke Delta E 4-6+, yang menyebabkan:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Fotografi yang terlihat cerah di monitor Anda tetapi kusam saat dicetak</li><li>Edit video yang tidak sesuai dengan ekspektasi klien</li><li>Mockup desain web yang tidak sesuai dengan spesifikasi brand</li><li>Proyek hardware di mana indikator warna disalahartikan</li></ul>',
    },
    {
      type: 'title',
      text: 'Memahami Ruang Warna: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Ruang Warna Standar)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Ditetapkan oleh Microsoft dan HP pada tahun 1996, sRGB adalah <strong>standar universal untuk elektronik konsumen</strong> dan web. Ruang warna ini menggunakan gamut warna segitiga yang ditentukan oleh tiga warna primer (Merah: 0.6400x 0.3300, Hijau: 0.3000 0.6000, Biru: 0.1500 0.0600).',
    },
    {
      type: 'paragraph',
      html: '<strong>Karakteristik:</strong><ul><li>Mencakup ~35% dari spektrum warna yang terlihat</li><li>Dioptimalkan untuk kondisi pencahayaan sekitar yang umum</li><li>Gamma: 2.2 (cocok dengan sebagian besar layar konsumen)</li><li>Cocok untuk: web, media sosial, foto konsumen</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Gamut Bioskop Digital)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Dikembangkan oleh konsorsium Digital Cinema Initiatives, DCI-P3 adalah <strong>ruang warna tingkat bioskop</strong> yang dirancang untuk proyeksi teater dan layar profesional. Ruang warna ini mencakup ~25% lebih banyak warna daripada sRGB.',
    },
    {
      type: 'paragraph',
      html: '<strong>Karakteristik:</strong><ul><li>Mencakup ~53% dari spektrum warna yang terlihat</li><li>Dioptimalkan untuk lingkungan bioskop yang gelap</li><li>Gamma: 2.6 (dikoreksi secara gamma untuk kontras tinggi)</li><li>Cocok untuk: pembuatan film, fotografi profesional, konten HDR</li></ul>',
    },
    {
      type: 'title',
      text: 'Apa itu Delta E? Menguantifikasi Perbedaan Warna',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE) adalah <strong>metrik perbedaan warna yang dirasakan manusia</strong> dalam ruang warna CIE LAB. Metrik ini memberi tahu Anda seberapa dekat output layar Anda dengan warna referensi standar.',
    },
    {
      type: 'paragraph',
      html: '<strong>Skala Delta E (CIE 1976):</strong><ul><li>0–1: Tidak terlihat oleh mata manusia</li><li>1–2: Nyaris tidak terlihat</li><li>2–4: Terlihat tetapi dapat diterima untuk penggunaan umum</li><li>4–6: Pergeseran warna yang nyata</li><li>&gt;6: Perbedaan yang sangat jelas</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Layar profesional dikalibrasi untuk mempertahankan <strong>Delta E &lt; 2</strong> di seluruh gamut yang terlihat. Layar konsumen biasanya mencapai Delta E 3-5.',
    },
    {
      type: 'title',
      text: 'Suite Tes Spectrum Canvas',
      level: 3,
    },
    {
      type: 'title',
      text: 'Tes Kemurnian Spektral',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Menampilkan warna primer dan sekunder murni (Merah, Hijau, Biru, Sian, Magenta, Kuning) dan mengukur bagaimana monitor Anda mereproduksinya. Animasi "banjir" warna mengungkapkan reproduksi warna yang konsisten di seluruh layar.',
    },
    {
      type: 'title',
      text: 'Dinamika Gradien',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Gradien halus yang bertransisi melalui seluruh ruang warna. Perhatikan <strong>artefak banding</strong> (langkah-langkah yang terlihat alih-alih transisi halus), yang menunjukkan kedalaman bit warna yang tidak memadai atau koreksi gamma yang buruk.',
    },
    {
      type: 'title',
      text: 'Deteksi Black Crush (Tes Lubang Hitam)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Latar belakang hitam murni (0,0,0) dengan nuansa nyaris hitam yang hampir tidak terlihat. Jika detail bayangan "hancur" bersama-sama, monitor Anda kehilangan informasi dalam nada gelap—umum pada layar ponsel dan panel murah.',
    },
    {
      type: 'title',
      text: 'Kalibrasi White Point',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Menguji suhu warna terkorelasi yang berbeda (D65 pada 6500K = siang hari, D93 pada 9300K = studio), mengungkapkan pergeseran suhu warna atau ketidakstabilan termal apa pun.',
    },
    {
      type: 'title',
      text: 'Menafsirkan Hasil Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas menghasilkan laporan visual yang indah dan ramah cetak dengan:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Visualisasi Gamut 3D:</strong> Plot 3D berputar yang menunjukkan volume warna aktual layar Anda versus standar referensi</li><li><strong>Heatmap Delta E:</strong> Di bagian spektrum mana layar Anda bergeser</li><li><strong>Kurva Gamma:</strong> Linearitas kecerahan di seluruh rentang 0–255</li><li><strong>Skor Kalibrasi:</strong> Sebuah "Spectrum Grade" tunggal (Elite, Cinematic, Studio, Standard) berdasarkan akurasi keseluruhan</li></ul>',
    },
    {
      type: 'title',
      text: 'Lanjutan: Tips Kalibrasi Manual',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika hasil Anda menunjukkan pergeseran, cobalah penyesuaian ini di menu OSD (On-Screen Display) monitor Anda:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Suhu Warna:</strong> Geser ke arah "Warmer" jika warna terlalu dingin/biru; ke arah "Cooler" jika terlalu hangat/kuning</li><li><strong>Kontras:</strong> Tingkatkan jika warna hitam tampak pudar; kurangi jika detail terpotong</li><li><strong>Kecerahan:</strong> Sesuaikan untuk mencapai abu-abu netral tanpa rona warna pada kecerahan 50%</li><li><strong>Saturasi:</strong> Jika warna terlalu jenuh, kurangi; jika kusam, tingkatkan</li></ul>',
    },
    {
      type: 'title',
      text: 'Batasan dan Praktik Terbaik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Alat ini memberikan referensi visual dan statistik</strong>. Untuk pekerjaan profesional yang membutuhkan kalibrasi bersertifikat, gunakan pengukur warna hardware (spektrofotometer atau kolorimeter) dan software kalibrasi khusus.',
    },
    {
      type: 'paragraph',
      html: '<strong>Praktik Terbaik:</strong><ul><li>Biarkan monitor Anda memanas selama 30 menit sebelum pengujian (pergeseran termal menjadi stabil)</li><li>Uji dalam kondisi pencahayaan sekitar yang konsisten</li><li>Hindari silau; gunakan tudung monitor jika memungkinkan</li><li>Ulangi pengujian setiap minggu untuk melacak pergeseran dari waktu ke waktu</li><li>Simpan arsip digital laporan untuk perbandingan di masa mendatang</li></ul>',
    },
  ],
  ui: {
    badge: 'Kalibrasi Layar',
    title: 'Spectrum Canvas: Tes Akurasi Warna',
    description:
      'Kalibrasi layar profesional bertemu dengan estetika sinematik. Uji sRGB dan DCI-P3, ukur akurasi Delta E, deteksi pergeseran warna, dan buat laporan visual yang mengubah data menjadi wawasan.',
    btnStartCalibration: 'Mulai Kalibrasi',
    btnFullscreen: 'Layar Penuh',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Mode Layar Penuh',
    kbdReset: 'R',
    kbdResetLabel: 'Atur Ulang Tes',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Keluar',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Ruang Warna',
    hardwareName: 'Nama Hardware/Monitor',
    hardwareNamePlaceholder: 'mis., MacBook Pro 16" M1 Max',
    purityTest: 'Kemurnian Spektral',
    gradientTest: 'Dinamika Gradien',
    blackHoleTest: 'Deteksi Black Crush',
    whitePointTest: 'Kalibrasi White Point',
    colorCheckpoint: 'Color Checkpoint',
    generateReport: 'Buat Laporan',
    viewResults: 'Lihat Hasil',
    btnExit: 'Keluar (ESC)',
    compareSideBySide: 'Bandingkan Berdampingan',
  },
};
