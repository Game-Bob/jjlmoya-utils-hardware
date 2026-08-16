import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'uji-latensi-input-lag';

const title = 'Uji Latensi Input Lag dan Sistem';
const description = 'Alat ukur input lag dan latensi sistem secara online dengan sinkronisasi bingkai layar presisi tinggi.';

const faqData = [
  {
    question: 'Apa itu input lag?',
    answer: 'Waktu tunda antara tindakan fisik pengguna dan pembaruan visual pada layar.',
  },
  { question: 'Berapa latensi yang baik untuk bermain?', answer: 'Di bawah 10 ms sangat cepat. 10 sampai 20 ms cepat, 20 sampai 35 ms sedang, dan nilai lebih tinggi mulai terasa.' },
  { question: 'Bagaimana cara mengurangi latensi input?', answer: 'Periksa refresh rate layar, VSync, VRR, dan polling USB. Ubah satu pengaturan lalu ukur ulang.' },
  { question: 'Apakah refresh rate memengaruhi input lag?', answer: 'Ya. Layar 60 Hz membutuhkan 16.67 ms per frame, sedangkan 240 Hz membutuhkan 4.17 ms. Render dan panel juga berpengaruh.' },
  { question: 'Mengapa jitter perlu diperhatikan?', answer: 'Jitter menunjukkan perubahan antar sampel. Nilai yang sedikit lebih tinggi tetapi stabil dapat terasa lebih baik daripada rata-rata rendah dengan lonjakan besar.' },
];

const howToData = [
  {
    name: 'Pilih mode',
    text: 'Pilih Respon Instan, Latensi Keyboard, atau Reaksi Visual.',
  },
  { name: 'Lakukan input', text: 'Klik area tes atau tekan tombol untuk menghasilkan event input.' },
  { name: 'Periksa statistik', text: 'Lihat rata-rata, nilai minimum, maksimum, dan jitter setelah beberapa percobaan.' },
  { name: 'Bandingkan seri baru', text: 'Ulangi pengukuran setelah perubahan dengan kondisi yang sama.' },
  { name: 'Pahami batas tes', text: 'Gunakan hasil untuk membandingkan konfigurasi, bukan sebagai pengukuran optik absolut.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latensi Sistem',
  modeInstant: 'Respon Instan',
  modeKey: 'Latensi Keyboard',
  modeVisual: 'Reaksi Visual',
  targetClickPrompt: 'Klik di sini untuk mengukur latensi input',
  targetKeyPrompt: 'Tekan tombol apa saja untuk latensi keyboard',
  targetWaitPrompt: 'Tunggu latar hijau...',
  targetNowPrompt: 'KLIK SEKARANG!',
  labelAvgLatency: 'Rata-rata Latensi',
  labelMinLatency: 'Latensi Minimum',
  labelMaxLatency: 'Latensi Maksimum',
  labelJitter: 'Jitter (Fluktuasi)',
  labelFps: 'FPS Saat Ini',
  labelFrameTime: 'Waktu Bingkai',
  labelSamples: 'Sampel',
  labelGrade: 'Penilaian',
  gradeUltraFast: 'Sangat Cepat (<10ms)',
  gradeFast: 'Cepat (10-20ms)',
  gradeModerate: 'Sedang (20-35ms)',
  gradeHigh: 'Tinggi (>35ms)',
  btnReset: 'Reset',
  btnCopyReport: 'Salin Laporan',
  reportCopied: 'Laporan Disalin!',
  historyTitle: 'Pengukuran Terbaru',
  pipelineTitle: 'Analisis Pipa Perangkat Keras',
  distributionTitle: 'Distribusi Frekuensi',
  sampleCol: 'Sampel',
  typeCol: 'Tipe Input',
  latencyCol: 'Latensi Terukur',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Pengukuran Input Lag dan Latensi Layar',
    },
    {
      type: 'paragraph',
      html: 'Ukur kecepatan respon sistem dan layar komputer Anda secara real-time.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Target esports', trend: 'Patokan kompetitif' },
      { value: '1000 Hz', label: 'Polling USB umum', trend: 'Interval input 1 ms' },
      { value: '240 Hz', label: 'Monitor refresh tinggi', trend: 'Interval frame 4.16 ms' },
      { value: '16.6 ms', label: 'Interval 60 Hz', trend: 'Dasar per frame' },
    ], columns: 4 },
    { type: 'card', title: 'Cara pengukuran latensi di browser', html: 'Tes ini membandingkan event pointerdown dan keydown dengan pembaruan requestAnimationFrame. Hasilnya memperkirakan jeda lokal antara input terdeteksi dan pembaruan tampilan.' },
    { type: 'title', text: 'Cara sinyal latensi melewati sistem' },
    { type: 'paragraph', html: 'Latensi total terkumpul sejak sakelar perangkat ditekan sampai piksel terlihat. Memisahkan setiap tahap membantu menemukan apakah penundaan berasal dari perangkat, sistem operasi, proses render, atau layar.' },
    { type: 'table', headers: ['Komponen', 'Rentang umum', 'Hambatan utama', 'Langkah perbaikan'], rows: [
      ['Sakelar perangkat', '0.2 sampai 5.0 ms', 'Pantulan mekanis', 'Kurangi waktu debounce'],
      ['Polling USB', '0.125 sampai 8.0 ms', 'Frekuensi rendah', 'Naikkan frekuensi bila tersedia'],
      ['Antrean sistem', '0.5 sampai 3.0 ms', 'Tugas latar belakang', 'Tutup proses yang tidak diperlukan'],
      ['Mesin grafis', '4.0 sampai 20.0 ms', 'Frame dibatasi CPU', 'Kurangi beban render'],
      ['Antrean GPU', '8.0 sampai 33.0 ms', 'VSync dan banyak buffer', 'Bandingkan VSync dengan VRR'],
      ['Pemrosesan layar', '1.0 sampai 15.0 ms', 'Penskalaan gambar', 'Aktifkan mode game'],
    ] },
    { type: 'tip', title: 'Mengurangi antrean render GPU', html: 'GPU yang penuh dapat menyiapkan beberapa frame lebih awal. Batas frame sedikit di bawah kemampuan maksimum dan percobaan dengan Reflex atau Anti Lag dapat mengurangi waktu tunggu.' },
    { type: 'title', text: 'Membandingkan perangkat input' },
    { type: 'paragraph', html: 'Mouse, keyboard, dan layar sentuh memiliki karakter latensi berbeda karena koneksi, rangkaian elektronik, dan frekuensi pemindaian. Gunakan layar serta pengaturan yang sama saat membandingkan perangkat.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Mouse gaming', description: 'Koneksi kabel atau nirkabel dengan polling tinggi.', highlight: '0.5 sampai 2 ms', points: ['Polling 1000 Hz atau lebih', 'Sakelar optik dengan pantulan lebih kecil', 'Sensor dengan pemrosesan cepat'] },
      { title: 'Keyboard mekanis', description: 'Matriks tombol dengan kontrol debounce.', highlight: '1 sampai 10 ms', points: ['Sakelar magnetik', 'Pemindaian matriks yang dapat diatur', 'Jarak aktuasi yang dapat dikonfigurasi'] },
      { title: 'Layar sentuh', description: 'Digitizer kapasitif di atas panel tampilan.', highlight: '15 sampai 45 ms', points: ['Frekuensi sampling sentuh', 'Pemrosesan pengendali layar', 'Filter untuk sentuhan tidak sengaja'] },
    ] },
    { type: 'title', text: 'Memahami pengaruh refresh rate layar' },
    { type: 'paragraph', html: 'Refresh rate menentukan jarak minimum antara dua pembaruan gambar. Layar 60 Hz menampilkan input lebih lambat daripada layar 240 Hz, tetapi render dan sinkronisasi tetap memengaruhi hasil.' },
    { type: 'list', items: ['60 Hz berarti 16.67 ms per frame', '120 Hz berarti 8.33 ms per frame', '144 Hz berarti 6.94 ms per frame', '240 Hz berarti 4.17 ms per frame', '360 Hz berarti 2.78 ms per frame', '540 Hz berarti 1.85 ms per frame'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Waktu antara tindakan fisik dan hasil yang terlihat di layar.' },
      { term: 'Jitter', definition: 'Perubahan antar sampel yang menunjukkan kestabilan waktu sistem.' },
      { term: 'VSync', definition: 'Sinkronisasi vertikal yang dapat mengurangi tearing tetapi menambah tunggu.' },
      { term: 'VRR', definition: 'Refresh rate variabel yang menyesuaikan layar dengan keluaran GPU.' },
      { term: 'Waktu piksel', definition: 'Waktu yang diperlukan piksel untuk berpindah dari satu warna ke warna lain.' },
    ] },
    { type: 'title', text: 'Kelebihan dan batas pengukuran browser' },
    { type: 'paragraph', html: 'Pengukuran ini memudahkan perbandingan tanpa osiloskop atau kamera berkecepatan tinggi. Namun, browser tidak dapat melihat langsung semua penundaan internal driver, game, atau emisi optik panel.' },
    { type: 'proscons', title: 'Evaluasi pengukuran web', items: [
      { pro: 'Dapat digunakan tanpa perangkat khusus', con: 'Bergantung pada event loop browser' },
      { pro: 'Cepat membandingkan periferal', con: 'Tidak mengukur respons piksel secara langsung' },
      { pro: 'Menggunakan timer lokal beresolusi tinggi', con: 'Presisi timer dapat dikurangi browser' },
      { pro: 'Menunjukkan kestabilan pembaruan', con: 'Tab yang tidak aktif dapat diperlambat' },
    ] },
    { type: 'title', text: 'Mendiagnosis latensi yang tinggi' },
    { type: 'paragraph', html: 'Jika rata-rata melebihi 30 ms atau jitter besar, ulangi pengukuran saat jendela aktif dan periksa VSync, akselerasi grafis, polling USB, serta tugas CPU.' },
    { type: 'diagnostic', variant: 'warning', title: 'Peringatan diagnosis latensi', html: 'Rata-rata di atas 35 ms pada komputer desktop perlu diperiksa pada mode layar dan akselerasi hardware. Ubah satu pengaturan setiap kali agar penyebabnya jelas.' },
    { type: 'title', text: 'Mengurangi latensi langkah demi langkah' },
    { type: 'paragraph', html: 'Atur periferal, layar, dan sistem secara terpisah. Setelah setiap perubahan, ambil sampel baru dengan kondisi sama untuk memastikan perbaikannya nyata.' },
    { type: 'summary', title: 'Daftar periksa optimasi latensi', items: ['Pilih polling USB yang sesuai', 'Aktifkan mode game pada layar', 'Matikan filter gambar yang tidak perlu', 'Bandingkan VSync dan VRR', 'Jaga frame rate tetap stabil', 'Tutup tugas latar belakang yang berat', 'Ulangi tes setelah setiap perubahan'] },
    { type: 'message', title: 'Praktik terbaik membandingkan hasil', html: 'Tutup aplikasi latar belakang, pertahankan fokus pada jendela tes, dan ambil sedikitnya 15 sampel. Lihat median bersama rata-rata dan jitter karena satu sampel dapat bersifat kebetulan.' },
  ],
};
