import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-test';
const title = '在线手柄与控制器检测';
const description = '在线测试您的 Xbox、PlayStation 或 PC 控制器。可视化死区、摇杆漂移和按键响应。';

const faqData = [
  {
    question: '什么是摇杆漂移 (Joystick Drift)？',
    answer: '漂移是指在没有触摸摇杆的情况下，控制器自行注册移动。这是由于内部电位计磨损引起的，导致其向恒定方向发送错误的电信号。',
  },
  {
    question: '我可以通过软件修复漂移吗？',
    answer: '如果漂移较轻，您可以在游戏设置中配置更大的“死区 (Dead Zone)”。这将忽略中心位置的微小摇杆移动。',
  },
  {
    question: '是否兼容 PS5、Xbox 和 Switch 控制器？',
    answer: '是的。我们的工具使用现代浏览器的标准 Gamepad API，可检测几乎任何通过 USB 或蓝牙连接的控制器，包括 DualSense、DualShock 4 和 Xbox 控制器。',
  },
  {
    question: '为什么浏览器检测不到我的控制器？',
    answer: '出于安全原因，浏览器只有在按下第一个按键后才会启用手柄。如果未出现，请按任意键（如 A 或 X）并确保您未处于严格的无痕模式。',
  },
];

const howToData = [
  {
    name: '连接控制器',
    text: '通过 USB 插入手柄或通过蓝牙将其与电脑配对。',
  },
  {
    name: '激活检测',
    text: '移动摇杆或按任意键，以便浏览器识别已连接的设备。',
  },
  {
    name: '测试死区',
    text: '松开摇杆并观察屏幕上的轴数据。如果值不为 0.0000，则说明存在轻微漂移。',
  },
  {
    name: '验证按键和振动',
    text: '按下每个按钮和扳机键。视觉指示器应点亮，如果您的控制器支持，还可以测试振动马达。',
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

export const content: ToolLocaleContent<TestMandoUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: '在线手柄测试：检测摇杆漂移与硬件问题',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '免费测试 Xbox、PlayStation、Switch 等控制器。可视化死区、检测漂移并测试振动功能。',
    },
    {
      type: 'title',
      text: '什么是摇杆漂移',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '漂移是模拟摇杆的一个常见缺陷，即在未接触摇杆时记录到移动。这是由内部电位计磨损造成的。',
    },
    {
      type: 'title',
      text: '控制器兼容性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '兼容 Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro 以及几乎任何现代 USB 或蓝牙手柄。',
    },
  ],
  ui: {
    badge: '输入测试',
    title: '手柄与控制器测试',
    description: '在线检测您的控制器并发现潜在问题。',
    connectionMessage: '请连接您的 USB 或蓝牙设备',
    connectionStatus: '已连接',
    axisLabel: '摇杆轴',
    buttonsLabel: '按键',
    vibrationTitle: '振动测试',
    vibrationDescription: '需要浏览器支持和兼容的手柄。',
    vibrationLow: '低频 (Rumble)',
    vibrationHigh: '高频 (Buzz)',
    eventHistoryTitle: '事件历史',
    eventHistoryClear: '清除',
    eventWaiting: '正在等待事件...',
    gameStartBtn: '开始挑战',
    gameControllerWarning: '连接手柄或使用键盘',
    gameTimer: '计时器',
    gameScore: '分数',
    gameInstruction: '快点按！',
    gameCompleted: '挑战完成',
    gameNewRecord: '新纪录',
    gameRestartBtn: '重试',
    gameFeedback: '你是个按键传奇',
    gameIntroTitlePre: '职业玩家级 ',
    gameIntroHighlight: '反射神经',
    gameIntroTitlePost: '?',
    gameIntroDescPre: '测试手柄延迟和你的反应速度。你只有 ',
    gameIntroDescSeconds: '30 秒',
    gameIntroDescPost: ' 时间来掌控这些按键。',
    gameShareBtn: '分享等级',
    gameLogConnected: '已连接',
    gameLogDisconnected: '已断开',
    gameLogCleared: '日志已清除...',
    gameLogBtnPrefix: '按键',
    gameVibNotSupported: '不支持振动功能。',
    gameVibLow: '低',
    gameVibHigh: '高',
    gameMoveStick: '移动摇杆',
    gamePress: '按下',
    rankLegendaryName: '传奇级 (LEGENDARY)',
    rankLegendaryDesc: '你的手指正以音速移动。',
    rankLegendaryFlavor: '我的手柄在飞！',
    rankProName: '职业级 (PRO GAMER)',
    rankProDesc: '你有钢铁般的反射神经和校准良好的控制器。',
    rankProFlavor: '我的手柄在飞！',
    rankGamerName: '玩家级 (GAMER)',
    rankGamerDesc: '还不错，但要应付竞技比赛仍需更多练习。',
    rankGamerFlavor: '差一点就成功了！',
    rankNoobName: '菜鸟级 (NOOB)',
    rankNoobDesc: '你确定手柄电源打开了吗？',
    rankNoobFlavor: '控制器跟我作对！',
    gameShareText: '你能超过我吗？',
    gameShareScorePrefix: '我的成绩是',
    gameShareScoreSuffix: '次点击',
    gameShareTitle: '在线手柄测试',
  },
};
