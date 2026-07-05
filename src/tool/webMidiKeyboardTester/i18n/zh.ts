import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebMidiKeyboardTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'webmidi-keyboard-tester';
const title = 'WebMIDI 键盘测试器';
const description = '在浏览器中使用 Web MIDI 直接测试 USB MIDI 键盘、合成器、打击垫控制器、弯音轮、调制轮、音符力度以及卡音问题。';

const faqData = [
  {
    question: '这个 MIDI 键盘测试器能否在不安装软件的情况下读取我的 USB 键盘？',
    answer: '可以，在支持 Web MIDI 的浏览器（如 Chrome 和 Edge）中即可使用。浏览器请求权限后，该工具会监听来自所选 MIDI 输入的音符、力度、弯音和调制消息。',
  },
  {
    question: '这个网站会上传我的 MIDI 音符或演奏数据吗？',
    answer: '不会。MIDI 事件在当前浏览器标签页中处理。音符、力度值、控制器消息、设备名称和日志不会被本网站上传或存储。',
  },
  {
    question: '为什么我的 MIDI 键盘已显示但没有按键亮起？',
    answer: '设备可能被识别为控制界面，浏览器可能选择了错误的输入端口，键盘可能使用了其他模式，或者线缆/集线器只传输电源而未传输 MIDI 数据。',
  },
  {
    question: '我可以测试弯音轮和调制轮吗？',
    answer: '可以。测试器将弯音显示为居中的带符号值，将调制显示为 MIDI CC1。当设备发送标准 MIDI 消息时，移动这些控件应会立即更新相应仪表。',
  },
  {
    question: '会显示哪些 MIDI 消息？',
    answer: '实时界面会高亮 Note On 和 Note Off 消息、记录力度、检测弯音并跟踪调制轮 CC1。其他与测试控件相关的控制器消息可能会显示在事件日志中。',
  },
];

const howToData = [
  {
    name: '连接 MIDI 硬件',
    text: '在打开权限提示之前，将键盘、合成器、打击垫控制器或 USB MIDI 接口连接到计算机。在排查间歇性设备问题时，请避免使用无电源集线器。',
  },
  {
    name: '授予浏览器 MIDI 访问权限',
    text: '按下 Connect MIDI Input 并批准浏览器权限请求。Web MIDI 需要权限授权，请通过 HTTPS 或 localhost 使用 Chrome 或 Edge。',
  },
  {
    name: '在音域范围内弹奏按键',
    text: '按下低音、中音和高音音符。屏幕上的键盘会围绕收到的音符进行扩展，并根据力度点亮每个按键。',
  },
  {
    name: '检查轮子和表情控制器',
    text: '移动弯音轮、调制轮和演奏控制器。弯音应返回中心位置，调制应从 0 到 127 范围移动。',
  },
  {
    name: '查看事件日志',
    text: '使用事件日志来发现缺失的 Note Off 消息、意外的通道、偏低的力度值，或发送与预期不符的 MIDI 消息的控件。',
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
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<WebMidiKeyboardTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '用于真实 USB 硬件的在线 MIDI 键盘测试器', level: 2 },
    {
      type: 'paragraph',
      html: '一个可靠的<strong>在线 MIDI 键盘测试器</strong>应该能快速回答一个问题：实体乐器是否正在发送 DAW、采样器、合成器或灯光系统所期望的消息？此 WebMIDI 测试器监听浏览器 MIDI 输入，并实时显示 Note On、Note Off、力度、弯音和调制轮数据。它专为 USB MIDI 键盘、DIN 转 USB 接口、合成器、打击垫控制器、舞台电钢琴、MIDI 吉他、鼓触发器以及家庭工作室或现场演出中使用的紧凑型控制器而设计。',
    },
    {
      type: 'message',
      title: '私密的本地 MIDI 诊断',
      html: '测试完全在客户端运行。网站不会上传音符编号、力度曲线、控制器动作、设备名称或事件日志。浏览器仅在您批准权限提示后才暴露 MIDI 接口，数值仅保留在当前标签页中。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0-127', label: 'MIDI 力度范围' },
        { value: '128', label: '标准音符编号' },
        { value: '14-bit', label: '弯音分辨率' },
        { value: 'CC1', label: '调制轮控制' },
      ],
    },
    {
      type: 'table',
      headers: ['信号', '测试器显示内容', '正常表现'],
      rows: [
        ['Note On', '按键名称、音符编号、通道和力度。', '每个物理按键在按下时亮起一次，力度值大于零。'],
        ['Note Off', '日志中的释放事件及按键亮灯重置。', '每个按下的键在松开时清除；没有音符保持视觉上的卡住状态。'],
        ['力度', '实时仪表加滚动曲线。', '轻柔弹奏产生较低值，用力弹奏达到较高值，无随机跳变。'],
        ['弯音', '从负到正的居中带符号仪表。', '轮子平滑扫动，松开后返回接近零的位置。'],
        ['调制', '0 到 127 的 CC1 仪表。', '轮子或触摸条在整个范围内可预测地移动。'],
      ],
    },
    { type: 'title', text: '如何在没有 DAW 的情况下测试 MIDI 键盘', level: 2 },
    {
      type: 'paragraph',
      html: '搜索<em>MIDI 键盘测试</em>通常意味着用户尚不清楚故障出在控制器、线缆、操作系统还是音乐软件。DAW 增加了许多额外变量：轨道待录状态、输入过滤、MIDI 通道路由、虚拟乐器、监听、模板和驱动偏好设置。浏览器测试器消除了大部分这些环节。如果 WebMIDI 权限提示能识别设备，且键盘在屏幕上点亮音符，说明物理 MIDI 路径是通的。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '在更改 DAW 设置之前使用此工具',
      html: '首先确认控制器正在发送原始 MIDI 数据，然后再排查音乐应用程序。如果测试器收到了音符但 DAW 没有收到，请检查 MIDI 输入启用状态、所选轨道输入、通道过滤、控制界面脚本和乐器监听设置。',
    },
    {
      type: 'list',
      items: [
        '尽可能将键盘直接连接到计算机，尤其是在总线供电不足的情况下。',
        '在 Chrome 或 Edge 中打开测试器，因为 Web MIDI 支持因浏览器和平台而异。',
        '按 Connect MIDI Input 并从权限提示中选择音乐设备或 MIDI 接口。',
        '在键盘上弹奏半音阶音符以发现死键、分割区域或八度移调的意外情况。',
        '先慢速再快速地移动弯音轮和调制轮，以检测传感器噪声或回中不良的情况。',
        '在比较线缆、USB 端口、键盘预设或控制器模式时，在测试之间清除日志。',
      ],
    },
    {
      type: 'tip',
      title: '快速线缆检查',
      html: '如果设备已通电但没有出现 MIDI 输入，请尝试更换 USB 线缆。许多廉价 USB 线缆仅用于充电而不能传输数据，这会让控制器看起来正常，但 MIDI 消息却无法到达计算机。',
    },
    { type: 'title', text: '读取力度曲线与动态响应', level: 2 },
    {
      type: 'paragraph',
      html: '力度本身并不等同于音量；它是随音符一起发送的演奏值，范围通常为 1 到 127。钢琴插件可能将力度映射到音量、采样层、亮度、琴槌噪音、起音时间或同时映射到以上所有参数。当控制器力度扫描不佳时，演奏者可能会感觉轻柔音符消失、中等力度音符过响，或强力音符无法触发富有表现力的顶层采样。滚动力度曲线有助于揭示硬件是否产生可用的数值分布。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '健康的键盘',
          description: '轻、中、重力度敲击产生明显不同的力度分层，相似演奏力度下数值可重复。',
          highlight: true,
        },
        {
          title: '压缩响应',
          description: '大多数音符集中在狭窄范围（如 70-95），使钢琴和鼓乐器听起来平淡或难以控制。',
        },
        {
          title: '不稳定响应',
          description: '相邻音符或重复敲击时数值不可预测地跳动，提示触点脏污、传感器故障、扫描不良或固件不稳定。',
        },
      ],
    },
    {
      type: 'table',
      headers: ['观察到的力度模式', '可能的原因', '下一步测试'],
      rows: [
        ['始终为 127', '启用了固定力度模式，或控制器配置为风琴/合成器触发方式。', '检查键盘全局设置、打击垫模式或控制器编辑器。'],
        ['始终很低', '力度曲线过软、传感器校准错误或键盘有故障。', '切换力度曲线并跨八度对比黑键和白键。'],
        ['某个键差异显著', '局部触点、橡胶碗、光学传感器或琴键机构可能脏污或损坏。', '用不同力度重复弹奏该键并与相邻音符对比。'],
        ['使用集线器后数值下降', '供电或数据稳定性可能不足。', '使用直接 USB 端口和已知可用的数据线重新测试。'],
      ],
    },
    {
      type: 'card',
      title: 'Note Off 为何重要',
      html: '卡音通常是由于 Note Off 消息缺失或延迟造成的。部分乐器发送力度为 0 的 Note On 而非单独的 Note Off 命令；两者都是有效的 MIDI 行为。此测试器将力度为零的 Note On 视为音符释放，因此真正卡住的按键会保持可见，直到收到正确的释放消息。',
    },
    { type: 'title', text: '测试弯音、调制和演奏控制器', level: 2 },
    {
      type: 'paragraph',
      html: '弯音是比普通 7 位控制器数据更高分辨率的 MIDI 消息。它将两个数据字节组合成一个以 8192 为中心的 14 位范围。这种额外的分辨率很重要，因为音高移动应当平滑，尤其是在弯曲主音合成器、贝斯或管弦乐器时。测试器将输入的弯音转换为居中仪表，便于查看轮子是否到达两端极限并返回中立位置。',
    },
    {
      type: 'paragraph',
      html: '调制轮通常是 MIDI 连续控制器 1，通常写为 CC1。许多合成器音色将其用于颤音、滤波器移动、波表位置、震音或管弦乐动态。如果移动轮子时 CC1 仪表没有更新，则控制器可能分配到了不同的 CC、使用了厂商特定模式，或通过重新映射演奏控制器的软件进行了路由。',
    },
    {
      type: 'proscons',
      title: '浏览器 MIDI 测试 与 DAW 监听对比',
      items: [
        { pro: '无需项目设置，基于权限快速确认硬件。', con: '不会模拟所有 DAW 路由、脚本或乐器映射。' },
        { pro: '清晰显示音符、力度、弯音和 CC1 调制。', con: '高级触后、NRPN、MPE、SysEx 和自定义控制映射可能需要专业工具。' },
        { pro: '适合技术支持、购买二手设备和检查线缆。', con: '浏览器支持取决于当前平台 Web MIDI 的可用性。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '弯音轮不归零',
      html: '如果释放后弯音仪表停留在正值或负值，则实体轮子、弹簧、电位器、霍尔传感器、校准或固件死区可能需要检查。在判定传感器故障之前，请在其他端口和预设下测试相同的控制器。',
    },
    { type: 'title', text: '此测试器可以揭示的常见 MIDI 键盘故障', level: 2 },
    {
      type: 'glossary',
      items: [
        { term: '死键', definition: '按下时不产生 Note On 消息的物理按键。' },
        { term: '卡音', definition: '收到了 Note On 但未收到对应的释放消息，导致乐器中声音持续响起的音符。' },
        { term: '力度尖峰', definition: '相似敲击力度下突然出现远高于或低于预期的数值。' },
        { term: 'MIDI 通道', definition: '用于在 MIDI 流中分离声部、区域或设备的 16 个逻辑通道之一。' },
        { term: '控制变更', definition: '由旋钮、踏板、轮子、推子和开关使用的 MIDI 消息系列。' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '设备已检测到但无消息',
      html: '如果浏览器列出了 MIDI 输入但弹奏按键没有产生日志条目，请检查所选端口是否为控制界面输入而非键盘音符输入。某些接口会暴露名称相似的多个端口。',
    },
    {
      type: 'table',
      headers: ['症状', '可能原因', '实际操作'],
      rows: [
        ['没有权限提示', '浏览器不支持、来源不安全或浏览器 MIDI 权限被阻止。', '通过 HTTPS 使用 Chrome/Edge 并检查网站权限。'],
        ['设备未显示', '线缆、集线器、驱动、类兼容性或电源问题。', '尝试更换 USB 数据线、端口或有源集线器。'],
        ['仅部分八度工作', '分割/层叠模式、移调设置、硬件矩阵故障或本地控制模式。', '重置预设并从低音到高音进行半音阶测试。'],
        ['音高名称错误', '控制器已移调，或从带有八度偏移的区域发送。', '检查全局移调、区域八度和 DAW 模板设置。'],
        ['调制轮无反应', '轮子分配到了其他控制器编号或被预设禁用。', '加载默认预设或控制器编辑器，重新映射到 CC1。'],
      ],
    },
    {
      type: 'summary',
      title: '最佳诊断顺序',
      items: [
        '确认浏览器能识别 MIDI 输入。',
        '弹奏音符并验证按下/释放行为是否匹配。',
        '重复轻、中、重力度敲击，检查力度分布。',
        '将弯音和调制控制器移至其完整行程范围。',
        '然后才调整 DAW 路由、虚拟乐器设置或控制器模板。',
      ],
    },
    { type: 'title', text: '隐私、浏览器支持与限制', level: 2 },
    {
      type: 'paragraph',
      html: 'Web MIDI 特意设计了权限门槛。页面无法在后台静默读取已连接的音乐设备，除非浏览器暴露访问流程。权限提示的具体形式和持久性取决于浏览器、操作系统和用户设置。对于大多数音乐人而言，实际操作很简单：点击连接按钮，选择 MIDI 输入，运行测试，完成后关闭标签页。',
    },
    {
      type: 'list',
      items: [
        'MIDI 事件数据不会发送到任何外部服务器。',
        '测试器不需要 SysEx 访问权限，因此权限范围更窄。',
        '浏览器显示的设备名称可能识别硬件型号，分享屏幕截图时请谨慎。',
        'Chrome 和 Edge 通常提供最佳的 Web MIDI 支持；Safari 和 Firefox 的支持可能受限或缺失，具体取决于平台。',
        '固件更新、深度控制器编辑、MPE 分析、SysEx 转储或厂商特定诊断可能仍需使用原生工具。',
      ],
    },
    {
      type: 'card',
      title: '此工具足够胜任的情况',
      html: '购买二手控制器、检查工作室线缆、验证 USB MIDI 接口、测试修复后的键盘，或在打开 DAW 之前证明键盘正在发送消息，WebMIDI 键盘测试器通常是最快的首选步骤。',
    },
  ],
  ui: {
    connectButton: '连接 MIDI 输入',
    refreshButton: '刷新输入',
    clearButton: '清除日志',
    unsupportedTitle: 'Web MIDI 不可用',
    unsupportedBody: '请使用基于 Chromium 的浏览器（如 Chrome 或 Edge），并通过 HTTPS 或 localhost 打开页面。',
    secureContext: 'Web MIDI 需要安全的 HTTPS 页面或 localhost，浏览器才能暴露 MIDI 输入。',
    statusIdle: '准备请求 MIDI 访问',
    statusPermission: '等待浏览器 MIDI 权限',
    statusReady: 'MIDI 访问已授权',
    statusNoInputs: '未检测到 MIDI 输入',
    statusConnected: '已检测到 MIDI 输入',
    statusDisconnected: 'MIDI 设备已断开',
    statusError: 'MIDI 访问失败',
    detectedLabel: '已检测到设备',
    noDevice: '未选择 MIDI 设备',
    inputLabel: '输入',
    inputIdle: '无',
    channelLabel: '通道',
    notesLabel: '音符',
    velocityLabel: '力度',
    pitchLabel: '弯音',
    modulationLabel: '调制',
    lastEventLabel: '最近事件',
    octaveRangeLabel: '可见范围',
    velocityCurveTitle: '力度曲线',
    activeNotesTitle: '活动音符',
    eventLogTitle: 'MIDI 事件日志',
    eventSeparator: '/',
    initialRange: 'C3-B5',
    emptyLog: '弹奏按键或移动轮子以查看传入的 MIDI 消息。',
    noteOn: '音符开',
    noteOff: '音符关',
    controlChange: '控制变更',
    pitchBend: '弯音',
    allChannels: '全部通道',
  },
};
