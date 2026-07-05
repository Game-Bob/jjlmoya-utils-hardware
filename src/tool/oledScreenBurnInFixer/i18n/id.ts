import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'perbaikan-burn-in-layar-oled';
const title = 'Perbaikan Burn In Layar OLED';
const description =
  'Jalankan perbaikan burn in OLED layar penuh dan pelatih piksel macet LCD dengan siklus warna RGB cepat, derau putih, peringatan fotosensitivitas wajib, dan pengatur waktu bawaan.';

const faqData = [
  {
    question: 'Apakah perbaikan burn in OLED dapat menghilangkan burn in permanen?',
    answer:
      'Tidak ada alat peramban yang dapat membalikkan keausan subpiksel organik permanen. Pelatih piksel dapat mengurangi retensi gambar sementara, membuat ghosting ringan kurang terlihat, atau membantu mendiagnosis apakah suatu bekas adalah retensi sementara atau burn in permanen.',
  },
  {
    question: 'Apakah ini aman bagi penderita epilepsi fotosensitif?',
    answer:
      'Pengujian menggunakan warna yang berkedip cepat dan derau kontras tinggi. Penderita epilepsi fotosensitif, sensitivitas migrain, risiko kejang, atau ketidaknyamanan akibat lampu berkedip tidak boleh menjalankannya.',
  },
  {
    question: 'Apakah ini dapat memperbaiki piksel LCD yang macet?',
    answer:
      'Terkadang dapat membantu piksel macet yang tetap merah, hijau, biru, atau putih dengan mengubah status subpiksel secara cepat. Tidak dapat memperbaiki piksel hitam mati atau kerusakan fisik panel.',
  },
  {
    question: 'Berapa lama saya harus menjalankan pelatih piksel?',
    answer:
      'Mulai dengan 5 hingga 10 menit untuk piksel macet atau retensi gambar ringan. Sesi yang lebih lama harus diawasi, kecerahan dijaga wajar, dan layar dibiarkan mendingin.',
  },
  {
    question: 'Mengapa alat ini menggunakan canvas alih alih video?',
    answer:
      'Pola dibuat langsung di HTML5 Canvas, sehingga halaman tidak memerlukan file video berat. Itu membuat pemuatan tetap cepat dan membuat siklus warna dan derau responsif terhadap ukuran layar penuh.',
  },
];

const howToData = [
  {
    name: 'Baca peringatan fotosensitivitas',
    text: 'Jangan melanjutkan jika lampu berkedip, pola kontras tinggi, migrain, atau risiko kejang dapat memengaruhi Anda atau seseorang di sekitar.',
  },
  {
    name: 'Atur sesi pertama yang singkat',
    text: 'Pilih 5 hingga 10 menit untuk lintasan awal, pilih mode Hibrida, dan jaga kecerahan pada tingkat yang nyaman.',
  },
  {
    name: 'Mulai perbaikan layar penuh',
    text: 'Konfirmasi peringatan, tekan Mulai Perbaikan, dan biarkan canvas menelusuri warna RGB dan derau tanpa memindahkan jendela lain di atas layar.',
  },
  {
    name: 'Periksa bekasnya setelahnya',
    text: 'Hentikan pengujian, tampilkan layar abu abu netral, putih, hitam, merah, hijau, dan biru, lalu bandingkan apakah gambar bayangan atau piksel macet berubah.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'Perbaikan Burn In OLED dan Pelatih Piksel Macet LCD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Perbaikan burn in layar OLED ini adalah pelatih piksel layar penuh untuk retensi gambar sementara, gambar bayangan samar, dan beberapa piksel LCD yang macet. Alat ini menghasilkan pola cepat merah, hijau, biru, putih, hitam, kuning, dan derau langsung di HTML5 Canvas. Tidak ada file video, tidak ada aset gambar eksternal, dan tidak ada langkah pengunduhan: peramban melukis setiap bingkai pada ukuran layar saat ini.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Peringatan fotosensitivitas',
      icon: 'mdi:alert',
      badge: 'Wajib',
      html: 'Pola perbaikan menggunakan kilatan cepat, transisi kontras tinggi, dan derau putih. Jangan jalankan jika Anda memiliki epilepsi fotosensitif, risiko kejang, sensitivitas migrain, pusing yang dipicu oleh lampu berkedip, atau jika seseorang di sekitar dapat terpengaruh. Hentikan segera jika Anda merasakan ketegangan mata, mual, sakit kepala, atau ketidaknyamanan.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini berguna ketika pertanyaan praktisnya adalah: <strong>apakah bekas ini retensi sementara yang dapat memudar atau keausan panel permanen?</strong> Sesi singkat yang diawasi terkadang dapat mengurangi gambar bayangan yang disebabkan oleh elemen antarmuka statis yang tertahan, dan terkadang dapat membangunkan subpiksel yang macet pada satu warna. Alat ini tidak dapat membangun kembali material OLED yang aus, memperbaiki lapisan yang retak, memulihkan jalur penggerak yang mati, atau menjamin pemulihan.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'file video dimuat', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'latihan subpiksel primer', icon: 'mdi:palette' },
        { value: '1-120 mnt', label: 'pengatur waktu sesi bawaan', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'eksekusi sisi klien', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Apa Arti Burn In, Retensi Gambar, dan Ghosting',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Burn in OLED',
          definition: 'Keausan subpiksel organik yang tidak merata dan permanen. Logo statis, bilah tugas, bilah navigasi, atau HUD game dapat meninggalkan bentuk yang terlihat karena piksel tersebut menua secara berbeda dari bagian panel lainnya.',
        },
        {
          term: 'Retensi gambar sementara',
          definition: 'Gambar bayangan berumur pendek yang tetap ada setelah konten statis menghilang. Dapat memudar dengan konten campuran normal, siklus kompensasi, atau pola latihan piksel.',
        },
        {
          term: 'Piksel LCD macet',
          definition: 'Piksel atau subpiksel yang macet menampilkan merah, hijau, biru, putih, atau warna tetap lainnya. Perubahan status yang cepat terkadang dapat membebaskannya jika masalahnya bukan kerusakan fisik.',
        },
        {
          term: 'Piksel mati',
          definition: 'Piksel yang tetap hitam karena tidak lagi memancarkan atau mentransmisikan cahaya dengan benar. Pelatih piksel peramban biasanya tidak dapat menghidupkan kembali piksel yang benar benar mati.',
        },
        {
          term: 'Ghosting LCD',
          definition: 'Jejak gerakan yang disebabkan oleh respons piksel yang lambat. Ini berbeda dari burn in layar, meskipun pengguna sering menggambarkan keduanya sebagai gambar bayangan.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Retensi sementara',
          description: 'Biasanya memudar setelah konten campuran, rutinitas penyegaran layar, atau sesi RGB dan derau singkat.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Terlihat setelah konten statis', 'Sering lebih lembut di tepi', 'Dapat membaik dalam hitungan menit atau jam'],
        },
        {
          title: 'Burn in permanen',
          description: 'Keausan OLED tidak merata yang tetap terlihat setelah istirahat, siklus kompensasi, dan konten bervariasi.',
          icon: 'mdi:contrast-circle',
          points: ['Cocok dengan antarmuka statis jangka panjang', 'Paling terlihat pada warna datar', 'Tidak hilang setelah latihan'],
        },
        {
          title: 'Piksel macet',
          description: 'Satu titik atau kelompok kecil yang terkunci pada satu warna, bukan gambar bayangan besar.',
          icon: 'mdi:grain',
          points: ['Sering selebar satu piksel', 'Bisa merah, hijau, biru, atau putih', 'Terkadang merespons perubahan warna cepat'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara Menggunakan Pelatih Piksel dengan Aman',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Turunkan kecerahan sebelum sesi pertama, terutama pada ponsel OLED, TV OLED, dan panel OLED laptop.',
        'Mulai dengan 5 hingga 10 menit; jangan tinggalkan layar tanpa pengawasan untuk sesi panjang.',
        'Gunakan layar penuh agar area yang terkena menerima pola yang sama dengan bagian panel lainnya.',
        'Beri tahu ruangan tentang lampu berkedip; jangan jalankan pengujian di dekat orang yang belum menyetujuinya.',
        'Hentikan jika panel menjadi hangat tidak biasa, jika peramban tersendat parah, atau jika Anda merasa tidak nyaman.',
        'Setelah sesi, periksa layar abu abu netral, putih, hitam, merah, hijau, dan biru untuk membandingkan hasil.',
      ],
    },
    {
      type: 'table',
      headers: ['Masalah', 'Mode Pertama', 'Durasi Pertama', 'Panduan Kecerahan'],
      rows: [
        ['Gambar bayangan OLED samar', 'Hibrida RGB plus derau', '5-10 menit', 'Nyaman, bukan maksimum'],
        ['Retensi logo statis baru', 'Siklus RGB', '10-20 menit', 'Kecerahan sedang'],
        ['Piksel LCD macet warna tunggal', 'Derau atau Hibrida', '5-15 menit', 'Kecerahan desktop normal'],
        ['Burn in permanen lama', 'Hibrida hanya untuk diagnosis', '5 menit', 'Hindari sesi panjang dengan kecerahan tinggi'],
        ['Piksel hitam mati', 'Tidak disarankan sebagai perbaikan', 'Hanya inspeksi', 'Tidak ada pelatih piksel yang dapat menjamin pemulihan'],
      ],
    },
    {
      type: 'tip',
      title: 'Gunakan sesi singkat terlebih dahulu',
      html: 'Sesi berkedip yang panjang tidak otomatis lebih baik. Jika bekas bersifat sementara, Anda sering melihat perubahan setelah lintasan singkat. Jika tidak ada yang berubah setelah percobaan yang wajar dan rutinitas penyegaran panel normal, masalahnya mungkin keausan permanen atau cacat perangkat keras.',
    },
    {
      type: 'title',
      text: 'Memilih Antara Siklus RGB, Derau Putih, dan Mode Hibrida',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Artefak yang berbeda merespons pola yang berbeda. Siklus merah hijau biru melatih subpiksel primer dalam urutan yang terkendali. Derau putih dengan cepat mengganti luminansi di banyak area kecil, yang dapat membantu mengekspos dan melatih piksel macet yang terisolasi. Mode hibrida bergantian antara keduanya, menjadikannya pilihan pertama terbaik saat Anda tidak yakin apakah masalahnya retensi gambar atau subpiksel yang malas.',
    },
    {
      type: 'table',
      headers: ['Mode', 'Apa yang Dilakukan', 'Terbaik Untuk', 'Perhatikan'],
      rows: [
        ['Siklus RGB', 'Bidang primer dan kontras tinggi layar penuh', 'Retensi OLED dan inspeksi saluran warna', 'Kedipan terlihat'],
        ['Derau putih', 'Derau hitam putih acak di seluruh panel', 'Piksel macet tunggal dan kelompok kecil', 'Intensitas visual lebih tinggi'],
        ['Hibrida', 'Bergantian bidang warna dan derau', 'Alur kerja umum perbaikan burn in OLED', 'Gunakan pengatur waktu singkat terlebih dahulu'],
      ],
    },
    {
      type: 'proscons',
      title: 'Pelatih piksel online: manfaat dan batasan realistis',
      items: [
        {
          pro: 'Berjalan langsung di peramban tanpa menginstal perangkat lunak atau memuat file video.',
          con: 'Tidak dapat membalikkan keausan material OLED permanen atau kerusakan fisik panel.',
        },
        {
          pro: 'Canvas layar penuh menutupi tampilan dengan bingkai RGB dan derau yang dibuat.',
          con: 'Pengaturan waktu peramban, kinerja perangkat, dan dukungan layar penuh dapat memengaruhi konsistensi animasi.',
        },
        {
          pro: 'Berguna untuk diagnosis pertama sebelum mencoba rutinitas pemeliharaan panel pabrikan.',
          con: 'Tidak boleh menggantikan layanan garansi untuk panel baru dengan cacat yang jelas.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Panduan Khusus OLED',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Piksel OLED memancarkan cahayanya sendiri. Ketika elemen statis tetap di layar selama berjam jam, subpiksel di bawah elemen tersebut dapat menua pada tingkat yang berbeda. Itulah mengapa burn in sering mengikuti bentuk logo saluran TV, bilah status ponsel, tombol navigasi, HUD game, bilah sisi aplikasi streaming, atau bilah tugas desktop. Pelatih piksel dapat membuat retensi sementara memudar lebih cepat, tetapi penuaan diferensial permanen tetap menjadi masalah material.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Periksa perawatan panel bawaan terlebih dahulu',
      html: 'Banyak TV, monitor, laptop, dan ponsel OLED menyertakan penyegaran piksel, penyegaran panel, peredupan logo, pergeseran layar, peredupan bilah tugas, atau siklus kompensasi. Gunakan rutinitas pabrikan sesuai petunjuknya, terutama jika layar masih dalam garansi. Alat online ini paling baik diperlakukan sebagai diagnosis ringan dan latihan retensi sementara, bukan pengganti firmware perawatan panel.',
    },
    {
      type: 'list',
      items: [
        'Jika gambar bayangan masih baru, biarkan layar menampilkan konten bervariasi atau beristirahat sebelum mengasumsikan burn in permanen.',
        'Jika bekas cocok dengan logo statis yang sudah bertahun tahun, kecil kemungkinan pelatih piksel dapat menghilangkannya sepenuhnya.',
        'Jika panel memiliki siklus penyegaran bawaan, jalankan hanya sesering yang direkomendasikan pabrikan.',
        'Hindari menjalankan pola pengujian kecerahan maksimum selama berjam jam; panas dan kecerahan berkontribusi pada keausan.',
        'Sembunyikan bilah tugas, aktifkan penghemat layar, dan kurangi kecerahan antarmuka statis untuk mencegah kekambuhan.',
      ],
    },
    {
      type: 'title',
      text: 'Panduan Piksel Macet LCD',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Panel LCD tidak terbakar dengan cara yang sama seperti panel OLED, tetapi dapat menunjukkan piksel macet, bekas tekanan, cacat panel, dan persistensi gambar sementara. Piksel macet yang tetap merah, hijau, biru, cyan, magenta, kuning, atau putih mungkin disebabkan oleh subpiksel yang tidak beralih dengan benar. Perubahan cepat terkadang dapat membantu, meskipun tidak ada perbaikan online yang dijamin.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Piksel mati versus piksel macet',
      icon: 'mdi:information-outline',
      badge: 'Diagnosis',
      html: 'Titik berwarna memiliki peluang lebih baik daripada titik hitam. Piksel hitam pada setiap warna uji biasanya mati atau terblokir. Piksel berwarna yang berubah pada beberapa latar belakang tetapi tidak pada yang lain mungkin merupakan subpiksel yang macet dan merupakan kandidat yang lebih baik untuk sesi latihan piksel singkat.',
    },
    {
      type: 'summary',
      title: 'Sebelum menggunakan tekanan atau metode fisik',
      items: [
        'Jangan tekan keras pada panel OLED, layar sentuh, atau layar laptop yang rapuh.',
        'Hindari alat tajam, pena berbalut kain, dan metode apa pun yang dapat menggores permukaan.',
        'Gunakan latihan perangkat lunak terlebih dahulu, lalu dukungan garansi jika cacat tetap ada.',
        'Dokumentasikan cacat dengan foto makro jika layar masih baru dan kebijakan pengembalian masih berlaku.',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Canvas Lebih Baik daripada Video Perbaikan Berat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Perbaikan burn in berbasis video harus mengunduh bingkai terenkode, mendekodenya, menskalakannya ke layar, dan berharap kompresi tidak memperhalus transisi yang tepat. Alat ini menghasilkan setiap bingkai langsung di peramban. Bidang RGB solid, derau dibuat untuk ukuran canvas saat ini, dan halaman menghindari file media besar yang akan memperlambat pemuatan atau mengurangi PageSpeed.',
    },
    {
      type: 'list',
      items: [
        'Tanpa file video eksternal berarti rendering pertama lebih cepat dan ketergantungan jaringan lebih sedikit.',
        'Keluaran canvas menskalakan ke permukaan layar penuh alih alih dibatasi oleh resolusi video.',
        'Pengatur waktu dapat menghentikan perbaikan secara otomatis alih alih memutar video tanpa henti.',
        'Mode, kecepatan, durasi, dan intensitas dapat diubah tanpa memuat aset lain.',
      ],
    },
    {
      type: 'message',
      title: 'Harapan praktis',
      ariaLabel: 'Harapan perbaikan burn in',
      html: 'Gunakan alat ini sebagai langkah pertama yang terkendali: kurangi retensi sementara, latih kemungkinan piksel macet, dan kumpulkan bukti. Jika bekas bertahan dari konten bervariasi, rutinitas penyegaran panel bawaan, dan sesi latihan singkat yang hati hati, perlakukan sebagai masalah perangkat keras atau garansi.',
    },
  ],
  ui: {
    safetyTitle: 'Peringatan lampu berkedip',
    safetyBody: 'Pola perbaikan ini dengan cepat memancarkan warna solid dan derau kontras tinggi. Jangan gunakan jika Anda atau siapa pun di sekitar dapat terpengaruh oleh epilepsi fotosensitif, kejang, migrain, pusing, atau sensitivitas lampu berkedip.',
    safetyChecklist: 'Jaga kecerahan tetap wajar, awasi sesi, dan hentikan segera jika Anda merasa tidak nyaman.',
    safetyConfirm: 'Saya memahami risiko fotosensitivitas dan ingin mengaktifkan tombol perbaikan.',
    safetyContinue: 'Lanjutkan ke pengaturan',
    startRepair: 'Mulai Perbaikan (Layar Penuh)',
    controlsLabel: 'Kontrol perbaikan layar OLED',
    modeLabel: 'Mode pola',
    modeCycle: 'Siklus RGB',
    modeNoise: 'Derau putih',
    modeHybrid: 'Hibrida',
    modeCycleDescription: 'Warna primer solid untuk retensi gambar dan pemeriksaan saluran.',
    modeNoiseDescription: 'Derau frekuensi tinggi untuk piksel macet tunggal dan kelompok kecil.',
    modeHybridDescription: 'Lintasan pertama terbaik: bergantian bidang RGB dengan tekstur derau.',
    speedLabel: 'Kecepatan siklus',
    durationLabel: 'Durasi',
    durationShort: '5 mnt',
    durationStandard: '10 mnt',
    durationDeep: '20 mnt',
    durationShortDescription: 'Pemeriksaan cepat',
    durationStandardDescription: 'Direkomendasikan',
    durationDeepDescription: 'Sesi diawasi',
    fullscreenHint: 'Canvas perbaikan burn in OLED layar penuh',
    intensityLabel: 'Intensitas derau',
    warningBadge: 'Konten berkedip',
  },
};
