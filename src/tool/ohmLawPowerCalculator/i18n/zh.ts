import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { SEOSection } from '../../../types';
import type { OhmLawPowerCalculatorLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '欧姆定律与电功率计算器',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '这个欧姆定律计算器可以计算什么？',
      acceptedAnswer: { '@type': 'Answer', text: '输入电压、电流、电阻或功率中任意两个正数值，计算器即可自动求解其余两个参数。' },
    },
    {
      '@type': 'Question',
      name: '计算器使用什么单位？',
      acceptedAnswer: { '@type': 'Answer', text: '电压使用伏特（V），电流使用安培（A），电阻使用欧姆（Ω），功率使用瓦特（W）。' },
    },
    {
      '@type': 'Question',
      name: '能否将功率和电阻作为已知条件？',
      acceptedAnswer: { '@type': 'Answer', text: '可以。计算器利用开方公式由功率和电阻推导求解电压与电流。' },
    },
  ],
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何使用欧姆定律计算电路参数',
  step: [
    { '@type': 'HowToStep', name: '选择两个已知参数', text: '在电压、电流、电阻和功率中激活您已知的两个物理量。' },
    { '@type': 'HowToStep', name: '输入测量数值', text: '在激活的输入框中输入大于零的正数。' },
    { '@type': 'HowToStep', name: '查看计算结果', text: '电路图及面板将展示计算出的参数及所用变形公式。' },
  ],
};

const seo: SEOSection[] = [
  { type: 'title', text: '计算电路中的电压电流电阻或功率', level: 2 },
  { type: 'paragraph', html: '在简单电路中，只要知道任意两个电气物理量，就足以求解其余两个。输入您拥有的已知数据对，本欧姆定律计算器即可用伏特、安培、欧姆和瓦特计算出缺失的参数。' },
  { type: 'paragraph', html: '例如，输入 12 V 和 2 A 可算出 6 Ω 与 24 W；输入 5 V 和 10 W 可算出 2 A 与 2.5 Ω。这在检查电阻、估算 LED 电流或计算功放负载功率时非常有用。' },
  { type: 'title', text: '应该使用哪一个欧姆定律公式', level: 3 },
  { type: 'paragraph', html: '适用的公式取决于已知的两个测量值。所有公式均为欧姆定律 V = I x R 及功率公式 P = V x I 的推导形式。' },
  { type: 'table', headers: ['已知条件', '求解参数', '使用公式'], rows: [
    ['电压与电流', '电阻与功率', 'R = V / I 以及 P = V x I'],
    ['电压与电阻', '电流与功率', 'I = V / R 以及 P = V² / R'],
    ['电压与功率', '电流与电阻', 'I = P / V 以及 R = V² / P'],
    ['电流与电阻', '电压与功率', 'V = I x R 以及 P = I² x R'],
    ['电流与功率', '电压与电阻', 'V = P / I 以及 R = P / I²'],
    ['电阻与功率', '电压与电流', 'V = √(P x R) 以及 I = √(P / R)'],
  ] },
  { type: 'tip', title: '结合功率参数选择安全的电路元件', html: '如果计算器得出 24 W 功率，所用元件必须能够承受至少该大小的热耗散。在实际应用中应始终保留安全裕量。' },
];

export const content: OhmLawPowerCalculatorLocaleContent = {
  slug: 'ohm-law-power-calculator',
  title: '欧姆定律与电功率计算器',
  description: '基于两个已知物理量求解电压、电流、电阻和电功率的欧姆定律计算器。',
  ui: {
    instructions: '选择您已知的两个物理量并输入数值。电路将自动推导计算剩余参数。',
    knownLabel: '选择两个已知参数',
    useAsKnownLabel: '设为已知',
    voltageLabel: '电压',
    currentLabel: '电流',
    resistanceLabel: '电阻',
    powerLabel: '功率',
    voltageUnit: 'V',
    currentUnit: 'A',
    resistanceUnit: 'Ω',
    powerUnit: 'W',
    resultTitle: '补全电路',
    resultHint: '两个已知端节点计算未知参数对。',
    formulaTitle: '电路读数',
    formulaHint: '高亮端节点为已知量。铜导线显示当前公式。',
    statusTitle: '计算状态',
    statusEmpty: '请输入两个大于零的正数值开始计算。',
    statusInvalid: '两个已知参数都必须大于零。',
    statusReady: '电路参数推导求解完成。',
    presetTitle: '从实际负载预设开始',
    presetLed: 'LED 指示灯',
    presetUsb: 'USB 负载',
    presetAmplifier: '功放负载',
    resetLabel: '重置',
    orbitCaption: '选择两个端节点闭合电路。',
    knownBadge: '已知',
    solvedBadge: '已求解',
    unitVoltage: '伏特',
    unitCurrent: '安培',
    unitResistance: '欧姆',
    unitPower: '瓦特',
    formulaVoltageCurrent: 'R = V / I 以及 P = V x I',
    formulaVoltageResistance: 'I = V / R 以及 P = V² / R',
    formulaVoltagePower: 'I = P / V 以及 R = V² / P',
    formulaCurrentResistance: 'V = I x R 以及 P = I² x R',
    formulaCurrentPower: 'V = P / I 以及 R = P / I²',
    formulaResistancePower: 'V = √(P x R) 以及 I = √(P / R)',
    seoTitle: '欧姆定律计算器',
  },
  seo,
  faqTitle: '欧姆定律常见问题',
  faq: [
    { question: '已知电压和电流，可以算出什么？', answer: '可以算出电阻和功率。例如 12 V 和 2 A 可以算出 6 Ω 和 24 W。' },
    { question: '能否计算电阻散发的发热功率？', answer: '可以。输入电压与电阻，或输入电流与电阻，即可算出瓦特表示的发热功率。' },
    { question: '能否将功率和电压作为输入参数？', answer: '可以。输入这两项后，计算器将推导出电流（I = P / V）和电阻（R = V² / P）。' },
    { question: '欧姆定律适用于所有电子元件吗？', answer: '不适用。本工具模型针对简单欧姆元件。二极管等器件具有非线性特性。' },
  ],
  bibliographyTitle: '公式参考来源',
  bibliography,
  howTo: [
    { name: '选择两个已知参数', text: '激活您已知的两个电气物理量。' },
    { name: '输入正数测量值', text: '输入伏特、安培、欧姆或瓦特数值。' },
    { name: '查看计算结果', text: '查看算出的参数以及所用推导公式。' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
