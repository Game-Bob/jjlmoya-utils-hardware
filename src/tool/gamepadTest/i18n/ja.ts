import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';

const slug = 'gamepad-test';
const title = 'オンライン・ゲームパッド＆コントローラーテスト';
const description = 'Xbox、PlayStation、PCコントローラーをテストします。デッドゾーン、スティックのドリフト、ボタンの動作を可視化。';

const faqData = [
  {
    question: 'ジョイスティックのドリフト現象とは何ですか？',
    answer: 'ドリフトとは、スティックに触れていないのにコントローラーが動きを感知してしまう現象です。内部のポテンショメータが摩耗し、一定方向に誤った電気信号を送ることで発生します。',
  },
  {
    question: 'ソフトウェアでドリフトを修正することはできますか？',
    answer: 'ドリフトが軽微な場合は、ゲーム設定で「デッドゾーン（遊び）」を大きく設定することで解消できます。これにより、中央付近の小さな微動を無視するようにします。',
  },
  {
    question: 'PS5、Xbox、Switchのコントローラーに対応していますか？',
    answer: 'はい。当ツールは最新ブラウザの標準Gamepad APIを使用しており、DualSense、DualShock 4、Xboxコントローラーなど、USBまたはBluetoothで接続されたほぼすべてのコントローラーを検出します。',
  },
  {
    question: 'ブラウザがコントローラーを検出しません。',
    answer: 'セキュリティ上の理由から、ブラウザは最初のボタン入力があるまでゲームパッドを有効にしません。表示されない場合は、いずれかのボタン（AやXなど）を押し、シークレットモードの設定を確認してください。',
  },
];

const howToData = [
  {
    name: 'コントローラーを接続する',
    text: 'USBで接続するか、Bluetoothでコンピュータとペアリングしてください。',
  },
  {
    name: '検出を有効にする',
    text: 'スティックを動かすか、いずれかのボタンを押してブラウザにデバイスを認識させます。',
  },
  {
    name: 'デッドゾーンをテストする',
    text: 'スティックから手を離し、画面上の軸を確認します。数値が 0.0000 でない場合は、わずかなドリフトが発生しています。',
  },
  {
    name: 'ボタンと振動を確認する',
    text: '各ボタンとトリガーを押してください。視覚的なインジケータが点灯し、対応デバイスであれば振動機能もテストできます。',
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

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '技術リファレンス',
  bibliography: [
    {
      name: 'Gamepad API 標準 - W3C',
      url: 'https://w3c.github.io/gamepad/',
    },
    {
      name: 'Vibration API - MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'オンライン・ゲームパッドテスト：ドリフトとスティックの問題を検出',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Xbox、PlayStation、Switchなどのコントローラーを無料テスト。デッドゾーンの可視化、ドリフト検出、振動テスト。',
    },
    {
      type: 'title',
      text: 'ジョイスティックのドリフトとは',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ドリフトは、触れていないのにアナログスティックが動きを登録してしまう一般的な不具合です。内部のポテンショメータの摩耗が原因です。',
    },
    {
      type: 'title',
      text: '対応コントローラー',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Xbox One、Xbox Series X/S、PlayStation 4、PlayStation 5 (DualSense)、Nintendo Switch Pro、およびほぼすべての最新のUSB/Bluetoothゲームパッドに対応。',
    },
  ],
  ui: {
    badge: '入力テスト',
    title: 'ゲームパッド＆コントローラーテスト',
    description: 'コントローラーをテストして不具合を検出します。',
    connectionMessage: 'USBまたはBluetoothデバイスを接続してください',
    connectionStatus: '接続中',
    axisLabel: 'スティック軸',
    buttonsLabel: 'ボタン',
    vibrationTitle: '振動テスト',
    vibrationDescription: 'ブラウザのサポートと対応するゲームパッドが必要です。',
    vibrationLow: '弱 (Rumble)',
    vibrationHigh: '強 (Buzz)',
    eventHistoryTitle: 'イベント履歴',
    eventHistoryClear: 'クリア',
    eventWaiting: 'イベントを待機中...',
    gameStartBtn: 'チャレンジ開始',
    gameControllerWarning: 'ゲームパッドを接続するか、キーボードを使用してください',
    gameTimer: 'タイム',
    gameScore: 'スコア',
    gameInstruction: '連打しろ！',
    gameCompleted: 'チャレンジ完了',
    gameNewRecord: '新記録達成！',
    gameRestartBtn: 'リトライ',
    gameFeedback: '君はボタン連打のレジェンドだ',
    gameIntroTitlePre: 'プロゲーマー級の',
    gameIntroHighlight: '反射神経',
    gameIntroTitlePost: '？',
    gameIntroDescPre: 'コントローラーの遅延と君の反応速度をテスト。制限時間は',
    gameIntroDescSeconds: '30秒',
    gameIntroDescPost: '。すべてのボタンをマスターしよう。',
    gameShareBtn: 'ランクをシェア',
    gameLogConnected: '接続完了',
    gameLogDisconnected: '切断されました',
    gameLogCleared: 'ログをクリアしました...',
    gameLogBtnPrefix: 'ボタン',
    gameVibNotSupported: '振動機能はサポートされていません。',
    gameVibLow: '弱',
    gameVibHigh: '強',
    gameMoveStick: 'スティックを動かせ',
    gamePress: '押せ！',
    rankLegendaryName: 'レジェンダリー',
    rankLegendaryDesc: '君の指は音速を超えている。',
    rankLegendaryFlavor: 'コントローラーが火を吹くぜ！',
    rankProName: 'プロゲーマー',
    rankProDesc: '鋼の反射神経と完璧に調整された操作性。',
    rankProFlavor: 'コントローラーが火を吹くぜ！',
    rankGamerName: 'ゲーマー',
    rankGamerDesc: '悪くない。でも競技レベルにはもっと練習が必要だ。',
    rankGamerFlavor: 'あと少しだった！',
    rankNoobName: 'ヌーブ',
    rankNoobDesc: '本当にコントローラーの電源入ってる？',
    rankNoobFlavor: 'コントローラーの調子が悪かっただけだし！',
    gameShareText: '僕の記録を抜けるかな？',
    gameShareScorePrefix: 'スコア：',
    gameShareScoreSuffix: 'ヒット',
    gameShareTitle: 'オンライン・ゲームパッドテスト',
  },
};
