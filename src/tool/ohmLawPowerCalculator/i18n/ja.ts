import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'オームの法則・電力計算ツール',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'ja',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'このオームの法則計算ツールで何が計算できますか？',
      acceptedAnswer: { '@type': 'Answer', text: '電圧、電流、抵抗、電力のうち既知の2つの正の値を入力すると、残りの2つの値を自動的に算出します。' },
    },
    {
      '@type': 'Question',
      name: '使用する単位は何ですか？',
      acceptedAnswer: { '@type': 'Answer', text: '電圧はボルト（V）、電流はアンペア（A）、抵抗はオーム（Ω）、電力はワット（W）を使用します。' },
    },
    {
      '@type': 'Question',
      name: '電力と抵抗を入力として使用できますか？',
      acceptedAnswer: { '@type': 'Answer', text: 'はい。平方根の公式を用いて、電力と抵抗から電圧と電流を算出します。' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'オームの法則を用いた電気量の計算手順',
  step: [
    { '@type': 'HowToStep', name: '既知の2つの値を選択', text: '電圧、電流、抵抗、電力の中から分かっている2つの値を選択します。' },
    { '@type': 'HowToStep', name: '測定値を入力', text: 'アクティブになった入力欄に正の数値を入力します。' },
    { '@type': 'HowToStep', name: '計算結果を確認', text: '回路図と表示パネルに算出された値と使用された公式が表示されます。' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: '回路の電圧・電流・抵抗・電力を計算', level: 2 },
  { type: 'paragraph', html: 'シンプルな回路において、2つの電気量が分かっていれば残りの2つを求めることができます。既知のペアを入力すると、このオームの法則計算ツールがボルト、アンペア、オーム、ワットの単位で未知の値を算出します。' },
  { type: 'paragraph', html: '例えば、12 Vと2 Aを入力すると6 Ωと24 Wが得られます。5 Vと10 Wを入力すると2 Aと2.5 Ωが得られます。抵抗値の確認、LED電流の推定、アンプの消費電力の確認などに便利です。' },
  { type: 'title', text: '使用すべきオームの法則の公式', level: 3 },
  { type: 'paragraph', html: '使用する公式は分かっている2つの測定値によって異なります。すべてオームの法則 V = I x R と電力の公式 P = V x I の変形です。' },
  { type: 'table', headers: ['既知の値', '算出される値', '使用する公式'], rows: [
    ['電圧と電流', '抵抗と電力', 'R = V / I および P = V x I'],
    ['電圧と抵抗', '電流と電力', 'I = V / R および P = V² / R'],
    ['電圧と電力', '電流と抵抗', 'I = P / V および R = V² / P'],
    ['電流と抵抗', '電圧と電力', 'V = I x R および P = I² x R'],
    ['電流と電力', '電圧と抵抗', 'V = P / I および R = P / I²'],
    ['抵抗と電力', '電圧と電流', 'V = √(P x R) および I = √(P / R)'],
  ] },
  { type: 'tip', title: '消費電力から安全な部品を選択', html: '計算結果が24 Wの場合、使用する部品は少なくともその電力を熱として放散できる定格が必要です。常に安全マージンを考慮してください。' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'ohm-law-power-calculator',
  title: 'オームの法則・電力計算ツール',
  description: '既知の2つの値から電圧、電流、抵抗、電力を求めるオームの法則計算ツール。',
  ui: {
    instructions: '既知の2つの値を選択して入力してください。回路が残りのペアをSI単位で算出します。',
    knownLabel: '既知の2つの値を選択',
    useAsKnownLabel: '既知として使用',
    voltageLabel: '電圧',
    currentLabel: '電流',
    resistanceLabel: '抵抗',
    powerLabel: '電力',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: '回路を完了',
    resultHint: '2つの既知端子から未知のペアを算出します。',
    formulaTitle: '回路表示',
    formulaHint: '点灯端子は既知です。銅線パターンが公式を示します。',
    statusTitle: '計算ステータス',
    statusEmpty: '開始するには2つの正の値を入力してください。',
    statusInvalid: '既知の値は両方とも0より大きい必要があります。',
    statusReady: '回路関係の計算が完了しました。',
    presetTitle: '実際の負荷から開始',
    presetLed: 'LEDインジケータ',
    presetUsb: 'USB負荷',
    presetAmplifier: 'アンプ負荷',
    resetLabel: 'リセット',
    orbitCaption: '2つの端子を選択して回路を閉じてください。',
    knownBadge: '既知',
    solvedBadge: '算出',
    unitVoltage: 'ボルト',
    unitCurrent: 'アンペア',
    unitResistance: 'オーム',
    unitPower: 'ワット',
    formulaVoltageCurrent: 'R = V / I および P = V x I',
    formulaVoltageResistance: 'I = V / R および P = V² / R',
    formulaVoltagePower: 'I = P / V および R = V² / P',
    formulaCurrentResistance: 'V = I x R および P = I² x R',
    formulaCurrentPower: 'V = P / I および R = P / I²',
    formulaResistancePower: 'V = √(P x R) および I = √(P / R)',
    seoTitle: 'オームの法則計算ツール',
  },
  seo,
  faqTitle: 'オームの法則に関するよくある質問',
  faq: [
    { question: '電圧と電流が分かっている場合、何が得られますか？', answer: '抵抗と電力が得られます。例えば12 Vと2 Aからは6 Ωと24 Wが算出されます。' },
    { question: '抵抗の消費電力を計算できますか？', answer: 'はい。電圧と抵抗、または電流と抵抗を入力することで、消費電力をワット単位で計算できます。' },
    { question: '電力と電圧を入力として使えますか？', answer: 'はい。両方を入力すると、電流（I = P / V）と抵抗（R = V² / P）が算出されます。' },
    { question: 'オームの法則はすべての電子部品に適用できますか？', answer: 'いいえ。このツールは単純なオーム性部品をモデル化しています。ダイオードなどは非線形特性を持ちます。' },
  ],
  bibliographyTitle: '公式の参照',
  bibliography,
  howTo: [
    { name: '既知の2つの値を選択', text: '分かっている2つの電気量を選択します。' },
    { name: '正の測定値を入力', text: 'ボルト、アンペア、オーム、ワットを入力します。' },
    { name: '結果を確認', text: '算出された値と使用された公式を確認します。' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
