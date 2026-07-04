import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-seri-monitor';
const title = 'WebUSB Seri Monitör';
const description = 'Tarayıcıdan USB seri donanıma bağlanın, canlı terminal çıktısını okuyun, komutlar gönderin ve Arduino, ESP32, RP2040 ve maker kartlarını masaüstü terminali kurmadan hata ayıklayın.';

const faqData = [
  {
    question: 'Bu seri monitör Arduino, ESP32 ve Raspberry Pi Pico kartlarıyla çalışır mı?',
    answer: 'Evet, kart Web Serial tarafından desteklenen bir USB seri arabirimi sunduğunda ve tarayıcı Chromium tabanlı olduğunda çalışır. Yaygın Arduino, ESP32, RP2040, CH340, CP210x ve FTDI adaptörleri genellikle kullanıcı izin verdikten sonra çalışır.',
  },
  {
    question: 'Web Serial kullanıyorsa neden WebUSB olarak adlandırılıyor?',
    answer: 'Çoğu maker kartı USB üzerinden bağlanır, ancak tarayıcı terminal erişimi Web Serial API tarafından sağlanır. WebUSB daha düşük seviyelidir ve basit bir UART tarzı terminal için doğru soyutlama değildir.',
  },
  {
    question: 'Bir web sitesi izinsiz olarak seri cihazlarıma erişebilir mi?',
    answer: 'Hayır. Tarayıcı, bir site seri portu açmadan önce kullanıcı tıklaması ve yerel cihaz seçici gerektirir. Bu araç terminal günlüklerini veya cihaz tanımlayıcılarını saklamaz.',
  },
  {
    question: 'Web seri terminali için hangi tarayıcıyı kullanmalıyım?',
    answer: 'HTTPS veya localhost üzerinden Chrome, Edge veya başka bir Chromium tabanlı tarayıcı kullanın. Firefox, Safari ve birçok iOS tarayıcısı Web Serial API\'yi sunmaz.',
  },
  {
    question: 'Hangi baud hızını seçmeliyim?',
    answer: 'Firmware\'inizde yapılandırılan baud hızını seçin. Arduino örnekleri genellikle 9600 veya 115200 kullanırken, daha hızlı günlükler, bootloader\'lar ve yüksek hızlı sensör akışları 230400, 460800 veya 921600 kullanabilir.',
  },
];

const howToData = [
  {
    name: 'USB seri cihazı bağlayın',
    text: 'Kartı veya adaptörü takın ve portu zaten açmış olabilecek diğer seri terminalleri kapatın.',
  },
  {
    name: 'Baud hızını seçin',
    text: 'Birçok Arduino, ESP32 ve RP2040 taslağı için 115200 gibi, firmware tarafından kullanılan aynı baud hızını seçin.',
  },
  {
    name: 'Tarayıcı izni verin',
    text: 'Bağlan\'a basın, tarayıcı seçicide seri cihazı seçin ve sayfanın portu açmasına izin verin.',
  },
  {
    name: 'Terminal verilerini okuyun ve gönderin',
    text: 'Terminalde gelen günlükleri izleyin, isteğe bağlı CRLF satır sonlarıyla komutlar gönderin ve gerektiğinde canlı çıktıyı temizleyin veya duraklatın.',
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
  inLanguage: 'tr',
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
      text: 'USB Maker Donanımı için Çevrimiçi Seri Monitör',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu tarayıcı seri monitörü, doğrudan Chrome veya Edge\'den bir USB seri portu açar, ardından mikrodenetleyicilerden, USB UART köprülerinden, geliştirme kartlarından, bootloader\'lardan, test düzeneklerinden, sensörlerden ve laboratuvar donanımından metin akışı sağlar. Bir masaüstü IDE veya terminal uygulaması kurmak istemediğinizde seri konsola ihtiyaç duyduğunuz hızlı teşhisler için tasarlanmıştır.',
    },
    {
      type: 'message',
      title: 'Tarayıcı izin sınırı',
      html: 'Sayfa, seri cihazlarınızı sessizce listeleyemez veya açamaz. Erişim yalnızca Bağlan\'a basıp tarayıcı seçicide bir port seçtikten sonra başlar. Terminal verileri, siz kendiniz kopyalamadıkça geçerli sekmede kalır.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: 'yaygın baud ön ayarları' },
        { value: 'CRLF', label: 'isteğe bağlı komut sonlandırma' },
        { value: 'yerel', label: 'terminal oturumu' },
      ],
    },
    {
      type: 'title',
      text: 'Web Seri Terminali Ne Zaman Kullanışlıdır',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Arduino, ESP32, ESP8266, RP2040, STM32 veya özel firmware\'den önyükleme mesajlarını kontrol etme.',
        'Bir USB UART adaptörü aracılığıyla modem, GPS, LoRa, Wi-Fi, Bluetooth veya hücresel modüllere AT komutları gönderme.',
        'Fabrika test düzeneği, sınıf laboratuvarı, robotik kontrolör veya tezgah prototipinden sensör çıktısı okuma.',
        'Bir USB seri köprü sürücüsünün, kablonun, kart gücünün ve firmware baud hızının hep birlikte çalıştığını doğrulama.',
        'Bir hata bildirmeden veya donanım desteği istemeden önce hızlı bir hata günlüğü toplama.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web seri monitör',
          description: 'Hızlı destek, sınıf talimatları, saha teşhisleri ve URL açmanın IDE kurmaktan daha hızlı olduğu maker iş akışları için en iyisidir.',
        },
        {
          title: 'Masaüstü terminali',
          description: 'İkili protokoller, uzun yakalama oturumları, betikleme, donanım akış kontrolü, makrolar ve tarayıcı API\'lerinin engellendiği ortamlar için daha iyidir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Baud Hızı ve Satır Sonu Kontrol Listesi',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ayar', 'Tipik seçim', 'Yanlış olduğunda ne ters gider'],
      rows: [
        ['Baud hızı', 'Birçok modern kart için 115200, eski örnekler için 9600.', 'Okunabilir metin rastgele sembollere dönüşür veya hiçbir yararlı günlük görünmez.'],
        ['Satır sonu', 'Birçok komut ayrıştırıcı için CRLF, ham karakter protokolleri için sonlandırma yok.', 'Firmware bir sonlandırıcı beklediği için komutlar yok sayılır.'],
        ['Özel port erişimi', 'Arduino Serial Monitor, PuTTY, screen, minicom veya satıcı araçlarını kapatın.', 'Tarayıcı seçici portu açar ancak okuma veya yazma başarısız olur.'],
        ['Güvenli bağlam', 'HTTPS veya localhost.', 'Desteklenen bir tarayıcıda bile Serial API eksiktir.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Seri çıktı yok mu?',
      html: 'Kartın güç aldığını ve USB kablosunun yalnızca şarj değil veri desteklediğini doğrulayın. Firmware baud hızını bilmiyorsanız 9600, 57600 ve 115200\'ü deneyin. Birçok kart yalnızca başlangıçta önyükleme günlükleri yazdırdığı için bağlandıktan sonra sıfırlamaya basın. Seri portu hâlâ elinde tutuyor olabilecek diğer yazılımları kapatın ve cihaz hiç görünmüyorsa CH340, CP210x, FTDI veya kart satıcısı için işletim sistemi sürücüsünü yükleyin.',
    },
    {
      type: 'title',
      text: 'Gizlilik, Güvenlik ve Sınırlamalar',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serial güçlü yönleri ve sınırlamaları',
      items: [
        {
          pro: 'Temel seri metin teşhisi için masaüstü kurulumu gerekmez.',
          con: 'Chromium tabanlı bir tarayıcı ve güvenli bir bağlam gerektirir.',
        },
        {
          pro: 'Tarayıcı seçici, seçtiğiniz belirli porta erişimi sınırlar.',
          con: 'İkili protokol analizörleri veya uzun süreli gözetimsiz yakalamalar için tasarlanmamıştır.',
        },
        {
          pro: 'Metin günlükleri, komut istemleri ve hızlı donanım kontrolleri için iyi çalışır.',
          con: 'Bazı kurumsal politikalar, mobil tarayıcılar ve işletim sistemleri Web Serial\'i engeller.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial kullanılamıyor',
    unsupportedBody: 'HTTPS veya localhost üzerinden Chrome veya Edge kullanın ve cihazınızın bir USB seri arabirimi sunduğundan emin olun.',
    secureContext: 'Web Serial, HTTPS veya localhost gerektirir. Bu sayfayı güvenli bir kaynaktan yeniden yükleyip tekrar deneyin.',
    statusIdle: 'Bir baud hızı seçin, ardından bir USB seri cihazı bağlayın',
    statusPermission: 'Tarayıcı seri port seçici bekleniyor',
    statusOpening: 'Seri port açılıyor',
    statusConnected: 'Seri port bağlandı',
    statusDisconnected: 'Seri port bağlantısı kesildi',
    statusError: 'Seri bağlantı başarısız',
    connect: 'Seri Bağlan',
    disconnect: 'Bağlantıyı Kes',
    send: 'Gönder',
    clear: 'Temizle',
    pause: 'Duraklat',
    resume: 'Devam Et',
    baudRate: 'Baud hızı',
    newline: 'CRLF Ekle',
    inputPlaceholder: 'Bir komut yazın, ardından Enter\'a basın',
    portFallback: 'Port seçilmedi',
    portLabel: 'Port kimliği',
    connectedDeviceLabel: 'Bağlı cihaz',
    deviceNameFallback: 'USB seri cihaz',
    transportLabel: 'Web Serial bağlantısı',
    bytesLabel: 'Bayt',
    linesLabel: 'Satır',
    privacyTitle: 'İzin kontrollü',
    privacyBody: 'Tarayıcı yalnızca seçtiğiniz seri cihazı gösterir. Günlükler siz kopyalamadıkça bu sekmede kalır.',
    emptyLog: 'Bir seri cihaz bağladıktan sonra terminal çıktısı burada görünecektir.',
    copied: 'Kopyalandı',
    copyLog: 'Kopyala',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'Canlı terminal',
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
