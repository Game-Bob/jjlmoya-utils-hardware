import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';

const slug = 'keyboard-test';
const title = '在线键盘测试与按键冲突检测器';
const description = '检测您的键盘是否存在按键冲突（Ghosting）或卡键。实时按键可视化与 N-Key Rollover 计数器。';

const faqData = [
  {
    question: '什么是键盘按键冲突（Ghosting）？',
    answer: '冲突是指当您同时按下多个键时，电脑未能记录其中某些键。这是由于键盘内部电路矩阵的局限性造成的，无法处理某些按键组合。',
  },
  {
    question: '什么是全键无冲（NKRO, N-Key Rollover）？',
    answer: 'NKRO 意味着键盘可以无误地记录您同时按下的所有键。这是一项高端功能，通常见于高端机械键盘和游戏键盘中。',
  },
  {
    question: '为什么我同时按下 3 个键时键盘会失效？',
    answer: '大多数廉价办公键盘只有 2 键或 3 键无冲。这对于打字足够了，但对于高强度游戏或复杂的快捷键操作则不足。',
  },
  {
    question: '如何修复不响应的按键？',
    answer: '如果测试未检测到按键，可能是开关下方有灰尘、电路接触故障或线缆损坏。在放弃之前，尝试用压缩空气清理一下键盘。',
  },
];

const howToData = [
  {
    name: '聚焦可视化界面',
    text: '点击页面上的任意位置，确保浏览器处于聚焦状态以便捕获硬件按键输入。',
  },
  {
    name: '运行响应测试',
    text: '逐个按下键盘上的每个键。如果工作正常，屏幕上对应的键会亮起绿色。',
  },
  {
    name: '检测按键冲突',
    text: '同时按下常用的游戏按键（W, A, S, D, 空格, Shift），看看它们是否锁定或能够全部亮起。',
  },
  {
    name: '验证最大无冲数量',
    text: '尝试用双手按下尽可能多的按键，并观察最大同时按键计数器。',
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

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '技术参考',
  bibliography: [
    {
      name: 'USB Keyboard/Keypad Page - HID Usage Tables',
      url: 'https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf',
    },
    {
      name: 'Mechanical vs Membrane Keyboards - Technical Deep Dive',
      url: 'https://deskthority.net/wiki/Rollover',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '在线键盘测试：检测冲突与全键无冲支持',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '用于键盘诊断的交互式工具。检查您的外设是否受按键冲突、卡键或无冲限制。视觉清晰，支持所有键盘类型。',
    },
    {
      type: 'title',
      text: '什么是按键冲突？',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '冲突发生在当您按下特定的按键组合时，键盘注册了您并未按下的幻象键。这是由于内部电路矩阵的局限性造成的。',
    },
    {
      type: 'title',
      text: '全键无冲与最大无冲',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> 允许同时记录所有按下的键。<strong>6KRO:</strong> 旧的 USB 标准限制。<strong>2-3KRO:</strong> 低价键盘常见，足以满足打字需求。',
    },
    {
      type: 'title',
      text: '机械键盘与薄膜键盘',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '机械键盘拥有带独立二极管的独立开关，从而消除了按键冲突。薄膜键盘共享导电线路，会导致同时按下按键组合时出现故障。',
    },
  ],
  ui: {
    badge: '输入测试',
    title: '键盘测试与冲突检测器',
    description: '验证全键无冲并检测故障按键。',
    simultaneousLabel: '同时按键',
    eventLogLabel: '事件日志',
    resetBtn: '重置',
  },
};
