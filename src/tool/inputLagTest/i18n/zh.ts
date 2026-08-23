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
      text: '输入延迟与系统延迟在线测量工具与原理',
    },
    {
      type: 'paragraph',
      html: '这款基于浏览器的输入延迟测试工具可帮您实时测试与评估电竞外设、游戏鼠标、机械键盘及显示器的输入延迟（Input Lag）与渲染响应速度。输入延迟是指用户按下按键或点击鼠标后，画面产生视觉反馈所经历的总时间。在竞技电竞和高帧率游戏中，保持极低的系统延迟对于提高射击瞄准精度与实时操作响应至关重要。',
    },
    { type: 'stats', items: [
      { value: '< 10 ms', label: '电竞目标', trend: '竞技环境参考' },
      { value: '1000 Hz', label: '常见 USB 轮询', trend: '输入间隔 1 ms' },
      { value: '240 Hz', label: '高刷新率显示器', trend: '帧间隔 4.16 ms' },
      { value: '16.6 ms', label: '60 Hz 间隔', trend: '每帧基础值' },
    ], columns: 4 },
    { type: 'card', title: '浏览器如何高精度测量输入延迟', html: '测试利用 <code>performance.now()</code> 提供的微秒级硬件时间戳，将 <code>pointerdown</code> 和 <code>keydown</code> 输入事件与 <code>requestAnimationFrame</code> 屏幕渲染刷新周期进行同步对比，从而精确计算出输入动作被检测到与页面绘制更新之间的本地时间差。' },
    { type: 'title', text: '输入延迟信号在硬件与系统管线中的传输过程' },
    { type: 'paragraph', html: '总延迟由整个信号链路累积而成：从外设物理开关按下的那一刻起，经过 USB 接口扫描、操作系统事件队列处理、游戏渲染引擎计算、GPU 显卡帧缓冲，一直到显示器面板像素做出响应。拆解各个环节有助于排查延迟瓶颈到底是来自于外设硬件、操作系统设置还是显卡渲染配置。' },
    { type: 'table', headers: ['组件', '常见延迟范围', '主要瓶颈', '改进与优化方向'], rows: [
      ['外设开关', '0.2 到 5.0 ms', '机械触点抖动消抖', '使用光轴或缩短消抖时间'],
      ['USB 轮询率', '0.125 到 8.0 ms', '轮询频率较低', '提高 USB 轮询率至 1000Hz+'],
      ['系统事件队列', '0.5 到 3.0 ms', '后台进程与桌面合成器', '启用 Windows 游戏模式'],
      ['图形渲染引擎', '4.0 到 20.0 ms', 'CPU 限制的渲染帧', '使用 NVIDIA Reflex 或 AMD Anti-Lag'],
      ['GPU 帧缓冲区', '8.0 到 33.0 ms', '垂直同步与多重缓冲', '关闭 VSync，开启 G-Sync/FreeSync'],
      ['显示器图像处理', '1.0 到 15.0 ms', '图像缩放与色彩处理', '开启显示器或电视的游戏模式'],
    ] },
    { type: 'tip', title: '如何减少 GPU 渲染队列的积压等待延迟', html: '当 GPU 显卡负载达到 99% 时，显卡驱动程序会提前在缓冲区中积压多个帧，这会导致高达 30ms 至 50ms 的严重输入延迟。将游戏帧率上限稍微限制在显卡最大能力下方，并启用 Reflex 低延迟技术，可以显著降低帧缓冲延迟。' },
    { type: 'title', text: '游戏鼠标、机械键盘与触摸屏的延迟比较' },
    { type: 'paragraph', html: '鼠标、键盘和移动设备触摸屏在硬件架构、电子电路设计以及通信协议上存在巨大差异，因此展现出截然不同的延迟特性。了解这些差异有助于玩家和专业人士选择最适合的硬件组合。' },
    { type: 'comparative', columns: 3, items: [
      { title: '游戏鼠标', description: '高频率 2.4GHz 无线或有线连接。', highlight: '0.5 到 2 ms 延迟', points: ['1000Hz 至 8000Hz 轮询率', '无消抖延迟的光学微动', '极低运动延迟的传感器'] },
      { title: '机械键盘', description: '带按键消抖控制的矩阵扫描。', highlight: '1 到 10 ms 延迟', points: ['Rapid Trigger 磁轴', '高频矩阵扫描', '可自定义触发行程'] },
      { title: '移动触摸屏', description: '覆盖在面板上的电容式触控层。', highlight: '15 到 45 ms 延迟', points: ['120Hz-480Hz 触控采样率', '系统合成器延迟', '防误触过滤算法'] },
    ] },
    { type: 'title', text: '屏幕刷新率对显示延迟的影响' },
    { type: 'paragraph', html: '显示器的刷新率直接决定了画面更新的最小物理间隔。高刷新率显示器能大幅缩短帧间隔时间，从物理上降低输入延迟。' },
    { type: 'list', items: ['60 Hz 显示器：每帧 16.67 ms（平均显示延迟 ~8.33 ms）', '120 Hz 显示器：每帧 8.33 ms（平均显示延迟 ~4.16 ms）', '144 Hz 显示器：每帧 6.94 ms（平均显示延迟 ~3.47 ms）', '240 Hz 显示器：每帧 4.17 ms（平均显示延迟 ~2.08 ms）', '360 Hz 显示器：每帧 2.78 ms（平均显示延迟 ~1.39 ms）', '540 Hz 显示器：每帧 1.85 ms（平均显示延迟 ~0.92 ms）'] },
    { type: 'glossary', items: [
      { term: '输入延迟 (Input Lag)', definition: '从用户执行物理操作到屏幕显示对应结果之间的完整时间间隔。' },
      { term: '抖动 (Jitter)', definition: '多次测量结果的标准差，反映系统响应精度的稳定程度。' },
      { term: '垂直同步 (VSync)', definition: '防止画面撕裂的显示技术，但会增加显著的输入延迟。' },
      { term: '可变刷新率 (VRR)', definition: 'G-Sync 或 FreeSync 技术，可动态将显示器刷新率与显卡输出帧率相匹配。' },
      { term: '像素响应时间 (GtG)', definition: '显示器像素点从一种灰度切换到另一种灰度所需要的时间。' },
    ] },
    { type: 'title', text: '浏览器在线延迟测试的优势与限制' },
    { type: 'paragraph', html: '无需示波器或高速相机等昂贵专业设备，即可在网页端快速测试与比较不同配置。但用户也需要了解浏览器环境的固有局限。' },
    { type: 'proscons', title: '网页端延迟测试评估', items: [
      { pro: '无需安装任何软件或购买专门硬件设备', con: '受浏览器事件循环与操作系统窗口管理器影响' },
      { pro: '使用高精度微秒级计时器 (performance.now)', con: '无法直接光电测量面板像素的实际响应' },
      { pro: '可在不同外设与浏览器之间进行快速对比', con: '出于安全考虑浏览器可能对计时精度进行微幅抹平' },
      { pro: '可观察系统在连续操作下的渲染稳定性', con: '后台标签页可能受到系统资源限制' },
    ] },
    { type: 'title', text: '诊断与排查较高的输入延迟问题' },
    { type: 'paragraph', html: '如果测试结果显示平均延迟过高（>30 ms）或抖动较大，请在窗口保持前台活动时重新测试，并检查显卡驱动与浏览器设置。' },
    { type: 'diagnostic', variant: 'warning', title: '高延迟诊断提示', html: '当台式电脑的平均输入延迟超过 35 ms 时，请检查显卡驱动中是否误开启了垂直同步。如果浏览器关闭了硬件加速，DOM 渲染将会推给 CPU 处理，导致严重的渲染延迟。' },
    { type: 'title', text: '一步步降低系统输入延迟的优化指南' },
    { type: 'paragraph', html: '通过以下针对硬件、操作系统、显卡驱动和浏览器的优化步骤，全面提升系统响应速度。' },
    { type: 'summary', title: '系统延迟优化检查清单', items: ['在驱动软件中将鼠标 USB 轮询率设置为 1000Hz 或更高', '在 Windows 设置中开启硬件加速 GPU 计划 (HAGS)', '开启显示器或电视的游戏模式以旁路图像缩放处理', '在显卡控制面板中关闭全局垂直同步，开启 G-Sync / FreeSync', '在支持的游戏中开启 NVIDIA Reflex 或 AMD Anti-Lag', '确保浏览器设置中已开启硬件加速功能', '每次调整后进行至少 15 次测试以验证效果'] },
    { type: 'message', title: '获得准确测试结果的最佳实践', html: '测试时请关闭无关后台应用，将浏览器窗口最大化或进入全屏模式，并在单次测试中至少采集 15-20 个样本，以获得具有统计学意义的可靠平均值。' },
  ],
};
