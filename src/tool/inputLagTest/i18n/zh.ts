import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'test-input-lag';



const title = '输入延迟与系统延迟在线测试';
const description = '基于高精度时间戳与帧缓冲同步的硬件输入延迟（Input Lag）在线测量工具。';

const faqData = [
  {
    question: '什么是输入延迟（Input Lag）？',
    answer: '输入延迟是指从用户执行物理操作（如点击鼠标或按键）到屏幕产生对应视觉画面更新的时间间隔。',
  },
];

const howToData = [
  {
    name: '选择测试模式',
    text: '选择即时响应、键盘延迟或视觉反应测试模式。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

const uiData: InputLagTestUI = {
  title,
  description,
  badge: '系统延迟',
  modeInstant: '即时响应',
  modeKey: '键盘延迟',
  modeVisual: '视觉反应测试',
  targetClickPrompt: '在此区域内点击以测量输入延迟',
  targetKeyPrompt: '按下任意按键以测量键盘延迟',
  targetWaitPrompt: '等待绿色背景...',
  targetNowPrompt: '立即点击！',
  labelAvgLatency: '平均延迟',
  labelMinLatency: '最小延迟',
  labelMaxLatency: '最大延迟',
  labelJitter: '抖动 (标准差)',
  labelFps: '当前 FPS',
  labelFrameTime: '帧时间',
  labelSamples: '采样数',
  labelGrade: '延迟等级',
  gradeUltraFast: '极快 (<10ms)',
  gradeFast: '快速 (10-20ms)',
  gradeModerate: '中等 (20-35ms)',
  gradeHigh: '较高 (>35ms)',
  btnReset: '重置测量',
  btnCopyReport: '复制测试报告',
  reportCopied: '报告已复制！',
  historyTitle: '近期测量记录',
  pipelineTitle: '硬件管线延迟分解',
  distributionTitle: '频率分布直方图',
  sampleCol: '采样',
  typeCol: '输入类型',
  latencyCol: '实测延迟',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: '输入延迟与系统延迟在线测量工具',
    },
    {
      type: 'paragraph',
      html: '实时测试与评估电竞外设、键盘及显示器的输入延迟与渲染响应速度。',
    },
  ],
};
