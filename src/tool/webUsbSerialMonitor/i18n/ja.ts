import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-serial-monitor';
const title = 'WebUSB シリアルモニター';
const description = 'ブラウザからUSBシリアルハードウェアに接続し、ライブ端末出力を読み取り、コマンドを送信し、Arduino、ESP32、RP2040、メーカーボードをデスクトップ端末をインストールせずにデバッグします。';

const faqData = [
  {
    question: 'このシリアルモニターはArduino、ESP32、Raspberry Pi Picoボードで動作しますか？',
    answer: 'はい、ボードがWeb SerialでサポートされているUSBシリアルインターフェースを提供し、ブラウザがChromiumベースの場合です。一般的なArduino、ESP32、RP2040、CH340、CP210x、FTDIアダプターは、ユーザーが許可を与えた後に通常動作します。',
  },
  {
    question: 'Web Serialを使用するのになぜWebUSBと呼ばれるのですか？',
    answer: 'ほとんどのメーカーボードはUSB経由で接続しますが、ブラウザ端末アクセスはWeb Serial APIによって提供されます。WebUSBはより低レベルであり、シンプルなUARTスタイルの端末には適切な抽象化ではありません。',
  },
  {
    question: 'ウェブサイトは許可なく私のシリアルデバイスにアクセスできますか？',
    answer: 'いいえ。ブラウザはサイトがシリアルポートを開く前にユーザーのクリックとネイティブデバイスピッカーを要求します。このツールは端末ログやデバイス識別子を保存しません。',
  },
  {
    question: 'Webシリアル端末にはどのブラウザを使うべきですか？',
    answer: 'HTTPSまたはlocalhostでChrome、Edge、または他のChromiumベースのブラウザを使用してください。Firefox、Safari、および多くのiOSブラウザはWeb Serial APIを公開していません。',
  },
  {
    question: 'どのボーレートを選択すべきですか？',
    answer: 'ファームウェアで設定されたボーレートを選択してください。Arduinoの例では9600または115200がよく使われ、より高速なログ、ブートローダー、高速センサーストリームでは230400、460800、または921600が使用されることがあります。',
  },
];

const howToData = [
  {
    name: 'USBシリアルデバイスを接続する',
    text: 'ボードまたはアダプターを接続し、すでにポートを開いている可能性のある他のシリアル端末を閉じます。',
  },
  {
    name: 'ボーレートを選択する',
    text: '多くのArduino、ESP32、RP2040スケッチ用の115200など、ファームウェアで使用されているのと同じボーレートを選択します。',
  },
  {
    name: 'ブラウザの許可を与える',
    text: '接続を押し、ブラウザピッカーでシリアルデバイスを選択し、ページがポートを開くことを許可します。',
  },
  {
    name: '端末データの読み取りと送信',
    text: '端末で受信ログを監視し、オプションのCRLF行末でコマンドを送信し、必要に応じてライブ出力をクリアまたは一時停止します。',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'USBメーカーハードウェア向けオンラインシリアルモニター',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このブラウザシリアルモニターは、ChromeまたはEdgeから直接USBシリアルポートを開き、マイクロコントローラー、USB UARTブリッジ、開発ボード、ブートローダー、テスト治具、センサー、実験装置からテキストをストリーミングします。シリアルコンソールが必要だがデスクトップIDEや端末アプリケーションをインストールしたくない場合の迅速な診断用に設計されています。',
    },
    {
      type: 'message',
      title: 'ブラウザ許可の境界',
      html: 'ページはお客様のシリアルデバイスを黙って列挙したり開いたりすることはできません。アクセスは、接続を押してブラウザピッカーでポートを選択した後にのみ開始されます。端末データは、お客様自身がコピーしない限り、現在のタブに留まります。',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: '一般的なボーレートプリセット' },
        { value: 'CRLF', label: 'オプションのコマンド終端' },
        { value: 'ローカル', label: '端末セッション' },
      ],
    },
    {
      type: 'title',
      text: 'Webシリアル端末が役立つ場面',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Arduino、ESP32、ESP8266、RP2040、STM32、またはカスタムファームウェアからのブートメッセージの確認。',
        'USB UARTアダプターを介したモデム、GPS、LoRa、Wi-Fi、Bluetooth、またはセルラーモジュールへのATコマンドの送信。',
        '工場のテスト治具、教室のラボ、ロボットコントローラー、またはベンチプロトタイプからのセンサー出力の読み取り。',
        'USBシリアルブリッジドライバー、ケーブル、ボード電源、およびファームウェアのボーレートがすべて連携して動作していることの確認。',
        'バグを報告したりハードウェアサポートを依頼する前の迅速なエラーログの収集。',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Webシリアルモニター',
          description: 'クイックサポート、教室での指示、フィールド診断、およびURLを開く方がIDEをインストールするより速いメーカーワークフローに最適です。',
        },
        {
          title: 'デスクトップ端末',
          description: 'バイナリプロトコル、長時間のキャプチャセッション、スクリプト作成、ハードウェアフロー制御、マクロ、およびブラウザAPIがブロックされている環境に適しています。',
        },
      ],
    },
    {
      type: 'title',
      text: 'ボーレートと行末チェックリスト',
      level: 3,
    },
    {
      type: 'table',
      headers: ['設定', '一般的な選択', '間違っている場合の不具合'],
      rows: [
        ['ボーレート', '多くの最新ボードでは115200、古い例では9600。', '読み取り可能なテキストがランダムな記号に変わるか、有用なログが表示されない。'],
        ['行末', '多くのコマンドパーサーではCRLF、生の文字プロトコルでは終端なし。', 'ファームウェアが終端文字を待っているため、コマンドが無視される。'],
        ['排他的ポートアクセス', 'Arduinoシリアルモニター、PuTTY、screen、minicom、またはベンダーツールを閉じる。', 'ブラウザピッカーはポートを開くが、読み取りまたは書き込みが失敗する。'],
        ['安全なコンテキスト', 'HTTPSまたはlocalhost。', 'サポートされているブラウザでもシリアルAPIが欠落している。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'シリアル出力がない場合',
      html: 'ボードに電源が供給され、USBケーブルが充電のみでなくデータをサポートしていることを確認してください。ファームウェアのボーレートがわからない場合は、9600、57600、115200を試してください。多くのボードは起動時のみブートログを出力するため、接続後にリセットを押してください。まだシリアルポートを所有している可能性のある他のソフトウェアを閉じ、デバイスが表示されない場合はCH340、CP210x、FTDI、またはボードベンダーのオペレーティングシステムドライバーをインストールしてください。',
    },
    {
      type: 'title',
      text: 'プライバシー、セキュリティ、および制限',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serialの長所と制限',
      items: [
        {
          pro: '基本的なシリアルテキスト診断にデスクトップインストール不要。',
          con: 'Chromiumベースのブラウザと安全なコンテキストが必要。',
        },
        {
          pro: 'ブラウザピッカーが選択した特定のポートへのアクセスを制限。',
          con: 'バイナリプロトコルアナライザや長時間の無人キャプチャには向かない。',
        },
        {
          pro: 'テキストログ、コマンドプロンプト、迅速なハードウェアチェックに適している。',
          con: '一部の企業ポリシー、モバイルブラウザ、オペレーティングシステムがWeb Serialをブロック。',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serialは利用できません',
    unsupportedBody: 'HTTPSまたはlocalhostでChromeまたはEdgeを使用し、デバイスがUSBシリアルインターフェースを提供していることを確認してください。',
    secureContext: 'Web SerialにはHTTPSまたはlocalhostが必要です。安全なオリジンからこのページを再読み込みして再試行してください。',
    statusIdle: 'ボーレートを選択し、USBシリアルデバイスを接続してください',
    statusPermission: 'ブラウザのシリアルポートピッカーを待機中',
    statusOpening: 'シリアルポートを開いています',
    statusConnected: 'シリアルポート接続済み',
    statusDisconnected: 'シリアルポート切断済み',
    statusError: 'シリアル接続に失敗しました',
    connect: 'シリアル接続',
    disconnect: '切断',
    send: '送信',
    clear: 'クリア',
    pause: '一時停止',
    resume: '再開',
    baudRate: 'ボーレート',
    newline: 'CRLFを追加',
    inputPlaceholder: 'コマンドを入力し、Enterを押してください',
    portFallback: 'ポートが選択されていません',
    portLabel: 'ポートID',
    connectedDeviceLabel: '接続中のデバイス',
    deviceNameFallback: 'USBシリアルデバイス',
    transportLabel: 'Web Serialリンク',
    bytesLabel: 'バイト',
    linesLabel: '行',
    privacyTitle: '許可制',
    privacyBody: 'ブラウザは選択したシリアルデバイスのみを公開します。ログはコピーしない限りこのタブに留まります。',
    emptyLog: 'シリアルデバイスを接続すると、ここに端末出力が表示されます。',
    copied: 'コピーしました',
    copyLog: 'コピー',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: 'ライブ端末',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baud',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
