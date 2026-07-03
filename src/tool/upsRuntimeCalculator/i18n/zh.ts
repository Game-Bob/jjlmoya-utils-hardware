import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ups-runtime-calculator';
const title = 'UPS运行时间计算器';
const description = '估算UPS电池运行时间、总受保护负载、可用瓦时数，以及针对PC、显示器、路由器、NAS设备和家庭实验室硬件的推荐VA规格。';

const faqData = [
  {
    question: '如何计算UPS运行时间？',
    answer: '将UPS所连接每台设备的瓦数相加，用UPS的瓦时数乘以逆变器效率，减去希望保留的余量，然后将可用瓦时数除以负载瓦数。所得结果（小时）乘以60即可得到分钟数。',
  },
  {
    question: '为什么实际UPS运行时间与估算值不同？',
    answer: '运行时间会因电池老化、温度、放电速率、逆变器效率、负载峰值以及制造商设定的截止电压而变化。将结果视为规划估算值，并通过一次受控的关机测试进行验证。',
  },
  {
    question: '应该按瓦特还是VA来选择UPS规格？',
    answer: '两者都要检查。瓦特表示UPS可提供的实际功率，而VA包含了功率因数。UPS的瓦特值必须超过负载，并且要为连接的设备留有足够的VA余量。',
  },
  {
    question: 'UPS应该保留多少余量？',
    answer: '一个实用的目标是将正常负载保持在UPS瓦特额定值的70-80%以下。这为启动电流尖峰、电池老化和未来设备留出了空间。',
  },
  {
    question: '可以在UPS上连接打印机或加热器吗？',
    answer: '除非UPS明确标注支持此类设备，否则应避免连接激光打印机、加热器和其他高浪涌负载。它们可能会使逆变器过载并大幅缩短运行时间。',
  },
];

const howToData = [
  {
    name: '列出受保护设备',
    text: '输入在停电期间必须保持在线运行的设备，例如计算机、显示器、路由器、调制解调器、NAS和网络交换机。',
  },
  {
    name: '输入实际的瓦数值',
    text: '尽可能使用墙壁插座实测的功耗。如果只有电源额定值，请将其降低为预期的工作负载，而不是使用标签上的最大值。',
  },
  {
    name: '设置电池容量和假设参数',
    text: '输入UPS的电池瓦时数、逆变器效率、功率因数以及希望为安全关机保留的余量百分比。',
  },
  {
    name: '读取运行时间和VA推荐值',
    text: '将估算的分钟数和推荐的VA值作为采购或配置指南，然后通过一次安全的断电演练验证设置。',
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
  inLanguage: 'zh',
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
      text: 'UPS运行时间计算器：估算电池备用时长',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'UPS运行时间估算可以回答两个实际问题：停电期间硬件能在线运行多久，以及UPS是否足够大以支持连接的负载。本计算器综合了设备瓦数、电池瓦时、逆变器效率、功率因数和关机余量，使得计算结果比简单的电池容量除法更贴近实际规划需求。',
    },
    {
      type: 'title',
      text: '运行时间公式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '估算的运行时间（小时）= <strong>可用电池瓦时 ÷ 总负载功率（W）</strong>。可用瓦时并非电池上标注的容量数值，需要根据逆变器损耗和希望保留的安全关机余量进行调整。例如，一块432Wh的电池，效率为86%，保留20%余量，则可提供约297Wh的可用能量。',
    },
    {
      type: 'table',
      headers: ['输入参数', '为何重要', '实用指导'],
      rows: [
        ['负载功率（瓦）', '直接决定运行时间', '尽可能使用墙上插座功率计实测，尤其是游戏PC和NAS系统。'],
        ['电池瓦时（Wh）', '决定能量储备总量', '使用制造商电池数据或额定电压乘以安时数。'],
        ['效率', '反映逆变器损耗', '对于许多消费级UPS设备，80-90%是一个合理的规划范围。'],
        ['功率因数', '将瓦特转换为VA', '如已知UPS规格则使用其数值；入门和中级设备通常为0.6-0.8。'],
        ['余量', '保留关机安全边际', '10-25%对于PC或服务器的受控关机是合理的。'],
      ],
    },
    {
      type: 'title',
      text: '您需要多少运行时间？',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10分钟：足以度过短暂的电压波动或安全关闭台式机。',
        '10-20分钟：适用于路由器、调制解调器、NAS设备和小型家庭实验室节点。',
        '30分钟以上：更适合网络持续性、远程工作和停电频繁的地区。',
        '数小时：通常需要更大的电池系统，而不仅仅是台式UPS。',
      ],
    },
    {
      type: 'title',
      text: '选择UPS时瓦特与VA的对比',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'UPS产品名称通常以VA宣传，但瓦特值是实际设备更严格的限制。一台900VA的UPS可能仅支持540W，而另一台900VA型号可能支持600W甚至更高。请同时检查两个额定值，并将正常运行保持在最大值以下，以避免过载报警、电池寿命缩短以及停电时的切换失败。',
    },
    {
      type: 'title',
      text: '会扭曲运行时间估算的负载',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '游戏PC可能在几秒内从低待机功耗跳变到高GPU功耗。',
        '显示器会因亮度、HDR模式和面板尺寸不同而大幅变化。',
        'NAS设备在磁盘启动和重建期间会消耗额外电力。',
        '激光打印机、加热器、水泵和压缩机除非明确支持，否则不适合作为UPS负载。',
        '老旧电池的实际运行时间可能远低于其原始容量所暗示的数值。',
      ],
    },
    {
      type: 'title',
      text: '安全验证检查清单',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '测试前将UPS完全充满。',
        '保存打开的工作，避免在关键写入或固件更新期间进行测试。',
        '断开墙壁电源而非设备电源，观察UPS负载百分比和电池电量估算。',
        '确认您的PC、NAS或服务器在电池耗尽之前接收到关机信号。',
        '每隔几个月重复测试，因为铅酸UPS电池老化速度较快。',
      ],
    },
  ],
  ui: {
    loadTitle: '受保护负载',
    addDevice: '添加设备',
    deviceName: '设备',
    watts: '瓦特',
    remove: '移除设备',
    batteryWh: '电池容量 (Wh)',
    efficiency: '逆变器效率',
    powerFactor: '功率因数',
    reserve: '关机余量',
    totalLoad: '总负载',
    runtime: '预计运行时间',
    recommendedUps: '推荐规格',
    usableEnergy: '可用能量',
    minutes: '分钟',
    hours: '小时',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'UPS假设参数',
    presetDesktop: '台式电脑',
    presetMonitor: '27英寸显示器',
    presetRouter: '路由器和调制解调器',
    presetNas: '双盘位NAS',
    percentUnit: '%',
    bandLight: '充裕的备用时长，推荐UPS规格约',
    bandBalanced: '均衡的备用时长，推荐UPS规格约',
    bandHeavy: '备用时长较短；考虑使用更大容量电池或降低负载至约',
    summaryPrefix: '此配置具有',
  },
};
