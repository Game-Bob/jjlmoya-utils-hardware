import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MouseDoubleClickTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mouse-double-click-test';
const title = '鼠标双击测试';
const description =
  '测试每个鼠标按键，在浏览器中按按钮计时检测不必要的双击、磨损的开关和触点弹跳。';

const faqData = [
  {
    question: '什么是鼠标双击问题？',
    answer:
      '双击问题发生在一次物理按压被报告为两次点击时。它可能影响左键、右键、滚轮点击或侧键，通常由开关磨损、触点弹跳、固件去抖设置或无线信号不稳定引起。',
  },
  {
    question: '什么样的间隔算可疑？',
    answer:
      '点击之间非常短的时间间隔是可疑的，因为人类的双击通常需要更多时间。此工具从80毫秒阈值开始，但您可以根据鼠标和测试风格进行调整。',
  },
  {
    question: '浏览器能证明开关坏了吗？',
    answer:
      '浏览器不能直接检查电气开关，但可以记录操作系统接收到的点击事件。在单击测试期间重复出现可疑间隔是弹跳或不必要双击的有力证据。',
  },
  {
    question: '我应该如何正确测试？',
    answer:
      '缓慢而刻意地点击，目标是单次按压。即使在您没有故意双击的情况下可疑计数器仍在上升，请在其他USB端口、其他浏览器以及可能的情况下在其他计算机上重复测试。',
  },
];

const howToData = [
  {
    name: '设置检测阈值',
    text: '从80毫秒开始。对于严格的开关弹跳检测，降低阈值；如果您的设备产生稍宽的意外间隔，则提高阈值。',
  },
  {
    name: '像正常的单击一样点击',
    text: '在鼠标图形上逐个按下每个鼠标按钮。在第一轮中不要故意双击。',
  },
  {
    name: '观察可疑计数器',
    text: '如果您在单击时出现可疑事件，请检查哪个视觉按钮被高亮显示，并与紧凑的事件芯片进行比较。',
  },
  {
    name: '与另一台设备比较',
    text: '健康的鼠标在相同阈值下应保持高分。比较设备有助于区分硬件故障和软件设置。',
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

export const content: ToolLocaleContent<MouseDoubleClickTestUI> = {
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
      text: '鼠标双击测试：在线诊断按键弹跳',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '按下一次却双击的鼠标不仅仅是令人烦恼。它可能会意外打开文件夹、取消拖放操作、在游戏中发射两枪、关闭浏览器标签页，或者在您使用之前让右键菜单出现又消失。此在线鼠标双击测试专注于有用的诊断信号：<strong>操作系统报告的按键事件之间的时间间隔</strong>。',
    },
    {
      type: 'paragraph',
      html: '与简单的点击计数器不同，此工具独立跟踪每个按钮：左键点击、右键点击、滚轮点击、浏览器后退和浏览器前进。这很重要，因为鼠标可能右键故障而左键仍然健康，或者一个磨损的侧键在数月的游戏或使用生产力快捷键后才出现误触发。',
    },
    {
      type: 'title',
      text: '此鼠标按键测试测量什么',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当您按下鼠标按钮时，浏览器会收到包含按钮代码的指针事件。该工具存储同一物理按钮的最后时间戳，并将其与同一按钮的下一次按压进行比较。如果间隔短于您选择的阈值，则该事件被标记为可疑，因为正常的故意第二次点击通常需要更长时间。',
    },
    {
      type: 'list',
      items: [
        '左键：用于检测打开文件、选择文本或拖动窗口时的意外双击',
        '右键：当上下文菜单闪烁、打开两次或立即关闭时有用',
        '滚轮键：对于中键点击打开多个标签页或在大量浏览后失败的鼠标有用',
        '后退和前进键：对于带有侧键开关的游戏鼠标和生产力鼠标有用',
        '按按钮计时：避免将左键点击与右键点击混合并称之为错误双击',
      ],
    },
    {
      type: 'title',
      text: '为什么鼠标开始双击',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '大多数鼠标在每个按钮下面使用小型机械式开关。当开关触点闭合时，金属在稳定之前可能会在非常短的时间内产生电气弹跳。鼠标固件通常通过去抖逻辑来过滤这种噪音。随着开关磨损，弹跳可能变得更长、更嘈杂或不一致，因此即使您的手指只做了一次物理按压，计算机也会接收到两次按钮按压。',
    },
    {
      type: 'paragraph',
      html: '双击并不总是由同一原因引起的。可能是机械开关磨损、固件去抖设置过于激进、开关内部的灰尘或氧化、无线数据包不稳定、宏软件、损坏的电缆或使意外双击更容易注意到的操作系统设置。',
    },
    {
      type: 'table',
      headers: ['症状', '可能的原因', '测试内容'],
      rows: [
        ['单击打开文件如同双击', '左键开关弹跳或操作系统双击速度混淆', '以80毫秒慢速单次按压测试左键'],
        ['右键菜单闪烁或关闭', '右键开关弹跳或拦截上下文菜单的软件', '测试右键并暂时禁用鼠标实用程序'],
        ['中键点击打开两个标签页', '滚轮开关磨损', '用有意识的单次按压测试滚轮'],
        ['后退按钮跳过两页', '侧键开关弹跳或浏览器快捷键重复', '分别测试后退和前进'],
        ['仅在无线模式下发生', '无线干扰、电池电量不足或接收器位置', '有线重新测试或将接收器移近'],
      ],
    },
    {
      type: 'title',
      text: '选择合适的去抖阈值',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '阈值是该工具仍然认为可疑的最大间隔。默认值<strong>80毫秒</strong>是一个实用的中间值：足够严格以捕获许多不需要的重复事件，但不会过于激进以至于每次正常的故意双击都变成硬件故障。',
    },
    {
      type: 'table',
      headers: ['阈值', '最适合', '如何解读'],
      rows: [
        ['30-50毫秒', '严格的电气弹跳检查', '适合确认来自磨损开关的非常快速的重复事件'],
        ['60-90毫秒', '通用鼠标双击诊断', '大多数游戏和办公鼠标的最佳默认范围'],
        ['100-140毫秒', '间歇性磨损开关', '当鼠标有时产生较宽的意外间隔时有用'],
        ['150-180毫秒', '压力测试和弱开关', '谨慎使用，因为快速的故意双击可能落入此范围'],
      ],
    },
    {
      type: 'title',
      text: '如何运行可靠的测试',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在第一轮中，不要故意双击。将光标放在鼠标图形上，缓慢而有意识地逐个按下每个鼠标按钮。健康的开关应产生稳定的单个事件。如果在缓慢的单次按压期间可疑计数器增加，请重复相同的按钮测试几次以确认模式。',
    },
    {
      type: 'list',
      items: [
        '用20到30次缓慢按压测试左键，然后右键，然后滚轮，然后侧键',
        '在测试按钮弹跳时不要拖动鼠标，因为移动可能会干扰计时结果',
        '如果按钮显示可疑事件，请在更换USB端口或浏览器后重复相同的测试',
        '对于无线鼠标，请使用新电池并将接收器放在鼠标附近进行测试',
        '如果只有一个按钮反复失败，则故障可能在该特定开关而非整个设备',
      ],
    },
    {
      type: 'title',
      text: '解读结果',
      level: 3,
    },
    {
      type: 'table',
      headers: ['结果', '含义', '建议的下一步'],
      rows: [
        ['多次按压后0个可疑事件', '测试的按钮在所选阈值下看起来健康', '保持默认阈值或稍后如果症状复发再测试'],
        ['1个孤立可疑事件', '可能是真实的弹跳或意外的快速按压', '在得出结论之前缓慢重复同一按钮'],
        ['一个按钮上反复出现可疑事件', '开关弹跳或触点磨损的强烈迹象', '在另一台计算机上测试并记录结果'],
        ['每个按钮上都有可疑事件', '可能是软件、驱动程序、宏实用程序或浏览器环境', '禁用鼠标软件并重新测试'],
        ['仅无线模式失败', '可能是电池、接收器位置或干扰', '尝试有线模式或将接收器移近'],
      ],
    },
    {
      type: 'paragraph',
      html: '健康评分是一个快速摘要，不是最终裁决。最重要的证据是<strong>哪个按钮</strong>产生了可疑事件，以及当您缓慢按下同一按钮时模式是否重复。在匆忙测试中的一次不良事件不如在有意识的单次按压中的五次可疑右键事件有意义。',
    },
    {
      type: 'title',
      text: '更换鼠标之前',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '检查您的鼠标软件是否有去抖时间设置，并在更改后重新测试',
        '在诊断期间禁用宏、连发配置文件或按钮重新映射',
        '尝试不同的USB端口，特别是如果您使用集线器或前面板连接器',
        '对于无线鼠标，使用靠近鼠标垫的延长线上的加密狗进行测试',
        '与同一台计算机上的另一个鼠标进行比较，以区分硬件故障和软件行为',
      ],
    },
    {
      type: 'title',
      text: '维修、保修和证据',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '如果故障是机械性的，清洁外壳很少能永久解决问题，因为问题在开关触点内部。一些用户更换微动开关，但这需要焊接，并非对每只鼠标都值得。如果鼠标在保修期内，同一按钮上重复出现的可疑间隔是向支持人员解释问题时的有用证据。',
    },
    {
      type: 'paragraph',
      html: '对于保修索赔，在缓慢按下故障按钮时录制简短的屏幕捕获。确保事件芯片显示按钮标签和可疑时间。这比说"我的鼠标有时双击"更清晰，因为它展示了实际按钮和不需要的重复事件的大致时间。',
    },
    {
      type: 'title',
      text: '基于浏览器的鼠标测试的局限性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '此测试测量到达浏览器的事件。它不能直接检查开关内部的电波形，也不能绕过每个驱动程序、操作系统或供应商实用程序。这仍然有用：如果浏览器接收到重复事件，您的普通应用程序也可能接收到它们。对于工程级的验证，示波器或开关测试仪等硬件工具提供更深入的证据，但对于大多数用户诊断来说并不是必需的。',
    },
  ],
  ui: {
    badge: '开关弹跳实验室',
    clickTarget: '按钮矩阵',
    clickTargetHint: '按左键、右键、滚轮、后退和前进',
    totalClicks: '总计',
    suspiciousClicks: '可疑',
    fastestGap: '最快间隔',
    healthScore: '健康评分',
    thresholdLabel: '检测阈值',
    thresholdUnit: '毫秒',
    cleanEvent: '正常',
    suspiciousEvent: '可疑',
    reset: '重置',
    statusIdle: '按下每个鼠标按钮以独立测试',
    statusClean: '未检测到可疑的按钮弹跳',
    statusWarning: '在鼠标按钮上检测到可疑弹跳',
    lastGap: '最后事件',
    logTitle: '最近的按钮事件',
    emptyLog: '在鼠标主体上按下任意鼠标按钮。',
    leftButton: '左键',
    middleButton: '滚轮',
    rightButton: '右键',
    backButton: '后退',
    forwardButton: '前进',
    otherButton: '其他',
  },
};
