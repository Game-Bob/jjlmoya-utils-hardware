import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-refresh-rate-detector';
const title = 'モニターリフレッシュレート測定器';
const description = 'requestAnimationFrameを使用して、モニターのリフレッシュレートを瞬時に高精度で検出します。フレームの安定性をテストし、業界標準と比較できます。';

const faqData = [
  {
    question: 'リフレッシュレート（Hz）とは何ですか？',
    answer: 'リフレッシュレートとは、モニターが1秒間に画像を更新する回数のことです。60Hzのモニターは1秒間に60回、144Hzは144回更新されます。数値が高いほど、動きがより滑らかになります。',
  },
  {
    question: 'この測定器の精度はどのくらいですか？',
    answer: 'このツールは、モニターの更新サイクルと同期するrequestAnimationFrameを使用しています。精度はシステム負荷に依存します。安定モードでは、より長い時間測定することで精度を高めています。',
  },
  {
    question: '安定モードと高速モードの違いは何ですか？',
    answer: '高速モードは短時間（約3秒）測定し、素早く結果を表示します。安定モードはより長い時間（約10秒）かけてシステムノイズを除去し、より信頼性の高い結果を提供します。',
  },
  {
    question: '検出されたHzがモニターの仕様と異なるのはなぜですか？',
    answer: 'ケーブルの接続不良、ドライバの古さ、OSのスケーリング設定の影響などが考えられます。ディスプレイケーブルの抜き差しや、GPUドライバの更新を試してください。',
  },
  {
    question: '最新のモニターはどのようなリフレッシュレートをサポートしていますか？',
    answer: '一般的な標準は、60Hz（基本）、75Hz、120Hz、144Hz（ゲーム用）、240Hz（競技ゲーム用）、360Hz（プロeスポーツ用）などです。',
  },
];

const howToData = [
  {
    name: 'ツールを読み込む',
    text: 'このページを開くだけで、測定が自動的に開始されます。',
  },
  {
    name: '安定するまで待つ',
    text: '安定モードまたは高速モードを選択します。ウィンドウを動かさずに測定が完了するまで待機します。',
  },
  {
    name: 'メーターを確認する',
    text: 'モニターのリフレッシュレートが、基準統計（最小/最大/平均）と共にスムーズなダイヤルで表示されます。',
  },
  {
    name: '標準と比較する',
    text: 'モニターがどの標準（60, 75, 120, 144, 240, 360Hz）に一致しているかを表示します。',
  },
  {
    name: 'オプション：フレームスキップテスト',
    text: '画面を横切るアニメーションの四角形を見て、視覚的に滑らかさを確認します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
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
      text: 'モニターリフレッシュレート測定器：ディスプレイHzをオンラインでテスト',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'モニターのリフレッシュレート（60Hz, 144Hz, 240Hzなど）を瞬時に高精度で検出します。フレームの安定性をテストし、ディスプレイが定格仕様で動作しているかを確認できます。',
    },
    {
      type: 'title',
      text: 'モニターのリフレッシュレートが重要な理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'リフレッシュレートは、画面上の動きがどれだけ滑らかに見えるかを決定します。ゲーマーは144Hz以上のモニターで恩恵を受けますが、一般的なユーザーは60Hzで十分です。このツールは、モニターが公称通りのリフレッシュレートを出しているか確認するのに役立ちます。',
    },
    {
      type: 'title',
      text: 'リフレッシュレートを検出する方法',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'この測定器を読み込むと、すぐに測定が開始されます',
        '高速（3秒）または安定（10秒）の測定モードを選択します',
        'メーターのダイヤルからモニターのHzを読み取ります',
        '業界標準（60, 75, 120, 144, 240, 360Hz）と比較します',
      ],
    },
    {
      type: 'title',
      text: '一般的なリフレッシュレート標準',
      level: 3,
    },
    {
      type: 'table',
      headers: ['標準', '主な用途', '一般的なユーザー'],
      rows: [
        ['60Hz', '一般的なコンピュータ利用', '事務、Web閲覧'],
        ['75Hz', 'ライトなゲーム', 'カジュアルゲーマー'],
        ['120Hz', 'マルチメディア', 'コンソール機、配信視聴'],
        ['144Hz', '競技ゲーム', 'FPS、高速なアクションゲーム'],
        ['240Hz+', 'プロeスポーツ', 'プロゲーマー、配信者'],
      ],
    },
    {
      type: 'title',
      text: 'トラブルシューティング：Hzが想定より低く表示される場合',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'HDMI/DisplayPortケーブルの接続を確認してください。接続不良は帯域幅を低下させます。',
        'GPUドライバ（NVIDIA, AMD, Intel）を更新してください。',
        'OSのディスプレイ設定を確認し、高リフレッシュレートが有効になっているか確認してください。',
        '別のケーブルやモニターのポートを試してください。',
        'コンピュータを再起動して再テストしてください。',
      ],
    },
    {
      type: 'title',
      text: 'この測定器の仕組み',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このツールはブラウザのrequestAnimationFrame APIを使用しており、モニターの更新サイクルと直接同期します。アニメーションフレーム間の時間を測定することで、特別なハードウェアを必要とせずに正確なリフレッシュレートを高精度で算出します。',
    },
  ],
  ui: {
    badge: 'ディスプレイテスト',
    title: 'モニターリフレッシュレート測定',
    description: 'ディスプレイのリフレッシュレートを瞬時に測定',
    modeStable: '安定（10秒、高精度）',
    modeFast: '高速（3秒、クイック）',
    measurementStatus: '測定中...',
    currentHz: '現在値',
    averageHz: '平均値',
    maxHz: '最大値',
    minHz: '最小値',
    standardDetected: '検出された標準',
    frameSkippingTest: 'フレームスキップテスト',
    startMeasurement: '測定開始',
    resetMeasurement: 'リセット',
    copyResult: '結果をコピー',
    copiedFeedback: 'クリップボードにコピーしました！',
    optimalConfiguration: '[OK] 最適な設定',
    suboptimalConfiguration: '[警告] 最適値未満',
    unstableRefreshRate: '[警告] 不安定なリフレッシュレート',
    measurementNotStarted: '測定準備完了',
    switchMonitorHint: 'ウィンドウを別のモニターに移動してテストできます',
    incompatibleBrowserMsg: 'お使いのブラウザはrequestAnimationFrameをサポートしていません',
  },
};
