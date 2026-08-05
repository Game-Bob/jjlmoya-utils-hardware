import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'uji-latensi-input-lag';

const title = 'Uji Latensi Input Lag dan Sistem';
const description = 'Alat ukur input lag dan latensi sistem secara online dengan sinkronisasi bingkai layar presisi tinggi.';

const faqData = [
  {
    question: 'Apa itu input lag?',
    answer: 'Waktu tunda antara tindakan fisik pengguna dan pembaruan visual pada layar.',
  },
];

const howToData = [
  {
    name: 'Pilih mode',
    text: 'Pilih Respon Instan, Latensi Keyboard, atau Reaksi Visual.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Latensi Sistem',
  modeInstant: 'Respon Instan',
  modeKey: 'Latensi Keyboard',
  modeVisual: 'Reaksi Visual',
  targetClickPrompt: 'Klik di sini untuk mengukur latensi input',
  targetKeyPrompt: 'Tekan tombol apa saja untuk latensi keyboard',
  targetWaitPrompt: 'Tunggu latar hijau...',
  targetNowPrompt: 'KLIK SEKARANG!',
  labelAvgLatency: 'Rata-rata Latensi',
  labelMinLatency: 'Latensi Minimum',
  labelMaxLatency: 'Latensi Maksimum',
  labelJitter: 'Jitter (Fluktuasi)',
  labelFps: 'FPS Saat Ini',
  labelFrameTime: 'Waktu Bingkai',
  labelSamples: 'Sampel',
  labelGrade: 'Penilaian',
  gradeUltraFast: 'Sangat Cepat (<10ms)',
  gradeFast: 'Cepat (10-20ms)',
  gradeModerate: 'Sedang (20-35ms)',
  gradeHigh: 'Tinggi (>35ms)',
  btnReset: 'Reset',
  btnCopyReport: 'Salin Laporan',
  reportCopied: 'Laporan Disalin!',
  historyTitle: 'Pengukuran Terbaru',
  pipelineTitle: 'Analisis Pipa Perangkat Keras',
  distributionTitle: 'Distribusi Frekuensi',
  sampleCol: 'Sampel',
  typeCol: 'Tipe Input',
  latencyCol: 'Latensi Terukur',
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
      text: 'Pengukuran Input Lag dan Latensi Layar',
    },
    {
      type: 'paragraph',
      html: 'Ukur kecepatan respon sistem dan layar komputer Anda secara real-time.',
    },
  ],
};
