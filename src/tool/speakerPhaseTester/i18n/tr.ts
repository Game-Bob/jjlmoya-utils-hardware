import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'hoparlor-faz-test-edici';
const title = 'Hoparlör Faz Test Cihazı';
const description =
  'Tarayıcınızda aynı fazlı ve 180 derece ters çevrilmiş stereo test sinyallerini oynatarak hoparlör polaritesini, kablolama hatalarını ve faz iptalini kontrol edin.';

const faqData = [
  {
    question: 'Hoparlör polaritemin doğru olup olmadığını nasıl anlarım?',
    answer:
      'Normal sinyali, ardından ters çevrilmiş sinyali aynı dinleme konumundan oynatın. Doğru bağlanmış hoparlörlerle, ters çevrilmiş mod daha zayıf, daha boş veya daha az merkezlenmiş duyulmalıdır çünkü sol ve sağ kanallar odada kısmen birbirini iptal eder. Ters çevrilmiş mod daha dolgun veya daha yüksek geliyorsa, bir hoparlör zaten ters polariteyle bağlanmış olabilir.',
  },
  {
    question: 'Bu testte ters çevrilmiş faz ne anlama gelir?',
    answer:
      'Araç her iki kanala aynı sinyali gönderir, ardından ters çevrilmiş modda bir kanalı -1 ile çarpar. Bu, ses dosyası indirmeden dalga biçimini 180 derece döndürür. Fiziksel sonuç, test sinyali için bir hoparlörde artı ve eksiyi tersine çevirmeye eşdeğerdir.',
  },
  {
    question: 'Bu test bir ev sinemasındaki tüm hoparlörleri kontrol edebilir mi?',
    answer:
      'Bir stereo çifti veya daha büyük bir sistemin ön sol ve sağ hoparlörlerini kontrol etmek için en iyisidir. Tam surround sistemler için, çiftleri teker teker test edin ve sonucu AV alıcınızın kanal testi, mesafe kalibrasyonu ve varsa bir SPL veya ölçüm mikrofonuyla birleştirin.',
  },
  {
    question: 'Pembe gürültü mü yoksa sinüs tonu mu kullanmalıyım?',
    answer:
      'Pembe gürültü, geniş bir frekans aralığını kapsadığı ve iptali belirgin hale getirdiği için polarite kontrolleri için genellikle daha kolaydır. Sinüs tonu belirli bir frekansa odaklanmaya yardımcı olabilir, ancak oda modları tek bir tonu yanıltıcı hale getirebilir.',
  },
  {
    question: 'Hoparlörler ve kulaklıklar için güvenli mi?',
    answer:
      'Evet, orta seviyelerde. Düşük başlayın, maksimum amfi kazancından kaçının ve kulaklıklar, küçük dizüstü bilgisayar hoparlörleri veya bilinmeyen hoparlörler üzerinden sürekli tonları yüksek sesle çalmayın. Bozulma veya mekanik zorlanma duyarsanız hemen durdurun.',
  },
];

const howToData = [
  {
    name: 'Dinleme konumuna yerleşin',
    text: 'Normalde dinlediğiniz yere oturun, böylece duyduğunuz akustik iptal gerçek oda ve hoparlör yerleşimiyle eşleşir.',
  },
  {
    name: 'Normal sinyali oynatın',
    text: 'Aynı Fazda Oynat düğmesine basın ve merkez görüntüsünü, ses yüksekliğini ve tonal gövdeyi not edin.',
  },
  {
    name: 'Ters çevrilmiş sinyali oynatın',
    text: 'Faz Dışı Oynat düğmesine basın. Doğru bağlanmış hoparlörler genellikle daha dağınık, boş veya sessiz duyulmalıdır.',
  },
  {
    name: 'Sonuç ters çıktıysa kablolamayı inceleyin',
    text: 'Ters çevrilmiş mod normalden daha güçlü geliyorsa, bir hoparlördeki artı ve eksi bağlantıları, amfi bağlantı noktalarını, muz fişleri, duvar plakalarını ve adaptörleri kontrol edin.',
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
  inLanguage: 'tr',
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
    { type: 'title', text: 'Çevrimiçi Hoparlör Faz ve Polarite Testi', level: 2 },
    {
      type: 'paragraph',
      html: 'Bu hoparlör faz test cihazı, normal bir stereo sinyali, bir kanalın <strong>180 derece</strong> ters çevrildiği bir versiyonla karşılaştırır. Pratik amaç basittir: bir çiftteki iki hoparlörün gerektiğinde birlikte hareket edip etmediğini doğrulamak. Sol ve sağ hoparlörler aynı polariteyle bağlandığında, bas ve orta frekans enerjisi aralarında pekişir ve merkez görüntüsü sabit hissedilir. Bir hoparlör ters bağlandığında, koniler aynı sinyal için zıt yönlerde hareket eder, bu da vokallerin gövdesini kaybetmesine, basların kaybolmasına ve stereo sahnenin garip şekilde geniş veya boş hissettirmesine neden olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Test tarayıcıda yerel olarak oluşturulur. Ağır bir ses dosyası akışı yapmaz. Normal modda, her iki kanal aynı pembe gürültüyü veya sinüs tonunu alır. Ters çevrilmiş modda, bir kanal <code>-1</code> ile çarpılır, bu da matematiksel olarak ters çevrilmiş bir dalga biçimi oluşturur. Gerçek kablolamanız doğruysa, bu yapay ters çevirme belirgin bir iptal yaratmalıdır. Fiziksel kablolamanız zaten ters ise, ters çevrilmiş düğme hatayı kısmen düzeltebilir, bu nedenle normal düğmeden daha yüksek, daha dolgun veya daha merkezlenmiş duyulabilir.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı yorumlama',
      badge: 'Temel kural',
      html: '<p>Eğer <strong>Faz Dışı</strong>, <strong>Aynı Fazda</strong> moduna göre daha ince, uzak, boş veya sessiz geliyorsa, sol/sağ çiftiniz muhtemelen doğru bağlanmıştır. Faz Dışı daha dolgun veya daha yüksek geliyorsa, bir hoparlördeki kırmızı ve siyah bağlantıları, amfiyi, muz fişleri, duvar plakalarını, araç kablo tesisatını veya zincirdeki herhangi bir adaptörü kontrol edin.</p>',
    },
    {
      type: 'table',
      headers: ['Ne duyuyorsunuz', 'Olası anlamı', 'Sonraki adım'],
      rows: [
        ['Normal dolgun, ters çevrilmiş boş', 'İki hoparlör muhtemelen eşleşen polariteyle bağlanmış.', 'Kablolamayı olduğu gibi bırakın ve yerleşim veya kalibrasyonla devam edin.'],
        ['Ters çevrilmiş normalden daha dolgun', 'Bir hoparlör fiziksel olarak ters bağlanmış olabilir.', 'Sadece çiftin bir tarafındaki artı ve eksi bağlantıları kontrol edin.'],
        ['Her iki mod neredeyse aynı geliyor', 'Hoparlörler çok uzak olabilir, oda yansımaları baskındır veya çıkış mono olabilir.', 'Dinleme koltuğuna geçin, mono işlemeyi devre dışı bırakın ve pembe gürültüyü deneyin.'],
        ['Her iki mod da basta zayıf geliyor', 'Oda iptali, subwoofer fazı, crossover veya yerleşim daha büyük sorun olabilir.', 'Bir bas taraması yapın ve subwoofer polaritesini ayrıca test edin.'],
      ],
    },
    { type: 'title', text: 'Ters Hoparlör Polaritesi Neden Yanlış Duyulur', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir hoparlör elektrik dalga biçimini koni hareketine dönüştürür. Pozitif bir basınç dalgası için, iki eş hoparlör genellikle aynı anda havayı aynı yöne itmelidir. Bir hoparlörün artı ve eksi kabloları ters bağlanmışsa, o hoparlör aynı sinyal için diğeri dışa doğru hareket ederken içe doğru hareket eder. Bir stereo çiftte bu, sesi her yerde daha sessiz yapmaz; oda, hoparlör aralığı, dalga boyu ve dinleme konumu iptalin en güçlü olduğu yeri belirler. En belirgin belirtiler genellikle azalmış bas, zayıf bir hayali merkez ve hoparlörler arasındaki boşluktan kopmuş gibi hissedilen vokallerdir.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Her iki hoparlör aynı mono sinyali çaldığında ana vokal ve diyaloglar merkeze yakın sabitlenmelidir.',
        'Davul kick, bas gitar ve düşük piyano notaları hafif duyulmak yerine gövdeye sahip olmalıdır.',
        'Kaynak mono olduğunda stereo görüntü yapay olarak geniş hissettirmemelidir.',
        'Başı hafifçe hareket ettirmek merkez görüntüsünün tamamen çökmesine neden olmamalıdır.',
        'Doğru bağlanmış bir çift, ters çevrilmiş testi normalden daha az doğal duyurmalıdır.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polarite', definition: 'Bir hoparlör sürücüsünü besleyen elektrik sinyalinin pozitif veya negatif yönelimi.' },
        { term: 'Faz', definition: 'İki dalga biçimi arasındaki zaman ilişkisi, genellikle bir döngü boyunca derece cinsinden tanımlanır.' },
        { term: '180 derece ters çevirme', definition: 'Dikey olarak ters çevrilmiş bir dalga biçimi, böylece pozitif basınç aynı anda negatif basınç haline gelir.' },
        { term: 'İptal', definition: 'İki benzer dalga biçimi zıt polarite veya zamanla geldiğinde ses seviyesinde azalma.' },
        { term: 'Hayali merkez', definition: 'Aynı ses sol ve sağ hoparlörlere eşit olarak ulaştığında oluşan görünür merkez görüntüsü.' },
      ],
    },
    {
      type: 'tip',
      title: 'Bir hoparlörün yanından test yapmayın',
      html: 'Normal dinleme konumunda oturun. Faz iptali mekansaldır: sol hoparlörden yarım metre uzakta duyulan bir sonuç, koltuktaki, stüdyo sandalyesindeki veya sürücü koltuğundaki sonuçtan tamamen farklı olabilir.',
    },
    { type: 'title', text: 'Polarite Kontrolleri İçin Pembe Gürültü ve Sinüs Tonu Karşılaştırması', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Pembe gürültü',
          description: 'Beyaz gürültüye göre alt oktavlarda daha fazla enerjiye sahip geniş bant gürültü. Genel tonal gövdeyi, merkez görüntüsünü ve iptali kulakla değerlendirmeyi kolaylaştırır.',
          highlight: true,
          points: ['Hızlı polarite kontrolleri için en iyi ilk seçim.', 'Tek bir oda modunun baskın olma olasılığı daha düşüktür.', 'Ev sineması, stüdyo monitörleri ve araç ses sistemleri için kullanışlıdır.'],
        },
        {
          title: 'Sinüs tonu',
          description: 'Seçilen bir frekansta iptali ortaya çıkarabilen ancak oda tepe ve çukurlarını da abartabilen tek frekanslı bir ton.',
          points: ['Belirli bir crossover veya bas sorununu araştırırken kullanışlıdır.', 'Odanın bu frekansta güçlü bir çukuru varsa yanıltıcı olabilir.', 'Saf tonlar yorucu hale geldiğinden sesi mütevazı tutun.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Hızlı bir polarite kontrolü için pembe gürültüyle başlayın. Pembe gürültü enerjiyi spektruma yayar, böylece bir oda çukurunda olabilecek tek bir frekansı değerlendirmek yerine hoparlör çiftini bir sistem olarak değerlendirirsiniz. Sinüs tonu kontrolünü yalnızca 300 Hz civarında bir vokal aralığı iptali veya 80 Hz civarında bir bas geçiş sorunu gibi bilinen bir sorun bandına odaklanmak istediğinizde kullanın. Başınızı birkaç santimetre hareket ettirdiğinizde sinüs sonucu dramatik şekilde değişiyorsa, oda bu frekansı güçlü şekilde etkiliyordur.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Bir kanala uygulanan matematiksel ters çevirme', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Ters çevrilmiş kanal için kullanılan kazanç çarpanı', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Test sinyali için gereken ses indirmesi', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Ev Sineması ve Stüdyo Monitörü Kontrol Listesi', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Ev sineması ön hoparlörleri',
      html: 'Normal ve ters çevrilmiş düğmelerini yalnızca aktif ön sol ve sağ hoparlörlerle kullanın. Önce ham kablolamayı izole etmek istiyorsanız upmixer\'ları, sanal surround\'u, gece modunu, diyalog geliştirmeyi ve oda düzeltmeyi devre dışı bırakın. Polariteyi onayladıktan sonra kalibrasyonu tekrar etkinleştirin ve diyaloğun merkezli kaldığını doğrulayın.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Stüdyo monitörleri',
      html: 'Tarayıcı sinyalini DAW\'ınızın kullandığı aynı arabirim çıkışları üzerinden gönderin. Her iki dengeli kablonun tutarlı şekilde bağlandığını ve monitör kontrolcü polarite anahtarlarının etkin olmadığını kontrol edin. Ters çevrilmiş bir monitör, miks sırasında mono uyumluluk kararlarını güvenilmez hale getirebilir.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Araç ses sistemi',
      html: 'Araç kabinleri şiddetli yansımalar ve koltuk asimetrisi oluşturur, bu nedenle sürücü koltuğundan dinleyin ve gerekirse yolcu koltuğundan tekrarlayın. Fabrika kablo demeti adaptörleri, kapı hoparlörü değişimleri ve amfi kurulumları, artı ve eksi kabloların ters bağlanabileceği yaygın yerlerdir.',
    },
    {
      type: 'proscons',
      title: 'Tarayıcı faz testinin güçlü yönleri ve sınırlamaları',
      items: [
        { pro: 'Yazılım yüklemeden veya ses dosyası indirmeden anında kontrol.', con: 'Sistemi incelemeden hangi fiziksel kablonun yanlış olduğunu belirleyemez.' },
        { pro: 'Stereo çift, kulaklık, yakın alan monitörleri ve hızlı kurulum kontrolleri için iyi çalışır.', con: 'Oda akustiği bazı dinleme koltuklarında etkiyi gizleyebilir veya abartabilir.' },
        { pro: 'Pembe gürültü, geniş bant iptalinin tek bir test tonundan daha kolay duyulmasını sağlar.', con: 'Çok hoparlörlü surround sistemler hala kanal kanal doğrulama gerektirir.' },
      ],
    },
    { type: 'title', text: 'Başarısız Bir Polarite Testi Nasıl Düzeltilir', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Hoparlör kablolarını veya muz fişleri değiştirmeden önce amfiyi kapatın.',
        'Çiftten bir hoparlör seçin ve amfiden hoparlöre kırmızıdan kırmızıya ve siyahtan siyaha izleyin.',
        'Amfi ve hoparlör arasındaki duvar plakalarını, yaylı terminalleri, adaptörleri, speakON konektörlerini veya araç kablo tesisatını inceleyin.',
        'Hoparlör kablosunda bir çizgi, çıkıntı, baskılı metin veya bakır/gümüş taraf varsa, her iki uçta artı için aynı iletkeni kullanın.',
        'Bir tarafı değiştirdikten sonra, dinleme konumundan normal ve ters çevrilmiş modları tekrar çalıştırın.',
        'Sonuç hala belirsizse, hoparlörleri geçici olarak birbirine yaklaştırın ve düşük ses seviyesinde tekrarlayın.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Subwoofer\'lar ayrı bir faz kontrolü gerektirir',
      badge: 'Bas sistemleri',
      html: '<p>Bu araç bir sol/sağ çifti karşılaştırır. Bir subwoofer crossover\'ı elektriksel olarak doğru ancak mesafe, DSP gecikmesi, crossover eğimi ve yerleşim zamanlamayı kaydırdığı için akustik olarak faz dışı olabilir. Bu testi ana çift için kullanın, ardından subwoofer geçişi için bir crossover taraması veya alıcı kalibrasyonu kullanın.</p>',
    },
    {
      type: 'message',
      title: 'Pratik dinleme kuralı',
      ariaLabel: 'Faz testi için pratik dinleme kuralı',
      html: 'Gerçek kurulumlar için doğru ayar, mono materyali gerçek dinleme konumunda odaklı, dolgun ve sabit duyurandır. Ters çevrilmiş mod bir tanısal karşıtlıktır, bir dinleme modu değildir.',
    },
    {
      type: 'summary',
      title: 'Hoparlör polarite teşhis özeti',
      items: [
        'Hoparlör çifti doğru bağlandığında normal, ters çevrilmişten daha güçlü ve merkezli duyulmalıdır.',
        'Ters çevrilmiş modun daha yüksek duyulması, bir fiziksel hoparlör bağlantısının ters olduğuna dair güçlü bir ipucudur.',
        'Pembe gürültü, yalnızca bir oda frekansını değerlendirme olasılığını azalttığı için en iyi ilk sinyaldir.',
        'Sinüs tonları hedefli sorun giderme için kullanışlıdır ancak oda modları tarafından baskılanabilir.',
        'Özellikle kulaklık veya yüksek güçlü amfilerde, mod değiştirmeden önce her zaman sesi kısın.',
      ],
    },
  ],
  ui: {
    normal: 'Aynı Fazda',
    inverted: 'Ters Çevrilmiş',
    stop: 'Durdur',
    pause: 'Duraklat',
    volume: 'Çıkış seviyesi',
    noiseColor: 'Test sinyali',
    pinkNoise: 'Pembe gürültü',
    sineTone: 'Sinüs tonu',
    frequency: 'Ton frekansı',
    statusReady: 'Hazır',
    statusNormal: 'Aynı fazda',
    statusInverted: 'Ters çevrilmiş',
    instruction:
      'Ters çevrilmiş daha ince duyulmalı. Daha yüksekse kablolamayı kontrol edin.',
    channelLabel: 'Hoparlör faz test cihazı',
    leftChannel: 'Sol kanal',
    rightChannel: 'Sağ kanal',
    leftShort: 'S',
    rightShort: 'Sğ',
    polarityNormal: '0° aynı fazlı',
    polarityInverted: '180° ters çevrilmiş',
    safety: 'Düşük başlayın. Polarite testleri amfiler, stüdyo monitörleri, araç ses sistemleri ve kulaklıklarla yüksek sese ulaşabilir.',
  },
};
