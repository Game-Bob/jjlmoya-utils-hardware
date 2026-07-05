import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'penguji-layar-sentuh';
const title = 'Penguji Layar Sentuh';
const description = 'Gambar di kanvas layar penuh untuk menguji zona mati, ketukan yang hilang, respons tepi, gangguan telapak tangan, dan berapa banyak titik multi-sentuh serentak yang dapat dideteksi ponsel atau tablet Anda.';

const faqData = [
  {
    question: 'Bagaimana cara menguji zona mati pada layar sentuh?',
    answer: 'Buka penguji di perangkat, seret satu jari perlahan ke seluruh layar, dan cari celah kosong tempat garis terputus. Ulangi di sepanjang tepi, area keyboard, sudut, dan titik mana pun yang sering gagal mendeteksi ketukan.',
  },
  {
    question: 'Bagaimana cara menjalankan uji multi-sentuh secara online?',
    answer: 'Letakkan beberapa jari di kanvas secara bersamaan. Penghitung sentuhan aktif menunjukkan berapa banyak kontak yang sedang diterima browser saat ini, dan penghitung puncak mencatat jumlah serentak tertinggi yang dicapai selama sesi.',
  },
  {
    question: 'Bisakah alat ini memperbaiki layar sentuh yang tidak responsif?',
    answer: 'Tidak. Alat ini tidak memperbaiki perangkat keras atau mengkalibrasi ulang digitizer. Alat ini membantu mendokumentasikan gejala agar Anda bisa memutuskan apakah masalahnya berasal dari pelindung layar, kaca kotor, gangguan perangkat lunak, tekanan casing, atau kerusakan perangkat keras sentuh.',
  },
  {
    question: 'Mengapa ponsel saya mendeteksi lebih sedikit jari dari yang diharapkan?',
    answer: 'Beberapa panel, browser, sistem operasi, pelindung layar, pengisi daya, dan pengaturan aksesibilitas membatasi atau menyaring kontak sentuh. Coba uji tanpa casing, dengan daya baterai, setelah membersihkan kaca, dan di browser lain sebelum menyimpulkan bahwa panel rusak.',
  },
];

const howToData = [
  { name: 'Bersihkan kaca dan singkirkan gangguan yang jelas', text: 'Lap layar, keringkan jari, cabut pengisi daya yang berisik, dan lepas sarung tangan tebal atau aksesori konduktif sebelum menguji.' },
  { name: 'Gambar sapuan horizontal dan vertikal secara perlahan', text: 'Tutupi layar dengan goresan sejajar dari ujung ke ujung. Panel yang sehat seharusnya menghasilkan garis bersambung tanpa putus.' },
  { name: 'Periksa sudut dan zona gestur', text: 'Telusuri bezel, area keyboard, area notifikasi, dan zona gestur navigasi karena kawasan ini sering kali menunjukkan kegagalan sebagian digitizer terlebih dahulu.' },
  { name: 'Ukur sentuhan serentak', text: 'Letakkan dua, tiga, empat, lima jari atau lebih di kanvas dan amati penghitung puncak multi-sentuh.' },
  { name: 'Gunakan layar penuh untuk konfirmasi akhir', text: 'Masuk ke mode layar penuh dan ulangi pengujian agar antarmuka browser tidak menyembunyikan area sentuh bagian atas atau bawah.' },
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

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Uji layar sentuh online untuk zona mati dan multi-sentuh', level: 2 },
    {
      type: 'paragraph',
      html: 'Panel sentuh bisa gagal dengan cara yang sulit dibuktikan dari penggunaan aplikasi biasa. Tombol keyboard mungkin hanya gagal di dekat tepi bawah, aplikasi menggambar bisa melewatkan jalur vertikal tipis, atau game bisa kehilangan jari kedua tepat saat ibu jari sudah menekan kontrol. Penguji ini mengubah seluruh halaman menjadi permukaan gambar sehingga setiap celah, goresan putus, dan batas kontak serentak langsung terlihat.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan untuk pencarian seperti <strong>penguji layar sentuh</strong>, <strong>uji multi-sentuh online</strong>, <strong>cek zona mati layar</strong>, dan <strong>tes layar sentuh</strong>. Kanvas merekam gerakan jari secara lokal di browser; tidak mengunggah gambar, posisi sentuh, pengenal perangkat, atau hasil diagnostik.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 instalasi', label: 'Berjalan langsung di browser' },
        { value: 'Langsung', label: 'Penghitung sentuhan aktif' },
        { value: 'Kanvas', label: 'Peta visual zona mati' },
      ],
    },
    { type: 'title', text: 'Cara mengidentifikasi zona mati layar sentuh', level: 3 },
    {
      type: 'paragraph',
      html: 'Zona mati adalah area di mana digitizer tidak melaporkan kontak secara andal. Bisa berupa jalur kosong total, sudut yang mengabaikan ketukan, atau bagian kecil yang hanya berfungsi dengan tekanan kuat. Gambar garis lambat dan saling tumpang tindih di seluruh layar. Jika garis selalu menghilang di tempat yang sama, area itu layak diuji lebih lanjut.',
    },
    {
      type: 'list',
      items: [
        'Mulai dengan goresan horizontal dari tepi kiri ke tepi kanan, sisakan hanya celah kecil antar sapuan.',
        'Ulangi dengan goresan vertikal dari tepi atas ke tepi bawah untuk mengungkap kolom sempit yang mungkin terlewat oleh pengujian horizontal.',
        'Telusuri tepat di tepi layar karena elektroda tepi dan zona gestur adalah titik kegagalan yang umum.',
        'Gambar lingkaran di sekitar area mencurigakan untuk melihat apakah putusnya mengikuti lokasi fisik yang sama.',
        'Putar perangkat dan uji lagi untuk membedakan masalah tata letak aplikasi dari masalah lokasi perangkat keras.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Garis kosong yang berulang lebih bermakna daripada satu goresan yang terlewat',
      html: '<p>Satu celah pendek bisa terjadi jika jari kering, bergerak terlalu cepat, atau terangkat dari kaca. Zona mati perangkat keras biasanya muncul berulang kali di area fisik yang sama, pada berbagai arah goresan, dan setelah membersihkan layar.</p>',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan penyebab', 'Yang perlu dicoba selanjutnya'],
      rows: [
        ['Garis putus di jalur vertikal yang sama', 'Kemungkinan kegagalan kolom digitizer atau gelembung pelindung layar.', 'Lepas pelindung jika memungkinkan, bersihkan kaca, dan uji ulang dalam layar penuh.'],
        ['Tepi gagal mendeteksi tetapi tengah berfungsi', 'Tekanan casing, penolakan gestur, atau masalah elektroda tepi.', 'Lepas casing dan ulangi penelusuran tepi secara perlahan.'],
        ['Hanya gerakan cepat yang terlewat', 'Pembatasan event browser, laju bingkai rendah, atau jari terangkat.', 'Bergerak perlahan dan bandingkan dengan browser lain.'],
        ['Bintik acak muncul tanpa disentuh', 'Sentuhan hantu, kelembapan, derau pengisi daya, atau panel rusak.', 'Keringkan layar, cabut pengisi daya, nyalakan ulang, dan ulangi.'],
      ],
    },
    { type: 'title', text: 'Cara mengukur dukungan multi-sentuh', level: 3 },
    {
      type: 'paragraph',
      html: 'Dukungan multi-sentuh adalah jumlah maksimum kontak independen yang dapat dilaporkan perangkat secara bersamaan. Sebuah ponsel bisa melacak lima, sepuluh, atau lebih kontak, sementara beberapa tablet murah, kios, sarung tangan, lapisan desktop jarak jauh, atau browser tertanam mungkin melaporkan lebih sedikit. Penghitung aktif menampilkan jumlah yang saat ini terdeteksi; penghitung puncak menyimpan jumlah tertinggi yang dicapai sejak terakhir dibersihkan.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'Gestur dua jari', description: 'Diperlukan untuk cubit-zoom, rotasi dua jari, peta, editor gambar, dan zoom aksesibilitas.' },
        { title: 'Tiga hingga lima sentuhan', description: 'Berguna untuk game ritme, kontrol terpisah, aplikasi menggambar, keyboard piano, dan alur kerja kreatif tablet.' },
        { title: 'Panel sepuluh sentuhan', description: 'Umum pada ponsel dan tablet modern, tetapi penyaringan browser atau sistem operasi tetap bisa mengurangi jumlahnya.' },
      ],
    },
    {
      type: 'tip',
      title: 'Cara terbaik menghindari jumlah rendah yang palsu',
      html: 'Letakkan jari satu per satu dan tahan diam sejenak. Jika Anda meletakkan semua jari sekaligus, beberapa sistem operasi menafsirkan gestur itu sebagai masukan telapak tangan, niat zoom, atau navigasi sistem dan dapat menekan sebagian set kontak.',
    },
    {
      type: 'proscons',
      title: 'Penguji online dibandingkan dengan aplikasi diagnostik bawaan',
      items: [
        { pro: 'Berjalan langsung tanpa memasang apa pun atau memberikan izin perangkat yang luas.', con: 'Hanya bisa menampilkan event sentuh yang disediakan oleh browser dan sistem operasi.' },
        { pro: 'Mudah dibagikan ke bengkel atau pembeli karena pola gambar terlihat.', con: 'Tidak bisa membaca tabel kalibrasi pabrik atau kode kesalahan digitizer tingkat rendah.' },
        { pro: 'Mode layar penuh mencakup lebih banyak area tampilan yang bisa digunakan daripada halaman biasa.', con: 'Bilah sistem, notch, dan area gestur terlindungi mungkin masih mencadangkan beberapa piksel.' },
      ],
    },
    { type: 'title', text: 'Penyebab umum ketukan yang hilang', level: 3 },
    {
      type: 'paragraph',
      html: 'Hasil sentuh yang buruk tidak selalu berarti layar rusak. Panel kapasitif bergantung pada medan listrik yang stabil melalui kaca, perekat, pelindung, kulit, dan ground perangkat. Apa pun yang mengubah medan itu dapat menyebabkan celah, sentuhan palsu, atau pelacakan multi-sentuh yang lemah. Karena itulah pengujian dalam beberapa kondisi sangat penting.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Digitizer', definition: 'Lapisan sensor transparan yang melaporkan koordinat sentuhan ke perangkat.' },
        { term: 'Zona mati', definition: 'Area fisik layar di mana sentuhan tidak terdeteksi atau hanya terdeteksi sesekali.' },
        { term: 'Sentuhan hantu', definition: 'Event sentuh yang dilaporkan oleh perangkat saat tidak ada jari yang sengaja menyentuh titik tersebut.' },
        { term: 'Penolakan telapak tangan', definition: 'Penyaring perangkat lunak yang mengabaikan kontak lebar atau tidak disengaja, terutama di tablet dan perangkat stilus.' },
        { term: 'Laju sampel sentuh', definition: 'Seberapa sering perangkat memindai lapisan sentuh. Laju yang lebih tinggi dapat membuat menggambar dan bermain game terasa lebih responsif.' },
      ],
    },
    {
      type: 'table',
      headers: ['Penyebab', 'Petunjuk khas', 'Pemeriksaan cepat'],
      rows: [
        ['Pelindung layar', 'Area mati mengikuti gelembung, retakan, tepi debu, atau batas kaca tebal.', 'Lepas atau angkat pelindung hanya jika aman dan dapat diganti.'],
        ['Kelembapan atau minyak', 'Loncatan acak, sentuhan meluncur, atau ketukan hilang setelah hujan, keringat, atau semprotan pembersih.', 'Keringkan kaca dan tangan sepenuhnya, lalu uji ulang.'],
        ['Derau pengisi daya', 'Sentuhan hantu muncul saat dicolokkan dan menghilang saat menggunakan baterai.', 'Cabut pengisi daya atau gunakan adaptor dan kabel bersertifikasi.'],
        ['Tekanan casing', 'Sentuhan gagal di dekat sudut atau tepi melengkung.', 'Lepas casing dan uji tepi yang sama lagi.'],
        ['Kerusakan perangkat keras', 'Jalur yang sama gagal setelah dibersihkan, dinyalakan ulang, dan pelindung dilepas.', 'Dokumentasikan hasilnya dan hubungi dukungan perbaikan.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Tekanan tidak sama dengan akurasi sentuh',
      html: 'Kebanyakan layar sentuh ponsel dan tablet bersifat kapasitif, sehingga menekan lebih keras seharusnya tidak diperlukan. Jika suatu lokasi hanya berfungsi saat ditekan dengan kuat, masalahnya mungkin kontak lemah melalui pelindung, kerusakan panel, masalah kabel fleksibel, atau penyaringan perangkat lunak, bukan perilaku normal layar sentuh.',
    },
    { type: 'title', text: 'Menguji tepi, sudut, dan zona keyboard', level: 3 },
    {
      type: 'paragraph',
      html: 'Banyak keluhan nyata dimulai di area yang sering digunakan: baris bawah keyboard, tombol hapus, gestur navigasi, panel notifikasi, pengaturan cepat, zona ibu jari game, dan sudut tablet yang dipakai untuk pintasan menggambar. Gunakan mode layar penuh sebelum menilai area atas dan bawah, karena kontrol browser bisa menyembunyikan sebagian layar.',
    },
    {
      type: 'list',
      items: [
        'Gambar persegi panjang selebar satu jari di dalam tepi layar.',
        'Gambar goresan vertikal pendek di atas baris keyboard tempat huruf sering hilang.',
        'Tahan satu ibu jari di posisi kontrol game dan gambar dengan jari lain untuk menguji konflik kontak.',
        'Uji di dekat port pengisian daya saat tidak dicolok lalu saat dicolok untuk memeriksa derau grounding.',
        'Jika stilus digunakan, uji masukan jari secara terpisah dari masukan stilus karena mungkin menggunakan jalur penginderaan yang berbeda.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Saat layar penuh mengubah hasil',
      html: '<p>Jika layar berfungsi dalam mode penuh tetapi tidak dalam tampilan browser biasa, perangkat keras mungkin bukan satu-satunya faktor. Bilah alamat, tarik-untuk-segarkan, navigasi sistem, dan penanganan gestur browser dapat mencegat sentuhan di dekat bagian atas atau bawah viewport.</p>',
    },
    { type: 'title', text: 'Cara mendokumentasikan masalah perbaikan atau garansi', level: 3 },
    {
      type: 'paragraph',
      html: 'Untuk klaim garansi, konsistensi lebih berarti daripada satu kegagalan dramatis. Bersihkan kanvas, gambar kisi sederhana, dan ambil foto atau rekaman layar saat area fisik yang sama menolak untuk digambar. Sertakan apakah ponsel sedang diisi daya, apakah pelindung terpasang, dan apakah masalah muncul setelah dinyalakan ulang.',
    },
    {
      type: 'summary',
      title: 'Bukti berguna untuk diambil',
      items: [
        'Kanvas layar penuh yang bersih menunjukkan celah berulang di lokasi yang sama.',
        'Jumlah puncak multi-sentuh yang dicapai dengan beberapa jari diletakkan hati-hati.',
        'Perbandingan dengan dan tanpa casing, pelindung, pengisi daya, atau sarung tangan.',
        'Model perangkat, browser, versi sistem operasi, dan apakah masalah juga terjadi di aplikasi.',
      ],
    },
    {
      type: 'message',
      title: 'Catatan privasi',
      html: 'Gambar dan penghitung dihasilkan di sisi klien. Penguji ini dirancang untuk diagnosis langsung, bukan untuk pencatatan berbasis akun, perbaikan jarak jauh, atau pengunggahan pola interaksi layar yang sensitif.',
    },
    { type: 'title', text: 'Daftar periksa interpretasi hasil', level: 3 },
    {
      type: 'table',
      headers: ['Hasil', 'Interpretasi', 'Keyakinan'],
      rows: [
        ['Goresan bersambung di mana-mana', 'Lapisan sentuh kemungkinan sehat dalam kondisi saat ini.', 'Tinggi untuk masukan jari dasar.'],
        ['Satu jalur kosong yang dapat diulang', 'Kemungkinan kerusakan fisik digitizer atau penghalang pelindung.', 'Tinggi jika berulang setelah dibersihkan dan dinyalakan ulang.'],
        ['Puncak multi-sentuh rendah hanya di satu browser', 'Batasan browser, privasi, webview, atau penanganan gestur.', 'Sedang. Uji browser lain.'],
        ['Sentuhan hantu saat mengisi daya', 'Derau listrik, masalah grounding, atau pengisi daya rusak.', 'Sedang ke tinggi jika mencabut memperbaikinya.'],
        ['Kegagalan hanya dengan pelindung layar', 'Ketebalan pelindung, celah perekat, retakan, atau tepi terangkat.', 'Tinggi jika pelepasan memperbaiki area tersebut.'],
      ],
    },
    {
      type: 'summary',
      title: 'Jalur diagnosis cepat',
      items: [
        'Gambar kisi penuh secara perlahan.',
        'Lingkari setiap celah yang berulang.',
        'Bersihkan kanvas dan ulangi dalam layar penuh.',
        'Lepas casing atau pelindung bila memungkinkan.',
        'Ukur jumlah sentuhan serentak tertinggi.',
        'Bandingkan dengan browser atau aplikasi lain sebelum menyatakan kegagalan perangkat keras.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Sentuhan aktif',
    peakTouchesLabel: 'Puncak multi-sentuh',
    coverageLabel: 'Cakupan kanvas',
    statusReady: 'Gambar di mana saja untuk mengungkap zona mati',
    statusDrawing: 'Masukan sentuh terdeteksi',
    statusCleared: 'Kanvas dibersihkan',
    clearButton: 'Bersihkan kanvas',
    fullscreenButton: 'Layar penuh',
    exitFullscreenButton: 'Keluar layar penuh',
    canvasLabel: 'Kanvas gambar uji layar sentuh',
    unsupportedTouch: 'Event sentuh tidak tersedia di browser ini',
  },
};
