import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-delay-test';
const title = 'オーディオ遅延テスト';
const description = 'スピーカー、ヘッドホン、Bluetooth機器、動画再生の音声遅延をブラウザ上のパルステストで測定・調整します。';

const faq = [
  {
    question: 'このオーディオ遅延テストは何を測定しますか？',
    answer: 'マイクモードではブラウザの発音指示からマイクでの集音までの時間を推定します。手動モードでは目と耳で調整できます。',
  },
  {
    question: 'マイクなしでBluetoothの遅延をテストできますか？',
    answer: 'はい。パルスを開始し、Bluetoothを選択してスライダーを動かし、光と音が一致する補正値を測定できます。',
  },
  {
    question: 'なぜマイクの許可が必要ですか？',
    answer: 'スピーカーから出たテスト音を検出するためにマイクにアクセスします。音声データは外部へ送信されません。',
  },
  {
    question: 'マイク測定の結果が変動する理由は何ですか？',
    answer: '部屋の反射音、マイクのゲイン制御、OSのバッファリングやブラウザ処理により結果が変化するためです。',
  },
  {
    question: 'どのテストモードを選ぶべきですか？',
    answer: '部屋の再生にはスピーカー、直接出力には有線ヘッドホン、ワイヤレスにはBluetooth、動画確認には動画同期を選びます。',
  },
  {
    question: 'マイクの音声データはサーバーに送信されますか？',
    answer: 'いいえ。音声はブラウザ内でローカルに解析され、録音データのアップロードは行われません。',
  },
];

const howTo = [
  {
    name: '再生経路を選択',
    text: 'スピーカー、有線ヘッドホン、Bluetooth、動画同期のいずれかを選択します。',
  },
  {
    name: '手動パルスで調整を開始',
    text: 'テスト開始を押し、クリック音と視覚パルスを合わせるようにスライダーを移動します。',
  },
  {
    name: '必要に応じてマイク測定を有効化',
    text: 'マイクを有効化し、許可を与えてリスニング位置に設置して測定します。',
  },
  {
    name: '測定結果を推定値として確認',
    text: '中央値と信頼度度合いを環境調整の参考にしてください。',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Bluetoothおよび動画同期用のオーディオ遅延テスト', level: 2 },
    {
      type: 'paragraph',
      html: 'このブラウザ用オーディオ遅延テストは、映像と音声のずれを確認・調整するためのツールです。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'マイクなしで即座にテスト可能',
      badge: 'ローカル処理',
      html: '<p>手動テストはマイクなしで動作します。視覚マーカーとクリック音に合わせてスライダーを調整してください。</p>',
    },
    {
      type: 'title',
      text: 'Bluetooth音声遅延の測定方法',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Bluetoothを選択し、適度な音量に設定します。',
        '使用しているブラウザからパルスシーケンスを開始します。',
        '光の点滅とクリック音のタイミングを比較します。',
        'ズレがなくなる位置までスライダーを移動します。',
        '環境や機器を変更した場合は再テストを行います。',
      ],
    },
    {
      type: 'table',
      headers: ['モード', '最適な用途', '主な制限事項'],
      rows: [
        ['スピーカー', '室内再生やテレビ', '部屋の距離や反射音が測定に影響します。'],
        ['有線ヘッドホン', '直接ヘッドホン出力', '密閉型ヘッドホンはマイクで集音しにくい場合があります。'],
        ['Bluetooth', 'ワイヤレス機器全般', 'コーデックのバッファ量は機器により変動します。'],
        ['動画同期', 'ディスプレイと再生機器', '再生ソフト独自の遅延が含まれる場合があります。'],
      ],
    },
    {
      type: 'title',
      text: 'マイクを使用した測定機能',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'マイクを使用すると、音の発生からマイクがピークを検出するまでの時間を測定し、中央値を算出します。',
    },
    {
      type: 'tip',
      title: 'マイクを実際のリスニング位置に設置',
      html: 'スピーカーの場合は実際の着席位置にマイクを置き、静かな環境で測定を行ってください。',
    },
    {
      type: 'title',
      text: '遅延測定値が変動する要因',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音声遅延はブラウザ、OSのオーディオバッファ、Bluetoothコーデック、スピーカー特性などの複合的な結果です。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '測定結果の取り扱い',
      badge: '目安値',
      html: '<p>数値は環境設定の比較目安としてご活用ください。プロ仕様の測定器の代用ではありません。</p>',
    },
  ],
  ui: {
    badge: 'レイテンシ観測',
    modeLabel: '再生経路',
    modeSpeakers: 'スピーカー',
    modeWired: '有線',
    modeBluetooth: 'Bluetooth',
    modeVideo: '動画同期',
    startTest: 'テスト開始',
    stopTest: 'テスト停止',
    enableMic: 'マイクを有効化',
    micEnabled: 'マイク準備完了',
    calibrationTitle: '位置補正',
    calibrationHint: '光と音が一致するまでスライダーを動かしてください',
    calibrationEarly: '音声が先行',
    calibrationLate: '映像が先行',
    calibrationCenter: '一致',
    visualLane: '映像',
    audioLane: '音声',
    statusReady: '準備完了',
    statusRunning: 'パルスシーケンス実行中',
    statusWaiting: 'パルス待機中',
    resultTitle: '現在の測定値',
    latencyLabel: '測定された遅延',
    alignmentLabel: '補正値',
    confidenceLabel: '信頼度',
    samplesLabel: 'サンプル数',
    notMeasured: '未測定',
    manualConfidence: '手동のみ',
    lowConfidence: '信頼度：低',
    mediumConfidence: '信頼度：中',
    highConfidence: '信頼度：高',
    noMic: 'このブラウザではマイクが利用できません',
    permissionDenied: 'マイクのアクセス許可が得られませんでした',
    limitationTitle: '結果は環境目安としてご確認ください',
    limitationText: '部屋の反射やOSの処理により測定値は変動します。音声データは外部送信されません。',
    copyReport: 'レポートをコピー',
    copied: 'コピー完了',
    reset: 'リセット',
    safety: '小音量から開始してください。歪みが発生した場合は停止してください。',
    pulse: '同期',
  },
};
