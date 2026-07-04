import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebUsbSerialMonitorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-usb-serial-monitor';
const title = 'WebUSB 시리얼 모니터';
const description = '브라우저에서 USB 시리얼 하드웨어에 연결하고, 실시간 터미널 출력을 읽고, 명령을 보내고, Arduino, ESP32, RP2040 및 메이커 보드를 데스크톱 터미널 설치 없이 디버깅하세요.';

const faqData = [
  {
    question: '이 시리얼 모니터는 Arduino, ESP32, Raspberry Pi Pico 보드에서 작동하나요?',
    answer: '네, 보드가 Web Serial에서 지원하는 USB 시리얼 인터페이스를 제공하고 브라우저가 Chromium 기반인 경우에 작동합니다. 일반적인 Arduino, ESP32, RP2040, CH340, CP210x 및 FTDI 어댑터는 사용자가 권한을 부여한 후에 보통 작동합니다.',
  },
  {
    question: 'Web Serial을 사용하는데 왜 WebUSB라고 부르나요?',
    answer: '대부분의 메이커 보드는 USB를 통해 연결되지만, 브라우저 터미널 접근은 Web Serial API에 의해 제공됩니다. WebUSB는 더 낮은 수준이며 간단한 UART 스타일 터미널에 적합한 추상화가 아닙니다.',
  },
  {
    question: '웹사이트가 허가 없이 내 시리얼 장치에 접근할 수 있나요?',
    answer: '아니요. 브라우저는 사이트가 시리얼 포트를 열기 전에 사용자 클릭과 네이티브 장치 선택기를 요구합니다. 이 도구는 터미널 로그나 장치 식별자를 저장하지 않습니다.',
  },
  {
    question: '웹 시리얼 터미널에 어떤 브라우저를 사용해야 하나요?',
    answer: 'HTTPS 또는 localhost에서 Chrome, Edge 또는 다른 Chromium 기반 브라우저를 사용하세요. Firefox, Safari 및 많은 iOS 브라우저는 Web Serial API를 제공하지 않습니다.',
  },
  {
    question: '어떤 보레이트를 선택해야 하나요?',
    answer: '펌웨어에 설정된 보레이트를 선택하세요. Arduino 예제는 종종 9600 또는 115200을 사용하며, 더 빠른 로그, 부트로더 및 고속 센서 스트림은 230400, 460800 또는 921600을 사용할 수 있습니다.',
  },
];

const howToData = [
  {
    name: 'USB 시리얼 장치 연결하기',
    text: '보드 또는 어댑터를 연결하고 이미 포트를 열고 있을 수 있는 다른 시리얼 터미널을 닫으세요.',
  },
  {
    name: '보레이트 선택하기',
    text: '많은 Arduino, ESP32 및 RP2040 스케치용 115200과 같이 펌웨어에서 사용하는 것과 동일한 보레이트를 선택하세요.',
  },
  {
    name: '브라우저 권한 부여하기',
    text: '연결을 누르고 브라우저 선택기에서 시리얼 장치를 선택한 다음 페이지가 포트를 열 수 있도록 허용하세요.',
  },
  {
    name: '터미널 데이터 읽기 및 보내기',
    text: '터미널에서 들어오는 로그를 관찰하고, 선택적 CRLF 줄 끝으로 명령을 보내고, 필요할 때 실시간 출력을 지우거나 일시 중지하세요.',
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
  inLanguage: 'ko',
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
      text: 'USB 메이커 하드웨어용 온라인 시리얼 모니터',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 브라우저 시리얼 모니터는 Chrome 또는 Edge에서 직접 USB 시리얼 포트를 열고 마이크로컨트롤러, USB UART 브릿지, 개발 보드, 부트로더, 테스트 장비, 센서 및 실험실 하드웨어에서 텍스트를 스트리밍합니다. 시리얼 콘솔이 필요하지만 데스크톱 IDE나 터미널 애플리케이션을 설치하고 싶지 않을 때 빠른 진단을 위해 설계되었습니다.',
    },
    {
      type: 'message',
      title: '브라우저 권한 경계',
      html: '페이지는 사용자의 시리얼 장치를 조용히 열거하거나 열 수 없습니다. 연결을 누르고 브라우저 선택기에서 포트를 선택한 후에만 접근이 시작됩니다. 터미널 데이터는 직접 복사하지 않는 한 현재 탭에 머무릅니다.',
    },
    {
      type: 'stats',
      items: [
        { value: '9600-921600', label: '일반 보레이트 프리셋' },
        { value: 'CRLF', label: '선택적 명령 종료' },
        { value: '로컬', label: '터미널 세션' },
      ],
    },
    {
      type: 'title',
      text: '웹 시리얼 터미널이 유용한 경우',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Arduino, ESP32, ESP8266, RP2040, STM32 또는 사용자 정의 펌웨어에서 부트 메시지 확인하기.',
        'USB UART 어댑터를 통해 모뎀, GPS, LoRa, Wi-Fi, Bluetooth 또는 셀룰러 모듈로 AT 명령 보내기.',
        '공장 테스트 지그, 교실 실험실, 로봇 컨트롤러 또는 벤치 프로토타입에서 센서 출력 읽기.',
        'USB 시리얼 브릿지 드라이버, 케이블, 보드 전원 및 펌웨어 보레이트가 모두 함께 작동하는지 확인하기.',
        '버그를 보고하거나 하드웨어 지원을 요청하기 전에 빠른 오류 로그 수집하기.',
      ],
    },
    {
      type: 'comparative',
      items: [
        {
          title: '웹 시리얼 모니터',
          description: '빠른 지원, 강의실 교육, 현장 진단 및 URL을 여는 것이 IDE를 설치하는 것보다 빠른 메이커 워크플로우에 가장 적합합니다.',
        },
        {
          title: '데스크톱 터미널',
          description: '바이너리 프로토콜, 긴 캡처 세션, 스크립팅, 하드웨어 흐름 제어, 매크로 및 브라우저 API가 차단된 환경에 더 적합합니다.',
        },
      ],
    },
    {
      type: 'title',
      text: '보레이트 및 줄 끝 체크리스트',
      level: 3,
    },
    {
      type: 'table',
      headers: ['설정', '일반적인 선택', '잘못되었을 때 발생하는 문제'],
      rows: [
        ['보레이트', '많은 최신 보드는 115200, 오래된 예제는 9600.', '읽을 수 있는 텍스트가 임의의 기호로 바뀌거나 유용한 로그가 나타나지 않음.'],
        ['줄 끝', '많은 명령 파서는 CRLF, 원시 문자 프로토콜은 종료 없음.', '펌웨어가 종료 문자를 기다리고 있어 명령이 무시됨.'],
        ['배타적 포트 접근', 'Arduino Serial Monitor, PuTTY, screen, minicom 또는 벤더 도구 닫기.', '브라우저 선택기가 포트를 열지만 읽기 또는 쓰기가 실패함.'],
        ['보안 컨텍스트', 'HTTPS 또는 localhost.', '지원되는 브라우저에서도 Serial API가 누락됨.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '시리얼 출력이 없나요?',
      html: '보드에 전원이 공급되고 USB 케이블이 충전만이 아닌 데이터를 지원하는지 확인하세요. 펌웨어 보레이트를 모르는 경우 9600, 57600, 115200을 시도하세요. 많은 보드가 시작 시에만 부트 로그를 출력하므로 연결 후 리셋을 누르세요. 여전히 시리얼 포트를 소유하고 있을 수 있는 다른 소프트웨어를 닫고, 장치가 나타나지 않으면 CH340, CP210x, FTDI 또는 보드 벤더용 운영 체제 드라이버를 설치하세요.',
    },
    {
      type: 'title',
      text: '개인정보 보호, 보안 및 제한 사항',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Web Serial의 강점과 제한 사항',
      items: [
        {
          pro: '기본적인 시리얼 텍스트 진단을 위해 데스크톱 설치가 필요 없음.',
          con: 'Chromium 기반 브라우저와 보안 컨텍스트가 필요함.',
        },
        {
          pro: '브라우저 선택기가 선택한 특정 포트로의 접근을 제한함.',
          con: '바이너리 프로토콜 분석기나 장시간 무인 캡처용으로 설계되지 않음.',
        },
        {
          pro: '텍스트 로그, 명령 프롬프트 및 빠른 하드웨어 점검에 잘 작동함.',
          con: '일부 기업 정책, 모바일 브라우저 및 운영 체제가 Web Serial을 차단함.',
        },
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Serial을 사용할 수 없습니다',
    unsupportedBody: 'HTTPS 또는 localhost에서 Chrome 또는 Edge를 사용하고 장치가 USB 시리얼 인터페이스를 제공하는지 확인하세요.',
    secureContext: 'Web Serial에는 HTTPS 또는 localhost가 필요합니다. 보안 출처에서 이 페이지를 다시 로드하고 다시 시도하세요.',
    statusIdle: '보레이트를 선택한 다음 USB 시리얼 장치를 연결하세요',
    statusPermission: '브라우저 시리얼 포트 선택기 대기 중',
    statusOpening: '시리얼 포트 여는 중',
    statusConnected: '시리얼 포트 연결됨',
    statusDisconnected: '시리얼 포트 연결 해제됨',
    statusError: '시리얼 연결 실패',
    connect: '시리얼 연결',
    disconnect: '연결 해제',
    send: '보내기',
    clear: '지우기',
    pause: '일시 중지',
    resume: '재개',
    baudRate: '보레이트',
    newline: 'CRLF 추가',
    inputPlaceholder: '명령을 입력하고 Enter를 누르세요',
    portFallback: '선택된 포트 없음',
    portLabel: '포트 식별',
    connectedDeviceLabel: '연결된 장치',
    deviceNameFallback: 'USB 시리얼 장치',
    transportLabel: 'Web Serial 링크',
    bytesLabel: '바이트',
    linesLabel: '줄',
    privacyTitle: '권한 제어',
    privacyBody: '브라우저는 선택한 시리얼 장치만 노출합니다. 로그는 복사하지 않는 한 이 탭에 머무릅니다.',
    emptyLog: '시리얼 장치를 연결하면 여기에 터미널 출력이 표시됩니다.',
    copied: '복사됨',
    copyLog: '복사',
    presetSlow: '9600',
    presetArduino: '115200',
    presetFast: '921600',
    terminalLabel: '실시간 터미널',
    unknownUsbId: 'N/A',
    logDirectionRx: 'rx',
    logDirectionTx: 'tx',
    logDirectionSys: 'sys',
    vidPrefix: 'VID ',
    pidSeparator: ' / PID ',
    baudUnit: ' baud',
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
