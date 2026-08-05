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
];

const howToData = [
  {
    name: 'Mod seçin',
    text: 'Anında Yanıt, Klavye Gecikmesi veya Görsel Reaksiyon modunu seçin.',
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
  ],
};
