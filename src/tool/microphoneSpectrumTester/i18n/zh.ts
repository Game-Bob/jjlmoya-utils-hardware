import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'microphone-test-spectrum-analyzer';
const title = '麦克风测试与实时频谱分析仪';
const description = '在浏览器中本地测试麦克风输入、实时音量电平、失真破音（Clipping）、环境噪音以及频率响应。';

const faq = [
  {
    question: '此麦克风测试会录制或上传我的声音吗？',
    answer: '不会。实时麦克风音频流仅连接到浏览器内部的分析器。本工具不会创建音频文件，不会将分析器连接到音频输出，也不会将音频样本上传到任何远程服务器。',
  },
  {
    question: '电平表中的 dBFS 代表什么？',
    answer: 'dBFS 表示相对于数字满度（Full Scale）的分贝值。0 dBFS 是数字峰值的最大极限，因此正常的测量读数均为负数。这与以 dB SPL 为单位校准的声压级测量不同。',
  },
  {
    question: '如何判断麦克风是否出现破音（Clipping）？',
    answer: '请以您预期的最大说话音量或演奏音量测试。如果峰值频繁达到 0 dBFS 附近的红色破音警告状态，请降低麦克风增益、增大与麦克风的距离，或禁用操作系统中过于激进的音频输入处理。',
  },
  {
    question: '环境噪音测量显示的是什么？',
    answer: '3 秒检测会计算您保持安静时的平均数字 RMS 电平。这有助于比较在相同房间与浏览器设置下的背景噪音，不过自动增益控制（AGC）和降噪处理可能会改变测量结果。',
  },
  {
    question: '为什么说话时主频率会不断变化？',
    answer: '人类语音包含变化的基频、谐波、辅音和噪音。分析仪会实时显示 60 Hz 至 12 kHz 之间最强的频段，因此数值变动是正常现象而非故障。',
  },
  {
    question: '此频谱分析仪能否认证麦克风的性能与质量？',
    answer: '不能。这是浏览器中用于检测输入、电平、破音、噪音及可见频率活动的实用检查工具。认证频率响应或声压级需要专业的校准硬件、受控信号以及标准测试环境。',
  },
];

const howTo = [
  {
    name: '授予麦克风访问权限',
    text: '点击"启动麦克风"并允许浏览器的麦克风访问权限。只有在此明确操作后，音频处理才会开始。',
  },
  {
    name: '以实际工作距离说话',
    text: '使用正常的说话音量或乐器音量，观察实时 dBFS 读数、峰值轨迹以及频谱图的动态变化。',
  },
  {
    name: '测试最大预期音量时刻',
    text: '提高说话音量或演奏最响亮的段落。在保持清晰健康信号的同时，尽量避免反复触发红色的破音警告。',
  },
  {
    name: '测量并捕获环境噪音（房间底噪）',
    text: '保持安静并点击"测量 3 秒环境音"。在更改房间、设备、增益或处理设置后，对比保存的环境底噪。',
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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '如何在浏览器中测试麦克风性能与音质',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '无需安装任何软件，此在线麦克风测试工具即可帮您回答故障排查的首要疑问：选定的输入是否产生信号？电平是否可用？大声说话时是否会破音？环境底噪如何？有哪些频率处于活跃状态？点击"启动麦克风"，从实际工作位置说话，即可实时读取观察数据。分析仪直接在当前页面运行，不会生成任何音频文件。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '本地隐私安全分析处理',
      badge: '不进行录音与上传',
      html: '<p>原始音频输入属于敏感数据，因此浏览器会请求麦克风访问权限。本工具仅将该音频流连接至本地分析器。绝不会将音频样本发送至远程服务器，当您点击"停止麦克风"时，所有媒体轨道都会立即停止。</p>',
    },
    {
      type: 'title',
      text: '如何解读与评估 dBFS 麦克风电平',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '电平表显示的大字实时数值是 RMS 估计值，代表当前时间窗口内的能量。峰值显示该窗口内的最大绝对采样。两者均使用数字满度分贝（dBFS），其中 0 为数字电平上限，越安静的声音数值越负。由于说话风格、麦克风类型、前级增益和目标应用均有影响，健康的指示徽章是本测试的实用指南，而非通用录音标准。',
    },
    {
      type: 'table',
      headers: ['测量读数', '读数表达的状态含义', '建议检查与应对操作'],
      rows: [
        ['无声或低于 -60 dBFS', '选定的输入设备未产生有效的测试信号', '请检查设备连接、物理静音开关、浏览器权限及系统输入电平设置'],
        ['偏低（低于 -35 dBFS）', '信号音量偏小，未经额外增益可能难以使用', '请在观察峰值的同时靠近麦克风或调大输入增益'],
        ['健康适中电平', '当前信号具备良好的音量电平与直观的动态余量', '请再尝试用预期的最大音量说话或演奏以重复测试'],
        ['偏高（高于 -6 dBFS 峰值）', '剩余的数字动态余量非常有限', '在大声说话前请调小增益或增大与麦克风的距离'],
        ['破音失真（接近 0 dBFS）', '一个或多个采样已达到数字电平上限', '请调小增益并重新测试音量最大的部分'],
      ],
    },
    {
      type: 'title',
      text: '如何使用实时麦克风频谱分析图',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '弧形频谱图将 60 Hz 至 12 kHz 的分析器频段映射在对数弧线上，发光光带则显示当前波形。使用此图表可以确认低音、中音和高音频段的活动是否成功到达浏览器。主频率移动对于语音和音乐来说是正常现象。该图表最适合在相同麦克风、增益、房间、浏览器和说话距离下进行对比。',
    },
    {
      type: 'tip',
      title: '每次只更改一个变量进行对比',
      html: '先测量并捕获环境底噪，更改一项设置后，再从相同位置重新测量。操作系统的降噪处理和自动增益控制（AGC）可能会在改变音质的同时让麦克风显得更安静，因此建议在阅读本视觉测试的同时也在实际应用中进行试听。',
    },
    {
      type: 'title',
      text: '本工具非专业校准声级计的原因说明',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '浏览器采样的音频数据描述的是经过麦克风、声卡接口、驱动程序及自动处理后的数字信号。它们无法反映麦克风振膜处的实际声压级。因此，本工具报告的是数字 dBFS 而非声压级 dB SPL，并且不会声称具有认证的频率响应、本底噪声规格或环境噪声等级。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '官方合规性测量请使用校准仪器',
      badge: '仅供实用诊断参考',
      html: '<p>请使用本工具排查通话、直播、录音和设备选择中的问题。当测量结果需要支持产品规格、听力安全标准、法规或专业声学分析时，请务必使用校准过的测量麦克风、声学校准器、受控信号及标准测试流程。</p>',
    },
  ],
  ui: {
    journeyPermission: '1. 允许使用麦克风',
    journeySpeak: '2. 自然开口说话',
    journeyInspect: '3. 查看电平与频谱',
    startMicrophone: '启动麦克风',
    stopMicrophone: '停止麦克风',
    deviceLabel: '输入设备',
    defaultDevice: '默认麦克风',
    statusIdle: '等待权限授权',
    statusRequesting: '正在请求麦克风权限',
    statusLive: '本地监听中',
    statusUnsupported: '当前浏览器不支持麦克风访问',
    statusDenied: '麦克风权限已被拒绝',
    statusError: '无法启动麦克风',
    levelLabel: '实时电平',
    peakLabel: '峰值',
    frequencyLabel: '主频率',
    noiseFloorLabel: '环境底噪',
    captureNoise: '测量 3 秒环境音',
    capturingNoise: '正在测量环境底噪，请保持安静',
    noiseCaptured: '环境底噪测量完成',
    roomToneHint: '保持当前增益与距离，并保持安静 3 秒。',
    unmeasured: '未测量',
    noSignalLevel: '无信号',
    noSignalPeak: '无信号',
    noSignalFrequency: '无信号',
    silentSignal: '无有效信号',
    quietSignal: '输入偏弱',
    healthySignal: '健康余量',
    hotSignal: '信号偏高',
    clippingSignal: '检测到破音',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: '实时麦克风对数频谱与波形图',
    limitationTitle: '浏览器非专业校准声级计',
    limitationText: '读数为设备处理后的数字 dBFS，非声压级 dB SPL。音频仅在本地处理，绝不上传。',
  },
};
