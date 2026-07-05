import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'web-bluetooth-ble-scanner';
const title = 'Web Bluetooth BLE 스캐너';
const description = '브라우저에서 근처의 Bluetooth Low Energy 장치를 스캔하고, 노출된 GATT 서비스 UUID를 검사하며, IoT 또는 웨어러블 하드웨어가 검색 가능한지 테스트합니다.';

const faqData = [
  {
    question: '웹사이트가 허가 없이 Bluetooth 장치를 스캔할 수 있나요?',
    answer: '아니요. Web Bluetooth는 항상 사용자 제스처와 브라우저 권한 선택기가 필요합니다. 이 도구는 명시적으로 선택한 장치만 볼 수 있으며 MAC 주소, 장치 ID 또는 스캔 결과를 저장하지 않습니다.',
  },
  {
    question: '스캐너가 근처의 모든 BLE 장치를 표시하지 않는 이유는 무엇인가요?',
    answer: '브라우저는 의도적으로 Bluetooth를 권한 선택기를 통해 노출하며, 조용한 백그라운드 스캐너로 작동하지 않습니다. 일부 장치는 광고를 중지하거나, 이름을 숨기거나, 페어링을 요구하거나, 연결 후에만 서비스를 노출합니다.',
  },
  {
    question: '어떤 브라우저가 Web Bluetooth를 지원하나요?',
    answer: 'Web Bluetooth는 Chrome 및 Edge와 같은 Chromium 기반 데스크톱 브라우저에서 가장 잘 지원됩니다. 일반적으로 HTTPS 또는 localhost가 필요하며 많은 Firefox, Safari 및 iOS 브라우저 구성에서는 사용할 수 없습니다.',
  },
  {
    question: '웨어러블에서 개인 센서 데이터를 읽을 수 있나요?',
    answer: '장치가 호환 가능한 GATT 서비스를 노출하고 브라우저가 액세스를 허용하는 경우에만 가능합니다. 많은 상용 웨어러블은 일반 브라우저 스캐너가 디코딩할 수 없는 공급업체 앱, 암호화, 본딩 또는 독점 특성이 필요합니다.',
  },
  {
    question: 'GATT 서비스 UUID란 무엇인가요?',
    answer: 'GATT 서비스 UUID는 배터리 서비스, 심박수, 장치 정보 또는 메이커 및 IoT 하드웨어에서 사용하는 사용자 정의 공급업체 서비스와 같은 Bluetooth Low Energy 기능 그룹을 식별합니다.',
  },
];

const howToData = [
  {
    name: '호환 브라우저 사용',
    text: 'Chrome 또는 Edge에서 HTTPS 또는 localhost를 통해 도구를 열고 컴퓨터나 휴대폰에서 Bluetooth가 활성화되어 있는지 확인하세요.',
  },
  {
    name: '하드웨어를 광고 모드로 설정',
    text: 'BLE 장치를 깨우고, 전원을 껐다 켜거나, 페어링 버튼을 누르거나, 광고 모드를 열어 브라우저 권한 선택기에 나타나도록 하세요.',
  },
  {
    name: '환경 스캔',
    text: '환경 스캔을 누르고 검사할 BLE 장치를 선택하세요. 브라우저 권한 대화 상자가 페이지에 표시될 장치를 정확히 제어합니다.',
  },
  {
    name: 'GATT 서비스 읽기',
    text: '연결 후 서비스 UUID 카드를 검토하여 표준 Bluetooth 프로필, 사용자 정의 펌웨어 서비스 및 장치가 예상한 데이터 경로를 노출하는지 식별하세요.',
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
      text: 'IoT, 웨어러블 및 메이커 하드웨어용 온라인 BLE 테스터',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 Web Bluetooth 스캐너는 근처의 Bluetooth Low Energy 장치가 브라우저에서 검색 가능한지, 그리고 권한이 부여된 후 어떤 GATT 서비스를 노출하는지 테스트할 수 있습니다. ESP32 펌웨어, Arduino BLE 스케치, 스마트 센서, 피트니스 웨어러블, 키보드, 사용자 정의 비콘, 환경 모니터 및 네이티브 모바일 앱을 구축하기 전의 프로토타입 하드웨어를 디버깅할 때 유용합니다.',
    },
    {
      type: 'message',
      title: '개인정보 보호 모델',
      html: '이 웹사이트는 MAC 주소, 장치 ID, 이름, UUID, 신호 데이터 또는 스캔 기록을 저장하지 않습니다. 브라우저 권한 선택기가 페이지가 액세스할 수 있는 단일 장치를 결정하며, 결과는 현재 브라우저 세션에만 유지됩니다.',
    },
    {
      type: 'table',
      headers: ['표시 내용', '의미', '다음에 확인할 사항'],
      rows: [
        ['장치 이름', '하드웨어가 브로드캐스트하는 경우 광고된 Bluetooth 이름.', '비어 있으면 펌웨어 광고 데이터를 확인하거나 테스트 중에 알려진 이름 접두사를 사용하세요.'],
        ['장치 ID', '브라우저 범위 식별자로, 실제 공개 MAC 주소가 아닙니다.', '이 브라우저 세션에서만 사용하고 범용 하드웨어 일련 번호로 취급하지 마세요.'],
        ['GATT 서비스 UUID', '연결이 수락된 후 노출된 서비스 그룹.', '표준 UUID를 Bluetooth SIG 목록 또는 펌웨어 서비스 테이블과 비교하세요.'],
        ['사용자 정의 서비스', '공급업체별 또는 프로젝트별 UUID.', '펌웨어, 모바일 앱 프로필 또는 BLE 문서를 열어 특성 및 권한을 매핑하세요.'],
      ],
    },
    {
      type: 'title',
      text: '브라우저 Bluetooth 스캔이 다른 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '네이티브 BLE 스캐너 앱은 종종 근처의 많은 장치에서 지속적인 광고를 표시합니다. Web Bluetooth는 의도적으로 더 엄격합니다. 페이지는 보안 컨텍스트에서 열려야 하고, 스캔은 사용자 클릭에서 시작되어야 하며, 브라우저는 권한 선택기를 표시합니다. 이는 무음 추적으로부터 사용자를 보호하면서도 개발자에게 JavaScript에서 선택한 BLE 하드웨어에 연결할 수 있는 실용적인 방법을 제공합니다.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetooth 스캐너',
          description: '빠른 펌웨어 검증, 데모, 지원 흐름, 교실 실습 및 설치 마찰이 중요한 브라우저 기반 진단에 가장 적합합니다.',
        },
        {
          title: '네이티브 BLE 앱',
          description: '백그라운드 스캐닝, RSSI 로깅, 페어링 워크플로우, 암호화된 공급업체 프로토콜, 대규모 특성 트리 및 장기 현장 진단에 더 적합합니다.',
        },
      ],
    },
    {
      type: 'title',
      text: 'BLE 장치가 나타나지 않는 일반적인 이유',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth가 운영 체제 수준에서 비활성화되었거나 브라우저에 Bluetooth 권한이 없습니다.',
        '장치가 다른 휴대폰, 노트북, 공급업체 앱 또는 게이트웨이에 연결되어 광고를 중지했습니다.',
        '하드웨어가 부팅 후 또는 페어링 버튼을 누른 후 짧은 기간 동안만 광고합니다.',
        '브라우저가 Chromium 기반이 아니거나, 페이지가 HTTPS를 통해 제공되지 않거나, 플랫폼이 Web Bluetooth를 차단합니다.',
        '펌웨어가 제조업체 데이터를 광고하지만 로컬 이름을 숨겨 선택기에 이름 없는 장치가 표시될 수 있습니다.',
        '장치가 서비스를 읽을 수 있게 되기 전에 본딩, 암호화 또는 독점 인증이 필요합니다.',
      ],
    },
    {
      type: 'title',
      text: '디버깅 중 GATT UUID 사용 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '서비스 UUID와의 성공적인 연결은 브라우저가 주변 장치에 도달할 수 있고 주변 장치가 GATT 테이블의 적어도 일부를 노출함을 알려줍니다. 배터리 서비스, 장치 정보, 심박수, 휴먼 인터페이스 장치 및 환경 감지와 같은 표준 서비스는 쉽게 인식할 수 있습니다. 사용자 정의 UUID는 일반적으로 펌웨어별 기능을 가리키며 소스 코드 또는 공급업체 문서의 특성 맵이 필요합니다.',
    },
    {
      type: 'table',
      headers: ['증상', '가능한 원인', '실용적인 해결책'],
      rows: [
        ['권한 선택기가 비어 있음', '장치가 광고하지 않거나 브라우저 지원이 누락됨.', '장치를 재부팅하고, 페어링 모드를 활성화하고, 더 가까이 이동하거나 Chrome/Edge에서 다시 시도하세요.'],
        ['연결이 즉시 실패함', '장치가 사용 중이거나, 범위를 벗어났거나, 브라우저 연결을 거부함.', '공급업체 앱을 분리하고 주변 장치를 컴퓨터 가까이에 두세요.'],
        ['서비스가 나열되지 않음', 'GATT를 사용할 수 없거나, 서비스가 숨겨졌거나, 해당 UUID에 대한 액세스가 부여되지 않음.', '펌웨어 테스트에서 알려진 선택적 서비스를 추가하거나 네이티브 BLE 도구로 검사하세요.'],
        ['사용자 정의 UUID만 나타남', '하드웨어가 공급업체별 펌웨어 서비스를 사용함.', 'UUID를 소스 코드 상수에 매핑하고 특성 읽기/쓰기 권한을 문서화하세요.'],
      ],
    },
    {
      type: 'title',
      text: '보안 및 개인정보 보호 제한',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '페이지는 백그라운드에서 근처의 Bluetooth 장치를 조용히 수집할 수 없습니다.',
        '브라우저는 실제 MAC 주소를 숨기고 대신 범위가 지정된 장치 ID를 제공할 수 있습니다.',
        '사용자가 스캔 버튼을 클릭하고 장치를 선택한 후에만 액세스가 시작됩니다.',
        '결과는 이 웹사이트에 의해 업로드되거나 저장되지 않습니다.',
        '민감한 상용 장치는 이 일반 스캐너가 우회할 수 없는 암호화 또는 공급업체 페어링 흐름이 필요할 수 있습니다.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth를 사용할 수 없습니다',
    unsupportedBody: '데스크톱 또는 Android에서 Chrome 또는 Edge를 사용해 보고, Bluetooth를 활성화한 후 HTTPS 또는 localhost를 통해 페이지를 여세요.',
    secureContext: 'Web Bluetooth에는 보안 HTTPS 페이지 또는 localhost가 필요합니다. 보안 출처에서 도구를 다시 로드하고 다시 시도하세요.',
    scanButton: '환경 스캔',
    scanning: '스캔 중',
    reconnect: '다시 스캔',
    disconnect: '연결 해제',
    privacyTitle: '설계에 의한 개인정보 보호',
    privacyBody: '이 웹사이트는 MAC 주소, 장치 ID, 이름, UUID 또는 스캔 기록을 저장하지 않습니다. 브라우저는 선택한 장치만 노출합니다.',
    deviceLabel: '선택된 장치',
    nameFallback: '이름 없는 BLE 장치',
    idLabel: '브라우저 장치 ID',
    servicesLabel: 'GATT 서비스',
    noServices: '이 연결에 대해 읽을 수 있는 기본 서비스가 반환되지 않았습니다.',
    statusIdle: '근처 BLE 하드웨어를 스캔할 준비가 되었습니다',
    statusPermission: '브라우저 권한 선택기 대기 중',
    statusConnecting: '선택한 BLE 장치에 연결 중',
    statusConnected: '연결됨 및 서비스 로드됨',
    statusDisconnected: '장치 연결 해제됨',
    statusCancelled: 'BLE 장치가 선택되지 않았거나 이 장치에서 Bluetooth가 꺼져 있거나 사용할 수 없습니다.',
    statusUnavailable: '이 장치에서 Bluetooth가 꺼져 있거나, 차단되었거나, 없는 것 같습니다. Bluetooth를 활성화하거나 BLE 어댑터가 있는 하드웨어에서 시도하세요.',
    statusError: 'Bluetooth 스캔 실패',
    signalUnknown: '신호 강도는 브라우저 선택기에 의해 제어됩니다',
    gattUnavailable: '이 장치는 브라우저에 GATT 서버를 노출하지 않았습니다',
    customServiceName: '사용자 정의 또는 공급업체별 서비스',
    serviceGenericAccess: '일반 액세스',
    serviceGenericAttribute: '일반 속성',
    serviceDeviceInformation: '장치 정보',
    serviceHeartRate: '심박수',
    serviceBattery: '배터리 서비스',
    serviceHumanInterfaceDevice: '휴먼 인터페이스 장치',
    serviceCyclingSpeedCadence: '사이클링 속도 및 케이던스',
    serviceEnvironmentalSensing: '환경 감지',
    serviceUserData: '사용자 데이터',
    serviceFitnessMachine: '피트니스 머신',
    uuidHelp: 'UUID는 Bluetooth 서비스를 식별합니다. 표준 서비스는 자동으로 이름이 지정되며, 공급업체별 UUID는 펌웨어 또는 장치 문서가 필요합니다.',
    compatibilityHint: 'Bluetooth가 활성화된 Chromium 기반 브라우저에서 가장 잘 작동합니다. Web Bluetooth는 의도적으로 권한이 제한되어 있으며 근처의 모든 광고자를 표시하지 않을 수 있습니다.',
    serviceCountSingular: '서비스',
    serviceCountPlural: '서비스',
  },
};
