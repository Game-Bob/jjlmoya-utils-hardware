import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';

const slug = 'tone-frequency-generator';
const title = '在线音频和频率发生器';
const description =
  '生成正弦波、方波、三角波和锯齿波。使用 20Hz 至 20kHz 的频率测试您的扬声器、耳机或低音炮。';

const faqData = [
  {
    question: '频率发生器有什么用途？',
    answer:
      '它用于测试扬声器和耳机的频率响应，检测家具中不必要的共振，查找听力范围内的间隙，甚至通过陷波疗法（Notch Therapy）帮助缓解耳鸣。',
  },
  {
    question: '正弦波与方波有什么区别？',
    answer:
      '正弦波是没有谐波的纯音（平滑且圆润）。方波富含奇次谐波，听起来更具攻击性或更具“数字感”。三角波介于两者之间，对音频合成非常有用。',
  },
  {
    question: '这个工具会损坏我的扬声器吗？',
    answer:
      '是的，如果您在极端频率（特别是 30Hz 以下的低音或 15kHz 以上的高音）下使用极高音量，则可能造成损坏。请始终从较低的系统音量开始并逐渐增加。',
  },
  {
    question: '人类的听力范围是多少？',
    answer:
      '理论上为 20Hz 至 20,000Hz (20kHz)。然而，随着年龄的增长，失去听到 15kHz 以上声音的能力是很正常的。此测试可以帮助您验证个人的听力上限。',
  },
];

const howToData = [
  {
    name: '选择波形类型',
    text: '根据您要执行的测试类型，在正弦波（纯音）、方波、三角波或锯齿波之间进行选择。',
  },
  {
    name: '调节频率',
    text: '移动滑块以浏览可听频谱。使用 60Hz、440Hz 或 1kHz 快捷键快速访问参考频率。',
  },
  {
    name: '控制音量',
    text: '在按下播放键之前，请确保扬声器音量处于较低水平。您可以直接在工具中调整增益。',
  },
  {
    name: '分析响应',
    text: '留意可能出现的失真或声音消失的时刻。这将显示音频硬件的物理极限。',
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

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    {
      name: 'MDN Web Docs — Web Audio API',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    },
    {
      name: 'ISO 226:2023 — Equal-loudness contours',
      url: 'https://www.iso.org/standard/83117.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '关于频率和声波的一切', level: 2 },
    {
      type: 'paragraph',
      html: '声音是运动中的纯粹物理。此工具可让您实时操控声波，从您能感受到胸腔共鸣的极深沉低音，到只有动物才能感知到的超声波高音。',
    },
    { type: 'title', text: '人类听力范围与老年性耳聋', level: 3 },
    {
      type: 'paragraph',
      html: '健康的成年人能感知 <strong>20Hz 到 20kHz</strong> 之间的声音。随着年龄增长，上限会下降：大多数 50 岁以上的成人听不到 12kHz 以上的声音。17.4kHz 的音调（被称为“蚊音”）是一个经典的测试，通常只有青少年能通过。',
    },
    { type: 'title', text: '波形类型及其用途', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>正弦波：</strong>没有谐波的纯音，用于医疗听力测试和仪器校准。<strong>方波：</strong>富含奇次谐波，听起来像复古 8 位游戏机的声音。<strong>锯齿波：</strong>包含所有谐波，是电子音乐合成器的基础。<strong>三角波：</strong>介于正弦波和方波之间——比方波平滑，但比正弦波具有更多谐波内容。',
    },
    { type: 'title', text: '扬声器测试与振动驱动排水', level: 3 },
    {
      type: 'paragraph',
      html: '以最大音量播放低频波（通常为 <strong>165Hz</strong>）的方波或锯齿波，会迫使扬声器振膜剧烈振动，从而通过机械方式排出积聚在格栅中的水滴。请勿长时间以最大音量播放极高频声音：即使您听不到，能量也可能损坏设备的推特（高音单元）。',
    },
  ],
  ui: {
    badge: '音频发生器',
    title: '频率发生器',
    description: '生成用于音频测试的纯净频率。',
    freqLabel: '频率',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (超低音)',
    rangeMax: '20kHz (超声波)',
    waveLabel: '波形',
    waveSine: '正弦波',
    waveSquare: '方波',
    waveSawtooth: '锯齿波',
    waveTriangle: '三角波',
    volLabel: '音量',
    btnPlay: '播放音频',
    btnStop: '停止',
  },
};
