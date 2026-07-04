import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = 'モバイルセンサーテスト';
const description = 'ジャイロスコープ、加速度センサー、モーションセンサー、水準器のオンラインテストをスマホで実行し、傾き、回転、ドリフト、センサーのキャリブレーション問題をチェックします。';

const faqData = [
  {
    question: 'スマホのジャイロスコープをオンラインでテストするには？',
    answer: 'テストをスマホで開き、キャリブレーション開始をタップして、要求されたらモーションアクセスを許可し、デバイスを回転・傾斜させます。正常なジャイロスコープと方向センサーは、alpha、beta、gamma を凍結や急激なジャンプなしにスムーズに更新するはずです。',
  },
  {
    question: '水準器で加速度センサーをテストできますか？',
    answer: 'はい。テスト開始後、スマホを平らな机の上に置いてください。バブルは中心付近に落ち着き、加速度の値は安定しているはずです。スマホが静止しているのにバブルが大きくずれる場合、加速度センサーのキャリブレーションが必要か、ケース、机、デバイスのハードウェアが干渉している可能性があります。',
  },
  {
    question: 'なぜ iPhone はモーション許可を求めるのですか？',
    answer: 'iPhone と iPad の Safari は、ウェブサイトがモーションセンサーと方向センサーにアクセスする前にタップを必要とします。許可が拒否された場合、モーションアクセスを許可するまで、テストはジャイロスコープや加速度センサーのデータを読み取れません。',
  },
  {
    question: '壊れたコンパスを修理またはキャリブレーションできますか？',
    answer: 'ブラウザツールでハードウェアを修理したり、システムのコンパスキャリブレーションを強制したりすることはできません。このテストは症状の特定に役立ちます：読み取り値の凍結、ノイズの多い動き、ドリフト、許可不足、センサーを公開しないブラウザ。',
  },
];

const howToData = [
  { name: 'スマホでテストを開く', text: '診断したい iPhone、iPad、Android スマホ、またはタブレットを使用してください。デスクトップブラウザには通常、公開するモーションセンサーがありません。' },
  { name: 'モーションアクセスを許可する', text: 'キャリブレーション開始をタップし、ブラウザが表示するモーションまたは方向の許可プロンプトを受け入れます。' },
  { name: '傾きと回転をテストする', text: 'スマホを前に傾け、左右に回転させ、机の上で平らに回します。alpha、beta、gamma、加速度の滑らかな変化を観察します。' },
  { name: '平らな面でドリフトを確認する', text: 'スマホを数秒間静止させます。健康なセンサーは、常にさまよったり、スパイクしたり、凍結したりせずに安定するはずです。' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'スマホ向けオンラインジャイロスコープ・加速度センサーテスト', level: 2 },
    {
      type: 'paragraph',
      html: '画面回転がおかしい、ゲームや AR アプリがドリフトする、水準器アプリが不正確に見える、ナビゲーションが間違った方向を指す、またはスマホが傾きに正しく反応しない場合に、このモバイルセンサーテストを使用してください。テストはジャイロスコープ、加速度センサー、回転、水準器の動作をリアルタイムで表示し、ブラウザの許可問題と実際のセンサーまたはキャリブレーションの問題を区別できます。',
    },
    {
      type: 'stats',
      items: [
        { label: '主な検索意図', value: 'ジャイロスコープをオンラインテスト' },
        { label: 'あわせて確認', value: '加速度センサーのドリフト' },
        { label: '最適なデバイス', value: 'スマホまたはタブレット' },
      ],
    },
    { type: 'title', text: '各センサー読み取り値が示すもの', level: 3 },
    {
      type: 'table',
      headers: ['読み取り値', '用途', '警告サイン'],
      rows: [
        ['Alpha', '垂直軸周りの回転をチェック。コンパスのような動きや方位変化に役立ちます。', 'スマホを平らに回しても変化しない、大きくジャンプする、またはゼロで凍結する。'],
        ['Beta', '前後の傾きをチェック。画面回転、ゲーム、カメラ水平調整、AR 操作に役立ちます。', '間違った方向に動く、一つの値で張り付く、またはスマホが静止しているのにドリフトし続ける。'],
        ['Gamma', '左右のロールをチェック。横向き回転、レースゲーム、水準器アプリ、スタビライザーに役立ちます。', '片側の反応が異なる、値がノイズが多い、または平らな机の上でバブルが中央に戻らない。'],
        ['加速度 X/Y/Z', '加速度センサーの応答、振動検出、重力方向、動きの安定性をチェック。', '静止時に大きなスパイクがある、動きに反応しない、またはケースを外した後に読み取り値が不安定になる。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'このテストで診断できる症状',
      html: '<p>ライブ値を使用して、自動回転が機能しない、ジャイロスコープが遅延しているように感じる、加速度センサーのドリフト、コンパスキャリブレーションの警告、AR トラッキングがずれる、カメラの水平エラー、片側に引っ張られるモーションコントロール、またはネイティブアプリでのみ動きを報告しブラウザでは報告しないスマホを調査します。</p>',
    },
    { type: 'title', text: 'ジャイロスコープ vs 加速度センサー vs コンパス', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'ジャイロスコープ', description: '回転速度を測定します。AR、ゲーム、カメラ安定化、モーションコントロール、スムーズな方向変更に重要です。' },
        { title: '加速度センサー', description: '加速度と重力方向を測定します。傾き、振動検出、歩数検出、デジタル水準器の動作を支えます。' },
        { title: 'コンパス / 磁力計', description: '方位の推定に役立ちますが、磁石、金属物、車載ホルダー、ケース、スピーカー、ノートパソコン、近くの電子機器によって妨害される可能性があります。' },
      ],
    },
    { type: 'title', text: 'センサーキャリブレーションを正しくテストする方法', level: 3 },
    {
      type: 'list',
      items: [
        'テスト前に磁気ケース、MagSafe ウォレット、金属マウント、コントローラークリップ、アクセサリーを取り外してください。',
        'スマホをしっかりした平らな机の上に置き、ドリフトを判断する前に数秒間待ちます。',
        'すぐに振るのではなく、各軸に沿ってスマホをゆっくり回転させます。',
        'ブラウザがデータを表示しない場合、Safari または Chrome をネイティブのセンサーまたはコンパスアプリと比較します。',
        '複数のアプリで読み取り値が凍結している場合は、デバイスを再起動してテストを繰り返します。',
      ],
    },
    {
      type: 'tip',
      title: 'iPhone と Android の許可に関する注意',
      html: 'iPhone と iPad では、Safari がタップ後にモーションと方向の許可を求める場合があります。Android では、Chrome は通常モーションセンサーをより直接的に公開しますが、プライバシー設定、ブラウザフラグ、バッテリー節約モード、埋め込み WebView がセンサーデータをブロックまたは削減する可能性があります。',
    },
    {
      type: 'table',
      headers: ['問題', '考えられる原因', '次のステップ'],
      rows: [
        ['値がまったく変わらない', '許可拒否、未対応ブラウザ、デスクトップデバイス、制限付き WebView。', 'スマホ本体で開き、Safari または Chrome を使用し、モーションアクセスを許可してページを再読み込みします。'],
        ['机の上でバブルがドリフトする', 'キャリブレーション問題、凹凸のある表面、ケースの干渉、加速度センサーのノイズ。', 'ケースを外し、既知の平らな面を使用し、再起動してネイティブの水準器アプリと比較します。'],
        ['コンパスの方向が間違っている', '磁気干渉またはシステムコンパスのキャリブレーション。', '金属や電子機器から離れ、OS のコンパスキャリブレーションフローを使用します。'],
        ['値がジャンプまたはスパイクする', 'センサーノイズ、ハードウェアの損傷、ブラウザの積極的な制限、突然の物理的動き。', '静止してテストし、重いアプリを閉じ、別のブラウザまたはネイティブアプリと比較します。'],
      ],
    },
    {
      type: 'summary',
      title: 'このテストの用途',
      items: [
        'アプリをインストールせずにスマホのジャイロスコープをオンラインでテスト。',
        'ライブ水準器で加速度センサーのドリフトをチェック。',
        'モーションコントロールの失敗がハードウェア、キャリブレーション、許可、ブラウザサポートのいずれによるものかを特定。',
        'AR、ゲーム、カメラ水平調整、ナビゲーション、画面回転のトラブルシューティングに向けてスマホを準備。',
      ],
    },
  ],
  ui: {
    startButton: 'キャリブレーション開始',
    permissionHint: 'タップしてモーションセンサーのロックを解除',
    privacyBadge: 'ローカルセンサーデータ',
    privacyCopy: '方向と動きの読み取り値は、このブラウザセッション内に留まります。',
    orientationPanel: '方向',
    motionPanel: 'モーション',
    bubblePanel: 'デジタル水準器',
    statusReady: 'センサー許可の準備完了',
    statusWaiting: 'ブラウザ許可を待っています',
    statusDenied: 'センサーアクセスが拒否されたか利用できません',
    statusUnsupported: 'このブラウザではモーションセンサーが公開されていません',
    statusActive: 'ライブセンサーストリーム実行中',
    steadyLabel: '安定',
    movingLabel: '移動中',
    shakingLabel: '振動中',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'レベルオフセット',
    motionMagnitudeLabel: 'モーションの大きさ',
    cubeLabel: '3Dデバイス方向キューブ',
    bubbleLabel: '水準器インジケーター',
    calibrationLabel: 'ライブ角度',
  },
};
