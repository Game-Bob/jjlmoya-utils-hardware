import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-delay-test';
const title = 'オーディオ遅延テスト';
const description = 'スピーカー、ヘッドホン、Bluetooth機器、動画再生のオーディオ遅延をブラウザのローカルパルステストで確認できます。';

const faq = [
  {
    question: 'このオーディオ遅延テストは何を測定しますか？',
    answer: 'オプションのマイクモードは、ブラウザがスケジュールしたクリック音とマイクが拾った音声の間の時間を推定します。手動モードは耳と目で視覚と音声の同期を整えるのに役立ちます。いずれのモードもデバイス全体のハードウェア絶対遅延を測定するラボ仕様のテストではありません。',
  },
  {
    question: 'マイクなしでBluetoothのレイテンシをテストできますか？',
    answer: 'はい。パルスシーケンスを開始し、Bluetoothを選択して、画面の点滅とクリック音が同時に感じられるまで調整スライダーを動かします。結果は正確な測定値ではなく補正値として保存されます。',
  },
  {
    question: 'なぜマイクモードにはアクセス許可が必要なのですか？',
    answer: 'スピーカーから再生されたテストクリック音をマイクで拾うためです。音声の処理はすべてブラウザ内部でローカルに行われ、外部サーバーへのアップロードは行われません。',
  },
  {
    question: 'マイクの測定結果が変動することがあるのはなぜですか？',
    answer: '部屋の反響、マイクの自動ノイズ抑制、OSのバッファリング、ブラウザの処理タイミング、マイクとスピーカーの距離が影響するためです。現在のセットアップにおける推定量としてご活用ください。',
  },
  {
    question: 'どのテストモードを選択すべきですか？',
    answer: '部屋での再生にはスピーカー、直接出力には有線ヘッドホン、ワイヤレス機器にはBluetooth、動画プレイヤーやディスプレイのズレ確認には動画同期を選択してください。',
  },
  {
    question: 'マイク音声がサーバーへ送信されることはありますか？',
    answer: 'いいえ。マイク入力はブラウザのアナライザのみで処理され、録音ファイルが送信されることはありません。',
  },
];

const howTo = [
  {
    name: '再生経路を選択する',
    text: 'スピーカー、有線ヘッドホン、Bluetooth、または動画同期を選択します。',
  },
  {
    name: '手動パルスで開始する',
    text: '「テスト開始」を押し、水色の視覚パルスとクリック音が一致するようにスライダーで調整します。',
  },
  {
    name: '必要に応じてマイク測定を追加する',
    text: '「マイクを有効化」を押し、アクセスを許可してマイクを聴取位置に配置し、再度パルスを実行します。',
  },
  {
    name: '推定値として結果を確認する',
    text: '中央値の遅延時間と信頼度をセットアップの参考指標として活用してください。',
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
    { type: 'title', text: 'Bluetoothおよび動画同期用オーディオ遅延テスト', level: 2 },
    {
      type: 'paragraph',
      html: 'このブラウザベースのオーディオ遅延テストは、現在使用しているデバイスでの視覚合図と音声のズレをチェックするのに役立ちます。Bluetoothヘッドホン、ワイヤレススピーカー、有線イヤホン、動画同期の確認に最適です。ファイルダウンロードの必要がなく、ブラウザ内でローカルにテスト音を生成します。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'マイクなしで今すぐ開始可能',
      badge: 'ローカルで安全処理',
      html: '<p>手動パルステストはマイクアクセスなしで動作します。視覚マーカーとクリック音を観察し、同時に感じられるまで補正スライダーを動かしてください。ハードウェアの絶対値を過剰に提示することなく、セットアップに必要な補正値を提供します。</p>',
    },
    {
      type: 'title',
      text: 'Bluetoothオーディオレイテンシの測定方法',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        '開始前にBluetoothを選択し、聞きやすい音量に設定します。',
        '普段再生に使用しているのと同じブラウザとデバイスからパルスを実行します。',
        '長い楽曲を評価するのではなく、視覚パルスとクリック音を直接比較します。',
        '両方の合図が一致するまで補正スライダーを移動させます。',
        'コーデック、OS、ブラウザ、距離を変更した場合は再テストを行います。',
      ],
    },
    {
      type: 'table',
      headers: ['モード', '推奨される用途', '主な留意事項'],
      rows: [
        ['スピーカー', '部屋での再生やテレビ用スピーカー', '部屋の距離や壁の反響が音響経路に影響を与えます。'],
        ['有線ヘッドホン', '直接ヘッドホン出力', '密閉型ヘッドホンの場合、マイクが音を拾いにくい場合があります。'],
        ['Bluetooth', 'ワイヤレスイヤホンおよびスピーカー', 'コーデックのバッファリングは機器やアプリにより異なります。'],
        ['動画同期', '画面表示とプレイヤーの同調確認', '動画プレイヤー独自のレファレンス描画遅延が加わる場合があります。'],
      ],
    },
    {
      type: 'title',
      text: 'マイクを使用したオプション測定',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'マイクアクセスを有効にすると、ツールはローカルマイクアナライザを監視し、計画された音声イベントから音響ピークが検出されるまでの経過時間を記録します。突発的な反射音による歪みを防ぐため、サンプルの中央値を使用します。',
    },
    {
      type: 'tip',
      title: '実際に聴く位置にマイクを配置する',
      html: 'スピーカーの場合は実際に座って聴く位置にマイクを置き、静かな環境で測定してください。動画のズレを確認する場合は普段の配置のまま使用します。',
    },
    {
      type: 'title',
      text: 'ブラウザのオーディオ遅延結果が変動する理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'オーディオ遅延は単一の固定値ではなく、ブラウザのAudioContextクロック、OSのバッファ、ハードウェアエンコード、スピーカーの物理駆動など、経路全体の合計として発生します。そのため本ツールは現在の組み合わせにおける実効的な推定値を提示します。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '製品スペックの代わりとして扱わないでください',
      badge: '推定量ガイド',
      html: '<p>測定結果はセットアップの比較や目立つズレの調整にご利用ください。メーカーの公称スペックや校正機器によるループバック測定の代わりになるものではありません。</p>',
    },
  ],
  ui: {
    badge: 'レイテンシ・オプザーバトリー',
    modeLabel: '再生経路',
    modeSpeakers: 'スピーカー',
    modeWired: '有線',
    modeBluetooth: 'Bluetooth',
    modeVideo: '動画同期',
    startTest: 'テスト開始',
    stopTest: 'テスト停止',
    enableMic: 'マイクを有効化',
    micEnabled: 'マイク準備完了',
    calibrationTitle: '同期補正',
    calibrationHint: '点滅とクリックが一致するまでスライダーを動かします',
    calibrationEarly: '音声が進んでいる',
    calibrationLate: '映像が進んでいる',
    calibrationCenter: '同期完了',
    visualLane: '映像',
    audioLane: '音声',
    statusReady: '準備完了',
    statusRunning: 'パルスシーケンス実行中',
    statusWaiting: 'パルス待機中',
    resultTitle: '現在の測定結果',
    latencyLabel: '測定された遅延',
    alignmentLabel: '同期補正値',
    confidenceLabel: '信頼性',
    samplesLabel: 'サンプル数',
    notMeasured: '未測定',
    manualConfidence: '手動補正のみ',
    lowConfidence: '信頼度：低',
    mediumConfidence: '信頼度：中',
    highConfidence: '信頼度：高',
    noMic: 'このブラウザではマイク入力が利用できません',
    permissionDenied: 'マイクアクセス許可が得られませんでした',
    limitationTitle: '結果はセットアップの推定量です',
    limitationText: '部屋の反響、マイク処理、デバイスバッファが影響します。音声データの送信は行われません。',
    copyReport: 'レポートをコピー',
    copied: 'コピー完了',
    reset: 'リセット',
    safety: '低い音量から始めてください。歪みが発生した場合は停止してください。',
    pulse: '同期',
  },
};
