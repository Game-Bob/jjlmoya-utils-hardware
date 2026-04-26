import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProbadorVibracionMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-vibration-tester';
const title = '在线手柄振动测试';
const description =
  '在浏览器中测试游戏手柄的触感马达和 Dual-Rumble 振动。支持 Xbox、DualShock、DualSense 和通用控制器。';

const faqData = [
  {
    question: '在线测试手柄需要准备什么？',
    answer:
      '只需通过 USB 线将手柄连接到电脑或移动设备，或通过蓝牙进行配对。连接后，按任意键即可被检测到。',
  },
  {
    question: '是否适用于所有手柄型号？',
    answer:
      '如果您的设备和操作系统支持，大多数知名品牌（如 PlayStation 或 Xbox）的现代手柄都是兼容的。',
  },
  {
    question: '我的手柄右侧振动比左侧弱，这正常吗？',
    answer:
      '是的，完全正常。手柄通常采用非对称设计，其中一侧负责强力、深层的振动，另一侧负责快速、细微的振动。',
  },
  {
    question: '运行这些测试会消耗大量电池吗？',
    answer:
      '振动是无线手柄中最耗能的功能之一。运行持续、长时间的测试会比平时更快地耗尽电池。',
  },
];

const howToData = [
  {
    name: '连接并开启手柄',
    text: '通过 USB 线或蓝牙将手柄连接到您的 PC、Mac 或移动设备。',
  },
  {
    name: '按下手柄上的按键',
    text: '浏览器要求您至少按下一个按键，以便检测到手柄并开始网页通信。',
  },
  {
    name: '调整振动马达',
    text: '独立配置强力马达（低频）和精细马达（高频）的功率。',
  },
  {
    name: '执行模式',
    text: '点击其中一个预设，或手动配置参数并发送信号来感触每个组件。',
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

export const content: ToolLocaleContent<ProbadorVibracionMandoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '如何审计您的游戏手柄振动', level: 2 },
    {
      type: 'paragraph',
      html: '触觉反馈是游戏硬件中最具沉浸感的元素之一。当马达出现故障时，最初的症状通常是异常的嗡嗡声或非对称振动。及早诊断可防止重大故障。',
    },
    { type: 'title', text: '为什么要运行振动测试？', level: 3 },
    {
      type: 'paragraph',
      html: '在购买二手手柄、更新驱动程序或发生跌落后，测试触感马达有助于区分真实的硬件故障与软件问题。兼容 Xbox、PlayStation 4、PlayStation 5 (DualSense)、Nintendo Switch Pro 和通用 USB 手柄。',
    },
    { type: 'title', text: 'Dual-Rumble 与线性执行器架构', level: 3 },
    {
      type: 'paragraph',
      html: '经典手柄 (Xbox, DualShock) 使用两个非对称微型马达：左侧产生深沉、轰鸣的振动；右侧产生快速、尖锐的嗡嗡声。像 DualSense 这样先进的设备使用线性执行器来模拟纹理和阻力。',
    },
    { type: 'title', text: '基于症状的诊断指南', level: 3 },
    {
      type: 'paragraph',
      html: '以 100% 功率独立激活每个马达。如果听起来都一样，手柄可能是只有一个马达的仿制品。如果其中一个没有响应，请在拆开外壳前检查连接。测试细分强度：高质量马达是逐渐响应的，而不是像开关一样。',
    },
  ],
  ui: {
    badge: '振动测试',
    title: '手柄振动测试器',
    description: '直接控制手柄的 Dual-Rumble 马达。',
    deviceDisconnected: '手柄已断开连接',
    deviceDisconnectedSub: '按下手柄上的按键开始',
    deviceFallback: '手柄已连接',
    deviceConnectedSub: '连接稳定。准备测试。',
    noSupportWarning: "浏览器中未检测到 Dual-Rumble 支持。正在使用基础通用振动。",
    tabPresets: '热门预设',
    tabCustom: '精准控制',
    presetHeavyTitle: '重锤打击',
    presetHeavyDesc: '重型马达最大功率持续 300ms。模拟强力撞击。',
    presetLightTitle: '蜜蜂嗡嗡',
    presetLightDesc: '仅右侧马达。适合检测异常的嗡嗡声。',
    presetHeartbeatTitle: '心跳',
    presetHeartbeatDesc: '细微的连续脉冲。非常适合检查惯性保持情况。',
    presetSongTitle: '金币节奏',
    presetSongDesc: '模拟连续的金币声。短促且有触感。',
    presetRockYouTitle: 'Rock You!',
    presetRockYouDesc: "Queen 的经典旋律：动、动、打！",
    presetEarthquakeTitle: '最大级别地震！',
    presetEarthquakeDesc: '双马达 100% 爆发力。非常强烈。',
    customStrongLabel: '强力马达（左）',
    customWeakLabel: '精细马达（右）',
    customDurationLabel: '脉冲时长',
    btnSendSignal: '立即发送信号',
  },
};
