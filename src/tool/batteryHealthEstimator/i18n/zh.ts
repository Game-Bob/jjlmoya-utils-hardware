import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EstimadorSaludBateriaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'lithium-battery-health-calculator';
const title = '锂电池寿命健康度在线计算器';
const description =
  '根据循环次数、电压和温度计算锂电池的健康状态 (SoH)。提供最大化能源寿命的科学指南。';

const faqData = [
  {
    question: '什么是电池的化学衰减？',
    answer:
      '在每次充放电循环中，锂电芯都会产生微小的裂纹和化学沉积物 (S.E.I.) 的积累，从而降低其储能能力。这是一个不可逆的过程，但可以通过良好的使用习惯来减缓。',
  },
  {
    question: '为什么建议只充到 80%？',
    answer:
      '锂电池在极端电压（0% 和 100%）下会承受更大的压力。将电量保持在 20% 到 80% 之间，可以通过减少发热和内部压力，使电芯寿命延长三倍。',
  },
  {
    question: '热量如何影响电池寿命？',
    answer:
      '热量是头号敌人。环境温度每超过最佳温度（25 度）10 度，化学衰减的速度大约会翻倍。',
  },
  {
    question: '什么是完整的充电循环？',
    answer:
      '一个循环是指使用了 100% 的电池容量，但不一定是一次性用完。如果你今天用了 50%，充满电后明天再用 50%，就完成了一个完整的循环。',
  },
];

const howToData = [
  {
    name: '确认原始容量',
    text: '在设备包装盒或制造商官网上查找电池出厂时的 mAh（毫安时）容量。',
  },
  {
    name: '查看当前循环次数',
    text: '许多系统（如 iOS 或 Android 14）允许你查看电池已累积的充电循环次数。',
  },
  {
    name: '输入技术数据',
    text: '调整当前电压、循环次数和温度，以便我们的计算引擎估算 SoH。',
  },
  {
    name: '分析诊断结果',
    text: '查看健康百分比。如果低于 80%，你可能会开始注意到电池性能下降或意外关机。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<EstimadorSaludBateriaUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '时间的化学：锂电池为何会老化', level: 2 },
    {
      type: 'paragraph',
      html: '锂离子电池并不是一个静态的能量盒，而是一个自制造之日起就处于不断衰减中的动态化学生态系统。每一次充放电循环、每一次温度波动以及在极端电压下的每一分钟，都会产生阻碍离子流动的副产物。',
    },
    { type: 'title', text: '主要的衰减机制', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>SEI 层：</strong> 固体电解质界面随时间生长，消耗活性锂并增加内阻。 <strong>电解液氧化：</strong> 电压超过 4.1V 会加速氧化，并可能导致电池膨胀。 <strong>析锂现象：</strong> 在低温下充电会使锂以金属形式沉积，产生可能刺穿隔膜的枝晶。',
    },
    { type: 'title', text: '100% 的迷思：为什么通宵充电是个错误', level: 3 },
    {
      type: 'paragraph',
      html: '对于锂离子来说，处于 100% 电量（4.2V）是一种高压状态。研究表明，将设备电量保持在 <strong>20% 到 80%</strong> 之间，循环寿命可延长两到三倍。此外，温度每超过 25°C 达 10°C，化学衰减率大约会翻倍。',
    },
    { type: 'title', text: '能源生存协议', level: 3 },
    {
      type: 'paragraph',
      html: '切勿在 0°C 以下为电池充电：锂会沉积在负极上造成永久损坏。快速充电会产生局部热量和机械应力；仅在绝对必要时使用。长期存放时，请将电池保持在 50% 电量并置于阴凉处。',
    },
  ],
  ui: {
    badge: '锂电池',
    title: '电池健康度估算',
    description: '锂离子电芯的技术衰减诊断。',
    paramsTitle: '电芯参数',
    voltageLabel: '当前电压',
    cyclesLabel: '充电循环',
    tempLabel: '温度',
    voltageHint: '额定范围：3.0V (空) 到 4.2V (满)。',
    labelUsefulLife: '使用寿命',
    yearsPrefix: '预计',
    yearsSuffix: '年',
    metricThermalStress: '热应力',
    metricVoltageStress: '电压应力',
    metricLithiumPlating: '析锂风险',
    statusExcelente: '状态极佳',
    statusBueno: '状态良好',
    statusRegular: '状态一般',
    statusCritico: '状态危急',
    indicatorTempNormal: '正常',
    indicatorTempCritical: '危急',
    indicatorVoltageHigh: '高',
    indicatorVoltageLow: '低',
    indicatorPlatingRisk: '高风险',
    indicatorPlatingOk: '无风险',
    recTemp: '降低环境温度或改善通风以避免电解液氧化。',
    recVoltageHigh: '避免让电池长时间保持 100% 电量 (4.2V)。',
    recVoltageLow: '避免深度放电；将电量保持在 20% 到 80% 之间可使电池寿命翻倍。',
    recSohLow: '容量已降至最佳标准以下。如果续航不足，请考虑更换电池。',
    recDefault: '保持当前习惯 -你的电池处于理想的工作范围内。',
  },
};
