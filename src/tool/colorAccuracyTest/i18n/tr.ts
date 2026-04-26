import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'renk-dogruluk-testi';
const title = 'Renk Doğruluk Testi - Spectrum Canvas';
const description =
  'Ekranınızı hassasiyetle kalibre edin. sRGB ve DCI-P3 renk uzaylarını test edin, renk kaymalarını tespit edin, Delta E metrikleri ile doğruluğu ölçün ve profesyonel kalibrasyon raporları oluşturun.';

const faqData = [
  {
    question: 'Renk doğruluğu nedir ve neden önemlidir?',
    answer:
      'Renk doğruluğu, bir ekranın renkleri standart bir referansa kıyasla ne kadar aslına uygun olarak sunduğunu ölçer. Tasarımcılar, fotoğrafçılar ve içerik üreticileri için renklerin doğru olması, çalışmalarının farklı cihazlarda tutarlı görünmesini sağlamak açısından kritiktir.',
  },
  {
    question: 'sRGB ve DCI-P3 arasındaki fark nedir?',
    answer:
      'sRGB, web ve tüketici ekranları için standart renk uzayıdır. DCI-P3 ise dijital sinema ve profesyonel ekranlarda kullanılan daha geniş bir renk gamıdır. DCI-P3, sRGB\'den yaklaşık %25 daha fazla renk kapsar.',
  },
  {
    question: 'Delta E nedir ve nasıl ölçülür?',
    answer:
      'Delta E (ΔE), insan gözü tarafından algılanan renk farkının sayısal bir ölçüsüdür. 1\'in altındaki Delta E algılanamaz, 2\'nin altı çok iyidir, 4\'ün altı kabul edilebilirdir ve 4\'ün üzeri fark edilebilir hale gelir. Testimiz CIE 1976 Delta E hesaplamalarını kullanır.',
  },
  {
    question: 'Bu aracı donanımımı kalibre etmek için kullanabilir miyim?',
    answer:
      'Bu araç görsel bir kalibrasyon referansı ve doğruluk ölçümleri sağlar. Profesyonel kalibrasyon için bu sonuçları donanım kalibrasyon araçları (kolorimetreler) ve ColorThink veya Datacolor SpyderCheckr gibi özel yazılımlarla birleştirmelisiniz.',
  },
  {
    question: 'Hangi renk uzayları test ediliyor?',
    answer:
      'Standart D65 (6500K) ve D93 (9300K) ışık kaynakları üzerinden sRGB (standart), DCI-P3 (sinema) ve beyaz nokta doğruluğunu test ediyoruz. Test ayrıca gama düzeltme doğrulamasını da içerir.',
  },
];

const howToData = [
  {
    name: 'Gamutunuzu Seçin',
    text: 'sRGB (standart web/tüketici) veya DCI-P3 (profesyonel sinema) arasında seçim yapın. Ekranınız test paletini buna göre ayarlayacaktır.',
  },
  {
    name: 'Donanımınızı Adlandırın (Opsiyonel)',
    text: 'Monitörünüz veya cihazınız için açıklayıcı bir ad girin (örneğin, "MacBook Pro 16 M1"). Bu, raporunuzu kişiselleştirir.',
  },
  {
    name: 'Tam Ekran Moduna Geçin',
    text: 'Tarayıcı arayüzünü ortadan kaldırmak ve doğru test için maksimum ekran alanı sağlamak üzere F11\'e veya tam ekran düğmesine basın.',
  },
  {
    name: 'Renk Testlerini Tamamlayın',
    text: 'Spektral Saflık (düz renkler), Gradyan Dinamiği (pürüzsüz geçişler), Black Crush Tespiti (gölge detayı) ve Beyaz Nokta Kalibrasyonu aşamalarından geçin.',
  },
  {
    name: 'Sonuçları İnceleyin ve Dışa Aktarın',
    text: '3D Gamut görselleştirmesi, Delta E metrikleri ve kalibrasyon önerileri içeren görsel bir rapor oluşturun. Arşivleme için PDF olarak dışa aktarın.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
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
      text: 'Profesyonel Renk Doğruluk Testi: Ekranınızı Hassasiyetle Kalibre Edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas, renk açısından kritik işlerle uğraşan herkes için tasarlanmış profesyonel düzeyde bir renk doğruluğu test aracıdır. Fotoğrafçı, tasarımcı, içerik üreticisi veya donanım meraklısı olun, bu araç <strong>renk kaymalarını teşhis etmenize</strong>, <strong>ekran doğruluğunu ölçmenize</strong> ve <strong>kalibrasyon raporları oluşturmanıza</strong> yardımcı olur.',
    },
    {
      type: 'title',
      text: 'Renk Doğruluğu Neden Önemlidir?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Renk üretimindeki tek bir yüzdelik fark, "harika" ile "bir şeyler yanlış görünüyor" arasındaki fark anlamına gelebilir. Profesyonel ekranlar <strong>Delta E &lt; 2</strong> hassasiyet sunar. Tüketici ekranları genellikle Delta E 4-6+ değerlerine kayarak şunlara neden olur:',
    },
    {
      type: 'paragraph',
      html: '<ul><li>Monitörünüzde canlı görünen ancak baskıda mat çıkan fotoğraflar</li><li>Müşteri beklentileriyle örtüşmeyen video düzenlemeleri</li><li>Marka özelliklerine uymayan web tasarım demoları</li><li>Renk göstergelerinin yanlış yorumlandığı donanım projeleri</li></ul>',
    },
    {
      type: 'title',
      text: 'Renk Uzaylarını Anlamak: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (Standart Renk Uzayı)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Microsoft ve HP tarafından 1996\'da oluşturulan sRGB, <strong>tüketici elektroniği ve web için evrensel standarttır</strong>. Üç ana renk (Kırmızı: 0.6400x 0.3300, Yeşil: 0.3000 0.6000, Mavi: 0.1500 0.0600) tarafından tanımlanan üçgen bir renk gamı kullanır.',
    },
    {
      type: 'paragraph',
      html: '<strong>Özellikler:</strong><ul><li>Görünür renk spektrumunun yaklaşık %35\'ini kapsar</li><li>Tipik ortam aydınlatma koşulları için optimize edilmiştir</li><li>Gama: 2.2 (çoğu tüketici ekranıyla eşleşir)</li><li>Kullanım Alanı: Web, sosyal medya, günlük fotoğraflar</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (Dijital Sinema Gamutu)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Digital Cinema Initiatives konsorsiyumu tarafından geliştirilen DCI-P3, sinematik projeksiyon ve profesyonel ekranlar için tasarlanmış <strong>sinema sınıfı bir renk uzayıdır</strong>. sRGB\'den yaklaşık %25 daha fazla renk içerir.',
    },
    {
      type: 'paragraph',
      html: '<strong>Özellikler:</strong><ul><li>Görünür renk spektrumunun yaklaşık %53\'ünü kapsar</li><li>Karanlık sinema ortamları için optimize edilmiştir</li><li>Gama: 2.6 (yüksek kontrast için gama düzeltmelidir)</li><li>Kullanım Alanı: Film yapımı, profesyonel fotoğrafçılık, HDR içerikler</li></ul>',
    },
    {
      type: 'title',
      text: 'Delta E Nedir? Renk Farkını Sayısallaştırmak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E (ΔE), CIE LAB renk uzayında <strong>insan tarafından algılanabilen renk farkı metriğidir</strong>. Ekranınızın çıktısının standart bir referans renge ne kadar yakın olduğunu söyler.',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta E Ölçeği (CIE 1976):</strong><ul><li>0–1: İnsan gözüyle algılanamaz</li><li>1–2: Zar zor algılanabilir</li><li>2–4: Algılanabilir ancak genel kullanım için kabul edilebilir</li><li>4–6: Belirgin renk kayması</li><li>&gt;6: Çok bariz fark</li></ul>',
    },
    {
      type: 'paragraph',
      html: 'Profesyonel ekranlar, tüm görünür gamutta <strong>Delta E &lt; 2</strong> değerini koruyacak şekilde kalibre edilir. Tüketici ekranları genellikle Delta E 3-5 değerlerine ulaşır.',
    },
    {
      type: 'title',
      text: 'Spectrum Canvas Test Paketi',
      level: 3,
    },
    {
      type: 'title',
      text: 'Spektral Saflık Testi',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Saf ana ve ara renkleri (Kırmızı, Yeşil, Mavi, Cam Göbeği, Macenta, Sarı) görüntüler ve monitörünüzün bunları nasıl sunduğunu ölçer. Renk "yayılım" animasyonları tüm ekranda tutarlı renk üretimini ortaya çıkarır.',
    },
    {
      type: 'title',
      text: 'Gradyan Dinamiği',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Tüm renk uzayı boyunca geçiş yapan pürüzsüz gradyanlar. Yetersiz renk bit derinliğini veya zayıf gama düzeltmesini gösteren <strong>bantlanma kusurlarına</strong> (pürüzsüz geçişler yerine görünür basamaklar) dikkat edin.',
    },
    {
      type: 'title',
      text: 'Black Crush Tespiti (Kara Delik Testi)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Siyaha yakın tonların zar zor görülebildiği saf siyah (0,0,0) arka plan. Gölge detayları birbirine karışıyorsa (crush), monitörünüz karanlık tonlarda bilgi kaybediyordur; bu durum mobil ekranlarda ve ucuz panellerde yaygındır.',
    },
    {
      type: 'title',
      text: 'Beyaz Nokta Kalibrasyonu',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Farklı ilişkili renk sıcaklıklarını (6500K\'da D65 = gün ışığı, 9300K\'da D93 = stüdyo) test ederek her türlü renk sıcaklığı kaymasını veya termal kararsızlığı ortaya çıkarır.',
    },
    {
      type: 'title',
      text: 'Sonuçlarınızı Yorumlama',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas şunları içeren şık ve yazdırılabilir bir rapor oluşturur:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3D Gamut Görselleştirmesi:</strong> Ekranınızın gerçek renk hacmini referans standartla karşılaştıran dönen bir 3D grafik</li><li><strong>Delta E Isı Haritası:</strong> Ekranınızın spektrumun neresinde kayma yaptığını gösterir</li><li><strong>Gama Eğrisi:</strong> 0–255 aralığında parlaklık doğrusallığı</li><li><strong>Kalibrasyon Puanı:</strong> Genel doğruluğa dayalı tek bir "Spectrum Grade" (Elit, Sinematik, Stüdyo, Standart)</li></ul>',
    },
    {
      type: 'title',
      text: 'Gelişmiş: Manuel Kalibrasyon İpuçları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sonuçlarınız kayma gösteriyorsa, monitörünüzün OSD (Ekran Menüsü) ayarlarında şu düzenlemeleri deneyin:',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>Renk Sıcaklığı:</strong> Renkler çok soğuk/maviyse "Sıcak" tarafa; çok sıcak/sarıysa "Soğuk" tarafa kaydırın</li><li><strong>Kontrast:</strong> Siyahlar soluk görünüyorsa artırın; detaylar kayboluyorsa azaltın</li><li><strong>Parlaklık:</strong> %50 parlaklıkta renk tonu içermeyen nötr bir gri elde edecek şekilde ayarlayın</li><li><strong>Doygunluk:</strong> Renkler aşırı doygunsa azaltın; donuksa artırın</li></ul>',
    },
    {
      type: 'title',
      text: 'Sınırlamalar ve En İyi Uygulamalar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Bu araç görsel ve istatistiksel referans sağlar</strong>. Sertifikalı kalibrasyon gerektiren profesyonel işler için donanım tabanlı renk ölçerler (spektrofotometre veya kolorimetre) ve özel kalibrasyon yazılımları kullanın.',
    },
    {
      type: 'paragraph',
      html: '<strong>En İyi Uygulamalar:</strong><ul><li>Testten önce monitörünüzün 30 dakika ısınmasına izin verin (termal kayma stabilize olur)</li><li>Tutarlı ortam aydınlatma koşullarında test yapın</li><li>Parlamayı önleyin; mümkünse bir monitör siperliği kullanın</li><li>Zaman içindeki kaymayı takip etmek için testleri haftalık tekrarlayın</li><li>Gelecekteki karşılaştırmalar için raporların dijital arşivini tutun</li></ul>',
    },
  ],
  ui: {
    badge: 'Ekran Kalibrasyonu',
    title: 'Spectrum Canvas - Renk Doğruluk Testi',
    description:
      'Profesyonel ekran kalibrasyonu sinematik estetikle buluşuyor. sRGB ve DCI-P3\'ü test edin, Delta E doğruluğunu ölçün, renk kaymalarını tespit edin ve verileri içgörüye dönüştüren görsel bir rapor oluşturun.',
    btnStartCalibration: 'Kalibrasyonu Başlat',
    btnFullscreen: 'Tam Ekran',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Tam Ekran Modu',
    kbdReset: 'R',
    kbdResetLabel: 'Testi Sıfırla',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Çıkış',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: 'Renk Uzayı',
    hardwareName: 'Donanım/Monitör Adı',
    hardwareNamePlaceholder: 'örn. MacBook Pro 16" M1 Max',
    purityTest: 'Spektral Saflık',
    gradientTest: 'Gradyan Dinamiği',
    blackHoleTest: 'Black Crush Tespiti',
    whitePointTest: 'Beyaz Nokta Kalibrasyonu',
    colorCheckpoint: 'Renk Kontrol Noktası',
    generateReport: 'Rapor Oluştur',
    viewResults: 'Sonuçları Görüntüle',
    btnExit: 'Çıkış (ESC)',
    compareSideBySide: 'Yan Yana Karşılaştır',
  },
};
