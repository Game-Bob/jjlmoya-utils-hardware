import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-bluetooth-ble-scanner';
const title = 'Web Bluetooth BLE 扫描器';
const description = '从浏览器扫描附近的蓝牙低功耗设备，检查暴露的 GATT 服务 UUID，并测试您的 IoT 或可穿戴硬件是否可被发现。';

const faqData = [
  {
    question: '网站可以未经许可扫描蓝牙设备吗？',
    answer: '不可以。Web Bluetooth 始终需要用户手势和浏览器权限选择器。此工具只能看到您明确选择的设备，不会存储 MAC 地址、设备 ID 或扫描结果。',
  },
  {
    question: '为什么扫描器不显示附近所有的 BLE 设备？',
    answer: '浏览器有意通过权限选择器公开蓝牙，而不是作为静默后台扫描器。某些设备还会停止广播、隐藏名称、要求配对或仅在连接后才公开服务。',
  },
  {
    question: '哪些浏览器支持 Web Bluetooth？',
    answer: 'Web Bluetooth 在 Chrome 和 Edge 等基于 Chromium 的桌面浏览器中获得最佳支持。通常需要 HTTPS 或 localhost，在许多 Firefox、Safari 和 iOS 浏览器配置中不可用。',
  },
  {
    question: '这能读取可穿戴设备的私有传感器数据吗？',
    answer: '仅当设备公开兼容的 GATT 服务且浏览器授予访问权限时才可以。许多商用可穿戴设备需要厂商应用、加密、绑定或专有特性，通用浏览器扫描器无法解码。',
  },
  {
    question: '什么是 GATT 服务 UUID？',
    answer: 'GATT 服务 UUID 标识一组蓝牙低功耗功能，如电池服务、心率、设备信息或创客和 IoT 硬件使用的自定义厂商服务。',
  },
];

const howToData = [
  {
    name: '使用兼容的浏览器',
    text: '在 Chrome 或 Edge 中通过 HTTPS 或 localhost 打开工具，然后确保计算机或手机上已启用蓝牙。',
  },
  {
    name: '将硬件置于广播模式',
    text: '唤醒 BLE 设备，重新上电，按下配对按钮或打开其广播模式，使其出现在浏览器权限选择器中。',
  },
  {
    name: '扫描环境',
    text: '按下扫描环境并选择要检查的 BLE 设备。浏览器权限对话框精确控制哪个设备对页面可见。',
  },
  {
    name: '读取 GATT 服务',
    text: '连接后，查看服务 UUID 卡片以识别标准蓝牙配置文件、自定义固件服务以及设备是否公开了您期望的数据路径。',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '适用于 IoT、可穿戴设备和创客硬件的在线 BLE 测试器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此 Web Bluetooth 扫描器可让您测试附近的蓝牙低功耗设备是否可从浏览器发现，以及授予权限后公开了哪些 GATT 服务。在调试 ESP32 固件、Arduino BLE 草图、智能传感器、健身可穿戴设备、键盘、自定义信标、环境监测器和原型硬件时非常有用，无需先构建原生移动应用。',
    },
    {
      type: 'message',
      title: '隐私模型',
      html: '本网站不会存储 MAC 地址、设备 ID、名称、UUID、信号数据或扫描历史记录。浏览器权限选择器决定页面可以访问哪个单一设备，结果保留在当前浏览器会话中。',
    },
    {
      type: 'table',
      headers: ['您看到的内容', '含义', '下一步检查'],
      rows: [
        ['设备名称', '硬件广播的蓝牙名称（如果有）。', '如果为空，请检查固件广播数据或在测试期间使用已知的名称前缀。'],
        ['设备 ID', '浏览器范围的标识符，而非原始公共 MAC 地址。', '仅用于此浏览器会话；不要将其视为通用硬件序列号。'],
        ['GATT 服务 UUID', '接受连接后公开的服务组。', '将标准 UUID 与 Bluetooth SIG 列表或您的固件服务表进行对比。'],
        ['自定义服务', '厂商特定或项目特定的 UUID。', '打开您的固件、移动应用配置文件或 BLE 文档以映射特性和权限。'],
      ],
    },
    {
      type: 'title',
      text: '为什么浏览器蓝牙扫描有所不同',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '原生 BLE 扫描器应用通常显示来自许多附近设备的连续广播。Web Bluetooth 有意更加严格：页面必须在安全上下文中打开，扫描必须从用户点击启动，浏览器显示权限选择器。这保护用户免受静默跟踪，同时为开发人员提供了从 JavaScript 连接到选定 BLE 硬件的实用方式。',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetooth 扫描器',
          description: '最适合快速固件验证、演示、支持流程、课堂实验室和安装摩擦重要的基于浏览器的诊断。',
        },
        {
          title: '原生 BLE 应用',
          description: '更适合后台扫描、RSSI 记录、配对工作流、加密厂商协议、大型特性树和长期现场诊断。',
        },
      ],
    },
    {
      type: 'title',
      text: 'BLE 设备不出现的常见原因',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '蓝牙在操作系统级别已禁用，或浏览器没有蓝牙权限。',
        '设备已连接到其他手机、笔记本电脑、厂商应用或网关，并已停止广播。',
        '硬件仅在启动后或按下配对按钮后的短暂窗口期内广播。',
        '浏览器不基于 Chromium，页面未通过 HTTPS 提供，或平台阻止了 Web Bluetooth。',
        '固件广播制造商数据但隐藏了本地名称，因此选择器可能显示未命名设备。',
        '设备需要绑定、加密或专有身份验证，服务才能可读。',
      ],
    },
    {
      type: 'title',
      text: '调试期间如何使用 GATT UUID',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '服务 UUID 连接成功表示浏览器可以访问外设，并且外设至少公开了其 GATT 表的一部分。标准服务如电池服务、设备信息、心率、人机接口设备和环境感知很容易识别。自定义 UUID 通常指向固件特定功能，需要源代码或厂商文档中的特性映射。',
    },
    {
      type: 'table',
      headers: ['症状', '可能原因', '实用解决方案'],
      rows: [
        ['权限选择器为空', '设备未广播或缺少浏览器支持。', '重启设备，启用配对模式，靠近或在 Chrome/Edge 中重试。'],
        ['连接立即失败', '设备忙碌、超出范围或拒绝浏览器连接。', '断开厂商应用并将外设靠近计算机。'],
        ['未列出服务', 'GATT 不可用，服务被隐藏，或未授予这些 UUID 的访问权限。', '在固件测试中添加已知的可选服务，或使用原生 BLE 工具检查。'],
        ['仅出现自定义 UUID', '硬件使用厂商特定的固件服务。', '将 UUID 映射到源代码常量并记录特性的读/写权限。'],
      ],
    },
    {
      type: 'title',
      text: '安全与隐私限制',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '页面无法在后台静默收集附近的蓝牙设备。',
        '浏览器可能隐藏真实 MAC 地址，提供范围化的设备 ID。',
        '访问仅在用户点击扫描按钮并选择设备后才开始。',
        '结果不会被本网站上传或存储。',
        '敏感的商用设备可能需要加密或厂商配对流程，此通用扫描器无法绕过。',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth 不可用',
    unsupportedBody: '在桌面或 Android 上尝试 Chrome 或 Edge，启用蓝牙并通过 HTTPS 或 localhost 打开页面。',
    secureContext: 'Web Bluetooth 需要安全的 HTTPS 页面或 localhost。从安全来源重新加载工具并重试。',
    scanButton: '扫描环境',
    scanning: '扫描中',
    reconnect: '重新扫描',
    disconnect: '断开连接',
    privacyTitle: '设计即隐私',
    privacyBody: '本网站不会存储 MAC 地址、设备 ID、名称、UUID 或扫描历史记录。浏览器仅公开您选择的设备。',
    deviceLabel: '已选设备',
    nameFallback: '未命名 BLE 设备',
    idLabel: '浏览器设备 ID',
    servicesLabel: 'GATT 服务',
    noServices: '此连接未返回可读的主服务。',
    statusIdle: '准备扫描附近 BLE 硬件',
    statusPermission: '等待浏览器权限选择器',
    statusConnecting: '正在连接到选定的 BLE 设备',
    statusConnected: '已连接并加载服务',
    statusDisconnected: '设备已断开连接',
    statusCancelled: '未选择 BLE 设备，或此设备上蓝牙已关闭/不可用。',
    statusUnavailable: '此设备上蓝牙似乎已关闭、被阻止或不存在。启用蓝牙或从具有 BLE 适配器的硬件尝试。',
    statusError: '蓝牙扫描失败',
    signalUnknown: '信号强度由浏览器选择器控制',
    gattUnavailable: '此设备未向浏览器公开 GATT 服务器',
    customServiceName: '自定义或厂商特定服务',
    serviceGenericAccess: '通用访问',
    serviceGenericAttribute: '通用属性',
    serviceDeviceInformation: '设备信息',
    serviceHeartRate: '心率',
    serviceBattery: '电池服务',
    serviceHumanInterfaceDevice: '人机接口设备',
    serviceCyclingSpeedCadence: '骑行速度与踏频',
    serviceEnvironmentalSensing: '环境感知',
    serviceUserData: '用户数据',
    serviceFitnessMachine: '健身器材',
    uuidHelp: 'UUID 标识蓝牙服务。标准服务自动命名；厂商特定 UUID 需要您的固件或设备文档。',
    compatibilityHint: '在启用蓝牙的 Chromium 浏览器中效果最佳。Web Bluetooth 有意受权限限制，可能不会显示所有附近的广播者。',
    serviceCountSingular: '个服务',
    serviceCountPlural: '个服务',
  },
};
