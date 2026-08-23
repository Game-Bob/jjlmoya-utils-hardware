import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-delay-test';
const title = '音频延迟测试与蓝牙音画同步检测';
const description = '在浏览器中通过本地脉冲测试，检测扬声器、耳机、蓝牙设备及视频播放的感知音频延迟。';

const faq = [
  {
    question: '这个音频延迟测试具体测量什么？',
    answer: '可选的麦克风模式可估算浏览器计划发声的点击音与麦克风接收到该声音之间的时间差。手动模式则帮助您通过耳听目测来校准视觉与听觉的同步。两种模式均非针对您整个设备硬件链条的实验室级测量。',
  },
  {
    question: '我可以在没有麦克风的情况下测试蓝牙延迟吗？',
    answer: '可以。启动脉冲序列，选择蓝牙，然后移动校准滑块，直到视觉闪烁与点击音感觉完全同时发生。结果将保存为同步校准值，而非假装提供绝对硬件延迟。',
  },
  {
    question: '为什么麦克风模式需要访问权限？',
    answer: '浏览器需要麦克风权限来接收经由您的扬声器或房间声学传播后的测试点击音。音频完全在浏览器本地处理，不会被上传到任何服务器。',
  },
  {
    question: '为什么麦克风测量结果可能会有波动？',
    answer: '房间反射、麦克风降噪处理、自动增益控制、操作系统缓冲以及扬声器与麦克风之间的距离都会影响结果。请将该数值视为当前配置下的估计参考值。',
  },
  {
    question: '我应该选择哪种测试模式？',
    answer: '房间播放请选择扬声器，直接输出请选择有线耳机，无线设备请选择蓝牙，检查屏幕与播放器同调时请选择视频同步。',
  },
  {
    question: '测试会将我的麦克风声音上传到服务器吗？',
    answer: '不会。麦克風音频流仅由浏览器本地分析器读取，本测试绝不会上传任何音频录音文件。',
  },
];

const howTo = [
  {
    name: '选择播放路径',
    text: '选择扬声器、有线耳机、蓝牙或视频同步，以便报告准确描述您正在检查的配置。',
  },
  {
    name: '从手动脉冲开始',
    text: '点击开始测试，观察青色视觉脉冲的同时聆听短促的点击音。调整校准滑块直至两者感觉同步。',
  },
  {
    name: '在需要时添加麦克风测量',
    text: '点击启用麦克风，允许访问权限，将麦克风放置在实际听音位置，然后再次运行脉冲序列。',
  },
  {
    name: '将结果视为配置参考值',
    text: '在更改设备、浏览器或距离后，将中位数延迟和置信度仅作为当前配置的参考估计。',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '蓝牙音频延迟与视频音画同步测试工具', level: 2 },
    {
      type: 'paragraph',
      html: '这款基于浏览器的音频延迟测试工具可帮您精确检测当前设备上视觉提示与声音之间的的时间差。它非常适用于蓝牙耳机、无线音箱、有线耳机以及视频音画同步检测。本工具在浏览器本地生成短促标准的点击音，无需您下载任何额外的测试音频文件。只需启动测试，观察显示屏上的闪光脉冲并聆听声音，即可快速完成专业评估。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '无需麦克风权限即可直接开始测试',
      badge: '本地隐私安全处理',
      html: '<p>手动脉冲测试无需麦克风权限即可运行。观察青色视觉标记并聆听点击音，然后移动校准滑块直到感觉两者完全同时发生。这为您提供实用的配置校准参考，而不会虚构绝对硬件延迟。整个过程完全在您的本地浏览器中完成，隐私数据不会离开您的设备。</p>',
    },
    {
      type: 'title',
      text: '如何测试蓝牙音频延迟与音画不同步',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        '在开始测试之前选择蓝牙模式，并调节至舒适的播放音量。',
        '在您平时用于媒体播放的同一浏览器和设备上运行脉冲序列。',
        '直接对比视觉脉冲与点击音，而不是评估一整段复杂的音乐或电影对话。',
        '移动校准滑块直到两个提示音画完全重合，然后记录校准数值。',
        '在更换编解码器、操作系统、浏览器或听音距离后重新进行测试。',
      ],
    },
    {
      type: 'table',
      headers: ['模式', '最适合应用场景', '主要局限性说明'],
      rows: [
        ['扬声器', '房间播放与电视音响', '房间距离和声学反射会影响传播路径。'],
        ['有线耳机', '直接耳机接口输出', '麦克风可能难以接收封闭式耳机的声音。'],
        ['蓝牙', '无线耳机与蓝牙音箱', '编解码器缓冲区大小因设备和应用而异。'],
        ['视频同步', '显示器与播放器对齐', '视频播放器可能会增加额外的帧渲染延迟。'],
      ],
    },
    {
      type: 'title',
      text: '可选的麦克风辅助测量说明',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '启用麦克风权限后，工具将监视本地麦克风分析器，记录从计划发声事件到检测到声学峰值的精确间隔时间。结果采用样本中位数算法，以防止单次房间反射破坏整体估计准确性。置信度标记还会分析多次采样之间的离散程度，确保提供可靠的数据。',
    },
    {
      type: 'tip',
      title: '将麦克风放置在实际听音位置',
      html: '对于扬声器测试，请将麦克風放在您实际坐着听音的位置，并保持房间环境安静。进行视频同步检测时，请保持平时使用的设备摆放方式，以获取最符合日常使用场景的测量数据。',
    },
    {
      type: 'title',
      text: '为什么浏览器音频延迟测试结果会有所不同',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音频延迟产生于整个信号链路：浏览器 AudioContext 时钟、操作系统缓冲区、硬件编码以及扬声器单元。麦克风本身也包含采集和处理延迟。因此本测试描述的是您当前设备、浏览器和环境组合下的实际表现，而非单一部件的理论极限值。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '请将测量结果作为配置参考',
      badge: '仅供估计参考',
      html: '<p>请使用该结果比较不同配置或排查明显的音画不同步问题。它无法替代制造商的规格说明或实验室级专业校准测量系统。</p>',
    },
  ],
  ui: {
    badge: '延迟观测台',
    modeLabel: '播放路径',
    modeSpeakers: '扬声器',
    modeWired: '有线',
    modeBluetooth: '蓝牙',
    modeVideo: '视频同步',
    startTest: '开始测试',
    stopTest: '停止测试',
    enableMic: '启用麦克风',
    micEnabled: '麦克风就绪',
    calibrationTitle: '同步校准',
    calibrationHint: '移动滑块直到闪烁与点击音重合',
    calibrationEarly: '音频超前',
    calibrationLate: '画面超前',
    calibrationCenter: '已对齐',
    visualLane: '画面',
    audioLane: '音频',
    statusReady: '就绪',
    statusRunning: '脉冲序列运行中',
    statusWaiting: '等待脉冲',
    resultTitle: '当前测量',
    latencyLabel: '测得延迟',
    alignmentLabel: '同步校准值',
    confidenceLabel: '置信度',
    samplesLabel: '样本数',
    notMeasured: '未测量',
    manualConfidence: '仅手动校准',
    lowConfidence: '置信度低',
    mediumConfidence: '置信度中',
    highConfidence: '置信度高',
    noMic: '当前浏览器无法使用麦克风输入',
    permissionDenied: '未授予麦克风访问权限',
    limitationTitle: '请将结果视为配置估计',
    limitationText: '房间反射、麦克风处理和缓冲会改变测得的延迟。音频不会被上传。',
    copyReport: '复制报告',
    copied: '已复制',
    reset: '重置',
    safety: '请从低音量开始。如果声音失真请停止测试。',
    pulse: '同步',
  },
};
