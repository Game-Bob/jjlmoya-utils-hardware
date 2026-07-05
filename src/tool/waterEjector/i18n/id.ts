import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pengusir-air-pembersih-speaker';
const title = 'Pengusir Air Speaker';
const description =
  'Putar nada frekuensi rendah 165 Hz untuk membantu mengeluarkan air, debu, atau kotoran lepas dari speaker ponsel, tablet, dan laptop.';

const faqData = [
  {
    question: 'Frekuensi apa yang harus saya gunakan untuk mengeluarkan air dari speaker?',
    answer:
      'Nada rendah sekitar 165 Hz adalah titik awal yang praktis karena dapat menggerakkan diafragma speaker kecil secara terlihat tanpa bergantung pada frekuensi tinggi yang menusuk telinga. Beberapa perangkat merespons lebih baik antara 145 Hz dan 190 Hz, sehingga alat ini menyertakan ketiga preset tersebut.',
  },
  {
    question: 'Bisakah nada suara menghilangkan semua air dari ponsel saya?',
    answer:
      'Tidak. Ini dapat membantu mengguncang tetesan air keluar dari gril speaker atau ruang akustik, tetapi tidak dapat mengeringkan cairan di balik segel, di dalam port, atau di bawah layar. Jika perangkat terendam, matikan dan ikuti panduan pengeringan dari produsen.',
  },
  {
    question: 'Apakah ini aman untuk speaker?',
    answer:
      'Gunakan sesi singkat, mulai di bawah volume maksimum, dan berhenti jika Anda mendengar suara gesekan, getaran kasar, atau distorsi. Speaker ponsel kecil tidak dirancang untuk pemutaran bass bertenaga tinggi yang lama, jadi siklus pendek berulang lebih aman daripada satu kali semburan panjang.',
  },
  {
    question: 'Mengapa speaker saya terdengar teredam setelah basah?',
    answer:
      'Lapisan air menambah massa dan redaman pada diafragma speaker dan dapat menyumbat lubang gril. Itu mengurangi treble, melemahkan kejelasan suara, dan membuat bass terdengar kabur hingga tetesan air bergerak atau menguap.',
  },
  {
    question: 'Haruskah saya menggunakan beras setelah ponsel basah?',
    answer:
      'Beras bukan metode perbaikan yang andal dan dapat meninggalkan pati atau partikel di dalam port. Gunakan aliran udara, kain bebas serat yang menyerap, dan instruksi produsen. Pengeluaran suara hanya untuk saluran keluar speaker, bukan seluruh perangkat.',
  },
];

const howToData = [
  {
    name: 'Lepas casing dan arahkan speaker ke bawah',
    text: 'Lepaskan semua casing yang menutupi gril, pegang perangkat agar gravitasi membantu tetesan air keluar dari bukaan speaker, dan jaga port tetap tidak terhalang.',
  },
  {
    name: 'Mulai dengan preset standar 165 Hz',
    text: 'Tekan Mulai dan biarkan nada berjalan selama 30 detik. Gerakan diafragma dapat mengeluarkan tetesan yang terperangkap di jaring gril atau ruang speaker dangkal.',
  },
  {
    name: 'Coba preset lembut atau dalam jika perlu',
    text: 'Jika suara tetap teredam, uji 145 Hz atau 190 Hz untuk siklus pendek. Ukuran speaker yang berbeda beresonansi pada titik yang berbeda.',
  },
  {
    name: 'Berhenti jika speaker terdistorsi',
    text: 'Turunkan volume atau segera hentikan jika nada menjadi kasar, berdengung, atau terasa tegang secara mekanis. Distorsi berarti driver didorong terlalu keras.',
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

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Cara Kerja Nada Pengusir Air', level: 2 },
    {
      type: 'paragraph',
      html: 'Speaker ponsel adalah diafragma bergerak yang kecil. Saat nada frekuensi rendah diputar, diafragma bergerak maju mundur berkali-kali per detik. Pada <strong>165 Hz</strong>, gerakan itu terjadi 165 kali setiap detik. Jika air menggenang di gril atau terperangkap tepat di dalam saluran akustik, udara yang bergerak dapat memecahkan tegangan permukaan tetesan dan mendorongnya ke arah bukaan.',
    },
    {
      type: 'paragraph',
      html: 'Prosesnya bersifat mekanis, bukan kimiawi. Suara tidak menguapkan cairan dan tidak membuat komponen elektronik internal menjadi tahan air. Ini paling baik dipahami sebagai siklus getaran terkendali untuk saluran keluar speaker, berguna saat suara bicara, notifikasi, atau musik terdengar teredam setelah hujan, percikan, ruang mandi, atau bilasan cepat.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'frekuensi awal standar', icon: 'mdi:sine-wave' },
        { value: '30 s', label: 'siklus pembersihan singkat pertama', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'rentang penyeteman praktis', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Apa yang bisa dan tidak bisa dilakukan nada ini',
      badge: 'Cakupan',
      icon: 'mdi:information',
      html: 'Nada ini dapat membantu memindahkan tetesan lepas di jalur speaker. Ia tidak dapat menghilangkan cairan dari port pengisian, baki SIM, mikrofon, modul kamera, celah perekat, atau ruang di bawah layar.',
    },
    { type: 'title', text: 'Kapan Menggunakannya', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Suara speaker terdengar pelan, teredam, atau bergelembung setelah percikan.',
        'Satu sisi speaker ponsel stereo terdengar lebih lemah dari sisi lainnya.',
        'Gril speaker laptop atau tablet mengumpulkan tetesan setelah dibersihkan.',
        'Debu atau serat terlihat longgar di gril dan pemutaran normal terdengar tumpul.',
        'Perangkat bekerja normal, mengisi daya normal, dan tidak menampilkan peringatan cairan di port.',
      ],
    },
    {
      type: 'tip',
      title: 'Posisi fisik terbaik',
      html: 'Arahkan gril speaker ke bawah atau sedikit ke bawah. Nada memberikan gerakan, tetapi gravitasi menentukan ke mana tetesan yang terlepas pergi. Melepas casing juga penting karena banyak casing menciptakan kantong dangkal yang menangkap air di dekat saluran keluar.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Mengapa speaker ponsel cepat terpengaruh',
      html: 'Ponsel modern menggunakan driver kompak berdaya jelajah tinggi dan saluran akustik kecil. Tetesan yang tidak berbahaya bagi speaker desktop besar dapat menutupi bagian penting dari gril ponsel, mengubah tekanan dan meredam diafragma hingga membuat suara terdengar seperti dari kejauhan.',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan penyebab', 'Yang bisa dicoba'],
      rows: [
        ['Suara bicara teredam', 'Lapisan air di atas gril', 'Jalankan 165 Hz selama 30 detik, speaker menghadap ke bawah'],
        ['Berdengung selama nada', 'Tetesan bergerak atau driver kelebihan beban', 'Turunkan volume; berhenti jika dengungan tetap ada'],
        ['Satu speaker lebih pelan', 'Hanya satu saluran yang tersumbat', 'Putar perangkat agar saluran itu mengarah ke bawah'],
        ['Tidak ada suara sama sekali', 'Output dibisukan, rute Bluetooth, atau kerusakan perangkat keras', 'Periksa rute audio sebelum mengulang siklus'],
      ],
    },
    { type: 'title', text: 'Memilih Frekuensi yang Tepat', level: 2 },
    {
      type: 'paragraph',
      html: 'Tidak ada angka ajaib universal karena ukuran speaker, bentuk gril, desain membran tahan air, dan geometri casing berbeda-beda. Alasan <strong>165 Hz</strong> populer adalah karena cukup rendah untuk menciptakan gerakan konus yang terlihat pada banyak speaker kecil sambil tetap dalam rentang yang dapat direproduksi dengan keras oleh sebagian besar perangkat.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz lembut',
          description: 'Berguna untuk speaker sangat kecil atau yang tegang, di mana nada standar terdengar kasar.',
          icon: 'mdi:leaf',
          points: ['Nada lebih rendah', 'Gerakan kurang agresif', 'Pilihan pertama yang baik untuk dicoba lagi'],
        },
        {
          title: '165 Hz standar',
          description: 'Titik awal seimbang untuk ponsel, tablet, dan banyak bukaan speaker laptop.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Preset bawaan', 'Gerakan diafragma kuat', 'Siklus pertama terbaik'],
        },
        {
          title: '190 Hz pembersihan dalam',
          description: 'Dorongan sedikit lebih tinggi yang mungkin berfungsi saat speaker tertentu beresonansi di atas 165 Hz.',
          icon: 'mdi:waves',
          points: ['Getaran lebih ketat', 'Berguna untuk langkah kedua', 'Hindari siklus panjang'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Frekuensi rendah versus frekuensi tinggi',
      items: [
        { pro: 'Nada rendah menggerakkan lebih banyak udara dan jarak diafragma pada speaker kecil.', con: 'Mereka bisa lebih cepat terdistorsi pada volume maksimum.' },
        { pro: 'Nada tinggi lebih mudah didengar melalui beberapa gril.', con: 'Biasanya menggerakkan lebih sedikit udara dan bisa tidak nyaman atau tidak terdengar bagi sebagian pengguna.' },
        { pro: 'Nada rendah pendek mudah dinilai dengan telinga.', con: 'Tidak boleh diulang selama berapa menit tanpa jeda.' },
      ],
    },
    {
      type: 'message',
      title: 'Aturan penyeteman frekuensi',
      ariaLabel: 'Aturan penyeteman frekuensi',
      html: 'Jika speaker terdengar bersih setelah satu siklus 30 detik, berhentilah. Lebih banyak siklus bukanlah rutinitas perawatan; itu hanya bantuan pemulihan setelah cairan atau kotoran mencapai bukaan speaker.',
    },
    { type: 'title', text: 'Prosedur Pembersihan yang Aman', level: 2 },
    {
      type: 'paragraph',
      html: 'Mulai di bawah volume sistem maksimum, terutama pada laptop dan tablet dengan speaker lebih besar. Tingkatkan hanya sampai nada terdengar jelas dan perangkat sedikit bergetar. Jika Anda mendengar getaran tajam, suara gesekan, atau penurunan volume mendadak, hentikan alat dan biarkan perangkat mengering secara alami.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Putuskan sambungan headphone dan speaker Bluetooth agar nada diputar melalui speaker yang basah.',
        'Keringkan bagian luar dengan kain bebas serat sebelum memutar suara.',
        'Pegang saluran keluar speaker ke bawah dan jaga tangan Anda jauh dari gril.',
        'Jalankan 30 detik pada 165 Hz.',
        'Tunggu semenit, uji audio bicara normal, lalu ulangi hanya sekali jika diperlukan.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Jangan gunakan panas atau udara bertekanan',
      badge: 'Hindari',
      icon: 'mdi:alert',
      html: 'Pengering rambut, oven, dan udara bertekanan tinggi dapat mendorong kelembapan lebih dalam, merusak segel, atau merusak membran. Nada suara lebih lembut karena bekerja dari gerakan speaker yang sudah dirancang ke dalam perangkat.',
    },
    {
      type: 'summary',
      title: 'Daftar periksa keamanan cepat',
      items: [
        'Siklus pendek lebih baik daripada pemutaran terus menerus yang panjang.',
        'Turunkan volume jika nada berdengung keras.',
        'Berhenti jika perangkat menampilkan peringatan deteksi cairan.',
        'Pengeluaran suara hanya membantu saluran keluar speaker, bukan seluruh ponsel.',
      ],
    },
    { type: 'title', text: 'Tahan Air Bukan Berarti Kedap Air', level: 2 },
    {
      type: 'paragraph',
      html: 'Banyak ponsel mengiklankan ketahanan air, tetapi peringkat itu diukur dalam kondisi laboratorium yang ditentukan. Paparan air nyata mencakup gerakan, sabun, garam, panas, tekanan, usia, benturan, dan segel yang aus. Nada pembersih speaker tidak memulihkan segel dan tidak memvalidasi bahwa ponsel aman untuk diisi daya.',
    },
    {
      type: 'table',
      headers: ['Paparan', 'Kegunaan nada speaker', 'Tindakan tambahan'],
      rows: [
        ['Hujan ringan', 'Sering membantu jika audio teredam', 'Keringkan bagian luar dan jalankan satu siklus pendek'],
        ['Percikan air bersih', 'Membantu untuk tetesan dekat gril', 'Jaga port tetap kering sebelum mengisi daya'],
        ['Air kolam atau laut', 'Terbatas; residu dapat tertinggal', 'Bilas hanya jika produsen mengizinkan, lalu servis jika perlu'],
        ['Sabun, soda, atau kopi', 'Rendah; residu lengket mengubah gril', 'Matikan dan cari panduan pembersihan'],
        ['Terendam penuh', 'Tidak cukup', 'Ikuti langkah darurat produsen'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diafragma', definition: 'Permukaan bergerak di dalam speaker yang mendorong udara untuk menciptakan suara.' },
        { term: 'Resonansi', definition: 'Frekuensi di mana sistem fisik bergerak lebih efisien karena bentuk dan massanya mendukung getaran itu.' },
        { term: 'Tegangan permukaan', definition: 'Gaya yang membuat tetesan menempel pada gril atau membran alih-alih segera mengalir.' },
        { term: 'Ruang akustik', definition: 'Jalur internal kecil yang memandu suara speaker dari driver ke bukaan perangkat.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Mengapa suara bisa lebih keras setelah dibersihkan',
      html: 'Air memblokir frekuensi tinggi terlebih dahulu karena panjang gelombang kecil mudah tersebar oleh hambatan gril. Begitu tetesan bergerak, konsonan, nada notifikasi, dan detail suara sering kembali sebelum bass berubah secara nyata.',
    },
    { type: 'title', text: 'Pembersihan Debu dan Kotoran', level: 2 },
    {
      type: 'paragraph',
      html: 'Getaran yang sama dapat melonggarkan debu kering, serat, atau bubuk yang menempel di jaring speaker, tetapi tidak boleh menggantikan pembersihan fisik yang hati-hati. Jika kotoran bersifat lengket, berminyak, atau terperangkap ke dalam gril, getaran sendiri mungkin hanya memindahkannya ke sana kemari. Gunakan sikat kering lembut di sekitar bagian luar dan hindari memasukkan alat logam ke dalam bukaan.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Getaran suara',
          description: 'Baik untuk partikel lepas dan tetesan yang dapat bergerak bebas.',
          icon: 'mdi:sine-wave',
          points: ['Tanpa kontak dengan gril', 'Cepat', 'Terbaik untuk percikan baru'],
        },
        {
          title: 'Penyikatan luar yang lembut',
          description: 'Lebih baik untuk serat atau debu terlihat yang menempel di permukaan jaring.',
          icon: 'mdi:brush',
          points: ['Bekerja tanpa suara keras', 'Menghindari penggerakan speaker berlebihan', 'Perlu hati-hati di sekitar membran'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Setelah lingkungan berdebu',
      html: 'Jalankan nada pada volume sedang, lalu lap gril luar dengan kain mikrofiber kering. Jangan tambahkan alkohol atau pembersih cair kecuali produsen perangkat secara eksplisit merekomendasikannya untuk permukaan itu.',
    },
    { type: 'title', text: 'Catatan Khusus Perangkat', level: 2 },
    {
      type: 'paragraph',
      html: 'Ponsel, tablet, dan laptop menempatkan speaker dalam tata letak akustik yang berbeda. Speaker ponsel yang mengarah ke bawah biasanya memiliki saluran keluar pendek di dekat port pengisian, sehingga air dapat keluar dengan cepat saat gril menghadap ke bawah. Tablet mungkin menggunakan saluran samping yang lebih panjang, yang berarti nada dapat membuat suara lebih jelas secara bertahap alih-alih dalam satu semburan langsung. Speaker laptop sering mengeluarkan suara melalui dek keyboard atau slot bawah, sehingga cairan mungkin berada di lapisan kain, jaring plastik, atau gril eksternal alih-alih langsung di driver.',
    },
    {
      type: 'paragraph',
      html: 'Untuk ponsel, putar perangkat hingga speaker yang terdengar teredam menjadi titik terendah. Untuk tablet, coba orientasi potret dan lanskap karena bukaan yang tersumbat mungkin berada di tepi yang berbeda dari yang diharapkan. Untuk laptop, jaga mesin di permukaan kering yang stabil dan hindari memiringkan cairan ke arah keyboard, engsel, atau ventilasi. Nada harus membantu jalur speaker; ia tidak boleh mendorong air untuk berpindah melintasi perangkat.',
    },
    {
      type: 'table',
      headers: ['Jenis perangkat', 'Orientasi yang disarankan', 'Saran siklus'],
      rows: [
        ['Ponsel', 'Gril speaker ke bawah, casing dilepas', 'Satu siklus 30 detik, lalu uji audio suara'],
        ['Tablet', 'Tepi yang tersumbat menghadap ke bawah', 'Mulai pada volume sedang karena speaker lebih besar'],
        ['Laptop', 'Posisi stabil normal kecuali cairan di gril eksternal', 'Gunakan volume lebih rendah dan berhenti jika sasis bergetar kuat'],
        ['Jam tangan pintar', 'Ikuti panduan kunci air produsen terlebih dahulu', 'Gunakan nada web hanya jika browser dapat merutekan suara ke speaker jam tangan'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pemeriksaan rute Bluetooth dan audio',
      badge: 'Sebelum mulai',
      icon: 'mdi:bluetooth-audio',
      html: 'Jika earbud nirkabel, sistem mobil, atau speaker eksternal terhubung, nada mungkin diputar melalui output yang salah. Putuskan audio Bluetooth sebelum memulai, lalu konfirmasi bahwa nada dering normal atau video pendek diputar dari speaker yang basah.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Mengapa mikrofon berbeda',
      html: 'Port mikrofon adalah jalur input dengan jaring pelindung dan sensor tekanan kecil, bukan diafragma speaker yang dapat mendorong udara keluar. Jangan berasumsi bahwa nada pengusir air akan membersihkan rekaman mikrofon yang teredam. Biarkan perangkat mengering dan hindari menusuk lubang mikrofon.',
    },
    { type: 'title', text: 'Volume, Distorsi, dan Kenyamanan Mendengar', level: 2 },
    {
      type: 'paragraph',
      html: 'Nada pengusir air sengaja repetitif dan bisa tidak nyaman di ruangan yang tenang. Tujuannya bukan kenyaringan maksimal; tujuannya adalah gerakan diafragma yang cukup untuk mengganggu tetesan. Jika nada terasa menyakitkan, kurangi volume atau letakkan perangkat lebih jauh sambil menjaga saluran keluar speaker tidak terhalang. Kenyamanan mendengar penting karena siklus pembersihan yang berhasil seharusnya hanya memerlukan hitungan detik, bukan paparan yang berkepanjangan.',
    },
    {
      type: 'paragraph',
      html: 'Distorsi adalah tanda peringatan yang berguna. Nada rendah yang bersih terdengar stabil, bahkan jika bodi ponsel bergetar. Nada yang buruk terdengar berderak, kasar, metalik, atau tidak stabil. Itu bisa terjadi karena air sedang bergerak, karena speaker mencapai batas geraknya, atau karena amplifier perangkat mengalami kliping. Menurunkan volume adalah koreksi pertama; mengulang dengan lebih keras adalah langkah yang salah.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Gunakan tombol volume perangkat dan penggeser volume alat bersamaan; salah satunya saja bisa membuat output terlalu keras.',
        'Hindari menempelkan speaker ke meja, bantal, atau tangan karena aliran udara yang terhambat meningkatkan getaran.',
        'Jeda di antara siklus agar driver dan amplifier tidak terus menerus pada output tinggi.',
        'Jika musik normal masih berderak setelah waktu pengeringan, perlakukan sebagai gejala perbaikan, bukan masalah pembersihan.',
      ],
    },
    {
      type: 'message',
      title: 'Aturan kenyamanan',
      ariaLabel: 'Aturan kenyamanan',
      html: 'Jika nada terasa terlalu keras untuk telinga Anda, itu sudah lebih keras dari yang diperlukan untuk percobaan pertama. Pengeluaran air bergantung pada gerakan dan orientasi, bukan pada volume yang menyiksa.',
    },
    { type: 'title', text: 'Pemecahan Masalah Setelah Nada', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cari perbaikan jika tanda tanda ini muncul',
      badge: 'Berhenti',
      icon: 'mdi:close-octagon',
      html: 'Berhenti menggunakan pengeluaran suara jika perangkat memanas secara tidak normal, mati, menampilkan peringatan cairan, tidak ada output setelah pemeriksaan rute, atau speaker bergetar selama suara normal. Gejala-gejala itu dapat menunjukkan kerusakan di luar sekadar tetesan di gril.',
    },
    {
      type: 'table',
      headers: ['Hasil setelah 30 detik', 'Arti', 'Langkah selanjutnya'],
      rows: [
        ['Suara lebih jelas', 'Tetesan kemungkinan telah bergerak', 'Berhenti dan biarkan perangkat beristirahat'],
        ['Sedikit perbaikan', 'Beberapa kelembapan masih tersisa', 'Tunggu, lalu ulangi satu siklus pendek'],
        ['Tidak ada perubahan', 'Sumbatan mungkin lebih dalam atau lengket', 'Keringkan secara alami dan periksa rute/pengaturan'],
        ['Distorsi semakin buruk', 'Driver mungkin stres atau rusak', 'Berhenti dan turunkan volume; pertimbangkan servis'],
      ],
    },
    {
      type: 'summary',
      title: 'Poin praktis',
      items: [
        'Gunakan 165 Hz terlebih dahulu karena menyeimbangkan gerakan dan kompatibilitas.',
        'Arahkan gril ke bawah dan jaga siklus tetap pendek.',
        'Perlakukan nada sebagai pemulihan speaker, bukan pengeringan seluruh perangkat.',
        'Panduan cairan dari produsen menang atas alat web apa pun.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Siap mengeluarkan',
    statusPlaying: 'Nada berjalan',
    statusComplete: 'Siklus selesai',
    frequencyLabel: 'Frekuensi',
    volumeLabel: 'Volume',
    durationLabel: 'Durasi',
    startButton: 'Mulai pengusir air',
    stopButton: 'Hentikan nada',
    hertzUnit: 'Hz',
    secondsShort: 'dtk',
    presetGentle: 'Lembut',
    presetStandard: '165 Hz',
    presetDeep: 'Dalam',
    safetyTitle: 'Utamakan keselamatan',
    safetyText: 'Mulai di bawah volume maksimum dan hentikan jika speaker bergetar atau terdistorsi.',
    bestResult: 'Hasil terbaik',
    bestResultText: 'Lepas casing, arahkan speaker ke bawah, dan jalankan satu siklus pendek.',
  },
};
