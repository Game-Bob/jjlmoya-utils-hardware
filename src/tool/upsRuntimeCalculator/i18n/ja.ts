import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ups-runtime-calculator';
const title = 'UPS稼働時間計算機';
const description = 'UPSのバッテリー駆動時間、保護対象の総負荷、使用可能なワット時、PC・モニター・ルーター・NAS・ホームラボ機器に推奨されるVA容量を見積もります。';

const faqData = [
  {
    question: 'UPSの稼働時間はどう計算しますか？',
    answer: 'UPSに接続された各機器のワット数を合計し、UPSバッテリーのワット時にインバーター効率を掛け、保持したい予備を差し引き、使用可能ワット時を負荷ワット数で割ります。時間単位の結果に60を掛けると分単位になります。',
  },
  {
    question: '実際のUPS稼働時間が推定と異なるのはなぜですか？',
    answer: '稼働時間はバッテリーの経年劣化、温度、放電率、インバーター効率、負荷スパイク、メーカーのカットオフ電圧によって変化します。結果は計画用の推定値として扱い、制御されたシャットダウンテストで検証してください。',
  },
  {
    question: 'UPSはワットとVAのどちらで選ぶべきですか？',
    answer: '両方を確認してください。ワットはUPSが供給できる実電力を示し、VAは力率を含みます。UPSは負荷をワットで上回り、接続機器に対して十分なVA余裕を持つ必要があります。',
  },
  {
    question: 'UPSにはどのくらいの余裕を持たせるべきですか？',
    answer: '実用的な目安として、通常負荷をUPSのワット定格の約70～80%以下に抑えることです。これにより起動時のスパイク、バッテリーの経年劣化、将来の機器追加に対応できます。',
  },
  {
    question: 'プリンターやヒーターをUPSに接続できますか？',
    answer: 'UPSが明示的に対応していない限り、レーザープリンター、ヒーター、その他高突入電流負荷は避けてください。インバーターを過負荷にし、稼働時間を大幅に短縮する可能性があります。',
  },
];

const howToData = [
  {
    name: '保護対象機器をリストアップ',
    text: '停電時にオンラインを維持する必要がある機器（コンピューター、モニター、ルーター、モデム、NAS、ネットワークスイッチなど）を入力します。',
  },
  {
    name: '現実的なワット数を入力',
    text: '可能であれば壁コンセントで測定した消費電力を使ってください。電源ユニットの定格しかない場合は、ラベルの最大値ではなく予想される動作負荷に減らしてください。',
  },
  {
    name: 'バッテリー容量と前提条件を設定',
    text: 'UPSバッテリーのワット時、インバーター効率、力率、安全なシャットダウンのために保持したい予備の割合を入力します。',
  },
  {
    name: '稼働時間とVA推奨値を読み取る',
    text: '推定分数と推奨VAを購入や設定のガイドとして使用し、安全な停電訓練で設定を検証します。',
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

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
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
      text: 'UPS稼働時間計算機：バッテリーバックアップ時間を見積もる',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'UPS稼働時間の見積もりは、停電時にハードウェアがどのくらいの時間オンラインを維持できるか、そしてUPSが接続負荷に対して十分な大きさかを明らかにします。この計算機は機器のワット数、バッテリーのワット時、インバーター効率、力率、シャットダウン予備を組み合わせて、単純なバッテリー容量の除算よりも実際の計画に近い結果を提供します。',
    },
    {
      type: 'title',
      text: '稼働時間の計算式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '推定稼働時間（時間）は <strong>使用可能なバッテリーワット時を総負荷Wで割った値</strong>です。使用可能ワット時は表示されているバッテリー容量そのものではなく、インバーター損失と安全なシャットダウンのための予備を考慮して調整する必要があります。例えば、432Whのバッテリーで効率86％、予備20％の場合、約297Whの使用可能エネルギーとなります。',
    },
    {
      type: 'table',
      headers: ['入力項目', '重要な理由', '実用的なガイダンス'],
      rows: [
        ['負荷ワット数', '稼働時間を直接左右します', '特にゲーミングPCやNASシステムでは、可能な限り壁コンセントメーターで測定してください。'],
        ['バッテリーWh', 'エネルギー総量を決めます', 'メーカーのバッテリーデータ、または定格電圧×アンペア時を使用してください。'],
        ['効率', 'インバーター損失を考慮します', '多くの民生用UPSでは80～90%が妥当な計画範囲です。'],
        ['力率', 'ワットをVAに変換します', '把握している場合はUPSの仕様値を使用し、不明な場合は0.6～0.8がエントリー～ミドルクラスで一般的です。'],
        ['予備', 'シャットダウンの余裕を確保します', 'PCやサーバーの制御されたシャットダウンには10～25%が適切です。'],
      ],
    },
    {
      type: 'title',
      text: 'どのくらいの稼働時間が必要ですか？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5～10分：短いちらつきを乗り切るか、デスクトップを安全にシャットダウンするのに十分です。',
        '10～20分：ルーター、モデム、NAS、小規模ホームラボノードに有用です。',
        '30分以上：ネットワークの継続性、リモートワーク、停電が多い場所に適しています。',
        '数時間：通常、デスクトップUPSだけでなく、より大規模なバッテリーシステムが必要です。',
      ],
    },
    {
      type: 'title',
      text: 'UPS選択時のワットとVAの比較',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'UPSの製品名はVAを宣伝することが多いですが、実際の機器にとってワット定格の方が厳しい制限です。900VAのUPSが540Wしかサポートしない場合がある一方、別の900VAモデルは600W以上をサポートすることもあります。両方の定格を確認し、過負荷アラーム、バッテリー寿命の短縮、停電時の切替失敗を避けるため、通常動作を最大値未満に保ってください。',
    },
    {
      type: 'title',
      text: '稼働時間の推定を歪める負荷',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'ゲーミングPCは、アイドル時の低消費からGPU高負荷へ数秒で変化します。',
        'モニターは輝度、HDRモード、パネルサイズによって大きく変動します。',
        'NAS機器はディスク起動時やリビルド時に追加の電力を消費します。',
        'レーザープリンター、ヒーター、ポンプ、コンプレッサーは、明示的に対応していない限りUPSに不向きな負荷です。',
        '古いバッテリーは、元の容量が示すよりもはるかに短い稼働時間しか提供できない場合があります。',
      ],
    },
    {
      type: 'title',
      text: '安全な検証チェックリスト',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'テスト前にUPSを完全に充電してください。',
        '開いている作業を保存し、重要な書き込み中やファームウェア更新中のテストは避けてください。',
        '機器ではなく壁電源を外し、UPSの負荷率とバッテリー推定値を監視してください。',
        'バッテリーが消耗する前に、PC、NAS、またはサーバーがシャットダウン信号を受信することを確認してください。',
        '鉛蓄電池UPSバッテリーは急速に劣化するため、数か月ごとにテストを繰り返してください。',
      ],
    },
  ],
  ui: {
    loadTitle: '保護負荷',
    addDevice: '機器を追加',
    deviceName: '機器',
    watts: 'ワット',
    remove: '機器を削除',
    batteryWh: 'バッテリー容量 (Wh)',
    efficiency: 'インバーター効率',
    powerFactor: '力率',
    reserve: 'シャットダウン予備',
    totalLoad: '合計負荷',
    runtime: '推定稼働時間',
    recommendedUps: '推奨サイズ',
    usableEnergy: '使用可能エネルギー',
    minutes: '分',
    hours: '時間',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'UPSの前提条件',
    presetDesktop: 'デスクトップPC',
    presetMonitor: '27インチモニター',
    presetRouter: 'ルーターとモデム',
    presetNas: '2ベイNAS',
    percentUnit: '%',
    bandLight: '十分なバックアップ時間、推奨UPS容量は約',
    bandBalanced: 'バランスの取れたバックアップ時間、推奨UPS容量は約',
    bandHeavy: '短いバックアップ時間；より大きなバッテリーを検討するか、負荷を約',
    summaryPrefix: 'この構成の',
  },
};
