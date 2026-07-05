import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'speaker-phase-tester';
const title = '扬声器相位测试器';
const description =
  '在浏览器中播放同相和180度反相的立体声测试信号，检查扬声器极性、接线错误和相位抵消。';

const faqData = [
  {
    question: '如何判断扬声器极性是否正确？',
    answer:
      '从相同的听音位置先播放正常信号，再播放反相信号。如果扬声器接线正确，反相模式听起来应该更弱、更空洞或中心感更差，因为左右声道在房间内会部分抵消。如果反相模式听起来更饱满或更响亮，可能有一只扬声器已经接反了极性。',
  },
  {
    question: '这个测试中的反相是什么意思？',
    answer:
      '该工具向两个声道发送相同的信号，然后在反相模式下将一个声道乘以 -1。这会在不下载音频文件的情况下将波形翻转180度。物理结果相当于对测试信号将一只扬声器的正负端互换。',
  },
  {
    question: '这个测试能验证家庭影院中每只扬声器的接线是否正确吗？',
    answer:
      '最适合检查立体声对或大型系统的前置左右扬声器。对于完整的环绕声系统，逐对测试，并将结果与AV接收器的声道测试、距离校准以及尽可能使用的声压计或测量麦克风结合使用。',
  },
  {
    question: '应该用粉红噪声还是正弦波？',
    answer:
      '粉红噪声通常更容易进行极性检查，因为它覆盖了广泛的频率范围，使抵消效果显而易见。正弦波可以帮助你专注于某个频率，但房间模式可能使单一音调产生误导。',
  },
  {
    question: '对扬声器和耳机安全吗？',
    answer:
      '在中等音量下是安全的。从低音量开始，避免放大器增益最大，不要通过耳机、小型笔记本电脑扬声器或不熟悉的扬声器大声播放连续音调。如果听到失真或机械应力，请立即停止。',
  },
];

const howToData = [
  {
    name: '坐在听音位置',
    text: '坐在你通常听音的位置，使你听到的声学抵消与实际房间和扬声器摆放相匹配。',
  },
  {
    name: '播放正常信号',
    text: '按下同相播放，注意中央声像、响度和音色饱满度。',
  },
  {
    name: '播放反相信号',
    text: '按下反相播放。接线正确的扬声器通常听起来应该更分散、更空洞或更安静。',
  },
  {
    name: '如果结果相反，请检查接线',
    text: '如果反相模式比正常模式听起来更强，请检查一只扬声器的正负端子、放大器接线柱、香蕉插头、墙面板和适配器。',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '在线扬声器相位和极性测试', level: 2 },
    {
      type: 'paragraph',
      html: '此扬声器相位测试器将正常的立体声信号与一个声道被<strong>180度</strong>反相的版本进行比较。实际目标很简单：确认一对扬声器中的两只是否在应该一起移动时确实一起移动。当左右扬声器以相同的极性接线时，低音和中音能量会在它们之间相互增强，中央声像感觉稳定。当一只扬声器接反时，相同的信号使音盆朝相反方向移动，这可能导致人声失去形体、低音消失，并使立体声定位感觉异常宽阔或空洞。',
    },
    {
      type: 'paragraph',
      html: '测试在浏览器本地生成，不会流式传输任何大型音频文件。在正常模式下，两个声道接收相同的粉红噪声或正弦波。在反相模式下，一个声道乘以<code>-1</code>，产生数学上反相的波形。如果你的实际接线是正确的，这种人为反相应该产生明显的抵消效果。如果你的物理接线已经接反，反相按钮可能会部分纠正错误，因此听起来可能比正常按钮更响亮、更结实或中心感更强。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '快速判断',
      badge: '核心规则',
      html: '<p>如果<strong>反相</strong>比<strong>同相</strong>听起来更薄、更远、更空洞或更安静，你的左右对很可能接线正确。如果反相听起来更饱满或更响亮，请检查一只扬声器的红黑端子、放大器、香蕉插头、墙面板、汽车线束或链路中的任何适配器。</p>',
    },
    {
      type: 'table',
      headers: ['听到的效果', '可能的含义', '下一步'],
      rows: [
        ['正常饱满，反相空洞', '两只扬声器可能以一致的极性接线。', '保持接线不变，继续进行摆位或校准。'],
        ['反相比正常更饱满', '一只扬声器可能物理上接反了。', '仅检查这对中一侧的正负端子。'],
        ['两种模式听起来几乎相同', '扬声器可能距离太远、房间反射占主导或输出是单声道。', '移到听音座位、禁用单声道处理并尝试粉红噪声。'],
        ['两种模式低音都弱', '房间抵消、低音炮相位、分频或摆位可能是更大的问题。', '运行低音扫频并单独测试低音炮极性。'],
      ],
    },
    { type: 'title', text: '为什么扬声器极性接反听起来不对劲', level: 2 },
    {
      type: 'paragraph',
      html: '扬声器将电信号波形转换为音盆运动。对于正压力波，两只匹配的扬声器通常应该同时向同一方向推动空气。如果一只扬声器的正负引线接反了，同一信号下该扬声器向内移动而另一只向外移动。在立体声对中，这并非简单地使声音在各处都更安静；房间、扬声器间距、波长和听音位置决定了抵消最强的地方。最明显的症状通常是低音减弱、幻象中心薄弱以及人声感觉与扬声器之间的空间脱节。',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        '两只扬声器播放相同单声道信号时，主人声和对话应锁定在中央附近。',
        '底鼓、贝斯吉他和低音钢琴音符应该有形体而不是听起来轻飘飘的。',
        '当声源是单声道时，立体声像不应该感觉人为地宽阔。',
        '轻微移动头部不应该导致中央声像完全崩溃。',
        '正确接线的对应该让反相测试听起来不如正常测试自然。',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '极性', definition: '给扬声器驱动单元供电的电信号的正负方向。' },
        { term: '相位', definition: '两个波形之间的时间关系，通常以一个周期内的度数来描述。' },
        { term: '180度反相', definition: '垂直翻转的波形，使正压力在同一时刻变为负压力。' },
        { term: '抵消', definition: '两个相似的波以相反的极性或时间到达时声级的降低。' },
        { term: '幻象中心', definition: '当相同的声音均匀到达左右扬声器时产生的明显中央声像。' },
      ],
    },
    {
      type: 'tip',
      title: '不要从扬声器旁边测试',
      html: '坐在正常的听音位置。相位抵消是空间性的：距离左扬声器半米处听到的结果可能与在沙发、录音室椅子或驾驶座上的结果完全不同。',
    },
    { type: 'title', text: '粉红噪声与正弦波用于极性检查', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '粉红噪声',
          description: '在低倍频程中比白噪声具有更多能量的宽带噪声。它使你更容易通过耳朵判断整体音色饱满度、中央声像和抵消。',
          highlight: true,
          points: ['快速极性检查的最佳首选。', '不太可能被单一房间模式主导。', '适用于家庭影院、录音室监听和汽车音响。'],
        },
        {
          title: '正弦波',
          description: '单一频率的音调，可以暴露在选定频率下的抵消，但也会放大房间的峰和谷。',
          points: ['追踪特定分频或低音问题时有用。', '如果房间在该频率有强零点，可能会产生误导。', '纯音容易使人疲劳，请保持适中的音量。'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: '要进行快速极性检查，请从粉红噪声开始。粉红噪声将能量分散到整个频谱，因此你判断的是扬声器对作为一个系统，而不是判断可能处于房间零点的一个频率。仅当你想专注于已知的问题频段时才使用正弦波控制，例如300Hz附近的人声范围抵消或80Hz附近的低音衔接问题。如果当你移动头部几厘米时正弦波结果发生剧烈变化，说明房间对该频率的影响很大。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: '应用于一个声道的数学反相', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: '用于反相声道的增益倍数', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: '测试信号所需的音频下载量', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: '家庭影院和录音室监听检查清单', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: '家庭影院前置扬声器',
      html: '仅在激活前置左右扬声器时使用正常和反相按钮。如果想先隔离原始接线，请禁用上混器、虚拟环绕、夜间模式、对话增强和房间校正。确认极性后，重新启用校准并验证对话是否保持居中。',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: '录音室监听',
      html: '通过DAW使用的相同音频接口输出发送浏览器信号。检查两条平衡线是否接线一致，监听控制器的极性开关是否未启用。反相的监听音箱会使混音过程中的单声道兼容性判断不可靠。',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: '汽车音响',
      html: '汽车座舱会产生严重的反射和座位不对称，因此从驾驶座试听，必要时从乘客座重复。原厂线束适配器、车门扬声器更换和功放安装是正负引线可能接反的常见位置。',
    },
    {
      type: 'proscons',
      title: '浏览器相位测试的优势与局限',
      items: [
        { pro: '无需安装软件或下载音频文件即可立即检查。', con: '不检查系统就无法识别哪根物理线缆接错了。' },
        { pro: '适用于立体声对、耳机、近场监听和快速安装检查。', con: '房间声学可能在某些座位上隐藏或夸大效果。' },
        { pro: '粉红噪声使宽带抵消比单一测试音更容易听出。', con: '多扬声器环绕系统仍然需要逐声道验证。' },
      ],
    },
    { type: 'title', text: '如何修复未通过的极性测试', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        '在更改扬声器线缆或香蕉插头之前关闭放大器电源。',
        '选择对中的一只扬声器，从放大器到扬声器跟踪红对红、黑对黑。',
        '检查放大器和扬声器之间的任何墙面板、弹簧端子、适配器、speakON连接器或汽车线束。',
        '如果扬声器线缆有条纹、棱纹、印刷文字或铜/银面，请在两端使用相同的导体作为正极。',
        '更改一侧后，从听音位置重新运行正常和反相模式。',
        '如果结果仍然不明确，暂时将扬声器靠近放置并在低音量下重复。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '低音炮需要单独的相位检查',
      badge: '低音系统',
      html: '<p>此工具比较左右对。低音炮分频在电气上可能是正确的，但由于距离、DSP延迟、分频斜率和摆位会改变时序，声学上可能反相。将此测试用于主对，然后使用分频扫频或接收器校准来处理低音炮的衔接。</p>',
    },
    {
      type: 'message',
      title: '实用听音规则',
      ariaLabel: '相位测试的实用听音规则',
      html: '对于实际安装，正确的设置是使单声道材料在实际听音位置听起来聚焦、饱满且稳定的设置。反相模式是诊断对比，不是听音模式。',
    },
    {
      type: 'summary',
      title: '扬声器极性诊断总结',
      items: [
        '当扬声器对接线正确时，正常模式应比反相模式听起来更响亮、中心感更强。',
        '反相模式听起来更响亮是某个物理扬声器连接反了的强有力线索。',
        '粉红噪声是最佳首选信号，因为它降低了只判断一个房间频率的可能性。',
        '正弦波对针对性故障排除有用，但可能被房间模式主导。',
        '切换模式前务必降低音量，尤其是使用耳机或大功率放大器时。',
      ],
    },
  ],
  ui: {
    normal: '同相',
    inverted: '反相',
    stop: '停止',
    pause: '暂停',
    volume: '输出电平',
    noiseColor: '测试信号',
    pinkNoise: '粉红噪声',
    sineTone: '正弦波',
    frequency: '音调频率',
    statusReady: '就绪',
    statusNormal: '同相',
    statusInverted: '反相',
    instruction:
      '反相应该听起来更薄。更响亮表示需要检查接线。',
    channelLabel: '扬声器相位测试器',
    leftChannel: '左声道',
    rightChannel: '右声道',
    leftShort: 'L',
    rightShort: 'R',
    polarityNormal: '0° 同相',
    polarityInverted: '180° 反相',
    safety: '从低音量开始。极性测试通过放大器、录音室监听、汽车音响系统和耳机时可能会变得很大声。',
  },
};
