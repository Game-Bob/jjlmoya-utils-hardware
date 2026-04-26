import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestRatonUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-polling-rate-test';
const title = '在线鼠标回报率测试';
const description =
  '检查鼠标的真实 Hz。使用我们的专业工具验证您的游戏鼠标是否在 1000Hz 或更高频率下工作。';

const faqData = [
  {
    question: '什么是鼠标回报率 (Polling Rate)？',
    answer:
      '它是鼠标向电脑报告其位置的频率，以 Hz 为单位衡量。1000Hz 的回报率意味着鼠标每 1 毫秒发送一次数据，从而提供更平滑的移动。',
  },
  {
    question: '为什么我的测试不能持续达到 1000Hz？',
    answer:
      '浏览器只有在鼠标移动时才能测量回报率。如果您移动缓慢或 CPU 非常繁忙，测量值可能会波动。请快速转圈移动鼠标以获得真实的最高峰值。',
  },
  {
    question: '回报率是否越高越好？',
    answer:
      '对于游戏（1000Hz 或更高）来说，通常是的，因为它可以减少延迟。然而，极高的速率（4000Hz 或 8000Hz）会消耗大量 CPU 资源，并非所有游戏都针对这些速率进行了优化。',
  },
  {
    question: '显示器刷新率如何影响鼠标？',
    answer:
      '如果您使用 144Hz 或 240Hz 显示器，较低的回报率（125Hz）会使指针看起来有顿挫感。对于高刷新率显示器，至少使用 500Hz 或 1000Hz 是至关重要的。',
  },
];

const howToData = [
  {
    name: '准备测试区域',
    text: '将光标置于工具的采集区域内。',
  },
  {
    name: '快速移动鼠标',
    text: '进行快速、大范围的圆周运动。该工具将计算硬件发送的每个 mousemove 事件之间的时间间隔。',
  },
  {
    name: '观察稳定性图表',
    text: '检查 Hz 曲线是否平稳或是否存在突然下降，这可能表明无线鼠标受到干扰或 CPU 存在问题。',
  },
  {
    name: '分析响应时间',
    text: '检查以毫秒为单位的平均延迟（Delay）。一只好的游戏鼠标平均延迟应保持在 1ms 左右。',
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

export const content: ToolLocaleContent<TestRatonUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '鼠标回报率权威指南', level: 2 },
    {
      type: 'paragraph',
      html: '当您在鼠标垫上物理移动鼠标时，这种模拟运动必须转换为电脑理解的数字信号。<strong>回报率 (Polling Rate)</strong> 是鼠标向电脑“报告”其位置的频率。它以赫兹 (Hz) 为单位。',
    },
    { type: 'title', text: '回报率等级及其用途', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>125 Hz</strong> -鼠标每 8 毫秒报告一次。适用于办公，但在 144Hz 显示器上会感到卡顿。 <strong>1000 Hz</strong> -游戏黄金标准：每 1 毫秒报告一次。平滑移动，无感知延迟。 <strong>8000 Hz</strong> -尖端技术（Razer, Logitech）。每 0.125 毫秒报告一次，但需要强劲的 CPU。',
    },
    { type: 'title', text: '为什么我的 Hz 值会波动？', level: 3 },
    {
      type: 'paragraph',
      html: '完全正常。大多数现代鼠标都有动态回报率以节省电量。如果您移动鼠标缓慢，它发送的报告就会减少，因为新数据较少。只有快速、持续的移动才能使传感器达到其真实的最高峰值。',
    },
    { type: 'title', text: '回报率 vs DPI：核心区别', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>DPI (Dots Per Inch)</strong> 是灵敏度：即鼠标每移动一英寸，光标移动多少像素。 <strong>Hz (回报率)</strong> 是更新频率：即该移动报告的平滑度和及时性。这两个参数是相互独立且互补的。',
    },
  ],
  ui: {
    badge: '鼠标测试',
    title: '回报率检测器',
    description: '快速圆周移动鼠标以测量 Hz。',
    labelAvg: '平均值',
    labelPeak: '峰值',
    placeholder: '在此移动鼠标',
  },
};
