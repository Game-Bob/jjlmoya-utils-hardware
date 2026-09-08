import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'laptop-battery-runtime-calculator';
const title = '笔记本电脑电池续航时间计算器';
const description = '根据当前电量，估算笔记本电脑在轻度、均衡和高强度工作下可以运行多久。';
const faq = [
  { question: '这个计算器估算什么？', answer: '它会用电池当前可用的能量除以你为每种工作输入的功耗。结果用于计划，不是实时读数，也不是制造商的保证。' },
  { question: '在哪里可以找到电池容量和健康度？', answer: '请查看电池报告或制造商资料中的设计容量和当前满充容量。电池健康度是当前满充容量占原始容量的百分比。' },
  { question: '为什么不同工作会得到不同的续航时间？', answer: '笔记本消耗的瓦数越高，同样的储存能量就用得越快。视频通话、游戏、外接显示器、高亮度以及持续的 CPU 或 GPU 负载都会提高平均功耗。' },
  { question: '工具可以自动读取笔记本电池吗？', answer: '不能。工具在浏览器本地运行，只使用你输入的数值。如果需要更好的估算，请用最新电池报告或实测平均功耗替换示例值。' },
];
const howTo = [
  { name: '读取原始容量', text: '输入以瓦时表示的设计容量。如果只有毫安时和电压，请先用 Wh = V × Ah 换算。' },
  { name: '描述当前电池', text: '把当前满充容量设置为原始容量的百分比，并输入开始工作时预计拥有的电量。' },
  { name: '设置真实功耗', text: '选择最接近的预设。如果有笔记本或功率计的测量结果，请编辑各项瓦数。' },
  { name: '做出出行决定', text: '查看三条续航线，并用高负载任务对应的最短时间来计划。如果余量很小，请降低负载或携带充电器。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '续航估算实际测量的是什么', level: 2 },
    { type: 'paragraph', html: '笔记本电池以瓦时储存能量，电脑则以瓦为单位消耗这些能量。计算器把这两个数值转换成时间，帮助你判断电量是否足够支持旅行、会议、课程或工作。' },
    { type: 'paragraph', html: '模型先根据原始容量和电池健康度估算当前满充容量，再应用开始工作时的预计电量。每条工作线路都会消耗同一个能量预算的一部分。' },
    { type: 'title', text: '选择可信的输入数据', level: 2 },
    { type: 'paragraph', html: '请使用电池报告或制造商规格。设计容量、当前满充容量和剩余电量是不同的数值。如果只知道电压和安时，请用 <strong>Wh = V × Ah</strong> 换算；1,000 mAh 等于 1 Ah。' },
    { type: 'list', items: ['用当前满充容量除以设计容量，得到电池健康度。', '输入工作开始时实际拥有的电量百分比。', '长时间工作时使用实测平均功耗。', '把外接显示器、扩展坞或高负载应用计入工作场景。'] },
    { type: 'title', text: '把续航时间看成计划余量', level: 2 },
    { type: 'paragraph', html: '轻度线路适合阅读和简单文档，均衡线路代表普通多任务，高强度线路表示持续高功耗的代价。将预期工作与所需时间比较，并以最短的可信结果制定计划。' },
    { type: 'table', headers: ['信号', '含义', '应对'], rows: [['充裕', '该功耗下六小时或更久', '本次工作有较大余量。'], ['可用', '三到六小时', '适合明确的工作时段，但要准备充电器。'], ['紧张', '一到三小时', '降低功耗或安排充电时间。'], ['紧急', '少于一小时', '将该工作视为依赖充电器。']] },
    { type: 'title', text: '估算无法保证的内容', level: 2 },
    { type: 'paragraph', html: '真实功耗每秒都可能变化。亮度、无线连接、温度、后台任务、固件和系统预留都会改变耗尽时间。工具不会读取传感器或模拟电池化学特性，也不会保证具体时长。' },
    { type: 'tip', title: '测量提示', html: '在一次有代表性的工作中记录电池百分比和经过的时间。用观察到的平均功耗替换预设值，再分别重新计算各种工作类型。' },
  ],
  ui: {
    batteryInputsLabel: '电池起始条件', designCapacityLabel: '电池原始容量', designCapacityHint: '新电池的能量', healthLabel: '电池健康度', healthHint: '当前满充容量与新电池的比较', chargeLabel: '开始时电量', chargeHint: '开始工作时预计拥有的电量', scenariosLabel: '按工作类型查看续航', scenariosHint: '编辑每种工作的平均功耗', powerLabel: '平均功耗', wattsSuffix: 'W', presetsLabel: '从工作预设开始', presetBalanced: '日常工作', presetTravel: '旅行省电', presetCreative: '高强度创作', runwayLabel: '能量续航线', runwayCaption: '每条线显示该工作类型耗尽相同起始电量的时间。', availableEnergyLabel: '当前可用能量', fullCapacityLabel: '当前满充容量', shortestScenarioLabel: '计划基于', runtimeLabel: '预计续航时间', loadLabel: '功耗', healthStateExcellent: '电池状态极佳', healthStateGood: '电池状态良好', healthStateAging: '电池正在老化', healthStateWorn: '电池已明显老化', statusComfortable: '余量充足', statusWorkable: '可以完成', statusTight: '余量紧张', statusUrgent: '需要充电器', scenarioLight: '轻度工作', scenarioBalanced: '均衡工作', scenarioIntense: '高强度工作', sceneBatteryLabel: '起始电量', sceneEnergyLabel: '可用能量', sceneTimeLabel: '续航时间', noteLabel: '模型限制', noteText: '这是根据你输入的数据得到的计划估算。真实功耗和系统预留可能会缩短时间。',
  },
};
