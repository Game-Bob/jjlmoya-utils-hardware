import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-getaran-gamepad-online';
const title = 'Tes Getaran Gamepad Online';
const description =
  'Uji motor haptik dan getaran Dual-Rumble gamepad Anda di browser. Mendukung Xbox, DualShock, DualSense, dan kontroler generik.';

const faqData = [
  {
    question: 'Apa yang saya perlukan untuk menguji gamepad saya secara online?',
    answer:
      'Cukup hubungkan gamepad Anda ke komputer atau perangkat seluler melalui kabel USB atau pasangkan via Bluetooth. Setelah terhubung, tekan tombol apa saja agar terdeteksi.',
  },
  {
    question: 'Apakah ini berfungsi dengan semua model gamepad?',
    answer:
      'Sebagian besar gamepad modern dari merek terkenal (seperti PlayStation atau Xbox) kompatibel jika perangkat dan sistem operasi Anda mendukungnya.',
  },
  {
    question: 'Sisi kanan gamepad saya bergetar lebih lemah dari sisi kiri, apakah itu normal?',
    answer:
      'Ya, sangat normal. Gamepad biasanya memiliki desain asimetris di mana satu sisi menangani getaran yang kuat dan dalam, dan sisi lainnya menangani getaran yang cepat dan halus.',
  },
  {
    question: 'Apakah menjalankan tes ini menguras banyak baterai?',
    answer:
      'Getaran adalah salah satu fungsi yang paling banyak memakan energi pada gamepad nirkabel. Menjalankan tes yang terus-menerus dan lama akan menguras baterai lebih cepat dari biasanya.',
  },
];

const howToData = [
  {
    name: 'Hubungkan dan nyalakan gamepad Anda',
    text: 'Hubungkan gamepad Anda ke PC, Mac, atau seluler via kabel USB atau Bluetooth.',
  },
  {
    name: 'Tekan tombol pada gamepad',
    text: 'Browser mengharuskan Anda menekan setidaknya satu tombol agar gamepad terdeteksi dan memulai komunikasi web.',
  },
  {
    name: 'Sesuaikan motor getaran',
    text: 'Konfigurasikan daya Motor Kuat (Low) dan Motor Halus (High) secara independen.',
  },
  {
    name: 'Jalankan pola',
    text: 'Tekan salah satu preset atau konfigurasikan parameter secara manual dan kirim sinyal untuk merasakan setiap komponen.',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Cara memeriksa getaran gamepad gaming Anda', level: 2 },
    {
      type: 'paragraph',
      html: 'Umpan balik haptik adalah salah satu elemen perangkat keras gaming yang paling imersif. Ketika sebuah motor gagal, gejala awalnya biasanya berupa dengungan abnormal atau getaran asimetris. Mendiagnosisnya sejak dini mencegah kegagalan yang lebih besar.',
    },
    { type: 'title', text: 'Mengapa menjalankan tes getaran?', level: 3 },
    {
      type: 'paragraph',
      html: 'Saat membeli gamepad bekas, setelah memperbarui driver, atau setelah jatuh, menguji motor haptik membantu membedakan kegagalan perangkat keras yang nyata dari masalah perangkat lunak. Kompatibel dengan Xbox, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro, dan gamepad USB generik.',
    },
    { type: 'title', text: 'Arsitektur Dual-Rumble vs. Aktuator Linier', level: 3 },
    {
      type: 'paragraph',
      html: 'Gamepad klasik (Xbox, DualShock) menggunakan dua mikro-motor asimetris: bagian kiri menghasilkan getaran yang dalam dan bergemuruh; bagian kanan menghasilkan dengungan yang cepat dan bernada tinggi. Perangkat canggih seperti DualSense menggunakan aktuator linier yang mensimulasikan tekstur dan hambatan.',
    },
    { type: 'title', text: 'Panduan diagnosis berdasarkan gejala', level: 3 },
    {
      type: 'paragraph',
      html: 'Aktifkan setiap motor secara independen pada 100%. Jika keduanya terdengar sama, gamepad tersebut mungkin merupakan replika dengan motor tunggal. Jika salah satu tidak merespons, periksa koneksi sebelum membuka casing. Uji intensitas fraksional: motor berkualitas merespons secara bertahap, bukan seperti sakelar on/off.',
    },
  ],
  ui: {
    badge: 'Tes Getaran',
    title: 'Penguji Getaran Gamepad',
    description: 'Kontrol langsung atas motor Dual-Rumble gamepad Anda.',
    deviceDisconnected: 'Gamepad Terputus',
    deviceDisconnectedSub: 'Tekan tombol pada gamepad untuk memulai',
    deviceFallback: 'Gamepad Terhubung',
    deviceConnectedSub: 'Koneksi stabil. Siap untuk diuji.',
    noSupportWarning: "Dukungan Dual-Rumble tidak terdeteksi di browser Anda. Menggunakan getaran generik dasar.",
    tabPresets: 'Preset Utama',
    tabCustom: 'Presisi Murni',
    presetHeavyTitle: 'Hantaman Palu',
    presetHeavyDesc: 'Motor berat pada maksimal selama 300ms. Mensimulasikan pukulan kuat.',
    presetLightTitle: 'Dengungan Lebah',
    presetLightDesc: 'Hanya motor kanan. Ideal untuk mendeteksi dengungan yang tidak biasa.',
    presetHeartbeatTitle: 'Detak Jantung',
    presetHeartbeatDesc: 'Denyut berurutan yang halus. Sempurna untuk memeriksa retensi inersia.',
    presetSongTitle: 'Ritme Koin',
    presetSongDesc: 'Mensimulasikan suara koin berturut-turut. Singkat dan taktil.',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Klasik Queen di tangan Anda: boom, boom, clap!",
    presetEarthquakeTitle: 'Gempa Maksimum!',
    presetEarthquakeDesc: 'Kedua motor pada kekuatan ledakan 100%. SANGAT intens.',
    customStrongLabel: 'Kekuatan Kuat (Kiri)',
    customWeakLabel: 'Kekuatan Lemah (Kanan)',
    customDurationLabel: 'Durasi Denyut',
    btnSendSignal: 'KIRIM SINYAL SEKARANG',
  },
};
