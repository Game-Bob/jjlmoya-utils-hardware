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
  { question: '游戏中的良好延迟是多少？', answer: '低于 10 ms 很快。10 到 20 ms 较快，20 到 35 ms 中等，更高的数值会明显感觉到延迟。' },
  { question: '如何降低输入延迟？', answer: '检查显示器刷新率、VSync、VRR 和 USB 轮询，然后每次只改变一个设置并重新测量。' },
  { question: '刷新率会影响输入延迟吗？', answer: '会。60 Hz 每帧需要 16.67 ms，240 Hz 每帧需要 4.17 ms。渲染和面板也会增加延迟。' },
  { question: '为什么要关注 jitter？', answer: '它表示测量值的波动。稍高但稳定的结果，有时比带有明显峰值的低平均值更容易使用。' },
];

const howToData = [
  {
    name: '选择测试模式',
    text: '选择即时响应、键盘延迟或视觉反应测试模式。',
  },
  { name: '执行输入', text: '点击测试区域或按下按键以生成输入事件。' },
  { name: '查看统计数据', text: '完成多次操作后查看平均值、最小值、最大值和 jitter。' },
  { name: '重复并比较', text: '每次调整后都在相同条件下重新采集一组数据。' },
  { name: '理解测试限制', text: '将结果用于比较配置，不要把它当作面板光学延迟的绝对测量。' },
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
    { type: 'stats', items: [
      { value: '< 10 ms', label: '电竞目标', trend: '竞技环境参考' },
      { value: '1000 Hz', label: '常见 USB 轮询', trend: '输入间隔 1 ms' },
      { value: '240 Hz', label: '高刷新率显示器', trend: '帧间隔 4.16 ms' },
      { value: '16.6 ms', label: '60 Hz 间隔', trend: '每帧基础值' },
    ], columns: 4 },
    { type: 'card', title: '浏览器如何测量延迟', html: '测试会将 pointerdown 和 keydown 事件与 requestAnimationFrame 的画面更新进行比较，从而估算输入被检测到和页面重新绘制之间的本地时间差。' },
    { type: 'title', text: '输入延迟信号经过系统的过程' },
    { type: 'paragraph', html: '总延迟会从外设开关一直累积到屏幕上的像素。拆分各个环节可以判断问题来自设备、操作系统、渲染过程还是显示器。' },
    { type: 'table', headers: ['组件', '常见范围', '主要瓶颈', '改进方向'], rows: [
      ['外设开关', '0.2 到 5.0 ms', '机械触点抖动', '缩短消抖时间'],
      ['USB 轮询', '0.125 到 8.0 ms', '频率较低', '在支持时提高频率'],
      ['系统队列', '0.5 到 3.0 ms', '后台任务', '关闭不必要的进程'],
      ['图形引擎', '4.0 到 20.0 ms', 'CPU 限制的帧', '降低渲染负载'],
      ['GPU 队列', '8.0 到 33.0 ms', 'VSync 和多重缓冲', '比较 VSync 与 VRR'],
      ['显示处理', '1.0 到 15.0 ms', '缩放和图像处理', '启用游戏模式'],
    ] },
    { type: 'tip', title: '减少 GPU 渲染队列的等待', html: 'GPU 满载时可能会提前准备多个画面。将帧率限制在最大能力略低的位置，并尝试 Reflex 或 Anti Lag，然后重新测量。' },
    { type: 'title', text: '比较不同输入设备的延迟' },
    { type: 'paragraph', html: '鼠标、键盘和触摸屏会因为连接方式、电子电路和扫描频率不同而产生不同延迟。比较时应使用同一块屏幕和相同设置。' },
    { type: 'comparative', columns: 3, items: [
      { title: '游戏鼠标', description: '高频率有线或无线连接。', highlight: '0.5 到 2 ms', points: ['1000 Hz 或更高轮询', '光学开关', '处理速度较快的传感器'] },
      { title: '机械键盘', description: '带有消抖控制的按键矩阵。', highlight: '1 到 10 ms', points: ['磁性开关', '可配置的矩阵扫描', '可调节触发距离'] },
      { title: '触摸屏', description: '覆盖在面板上的电容式数字化层。', highlight: '15 到 45 ms', points: ['触摸采样频率', '显示控制器处理', '防止误触的过滤算法'] },
    ] },
    { type: 'title', text: '刷新率带来的显示延迟' },
    { type: 'paragraph', html: '刷新率决定两次画面更新之间的最小间隔。60 Hz 的显示器比 240 Hz 更晚显示输入，但渲染和同步方式同样会影响结果。' },
    { type: 'list', items: ['60 Hz 每帧 16.67 ms', '120 Hz 每帧 8.33 ms', '144 Hz 每帧 6.94 ms', '240 Hz 每帧 4.17 ms', '360 Hz 每帧 2.78 ms', '540 Hz 每帧 1.85 ms'] },
    { type: 'glossary', items: [
      { term: 'Input lag', definition: '从物理操作到屏幕显示结果之间的时间。' },
      { term: 'Jitter', definition: '测量值之间的变化，用来判断时间稳定性。' },
      { term: 'VSync', definition: '垂直同步可以减少撕裂，但可能增加等待时间。' },
      { term: 'VRR', definition: '可变刷新率会根据 GPU 输出调整屏幕频率。' },
      { term: '像素响应时间', definition: '像素从一种颜色变化到另一种颜色所需的时间。' },
    ] },
    { type: 'title', text: '浏览器测量的优点和限制' },
    { type: 'paragraph', html: '无需示波器或高速摄像机即可比较设置。但浏览器不能直接看到驱动程序、游戏和面板光学输出中的所有内部延迟。' },
    { type: 'proscons', title: '网页测量评估', items: [
      { pro: '不需要特殊设备', con: '会受到浏览器事件循环影响' },
      { pro: '可以快速比较外设', con: '不能直接测量像素响应' },
      { pro: '使用本地高分辨率计时器', con: '浏览器可能降低计时精度' },
      { pro: '能够观察更新是否稳定', con: '非活动标签页可能被降速' },
    ] },
    { type: 'title', text: '诊断较高的输入延迟' },
    { type: 'paragraph', html: '如果平均值超过 30 ms 或 jitter 较大，请在窗口保持活动时重新测试，并检查 VSync、图形加速、USB 频率和 CPU 后台任务。' },
    { type: 'diagnostic', variant: 'warning', title: '输入延迟诊断提示', html: '桌面电脑的平均值超过 35 ms 时，应检查显示模式和硬件加速。每次只改变一个设置，便于找到原因。' },
    { type: 'title', text: '逐步降低系统延迟' },
    { type: 'paragraph', html: '分别调整外设、显示器和系统。每次改变后都在相同条件下重新采样，以确认改善不是偶然波动。' },
    { type: 'summary', title: '延迟优化检查清单', items: ['选择合适的 USB 轮询频率', '启用显示器游戏模式', '关闭不必要的图像滤镜', '比较 VSync 和 VRR', '保持帧率稳定', '关闭占用较高的后台任务', '每次调整后重新测试'] },
    { type: 'message', title: '比较结果的实用建议', html: '关闭后台应用，保持测试窗口活动，并至少采集 15 个样本。不要只看一次测量，应该同时参考平均值、中位数和 jitter。' },
  ],
};
