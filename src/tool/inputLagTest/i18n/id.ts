import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'uji-lag-input-latensi';
const title = 'Uji Lag Input & Latensi Sistem';
const description = 'Alat pengukur lag input perangkat keras dan latensi sistem secara online dengan pewaktu presisi tinggi dan sinkronisasi tampilan.';

const faqData = [
  {
    question: 'Apa itu lag input dan latensi sistem?',
    answer: 'Lag input adalah total penundaan waktu antara tindakan fisik pengguna (mengklik tetikus atau menekan tombol) dan pembaruan visual yang muncul di layar.',
  },
  {
    question: 'Bagaimana uji latensi online ini mengukur lag input?',
    answer: 'Alat ini menangkap stempel waktu peristiwa perangkat keras menggunakan performance.now() dan menghubungkannya dengan siklus tampilan requestAnimationFrame berikutnya.',
  },
  {
    question: 'Berapa nilai lag input yang baik untuk bermain game?',
    answer: 'Di bawah 10 ms dianggap sangat cepat untuk esports kompetitif. 10 ms hingga 20 ms tergolong cepat, 20 ms hingga 35 ms sedang, dan di atas 35 ms adalah penundaan yang terasa.',
  },
  {
    question: 'Bagaimana cara mengurangi lag input pada PC saya?',
    answer: 'Tingkatkan tingkat penyegaran monitor, nonaktifkan VSync, aktifkan G-Sync atau FreeSync, tingkatkan polling rate USB tetikus ke 1000Hz+, dan aktifkan NVIDIA Reflex.',
  },
  {
    question: 'Apakah tingkat penyegaran layar memengaruhi lag input?',
    answer: 'Ya. Tingkat penyegaran yang lebih tinggi mengurangi durasi bingkai. Layar 60Hz memiliki durasi bingkai 16.67 ms, sedangkan layar 240Hz memiliki durasi 4.17 ms.',
  },
];

const howToData = [
  {
    name: 'Pilih mode pengujian',
    text: 'Pilih mode Respon Serta-merta, Latensi Tombol, atau Latensi Reaksi Visual.',
  },
  {
    name: 'Lakukan input fisik',
    text: 'Klik di dalam kotak target atau tekan tombol untuk menghasilkan peristiwa input.',
  },
  {
    name: 'Amati metrik latensi real-time',
    text: 'Tinjau rata-rata, latensi minimum, maksimum, dan variasi (jitter) yang dihitung.',
  },
  {
    name: 'Periksa pewaktuan bingkai tampilan',
    text: 'Pantau FPS saat ini dan waktu bingkai untuk memastikan stabilitas layar.',
  },
  {
    name: 'Analisis riwayat pengukuran',
    text: 'Periksa log riwayat sampel untuk mengidentifikasi lonjakan latensi.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latensi Sistem',
  modeInstant: 'Respon Serta-merta',
  modeKey: 'Latensi Tombol',
  modeVisual: 'Latensi Reaksi Visual',
  targetClickPrompt: 'Klik atau ketuk di dalam kotak ini untuk mengukur latensi',
  targetKeyPrompt: 'Tekan tombol apa saja (atau Spasi) untuk mengukur latensi papan ketik',
  targetWaitPrompt: 'Tunggu latar belakang hijau...',
  targetNowPrompt: 'KLIK SEKARANG!',
  labelAvgLatency: 'Rata-rata Latensi',
  labelMinLatency: 'Latensi Minimum',
  labelMaxLatency: 'Latensi Maksimum',
  labelJitter: 'Jitter Latensi (Deviasi Standar)',
  labelFps: 'FPS Saat Ini',
  labelFrameTime: 'Waktu Bingkai',
  labelSamples: 'Sampel',
  labelGrade: 'Peringkat Latensi',
  gradeUltraFast: 'Sangat Cepat (<10ms)',
  gradeFast: 'Cepat (10-20ms)',
  gradeModerate: 'Sedang (20-35ms)',
  gradeHigh: 'Tinggi (>35ms)',
  btnReset: 'Atur Ulang Pengukuran',
  btnCopyReport: 'Salin Laporan Benchmark',
  reportCopied: 'Laporan Tersalin!',
  historyTitle: 'Pengukuran Latensi Terkini',
  pipelineTitle: 'Analisis Jalur Sinyal Perangkat Keras',
  distributionTitle: 'Distribus Frekuensi Latensi',
  sampleCol: 'Sampel',
  typeCol: 'Jenis Input',
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
      text: 'Apa itu Lag Input dan Latensi Sistem pada PC Gaming?',
    },
    {
      type: 'paragraph',
      html: 'Lag input (atau penundaan input) mewakili penundaan waktu yang sangat tepat antara tindakan fisik pengguna (seperti mengklik tombol tetikus atau menekan tombol papan ketik) dan respons visual yang ditampilkan secara langsung di layar monitor. Dalam esports kompetitif dan permainan berkecepatan tinggi, meminimalkan latensi sistem sangat penting untuk akurasi bidikan, reaksi cepat, dan konsistensi permainan. Latensi sistem terdiri dari akumulasi penundaan seperti polling rate USB perangkat keras, pemrosesan antrean peristiwa sistem operasi, mesin rendering game, buffer bingkai kartugrafis, dan waktu respon piksel layar.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'Target Latensi Esports',
          trend: 'Nilai teratas kompetitif',
        },
        {
          value: '1000 Hz',
          label: 'Polling Rate USB Standar',
          trend: 'Interval 1.0 ms antar sinyal',
        },
        {
          value: '240 Hz',
          label: 'Monitor Refresh Tinggi',
          trend: 'Interval bingkai 4.16 ms',
        },
        {
          value: '16.6 ms',
          label: 'Interval Bingkai 60Hz',
          trend: 'Penundaan dasar tampilan',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Bagaimana Cara Kerja Pengukuran Latensi di Browser?',
      html: 'Uji ini memanfaatkan stempel waktu presisi tinggi dari <code>performance.now()</code> yang digabungkan dengan peristiwa DOM (<code>pointerdown</code> dan <code>keydown</code>). Dengan menyinkronkan pendaftaran peristiwa ke siklus tampilan melalui <code>requestAnimationFrame</code>, aplikasi menghitung selisih waktu antara peristiwa fisik dan pembaruan layar langsung di browser Anda secara akurat.',
    },
    {
      type: 'title',
      text: 'Jalur Sinyal Input dari Sakelar hingga Layar',
    },
    {
      type: 'paragraph',
      html: 'Untuk mendiagnosis dan mengurangi latensi input secara efektif, seluruh rantai sinyal dari sakelar fisik hingga emisi layar harus dipahami secara mendalam. Total latensi sistem adalah jumlah dari latensi perifer, pemrosesan OS, rendering GPU, dan panel layar.',
    },
    {
      type: 'table',
      headers: ['Komponen Jalur', 'Rentang Penundaan', 'Penyebab Utama Penundaan', 'Strategi Optimasi'],
      rows: [
        ['Sakelar Perifer', '0.2 ms - 5.0 ms', 'Algoritma debounce mekanis kontak', 'Gunakan sakelar optik presisi'],
        ['Polling Rate USB', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz USB', 'Tingkatkan polling rate ke 1000Hz+'],
        ['Antrean OS', '0.5 ms - 3.0 ms', 'Tugas latar belakang sistem operasi', 'Aktifkan Game Mode Windows'],
        ['Mesin Render Game', '4.0 ms - 20.0 ms', 'Beban kerja CPU dan sinkronisasi', 'Gunakan NVIDIA Reflex / Anti-Lag'],
        ['Buffer Bingkai GPU', '8.0 ms - 33.0 ms', 'VSync aktif, penumpukan bingkai', 'Matikan VSync, gunakan G-Sync / FreeSync'],
        ['Pemrosesan Layar', '1.0 ms - 15.0 ms', 'Pemrosesan gambar TV dan penSkalaan', 'Aktifkan Mode Game pada monitor/TV'],
      ],
    },
    {
      type: 'tip',
      title: 'Cara Mengurangi Latensi Antrean GPU saat Beban Tinggi',
      html: 'Saat GPU berjalan pada penggunaan 99%, penggerak grafis akan menumpuk beberapa bingkai sebelumnya. Ini menyebabkan lag input yang signifikan (sering kali 30ms hingga 50ms). Batasi tingkat bingkai Anda sedikit di bawah batas maksimal GPU atau aktifkan fitur seperti NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Perbandingan Latensi Antara Tetikus, Papan Ketik, dan Layar Sentuh',
    },
    {
      type: 'paragraph',
      html: 'Setiap perangkat input memiliki karakteristik latensi yang berbeda berdasarkan arsitektur perangkat kerasnya.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tetikus Gaming',
          description: 'Koneksi nirkabel 2.4GHz atau kabel berkecepatan tinggi.',
          highlight: 'Latensi 0.5ms - 2ms',
          points: [
            'Polling rate 1000Hz hingga 8000Hz',
            'Sakelar optik tanpa penundaan debounce',
            'Sensor dengan latensi gerak rendah',
          ],
        },
        {
          title: 'Papan Ketik Mekanis',
          description: 'Pemindaian matriks dengan kontrol debounce.',
          highlight: 'Latensi 1ms - 10ms',
          points: [
            'Sakelar magnetik efek Hall (Rapid Trigger)',
            'Kecepatan pemindaian hingga 8000Hz',
            'Jarak aktivasi yang dapat diatur',
          ],
        },
        {
          title: 'Layar Sentuh Seluler',
          description: 'Pengambilan sampel digitizer kapasitif.',
          highlight: 'Latensi 15ms - 45ms',
          points: [
            'Sampling sentuh (120Hz - 480Hz)',
            'Penundaan komposisi penggerak layar',
            'Algoritma penyaringan kapasitif',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Pengaruh Refresh Rate Layar terhadap Latensi',
    },
    {
      type: 'paragraph',
      html: 'Tingkat penyegaran layar secara langsung mengatur batas minimal latensi tampilan yang memungkinkan.',
    },
    {
      type: 'list',
      items: [
        'Layar 60 Hz: 1 bingkai = 16.67 ms durasi (Rata-rata latensi tampilan: ~8.33 ms)',
        'Layar 120 Hz: 1 bingkai = 8.33 ms durasi (Rata-rata latensi tampilan: ~4.16 ms)',
        'Layar 144 Hz: 1 bingkai = 6.94 ms durasi (Rata-rata latensi tampilan: ~3.47 ms)',
        'Layar 240 Hz: 1 bingkai = 4.17 ms durasi (Rata-rata latensi tampilan: ~2.08 ms)',
        'Layar 360 Hz: 1 bingkai = 2.78 ms durasi (Rata-rata latensi tampilan: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Lag Input',
          definition: 'Total waktu dari tindakan fisik pengguna hingga pembaruan visual yang sesuai di layar.',
        },
        {
          term: 'Jitter (Variasi Latensi)',
          definition: 'Deviasi standar dari pengukuran latensi yang menunjukkan konsistensi pewaktuan sistem.',
        },
        {
          term: 'VSync (Sinkronisasi Vertikal)',
          definition: 'Menghilangkan robekan layar tetapi menambah lag input yang signifikan.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Teknologi seperti G-Sync dan FreeSync yang mencocokkan refresh rate layar dengan GPU.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kelebihan dan Kekurangan Pengujian Latensi berbasis Browser',
    },
    {
      type: 'paragraph',
      html: 'Mengukur latensi di browser memberikan aksesibilitas instan tanpa memerlukan peralatan khusus.',
    },
    {
      type: 'proscons',
      title: 'Evaluasi Pengukuran Latensi Browser',
      items: [
        {
          pro: 'Tidak memerlukan penginstalan perangkat lunak atau alat khusus',
          con: 'Dipengaruhi oleh siklus pemrosesan browser dan manajer jendela OS',
        },
        {
          pro: 'Pewaktu mikrodetik presisi tinggi (performance.now)',
          con: 'Tidak dapat mengukur respon piksel optik layar secara langsung',
        },
        {
          pro: 'Uji tolok ukur instan antar perangkat input berbeda',
          con: 'Pelonggaran presisi pewaktu browser untuk alasan keamanan',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diagnosis saat Lag Input Tinggi',
    },
    {
      type: 'paragraph',
      html: 'Jika hasil pengujian menunjukkan latensi tinggi (>30 ms), periksa pengaturan di bawah ini.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pemberitahuan Diagnosis Latensi Tinggi',
      html: 'Jika rata-rata lag input melebihi 35ms pada PC, periksa apakah VSync aktif pada penggerak grafis. Akselerasi perangkat keras yang mati di browser juga dapat memindahkan rendering ke CPU.',
    },
    {
      type: 'title',
      text: 'Langkah-langkah Mengurangi Lag Input Sistem',
    },
    {
      type: 'paragraph',
      html: 'Ikuti langkah-langkah praktis ini untuk mengurangi latensi sistem.',
    },
    {
      type: 'summary',
      title: 'Daftar Periksa Optimasi Latensi Sistem',
      items: [
        'Atur polling rate USB tetikus ke 1000Hz atau lebih tinggi pada perangkat lunak bawaan.',
        'Aktifkan Penjadwalan GPU Terakselerasi Perangkat Keras (HAGS) pada pengaturan Windows.',
        'Aktifkan Mode Game pada pengaturan monitor untuk melewati pemrosesan gambar internal.',
        'Matikan VSync global pada panel kontrol 3D dan aktifkan G-Sync / FreeSync.',
        'Aktifkan NVIDIA Reflex atau AMD Anti-Lag pada game yang didukung.',
        'Pastikan Akselerasi Perangkat Keras browser diaktifkan.',
      ],
    },
    {
      type: 'message',
      title: 'Praktik Terbaik Pengujian',
      html: 'Untuk hasil terbaik, tutup aplikasi latar belakang, jalankan browser dalam mode layar penuh, dan ambil setidaknya 15-20 sampel.',
    },
  ],
};
