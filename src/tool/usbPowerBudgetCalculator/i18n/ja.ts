import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usb-power-budget-calculator';
const title = 'USB電力バジェット計算機';
const description = 'USBポート、充電器、ハブ、ケーブル、またはUSB-C PDプロファイルが、余裕分とケーブル電圧降下を考慮した上で、デバイスを安全に給電できるかどうかを確認します。';

const faqData = [
  {
    question: 'USBポートがデバイスに給電できるかどうかはどうやって判断しますか？',
    answer: 'デバイスの総ワット数をUSBソースのワット数と比較し、余裕分を確保してケーブルの電圧降下を推定します。ケーブルが長い、細い、または5ボルトで高い電流を流している場合、公称ワット数が高くてもセットアップが失敗することがあります。',
  },
  {
    question: 'USB給電においてケーブルの長さが重要なのはなぜですか？',
    answer: '銅を流れる電流は電圧降下を生み出します。長いケーブルや細い導体はより多くの抵抗を持つため、デバイスが受け取る電圧は充電器が供給する電圧よりも低くなる可能性があります。これはRaspberry Piボード、ハードドライブ、LEDストリップ、ドック、バスパワーハブで特に重要です。',
  },
  {
    question: 'どのくらいの余裕分を使用すべきですか？',
    answer: '通常の電子機器では最低20%、モーター、ドライブ、無線機、またはバースト負荷のあるボードでは30%、アダプターの品質が不明な場合やデバイスが連続稼働する必要がある場合はさらに多くを使用してください。',
  },
  {
    question: 'これはUSB-C PDネゴシエーションテストの代わりになりますか？',
    answer: 'いいえ。この計算機は電気的バジェットをチェックします。充電器、ケーブルeマーカー、デバイス、またはハブが特定のPower Deliveryプロファイルを実際にネゴシエートするかどうかは検証しません。',
  },
];

const howToData = [
  { name: 'ソースプロファイルを選択', text: '一般的なUSBまたはUSB-C PDプロファイルを選択するか、電圧と電流を手動で編集します。' },
  { name: 'ケーブルを記述', text: 'ケーブルの長さと導体ゲージを入力します。AWG番号が高い細いワイヤーは電圧降下が大きくなります。' },
  { name: '負荷を追加', text: '1つのデバイス負荷をワットで入力し、同じソースを共有するデバイス数を入力します。' },
  { name: 'ステータスを読む', text: 'ステータス、ケーブル降下、最終電圧、使用率、余裕分を使用してセットアップが安全かどうかを判断します。' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'USB電力はバジェットであり、ラベルではありません', level: 2 },
    {
      type: 'paragraph',
      html: '15W、45W、または100Wと表示されたUSB充電器は、適切な条件下でソースが提供できるものを表しています。デバイスが見るのは、プロトコルネゴシエーション、電流制限、ケーブル抵抗、コネクタ品質、ハブ損失、負荷スパイクの後の結果だけです。この計算機は実用的な電気的質問に焦点を当てています：ケーブル降下と余裕マージンの後、実行したいハードウェアに十分な電力が残っていますか？',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 デフォルト電流', value: '0.5 A' },
        { label: '5VでのUSB-Cデフォルト最大', value: '3 A' },
        { label: '推奨余裕分', value: '20%+' },
      ],
    },
    { type: 'title', text: '結果の解釈方法', level: 3 },
    {
      type: 'table',
      headers: ['ステータス', '意味', '最善の次のステップ'],
      rows: [
        ['安全', '選択した余裕分の後で負荷がソース定格内に収まり、推定デバイス電圧が健全なままです。', 'セットアップを使用しますが、アダプターが小さいか密閉されている場合は熱に注意してください。'],
        ['厳しい', '負荷が余裕分付きの制限に近いか、ケーブル降下が意味のあるものになっています。', 'ケーブルを短くする、より太い導体を選ぶ、負荷を減らす、またはより高い電力プロファイルに移行する。'],
        ['予算超過', '負荷が利用可能なソース電力を超えているか、デバイス側の電圧が低すぎる可能性があります。', 'より強力な充電器、パワードハブ、短いケーブル、またはより高いUSB-C PD電圧をネゴシエートするデバイスを使用する。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'ワット数は十分なのにデバイスがリセットされる場合',
      html: '<p>起動電流はデバイスラベルに印刷された平均ワット数よりはるかに高い場合があります。5V電源は同じワット数に対して20V PDプロファイルよりも速く電圧を失います。より多くの電流を運ぶ必要があるためです。多くの低コストケーブルは外側のジャケットがしっかりしていても細い電源導体を使用しており、バスパワーハブは1つのアップストリームバジェットをすべてのダウンストリームデバイス間で共有します。</p>',
    },
    { type: 'title', text: 'ケーブル電圧降下を簡単に説明', level: 3 },
    {
      type: 'paragraph',
      html: '電圧降下は、電流がケーブル抵抗を通って流れるときに発生する損失です。USB電源には電源経路に2つの導体があるため、計算機は往復の長さを使用します。1メートルのケーブルは、電源ループに対して電気的には2メートルの銅です。AWG番号が低いほど太く、通常は高電流負荷に適しています。',
    },
    {
      type: 'comparative',
      items: [
        { title: '短く太いケーブル', description: 'Raspberry Piボード、SSDエンクロージャー、開発キット、バースト電流を消費するUSB-Cドックに最適です。' },
        { title: '長く細いケーブル', description: '低電力センサーや低速充電には許容できますが、ドライブ、LED負荷、コンピュートボードにはリスクがあります。' },
        { title: 'より高い電圧PD', description: '同じワット数に対して電流を減らし、ケーブル損失を低減しますが、ソース、ケーブル、デバイスがそれをネゴシエートする場合のみです。' },
      ],
    },
    {
      type: 'tip',
      title: '実用的なルール',
      html: '計算機がセットアップが厳しいと表示した場合、それを現場警告として扱ってください。USB障害は、明確な電力問題のように見える前に、ランダムな切断、電圧低下、低速充電、ノイズの多いオーディオ、またはストレージエラーとして現れることがよくあります。',
    },
    {
      type: 'summary',
      title: 'この計算機が最も適している用途',
      items: [
        'USBハブ、シングルボードコンピューター、外部ドライブ、開発ボード、ライト、ファン、小規模なラボセットアップの計画。',
        'USB 2.0、USB 3.x、USB-C、およびUSB Power Deliveryソースプロファイルの比較。',
        'ケーブルが負荷に対して長すぎるか細すぎるかの推定。',
        '充電器やパワードハブを購入する前に適切な余裕分を選択。',
      ],
    },
  ],
  ui: {
    profileLabel: 'USBソースプロファイル',
    metricUnits: 'メートル法',
    imperialUnits: 'US',
    voltageLabel: 'ソース電圧 (V)',
    currentLabel: 'ソース電流 (A)',
    cableLengthLabel: 'ケーブル長',
    wireGaugeLabel: '電源ワイヤーゲージ',
    deviceLoadLabel: 'デバイスあたりの負荷 (W)',
    devicesLabel: 'デバイス数',
    headroomLabel: '余裕分 (%)',
    sourcePower: 'ソース電力',
    requiredPower: '必要電力',
    cableDrop: 'ケーブル降下',
    deviceVoltage: 'デバイス電圧',
    headroom: '余裕分',
    utilization: '使用率',
    safeStatus: '電力バジェットは安全に見えます',
    tightStatus: '電力バジェットが厳しいです',
    overStatus: '予算超過または電圧降下リスク',
    safeAdvice: '選択した余裕分で負荷が収まります。品質の良いケーブルを使用し、長時間の使用時は熱を確認してください。',
    tightAdvice: '制限に近づいています。ケーブル長を減らす、より太い導体を使用する、負荷を下げる、またはより強力なプロファイルを選択してください。',
    overAdvice: 'このセットアップは電圧低下やスロットリングを起こす可能性が高いです。パワードハブ、より強力なアダプター、またはより高い電圧のUSB-C PDプロファイルを使用してください。',
    busLane: 'USBソース',
    loadLane: 'デバイス負荷',
    cableLane: '降下',
    boardEyebrow: 'ライブUSB電力経路',
    sourceSocket: '供給ソケット',
    deviceSocket: 'ハードウェア負荷',
    energyFlow: 'エネルギーフロー',
    reservedLabel: '余裕分後使用可能',
  },
};
