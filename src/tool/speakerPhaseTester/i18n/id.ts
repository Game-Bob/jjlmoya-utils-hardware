import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'penguji-fasa-speaker';
const title = 'Penguji Fase Speaker';
const description =
  'Putar sinyal uji stereo sefase dan terbalik 180 derajat di browser Anda untuk memeriksa polaritas speaker, kesalahan pengkabelan, dan pembatalan fase.';

const faqData = [
  {
    question: 'Bagaimana cara mengetahui apakah polaritas speaker saya benar?',
    answer:
      'Putar sinyal normal, lalu sinyal terbalik dari posisi dengar yang sama. Dengan speaker yang terhubung benar, mode terbalik seharusnya terdengar lebih lemah, kosong, atau kurang terpusat karena saluran kiri dan kanan saling membatalkan sebagian di ruangan. Jika mode terbalik terdengar lebih penuh atau lebih keras, mungkin satu speaker sudah terhubung dengan polaritas terbalik.',
  },
  {
    question: 'Apa artinya fase terbalik dalam pengujian ini?',
    answer:
      'Alat ini mengirimkan sinyal yang sama ke kedua saluran, lalu mengalikan satu saluran dengan -1 dalam mode terbalik. Itu membalik bentuk gelombang 180 derajat tanpa mengunduh file audio. Hasil fisiknya setara dengan membalik terminal positif dan negatif pada satu speaker untuk sinyal uji.',
  },
  {
    question: 'Bisakah pengujian ini memeriksa semua speaker di home theater?',
    answer:
      'Paling baik untuk memeriksa pasangan stereo atau speaker depan kiri dan kanan dari sistem yang lebih besar. Untuk sistem surround penuh, uji pasangan satu per satu dan gabungkan hasilnya dengan uji saluran receiver AV Anda, kalibrasi jarak, dan mikrofon pengukur atau SPL jika tersedia.',
  },
  {
    question: 'Haruskah saya menggunakan pink noise atau nada sinus?',
    answer:
      'Pink noise biasanya lebih mudah untuk pemeriksaan polaritas karena mencakup rentang frekuensi yang luas dan membuat pembatalan menjadi jelas. Nada sinus dapat membantu fokus pada satu frekuensi, tetapi mode ruangan dapat membuat satu nada menyesatkan.',
  },
  {
    question: 'Apakah ini aman untuk speaker dan headphone?',
    answer:
      'Ya, pada level sedang. Mulai rendah, hindari penguatan amplifier maksimum, dan jangan memutar nada terus-menerus dengan keras melalui headphone, speaker laptop kecil, atau speaker yang tidak dikenal. Segera hentikan jika Anda mendengar distorsi atau tekanan mekanis.',
  },
];

const howToData = [
  {
    name: 'Posisikan diri Anda di posisi mendengarkan',
    text: 'Duduklah di tempat Anda biasa mendengarkan sehingga pembatalan akustik yang Anda dengar sesuai dengan ruangan aktual dan penempatan speaker.',
  },
  {
    name: 'Putar sinyal normal',
    text: 'Tekan Putar Dalam Fase dan perhatikan gambar tengah, kenyaringan, dan tubuh tonal.',
  },
  {
    name: 'Putar sinyal terbalik',
    text: 'Tekan Putar Luar Fase. Speaker yang terhubung dengan benar seharusnya biasanya terdengar lebih menyebar, kosong, atau lebih senyap.',
  },
  {
    name: 'Periksa pengkabelan jika hasilnya terbalik',
    text: 'Jika mode terbalik terdengar lebih kuat dari normal, periksa terminal positif dan negatif pada satu speaker, terminal amplifier, konektor banana, pelat dinding, dan adaptor.',
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
  step: howToData.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pengujian Fase dan Polaritas Speaker Online', level: 2 },
    {
      type: 'paragraph',
      html: 'Penguji fase speaker ini membandingkan sinyal stereo normal dengan versi di mana satu saluran dibalik <strong>180 derajat</strong>. Tujuan praktisnya sederhana: mengonfirmasi apakah dua speaker dalam satu pasangan bergerak bersama saat seharusnya. Ketika speaker kiri dan kanan terhubung dengan polaritas yang sama, energi bass dan mid saling menguatkan dan gambar tengah terasa stabil. Ketika satu speaker terhubung terbalik, konus bergerak ke arah yang berlawanan untuk sinyal yang sama, yang dapat membuat vokal kehilangan tubuh, bass menghilang, dan penempatan stereo terasa anehnya lebar atau kosong.',
    },
    {
      type: 'paragraph',
      html: 'Pengujian dihasilkan secara lokal di browser. Tidak mengalirkan file audio berat. Dalam mode normal, kedua saluran menerima pink noise atau nada sinus yang sama. Dalam mode terbalik, satu saluran dikalikan dengan <code>-1</code>, yang menciptakan bentuk gelombang yang dibalik secara matematis. Jika pengkabelan fisik Anda benar, inversi buatan itu seharusnya menciptakan pembatalan yang jelas. Jika pengkabelan fisik Anda sudah terbalik, tombol terbalik dapat memperbaiki sebagian kesalahan, sehingga mungkin terdengar lebih keras, lebih solid, atau lebih terpusat daripada tombol normal.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Interpretasi cepat',
      badge: 'Aturan inti',
      html: '<p>Jika <strong>Luar Fase</strong> terdengar tipis, jauh, kosong, atau lebih senyap daripada <strong>Dalam Fase</strong>, pasangan kiri/kanan Anda mungkin terhubung dengan benar. Jika Luar Fase terdengar lebih penuh atau lebih keras, periksa terminal merah dan hitam pada satu speaker, amplifier, konektor banana, pelat dinding, rangkaian kabel mobil, atau adaptor apa pun dalam rantai.</p>',
    },
    {
      type: 'table',
      headers: ['Yang Anda dengar', 'Kemungkinan artinya', 'Langkah selanjutnya'],
      rows: [
        ['Normal penuh, terbalik kosong', 'Kedua speaker mungkin terhubung dengan polaritas yang sesuai.', 'Biarkan pengkabelan dan lanjutkan dengan penempatan atau kalibrasi.'],
        ['Terbalik lebih penuh dari normal', 'Satu speaker mungkin secara fisik terhubung terbalik.', 'Periksa terminal positif dan negatif hanya di satu sisi pasangan.'],
        ['Kedua mode terdengar hampir sama', 'Speaker mungkin terlalu jauh, pantulan ruangan mendominasi, atau output mono.', 'Pindah ke posisi dengar, nonaktifkan pemrosesan mono, dan coba pink noise.'],
        ['Kedua mode terdengar lemah di bass', 'Pembatalan ruangan, fase subwoofer, crossover, atau penempatan mungkin masalah yang lebih besar.', 'Jalankan sapuan bass dan uji polaritas subwoofer secara terpisah.'],
      ],
    },
    { type: 'title', text: 'Mengapa Polaritas Speaker Terbalik Terdengar Buruk', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah loudspeaker mengubah bentuk gelombang listrik menjadi gerakan konus. Untuk gelombang tekanan positif, dua speaker yang cocok seharusnya umumnya mendorong udara ke arah yang sama pada saat yang sama. Jika satu speaker memiliki kabel positif dan negatif yang tertukar, speaker itu bergerak ke dalam sementara yang lain bergerak ke luar untuk sinyal yang sama. Dalam pasangan stereo, ini tidak hanya membuat suara lebih senyap di mana-mana; ruangan, jarak speaker, panjang gelombang, dan posisi mendengarkan menentukan di mana pembatalan paling kuat. Gejala yang paling terlihat biasanya bass berkurang, pusat fantom yang lemah, dan vokal yang terasa terlepas dari ruang di antara speaker.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Vokal utama dan dialog seharusnya tertambat dekat pusat ketika kedua speaker memainkan sinyal mono yang sama.',
        'Kick drum, gitar bass, dan not piano rendah seharusnya memiliki tubuh alih-alih terdengar ringan.',
        'Gambar stereo seharusnya tidak terasa dibuat-buat lebarnya ketika sumbernya mono.',
        'Menggerakkan kepala sedikit seharusnya tidak membuat gambar pusat runtuh sepenuhnya.',
        'Pasangan yang terhubung dengan benar seharusnya membuat uji terbalik terdengar kurang alami daripada uji normal.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polaritas', definition: 'Orientasi positif atau negatif dari sinyal listrik yang memberi daya pada driver speaker.' },
        { term: 'Fase', definition: 'Hubungan waktu antara dua bentuk gelombang, sering dijelaskan dalam derajat sepanjang satu siklus.' },
        { term: 'Inversi 180 derajat', definition: 'Bentuk gelombang yang dibalik secara vertikal, sehingga tekanan positif menjadi tekanan negatif pada saat yang sama.' },
        { term: 'Pembatalan', definition: 'Pengurangan level suara ketika dua bentuk gelombang serupa tiba dengan polaritas atau waktu yang berlawanan.' },
        { term: 'Pusat fantom', definition: 'Gambar pusat semu yang tercipta ketika suara identik mencapai speaker kiri dan kanan secara merata.' },
      ],
    },
    {
      type: 'tip',
      title: 'Jangan menguji dari samping salah satu speaker',
      html: 'Duduklah di posisi mendengarkan normal. Pembatalan fase bersifat spasial: hasil yang terdengar setengah meter dari speaker kiri bisa sangat berbeda dari hasil di sofa, kursi studio, atau kursi pengemudi.',
    },
    { type: 'title', text: 'Pink Noise Versus Nada Sinus Untuk Pemeriksaan Polaritas', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pink noise',
          description: 'Derau pita lebar dengan lebih banyak energi di oktaf rendah daripada white noise. Memudahkan penilaian tubuh tonal keseluruhan, gambar pusat, dan pembatalan dengan telinga.',
          highlight: true,
          points: ['Pilihan pertama terbaik untuk pemeriksaan polaritas cepat.', 'Lebih kecil kemungkinannya didominasi oleh satu mode ruangan.', 'Berguna untuk home cinema, monitor studio, dan audio mobil.'],
        },
        {
          title: 'Nada sinus',
          description: 'Nada frekuensi tunggal yang dapat mengekspos pembatalan pada satu frekuensi yang dipilih tetapi juga dapat memperbesar puncak dan nol ruangan.',
          points: ['Berguna saat menyelidiki masalah crossover atau bass tertentu.', 'Dapat menyesatkan jika ruangan memiliki nol kuat pada frekuensi itu.', 'Jaga volume tetap rendah karena nada murni menjadi melelahkan.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Untuk pemeriksaan polaritas satu klik, mulai dengan pink noise. Pink noise menyebarkan energi di seluruh spektrum, jadi Anda menilai pasangan speaker sebagai sistem alih-alih menilai satu frekuensi yang mungkin berada di nol ruangan. Gunakan kontrol sinus hanya ketika Anda ingin fokus pada pita masalah yang diketahui, seperti pembatalan rentang vokal sekitar 300 Hz atau masalah serah terima bass sekitar 80 Hz. Jika hasil sinus berubah drastis saat Anda menggerakkan kepala beberapa sentimeter, ruangan sangat mempengaruhi frekuensi itu.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Inversi matematis diterapkan ke satu saluran', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Pengali gain yang digunakan untuk saluran terbalik', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Unduhan audio yang diperlukan untuk sinyal uji', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Daftar Periksa Home Theater dan Monitor Studio', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Speaker depan home cinema',
      html: 'Gunakan tombol normal dan terbalik hanya dengan speaker depan kiri dan kanan yang aktif. Nonaktifkan upmixer, surround virtual, mode malam, peningkatan dialog, dan koreksi ruangan jika Anda ingin mengisolasi pengkabelan mentah terlebih dahulu. Setelah mengonfirmasi polaritas, aktifkan kembali kalibrasi dan verifikasi bahwa dialog tetap terpusat.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Monitor studio',
      html: 'Alirkan browser melalui output antarmuka yang sama yang digunakan oleh DAW Anda. Periksa bahwa kedua kabel seimbang terhubung secara konsisten dan sakelar polaritas kontroler monitor tidak aktif. Monitor yang terbalik dapat membuat keputusan kompatibilitas mono tidak dapat diandalkan selama mixing.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Audio mobil',
      html: 'Kabin mobil menciptakan pantulan parah dan asimetri kursi, jadi dengarkan dari kursi pengemudi dan ulangi dari kursi penumpang jika perlu. Adaptor rangkaian kabel pabrik, penggantian speaker pintu, dan pemasangan amplifier adalah tempat umum di mana kabel positif dan negatif bisa tertukar.',
    },
    {
      type: 'proscons',
      title: 'Kelebihan dan batasan uji fase browser',
      items: [
        { pro: 'Pemeriksaan langsung tanpa menginstal perangkat lunak atau mengunduh file audio.', con: 'Tidak dapat mengidentifikasi kabel fisik mana yang salah tanpa memeriksa sistem.' },
        { pro: 'Bekerja dengan baik untuk pasangan stereo, headphone, monitor nearfield, dan pemeriksaan instalasi cepat.', con: 'Akustik ruangan dapat menyembunyikan atau memperbesar efek di beberapa posisi duduk.' },
        { pro: 'Pink noise membuat pembatalan lebar lebih mudah didengar daripada satu nada uji.', con: 'Sistem surround multi-speaker masih memerlukan verifikasi saluran per saluran.' },
      ],
    },
    { type: 'title', text: 'Cara Memperbaiki Uji Polaritas yang Gagal', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Matikan amplifier sebelum mengganti kabel speaker atau konektor banana.',
        'Pilih satu speaker dalam pasangan dan telusuri merah-ke-merah dan hitam-ke-hitam dari amplifier ke speaker.',
        'Periksa pelat dinding, terminal pegas, adaptor, konektor speakON, atau rangkaian kabel mobil antara amplifier dan speaker.',
        'Jika kabel speaker memiliki garis, rusuk, teks tercetak, atau sisi tembaga/perak, gunakan konduktor yang sama untuk positif di kedua ujungnya.',
        'Setelah mengubah satu sisi, jalankan kembali mode normal dan terbalik dari posisi mendengarkan.',
        'Jika hasilnya masih ambigu, tempatkan sementara speaker lebih dekat dan ulangi pada volume rendah.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Subwoofer memerlukan pemeriksaan fase terpisah',
      badge: 'Sistem bass',
      html: '<p>Alat ini membandingkan pasangan kiri/kanan. Crossover subwoofer bisa benar secara elektrik tetapi secara akustik di luar fase karena jarak, delay DSP, kemiringan crossover, dan penempatan menggeser waktu. Gunakan uji ini untuk pasangan utama, lalu gunakan sapuan crossover atau kalibrasi receiver untuk transisi subwoofer.</p>',
    },
    {
      type: 'message',
      title: 'Aturan mendengarkan praktis',
      ariaLabel: 'Aturan mendengarkan praktis untuk pengujian fase',
      html: 'Untuk instalasi nyata, pengaturan yang benar adalah yang membuat materi mono terdengar fokus, penuh, dan stabil di posisi mendengarkan aktual. Mode terbalik adalah kontras diagnostik, bukan mode mendengarkan.',
    },
    {
      type: 'summary',
      title: 'Ringkasan diagnosis polaritas speaker',
      items: [
        'Normal seharusnya terdengar lebih kuat dan lebih terpusat daripada terbalik ketika pasangan speaker terhubung dengan benar.',
        'Mode terbalik yang terdengar lebih keras adalah petunjuk kuat bahwa satu koneksi fisik speaker terbalik.',
        'Pink noise adalah sinyal pertama terbaik karena mengurangi kemungkinan hanya menilai satu frekuensi ruangan.',
        'Nada sinus berguna untuk pemecahan masalah yang terfokus tetapi dapat didominasi oleh mode ruangan.',
        'Selalu turunkan volume sebelum mengubah mode, terutama pada headphone atau amplifier daya tinggi.',
      ],
    },
  ],
  ui: {
    normal: 'Dalam Fase',
    inverted: 'Terbalik',
    stop: 'Berhenti',
    pause: 'Jeda',
    volume: 'Level output',
    noiseColor: 'Sinyal uji',
    pinkNoise: 'Pink noise',
    sineTone: 'Nada sinus',
    frequency: 'Frekuensi nada',
    statusReady: 'Siap',
    statusNormal: 'Dalam fase',
    statusInverted: 'Terbalik',
    instruction:
      'Terbalik seharusnya terdengar lebih tipis. Lebih keras berarti periksa pengkabelan.',
    channelLabel: 'Penguji fase speaker',
    leftChannel: 'Saluran kiri',
    rightChannel: 'Saluran kanan',
    leftShort: 'K',
    rightShort: 'Ka',
    polarityNormal: '0° selaras',
    polarityInverted: '180° terbalik',
    safety: 'Mulai rendah. Uji polaritas bisa menjadi keras melalui amplifier, monitor studio, sistem audio mobil, dan headphone.',
  },
};
