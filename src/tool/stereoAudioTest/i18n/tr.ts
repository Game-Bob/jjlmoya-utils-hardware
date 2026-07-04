import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stereo-ses-testi';
const title = 'Stereo Ses Testi';
const description = 'Tarayıcı tarafından oluşturulan test tonlarıyla sol ve sağ hoparlör kanallarını, stereo dengesini, kablo yönünü ve kulaklık görüntülemesini kontrol edin.';

const faqData = [
  {
    question: 'Sol ve sağ hoparlörleri çevrimiçi nasıl test ederim?',
    answer: 'Düşük sesle başlayın, Sol\'a ve ardından Sağ\'a basın. Sol ton yalnızca sol hoparlörden veya sol kulaklık kabından, sağ ton ise yalnızca sağ taraftan gelmelidir. Her iki tarafın da eşit çaldığını doğrulamak için Merkez\'i kullanın.',
  },
  {
    question: 'Sol veya sağ testi sırasında neden her iki hoparlör de çalıyor?',
    answer: 'Bazı cihazlar, işletim sistemleri, Bluetooth hoparlörler, mono modlar, erişilebilirlik ayarları veya ses iyileştirmeleri stereoyu mono\'ya dönüştürür. Sistem dengesini, mono ses ayarlarını, kablo bağlantılarını ve uygulamaya özel ses efektlerini kontrol edin.',
  },
  {
    question: 'Bu, ters çevrilmiş hoparlör kablolarını teşhis edebilir mi?',
    answer: 'Evet. Sol düğmesi sağ hoparlörden, Sağ düğmesi sol hoparlörden çalıyorsa, çıkış yolu bilgisayar, kablo, amplifikatör, hoparlörler veya kulaklıklar arasında bir yerde ters çevrilmiştir.',
  },
  {
    question: 'Sinüs tonu hoparlörler ve kulaklıklar için güvenli midir?',
    answer: 'Orta düzeyde ses seviyesinde kısa bir sinüs tonu normalde güvenlidir. Özellikle kulaklıklar, küçük dizüstü bilgisayar hoparlörleri veya bilinmeyen amplifikatörlerle yüksek ses, uzun oturumlar veya çok yüksek frekanslardan kaçının.',
  },
  {
    question: 'Tarayıcı stereo testini etkiler mi?',
    answer: 'Araç, Web Audio API StereoPannerNode\'u kullanır. Modern tarayıcılarda güvenilirdir, ancak nihai çıkış hâlâ işletim sistemi yönlendirmesine, sürücülere, Bluetooth kodeklerine, harici DAC\'lara ve hoparlör kablolamasına bağlıdır.',
  },
];

const howToData = [
  {
    name: 'Sessiz bir başlangıç ses seviyesi ayarlayın',
    text: 'Herhangi bir test tonu çalmadan önce sistem sesini kısın ve aracın ses kaydırıcısını kullanın.',
  },
  {
    name: 'Her tarafı test edin',
    text: 'Sol ve Sağ\'a basın. Her ton, eşleşen hoparlöre veya kulaklık tarafına net bir şekilde izole edilmelidir.',
  },
  {
    name: 'Merkez dengesini kontrol edin',
    text: 'Merkez\'e basın. Ton, her iki hoparlör arasında merkezlenmiş olarak görünmeli, bir tarafa güçlü bir şekilde çekilmemelidir.',
  },
  {
    name: 'Taramayı kullanın',
    text: 'Stereo alan boyunca hareketi duymak ve kesintileri, ters kablolamayı veya dengesiz görüntülemeyi tespit etmek için Tarama\'yı çalıştırın.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<StereoAudioTestUI> = {
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
      text: 'Sol ve Sağ Hoparlör Testi Çevrimiçi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sol ve sağ hoparlörlerinizin, kulaklıklarınızın, kulak içi kulaklıklarınızın, soundbar\'ınızın, DAC\'ınızın, amplifikatörünüzün veya monitör hoparlörlerinizin doğru şekilde yönlendirilip yönlendirilmediğini kontrol etmek için bu çevrimiçi stereo ses testini kullanın. Araç, tarayıcı tarafından oluşturulan tonları sol kanal, sağ kanal, her iki kanal veya hareketli bir stereo tarama aracılığıyla çalarak ses yazılımı yüklemeden ters kanalları, mono çıkışı, zayıf hoparlörleri, denge sorunlarını ve kablolama hatalarını hızlıca tespit etmenizi sağlar.',
    },
    {
      type: 'paragraph',
      html: 'Doğru bir stereo kurulumu yönü korur: sol test tonu yalnızca sol hoparlörden veya sol kulaklık kabından, sağ test tonu yalnızca sağ taraftan gelmeli ve merkez tonu her iki taraf arasında eşit dengeli olmalıdır. Ses yanlış tarafta, aynı anda her iki tarafta veya bir tarafta çok daha yüksek görünüyorsa, sorun genellikle çıkış ayarlarında, mono erişilebilirlik modunda, kablo bağlantılarında, Bluetooth yönlendirmesinde, hoparlör yerleşiminde veya ses iyileştirme yazılımındadır.',
    },
    {
      type: 'table',
      headers: ['Düğme', 'Duymanız gereken', 'Teşhis için kullanın'],
      rows: [
        ['Sol', 'Yalnızca sol hoparlörden, sol kulaklık sürücüsünden veya sol kulak içi kulaklıktan ton.', 'Ters kablolar, yanlış hoparlör yerleşimi, mono çıkış veya kanal yeniden eşleme.'],
        ['Sağ', 'Yalnızca sağ hoparlörden, sağ kulaklık sürücüsünden veya sağ kulak içi kulaklıktan ton.', 'Ters çıkışlar, yanlış adaptör kablolaması veya kanal sırasını değiştiren sürücü efektleri.'],
        ['Merkez', 'Her iki kanal eşit çaldığı için ton merkezde görünür.', 'Sistem denge kayması, zayıf bir hoparlör, tıkalı kulak içi kulaklık ağı veya eşit olmayan amplifikatör kazancı.'],
        ['Tarama', 'Ton, stereo görüntü boyunca bir yandan diğerine sorunsuzca hareket eder.', 'Kesintiler, kararsız Bluetooth bağlantıları, faz sorunları, sanal surround yapaylıkları veya dengesiz görüntüleme.'],
      ],
    },
    {
      type: 'title',
      text: 'Bu Testin Bulduğu En Yaygın Stereo Sorunları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sol ve sağ kanallar ters: sol düğme sağ tarafta çalıyor veya sağ düğme sol tarafta çalıyor.',
        'Stereo mono\'ya çöktü: sol, sağ ve merkez her iki hoparlörden neredeyse aynı duyuluyor.',
        'Bir taraf daha sessiz: sistem denge kaydırıcısı merkezde görünse bile merkez sesi bir hoparlöre doğru çekiliyor.',
        'Kulaklıklar yanlış bağlanmış veya takılmış: oyun ayak sesleri, müzik kaydırması ve görüntülü aramalar mekansal olarak kafa karıştırıcı geliyor.',
        'Bluetooth veya USB ses işleniyor: soundbar\'lar, dock\'lar, kulaklıklar ve TV modları sinyali dönüştürebilir veya sanallaştırabilir.',
        'Hoparlör yerleşimi yanıltıcı: duvara çok yakın, mobilyalarla engellenmiş veya daha uzakta olan bir hoparlör merkez görüntüsünü kaydırabilir.',
      ],
    },
    {
      type: 'title',
      text: 'Ters Sol ve Sağ Ses Nasıl Düzeltilir',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Kablolu hoparlörler için amplifikatör, ses arabirimi, DAC veya bilgisayar çıkışındaki sol ve sağ fişleri değiştirin.',
        'Pasif hoparlörler için sol hoparlörün amplifikatörün sol terminallerine, sağ hoparlörün sağ terminallere bağlı olduğunu doğrulayın.',
        'Kulaklıklar için doğru yönde takıldığını kontrol edin ve adaptörler, uzatma kabloları veya ayırıcı kablolar olmadan test edin.',
        'Windows veya macOS için çıkış dengesini kontrol edin ve erişilebilirlik veya ses ayarlarında mono sesi devre dışı bırakın.',
        'Bluetooth hoparlörler ve soundbar\'lar için test sırasında sanal surround, parti modu, çift ses, oda düzeltmesi veya TV ses modlarını devre dışı bırakın.',
        'Ses arabirimleri, DAW\'lar ve mikserler için kanal yönlendirmesini, pan kontrollerini, monitör miks ayarlarını ve üretici tarafından sağlanan yazılım mikserlerini kontrol edin.',
      ],
    },
    {
      type: 'title',
      text: 'Merkez Hoparlör Testi Nasıl Yorumlanır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Merkez tonu, normal iki kanallı bir kurulumda ayrı bir fiziksel merkez hoparlör değildir. Sol ve sağa eşit olarak gönderilen aynı sinyaldir. Kulaklıklarda kafanın içinde merkezlenmiş hissedilmeli; hoparlörlerde aralarında bir hayalet merkez oluşturmalıdır. Sola veya sağa kayıyorsa, sistem dengesini, hoparlör mesafesini, hoparlör açısını, ses düğmelerini, amplifikatör ayarını, kulak içi kulaklık uyumunu, sürücü ızgarasındaki tozu ve bir hoparlörün kısmen engellenip engellenmediğini veya arızalı olup olmadığını kontrol edin.',
    },
    {
      type: 'table',
      headers: ['Ne oluyor', 'Olası neden', 'Sonraki adım'],
      rows: [
        ['Sol her iki taraftan çalıyor', 'Mono ses, downmixing veya uzamsal ses işleme.', 'Mono çıkışı ve sanal surround\'u devre dışı bırakın, ardından tekrar test edin.'],
        ['Sol sağ taraftan çalıyor', 'Oynatma zincirinin bir yerinde kanallar ters çevrilmiş.', 'Kabloları değiştirin veya sürücü, mikser veya amplifikatördeki kanal yönlendirmesini değiştirin.'],
        ['Merkez bir tarafta daha yüksek', 'Denge, yerleşim, sürücü hasarı, kulak uyumu veya tıkalı hoparlör ızgarası.', 'Başka bir kulaklık veya hoparlör çiftiyle karşılaştırın ve fiziksel yerleşimi inceleyin.'],
        ['Tarama atlıyor veya kayboluyor', 'Bluetooth kararsızlığı, ses iyileştirme yapaylıkları veya arızalı bir kablo/konektör.', 'Zayıf bağlantıyı izole etmek için kablolu çıkış veya başka bir kabloyla test edin.'],
      ],
    },
    {
      type: 'title',
      text: 'Kulaklık ve Kulak İçi Kulaklık Sol Sağ Testi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kulaklıklar ve kulak içi kulaklıklar için sol/sağ testi özellikle oyun oynamadan, ses düzenlemeden, film izlemeden veya aramalara katılmadan önce faydalıdır. Kulaklığı normal şekilde takın, düşük sesle başlayın, Sol ve Sağ\'a basın ve her tonun doğru kulağa ulaştığını doğrulayın. Her iki taraf da aynı duyuluyorsa, cihazınız mono ses kullanıyor olabilir. Bir taraf boğuk veya daha sessizse, kulak içi kulaklık ağını temizleyin, kulak ucu\'nu yeniden takın, kabloyu kontrol edin ve başka bir çıkış cihazıyla karşılaştırın.',
    },
    {
      type: 'title',
      text: 'Güvenli Ses Testi İpuçları',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Özellikle kulaklıklarda düşük sistem sesiyle başlayın.',
        'Durdurulana kadar Döngü\'yü yalnızca kablo izleme, yerleştirme veya denge ayarı için sürekli sese aktif olarak ihtiyaç duyduğunuzda kullanın.',
        'Küçük hoparlörlerde test tonlarını kısa tutun; sürekli sinüs dalgaları hızla rahatsız edici hale gelebilir.',
        'Küçük dizüstü bilgisayar hoparlörlerinde ve bilinmeyen amplifikatörlerde maksimum kazançtan kaçının.',
        'Ses seviyesinin güvenli olduğunu onaylayana kadar kulaklıkları kulaklarınıza yerleştirmeyin.',
        'Kabloları veya ayarları değiştirdikten sonra sol, sağ, merkez ve tarama testlerini bu sırayla tekrarlayın.',
        'Stüdyo veya ev sineması kalibrasyonu için bu hızlı testi bir SPL ölçer veya alıcı kalibrasyon rutini ile birleştirin.',
      ],
    },
    {
      type: 'title',
      text: 'Hızlı Teşhis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sol ve sağ ters çevrilmişse, önce fiziksel kablolamayı inceleyin çünkü bu masaüstü hoparlörler, amplifikatörler ve ses arabirimleri için en hızlı çözümdür. Her iki düğme de her iki taraftan çalıyorsa, mono çıkış, uzamsal ses, sanal surround veya stereoyu kasıtlı olarak mono\'ya dönüştüren bir cihaz arayın. Merkez merkezden kaymış ancak sol ve sağ doğru yönlendirilmişse, sorun genellikle denge, yerleşim, kulak uyumu, tıkalı ızgaralar veya eşit olmayan hoparlör çıkışıdır.',
    },
  ],
  ui: {
    left: 'Sol',
    center: 'Merkez',
    right: 'Sağ',
    sweep: 'Tarama',
    stop: 'Dur',
    volume: 'Ses',
    duration: 'Süre',
    infiniteMode: 'Durdurulana kadar döngü',
    infiniteModeHint: 'Sürekli test için herhangi bir kanalı çalmaya devam ettirir.',
    secondsUnit: 'sn',
    hertzUnit: 'Hz',
    tone: 'Ton',
    balance: 'Denge',
    activeIdle: 'Hazır',
    activeLeft: 'Sol kanal çalınıyor',
    activeCenter: 'Merkez ton çalınıyor',
    activeRight: 'Sağ kanal çalınıyor',
    activeSweep: 'Stereo alan taranıyor',
    safety: 'Düşük başlayın. Test tonları kulaklıklar, amplifikatörler ve küçük dizüstü bilgisayar hoparlörleri aracılığıyla yüksek olabilir.',
    leftSpeaker: 'Sol hoparlör',
    rightSpeaker: 'Sağ hoparlör',
    centerLine: 'Stereo alan',
  },
};
