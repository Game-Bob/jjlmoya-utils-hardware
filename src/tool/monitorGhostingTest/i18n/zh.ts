import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-ghosting-test';
const title = '显示器拖影测试';
const description =
  '使用移动条、文本和全屏运动模式测试显示器拖影、运动模糊、过冲拖尾和像素响应行为。';

const faqData = [
  {
    question: '什么是显示器拖影？',
    answer:
      '显示器拖影是当像素无法足够快地转换时，跟随移动物体出现的可见拖尾。这在慢速LCD面板、调试不当的过冲模式以及运行在最佳刷新率以下的显示器上很常见。',
  },
  {
    question: '这个测试能测量精确的响应时间吗？',
    answer:
      '浏览器测试不能替代实验室设备，如追踪相机或光电二极管，但可以揭示可见的运动伪影，比较显示器设置，并帮助您选择最不模糊的过冲模式。',
  },
  {
    question: '为什么过冲有时会产生明亮的拖尾？',
    answer:
      '过冲更用力地驱动像素以加速转换。如果超过目标色调，您可能会看到反向拖影：移动物体后面的明亮或彩色光晕。',
  },
  {
    question: '我应该在深色还是浅色背景下测试？',
    answer:
      '两者都要。某些面板在深色到灰色的转换中比亮到暗的转换更容易产生拖影，因此改变背景可以揭示单一模式可能隐藏的伪影。',
  },
];

const howToData = [
  {
    name: '设置移动速度',
    text: '从默认速度附近开始，然后逐渐增加，直到拖尾易于检查而不会跟丢物体。',
  },
  {
    name: '改变拖尾强度',
    text: '使用拖尾控件，在比较显示器设置时使残影更容易看到。',
  },
  {
    name: '测试多种背景',
    text: '在深色、浅色和网格背景之间切换，以揭示黑色污迹、反向拖影和过冲光晕。',
  },
  {
    name: '比较过冲设置',
    text: '打开显示器OSD，测试关闭、正常、快速和极限模式。选择运动最清晰、光晕最少的模式。',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: '显示器拖影测试：检查运动模糊和像素响应',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '显示器拖影在移动物体后面留下可见拖尾时出现。它会让游戏看起来模糊，使滚动文本更难阅读，让高刷新率显示器看起来比预期更差。这个显示器拖影测试为您提供移动条、文本和高对比度模式，以便比较过冲模式、刷新率、背景和移动速度，无需安装软件。',
    },
    {
      type: 'paragraph',
      html: '该测试专为实际检查而设计。它不声称为实验室级别的灰度响应时间，但有助于回答大多数用户真正的问题：<strong>在这个显示器上，哪个显示器设置在我的眼中看起来最清晰？</strong>',
    },
    {
      type: 'title',
      text: '拖影的样子',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '跟随移动物体的暗影，通常称为黑色污迹',
        '物体后面苍白或彩色的光晕，通常由过度过冲引起',
        '使边缘看起来柔和的长条半透明拖尾',
        '物体的多个微弱副本，特别是在像素响应慢的显示器上',
        '深色、浅色和网格背景之间的不均匀清晰度',
      ],
    },
    {
      type: 'title',
      text: '拖影、运动模糊和反向拖影',
      level: 3,
    },
    {
      type: 'table',
      headers: ['伪影', '您看到的', '常见原因'],
      rows: [
        ['拖影', '较暗或褪色的副本跟随物体', '像素响应对于移动速度来说太慢'],
        ['运动模糊', '整个移动物体看起来柔和', '采样保持模糊、低刷新率或眼球追踪模糊'],
        ['反向拖影', '明亮光晕或彩色过冲拖尾', '过冲设置过于激进'],
        ['黑色污迹', '暗部场景留下沉重阴影', 'VA面板暗色转换较慢'],
        ['卡顿', '运动跳跃而非流畅', '帧节奏、低FPS或浏览器/系统负载'],
      ],
    },
    {
      type: 'title',
      text: '实用的诊断工作流程',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '从将显示器设置为其原生分辨率和最高稳定刷新率开始。如果您拥有144Hz、165Hz、240Hz或360Hz显示器，在判断运动清晰度之前，请确认操作系统确实在使用该模式。全屏打开测试，选择清晰度条目标，并观察移动物体的后端。后端是虚影拖尾、暗色污迹和明亮过冲光晕最容易比较的地方。',
    },
    {
      type: 'list',
      items: [
        '使用深色背景揭示黑色污迹和慢速暗色转换',
        '使用浅色背景揭示彩色过冲光晕',
        '使用网格背景对照高对比度参考线检查边缘清晰度',
        '当您的真正问题是模糊滚动或移动中的文字难以阅读时，使用文本目标',
        '在判断显示器之前使用全屏，因为浏览器边框和缩放可能会分散对运动伪影的注意力',
        '只有在能够舒适地跟随物体之后再提高速度',
        '一次只比较一个显示器设置，以了解发生了什么变化',
      ],
    },
    {
      type: 'title',
      text: '为您的显示器选择最佳过冲设置',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大多数游戏显示器包含名为关闭、正常、快速、更快、极限、响应时间或Trace Free的过冲设置。最快的选项并不总是最好的。适中的设置通常提供最佳平衡：比关闭更少的模糊，但比极限更少的光晕。',
    },
    {
      type: 'table',
      headers: ['过冲模式', '预期结果', '建议'],
      rows: [
        ['关闭', '过冲最少，但模糊更多', '用于比较的有用基线'],
        ['正常', '适度的模糊减少', '通常最适合日常使用'],
        ['快速', '更清晰的运动，但有一定光晕风险', '如果拖尾保持干净则适用'],
        ['极限', '声称最低响应时间，过冲风险最高', '如果出现明亮反向拖尾请避免'],
        ['自适应/可变', '行为随刷新率变化', '在您实际使用的FPS范围内重新测试'],
      ],
    },
    {
      type: 'title',
      text: '测试效果不佳时的更改方法',
      level: 3,
    },
    {
      type: 'table',
      headers: ['您看到的', '可能的原因', '尝试的方法'],
      rows: [
        ['目标后面的长条暗色拖尾', '慢速暗色像素转换或过冲较弱', '尝试更强的过冲模式，在深色和网格背景下重新测试'],
        ['目标后面的明亮光晕或彩色轮廓', '过冲过度或反向拖影', '将过冲降低一级并在真实刷新率下比较'],
        ['运动看起来跳跃而非模糊', '帧节奏、浏览器负载或刷新率不匹配', '关闭重负载应用，启用全屏，确认操作系统刷新率'],
        ['移动中文字变得难以阅读', '采样保持模糊、低刷新率或响应慢', '提高刷新率，测试文字模式，比较过冲模式'],
        ['FPS变化时伪影发生变化', 'VRR或自适应过冲行为', '在您实际游戏或工作的FPS范围内重新测试'],
      ],
    },
    {
      type: 'title',
      text: '为什么刷新率很重要',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '更高的刷新率减少了每帧保持可见的时间，可以使运动看起来更清晰。然而，仅靠刷新率并不能消除拖影。像素转换慢的240Hz显示器仍然会拖影，而调校良好的144Hz面板可能比调校不佳的更快面板看起来更干净。',
    },
    {
      type: 'table',
      headers: ['刷新率', '帧时间', '预期效果'],
      rows: [
        ['60Hz', '16.7 ms', '容易看到采样保持模糊和较慢的运动'],
        ['120Hz', '8.3 ms', '更流畅，但像素响应仍然重要'],
        ['144Hz', '6.9 ms', '运动清晰度的常见游戏基线'],
        ['240Hz', '4.2 ms', '如果响应调校良好则非常流畅'],
        ['360Hz', '2.8 ms', '要求高：糟糕的过冲调校变得明显'],
      ],
    },
    {
      type: 'title',
      text: 'VRR、游戏和真实环境测试',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '可变刷新率可能会改变显示器的行为，因为某些显示器在不同刷新率下使用不同的过冲调校。如果您的问题仅出现在游戏中，不要仅在桌面最大刷新率下测试。在您实际游戏的FPS范围内重新测试，特别是60 FPS、90 FPS、120 FPS附近以及您使用的任何帧率上限。',
    },
    {
      type: 'list',
      items: [
        '如果在低FPS下拖影更严重，显示器可能具有较弱的可变过冲调校',
        '如果光晕仅在高刷新率下出现，过冲模式可能过于激进',
        '如果运动卡顿而拖尾保持较短，问题可能是帧节奏而非像素响应',
        '如果全屏与窗口模式看起来不同，请检查浏览器缩放、操作系统缩放和合成器行为',
      ],
    },
    {
      type: 'title',
      text: '糟糕结果的故障排除',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '确认您的显示线缆支持目标刷新率',
        '在比较正常过冲时禁用运动平滑、黑帧插入或MPRT模式',
        '将显示器切换到其原生分辨率后重新测试',
        '如果运动看起来不一致，使用全屏或降低浏览器缩放',
        '如果动画卡顿，关闭重负载后台应用',
        '更改GPU控制面板刷新率设置后测试相同模式',
        '如果显示器无法达到其标称刷新率，尝试另一根线缆或端口',
        '当拖影在桌面和游戏之间变化时，重新测试VRR开启和关闭',
      ],
    },
    {
      type: 'title',
      text: '在线拖影测试的局限性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '基于浏览器的拖影测试取决于浏览器动画时序、GPU负载、操作系统合成和显示配置。它非常适合视觉比较，但精确的响应时间测量需要专用设备，如追踪相机、光电二极管或基于示波器的方法。使用此测试来选择设置并发现明显的伪影，而不是用于认证制造商的响应时间声明。',
    },
  ],
  ui: {
    badge: '运动清晰度',
    speedLabel: '移动速度',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: '拖尾强度',
    backgroundLabel: '背景',
    backgroundDark: '深色',
    backgroundLight: '浅色',
    backgroundGrid: '网格',
    patternLabel: '测试目标',
    patternBars: '清晰度条',
    patternText: '文本块',
    patternUfo: 'UFO',
    pursuitLabel: '追踪引导',
    pursuitOn: '开启',
    pursuitOff: '关闭',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',
    pause: '暂停',
    resume: '继续',
    targetText: '运动',
    estimatedBlur: '估计模糊',
    frameStep: '帧步进',
    persistence: '残影',
    sampleCount: '拖尾采样',
    instructions: '在改变速度、拖尾强度、背景、全屏模式和显示器过冲设置时，观察移动目标的后端。',
    reset: '重置',
  },
};
