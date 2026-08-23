import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VoltageDividerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'voltage-divider-calculator';
const title = '分压电路计算器';
const description = '计算双电阻分压电路的无负载输出电压、回路电流、电阻功率损耗，或根据目标电压求解下偏置电阻值。';

const faqData = [
  { question: '分压电路计算器有什么作用？', answer: '它用于计算两个串联电阻在无负载状态下的输出电压。输入电源电压、上偏置电阻和下偏置电阻可计算 Vout；输入目标 Vout 可求解所需下偏置电阻 R2。' },
  { question: '如何计算输出电压？', answer: '计算公式为 Vout = Vs x R2 / (R1 + R2)，其中 R1 接电源，R2 接地，输出端取自两电阻中间节点。' },
  { question: '如何根据目标电压计算所需的电阻值？', answer: '在已知 R1 的情况下，变形公式为 R2 = R1 x Vtarget / (Vs - Vtarget)。目标电压必须大于 0 且小于电源电压。' },
  { question: '分压电路会消耗多少电流？', answer: '分压回路电流为 I = Vs / (R1 + R2)，无论是否连接外部电路，该电流都会持续消耗。' },
  { question: '如何评估电阻的额定功率？', answer: '每个电阻消耗的功率为 P = I² x R。所选电阻的额定功率应高于计算值，并考虑环境温度和降额使用。' },
  { question: '分压电路可以直接作为电源使用吗？', answer: '通常不可以。输出端连接负载后相当于与 R2 并联，会降低等效电阻并导致输出电压拉低。若需驱动负载，请增加运放跟随器或使用稳压电源。' },
];

const howToData = [
  { name: '选择计算模式', text: '若已知两电阻阻值，选择 Predict Vout；若已知电源、R1 及期望输出电压，选择 Find R2。' },
  { name: '输入电源电压与 R1', text: '输入直流电源电压（伏特）及电源端上偏置电阻 R1（欧姆）。' },
  { name: '输入下偏置电阻或目标电压', text: '在 Predict Vout 模式下输入 R2；在 Find R2 模式下输入介于 0 与 Vs 之间的目标电压。' },
  { name: '查看电路分析结果', text: '观察高亮节点的输出电压、回路电流以及两个电阻各自的功率损耗。' },
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
  inLanguage: 'zh',
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
    { type: 'title', text: '分压电路计算与分析', level: 2 },
    { type: 'paragraph', html: '双电阻分压电路用于将较高的输入电压降至较低的采样或参考电压。无负载理想输出公式为 <code>Vout = Vs x R2 / (R1 + R2)</code>。本工具可同步计算回路电流与电阻发热功率。' },
    { type: 'title', text: '根据目标电压求解下偏置电阻', level: 3 },
    { type: 'paragraph', html: '选择求解 R2 模式时，公式变形为 <code>R2 = R1 x Vtarget / (Vs - Vtarget)</code>。目标电压越接近电源电压，所需的 R2 阻值越大。' },
    { type: 'title', text: '回路电流与电阻功率计算', level: 3 },
    { type: 'paragraph', html: '分压回路静态电流为 <code>I = Vs / (R1 + R2)</code>，单个电阻耗散功率为 <code>P = I² x R</code>。在较高电压轨下需特别注意校验电阻的额定功率。' },
    { type: 'title', text: '负载效应与实际应用注意', level: 3 },
    { type: 'paragraph', html: '本计算基于无负载假设。当后级电路接至 Vout 时，负载阻抗将与 R2 并联，导致实际输出电压偏低。如需驱动负载，建议使用运放构成的缓冲器。' },
    { type: 'list', items: ['目标电压必须严格限制在 0 至电源电压之间。', '计算时请保持 R1 与 R2 的单位一致。', '务必分别核算 R1 和 R2 的功耗与降额。', '电阻公差与电源波动会直接影响最终输出精度。', '后级有电流抽取时，需将负载电阻纳入等效计算。'] },
    { type: 'tip', title: '分压节点不能替代电源轨', html: '电阻分压电路输出阻抗较高，适合作为参考电压或信号采样。若后级需要供电电流，请务必加装缓冲电路。' },
  ],
  ui: {
    modeHeader: '计算模式',
    modePredict: '预测 Vout',
    modeTarget: '求解 R2',
    inputHeader: '电路参数设置',
    supplyLabel: '电源电压 Vs',
    topLabel: '上偏置电阻 R1',
    bottomLabel: '下偏置电阻 R2',
    targetLabel: '目标输出电压 Vout',
    voltageUnit: 'V',
    resistanceUnit: 'Ω',
    resultHeader: '电压与功率分布',
    outputLabel: '节点输出电压',
    currentLabel: '分压回路电流',
    totalPowerLabel: '总耗散功率',
    topPowerLabel: 'R1 耗散功率',
    bottomPowerLabel: 'R2 耗散功率',
    ratioLabel: '电源电压占比',
    statusNominal: '计算正确',
    statusInvalid: '请检查输入参数',
    statusTargetInvalid: '目标电压必须低于电源电压',
    formulaHeader: '当前计算公式',
    formulaPredict: 'Vout = Vs x R2 / (R1 + R2)。高亮节点显示输出电压。',
    formulaTarget: 'R2 = R1 x Vtarget / (Vs - Vtarget)。自动计算所需的 R2 阻值。',
    supplyNode: '电源输入',
    topNode: 'R1',
    tapNode: 'VOUT',
    bottomNode: 'R2',
    groundNode: '参考地',
    hint: '输入 R1 与 R2 即可计算分压输出。',
    targetHint: '请输入介于 0 与电源电压之间的目标电压。',
    note: '此计算为理想无负载状态。连接后级负载将影响实际输出电压。',
  },
};
