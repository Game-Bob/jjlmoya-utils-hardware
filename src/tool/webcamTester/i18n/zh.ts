import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'private-webcam-camera-test-online';
const title = '私密摄像头在线测试';
const description = '在视频会议或直播前检查摄像头权限、实时预览、分辨率、宽高比、方向及帧率推送状态。';

const faq = [
  {
    question: '此摄像头测试会录制或上传我的视频吗？',
    answer: '不会。本页面仅请求本地实时视频流用于预览，绝不请求麦克风音频。不会进行录制、截图或上传任何数据。停止测试后将立即关闭所有视频轨道。',
  },
  {
    question: '为什么浏览器会提示请求摄像头权限？',
    answer: '未经用户允许，网站无法打开摄像头。该提示允许您选择是否让本页面接收临时的本地视频流。',
  },
  {
    question: '配置 FPS 与观察到的 FPS 有何区别？',
    answer: '配置 FPS 是当前预览请求的目标帧率。观察到的 FPS 是指当标签页可见时实际接收到的估计帧率。',
  },
  {
    question: '为什么可用的分辨率与摄像头参数不一致？',
    answer: '操作系统、摄像头驱动和浏览器会共同选择兼容模式。其他正在运行的软件或电源限制可能会降低可用分辨率。',
  },
];

const howTo = [
  {
    name: '打开私密预览',
    text: '选择\'打开摄像头\'并在浏览器提示中允许视频权限。不会请求音频权限。',
  },
  {
    name: '检查构图与画质',
    text: '在实时预览中检查焦点、光线、背景及面部位置。必要时可开启镜像或构图辅助线。',
  },
  {
    name: '验证视频流参数',
    text: '查看分辨率、宽高比、方向、配置 FPS 及实际接收到的帧率。',
  },
  {
    name: '切换或关闭摄像头',
    text: '选择其他可用摄像头进行对比，或点击\'停止摄像头\'关闭所有视频轨道。',
  },
];

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

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: '摄像头测试常见问题',
  faq,
  bibliographyTitle: '摄像头设置与故障排除参考',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '在视频通话前测试您的摄像头',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '使用本地预览在会议前确认关键问题：摄像头能否正常开启、是否选择了正确的设备、面部光线是否充足以及画面运动是否流畅。',
    },
    {
      type: 'list',
      items: [
        '如果连接了多个设备，请选择正确的摄像头',
        '将摄像头置于眼睛平视高度，保持面部位于画面上三分之一区域',
        '从正面照亮面部，避免背对明亮的窗户',
        '如果摄像头显示被占用，请关闭其他会议软件',
        '在预览画面中直接查看分辨率与帧率状态',
      ],
    },
    {
      type: 'title',
      text: '黑屏或摄像头不可用时的解决方案',
      level: 3,
    },
    {
      type: 'table',
      headers: ['异常现象', '可能原因', '建议操作'],
      rows: [
        ['权限被拒绝', '浏览器或系统设置中禁用了摄像头访问', '在浏览器设置中允许摄像头权限并刷新页面'],
        ['黑屏或提示占用', '其他会议软件正占用摄像头', '关闭 Zoom、Teams 或 Meet 后重试'],
        ['画面设备错误', '误选了虚拟摄像头或备用设备', '在下拉菜单中切换其他摄像头源'],
        ['画面昏暗或噪点多', '正面光线不足或背光过强', '在屏幕前放置台灯或面向窗户'],
        ['视频卡顿', '光线过暗或电脑 CPU 负载过高', '增加照明并关闭高占用程序'],
      ],
    },
    {
      type: 'title',
      text: '理解分辨率与帧率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '对于普通视频会议，1280 × 720 分辨率已经足够。1920 × 1080 能提供更高清晰度，但需要稳定的网络与性能。配置 FPS 为请求目标，而观察到的 FPS 表示标签页打开时的实际帧率。',
    },
    {
      type: 'tip',
      title: '在真实会议环境条件下测试',
      html: '请在与实际会议相同的时间和光线条件下进行测试。鉴于软件可能会对画面进行裁剪或美颜处理，建议同时在会议软件内进行最终确认。',
    },
    {
      type: 'title',
      text: '最佳构图与摆放位置',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '将摄像头抬高至接近视线水平，头部上方留出适量空间。保持主光源位于前方。如果佩戴眼镜，可将光源稍微偏向一侧以避免镜片反光。',
    },
  ],
  ui: {
    privacyNote: '不录制 · 不上传 · 无音频',
    permissionHeading: '准备好测试您的摄像头了吗？',
    permissionBody: '打开私密实时预览，检查在此标签页中可用的图像和视频格式。停止摄像头将立即关闭访问。',
    startAction: '打开摄像头',
    stopAction: '停止摄像头',
    retryAction: '重试',
    deviceLabel: '摄像头来源',
    devicePlaceholder: '选择摄像头',
    defaultDevice: '摄像头',
    mirrorAction: '镜像模式',
    guideAction: '构图网格',
    stageLabel: '私密摄像头预览区域',
    resolutionLabel: '分辨率',
    aspectLabel: '宽高比',
    orientationLabel: '方向',
    configuredFpsLabel: '配置 FPS',
    observedFpsLabel: '观察到的 FPS',
    frameDeliveryLabel: '帧率推送',
    landscapeValue: '横屏',
    portraitValue: '竖屏',
    squareValue: '方形',
    frameStable: '接近目标值',
    frameReduced: '低于目标值',
    frameConstrained: '严重降低',
    framePending: '等待帧数据',
    statusIdle: '摄像头已关闭。准备好后请打开预览。',
    statusStarting: '正在等待权限及首帧视频数据',
    statusReady: '实时预览已就绪。请检查焦点、光线、构图及流畅度。',
    statusStopped: '摄像头已停止。此测试的所有视频轨道已关闭。',
    statusHidden: '请保持此标签页处于可见状态以准确测量 FPS。',
    statusUnsupported: '此浏览器不支持访问摄像头。',
    errorPermissionDenied: '权限被拒绝。请在浏览器设置中允许后重试。',
    errorNoCamera: '未找到可用摄像头。请连接设备后重试。',
    errorInUse: '无法启动摄像头。请关闭其他占用设备的应用后重试。',
    errorSecureContext: '摄像头访问需要 HTTPS 或 localhost 安全环境。',
    errorGeneric: '无法打开摄像头。请检查权限与设备连接。',
    limitHeading: '此测试可确认的内容',
    limitBody: '确认在此标签页中可用的画面与流畅度。不评估镜头光学质量或第三方软件的算法后处理。',
    localOnlyLabel: '私密摄像头检测',
    emptyValue: '不可用',
    fpsUnit: 'FPS',
  },
};
