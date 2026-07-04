import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-serial-webusb';
const title = 'Monitor Serial WebUSB';
const description = 'Hubungkan ke perangkat keras serial USB dari browser, baca output terminal langsung, kirim perintah, dan debug papan Arduino, ESP32, RP2040, dan maker tanpa menginstal terminal desktop.';

const faqData = [
  {
    question: 'Apakah monitor serial ini berfungsi dengan papan Arduino, ESP32, dan Raspberry Pi Pico?',
    answer: 'Ya, ketika papan menyediakan antarmuka serial USB yang didukung oleh Web Serial dan browser berbasis Chromium. Adaptor Arduino, ESP32, RP2040, CH340, CP210x, dan FTDI umum biasanya berfungsi setelah pengguna memberikan izin.',
  },
  {
    question: 'Mengapa ini disebut WebUSB jika menggunakan Web Serial?',
    answer: 'Sebagian besar papan maker terhubung melalui USB, tetapi akses terminal browser disediakan oleh Web Serial API. WebUSB adalah level lebih rendah dan bukan abstraksi yang tepat untuk terminal gaya UART sederhana.',
  },
  {
    question: 'Bisakah situs web mengakses perangkat serial saya tanpa izin?',
    answer: 'Tidak. Browser memerlukan klik pengguna dan pemilih perangkat asli sebelum situs dapat membuka port serial. Alat ini tidak menyimpan log terminal atau pengenal perangkat.',
  },
  {
    question: 'Browser mana yang harus saya gunakan untuk terminal serial web?',
    answer: 'Gunakan Chrome, Edge, atau browser berbasis Chromium lainnya melalui HTTPS atau localhost. Firefox, Safari, dan banyak browser iOS tidak menyediakan Web Serial API.',
  },
  {
    question: 'Baud rate apa yang harus saya pilih?',
    answer: 'Pilih baud rate yang dikonfigurasi di firmware Anda. Contoh Arduino sering menggunakan 9600 atau 115200, sementara log lebih cepat, bootloader, dan aliran sensor laju tinggi dapat menggunakan 230400, 460800, atau 921600.',
  },
];

const howToData = [
  {
    name: 'Hubungkan perangkat serial USB',
    text: 'Colokkan papan atau adaptor dan tutup terminal serial lain yang mungkin sudah membuka port.',
  },
  {
    name: 'Pilih baud rate',
    text: 'Pilih baud rate yang sama yang digunakan oleh firmware, seperti 115200 untuk banyak sketsa Arduino, ESP32, dan RP2040.',
  },
  {
    name: 'Berikan izin browser',
    text: 'Tekan Hubungkan, pilih perangkat serial di pemilih browser, dan izinkan halaman untuk membuka port.',
  },
  {
    name: 'Baca dan kirim data terminal',
    text: 'Pantau log masuk di terminal, kirim perintah dengan akhiran baris CRLF opsional, dan hapus atau jeda output langsung saat diperlukan.',
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

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
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
      text: 'Monitor Serial Online untuk Perangkat Keras USB Maker',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitor serial browser ini membuka port serial USB langsung dari Chrome atau Edge, lalu mengalirkan teks dari mikrokontroler, jembatan USB UART, papan pengembangan, bootloader, perlengkapan uji, sensor, dan perangkat keras lab. Dirancang untuk diagnostik cepat saat Anda membutuhkan konsol serial tetapi tidak ingin menginstal IDE desktop atau aplikasi terminal.',
    },
    {
      type: 'message',
      title: 'Batas izin browser',
      html: 'Halaman tidak dapat secara diam diam menghitung atau membuka perangkat serial Anda. Akses hanya dimulai setelah Anda menekan Hubungkan dan memilih port di pemilih browser. Data terminal tetap di tab saat ini kecuali Anda menyalinnya sendiri.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'preset baud umum' },
        { value: 'CRLF', label: 'akhiran perintah opsional' },
        { value: 'lokal', label: 'sesi terminal' },
      ],
    },
    {
      type: 'title',
      text: 'Kapan Terminal Serial Web Berguna',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Memeriksa pesan boot dari Arduino, ESP32, ESP8266, RP2040, STM32, atau firmware kustom.',
        'Mengirim perintah AT ke modem, GPS, LoRa, Wi-Fi, Bluetooth, atau modul seluler melalui adaptor USB UART.',
        'Membaca output sensor dari jig uji pabrik, lab kelas, pengontrol robotika, atau prototipe meja.',
        'Memverifikasi bahwa driver jembatan serial USB, kabel, daya papan, dan baud rate firmware semuanya bekerja bersama.',
        'Mengumpulkan log kesalahan cepat sebelum mengajukan bug atau meminta dukungan perangkat keras.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Monitor serial web',
          description: 'Terbaik untuk dukungan cepat, instruksi kelas, diagnostik lapangan, dan alur kerja maker di mana membuka URL lebih cepat daripada menginstal IDE.',
        },
        {
          title: 'Terminal desktop',
          description: 'Lebih baik untuk protokol biner, sesi perekaman panjang, skrip, kontrol aliran perangkat keras, makro, dan lingkungan di mana API browser diblokir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Daftar Periksa Baud Rate dan Akhiran Baris',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Pengaturan', 'Pilihan umum', 'Apa yang salah saat tidak tepat'],
      rows: [
        ['Baud rate', '115200 untuk banyak papan modern, 9600 untuk contoh lama.', 'Teks yang dapat dibaca berubah menjadi simbol acak atau tidak ada log berguna yang muncul.'],
        ['Akhiran baris', 'CRLF untuk banyak parser perintah, tanpa akhiran untuk protokol karakter mentah.', 'Perintah diabaikan karena firmware menunggu terminator.'],
        ['Akses port eksklusif', 'Tutup Arduino Serial Monitor, PuTTY, screen, minicom, atau alat vendor.', 'Pemilih browser membuka port tetapi membaca atau menulis gagal.'],
        ['Konteks aman', 'HTTPS atau localhost.', 'Serial API hilang bahkan di browser yang didukung.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tidak ada output serial?',
      html: 'Konfirmasi papan menyala dan kabel USB mendukung data, bukan hanya pengisian daya. Coba 9600, 57600, dan 115200 jika Anda tidak tahu baud rate firmware. Tekan reset setelah menghubungkan karena banyak papan mencetak log boot hanya saat startup. Tutup perangkat lunak lain yang mungkin masih memiliki port serial, dan instal driver sistem operasi untuk CH340, CP210x, FTDI, atau vendor papan jika perangkat tidak pernah muncul.',
    },
    {
      type: 'title',
      text: 'Privasi, Keamanan, dan Batasan',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Kekuatan dan batasan Web Serial',
      items: [
        {
          pro: 'Tidak perlu instalasi desktop untuk diagnostik teks serial dasar.',
          con: 'Memerlukan browser berbasis Chromium dan konteks aman.',
        },
        {
          pro: 'Pemilih browser membatasi akses ke port spesifik yang Anda pilih.',
          con: 'Tidak dimaksudkan untuk penganalisis protokol biner atau perekaman lama tanpa pengawasan.',
        },
        {
          pro: 'Bekerja dengan baik untuk log teks, prompt perintah, dan pemeriksaan perangkat keras cepat.',
          con: 'Beberapa kebijakan perusahaan, browser seluler, dan sistem operasi memblokir Web Serial.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial tidak tersedia',
    unsupportedBody: 'Gunakan Chrome atau Edge melalui HTTPS atau localhost dan pastikan perangkat Anda menyediakan antarmuka serial USB.',
    secureContext: 'Web Serial memerlukan HTTPS atau localhost. Muat ulang halaman ini dari asal yang aman dan coba lagi.',
    statusIdle: 'Pilih baud rate, lalu hubungkan perangkat serial USB',
    statusPermission: 'Menunggu pemilih port serial browser',
    statusOpening: 'Membuka port serial',
    statusConnected: 'Port serial terhubung',
    statusDisconnected: 'Port serial terputus',
    statusError: 'Koneksi serial gagal',
    connect: 'Hubungkan Serial',
    disconnect: 'Putuskan',
    send: 'Kirim',
    clear: 'Hapus',
    pause: 'Jeda',
    resume: 'Lanjutkan',
    baudRate: 'Baud rate',
    newline: 'Tambahkan CRLF',
    inputPlaceholder: 'Ketik perintah, lalu tekan Enter',
    portFallback: 'Tidak ada port dipilih',
    portLabel: 'Identitas port',
    connectedDeviceLabel: 'Perangkat terhubung',
    deviceNameFallback: 'Perangkat serial USB',
    transportLabel: 'Tautan Web Serial',
    bytesLabel: 'Bytes',
    linesLabel: 'Baris',
    privacyTitle: 'Akses terkendali',
    privacyBody: 'Browser hanya mengekspos perangkat serial yang Anda pilih. Log tetap di tab ini kecuali Anda menyalinnya.',
    emptyLog: 'Output terminal akan muncul di sini setelah Anda menghubungkan perangkat serial.',
    copied: 'Disalin',
    copyLog: 'Salin',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Terminal langsung',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baud',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
