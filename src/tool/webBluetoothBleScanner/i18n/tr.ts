import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tarayici-ble-web-bluetooth';
const title = 'Web Bluetooth BLE Tarayıcı';
const description = 'Tarayıcıdan yakındaki Bluetooth Low Energy cihazlarını tarayın, sunulan GATT servis UUIDlerini inceleyin ve IoT veya giyilebilir donanımınızın keşfedilebilir olup olmadığını test edin.';

const faqData = [
  {
    question: 'Bir web sitesi izinsiz Bluetooth cihazlarını tarayabilir mi?',
    answer: 'Hayır. Web Bluetooth her zaman bir kullanıcı hareketi ve tarayıcı izin seçicisi gerektirir. Bu araç yalnızca açıkça seçtiğiniz cihazı görür ve MAC adreslerini, cihaz kimliklerini veya tarama sonuçlarını saklamaz.',
  },
  {
    question: 'Tarayıcı neden yakındaki her BLE cihazını göstermiyor?',
    answer: 'Tarayıcılar Bluetooth\'u sessiz bir arka plan tarayıcısı olarak değil, bir izin seçicisi aracılığıyla kasıtlı olarak sunar. Bazı cihazlar ayrıca tanıtım yapmayı durdurur, adını gizler, eşleştirme gerektirir veya yalnızca bağlantıdan sonra servisleri açar.',
  },
  {
    question: 'Hangi tarayıcılar Web Bluetooth\'u destekler?',
    answer: 'Web Bluetooth en iyi Chrome ve Edge gibi Chromium tabanlı masaüstü tarayıcılarda desteklenir. Genellikle HTTPS veya localhost gerektirir ve birçok Firefox, Safari ve iOS tarayıcı yapılandırmasında kullanılamaz.',
  },
  {
    question: 'Giyilebilir bir cihazdan özel sensör verilerini okuyabilir mi?',
    answer: 'Yalnızca cihaz uyumlu GATT servisleri sunarsa ve tarayıcı erişim izni verirse. Birçok ticari giyilebilir cihaz, genel bir tarayıcı tarayıcısının çözemediği satıcı uygulamaları, şifreleme, eşleştirme veya özel özellikler gerektirir.',
  },
  {
    question: 'GATT servis UUIDleri nedir?',
    answer: 'Bir GATT servis UUID\'si, Pil Servisi, Kalp Atış Hızı, Cihaz Bilgisi veya maker ve IoT donanımı tarafından kullanılan özel bir satıcı servisi gibi Bluetooth Low Energy özellik grubunu tanımlar.',
  },
];

const howToData = [
  {
    name: 'Uyumlu bir tarayıcı kullanın',
    text: 'Aracı Chrome veya Edge\'de HTTPS veya localhost üzerinden açın, ardından bilgisayarda veya telefonda Bluetooth\'un etkin olduğundan emin olun.',
  },
  {
    name: 'Donanımı tanıtım moduna alın',
    text: 'BLE cihazını uyandırın, kapatıp açın, eşleştirme düğmesine basın veya tarayıcı izin seçicisinde görünmesi için tanıtım modunu açın.',
  },
  {
    name: 'Ortamı tarayın',
    text: 'Ortamı Tara düğmesine basın ve incelemek istediğiniz BLE cihazını seçin. Tarayıcı izin iletişim kutusu, sayfaya hangi cihazın görünür olacağını tam olarak kontrol eder.',
  },
  {
    name: 'GATT servislerini okuyun',
    text: 'Bağlantıdan sonra, standart Bluetooth profillerini, özel firmware servislerini ve cihazın beklediğiniz veri yolunu sunup sunmadığını belirlemek için servis UUID kartlarını inceleyin.',
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
      text: 'IoT, Giyilebilir Cihazlar ve Maker Donanımı için Çevrimiçi BLE Test Cihazı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu Web Bluetooth tarayıcı, yakındaki bir Bluetooth Low Energy cihazının bir tarayıcıdan keşfedilebilir olup olmadığını ve izin verildikten sonra hangi GATT servislerini sunduğunu test etmenizi sağlar. ESP32 firmware, Arduino BLE taslakları, akıllı sensörler, fitness giyilebilirleri, klavyeler, özel işaretçiler, çevre monitörleri ve yerel bir mobil uygulama oluşturmadan önce prototip donanımın hata ayıklaması için kullanışlıdır.',
    },
    {
      type: 'message',
      title: 'Gizlilik modeli',
      html: 'Bu web sitesi MAC adreslerini, cihaz kimliklerini, adları, UUIDleri, sinyal verilerini veya tarama geçmişini saklamaz. Tarayıcı izin seçicisi, sayfanın hangi tek cihaza erişebileceğine karar verir ve sonuçlar mevcut tarayıcı oturumunuzda kalır.',
    },
    {
      type: 'table',
      headers: ['Ne görüyorsunuz', 'Ne anlama geliyor', 'Sonraki adımda ne kontrol edilmeli'],
      rows: [
        ['Cihaz adı', 'Donanım bir ad yayınlıyorsa, tanıtılan Bluetooth adı.', 'Boşsa, firmware tanıtım verilerini kontrol edin veya test sırasında bilinen bir ad öneki kullanın.'],
        ['Cihaz kimliği', 'Tarayıcı kapsamlı bir tanımlayıcı, gerçek genel MAC adresi değil.', 'Yalnızca bu tarayıcı oturumu için kullanın; evrensel bir donanım seri numarası olarak değerlendirmeyin.'],
        ['GATT servis UUIDleri', 'Bağlantı kabul edildikten sonra sunulan servis grupları.', 'Standart UUIDleri Bluetooth SIG listesi veya firmware servis tablonuzla karşılaştırın.'],
        ['Özel servis', 'Satıcıya veya projeye özgü bir UUID.', 'Özellikleri ve izinleri eşlemek için firmware\'inizi, mobil uygulama profilinizi veya BLE belgelerinizi açın.'],
      ],
    },
    {
      type: 'title',
      text: 'Tarayıcı Bluetooth Taraması Neden Farklıdır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yerel BLE tarayıcı uygulamaları genellikle birçok yakın cihazdan sürekli tanıtımlar gösterir. Web Bluetooth kasıtlı olarak daha katıdır: sayfa güvenli bir bağlamda açılmalı, tarama bir kullanıcı tıklamasıyla başlamalı ve tarayıcı bir izin seçicisi gösterir. Bu, kullanıcıları sessiz izlemeden korurken geliştiricilere JavaScript\'ten seçili BLE donanımına bağlanmanın pratik bir yolunu sunar.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetooth tarayıcı',
          description: 'Hızlı firmware doğrulama, demolarda, destek akışlarında, sınıf laboratuvarlarında ve kurulum sürtünmesinin önemli olduğu tarayıcı tabanlı teşhisler için en iyisidir.',
        },
        {
          title: 'Yerel BLE uygulaması',
          description: 'Arka plan taraması, RSSI günlüğü, eşleştirme iş akışları, şifreli satıcı protokolleri, büyük özellik ağaçları ve uzun vadeli saha teşhisi için daha iyidir.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Bir BLE Cihazının Görünmemesinin Yaygın Nedenleri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth işletim sistemi düzeyinde devre dışı veya tarayıcının Bluetooth izni yok.',
        'Cihaz başka bir telefona, dizüstü bilgisayara, satıcı uygulamasına veya ağ geçidine bağlı ve tanıtım yapmayı durdurdu.',
        'Donanım yalnızca başlatmadan sonra veya bir eşleştirme düğmesine basıldıktan sonra kısa bir süre için tanıtım yapar.',
        'Tarayıcı Chromium tabanlı değil, sayfa HTTPS üzerinden sunulmuyor veya platform Web Bluetooth\'u engelliyor.',
        'Firmware üretici verilerini tanıtır ancak yerel adı gizler, bu nedenle seçici isimsiz bir cihaz gösterebilir.',
        'Cihaz, servisler okunabilir hale gelmeden önce eşleştirme, şifreleme veya özel kimlik doğrulama gerektirir.',
      ],
    },
    {
      type: 'title',
      text: 'Hata Ayıklama Sırasında GATT UUIDleri Nasıl Kullanılır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Servis UUIDleri ile başarılı bir bağlantı, tarayıcının çevre birimine ulaşabileceğini ve çevre biriminin GATT tablosunun en azından bir kısmını sunduğunu gösterir. Pil Servisi, Cihaz Bilgisi, Kalp Atış Hızı, İnsan Arayüz Cihazı ve Çevresel Algılama gibi standart servislerin tanınması kolaydır. Özel UUIDler genellikle firmware\'e özgü işlevlere işaret eder ve kaynak kodunuzdan veya satıcı belgelerinden özellik haritasına ihtiyaç duyar.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası neden', 'Pratik çözüm'],
      rows: [
        ['İzin seçici boş', 'Cihaz tanıtım yapmıyor veya tarayıcı desteği eksik.', 'Cihazı yeniden başlatın, eşleştirme modunu etkinleştirin, yaklaşın veya Chrome/Edge\'de tekrar deneyin.'],
        ['Bağlantı hemen başarısız oluyor', 'Cihaz meşgul, menzil dışında veya tarayıcı bağlantısını reddediyor.', 'Satıcı uygulamalarını kesin ve çevre birimini bilgisayarın yakınında tutun.'],
        ['Hiçbir servis listelenmiyor', 'GATT kullanılamıyor, servisler gizli veya bu UUIDler için erişim verilmedi.', 'Firmware testlerinde bilinen isteğe bağlı servisleri ekleyin veya yerel bir BLE aracıyla inceleyin.'],
        ['Yalnızca özel UUIDler görünüyor', 'Donanım satıcıya özgü firmware servisleri kullanıyor.', 'UUIDleri kaynak kodu sabitleriyle eşleyin ve özelliklerin okuma/yazma izinlerini belgeleyin.'],
      ],
    },
    {
      type: 'title',
      text: 'Güvenlik ve Gizlilik Sınırları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sayfa, arka planda yakındaki Bluetooth cihazlarını sessizce toplayamaz.',
        'Tarayıcı gerçek MAC adreslerini gizleyebilir ve bunun yerine kapsamlı bir cihaz kimliği sağlayabilir.',
        'Erişim yalnızca kullanıcı tarama düğmesine tıkladıktan ve bir cihaz seçtikten sonra başlar.',
        'Sonuçlar bu web sitesi tarafından yüklenmez veya saklanmaz.',
        'Hassas ticari cihazlar, bu genel tarayıcının atlayamayacağı şifreleme veya satıcı eşleştirme akışı gerektirebilir.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth kullanılamıyor',
    unsupportedBody: 'Masaüstü veya Android\'de Chrome veya Edge\'i deneyin, Bluetooth\'u etkinleştirin ve sayfayı HTTPS veya localhost üzerinden açın.',
    secureContext: 'Web Bluetooth güvenli bir HTTPS sayfası veya localhost gerektirir. Aracı güvenli bir kaynaktan yeniden yükleyin ve tekrar deneyin.',
    scanButton: 'Ortamı Tara',
    scanning: 'Taranıyor',
    reconnect: 'Tekrar tara',
    disconnect: 'Bağlantıyı kes',
    privacyTitle: 'Tasarım gereği gizlilik',
    privacyBody: 'Bu web sitesi MAC adreslerini, cihaz kimliklerini, adları, UUIDleri veya tarama geçmişini saklamaz. Tarayıcı yalnızca sizin seçtiğiniz cihazı sunar.',
    deviceLabel: 'Seçilen cihaz',
    nameFallback: 'İsimsiz BLE cihazı',
    idLabel: 'Tarayıcı cihaz kimliği',
    servicesLabel: 'GATT servisleri',
    noServices: 'Bu bağlantı için okunabilir birincil servis döndürülmedi.',
    statusIdle: 'Yakındaki BLE donanımını taramaya hazır',
    statusPermission: 'Tarayıcı izin seçicisi bekleniyor',
    statusConnecting: 'Seçilen BLE cihazına bağlanılıyor',
    statusConnected: 'Bağlandı ve servisler yüklendi',
    statusDisconnected: 'Cihaz bağlantısı kesildi',
    statusCancelled: 'Hiçbir BLE cihazı seçilmedi veya bu cihazda Bluetooth kapalı/kullanılamıyor.',
    statusUnavailable: 'Bluetooth bu cihazda kapalı, engellenmiş veya yok gibi görünüyor. Bluetooth\'u etkinleştirin veya BLE adaptörü olan bir donanımdan deneyin.',
    statusError: 'Bluetooth taraması başarısız oldu',
    signalUnknown: 'Sinyal gücü tarayıcı seçicisi tarafından kontrol edilir',
    gattUnavailable: 'Bu cihaz tarayıcıya bir GATT sunucusu sunmadı',
    customServiceName: 'Özel veya satıcıya özgü servis',
    serviceGenericAccess: 'Genel Erişim',
    serviceGenericAttribute: 'Genel Özellik',
    serviceDeviceInformation: 'Cihaz Bilgisi',
    serviceHeartRate: 'Kalp Atış Hızı',
    serviceBattery: 'Pil Servisi',
    serviceHumanInterfaceDevice: 'İnsan Arayüz Cihazı',
    serviceCyclingSpeedCadence: 'Bisiklet Hızı ve Kadans',
    serviceEnvironmentalSensing: 'Çevresel Algılama',
    serviceUserData: 'Kullanıcı Verileri',
    serviceFitnessMachine: 'Fitness Makinesi',
    uuidHelp: 'UUIDler Bluetooth servislerini tanımlar. Standart servisler otomatik olarak adlandırılır; satıcıya özgü UUIDler firmware veya cihaz belgelerinize ihtiyaç duyar.',
    compatibilityHint: 'Bluetooth etkinken Chromium tabanlı tarayıcılarda en iyi şekilde çalışır. Web Bluetooth kasıtlı olarak izin sınırlıdır ve yakındaki her tanıtıcıyı göstermeyebilir.',
    serviceCountSingular: 'servis',
    serviceCountPlural: 'servis',
  },
};
