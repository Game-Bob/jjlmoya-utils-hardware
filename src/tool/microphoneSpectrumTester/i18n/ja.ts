import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'microphone-test-spectrum-analyzer';
const title = 'マイクテストとリアルタイムスペクトラムアナライザ';
const description = 'ブラウザ上でマイク入力、リアルタイム音量レベル、音割れ（クリッピング）、室内ノイズ、周波数特性をローカルでテストできます。';

const faq = [
  {
    question: 'このマイクテストは音声データの録音や送信を行いますか？',
    answer: 'いいえ。マイクからの音声ストリームはブラウザ内部のアナライザにのみ接続されます。音声ファイルの作成、アナライザの音声出力への broad 接続、またはサーバーへの音声サンプルのアップロードは一切行われません。',
  },
  {
    question: 'レベルメーターの dBFS とは何ですか？',
    answer: 'dBFSはデジタルフルスケール（ Full Scale ）に対するデシベル値です。最大デジタルピークが 0 dBFS となるため、通常の値は負の数になります。これは音圧レベルである dB SPL の calibrated 測定値とは異なります。',
  },
  {
    question: 'マイクが音割れ（クリッピング）しているか確認するにはどうすればよいですか？',
    answer: '想定される最大の声量または演奏音量で話してください。ピークが 0 dBFS 付近の赤いクリッピング状態に頻繁に達する場合は、マイクゲインを下げるか、マイクからの距離を離すか、OSの強力な入力処理を無効にしてください。',
  },
  {
    question: '室内ノイズ測定では何が表示されますか？',
    answer: '3秒間の計測により、静寂時の平均デジタル RMS レベルを算出します。同一の部屋やブラウザ環境での設定比較に役立ちますが、自動ゲイン制御やノイズ抑制機能により結果が変化する場合があります。',
  },
  {
    question: '話している最中に主周波数が動くのはなぜですか？',
    answer: '人の声には変化する基本周波数、倍音、子音、ノイズが含まれるためです。本ツールは 60 Hz から 12 kHz の間で最も強いアナライザビンを表示するため、周波数の動きは故障ではなく正常な挙動です。',
  },
  {
    question: 'このスペクトラムアナライザでマイクの性能判定や品質認証ができますか？',
    answer: 'いいえ。これはブラウザでの入力、レベル、クリッピング、ノイズ、可視周波数活動の実用的なチェックツールです。周波数特性や音圧の認証には校正されたハードウェア、制御された信号、および文書化された測定環境が必要です。',
  },
];

const howTo = [
  {
    name: 'マイクへのアクセス許可を与える',
    text: '「マイクを開始」ボタンを押し、ブラウザのアクセス許可を承認します。処理はこの明示的な操作の後にのみ開始されます。',
  },
  {
    name: '実際の作業距離で話す',
    text: '普段通りの声量や楽器レベルで話し、リアルタイムの dBFS 読取値、ピーク軌道、およびスペクトラムの動きを確認します。',
  },
  {
    name: '想定される最大音量レベルをチェックする',
    text: '声を張るか、想定される最も大きなフレーズを演奏します。クリアで健全な信号を維持しながら、赤いクリッピングが繰り返されないように調整します。',
  },
  {
    name: '室内ノイズ（ルームトーン）を測定・捕獲する',
    text: '静かにした状態で「3秒間測定」を押します。部屋、使用デバイス、ゲイン、または処理設定を変更した後に、保存されたノイズフロアを比較します。',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'ブラウザでマイクの動作と音質をテスト・確認する方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このマイクテストツールは、アプリをインストールすることなく、最初のトラブルシューティングの疑問に答えます。選択した入力が信号を生成しているか、レベルは使用可能か、大声の瞬間にクリッピング（音割れ）しないか、室内ノイズはどのようになっているか、どの周波数がアクティブかを確認できます。「マイクを開始」を押し、実際の作業位置から発声してリアルタイム観測データを読み取ります。アナライザは現在のページ上で動作し、音声ファイルを作成しません。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'プライベートなローカル解析処理',
      badge: '録音・送信なし',
      html: '<p>生の音声入力は機密性が高いため、ブラウザはマイクのアクセス許可を要求します。本ツールはそのストリームをローカルアナライザにのみ接続します。サンプルを外部 Stream サーバーに送信することはなく、「マイクを停止」を押すとすべてのメディアトラックが直ちに停止します。</p>',
    },
    {
      type: 'title',
      text: 'dBFS単位でのマイクレベルの読み方と評価',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大きく表示されるリアルタイム数値はRMS推定値であり、現在の時間ウィンドウのエネルギーを表します。ピークはそのウィンドウ内の最大絶対サンプルを示します。どちらもdBFS（デジタルフルスケール）を使用し、0がデジタル上限で、静かな信号ほど負の数値が大きくなります。話しかたのスタイル、マイクの種類、プリアンプゲイン、および送信先アプリのすべてが影響するため、適切なインジケーター表示はこのテストのɝ用的なガイドとなります。',
    },
    {
      type: 'table',
      headers: ['測定読取値', '示されている状態の意味', '推奨される確認・対処法'],
      rows: [
        ['無音または -60 dBFS 未満', '選択された入力が有用なテスト信号を生成していません', '使用デバイス、物理ミュートスイッチ、ブラウザのアクセス許可、およびOSの入力レベル設定を確認してください'],
        ['音量が小さい (-35 dBFS 未満)', '追加のゲインなしでは信号が使いにくい可能性があります', 'ピーク表示を監視しながらマイクに近づくか、入力ゲインを上げてください'],
        ['健全・適正レベル', '現在の信号には十分なレベルと目視できる適切なヘッドルームがあります', '想定される最も大きな声量やフレーズでテストを繰り返してください'],
        ['ホット (-6 dBFS ピーク超)', '残りのデジタルヘッドルームがわずかしかありません', '大声を発する前にゲインを下げるか、マイクとの距離を広げてください'],
        ['クリッピング (0 dBFS 近傍)', '1つ以上のサンプルがデジタル上限に達し歪んでいます', 'ゲインを下げて、最も音量の大きい部分のテストをやり直してください'],
      ],
    },
    {
      type: 'title',
      text: 'リアルタイムマイクスペクトラムの活用方法',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '曲面スペクトラム表示は 60 Hz から 12 kHz までのアナライザビンを対数アーク上にマッピングし、発光リボンが現在の波形を示します。この表示を使用して、低音、中音、および高音域の活動がブラウザに届いていることを確認できます。主周波数が動くのは音声や音楽において正常な動作です。この表示は、同じマイク、ゲイン、部屋、ブラウザ、および発声距離で行う比較に最も役立ちます。',
    },
    {
      type: 'tip',
      title: '変更は一度に1つずつ比較・検証する',
      html: '室内ノイズ（ルームトーン）を計測後、1つの setting だけを変更し、同じ位置から再度計測します。OSのノイズ抑制機能や自動ゲイン制御（AGC）は、音質を変えつつマイクを静かに見せかけることがあるため、この視覚テストを読むだけでなく実際のアプリケーションでも聴 taker して確認してください。',
    },
    {
      type: 'title',
      text: '本ツールが校正された音圧計ではない理由',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ブラウザのサンプルは、マイク、オーディオインターフェース、ドライバー、および自動処理の後のデジタル信号を表しています。これらはマイクカプセルにおける音響音圧を明らかにするものではありません。そのため、本ツールは dB SPL ではなく dBFS を報告し、認証された周波数特性、自己ノイズ仕様、または部屋のノイズレベルを主張することを避けています。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '公式なコンプライアンス測定には校正機器を使用してください',
      badge: '実用的な簡易チェック専用',
      html: '<p>このツールは、通話、配信、録音、およびデバイス選択のトラブルシューティングにご利用ください。測定結果が製品仕様、聴覚安全基準、規制、または専門的な音響解析をサポートする必要がある場合は、校正された測定用マイク、音響校正器、制御された信号、および適用される規格を使用してください。</p>',
    },
  ],
  ui: {
    journeyPermission: '1. マイクの使用を許可',
    journeySpeak: '2. 普通の声で話す',
    journeyInspect: '3. レベルとスペクトラムを確認',
    startMicrophone: 'マイクを開始',
    stopMicrophone: 'マイクを停止',
    deviceLabel: '入力デバイス',
    defaultDevice: '既定のマイク',
    statusIdle: 'アクセス許可待ち',
    statusRequesting: 'マイクへのアクセスを要求中',
    statusLive: 'ローカル測定中',
    statusUnsupported: 'このブラウザではマイクアクセスを利用できません',
    statusDenied: 'マイクのアクセス許可が得られませんでした',
    statusError: 'マイクを開始できませんでした',
    levelLabel: 'リアルタイムレベル',
    peakLabel: 'ピーク',
    frequencyLabel: '主周波数',
    noiseFloorLabel: '室内ノイズ',
    captureNoise: '3秒間測定',
    capturingNoise: '室内ノイズ測定中は静かにしてください',
    noiseCaptured: '室内ノイズ測定完了',
    roomToneHint: 'ゲインと位置を固定し、3秒間静かにしてください。',
    unmeasured: '未測定',
    noSignalLevel: '信号なし',
    noSignalPeak: '信号なし',
    noSignalFrequency: '信号なし',
    silentSignal: '有効な信号なし',
    quietSignal: '入力が小さすぎます',
    healthySignal: '適正レベル',
    hotSignal: '入力過大',
    clippingSignal: '音割れを検出',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: 'マイクのリアルタイム対数スペクトラムと波形表示',
    limitationTitle: '本ツールは校正された音圧計ではありません',
    limitationText: '表示される数値はデジタルdBFS値です。音声データは外部へ送信されず、ブラウザ内のみで処理されます。',
  },
};
