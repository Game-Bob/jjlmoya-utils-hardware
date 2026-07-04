import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-serial-monitor';
const title = 'WebUSB 串口监视器';
const description = '从浏览器连接 USB 串口硬件，读取实时终端输出，发送命令，无需安装桌面终端即可调试 Arduino、ESP32、RP2040 和创客板。';

const faqData = [
  {
    question: '这个串口监视器支持 Arduino、ESP32 和 Raspberry Pi Pico 板吗？',
    answer: '是的，当板卡提供 Web Serial 支持的 USB 串口接口，且浏览器基于 Chromium 时即可使用。常见的 Arduino、ESP32、RP2040、CH340、CP210x 和 FTDI 适配器在用户授予权限后通常可以正常工作。',
  },
  {
    question: '为什么使用 Web Serial 却叫 WebUSB？',
    answer: '大多数创客板通过 USB 连接，但浏览器终端访问由 Web Serial API 提供。WebUSB 是更低层的接口，不适合简单的 UART 风格终端。',
  },
  {
    question: '网站可以在未经许可的情况下访问我的串口设备吗？',
    answer: '不可以。浏览器要求用户点击并通过原生设备选择器选择设备后，网站才能打开串口。此工具不会存储终端日志或设备标识符。',
  },
  {
    question: '我应该使用哪个浏览器进行 Web 串口终端连接？',
    answer: '通过 HTTPS 或 localhost 使用 Chrome、Edge 或其他基于 Chromium 的浏览器。Firefox、Safari 和许多 iOS 浏览器不支持 Web Serial API。',
  },
  {
    question: '我应该选择哪个波特率？',
    answer: '选择固件中配置的波特率。Arduino 示例通常使用 9600 或 115200，而更快的日志、引导加载程序和高频传感器数据流可能使用 230400、460800 或 921600。',
  },
];

const howToData = [
  {
    name: '连接 USB 串口设备',
    text: '插入板卡或适配器，关闭可能已经占用该端口的其他串口终端。',
  },
  {
    name: '选择波特率',
    text: '选择与固件相同的波特率，例如许多 Arduino、ESP32 和 RP2040 示例使用 115200。',
  },
  {
    name: '授予浏览器权限',
    text: '点击连接，在浏览器选择器中选择串口设备，允许页面打开端口。',
  },
  {
    name: '读取和发送终端数据',
    text: '在终端中查看传入的日志，发送带有可选 CRLF 行尾的命令，并在需要时清除或暂停实时输出。',
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

export const content: ToolLocaleContent<WebUsbSerialMonitorUI> = {
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
      text: 'USB 创客硬件在线串口监视器',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此浏览器串口监视器直接从 Chrome 或 Edge 打开 USB 串口，然后从微控制器、USB UART 桥接器、开发板、引导加载程序、测试夹具、传感器和实验室硬件流式传输文本。专为需要串口控制台但不想安装桌面 IDE 或终端应用程序时的快速诊断而设计。',
    },
    {
      type: 'message',
      title: '浏览器权限边界',
      html: '页面无法静默枚举或打开您的串口设备。只有在您点击连接并在浏览器选择器中选择端口后，访问才会开始。终端数据保留在当前标签页中，除非您自行复制。',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: '常用波特率预设' },
        { value: 'CRLF', label: '可选命令结尾' },
        { value: '本地', label: '终端会话' },
      ],
    },
    {
      type: 'title',
      text: 'Web 串口终端的适用场景',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '检查 Arduino、ESP32、ESP8266、RP2040、STM32 或自定义固件的启动消息。',
        '通过 USB UART 适配器向调制解调器、GPS、LoRa、Wi-Fi、蓝牙或蜂窝模块发送 AT 命令。',
        '从工厂测试夹具、教室实验室、机器人控制器或台式原型读取传感器输出。',
        '验证 USB 串口桥接驱动程序、线缆、板卡电源和固件波特率是否协同工作。',
        '在提交错误报告或请求硬件支持之前收集快速错误日志。',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web 串口监视器',
          description: '最适合快速支持、课堂教学、现场诊断以及打开 URL 比安装 IDE 更快的创客工作流程。',
        },
        {
          title: '桌面终端',
          description: '更适合二进制协议、长时间捕获会话、脚本编写、硬件流控制、宏以及浏览器 API 被屏蔽的环境。',
        },
      ],
    },
    {
      type: 'title',
      text: '波特率和行尾检查清单',
      level: 3,
    },
    {
      type: 'table',
      headers: ['设置', '典型选择', '错误时会出现的问题'],
      rows: [
        ['波特率', '许多现代板卡为 115200，旧示例为 9600。', '可读文本变成随机符号，或没有有用的日志出现。'],
        ['行尾', '许多命令解析器使用 CRLF，原始字符协议无需结尾。', '命令被忽略，因为固件正在等待终止符。'],
        ['独占端口访问', '关闭 Arduino 串口监视器、PuTTY、screen、minicom 或厂商工具。', '浏览器选择器打开端口，但读取或写入失败。'],
        ['安全上下文', 'HTTPS 或 localhost。', '即使在受支持的浏览器中，串口 API 也缺失。'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '没有串口输出？',
      html: '确认板卡已通电且 USB 线缆支持数据传输而不仅仅是充电。如果不知道固件波特率，请尝试 9600、57600 和 115200。连接后按复位键，因为许多板卡仅在启动时输出启动日志。关闭可能仍占用串口的其他软件，如果设备始终不出现，请安装 CH340、CP210x、FTDI 或板卡厂商的操作系统驱动程序。',
    },
    {
      type: 'title',
      text: '隐私、安全和限制',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serial 的优势和限制',
      items: [
        {
          pro: '无需桌面安装即可进行基本串口文本诊断。',
          con: '需要基于 Chromium 的浏览器和安全上下文。',
        },
        {
          pro: '浏览器选择器限制仅访问您选择的特定端口。',
          con: '不适用于二进制协议分析器或长时间无人值守的捕获。',
        },
        {
          pro: '适用于文本日志、命令提示符和快速硬件检查。',
          con: '某些企业策略、移动浏览器和操作系统会阻止 Web Serial。',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial 不可用',
    unsupportedBody: '通过 HTTPS 或 localhost 使用 Chrome 或 Edge，并确保您的设备提供 USB 串口接口。',
    secureContext: 'Web Serial 需要 HTTPS 或 localhost。请从安全来源重新加载此页面并重试。',
    statusIdle: '选择波特率，然后连接 USB 串口设备',
    statusPermission: '等待浏览器串口选择器',
    statusOpening: '正在打开串口',
    statusConnected: '串口已连接',
    statusDisconnected: '串口已断开',
    statusError: '串口连接失败',
    connect: '连接串口',
    disconnect: '断开连接',
    send: '发送',
    clear: '清除',
    pause: '暂停',
    resume: '继续',
    baudRate: '波特率',
    newline: '追加 CRLF',
    inputPlaceholder: '输入命令，然后按回车键',
    portFallback: '未选择端口',
    portLabel: '端口标识',
    connectedDeviceLabel: '已连接设备',
    deviceNameFallback: 'USB 串口设备',
    transportLabel: 'Web Serial 链路',
    bytesLabel: '字节',
    linesLabel: '行',
    privacyTitle: '权限控制',
    privacyBody: '浏览器仅公开您选择的串口设备。日志保留在此标签页中，除非您自行复制。',
    emptyLog: '连接串口设备后，终端输出将显示在此处。',
    copied: '已复制',
    copyLog: '复制',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: '实时终端',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' 波特',
    vendorFtdi: 'FTDI USB Serial',
    vendorSilabs: 'Silicon Labs CP210x',
    vendorCh340: 'CH340 USB Serial',
    vendorArduinoUsb: 'Arduino USB Serial',
    vendorAdafruit: 'Adafruit USB Serial',
    vendorRp2040: 'Raspberry Pi RP2040',
    vendorEspressif: 'Espressif USB Serial',
    vendorOpenSource: 'Open Source USB Serial',
  },
};
