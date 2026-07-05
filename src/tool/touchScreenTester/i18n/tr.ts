import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TouchScreenTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dokunmatik-ekran-testi';
const title = 'Dokunmatik Ekran Testi';
const description = 'Tam ekran bir kanvas üzerinde çizim yaparak dokunmatik ekranınızdaki ölü bölgeleri, kaçan dokunuşları, kenar tepkisini, avuç içi girişimini ve telefon veya tabletinizin aynı anda kaç parmağı algılayabildiğini test edin.';

const faqData = [
  {
    question: 'Dokunmatik ekranda ölü bölge testi nasıl yapılır?',
    answer: 'Test aracını cihazda açın, parmağınızı ekran boyunca yavaşça gezdirin ve çizginin kesildiği boş alanları arayın. Kenarlar, klavye bölgesi, köşeler ve sık sık dokunuş kaçıran noktalar için aynı işlemi tekrarlayın.',
  },
  {
    question: 'Çevrimiçi çoklu dokunuş testi nasıl yapabilirim?',
    answer: 'Aynı anda birden fazla parmağınızı kanvas üzerine yerleştirin. Aktif dokunuş sayacı tarayıcının o anda kaç temas aldığını gösterir; tepe sayacı ise oturum boyunca ulaşılan en yüksek eşzamanlı dokunuş sayısını kaydeder.',
  },
  {
    question: 'Bu araç tepkisiz bir dokunmatik ekranı onarabilir mi?',
    answer: 'Hayır. Araç donanım onarımı yapmaz veya sayısallaştırıcıyı yeniden kalibre etmez. Belirtileri belgelemenize yardımcı olur; böylece sorunun ekran koruyucudan mı, kirli camdan mı, yazılım hatasından mı, kılıf baskısından mı yoksa hasarlı dokunmatik donanımdan mı kaynaklandığına karar verebilirsiniz.',
  },
  {
    question: 'Telefonum neden beklediğimden daha az parmak algılıyor?',
    answer: 'Bazı paneller, tarayıcılar, işletim sistemleri, ekran koruyucular, şarj cihazları ve erişilebilirlik ayarları dokunuş temaslarını sınırlayabilir veya filtreleyebilir. Panelin arızalı olduğuna karar vermeden önce kılıfsız, pil gücüyle, camı temizledikten sonra ve başka bir tarayıcıda test etmeyi deneyin.',
  },
];

const howToData = [
  { name: 'Camı temizleyin ve belirgin girişim kaynaklarını ortadan kaldırın', text: 'Ekranı silin, parmaklarınızı kurulayın, gürültülü şarj cihazlarını çıkarın ve testten önce kalın eldivenleri veya iletken aksesuarları çıkarın.' },
  { name: 'Yavaşça yatay ve dikey geçişler yapın', text: 'Ekranı uçtan uca paralel çizgilerle kaplayın. Sağlıklı bir panel kesintisiz, sürekli çizgiler bırakmalıdır.' },
  { name: 'Köşeleri ve hareket bölgelerini kontrol edin', text: 'Çerçeveleri, klavye alanını, bildirim alanını ve gezinme hareket bölgelerini çizin; çünkü bu bölgeler kısmi sayısallaştırıcı arızasını genellikle ilk gösteren yerlerdir.' },
  { name: 'Eşzamanlı dokunuşları ölçün', text: 'İki, üç, dört, beş veya daha fazla parmağınızı kanvas üzerine yerleştirin ve tepe çoklu dokunuş sayacını izleyin.' },
  { name: 'Nihai onay için tam ekrana geçin', text: 'Tam ekran moduna girip testi tekrarlayın; böylece tarayıcı arayüzü üst veya alt dokunuş bölgelerini gizlemez.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<TouchScreenTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Ölü bölge ve çoklu dokunuş için çevrimiçi dokunmatik ekran testi', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir dokunmatik panel, normal uygulama kullanımında kanıtlanması zor şekillerde arızalanabilir. Klavye tuşu yalnızca alt kenara yakınken kaçabilir, bir çizim uygulaması ince dikey bir şeridi atlayabilir veya oyunlar yalnızca başparmak zaten bir kontrole basılıyken ikinci parmağı kaybedebilir. Bu test aracı tüm sayfayı bir çizim yüzeyine dönüştürür; böylece her boşluk, kesik çizgi ve eşzamanlı temas sınırı anında görünür hale gelir.',
    },
    {
      type: 'paragraph',
      html: 'Şu aramalar için kullanın: <strong>dokunmatik ekran testi</strong>, <strong>çevrimiçi çoklu dokunma testi</strong> ve <strong>dokunmatik ekran ölü bölge kontrolü</strong>. Kanvas parmak hareketlerini tarayıcıda yerel olarak kaydeder; çizimleri, dokunuş konumlarını, cihaz tanımlayıcılarını veya tanı sonuçlarını hiçbir yere yüklemez.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '0 kurulum', label: 'Doğrudan tarayıcıda çalışır' },
        { value: 'Canlı', label: 'Aktif dokunuş sayacı' },
        { value: 'Kanvas', label: 'Görsel ölü bölge haritası' },
      ],
    },
    { type: 'title', text: 'Dokunmatik ekran ölü bölgeleri nasıl tespit edilir', level: 3 },
    {
      type: 'paragraph',
      html: 'Ölü bölge, sayısallaştırıcının teması güvenilir şekilde bildirmediği bir alandır. Tamamen boş bir şerit, dokunuşları yok sayan bir köşe veya yalnızca sert basınçla çalışan küçük bir nokta olabilir. Ekran boyunca yavaş, üst üste binen çizgiler çizin. Çizgi aynı yerde sürekli kayboluyorsa, o alan daha fazla test edilmeyi hak eder.',
    },
    {
      type: 'list',
      items: [
        'Geçişler arasında yalnızca küçük bir boşluk bırakarak sol kenardan sağ kenara yatay çizgilerle başlayın.',
        'Yatay testin kaçırabileceği dar sütunları ortaya çıkarmak için üst kenardan alt kenara dikey çizgilerle tekrarlayın.',
        'Kenar elektrotları ve hareket bölgeleri yaygın arıza noktaları olduğundan, ekranın tam sınırını çizin.',
        'Aranın aynı fiziksel konumu takip edip etmediğini görmek için şüpheli alanların etrafında daireler çizin.',
        'Uygulama düzeni sorununu donanım konumu sorunundan ayırmak için cihazı döndürün ve tekrar test edin.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Tekrarlayan boş bir çizgi, atlanan tek bir çizgiden daha anlamlıdır',
      html: '<p>Kısa bir boşluk; parmak kuruysa, çok hızlı hareket ediyorsa veya camdan ayrılıyorsa oluşabilir. Donanımsal bir ölü bölge genellikle aynı fiziksel alanda, farklı çizgi yönlerinde ve ekranı temizledikten sonra tekrar tekrar ortaya çıkar.</p>',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası anlamı', 'Sonraki adım'],
      rows: [
        ['Aynı dikey şeritte çizgi kopmaları', 'Olası sayısallaştırıcı sütun arızası veya ekran koruyucu baloncuğu.', 'Mümkünse koruyucuyu çıkarın, camı temizleyin ve tam ekranda tekrar test edin.'],
        ['Kenarlar dokunuş kaçırıyor ancak orta kısım çalışıyor', 'Kılıf baskısı, hareket reddi veya kenar elektrot sorunu.', 'Kılıfı çıkarın ve yavaş kenar çizimlerini tekrarlayın.'],
        ['Yalnızca hızlı hareketler atlanıyor', 'Tarayıcı olay kısıtlaması, düşük kare hızı veya parmak temasının kalkması.', 'Yavaş hareket edin ve başka bir tarayıcıyla karşılaştırın.'],
        ['Dokunmadan rastgele noktalar beliriyor', 'Hayalet dokunuş, nem, şarj cihazı paraziti veya hasarlı panel.', 'Ekranı kurulayın, şarj cihazını çıkarın, yeniden başlatın ve tekrarlayın.'],
      ],
    },
    { type: 'title', text: 'Çoklu dokunuş desteği nasıl ölçülür', level: 3 },
    {
      type: 'paragraph',
      html: 'Çoklu dokunuş desteği, cihazın aynı anda bildirebildiği bağımsız temas sayısıdır. Bir telefon beş, on veya daha fazla teması izleyebilirken; bazı düşük maliyetli tabletler, kiosklar, eldivenler, uzak masaüstü katmanları veya gömülü tarayıcılar daha az bildirebilir. Aktif sayaç o anda algılanan sayıyı gösterir; tepe sayacı ise son temizlemeden bu yana ulaşılan en yüksek sayıyı saklar.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        { title: 'İki parmak hareketleri', description: 'Yakınlaştırma, iki parmak döndürme, haritalar, resim düzenleyiciler ve erişilebilirlik yakınlaştırması için gereklidir.' },
        { title: 'Üç ila beş dokunuş', description: 'Ritim oyunları, bölünmüş kontroller, çizim uygulamaları, piyano klavyeleri ve tablet yaratıcı iş akışları için kullanışlıdır.' },
        { title: 'On parmak paneller', description: 'Modern telefon ve tabletlerde yaygındır; ancak tarayıcı veya işletim sistemi filtrelemesi sayıyı yine de azaltabilir.' },
      ],
    },
    {
      type: 'tip',
      title: 'Yanlış düşük sayıdan kaçınmanın en iyi yolu',
      html: 'Parmakları tek tek yerleştirin ve bir saniye hareketsiz tutun. Tüm parmakları aynı anda bırakırsanız, bazı işletim sistemleri hareketi avuç içi girişi, yakınlaştırma niyeti veya sistem gezinmesi olarak yorumlayıp temas kümesinin bir kısmını bastırabilir.',
    },
    {
      type: 'proscons',
      title: 'Çevrimiçi test aracı ve yerel tanı uygulaması karşılaştırması',
      items: [
        { pro: 'Hiçbir şey yüklemeden veya geniş cihaz izinleri vermeden anında çalışır.', con: 'Yalnızca tarayıcı ve işletim sistemi tarafından sunulan dokunma olaylarını gösterebilir.' },
        { pro: 'Çizim deseni görünür olduğu için tamirciyle veya alıcıyla paylaşması kolaydır.', con: 'Fabrika kalibrasyon tablolarını veya düşük seviyeli sayısallaştırıcı hata kodlarını okuyamaz.' },
        { pro: 'Tam ekran modu, normal bir sayfaya kıyasla kullanılabilir ekranın daha fazlasını kaplar.', con: 'Sistem çubukları, çentikler ve korumalı hareket bölgeleri bazı pikselleri yine de ayırabilir.' },
      ],
    },
    { type: 'title', text: 'Kaçan dokunuşların yaygın nedenleri', level: 3 },
    {
      type: 'paragraph',
      html: 'Kötü bir dokunuş sonucu her zaman ekranın bozuk olduğu anlamına gelmez. Kapasitif paneller; cam, yapıştırıcı, koruyucu, cilt ve cihaz topraklaması üzerinden sabit bir elektrik alanına dayanır. Bu alanı değiştiren her şey boşluklara, yanlış dokunuşlara veya zayıf çoklu dokunuş takibine neden olabilir. Bu yüzden birkaç koşul altında test etmek önemlidir.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Sayısallaştırıcı', definition: 'Dokunuş koordinatlarını cihaza bildiren şeffaf sensör katmanı.' },
        { term: 'Ölü bölge', definition: 'Dokunuşların algılanmadığı veya yalnızca aralıklı olarak algılandığı fiziksel ekran alanı.' },
        { term: 'Hayalet dokunuş', definition: 'Hiçbir parmak kasıtlı olarak o noktaya dokunmazken cihaz tarafından bildirilen dokunuş olayı.' },
        { term: 'Avuç içi reddi', definition: 'Özellikle tablet ve kalemli cihazlarda geniş veya kazara teması yok sayan yazılım filtrelemesi.' },
        { term: 'Dokunmatik örnekleme hızı', definition: 'Cihazın dokunmatik katmanı ne sıklıkta taradığı. Daha yüksek hızlar çizim ve oyunları daha duyarlı hissettirebilir.' },
      ],
    },
    {
      type: 'table',
      headers: ['Neden', 'Tipik ipucu', 'Hızlı kontrol'],
      rows: [
        ['Ekran koruyucu', 'Ölü bölge baloncuk, çatlak, toz kenarı veya kalın cam sınırını takip eder.', 'Yalnızca güvenli ve değiştirilebilirse koruyucuyu çıkarın veya kaldırın.'],
        ['Nem veya yağ', 'Yağmur, ter veya temizlik spreyi sonrası rastgele sıçramalar, kayan dokunuşlar veya kaçan tıklamalar.', 'Camı ve elleri tamamen kurulayın, ardından tekrar test edin.'],
        ['Şarj cihazı paraziti', 'Hayalet dokunuşlar prize takılıyken olur ve pilde kaybolur.', 'Şarj cihazını çıkarın veya sertifikalı bir adaptör ve kablo kullanın.'],
        ['Kılıf baskısı', 'Dokunuşlar köşelerde veya kavisli kenarlarda başarısız olur.', 'Kılıfı çıkarın ve aynı kenarı tekrar test edin.'],
        ['Donanım hasarı', 'Aynı şerit temizleme, yeniden başlatma ve koruyucu çıkarma sonrası da başarısız olur.', 'Sonucu belgeleyin ve onarım desteğiyle iletişime geçin.'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:gesture-tap-hold',
      title: 'Basınç, dokunuş hassasiyetiyle aynı şey değildir',
      html: 'Çoğu telefon ve tablet dokunmatik ekranı kapasitiftir; bu yüzden daha sert basmak gerekmez. Bir konum yalnızca sıkıca bastığınızda çalışıyorsa, sorun normal dokunmatik ekran davranışından ziyade koruyucu üzerinden zayıf temas, panel hasarı, esnek kablo sorunu veya yazılım filtrelemesi olabilir.',
    },
    { type: 'title', text: 'Kenarları, köşeleri ve klavye bölgelerini test etme', level: 3 },
    {
      type: 'paragraph',
      html: 'Birçok gerçek şikayet yoğun kullanılan alanlarda başlar: klavyenin alt satırı, geri tuşu, gezinme hareketleri, bildirim gölgesi, hızlı ayarlar, oyun başparmak bölgeleri ve çizim kısayolları için kullanılan tablet köşeleri. Üst ve alt alanları değerlendirmeden önce tam ekran modunu kullanın; çünkü tarayıcı kontrolleri aksi halde ekranın bir kısmını gizleyebilir.',
    },
    {
      type: 'list',
      items: [
        'Ekran sınırının bir parmak genişliği içinde bir dikdörtgen çizin.',
        'Kaçan harflerin olduğu klavye satırları üzerinde kısa dikey çizgiler çizin.',
        'Bir başparmağı oyun kontrol konumunda tutun ve temas çakışmasını test etmek için başka bir parmakla çizim yapın.',
        'Topraklama parazitini kontrol etmek için şarj bağlantı noktasının yakınını önce şarjsız, sonra şarjlı olarak test edin.',
        'Kalem kullanılıyorsa, farklı algılama yolları kullanabilecekleri için parmak girişini kalem girişinden ayrı olarak test edin.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tam ekran sonucu değiştirdiğinde',
      html: '<p>Ekran tam ekranda çalışıyor ancak normal tarayıcı görünümünde çalışmıyorsa, donanım muhtemelen tek etken değildir. Adres çubukları, aşağı çekerek yenileme, sistem gezinmesi ve tarayıcı hareket yönetimi, görünüm alanının üst veya alt kısmındaki dokunuşları yakalayabilir.</p>',
    },
    { type: 'title', text: 'Onarım veya garanti sorunu nasıl belgelenir', level: 3 },
    {
      type: 'paragraph',
      html: 'Garanti desteği için tek bir dramatik başarısızlıktan çok tutarlılık önemlidir. Kanvası temizleyin, basit bir ızgara çizin ve aynı fiziksel alan çizmeyi reddettiğinde fotoğraf veya ekran kaydı alın. Telefonun şarjda olup olmadığını, koruyucu takılı olup olmadığını ve sorunun yeniden başlatma sonrası ortaya çıkıp çıkmadığını not edin.',
    },
    {
      type: 'summary',
      title: 'Toplanması faydalı kanıtlar',
      items: [
        'Aynı konumda tekrarlayan boşlukları gösteren temiz bir tam ekran kanvas.',
        'Birkaç parmak dikkatlice yerleştirildiğinde ulaşılan tepe çoklu dokunuş sayısı.',
        'Kılıflı ve kılıfsız, koruyuculu ve koruyucusuz, şarjlı ve şarjsız, eldivenli ve eldivensiz karşılaştırma.',
        'Cihaz modeli, tarayıcı, işletim sistemi sürümü ve sorunun uygulamalarda da olup olmadığı.',
      ],
    },
    {
      type: 'message',
      title: 'Gizlilik notu',
      html: 'Çizimler ve sayaçlar istemci tarafında oluşturulur. Test aracı anında tanı için tasarlanmıştır; hesap tabanlı günlük kaydı, uzaktan onarım veya hassas ekran etkileşim desenlerini yükleme amacı taşımaz.',
    },
    { type: 'title', text: 'Sonuç yorumlama kontrol listesi', level: 3 },
    {
      type: 'table',
      headers: ['Sonuç', 'Yorum', 'Güven düzeyi'],
      rows: [
        ['Her yerde kesintisiz çizgiler', 'Dokunmatik katman mevcut koşullarda muhtemelen sağlıklı.', 'Temel parmak girişi için yüksek.'],
        ['Tekrarlayan tek bir boş şerit', 'Olası fiziksel sayısallaştırıcı hasarı veya koruyucu engeli.', 'Temizleme ve yeniden başlatma sonrası tekrarlıyorsa yüksek.'],
        ['Yalnızca bir tarayıcıda düşük çoklu dokunuş', 'Tarayıcı, gizlilik, web görünümü veya hareket yönetimi sınırlaması.', 'Orta. Başka bir tarayıcıda test edin.'],
        ['Şarjdayken hayalet dokunuşlar', 'Elektriksel parazit, topraklama sorunu veya arızalı şarj cihazı.', 'Fişi çekmek düzeltiyorsa orta ila yüksek.'],
        ['Yalnızca ekran koruyucuyla başarısız', 'Koruyucu kalınlığı, yapıştırıcı boşluğu, çatlak veya kenar kalkması.', 'Çıkarmak alanı düzeltiyorsa yüksek.'],
      ],
    },
    {
      type: 'summary',
      title: 'Hızlı tanı yolu',
      items: [
        'Yavaşça tam bir ızgara çizin.',
        'Tekrarlayan herhangi bir boşluğu daire içine alın.',
        'Kanvası temizleyin ve tam ekranda tekrarlayın.',
        'Mümkün olduğunda kılıf veya koruyucu değişkenlerini ortadan kaldırın.',
        'En yüksek eşzamanlı dokunuş sayısını ölçün.',
        'Donanım arızası ilan etmeden önce başka bir tarayıcı veya uygulamayla karşılaştırın.',
      ],
    },
  ],
  ui: {
    activeTouchesLabel: 'Aktif dokunuş',
    peakTouchesLabel: 'En yüksek çoklu dokunuş',
    coverageLabel: 'Kanvas kapsamı',
    statusReady: 'Ölü bölgeleri ortaya çıkarmak için herhangi bir yere çizin',
    statusDrawing: 'Dokunuş algılandı',
    statusCleared: 'Kanvas temizlendi',
    clearButton: 'Kanvası temizle',
    fullscreenButton: 'Tam ekran',
    exitFullscreenButton: 'Tam ekrandan çık',
    canvasLabel: 'Dokunmatik ekran testi çizim kanvası',
    unsupportedTouch: 'Bu tarayıcıda dokunma olayları kullanılamıyor',
  },
};
