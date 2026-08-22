import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-polling-rate-checker';
const title = 'ゲームパッドポーリングレート・Hz測定ツール';
const description = 'USBおよびBluetooth接続のゲームパッドのブラウザ検出ポーリングレート、更新間隔、ミリ秒単位のタイミング安定性を測定します。';

const faq = [
  {
    question: 'このゲームパッドポーリングレート測定ツールは何を計測しますか？',
    answer: 'アナログスティック操作中にブラウザのGamepad APIが受け取るタイムスタンプの更新頻度を測定します。表示されるHzはブラウザ上で観察された更新レートであり、USB物理層の電気的パルス測定ではありません。',
  },
  {
    question: 'ブラウザでコントローラーの1000Hz動作を証明できますか？',
    answer: '高頻度で安定したデータ到達を確認することはできますが、1000Hzオーバークロックの物理証明にはなりません。ブラウザのレンダリングタイマーやOSのスケジューリングによりレポートが束ねられる場合があります。',
  },
  {
    question: 'なぜスティックを円状に回し続ける必要があるのですか？',
    answer: '連続した円運動により両軸の値が刻々と変化し、新しい入力状態が安定して発生します。スティックを固定した状態では入力変化が発生せず、正確な測定ができません。',
  },
  {
    question: 'USB接続とBluetooth接続の性能を比較できますか？',
    answer: 'はい。同じブラウザ・同じ測定時間・同じ回転操作で測定を行うことで、接続方式による観測レート、平均間隔、ジッターの違いを相対比較できます。',
  },
];

const howTo = [
  {
    name: 'コントローラーを接続して有効化',
    text: 'USBまたはBluetoothでゲームパッドを接続し、任意のボタンを押してブラウザに認識させます。',
  },
  {
    name: 'デバイスと測定時間を設定',
    text: 'ドロップダウンから対象のコントローラーを選択し、最初の計測にはバランスの良い10秒間を選択します。',
  },
  {
    name: 'スティックを滑らかに回し続ける',
    text: '測定を開始したら、進行度リングが満たされるまで左スティックを円状に回し続けます。',
  },
  {
    name: '観測レートと安定性を確認',
    text: '平均Hz、ミリ秒間隔、ジッター、測定の信頼度を確認し、必要に応じて同条件で再計測します。',
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'ゲームパッドポーリングレートに関するよくある質問',
  faq,
  bibliographyTitle: '技術リファレンス',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'ブラウザで観察されるゲームパッド更新レートを測定',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本ツールはスティック操作中のGamepad APIタイムスタンプを高精度で監視します。極端な外れ値を取り除き、平均更新間隔を算出したら「1000÷ミリ秒」の数式で観測Hzへ変換します。処理はすべてページ内でローカルに完結します。',
    },
    {
      type: 'table',
      headers: ['測定項目', 'この数値が表す意味', '証明できない事項'],
      rows: [
        ['観測レート', 'ページが毎秒受信する入力レポートの更新頻度', 'USBポートの物理電気的ポーリングレート'],
        ['平均更新間隔', 'タイムスタンプが更新されるまでの平均所要時間', 'ボタンを押してから画面描画までの全遅延'],
        ['ジッター (バラつき)', '5パーセンタイルと95パーセンタイルの時間差', 'ハードウェア自体の決定的な故障判定'],
        ['信頼度', '測定期間中に収集できたサンプル数と規則性', '産業用校正機器レベルの絶対精度'],
      ],
    },
    {
      type: 'title',
      text: '再現性の高いHzテストを実施する手順',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '高負荷なバックグラウンド処理を閉じ、タブをアクティブにした状態で、毎回同じ速度でスティックを大きく回してください。ケーブル、Bluetoothアダプター、OS設定を比較する際は、同一ブラウザ・同一測定時間で行うことが推奨されます。',
    },
    {
      type: 'tip',
      title: '常に同じ条件で比較してください',
      html: '接続方法を変更した後は少なくとも2回測定してください。一瞬の最高値よりも、ジッターの少ない安定した数値の方が重要です。',
    },
    {
      type: 'title',
      text: 'このテストが全入力遅延(Input Lag)ではない理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gamepad APIはOSやブラウザの処理を経た後のデータを取得します。ケーブルの電気伝送時間やディスプレイの描画遅延は含まれません。Webベースの性能比較には極めて有用ですが、総合入力遅延そのものではない点にご注意ください。',
    },
  ],
  ui: {
    privacyNote: 'ローカルでのみ信号処理',
    stepConnect: '接続してボタンを押す',
    stepMove: 'スティックを円状に回す',
    stepRead: 'レートと安定性を比較',
    deviceLabel: '検出されたアクティブゲームパッド',
    devicePlaceholder: 'コントローラーのボタンを押して検出',
    deviceFallback: '接続済みゲームパッド',
    durationLabel: '測定時間',
    durationFive: '5秒',
    durationTen: '10秒',
    durationTwenty: '20秒',
    startAction: '計測開始',
    stopAction: '停止',
    resetAction: 'リセット',
    orbitInstruction: '計測中は左スティックをスムーズに円状に回し続けてください',
    traceLabel: 'リアルタイムタイムスタンプ軌跡',
    observedRateLabel: '観測レート',
    intervalLabel: '平均更新間隔',
    jitterLabel: 'バラつき (ジッター)',
    samplesLabel: '有効サンプル数',
    confidenceLabel: '測定信頼度',
    confidenceLow: '低',
    confidenceMedium: '中',
    confidenceHigh: '高',
    statusWaiting: '対応コントローラーの接続を待機中',
    statusReady: '準備完了。スティックに手を添えて開始を押してください。',
    statusMeasuring: 'タイムスタンプをローカル記録中',
    statusNeedsMovement: 'より多くの変化を検知するためスティックを大きく回してください',
    statusComplete: '計測完了。同条件で再計測して比較できます。',
    statusUnsupported: 'お使いのブラウザはGamepad API非対応です',
    statusDisconnected: 'アクティブなコントローラーがありません。接続してボタンを押してください。',
    statusStopped: '計測停止。途中結果が表示されています。',
    limitHeading: 'ブラウザ測定上の技術的制限',
    limitBody: 'Gamepad APIを介して見える更新を計測します。USBの物理オーバークロックや全入力遅延を保証するものではありません。',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: '回',
    progressLabel: '計測進行状況',
  },
};
