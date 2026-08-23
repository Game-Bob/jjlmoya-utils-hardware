import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'voltage-divider-calculator';
const title = '分圧回路 計算ツール';
const description = '2つの抵抗による分圧回路の無負荷出力電圧、消費電流、各抵抗の消費電力、および目標電圧に必要な抵抗値を計算します。';

const faqData = [
  { question: '分圧回路計算ツールとは何ですか？', answer: '直列接続された2つの抵抗の無負荷出力電圧を計算します。電源電圧と上下の抵抗値を入力してVoutを求めるか、目標電圧を入力して下側抵抗R2を算出できます。' },
  { question: '出力電圧はどのように計算されますか？', answer: '公式 Vout = Vs x R2 / (R1 + R2) を使用します。R1は電源側、R2はグランド側に接続された抵抗です。' },
  { question: '目標電圧から抵抗値を求めるには？', answer: 'R1が既知の場合、R2 = R1 x Vtarget / (Vs - Vtarget) で計算します。目標電圧は0より大きく電源電圧未満である必要があります。' },
  { question: '分圧回路の消費電流はどれくらいですか？', answer: '分圧回路を流れる電流は I = Vs / (R1 + R2) です。負荷が接続されていない状態でも連続して消費されます。' },
  { question: '抵抗の消費電力の確認方法は？', answer: '各抵抗の消費電力は P = I² x R です。定格電力に十分な余裕のある抵抗を選択してください。' },
  { question: '分圧回路を電源として使えますか？', answer: '通常は使えません。出力に負荷を接続すると並列抵抗となり出力電圧が低下します。電流を供給する場合はバッファやレギュレータを使用してください。' },
];

const howToData = [
  { name: '計算モードの選択', text: '両方の抵抗値が分かっている場合は「Vout予測」、目標電圧から求めたい場合は「R2計算」を選択します。' },
  { name: '電源電圧とR1を入力', text: 'DC電源電圧（V）と上側抵抗R1（Ω）を入力します。' },
  { name: 'R2または目標電圧を入力', text: 'Vout予測モードではR2を入力し、R2計算モードでは目標出力電圧を入力します。' },
  { name: '計算結果の確認', text: '出力電圧、回路電流、各抵抗の消費電力を確認します。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
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

export const content: ToolLocaleContent<VoltageDividerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '分圧回路の計算', level: 2 },
    { type: 'paragraph', html: '分圧回路は2つの抵抗を用いて入力電圧を降圧します。無負荷状態の理想的な出力電圧は <code>Vout = Vs x R2 / (R1 + R2)</code> です。' },
    { type: 'title', text: '目標電圧に必要な抵抗値の算出', level: 3 },
    { type: 'paragraph', html: 'R2計算モードでは変形した公式 <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code> を使用します。' },
    { type: 'title', text: '消費電流と発熱（消費電力）', level: 3 },
    { type: 'paragraph', html: '回路を流れる電流は <code>I = Vs / (R1 + R2)</code> であり、各抵抗での消費電力は <code>P = I² x R</code> です。' },
    { type: 'title', text: '接続負荷による影響', level: 3 },
    { type: 'paragraph', html: '本ツールの結果は無負荷時の値です。出力に後続回路を接続すると実効抵抗が変化し出力電圧が変動します。' },
    { type: 'list', items: ['目標電圧は必ず 0V から電源電圧の範囲内に設定してください。', 'R1とR2の抵抗単位を統一して計算してください。', '両方の抵抗の定格電力を個別に確認してください。', '抵抗誤差や電源の変動を考慮してください。', '電流を流す用途ではオペアンプバッファ等を併用してください。'] },
    { type: 'tip', title: '電源ラインとしての使用は不可', html: '分圧回路は基準電圧や信号減衰に適しています。負荷電流が大きい場合はレギュレータを使用してください。' },
  ],
  ui: {
    modeHeader: '計算モード',
    modePredict: 'Vout予測',
    modeTarget: 'R2計算',
    inputHeader: '回路パラメータ',
    supplyLabel: '電源電圧 Vs',
    topLabel: '上側抵抗 R1',
    bottomLabel: '下側抵抗 R2',
    targetLabel: '目標出力電圧 Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: '電圧分布',
    outputLabel: '出力電圧',
    currentLabel: '消費電流',
    totalPowerLabel: '合計消費電力',
    topPowerLabel: 'R1 消費電力',
    bottomPowerLabel: 'R2 消費電力',
    ratioLabel: '電源電圧比',
    statusNominal: '計算完了',
    statusInvalid: '入力値を確認してください',
    statusTargetInvalid: '目標電圧は電源電圧未満にしてください',
    formulaHeader: '適用公式',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2)。点灯ノードが出力電圧を示します。',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget)。必要なR2の抵抗値を算出します。',
    supplyNode: '入力電源',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: 'グランド',
    hint: 'R1とR2を入力してVoutを算出します。',
    targetHint: '0からVsの範囲で目標電圧を指定してください。',
    note: '無負荷時の理想分圧回路です。負荷を接続すると出力電圧が変動します。',
  },
};
