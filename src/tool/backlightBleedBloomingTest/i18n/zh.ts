import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { BacklightBleedBloomingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'backlight-bleed-blooming-test';
const title = '背光漏光和Blooming测试';
const description =
  '运行纯黑全屏背光漏光测试和可拖拽白色圆圈局部调光Blooming测试，适用于OLED、Mini LED、IPS、VA、显示器、笔记本和电视。';

const faqData = [
  {
    question: '如何在线测试背光漏光？',
    answer:
      '关闭房间灯光，将显示器亮度调到最高，清洁屏幕，全屏打开纯黑测试，等待光标消失，检查边缘和角落是否有固定的光漏。',
  },
  {
    question: '背光漏光和IPS Glow有什么区别？',
    answer:
      '背光漏光通常是由面板受压或装配不完美导致的边框附近固定亮斑。IPS Glow随视角和眼睛位置强烈变化，尤其在角落。',
  },
  {
    question: 'Mini LED电视或显示器上的Blooming是什么样子？',
    answer:
      'Blooming是黑色背景上明亮物体周围的可见光晕。当局部调光区域照亮比物体本身更大的面积时就会出现。',
  },
  {
    question: 'OLED面板会有背光漏光吗？',
    answer:
      'OLED面板不使用传统背光，所以不会出现LCD式的背光漏光。但它们仍可能出现近黑均匀性问题、偏色、纵向条纹，或因信号源或显示设置而抬高的黑色。',
  },
  {
    question: '我应该退还有光漏的显示器吗？',
    answer:
      '退货决定取决于严重程度、面板类型、价格和保修政策。在正常电影或游戏中可见的亮角，比仅在长曝光照片中可见的微弱斑点更严重。',
  },
];

const howToData = [
  {
    name: '准备房间',
    text: '关灯拉帘，清洁屏幕，让眼睛适应一分钟，以免灰尘和反光看起来像面板缺陷。',
  },
  {
    name: '提高显示器亮度',
    text: '将亮度设为100%或您要检查的HDR模式。测试时禁用激进的环境光传感器。',
  },
  {
    name: '运行黑色测试',
    text: '启动背光漏光模式。页面进入全屏并显示精确黑色。检查边框、角落和任何固定斑点。',
  },
  {
    name: '运行Blooming测试',
    text: '启动局部调光模式，然后在屏幕上拖动白色圆圈。观察光晕、调光延迟、网格状区域和抬高的黑色。',
  },
  {
    name: '正常退出',
    text: '按Escape键退出原生全屏。设置界面返回，测试状态复位。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<BacklightBleedBloomingTestUI> = {
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
      text: '在线背光漏光测试：新显示器或电视要注意什么',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>在线背光漏光测试</strong>在新显示器、游戏笔记本或电视的退货期内最为有用。测试显示浏览器生成的<code>#000000</code>全屏画面，这样LCD背光就是不必要光线的唯一可能来源。如果面板、扩散片堆叠、边框压力或装配存在漏光，通常表现为更亮的角落、浑浊边缘或保持在相同物理位置的斑点。',
    },
    {
      type: 'paragraph',
      html: '以现实的期望使用测试。LCD面板需要背光，极小的差异可能正常，尤其是在入门级IPS和VA显示器上。实际问题不是手机长曝光照片能否夸大斑点，而是暗色电影、游戏加载画面、夜景、黑色桌面背景或信箱视频中，光漏是否肉眼可见。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '评判面板前请先做这些',
      badge: '设置',
      html: '关掉房间灯光，清洁玻璃，将亮度设为100%，禁用环境光传感器，等几秒让眼睛适应。反光、指纹和鼠标光标都会在黑色均匀性检查期间产生假阳性。',
    },
    {
      type: 'list',
      items: [
        '检查边框压力常造成固定亮斑的上下边缘',
        '检查四个角落是否有三角形或月牙形光漏',
        '稍微移动头部，将视角发光与固定漏光区分开',
        '先用眼睛做笔记，因为相机会过度曝光黑色屏幕',
        '如果结果处于临界状态，面板预热15到30分钟后重新测试',
      ],
    },
    {
      type: 'title',
      text: '背光漏光、IPS Glow、云状斑和黑色均匀性',
      level: 2,
    },
    {
      type: 'table',
      headers: ['问题', '你看到的', '表现方式', '最常见面板'],
      rows: [
        ['背光漏光', '边缘或角落的固定亮斑', '移动头部时保持在同一位置', 'IPS, VA, TN LCD'],
        ['IPS Glow', '暗图像中角落的乳白色发光', '随视角和距离强烈变化', 'IPS LCD'],
        ['云状斑（Clouding）', '黑色上大面积不均匀浑浊区域', '通常固定，有时降低亮度可减轻', '侧入式LCD电视和显示器'],
        ['VA黑色压碎/拖影', '暗部细节在运动中消失或拖影', '取决于内容和像素转换', 'VA LCD'],
        ['OLED近黑条纹', '近黑的垂直或水平条纹', '在近黑灰色上可见，非纯黑', 'OLED'],
      ],
    },
    {
      type: 'paragraph',
      html: '最常见的错误是把暗室中的任何瑕疵都叫做背光漏光。<strong>IPS Glow</strong>是光学性的：坐得近、离轴观看面板或从陡峭角度看角落时会变得更强。真正的背光漏光是机械性或装配相关的：即使眼睛位置改变，仍保持在同一边框区域。这个区分很重要，因为许多商家对严重漏光和正常IPS Glow的处理方式不同。',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'IPS',
          description: '宽视角，常有角落发光，如果边框不均匀地压住面板会有可见漏光。',
          points: ['最好从正常的座位距离检查', 'Glow随头部位置变化', '严重的边缘漏光可能涉及保修'],
        },
        {
          title: 'VA',
          description: '更高的原生对比度，通常较少的IPS型发光，但可能出现云状斑和慢速暗部过渡。',
          points: ['黑色比IPS看起来更深', '均匀性可能因个体而异', '局部调光型号上会出现Blooming'],
        },
        {
          title: 'OLED',
          description: '无LCD背光，纯黑应完全关闭，但近黑均匀性和偏色仍然重要。',
          points: ['在暗室中纯黑应消失', '单独用灰色幻灯片测试条纹', '不要把信号源抬高的黑色和面板漏光混淆'],
        },
      ],
    },
    {
      type: 'title',
      text: '如何运行可靠的纯黑测试',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '黑色测试模式有意移除了正常界面。启动后，玻璃面板消失，设置界面的指针事件被禁用，页面请求原生全屏，测试层使用精确黑色。无鼠标移动两秒后，光标被隐藏，以免产生白色参考点或干扰暗室检查。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '#000000', label: '测试背景色' },
        { value: '2 秒', label: '光标空闲超时' },
        { value: '100%', label: '推荐亮度' },
        { value: '0', label: '测试模式外部资源' },
      ],
    },
    {
      type: 'summary',
      title: '黑色测试检查清单',
      items: [
        '使用原生分辨率，如果显示缩放异常，禁用浏览器缩放',
        '将SDR亮度调得足够高以显露缺陷，或在你打算使用的精确模式下测试HDR',
        '先从正常观看位置检查，然后从稍远位置检查',
        '除非曝光锁定且类似你眼睛所见，否则不要根据手机照片判断',
        '按Escape退出全屏，更改显示器设置后重复测试',
      ],
    },
    {
      type: 'tip',
      title: '相机照片可能让好面板看起来糟糕',
      html: '手机自动曝光试图提亮黑色屏幕，放大微弱发光，可能将正常的LCD行为变成戏剧性画面。如果需要保修证据，手动锁定曝光，并附上说明，描述问题在实际内容中是否可见。',
    },
    {
      type: 'title',
      text: 'Mini LED和FALD显示器的局部调光Blooming测试',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Blooming测试显示器</strong>模式在纯黑背景上放置一个纯白圆圈。在Mini LED、FALD LCD或带局部调光的电视上，这个小物体迫使一个或多个背光区域变亮，而相邻区域试图保持黑色。如果调光算法、区域数量、扩散片或面板对比度无法隔离光线，你会看到圆圈周围的光晕。',
    },
    {
      type: 'paragraph',
      html: '拖动圆圈很重要。静态Blooming只是故事的一部分。移动的高亮点揭示调光延迟、区域过渡、泵送效应、压碎的星空、抬高的字幕和网格状行为。好的局部调光系统应保持物体明亮，同时最小化周围雾气，避免圆圈移走后出现延迟亮斑。',
    },
    {
      type: 'table',
      headers: ['瑕疵', '要观察的', '可能的原因'],
      rows: [
        ['光晕', '白色圆圈周围的柔和发光', '局部调光区大于明亮物体'],
        ['区域网格', '运动周围出现方块或矩形块', '区域数少或可见的Mini LED布局'],
        ['调光延迟', '亮斑延迟跟随圆圈', '算法对运动响应缓慢'],
        ['黑色抬高', '圆圈出现时整个屏幕变灰', '全局调光或弱对比度控制'],
        ['字幕Blooming', '小白字或UI周围的大量雾气', '有限的局部区域加上激进的亮度'],
      ],
    },
    {
      type: 'card',
      icon: 'mdi:television-ambient-light',
      title: '最佳使用场景',
      html: '把笔记本或游戏机连接到你实际使用的昂贵电视上，在浏览器中打开这个局部调光测试器，在精确的屏幕尺寸上拖动高亮点。小的嵌入式预览无法像全屏黑白那样考验局部调光区域。',
    },
    {
      type: 'title',
      text: '面板类型预期：OLED、Mini LED、IPS和VA',
      level: 2,
    },
    {
      type: 'proscons',
      title: '每种技术的优缺点',
      items: [
        {
          pro: 'OLED关闭单个像素实现真黑色，不应显示LCD背光漏光。',
          con: 'OLED可能显示近黑条纹、偏色、自动亮度限制和静态内容下的烧屏风险。',
        },
        {
          pro: 'Mini LED可达到高HDR亮度，相比侧入式LCD减少大面积雾气。',
          con: 'Mini LED仍使用区域，当区域数或算法质量有限时，小亮物体可能会Blooming。',
        },
        {
          pro: 'IPS色彩和视角稳定，适合桌面办公和多人观看。',
          con: 'IPS Glow和边缘漏光是暗场景中的常见问题，尤其是坐得近时。',
        },
        {
          pro: 'VA通常有比IPS好得多的原生对比度，暗室中看起来更深。',
          con: 'VA在局部调光版本上可能显示暗部拖影、云状斑或Blooming。',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: '背光漏光', definition: '透过LCD堆叠层泄漏的不必要光线，通常在边框附近，在黑色图像上可见。' },
        { term: 'Blooming', definition: '由局部调光区域照亮比物体更大范围引起的明亮物体周围的光晕。' },
        { term: 'IPS Glow', definition: 'IPS面板上暗场景中与角度相关的乳白色变亮。' },
        { term: 'FALD', definition: 'Full Array Local Dimming，全阵列局部调光，将LCD背光分成独立控制的区域。' },
        { term: 'Mini LED', definition: '使用大量小型LED来增加区域数和HDR亮度的LCD背光。' },
        { term: '黑色均匀性', definition: '显示器在整个屏幕表面均匀呈现黑色或近黑内容的能力。' },
      ],
    },
    {
      type: 'title',
      text: '缺陷严重到需要退货时',
      level: 2,
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: '退货期危险信号',
      badge: '保修',
      html: '如果从正常座位距离可见亮角，同一斑点在电影或游戏中干扰你，局部调光在字幕周围产生明显光晕，或昂贵的HDR显示器比该型号典型评测表现更差，请考虑快速记录问题。',
    },
    {
      type: 'paragraph',
      html: '公平的决定要结合实际内容和产品定位。低成本办公IPS显示器可能有轻微的角落发光，这在同类产品中是正常的。高端Mini LED显示器或高端电视应更好地控制黑色水平和Blooming。如果缺陷在信箱电影、黑暗游戏菜单、太空场景或桌面办公中明显，那就不只是实验室中的好奇心。',
    },
    {
      type: 'list',
      items: [
        '在另一块屏幕上检查相同内容以排除信号源',
        '在假定面板有缺陷之前重置画面设置',
        '尝试低、中、高局部调光，因为算法因模式而异',
        '在笔记中记录亮度、HDR模式、局部调光模式和观看距离',
        '退货时，描述你眼睛看到的，而不仅是发送过曝照片',
      ],
    },
    {
      type: 'title',
      text: '为什么这个测试用代码而不是视频',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '视频文件可能引入压缩伪影、浏览器解码工作、缓冲、色彩范围转换和帧率变化。面板缺陷测试不应依赖MP4文件。此工具仅在测试状态下使用客户端HTML和CSS：背景为精确黑色，移动圆圈为精确白色。这保持了低负载，并避免了页面加载后的网络活动。',
    },
    {
      type: 'paragraph',
      html: 'Blooming圆圈位置通过<code>requestAnimationFrame</code>应用，将视觉更新与浏览器刷新循环同步。指针、鼠标和触摸输入更新目标坐标，然后下一动画帧移动白色圆圈。这使得在高刷显示器、平板和OLED手机上拖动感觉一致，而不会在每个原始输入事件上做不必要的工作。',
    },
    {
      type: 'message',
      title: '隐私和性能说明',
      ariaLabel: '隐私和性能说明',
      html: '活跃的测试状态不需要跟踪、视频、远程图像或测量上传。它们有意简单，让旧笔记本、电视浏览器和客厅设置能够考验显示面板而非CPU。',
    },
    {
      type: 'title',
      text: '错误结果的故障排除',
      level: 2,
    },
    {
      type: 'table',
      headers: ['测试中的症状', '可能原因', '尝试的方法'],
      rows: [
        ['黑色屏幕不真正黑', 'RGB范围受限、黑色设置抬高、HDR色调映射或浏览器覆盖层', '设置完整RGB输出，禁用动态对比度，确认没有OS夜间滤镜激活'],
        ['鼠标光标仍然可见', '运动重置了空闲计时器或浏览器短暂阻止了光标隐藏', '停止移动鼠标两秒或使用遥控/键盘'],
        ['全屏无法启动', '浏览器拒绝直接点击外的全屏或TV浏览器限制', '再次按下启动按钮或使用浏览器全屏快捷键'],
        ['Blooming在模式间变化', '局部调光设置改变了区域行为', '重新测试低、中、高和关闭以了解权衡'],
        ['OLED看起来灰色', '视频范围不匹配、房间反光或抬高黑色的画面模式', '检查信号源范围、黑色水平、亮度和环境反光'],
      ],
    },
    {
      type: 'summary',
      title: '实用解读',
      items: [
        '当背光漏光固定于原位且在实际暗内容中可见时最具说服力',
        'IPS Glow随角度变化，所以从你实际坐的位置测试',
        'Blooming是局部调光的限制，不是坏点问题',
        'OLED应通过纯黑测试，但仍需单独进行近黑均匀性检查',
        '好的测试设置是暗的、全屏、高亮度且无反光的',
      ],
    },
  ],
  ui: {
    bleedTitle: '背光漏光',
    bleedDescription: '全屏精确黑色，用于检测边缘漏光、IPS Glow、云状斑和黑色均匀性检查。',
    bloomingTitle: '局部调光',
    bloomingDescription: '可拖动的白色圆圈，考验Mini LED、FALD、OLED近黑处理和TV调光区域。',
    startBleed: '开始黑色测试',
    startBlooming: '开始Blooming测试',
    prepTitle: '开始之前',
    prepBrightness: '将显示器或电视亮度设为100%。',
    prepRoom: '关闭房间灯光并消除反光。',
    prepFullscreen: '按Escape退出全屏并重置测试。',
    panelLabel: '面板缺陷预览',
    parametersLabel: '测试参数',
    modeControlsLabel: '背光测试模式',
    blackLevelLabel: '黑色',
    blackLevelValue: '#000000',
    brightnessLabel: '亮度',
    brightnessValue: '100%',
    idleLabel: '光标',
    idleValue: '2秒',
    fullscreenLabel: '全屏',
    fullscreenValue: 'API',
    escapeHint: '纯黑测试运行中。停止移动鼠标2秒以隐藏光标。按Esc退出。',
    dragHint: '拖动或触摸白色圆圈。观察光晕、区域网格和延迟调光。按Esc退出。',
  },
};
