import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-sistem-gecikmesi-testi';

const title = 'Input Lag ve Sistem Gecikmesi Testi';
const description = 'Yuksek hassasiyetli kare senkronizasyonu ile input lag ve sistem gecikmesini olcen cevrimici arac.';

const faqData = [
  {
    question: 'Input lag nedir?',
    answer: 'Fiziksel bir girdi ile ekrandaki görsel güncelleme arasında geçen gecikme süresidir.',
  },
  { question: 'Oyun için iyi gecikme değeri nedir?', answer: '10 ms altı çok hızlıdır. 10 ile 20 ms hızlı, 20 ile 35 ms orta düzeydedir ve daha yüksek değerler hissedilir.' },
  { question: 'Giriş gecikmesi nasıl azaltılır?', answer: 'Ekran yenileme hızını, VSync, VRR ve USB yoklamasını kontrol edin. Tek bir ayarı değiştirip yeniden ölçün.' },
  { question: 'Yenileme hızı input lag değerini etkiler mi?', answer: 'Evet. 60 Hz\'de bir kare 16.67 ms, 240 Hz\'de 4.17 ms sürer. Görüntü oluşturma ve panel de gecikme ekler.' },
  { question: 'Jitter neden önemlidir?', answer: 'Ölçümler arasındaki değişimi gösterir. Biraz yüksek fakat kararlı değer, büyük sıçramalar yapan düşük ortalamadan daha iyi hissedilebilir.' },
];

const howToData = [
  {
    name: 'Mod seçin',
    text: 'Anında Yanıt, Klavye Gecikmesi veya Görsel Reaksiyon modunu seçin.',
  },
  { name: 'Girdi uygulayın', text: 'Test alanına tıklayın veya tuşlara basarak giriş olayları oluşturun.' },
  { name: 'İstatistikleri inceleyin', text: 'Birkaç denemeden sonra ortalama, minimum, maksimum ve jitter değerlerini kontrol edin.' },
  { name: 'Karşılaştırmayı tekrarlayın', text: 'Her değişiklikten sonra aynı koşullarda yeni bir ölçüm serisi alın.' },
  { name: 'Sınırları değerlendirin', text: 'Sonucu yapılandırmaları karşılaştırmak için kullanın, kesin bir piksel ölçümü olarak değerlendirmeyin.' },
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Sistem Gecikmesi',
  modeInstant: 'Anında Yanıt',
  modeKey: 'Klavye Gecikmesi',
  modeVisual: 'Görsel Reaksiyon',
  targetClickPrompt: 'Girdi gecikmesini ölçmek için buraya tıklayın',
  targetKeyPrompt: 'Klavye gecikmesi için herhangi bir tuşa basın',
  targetWaitPrompt: 'Yeşil ekranı bekleyin...',
  targetNowPrompt: 'ŞİMDİ TIKLAYIN!',
  labelAvgLatency: 'Ortalama Gecikme',
  labelMinLatency: 'Minimum Gecikme',
  labelMaxLatency: 'Maksimum Gecikme',
  labelJitter: 'Jitter (Dalgalanma)',
  labelFps: 'Mevcut FPS',
  labelFrameTime: 'Kare Süresi',
  labelSamples: 'Örnekler',
  labelGrade: 'Değerlendirme',
  gradeUltraFast: 'Çok Hızlı (<10ms)',
  gradeFast: 'Hızlı (10-20ms)',
  gradeModerate: 'Orta (20-35ms)',
  gradeHigh: 'Yüksek (>35ms)',
  btnReset: 'Sıfırla',
  btnCopyReport: 'Raporu Kopyala',
  reportCopied: 'Rapor Kopyalandı!',
  historyTitle: 'Son Ölçümler',
  pipelineTitle: 'Donanım Boru Hattı Gecikme Analizi',
  distributionTitle: 'Frekans Dağılımı',
  sampleCol: 'Örnek',
  typeCol: 'Girdi Tipi',
  latencyCol: 'Ölçülen Gecikme',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Input Lag ve Ekran Gecikmesi Ölçümü',
    },
    {
      type: 'paragraph',
      html: 'Ekranınızın ve çevre birimlerinizin tepki süresini gerçek zamanlı olarak ölçün.',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'Espor hedefi', trend: 'Rekabetçi referans' },
      { value: '1000 Hz', label: 'Yaygın USB yoklama', trend: '1 ms giriş aralığı' },
      { value: '240 Hz', label: 'Yüksek yenileme ekranı', trend: '4.16 ms kare aralığı' },
      { value: '16.6 ms', label: '60 Hz aralığı', trend: 'Kare başına temel değer' },
    ], columns: 4 },
    { type: 'card', title: 'Tarayıcı gecikmeyi nasıl ölçer', html: 'Test, pointerdown ve keydown olaylarını requestAnimationFrame güncellemeleriyle karşılaştırır. Böylece girişin algılanması ile sayfanın yeniden çizilmesi arasındaki yerel süreyi tahmin eder.' },
    { type: 'title', text: 'Gecikme sinyali sistemden nasıl geçer' },
    { type: 'paragraph', html: 'Toplam gecikme çevre biriminin anahtarından görünür piksele kadar birikir. Her adımı ayırmak, kaynağın cihaz, işletim sistemi, görüntü oluşturma veya ekran olup olmadığını anlamayı sağlar.' },
    { type: 'table', headers: ['Bileşen', 'Yaygın aralık', 'Ana darboğaz', 'Olası iyileştirme'], rows: [
      ['Anahtar', '0.2 ile 5.0 ms', 'Mekanik titreşim', 'Debounce süresini azaltmak'],
      ['USB yoklama', '0.125 ile 8.0 ms', 'Düşük frekans', 'Destekleniyorsa frekansı artırmak'],
      ['Sistem kuyruğu', '0.5 ile 3.0 ms', 'Arka plan görevleri', 'Gereksiz işlemleri kapatmak'],
      ['Grafik motoru', '4.0 ile 20.0 ms', 'CPU ile sınırlı kareler', 'Görüntü oluşturma yükünü azaltmak'],
      ['GPU kuyruğu', '8.0 ile 33.0 ms', 'VSync ve çoklu arabellek', 'VSync ile VRR yi karşılaştırmak'],
      ['Ekran işlemesi', '1.0 ile 15.0 ms', 'Ölçekleme ve filtreler', 'Oyun modunu açmak'],
    ] },
    { type: 'tip', title: 'GPU görüntü oluşturma kuyruğunu azaltmak', html: 'GPU tamamen yüklendiğinde birkaç kareyi önceden hazırlayabilir. Maksimumun biraz altında bir kare sınırı ve Reflex veya Anti Lag denemesi beklemeyi azaltabilir.' },
    { type: 'title', text: 'Giriş cihazlarını karşılaştırmak' },
    { type: 'paragraph', html: 'Fare, klavye ve dokunmatik ekranların gecikmesi bağlantı, elektronik devre ve tarama frekansına göre değişir. Karşılaştırma sırasında aynı ekranı ve ayarları kullanın.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Oyuncu fareleri', description: 'Yüksek frekanslı kablolu veya kablosuz bağlantı.', highlight: '0.5 ile 2 ms', points: ['1000 Hz veya daha yüksek yoklama', 'Optik anahtarlar', 'Hızlı işleyen sensör'] },
      { title: 'Mekanik klavyeler', description: 'Debounce ayarlı tuş matrisi.', highlight: '1 ile 10 ms', points: ['Manyetik anahtarlar', 'Yapılandırılabilir matris taraması', 'Ayarlanabilir çalıştırma mesafesi'] },
      { title: 'Dokunmatik ekranlar', description: 'Panel üzerinde kapasitif sayısallaştırıcı.', highlight: '15 ile 45 ms', points: ['Dokunmatik örnekleme frekansı', 'Ekran denetleyicisi işlemesi', 'İstenmeyen dokunuş filtreleri'] },
    ] },
    { type: 'title', text: 'Ekran yenileme hızının eklediği gecikme' },
    { type: 'paragraph', html: 'Yenileme hızı iki görüntü arasındaki en kısa aralığı belirler. 60 Hz ekran girişi 240 Hz ekrandan daha geç gösterir, ancak oluşturma ve senkronizasyon da sonucu etkiler.' },
    { type: 'list', items: ['60 Hz kare başına 16.67 ms', '120 Hz kare başına 8.33 ms', '144 Hz kare başına 6.94 ms', '240 Hz kare başına 4.17 ms', '360 Hz kare başına 2.78 ms', '540 Hz kare başına 1.85 ms'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: 'Fiziksel hareket ile ekrandaki görünür sonuç arasındaki süre.' },
      { term: 'Jitter', definition: 'Zamanlamanın kararlılığını gösteren ölçüm değişimi.' },
      { term: 'VSync', definition: 'Yırtılmayı azaltabilen ancak bekleme ekleyebilen dikey senkronizasyon.' },
      { term: 'VRR', definition: 'Ekran hızını GPU çıkışına uyarlayan değişken yenileme.' },
      { term: 'Piksel tepki süresi', definition: 'Bir pikselin başka bir tona geçmesi için gereken süre.' },
    ] },
    { type: 'title', text: 'Tarayıcı ölçümünün artıları ve sınırları' },
    { type: 'paragraph', html: 'Test, osiloskop veya hızlı kamera olmadan ayarları karşılaştırmanızı sağlar. Sürücü, oyun ve panelin optik çıkışındaki tüm dahili gecikmeleri doğrudan göremez.' },
    { type: 'proscons', title: 'Web ölçümünün değerlendirmesi', items: [
      { pro: 'Özel ekipman gerektirmez', con: 'Tarayıcının olay döngüsüne bağlıdır' },
      { pro: 'Çevre birimleri hızlı karşılaştırır', con: 'Piksel tepkisini doğrudan ölçmez' },
      { pro: 'Yüksek çözünürlüklü yerel zamanlayıcı kullanır', con: 'Tarayıcı zamanlayıcı hassasiyetini azaltabilir' },
      { pro: 'Güncellemelerin kararlılığını gösterir', con: 'Etkin olmayan sekme yavaşlatılabilir' },
    ] },
    { type: 'title', text: 'Yüksek giriş gecikmesini teşhis etmek' },
    { type: 'paragraph', html: 'Ortalama 30 ms yi aşarsa veya jitter yüksekse pencere etkinken seriyi tekrarlayın. VSync, grafik hızlandırma, USB yoklama ve CPU görevlerini kontrol edin.' },
    { type: 'diagnostic', variant: 'warning', title: 'Gecikme tanı bildirimi', html: 'Masaüstü bilgisayarda ortalama 35 ms yi aşarsa ekran modunu ve donanım hızlandırmayı kontrol edin. Nedeni bulmak için her seferinde tek ayar değiştirin.' },
    { type: 'title', text: 'Sistem gecikmesini adım adım azaltmak' },
    { type: 'paragraph', html: 'Çevre birimini, ekranı ve sistemi ayrı ayrı ayarlayın. Her değişiklikten sonra aynı koşullarda yeni örnekler toplayarak iyileşmenin gerçek olduğunu doğrulayın.' },
    { type: 'summary', title: 'Gecikme optimizasyon kontrol listesi', items: ['Uygun USB yoklamasını seçin', 'Ekranın oyun modunu açın', 'Gereksiz görüntü filtrelerini kapatın', 'VSync ve VRR yi karşılaştırın', 'Kare hızını sabit tutun', 'Ağır arka plan görevlerini kapatın', 'Her değişiklikten sonra yeniden ölçün'] },
    { type: 'message', title: 'Sonuçları karşılaştırmak için iyi uygulama', html: 'Arka plan uygulamalarını kapatın, test penceresini etkin tutun ve en az 15 örnek toplayın. Tek bir tesadüfi değer yerine medyanı, ortalamayı ve jitter değerini birlikte inceleyin.' },
  ],
};
