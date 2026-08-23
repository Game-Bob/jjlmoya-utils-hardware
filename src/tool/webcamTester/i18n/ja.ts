import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'private-webcam-camera-test-online';
const title = 'プライベートウェブカメラテスト';
const description = 'ビデオ通話や配信の前に、カメラのアクセス許可、ライブプレビュー、解像度、アスペクト比、向き、フレーム配信を確認します。';

const faq = [
  {
    question: 'このウェブカメラテストは動画を録画またはアップロードしますか？',
    answer: 'いいえ。このページはローカルプレビュー用のライブビデオトラックのみを要求し、マイク音声は要求しません。録画や保存、アップロードは一切行われません。',
  },
  {
    question: 'ブラウザがカメラのアクセス許可を求めるのはなぜですか？',
    answer: 'ウェブサイトはブラウザの許可なしにカメラを開くことができません。プロンプトにより、このページが一時的なローカルビデオストリームを受信することを許可できます。',
  },
  {
    question: '設定FPSと計測FPSの違いは何ですか？',
    answer: '設定FPSはこのプレビューで指定された目標値です。計測FPSはタブが表示されている間に実際に到着したフレーム数を推測した値です。',
  },
  {
    question: '利用可能な解像度がカメラの仕様と異なるのはなぜですか？',
    answer: 'OS、カメラドライバー、ブラウザが互換性のあるモードを選択します。他のアプリや電力制限により解像度が低くなる場合があります。',
  },
];

const howTo = [
  {
    name: 'プライベートプレビューを開く',
    text: 'カメラを開くを選択し、ブラウザの許可プロンプトでビデオアクセスを許可します。音声は要求されません。',
  },
  {
    name: '構図と画像を確認する',
    text: 'ライブプレビューでフォーカス、露出、背景、視線の位置を確認します。必要に応じてミラー表示やガイドを有効にします。',
  },
  {
    name: '配信ストリームを検証する',
    text: '解像度、アスペクト比、向き、設定FPS、フレーム配信状態を確認します。',
  },
  {
    name: 'カメラを切り替えるまたは停止する',
    text: '比較のために別の利用可能なカメラを選択するか、カメラを停止してすべてのトラックを閉じます。',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'ウェブカメラテストに関するよくある質問',
  faq,
  bibliographyTitle: 'カメラの設定とトラブルシューティング情報',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'ビデオ通話の前にウェブカメラをテスト',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '通話の前に重要な点を確認するために、このローカルプレビューをご活用ください。カメラが正常に動作するか、正しいデバイスが選択されているか、顔が明るく映っているか、映像がスムーズに動いているかを事前にテストできます。',
    },
    {
      type: 'list',
      items: [
        '複数のカメラが接続されている場合は正しいデバイスを選択する',
        'カメラを目の高さに配置し、顔をフレームの上部3分の1に収める',
        '明るい窓を背にせず、正面からの光で顔を照らす',
        'カメラが使用中で開かない場合は他のミーティングアプリを閉じる',
        '解像度とフレーム配信状態をプレビュー画面で直接確認する',
      ],
    },
    {
      type: 'title',
      text: '画面が真っ黒な場合やカメラが利用できない場合の解決策',
      level: 3,
    },
    {
      type: 'table',
      headers: ['現象', '考えられる原因', '推奨される対策'],
      rows: [
        ['許可が拒否された', 'ブラウザまたはOSのプライバシー設定で拒否されている', '設定でカメラアクセスを許可しページを再読み込みしてください'],
        ['黒い画面または使用中', '他の会議アプリがカメラを使用している', 'Zoom、Teams、Meetなどを閉じて再試行してください'],
        ['意図しない映像', '仮想カメラやサブデバイスが選択されている', 'カメラソース選択メニューで適切なデバイスを選んでください'],
        ['暗いまたはノイズが多い', '正面の光が不足しているか逆光になっている', '正面にライトを配置するか窓の方を向いてください'],
        ['映像がカクつく', '光量不足またはパソコンの負荷が高い', '照明を追加し重いアプリケーションを終了してください'],
      ],
    },
    {
      type: 'title',
      text: '解像度とフレームレートの理解',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '一般的なWeb会議では 1280 × 720 の解像度で十分です。1920 × 1080 はより鮮明ですが安定したネットワークが必要です。設定FPSは要求目標であり、計測FPSはタブ表示中の実際の到着率を示します。',
    },
    {
      type: 'tip',
      title: '実際の会議と同じ環境でテストする',
      html: '実際の会議と同じ時間帯・照明条件でテストを行ってください。通話アプリによって画質調整が行われるため、アプリ内での事前確認も合わせて行うことをお勧めします。',
    },
    {
      type: 'title',
      text: '最適な画角と配置',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'カメラを目の高さ付近まで上げ、頭の上に少し余白を持たせます。正面からの照明を確保し、背景をシンプルに整えます。メガネを着用している場合は、光がレンズに反射しないよう照明の位置を少し横に調整してください。',
    },
  ],
  ui: {
    privacyNote: '録画なし · アップロードなし · 音声なし',
    permissionHeading: 'カメラをテストする準備はできましたか？',
    permissionBody: 'プライベートライブプレビューを開いて、このタブで利用可能な映像形式を確認します。カメラを停止するとすぐにアクセスが終了します。',
    startAction: 'カメラを開く',
    stopAction: 'カメラを停止',
    retryAction: '再試行',
    deviceLabel: 'カメラソース',
    devicePlaceholder: 'カメラを選択',
    defaultDevice: 'カメラ',
    mirrorAction: 'ミラー表示',
    guideAction: '構図ガイド',
    stageLabel: 'プライベートウェブカメラプレビューエリア',
    resolutionLabel: '解像度',
    aspectLabel: 'アスペクト比',
    orientationLabel: '向き',
    configuredFpsLabel: '設定FPS',
    observedFpsLabel: '計測FPS',
    frameDeliveryLabel: 'フレーム配信',
    landscapeValue: '横向き',
    portraitValue: '縦向き',
    squareValue: '正方形',
    frameStable: '目標値に近い',
    frameReduced: '目標値を下回る',
    frameConstrained: '大幅に低下',
    framePending: 'フレーム待機中',
    statusIdle: 'カメラは停止しています。プレビューを確認する準備ができたら開いてください。',
    statusStarting: '許可と最初のビデオフレームを待機中',
    statusReady: 'ライブプレビュー中。フォーカス、光量、構図、動作を確認してください。',
    statusStopped: 'カメラを停止しました。すべてのビデオトラックが閉じられました。',
    statusHidden: '正確なFPS測定のためにこのタブを表示したままにしてください。',
    statusUnsupported: 'このブラウザはカメラアクセスをサポートしていません。',
    errorPermissionDenied: 'カメラの許可が拒否されました。ブラウザの設定で許可して再試行してください。',
    errorNoCamera: '利用可能なカメラが見つかりません。デバイスを接続して再試行してください。',
    errorInUse: 'カメラを起動できませんでした。他のアプリを閉じて再試行してください。',
    errorSecureContext: 'カメラへのアクセスにはHTTPSまたはlocalhostが必要です。',
    errorGeneric: 'カメラを開けませんでした。許可とデバイス接続を確認してください。',
    limitHeading: 'このテストで確認できること',
    limitBody: 'このタブで利用可能な画像と動作を確認できます。レンズ自体の品質や通話アプリによる後処理を評価するものではありません。',
    localOnlyLabel: 'プライベートカメラチェック',
    emptyValue: '利用不可',
    fpsUnit: 'FPS',
  },
};
