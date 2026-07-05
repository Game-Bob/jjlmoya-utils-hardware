import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'arka-isik-sizmasi-blooming-testi';
const title = 'Arka Işık Sızması ve Blooming Testi';
const description =
  'OLED, Mini LED, IPS, VA, monitörler, dizüstü bilgisayarlar ve TV\'ler için saf siyah tam ekran arka ışık sızması testi ve sürüklenebilir beyaz yerel karartma blooming testi çalıştırın.';

const faqData = [
  {
    question: 'Arka ışık sızmasını çevrimiçi nasıl test ederim?',
    answer:
      'Oda ışıklarını kapatın, ekran parlaklığını maksimuma ayarlayın, ekranı temizleyin, saf siyah testi tam ekranda açın, imlecin kaybolmasını bekleyin ve kenarları ve köşeleri sabit ışık sızıntıları için inceleyin.',
  },
  {
    question: 'Arka ışık sızması ile IPS glow arasındaki fark nedir?',
    answer:
      'Arka ışık sızması genellikle panel basıncı veya kusurlu montajdan kaynaklanan, çerçeve yakınında sabit parlak bir lekedir. IPS glow, özellikle köşelerde, görüş açısı ve göz pozisyonu ile güçlü bir şekilde değişir.',
  },
  {
    question: 'Mini LED TV veya monitörde blooming nasıl görünür?',
    answer:
      'Blooming, siyah bir arka plan üzerindeki parlak bir nesnenin etrafında görünen bir haledir. Yerel karartma bölgesi, nesnenin kendisinden daha büyük bir alanı aydınlattığında ortaya çıkar.',
  },
  {
    question: 'OLED panellerde arka ışık sızması olabilir mi?',
    answer:
      'OLED paneller geleneksel bir arka ışık kullanmaz, bu nedenle LCD tarzı arka ışık sızması göstermemelidir. Ancak yine de siyaha yakın tekdüzelik sorunları, renk tonlaması, dikey bantlanma veya kaynak veya ekran ayarlarından kaynaklanan yükseltilmiş siyahlar gösterebilir.',
  },
  {
    question: 'Işık sızması olan bir monitörü iade etmeli miyim?',
    answer:
      'İade kararları ciddiyete, panel türüne, fiyata ve garanti politikasına bağlıdır. Normal filmler veya oyunlar sırasında görülebilen parlak bir köşe, yalnızca uzun pozlamalı bir fotoğrafta görülebilen hafif bir lekeden daha ciddidir.',
  },
];

const howToData = [
  {
    name: 'Odayı hazırlayın',
    text: 'Lambaları kapatın, perdeleri çekin, ekranı temizleyin ve toz ve yansımaların panel kusuru gibi görünmemesi için gözlerinizin bir dakika adapte olmasına izin verin.',
  },
  {
    name: 'Ekran parlaklığını artırın',
    text: 'Parlaklığı yüzde 100\'e veya incelemek istediğiniz HDR moduna ayarlayın. Test sırasında agresif ortam ışığı sensörlerini devre dışı bırakın.',
  },
  {
    name: 'Siyah testi çalıştırın',
    text: 'Arka ışık sızması modunu başlatın. Sayfa tam ekrana geçer ve tam siyah gösterir. Çerçeveyi, köşeleri ve sabit lekeleri inceleyin.',
  },
  {
    name: 'Blooming testini çalıştırın',
    text: 'Yerel karartma modunu başlatın, ardından beyaz daireyi ekran boyunca sürükleyin. Haleleri, gecikmeli karartmayı, ızgara şekilli bölgeleri ve yükseltilmiş siyahları izleyin.',
  },
  {
    name: 'Temiz bir şekilde çıkın',
    text: 'Yerel tam ekrandan çıkmak için Escape tuşuna basın. Kurulum arayüzü geri döner ve test durumu sıfırlanır.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: 'Çevrimiçi Arka Işık Sızması Testi: Yeni Bir Monitör veya TV\'de Nelere Dikkat Edilmeli',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Çevrimiçi arka ışık sızması testi</strong>, yeni bir monitör, oyun dizüstü bilgisayarı veya televizyonun iade süresi boyunca en kullanışlıdır. Test, tarayıcı tarafından oluşturulan <code>#000000</code> tam ekran alanı gösterir, böylece LCD arka ışığı istenmeyen ışığın tek olası kaynağıdır. Panel, difüzör yığını, çerçeve basıncı veya montaj ışık sızdırıyorsa, bunu genellikle daha parlak köşeler, bulutlu kenarlar veya aynı fiziksel konumda kalan lekeler olarak görürsünüz.',
    },
    {
      type: 'paragraph',
      html: 'Testi gerçekçi beklentilerle kullanın. LCD panellerin bir arka ışığa ihtiyacı vardır ve özellikle bütçe IPS ve VA ekranlarda çok küçük farklılıklar normal olabilir. Pratik soru, uzun pozlamalı bir telefon fotoğrafının bir lekeyi abartıp abartamayacağı değildir. Soru, ışık sızıntısının karanlık filmler, oyun yükleme ekranları, gece sahneleri, siyah masaüstü arka planları veya siyah bantlı videolar sırasında gözleriniz tarafından görülüp görülmediğidir.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Paneli değerlendirmeden önce bunu yapın',
      badge: 'Kurulum',
      html: 'Oda ışıklarını kapatın, camı temizleyin, parlaklığı yüzde 100\'e ayarlayın, ortam ışığı sensörlerini devre dışı bırakın ve gözlerinizin adapte olması için birkaç saniye bekleyin. Yansımalar, parmak izleri ve fare imleci, siyah tekdüzelik incelemesi sırasında yanlış pozitifler oluşturabilir.',
    },
    {
      type: 'list',
      items: [
        'Çerçeve basıncının genellikle sabit parlama oluşturduğu üst ve alt kenarları kontrol edin',
        'Üçgen veya hilal şeklinde ışık sızıntıları için dört köşeyi de inceleyin',
        'Görüş açısı parlamasını sabit sızmadan ayırmak için başınızı hafifçe hareket ettirin',
        'Önce gözlerinizle not alın, çünkü kameralar siyah ekranları aşırı pozlayabilir',
        'Sonuç sınırda ise panel 15 ila 30 dakika ısındıktan sonra tekrar test edin',
      ],
    },
    {
      type: 'title',
      text: 'Arka Işık Sızması, IPS Glow, Bulutlanma ve Siyah Tekdüzelik',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Sorun', 'Ne görürsünüz', 'Nasıl davranır', 'En yaygın paneller'],
      rows: [
        ['Arka ışık sızması', 'Sabit parlak kenar veya köşe lekesi', 'Başınızı hareket ettirdiğinizde aynı yerde kalır', 'IPS, VA, TN LCD'],
        ['IPS glow', 'Karanlık görüntülerde köşelerden süt rengi parlama', 'Görüş açısı ve mesafe ile güçlü şekilde değişir', 'IPS LCD'],
        ['Bulutlanma', 'Siyah üzerinde büyük düzensiz bulutlu alanlar', 'Genellikle sabit, bazen daha düşük parlaklıkla azalır', 'Edge-lit LCD TV\'ler ve monitörler'],
        ['VA siyah ezilmesi/bulaşması', 'Karanlık detaylar hareket halinde kaybolur veya bulaşır', 'İçeriğe ve piksel geçişine bağlıdır', 'VA LCD'],
        ['OLED siyaha yakın bantlanma', 'Siyaha yakın dikey veya yatay bantlar', 'Siyaha yakın gride görünür, saf siyahta değil', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: 'En yaygın hata, karanlık odadaki her artefaktı arka ışık sızması olarak adlandırmaktır. <strong>IPS glow</strong> optiktir: yakın oturduğunuzda, panele eksen dışı baktığınızda veya köşeleri dik bir açıdan gördüğünüzde güçlenir. Gerçek arka ışık sızması mekanik veya montaj kaynaklıdır: göz pozisyonunuz değişse bile aynı çerçeve alanına bağlı kalır. Bu ayrım önemlidir çünkü birçok satıcı, şiddetli sızmayı normal IPS glow\'dan farklı şekilde ele alır.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: 'Geniş görüş açıları, sık köşe parlaması ve çerçeve panele dengesiz baskı yaparsa görünür sızma.',
          points: ['Normal oturma mesafenizden kontrol edilmesi en iyisidir', 'Glow baş pozisyonu ile değişir', 'Şiddetli ise kenar sızması garanti kapsamında olabilir'],
        },
        {
          title: 'VA',
          description: 'Daha yüksek doğal kontrast, genellikle daha az IPS tarzı glow, ancak bulutlanma ve yavaş karanlık geçişler gösterebilir.',
          points: ['Siyah IPS\'ten daha derin görünür', 'Tekdüzelik birim başına değişebilir', 'Yerel karartmalı modellerde blooming görülür'],
        },
        {
          title: 'OLED',
          description: 'LCD arka ışık yoktur, bu nedenle saf siyah kapalı olmalıdır, ancak siyaha yakın tekdüzelik ve renk tonlaması hala önemlidir.',
          points: ['Saf siyah karanlık bir odada kaybolmalıdır', 'Bantlanma için gri slaytları ayrıca test edin', 'Kaynak yükseltilmiş siyahı panel sızması ile karıştırmayın'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Güvenilir Bir Saf Siyah Testi Nasıl Çalıştırılır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Siyah test modu normal arayüzü kasıtlı olarak kaldırır. Başlatıldığında, cam panel kaybolur, kurulum arayüzünde işaretçi olayları devre dışı bırakılır, sayfa yerel tam ekran ister ve test katmanı tam siyah kullanır. Fare hareketi olmadan iki saniye sonra imleç gizlenir, böylece beyaz bir referans noktası oluşturmaz veya karanlık oda incelemesini kirletmez.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: 'test arka plan rengi' },
        { value: '2 s', label: 'imleç boşta kalma süresi' },
        { value: '100%', label: 'önerilen parlaklık' },
        { value: '0', label: 'test modunda harici varlık' },
      ],
    },
    {
      type: 'summary',
      title: 'Siyah test kontrol listesi',
      items: [
        'Yerel çözünürlüğü kullanın ve ekran garip ölçekleniyorsa tarayıcı yakınlaştırmasını devre dışı bırakın',
        'SDR parlaklığını kusurları ortaya çıkaracak kadar yüksek ayarlayın veya kullanmayı planladığınız tam modda HDR\'yi test edin',
        'Önce normal görüntüleme pozisyonunuzdan, sonra biraz daha uzaktan inceleyin',
        'Pozlama kilitli değilse ve gözlerinizin gördüğüne benzemiyorsa telefon fotoğrafına göre karar vermeyin',
        'Tam ekrandan çıkmak için Escape tuşuna basın ve monitör ayarlarını değiştirdikten sonra testi tekrarlayın',
      ],
    },
    {
      type: 'tip',
      title: 'Kamera fotoğrafları iyi panelleri berbat gösterebilir',
      html: 'Otomatik telefon pozlaması siyah bir ekranı aydınlatmaya çalışır, bu da zayıf parlamayı abartır ve normal LCD davranışını dramatik bir görüntüye dönüştürebilir. Garanti kanıtına ihtiyacınız varsa, pozlamayı manuel olarak kilitleyin ve sorunun gerçek içerik sırasında görünür olup olmadığını açıklayan bir not ekleyin.',
    },
    {
      type: 'title',
      text: 'Mini LED ve FALD Ekranlar için Yerel Karartma Blooming Testi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Blooming testi monitör</strong> modu, saf siyah bir arka plan üzerine saf beyaz bir daire yerleştirir. Mini LED, FALD LCD veya yerel karartmalı TV\'de, bu küçük nesne bir veya daha fazla arka ışık bölgesini aydınlatmaya zorlarken, komşu bölgeler siyah kalmaya çalışır. Karartma algoritması, bölge sayısı, difüzör veya panel kontrastı ışığı izole edemezse, dairenin etrafında bir hale görürsünüz.',
    },
    {
      type: 'paragraph',
      html: 'Daireyi sürüklemek önemlidir. Statik blooming hikayenin sadece bir parçasıdır. Hareketli bir vurgu, karartma gecikmesini, bölge geçişlerini, pompalamayı, ezilmiş yıldız alanlarını, yükseltilmiş altyazıları ve ızgara şekilli davranışı ortaya çıkarır. İyi bir yerel karartma sistemi, nesneyi parlak tutarken etrafındaki pusu en aza indirmeli ve daire uzaklaştıktan sonra gecikmeli parlak lekeleri önlemelidir.',
    },
    {
      type: 'table',
      headers: ['Artefakt', 'Nelere dikkat edilmeli', 'Olası açıklama'],
      rows: [
        ['Hale', 'Beyaz dairenin etrafında yumuşak parlama', 'Yerel karartma bölgesi parlak nesneden daha büyük'],
        ['Bölge ızgarası', 'Hareket etrafında kare veya dikdörtgen bloklar belirir', 'Düşük bölge sayısı veya görünür Mini LED düzeni'],
        ['Karartma gecikmesi', 'Parlak leke daireyi geç takip eder', 'Algoritma harekete yavaş yanıt verir'],
        ['Siyah yükselmesi', 'Daire göründüğünde tüm ekran gri olur', 'Genel karartma veya zayıf kontrast kontrolü'],
        ['Altyazı bloomu', 'Küçük beyaz metin veya arayüz etrafında büyük pus', 'Sınırlı yerel bölgelerle agresif parlaklık'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: 'En iyi kullanım senaryosu',
      html: 'Dizüstü bilgisayarı veya konsolu gerçekten kullandığınız pahalı TV\'ye bağlayın, bu yerel karartma test cihazını tarayıcıda açın ve vurguyu tam ekran boyutunda sürükleyin. Küçük bir gömülü önizleme, yerel karartma bölgelerini tam ekran siyah ve beyaz gibi zorlayamaz.',
    },
    {
      type: 'title',
      text: 'Panel Türü Beklentileri: OLED, Mini LED, IPS ve VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: 'Her teknolojinin iyi ve kötü yapma eğiliminde oldukları',
      items: [
        {
          pro: 'OLED, gerçek siyah için tek tek pikselleri kapatır ve LCD arka ışık sızması göstermemelidir.',
          con: 'OLED, siyaha yakın bantlanma, renk tonlaması, otomatik parlaklık sınırlaması ve statik içerik altında yanma riski gösterebilir.',
        },
        {
          pro: 'Mini LED, yüksek HDR parlaklığına ulaşabilir ve edge-lit LCD\'ye kıyasla geniş alanlı pusu azaltabilir.',
          con: 'Mini LED hala bölgeler kullanır, bu nedenle bölge sayısı veya algoritma kalitesi sınırlı olduğunda küçük parlak nesneler blooming yapabilir.',
        },
        {
          pro: 'IPS, renk ve görüş açısı için kararlıdır, bu da masaüstü çalışması ve paylaşılan izleme için faydalıdır.',
          con: 'IPS glow ve kenar sızması, özellikle yakın otururken karanlık sahnelerde yaygın şikayetlerdir.',
        },
        {
          pro: 'VA, genellikle IPS\'ten çok daha iyi doğal kontrasta sahiptir ve karanlık odalarda daha derin görünebilir.',
          con: 'VA, yerel karartmalı sürümlerde karanlık bulaşma, bulutlanma veya blooming gösterebilir.',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Arka ışık sızması', definition: 'LCD yığınından, genellikle çerçeve yakınında kaçan ve siyah görüntülerde görünen istenmeyen ışık.' },
        { term: 'Blooming', definition: 'Yerel karartma bölgelerinin nesneden daha büyük bir alanı aydınlatmasıyla oluşan, parlak bir nesnenin etrafındaki hale.' },
        { term: 'IPS glow', definition: 'IPS panellerde karanlık sahnelerde açıya bağlı süt rengi aydınlanma.' },
        { term: 'FALD', definition: 'Full Array Local Dimming, LCD arka ışığının bağımsız olarak kontrol edilen bölgelere ayrıldığı tam dizi yerel karartma.' },
        { term: 'Mini LED', definition: 'Bölge sayısını ve HDR parlaklığını artırmak için birçok küçük LED kullanan bir LCD arka ışığı.' },
        { term: 'Siyah tekdüzelik', definition: 'Bir ekranın siyah veya siyaha yakın içeriği tüm ekran yüzeyinde ne kadar eşit şekilde gösterdiği.' },
      ],
    },
    {
      type: 'title',
      text: 'Bir Kusur Ne Zaman İade Edilecek Kadar Ciddidir',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'İade süresi tehlike işaretleri',
      badge: 'Garanti',
      html: 'Normal oturma mesafesinden parlak bir köşe görünüyorsa, aynı leke sizi filmlerde veya oyunlarda rahatsız ediyorsa, yerel karartma altyazıların etrafında belirgin haleler oluşturuyorsa veya pahalı bir HDR ekran aynı model için tipik incelemelerden daha kötü performans gösteriyorsa sorunu hızlıca belgelendirmeyi düşünün.',
    },
    {
      type: 'paragraph',
      html: 'Adil bir karar, gerçek içeriği ve ürün seviyesini kullanır. Düşük maliyetli bir ofis IPS monitörü, sınıfı için normal olan hafif köşe parlamasına sahip olabilir. Premium bir Mini LED monitör veya üst düzey bir TV, siyah seviyelerini ve blooming\'i çok daha iyi kontrol etmelidir. Kusur, siyah bantlı filmlerde, karanlık oyun menülerinde, uzay sahnelerinde veya masaüstü çalışmasında belirginse, bu sadece bir laboratuvar merakı değildir.',
    },
    {
      type: 'list',
      items: [
        'Kaynağı elemek için aynı içeriği başka bir ekranda kontrol edin',
        'Panelin kusurlu olduğunu varsaymadan önce resim ayarlarını sıfırlayın',
        'Algoritmalar moda göre farklılık gösterdiğinden düşük, orta ve yüksek yerel karartmayı deneyin',
        'Notlarınıza parlaklığı, HDR modunu, yerel karartma modunu ve görüntüleme mesafesini kaydedin',
        'İade ederken, yalnızca aşırı pozlanmış fotoğraflar göndermek yerine gözlerinizin ne gördüğünü açıklayın',
      ],
    },
    {
      type: 'title',
      text: 'Bu Test Neden Video Yerine Kod Kullanıyor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Video dosyaları sıkıştırma artefaktları, tarayıcı kod çözme işi, arabelleğe alma, renk aralığı dönüşümü ve kare hızı değişiklikleri getirebilir. Bir panel kusur testi bir MP4 dosyasına bağlı olmamalıdır. Bu araç, test durumları için yalnızca istemci tarafı HTML ve CSS kullanır: arka plan için tam siyah ve hareketli daire için tam beyaz. Bu, iş yükünü düşük tutar ve sayfa yüklendikten sonra ağ etkinliğini önler.',
    },
    {
      type: 'paragraph',
      html: 'Blooming daire konumu, görsel güncellemeleri tarayıcı yenileme döngüsüyle senkronize eden <code>requestAnimationFrame</code> aracılığıyla uygulanır. İşaretçi, fare ve dokunmatik girişi hedef koordinatları günceller, ardından bir sonraki animasyon karesi beyaz daireyi hareket ettirir. Bu, her ham giriş olayında gereksiz iş yapmadan yüksek yenilemeli monitörlerde, tabletlerde ve OLED telefonlarda sürüklemenin tutarlı hissettirmesini sağlar.',
    },
    {
      type: 'message',
      title: 'Gizlilik ve performans notu',
      ariaLabel: 'Gizlilik ve performans notu',
      html: 'Aktif test durumları izleme, video, uzak görüntü veya ölçüm yüklemelerine ihtiyaç duymaz. Eski dizüstü bilgisayarların, TV tarayıcılarının ve oturma odası kurulumlarının CPU yerine ekran panelini zorlayabilmesi için kasıtlı olarak basittirler.',
    },
    {
      type: 'title',
      text: 'Yanlış Sonuçlarda Sorun Giderme',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Test sırasındaki belirti', 'Olası neden', 'Ne denenmeli'],
      rows: [
        ['Siyah ekran gerçekten siyah değil', 'Sınırlı RGB aralığı, yükseltilmiş siyah ayarı, HDR ton eşleme veya tarayıcı katmanı', 'Tam RGB çıkışı ayarlayın, dinamik kontrastı devre dışı bırakın ve hiçbir işletim sistemi gece filtresinin aktif olmadığını doğrulayın'],
        ['Fare imleci görünür kalıyor', 'Hareket boşta kalma zamanlayıcısını sıfırladı veya tarayıcı imleç gizlemeyi kısa süreliğine engelledi', 'Fareyi iki saniye boyunca hareket ettirmeyi bırakın veya bir uzaktan kumanda/klavye kullanın'],
        ['Tam ekran başlamıyor', 'Tarayıcı doğrudan tıklama dışında tam ekranı reddetti veya TV tarayıcı sınırlaması', 'Başlat düğmesine tekrar basın veya tarayıcı tam ekran kısayolunu kullanın'],
        ['Blooming modlar arasında değişiyor', 'Yerel karartma ayarı bölge davranışını değiştirir', 'Dengeyi anlamak için Düşük, Orta, Yüksek ve Kapalı\'yı tekrar test edin'],
        ['OLED gri görünüyor', 'Video aralığı uyuşmazlığı, oda yansımaları veya yükseltilmiş siyah resim modu', 'Kaynak aralığını, siyah seviyesini, parlaklığı ve ortam yansımalarını kontrol edin'],
      ],
    },
    {
      type: 'summary',
      title: 'Pratik yorumlama',
      items: [
        'Arka ışık sızması, yerinde sabit olduğunda ve gerçek karanlık içerikte görünür olduğunda en ikna edicidir',
        'IPS glow açıyla değişir, bu nedenle gerçekten oturduğunuz pozisyondan test edin',
        'Blooming bir yerel karartma sınırlamasıdır, ölü piksel sorunu değildir',
        'OLED saf siyah testini geçmelidir, ancak yine de ayrı siyaha yakın tekdüzelik kontrollerine ihtiyaç duyar',
        'İyi bir test kurulumu karanlık, tam ekran, yüksek parlaklık ve yansımasızdır',
      ],
    },
  ],
  ui: {
    bleedTitle: 'Arka ışık sızması',
    bleedDescription: 'Kenar ışık sızıntıları, IPS glow, bulutlanma ve siyah tekdüzelik kontrolleri için tam ekran tam siyah.',
    bloomingTitle: 'Yerel karartma',
    bloomingDescription: 'Mini LED, FALD, OLED siyaha yakın işleme ve TV karartma bölgelerini zorlayan sürüklenebilir beyaz daire.',
    startBleed: 'Siyah testi başlat',
    startBlooming: 'Blooming testini başlat',
    prepTitle: 'Başlamadan önce',
    prepBrightness: 'Monitör veya TV parlaklığını %100\'e ayarlayın.',
    prepRoom: 'Oda ışıklarını kapatın ve yansımaları giderin.',
    prepFullscreen: 'Tam ekrandan çıkmak ve testi sıfırlamak için Escape tuşuna basın.',
    panelLabel: 'Panel kusuru önizlemesi',
    parametersLabel: 'Test parametreleri',
    modeControlsLabel: 'Arka ışık test modları',
    blackLevelLabel: 'Siyah',
    blackLevelValue: '#000000',
    brightnessLabel: 'Parlaklık',
    brightnessValue: '100%',
    idleLabel: 'İmleç',
    idleValue: '2s',
    fullscreenLabel: 'Tam Ekran',
    fullscreenValue: 'API',
    escapeHint: 'Saf siyah testi çalışıyor. İmleci gizlemek için fareyi 2 saniye hareket ettirmeyi bırakın. Çıkmak için Esc tuşuna basın.',
    dragHint: 'Beyaz daireyi sürükleyin veya dokunun. Hale, bölge ızgaraları ve gecikmiş karartmayı izleyin. Çıkmak için Esc tuşuna basın.',
  },
};
