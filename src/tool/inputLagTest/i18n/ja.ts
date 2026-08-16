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
  { question: 'ゲームで良い遅延はどのくらいですか？', answer: '10 ms未満は非常に高速です。10から20 msは高速、20から35 msは中程度で、それ以上は遅れを感じやすくなります。' },
  { question: '入力遅延を減らすにはどうしますか？', answer: '画面のリフレッシュレート、VSync、VRR、USBのポーリングを確認し、一度に一つの設定だけを変更します。' },
  { question: 'リフレッシュレートは入力遅延に影響しますか？', answer: '影響します。60 Hzは1フレーム16.67 ms、240 Hzは4.17 msです。描画処理とパネルの遅延も加わります。' },
  { question: 'Jitterを確認する理由は何ですか？', answer: '測定値のばらつきを示すためです。平均が少し高くても安定した構成の方が使いやすい場合があります。' },
];

const howToData = [
  {
    name: 'モードを選択',
    text: '即時応答、キーボード遅延、または視覚反応モードを選択します。',
  },
  { name: '入力を実行', text: 'テスト欄をクリックするかキーを押して入力イベントを発生させます。' },
  { name: '統計を確認', text: '複数回の入力後に平均、最小、最大、Jitterを確認します。' },
  { name: '再測定して比較', text: '設定を変えた後、同じ条件で測定を繰り返します。' },
  { name: '測定の限界を理解', text: '結果は構成の比較に使い、パネルの光学遅延の絶対値とは考えません。' },
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
    { type: 'stats', items: [
      { value: '< 10 ms', label: 'eスポーツ目標', trend: '競技向けの目安' },
      { value: '1000 Hz', label: '一般的なUSBポーリング', trend: '入力間隔は1 ms' },
      { value: '240 Hz', label: '高リフレッシュ画面', trend: '1フレーム4.16 ms' },
      { value: '16.6 ms', label: '60 Hzの間隔', trend: '1フレームの基準値' },
    ], columns: 4 },
    { type: 'card', title: 'ブラウザで遅延を測る仕組み', html: 'このテストはpointerdownとkeydownのイベントをrequestAnimationFrameによる画面更新と比較します。入力の検出からページの再描画までのローカルな時間差を推定します。' },
    { type: 'title', text: '入力遅延の信号がシステムを通る流れ' },
    { type: 'paragraph', html: '遅延は周辺機器のスイッチから見える画素まで積み重なります。各段階を分けて考えると、原因が機器、OS、描画処理、画面のどこにあるかを確認できます。' },
    { type: 'table', headers: ['構成要素', '一般的な範囲', '主なボトルネック', '改善方法'], rows: [
      ['スイッチ', '0.2から5.0 ms', '機械的な接点の揺れ', 'デバウンスを短くする'],
      ['USBポーリング', '0.125から8.0 ms', '低い更新頻度', '対応していれば頻度を上げる'],
      ['OSのキュー', '0.5から3.0 ms', 'バックグラウンド処理', '不要な処理を閉じる'],
      ['描画エンジン', '4.0から20.0 ms', 'CPU負荷の高いフレーム', '描画負荷を下げる'],
      ['GPUキュー', '8.0から33.0 ms', 'VSyncと複数バッファ', 'VSyncとVRRを比較する'],
      ['画面処理', '1.0から15.0 ms', '拡大縮小や補正', 'ゲームモードを使う'],
    ] },
    { type: 'tip', title: 'GPUの描画キューを減らす方法', html: 'GPUが上限に達すると複数のフレームを先に準備することがあります。最大値より少し低いフレーム制限やReflexまたはAnti Lagを試し、変更後に再測定してください。' },
    { type: 'title', text: '入力デバイスの遅延を比較する' },
    { type: 'paragraph', html: 'マウス、キーボード、タッチ画面は接続方式、電子回路、走査頻度によって遅延が異なります。同じ画面と設定を使って比較すると結果を判断しやすくなります。' },
    { type: 'comparative', columns: 3, items: [
      { title: 'ゲーミングマウス', description: '高頻度の有線または無線接続です。', highlight: '0.5から2 ms', points: ['1000 Hz以上のポーリング', '光学スイッチ', '処理の速いセンサー'] },
      { title: 'メカニカルキーボード', description: 'デバウンスを調整できるキー行列です。', highlight: '1から10 ms', points: ['磁気スイッチ', '行列走査の設定', '作動距離の調整'] },
      { title: 'タッチ画面', description: '表示パネル上の静電容量式デジタイザーです。', highlight: '15から45 ms', points: ['タッチのサンプリング頻度', '画面コントローラーの処理', '誤タッチを抑えるフィルター'] },
    ] },
    { type: 'title', text: 'リフレッシュレートが加える画面遅延' },
    { type: 'paragraph', html: 'リフレッシュレートは画像更新の最小間隔を決めます。60 Hzは240 Hzより表示まで時間がかかりますが、描画処理と同期方式も結果に影響します。' },
    { type: 'list', items: ['60 Hzは1フレーム16.67 ms', '120 Hzは1フレーム8.33 ms', '144 Hzは1フレーム6.94 ms', '240 Hzは1フレーム4.17 ms', '360 Hzは1フレーム2.78 ms', '540 Hzは1フレーム1.85 ms'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: '物理的な操作から画面に結果が見えるまでの時間です。' },
      { term: 'Jitter', definition: '測定値のばらつきで、時間の安定性を示します。' },
      { term: 'VSync', definition: '垂直同期です。ティアリングを抑えますが待ち時間を増やす場合があります。' },
      { term: 'VRR', definition: 'GPU出力に合わせて画面の頻度を変える仕組みです。' },
      { term: '画素応答時間', definition: '画素が別の色へ変化するために必要な時間です。' },
    ] },
    { type: 'title', text: 'ブラウザ測定の利点と限界' },
    { type: 'paragraph', html: 'この測定は専用のオシロスコープや高速カメラなしで設定を比較できます。一方で、ドライバー、ゲーム、パネルの光学的な内部遅延をすべて直接見ることはできません。' },
    { type: 'proscons', title: 'ウェブ測定の評価', items: [
      { pro: '特別な機材なしで利用できる', con: 'ブラウザのイベント処理に左右される' },
      { pro: '周辺機器をすぐ比較できる', con: '画素の応答時間は直接測れない' },
      { pro: '高分解能のローカルタイマーを使う', con: 'ブラウザが精度を下げる場合がある' },
      { pro: '更新の安定性を確認できる', con: '非アクティブなタブは遅くなる場合がある' },
    ] },
    { type: 'title', text: '高い入力遅延を診断する' },
    { type: 'paragraph', html: '平均が30 msを超える場合やばらつきが大きい場合は、画面をアクティブにして再測定し、VSync、グラフィック支援、USB頻度、CPU負荷を確認してください。' },
    { type: 'diagnostic', variant: 'warning', title: '入力遅延の診断通知', html: 'デスクトップで平均が35 msを超えるなら画面モードとハードウェアアクセラレーションを確認します。一度に一つだけ設定を変えてください。' },
    { type: 'title', text: 'システム遅延を段階的に下げる' },
    { type: 'paragraph', html: '周辺機器、画面、システムを分けて調整します。変更のたびに同じ条件で新しい測定を行い、改善が実際に起きたかを確認します。' },
    { type: 'summary', title: '遅延最適化の確認項目', items: ['適切なUSBポーリングを選ぶ', '画面のゲームモードを使う', '不要な画像補正を切る', 'VSyncとVRRを比較する', 'フレームレートを安定させる', '重いバックグラウンド処理を閉じる', '変更後に測定を繰り返す'] },
    { type: 'message', title: '結果を比較するための基本', html: 'バックグラウンドアプリを閉じ、テスト画面をアクティブにして、少なくとも15回測定します。偶然の値に左右されないよう、平均だけでなく中央値とばらつきも確認してください。' },
  ],
};
