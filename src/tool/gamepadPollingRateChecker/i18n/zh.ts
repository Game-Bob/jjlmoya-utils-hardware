import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-polling-rate-checker';
const title = '手柄回报率与 Hz 轮询率在线测试仪';
const description = '在线测量 USB 或蓝牙手柄在浏览器中被检测到的更新频率、报告时间间隔及毫秒级时间戳稳定性。';

const faq = [
  {
    question: '这款手柄轮询率测试仪具体测量什么？',
    answer: '它测量在移动摇杆时，浏览器 Gamepad API 接收到的时间戳更新频率。显示的 Hz 值为浏览器观察到的更新速率，并非 USB 接口的直接物理电气测量值。',
  },
  {
    question: '浏览器能否证明手柄是否真的运行在 1000 Hz？',
    answer: '它可以展示时间戳更新是否高频且稳定地到达页面，但无法证明硬件层面的 1000 Hz USB 超频。浏览器定时器和操作系统调度可能会合并或打包报告。',
  },
  {
    question: '为什么需要保持摇杆连续画圈移动？',
    answer: '连续画圈移动能让摇杆的双轴数值持续变化，从而稳定触发新的输入状态。如果摇杆保持静止，将无法产生足够的独立状态更新。',
  },
  {
    question: '能否对比 USB 有线与蓝牙无线连接的性能？',
    answer: '可以。在同一浏览器中使用相同的测量时长和画圈动作分别测试，即可在相同基准下对比观察频率、平均间隔及抖动（Jitter）。',
  },
];

const howTo = [
  {
    name: '连接并激活手柄',
    text: '通过 USB 线缆或蓝牙连接手柄，按下任意按键使浏览器通过 Gamepad API 识别手柄。',
  },
  {
    name: '选择设备与测试时长',
    text: '在下拉列表中选择目标手柄，首测建议选择 10 秒以获得平衡的数据量。',
  },
  {
    name: '平滑连续旋转摇杆',
    text: '点击开始测试，持续平滑地顺时针或逆时针旋转左摇杆，直至进度环填满。',
  },
  {
    name: '查看观察频率与稳定性',
    text: '对比平均 Hz、毫秒间隔、抖动及置信度，必要时在相同条件下重复测试。',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: '手柄轮询率测试常见问题',
  faq,
  bibliographyTitle: '技术参考资料',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '在线测量手柄在浏览器中的观察更新频率',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '本工具在摇杆移动过程中实时监视 Gamepad API 的高分辨率时间戳。它会过滤异常突变，计算报告之间的平均间隔，并使用 1000 除以毫秒数 转换为观察 Hz。所有计算均在本地浏览器中进行。',
    },
    {
      type: 'table',
      headers: ['测量指标', '该数值代表的含义', '单凭该数值无法证明的事项'],
      rows: [
        ['观察频率 (Hz)', '页面每秒接收并读取到的报告更新次数', 'USB 接口的物理电气轮询率'],
        ['平均间隔 (ms)', '两次时间戳更新之间消耗的平均时间', '从按键按下到屏幕渲染的总输入延迟'],
        ['抖动 (Jitter)', '第 5 与第 95 百分位间隔时间之间的偏差', '手柄硬件本身的必然故障判定'],
        ['数据置信度', '本次测试收集到的有效样本数量与规则度', '工业级专业校准仪器级别的绝对精度'],
      ],
    },
    {
      type: 'title',
      text: '如何开展具有可重复性的手柄 Hz 测试',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '请关闭后台高占用程序，保持当前标签页处于焦点状态，并在每次测试时使用相同的力度与幅度旋转摇杆。对比线缆、蓝牙适配器或操作系统设置时，请确保使用相同的浏览器与测试时长。',
    },
    {
      type: 'tip',
      title: '请始终在相同条件基准下对比',
      html: '更换线缆或 USB 接口后，请至少测试两次。单次瞬时峰值远不如具备低抖动的稳定更新频率有参考价值。',
    },
    {
      type: 'title',
      text: '为什么本测试不代表端到端总输入延迟 (Input Lag)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gamepad API 读取的是经过操作系统与浏览器处理后的手柄状态数据。它不包含线缆电气传输响应或显示器扫描渲染延迟。观察间隔非常适合 Web 端的相对性能对比，但不应作为完整输入延迟。',
    },
  ],
  ui: {
    privacyNote: '100% 本地信号分析',
    stepConnect: '连接手柄并按任意键',
    stepMove: '保持摇杆连续画圈',
    stepRead: '对比频率与时间稳定性',
    deviceLabel: '已检测到的活动手柄',
    devicePlaceholder: '请按下手柄上的任意按键以检测',
    deviceFallback: '已连接手柄',
    durationLabel: '测试时间窗口',
    durationFive: '5 秒',
    durationTen: '10 秒',
    durationTwenty: '20 秒',
    startAction: '开始追踪',
    stopAction: '停止',
    resetAction: '重置',
    orbitInstruction: '在测试过程中请持续平滑地旋转左摇杆',
    traceLabel: '实时时间戳轨迹',
    observedRateLabel: '观察频率',
    intervalLabel: '平均更新间隔',
    jitterLabel: '时间偏差 (Jitter)',
    samplesLabel: '有效样本数',
    confidenceLabel: '测试置信度',
    confidenceLow: '低',
    confidenceMedium: '中',
    confidenceHigh: '高',
    statusWaiting: '正在等待兼容的手柄连接',
    statusReady: '手柄就绪。手指置于摇杆上后点击开始。',
    statusMeasuring: '正在本地记录时间戳更新',
    statusNeedsMovement: '请加大摇杆画圈幅度以收集更多有效数据',
    statusComplete: '测试完成。可在相同条件下重复测试进行对比。',
    statusUnsupported: '当前浏览器不支持 Gamepad API',
    statusDisconnected: '未检测到活动手柄。请连接并按下任意按键。',
    statusStopped: '测试已停止。当前局部结果保持可见。',
    limitHeading: '浏览器测量技术限制',
    limitBody: '测量通过 Gamepad API 可见的更新。不代表 USB 物理超频认证或总输入延迟。',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: '次间隔',
    progressLabel: '测试测量进度',
  },
};
