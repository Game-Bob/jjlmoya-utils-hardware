import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-delay-test';
const title = '音频延迟测试';
const description = '通过浏览器脉冲测试，评估扬声器、耳机、蓝牙设备及视频播放中的感官音频延迟并进行对齐校准。';

const faq = [
  {
    question: '这项音频延迟测试具体测量什么？',
    answer: '可选的麦克风模式可估算浏览器预定脉冲与麦克风接收到声音之间的时间差。手动模式则帮助您通过听觉和视觉进行校准。',
  },
  {
    question: '在没有麦克风的情况下可以测试蓝牙延迟吗？',
    answer: '可以。启动脉冲序列，选择蓝牙模式，拖动对齐滑块直到闪光与咔哒声感觉完全同步即可。',
  },
  {
    question: '为什么麦克风模式需要权限？',
    answer: '浏览器需要访问麦克风以接收从扬声器发出的测试音频。所有音频处理均在浏览器本地完成。',
  },
  {
    question: '为什么麦克风测量结果会有所波动？',
    answer: '房间反射、麦克风信号处理、自动增益控制以及操作系统缓冲区都会影响测量数值。',
  },
  {
    question: '我应该选择哪种测试模式？',
    answer: '房间播放选择扬声器，直连输出选择有线耳机，无线设备选择蓝牙，播放器确认选择视频同步。',
  },
  {
    question: '麦克风录音会被上传到服务器吗？',
    answer: '不会。麦克风音频流仅在本地内存中进行实时分析，不会上传任何录音文件。',
  },
];

const howTo = [
  {
    name: '选择播放路径',
    text: '选择扬声器、有线耳机、蓝牙或视频同步。',
  },
  {
    name: '使用手动脉冲开始',
    text: '点击开始测试，聆听咔哒声并观察青色视觉脉冲，调节滑块直到两者对齐。',
  },
  {
    name: '必要时启用麦克风测量',
    text: '点击启用麦克风，授予权限并将麦克风放置在日常聆听位置。',
  },
  {
    name: '将结果作为参考估算值',
    text: '参考中位数延迟与置信度来评估和比较不同的设备配置。',
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
    { type: 'title', text: '用于蓝牙与视频同步的音频延迟测试工具', level: 2 },
    {
      type: 'paragraph',
      html: '这款基于浏览器的音频延迟测试工具有助于检测当前设备上画面与声音之间的相对时间差。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '无需麦克风权限即可直接测试',
      badge: '本地隐私安全',
      html: '<p>手动测试模式完全无需麦克风。观察视觉标记并调节滑块，直到声音与画面同步。</p>',
    },
    {
      type: 'title',
      text: '如何测试蓝牙音频延迟',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        '选择蓝牙模式并在开始前调至舒适的音量。',
        '在您日常使用的浏览器中运行脉冲测试序列。',
        '将视觉闪光直接与可闻咔哒声进行对比。',
        '拖动对齐滑块直到两者感觉完全同步。',
        '更换编解码器或设备后重新进行测试。',
      ],
    },
    {
      type: 'table',
      headers: ['模式', '适用场景', '主要局限性'],
      rows: [
        ['扬声器', '房间音响与电视扬声器', '房间距离和声学反射会影响接收路径。'],
        ['有线耳机', '直连模拟音频输出', '麦克风可能难以较好捕捉封闭式耳机声音。'],
        ['蓝牙', '无线耳机与蓝牙音箱', '编解码器缓冲区随设备和应用而异。'],
        ['视频同步', '显示器与播放器对齐', '视频播放器可能会增加额外的渲染延迟。'],
      ],
    },
    {
      type: 'title',
      text: '可选的麦克风测量功能',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在获取麦克风权限后，工具将记录发声时间与测得的声音峰值之间的时间差，并计算中位数。',
    },
    {
      type: 'tip',
      title: '将麦克风放置在实际聆听位置',
      html: '测试扬声器时，请将麦克风放在您平时就座的聆听位置，并保持房间安静。',
    },
    {
      type: 'title',
      text: '为什么浏览器音频延迟测试结果会变化',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '音频延迟受整个链路影响：浏览器 AudioContext 时钟、操作系统缓冲区、蓝牙编解码器及扬声器单元。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '测试结果说明',
      badge: '仅供参考估算',
      html: '<p>测试数值用于比较不同配置或排查明显音画不同步问题。无法替代专业实验室测试仪器。</p>',
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
    micEnabled: '麦克风已就绪',
    calibrationTitle: '对齐校准',
    calibrationHint: '拖动滑块直到闪光与咔哒声重合',
    calibrationEarly: '音频超前',
    calibrationLate: '画面超前',
    calibrationCenter: '已对齐',
    visualLane: '视觉',
    audioLane: '音频',
    statusReady: '就绪',
    statusRunning: '脉冲测试进行中',
    statusWaiting: '等待脉冲',
    resultTitle: '当前读数',
    latencyLabel: '测得延迟',
    alignmentLabel: '对齐校准值',
    confidenceLabel: '置信度',
    samplesLabel: '样本数',
    notMeasured: '未测量',
    manualConfidence: '仅手动',
    lowConfidence: '置信度低',
    mediumConfidence: '置信度中',
    highConfidence: '置信度高',
    noMic: '当前浏览器无法使用麦克风输入',
    permissionDenied: '未授予麦克风权限',
    limitationTitle: '请将结果作为环境参考值',
    limitationText: '房间反射与系统缓冲会改变测量值。不会上传任何音频。',
    copyReport: '复制报告',
    copied: '已复制',
    reset: '重置',
    safety: '请从低音量开始测试。如果声音失真请立即停止。',
    pulse: '同步',
  },
};
