import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-ghosting-testi';
const title = 'Monitor Ghosting Testi';
const description =
  'Monitor ghosting, hareket bulanikligi, overdrive izleri ve piksel yanit davranisini hareketli cubuklar, metin ve tam ekran hareket desenleriyle test edin.';

const faqData = [
  {
    question: 'Monitor ghosting nedir?',
    answer:
      'Monitor ghosting, pikseller yeterince hizli gecis yapamadiginda hareketli nesneleri takip eden gorunur bir izdir. Yavas LCD panellerde, kotu ayarlanmis overdrive modlarinda ve optimum yenileme hizinin altinda calisan ekranlarda yaygindir.',
  },
  {
    question: 'Bu test tam yanit suresini olcebilir mi?',
    answer:
      'Bir tarayici testi, takip kamerasi veya fotodiyot gibi laboratuvar ekipmanlarinin yerini alamaz, ancak gorunur hareket artefaktlarini ortaya cikarabilir, monitor ayarlarini karsilastirabilir ve en az bulanik overdrive modunu secmenize yardimci olabilir.',
  },
  {
    question: 'Overdrive neden bazen parlak izler olusturur?',
    answer:
      'Overdrive, gecisleri hizlandirmak icin pikselleri daha fazla zorlar. Hedef tonu asarsa, ters ghosting gorebilirsiniz: hareketli nesnelerin arkasinda parlak veya renkli bir hale.',
  },
  {
    question: 'Koyu mu yoksa acik arka planda mi test etmeliyim?',
    answer:
      'Her ikisi de. Bazi paneller koyu-griden gecisleri acik-koyu gecislerden daha fazla bulastirir, bu nedenle arka plani degistirmek tek bir desenin gizleyebilecegi artefaktlari ortaya cikarir.',
  },
];

const howToData = [
  {
    name: 'Hareket hizini ayarlayin',
    text: 'Varsayilan hizin yakininda baslayin, ardindan izler nesneyi gozden kaybetmeden kolayca incelenebilir hale gelene kadar artirin.',
  },
  {
    name: 'Iz gucunu degistirin',
    text: 'Monitor ayarlarini karsilastirirken kaliciligin gorulmesini kolaylastirmak icin iz kontrolunu kullanin.',
  },
  {
    name: 'Birden fazla arka plan test edin',
    text: 'Siyah bulasma, ters ghosting ve overdrive halelerini ortaya cikarmak icin koyu, acik ve izgara arka planlar arasinda gecis yapin.',
  },
  {
    name: 'Overdrive ayarlarini karsilastirin',
    text: 'Monitor OSD\'nizi acin ve Kapali, Normal, Hizli ve Asiri modlari test edin. En net hareket ve en az hale olan modu secin.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: 'Monitor Ghosting Testi: Hareket Bulanikligini ve Piksel Yanitini Kontrol Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitor ghosting, hareketli nesneler arkalarinda gorunur bir iz biraktiginda ortaya cikar. Oyunlarin bulanik gorunmesine, kayan metnin okunmasini zorlastirmasina ve yuksek yenileme hizina sahip bir monitorun beklenenden daha kotu gorunmesine neden olabilir. Bu monitor ghosting testi, yazilim yuklemeden overdrive modlarini, yenileme hizlarini, arka planlari ve hareket hizlarini karsilastirabilmeniz icin hareketli cubuklar, metin ve yuksek kontrastli desenler sunar.',
    },
    {
      type: 'paragraph',
      html: 'Test pratik inceleme icin tasarlanmistir. Laboratuvar duzeyinde griden-griye yanit sureleri iddia etmez, ancak cogu kullanicinin gercekten sahip oldugu soruyu yanitlamaya yardimci olur: <strong>bu ekranda hangi monitor ayari gozume en temiz gorunuyor?</strong>',
    },
    {
      type: 'title',
      text: 'Ghosting Nasil Gorunur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Hareketli nesneyi takip eden koyu bir golge, genellikle siyah bulasma olarak adlandirilir',
        'Nesnenin arkasinda soluk veya renkli bir hale, genellikle asiri overdrive\'dan kaynaklanir',
        'Kenarlarin yumusak gorunmesine neden olan uzun yari saydam bir iz',
        'Nesnenin birden fazla soluk kopyasi, ozellikle yavas piksel yanitli ekranlarda',
        'Koyu, acik ve izgara arka planlar arasinda esit olmayan netlik',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Hareket Bulanikligi ve Ters Ghosting',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Ne Gorursunuz', 'Yaygin Neden'],
      rows: [
        ['Ghosting', 'Daha koyu veya soluk bir kopya nesneyi takip eder', 'Piksel yaniti hareket hizi icin cok yavas'],
        ['Hareket bulanikligi', 'Tum hareketli nesne yumusak gorunur', 'Sample-and-hold bulanikligi, dusuk yenileme hizi veya goz takip bulanikligi'],
        ['Ters ghosting', 'Parlak hale veya renkli asma izleri', 'Overdrive ayari cok agresif'],
        ['Siyah bulasma', 'Koyu sahneler agir golgeler birakir', 'VA panel koyu gecisleri yavastir'],
        ['Takilma', 'Hareket akmak yerine sicrar', 'Frame pacing, dusuk FPS veya tarayici/sistem yuku'],
      ],
    },
    {
      type: 'title',
      text: 'Pratik Bir Tani Is Akisi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Monitorunuzu dogal cozunurlugune ve en yuksek kararli yenileme hizina ayarlayarak baslayin. 144Hz, 165Hz, 240Hz veya 360Hz bir monitorunuz varsa, hareket netligini degerlendirmeden once isletim sisteminin gercekten bu modu kullandigini dogrulayin. Testi tam ekranda acin, netlik cubuklari hedefini secin ve hareketli nesnenin arka kenarini izleyin. Arka kenar, hayalet izlerin, koyu bulasmalarin ve parlak overdrive halelerinin karsilastirilmasi en kolay olan yerdir.',
    },
    {
      type: 'list',
      items: [
        'Siyah bulasmayi ve yavas koyu gecisleri ortaya cikarmak icin koyu arka plan kullanin',
        'Renkli overdrive halelerini ortaya cikarmak icin acik arka plan kullanin',
        'Kenar netligini yuksek kontrastli referans cizgilerine karsi incelemek icin izgara arka plan kullanin',
        'Gercek sorununuz bulanik kaydirma veya hareket halindeki metnin okunmasinin zor olmasiysa metin hedefini kullanin',
        'Bir monitoru degerlendirmeden once tam ekran kullanin, cunku tarayici cercevesi ve olcekleme hareket artefaktlarindan dikkati dagitabilir',
        'Hizi ancak nesneyi rahatca takip edebildikten sonra artirin',
        'Neyin degistigini bilmek icin her seferinde bir monitor ayarini karsilastirin',
      ],
    },
    {
      type: 'title',
      text: 'Monitorunuz Icin En Iyi Overdrive Ayarini Secme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cogu oyuncu monitoru, Kapali, Normal, Hizli, Daha Hizli, Asiri, Yanit Suresi veya Trace Free adi verilen bir overdrive ayari icerir. En hizli secenek her zaman en iyisi degildir. Orta duzey bir ayar genellikle en iyi dengeyi sunar: Kapali\'dan daha az bulaniklik, ancak Asiri\'dan daha az hale.',
    },
    {
      type: 'table',
      headers: ['Overdrive Modu', 'Beklenen Sonuc', 'Oneri'],
      rows: [
        ['Kapali', 'En az asma, ancak daha fazla bulaniklik', 'Karsilastirma icin kullanisli referans'],
        ['Normal', 'Orta duzey bulaniklik azaltma', 'Genellikle gunluk kullanim icin en iyisi'],
        ['Hizli', 'Biraz hale riskiyle daha keskin hareket', 'Izler temiz kalirsa iyi'],
        ['Asiri', 'En dusuk yanit suresi iddiasi, en yuksek asma riski', 'Parlak ters izler gorunurse kacinin'],
        ['Adaptif/Degisken', 'Davranis yenileme hiziyla degisir', 'Gerçekten kullandiginiz FPS araliginda tekrar test edin'],
      ],
    },
    {
      type: 'title',
      text: 'Test Kotu Gorundugunde Ne Degistirilmeli',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Ne Gorursunuz', 'Olasi Neden', 'Ne Denemeli'],
      rows: [
        ['Hedefin arkasinda uzun koyu iz', 'Yavas koyu piksel gecisleri veya zayif overdrive', 'Daha guclu bir overdrive modu deneyin, koyu ve izgara arka planda tekrar test edin'],
        ['Hedefin arkasinda parlak hale veya renkli ana hat', 'Overdrive asmasi veya ters ghosting', 'Overdrive\'i bir kademe azaltin ve gercek yenileme hizinizda karsilastirin'],
        ['Hareket bulanik yerine sicramali gorunuyor', 'Frame pacing, tarayici yuku veya yenileme hizi uyusmazligi', 'Agir uygulamalari kapatin, tam ekrani etkinlestirin, isletim sistemi yenileme hizini dogrulayin'],
        ['Metin hareket ederken okunmaz hale geliyor', 'Sample-and-hold bulanikligi, dusuk yenileme hizi veya yavas yanit', 'Yenileme hizini artirin, metin desenini test edin, overdrive modlarini karsilastirin'],
        ['FPS degistiginde artefaktlar degisiyor', 'VRR veya adaptif overdrive davranisi', 'Gerçekten oynadiginiz veya calistiginiz FPS araliginda tekrar test edin'],
      ],
    },
    {
      type: 'title',
      text: 'Yenileme Hizi Neden Onemlidir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Daha yuksek yenileme hizlari, her karenin gorunur kalma suresini azaltir, bu da hareketin daha net gorunmesini saglayabilir. Ancak, yenileme hizi tek basina ghosting\'i ortadan kaldirmaz. Yavas piksel gecisli bir 240Hz monitor hala bulasabilirken, iyi ayarlanmis bir 144Hz panel, kotu ayarlanmis daha hizli bir panelden daha temiz gorunebilir.',
    },
    {
      type: 'table',
      headers: ['Yenileme Hizi', 'Kare Suresi', 'Ne Beklenmeli'],
      rows: [
        ['60Hz', '16,7 ms', 'Sample-and-hold bulanikligini ve daha yavas hareketi gormek kolay'],
        ['120Hz', '8,3 ms', 'Cok daha akici, ancak piksel yaniti hala onemli'],
        ['144Hz', '6,9 ms', 'Hareket netligi icin yaygin oyun referansi'],
        ['240Hz', '4,2 ms', 'Yanit ayari iyiyse cok akici'],
        ['360Hz', '2,8 ms', 'Zorlu: kotu overdrive ayari belirgin hale gelir'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Oyun ve Gercek Dunya Testi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Degisken yenileme hizi, bir monitorun davranisini degistirebilir cunku bazi ekranlar farkli yenileme hizlarinda farkli overdrive ayari kullanir. Sorununuz yalnizca oyunlarda ortaya cikiyorsa, yalnizca maksimum masaustu yenileme hizinda test etmeyin. Gerçekten oynadiginiz FPS araliginda tekrar test edin, ozellikle 60 FPS, 90 FPS, 120 FPS civarinda ve kullandiginiz herhangi bir kare hizi sinirinda.',
    },
    {
      type: 'list',
      items: [
        'Dusuk FPS\'de ghosting daha kotuyse, monitorun degisken overdrive ayari zayif olabilir',
        'Haleler yalnizca yuksek yenileme hizlarinda gorunuyorsa, overdrive modu cok agresif olabilir',
        'Iz kisa kalirken hareket takiliyorsa, sorun muhtemelen piksel yanitindan ziyade frame pacing\'dir',
        'Tam ekran pencereli moddan farkli gorunuyorsa, tarayici olceklemesini, isletim sistemi olceklemesini ve birlestirici davranisini kontrol edin',
      ],
    },
    {
      type: 'title',
      text: 'Kotu Sonuclarda Sorun Giderme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ekran kablonuzun hedef yenileme hizini destekledigini dogrulayin',
        'Normal overdrive\'i karsilastirirken hareket yumusatmayi, Black Frame Insertion\'i veya MPRT modlarini devre disi birakin',
        'Monitoru dogal cozunurlugune gecirdikten sonra tekrar test edin',
        'Hareket tutarsiz gorunuyorsa tam ekran kullanin veya tarayici yaklastirmasini azaltin',
        'Animasyon takiliyorsa agir arka plan uygulamalarini kapatin',
        'GPU kontrol paneli yenileme hizi ayarlarini degistirdikten sonra ayni deseni test edin',
        'Monitor reklam edilen yenileme hizina ulasamiyorsa baska bir kablo veya port deneyin',
        'Ghosting masaustu ve oyunlar arasinda degistiginde VRR acik ve kapaliyken tekrar test edin',
      ],
    },
    {
      type: 'title',
      text: 'Cevrimici Ghosting Testinin Sinirlamalari',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tarayici tabanli bir ghosting testi, tarayici animasyon zamanlamasina, GPU yukune, isletim sistemi bilesimine ve ekran yapilandirmaniza baglidir. Gorsel karsilastirma icin mukemmeldir, ancak kesin yanit suresi olcumleri, takip kameralari, fotodiyotlar veya osiloskop tabanli yontemler gibi ozel ekipman gerektirir. Bu testi, ayarlari secmek ve belirgin artefaktlari tespit etmek icin kullanin, ureticinin yanit suresi iddialarini sertifikalandirmak icin degil.',
    },
  ],
  ui: {
    badge: 'Hareket Netligi',
    speedLabel: 'Hareket hizi',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Iz gucu',
    backgroundLabel: 'Arka plan',
    backgroundDark: 'Koyu',
    backgroundLight: 'Acik',
    backgroundGrid: 'Izgara',
    patternLabel: 'Test hedefi',
    patternBars: 'Netlik cubuklari',
    patternText: 'Metin blogu',
    patternUfo: 'UFO',
    pursuitLabel: 'Takip kilavuzu',
    pursuitOn: 'Acik',
    pursuitOff: 'Kapali',
    fullscreen: 'Tam ekran',
    exitFullscreen: 'Tam ekrandan cik',
    pause: 'Duraklat',
    resume: 'Devam et',
    targetText: 'HAREKET',
    estimatedBlur: 'tahmini bulaniklik',
    frameStep: 'Kare adimi',
    persistence: 'Kalicilik',
    sampleCount: 'Iz ornekleri',
    instructions: 'Hiz, iz gucu, arka plan, tam ekran modu ve monitor overdrive ayarlarini degistirirken hareketli hedefin arka kenarini izleyin.',
    reset: 'Sifirla',
  },
};
