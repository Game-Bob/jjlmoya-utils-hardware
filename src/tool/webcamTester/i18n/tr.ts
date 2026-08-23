import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gizli-web-kamerasi-testi-online';
const title = 'Gizli web kamerası testi';
const description = 'Toplantıdan önce kamera iznini, canlı video önizlemesini, çözünürlüğü, en boy oranını, yönü ve kare hızını kontrol edin.';

const faq = [
  {
    question: 'Bu web kamerası testi videomu kaydeder mi veya yükler mi?',
    answer: 'Hayır. Sayfa yalnızca önizleme için yerel canlı video akışı talep eder ve mikrofon erişimi istemez. Kayıt yapılmaz ve veri yüklenmez.',
  },
  {
    question: 'Tarayıcı neden kamera erişim izni istiyor?',
    answer: 'Bir web sitesi tarayıcı izni olmadan kamerayı açamaz. İzin istemi, bu sayfanın geçici bir yerel video akışı alıp alamayacağını seçmenizi sağlar.',
  },
  {
    question: 'Yapılandırılmış FPS ile gözlemlenen FPS arasındaki fark nedir?',
    answer: 'Yapılandırılmış FPS, önizleme için istenen hedef değerdir. Gözlemlenen FPS ise sekme görünür durumdayken gelen gerçek kare sayısını tahmin eder.',
  },
  {
    question: 'Kullanılabilir çözünürlük neden kamera özelliklerinden farklı olabilir?',
    answer: 'İşletim sistemi, sürücü ve tarayıcı uyumlu bir mod seçer. Diğer aktif uygulamalar kullanılabilir çözünürlüğü sınırlayabilir.',
  },
];

const howTo = [
  {
    name: 'Gizli önizlemeyi açın',
    text: 'Kamerayı aç seçeneğini belirleyin ve tarayıcı uyarısında video erişimine izin verin. Ses erişimi istenmez.',
  },
  {
    name: 'Kadrajı ve görüntüyü inceleyin',
    text: 'Canlı önizlemede odaklamayı, aydınlatmayı, arka planı ve göz konumunu kontrol edin.',
  },
  {
    name: 'Video akışını doğrulayın',
    text: 'Çözünürlüğü, en boy oranını, yönü ve gelen kare hızını okuyun.',
  },
  {
    name: 'Kamerayı değiştirin veya durdurun',
    text: 'Karşılaştırma için kullanılabilir başka bir kamera seçin veya tüm izleri kapatmak için Kamerayı durdur seçeneğini belirleyin.',
  },
];

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

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Web kamerası testi hakkında sıkça sorulan sorular',
  faq,
  bibliographyTitle: 'Kamera ayarları ve sorun giderme kaynakları',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Görüntülü görüşmeden önce web kameranızı test edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toplantı öncesinde temel soruları yanıtlamak için bu yerel önizlemeyi kullanın: kamera açılıyor mu, doğru cihaz seçildi mi, yüzünüz iyi aydınlatılmış mı ve video akıcı bir şekilde ilerliyor mu?',
    },
    {
      type: 'list',
      items: [
        'Birden fazla cihaz bağlıysa doğru kamerayı seçin',
        'Kamerayı göz hizasına getirin ve yüzünüzü üst üçte birlik kısımda tutun',
        'Parlak bir pencereye arkanızı dönmek yerine yüzünüzü önden aydınlatın',
        'Kamera meşgul görünüyorsa diğer toplantı uygulamalarını kapatın',
        'Çözünürlüğü ve kare akışını doğrudan ekrandan kontrol edin',
      ],
    },
    {
      type: 'title',
      text: 'Siyah ekran veya erişilemeyen kamera çözümleri',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Belirti', 'Muhtemel neden', 'Önerilen eylem'],
      rows: [
        ['İzin reddedildi', 'Kamera erişimi tarayıcıda veya sistemde engellenmiş', 'Ayarlardan kamera erişimine izin verin ve sayfayı yenileyin'],
        ['Siyah ekran veya meşgul', 'Başka bir toplantı uygulaması kamerayı kullanıyor', 'Zoom, Teams veya Meet uygulamalarını kapatıp tekrar deneyin'],
        ['Yanlış görüntü', 'Sanal kamera veya ikincil cihaz seçilmiş', 'Açılır menüden başka bir kamera kaynağı seçin'],
        ['Karanlık veya kumlu görüntü', 'Ön aydınlatma yetersiz veya arkadan güçlü ışık geliyor', 'Önünüze bir lamba yerleştirin veya pencereye doğru dönün'],
        ['Takılan video', 'Düşük ışık veya yüksek bilgisayar yükü', 'Işığı artırın ve yoğun uygulamaları kapatın'],
      ],
    },
    {
      type: 'title',
      text: 'Çözünürlük ve kare hızını anlama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '1280 × 720 çözünürlük genel görüşmeler için oldukça yeterlidir. 1920 × 1080 daha yüksek netlik sunar ancak kararlı bir bağlantı gerektirir. Yapılandırılmış FPS hedef değeri temsil ederken, gözlemlenen FPS gerçek kare akışını gösterir.',
    },
    {
      type: 'tip',
      title: 'Gerçek toplantı koşullarında test edin',
      html: 'Testi görüşmenizle aynı saatte ve aynı aydınlatma koşullarında gerçekleştirin. Görüşme uygulamaları görüntüyü işleyebileceğinden, kendi uygulamanızda da son bir kontrol yapmanız önerilir.',
    },
    {
      type: 'title',
      text: 'En iyi kadraj ve konumlandırma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kamerayı göz hizasına yakın bir yüksekliğe yerleştirin ve başınızın üstünde biraz boşluk bırakın. Ana ışığı önde tutun. Gözlük takıyorsanız, camlarda parlama olmaması için ışık kaynağını hafifçe yana kaydırın.',
    },
  ],
  ui: {
    privacyNote: 'Kayıt yok · Yükleme yok · Ses yok',
    permissionHeading: 'Kameranızı test etmeye hazır mısınız?',
    permissionBody: 'Görüntüyü ve kullanılabilir video formatlarını kontrol etmek için gizli bir canlı önizleme açın. Durdurmak tüm erişimi hemen kapatır.',
    startAction: 'Kamerayı aç',
    stopAction: 'Kamerayı durdur',
    retryAction: 'Tekrar dene',
    deviceLabel: 'Kamera kaynağı',
    devicePlaceholder: 'Kamera seç',
    defaultDevice: 'Kamera',
    mirrorAction: 'Ayna modu',
    guideAction: 'Kadraj kılavuzu',
    stageLabel: 'Gizli web kamerası önizleme alanı',
    resolutionLabel: 'Çözünürlük',
    aspectLabel: 'En boy oranı',
    orientationLabel: 'Yön',
    configuredFpsLabel: 'Yapılandırılmış FPS',
    observedFpsLabel: 'Gözlemlenen FPS',
    frameDeliveryLabel: 'Kare akışı',
    landscapeValue: 'Yatay',
    portraitValue: 'Dikey',
    squareValue: 'Kare',
    frameStable: 'Hedefe yakın',
    frameReduced: 'Hedefin altında',
    frameConstrained: 'Ciddi oranda düşük',
    framePending: 'Kareler bekleniyor',
    statusIdle: 'Kamera kapalı. Önizlemeyi kontrol etmeye hazır olduğunuzda açın.',
    statusStarting: 'İzin ve ilk video karesi bekleniyor',
    statusReady: 'Canlı önizleme aktif. Odak, ışık, kadraj ve akıcılığı kontrol edin.',
    statusStopped: 'Kamera durduruldu. Tüm video izleri kapatıldı.',
    statusHidden: 'Doğru bir FPS ölçümü için bu sekmeyi görünür tutun.',
    statusUnsupported: 'Bu tarayıcı kamera erişimini desteklemiyor.',
    errorPermissionDenied: 'İzin reddedildi. Tarayıcı ayarlarından izin verip tekrar deneyin.',
    errorNoCamera: 'Kamera bulunamadı. Cihaz bağlayıp tekrar deneyin.',
    errorInUse: 'Kamera başlatılamadı. Diğer uygulamaları kapatıp tekrar deneyin.',
    errorSecureContext: 'Kamera erişimi HTTPS veya localhost gerektirir.',
    errorGeneric: 'Kamera açılamadı. İzinleri ve cihazı kontrol edin.',
    limitHeading: 'Bu test neleri doğrular',
    limitBody: 'Bu sekmedeki görüntü kalitesini ve akıcılığı doğrular. Lens kalitesini veya diğer uygulamaların görüntü işlemesini değerlendirmez.',
    localOnlyLabel: 'Gizli kamera kontrolü',
    emptyValue: 'Kullanılamıyor',
    fpsUnit: 'FPS',
  },
};
