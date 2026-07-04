import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-jitter-sudut-mouse';
const title = 'Tes Jitter dan Koreksi Sudut Mouse';
const description =
  'Gambar jejak mouse mentah secara online untuk mendeteksi jitter sensor, pelacakan tidak stabil, dan koreksi sudut atau prediksi yang membuat gerakan menjadi lurus secara buatan.';

const faqData = [
  {
    question: 'Apa itu jitter mouse?',
    answer:
      'Jitter mouse adalah guncangan atau gerakan berisik yang tidak diinginkan pada jalur kursor bahkan saat tangan Anda bergerak mulus. Ini bisa berasal dari jendela sensor yang kotor, permukaan yang buruk, perilaku angkat tinggi, gangguan listrik, ketidakstabilan nirkabel, atau sensor yang kesulitan pada DPI yang dipilih.',
  },
  {
    question: 'Apa itu koreksi sudut?',
    answer:
      'Koreksi sudut, terkadang disebut prediksi, adalah fitur koreksi di mana firmware mouse mencoba mengubah gerakan manusia yang sedikit tidak sempurna menjadi garis horizontal, vertikal, atau diagonal yang lebih lurus. Beberapa pengguna kantor menyukainya, tetapi banyak gamer dan seniman lebih memilih gerakan mentah tanpa prediksi.',
  },
  {
    question: 'Bisakah tes ini membuktikan sensor mouse saya rusak?',
    answer:
      'Tes ini tidak dapat memeriksa sensor secara elektrik, tetapi menunjukkan jalur gerakan yang diterima browser Anda. Jika gerakan mulus yang berulang menciptakan titik-titik berisik, penyimpangan tiba-tiba, atau segmen yang tidak wajar lurus, hasilnya adalah bukti berguna untuk memecahkan masalah mouse, permukaan, DPI, koneksi nirkabel, atau pengaturan firmware.',
  },
  {
    question: 'Bagaimana cara menggambar untuk hasil yang paling andal?',
    answer:
      'Gambar garis diagonal lambat, kurva kecepatan sedang, dan gerakan horizontal panjang. Uji gerakan yang sama beberapa kali. Jitter lebih mudah dilihat pada garis lambat yang terkontrol, sementara koreksi sudut lebih mudah dikenali ketika gerakan diagonal menjadi mencurigakan lurus atau bertingkat.',
  },
];

const howToData = [
  {
    name: 'Bersihkan sensor dan alas mouse',
    text: 'Sebelum menguji, bersihkan debu atau rambut dari jendela sensor dan gunakan alas mouse yang stabil atau permukaan meja.',
  },
  {
    name: 'Gambar garis diagonal lambat',
    text: 'Tahan tombol utama mouse dan gambar beberapa goresan diagonal. Sensor mentah harus menunjukkan variasi tangan alami, bukan garis yang dipaksa sempurna pada satu sudut.',
  },
  {
    name: 'Gambar kurva mulus',
    text: 'Buat lingkaran, kurva-S, dan busur. Jitter muncul sebagai titik kasar dan berisik yang melompat keluar dari kurva yang diinginkan.',
  },
  {
    name: 'Bandingkan pengaturan DPI dan permukaan',
    text: 'Ulangi gerakan yang sama pada tingkat DPI, tingkat polling, pengaturan angkat, dan permukaan yang berbeda untuk menemukan kapan masalah muncul.',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: 'Tes Jitter Mouse Online: Periksa Kebisingan Sensor dan Koreksi Sudut',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sensor mouse yang baik harus mengikuti tangan Anda tanpa menambahkan kebisingan yang terlihat atau diam-diam mengoreksi jalur. Ketika sensor kotor, permukaan sulit dilacak, DPI terlalu tinggi untuk perangkat keras, atau firmware menerapkan prediksi, jalur kursor bisa berhenti terasa alami. Tes jitter mouse ini memungkinkan Anda menggambar jejak mentah dan memeriksa titik pembacaan individual sehingga masalah sensor menjadi terlihat, bukan samar.',
    },
    {
      type: 'paragraph',
      html: 'Cara paling berguna untuk menguji sederhana: gambar garis dan kurva yang terkontrol, lalu lihat bentuk jejaknya. Sensor mentah yang sehat menghasilkan jalur yang mengikuti gerakan Anda dengan ketidaksempurnaan kecil manusia. Sensor yang berisik menghasilkan titik kasar, lonjakan kecil, dan goyangan tidak merata. Mouse dengan koreksi sudut atau prediksi dapat membuat gerakan diagonal atau horizontal terlihat tidak wajar lurus, seolah-olah firmware mengoreksi tangan Anda.',
    },
    {
      type: 'title',
      text: 'Seperti Apa Jitter Mouse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Jitter mouse tidak sama dengan getaran tangan normal. Semua orang menggambar garis yang sedikit tidak sempurna. Jitter menjadi mencurigakan ketika titik-titik melompat keluar dari arah gerakan meskipun tangan Anda bergerak lambat dan mantap. Ini sering muncul sebagai tepi kabur di sekitar garis, lonjakan samping kecil, atau jejak yang terlihat tergores alih-alih mulus.',
    },
    {
      type: 'table',
      headers: ['Pola Jejak', 'Kemungkinan Arti', 'Yang Harus Dicoba Selanjutnya'],
      rows: [
        ['Lonjakan acak kecil selama garis lambat', 'Kebisingan sensor, kotoran, atau masalah pelacakan permukaan', 'Bersihkan jendela sensor dan coba alas mouse yang berbeda'],
        ['Jitter hanya pada DPI tinggi', 'Sensor atau firmware kesulitan pada sensitivitas itu', 'Uji ulang pada 400, 800, 1600, dan 3200 DPI'],
        ['Gerakan kasar hanya dalam mode nirkabel', 'Baterai, jarak penerima, atau gangguan', 'Dekatkan penerima dan uji dengan baterai baru'],
        ['Kebisingan dekat pengangkatan atau saat memiringkan mouse', 'Jarak angkat atau kontak tidak rata dengan permukaan', 'Jaga mouse tetap datar dan kurangi jarak angkat jika tersedia'],
        ['Jitter di satu meja tapi tidak di meja lain', 'Masalah tekstur atau reflektivitas permukaan', 'Gunakan alas mouse matte yang dirancang untuk sensor optik'],
      ],
    },
    {
      type: 'title',
      text: 'Seperti Apa Koreksi Sudut',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Koreksi sudut berbeda dari jitter. Alih-alih menambahkan kebisingan, ia menghilangkan variasi alami. Jika Anda menggambar garis diagonal dengan tangan, sensor mentah harus mempertahankan penyimpangan kecil manusia. Dengan koreksi sudut diaktifkan, garis dapat terkunci ke arah horizontal, vertikal, atau diagonal yang sempurna lurus. Ini dapat memudahkan menggambar di desktop, tetapi biasanya tidak diinginkan untuk bidikan kompetitif, seni piksel, pengeditan foto, dan tugas apa pun di mana kursor harus cocok persis dengan tangan.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Perilaku sensor mentah',
          description: 'Jejak mengikuti tangan Anda, termasuk kurva dan koreksi alami kecil. Garis diagonal tidak sempurna secara matematis kecuali gerakan Anda sempurna.',
        },
        {
          title: 'Perilaku koreksi sudut',
          description: 'Jejak terlihat mencurigakan lurus untuk bagian yang panjang, terutama di dekat sudut umum seperti horizontal, vertikal, atau 45 derajat.',
        },
        {
          title: 'Perilaku jitter',
          description: 'Jejak menjadi berisik, kabur, atau berduri. Alih-alih terlalu lurus, ia terlihat tidak stabil dan kasar.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Cara Menguji Mouse Anda dengan Benar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Mulai dengan jendela sensor yang bersih dan alas mouse yang dikenal baik',
        'Gambar garis diagonal lambat dari sudut ke sudut dan ulangi gerakan yang sama beberapa kali',
        'Gambar lingkaran dan kurva-S untuk mengungkapkan jitter yang mungkin tidak muncul dalam garis lurus',
        'Uji pada beberapa tingkat DPI karena beberapa sensor menjadi lebih berisik pada sensitivitas sangat tinggi',
        'Nonaktifkan fitur perangkat lunak vendor seperti koreksi sudut, prediksi, penyetelan permukaan, atau akselerasi jika memungkinkan',
        'Bandingkan mode kabel dan nirkabel jika mouse Anda mendukung keduanya',
        'Bandingkan dengan mouse lain pada permukaan yang sama untuk memisahkan kegagalan mouse dari masalah permukaan',
      ],
    },
    {
      type: 'title',
      text: 'Menafsirkan Skor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat ini menampilkan skor jitter, skor koreksi sudut, kelurusan, deviasi rata-rata, dan jumlah sampel yang ditangkap. Nilai-nilai ini paling baik digunakan secara komparatif. Gambar garis yang sama dengan gerakan tangan yang sama setelah mengubah satu variabel: DPI, permukaan, penempatan penerima nirkabel, atau pengaturan firmware mouse. Jika skor turun setelah mengubah permukaan atau membersihkan sensor, Anda telah menemukan penyebab yang mungkin.',
    },
    {
      type: 'table',
      headers: ['Hasil', 'Apa yang Disarankan', 'Tindakan Praktis'],
      rows: [
        ['Jitter rendah dan koreksi rendah', 'Jalur sensor terlihat alami dan stabil', 'Pertahankan pengaturan saat ini dan gunakan sebagai patokan'],
        ['Jitter tinggi, koreksi rendah', 'Mouse melacak tetapi jalurnya berisik', 'Bersihkan sensor, ganti permukaan, turunkan DPI, dan uji ulang'],
        ['Jitter rendah, koreksi tinggi', 'Jalur mungkin dikoreksi firmware', 'Cari opsi prediksi atau koreksi sudut di perangkat lunak mouse'],
        ['Jitter tinggi dan koreksi tinggi', 'Jejak tidak stabil dan mungkin terlalu dikoreksi', 'Reset profil perangkat lunak mouse dan uji ulang dari pengaturan default'],
        ['Skor berubah kuat berdasarkan permukaan', 'Sensor tidak menyukai satu tekstur atau reflektivitas permukaan', 'Gunakan permukaan dengan jejak terbersih'],
      ],
    },
    {
      type: 'title',
      text: 'DPI, Tingkat Polling, dan Jitter Mouse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'DPI tinggi tidak secara otomatis berarti pelacakan yang lebih baik. Beberapa mouse bekerja bersih pada DPI sedang tetapi menunjukkan lebih banyak kebisingan terlihat pada DPI sangat tinggi karena kesalahan sensor kecil diperkuat menjadi gerakan kursor yang lebih besar. Tingkat polling juga dapat mengubah nuansa jejak. Tingkat polling yang lebih tinggi memberikan pembaruan yang lebih sering, tetapi tidak dapat memperbaiki sensor kotor, permukaan buruk, atau prediksi firmware.',
    },
    {
      type: 'paragraph',
      html: 'Untuk perbandingan yang adil, jaga gerakan tangan Anda serupa dan ubah satu pengaturan setiap kali. Misalnya, gambar garis diagonal yang sama pada 800 DPI, 1600 DPI, dan 3200 DPI. Jika jalur menjadi kabur hanya pada nilai tertinggi, solusi terbaik mungkin adalah menurunkan DPI dan menyesuaikan sensitivitas dalam game daripada mengganti mouse.',
    },
    {
      type: 'title',
      text: 'Penyebab Umum Jitter Sensor Mouse',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Debu, rambut, atau minyak di dekat jendela sensor optik',
        'Permukaan mengkilap, reflektif, transparan, atau tidak rata',
        'Pengaturan DPI sangat tinggi yang memperkuat kesalahan sensor kecil',
        'Baterai lemah atau gangguan nirkabel',
        'Penerima ditempatkan jauh dari mouse atau di belakang casing PC logam',
        'Filter firmware, kalibrasi permukaan, atau profil perangkat lunak vendor',
        'Masalah jarak angkat saat mouse dimiringkan atau digerakkan cepat',
        'Lensa sensor yang aus atau rusak setelah penggunaan berat',
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Gamer dan Desainer Peduli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dalam game, jitter dapat membuat penyesuaian mikro lebih sulit karena bidikan tidak berhenti tepat di tempat yang diinginkan tangan. Koreksi sudut bisa sama bermasalahnya: mungkin membantu menggambar garis desktop lurus, tetapi juga dapat mengubah koreksi bidikan kecil dan membuat pelacakan diagonal terasa terfilter. Bagi desainer, ilustrator, pengguna CAD, dan editor foto, koreksi sensor dapat membuat gerakan tangan bebas terasa kurang jujur dan lebih sulit dikendalikan.',
    },
    {
      type: 'paragraph',
      html: 'Mouse tidak memerlukan jejak sempurna untuk menjadi baik. Gerakan manusia secara alami tidak sempurna. Tanda peringatan dapat diulang: permukaan yang sama selalu menciptakan titik berisik, DPI yang sama selalu menciptakan lonjakan, atau mouse yang sama selalu membuat diagonal mencurigakan lurus sementara mouse lain tidak.',
    },
    {
      type: 'title',
      text: 'Sebelum Membeli Mouse Baru',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bersihkan jendela sensor dengan hati-hati dengan mouse dimatikan',
        'Coba alas mouse yang berbeda, sebaiknya kain matte atau permukaan gaming hibrida',
        'Turunkan DPI dan kompensasi dengan sensitivitas perangkat lunak',
        'Nonaktifkan koreksi sudut, prediksi, presisi penunjuk, dan opsi akselerasi',
        'Dekatkan penerima nirkabel menggunakan kabel ekstensi USB',
        'Perbarui atau reset profil firmware mouse jika perangkat lunak vendor mendukungnya',
        'Uji mouse lain di komputer dan permukaan yang sama untuk perbandingan',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Aturan diagnostik yang berguna',
      html: '<p>Satu jejak aneh saja tidak cukup. Pola yang dapat diulang adalah yang penting. Jika jitter atau koreksi sudut muncul berulang kali di bawah pengaturan yang sama, lalu menghilang saat Anda membersihkan sensor, mengganti permukaan, menurunkan DPI, atau menonaktifkan prediksi, Anda telah menemukan penyebab yang paling mungkin.</p>',
    },
  ],
  ui: {
    badge: 'Jejak Sensor Mentah',
    canvasLabel: 'Area gambar untuk tes jitter dan koreksi sudut mouse',
    canvasHint: 'Gambar diagonal lambat, lingkaran, dan kurva. Titik sensor individual tetap terlihat sehingga pelacakan kasar mudah dikenali.',
    pointerPrompt: 'Tahan dan gambar di dalam area gambar',
    samples: 'Sampel',
    jitterScore: 'Jitter',
    snappingScore: 'Koreksi',
    straightness: 'Kelurusan',
    rawDeviation: 'Deviasi rata-rata',
    statusIdle: 'Gambar di dalam bidang untuk menangkap gerakan mouse mentah',
    statusHealthy: 'Jejak terlihat alami dan stabil dalam sampel terbaru',
    statusJitter: 'Gerakan berisik terdeteksi di jejak terbaru',
    statusSnapping: 'Gerakan mencurigakan lurus terdeteksi',
    statusMixed: 'Baik jitter maupun kemungkinan koreksi sudut muncul di jejak',
    reset: 'Atur Ulang',
    holdShift: 'Tips: uji satu perubahan dalam satu waktu. DPI, permukaan, mode nirkabel, dan pengaturan prediksi semuanya dapat mengubah jejak.',
    sensitivity: 'Sensitivitas deteksi',
    low: 'stabil',
    high: 'ketat',
    traceLog: 'Peristiwa jejak',
    emptyLog: 'Gambar beberapa goresan terkontrol untuk memulai log peristiwa.',
    jitterEvent: 'jitter',
    snappingEvent: 'koreksi sudut',
    combinedEvent: 'jitter dan koreksi sudut',
    cleanEvent: 'jejak bersih',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
