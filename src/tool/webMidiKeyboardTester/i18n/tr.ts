import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'midi-klavye-test-araci';
const title = 'WebMIDI Keyboard Tester';
const description = 'USB MIDI klavye, synth, pad kontrolcü, pitch tekerleği, modülasyon tekerleği, nota hızı ve takılı kalan notaları Web MIDI ile doğrudan tarayıcıda test edin.';

const faqData = [
  {
    question: 'Bu MIDI klavye test aracı, yazılım yüklemeden USB klavyemi okuyabilir mi?',
    answer: 'Evet, Chrome ve Edge gibi Web MIDI destekleyen tarayıcılarda. Tarayıcı izin ister, ardından araç seçilen MIDI girişinden gelen nota, hız, pitch bend ve modülasyon mesajlarını dinler.',
  },
  {
    question: 'Web sitesi MIDI notalarımı veya performans verilerimi yüklüyor mu?',
    answer: 'Hayır. MIDI olayları mevcut tarayıcı sekmesinde işlenir. Notalar, hız değerleri, kontrolcü mesajları, cihaz adları ve günlükler web sitesi tarafından yüklenmez veya saklanmaz.',
  },
  {
    question: 'MIDI klavyem neden görünüyor ama hiçbir tuş yanmıyor?',
    answer: 'Cihaz kontrol yüzeyi olarak bağlanmış olabilir, tarayıcı yanlış giriş portunu seçmiş olabilir, klavye farklı bir mod kullanıyor olabilir veya kablo/hub güç iletiyor ancak MIDI verisi iletmiyor olabilir.',
  },
  {
    question: 'Pitch bend ve modülasyon tekerleklerini test edebilir miyim?',
    answer: 'Evet. Test aracı pitch bend\'i ortalanmış işaretli bir değer olarak, modülasyonu ise MIDI CC1 olarak gösterir. Cihaz standart MIDI mesajları gönderdiğinde bu kontrolleri hareket ettirmek göstergelerini hemen güncellemelidir.',
  },
  {
    question: 'Hangi MIDI mesajları gösteriliyor?',
    answer: 'Canlı arayüz Note On ve Note Off mesajlarını vurgular, hızı kaydeder, pitch bend\'i algılar ve modülasyon tekerleği CC1\'ini izler. Test edilen kontrollerle ilgili olduğunda diğer kontrolcü mesajları olay günlüğünde görünebilir.',
  },
];

const howToData = [
  {
    name: 'MIDI donanımını bağlayın',
    text: 'İzin istemini açmadan önce klavyeyi, synth\'i, pad kontrolcüyü veya USB MIDI arayüzünü bilgisayara takın. Kesintili cihazları sorun giderirken güçsüz hub\'lardan kaçının.',
  },
  {
    name: 'Tarayıcıya MIDI erişimi verin',
    text: 'MIDI Girişini Bağla\'ya basın ve tarayıcı izin isteğini onaylayın. Web MIDI izin kontrollü olduğundan HTTPS veya localhost üzerinden Chrome veya Edge kullanın.',
  },
  {
    name: 'Aralık boyunca tuşları çalın',
    text: 'Düşük, orta ve yüksek notalara basın. Ekran klavyesi aldığı notaların etrafında genişler ve her tuşu hıza göre aydınlatır.',
  },
  {
    name: 'Tekerlekleri ve ifade kontrollerini kontrol edin',
    text: 'Pitch tekerleğini, modülasyon tekerleğini ve performans kontrollerini hareket ettirin. Pitch merkeze dönmeli, modülasyon ise 0\'dan 127\'ye hareket etmelidir.',
  },
  {
    name: 'Olay günlüğünü okuyun',
    text: 'Eksik Note Off mesajlarını, beklenmeyen kanalları, düşük hız değerlerini veya beklenenden farklı MIDI mesajı gönderen kontrolleri tespit etmek için olay günlüğünü kullanın.',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Gerçek USB Donanımı için Çevrimiçi MIDI Klavye Test Aracı', level: 2 },
    {
      type: 'paragraph',
      html: 'Güvenilir bir <strong>çevrimiçi MIDI klavye test aracı</strong> tek bir soruya hızlıca cevap vermelidir: fiziksel enstrüman, bir DAW, sampler, synth veya ışık sisteminin beklediği mesajları gönderiyor mu? Bu WebMIDI test aracı, tarayıcı MIDI girişini dinler ve Note On, Note Off, hız, pitch bend ve modülasyon tekerleği verilerini gerçek zamanlı olarak gösterir. USB MIDI klavyeler, DIN-USB arayüzler, synthesizer\'lar, pad kontrolcüler, sahne piyanoları, MIDI gitarlar, davul tetikleyiciler ve ev veya sahne stüdyolarında kullanılan kompakt kontrolcüler için tasarlanmıştır.',
    },
    {
      type: 'message',
      title: 'Gizli yerel MIDI tanılama',
      html: 'Test tamamen istemci tarafında çalışır. Web sitesi nota numaralarını, hız eğrilerini, kontrolcü hareketlerini, cihaz adlarını veya olay günlüklerini yüklemez. Tarayıcı MIDI\'yi yalnızca izin isteğini onayladıktan sonra sunar ve değerler mevcut sekmede kalır.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'MIDI hız aralığı' },
        { value: '128', label: 'standart nota numarası' },
        { value: '14-bit', label: 'pitch bend çözünürlüğü' },
        { value: 'CC1', label: 'modülasyon tekerleği kontrolü' },
      ],
    },
    {
      type: 'table',
      headers: ['Sinyal', 'Test aracının gösterdiği', 'Sağlıklı davranış'],
      rows: [
        ['Note On', 'Tuş adı, nota numarası, kanal ve hız.', 'Her fiziksel tuş basıldığında bir kez yanar ve sıfırın üzerinde bir hız değeri kullanır.'],
        ['Note Off', 'Günlükte bırakma olayı ve tuş ışığı sıfırlanması.', 'Basılan her tuş bırakıldığında söner; görsel olarak takılı kalan nota kalmaz.'],
        ['Hız', 'Canlı gösterge artı kayan bir eğri.', 'Yumuşak çalma düşük, sert çalma ise rastgele sıçramalar olmadan yüksek değerler üretir.'],
        ['Pitch bend', 'Negatiften pozitife ortalanmış işaretli gösterge.', 'Tekerlek düzgünce gezinir ve bırakıldığında sıfıra yakın döner.'],
        ['Modülasyon', '0\'dan 127\'ye CC1 göstergesi.', 'Tekerlek veya şerit tüm aralık boyunca öngörülebilir şekilde hareket eder.'],
      ],
    },
    { type: 'title', text: 'DAW Olmadan MIDI Klavye Nasıl Test Edilir', level: 2 },
    {
      type: 'paragraph',
      html: '<em>Probar teclado MIDI</em> araması genellikle kullanıcının sorunun kontrolcüde mi, kabloda mı, işletim sisteminde mi yoksa müzik yazılımında mı olduğunu henüz bilmediği anlamına gelir. Bir DAW birçok ekstra değişken ekler: parça kayıt durumu, giriş filtreleri, MIDI kanal yönlendirme, sanal enstrümanlar, izleme, şablonlar ve sürücü tercihleri. Tarayıcı test aracı bu yığının çoğunu ortadan kaldırır. WebMIDI izin istemi cihazı görüyor ve klavye ekranda notaları aydınlatıyorsa, fiziksel MIDI yolu canlıdır.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'DAW ayarlarını değiştirmeden önce bunu kullanın',
      html: 'Önce kontrolcünün ham MIDI gönderdiğini doğrulayın. Ardından müzik uygulamasını sorun giderin. Test aracı notaları alıyor ancak DAW almıyorsa, MIDI giriş etkinleştirmesini, seçili parça girişini, kanal filtrelerini, kontrol yüzeyi betiklerini ve enstrüman izlemeyi kontrol edin.',
    },
    {
      type: 'list',
      items: [
        'Özellikle veri yolu gücü yetersiz olduğunda, klavyeyi mümkünse doğrudan bilgisayara bağlayın.',
        'Web MIDI desteği tarayıcıya ve platforma göre değiştiğinden, test aracını Chrome veya Edge\'de açın.',
        'MIDI Girişini Bağla\'ya basın ve izin isteminden müzik cihazını veya MIDI arayüzünü seçin.',
        'Ölü tuşları, bölünmüş bölgeleri veya oktav transpoze sürprizlerini ortaya çıkarmak için klavye boyunca kromatik notalar çalın.',
        'Gürültülü sensörleri veya zayıf merkeze dönüş davranışını yakalamak için pitch ve modülasyon tekerleklerini önce yavaş, sonra hızlı hareket ettirin.',
        'Kabloları, USB portlarını, klavye ön ayarlarını veya kontrolcü modlarını karşılaştırırken testler arasında günlüğü temizleyin.',
      ],
    },
    {
      type: 'tip',
      title: 'Hızlı kablo kontrolü',
      html: 'Cihaz açılıyor ancak MIDI girişi görünmüyorsa, farklı bir USB kablosu deneyin. Birçok ucuz USB kablosu yalnızca şarj amaçlıdır ve veri taşımaz, bu da kontrolcü çalışıyor gibi görünürken MIDI mesajları bilgisayara ulaşamaz.',
    },
    { type: 'title', text: 'Hız Eğrilerini ve Dinamik Yanıtı Okuma', level: 2 },
    {
      type: 'paragraph',
      html: 'Hız kendi başına ses yüksekliği değildir; bir nota ile birlikte, genellikle 1\'den 127\'ye kadar gönderilen bir performans değeridir. Bir piyano eklentisi hızı ses seviyesine, örnek katmanına, parlaklığa, çekiç gürültüsüne, atak süresine veya hepsine birden eşleyebilir. Bir kontrolcüde zayıf hız taraması olduğunda, çalan kişi yumuşak notaların kaybolduğunu, orta notaların çok gürültülü olduğunu veya sert notaların ifade dolu üst katmana asla ulaşmadığını hissedebilir. Kayan hız eğrisi, donanımın kullanışlı bir değer aralığı üretip üretmediğini ortaya çıkarmaya yardımcı olur.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Sağlıklı tuş takımı',
          description: 'Yumuşak, orta ve sert vuruşlar, benzer çalma kuvveti için tekrarlanabilir değerlerle görünür şekilde farklı hız bantları üretir.',
          highlight: true,
        },
        {
          title: 'Sıkıştırılmış yanıt',
          description: 'Çoğu nota, piyano ve davul enstrümanlarını düz veya kontrolü zor hissettiren 70-95 gibi dar bir aralıkta kümelenir.',
        },
        {
          title: 'Düzensiz yanıt',
          description: 'Bitişik notalar veya tekrarlanan vuruşlar öngörülemez şekilde sıçrar, bu da kirli kontakları, arızalı sensörleri, kötü taramayı veya kararsız ürün yazılımını düşündürür.',
        },
      ],
    },
    {
      type: 'table',
      headers: ['Gözlemlenen hız deseni', 'Olası yorum', 'Sonraki test'],
      rows: [
        ['Her zaman 127', 'Sabit hız modu etkin veya kontrolcü org/synth tetikleme için yapılandırılmış.', 'Klavye genel ayarlarını, pad modunu veya kontrolcü düzenleyicisini kontrol edin.'],
        ['Her zaman çok düşük', 'Hız eğrisi çok yumuşak, sensör kalibrasyonu yanlış veya tuş takımı arızalı.', 'Hız eğrilerini değiştirin ve oktavlar boyunca siyah/beyaz tuşları karşılaştırın.'],
        ['Bir tuş keskin fark gösteriyor', 'Yerel bir kontak, kauçuk kubbe, optik sensör veya tuş mekanizması kirli veya hasarlı olabilir.', 'O tuşu birkaç kuvvette tekrarlayın ve komşu notalarla karşılaştırın.'],
        ['Hub kullanıldıktan sonra değerler düşüyor', 'Güç veya veri kararlılığı yetersiz olabilir.', 'Doğrudan USB portu ve bilinen bir veri kablosuyla yeniden test edin.'],
      ],
    },
    {
      type: 'card',
      title: 'Note Off Neden Önemlidir',
      html: 'Takılı kalan bir nota genellikle eksik veya gecikmiş bir Note Off mesajıdır. Bazı enstrümanlar ayrı bir Note Off komutu yerine 0 hızında Note On gönderir; her ikisi de geçerli MIDI davranışıdır. Bu test aracı sıfır hızlı Note On\'u nota bırakma olarak değerlendirir, bu nedenle gerçekten takılı kalan tuşlar, doğru bırakma mesajı gelene kadar görünür kalır.',
    },
    { type: 'title', text: 'Pitch Bend, Modülasyon ve Performans Kontrollerini Test Etme', level: 2 },
    {
      type: 'paragraph',
      html: 'Pitch bend, sıradan 7-bit kontrolcü verisinden daha yüksek çözünürlüklü bir MIDI mesajıdır. İki veri baytını, 8192 merkezli 14-bit bir aralıkta birleştirir. Bu ekstra çözünürlük önemlidir çünkü pitch hareketi, özellikle bir lead synth, bas veya orkestra enstrümanını bükerken pürüzsüz duyulmalıdır. Test aracı, gelen bükümü ortalanmış bir göstergeye dönüştürerek tekerleğin her iki uca ulaşıp ulaşmadığını ve nötr konuma dönüp dönmediğini görmeyi kolaylaştırır.',
    },
    {
      type: 'paragraph',
      html: 'Modülasyon tekerleği normalde MIDI continuous controller 1\'dir, yaygın olarak CC1 yazılır. Birçok synth yaması bunu vibrato, filtre hareketi, dalga tablosu konumu, tremolo veya orkestral dinamikler için kullanır. Tekerleği hareket ettirmek CC1 göstergesini güncellemiyorsa, kontrolcü farklı bir CC\'ye atanmış, satıcıya özgü bir mod kullanıyor veya performans kontrollerini yeniden eşleyen bir yazılım üzerinden yönlendiriliyor olabilir.',
    },
    {
      type: 'proscons',
      title: 'Tarayıcı MIDI testi ile DAW izleme karşılaştırması',
      items: [
        { pro: 'Proje kurulumu gerektirmeyen hızlı izin tabanlı donanım doğrulaması.', con: 'Her DAW yönlendirmesini, betiği veya enstrüman eşlemesini taklit etmez.' },
        { pro: 'Notaların, hızın, pitch bend\'in ve CC1 modülasyonunun net görünümü.', con: 'Gelişmiş aftertouch, NRPN, MPE, SysEx ve özel kontrol haritaları uzman araçlar gerektirebilir.' },
        { pro: 'Destek çağrıları, ikinci el ekipman alımı ve kablo kontrolü için iyidir.', con: 'Tarayıcı desteği, mevcut platformda Web MIDI kullanılabilirliğine bağlıdır.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pitch tekerleği sıfıra dönmüyor',
      html: 'Pitch göstergesi bıraktıktan sonra pozitif veya negatif bir değerde duruyorsa, fiziksel tekerlek, yay, potansiyometre, hall sensörü, kalibrasyon veya ürün yazılımı ölü bölgesi dikkat gerektirebilir. Sensörün arızalı olduğunu varsaymadan önce aynı kontrolcüyü başka bir port ve ön ayar ile test edin.',
    },
    { type: 'title', text: 'Bu Test Aracının Ortaya Çıkarabileceği Yaygın MIDI Klavye Arızaları', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: 'Ölü tuş', definition: 'Basıldığında hiçbir Note On mesajı üretmeyen fiziksel bir tuş.' },
        { term: 'Takılı nota', definition: 'Note On alan ancak eşleşen bırakma mesajı almayan, enstrümanlarda sesi aktif bırakan bir nota.' },
        { term: 'Hız sıçraması', definition: 'Benzer bir vuruş için beklenenden çok daha yüksek veya düşük ani bir değer.' },
        { term: 'MIDI kanalı', definition: 'Bir MIDI akışında partileri, bölgeleri veya cihazları ayırmak için kullanılan 16 mantıksal kanaldan biri.' },
        { term: 'Control Change', definition: 'Knoblar, pedallar, tekerlekler, fader\'lar ve anahtarlar tarafından kullanılan bir MIDI mesaj ailesi.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cihaz algılandı, mesaj yok',
      html: 'Tarayıcı bir MIDI girişi listeliyor ancak tuşları çalmak günlük girişi üretmiyorsa, seçili portun klavye nota girişi yerine bir kontrol yüzeyi girişi olup olmadığını kontrol edin. Bazı arayüzler benzer adlara sahip birden fazla port sunar.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası neden', 'Pratik eylem'],
      rows: [
        ['İzin istemi yok', 'Desteklenmeyen tarayıcı, güvensiz kaynak veya engellenmiş tarayıcı MIDI izni.', 'HTTPS üzerinden Chrome/Edge kullanın ve site izinlerini kontrol edin.'],
        ['Cihaz eksik', 'Kablo, hub, sürücü, sınıf uyumluluğu veya güç sorunu.', 'Başka bir USB veri kablosu, port veya güçlü hub deneyin.'],
        ['Sadece bazı oktavlar çalışıyor', 'Split/layer modu, transpoze ayarı, donanım matris arızası veya yerel kontrol modu.', 'Ön ayarı sıfırlayın ve düşükten yükseğe kromatik olarak test edin.'],
        ['Yanlış nota adları', 'Kontrolcü transpoze edilmiş veya oktav kaydırmalı bir bölgeden gönderim yapıyor.', 'Genel transpoze, bölge oktavı ve DAW şablon ayarlarını kontrol edin.'],
        ['Mod tekerleği sessiz', 'Tekerlek farklı bir kontrolcü numarasına atanmış veya ön ayar tarafından devre dışı bırakılmış.', 'Varsayılan bir ön ayar veya kontrolcü düzenleyicisi yükleyin ve CC1\'e geri eşleyin.'],
      ],
    },
    {
      type: 'summary',
      title: 'En iyi tanılama sırası',
      items: [
        'Tarayıcının MIDI girişini gördüğünü doğrulayın.',
        'Notaları çalın ve eşleşen basma/bırakma davranışını kontrol edin.',
        'Tekrarlanan yumuşak, orta ve sert vuruşlarla hız dağılımını inceleyin.',
        'Pitch bend ve modülasyon kontrollerini tüm hareket aralığı boyunca hareket ettirin.',
        'Ancak bundan sonra DAW yönlendirmesini, sanal enstrüman ayarlarını veya kontrolcü şablonlarını ayarlayın.',
      ],
    },
    { type: 'title', text: 'Gizlilik, Tarayıcı Desteği ve Sınırlamalar', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI kasıtlı olarak izin kontrollüdür. Bir sayfa, tarayıcı bir erişim akışı sunmadan arka planda bağlı müzik cihazlarını sessizce okuyamaz. İzin isteminin tam şekli ve kalıcılığı tarayıcıya, işletim sistemine ve kullanıcı ayarlarına bağlıdır. Çoğu müzisyen için pratik sonuç basittir: bağlan düğmesine tıklayın, MIDI girişini seçin, testi çalıştırın ve bittiğinde sekmeyi kapatın.',
    },
    {
      type: 'list',
      items: [
        'Hiçbir MIDI olay verisi harici bir sunucuya gönderilmez.',
        'Test aracı SysEx erişimi gerektirmez, bu da izin kapsamını daha dar tutar.',
        'Tarayıcı tarafından gösterilen cihaz adları donanım modellerini tanımlayabilir, bu nedenle ekran görüntüleri dikkatli paylaşılmalıdır.',
        'Chrome ve Edge genellikle en iyi Web MIDI desteğini sunar; Safari ve Firefox desteği platforma bağlı olarak sınırlı olabilir veya hiç olmayabilir.',
        'Ürün yazılımı güncellemeleri, derin kontrolcü düzenlemesi, MPE analizi, SysEx dökümleri veya satıcıya özgü tanılamalar için yerel araçlar hâlâ gerekli olabilir.',
      ],
    },
    {
      type: 'card',
      title: 'Bu araç ne zaman yeterlidir',
      html: 'İkinci el bir kontrolcü alırken, stüdyo kablosunu kontrol ederken, bir USB MIDI arayüzünü doğrularken, onarılmış bir tuş takımını test ederken veya bir DAW açmadan önce klavyenin mesaj gönderdiğini kanıtlarken, bir WebMIDI klavye test aracı genellikle en hızlı ilk adımdır.',
    },
  ],
  ui: {
    connectButton: 'MIDI Girişini Bağla',
    refreshButton: 'Girişleri yenile',
    clearButton: 'Günlüğü temizle',
    unsupportedTitle: 'Web MIDI kullanılamıyor',
    unsupportedBody: 'Chrome veya Edge gibi Chromium tabanlı bir tarayıcı kullanın ve sayfayı HTTPS veya localhost üzerinden açın.',
    secureContext: 'Web MIDI, tarayıcının MIDI girişlerini sunabilmesi için güvenli bir HTTPS sayfası veya localhost gerektirir.',
    statusIdle: 'MIDI erişimi istemeye hazır',
    statusPermission: 'Tarayıcı MIDI izni bekleniyor',
    statusReady: 'MIDI erişimi verildi',
    statusNoInputs: 'MIDI girişi algılanmadı',
    statusConnected: 'MIDI girişi algılandı',
    statusDisconnected: 'MIDI cihazı bağlantısı kesildi',
    statusError: 'MIDI erişimi başarısız',
    detectedLabel: 'Cihaz algılandı',
    noDevice: 'MIDI cihazı seçilmedi',
    inputLabel: 'Giriş',
    inputIdle: 'yok',
    channelLabel: 'Kanal',
    notesLabel: 'Notalar',
    velocityLabel: 'Hız',
    pitchLabel: 'Pitch',
    modulationLabel: 'Modülasyon',
    lastEventLabel: 'Son olay',
    octaveRangeLabel: 'Görünür aralık',
    velocityCurveTitle: 'Hız eğrisi',
    activeNotesTitle: 'Aktif notalar',
    eventLogTitle: 'MIDI olay günlüğü',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: 'Gelen MIDI mesajlarını görmek için bir tuşa basın veya bir tekerleği hareket ettirin.',
    noteOn: 'Note On',
    noteOff: 'Note Off',
    controlChange: 'Control Change',
    pitchBend: 'Pitch Bend',
    allChannels: 'Tüm kanallar',
  },
};
