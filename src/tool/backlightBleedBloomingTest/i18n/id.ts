import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'uji-backlight-bleed-blooming';
const title = 'Uji Kebocoran Cahaya Latar dan Blooming';
const description =
  'Jalankan uji kebocoran cahaya latar layar penuh hitam murni dan uji blooming lingkaran putih yang dapat diseret untuk OLED, Mini LED, IPS, VA, monitor, laptop, dan TV.';

const faqData = [
  {
    question: 'Bagaimana cara menguji kebocoran cahaya latar secara online?',
    answer:
      'Matikan lampu ruangan, atur kecerahan layar ke maksimum, bersihkan layar, buka uji hitam murni dalam layar penuh, tunggu kursor menghilang, dan periksa tepi serta sudut untuk kebocoran cahaya tetap.',
  },
  {
    question: 'Apa perbedaan antara kebocoran cahaya latar dan glow IPS?',
    answer:
      'Kebocoran cahaya latar biasanya berupa bercak terang tetap di dekat bingkai yang disebabkan oleh tekanan panel atau perakitan yang tidak sempurna. Glow IPS berubah kuat dengan sudut pandang dan posisi mata, terutama di sudut.',
  },
  {
    question: 'Seperti apa blooming pada TV atau monitor Mini LED?',
    answer:
      'Blooming adalah halo yang terlihat di sekitar objek terang pada latar belakang hitam. Ini muncul ketika zona peredupan lokal menerangi area yang lebih besar dari objek itu sendiri.',
  },
  {
    question: 'Apakah panel OLED dapat mengalami kebocoran cahaya latar?',
    answer:
      'Panel OLED tidak menggunakan cahaya latar tradisional, sehingga seharusnya tidak menunjukkan kebocoran cahaya latar ala LCD. Namun, panel ini masih bisa menunjukkan masalah keseragaman dekat-hitam, pewarnaan, pita vertikal, atau hitam terangkat dari pengaturan sumber atau tampilan.',
  },
  {
    question: 'Haruskah saya mengembalikan monitor dengan kebocoran cahaya?',
    answer:
      'Keputusan pengembalian tergantung pada tingkat keparahan, jenis panel, harga, dan kebijakan garansi. Sudut terang yang terlihat saat menonton film atau bermain game normal lebih serius daripada bercak samar yang hanya terlihat di foto eksposur panjang.',
  },
];

const howToData = [
  {
    name: 'Persiapkan ruangan',
    text: 'Matikan lampu, tutup tirai, bersihkan layar, dan biarkan mata Anda beradaptasi selama satu menit agar debu dan pantulan tidak terlihat seperti cacat panel.',
  },
  {
    name: 'Naikkan kecerahan layar',
    text: 'Atur kecerahan ke 100 persen atau ke mode HDR yang ingin Anda periksa. Nonaktifkan sensor cahaya sekitar agresif saat menguji.',
  },
  {
    name: 'Jalankan uji hitam',
    text: 'Mulai mode kebocoran cahaya latar. Halaman akan memasuki layar penuh dan menampilkan hitam persis. Periksa bezel, sudut, dan bercak tetap apa pun.',
  },
  {
    name: 'Jalankan uji blooming',
    text: 'Mulai mode peredupan lokal, lalu seret lingkaran putih melintasi layar. Perhatikan halo, peredupan tertunda, zona berbentuk kisi, dan hitam terangkat.',
  },
  {
    name: 'Keluar dengan bersih',
    text: 'Tekan Escape untuk keluar dari layar penuh asli. Antarmuka pengaturan kembali dan status uji direset.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Uji Kebocoran Cahaya Latar Online: yang Perlu Diperiksa pada Monitor atau TV Baru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Uji kebocoran cahaya latar online</strong> paling berguna selama masa pengembalian monitor, laptop gaming, atau televisi baru. Uji ini menampilkan bidang layar penuh <code>#000000</code> yang dihasilkan browser sehingga cahaya latar LCD adalah satu-satunya kemungkinan sumber cahaya yang tidak diinginkan. Jika panel, tumpukan diffuser, tekanan bezel, atau perakitan membocorkan cahaya, Anda biasanya akan melihatnya sebagai sudut yang lebih terang, tepi berawan, atau bercak yang tetap di posisi fisik yang sama.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan uji ini dengan ekspektasi realistis. Panel LCD membutuhkan cahaya latar, dan variasi yang sangat kecil bisa normal, terutama pada layar IPS dan VA murah. Pertanyaan praktisnya bukanlah apakah foto ponsel eksposur panjang dapat melebih-lebihkan bercak. Pertanyaannya adalah apakah kebocoran cahaya terlihat oleh mata Anda selama film gelap, layar loading game, adegan malam, latar belakang desktop hitam, atau video letterbox.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Lakukan ini sebelum menilai panel',
      badge: 'Persiapan',
      html: 'Matikan lampu ruangan, bersihkan kaca, atur kecerahan ke 100 persen, nonaktifkan sensor cahaya sekitar, dan tunggu beberapa detik hingga mata Anda beradaptasi. Pantulan, sidik jari, dan kursor mouse semuanya dapat menciptakan positif palsu selama inspeksi keseragaman hitam.',
    },
    {
      type: 'list',
      items: [
        'Periksa tepi atas dan bawah di mana tekanan bezel sering menciptakan cahaya tetap',
        'Periksa keempat sudut untuk kebocoran cahaya segitiga atau berbentuk bulan sabit',
        'Gerakkan kepala sedikit untuk memisahkan cahaya sudut pandang dari kebocoran tetap',
        'Buat catatan dengan mata Anda terlebih dahulu, karena kamera dapat mengekspos berlebih layar hitam',
        'Uji ulang setelah panel memanas selama 15 hingga 30 menit jika hasilnya di ambang batas',
      ],
    },
    {
      type: 'title',
      text: 'Kebocoran Cahaya Latar, Glow IPS, Clouding, dan Keseragaman Hitam',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Masalah', 'yang Anda lihat', 'Perilakunya', 'Panel paling umum'],
      rows: [
        ['Kebocoran cahaya latar', 'Bercak terang tetap di tepi atau sudut', 'Tetap di tempat yang sama saat Anda menggerakkan kepala', 'IPS, VA, TN LCD'],
        ['Glow IPS', 'Cahaya susu dari sudut pada gambar gelap', 'Berubah kuat dengan sudut pandang dan jarak', 'IPS LCD'],
        ['Clouding', 'Area berawan besar tidak merata pada hitam', 'Biasanya tetap, kadang berkurang dengan kecerahan lebih rendah', 'TV dan monitor LCD edge-lit'],
        ['Black crush/smearing VA', 'Detail gelap menghilang atau memburam saat bergerak', 'Tergantung konten dan transisi piksel', 'VA LCD'],
        ['Banding dekat-hitam OLED', 'Pita vertikal atau horizontal dekat hitam', 'Terlihat pada abu-abu dekat-hitam, bukan hitam murni', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'Kesalahan paling umum adalah menyebut setiap artefak kamar gelap sebagai kebocoran cahaya latar. <strong>Glow IPS</strong> bersifat optik: menjadi lebih kuat saat Anda duduk dekat, melihat panel di luar sumbu, atau melihat sudut dari sudut curam. Kebocoran cahaya latar sejati bersifat mekanis atau terkait perakitan: tetap menempel di area bezel yang sama meskipun posisi mata Anda berubah. Perbedaan ini penting karena banyak pengecer memperlakukan kebocoran parah secara berbeda dari glow IPS normal.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Sudut pandang lebar, sering ada cahaya sudut, dan kebocoran terlihat jika bingkai menekan panel secara tidak merata.',
          points: ['Paling baik diperiksa dari jarak duduk normal Anda', 'Glow berubah dengan posisi kepala', 'Kebocoran tepi bisa relevan garansi jika parah'],
        },
        {
          title: 'VA',
          description: 'Kontras asli lebih tinggi, biasanya lebih sedikit glow tipe IPS, tetapi bisa menunjukkan clouding dan transisi gelap lambat.',
          points: ['Hitam terlihat lebih dalam dari IPS', 'Keseragaman masih bisa bervariasi per unit', 'Blooming muncul pada model peredupan lokal'],
        },
        {
          title: 'OLED',
          description: 'Tanpa cahaya latar LCD, jadi hitam murni seharusnya mati, tetapi keseragaman dekat-hitam dan pewarnaan masih bisa berarti.',
          points: ['Hitam murni seharusnya menghilang di ruangan gelap', 'Uji slide abu-abu secara terpisah untuk banding', 'Hindari mengacaukan hitam terangkat sumber dengan kebocoran panel'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara Menjalankan Uji Hitam Murni yang Andal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mode uji hitam sengaja menghapus antarmuka normal. Setelah dimulai, panel kaca menghilang, peristiwa penunjuk dinonaktifkan pada antarmuka pengaturan, halaman meminta layar penuh asli, dan lapisan uji menggunakan hitam persis. Setelah dua detik tanpa gerakan mouse, kursor disembunyikan sehingga tidak menciptakan titik referensi putih atau mengontaminasi inspeksi kamar gelap.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'warna latar uji' },
        { value: '2 s', label: 'waktu idle kursor' },
        { value: '100%', label: 'kecerahan yang disarankan' },
        { value: '0', label: 'aset eksternal dalam mode uji' },
      ],
    },
    {
      type: 'summary',
      title: 'Daftar periksa uji hitam',
      items: [
        'Gunakan resolusi asli dan nonaktifkan zoom browser jika tampilan diskalakan aneh',
        'Atur kecerahan SDR cukup tinggi untuk mengungkapkan cacat, atau uji HDR dalam mode persis yang Anda rencanakan untuk digunakan',
        'Periksa dari posisi menonton normal Anda terlebih dahulu, lalu dari sedikit lebih jauh',
        'Jangan menilai dari foto ponsel kecuali eksposur dikunci dan menyerupai apa yang mata Anda lihat',
        'Tekan Escape untuk keluar dari layar penuh dan ulangi uji setelah mengubah pengaturan monitor',
      ],
    },
    {
      type: 'tip',
      title: 'Foto kamera bisa membuat panel bagus terlihat buruk',
      html: 'Eksposur otomatis ponsel mencoba mencerahkan layar hitam, yang memperbesar cahaya samar dan dapat mengubah perilaku LCD normal menjadi gambar dramatis. Jika Anda memerlukan bukti garansi, kunci eksposur secara manual dan sertakan catatan yang menjelaskan apakah masalahnya terlihat selama konten nyata.',
    },
    {
      type: 'title',
      text: 'Uji Blooming Peredupan Lokal untuk Layar Mini LED dan FALD',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mode <strong>uji blooming monitor</strong> menempatkan lingkaran putih murni pada latar belakang hitam murni. Pada Mini LED, LCD FALD, atau TV dengan peredupan lokal, objek kecil itu memaksa satu atau lebih zona cahaya latar untuk menyala sementara zona tetangga mencoba tetap hitam. Jika algoritma peredupan, jumlah zona, diffuser, atau kontras panel tidak dapat mengisolasi cahaya, Anda melihat halo di sekitar lingkaran.',
    },
    {
      type: 'paragraph',
      html: 'Menyeret lingkaran itu penting. Blooming statis hanya satu bagian dari cerita. Sorotan bergerak mengungkapkan jeda peredupan, transisi zona, pemompaan, bidang bintang yang hancur, subtitle terangkat, dan perilaku berbentuk kisi. Sistem peredupan lokal yang baik harus menjaga objek tetap terang sambil meminimalkan kabut di sekitarnya dan menghindari bercak terang tertunda setelah lingkaran bergerak menjauh.',
    },
    {
      type: 'table',
      headers: ['Artefak', 'yang Perlu diperhatikan', 'Penjelasan kemungkinan'],
      rows: [
        ['Halo', 'Cahaya lembut di sekitar lingkaran putih', 'Zona peredupan lokal lebih besar dari objek terang'],
        ['Kisi zona', 'Blok persegi atau persegi panjang muncul di sekitar gerakan', 'Jumlah zona rendah atau tata letak Mini LED terlihat'],
        ['Jeda peredupan', 'Bercak terang mengikuti lingkaran terlambat', 'Algoritma merespons lambat terhadap gerakan'],
        ['Hitam terangkat', 'Seluruh layar menjadi abu-abu saat lingkaran muncul', 'Peredupan global atau kontrol kontras lemah'],
        ['Bloom subtitle', 'Kabut besar di sekitar teks putih kecil atau UI', 'Kecerahan agresif dengan zona lokal terbatas'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'Kasus penggunaan terbaik',
      html: 'Hubungkan laptop atau konsol ke TV mahal yang benar-benar Anda gunakan, buka penguji peredupan lokal ini di browser, dan seret sorotan melintasi ukuran layar persis. Pratinjau kecil tersemat tidak dapat menekan zona peredupan lokal seperti halnya layar penuh hitam dan putih.',
    },
    {
      type: 'title',
      text: 'Ekspektasi Jenis Panel: OLED, Mini LED, IPS, dan VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Apa yang cenderung dilakukan dengan baik dan buruk oleh setiap teknologi',
      items: [
        {
          pro: 'OLED mematikan piksel individual untuk hitam sejati dan seharusnya tidak menunjukkan kebocoran cahaya latar LCD.',
          con: 'OLED dapat menunjukkan banding dekat-hitam, pewarnaan, pembatasan kecerahan otomatis, dan risiko burn-in di bawah konten statis.',
        },
        {
          pro: 'Mini LED dapat mencapai kecerahan HDR tinggi dan mengurangi kabut area besar dibandingkan dengan LCD edge-lit.',
          con: 'Mini LED masih menggunakan zona, sehingga objek terang kecil dapat blooming ketika jumlah zona atau kualitas algoritma terbatas.',
        },
        {
          pro: 'IPS stabil untuk warna dan sudut pandang, yang membantu untuk kerja desktop dan tontonan bersama.',
          con: 'Glow IPS dan kebocoran tepi adalah keluhan umum pada adegan gelap, terutama saat duduk dekat.',
        },
        {
          pro: 'VA sering memiliki kontras asli jauh lebih baik daripada IPS dan dapat terlihat lebih dalam di ruangan gelap.',
          con: 'VA dapat menunjukkan smearing gelap, clouding, atau blooming pada versi peredupan lokal.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Kebocoran cahaya latar', definition: 'Cahaya yang tidak diinginkan keluar melalui tumpukan LCD, biasanya dekat bezel, terlihat pada gambar hitam.' },
        { term: 'Blooming', definition: 'Halo di sekitar objek terang yang disebabkan oleh zona peredupan lokal yang menerangi area lebih besar dari objek.' },
        { term: 'Glow IPS', definition: 'Pencerahan susu yang bergantung sudut dalam adegan gelap pada panel IPS.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, peredupan lokal array penuh, di mana cahaya latar LCD dibagi menjadi zona yang dikontrol secara independen.' },
        { term: 'Mini LED', definition: 'Cahaya latar LCD yang menggunakan banyak LED kecil untuk meningkatkan jumlah zona dan kecerahan HDR.' },
        { term: 'Keseragaman hitam', definition: 'Seberapa merata layar menampilkan konten hitam atau dekat-hitam di seluruh permukaan layar.' },
      ],
    },
    {
      type: 'title',
      text: 'Kapan Cacat Cukup Serius untuk Dikembalikan',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Tanda bahaya masa pengembalian',
      badge: 'Garansi',
      html: 'Pertimbangkan untuk mendokumentasikan masalah dengan cepat jika sudut terang terlihat dari jarak duduk normal, bercak yang sama mengganggu Anda dalam film atau game, peredupan lokal menciptakan halo jelas di sekitar subtitle, atau layar HDR mahal berkinerja lebih buruk daripada ulasan tipikal untuk model yang sama.',
    },
    {
      type: 'paragraph',
      html: 'Keputusan yang adil menggunakan konten nyata dan tingkat produk. Monitor IPS kantor murah mungkin memiliki cahaya sudut ringan yang normal untuk kelasnya. Monitor Mini LED premium atau TV kelas atas seharusnya mengontrol level hitam dan blooming jauh lebih baik. Jika cacat jelas dalam film letterbox, menu game gelap, adegan luar angkasa, atau kerja desktop, itu bukan hanya keingintahuan lab.',
    },
    {
      type: 'list',
      items: [
        'Periksa konten yang sama di layar lain untuk mengesampingkan sumber',
        'Setel ulang pengaturan gambar sebelum mengasumsikan panel cacat',
        'Coba peredupan lokal rendah, sedang, dan tinggi karena algoritma berbeda per mode',
        'Catat kecerahan, mode HDR, mode peredupan lokal, dan jarak menonton dalam catatan Anda',
        'Jika mengembalikan, jelaskan apa yang mata Anda lihat daripada hanya mengirim foto yang terlalu terang',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Uji Ini Menggunakan Kode, Bukan Video',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'File video dapat memperkenalkan artefak kompresi, kerja dekode browser, buffering, konversi rentang warna, dan perubahan pacing frame. Uji cacat panel seharusnya tidak bergantung pada file MP4. Alat ini hanya menggunakan HTML dan CSS sisi klien untuk status uji: hitam persis untuk latar belakang dan putih persis untuk lingkaran bergerak. Itu menjaga beban kerja tetap rendah dan menghindari aktivitas jaringan setelah halaman dimuat.',
    },
    {
      type: 'paragraph',
      html: 'Posisi lingkaran blooming diterapkan melalui <code>requestAnimationFrame</code>, yang menyinkronkan pembaruan visual dengan loop refresh browser. Input penunjuk, mouse, dan sentuh memperbarui koordinat target, lalu frame animasi berikutnya menggerakkan lingkaran putih. Ini membuat penyeretan terasa konsisten pada monitor refresh tinggi, tablet, dan ponsel OLED tanpa melakukan pekerjaan yang tidak perlu pada setiap peristiwa input mentah.',
    },
    {
      type: 'message',
      title: 'Catatan privasi dan kinerja',
      ariaLabel: 'Catatan privasi dan kinerja',
      html: 'Status uji aktif tidak memerlukan pelacakan, video, gambar jarak jauh, atau unggahan pengukuran. Status ini sengaja dibuat sederhana sehingga laptop lama, browser TV, dan pengaturan ruang tamu dapat menekan panel layar, bukan CPU.',
    },
    {
      type: 'title',
      text: 'Pemecahan Masalah Hasil yang Salah',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Gejala selama uji', 'Kemungkinan penyebab', 'yang Perlu dicoba'],
      rows: [
        ['Layar hitam tidak benar-benar hitam', 'Rentang RGB terbatas, pengaturan hitam terangkat, pemetaan nada HDR, atau overlay browser', 'Atur output RGB penuh, nonaktifkan kontras dinamis, dan konfirmasi tidak ada filter malam OS yang aktif'],
        ['Kursor mouse tetap terlihat', 'Gerakan mengatur ulang timer idle atau browser memblokir penyembunyian kursor sebentar', 'Berhenti menggerakkan mouse selama dua detik atau gunakan remote/keyboard'],
        ['Layar penuh tidak dimulai', 'Browser menolak layar penuh di luar klik langsung atau keterbatasan browser TV', 'Tekan tombol mulai lagi atau gunakan pintasan layar penuh browser'],
        ['Blooming berubah antar mode', 'Pengaturan peredupan lokal mengubah perilaku zona', 'Uji ulang Rendah, Sedang, Tinggi, dan Mati untuk memahami keseimbangannya'],
        ['OLED terlihat abu-abu', 'Ketidakcocokan rentang video, pantulan ruangan, atau mode gambar hitam terangkat', 'Periksa rentang sumber, level hitam, kecerahan, dan pantulan sekitar'],
      ],
    },
    {
      type: 'summary',
      title: 'Interpretasi praktis',
      items: [
        'Kebocoran cahaya latar paling meyakinkan ketika tetap di tempat dan terlihat dalam konten gelap nyata',
        'Glow IPS berubah dengan sudut, jadi uji dari posisi di mana Anda benar-benar duduk',
        'Blooming adalah keterbatasan peredupan lokal, bukan masalah piksel mati',
        'OLED seharusnya lulus uji hitam murni, tetapi masih perlu pemeriksaan keseragaman dekat-hitam terpisah',
        'Pengaturan uji yang baik adalah gelap, layar penuh, kecerahan tinggi, dan bebas dari pantulan',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Kebocoran cahaya latar',
    bleedDescription: 'Hitam persis layar penuh untuk kebocoran tepi, glow IPS, clouding, dan pemeriksaan keseragaman hitam.',
    bloomingTitle: 'Peredupan lokal',
    bloomingDescription: 'Lingkaran putih yang dapat diseret menekan Mini LED, FALD, penanganan dekat-hitam OLED, dan zona peredupan TV.',
    startBleed: 'Mulai uji hitam',
    startBlooming: 'Mulai uji blooming',
    prepTitle: 'Sebelum Anda mulai',
    prepBrightness: 'Atur kecerahan monitor atau TV ke 100%.',
    prepRoom: 'Matikan lampu ruangan dan hilangkan pantulan.',
    prepFullscreen: 'Tekan Escape untuk keluar dari layar penuh dan setel ulang uji.',
    panelLabel: 'Pratinjau cacat panel',
    parametersLabel: 'Parameter uji',
    modeControlsLabel: 'Mode uji cahaya latar',
    blackLevelLabel: 'Hitam',
    blackLevelValue: '#000000',
    brightnessLabel: 'Kecerahan',
    brightnessValue: '100%',
    idleLabel: 'Kursor',
    idleValue: '2s',
    fullscreenLabel: 'Layar Penuh',
    fullscreenValue: 'API',
    escapeHint: 'Uji hitam murni berjalan. Berhenti menggerakkan mouse selama 2 detik untuk menyembunyikan kursor. Tekan Esc untuk keluar.',
    dragHint: 'Seret atau sentuh lingkaran putih. Perhatikan halo, kisi zona, dan peredupan tertunda. Tekan Esc untuk keluar.',
  },
};
