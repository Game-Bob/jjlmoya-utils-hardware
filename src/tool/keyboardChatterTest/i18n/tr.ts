import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'klavye-chatter-testi';
const title = 'Klavye Chatter Testi';
const description = 'Aynı tuşun ne kadar hızlı iki kez göründüğünü kontrol ederek mekanik klavye chatterını, çift yazmayı ve hatalı anahtar sıçramasını tespit edin.';

const faqData = [
  {
    question: 'Klavye chatterı nedir?',
    answer: 'Klavye chatterı, bir fiziksel basışın birden fazla basış olarak kaydedildiği bir donanım arızasıdır. Kirli, aşınmış, oksitlenmiş veya zayıf debounce edilmiş mekanik anahtarlarda yaygındır.',
  },
  {
    question: 'Bu klavye chatter testi nasıl çalışır?',
    answer: 'Aynı şüpheli tuşa yavaşça, her seferinde bir kez basın. Günlük yalnızca birkaç milisaniye arayla tekrarlanan basışlar gösteriyorsa, anahtar sıçrıyor ve çift harf üretiyor olabilir.',
  },
  {
    question: 'Hangi delta klavyemin çift yazdığını gösterir?',
    answer: '30 ms altındaki tekrarlanan basış, chatter için güçlü şekilde şüphelidir. 30 ila 50 ms arasındaki tekrarlar dikkat gerektirir. Normal kasıtlı tekrarlanan basışlar çoğu kullanıcı için genellikle 50 ms üzerindedir.',
  },
  {
    question: 'İlk basış neden delta göstermiyor?',
    answer: 'Bir delta, aynı tuşun önceki bir basışını gerektirir. İlk basış temel çizgiyi oluşturur ve sonraki basışlar milisaniye cinsinden zaman aralığını gösterir.',
  },
  {
    question: 'Yazılım klavye chatterını düzeltebilir mi?',
    answer: 'Debounce yazılımı bazı belirtileri gizleyebilir, ancak anahtarı onarmaz. Temizleme, hot-swap anahtarları yeniden oturtma, anahtarı değiştirme veya klavye PCB\'sini onarma gerekebilir.',
  },
];

const howToData = [
  {
    name: 'Aracı açın ve tuşlara normal şekilde basın',
    text: 'Başlat düğmesi yoktur. Gerekirse araca tıklayın, ardından çift yazan tuşa basın.',
  },
  {
    name: 'Şüpheli tuşa her seferinde bir kez dokunun',
    text: 'Çift yazan tuşa basın. Bir fiziksel basış küçük deltalarla birden fazla günlük satırı oluşturuyorsa, anahtar büyük olasılıkla chatter yapıyordur.',
  },
  {
    name: 'Renk kodunu okuyun',
    text: 'Yeşil 50 ms üzerinde normal, sarı 30 ila 50 ms arasında şüpheli ve kırmızı 30 ms altında chatter tespit edildi anlamına gelir.',
  },
  {
    name: 'Gerekirse günlüğü dışa aktarın',
    text: 'Tuşları karşılaştırmaya veya aralıklı bir arızayı belgelemeye yardımcı olabilecek bir CSV günlüğü kaydetmek için indirme düğmesini kullanın.',
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

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mekanik Klavye Çift Yazma Testi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu klavye chatter testi, bir basıştan iki harf yazan, temiz bırakmaları kaçıran veya kasıtlı olarak iki kez dokunmadan tekrarlanan karakterler üreten mekanik bir klavyeyi teşhis etmeye yardımcı olur. Anahtarları temizlemeden, firmware debounce ayarlarını değiştirmeden, garanti talebi açmadan veya hot-swap anahtarı değiştirmeden önce kullanın.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Sonuç nasıl okunur',
      badge: 'Delta eşikleri',
      html: '<p><strong>Normal</strong>, tekrarın 50 ms üzerinde olduğu ve genellikle kasıtlı olduğu anlamına gelir. <strong>Şüpheli</strong>, 30-50 ms arasıdır ve aynı tuşta tekrar test edilmelidir. <strong>Chatter tespit edildi</strong>, 30 ms altıdır ve büyük olasılıkla bir fiziksel basışın birden fazla elektrik kontağına sıçramasıdır.</p>',
    },
    {
      type: 'title',
      text: 'Mekanik Anahtarlar Neden Chatter Yapar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mekanik bir anahtar mükemmel temiz bir dijital sinyal olarak kapanmaz. Metal kontaklar oturmadan önce birkaç milisaniye sıçrayabilir. Klavye firmware\'i normalde bu sıçramayı bir debounce penceresiyle filtreler. Chattering, kontak kirli, aşınmış, oksitlenmiş, gevşek, çatlamış veya kötü ayarlanmış olduğunda, debounce filtresinin işlemesi gereken ekstra basışları klavyenin bildirmesiyle oluşur.',
    },
    {
      type: 'table',
      headers: ['Belirti', 'Olası neden', 'Önce ne denenmeli'],
      rows: [
        ['Bir tuş aynı harfi iki kez yazıyor', 'Kirli veya aşınmış anahtar kontağı', 'Tuş kapağını çıkarın, tozu üfleyin ve anahtarı değiştirmeden önce tekrar test edin.'],
        ['Bir yapıdan sonra birden fazla hot-swap tuşu chatter yapıyor', 'Anahtar pinleri temiz oturmamış', 'Anahtarı çekip yeniden oturtun, eğilmiş pin veya gevşek soket kontrolü yapın.'],
        ['Sadece dökülme veya nemden sonra oluyor', 'Kontaklarda oksidasyon veya kalıntı', 'Klavyeyi ayırın ve üretici kılavuzuna göre temizleyin.'],
        ['Birçok tuş küçük deltalar gösteriyor', 'Firmware debounce çok düşük veya tarama sorunu', 'Başka bir USB bağlantı noktasında karşılaştırın ve varsa firmware debounce ayarlarını inceleyin.'],
      ],
    },
    {
      type: 'title',
      text: 'Yanlış Pozitifleri Azaltan Test Yöntemi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Tam cümleler yazmak yerine şüpheli tuşları teker teker test edin.',
        'Tuşa bir kez basın, tamamen bırakın ve bir sonraki basıştan önce bir an bekleyin.',
        'Şüpheli tuşu, sağlıklı hisseden yakındaki bir tuşla karşılaştırın.',
        'Bir tuş için ilk satırı yok sayın çünkü karşılaştırılacak önceki bir basış yoktur.',
        'Aynı tuş tek dokunuşlardan 30 ms altında kırmızı satırları tekrar tekrar gösteriyorsa, donanım arızası olarak değerlendirin.',
        'Sadece sarı satırlar görünüyorsa, testi daha yavaş tekrarlayın ve dokunma ritminizin kısa aralığa neden olup olmadığını kontrol edin.',
      ],
    },
    {
      type: 'title',
      text: 'Chatter vs. Kasıtlı Hızlı Yazma',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chatter',
          description: 'Bir tuşta kümelenmiş, genellikle 30 ms altında ve bir basış amaçladığınızda ortaya çıkar.',
          points: ['Anahtarı veya soketi inceleyin.', 'Yakındaki sağlıklı bir tuşla karşılaştırın.'],
        },
        {
          title: 'Hızlı yazma',
          description: 'Birçok tuşu etkiler, ritminizi takip eder ve aynı tuşun tekrarlanan basışları arasında 50 ms üzerinde olma eğilimindedir.',
          points: ['Genellikle normal kullanım.', 'Daha yavaş tek dokunuşlarla tekrar test edin.'],
        },
        {
          title: 'İşletim sistemi tuş tekrarı',
          description: 'Bir tuşu basılı tutarken ortaya çıkar ve genellikle işletim sisteminiz tarafından belirlenen düzenli bir ritimde tekrarlanır.',
          points: ['Dokunuşlar arasında tamamen bırakın.', 'Klavye tekrar ayarlarını ayrıca kontrol edin.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bir Tuş Başarısız Olduğunda Ne Yapmalı',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Hiçbir şeyi değiştirmeden önce bir CSV günlüğü kaydedin, böylece önceki ve sonraki sonuçları karşılaştırabilirsiniz.',
        'Tuş kapağını çıkarın ve kir, sıvı kalıntısı veya düzgün geri dönmeyen bir gövde olup olmadığını inceleyin.',
        'Hot-swap klavyeler için anahtarı yeniden oturtun veya değiştirin ve aynı tuş konumunu tekrar test edin.',
        'Lehimli klavyeler için, PCB\'nin onarım gerektirdiğini varsaymadan önce firmware debounce seçeneklerini karşılaştırın.',
        'Birden fazla ilgisiz tuş imkansız deltalar gösteriyorsa farklı bir kablo ve USB bağlantı noktası deneyin.',
        'Garanti desteği için etkilenen tuşu, tekrarlanan delta değerlerini, klavye modelini, firmware sürümünü ve arızanın anahtarı mı yoksa PCB soketini mi takip ettiğini belirtin.',
      ],
    },
    {
      type: 'summary',
      title: 'Hızlı kural',
      items: [
        'Tek bir kırmızı satır ipucudur, karar değildir.',
        'Aynı fiziksel tuşta 30 ms altında tekrarlanan kırmızı satırlar, klavye chatterının güçlü kanıtıdır.',
        'Donanımı değiştirmeden önce kasıtlı tek dokunuşlar kullanın ve şüpheli anahtarı yakındaki sağlıklı bir tuşla karşılaştırın.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Herhangi bir tuşa basın',
    statusListening: 'Tuş deltaları ölçülüyor',
    statusChatter: 'Chatter tespit edildi',
    totalPresses: 'Toplam basış',
    chatterEvents: 'Chatter olayları',
    worstDelta: 'En kötü delta',
    watchWindow: 'Tutulan satırlar',
    keyColumn: 'Tuş',
    deltaColumn: 'Delta',
    verdictColumn: 'Karar',
    timeColumn: 'Zaman',
    normal: 'Normal',
    suspect: 'Şüpheli',
    chatter: 'Chatter',
    waiting: 'Bekleniyor',
    clear: 'Günlüğü temizle',
    exportLog: 'CSV dışa aktar',
    hint: 'Günlük, uzun oturumların hızlı kalması için en son 80 satırı tutar. Basılı tutulan tuş tekrarı yok sayılır; kırmızı satırlar birbirine çok yakın gerçekleşen ayrı basışlardan gelir.',
    captureNotice: 'Başlat düğmesi yok. Şüpheli bir tuşa bir kez dokunun ve önceki basışından deltayı gözlemleyin.',
    keyboardAriaLabel: 'Son tuş etkinliği',
    logAriaLabel: 'Klavye chatter olay günlüğü',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Boşluk',
    csvHeader: 'tuş,kod,delta_ms,ciddiyet,zaman',
  },
};
