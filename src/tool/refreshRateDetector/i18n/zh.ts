import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { RefreshRateDetectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-refresh-rate-detector';
const title = '显示器刷新率在线测试仪';
const description = '使用 requestAnimationFrame 毫秒级精准检测显示器的刷新率。测试帧稳定性，并与行业标准进行对比。';

const faqData = [
  {
    question: '什么是刷新率 (Hz)？',
    answer: '刷新率是指显示器每秒更新图像的次数。60Hz 的显示器每秒更新 60 次，而 144Hz 则更新 144 次。刷新率越高，画面动态效果越流畅。',
  },
  {
    question: '这个检测器有多准？',
    answer: '本工具利用与显示器刷新周期同步的 requestAnimationFrame API。准确度取决于系统负载。稳定模式通过延长测量时间来提供更高的精度。',
  },
  {
    question: '稳定模式和快速模式有什么区别？',
    answer: '快速模式测量时间较短（约 3 秒），可快速反馈。稳定模式时间较长（约 10 秒），旨在滤除系统噪点，提供更可靠的结果。',
  },
  {
    question: '为什么检测到的 Hz 与显示器规格不符？',
    answer: '可能的原因包括：电缆连接松动、驱动程序过时或操作系统缩放设置干扰。请尝试重新插拔显示电缆或更新显卡驱动程序。',
  },
  {
    question: '现代显示器支持哪些刷新率？',
    answer: '常见的标准包括 60Hz（基础）、75Hz、120Hz、144Hz（游戏级）、240Hz（竞技级）和 360Hz（专业电竞）。',
  },
];

const howToData = [
  {
    name: '加载工具',
    text: '只需打开此页面，检测器便会立即开始测量。',
  },
  {
    name: '等待稳定',
    text: '选择稳定或快速模式。请勿移动窗口，等待测量完成。',
  },
  {
    name: '检查仪表盘',
    text: '显示器的刷新率将显示在平滑的仪表盘上，并附带基准统计数据（最小/最大/平均）。',
  },
  {
    name: '对比标准',
    text: '工具会显示您的显示器符合哪项标准（60, 75, 120, 144, 240, 360Hz）。',
  },
  {
    name: '可选：跳帧测试',
    text: '观察屏幕上的动画方块，通过视觉确认画面的流畅度。',
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

export const content: ToolLocaleContent<RefreshRateDetectorUI> = {
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
      text: '显示器刷新率测试仪：在线检测屏幕 Hz 频率',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '毫秒级精准检测显示器的刷新率（60Hz, 144Hz, 240Hz 等）。测试帧稳定性，验证显示器是否在额定规格下正常运行。',
    },
    {
      type: 'title',
      text: '为什么显示器刷新率很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '刷新率决定了屏幕上动作的流畅程度。游戏玩家能从 144Hz+ 的显示器中获益，而普通用户通常觉得 60Hz 已足够。此工具可帮助确认您的显示器是否真正达到了宣传的刷新率。',
    },
    {
      type: 'title',
      text: '如何检测您的刷新率',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '加载此检测器——测量立即开始',
        '选择快速（3秒）或稳定（10秒）测量模式',
        '从仪表盘读取显示器的 Hz 数值',
        '对照行业标准（60, 75, 120, 144, 240, 360Hz）',
      ],
    },
    {
      type: 'title',
      text: '常见的刷新率标准',
      level: 3,
    },
    {
      type: 'table',
      headers: ['标准', '应用场景', '典型用户'],
      rows: [
        ['60Hz', '普通办公', '办公、网页浏览'],
        ['75Hz', '轻度游戏', '休闲玩家'],
        ['120Hz', '多媒体', '主机游戏、流媒体'],
        ['144Hz', '竞技游戏', 'FPS、快节奏游戏'],
        ['240Hz+', '专业电竞', '职业选手、主播'],
      ],
    },
    {
      type: 'title',
      text: '故障排除：显示刷新率低于预期',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '检查 HDMI/DisplayPort 线缆连接——接触不良会降低带宽',
        '更新显卡驱动程序（NVIDIA, AMD, Intel）',
        '检查系统的显示设置，确保已启用高刷新率',
        '尝试更换显示器上的线缆或接口',
        '重启电脑并重新测试',
      ],
    },
    {
      type: 'title',
      text: '检测背后的技术',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '本工具使用浏览器的 requestAnimationFrame API，它直接与显示器的刷新周期同步。通过测量动画帧之间的时间，我们能以高精度计算出准确的刷新率，无需特殊硬件支持。',
    },
  ],
  ui: {
    badge: '显示测试',
    title: '刷新率检测仪',
    description: '立即检测您的显示器刷新率',
    modeStable: '稳定（10秒，更精准）',
    modeFast: '快速（3秒，更迅速）',
    measurementStatus: '正在测量...',
    currentHz: '当前',
    averageHz: '平均',
    maxHz: '最大',
    minHz: '最小',
    standardDetected: '检测到标准',
    frameSkippingTest: '跳帧测试',
    startMeasurement: '开始测量',
    resetMeasurement: '重置',
    copyResult: '复制结果',
    copiedFeedback: '已复制到剪贴板！',
    optimalConfiguration: '[OK] 最佳配置',
    suboptimalConfiguration: '[警告] 低于最佳水平',
    unstableRefreshRate: '[警告] 刷新率不稳定',
    measurementNotStarted: '准备就绪',
    switchMonitorHint: '将窗口拖动到另一个显示器以进行测试',
    incompatibleBrowserMsg: '您的浏览器不支持 requestAnimationFrame',
  },
};
