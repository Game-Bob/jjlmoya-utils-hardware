import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-bluetooth-ble-scanner';
const title = 'Web Bluetooth BLEスキャナー';
const description = 'ブラウザから近くのBluetooth Low Energyデバイスをスキャンし、公開されたGATTサービスUUIDを検査し、IoTやウェアラブルハードウェアが検出可能かどうかをテストします。';

const faqData = [
  {
    question: 'ウェブサイトは許可なくBluetoothデバイスをスキャンできますか？',
    answer: 'いいえ。Web Bluetoothは常にユーザージェスチャーとブラウザの許可選択を必要とします。このツールは明示的に選択したデバイスのみを表示し、MACアドレス、デバイスID、スキャン結果を保存しません。',
  },
  {
    question: 'スキャナーが近くのすべてのBLEデバイスを表示しないのはなぜですか？',
    answer: 'ブラウザは意図的にBluetoothを許可選択を通じて公開し、サイレントバックグラウンドスキャナーとしては機能しません。一部のデバイスはアドバタイズを停止したり、名前を隠したり、ペアリングを要求したり、接続後にのみサービスを公開したりします。',
  },
  {
    question: 'どのブラウザがWeb Bluetoothをサポートしていますか？',
    answer: 'Web BluetoothはChromeやEdgeなどのChromiumベースのデスクトップブラウザで最もよくサポートされています。通常HTTPSまたはlocalhostが必要で、多くのFirefox、Safari、iOSブラウザ構成では利用できません。',
  },
  {
    question: 'ウェアラブルからプライベートセンサーデータを読み取れますか？',
    answer: 'デバイスが互換性のあるGATTサービスを公開し、ブラウザがアクセスを許可した場合のみ可能です。多くの商用ウェアラブルは、汎用ブラウザスキャナーではデコードできないベンダーアプリ、暗号化、ボンディング、または独自の特性を必要とします。',
  },
  {
    question: 'GATTサービスUUIDとは何ですか？',
    answer: 'GATTサービスUUIDは、バッテリーサービス、心拍数、デバイス情報、またはメーカーやIoTハードウェアが使用するカスタムベンダーサービスなど、Bluetooth Low Energy機能のグループを識別します。',
  },
];

const howToData = [
  {
    name: '互換性のあるブラウザを使用する',
    text: 'ChromeまたはEdgeでHTTPSまたはlocalhost経由でツールを開き、コンピューターまたは電話でBluetoothが有効になっていることを確認します。',
  },
  {
    name: 'ハードウェアをアドバタイズモードにする',
    text: 'BLEデバイスを起動し、電源を入れ直すか、ペアリングボタンを押すか、アドバタイズモードを開いてブラウザの許可選択に表示されるようにします。',
  },
  {
    name: '環境をスキャンする',
    text: '環境をスキャンを押して、検査したいBLEデバイスを選択します。ブラウザの許可ダイアログが、ページに表示されるデバイスを正確に制御します。',
  },
  {
    name: 'GATTサービスを読み取る',
    text: '接続後、サービスUUIDカードを確認して、標準Bluetoothプロファイル、カスタムファームウェアサービス、およびデバイスが期待するデータパスを公開しているかどうかを識別します。',
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

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'IoT、ウェアラブル、メーカーハードウェア向けオンラインBLEテスター',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このWeb Bluetoothスキャナーを使用すると、近くのBluetooth Low Energyデバイスがブラウザから検出可能かどうか、および許可が付与された後にどのGATTサービスを公開するかをテストできます。ESP32ファームウェア、Arduino BLEスケッチ、スマートセンサー、フィットネスウェアラブル、キーボード、カスタムビーコン、環境モニター、ネイティブモバイルアプリを構築する前のプロトタイプハードウェアのデバッグに役立ちます。',
    },
    {
      type: 'message',
      title: 'プライバシーモデル',
      html: 'このサイトはMACアドレス、デバイスID、名前、UUID、信号データ、スキャン履歴を保存しません。ブラウザの許可選択がページがアクセスできる単一のデバイスを決定し、結果は現在のブラウザセッション内に留まります。',
    },
    {
      type: 'table',
      headers: ['表示内容', '意味', '次に確認すること'],
      rows: [
        ['デバイス名', 'ハードウェアがブロードキャストしている場合のアドバタイズされたBluetooth名。', '空白の場合は、ファームウェアのアドバタイズデータを確認するか、テスト中に既知の名前プレフィックスを使用します。'],
        ['デバイスID', 'ブラウザスコープの識別子で、生の公開MACアドレスではありません。', 'このブラウザセッションでのみ使用し、ユニバーサルなハードウェアシリアル番号として扱わないでください。'],
        ['GATTサービスUUID', '接続が受け入れられた後に公開されるサービスグループ。', '標準UUIDをBluetooth SIGリストまたはファームウェアサービステーブルと比較します。'],
        ['カスタムサービス', 'ベンダー固有またはプロジェクト固有のUUID。', 'ファームウェア、モバイルアプリプロファイル、またはBLEドキュメントを開いて特性と権限をマッピングします。'],
      ],
    },
    {
      type: 'title',
      text: 'ブラウザBluetoothスキャンが異なる理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'ネイティブBLEスキャナーアプリは、近くの多くのデバイスからの継続的なアドバタイズを表示することがよくあります。Web Bluetoothは意図的に厳格です：ページは安全なコンテキストで開かれなければならず、スキャンはユーザークリックから開始され、ブラウザは許可選択を表示します。これにより、サイレントトラッキングからユーザーを保護しながら、JavaScriptから選択したBLEハードウェアに接続する実用的な方法を開発者に提供します。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetoothスキャナー',
          description: '迅速なファームウェア検証、デモ、サポートフロー、教室ラボ、インストールの摩擦が重要なブラウザベースの診断に最適です。',
        },
        {
          title: 'ネイティブBLEアプリ',
          description: 'バックグラウンドスキャン、RSSIログ、ペアリングワークフロー、暗号化されたベンダープロトコル、大規模な特性ツリー、長期的なフィールド診断に適しています。',
        },
      ],
    },
    {
      type: 'title',
      text: 'BLEデバイスが表示されない一般的な理由',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'BluetoothがOSレベルで無効になっているか、ブラウザにBluetooth権限がありません。',
        'デバイスが別の電話、ラップトップ、ベンダーアプリ、またはゲートウェイに接続されていて、アドバタイズを停止しています。',
        'ハードウェアは起動後またはペアリングボタンを押した後の短い期間のみアドバタイズします。',
        'ブラウザがChromiumベースでない、ページがHTTPSで提供されていない、またはプラットフォームがWeb Bluetoothをブロックしています。',
        'ファームウェアがメーカーデータをアドバタイズしているがローカル名を隠しているため、選択に名前のないデバイスが表示される場合があります。',
        'デバイスはサービスが読み取り可能になる前にボンディング、暗号化、または独自の認証を必要とします。',
      ],
    },
    {
      type: 'title',
      text: 'デバッグ中のGATT UUIDの使用方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'サービスUUIDとの接続が成功すると、ブラウザがペリフェラルに到達でき、ペリフェラルが少なくともGATTテーブルの一部を公開していることがわかります。バッテリーサービス、デバイス情報、心拍数、ヒューマンインターフェースデバイス、環境センシングなどの標準サービスは簡単に認識できます。カスタムUUIDは通常、ファームウェア固有の機能を指し、ソースコードまたはベンダードキュメントの特性マップが必要です。',
    },
    {
      type: 'table',
      headers: ['症状', '考えられる原因', '実用的な解決策'],
      rows: [
        ['許可選択が空', 'デバイスがアドバタイズしていないか、ブラウザサポートが不足しています。', 'デバイスを再起動し、ペアリングモードを有効にして、近づくか、Chrome/Edgeで再試行します。'],
        ['接続がすぐに失敗する', 'デバイスがビジー、範囲外、またはブラウザ接続を拒否しています。', 'ベンダーアプリを切断し、ペリフェラルをコンピューターの近くに保ちます。'],
        ['サービスがリストされない', 'GATTが利用できない、サービスが非表示、またはこれらのUUIDのアクセスが許可されていません。', 'ファームウェアテストで既知のオプションサービスを追加するか、ネイティブBLEツールで検査します。'],
        ['カスタムUUIDのみ表示', 'ハードウェアがベンダー固有のファームウェアサービスを使用しています。', 'UUIDをソースコード定数にマッピングし、特性の読み取り/書き込み権限を文書化します。'],
      ],
    },
    {
      type: 'title',
      text: 'セキュリティとプライバシーの制限',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'ページはバックグラウンドで近くのBluetoothデバイスを密かに収集することはできません。',
        'ブラウザは実際のMACアドレスを隠し、代わりにスコープ付きデバイスIDを提供する場合があります。',
        'アクセスはユーザーがスキャンボタンをクリックしてデバイスを選択した後にのみ開始されます。',
        '結果はこのサイトによってアップロードまたは保存されません。',
        '機密性の高い商用デバイスは、この汎用スキャナーではバイパスできない暗号化またはベンダーペアリングフローを必要とする場合があります。',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetoothは利用できません',
    unsupportedBody: 'デスクトップまたはAndroidでChromeまたはEdgeを試し、Bluetoothを有効にして、HTTPSまたはlocalhost経由でページを開きます。',
    secureContext: 'Web Bluetoothには安全なHTTPSページまたはlocalhostが必要です。安全なオリジンからツールをリロードして再試行してください。',
    scanButton: '環境をスキャン',
    scanning: 'スキャン中',
    reconnect: '再スキャン',
    disconnect: '切断',
    privacyTitle: '設計によるプライバシー',
    privacyBody: 'このサイトはMACアドレス、デバイスID、名前、UUID、スキャン履歴を保存しません。ブラウザは選択したデバイスのみを公開します。',
    deviceLabel: '選択されたデバイス',
    nameFallback: '名前のないBLEデバイス',
    idLabel: 'ブラウザデバイスID',
    servicesLabel: 'GATTサービス',
    noServices: 'この接続では読み取り可能なプライマリサービスが返されませんでした。',
    statusIdle: '近くのBLEハードウェアをスキャンする準備ができました',
    statusPermission: 'ブラウザの許可選択を待っています',
    statusConnecting: '選択したBLEデバイスに接続中',
    statusConnected: '接続済み、サービスがロードされました',
    statusDisconnected: 'デバイスが切断されました',
    statusCancelled: 'BLEデバイスが選択されていないか、このデバイスでBluetoothがオフ/利用不可です。',
    statusUnavailable: 'このデバイスではBluetoothがオフ、ブロック、または存在しないようです。Bluetoothを有効にするか、BLEアダプターを搭載したハードウェアからお試しください。',
    statusError: 'Bluetoothスキャンに失敗しました',
    signalUnknown: '信号強度はブラウザ選択によって制御されます',
    gattUnavailable: 'このデバイスはブラウザにGATTサーバーを公開しませんでした',
    customServiceName: 'カスタムまたはベンダー固有のサービス',
    serviceGenericAccess: '汎用アクセス',
    serviceGenericAttribute: '汎用属性',
    serviceDeviceInformation: 'デバイス情報',
    serviceHeartRate: '心拍数',
    serviceBattery: 'バッテリーサービス',
    serviceHumanInterfaceDevice: 'ヒューマンインターフェースデバイス',
    serviceCyclingSpeedCadence: 'サイクリング速度とケイデンス',
    serviceEnvironmentalSensing: '環境センシング',
    serviceUserData: 'ユーザーデータ',
    serviceFitnessMachine: 'フィットネスマシン',
    uuidHelp: 'UUIDはBluetoothサービスを識別します。標準サービスは自動的に名前が付けられ、ベンダー固有のUUIDはファームウェアまたはデバイスのドキュメントが必要です。',
    compatibilityHint: 'Bluetoothが有効なChromiumベースのブラウザで最適に動作します。Web Bluetoothは意図的に権限制限されており、近くのすべてのアドバタイザーを表示しない場合があります。',
    serviceCountSingular: 'サービス',
    serviceCountPlural: 'サービス',
  },
};
