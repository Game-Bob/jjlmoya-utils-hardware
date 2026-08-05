import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-input-lag';



const title = 'インプットラグ＆システム遅延測定テスト';
const description = '高精度タイマーとフレーム同期による、インプットラグおよび画面表示遅延のオンライン測定ツール。';

const faqData = [
  {
    question: 'インプットラグとは何ですか？',
    answer: 'マウスのクリックやキーボード入力から画面上に視覚的変化が反映されるまでの時間遅延のことです。',
  },
];

const howToData = [
  {
    name: 'モードを選択',
    text: '即時応答、キーボード遅延、または視覚反応モードを選択します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'システム遅延',
  modeInstant: '即時応答モード',
  modeKey: 'キーボード遅延',
  modeVisual: '視覚反応テスト',
  targetClickPrompt: 'ここをクリックして入力遅延を測定します',
  targetKeyPrompt: 'キーを押してキーボード遅延を測定します',
  targetWaitPrompt: '画面が緑になるまで待機...',
  targetNowPrompt: '今すぐクリック！',
  labelAvgLatency: '平均遅延',
  labelMinLatency: '最小遅延',
  labelMaxLatency: '最大遅延',
  labelJitter: 'ジッター (標準偏差)',
  labelFps: '現在のFPS',
  labelFrameTime: 'フレーム時間',
  labelSamples: 'サンプル数',
  labelGrade: '遅延評価',
  gradeUltraFast: '超高速 (<10ms)',
  gradeFast: '高速 (10-20ms)',
  gradeModerate: '標準 (20-35ms)',
  gradeHigh: '遅い (>35ms)',
  btnReset: '測定値をリセット',
  btnCopyReport: 'レポートをコピー',
  reportCopied: 'コピー完了！',
  historyTitle: '直近の測定履歴',
  pipelineTitle: 'ハードウェア遅延パイプライン分析',
  distributionTitle: '頻度分布グラフ',
  sampleCol: '回数',
  typeCol: '入力種別',
  latencyCol: '測定遅延',
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
      text: 'インプットラグと画面表示遅延のリアルタイム測定',
    },
    {
      type: 'paragraph',
      html: 'PCゲームや競技系ゲームにおけるシステム全体の入力遅延を高精度に評価します。',
    },
  ],
};
