import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stereo-audio-test';
const title = '立体声音频测试';
const description = '使用浏览器生成的测试音检查左右扬声器声道、立体声平衡、接线方向和耳机声像定位。';

const faqData = [
  {
    question: '如何在线测试左右扬声器？',
    answer: '从低音量开始，按左，然后按右。左声道音调应仅从左扬声器或左耳罩发出，右声道音调应仅从右侧发出。使用中置确认两侧均衡播放。',
  },
  {
    question: '为什么在左或右测试期间两个扬声器都播放？',
    answer: '某些设备、操作系统、蓝牙扬声器、单声道模式、辅助功能设置或音频增强功能会将立体声降混为单声道。检查系统平衡、单声道音频设置、电缆接线和应用程序特定的音频效果。',
  },
  {
    question: '这能诊断扬声器电缆接反吗？',
    answer: '能。如果左按钮从右扬声器播放，右按钮从左扬声器播放，则输出路径在计算机、电缆、放大器、扬声器或耳机的某处反转。',
  },
  {
    question: '正弦波音调对扬声器和耳机安全吗？',
    answer: '中等音量的短正弦波音调通常是安全的。避免高音量、长时间使用或非常高的频率，尤其是在使用耳机、小型笔记本电脑扬声器或未知放大器时。',
  },
  {
    question: '浏览器会影响立体声测试吗？',
    answer: '该工具使用 Web Audio API 的 StereoPannerNode。在现代浏览器中可靠，但最终输出仍取决于操作系统路由、驱动程序、蓝牙编解码器、外部 DAC 和扬声器接线。',
  },
];

const howToData = [
  {
    name: '设置较低的起始音量',
    text: '在播放任何测试音之前，降低系统音量并使用工具音量滑块。',
  },
  {
    name: '测试每一侧',
    text: '按左和右。每个音调应清晰隔离到匹配的扬声器或耳机侧。',
  },
  {
    name: '检查中置平衡',
    text: '按中置。音调应在两个扬声器之间居中，不强烈偏向一侧。',
  },
  {
    name: '使用扫描',
    text: '运行扫描以听到立体声场中的移动，发现断音、接线反转或成像不均。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<StereoAudioTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '左右扬声器在线测试',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '使用此在线立体声音频测试来检查您的左右扬声器、耳机、耳塞、回音壁、DAC、放大器或监听音箱是否正确路由。该工具通过左声道、右声道、双声道或移动的立体声扫描播放浏览器生成的测试音，让您无需安装音频软件即可快速检测声道反转、单声道输出、扬声器弱音、平衡问题和接线错误。',
    },
    {
      type: 'paragraph',
      html: '正确的立体声设置保持方向感：左测试音应仅从左扬声器或左耳罩发出，右测试音应仅从右侧发出，中置音应在两侧之间均衡平衡。如果声音出现在错误的一侧、两侧同时出现或一侧明显更响，问题通常出在输出设置、单声道辅助功能模式、电缆接线、蓝牙路由、扬声器摆放或音频增强软件上。',
    },
    {
      type: 'table',
      headers: ['按钮', '您应听到的声音', '用于诊断'],
      rows: [
        ['左', '仅从左扬声器、左耳机驱动器或左耳塞发出音调。', '电缆接反、扬声器摆错位置、单声道输出或声道重映射。'],
        ['右', '仅从右扬声器、右耳机驱动器或右耳塞发出音调。', '输出交换、适配器接线错误或改变声道顺序的驱动效果。'],
        ['中置', '音调出现在中间，因为两个声道均衡播放。', '系统平衡偏移、一个扬声器弱音、耳塞网罩堵塞或放大器增益不均。'],
        ['扫描', '音调在立体声图像中从一侧平滑移动到另一侧。', '断音、蓝牙链接不稳定、相位问题、虚拟环绕声伪像或成像不均。'],
      ],
    },
    {
      type: 'title',
      text: '此测试发现的最常见立体声问题',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '左右声道反转：左按钮在右侧播放，或右按钮在左侧播放。',
        '立体声塌陷为单声道：左、右和中置从两个扬声器听起来几乎相同。',
        '一侧较安静：即使系统平衡滑块看起来居中，中置音频也偏向一个扬声器。',
        '耳机接线或佩戴错误：游戏脚步声、音乐声像平移和视频通话在空间上感觉混乱。',
        '蓝牙或USB音频被处理：回音壁、底座、耳机和电视模式可能会降混或虚拟化信号。',
        '扬声器摆放误导：扬声器太靠近墙壁、被家具遮挡或距离更远可能导致中置图像偏移。',
      ],
    },
    {
      type: 'title',
      text: '如何修复左右音频反转',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '对于有线扬声器，交换放大器、音频接口、DAC或计算机输出端的左右插头。',
        '对于无源扬声器，确认左扬声器连接到放大器的左端子，右扬声器连接到右端子。',
        '对于耳机，检查佩戴方向是否正确，并在不使用适配器、延长线或分线器的情况下测试。',
        '在Windows或macOS上，检查输出平衡并在辅助功能或声音设置中禁用单声道音频。',
        '对于蓝牙扬声器和回音壁，测试期间禁用虚拟环绕声、派对模式、双音频、房间校正或电视声音模式。',
        '对于音频接口、DAW和混音器，检查通道路由、声像控制、监听混音设置以及制造商提供的任何软件混音器。',
      ],
    },
    {
      type: 'title',
      text: '如何解读中置扬声器测试',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '中置音调在普通双声道设置中并不是一个独立的物理中置扬声器。它是均匀发送到左右声道的相同信号。在耳机中应在头部中央感觉居中；在扬声器上应在两者之间形成幻象中心。如果偏向左侧或右侧，请检查系统平衡、扬声器距离、扬声器角度、音量旋钮、放大器微调、耳塞贴合度、驱动器格栅中的灰尘以及扬声器是否部分被遮挡或损坏。',
    },
    {
      type: 'table',
      headers: ['发生了什么', '可能的原因', '下一步'],
      rows: [
        ['左从两侧播放', '单声道音频、降混或空间音频处理。', '禁用单声道输出和虚拟环绕声，然后重新测试。'],
        ['左从右侧播放', '播放链中某处声道被交换。', '交换电缆或更改驱动程序、混音器或放大器中的通道路由。'],
        ['中置在一侧更响', '平衡、摆放、驱动器损坏、耳朵贴合度或扬声器格栅堵塞。', '与其他耳机或扬声器对比较，并检查物理摆放。'],
        ['扫描跳跃或消失', '蓝牙不稳定、音频增强伪像或电缆/连接器故障。', '用有线输出或其他电缆测试，以隔离薄弱环节。'],
      ],
    },
    {
      type: 'title',
      text: '耳机和耳塞左右测试',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '对于耳机和耳塞，左右声道测试在游戏、音频编辑、观看电影或加入通话前特别有用。正常戴上耳机，从低音量开始，按左和右，确认每个音调到达正确的耳朵。如果两侧听起来相同，您的设备可能正在使用单声道音频。如果一侧沉闷或较安静，清洁耳塞网罩，重新安装耳塞头，检查电缆，并与其他输出设备比较。',
    },
    {
      type: 'title',
      text: '安全音频测试提示',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '从低系统音量开始，尤其是在耳机上。',
        '仅在需要持续声音进行电缆追踪、摆放或平衡调整时使用循环直到停止。',
        '在小型扬声器上保持测试音简短；连续正弦波可能很快变得不适。',
        '避免在小型笔记本电脑扬声器和未知放大器上使用最大增益。',
        '在确认音量安全之前，不要将耳机戴在耳朵上。',
        '更换电缆或设置后，按左、右、中置、扫描的顺序重复测试。',
        '对于录音室或家庭影院校准，将此快速测试与声压计或接收器校准程序结合使用。',
      ],
    },
    {
      type: 'title',
      text: '快速诊断',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果左右反转，首先检查物理接线，因为这是台式扬声器、放大器和音频接口最快的修复方法。如果两个按钮都从两侧播放，寻找单声道输出、空间音频、虚拟环绕声或故意将立体声降混的设备。如果中置偏离中心但左右路由正确，问题通常是平衡、摆放、耳机贴合度、堵塞的格栅或扬声器输出不均。',
    },
  ],
  ui: {
    left: '左',
    center: '中置',
    right: '右',
    sweep: '扫描',
    stop: '停止',
    volume: '音量',
    duration: '时长',
    infiniteMode: '循环至停止',
    infiniteModeHint: '保持任意声道持续播放以进行连续测试。',
    secondsUnit: '秒',
    hertzUnit: '赫兹',
    tone: '音调',
    balance: '平衡',
    activeIdle: '就绪',
    activeLeft: '正在播放左声道',
    activeCenter: '正在播放中置音调',
    activeRight: '正在播放右声道',
    activeSweep: '正在扫描立体声场',
    safety: '从低音量开始。测试音通过耳机、放大器和小型笔记本电脑扬声器可能会很响。',
    leftSpeaker: '左扬声器',
    rightSpeaker: '右扬声器',
    centerLine: '立体声场',
  },
};
