import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'penguji-keyboard-midi';
const title = 'WebMIDI Keyboard Tester';
const description = 'Uji keyboard MIDI USB, synth, pengontrol pad, pitch wheel, roda modulasi, velocity nada, dan nada macet langsung di browser dengan Web MIDI.';

const faqData = [
  {
    question: 'Bisakah penguji keyboard MIDI ini membaca keyboard USB saya tanpa menginstal perangkat lunak?',
    answer: 'Ya, di browser yang mendukung Web MIDI, seperti Chrome dan Edge. Browser meminta izin, lalu alat ini mendengarkan pesan nada, velocity, pitch bend, dan modulasi dari input MIDI yang dipilih.',
  },
  {
    question: 'Apakah situs web mengunggah nada MIDI atau data performa saya?',
    answer: 'Tidak. Peristiwa MIDI diproses di tab browser saat ini. Nada, nilai velocity, pesan pengontrol, nama perangkat, dan log tidak diunggah atau disimpan oleh situs web.',
  },
  {
    question: 'Mengapa keyboard MIDI saya muncul tetapi tidak ada tuts yang menyala?',
    answer: 'Perangkat mungkin terhubung sebagai permukaan kontrol, port input yang salah mungkin dipilih oleh browser, keyboard mungkin menggunakan mode yang berbeda, atau kabel/hub mungkin mengalirkan daya tetapi bukan data MIDI.',
  },
  {
    question: 'Bisakah saya menguji roda pitch bend dan modulasi?',
    answer: 'Ya. Penguji menampilkan pitch bend sebagai nilai bertanda terpusat dan modulasi sebagai MIDI CC1. Menggerakkan kontrol tersebut seharusnya memperbarui indikatornya segera saat perangkat mengirim pesan MIDI standar.',
  },
  {
    question: 'Pesan MIDI apa saja yang ditampilkan?',
    answer: 'Antarmuka langsung menyoroti pesan Note On dan Note Off, mencatat velocity, mendeteksi pitch bend, dan melacak CC1 roda modulasi. Pesan pengontrol lain mungkin muncul di log peristiwa jika relevan dengan kontrol yang diuji.',
  },
];

const howToData = [
  {
    name: 'Hubungkan perangkat keras MIDI',
    text: 'Colokkan keyboard, synth, pengontrol pad, atau antarmuka MIDI USB ke komputer sebelum membuka permintaan izin. Hindari hub tanpa daya saat memecahkan masalah perangkat yang terputus-putus.',
  },
  {
    name: 'Berikan akses MIDI browser',
    text: 'Tekan Hubungkan Input MIDI dan setujui permintaan izin browser. Gunakan Chrome atau Edge melalui HTTPS atau localhost karena Web MIDI dibatasi oleh izin.',
  },
  {
    name: 'Mainkan tuts di seluruh jangkauan',
    text: 'Tekan nada rendah, menengah, dan tinggi. Keyboard di layar meluas mengelilingi nada yang diterimanya dan menyalakan setiap tuts sesuai dengan velocity.',
  },
  {
    name: 'Periksa roda dan kontrol ekspresi',
    text: 'Gerakkan roda pitch, roda modulasi, dan kontrol performa. Pitch harus kembali ke tengah, sementara modulasi harus bergerak dari 0 hingga 127.',
  },
  {
    name: 'Baca log peristiwa',
    text: 'Gunakan log peristiwa untuk menemukan pesan Note Off yang hilang, kanal tak terduga, nilai velocity rendah, atau kontrol yang mengirim pesan MIDI berbeda dari yang diharapkan.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Penguji Keyboard MIDI Online untuk Perangkat Keras USB Nyata', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Penguji keyboard MIDI online</strong> yang andal harus cepat menjawab satu pertanyaan: apakah instrumen fisik mengirim pesan yang diharapkan oleh DAW, sampler, synth, atau rig pencahayaan? Penguji WebMIDI ini mendengarkan input MIDI browser dan menampilkan data Note On, Note Off, velocity, pitch bend, dan roda modulasi secara real-time. Alat ini dirancang untuk keyboard MIDI USB, antarmuka DIN-ke-USB, synthesizer, pengontrol pad, piano panggung, gitar MIDI, trigger drum, dan pengontrol ringkas yang digunakan di studio rumahan atau rig panggung.',
    },
    {
      type: 'message',
      title: 'Diagnostik MIDI lokal yang privat',
      html: 'Pengujian berjalan sepenuhnya di sisi klien. Situs web tidak mengunggah nomor nada, kurva velocity, gerakan pengontrol, nama perangkat, atau log peristiwa. Browser mengekspos MIDI hanya setelah Anda menyetujui permintaan izin, dan nilainya tetap berada di tab saat ini.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'Rentang velocity MIDI' },
        { value: '128', label: 'nomor nada standar' },
        { value: '14-bit', label: 'resolusi pitch bend' },
        { value: 'CC1', label: 'kontrol roda modulasi' },
      ],
    },
    {
      type: 'table',
      headers: ['Sinyal', 'Yang ditampilkan penguji', 'Perilaku sehat'],
      rows: [
        ['Note On', 'Nama tuts, nomor nada, kanal, dan velocity.', 'Setiap tuts fisik menyala sekali saat ditekan dan menggunakan nilai velocity di atas nol.'],
        ['Note Off', 'Peristiwa lepas di log dan lampu tuts diatur ulang.', 'Setiap tuts yang ditekan padam saat dilepas; tidak ada nada yang tetap macet secara visual.'],
        ['Velocity', 'Indikator langsung plus kurva bergulir.', 'Permainan lembut menghasilkan nilai lebih rendah dan permainan kuat mencapai nilai lebih tinggi tanpa lompatan acak.'],
        ['Pitch bend', 'Indikator bertanda terpusat dari negatif ke positif.', 'Roda bergeser dengan mulus dan kembali mendekati nol saat dilepas.'],
        ['Modulasi', 'Indikator CC1 dari 0 hingga 127.', 'Roda atau strip bergerak secara terprediksi melalui seluruh rentang.'],
      ],
    },
    { type: 'title', text: 'Cara Menguji Keyboard MIDI Tanpa DAW', level: 2 },
    {
      type: 'paragraph',
      html: 'Mencari <em>probar teclado MIDI</em> sering berarti pengguna belum tahu apakah kegagalan ada di pengontrol, kabel, sistem operasi, atau perangkat lunak musik. DAW menambahkan banyak variabel ekstra: status arm trek, filter input, routing kanal MIDI, instrumen virtual, pemantauan, template, dan preferensi driver. Penguji browser menghilangkan sebagian besar tumpukan itu. Jika permintaan izin WebMIDI melihat perangkat dan keyboard menyalakan nada di layar, jalur MIDI fisik berfungsi.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gunakan ini sebelum mengubah pengaturan DAW',
      html: 'Pertama konfirmasi bahwa pengontrol mengirim MIDI mentah. Kemudian pecahkan masalah aplikasi musik. Jika penguji menerima nada tetapi DAW tidak, periksa pengaktifan input MIDI, input trek yang dipilih, filter kanal, skrip permukaan kontrol, dan pemantauan instrumen.',
    },
    {
      type: 'list',
      items: [
        'Hubungkan keyboard langsung ke komputer jika memungkinkan, terutama jika daya bus terbatas.',
        'Buka penguji di Chrome atau Edge, karena dukungan Web MIDI bervariasi menurut browser dan platform.',
        'Tekan Hubungkan Input MIDI dan pilih perangkat musik atau antarmuka MIDI dari permintaan izin.',
        'Mainkan nada kromatis di seluruh keyboard untuk mengungkap tuts mati, zona terpisah, atau kejutan transposisi oktaf.',
        'Gerakkan roda pitch dan modulasi perlahan, lalu cepat, untuk mendeteksi sensor bising atau perilaku kembali-ke-tengah yang buruk.',
        'Bersihkan log di antara pengujian saat membandingkan kabel, port USB, preset keyboard, atau mode pengontrol.',
      ],
    },
    {
      type: 'tip',
      title: 'Pemeriksaan kabel cepat',
      html: 'Jika perangkat menyala tetapi tidak ada input MIDI yang muncul, coba kabel USB lain. Banyak kabel USB murah hanya untuk pengisian daya dan tidak membawa data, yang membuat pengontrol tampak hidup padahal tidak ada pesan MIDI yang bisa mencapai komputer.',
    },
    { type: 'title', text: 'Membaca Kurva Velocity dan Respons Dinamis', level: 2 },
    {
      type: 'paragraph',
      html: 'Velocity bukanlah kenyaringan itu sendiri; ini adalah nilai performa yang dikirim bersama nada, biasanya dari 1 hingga 127. Plugin piano dapat memetakan velocity ke volume, lapisan sampel, kecerahan, suara palu, waktu serangan, atau semuanya sekaligus. Ketika pengontrol memiliki pemindaian velocity yang buruk, pemain mungkin merasa nada lembut menghilang, nada menengah terlalu keras, atau nada kuat tidak pernah mencapai lapisan atas yang ekspresif. Kurva velocity bergulir membantu mengungkap apakah perangkat keras menghasilkan sebaran nilai yang berguna.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tuts yang sehat',
          description: 'Pukulan lembut, sedang, dan keras menghasilkan pita velocity yang terlihat berbeda dengan nilai yang dapat diulang untuk kekuatan bermain yang serupa.',
          highlight: true,
        },
        {
          title: 'Respons terkompresi',
          description: 'Sebagian besar nada mengelompok dalam rentang sempit, seperti 70-95, membuat instrumen piano dan drum terasa datar atau sulit dikendalikan.',
        },
        {
          title: 'Respons tidak menentu',
          description: 'Nada bersebelahan atau pukulan berulang melompat tak terduga, menunjukkan kontak kotor, sensor gagal, pemindaian buruk, atau firmware tidak stabil.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Pola velocity yang diamati', 'Interpretasi yang mungkin', 'Tes berikutnya'],
      rows: [
        ['Selalu 127', 'Mode velocity tetap diaktifkan atau pengontrol dikonfigurasi untuk pemicuan organ/synth.', 'Periksa pengaturan global keyboard, mode pad, atau editor pengontrol.'],
        ['Selalu sangat rendah', 'Kurva velocity terlalu lembut, kalibrasi sensor salah, atau tuts rusak.', 'Ganti kurva velocity dan bandingkan tuts hitam/putih di seluruh oktaf.'],
        ['Satu tuts berbeda tajam', 'Kontak lokal, kubah karet, sensor optik, atau mekanisme tuts mungkin kotor atau rusak.', 'Ulangi tuts itu pada beberapa kekuatan dan bandingkan dengan nada tetangga.'],
        ['Nilai turun setelah hub digunakan', 'Stabilitas daya atau data mungkin terbatas.', 'Uji ulang dengan port USB langsung dan kabel data yang dikenal baik.'],
      ],
    },
    {
      type: 'card',
      title: 'Mengapa Note Off penting',
      html: 'Nada macet sering kali merupakan pesan Note Off yang hilang atau tertunda. Beberapa instrumen mengirim Note On dengan velocity 0 alih-alih perintah Note Off terpisah; keduanya adalah perilaku MIDI yang valid. Penguji ini memperlakukan Note On dengan velocity nol sebagai pelepasan nada, sehingga tuts yang benar-benar macet tetap terlihat hingga pesan pelepasan yang benar tiba.',
    },
    { type: 'title', text: 'Menguji Pitch Bend, Modulasi, dan Kontrol Performa', level: 2 },
    {
      type: 'paragraph',
      html: 'Pitch bend adalah pesan MIDI dengan resolusi lebih tinggi daripada data pengontrol 7-bit biasa. Ini menggabungkan dua byte data menjadi rentang 14-bit yang berpusat di sekitar 8192. Resolusi ekstra itu penting karena pergerakan pitch seharusnya terdengar mulus, terutama saat membengkokkan lead synth, bass, atau instrumen orkestra. Penguji mengonversi bend yang masuk menjadi indikator terpusat, memudahkan untuk melihat apakah roda mencapai kedua ekstrem dan kembali ke netral.',
    },
    {
      type: 'paragraph',
      html: 'Roda modulasi biasanya adalah MIDI continuous controller 1, umumnya ditulis sebagai CC1. Banyak patch synth menggunakannya untuk vibrato, pergerakan filter, posisi wavetable, tremolo, atau dinamika orkestra. Jika menggerakkan roda tidak memperbarui indikator CC1, pengontrol mungkin ditugaskan ke CC yang berbeda, menggunakan mode khusus vendor, atau dirutekan melalui perangkat lunak yang memetakan ulang kontrol performa.',
    },
    {
      type: 'proscons',
      title: 'Tes MIDI browser versus pemantauan DAW',
      items: [
        { pro: 'Konfirmasi perangkat keras berbasis izin yang cepat tanpa penyiapan proyek.', con: 'Tidak meniru setiap routing DAW, skrip, atau pemetaan instrumen.' },
        { pro: 'Tampilan jelas tentang nada, velocity, pitch bend, dan modulasi CC1.', con: 'Aftertouch lanjutan, NRPN, MPE, SysEx, dan peta kontrol kustom mungkin memerlukan alat khusus.' },
        { pro: 'Baik untuk panggilan dukungan, membeli peralatan bekas, dan memeriksa kabel.', con: 'Dukungan browser bergantung pada ketersediaan Web MIDI di platform saat ini.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Roda pitch tidak kembali ke nol',
      html: 'Jika indikator pitch berhenti pada nilai positif atau negatif setelah dilepas, roda fisik, pegas, potensiometer, sensor hall, kalibrasi, atau zona mati firmware mungkin perlu perhatian. Uji pengontrol yang sama di port dan preset lain sebelum menganggap sensor rusak.',
    },
    { type: 'title', text: 'Kesalahan Umum Keyboard MIDI yang Dapat Diungkapkan Penguji Ini', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Tuts mati', definition: 'Tuts fisik yang tidak menghasilkan pesan Note On saat ditekan.' },
        { term: 'Nada macet', definition: 'Nada yang menerima Note On tetapi tidak menerima pesan pelepasan yang cocok, membuat suara tetap aktif dalam instrumen.' },
        { term: 'Lonjakan velocity', definition: 'Nilai tiba-tiba yang jauh lebih tinggi atau lebih rendah dari yang diharapkan untuk pukulan serupa.' },
        { term: 'Kanal MIDI', definition: 'Salah satu dari 16 kanal logis yang digunakan untuk memisahkan bagian, zona, atau perangkat pada aliran MIDI.' },
        { term: 'Control Change', definition: 'Keluarga pesan MIDI yang digunakan oleh kenop, pedal, roda, fader, dan sakelar.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Perangkat terdeteksi, tidak ada pesan',
      html: 'Jika browser mencantumkan input MIDI tetapi memainkan tuts tidak menghasilkan entri log, periksa apakah port yang dipilih adalah input permukaan kontrol alih-alih input nada keyboard. Beberapa antarmuka mengekspos beberapa port dengan nama yang mirip.',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan penyebab', 'Tindakan praktis'],
      rows: [
        ['Tidak ada permintaan izin', 'Browser tidak didukung, asal tidak aman, atau izin MIDI browser diblokir.', 'Gunakan Chrome/Edge melalui HTTPS dan periksa izin situs.'],
        ['Perangkat hilang', 'Masalah kabel, hub, driver, kepatuhan kelas, atau daya.', 'Coba kabel data USB, port, atau hub beraliran daya lain.'],
        ['Hanya beberapa oktaf yang berfungsi', 'Mode split/layer, pengaturan transposisi, kerusakan matriks perangkat keras, atau mode kontrol lokal.', 'Atur ulang preset dan uji secara kromatis dari nada rendah ke tinggi.'],
        ['Nama nada salah', 'Pengontrol ditransposisi atau mengirim dari zona dengan pergeseran oktaf.', 'Periksa transposisi global, oktaf zona, dan pengaturan template DAW.'],
        ['Roda modulasi diam', 'Roda ditugaskan ke nomor pengontrol yang berbeda atau dinonaktifkan oleh preset.', 'Muat preset default atau editor pengontrol dan petakan kembali ke CC1.'],
      ],
    },
    {
      type: 'summary',
      title: 'Urutan diagnostik terbaik',
      items: [
        'Konfirmasi browser melihat input MIDI.',
        'Mainkan nada dan verifikasi perilaku tekan/lepas yang cocok.',
        'Periksa distribusi velocity dengan pukulan lembut, sedang, dan keras berulang.',
        'Gerakkan kontrol pitch bend dan modulasi melalui seluruh perjalanannya.',
        'Baru kemudian sesuaikan routing DAW, pengaturan instrumen virtual, atau template pengontrol.',
      ],
    },
    { type: 'title', text: 'Privasi, Dukungan Browser, dan Batasan', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI sengaja dibatasi oleh izin. Sebuah halaman tidak dapat diam-diam membaca perangkat musik yang terhubung di latar belakang tanpa browser mengekspos alur akses. Permintaan dan ketetapan izin yang persis bergantung pada browser, sistem operasi, dan pengaturan pengguna. Bagi sebagian besar musisi, hasil praktisnya sederhana: klik tombol hubungkan, pilih input MIDI, jalankan pengujian, dan tutup tab setelah selesai.',
    },
    {
      type: 'list',
      items: [
        'Tidak ada data peristiwa MIDI yang dikirim ke server eksternal mana pun.',
        'Penguji tidak memerlukan akses SysEx, yang menjaga cakupan izin lebih sempit.',
        'Nama perangkat yang ditunjukkan oleh browser dapat mengidentifikasi model perangkat keras, jadi tangkapan layar sebaiknya dibagikan dengan hati-hati.',
        'Chrome dan Edge umumnya menyediakan dukungan Web MIDI terbaik; dukungan Safari dan Firefox bisa terbatas atau tidak ada tergantung platform.',
        'Utilitas native mungkin masih diperlukan untuk pembaruan firmware, pengeditan pengontrol mendalam, analisis MPE, dump SysEx, atau diagnostik spesifik vendor.',
      ],
    },
    {
      type: 'card',
      title: 'Kapan alat ini sudah cukup',
      html: 'Untuk membeli pengontrol bekas, memeriksa kabel studio, memvalidasi antarmuka MIDI USB, menguji tuts yang telah diperbaiki, atau membuktikan bahwa keyboard mengirim pesan sebelum membuka DAW, penguji keyboard WebMIDI biasanya adalah langkah pertama tercepat.',
    },
  ],
  ui: {
    connectButton: 'Hubungkan Input MIDI',
    refreshButton: 'Segarkan input',
    clearButton: 'Bersihkan log',
    unsupportedTitle: 'Web MIDI tidak tersedia',
    unsupportedBody: 'Gunakan browser berbasis Chromium seperti Chrome atau Edge, dan buka halaman melalui HTTPS atau localhost.',
    secureContext: 'Web MIDI memerlukan halaman HTTPS aman atau localhost sebelum browser dapat mengekspos input MIDI.',
    statusIdle: 'Siap meminta akses MIDI',
    statusPermission: 'Menunggu izin MIDI browser',
    statusReady: 'Akses MIDI diberikan',
    statusNoInputs: 'Tidak ada input MIDI terdeteksi',
    statusConnected: 'Input MIDI terdeteksi',
    statusDisconnected: 'Perangkat MIDI terputus',
    statusError: 'Akses MIDI gagal',
    detectedLabel: 'Perangkat terdeteksi',
    noDevice: 'Tidak ada perangkat MIDI yang dipilih',
    inputLabel: 'Input',
    inputIdle: 'tidak ada',
    channelLabel: 'Kanal',
    notesLabel: 'Nada',
    velocityLabel: 'Velocity',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modulasi',
    lastEventLabel: 'Peristiwa terakhir',
    octaveRangeLabel: 'Rentang terlihat',
    velocityCurveTitle: 'Kurva velocity',
    activeNotesTitle: 'Nada aktif',
    eventLogTitle: 'Log peristiwa MIDI',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Mainkan tuts atau gerakkan roda untuk melihat pesan MIDI masuk.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Semua kanal',
  },
};
