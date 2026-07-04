import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = '手机传感器测试';
const description = '在手机上运行陀螺仪、加速度计、运动传感器和水平仪在线测试，检查倾斜、旋转、漂移和传感器校准问题。';

const faqData = [
  {
    question: '如何在线测试手机陀螺仪？',
    answer: '在手机上打开测试，点击开始校准，如果出现提示则允许运动访问，然后旋转和倾斜设备。正常工作的陀螺仪和方向传感器应平滑更新 alpha、beta 和 gamma，不会冻结或剧烈跳动。',
  },
  {
    question: '可以用水平仪测试加速度计吗？',
    answer: '可以。开始测试后，将手机放在平坦的桌子上。气泡应稳定在中心附近，加速度值应保持稳定。如果手机静止时气泡严重漂移，加速度计可能需要校准，或者保护壳、桌子或设备硬件可能正在产生干扰。',
  },
  {
    question: '为什么 iPhone 会要求运动权限？',
    answer: 'iPhone 和 iPad 上的 Safari 需要用户在点击后才能让网站访问运动和方向传感器。如果权限被拒绝，测试将无法读取陀螺仪或加速度计数据，直到你允许运动访问。',
  },
  {
    question: '这能修复或校准损坏的指南针吗？',
    answer: '没有任何浏览器工具可以修复硬件或强制进行系统指南针校准。此测试可帮助你识别症状：读数卡住、运动嘈杂、漂移、权限缺失或浏览器不暴露传感器。',
  },
];

const howToData = [
  { name: '在手机上打开测试', text: '使用你想要诊断的同一部 iPhone、iPad、安卓手机或平板电脑。桌面浏览器通常没有运动传感器可供暴露。' },
  { name: '允许运动访问', text: '点击开始校准，如果浏览器显示运动或方向权限提示，请接受。' },
  { name: '测试倾斜和旋转', text: '将手机向前倾斜，左右滚动，然后在桌子上平放旋转。观察 alpha、beta、gamma 和加速度的平滑变化。' },
  { name: '在平坦表面检查漂移', text: '让手机静置几秒钟。健康的传感器应该稳定下来，而不是不断漂移、出现尖峰或冻结。' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '手机在线陀螺仪和加速度计测试', level: 2 },
    {
      type: 'paragraph',
      html: '当屏幕旋转感觉不对、游戏或 AR 应用出现漂移、水平仪应用看起来不准确、导航指向错误方向或手机对倾斜反应不正确时，使用此手机传感器测试。测试实时显示陀螺仪、加速度计、旋转和水平仪的行为，帮助你区分浏览器权限问题和真正的传感器或校准问题。',
    },
    {
      type: 'stats',
      items: [
        { label: '主要搜索意图', value: '在线测试陀螺仪' },
        { label: '同时检查', value: '加速度计漂移' },
        { label: '最佳设备', value: '手机或平板电脑' },
      ],
    },
    { type: 'title', text: '每个传感器读数告诉你什么', level: 3 },
    {
      type: 'table',
      headers: ['读数', '用途', '警告信号'],
      rows: [
        ['Alpha', '检查绕垂直轴的旋转，用于类似指南针的运动和方向变化。', '手机平放旋转时不变化、大幅跳变或卡在零值。'],
        ['Beta', '检查前后倾斜，用于屏幕旋转、游戏、相机水平和 AR 控制。', '方向错误、卡在一个值上或手机静止时持续漂移。'],
        ['Gamma', '检查左右翻滚，用于横屏旋转、赛车游戏、水平仪应用和稳定器。', '一侧反应不同、数值嘈杂或气泡在平坦桌子上永远不归中。'],
        ['加速度 X/Y/Z', '检查加速度计响应、震动检测、重力方向和运动稳定性。', '静止时出现大幅尖峰、对运动无响应或取下保护壳后读数不稳定。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '此测试可帮助诊断的症状',
      html: '<p>使用实时数值调查自动旋转不工作、陀螺仪感觉延迟、加速度计漂移、指南针校准警告、AR 跟踪偏移、相机水平错误、运动控制偏向一侧或手机仅在原生应用中报告运动但在浏览器中不报告等问题。</p>',
    },
    { type: 'title', text: '陀螺仪 vs 加速度计 vs 指南针', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: '陀螺仪', description: '测量旋转速度。对 AR、游戏、相机稳定、运动控制和平滑方向变化至关重要。' },
        { title: '加速度计', description: '测量加速度和重力方向。支持倾斜、震动检测、步数检测和数字水平仪行为。' },
        { title: '指南针 / 磁力计', description: '帮助估计方向，但可能被磁铁、金属物体、车载支架、保护壳、扬声器、笔记本电脑和附近电子设备干扰。' },
      ],
    },
    { type: 'title', text: '如何正确测试传感器校准', level: 3 },
    {
      type: 'list',
      items: [
        '测试前取下磁性保护壳、MagSafe 钱包、金属支架、手柄夹和其他配件。',
        '将手机放在稳固的平坦桌子上，等待几秒钟后再判断漂移。',
        '沿每个轴缓慢旋转手机，而不是立即摇晃。',
        '如果浏览器不显示数据，将 Safari 或 Chrome 与原生传感器或指南针应用进行比较。',
        '如果读数在多个应用中冻结，请重启设备并重复测试。',
      ],
    },
    {
      type: 'tip',
      title: 'iPhone 和 Android 权限说明',
      html: '在 iPhone 和 iPad 上，Safari 可能在点击后请求运动和方向权限。在 Android 上，Chrome 通常更直接地暴露运动传感器，但隐私设置、浏览器标志、省电模式和嵌入式 WebView 仍可能阻止或减少传感器数据。',
    },
    {
      type: 'table',
      headers: ['问题', '可能原因', '下一步'],
      rows: [
        ['没有任何值变化', '权限被拒绝、浏览器不受支持、桌面设备或受限 WebView。', '在手机上打开，使用 Safari 或 Chrome，允许运动访问并重新加载页面。'],
        ['气泡在桌子上漂移', '校准问题、表面不平整、保护壳干扰或加速度计噪声。', '取下保护壳，使用已知的平坦表面，重启并与原生水平仪应用比较。'],
        ['指南针方向错误', '磁干扰或系统指南针校准。', '远离金属和电子设备，使用操作系统的指南针校准流程。'],
        ['数值跳动或出现尖峰', '传感器噪声、硬件损坏、浏览器激进限制或突然的物理运动。', '在静止状态下测试，关闭重度应用，并与另一个浏览器或原生应用比较。'],
      ],
    },
    {
      type: 'summary',
      title: '此测试的用途',
      items: [
        '无需安装应用即可在线测试手机陀螺仪。',
        '使用实时水平仪检查加速度计漂移。',
        '查明运动控制是否因硬件、校准、权限或浏览器支持而失败。',
        '为 AR、游戏、相机水平校正、导航或屏幕旋转故障排除准备手机。',
      ],
    },
  ],
  ui: {
    startButton: '开始校准',
    permissionHint: '点击一次以解锁运动传感器',
    privacyBadge: '本地传感器数据',
    privacyCopy: '方向和运动读数保留在此浏览器会话中。',
    orientationPanel: '方向',
    motionPanel: '运动',
    bubblePanel: '数字水平仪',
    statusReady: '准备获取传感器权限',
    statusWaiting: '等待浏览器权限',
    statusDenied: '传感器访问被拒绝或不可用',
    statusUnsupported: '此浏览器未暴露运动传感器',
    statusActive: '实时传感器流已激活',
    steadyLabel: '稳定',
    movingLabel: '移动中',
    shakingLabel: '摇晃中',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: '水平偏移',
    motionMagnitudeLabel: '运动幅度',
    cubeLabel: '3D 设备方向立方体',
    bubbleLabel: '水平仪指示器',
    calibrationLabel: '实时角度',
  },
};
