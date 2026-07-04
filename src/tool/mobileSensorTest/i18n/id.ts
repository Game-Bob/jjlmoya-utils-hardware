import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-sensor-ponsel';
const title = 'Tes Sensor Ponsel';
const description = 'Jalankan tes online giroskop, akselerometer, sensor gerak, dan level gelembung di ponsel Anda untuk memeriksa kemiringan, rotasi, drift, dan masalah kalibrasi sensor.';

const faqData = [
  {
    question: 'Bagaimana cara menguji giroskop ponsel saya secara online?',
    answer: 'Buka tes di ponsel, ketuk Mulai Kalibrasi, izinkan akses gerakan jika diminta, lalu putar dan miringkan perangkat. Giroskop dan sensor orientasi yang berfungsi harus memperbarui alpha, beta, dan gamma dengan lancar tanpa membeku atau melompat liar.',
  },
  {
    question: 'Bisakah saya menguji akselerometer dengan level gelembung?',
    answer: 'Ya. Letakkan ponsel di atas meja datar setelah memulai tes. Gelembung harus berada di dekat tengah dan nilai akselerasi harus tetap stabil. Jika gelembung melayang parah saat ponsel diam, akselerometer mungkin perlu dikalibrasi atau casing, meja, atau perangkat keras mungkin mengganggu.',
  },
  {
    question: 'Mengapa iPhone meminta izin gerakan?',
    answer: 'Safari di iPhone dan iPad memerlukan sentuhan sebelum situs web dapat mengakses sensor gerakan dan orientasi. Jika izin ditolak, tes tidak dapat membaca data giroskop atau akselerometer sampai Anda mengizinkan akses gerakan.',
  },
  {
    question: 'Bisakah ini memperbaiki atau mengkalibrasi kompas yang rusak?',
    answer: 'Tidak ada alat peramban yang dapat memperbaiki perangkat keras atau memaksa kalibrasi kompas sistem. Tes ini membantu Anda mengidentifikasi gejala: pembacaan macet, gerakan bising, drift, izin hilang, atau peramban yang tidak mengekspos sensor.',
  },
];

const howToData = [
  { name: 'Buka tes di ponsel Anda', text: 'Gunakan iPhone, iPad, ponsel Android, atau tablet yang sama yang ingin Anda diagnosis. Peramban desktop biasanya tidak memiliki sensor gerakan untuk diekspos.' },
  { name: 'Izinkan akses gerakan', text: 'Ketuk Mulai Kalibrasi dan terima permintaan izin gerakan atau orientasi jika peramban Anda menampilkannya.' },
  { name: 'Uji kemiringan dan rotasi', text: 'Miringkan ponsel ke depan, gulingkan ke kiri dan kanan, lalu putar datar di atas meja. Perhatikan perubahan alpha, beta, gamma, dan akselerasi yang lancar.' },
  { name: 'Periksa drift di permukaan datar', text: 'Biarkan ponsel diam selama beberapa detik. Sensor yang sehat harus stabil daripada terus bergeser, melonjak, atau membeku.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Tes giroskop dan akselerometer online untuk ponsel', level: 2 },
    {
      type: 'paragraph',
      html: 'Gunakan tes sensor ponsel ini ketika rotasi layar terasa salah, game atau aplikasi AR melayang, aplikasi level gelembung terlihat tidak akurat, navigasi menunjuk ke arah yang salah, atau ponsel tidak bereaksi dengan benar terhadap kemiringan. Tes menampilkan perilaku giroskop, akselerometer, rotasi, dan level secara langsung sehingga Anda dapat membedakan masalah izin peramban dari masalah sensor atau kalibrasi yang sebenarnya.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Maksud pencarian utama', value: 'tes giroskop online' },
        { label: 'Juga memeriksa', value: 'drift akselerometer' },
        { label: 'Perangkat terbaik', value: 'ponsel atau tablet' },
      ],
    },
    { type: 'title', text: 'Apa yang ditunjukkan setiap pembacaan sensor', level: 3 },
    {
      type: 'table',
      headers: ['Pembacaan', 'Berguna untuk', 'Tanda peringatan'],
      rows: [
        ['Alpha', 'Memeriksa rotasi di sekitar sumbu vertikal, berguna untuk gerakan seperti kompas dan perubahan arah.', 'Tidak berubah saat memutar ponsel datar, melompat dalam jumlah besar, atau membeku di nol.'],
        ['Beta', 'Memeriksa kemiringan depan-belakang untuk rotasi layar, game, perataan kamera, dan kontrol AR.', 'Bergerak ke arah yang salah, macet di satu nilai, atau terus melayang saat ponsel diam.'],
        ['Gamma', 'Memeriksa guling kiri-kanan untuk rotasi lanskap, game balap, aplikasi level, dan stabilisator.', 'Satu sisi merespons berbeda, nilainya bising, atau gelembung tidak pernah kembali ke tengah di meja datar.'],
        ['Akselerasi X/Y/Z', 'Memeriksa respons akselerometer, deteksi guncangan, arah gravitasi, dan stabilitas gerakan.', 'Lonjakan besar saat diam, tidak ada respons terhadap gerakan, atau pembacaan tidak stabil setelah melepas casing.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gejala yang dibantu diagnosis oleh tes ini',
      html: '<p>Gunakan nilai langsung untuk menyelidiki rotasi otomatis yang tidak berfungsi, giroskop yang terasa tertunda, drift akselerometer, peringatan kalibrasi kompas, pelacakan AR yang meluncur, kesalahan level kamera, kontrol gerakan yang menarik ke satu sisi, atau ponsel yang hanya melaporkan gerakan di aplikasi bawaan tetapi tidak di peramban.</p>',
    },
    { type: 'title', text: 'Giroskop vs akselerometer vs kompas', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Giroskop', description: 'Mengukur kecepatan rotasi. Penting untuk AR, game, stabilisasi kamera, kontrol gerakan, dan perubahan orientasi yang halus.' },
        { title: 'Akselerometer', description: 'Mengukur akselerasi dan arah gravitasi. Mendukung kemiringan, deteksi guncangan, deteksi langkah, dan perilaku level gelembung digital.' },
        { title: 'Kompas / magnetometer', description: 'Membantu memperkirakan arah, tetapi dapat terganggu oleh magnet, benda logam, dudukan mobil, casing, speaker, laptop, dan perangkat elektronik di dekatnya.' },
      ],
    },
    { type: 'title', text: 'Cara menguji kalibrasi sensor dengan benar', level: 3 },
    {
      type: 'list',
      items: [
        'Lepaskan casing magnetik, dompet MagSafe, dudukan logam, klip pengontrol, dan aksesori sebelum menguji.',
        'Letakkan ponsel di atas meja datar yang kokoh dan tunggu beberapa detik sebelum menilai drift.',
        'Putar ponsel perlahan melalui setiap sumbu alih-alih langsung mengguncangnya.',
        'Bandingkan Safari atau Chrome dengan aplikasi sensor atau kompas bawaan jika peramban tidak menampilkan data.',
        'Mulai ulang perangkat dan ulangi tes jika pembacaan macet di beberapa aplikasi.',
      ],
    },
    {
      type: 'tip',
      title: 'Catatan izin iPhone dan Android',
      html: 'Di iPhone dan iPad, Safari mungkin meminta izin gerakan dan orientasi setelah sentuhan. Di Android, Chrome biasanya mengekspos sensor gerakan lebih langsung, tetapi pengaturan privasi, flag peramban, mode hemat baterai, dan webview tertanam masih dapat memblokir atau mengurangi data sensor.',
    },
    {
      type: 'table',
      headers: ['Masalah', 'Kemungkinan penyebab', 'Langkah selanjutnya'],
      rows: [
        ['Tidak ada nilai yang berubah', 'Izin ditolak, peramban tidak didukung, perangkat desktop, atau webview terbatas.', 'Buka di ponsel itu sendiri, gunakan Safari atau Chrome, izinkan akses gerakan, dan muat ulang halaman.'],
        ['Gelembung melayang di atas meja', 'Masalah kalibrasi, permukaan tidak rata, gangguan casing, atau noise akselerometer.', 'Lepas casing, gunakan permukaan datar yang dikenal, mulai ulang, dan bandingkan dengan aplikasi level bawaan.'],
        ['Arah kompas salah', 'Gangguan magnetik atau kalibrasi kompas sistem.', 'Jauhkan dari logam/elektronik dan gunakan alur kalibrasi kompas sistem operasi.'],
        ['Nilai melompat atau melonjak', 'Noise sensor, perangkat keras rusak, pembatasan peramban yang agresif, atau gerakan fisik tiba-tiba.', 'Uji saat diam, tutup aplikasi berat, dan bandingkan di peramban lain atau aplikasi bawaan.'],
      ],
    },
    {
      type: 'summary',
      title: 'Untuk apa tes ini berguna',
      items: [
        'Menguji giroskop ponsel secara online tanpa menginstal aplikasi.',
        'Memeriksa drift akselerometer dengan level gelembung langsung.',
        'Mencari tahu apakah kontrol gerakan gagal karena perangkat keras, kalibrasi, izin, atau dukungan peramban.',
        'Menyiapkan ponsel untuk AR, game, perataan kamera, navigasi, atau pemecahan masalah rotasi layar.',
      ],
    },
  ],
  ui: {
    startButton: 'Mulai Kalibrasi',
    permissionHint: 'Ketuk sekali untuk membuka sensor gerakan',
    privacyBadge: 'Data sensor lokal',
    privacyCopy: 'Pembacaan orientasi dan gerakan tetap berada dalam sesi peramban ini.',
    orientationPanel: 'Orientasi',
    motionPanel: 'Gerakan',
    bubblePanel: 'Level gelembung digital',
    statusReady: 'Siap untuk izin sensor',
    statusWaiting: 'Menunggu izin peramban',
    statusDenied: 'Akses sensor ditolak atau tidak tersedia',
    statusUnsupported: 'Sensor gerakan tidak diekspos oleh peramban ini',
    statusActive: 'Aliran sensor langsung aktif',
    steadyLabel: 'Stabil',
    movingLabel: 'Bergerak',
    shakingLabel: 'Berguncang',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Offset level',
    motionMagnitudeLabel: 'Besaran gerakan',
    cubeLabel: 'Kubus orientasi perangkat 3D',
    bubbleLabel: 'Indikator level gelembung',
    calibrationLabel: 'Derajat langsung',
  },
};
