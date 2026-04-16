import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';

const slug = 'gamepad-vibration-tester';
const title = 'オンライン・ゲームパッド振動テスター';
const description =
  'ブラウザ上でゲームパッドのハプティックモーターとDual-Rumble振動をテストします。Xbox、DualShock、DualSense、および汎用コントローラーに対応。';

const faqData = [
  {
    question: 'オンラインでゲームパッドをテストするには何が必要ですか？',
    answer:
      'ゲームパッドをUSBケーブルでコンピュータやモバイルデバイスに接続するか、Bluetoothでペアリングするだけです。接続されたら、いずれかのボタンを押すと検出されます。',
  },
  {
    question: 'どのゲームパッドモデルでも動作しますか？',
    answer:
      'デバイスとOSがサポートしていれば、有名ブランド（PlayStationやXboxなど）の最新のゲームパッドのほとんどは互換性があります。',
  },
  {
    question: 'ゲームパッドの右側の振動が左側より弱いのですが、これは正常ですか？',
    answer:
      'はい、完全に正常です。ゲームパッドは通常アシンメトリー（非対称）設計になっており、片方が強く深い振動を、もう片方が高速で繊細な振動を担当しています。',
  },
  {
    question: 'これらのテストを実行するとバッテリーを大幅に消費しますか？',
    answer:
      '振動は、ワイヤレスゲームパッドの中で最もエネルギーを消費する機能の一つです。連続して長時間のテストを実行すると、通常よりも早くバッテリーが消耗します。',
  },
];

const howToData = [
  {
    name: 'ゲームパッドを接続して電源を入れる',
    text: 'USBケーブルまたはBluetoothで、PC、Mac、またはモバイルにゲームパッドをリンクさせます。',
  },
  {
    name: 'ゲームパッドのボタンを押す',
    text: 'ブラウザがゲームパッドを検出し、Web通信を開始するには、少なくとも1つのボタンを押す必要があります。',
  },
  {
    name: '振動モーターを調整する',
    text: '強力なモーター（Low）ときめ細やかなモーター（High）の出力を個別に設定します。',
  },
  {
    name: 'パターンを実行する',
    text: 'プリセットのいずれかを押すか、手動でパラメータを設定して信号を送信し、各コンポーネントの感触を確認します。',
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
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'リファレンス',
  bibliography: [
    {
      name: 'ハプティック振動の仕組み — HobbyConsolas',
      url: 'https://www.hobbyconsolas.com/reportajes/como-funciona-vibracion-haptica-mando-dualsense-ps5-757673',
    },
    {
      name: 'Gamepad API — W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'ゲーム用パッドの振動を監査する方法', level: 2 },
    {
      type: 'paragraph',
      html: 'ハプティックフィードバックは、ゲーミングハードウェアの中で最も没入感を高める要素の一つです。モーターが故障すると、最初の症状として異常なうなり音や非対称な振動が現れることが一般的です。早期の診断が大きな故障を防ぎます。',
    },
    { type: 'title', text: 'なぜ振動テストを実行するのですか？', level: 3 },
    {
      type: 'paragraph',
      html: '中古のゲームパッドを購入したとき、ドライバを更新した後、または落下させた後、ハプティックモーターをテストすることで、実際のハードウェア故障とソフトウェアの問題を区別できます。Xbox、PlayStation 4、PlayStation 5 (DualSense)、Nintendo Switch Pro、および汎用USBゲームパッドに対応しています。',
    },
    { type: 'title', text: 'Dual-Rumble 対 リニアアクチュエータ構造', level: 3 },
    {
      type: 'paragraph',
      html: 'クラシックなゲームパッド（Xbox、DualShock）は、2つの非対称マイクロモーターを使用しています。左側は深く、ゴロゴロとした振動を生成し、右側は高速で鋭いうなり音を生成します。DualSenseのような高度なデバイスは、質感や抵抗をシミュレートするリニアアクチュエータを使用しています。',
    },
    { type: 'title', text: '症状別診断ガイド', level: 3 },
    {
      type: 'paragraph',
      html: '各モーターを個別に100%で動作させます。両方とも同じ音がする場合、そのゲームパッドは単一モーターの模倣品である可能性があります。一方が反応しない場合は、分解する前に接続を確認してください。段階的な強度もテストしてください。高品質なモーターはON/OFFスイッチのように極端ではなく、徐々に反応します。',
    },
  ],
  ui: {
    badge: '振動テスト',
    title: 'ゲームパッド振動テスター',
    description: 'ゲームパッドのDual-Rumbleモーターを直接制御。',
    deviceDisconnected: 'ゲームパッド未接続',
    deviceDisconnectedSub: '開始するにはゲームパッドのボタンを押してください',
    deviceFallback: 'ゲームパッド接続完了',
    deviceConnectedSub: '接続は安定しています。テスト可能です。',
    noSupportWarning: "ブラウザでDual-Rumbleサポートが検出されませんでした。基本的な汎用振動を使用します。",
    tabPresets: 'おすすめプリセット',
    tabCustom: '精密設定',
    presetHeavyTitle: 'ハンマーストライク',
    presetHeavyDesc: '強力なモーターを最大で300ms作動。強い衝撃をシミュレート。',
    presetLightTitle: 'ハチの羽音',
    presetLightDesc: '右モーターのみ。異常なうなり音の検出に最適。',
    presetHeartbeatTitle: '鼓動',
    presetHeartbeatDesc: '繊細な連続パルス。慣性維持の確認に最適。',
    presetSongTitle: 'コインのリズム',
    presetSongDesc: '連続したコイン音をシミュレート。短くタクタイルな感触。',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Queenの名曲をその手に：ドン、ドン、チャッ！",
    presetEarthquakeTitle: '最大級の地震！',
    presetEarthquakeDesc: '両方のモーターを100%の爆発的な力で作動。非常に強烈です。',
    customStrongLabel: '強力な力（左）',
    customWeakLabel: '繊細な力（右）',
    customDurationLabel: 'パルス持続時間',
    btnSendSignal: '信号を送信',
  },
};
