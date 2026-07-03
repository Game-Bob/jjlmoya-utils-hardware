import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseScrollTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fare-tekerlegi-testi';
const title = 'Fare Tekerleği Testi';
const description = 'Fare tekerleği atlamalarını, ters sıçramaları, tutarsız kaydırma yönünü ve zayıf kodlayıcı sinyallerini yerel tarayıcı tabanlı bir fare tekerleği testi ile teşhis edin.';

const faqData = [
  {
    question: 'Fare tekerleği testi neyi tespit eder?',
    answer: 'Bir fare tekerleği testi, tekerlek olaylarını kaydeder ve kararsız yön değişikliklerini, zayıf küçük deltaları ve tutarsız kaydırmayı arar. Bu belirtiler genellikle tekerlek kodlayıcısı kirli, aşınmış, hizasız veya elektronik olarak gürültülü olduğunda ortaya çıkar.',
  },
  {
    question: 'Ters kaydırma sıçraması nedir?',
    answer: 'Ters bir sıçrama, bir yönde kaydırdığınızda ancak bilgisayarın kısa bir süre ters yönde bir olay almasıyla oluşur. Sabit kaydırma sırasında tekrarlanıyorsa, kodlayıcı geri sekmesi veya kirlenmenin güçlü bir işaretidir.',
  },
  {
    question: 'Bu test dokunmatik yüzeylerle çalışır mı?',
    answer: 'Evet, ancak sonuç fiziksel fare tekerlekleri için en anlamlıdır. Dokunmatik yüzeyler ve yumuşak kaydırma tekerlekleri birçok küçük delta oluşturur, bu nedenle hassasiyet kontrolü kasıtlı ince hareketi şüpheli titreşimden ayırmaya yardımcı olur.',
  },
  {
    question: 'Test fare verilerimi yüklüyor mu?',
    answer: 'Hayır. Hesaplama tarayıcınızda yerel olarak çalışır. Araç yalnızca imleciniz yakalama alanı içindeyken tekerlek olaylarını kullanır.',
  },
];

const howToData = [
  {
    name: 'İmleci yakalama panelinin üzerine yerleştirin',
    text: 'İmleci kaydırma laboratuvarı alanına taşıyın, böylece sayfa çevredeki belgeyi hareket ettirmeden tekerlek olaylarını yakalayabilsin.',
  },
  {
    name: 'Tek yönde sabit şekilde kaydırın',
    text: 'Her seferinde bir yönü test edin: birkaç tıklama boyunca yavaşça yukarı kaydırın, sıfırlayın veya duraklatın, ardından aşağı yönü ayrı olarak test edin. Hızlı kasıtlı yön değişiklikleri yanlış ters sıçrama okumaları oluşturabilir.',
  },
  {
    name: 'Ters sıçramalara dikkat edin',
    text: 'Parmağınız hala bir yönde hareket ederken ters dönüş sayacı artıyorsa, deseni doğrulamak için aynı hareketi tekrarlayın.',
  },
  {
    name: 'Hassasiyeti ayarlayın',
    text: 'Yumuşak dokunmatik yüzeyler için hassasiyeti artırın veya katı mekanik tekerlek testleri için azaltın. Kararlılık puanı hemen güncellenir.',
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

export const content: ToolLocaleContent<MouseScrollTestUI> = {
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
      text: 'Fare Tekerleği Testi: Tekerlek Atlamalarını ve Ters Sıçramaları Bulun',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Arızalı bir fare tekerleği nadiren bir anda bozulur. Genellikle küçük belirtilerle başlar: bir tıklama yanlış yönde kaydırır, sayfa siz aşağı kaydırırken yukarı sıçrar veya tekerlek normal hissettirir ancak tarayıcı tutarsız olaylar alır. Bu fare tekerleği testi, tarayıcıya ulaşan sinyali kaydeder ve tanı için önemli olan desenleri vurgular.',
    },
    {
      type: 'paragraph',
      html: 'Amaç bir sayfanın ne kadar hareket ettiğini ölçmek değildir. Yararlı sinyal <strong>yön tutarlılığıdır</strong>. Mekanik bir tekerleği sabit şekilde aşağı doğru döndürdüğünüzde, olay akışı o yönde kalmalıdır. Dar bir zaman penceresi içindeki kısa ters yön olayları şüphelidir çünkü kirli veya aşınmış kaydırma kodlayıcılarının tekerlek hareketini yanlış okuma biçimiyle eşleşir.',
    },
    {
      type: 'title',
      text: 'Aracın Ölçtükleri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Test panelinde yakalanan toplam tekerlek tıklaması',
        'Ters sıçramalar: önceki yön hala güncelken oluşan hızlı işaret değişiklikleri',
        'En uzun temiz çalışma: kaç ardışık olayın tutarlı bir yönde kaldığı',
        'Son delta: en son tekerlek olayının ham yönü ve boyutu',
        'Dikey ve yatay aktivite karşılaştırması, eğim tekerlekleri ve dokunmatik yüzeyler için yararlı',
      ],
    },
    {
      type: 'table',
      headers: ['Sinyal', 'Sağlıklı Desen', 'Şüpheli Desen'],
      rows: [
        ['Dikey tekerlek', 'Sabit kaydırma sırasında uzun yukarı veya aşağı olay serileri', 'Parmağınız bir yönü korurken değişen yukarı/aşağı olaylar'],
        ['Yatay eğim', 'Yalnızca eğim veya yatay hareketler kullanırken sol veya sağ olaylar', 'Normal dikey tekerlek kullanımı sırasında beklenmedik yan hareket'],
        ['Küçük deltalar', 'Yumuşak tekerlekler veya dokunmatik yüzeylerde ara sıra küçük değerler', 'Tırtıklı mekanik tekerlekte yüksek oranda küçük kararsız değerler'],
        ['Kararlılık puanı', 'Birkaç kasıtlı geçiş boyunca yüksek kalır', 'Aynı yön testinde ters dönüşler oluştuğu için tekrar tekrar düşer'],
      ],
    },
    {
      type: 'title',
      text: 'Kaydırma Tekerleği Atlamasının Yaygın Nedenleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Çoğu fare tekerleği, dönüşü darbelere dönüştüren bir kodlayıcı kullanır. Toz, oksidasyon, aşınmış kontaklar, gevşek tekerlek aksı, ürün yazılımı filtreleme sorunları veya hasarlı bir kablo bu darbeleri tutarsız hale getirebilir. Kodlayıcı kısaca yanlış fazı bildirdiğinde, tekerlek orijinal yönde hareket etmeye devam etse bile işletim sistemi ters yönde bir tekerlek olayı alabilir.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası Neden', 'Sonraki Kontrol'],
      rows: [
        ['Sayfa aşağı kaydırırken yukarı sıçrıyor', 'Kodlayıcı geri sekmesi veya tekerlek mekanizmasında kir', 'Yavaş bir aşağı geçiş yapın ve ters dönüş sayacını izleyin'],
        ['Yalnızca bir uygulama kötü kaydırıyor', 'Uygulama yumuşatma, yakınlaştırma modu veya özel fare kısayolu', 'Tarayıcıda test edin ve başka bir uygulamayla karşılaştırın'],
        ['Tekerlek hava üfledikten sonra çalışıyor, sonra tekrar arızalanıyor', 'Geçici kalıntı hareketi veya aşınmış kodlayıcı kontakları', 'Birkaç dakika normal kullanımdan sonra tekrarlayın'],
        ['Beklenmedik yatay hareket görünüyor', 'Eğim tekerleği gürültüsü, dokunmatik yüzey hareketi veya sürücü eşlemesi', 'Dikey kaydırma yaparken yatay eksen göstergesini kontrol edin'],
        ['Kablosuz fare düzensiz kaydırıyor', 'Zayıf pil, alıcı mesafesi veya parazit', 'Yeni pil ve alıcı fareye yakın şekilde yeniden test edin'],
      ],
    },
    {
      type: 'title',
      text: 'Güvenilir Şekilde Test Etme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Normal sayfa hareketini önlemek için kaydırmadan önce imleci yakalama panelinin içine yerleştirin',
        'Her seferinde bir yönü test edin: yön değiştirmeden 10-20 tekerlek tıklaması boyunca yavaşça yukarı kaydırın',
        'Sıfırlayın veya duraklatın, ardından aynı tek yönlü geçişi aşağı doğru tekrarlayın',
        'Yukarı ve aşağı arasında hızla geçiş yapmayın, çünkü kasıtlı hızlı yön değişiklikleri ters sıçramalar gibi görünebilir',
        'Ters dönüşler görünürse, tekrarlanabilir olduğunu doğrulamak için sorunlu yönü birkaç kez tekrarlayın',
        'Donanımı yazılımdan ayırmanız gerekiyorsa aynı bilgisayarda başka bir fareyle karşılaştırın',
      ],
    },
    {
      type: 'title',
      text: 'Puanı Yorumlama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kararlılık puanı hızlı bir özettir. Yüksek bir puan, aracın tutarlı yön ve az sayıda küçük belirsiz delta gördüğü anlamına gelir. Düşük bir puan, özellikle dokunmatik yüzeylerde veya yüksek çözünürlüklü yumuşak tekerleklerde farenin bozuk olduğunu otomatik olarak kanıtlamaz, ancak yavaş bir tek yönlü test sırasında tekrarlanan ters sıçramalar gerçek bir tekerlek sorununun güçlü kanıtıdır.',
    },
    {
      type: 'table',
      headers: ['Sonuç', 'Anlamı', 'Önerilen Eylem'],
      rows: [
        ['Ters dönüş yok ve uzun temiz çalışmalar', 'Tekerlek sinyali tutarlı görünüyor', 'Yalnızca belirtiler gerçek kullanımda ortaya çıkarsa test etmeye devam edin'],
        ['Tek bir izole ters dönüş', 'Kazara yön değişikliği veya bir gürültülü olay olabilir', 'Aynı yönü yavaşça tekrarlayın'],
        ['Aynı geçişte birkaç ters dönüş', 'Muhtemelen kodlayıcı geri sekmesi, kir veya tekerlek aşınması', 'Başka bir bilgisayarda tekrar test edin ve sonucu belgeleyin'],
        ['Birçok titreşim olayı ancak ters dönüş yok', 'Hassasiyet bu cihaz türü için çok düşük olabilir', 'Dokunmatik yüzey veya yumuşak kaydırma cihazları için hassasiyeti artırın'],
        ['Dikey tekerlek kullanımı sırasında yatay olaylar', 'Olası eğim tekerleği gürültüsü veya sürücü eşleme gürültüsü', 'Özel fare yazılımını devre dışı bırakın ve yeniden test edin'],
      ],
    },
    {
      type: 'title',
      text: 'Mekanik Tekerlek vs Dokunmatik Yüzey',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tırtıklı bir mekanik tekerlek normalde net yönlü adımlar üretir. Bir dokunmatik yüzey veya serbest dönen tekerlek, işletim sistemi yumuşak kaydırma uyguladığı için birçok küçük delta üretebilir. Bu nedenle bu araç hassasiyet kontrolü içerir: artırmak küçük hareketleri yok sayar ve testin önemli olacak kadar büyük yön değişikliklerine odaklanmasını sağlar.',
    },
    {
      type: 'title',
      text: 'Fareyi Değiştirmeden Önce Denenecekler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sayfaya özgü bir tekerlek işleyiciyi elemek için başka bir tarayıcıda test edin',
        'Tanı sırasında üretici fare yazılımını, kaydırma hızlandırmasını veya makro katmanlarını devre dışı bırakın',
        'Kablosuz fareler için yeni bir pil kullanın ve alıcıyı yaklaştırın',
        'Fare fişten çekili veya kapalıyken tekerleğin etrafını basınçlı hava ile temizleyin',
        'Fare garanti kapsamındaysa, tekrarlanan ters dönüş desenini kanıt olarak kaydedin',
      ],
    },
    {
      type: 'paragraph',
      html: 'Tarayıcı tabanlı testler kodlayıcıyı elektriksel olarak inceleyemez, ancak normal yazılımınızın tam olarak ne aldığını gösterebilir. Tarayıcı, dikkatli bir tek yönlü kaydırma sırasında yanlış yönde tekerlek olayları alıyorsa, diğer uygulamalar da alabilir.',
    },
  ],
  ui: {
    badge: 'Tekerlek Sinyal Laboratuvarı',
    captureTitle: 'Sinyal panelinin içinde kaydırın',
    captureHint: 'Ters sıçramaları ortaya çıkarmak için sabit tek yönlü tekerlek geçişleri kullanın',
    focusLockTitle: 'Bu kaydırma bölgesini etkinleştir',
    focusLockText: 'Bu bölgeye tıklayın ve burada kaydırın. Bu bölge etkinken sayfa hareket etmez.',
    stabilityScore: 'Kararlılık puanı',
    statusIdle: 'Tekerlek tutarlılığını ölçmeye başlamak için panelin üzerinde kaydırın',
    statusClean: 'Tekerlek yönü yakalanan örneklerde kararlı',
    statusWarning: 'Son kaydırma sırasında ters sıçramalar tespit edildi',
    statusMixed: 'Birçok küçük delta tespit edildi; bu cihaz için hassasiyeti ayarlayın',
    directionNote: 'Her seferinde bir yönü test edin. Hızla yukarı ve aşağı geçiş yapmak yanlış ters sıçrama okumaları oluşturabilir.',
    totalTicks: 'Tıklama',
    reversals: 'Ters dönüşler',
    longestRun: 'En iyi çalışma',
    lastDelta: 'Son delta',
    verticalAxis: 'Dikey',
    horizontalAxis: 'Yatay',
    dominantDirection: 'Son yön',
    upward: 'Yukarı',
    downward: 'Aşağı',
    leftward: 'Sol',
    rightward: 'Sağ',
    noDirection: 'Hareket yok',
    noDataValue: '-',
    sensitivityLabel: 'Titreşim hassasiyeti',
    sensitivityUnit: 'delta',
    reset: 'Sıfırla',
    logTitle: 'Tekerlek olay akışı',
    emptyLog: 'Yavaş, sabit tekerlek hareketiyle panelin üzerinde kaydırın.',
    cleanEvent: 'temiz',
    reversalEvent: 'ters sıçrama',
    jitterEvent: 'küçük delta',
  },
};
