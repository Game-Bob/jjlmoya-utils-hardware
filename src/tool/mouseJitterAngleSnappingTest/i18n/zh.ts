import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseJitterAngleSnappingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-jitter-angle-snapping-test';
const title = '鼠标抖动与角度修正测试';
const description =
  '在线绘制原始鼠标轨迹，检测传感器抖动、不稳定的跟踪以及使移动人为变直的角度修正或预测。';

const faqData = [
  {
    question: '什么是鼠标抖动？',
    answer:
      '鼠标抖动是指即使手在平稳移动，光标路径中也会出现不必要的晃动或噪声。可能来源于脏污的传感器窗口、糟糕的表面、较高的抬起距离行为、电气噪声、无线不稳定或在所选DPI下表现不佳的传感器。',
  },
  {
    question: '什么是角度修正？',
    answer:
      '角度修正，有时称为预测，是一种修正功能，鼠标固件试图将略微不完美的人类运动转换为更直线的水平、垂直或对角线。一些办公室用户喜欢，但许多游戏玩家和艺术家更喜欢没有预测的原始移动。',
  },
  {
    question: '这个测试能证明我的鼠标传感器有问题吗？',
    answer:
      '不能对传感器进行电气检查，但它显示了浏览器接收到的移动路径。如果反复的平滑移动产生了噪声点、突然的偏差或不自然地笔直的线段，那么结果就是排除鼠标、表面、DPI、无线连接或固件设置故障的有用证据。',
  },
  {
    question: '我应该如何绘制以获得最可靠的结果？',
    answer:
      '绘制缓慢的对角线、中速曲线和长距离水平移动。多次测试相同的移动。抖动在缓慢受控的线条中更容易看到，而当对角线移动变得可疑地平直或呈阶梯状时，角度修正更容易被发现。',
  },
];

const howToData = [
  {
    name: '清洁传感器和鼠标垫',
    text: '测试前，清除传感器窗口的灰尘或毛发，使用稳定的鼠标垫或桌面。',
  },
  {
    name: '绘制缓慢的对角线',
    text: '按住鼠标主键，绘制几条对角线笔画。原始传感器应显示自然的手部变化，而不是被强制完美对齐到一个角度的线条。',
  },
  {
    name: '绘制平滑曲线',
    text: '绘制圆形、S形曲线和弧线。抖动表现为从预期曲线跳出的粗糙噪声点。',
  },
  {
    name: '比较DPI和表面设置',
    text: '在不同的DPI级别、轮询率、抬起距离设置和表面上重复相同的移动，以找出问题何时出现。',
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

export const content: ToolLocaleContent<MouseJitterAngleSnappingTestUI> = {
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
      text: '在线鼠标抖动测试：检查传感器噪声和角度修正',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '一个好的鼠标传感器应当跟随你的手，不添加可见噪声，也不暗中修正路径。当传感器脏污、表面难以追踪、DPI对硬件来说太高，或固件应用了预测时，光标路径可能不再感觉自然。这个鼠标抖动测试让你绘制原始轨迹并检查各个读取点，使传感器问题变得可见而不是模糊不清。',
    },
    {
      type: 'paragraph',
      html: '最有用的测试方法很简单：绘制受控的线条和曲线，然后观察轨迹的形状。一个健康的原始传感器会产生一条跟随你移动的路径，带有微小的人类不完美之处。一个噪声传感器会产生粗糙的点、微小的尖峰和不均匀的摆动。带有角度修正或预测的鼠标会使对角线或水平移动看起来不自然地笔直，就好像固件在修正你的手。',
    },
    {
      type: 'title',
      text: '鼠标抖动的外观',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '鼠标抖动与正常的手部颤抖不同。每个人都会画出略微不完美的线条。当点偏离移动方向时，即使你的手在缓慢而稳定地移动，抖动也变得可疑。它通常表现为线条周围的模糊边缘、小的侧向尖峰或看起来粗糙而不是平滑的轨迹。',
    },
    {
      type: 'table',
      headers: ['轨迹模式', '可能的含义', '下一步尝试'],
      rows: [
        ['慢速线条中随机出现小尖峰', '传感器噪声、脏污或表面追踪问题', '清洁传感器窗口并尝试不同的鼠标垫'],
        ['仅在高DPI下出现抖动', '传感器或固件在该灵敏度下表现不佳', '在400、800、1600和3200 DPI下重新测试'],
        ['仅在无线模式下出现粗糙移动', '电池、接收器距离或干扰', '将接收器靠近并用新电池测试'],
        ['抬起附近或倾斜鼠标时出现噪声', '抬起距离或与表面接触不均匀', '保持鼠标平放，如有可能降低抬起距离'],
        ['一个桌子上有抖动而另一个没有', '表面纹理或反射率问题', '使用专为光学传感器设计的哑光鼠标垫'],
      ],
    },
    {
      type: 'title',
      text: '角度修正的外观',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '角度修正与抖动不同。它不是添加噪声，而是消除自然变化。如果你用手绘制对角线，原始传感器应该保留微小的人类偏差。启用角度修正后，线条可能锁定在完美笔直的水平、垂直或对角线方向上。这可能使桌面绘图更容易，但对于竞技瞄准、像素艺术、照片编辑以及任何需要光标与手精确匹配的任务，通常是不需要的。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '原始传感器行为',
          description: '轨迹跟随你的手，包括小的自然弯曲和修正。除非你的移动是完美的，否则对角线在数学上并不完美。',
        },
        {
          title: '角度修正行为',
          description: '轨迹在长段中看起来可疑地平直，特别是在水平、垂直或45度等常见角度附近。',
        },
        {
          title: '抖动行为',
          description: '轨迹变得嘈杂、模糊或尖刺。不是太直，而是看起来不稳定和粗糙。',
        },
      ],
    },
    {
      type: 'title',
      text: '如何正确测试鼠标',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '从干净的传感器窗口和已知好的鼠标垫开始',
        '从一角到另一角绘制缓慢的对角线，并多次重复相同的移动',
        '绘制圆形和S形曲线以揭示在直线中可能不会出现的抖动',
        '在多个DPI级别下测试，因为一些传感器在非常高的灵敏度下会变得更嘈杂',
        '如有可能，禁用厂商软件功能，如角度修正、预测、表面调节或加速',
        '如果你的鼠标支持有线和无线两种模式，请进行比较',
        '在同一表面上用另一个鼠标进行比较，以区分鼠标故障和表面问题',
      ],
    },
    {
      type: 'title',
      text: '解读分数',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '该工具显示抖动分数、角度修正分数、笔直度、平均偏差和捕获的样本数。这些值最好用于比较。更改变量后（DPI、表面、无线接收器位置或鼠标固件设置），用相同的鼠标手势绘制相同的线条。如果更换表面或清洁传感器后分数下降，你就找到了可能的原因。',
    },
    {
      type: 'table',
      headers: ['结果', '暗示什么', '实际操作'],
      rows: [
        ['低抖动和低修正', '传感器路径看起来自然且稳定', '保持当前设置并以此为基准'],
        ['高抖动，低修正', '鼠标在追踪但路径有噪声', '清洁传感器、更换表面、降低DPI并重新测试'],
        ['低抖动，高修正', '路径可能被固件修正', '在鼠标软件中寻找预测或角度修正选项'],
        ['高抖动和高修正', '轨迹不稳定且可能被过度修正', '重置鼠标软件配置文件并从默认设置重新测试'],
        ['分数随表面变化很大', '传感器不喜欢某种表面纹理或反射率', '使用轨迹最干净的表面'],
      ],
    },
    {
      type: 'title',
      text: 'DPI、轮询率和鼠标抖动',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '高DPI并不意味着自动更好的追踪。一些鼠标在中等DPI下表现干净，但在非常高的DPI下会暴露更多可见噪声，因为微小的传感器误差被放大为更大的光标移动。轮询率也会改变轨迹的感觉。更高的轮询率提供更频繁的更新，但无法修复脏污的传感器、糟糕的表面或固件预测。',
    },
    {
      type: 'paragraph',
      html: '为了公平比较，保持手部移动相似，一次只更改一个设置。例如，在800 DPI、1600 DPI和3200 DPI下绘制相同的对角线。如果路径仅在最高值下变得模糊，最佳解决方案可能是降低DPI并调整游戏内灵敏度，而不是更换鼠标。',
    },
    {
      type: 'title',
      text: '鼠标传感器抖动的常见原因',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '光学传感器窗口附近的灰尘、毛发或油脂',
        '光滑、反光、透明或不平整的表面',
        '放大微小传感器误差的极高DPI设置',
        '电池电量低或无线干扰',
        '接收器远离鼠标或在金属PC机箱后面',
        '固件过滤器、表面校准或厂商软件配置文件',
        '倾斜或快速移动鼠标时的抬起距离问题',
        '大量使用后磨损或损坏的传感器镜头',
      ],
    },
    {
      type: 'title',
      text: '为什么游戏玩家和设计师关心',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在游戏中，抖动可能使微调更加困难，因为准星不会精确地停在手预期的位置。角度修正也同样有问题：它可能有助于在桌面上画直线，但也可能扭曲小的瞄准修正，使对角线追踪感觉被过滤。对于设计师、插画师、CAD用户和照片编辑者来说，传感器修正可能使自由手移动感觉不那么诚实且更难控制。',
    },
    {
      type: 'paragraph',
      html: '鼠标不需要完美的轨迹才算好。人类移动天生就不完美。警示信号是可重复的：同样的表面总是产生噪声点，同样的DPI总是产生尖峰，或者同样的鼠标总是让对角线可疑地平直而另一个鼠标不会。',
    },
    {
      type: 'title',
      text: '购买新鼠标之前',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '在鼠标关闭时小心清洁传感器窗口',
        '尝试不同的鼠标垫，最好是哑光布面或混合游戏表面',
        '降低DPI并用软件灵敏度补偿',
        '禁用角度修正、预测、指针精度和加速选项',
        '使用USB延长线将无线接收器移近',
        '如果厂商软件支持，更新或重置鼠标固件配置文件',
        '在同一台电脑和表面上测试另一只鼠标进行比较',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '有用的诊断规则',
      html: '<p>单次奇怪的轨迹是不够的。可重复的模式才是关键。如果在相同设置下抖动或角度修正反复出现，然后在清洁传感器、更换表面、降低DPI或禁用预测后消失，你就找到了最可能的原因。</p>',
    },
  ],
  ui: {
    badge: '原始传感器轨迹',
    canvasLabel: '鼠标抖动与角度修正测试绘图区',
    canvasHint: '绘制缓慢的对角线、圆形和曲线。各个传感器点保持可见，以便容易发现粗糙的追踪。',
    pointerPrompt: '按住并在绘图区内绘制',
    samples: '采样',
    jitterScore: '抖动',
    snappingScore: '修正',
    straightness: '笔直度',
    rawDeviation: '平均偏差',
    statusIdle: '在场内绘制以捕获原始鼠标移动',
    statusHealthy: '最近采样中轨迹看起来自然且稳定',
    statusJitter: '最近轨迹中检测到噪声移动',
    statusSnapping: '检测到可疑地平直的移动',
    statusMixed: '轨迹中同时出现抖动和可能的角度修正',
    reset: '重置',
    holdShift: '提示：一次测试一个更改。DPI、表面、无线模式和预测设置都可能改变轨迹。',
    sensitivity: '检测灵敏度',
    low: '稳定',
    high: '严格',
    traceLog: '轨迹事件',
    emptyLog: '绘制几个受控笔画以启动事件日志。',
    jitterEvent: '抖动',
    snappingEvent: '角度修正',
    combinedEvent: '抖动和角度修正',
    cleanEvent: '干净轨迹',
    pxUnit: 'px',
    percentUnit: '%',
  },
};
