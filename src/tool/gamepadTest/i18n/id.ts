import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-gamepad-online';
const title = 'Tes Gamepad & Kontroler Online';
const description = 'Uji kontroler Xbox, PlayStation, atau PC Anda. Visualisasikan dead zone, drift joystick, dan tombol.';

const faqData = [
  {
    question: 'Apa itu Joystick Drift?',
    answer: 'Drift terjadi ketika kontroler mendeteksi gerakan tanpa joystick disentuh. Hal ini disebabkan oleh keausan pada potensiometer internal, yang mengirimkan sinyal listrik palsu ke arah yang konstan.',
  },
  {
    question: 'Bagaimana cara memperbaiki drift melalui software?',
    answer: 'Jika drift ringan, Anda dapat mengonfigurasi "Dead Zone" (Zona Mati) yang lebih besar di pengaturan game Anda. Ini akan mengabaikan gerakan joystick kecil di bagian tengah.',
  },
  {
    question: 'Apakah ini kompatibel dengan kontroler PS5, Xbox, dan Switch?',
    answer: 'Ya. Alat kami menggunakan Gamepad API standar dari browser modern, yang mendeteksi hampir semua kontroler yang terhubung via USB atau Bluetooth, termasuk DualSense, DualShock 4, dan Kontroler Xbox.',
  },
  {
    question: 'Mengapa browser tidak mendeteksi kontroler saya?',
    answer: 'Untuk keamanan, browser hanya mengaktifkan gamepad setelah penekanan tombol pertama. Jika tidak muncul, tekan tombol apa saja (seperti A atau X) dan pastikan Anda tidak berada dalam mode penyamaran yang ketat.',
  },
];

const howToData = [
  {
    name: 'Hubungkan kontroler',
    text: 'Colokkan gamepad Anda via USB oder sambungkan via Bluetooth ke komputer Anda.',
  },
  {
    name: 'Aktifkan deteksi',
    text: 'Gerakkan joystick atau tekan tombol apa pun agar browser mengenali perangkat yang terhubung.',
  },
  {
    name: 'Uji dead zone',
    text: 'Lepaskan joystick dan amati sumbu di layar. Jika nilainya tidak 0.0000, Anda memiliki sedikit drift.',
  },
  {
    name: 'Verifikasi tombol dan getaran',
    text: 'Tekan setiap tombol dan trigger. Indikator visual harus menyala dan jika kontroler Anda mendukungnya, Anda dapat menguji motor getaran.',
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

export const content: ToolLocaleContent<TestMandoUI> = {
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
      text: 'Tes Gamepad Online: Deteksi Drift dan Masalah Joystick',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat gratis untuk menguji kontroler Xbox, PlayStation, Switch, dan lainnya. Visualisasikan dead zone, deteksi drift, dan uji getaran.',
    },
    {
      type: 'title',
      text: 'Apa itu Joystick Drift',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Drift adalah cacat umum pada joystick analog di mana stick mencatat gerakan tanpa disentuh. Hal ini disebabkan oleh keausan pada potensiometer internal.',
    },
    {
      type: 'title',
      text: 'Kompatibilitas Kontroler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kompatibel dengan Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro, dan hampir semua gamepad USB atau Bluetooth modern.',
    },
  ],
  ui: {
    badge: 'Tes Input',
    title: 'Tes Gamepad dan Kontroler',
    description: 'Uji kontroler Anda dan deteksi masalah.',
    connectionMessage: 'Hubungkan perangkat USB atau Bluetooth Anda',
    connectionStatus: 'Terhubung',
    axisLabel: 'Sumbu',
    buttonsLabel: 'Tombol',
    vibrationTitle: 'Tes Getaran',
    vibrationDescription: 'Membutuhkan dukungan browser dan gamepad yang kompatibel.',
    vibrationLow: 'Rendah (Rumble)',
    vibrationHigh: 'Tinggi (Buzz)',
    eventHistoryTitle: 'Riwayat Kejadian',
    eventHistoryClear: 'Bersihkan',
    eventWaiting: 'Menunggu kejadian...',
    gameStartBtn: 'MULAI TANTANGAN',
    gameControllerWarning: 'Hubungkan gamepad atau gunakan keyboard',
    gameTimer: 'Timer',
    gameScore: 'Skor',
    gameInstruction: 'Tekan cepat',
    gameCompleted: 'Tantangan Selesai',
    gameNewRecord: 'REKOR BARU',
    gameRestartBtn: 'Coba Lagi',
    gameFeedback: 'Anda adalah legenda tombol',
    gameIntroTitlePre: 'Refleks ',
    gameIntroHighlight: 'Pro Gamer',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Uji latensi kontroler dan kecepatan reaksi Anda. Anda punya waktu ',
    gameIntroDescSeconds: '30 detik',
    gameIntroDescPost: ' untuk menguasai tombol.',
    gameShareBtn: 'BAGIKAN PERINGKAT',
    gameLogConnected: 'Terhubung',
    gameLogDisconnected: 'Terputus',
    gameLogCleared: 'Log dibersihkan...',
    gameLogBtnPrefix: 'Tombol',
    gameVibNotSupported: 'Getaran tidak didukung.',
    gameVibLow: 'Rendah',
    gameVibHigh: 'Tinggi',
    gameMoveStick: 'GERAKKAN STICK',
    gamePress: 'TEKAN',
    rankLegendaryName: 'LEGENDA',
    rankLegendaryDesc: 'Jari-jari Anda bergerak secepat kilat.',
    rankLegendaryFlavor: 'Gamepad saya terbang!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Anda memiliki refleks baja dan kontroler yang terkalibrasi dengan baik.',
    rankProFlavor: 'Gamepad saya terbang!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Lumayan, tapi Anda butuh lebih banyak latihan untuk permainan kompetitif.',
    rankGamerFlavor: 'Hampir saja!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Apakah Anda yakin kontroler Anda sudah menyala?',
    rankNoobFlavor: 'Gamepad-nya tidak mau kerja sama!',
    gameShareText: 'Bisakah Anda mengalahkan saya?',
    gameShareScorePrefix: 'Saya dapat',
    gameShareScoreSuffix: 'poin',
    gameShareTitle: 'Tes Gamepad Online',
  },
};
