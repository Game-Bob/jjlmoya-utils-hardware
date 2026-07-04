import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-audio-stereo';
const title = 'Tes Audio Stereo';
const description = 'Periksa saluran speaker kiri dan kanan, keseimbangan stereo, arah kabel, dan pencitraan headphone dengan nada uji yang dihasilkan browser.';

const faqData = [
  {
    question: 'Bagaimana cara menguji speaker kiri dan kanan secara online?',
    answer: 'Mulai dengan volume rendah, tekan Kiri lalu Kanan. Nada kiri seharusnya hanya terdengar dari speaker kiri atau earcup kiri, dan nada kanan hanya dari sisi kanan. Gunakan Tengah untuk mengkonfirmasi kedua sisi bermain seimbang.',
  },
  {
    question: 'Mengapa kedua speaker berbunyi saat tes kiri atau kanan?',
    answer: 'Beberapa perangkat, sistem operasi, speaker Bluetooth, mode mono, pengaturan aksesibilitas, atau peningkatan audio men-downmix stereo ke mono. Periksa keseimbangan sistem, pengaturan audio mono, kabel, dan efek audio spesifik aplikasi.',
  },
  {
    question: 'Bisakah ini mendiagnosis kabel speaker yang tertukar?',
    answer: 'Ya. Jika tombol Kiri berbunyi dari speaker kanan dan tombol Kanan berbunyi dari speaker kiri, jalur output terbalik di suatu tempat antara komputer, kabel, amplifier, speaker, atau headphone.',
  },
  {
    question: 'Apakah nada sinus aman untuk speaker dan headphone?',
    answer: 'Nada sinus pendek pada volume sedang biasanya aman. Hindari volume tinggi, sesi panjang, atau frekuensi sangat tinggi, terutama dengan headphone, speaker laptop kecil, atau amplifier yang tidak dikenal.',
  },
  {
    question: 'Apakah browser mempengaruhi pengujian stereo?',
    answer: 'Alat ini menggunakan Web Audio API StereoPannerNode. Ini dapat diandalkan di browser modern, tetapi output akhir tetap bergantung pada routing sistem operasi, driver, codec Bluetooth, DAC eksternal, dan kabel speaker.',
  },
];

const howToData = [
  {
    name: 'Atur volume awal yang rendah',
    text: 'Kurangi volume sistem dan gunakan penggeser volume alat sebelum memutar nada uji apa pun.',
  },
  {
    name: 'Uji setiap sisi',
    text: 'Tekan Kiri dan Kanan. Setiap nada harus jelas terisolasi ke speaker atau sisi headphone yang cocok.',
  },
  {
    name: 'Periksa keseimbangan tengah',
    text: 'Tekan Tengah. Nada harus muncul di tengah antara kedua speaker, tidak tertarik kuat ke satu sisi.',
  },
  {
    name: 'Gunakan sapuan',
    text: 'Jalankan Sapuan untuk mendengar gerakan di seluruh bidang stereo dan menemukan putus-putus, kabel terbalik, atau pencitraan tidak merata.',
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

export const content: ToolLocaleContent<StereoAudioTestUI> = {
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
      text: 'Tes Speaker Kiri dan Kanan Online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gunakan tes audio stereo online ini untuk memeriksa apakah speaker kiri dan kanan, headphone, earbud, soundbar, DAC, amplifier, atau speaker monitor Anda dirutekan dengan benar. Alat ini memainkan nada yang dihasilkan browser melalui saluran kiri, saluran kanan, kedua saluran, atau sapuan stereo bergerak sehingga Anda dapat dengan cepat mendeteksi saluran terbalik, output mono, speaker lemah, masalah keseimbangan, dan kesalahan kabel tanpa menginstal perangkat lunak audio.',
    },
    {
      type: 'paragraph',
      html: 'Pengaturan stereo yang benar mempertahankan arah: nada uji kiri harus berasal hanya dari speaker kiri atau earcup kiri, nada uji kanan hanya dari sisi kanan, dan nada tengah harus terdengar seimbang antara kedua sisi. Jika suara muncul di sisi yang salah, kedua sisi sekaligus, atau jauh lebih keras di satu sisi, masalahnya biasanya ada pada pengaturan output, mode aksesibilitas mono, kabel, routing Bluetooth, penempatan speaker, atau perangkat lunak peningkatan audio.',
    },
    {
      type: 'table',
      headers: ['Tombol', 'Apa yang seharusnya Anda dengar', 'Gunakan untuk mendiagnosis'],
      rows: [
        ['Kiri', 'Nada hanya dari speaker kiri, driver headphone kiri, atau earbud kiri.', 'Kabel terbalik, penempatan speaker salah, output mono, atau pemetaan ulang saluran.'],
        ['Kanan', 'Nada hanya dari speaker kanan, driver headphone kanan, atau earbud kanan.', 'Output tertukar, kabel adaptor salah, atau efek driver yang mengubah urutan saluran.'],
        ['Tengah', 'Nada muncul di tengah karena kedua saluran bermain seimbang.', 'Offset keseimbangan sistem, satu speaker lemah, mesh earbud tersumbat, atau gain amplifier tidak sama.'],
        ['Sapuan', 'Nada bergerak mulus melintasi gambar stereo dari sisi ke sisi.', 'Putus-putus, link Bluetooth tidak stabil, masalah fase, artefak surround virtual, atau pencitraan tidak merata.'],
      ],
    },
    {
      type: 'title',
      text: 'Masalah Stereo Paling Umum yang Ditemukan Tes Ini',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Saluran kiri dan kanan terbalik: tombol kiri berbunyi di sisi kanan, atau tombol kanan berbunyi di sisi kiri.',
        'Stereo runtuh menjadi mono: kiri, kanan, dan tengah semuanya terdengar hampir identik dari kedua speaker.',
        'Satu sisi lebih pelan: audio tengah tertarik ke satu speaker meskipun penggeser keseimbangan sistem terlihat di tengah.',
        'Headphone dipasang atau dikenakan dengan salah: langkah kaki game, panning musik, dan panggilan video terasa membingungkan secara spasial.',
        'Audio Bluetooth atau USB sedang diproses: soundbar, dock, headset, dan mode TV dapat men-downmix atau memvirtualisasikan sinyal.',
        'Penempatan speaker menyesatkan: speaker terlalu dekat dengan dinding, terhalang furnitur, atau lebih jauh dapat membuat gambar tengah bergeser.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Memperbaiki Audio Kiri dan Kanan yang Terbalik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Untuk speaker kabel, tukar colokan kiri dan kanan di amplifier, antarmuka audio, DAC, atau output komputer.',
        'Untuk speaker pasif, konfirmasi speaker kiri terhubung ke terminal kiri amplifier dan speaker kanan ke terminal kanan.',
        'Untuk headphone, periksa apakah dikenakan dalam orientasi yang benar dan uji tanpa adaptor, kabel ekstensi, atau kabel splitter.',
        'Untuk Windows atau macOS, periksa keseimbangan output dan nonaktifkan audio mono di pengaturan aksesibilitas atau suara.',
        'Untuk speaker Bluetooth dan soundbar, nonaktifkan surround virtual, mode pesta, audio ganda, koreksi ruangan, atau mode suara TV saat pengujian.',
        'Untuk antarmuka audio, DAW, dan mixer, periksa routing saluran, kontrol pan, pengaturan monitor mix, dan mixer perangkat lunak apa pun yang disediakan oleh pabrikan.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Menginterpretasikan Tes Speaker Tengah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nada tengah bukanlah speaker tengah fisik terpisah dalam pengaturan dua saluran normal. Ini adalah sinyal yang sama yang dikirim secara merata ke kiri dan kanan. Pada headphone seharusnya terasa di tengah di dalam kepala; pada speaker seharusnya membentuk pusat phantom di antaranya. Jika condong ke kiri atau kanan, periksa keseimbangan sistem, jarak speaker, sudut speaker, kenop volume, trim amplifier, kecocokan earbud, debu di grille driver, dan apakah satu speaker terhalang sebagian atau rusak.',
    },
    {
      type: 'table',
      headers: ['Apa yang terjadi', 'Kemungkinan penyebab', 'Langkah selanjutnya'],
      rows: [
        ['Kiri berbunyi dari kedua sisi', 'Audio mono, downmixing, atau pemrosesan audio spasial.', 'Nonaktifkan output mono dan surround virtual, lalu uji lagi.'],
        ['Kiri berbunyi dari sisi kanan', 'Saluran tertukar di suatu tempat dalam rantai pemutaran.', 'Tukar kabel atau ubah routing saluran di driver, mixer, atau amplifier.'],
        ['Tengah lebih keras di satu sisi', 'Keseimbangan, penempatan, kerusakan driver, kecocokan telinga, atau grille speaker tersumbat.', 'Bandingkan dengan headset atau pasangan speaker lain dan periksa penempatan fisik.'],
        ['Sapuan melompat atau menghilang', 'Ketidakstabilan Bluetooth, artefak peningkatan audio, atau kabel/konektor yang rusak.', 'Uji dengan output kabel atau kabel lain untuk mengisolasi titik lemah.'],
      ],
    },
    {
      type: 'title',
      text: 'Tes Kiri Kanan Headphone dan Earbud',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk headphone dan earbud, tes kiri/kanan sangat berguna sebelum bermain game, mengedit audio, menonton film, atau bergabung dengan panggilan. Pasang headset seperti biasa, mulai dengan volume rendah, tekan Kiri dan Kanan, dan konfirmasi setiap nada sampai di telinga yang benar. Jika kedua sisi terdengar sama, perangkat Anda mungkin menggunakan audio mono. Jika satu sisi tumpul atau lebih pelan, bersihkan mesh earbud, pasang kembali ujung telinga, periksa kabel, dan bandingkan dengan perangkat output lain.',
    },
    {
      type: 'title',
      text: 'Tips Pengujian Audio yang Aman',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Mulai dengan volume sistem rendah, terutama pada headphone.',
        'Gunakan Loop sampai Berhenti hanya ketika Anda secara aktif membutuhkan suara terus menerus untuk penelusuran kabel, penempatan, atau penyesuaian keseimbangan.',
        'Jaga nada uji tetap pendek saat menggunakan speaker kecil; gelombang sinus terus menerus dapat menjadi tidak nyaman dengan cepat.',
        'Hindari gain maksimum pada speaker laptop kecil dan amplifier yang tidak dikenal.',
        'Jangan letakkan headphone di telinga Anda sampai Anda mengkonfirmasi volume aman.',
        'Setelah mengganti kabel atau pengaturan, ulangi tes kiri, kanan, tengah, dan sapuan dalam urutan itu.',
        'Untuk kalibrasi studio atau home theater, gabungkan tes cepat ini dengan meteran SPL atau rutinitas kalibrasi receiver.',
      ],
    },
    {
      type: 'title',
      text: 'Diagnosis Cepat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jika kiri dan kanan tertukar, periksa kabel fisik terlebih dahulu karena itu adalah perbaikan tercepat untuk speaker desktop, amplifier, dan antarmuka audio. Jika kedua tombol berbunyi dari kedua sisi, cari output mono, audio spasial, surround virtual, atau perangkat yang sengaja men-downmix stereo. Jika tengah tidak di tengah tetapi kiri dan kanan dirutekan dengan benar, masalahnya biasanya keseimbangan, penempatan, kecocokan telinga, grille tersumbat, atau output speaker tidak merata.',
    },
  ],
  ui: {
    left: 'Kiri',
    center: 'Tengah',
    right: 'Kanan',
    sweep: 'Sapuan',
    stop: 'Berhenti',
    volume: 'Volume',
    duration: 'Durasi',
    infiniteMode: 'Loop sampai Berhenti',
    infiniteModeHint: 'Jaga saluran tetap bermain untuk pengujian berkelanjutan.',
    secondsUnit: 'd',
    hertzUnit: 'Hz',
    tone: 'Nada',
    balance: 'Keseimbangan',
    activeIdle: 'Siap',
    activeLeft: 'Memutar saluran kiri',
    activeCenter: 'Memutar nada tengah',
    activeRight: 'Memutar saluran kanan',
    activeSweep: 'Menyapu bidang stereo',
    safety: 'Mulai rendah. Nada uji bisa keras melalui headphone, amplifier, dan speaker laptop kecil.',
    leftSpeaker: 'Speaker kiri',
    rightSpeaker: 'Speaker kanan',
    centerLine: 'Bidang stereo',
  },
};
