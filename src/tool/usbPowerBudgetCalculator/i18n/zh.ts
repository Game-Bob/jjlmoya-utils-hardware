import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usb-power-budget-calculator';
const title = 'USB 功率预算计算器';
const description = '检查USB端口、充电器、集线器、线缆或USB-C PD协议是否能在预留余量和线缆压降之后安全地为您的设备供电。';

const faqData = [
  {
    question: '如何知道USB端口能否为我的设备供电？',
    answer: '将设备总功率与USB电源功率进行比较，预留余量并估算线缆压降。当线缆较长、较细或在5伏电压下传输较大电流时，即便标称功率看起来很高，配置也可能失败。',
  },
  {
    question: '为什么线缆长度对USB供电很重要？',
    answer: '电流流经铜线会产生压降。长线缆和细导体的电阻更大，因此设备接收到的电压可能低于充电器提供的电压。这对树莓派开发板、硬盘、LED灯带、扩展坞和总线供电集线器尤为重要。',
  },
  {
    question: '应该使用多大的余量？',
    answer: '普通电子设备至少使用20%，电机、驱动器、无线电或具有突发负载的开发板使用30%，如果适配器质量未知或设备需要连续运行，则需要更多的余量。',
  },
  {
    question: '这能替代USB-C PD协商测试吗？',
    answer: '不能。计算器检查电气预算，不验证充电器、线缆e-marker、设备或集线器是否实际协商了特定的Power Delivery协议。',
  },
];

const howToData = [
  { name: '选择电源协议', text: '选择常见的USB或USB-C PD协议，或手动编辑电压和电流。' },
  { name: '描述线缆', text: '输入线缆长度和导体线规。高AWG号的细线会导致更大的压降。' },
  { name: '添加负载', text: '输入单个设备负载（瓦特）和共享同一电源的设备数量。' },
  { name: '读取状态', text: '使用状态、线缆压降、最终电压、利用率和余量来决定配置是否安全。' },
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
  inLanguage: 'zh',
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
    { type: 'title', text: 'USB供电是预算，不是标签', level: 2 },
    {
      type: 'paragraph',
      html: '标有15W、45W或100W的USB充电器描述的是电源在合适条件下能够提供的功率。您的设备只能看到经过协议协商、电流限制、线缆电阻、连接器质量、集线器损耗和负载峰值之后的结果。此计算器关注实际的电气问题：在线缆压降和预留余量之后，是否还有足够的功率来运行您想要的硬件？',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 默认电流', value: '0.5 A' },
        { label: 'USB-C 5V 默认最大值', value: '3 A' },
        { label: '建议预留', value: '20%+' },
      ],
    },
    { type: 'title', text: '如何解读结果', level: 3 },
    {
      type: 'table',
      headers: ['状态', '含义', '最佳下一步'],
      rows: [
        ['安全', '负载在选定的预留余量后符合电源额定值，且估算的设备电压保持正常。', '使用此配置，但如果适配器较小或封闭，请注意散热。'],
        ['紧张', '负载接近预留限制，或线缆压降开始变得显著。', '缩短线缆、选择更粗的导体、降低负载，或切换到更高的功率协议。'],
        ['超出预算', '负载超出可用电源功率，或设备端电压可能过低。', '使用更强的充电器、带供电的集线器、更短的线缆，或使用能协商更高USB-C PD电压的设备。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '瓦数足够但设备仍然重启时',
      html: '<p>启动电流可能远高于设备标签上印的平均瓦数。在相同瓦数下，5V电源比20V PD协议更快损失电压，因为它必须承载更大的电流。许多低成本线缆即使外皮看起来很厚，也使用细的电源导体，而总线供电集线器在所有下游设备之间共享一个上游预算。</p>',
    },
    { type: 'title', text: '线缆压降简明解释', level: 3 },
    {
      type: 'paragraph',
      html: '压降是电流流经线缆电阻时产生的损耗。USB供电在电源路径中有两个导体，因此计算器使用往返长度。一米长的线缆在电源回路中电气上相当于两米的铜。AWG号越小越粗，通常更适合大电流负载。',
    },
    {
      type: 'comparative',
      items: [
        { title: '短粗线缆', description: '最适合树莓派开发板、SSD外壳、开发套件和具有突发电流需求的USB-C扩展坞。' },
        { title: '长细线缆', description: '可接受用于低功耗传感器或慢速充电，但对驱动器、LED负载和计算开发板有风险。' },
        { title: '更高电压PD', description: '在相同瓦数下降低电流，从而降低线缆损耗，但前提是电源、线缆和设备能协商。' },
      ],
    },
    {
      type: 'tip',
      title: '实用规则',
      html: '如果计算器显示配置紧张，请将其视为现场警告。USB故障通常在表现为明显的电源问题之前，以随机断开、欠压、慢速充电、音频噪声或存储错误的形式出现。',
    },
    {
      type: 'summary',
      title: '此计算器最适合',
      items: [
        '规划USB集线器、单板计算机、外置硬盘、开发板、灯具、风扇和小型实验室设置。',
        '比较USB 2.0、USB 3.x、USB-C和USB Power Delivery电源协议。',
        '估算线缆对于负载是否太长或太细。',
        '在购买充电器或带供电的集线器之前选择合理的预留余量。',
      ],
    },
  ],
  ui: {
    profileLabel: 'USB电源协议',
    metricUnits: '公制',
    imperialUnits: '美制',
    voltageLabel: '电源电压 (V)',
    currentLabel: '电源电流 (A)',
    cableLengthLabel: '线缆长度',
    wireGaugeLabel: '电源线规格',
    deviceLoadLabel: '每设备负载 (W)',
    devicesLabel: '设备数',
    headroomLabel: '预留余量 (%)',
    sourcePower: '电源功率',
    requiredPower: '所需功率',
    cableDrop: '线缆压降',
    deviceVoltage: '设备电压',
    headroom: '余量',
    utilization: '利用率',
    safeStatus: '功率预算看起来安全',
    tightStatus: '功率预算紧张',
    overStatus: '超出预算或存在压降风险',
    safeAdvice: '负载在选定余量内合适。使用优质线缆，长时间运行时检查热量。',
    tightAdvice: '您接近极限。减少线缆长度、使用更粗的导体、降低负载或选择更强的协议。',
    overAdvice: '此配置可能发生欠压或降频。使用带供电的集线器、更强的适配器或更高电压的USB-C PD协议。',
    busLane: 'USB电源',
    loadLane: '设备负载',
    cableLane: '压降',
    boardEyebrow: '实时USB电源路径',
    sourceSocket: '电源插座',
    deviceSocket: '硬件负载',
    energyFlow: '能量流',
    reservedLabel: '预留后可用',
  },
};
