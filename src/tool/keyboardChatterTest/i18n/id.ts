import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tes-chatter-keyboard';
const title = 'Tes Chatter Keyboard';
const description = 'Deteksi chattering keyboard mekanis, pengetikan ganda, dan pantulan sakelar yang rusak dengan memeriksa seberapa cepat tombol yang sama muncul dua kali.';

const faqData = [
  {
    question: 'Apa itu chatter keyboard?',
    answer: 'Chatter keyboard adalah kerusakan perangkat keras di mana satu tekanan fisik terdaftar sebagai beberapa tekanan. Ini umum terjadi pada sakelar mekanis yang kotor, aus, teroksidasi, atau dengan debounce yang buruk.',
  },
  {
    question: 'Bagaimana cara kerja tes chatter keyboard ini?',
    answer: 'Tekan tombol yang mencurigakan secara perlahan, satu ketukan setiap kali. Jika log menunjukkan tekanan berulang hanya terpisah beberapa milidetik, sakelar mungkin memantul dan menghasilkan huruf ganda.',
  },
  {
    question: 'Delta berapa yang berarti keyboard saya mengetik ganda?',
    answer: 'Tekanan berulang di bawah 30 ms sangat mencurigakan untuk chatter. Pengulangan dari 30 hingga 50 ms perlu diperhatikan. Pengulangan yang disengaja normal biasanya di atas 50 ms untuk kebanyakan pengguna.',
  },
  {
    question: 'Mengapa tekanan pertama tidak menunjukkan delta?',
    answer: 'Delta memerlukan tekanan sebelumnya dari tombol yang sama. Tekanan pertama menetapkan garis dasar, dan tekanan berikutnya menunjukkan selang waktu dalam milidetik.',
  },
  {
    question: 'Bisakah perangkat lunak memperbaiki chattering keyboard?',
    answer: 'Perangkat lunak debounce dapat menyembunyikan beberapa gejala, tetapi tidak memperbaiki sakelar. Membersihkan, memasang kembali sakelar hot-swap, mengganti sakelar, atau memperbaiki PCB keyboard mungkin diperlukan.',
  },
];

const howToData = [
  {
    name: 'Buka alat dan tekan tombol secara normal',
    text: 'Tidak ada tombol mulai. Klik ke dalam alat jika perlu, lalu tekan tombol yang telah mengetik ganda.',
  },
  {
    name: 'Ketuk tombol yang mencurigakan satu per satu',
    text: 'Tekan tombol yang mengetik ganda. Jika satu tekanan fisik menciptakan beberapa baris log dengan delta kecil, sakelar kemungkinan sedang chattering.',
  },
  {
    name: 'Baca kode warna',
    text: 'Hijau berarti normal di atas 50 ms, kuning berarti mencurigakan dari 30 hingga 50 ms, dan merah berarti chatter terdeteksi di bawah 30 ms.',
  },
  {
    name: 'Ekspor log jika diperlukan',
    text: 'Gunakan tombol unduh untuk menyimpan log CSV yang dapat membantu membandingkan tombol atau mendokumentasikan kerusakan intermiten.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Tes Pengetikan Ganda Keyboard Mekanis',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tes chatter keyboard ini membantu mendiagnosis keyboard mekanis yang mengetik dua huruf dari satu tekanan, melewatkan pelepasan bersih, atau menghasilkan karakter berulang tanpa Anda sengaja mengetuk dua kali. Gunakan sebelum membersihkan sakelar, mengubah pengaturan debounce firmware, membuka klaim garansi, atau mengganti sakelar hot-swap.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cara membaca hasilnya',
      badge: 'Ambang delta',
      html: '<p><strong>Normal</strong> berarti pengulangan di atas 50 ms dan biasanya disengaja. <strong>Mencurigakan</strong> berarti 30-50 ms dan harus diuji ulang pada tombol yang sama. <strong>Chatter terdeteksi</strong> berarti di bawah 30 ms, yang sangat mungkin satu tekanan fisik memantul menjadi beberapa kontak listrik.</p>',
    },
    {
      type: 'title',
      text: 'Mengapa Sakelar Mekanis Berchatter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sakelar mekanis tidak menutup sebagai sinyal digital yang bersih sempurna. Kontak logam dapat memantul selama beberapa milidetik sebelum menetap. Firmware keyboard biasanya menyaring pantulan itu dengan jendela debounce. Chattering terjadi ketika kontak begitu kotor, aus, teroksidasi, longgar, retak, atau tidak disetel dengan baik sehingga keyboard melaporkan tekanan ekstra setelah filter debounce seharusnya menanganinya.',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Penyebab kemungkinan', 'Yang dicoba terlebih dahulu'],
      rows: [
        ['Satu tombol mengetik huruf yang sama dua kali', 'Kontak sakelar kotor atau aus', 'Lepaskan keycap, tiup debu, dan uji lagi sebelum mengganti sakelar.'],
        ['Beberapa tombol hot-swap berchatter setelah perakitan', 'Pin sakelar tidak terpasang dengan bersih', 'Tarik dan pasang kembali sakelar, periksa pin bengkok atau soket longgar.'],
        ['Hanya terjadi setelah tumpahan atau kelembaban', 'Oksidasi atau residu pada kontak', 'Lepaskan keyboard dan bersihkan sesuai panduan produsen.'],
        ['Banyak tombol menunjukkan delta kecil', 'Debounce firmware terlalu rendah atau masalah pemindaian', 'Bandingkan di port USB lain dan tinjau pengaturan debounce firmware jika tersedia.'],
      ],
    },
    {
      type: 'title',
      text: 'Metode Pengujian yang Mengurangi Positif Palsu',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Uji satu tombol mencurigakan pada satu waktu alih-alih mengetik kalimat penuh.',
        'Tekan tombol sekali, lepaskan sepenuhnya, dan tunggu sebentar sebelum tekanan berikutnya.',
        'Bandingkan tombol mencurigakan dengan tombol terdekat yang terasa sehat.',
        'Abaikan baris pertama untuk tombol karena tidak memiliki tekanan sebelumnya untuk dibandingkan.',
        'Jika tombol yang sama berulang kali menunjukkan baris merah di bawah 30 ms dari ketukan tunggal, perlakukan sebagai kerusakan perangkat keras.',
        'Jika hanya baris kuning yang muncul, ulangi tes lebih lambat dan periksa apakah ritme ketukan Anda menyebabkan interval pendek.',
      ],
    },
    {
      type: 'title',
      text: 'Chatter vs. Pengetikan Cepat yang Disengaja',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chatter',
          description: 'Mengelompok pada satu tombol, sering di bawah 30 ms, dan muncul ketika Anda bermaksud satu tekanan.',
          points: ['Periksa sakelar atau soket.', 'Bandingkan dengan tombol sehat terdekat.'],
        },
        {
          title: 'Pengetikan cepat',
          description: 'Mempengaruhi banyak tombol, mengikuti ritme Anda, dan cenderung berada di atas 50 ms antara tekanan berulang dari tombol yang sama.',
          points: ['Biasanya penggunaan normal.', 'Uji ulang dengan ketukan tunggal yang lebih lambat.'],
        },
        {
          title: 'Pengulangan tombol OS',
          description: 'Muncul saat menahan tombol dan biasanya berulang pada ritme teratur yang diatur oleh sistem operasi Anda.',
          points: ['Lepaskan sepenuhnya di antara ketukan.', 'Periksa pengaturan pengulangan keyboard secara terpisah.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Apa yang Dilakukan Ketika Tombol Gagal',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Simpan log CSV sebelum mengubah apa pun sehingga Anda dapat membandingkan hasil sebelum dan sesudah.',
        'Lepaskan keycap dan periksa kotoran, residu cairan, atau batang yang tidak kembali dengan mulus.',
        'Untuk keyboard hot-swap, pasang kembali atau ganti sakelar dan uji posisi yang sama lagi.',
        'Untuk keyboard yang disolder, bandingkan opsi debounce firmware sebelum mengasumsikan PCB perlu diperbaiki.',
        'Coba kabel dan port USB lain jika beberapa tombol yang tidak terkait menunjukkan delta yang tidak mungkin.',
        'Untuk dukungan garansi, sertakan tombol yang terpengaruh, nilai delta berulang, model keyboard, versi firmware, dan apakah kerusakan mengikuti sakelar atau soket PCB.',
      ],
    },
    {
      type: 'summary',
      title: 'Aturan cepat',
      items: [
        'Satu baris merah adalah petunjuk, bukan vonis.',
        'Baris merah berulang di bawah 30 ms pada tombol fisik yang sama adalah bukti kuat dari chatter keyboard.',
        'Gunakan ketukan tunggal yang disengaja dan bandingkan sakelar mencurigakan dengan tombol sehat terdekat sebelum mengganti perangkat keras.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Tekan tombol apa saja',
    statusListening: 'Mengukur delta tombol',
    statusChatter: 'Chatter terdeteksi',
    totalPresses: 'Total tekanan',
    chatterEvents: 'Kejadian chatter',
    worstDelta: 'Delta terburuk',
    watchWindow: 'Baris disimpan',
    keyColumn: 'Tombol',
    deltaColumn: 'Delta',
    verdictColumn: 'Vonis',
    timeColumn: 'Waktu',
    normal: 'Normal',
    suspect: 'Mencurigakan',
    chatter: 'Chatter',
    waiting: 'Menunggu',
    clear: 'Hapus log',
    exportLog: 'Ekspor CSV',
    hint: 'Log menyimpan 80 baris terbaru agar sesi panjang tetap cepat. Pengulangan tombol tahan diabaikan; baris merah berasal dari tekanan terpisah yang terjadi terlalu berdekatan.',
    captureNotice: 'Tidak ada tombol mulai. Ketuk tombol mencurigakan sekali dan lihat delta dari tekanan sebelumnya.',
    keyboardAriaLabel: 'Aktivitas tombol terbaru',
    logAriaLabel: 'Log kejadian chatter keyboard',
    escapeKey: 'Esc',
    backspaceKey: 'Hapus',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Spasi',
    csvHeader: 'tombol,kode,delta_ms,keparahan,waktu',
  },
};
