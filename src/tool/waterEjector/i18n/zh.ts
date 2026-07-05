import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterEjectorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'water-ejector-speaker-cleaner';
const title = '扬声器排水器';
const description =
  '播放 165 Hz 低频音调，帮助排出手机、平板和笔记本电脑扬声器中的水、灰尘或松散的碎屑。';

const faqData = [
  {
    question: '应该用什么频率给扬声器排水？',
    answer:
      '165 Hz 左右的低频音调是一个实用的起点，因为它能明显驱动小型扬声器振膜运动，不会依赖刺耳的高频。有些设备在 145 Hz 到 190 Hz 之间响应更好，所以这个工具提供了三个预设档位。',
  },
  {
    question: '音调能把手机里的水全部排干净吗？',
    answer:
      '不能。它可以帮助把水珠从扬声器网罩或声腔里抖出来，但无法干燥密封圈后面、接口内部或屏幕下方的液体。如果设备曾浸泡在水里，请关机并按照制造商提供的干燥指南操作。',
  },
  {
    question: '这对扬声器安全吗？',
    answer:
      '进行短时间播放，从低于最大音量开始，如果听到刮擦声、嘎吱声或失真就停止。微型手机扬声器不是为长时间大功率低频播放设计的，所以反复的短循环比一次长时间的高功率播放更安全。',
  },
  {
    question: '为什么扬声器进水后听起来发闷？',
    answer:
      '水膜会增加扬声器振膜的质量和阻尼，并可能堵塞网罩开孔。这会削弱高音，降低语言清晰度，使低频听起来含混不清，直到水珠移动或蒸发。',
  },
  {
    question: '手机进水后用大米管用吗？',
    answer:
      '大米不是可靠的修复方法，还可能把淀粉或颗粒弄进接口里。请改用通风、吸水性好的不掉毛的布料以及制造商的使用说明。音调排水只针对扬声器出口，不是整机干燥方案。',
  },
];

const howToData = [
  {
    name: '取下手机壳，扬声器朝下',
    text: '取下所有覆盖网罩的保护壳，让设备保持扬声器开口朝下的姿势，利用重力帮助水珠离开，同时保持各接口畅通。',
  },
  {
    name: '从标准的 165 Hz 预设开始',
    text: '点击启动，让音调运行 30 秒。振膜运动可以驱散卡在网罩网格或浅层扬声器腔体中的水珠。',
  },
  {
    name: '有需要时尝试轻柔或深层预设',
    text: '如果声音仍然发闷，用 145 Hz 或 190 Hz 试一个短循环。不同尺寸的扬声器在不同频点共振。',
  },
  {
    name: '扬声器失真时立即停止',
    text: '如果音调变得刺耳、嗡嗡响或机械受力过重，降低音量或立刻停止。失真意味着驱动单元被推动得太猛了。',
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

export const content: ToolLocaleContent<WaterEjectorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '扬声器排水音调的工作原理', level: 2 },
    {
      type: 'paragraph',
      html: '手机扬声器是一个微型振动膜。当播放低频音调时，振膜每秒前后运动很多次。在 <strong>165 Hz</strong> 下，这种运动每秒发生 165 次。如果水附着在网罩上或卡在声学出口内侧，运动的空气可以打破水滴表面张力，把它推向开口处。',
    },
    {
      type: 'paragraph',
      html: '这是一个物理过程，不是化学反应。声音不会蒸发液体，也不会让内部电子元件变得防水。最好把它理解为对扬声器出口的可控振动循环，适合在淋雨、溅水、浴室水汽或快速冲洗后，语音、通知或音乐听起来发闷时使用。',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '165 Hz', label: '标准起始频率', icon: 'mdi:sine-wave' },
        { value: '30 s', label: '首次简短清洁循环', icon: 'mdi:timer-outline' },
        { value: '145-190 Hz', label: '实用调频范围', icon: 'mdi:tune' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '音调能做到的与做不到的',
      badge: '适用范围',
      icon: 'mdi:information',
      html: '音调可以帮助移动扬声器通道中松散的水珠。但无法清除充电口、SIM 卡槽、麦克风、摄像头模块、粘合缝隙或屏幕下方空间中的液体。',
    },
    { type: 'title', text: '什么时候使用', level: 2 },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        '溅水后扬声器声音变小、发闷或有气泡感。',
        '立体声手机其中一侧扬声器比另一侧弱。',
        '笔记本或平板扬声器网罩在清洁后积了水珠。',
        '网罩上明显有松散的灰尘或绒毛，正常播放声音沉闷。',
        '设备工作正常，充电正常，且没有显示接口有液体的警告。',
      ],
    },
    {
      type: 'tip',
      title: '最佳物理姿势',
      html: '让扬声器网罩朝下或略微向下。音调提供振动，但重力决定被释放的水珠往哪里走。取下保护壳也很重要，因为很多手机壳会在出口附近形成一个浅浅的凹槽，兜住水。',
    },
    {
      type: 'card',
      icon: 'mdi:cellphone-sound',
      title: '为什么手机扬声器受影响这么快',
      html: '现代手机使用紧凑的高冲程驱动单元和微小的声学通道。一滴对大型桌面音箱无害的水珠，可能覆盖手机网罩的相当大一部分，改变气压，阻尼振膜，足以让声音听起来像隔了很远。',
    },
    {
      type: 'table',
      headers: ['症状', '可能原因', '尝试方法'],
      rows: [
        ['语音发闷', '网罩上有水膜', '运行 165 Hz 30 秒，扬声器朝下'],
        ['音调中发出嗡嗡声', '水珠移动或驱动单元过载', '降低音量；如果嗡嗡声持续则停止'],
        ['一侧扬声器更安静', '只有一边出音口被堵', '旋转设备使该出音口朝下'],
        ['完全没有声音', '输出静音、蓝牙连接或硬件故障', '先检查音频路由再重复循环'],
      ],
    },
    { type: 'title', text: '选择合适的频率', level: 2 },
    {
      type: 'paragraph',
      html: '不存在放之四海皆准的万能频率，因为扬声器尺寸、网罩形状、防水膜设计和外壳几何结构各不相同。<strong>165 Hz</strong> 之所以流行，是因为它低到足以在大多数小型扬声器上产生可见的振膜行程，同时又处在多数设备都能响亮播放的范围内。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '145 Hz 轻柔',
          description: '适用于特小型或受力扬声器，当标准音调听起来粗糙时使用。',
          icon: 'mdi:leaf',
          points: ['更低音调', '更温和的运动', '适合首次重试'],
        },
        {
          title: '165 Hz 标准',
          description: '手机、平板和多数笔记本扬声器开口的均衡起点。',
          icon: 'mdi:water-sync',
          highlight: true,
          points: ['默认预设', '强劲的振膜行程', '最佳首次循环'],
        },
        {
          title: '190 Hz 深层清洁',
          description: '稍高的推力，适用于特定扬声器在 165 Hz 以上共振的情况。',
          icon: 'mdi:waves',
          points: ['更紧凑的振动', '适合二次尝试', '避免长时间循环'],
        },
      ],
    },
    {
      type: 'proscons',
      title: '低频与高频对比',
      items: [
        { pro: '低频音调在小型扬声器上能推动更多空气和振膜行程。', con: '在最大音量下更容易失真。' },
        { pro: '高频音调通过某些网罩时更容易听到。', con: '通常推动的空气更少，且对某些用户来说可能不悦耳或听不见。' },
        { pro: '短促低频音调用耳朵就能判断效果。', con: '不应连续循环很多分钟而没有停顿。' },
      ],
    },
    {
      type: 'message',
      title: '调频法则',
      ariaLabel: '调频法则',
      html: '如果一个 30 秒循环后扬声器声音已经干净了，就停下来。更多循环不是日常维护手段；它们只是液体或碎屑进入扬声器开口后的恢复辅助。',
    },
    { type: 'title', text: '安全的清洁步骤', level: 2 },
    {
      type: 'paragraph',
      html: '从低于系统最大音量开始，尤其是在扬声器较大的笔记本和平板上。逐渐增大，直到音调清晰可闻且设备有轻微振动。如果听到尖锐的嘎吱声、刮擦声或音量突然下降，停止使用工具，让设备自然干燥。',
    },
    {
      type: 'list',
      icon: 'mdi:numeric',
      items: [
        '断开耳机和蓝牙音箱，确保音调通过进水的扬声器播放。',
        '在播放声音前，用不掉毛的布擦干外部。',
        '使扬声器出口朝下，手不要挡住网罩。',
        '用 165 Hz 运行 30 秒。',
        '等一分钟，测试正常的语音音频，如有必要再重复一次。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '不要使用加热或压缩空气',
      badge: '避免',
      icon: 'mdi:alert',
      html: '吹风机、烤箱和高压压缩空气可能把水分推得更深、让密封变形或损坏膜片。声音音调更温和，因为它借助设备本身设计的扬声器运动来工作。',
    },
    {
      type: 'summary',
      title: '快速安全检查清单',
      items: [
        '短循环优于长时间连续播放。',
        '如果音调发出刺耳嗡嗡声，降低音量。',
        '如果设备显示液体检测警告，立即停止。',
        '音调排水只针对扬声器出口，不是整机防水。',
      ],
    },
    { type: 'title', text: '抗水不等于防水', level: 2 },
    {
      type: 'paragraph',
      html: '很多手机宣传具有抗水能力，但这个等级是在规定的实验室条件下测量的。现实中的水接触包括晃动、肥皂、盐分、热量、压力、老化、冲击和密封磨损。扬声器清洁音调不会修复密封，也不能验证手机是否可以安全充电。',
    },
    {
      type: 'table',
      headers: ['接触类型', '扬声器音调有用程度', '额外操作'],
      rows: [
        ['小雨', '声音发闷时通常有帮助', '擦干外部，运行一次短循环'],
        ['清水溅洒', '有助于清除网罩附近水珠', '充电前保持各接口干燥'],
        ['泳池或海水', '效果有限；残留物可能留存', '仅在制造商允许时冲洗，之后必要时送修'],
        ['肥皂水、汽水或咖啡', '效果较低；粘性残留物会改变网罩状况', '关机并寻求清洁指导'],
        ['完全浸泡', '不够', '遵循制造商紧急处理步骤'],
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '振膜', definition: '扬声器内部推动空气产生声音的可动表面。' },
        { term: '共振', definition: '物理系统因其形状和质量有利于某种振动而运动更高效的频率。' },
        { term: '表面张力', definition: '让水珠附着在网罩或膜片上而不立刻流走的作用力。' },
        { term: '声腔', definition: '引导扬声器声音从驱动单元到设备开口的微小内部通道。' },
      ],
    },
    {
      type: 'card',
      icon: 'mdi:volume-high',
      title: '为什么清洁后声音可能更响',
      html: '水首先阻挡高频，因为小波长很容易被网罩障碍物散射。一旦水珠移开，辅音、通知铃声和语音细节常常在低频明显变化之前就恢复了。',
    },
    { type: 'title', text: '灰尘与碎屑清洁', level: 2 },
    {
      type: 'paragraph',
      html: '同样的振动可以松动附着在扬声器网格上的干燥灰尘、绒毛或粉末，但不应替代仔细的物理清洁。如果碎屑是粘性的、油腻的或压进了网罩里，单独振动可能只是把它拨动到别处。用柔软的干刷清洁外部，避免把金属工具插进开口里。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '声音振动',
          description: '适合能自由移动的松散颗粒和水珠。',
          icon: 'mdi:sine-wave',
          points: ['不接触网罩', '快速', '最适合近期溅水'],
        },
        {
          title: '轻柔外部刷扫',
          description: '更适合附着在网格表面的可见绒毛或灰尘。',
          icon: 'mdi:brush',
          points: ['无需大音量', '避免驱动单元过载', '注意膜片保护'],
        },
      ],
    },
    {
      type: 'tip',
      title: '在多尘环境后',
      html: '以中等音量运行音调，然后用干的超细纤维布擦拭外部网罩。除非设备制造商明确推荐对该表面使用酒精或液体清洁剂，否则不要添加它们。',
    },
    { type: 'title', text: '设备特定说明', level: 2 },
    {
      type: 'paragraph',
      html: '手机、平板和笔记本的扬声器各有不同的声学布局。底部发声的手机扬声器通常有一个靠近充电口的短出口，当网罩朝下时水可以很快排出。平板可能使用较长的侧面通道，这意味着音调会让声音逐渐变得清晰，而不是一次明显爆发。笔记本扬声器经常经过键盘面板或底部槽口发声，所以液体可能在织物层、塑料网格或外部网罩上，而不是直接附着在驱动单元上。',
    },
    {
      type: 'paragraph',
      html: '对于手机，转动设备直到声音发闷的那个扬声器位于最低点。对于平板，试试竖屏和横屏两种方向，因为堵塞的开口可能在不同于预期的边缘上。对于笔记本，让机器放在稳定的干燥表面上，避免让液体朝键盘、铰链或散热口倾斜。音调应该帮助扬声器通道，而不应该促使水在设备上到处流动。',
    },
    {
      type: 'table',
      headers: ['设备类型', '推荐方向', '循环建议'],
      rows: [
        ['手机', '扬声器网罩朝下，取下保护壳', '一次 30 秒循环，然后测试语音音频'],
        ['平板', '被堵边缘朝下', '以中等音量开始，因为扬声器更大'],
        ['笔记本', '正常稳定位置，除非液体在外部网罩上', '使用较低音量，如果机身振动强烈则停止'],
        ['智能手表', '首先遵循制造商排水的指引', '只有当浏览器能将声音路由到手表扬声器时才使用网页音调'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '蓝牙与音频路由检查',
      badge: '开始前',
      icon: 'mdi:bluetooth-audio',
      html: '如果无线耳机、车载系统或外接音箱处于连接状态，音调可能通过错误的输出播放。开始前断开蓝牙音频，然后确认正常铃声或短视频可以从进水的扬声器放出。',
    },
    {
      type: 'card',
      icon: 'mdi:microphone-question',
      title: '为什么麦克风不一样',
      html: '麦克风孔是一个带有保护网的输入通道和微小的压力传感器，而不是一个可以向外推动空气的扬声器振膜。不要指望排水音调清除麦克风录制发闷的问题。让设备干燥，不要拿东西捅麦克风孔。',
    },
    { type: 'title', text: '音量、失真与听觉舒适度', level: 2 },
    {
      type: 'paragraph',
      html: '排水音调是刻意重复的，在安静的房间里可能让人不舒服。目标不是最大响度；目标是足够的振膜运动来扰动水珠。如果音调让人难受，降低音量或将设备放远一些，同时保持扬声器出口畅通。听觉舒适很重要，因为一次成功的清洁循环应该只需几秒钟，不用长时间暴露。',
    },
    {
      type: 'paragraph',
      html: '失真是有用的警示信号。干净的低频音调听起来稳定，即使手机机身振动。不好的音调听起来噼啪响、粗糙、刺耳或不稳定。这可能是因为水在移动，或扬声器达到行程极限，或设备功放发生了削波。降低音量是第一步纠正措施；开大音量重复是错误的做法。',
    },
    {
      type: 'list',
      icon: 'mdi:volume-medium',
      items: [
        '同时使用设备的音量键和工具的音量滑块；任何一方都可能让输出过大。',
        '避免把扬声器贴在桌面、枕头或手上，因为气流受阻会增加杂音。',
        '循环之间暂停，让驱动单元和功放不要在持续高输出下运行。',
        '如果干燥后正常的音乐仍然噼啪响，应把它视为维修症状，而不是清洁问题。',
      ],
    },
    {
      type: 'message',
      title: '舒适法则',
      ariaLabel: '舒适法则',
      html: '如果音调对你的耳朵来说太响了，那对第一次尝试来说就已经过大了。排水取决于运动和方向，不靠折磨人的音量。',
    },
    { type: 'title', text: '音调后的故障排查', level: 2 },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '如出现以下症状请寻求维修',
      badge: '停止',
      icon: 'mdi:close-octagon',
      html: '如果设备异常发热、关机、显示液体警告、检查路由后仍无输出，或正常语音时扬声器发出杂音，请停止使用音调排水。这些症状可能表明损伤超出网罩中水珠的范畴。',
    },
    {
      type: 'table',
      headers: ['30 秒后结果', '含义', '下一步'],
      rows: [
        ['声音更清晰', '水珠可能已移动', '停止并让设备静置'],
        ['略有改善', '仍有部分水分残留', '等待，然后重复一个短循环'],
        ['无变化', '堵塞可能更深或粘性较大', '自然干燥，检查路由和设置'],
        ['失真更严重', '驱动单元可能受压或受损', '停止并降低音量；考虑送修'],
      ],
    },
    {
      type: 'summary',
      title: '实用要点',
      items: [
        '优先使用 165 Hz，它在运动和兼容性之间取得平衡。',
        '网罩朝下，保持循环简短。',
        '把音调视为扬声器恢复工具，而非整机干燥方案。',
        '制造商的液体处理指南优先于任何网页工具。',
      ],
    },
  ],
  ui: {
    statusIdle: '准备排水',
    statusPlaying: '音频运行中',
    statusComplete: '循环完成',
    frequencyLabel: '频率',
    volumeLabel: '音量',
    durationLabel: '时长',
    startButton: '启动排水器',
    stopButton: '停止音频',
    hertzUnit: 'Hz',
    secondsShort: '秒',
    presetGentle: '轻柔',
    presetStandard: '165 Hz',
    presetDeep: '深层',
    safetyTitle: '安全第一',
    safetyText: '从低于最大音量开始，如果扬声器发出杂音或失真请停止。',
    bestResult: '最佳效果',
    bestResultText: '取下手机壳，将扬声器朝下，运行一个短循环。',
  },
};
