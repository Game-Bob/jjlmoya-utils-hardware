import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mikrofon-testi-spektrum-analizoru';
const title = 'Mikrofon Testi ve Spektrum Analizörü';
const description = 'Mikrofon girişini, canlı ses seviyesini, kırpılmayı (clipping), oda gürültüsünü ve frekans tepkisini tarayıcınızda yerel olarak test edin.';

const faq = [
  {
    question: 'Bu mikrofon testi sesimi kaydediyor mu veya bir sunucuya yüklüyor mu?',
    answer: 'Hayır. Canlı mikrofon akışı yalnızca tarayıcınızın içindeki analizörle bağlantılıdır. Araç ses kaydı yapmaz, analizörü bir ses çıkışına bağlamaz ve sunucuya ses örnekleri aktarmaz.',
  },
  {
    question: 'Seviye göstergesindeki dBFS ne anlama gelir?',
    answer: 'dBFS, dijital tam ölçeğe (Full Scale) göre desibel anlamına gelir. 0 dBFS maksimum dijital tepe noktası olduğundan normal değerler negatiftir. Bu, dB SPL cinsinden kalibre edilmiş bir ses basıncı ölçümüyle aynı şey değildir.',
  },
  {
    question: 'Mikrofonumun kırpıldığını (cızırtı/bozulma yaptığını) nasıl anlarım?',
    answer: 'Kullanmayı beklediğiniz en yüksek ses seviyesi veya çalma sesiyle konuşun. Tepeler 0 dBFS civarındaki kırmızı alana sıkça ulaşıyorsa kazancı (gain) düşürün, mesafenizi artırın veya işletim sisteminizdeki agresif giriş işlemini devre dışı bırakın.',
  },
  {
    question: 'Oda gürültüsü ölçümü (room tone) neyi gösterir?',
    answer: 'Üç saniyelik ölçüm, sessiz kaldığınız zamanki ortalama dijital RMS seviyesini hesaplar. Bu, aynı tarayıcı ve odadaki ayarları karşılaştırmaya yardımcı olur; ancak otomatik kazanç kontrolü ve gürültü bastırma sonucu değiştirebilir.',
  },
  {
    question: 'Konuşurken baskın frekans neden sürekli değişiyor?',
    answer: 'İnsan sesi değişen temel frekanslar, harmonikler, ünsüzler ve gürültü içerir. Gösterge 60 Hz ile 12 kHz arasındaki en güçlü analizör bandını sunduğu için değişim beklenen bir davranıştır, hata değildir.',
  },
  {
    question: 'Bu spektrum analizörü mikrofon kalitesini belgelendirebilir mi?',
    answer: 'Hayır. Bu, giriş, seviye, kırpılma, gürültü ve görünür frekans aktivitesi için tarayıcı üzerinde pratik bir kontrol aracıdır. Frekans tepkisi veya ses basıncı belgelendirmesi kalibre edilmiş donanım, kontrollü sinyaller ve belgelenmiş bir ölçüm ortamı gerektirir.',
  },
];

const howTo = [
  {
    name: 'Mikrofon erişimine izin verin',
    text: 'Mikrofonu Başlat düğmesine basın ve tarayıcı iznini onaylayın. İşleme yalnızca bu açık eylemden sonra başlar.',
  },
  {
    name: 'Gerçek çalışma mesafenizden konuşun',
    text: 'Normal ses seviyeniz veya enstrüman seviyenizle konuşarak canlı dBFS değerini, tepe yörüngesini ve spektrum hareketini gözlemleyin.',
  },
  {
    name: 'Beklenen en yüksek ses anını test edin',
    text: 'Sesinizi yükseltin veya beklenen en yüksek pasajı çalın. Net ve sağlıklı bir sinyali korurken tekrarlanan kırmızı kırpılma uyarısından kaçınmayı hedefleyin.',
  },
  {
    name: 'Oda gürültüsünü (room tone) ölçün',
    text: 'Sessiz kalın ve Üç saniye ölç butonuna basın. Odayı, cihazı, kazancı veya işleme ayarlarını değiştirdikten sonra kaydedilen gürültü tabanını karşılaştırın.',
  },
];

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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Tarayıcınızda Mikrofon Nasıl Test Edilir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu mikrofon testi, bir uygulama yüklemeden ilk sorun giderme sorularını yanıtlar: seçilen giriş sinyal üretiyor mu, seviye kullanılabilir mi, yüksek sesli anlar kırpılıyor mu, oda gürültüsü nasıl görünüyor ve hangi frekanslar aktif? Mikrofonu Başlat butonuna basın, gerçek çalışma konumunuzdan konuşun ve canlı gözlemevini okuyun. Analizör mevcut sayfada çalışır ve bir ses dosyası oluşturmaz.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Yerel ve Gizli Analiz İşlemi',
      badge: 'Kayıt ve Yükleme Yok',
      html: '<p>Ham giriş hassas olduğundan tarayıcınız mikrofon izni ister. Bu araç, bu akışı yalnızca yerel bir analizöre bağlar. Örnekleri bir sunucuya göndermez ve Mikrofonu Durdur butonuna bastığınızda tüm medya izlerini durdurur.</p>',
    },
    {
      type: 'title',
      text: 'dBFS Cinsinden Mikrofon Seviyesini Okuma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Büyük canlı değer, mevcut zaman penceresinin enerjisini temsil eden bir RMS tahminidir. Tepe değeri, o penceredeki en büyük mutlak örneği gösterir. Her ikisi de 0 değerinin dijital tam ölçek olduğu ve daha sessiz sinyallerin giderek artan negatif değerler kullandığı dBFS birimini kullanır. Sağlıklı bir seviye rozeti bu test için pratik bir kılavuzdur, evrensel bir kayıt standardı değildir.',
    },
    {
      type: 'table',
      headers: ['Okunan Değer', 'Okumanın Size Söylediği Anlam', 'Nelerin Denediği Kontrol Edilmeli'],
      rows: [
        ['Sessiz veya -60 dBFS altı', 'Seçilen giriş yararlı bir test sinyali üretmiyor', 'Cihazı, sessiz düğmesini, izni ve işletim sistemi giriş seviyesini kontrol edin'],
        ['Kısık -35 dBFS altı', 'Ekstra kazanç olmadan sinyalin kullanılması zor olabilir', 'Tepe değerini izlerken yaklaşın veya giriş kazancını artırın'],
        ['Sağlıklı ve Uygun Seviye', 'Mevcut sinyal yararlı bir seviyeye ve görünür bir paya sahiptir', 'Beklenen en yüksek sesinizle veya pasajınızla testi tekrarlayın'],
        ['Yüksek -6 dBFS tepe üstü', 'Kalan dijital pay çok az', 'Yüksek bir andan önce kazancı düşürün veya mesafeyi artırın'],
        ['0 dBFS yakınında kırpılma', 'Bir veya daha fazla örnek dijital tavana ulaştı ve bozuldu', 'Kazancı azaltın ve testin en yüksek kısmını tekrarlayın'],
      ],
    },
    {
      type: 'title',
      text: 'Canlı Spektrum Analizörünü Kullanma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kavisli spektrum, 60 Hz ile 12 kHz arasındaki analizör bantlarını logaritmik bir yay üzerinde haritalandırırken, parlak şerit mevcut dalga biçimini gösterir. Bas, tiz ve orta frekans etkinliğinin tarayıcıya ulaştığını doğrulamak için ekranı kullanın. Konuşma ve müzik için hareketli bir baskın frekans normaldir. Ekran, aynı mikrofon, kazanç, oda, tarayıcı ve mesafe ile yapılan karşılaştırmalar için en yararlıdır.',
    },
    {
      type: 'tip',
      title: 'Her defasında tek bir ayarı değiştirin',
      html: 'Oda gürültüsünü ölçün, bir ayarı değiştirin ve ardından aynı konumdan tekrar ölçüm yapın. İşletim sisteminin gürültü bastırma ve otomatik kazanç kontrolü (AGC) sesini değiştirirken mikrofonu daha sessiz gösterebilir, bu nedenle bu görsel testi okumanın yanı sıra gerçek uygulamanızda da dinleyin.',
    },
    {
      type: 'title',
      text: 'Bu Neden Kalibre Edilmiş Bir Ses Ölçer Değildir',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tarayıcı örnekleri, mikrofon, arabirim, sürücü ve tüm otomatik işlemlerden sonraki dijital sinyali tanımlar. Mikrofon kapsülündeki akustik ses basıncını ortaya çıkarmazlar. Bu nedenle bu araç dB SPL yerine dBFS bildirir ve sertifikalı bir frekans tepkisi veya oda gürültü seviyesi iddiasında bulunmaktan kaçınır.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Resmi Ölçümler İçin Kalibre Edilmiş Ekipman Kullanın',
      badge: 'Yalnızca Pratik Kontrol',
      html: '<p>Aramalardaki, yayınlardaki, kayıtlardaki ve cihaz seçimindeki sorunları gidermek için bu aracı kullanın. Sonucun ürün özelliklerini, işitme güvenliğini veya profesyonel oda analizini desteklemesi gerektiğinde kalibre edilmiş bir ölçüm mikrofonu kullanın.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. Mikrofona izin verin',
    journeySpeak: '2. Doğal bir şekilde konuşun',
    journeyInspect: '3. Seviyeyi ve spektrumu inceleyin',
    startMicrophone: 'Mikrofonu Başlat',
    stopMicrophone: 'Mikrofonu Durdur',
    deviceLabel: 'Giriş Cihazı',
    defaultDevice: 'Varsayılan Mikrofon',
    statusIdle: 'İzin bekleniyor',
    statusRequesting: 'Mikrofon erişimi isteniyor',
    statusLive: 'Yerel dinleme aktif',
    statusUnsupported: 'Mikrofon erişimi bu tarayıcıda desteklenmiyor',
    statusDenied: 'Mikrofon izni verilmedi',
    statusError: 'Mikrofon başlatılamadı',
    levelLabel: 'Canlı Seviye',
    peakLabel: 'Tepe Değeri',
    frequencyLabel: 'Baskın Frekans',
    noiseFloorLabel: 'Oda Gürültüsü',
    captureNoise: 'Üç saniye ölç',
    capturingNoise: 'Oda gürültüsü ölçülürken lütfen sessiz kalın',
    noiseCaptured: 'Oda gürültüsü ölçüldü',
    roomToneHint: 'Konumunuzu koruyun ve üç saniye boyunca sessiz kalın.',
    unmeasured: 'Ölçülmedi',
    noSignalLevel: 'Sinyal yok',
    noSignalPeak: 'Sinyal yok',
    noSignalFrequency: 'Sinyal yok',
    silentSignal: 'Kullanılabilir sinyal yok',
    quietSignal: 'Zayıf giriş',
    healthySignal: 'Sağlıklı seviye',
    hotSignal: 'Yüksek seviye',
    clippingSignal: 'Kırpılma (cızırtı) tespit edildi',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'Canlı mikrofon spektrumu ve dalga şekli',
    limitationTitle: 'Tarayıcı kalibre bir ses ölçer değildir',
    limitationText: 'Değerler dijital dBFS değerleridir. Hiçbir ses verisi sunucuya aktarılmaz.',
  },
};
