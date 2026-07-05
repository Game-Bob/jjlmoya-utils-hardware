import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'su-puskurtucu-hoparlor-temizleyici';
const title = 'Su Püskürtücü Hoparlör Temizleyici';
const description =
  'Telefon, tablet ve dizüstü bilgisayar hoparlörlerinden su, toz ve gevşek kalıntıları itmeye yardımcı olmak için 165 Hz düşük frekanslı bir ton çalın.';

const faqData = [
  {
    question: 'Hoparlörden su çıkarmak için hangi frekansı kullanmalıyım?',
    answer:
      '165 Hz civarındaki düşük bir ton, küçük hoparlör diyaframlarını delici yüksek frekanslara ihtiyaç duymadan gözle görülür şekilde hareket ettirdiği için pratik bir başlangıç noktasıdır. Bazı cihazlar 145 Hz ile 190 Hz arasında daha iyi yanıt verir, bu nedenle araç üç ön ayarı da içerir.',
  },
  {
    question: 'Bir ses tonu telefonumdaki tüm suyu çıkarabilir mi?',
    answer:
      'Hayır. Hoparlör ızgarasından veya akustik hazneden damlacıkları sallamaya yardımcı olabilir, ancak contaların arkasındaki, portların içindeki veya ekranın altındaki sıvıyı kurutamaz. Cihaz suya daldırıldıysa, kapatın ve üreticinin kurutma talimatlarını izleyin.',
  },
  {
    question: 'Bu hoparlörler için güvenli mi?',
    answer:
      'Kısa oturumlar kullanın, maksimum ses seviyesinin altında başlayın ve kazıma, tıngırdama veya bozulma duyarsanız durdurun. Küçük bir telefon hoparlörü uzun süreli yüksek çıkışlı bas çalmak için tasarlanmamıştır, bu nedenle tekrarlanan kısa döngüler tek bir uzun patlamadan daha güvenlidir.',
  },
  {
    question: 'Hoparlörüm ıslandıktan sonra neden boğuk geliyor?',
    answer:
      'Bir su filmi hoparlör diyaframına kütle ve sönümleme ekler ve ızgara açıklıklarını tıkayabilir. Bu, tiz sesleri azaltır, konuşma netliğini zayıflatır ve damlacıklar hareket edene veya buharlaşana kadar bas seslerinin bulanık gelmesine neden olur.',
  },
  {
    question: 'Telefonum ıslandıktan sonra pirinç kullanmalı mıyım?',
    answer:
      'Pirinç güvenilir bir onarım yöntemi değildir ve portlarda nişasta veya parçacık bırakabilir. Onun yerine hava akışı, emici tüy bırakmayan bez ve üretici talimatlarını kullanın. Ses püskürtme yalnızca hoparlör çıkışı içindir, tüm cihaz için değil.',
  },
];

const howToData = [
  {
    name: 'Kılıfları çıkarın ve hoparlörü aşağı doğru yöneltin',
    text: 'Izgarayı kapatan tüm kılıfları çıkarın, yerçekiminin damlacıkların hoparlör açıklığından çıkmasına yardımcı olması için cihazı tutun ve portları engelsiz bırakın.',
  },
  {
    name: 'Standart 165 Hz ön ayarıyla başlayın',
    text: "Başlat'a basın ve tonun 30 saniye çalmasına izin verin. Diyafram hareketi, ızgara ağında veya sığ hoparlör haznesinde sıkışmış damlacıkları yerinden çıkarabilir.",
  },
  {
    name: 'Gerekirse nazik veya derin ön ayarları deneyin',
    text: "Ses boğuk kalmaya devam ederse, kısa bir döngü için 145 Hz veya 190 Hz'i test edin. Farklı hoparlör boyutları farklı noktalarda rezonansa girer.",
  },
  {
    name: 'Hoparlör bozulursa durdurun',
    text: 'Ses sert, vızıltılı veya mekanik olarak zorlanmış hale gelirse sesi kısın veya hemen durdurun. Bozulma, sürücünün çok fazla zorlandığı anlamına gelir.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Su Püskürtme Tonu Nasıl Çalışır', level: 2 },
    {
      type: 'paragraph',
      html: "Telefon hoparlörü küçük, hareketli bir diyaframdır. Düşük frekanslı bir ton çalındığında, diyafram saniyede birçok kez ileri geri hareket eder. <strong>165 Hz</strong>'de bu hareket saniyede 165 kez gerçekleşir. Su ızgaranın üzerinde duruyorsa veya akustik çıkışın hemen içinde sıkışmışsa, hareket eden hava damlacığın yüzey gerilimini kırabilir ve onu açıklığa doğru itebilir.",
    },
    {
      type: 'paragraph',
      html: 'Süreç mekaniktir, kimyasal değildir. Ses sıvıyı buharlaştırmaz ve dahili elektroniği su geçirmez hale getirmez. En iyi şekilde, yağmur, sıçrama, duş veya hızlı bir durulamadan sonra konuşma, bildirimler veya müzik boğuk geldiğinde yararlı olan, hoparlör çıkışı için kontrollü bir titreşim döngüsü olarak anlaşılır.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: 'standart başlangıç frekansı', icon: 'mdi:sine-wave' },
        { value: '30 sn', label: 'kısa ilk temizlik döngüsü', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: 'pratik ayar aralığı', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tonun yapabilecekleri ve yapamayacakları',
      badge: 'Kapsam',
      icon: 'mdi:information',
      html: 'Ton, hoparlör yolundaki gevşek damlacıkları hareket ettirmeye yardımcı olabilir. Şarj portlarından, SIM yuvalarından, mikrofonlardan, kamera modüllerinden, yapışkan dikişlerden veya ekranın altındaki boşluktan sıvıyı çıkaramaz.',
    },
    { type: 'title', text: 'Ne Zaman Kullanılmalı', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Hoparlör bir sıçramadan sonra sessiz, boğuk veya kabarcıklı geliyor.',
        'Stereo telefon hoparlörünün bir tarafı diğerinden daha zayıf geliyor.',
        'Dizüstü bilgisayar veya tablet hoparlör ızgarası temizlikten sonra damlacık topladı.',
        'Toz veya tüy ızgarada gözle görülür şekilde gevşek ve normal çalma donuk geliyor.',
        'Cihaz normal çalışıyor, normal şarj oluyor ve bir portta sıvı uyarısı göstermiyor.',
      ],
    },
    {
      type: 'tip',
      title: 'En iyi fiziksel konum',
      html: 'Hoparlör ızgarasını aşağı veya hafifçe aşağı doğru yöneltin. Ton hareket sağlar, ancak yerçekimi serbest kalan damlacığın nereye gideceğine karar verir. Kılıfı çıkarmak da önemlidir çünkü birçok kılıf, çıkışın yakınında suyu yakalayan sığ bir cep oluşturur.',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: 'Telefon hoparlörleri neden hızlı etkilenir',
      html: 'Modern telefonlar kompakt yüksek sapmalı sürücüler ve küçük akustik kanallar kullanır. Büyük bir masaüstü hoparlörde zararsız olacak bir damlacık, telefon ızgarasının önemli bir bölümünü kaplayabilir, basıncı değiştirebilir ve diyaframı seslerin uzak gelmesine yetecek kadar sönümleyebilir.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası neden', 'Ne denenmeli'],
      rows: [
        ['Boğuk konuşma', 'Izgara üzerinde su filmi', 'Hoparlör aşağı bakacak şekilde 30 saniye 165 Hz çalıştırın'],
        ['Ton sırasında vızıltı', 'Damlacık hareket ediyor veya sürücü aşırı zorlanıyor', 'Sesi kısın; vızıltı devam ederse durdurun'],
        ['Bir hoparlör daha sessiz', 'Yalnızca bir çıkış tıkalı', 'Cihazı o çıkış aşağı bakacak şekilde döndürün'],
        ['Hiç ses yok', 'Ses kısılmış, Bluetooth yönlendirme veya donanım arızası', 'Döngüleri tekrarlamadan önce ses yolunu kontrol edin'],
      ],
    },
    { type: 'title', text: 'Doğru Frekansı Seçme', level: 2 },
    {
      type: 'paragraph',
      html: "Hoparlör boyutu, ızgara şekli, su geçirmez membran tasarımı ve kasa geometrisi farklılık gösterdiğinden evrensel bir sihirli sayı yoktur. <strong>165 Hz</strong>'in popüler olmasının nedeni, birçok küçük hoparlörde gözle görülür koni hareketi yaratacak kadar düşük olması ve çoğu cihazın yüksek sesle üretebileceği bir aralıkta kalmasıdır.",
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz nazik',
          description: 'Standart tonun sert geldiği çok küçük veya zorlanmış hoparlörler için kullanışlıdır.',
          icon: 'mdi:leaf',
          points: ['Daha düşük perde', 'Daha az agresif hareket', 'İyi ilk tekrar denemesi'],
        },
        {
          title: '165 Hz standart',
          description: 'Telefonlar, tabletler ve birçok dizüstü bilgisayar hoparlör açıklığı için dengeli başlangıç noktası.',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['Varsayılan ön ayar', 'Güçlü diyafram hareketi', 'En iyi ilk döngü'],
        },
        {
          title: '190 Hz derin temizlik',
          description: "Belirli bir hoparlör 165 Hz'in üzerinde rezonansa girdiğinde işe yarayabilecek biraz daha yüksek bir itiş.",
          icon: 'mdi:waves',
          points: ['Daha sıkı titreşim', 'Kullanışlı ikinci geçiş', 'Uzun döngülerden kaçının'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'Düşük frekanslar ve yüksek frekanslar',
      items: [
        { pro: 'Düşük tonlar küçük hoparlörlerde daha fazla hava ve diyafram mesafesi hareket ettirir.', con: 'Maksimum ses seviyesinde daha çabuk bozulabilirler.' },
        { pro: 'Yüksek tonları bazı ızgaralardan duymak daha kolaydır.', con: 'Genellikle daha az hava hareket ettirir ve bazı kullanıcılar için rahatsız edici veya duyulamaz olabilir.' },
        { pro: 'Kısa bir düşük tonu kulakla değerlendirmek kolaydır.', con: 'Duraklamalar olmadan dakikalarca döngüye alınmamalıdır.' },
      ],
    },
    {
      type: 'message',
      title: 'Frekans ayarlama kuralı',
      ariaLabel: 'Frekans ayarlama kuralı',
      html: 'Bir 30 saniyelik döngüden sonra hoparlör temiz geliyorsa, durun. Daha fazla döngü bir bakım rutini değildir; yalnızca hoparlör açıklığına sıvı veya kalıntı ulaştıktan sonra bir toparlanma yardımcısıdır.',
    },
    { type: 'title', text: 'Güvenli Temizlik Prosedürü', level: 2 },
    {
      type: 'paragraph',
      html: 'Özellikle daha büyük hoparlörlere sahip dizüstü bilgisayarlar ve tabletlerde, maksimum sistem ses seviyesinin altında başlayın. Yalnızca ton net bir şekilde duyulana ve cihaz hafifçe titreşene kadar artırın. Keskin bir tıngırtı, kazıma sesi veya ani ses düşüşü duyarsanız, aracı durdurun ve cihazın doğal olarak kurumasını bekleyin.',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        'Tonun ıslak hoparlörden çalması için kulaklıkları ve Bluetooth hoparlörleri ayırın.',
        'Ses çalmadan önce dış yüzeyi tüy bırakmayan bir bezle kurulayın.',
        'Hoparlör çıkışını aşağı doğru tutun ve elinizi ızgaradan uzak tutun.',
        "165 Hz'de 30 saniye çalıştırın.",
        'Bir dakika bekleyin, normal konuşma sesini test edin, ardından gerekirse yalnızca bir kez tekrarlayın.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Isı veya basınçlı hava kullanmayın',
      badge: 'Kaçının',
      icon: 'mdi:alert',
      html: 'Saç kurutma makineleri, fırınlar ve yüksek basınçlı hava nemi daha derine itebilir, contaları deforme edebilir veya membranlara zarar verebilir. Ses tonu daha naziktir çünkü cihazda zaten tasarlanmış olan hoparlör hareketinden çalışır.',
    },
    {
      type: 'summary',
      title: 'Hızlı güvenlik kontrol listesi',
      items: [
        'Kısa döngüler uzun sürekli çalmadan daha iyidir.',
        'Ton sert vızıldıyorsa sesi kısın.',
        'Cihaz sıvı algılama uyarıları gösteriyorsa durdurun.',
        'Ses püskürtme yalnızca hoparlör çıkışına yardımcı olur, tüm telefona değil.',
      ],
    },
    { type: 'title', text: 'Su Direnci Su Geçirmezlik Değildir', level: 2 },
    {
      type: 'paragraph',
      html: 'Birçok telefon su direnci reklamı yapar, ancak bu derecelendirme tanımlanmış laboratuvar koşullarında ölçülür. Gerçek su maruziyeti hareket, sabun, tuz, ısı, basınç, yaş, darbeler ve aşınmış contaları içerir. Bir hoparlör temizleme tonu bir contayı geri getirmez ve bir telefonun şarj için güvenli olduğunu doğrulamaz.',
    },
    {
      type: 'table',
      headers: ['Maruziyet', 'Hoparlör tonu yararlılığı', 'Ek eylem'],
      rows: [
        ['Hafif yağmur', 'Ses boğuksa genellikle yardımcıdır', 'Dış yüzeyi kurulayın ve bir kısa döngü çalıştırın'],
        ['Temiz su sıçraması', 'Izgara yakınındaki damlacıklar için yardımcıdır', 'Şarjdan önce portları kuru tutun'],
        ['Havuz veya deniz suyu', 'Sınırlı; kalıntı kalabilir', 'Yalnızca üretici izin veriyorsa durulayın, gerekirse servis alın'],
        ['Sabun, gazoz veya kahve', 'Düşük; yapışkan kalıntı ızgarayı değiştirir', 'Kapatın ve temizlik yönlendirmesi alın'],
        ['Tamamen suya batma', 'Yeterli değil', 'Üreticinin acil durum adımlarını izleyin'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Diyafram', definition: 'Ses oluşturmak için havayı iten, hoparlörün içindeki hareketli yüzey.' },
        { term: 'Rezonans', definition: 'Fiziksel bir sistemin, şekli ve kütlesi o titreşimi desteklediği için daha verimli hareket ettiği frekans.' },
        { term: 'Yüzey gerilimi', definition: 'Bir damlacığın hemen akıp gitmek yerine bir ızgaraya veya membrana yapışmasını sağlayan kuvvet.' },
        { term: 'Akustik hazne', definition: 'Hoparlör sesini sürücüden cihaz açıklığına yönlendiren küçük dahili yol.' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: 'Temizlikten sonra neden daha yüksek sesli gelebilir',
      html: 'Su, öncelikle yüksek frekansları engeller çünkü küçük dalga boyları ızgara engelleri tarafından kolayca dağıtılır. Damlacıklar hareket ettiğinde, ünsüzler, bildirim zil sesleri ve ses detayları genellikle bas fark edilir şekilde değişmeden önce geri döner.',
    },
    { type: 'title', text: 'Toz ve Kalıntı Temizliği', level: 2 },
    {
      type: 'paragraph',
      html: 'Aynı titreşim, hoparlör ağı üzerindeki kuru tozu, tüyü veya tozu gevşetebilir, ancak dikkatli fiziksel temizliğin yerini almamalıdır. Kalıntı yapışkan, yağlı veya ızgaraya sıkışmışsa, titreşim tek başına onu yalnızca etrafta hareket ettirebilir. Dış yüzeyin etrafında yumuşak kuru bir fırça kullanın ve açıklığa metal aletler sokmaktan kaçının.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Ses titreşimi',
          description: 'Serbestçe hareket edebilen gevşek parçacıklar ve damlacıklar için iyidir.',
          icon: 'mdi:sine-wave',
          points: ['Izgarayla temas yok', 'Hızlı', 'Yeni sıçramalar için en iyisi'],
        },
        {
          title: 'Yumuşak dış fırçalama',
          description: 'Ağ yüzeyinde oturan görünür tüy veya toz için daha iyidir.',
          icon: 'mdi:brush',
          points: ['Yüksek ses olmadan çalışır', 'Hoparlörü aşırı zorlamaktan kaçınır', 'Membranların çevresinde özen gerektirir'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Tozlu ortamlardan sonra',
      html: 'Tonu orta ses seviyesinde çalıştırın, ardından dış ızgarayı kuru bir mikrofiber bezle silin. Cihaz üreticisi özellikle önermedikçe alkol veya sıvı temizleyici eklemeyin.',
    },
    { type: 'title', text: 'Cihaza Özel Notlar', level: 2 },
    {
      type: 'paragraph',
      html: 'Telefonlar, tabletler ve dizüstü bilgisayarlar hoparlörleri farklı akustik düzenlerde konumlandırır. Alttan ateşlemeli bir telefon hoparlörü genellikle şarj portunun yanında kısa bir çıkışa sahiptir, bu nedenle ızgara aşağı baktığında su hızlıca çıkabilir. Bir tablet daha uzun bir yan kanal kullanabilir, bu da tonun sesi belirgin bir patlama yerine kademeli olarak netleştirebileceği anlamına gelir. Bir dizüstü bilgisayar hoparlörü genellikle klavye tablasından veya alt taraftaki bir yarıktan ses verir, bu nedenle sıvı doğrudan sürücüden ziyade bir kumaş katmanında, plastik ağda veya harici ızgarada olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Telefon için, sesi boğuk gelen hoparlör en alt nokta olana kadar cihazı döndürün. Tablet için, tıkalı açıklık beklenenden farklı bir kenarda olabileceğinden hem dikey hem yatay yönlendirmeyi deneyin. Dizüstü bilgisayar için, makineyi sabit kuru bir yüzeyde tutun ve sıvıyı klavyeye, menteşeye veya havalandırmalara doğru eğmekten kaçının. Ton hoparlör yoluna yardımcı olmalıdır; suyun cihaz boyunca hareket etmesini teşvik etmemelidir.',
    },
    {
      type: 'table',
      headers: ['Cihaz türü', 'Önerilen yönlendirme', 'Döngü tavsiyesi'],
      rows: [
        ['Telefon', 'Hoparlör ızgarası aşağı, kılıf çıkarılmış', 'Bir 30 saniyelik döngü, ardından sesli görüşmeyi test edin'],
        ['Tablet', 'Tıkalı kenar aşağı bakacak şekilde', 'Hoparlörler daha büyük olduğu için orta ses seviyesinde başlayın'],
        ['Dizüstü bilgisayar', 'Harici ızgarada sıvı yoksa normal sabit konum', 'Daha düşük ses kullanın ve kasa güçlü titreşirse durdurun'],
        ['Akıllı saat', 'Önce üreticinin su kilidi yönlendirmesini izleyin', 'Web tonunu yalnızca tarayıcı sesi saat hoparlörüne yönlendirebiliyorsa kullanın'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Bluetooth ve ses yönlendirme kontrolü',
      badge: 'Başlamadan önce',
      icon: 'mdi:bluetooth-audio',
      html: 'Kablosuz kulaklıklar, bir araç sistemi veya harici bir hoparlör bağlıysa, ton yanlış çıkıştan çalabilir. Başlamadan önce Bluetooth ses bağlantısını kesin, ardından normal bir zil sesinin veya kısa bir videonun ıslak hoparlörden çaldığını doğrulayın.',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: 'Mikrofon neden farklıdır',
      html: 'Mikrofon portu, koruyucu ağ ve küçük bir basınç sensörü olan bir giriş yoludur, havayı dışarı itebilen bir hoparlör diyaframı değildir. Bir su püskürtme tonunun boğuk mikrofon kayıtlarını temizleyeceğini varsaymayın. Cihazın kurumasını bekleyin ve mikrofon deliğini dürtmekten kaçının.',
    },
    { type: 'title', text: 'Ses Seviyesi, Bozulma ve İşitme Konforu', level: 2 },
    {
      type: 'paragraph',
      html: 'Su püskürtme tonu kasıtlı olarak tekrarlayıcıdır ve sessiz bir odada rahatsız edici olabilir. Amaç maksimum ses yüksekliği değil; amaç damlacıkları rahatsız etmeye yetecek kadar diyafram hareketidir. Ton acı vericiyse, hoparlör çıkışını engellemeden sesi azaltın veya cihazı daha uzağa yerleştirin. Başarılı bir temizlik döngüsü saniyeler sürmesi gerektiğinden, uzun süreli maruziyet değil, işitme konforu önemlidir.',
    },
    {
      type: 'paragraph',
      html: 'Bozulma yararlı bir uyarı işaretidir. Telefon gövdesi titreşse bile temiz bir düşük ton sabit duyulur. Kötü bir ton çatırtılı, sert, metalik veya dengesiz duyulur. Bu, su hareket ettiği için, hoparlör hareket sınırına ulaştığı için veya cihaz amplifikatörü kırptığı için olabilir. Sesi kısmak ilk düzeltmedir; daha yüksek sesle tekrarlamak yanlış harekettir.',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        'Cihaz ses düğmelerini ve araç ses kaydırıcısını birlikte kullanın; her ikisi de çıkışı çok yüksek yapabilir.',
        'Hoparlörü bir masaya, yastığa veya ele dayamaktan kaçının çünkü engellenen hava akışı tıngırdamayı artırır.',
        'Sürücü ve amplifikatörün sürekli yüksek çıkışta tutulmaması için döngüler arasında duraklayın.',
        'Normal müzik kuruma süresinden sonra hala çatırdıyorsa, bunu bir temizlik sorunu değil, onarım belirtisi olarak değerlendirin.',
      ],
    },
    {
      type: 'message',
      title: 'Konfor kuralı',
      ariaLabel: 'Konfor kuralı',
      html: 'Ton kulaklarınız için çok yüksek geliyorsa, ilk deneme için gerekenden zaten daha yüksektir. Su püskürtme harekete ve yönlendirmeye bağlıdır, cezalandırıcı ses seviyesine değil.',
    },
    { type: 'title', text: 'Ton Sonrası Sorun Giderme', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Bu işaretler görünürse onarım isteyin',
      badge: 'Dur',
      icon: 'mdi:close-octagon',
      html: 'Cihaz anormal şekilde ısınırsa, kapanırsa, sıvı uyarıları gösterirse, yol kontrollerinden sonra çıkış yoksa veya hoparlör normal konuşma sırasında tıngırdarsa ses püskürtmeyi kullanmayı bırakın. Bu belirtiler ızgaradaki damlacıkların ötesinde hasarı gösterebilir.',
    },
    {
      type: 'table',
      headers: ['30 saniye sonrası sonuç', 'Anlamı', 'Sonraki adım'],
      rows: [
        ['Daha net ses', 'Damlacık muhtemelen hareket etti', 'Durdurun ve cihazın dinlenmesini bekleyin'],
        ['Küçük iyileşme', 'Bir miktar nem kaldı', 'Bekleyin, ardından bir kısa döngü tekrarlayın'],
        ['Değişiklik yok', 'Tıkanıklık daha derin veya yapışkan olabilir', 'Doğal olarak kurutun ve yolu/ayarları inceleyin'],
        ['Daha kötü bozulma', 'Sürücü zorlanmış veya hasar görmüş olabilir', 'Durdurun ve sesi kısın; servisi değerlendirin'],
      ],
    },
    {
      type: 'summary',
      title: 'Pratik çıkarım',
      items: [
        'Hareket ve uyumluluğu dengelediği için önce 165 Hz kullanın.',
        'Izgarayı aşağı doğrultun ve döngüyü kısa tutun.',
        'Tonu tam cihaz kurutması olarak değil, hoparlör toparlanması olarak değerlendirin.',
        'Üreticinin sıvı yönlendirmesi herhangi bir web aracından üstündür.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Püskürtmeye hazır',
    statusPlaying: 'Ton çalıyor',
    statusComplete: 'Döngü tamamlandı',
    frequencyLabel: 'Frekans',
    volumeLabel: 'Ses',
    durationLabel: 'Süre',
    startButton: 'Su püskürtücüyü başlat',
    stopButton: 'Tonu durdur',
    hertzUnit: 'Hz',
    secondsShort: 'sn',
    presetGentle: 'Nazik',
    presetStandard: '165 Hz',
    presetDeep: 'Derin',
    safetyTitle: 'Önce güvenlik',
    safetyText: 'Maksimum ses seviyesinin altında başlayın ve hoparlör tıngırdar veya bozulursa durdurun.',
    bestResult: 'En iyi sonuç',
    bestResultText: 'Kılıfı çıkarın, hoparlörü aşağı doğru yöneltin ve kısa bir döngü çalıştırın.',
  },
};
