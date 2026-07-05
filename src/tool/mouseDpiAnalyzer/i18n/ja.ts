import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDpiAnalyzerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-dpi-analyzer';
const title = 'マウス DPI アナライザー';
const description =
  '既知の物理的距離だけマウスを動かし、キャプチャしたポインタの移動量（ピクセル）と比較して、実際のマウス DPI をオンラインで測定します。';

const faqData = [
  {
    question: 'オンラインのマウス DPI テスターはどのように動作しますか？',
    answer:
      '既知の物理的距離にわたってマウスを動かすよう求め、ブラウザの移動イベントを記録し、devicePixelRatio でキャプチャした値を補正して、結果のピクセルを距離（インチ）で割ります。',
  },
  {
    question: '実際の DPI がマウスに記載された値と異なるのはなぜですか？',
    answer:
      'センサーの公差、ファームウェアのステップ、表面の挙動、OS のスケーリング、ポインタの加速、ゲームプロファイルの設定によって、測定された動きがソフトウェアで選択した公称 DPI と異なる場合があります。',
  },
  {
    question: 'テスト前にポインタの加速を無効にするべきですか？',
    answer:
      'はい。クリーンな DPI 測定を行いたい場合は、Windows の「ポインタの精度を高める」やベンダーの加速カーブを無効にしてください。通常の設定の動作を意図的に確認したい場合のみ、有効のままにしてください。',
  },
  {
    question: 'どのような物理的距離を使用すればよいですか？',
    answer:
      '長い距離ほど手の誤差が減ります。クレジットカードの幅は手軽ですが、デスクに十分なスペースがあれば 100 mm または 4 インチの定規を使う方が再現性が高くなります。',
  },
];

const howToData = [
  {
    name: '物理的な基準を選ぶ',
    text: '非常に高い DPI の場合は 5 または 10 mm、通常のテストでは 1 インチ、十分なデスクスペースがある場合はより長い基準を使用します。',
  },
  {
    name: 'キャプチャボタンを押し続ける',
    text: '画面上のキャプチャターゲットを押し続け、選択した距離だけマウスを物理的に右に動かします。',
  },
  {
    name: '物理的なマークで離す',
    text: 'マウスがデスク上の実際の物理的なマークに到達したらボタンを離します。このツールが1インチあたりのピクセル数を計算し、測定された DPI を報告します。',
  },
  {
    name: '異なる速度で繰り返す',
    text: '遅いパスと速いパスを実行します。DPI が大きく変わる場合、ポインタの加速やセンサーのスムージングが結果に影響している可能性があります。',
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

export const content: ToolLocaleContent<MouseDpiAnalyzerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'オンライン マウス DPI テスター：実際のセンサー感度を測定', level: 2 },
    {
      type: 'paragraph',
      html: 'マウスは 800、1600、3200、26000 DPI を謳うことがありますが、ゲームや精密作業で重要なのは実際にコンピュータに届く動きです。このオンライン マウス DPI テスターは、既知の物理的移動とブラウザでキャプチャしたポインタの動きを比較して、その実用的な値を測定します。結果は 1 インチあたりのピクセル数で表され、これはマウスの DPI や CPI について話すときに一般的に使用される単位と同じです。',
    },
    {
      type: 'paragraph',
      html: 'テストは意図的にローカルかつシンプルです。キャプチャターゲットを押し続け、選択した物理的距離だけマウスを正確に右に動かし、離します。このツールはポーリングレートスクリプトや一般的なマウステストではなく、ネイティブの移動デルタを蓄積します。計算はブラウザ内で実行されるため、ドライバのダウンロード、アカウント、クラウドへのアップロードは一切必要ありません。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '重要なテスト条件',
      html: 'クリーンな DPI 測定を行うには、OS のポインタ加速とベンダーの加速カーブを無効にしてください。加速が有効のままの場合、結果は純粋なセンサー設定ではなく、現在のポインタの動作を示します。',
    },
    { type: 'title', text: '実際の DPI 計算の仕組み', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI は 1 インチあたりのドット数を意味します。マウスの文脈では、マウスが物理的に 1 インチ移動したときに生成されるカウント数やポインタピクセル数を表すために、DPI と CPI が同じ意味でよく使われます。このアナライザーは、制御されたパス中の水平方向の移動を記録し、選択した距離をインチに変換し、キャプチャしたピクセルをインチで割ります。たとえば、マウスが 2 インチで 3200 の補正ピクセルを報告した場合、測定値は約 1600 DPI となります。',
    },
    {
      type: 'list',
      items: [
        '非常に高い DPI の場合は 10 mm などの短い基準を、低い DPI の場合はより長い基準を選択します。',
        '中央のキャプチャコントロールを押し続け、パス中のみブラウザが動きを記録するようにします。',
        'できるだけまっすぐな経路を保ちながら、物理的に右に動かします。',
        '実際の物理的なマークで離し、計算された DPI を読み取ります。',
        '1 回のパスだけを信頼するのではなく、複数回繰り返して一貫した結果を平均します。',
      ],
    },
    {
      type: 'table',
      headers: ['キャプチャした移動量', '物理的距離', '測定 DPI'],
      rows: [
        ['800 px', '1.00 in', '800 DPI'],
        ['1350 px', '85.6 mm クレジットカード幅', '401 DPI'],
        ['3150 px', '50.0 mm', '1600 DPI'],
        ['6300 px', '100.0 mm', '1600 DPI'],
      ],
    },
    {
      type: 'tip',
      title: 'きれいなストロークを心がける',
      html: '長い距離よりも、1 回の水平ストロークの方が重要です。非常に高い DPI の場合は、5 mm または 10 mm のプリセットを使用してください。動きを十分に小さく保ちながら画面内に収めつつ、計算に既知の物理的基準を与えます。プログレスバーは入力信号メーターにすぎません。デスク上の定規やカードが停止点です。',
    },
    { type: 'title', text: '測定 DPI が公称 DPI と異なる理由', level: 3 },
    {
      type: 'paragraph',
      html: '公称 DPI は多くの場合、選択可能なファームウェアの段階であり、すべての表面やすべての個体に対してラボで認定された値ではありません。同じ公称 DPI に設定された 2 つのマウスでも、センサー、ファームウェアのスケーリング、ソールの高さ、表面の質感、リフトオフの挙動、OS の設定が異なると、異なる感触になることがあります。小さなばらつきは正常ですが、大きなばらつきは通常、テストの設定やソフトウェアの経路が測定に影響していることを意味します。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '公称 DPI',
          description: 'マウスソフトウェアに表示される値、または製品ページに記載されている値。出発点としては有用ですが、実際の動作出力を証明するものではありません。',
          points: ['読み取りやすい', 'ファームウェアのスケーリングを隠している場合がある', 'プロファイルによって異なる場合がある'],
        },
        {
          title: '測定 DPI',
          description: '物理的な移動距離とキャプチャしたポインタの動きから計算された値。あるマウスを別のマウスに合わせるのに最適です。',
          highlight: true,
          points: ['実用的で再現性がある', '手の正確さに敏感', '実際の設定の動作を示す'],
        },
        {
          title: 'ゲーム内感度',
          description: 'ゲームがマウス入力に独自の感度値を掛けた後の最終的なカメラまたはカーソルの応答。',
          points: ['実際に感じるもの', 'ゲーム固有', 'センサー測定ではない'],
        },
      ],
    },
    {
      type: 'proscons',
      title: 'ブラウザベースの DPI 測定のトレードオフ',
      items: [
        { pro: 'ドライバのインストールが不要', con: 'ブラウザは処理済みのポインタの動きを見るため、電気的なセンサー信号ではない' },
        { pro: 'マウスやプロファイルを素早く比較するのに適している', con: '加速設定が有効のままだと結果が歪む可能性がある' },
        { pro: '一般的な物理的基準で動作する', con: '手の位置合わせやデスクのマークが再現性に影響する' },
      ],
    },
    { type: 'title', text: 'Windows、macOS、マウスソフトウェアの準備', level: 3 },
    {
      type: 'paragraph',
      html: 'DPI メーターを使用する前に、入力経路をできるだけニュートラルにしてください。Windows では、生の動作を得たい場合は「ポインタの精度を高める」をオフにします。ベンダーソフトウェアでは、意図的に測定したい場合を除き、角度スナップ、加速、リップル制御、スムージング、表面固有のアシストを無効にします。macOS では、ポインタの加速は通常のカーソル経路の一部であるため、その値は純粋なセンサー結果ではなく、実用的なシステム結果として扱う必要があります。',
    },
    {
      type: 'table',
      headers: ['設定', '純粋な DPI 測定の推奨', '理由'],
      rows: [
        ['ポインタ加速', 'オフ', '加速は速度に応じて移動出力を変化させる'],
        ['マウスソフトウェアの DPI 段階', '固定の単一段階', 'テスト中の偶発的なプロファイル変更を防ぐ'],
        ['角度スナップ', 'オフ', '斜めの動きを修正し、自然なセンサー出力を隠す可能性がある'],
        ['OS のスケーリング', '通常のまま、ツールが devicePixelRatio で補正', 'アナライザーは計算時にブラウザのズームとディスプレイのピクセル比を中和する'],
        ['ゲームオーバーレイまたはマクロ', 'オフ', '追加のソフトウェアが入力を傍受し、パスが一貫しなくなる可能性がある'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:target',
      title: '2 つのマウスを合わせる',
      html: '古いマウスを 3 回測定して平均を記録し、新しいマウスの測定値が近くなるまで DPI 段階を調整します。実際のセンサー出力は異なる可能性があるため、ベンダーアプリ間で数値をコピーするよりも有用なことが多いです。',
    },
    { type: 'title', text: '適切な物理的基準の選択', level: 3 },
    {
      type: 'paragraph',
      html: 'インターフェースには、高 DPI 用の短い基準と低 DPI 用の長い基準が含まれています。ポインタがわずかな手の動きで画面を横切る場合は 5 または 10 mm を使用します。マウスが一般的なデスクトップやタクティカルシューターの値に近い設定の場合は、1 インチ、50 mm、または 85.6 mm のカード幅を使用します。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '25.4', label: '1 インチのミリメートル' },
        { value: '85.6', label: '一般的なクレジットカードの幅（ミリメートル）' },
        { value: '3+', label: 'プロファイルを信頼する前に推奨される繰り返しパス数' },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'DPI', definition: '1 インチあたりのドット数。マウスの 1 インチの移動で生成されるポインタの移動量を表すのに一般的に使用されます。' },
        { term: 'CPI', definition: '1 インチあたりのカウント数。センサー指向の用語で、技術的にはマウスに対してより正確な場合があります。' },
        { term: '加速', definition: '移動速度に応じてポインタ出力を変更する設定またはカーブ。' },
        { term: 'devicePixelRatio', definition: 'CSS ピクセルと物理ディスプレイピクセルのブラウザ比率。ズームやディスプレイスケーリング効果を正規化するために使用されます。' },
        { term: '角度スナップ', definition: '動きを直線的に補正するファームウェアまたはソフトウェアの補正。描画に役立つ場合もありますが、多くの競技プレイヤーには嫌われます。' },
      ],
    },
    { type: 'title', text: '加速インジケーターの読み方', level: 3 },
    {
      type: 'paragraph',
      html: '加速インジケーターは OS のカーブを実験室で証明するものではありません。キャプチャしたパス中の移動速度のばらつきに基づく実用的な警告です。遅いパスと速いパスで DPI 値が大きく異なる場合、加速、スムージング、表面の挙動、または手の動きの不一致が関与している可能性があります。適切な生の設定では、物理的距離が同じであれば、複数のパスで類似した測定 DPI が得られるはずです。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '結果がばらつく場合',
      html: '同じ距離で 1 回目のパスが 780 DPI、次のパスが 950 DPI と表示された場合、すぐにマウスのせいにしないでください。加速設定を確認し、テスト距離を増やし、マウスの経路を水平に保ち、パス中にポインタが画面の端に当たっていないことを確認してください。',
    },
    {
      type: 'summary',
      title: '信頼できる DPI テストのチェックリスト',
      items: [
        'できれば 100 mm 以上の測定された物理的基準を使用します。',
        '水平に右に動かし、マークで正確に止まります。',
        '生のプロファイル比較のためには加速を無効にします。',
        '少なくとも 3 回のパスを実行し、ばらつきを比較します。',
        '公称 DPI ラベルだけでなく、測定 DPI を使用してマウスを合わせます。',
      ],
    },
    {
      type: 'message',
      title: 'プライバシーに関する注意',
      html: 'このマウス加速テストと DPI 計算はブラウザ内でローカルに実行されます。このツールはドライバアクセス、デバイスのシリアル番号、アップロードされた入力ログを必要としません。',
    },
  ],
  ui: {
    badge: 'リアル DPI ラボ',
    referenceLabel: '基準',
    referenceValue: '5 mm',
    ultraDpiPreset: '5 mm',
    highDpiPreset: '10 mm',
    balancedPreset: '50 mm',
    inchPreset: '1 in',
    cardPreset: 'カード',
    lineStart: '開始',
    holdButton: '押し続けて選択した距離を動かす',
    holdHint: 'デスク上の実際の定規やカードを使用してください。バーがいっぱいになったからといって止めないでください。',
    progressLabel: '入力信号',
    activeHint: '動きを追跡中',
    dpiLabel: '測定 DPI',
    pixelsLabel: '補正後の移動量',
    distanceReadout: '物理的距離',
    ratioLabel: 'ピクセル比',
    initialDpiValue: '0',
    initialPixelsValue: '0 px',
    initialRatioValue: '0 px/in',
    initialSamplesValue: '0',
    initialAccelerationValue: '-',
    pixelUnit: 'px',
    pixelsPerInchUnit: 'px/in',
    millimeterUnit: 'mm',
    inchUnit: 'in',
    statusReady: 'キャプチャ準備完了',
    statusTracking: '動きを追跡中...',
    statusDone: '測定完了',
    reset: 'リセット',
    accelerationTitle: '加速信号',
    accelerationHint: '遅い速度と速い速度で繰り返し、一貫性を比較してください。',
    accelerationLow: '安定',
    accelerationMedium: '変動あり',
    accelerationHigh: '高いドリフト',
    sampleCount: 'サンプル',
  },
};
