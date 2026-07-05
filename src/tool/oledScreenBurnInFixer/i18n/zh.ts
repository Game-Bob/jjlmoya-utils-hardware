import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oled-screen-burn-in-fixer';
const title = 'OLED屏幕烧屏修复器';
const description =
  '运行全屏OLED烧屏修复器和LCD卡像素锻炼器，具有快速RGB色彩循环、白噪声、强制性光敏警告和内置计时器。';

const faqData = [
  {
    question: 'OLED烧屏修复器能消除永久烧屏吗？',
    answer:
      '任何浏览器工具都无法逆转有机子像素的永久性老化。像素锻炼器可以减轻暂时性残像、使轻微鬼影不那么明显，或帮助诊断某个痕迹是暂时残像还是永久烧屏。',
  },
  {
    question: '这对光敏性癫痫患者安全吗？',
    answer:
      '该测试使用快速闪烁的颜色和高对比度噪点。患有光敏性癫痫、偏头痛敏感、有癫痫风险或对闪烁灯光感到不适的人不应运行此测试。',
  },
  {
    question: '这能修复LCD卡像素吗？',
    answer:
      '通过快速改变子像素状态，有时可以帮助保持红、绿、蓝或白色的卡像素。无法修复黑色死点或物理面板损坏。',
  },
  {
    question: '像素锻炼器应该运行多长时间？',
    answer:
      '对于卡像素或轻微残像，从5到10分钟开始。更长时间的运行应有人监督，亮度保持在合理水平，并让屏幕有时间降温。',
  },
  {
    question: '为什么该工具使用canvas而不是视频？',
    answer:
      '图案直接在HTML5 Canvas中生成，因此页面不需要沉重的视频文件。这保持加载速度快，使颜色和噪点循环响应全屏尺寸。',
  },
];

const howToData = [
  {
    name: '阅读光敏警告',
    text: '如果闪烁的灯光、高对比度图案、偏头痛或癫痫风险可能影响您或附近的人，请不要继续。',
  },
  {
    name: '设置较短的首次运行',
    text: '选择5到10分钟作为第一次测试，选择混合模式，并将亮度保持在舒适的水平。',
  },
  {
    name: '开始全屏修复',
    text: '确认警告，按下开始修复，让canvas循环显示RGB颜色和噪点，不要在其他窗口移到显示器上方。',
  },
  {
    name: '之后检查痕迹',
    text: '停止测试，显示中性灰、白、黑、红、绿、蓝屏幕，然后比较鬼影或卡像素是否发生了变化。',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'OLED烧屏修复器和LCD卡像素锻炼器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '这款OLED屏幕烧屏修复器是一款全屏像素锻炼器，适用于暂时性残像、轻微鬼影和部分LCD卡像素。它直接在HTML5 Canvas中生成快速的红色、绿色、蓝色、白色、黑色、黄色和噪点图案。没有任何视频文件、外部图像资源或下载步骤：浏览器以当前屏幕尺寸绘制每一帧。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '光敏警告',
      icon: 'mdi:alert',
      badge: '必需',
      html: '修复图案使用快速闪烁、高对比度过渡和白噪声。如果您患有光敏性癫痫、有癫痫风险、偏头痛敏感、闪烁灯光引发的眩晕，或附近有人可能受到影响，请不要运行。如果感到眼疲劳、恶心、头痛或不适，请立即停止。',
    },
    {
      type: 'paragraph',
      html: '当实际问题是：<strong>这个痕迹是可以消退的暂时性残像，还是永久性面板老化？</strong> 该工具就很有用。有人监督的短时间运行有时可以减轻由残留的静态界面元素引起的鬼影，有时可以唤醒卡在某颜色上的子像素。它无法重建老化的OLED材料、修复裂纹层、恢复损坏的驱动线路或保证恢复。',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: '已加载的视频资源', icon: 'mdi:speedometer' },
        { value: 'RGB', label: '主要子像素锻炼', icon: 'mdi:palette' },
        { value: '1-120分钟', label: '内置会话计时器', icon: 'mdi:timer-outline' },
        { value: '100%', label: '客户端执行', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: '烧屏、残像和鬼影的含义',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'OLED烧屏',
          definition: '有机子像素的永久性不均匀老化。静态标志、任务栏、导航栏或游戏HUD可能留下可见的形状，因为这些像素与面板其他部分的衰老速度不同。',
        },
        {
          term: '暂时性残像',
          definition: '静态内容消失后残留的短暂鬼影。通过正常的混合内容、补偿周期或像素锻炼图案可能会消退。',
        },
        {
          term: 'LCD卡像素',
          definition: '卡在红色、绿色、蓝色、白色或其他固定颜色的像素或子像素。如果不是物理损坏，快速状态变化有时可以将其释放。',
        },
        {
          term: '死像素',
          definition: '因不再正确发光或透光而保持黑色的像素。浏览器像素锻炼器通常无法复活真正死掉的像素。',
        },
        {
          term: 'LCD拖影',
          definition: '由像素响应缓慢引起的运动拖尾。这与屏幕烧屏不同，但用户通常将两者都描述为鬼影。',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '暂时性残像',
          description: '通常在混合内容、屏幕刷新程序或短时间的RGB和噪点会话后消退。',
          icon: 'mdi:history',
          highlight: true,
          points: ['静态内容后可见', '边缘通常较柔和', '可能在几分钟或几小时内改善'],
        },
        {
          title: '永久烧屏',
          description: '在休息、补偿周期和多样化内容后仍然可见的不均匀OLED老化。',
          icon: 'mdi:contrast-circle',
          points: ['与长期静态界面匹配', '在纯色上最明显', '锻炼后不会消失'],
        },
        {
          title: '卡像素',
          description: '单个点或小簇卡在一种颜色上，而不是大面积的鬼影。',
          icon: 'mdi:grain',
          points: ['通常一个像素宽', '可能是红色、绿色、蓝色或白色', '有时对快速颜色变化有反应'],
        },
      ],
    },
    {
      type: 'title',
      text: '如何安全使用像素锻炼器',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '在首次运行前降低亮度，特别是在OLED手机、OLED电视和笔记本OLED面板上。',
        '从5到10分钟开始；长时间的会话不要无人看管屏幕。',
        '使用全屏让受影响区域接收到与面板其余部分相同的图案。',
        '告知房间内的人有闪烁灯光；不要在没有同意的人附近运行测试。',
        '如果面板变得异常发热，浏览器卡顿严重，或感到不适，就停止。',
        '运行后检查中性灰、白、黑、红、绿、蓝屏幕以比较结果。',
      ],
    },
    {
      type: 'table',
      headers: ['问题', '首选模式', '首次时长', '亮度建议'],
      rows: [
        ['轻微OLED鬼影', '混合RGB加噪点', '5-10分钟', '舒适，不最大'],
        ['刚出现的静态标志残像', 'RGB循环', '10-20分钟', '中等亮度'],
        ['单一颜色的LCD卡像素', '噪点或混合', '5-15分钟', '正常桌面亮度'],
        ['旧的永久烧屏', '仅诊断用混合', '5分钟', '避免长时间高亮度运行'],
        ['黑色死像素', '不建议作为修复', '仅检查', '没有像素锻炼器能保证恢复'],
      ],
    },
    {
      type: 'tip',
      title: '首先使用短时间会话',
      html: '长时间闪烁会话不一定更好。如果痕迹是暂时的，短时间运行后通常就会看到一些变化。如果在合理尝试和正常面板刷新程序后没有任何变化，问题可能是永久性老化或硬件缺陷。',
    },
    {
      type: 'title',
      text: '选择RGB循环、白噪声和混合模式',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '不同类型的瑕疵对不同图案的反应不同。红绿蓝循环以受控顺序锻炼主要子像素。白噪声在大量小区域内快速交替亮度，有助于暴露和锻炼孤立的卡像素。混合模式轮流使用两者，在不确定问题是残像还是响应慢的子像素时，这是最佳首选。',
    },
    {
      type: 'table',
      headers: ['模式', '功能', '最适合', '注意事项'],
      rows: [
        ['RGB循环', '全屏原色和高对比度色场', 'OLED残像和颜色通道检测', '可见闪烁'],
        ['白噪声', '面板范围内的随机黑白噪点', '单个卡像素和小簇', '视觉强度更高'],
        ['混合', '交替色场和噪点', '通用OLED烧屏修复工作流', '首先使用短计时器'],
      ],
    },
    {
      type: 'proscons',
      title: '在线像素锻炼器：现实的益处和限制',
      items: [
        {
          pro: '在浏览器中即时运行，无需安装软件或加载视频文件。',
          con: '无法逆转永久性OLED材料老化或物理面板损坏。',
        },
        {
          pro: '全屏canvas用生成的RGB和噪点帧覆盖显示器。',
          con: '浏览器时序、设备性能和全屏支持可能影响动画一致性。',
        },
        {
          pro: '在尝试制造商面板维护程序之前，有助于进行初步诊断。',
          con: '不应替代有明显缺陷的新面板的保修服务。',
        },
      ],
    },
    {
      type: 'title',
      text: 'OLED专项指导',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'OLED像素自发光。当静态元素在屏幕上停留数小时，该元素下的子像素会以不同的速率老化。这就是为什么烧屏通常呈现电视频道标志、手机状态栏、导航按钮、游戏HUD、流媒体应用侧边栏或桌面任务栏的形状。像素锻炼器可以使暂时性残像更快消退，但永久性差异老化仍是材料问题。',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: '首先检查内置面板保养',
      html: '许多OLED电视、显示器、笔记本和手机都包含像素刷新、面板刷新、标志调暗、屏幕移位、任务栏调暗或补偿周期。请按照制造商的说明使用相关程序，尤其是在显示器还在保修期内时。此在线工具最好视为温和的诊断和暂时性残像锻炼，而非面板保养固件的替代品。',
    },
    {
      type: 'list',
      items: [
        '如果鬼影是新出现的，在判定为永久烧屏之前，先让显示器显示多样化内容或休息。',
        '如果痕迹与多年前的静态标志吻合，像素锻炼器不太可能将其完全消除。',
        '如果面板有内置刷新周期，请仅按制造商推荐的频率运行。',
        '避免长时间以最大亮度运行测试图案；热量和亮度会加速老化。',
        '隐藏任务栏，启用屏幕保护程序，降低静态界面亮度以防止复发。',
      ],
    },
    {
      type: 'title',
      text: 'LCD卡像素指导',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LCD面板不会像OLED面板那样烧屏，但可能出现卡像素、压痕、面板缺陷和暂时性图像滞留。保持红、绿、蓝、青、品红、黄或白色的卡像素可能是由切换不正常的子像素造成的。快速变化有时有帮助，但没有保证的在线修复。',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '死像素与卡像素',
      icon: 'mdi:information-outline',
      badge: '诊断',
      html: '彩色点比黑点更有希望。在所有测试颜色上都是黑色的像素通常已死或阻塞。在某些背景下变化但在其他背景下不变的彩色像素可能是卡住的子像素，更适合短时间像素锻炼。',
    },
    {
      type: 'summary',
      title: '在使用压力或物理方法之前',
      items: [
        '不要用力按压OLED面板、触摸屏或脆弱的笔记本屏幕。',
        '避免使用尖锐工具、包裹布料的笔和任何可能划伤表面的方法。',
        '先使用软件锻炼，如缺陷持续则使用保修支持。',
        '如果显示器是新的且退货政策仍适用，请用微距照片记录缺陷。',
      ],
    },
    {
      type: 'title',
      text: '为什么Canvas比沉重的修复视频更好',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '基于视频的烧屏修复器需下载编码帧、解码、缩放至屏幕，并希望压缩没有柔化精确的过渡。此工具在浏览器中直接生成每一帧。RGB色场是实色的，噪点是为当前canvas大小创建的，且页面避免了大媒体文件，以免拖慢加载或降低PageSpeed。',
    },
    {
      type: 'list',
      items: [
        '没有外部视频文件意味着首次渲染更快，网络依赖更少。',
        'Canvas输出缩放至全屏表面，而非受限于视频分辨率。',
        '计时器可以自动停止修复，而非无限循环播放视频。',
        '模式、速度、时长和强度可在不加载其他资源的情况下更改。',
      ],
    },
    {
      type: 'message',
      title: '现实的期望',
      ariaLabel: '烧屏修复期望',
      html: '将此工具用作可控的第一步：减轻暂时性残像，锻炼可能的卡像素，并收集证据。如果痕迹经多样化内容、内置面板刷新程序和谨慎的短时间锻炼后仍存在，将其当作硬件或保修问题处理。',
    },
  ],
  ui: {
    safetyTitle: '闪烁灯光警告',
    safetyBody: '此修复图案快速发出纯色和高对比度噪点。如果您或附近的人可能受光敏性癫痫、癫痫、偏头痛、眩晕或闪烁光敏感影响，请勿使用。',
    safetyChecklist: '保持亮度合理，监督会话，如感不适立即停止。',
    safetyConfirm: '我了解光敏风险并希望启用修复按钮。',
    safetyContinue: '继续设置',
    startRepair: '开始修复（全屏）',
    controlsLabel: 'OLED屏幕修复控制',
    modeLabel: '图案模式',
    modeCycle: 'RGB循环',
    modeNoise: '白噪声',
    modeHybrid: '混合',
    modeCycleDescription: '用于残像和通道检查的纯原色。',
    modeNoiseDescription: '用于单个卡像素和小簇的高频噪点。',
    modeHybridDescription: '最佳初次运行：交替RGB色场与静态纹理。',
    speedLabel: '循环速度',
    durationLabel: '时长',
    durationShort: '5分钟',
    durationStandard: '10分钟',
    durationDeep: '20分钟',
    durationShortDescription: '快速检查',
    durationStandardDescription: '推荐',
    durationDeepDescription: '有人监督的运行',
    fullscreenHint: '全屏OLED烧屏修复画布',
    intensityLabel: '噪点强度',
    warningBadge: '闪烁内容',
  },
};
