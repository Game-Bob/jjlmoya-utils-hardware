import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pemindai-ble-web-bluetooth';
const title = 'Pemindai Web Bluetooth BLE';
const description = 'Pindai perangkat Bluetooth Low Energy di sekitar dari browser, periksa UUID layanan GATT yang terbuka, dan uji apakah perangkat keras IoT atau wearable Anda dapat ditemukan.';

const faqData = [
  {
    question: 'Bisakah situs web memindai perangkat Bluetooth tanpa izin?',
    answer: 'Tidak. Web Bluetooth selalu memerlukan gestur pengguna dan pemilih izin browser. Alat ini hanya melihat perangkat yang Anda pilih secara eksplisit dan tidak menyimpan alamat MAC, ID perangkat, atau hasil pemindaian.',
  },
  {
    question: 'Mengapa pemindai tidak menampilkan setiap perangkat BLE di sekitar?',
    answer: 'Browser sengaja mengekspos Bluetooth melalui pemilih izin, bukan sebagai pemindai latar belakang senyap. Beberapa perangkat juga berhenti mengiklankan, menyembunyikan nama, memerlukan pairing, atau mengekspos layanan hanya setelah koneksi.',
  },
  {
    question: 'Browser mana yang mendukung Web Bluetooth?',
    answer: 'Web Bluetooth paling baik didukung di browser desktop berbasis Chromium seperti Chrome dan Edge. Biasanya memerlukan HTTPS atau localhost dan tidak tersedia di banyak konfigurasi Firefox, Safari, dan browser iOS.',
  },
  {
    question: 'Bisakah ini membaca data sensor pribadi dari wearable?',
    answer: 'Hanya jika perangkat mengekspos layanan GATT yang kompatibel dan browser memberikan akses. Banyak wearable komersial memerlukan aplikasi vendor, enkripsi, bonding, atau karakteristik proprietary yang tidak dapat didekode oleh pemindai browser generik.',
  },
  {
    question: 'Apa itu UUID layanan GATT?',
    answer: 'UUID layanan GATT mengidentifikasi sekelompok fitur Bluetooth Low Energy, seperti Layanan Baterai, Detak Jantung, Informasi Perangkat, atau layanan kustom vendor yang digunakan oleh perangkat keras maker dan IoT.',
  },
];

const howToData = [
  {
    name: 'Gunakan browser yang kompatibel',
    text: 'Buka alat ini di Chrome atau Edge melalui HTTPS atau localhost, lalu pastikan Bluetooth diaktifkan di komputer atau ponsel.',
  },
  {
    name: 'Masukkan perangkat keras ke mode iklan',
    text: 'Bangunkan perangkat BLE, matikan dan nyalakan kembali, tekan tombol pairing, atau buka mode iklannya agar muncul di pemilih izin browser.',
  },
  {
    name: 'Pindai lingkungan',
    text: 'Tekan Pindai Lingkungan dan pilih perangkat BLE yang ingin Anda periksa. Dialog izin browser mengontrol dengan tepat perangkat mana yang terlihat oleh halaman.',
  },
  {
    name: 'Baca layanan GATT',
    text: 'Setelah koneksi, tinjau kartu UUID layanan untuk mengidentifikasi profil Bluetooth standar, layanan firmware kustom, dan apakah perangkat mengekspos jalur data yang Anda harapkan.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'Penguji BLE Online untuk IoT, Wearable, dan Perangkat Keras Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pemindai Web Bluetooth ini memungkinkan Anda menguji apakah perangkat Bluetooth Low Energy di sekitar dapat ditemukan dari browser dan layanan GATT mana yang diekspos setelah izin diberikan. Berguna saat men-debug firmware ESP32, sketsa Arduino BLE, sensor pintar, wearable kebugaran, keyboard, beacon kustom, monitor lingkungan, dan perangkat keras prototipe sebelum membuat aplikasi seluler native.',
    },
    {
      type: 'message',
      title: 'Model privasi',
      html: 'Situs web ini tidak menyimpan alamat MAC, ID perangkat, nama, UUID, data sinyal, atau riwayat pemindaian. Pemilih izin browser memutuskan perangkat tunggal mana yang dapat diakses halaman, dan hasil tetap berada di sesi browser Anda saat ini.',
    },
    {
      type: 'table',
      headers: ['Apa yang Anda lihat', 'Artinya', 'Yang perlu diperiksa selanjutnya'],
      rows: [
        ['Nama perangkat', 'Nama Bluetooth yang diiklankan, jika perangkat keras menyiarkannya.', 'Jika kosong, periksa data iklan firmware atau gunakan awalan nama yang dikenal selama pengujian.'],
        ['ID perangkat', 'Pengenal terbatas browser, bukan alamat MAC publik mentah.', 'Gunakan hanya untuk sesi browser ini; jangan perlakukan sebagai nomor seri perangkat keras universal.'],
        ['UUID layanan GATT', 'Kelompok layanan yang diekspos setelah koneksi diterima.', 'Bandingkan UUID standar dengan daftar Bluetooth SIG atau tabel layanan firmware Anda.'],
        ['Layanan kustom', 'UUID spesifik vendor atau spesifik proyek.', 'Buka firmware Anda, profil aplikasi seluler, atau dokumentasi BLE untuk memetakan karakteristik dan izin.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa Pemindaian Bluetooth Browser Berbeda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aplikasi pemindai BLE native sering menampilkan iklan berkelanjutan dari banyak perangkat di sekitar. Web Bluetooth sengaja lebih ketat: halaman harus dibuka dalam konteks aman, pemindaian harus dimulai dari klik pengguna, dan browser menampilkan pemilih izin. Ini melindungi pengguna dari pelacakan senyap sambil tetap memberi pengembang cara praktis untuk terhubung ke perangkat keras BLE yang dipilih dari JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pemindai Web Bluetooth',
          description: 'Terbaik untuk validasi firmware cepat, demo, alur dukungan, laboratorium kelas, dan diagnostik berbasis browser di mana friksi instalasi penting.',
        },
        {
          title: 'Aplikasi BLE native',
          description: 'Lebih baik untuk pemindaian latar belakang, pencatatan RSSI, alur pairing, protokol vendor terenkripsi, pohon karakteristik besar, dan diagnostik lapangan jangka panjang.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Alasan Umum Perangkat BLE Tidak Muncul',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth dinonaktifkan di tingkat sistem operasi atau browser tidak memiliki izin Bluetooth.',
        'Perangkat terhubung ke ponsel, laptop, aplikasi vendor, atau gateway lain dan telah berhenti mengiklankan.',
        'Perangkat keras hanya mengiklankan untuk jendela singkat setelah boot atau setelah menekan tombol pairing.',
        'Browser tidak berbasis Chromium, halaman tidak disajikan melalui HTTPS, atau platform memblokir Web Bluetooth.',
        'Firmware mengiklankan data pabrikan tetapi menyembunyikan nama lokal, sehingga pemilih mungkin menampilkan perangkat tanpa nama.',
        'Perangkat memerlukan bonding, enkripsi, atau otentikasi proprietary sebelum layanan dapat dibaca.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Menggunakan UUID GATT Selama Debugging',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Koneksi berhasil dengan UUID layanan memberi tahu Anda bahwa browser dapat menjangkau periferal dan periferal mengekspos setidaknya sebagian dari tabel GATT-nya. Layanan standar seperti Layanan Baterai, Informasi Perangkat, Detak Jantung, Perangkat Antarmuka Manusia, dan Penginderaan Lingkungan mudah dikenali. UUID kustom biasanya mengarah ke fitur spesifik firmware dan memerlukan peta karakteristik dari kode sumber atau dokumentasi vendor Anda.',
    },
    {
      type: 'table',
      headers: ['Gejala', 'Kemungkinan penyebab', 'Solusi praktis'],
      rows: [
        ['Pemilih izin kosong', 'Perangkat tidak mengiklankan atau dukungan browser tidak ada.', 'Mulai ulang perangkat, aktifkan mode pairing, dekati, atau coba lagi di Chrome/Edge.'],
        ['Koneksi langsung gagal', 'Perangkat sibuk, di luar jangkauan, atau menolak koneksi browser.', 'Putuskan aplikasi vendor dan jaga periferal dekat dengan komputer.'],
        ['Tidak ada layanan yang tercantum', 'GATT tidak tersedia, layanan disembunyikan, atau akses tidak diberikan untuk UUID tersebut.', 'Tambahkan layanan opsional yang dikenal dalam uji firmware atau periksa dengan alat BLE native.'],
        ['Hanya UUID kustom yang muncul', 'Perangkat keras menggunakan layanan firmware spesifik vendor.', 'Petakan UUID ke konstanta kode sumber dan dokumentasikan izin baca/tulis karakteristik.'],
      ],
    },
    {
      type: 'title',
      text: 'Batas Keamanan dan Privasi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Halaman tidak dapat diam-diam mengumpulkan perangkat Bluetooth di sekitar di latar belakang.',
        'Browser dapat menyembunyikan alamat MAC asli dan memberikan ID perangkat terbatas sebagai gantinya.',
        'Akses hanya dimulai setelah pengguna mengklik tombol pindai dan memilih perangkat.',
        'Hasil tidak diunggah atau disimpan oleh situs web ini.',
        'Perangkat komersial sensitif mungkin memerlukan enkripsi atau alur pairing vendor yang tidak dapat dilewati oleh pemindai generik ini.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth tidak tersedia',
    unsupportedBody: 'Coba Chrome atau Edge di desktop atau Android, aktifkan Bluetooth, dan buka halaman melalui HTTPS atau localhost.',
    secureContext: 'Web Bluetooth memerlukan halaman HTTPS aman atau localhost. Muat ulang alat dari asal yang aman dan coba lagi.',
    scanButton: 'Pindai Lingkungan',
    scanning: 'Memindai',
    reconnect: 'Pindai lagi',
    disconnect: 'Putuskan',
    privacyTitle: 'Privasi berdasarkan desain',
    privacyBody: 'Situs web ini tidak menyimpan alamat MAC, ID perangkat, nama, UUID, atau riwayat pemindaian. Browser hanya mengekspos perangkat yang Anda pilih.',
    deviceLabel: 'Perangkat dipilih',
    nameFallback: 'Perangkat BLE tanpa nama',
    idLabel: 'ID perangkat browser',
    servicesLabel: 'Layanan GATT',
    noServices: 'Tidak ada layanan primer yang dapat dibaca yang dikembalikan untuk koneksi ini.',
    statusIdle: 'Siap memindai perangkat keras BLE di sekitar',
    statusPermission: 'Menunggu pemilih izin browser',
    statusConnecting: 'Menghubungkan ke perangkat BLE yang dipilih',
    statusConnected: 'Terhubung dan layanan dimuat',
    statusDisconnected: 'Perangkat terputus',
    statusCancelled: 'Tidak ada perangkat BLE yang dipilih, atau Bluetooth dimatikan/tidak tersedia di perangkat ini.',
    statusUnavailable: 'Bluetooth tampaknya dimatikan, diblokir, atau tidak ada di perangkat ini. Aktifkan Bluetooth atau coba dari perangkat keras yang memiliki adaptor BLE.',
    statusError: 'Pemindaian Bluetooth gagal',
    signalUnknown: 'Kekuatan sinyal dikendalikan oleh pemilih browser',
    gattUnavailable: 'Perangkat ini tidak mengekspos server GATT ke browser',
    customServiceName: 'Layanan kustom atau spesifik vendor',
    serviceGenericAccess: 'Akses Generik',
    serviceGenericAttribute: 'Atribut Generik',
    serviceDeviceInformation: 'Informasi Perangkat',
    serviceHeartRate: 'Detak Jantung',
    serviceBattery: 'Layanan Baterai',
    serviceHumanInterfaceDevice: 'Perangkat Antarmuka Manusia',
    serviceCyclingSpeedCadence: 'Kecepatan dan Irama Bersepeda',
    serviceEnvironmentalSensing: 'Penginderaan Lingkungan',
    serviceUserData: 'Data Pengguna',
    serviceFitnessMachine: 'Mesin Kebugaran',
    uuidHelp: 'UUID mengidentifikasi layanan Bluetooth. Layanan standar dinamai secara otomatis; UUID spesifik vendor memerlukan dokumentasi firmware atau perangkat Anda.',
    compatibilityHint: 'Bekerja paling baik di browser berbasis Chromium dengan Bluetooth diaktifkan. Web Bluetooth sengaja dibatasi izin dan mungkin tidak menampilkan setiap pengiklan di sekitar.',
    serviceCountSingular: 'layanan',
    serviceCountPlural: 'layanan',
  },
};
