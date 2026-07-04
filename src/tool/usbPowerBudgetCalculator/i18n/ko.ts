import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'usb-power-budget-calculator';
const title = 'USB 전력 예산 계산기';
const description = 'USB 포트, 충전기, 허브, 케이블 또는 USB-C PD 프로필이 여유분과 케이블 전압 강하 후에 장치를 안전하게 구동할 수 있는지 확인합니다.';

const faqData = [
  {
    question: 'USB 포트가 내 장치에 전력을 공급할 수 있는지 어떻게 알 수 있나요?',
    answer: '총 장치 와트를 USB 소스 와트와 비교한 다음, 여유분을 확보하고 케이블 전압 강하를 추정합니다. 케이블이 길거나 가늘거나 5V에서 높은 전류를 운반할 때 공칭 와트가 높게 보이더라도 설정이 실패할 수 있습니다.',
  },
  {
    question: 'USB 전원에 케이블 길이가 왜 중요한가요?',
    answer: '구리를 흐르는 전류는 전압 강하를 만듭니다. 긴 케이블과 가는 도체는 더 많은 저항을 가지므로 장치가 충전기가 제공하는 전압보다 낮은 전압을 받을 수 있습니다. 이는 Raspberry Pi 보드, 하드 드라이브, LED 스트립, 도크 및 버스 전원 허브에 특히 중요합니다.',
  },
  {
    question: '어떤 여유분을 사용해야 하나요?',
    answer: '일반 전자제품은 최소 20%, 모터, 드라이브, 라디오 또는 버스트 부하가 있는 보드는 30%를 사용하고, 어댑터 품질을 알 수 없거나 장치가 지속적으로 작동해야 하는 경우 더 많이 사용하세요.',
  },
  {
    question: '이것이 USB-C PD 협상 테스트를 대체할 수 있나요?',
    answer: '아니요. 계산기는 전기적 예산을 확인합니다. 충전기, 케이블 e-마커, 장치 또는 허브가 실제로 특정 Power Delivery 프로필을 협상하는지 확인하지 않습니다.',
  },
];

const howToData = [
  { name: '소스 프로필 선택', text: '일반적인 USB 또는 USB-C PD 프로필을 선택하거나 전압과 전류를 수동으로 편집합니다.' },
  { name: '케이블 설명', text: '케이블 길이와 도체 게이지를 입력합니다. 높은 AWG 번호의 가는 와이어는 더 많은 전압 강하를 유발합니다.' },
  { name: '부하 추가', text: '하나의 장치 부하를 와트로 입력하고 동일한 소스를 공유하는 장치 수를 입력합니다.' },
  { name: '상태 읽기', text: '상태, 케이블 강하, 최종 전압, 사용률, 여유분을 사용하여 설정이 안전한지 결정합니다.' },
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'USB 전력은 예산이지 라벨이 아닙니다', level: 2 },
    {
      type: 'paragraph',
      html: '15W, 45W 또는 100W로 표시된 USB 충전기는 적절한 조건에서 소스가 제공할 수 있는 것을 설명합니다. 장치는 프로토콜 협상, 전류 제한, 케이블 저항, 커넥터 품질, 허브 손실 및 부하 스파이크 이후의 결과만 볼 수 있습니다. 이 계산기는 실용적인 전기적 질문에 초점을 맞춥니다: 케이블 강하와 여유 마진 후, 실행하려는 하드웨어에 충분한 전력이 남아 있습니까?',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 기본 전류', value: '0.5 A' },
        { label: '5V에서 USB-C 기본 최대', value: '3 A' },
        { label: '권장 여유분', value: '20%+' },
      ],
    },
    { type: 'title', text: '결과 해석 방법', level: 3 },
    {
      type: 'table',
      headers: ['상태', '의미', '최선의 다음 단계'],
      rows: [
        ['안전', '선택한 여유분 후 부하가 소스 정격 내에 있고 추정 장치 전압이 건강하게 유지됩니다.', '설정을 사용하되 어댑터가 작거나 밀폐된 경우 열에 주의하세요.'],
        ['빡빡함', '부하가 여유분 제한에 가깝거나 케이블 강하가 의미 있게 되고 있습니다.', '케이블을 줄이거나, 더 굵은 도체를 선택하거나, 부하를 줄이거나, 더 높은 전력 프로필로 이동하세요.'],
        ['예산 초과', '부하가 사용 가능한 소스 전력을 초과하거나 장치 측 전압이 너무 낮을 가능성이 있습니다.', '더 강한 충전기, 전원 허브, 더 짧은 케이블 또는 더 높은 USB-C PD 전압을 협상하는 장치를 사용하세요.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '와트는 충분한데 장치가 계속 재설정되는 경우',
      html: '<p>시동 전류는 장치 라벨에 인쇄된 평균 와트보다 훨씬 높을 수 있습니다. 5V 전원은 동일한 와트에 대해 20V PD 프로필보다 더 빠르게 전압을 잃습니다. 더 많은 전류를 운반해야 하기 때문입니다. 많은 저가 케이블은 외부 재킷이 두꺼워 보여도 가는 전원 도체를 사용하며, 버스 전원 허브는 하나의 업스트림 예산을 모든 다운스트림 장치 간에 공유합니다.</p>',
    },
    { type: 'title', text: '케이블 전압 강하를 간단히 설명', level: 3 },
    {
      type: 'paragraph',
      html: '전압 강하는 전류가 케이블 저항을 통해 흐를 때 발생하는 손실입니다. USB 전원은 전력 경로에 두 개의 도체가 있으므로 계산기는 왕복 길이를 사용합니다. 1미터 케이블은 전력 루프에 대해 전기적으로 2미터의 구리입니다. 낮은 AWG 번호가 더 굵고 일반적으로 높은 전류 부하에 더 좋습니다.',
    },
    {
      type: 'comparative',
      items: [
        { title: '짧고 굵은 케이블', description: 'Raspberry Pi 보드, SSD 인클로저, 개발 키트 및 버스트 전류를 소비하는 USB-C 도크에 가장 적합합니다.' },
        { title: '길고 가는 케이블', description: '저전력 센서나 느린 충전에는 허용되지만, 드라이브, LED 부하 및 컴퓨트 보드에는 위험합니다.' },
        { title: '더 높은 전압 PD', description: '동일한 와트에 대해 전류를 줄여 케이블 손실을 낮추지만, 소스, 케이블 및 장치가 이를 협상하는 경우에만 해당됩니다.' },
      ],
    },
    {
      type: 'tip',
      title: '실용적인 규칙',
      html: '계산기가 설정이 빡빡하다고 표시하면 현장 경고로 취급하세요. USB 장애는 명확한 전원 문제로 보이기 전에 무작위 연결 끊김, 전압 저하, 느린 충전, 잡음이 있는 오디오 또는 저장 오류로 나타나는 경우가 많습니다.',
    },
    {
      type: 'summary',
      title: '이 계산기가 가장 적합한 용도',
      items: [
        'USB 허브, 단일 보드 컴퓨터, 외장 드라이브, 개발 보드, 조명, 팬 및 소규모 실험실 설정 계획.',
        'USB 2.0, USB 3.x, USB-C 및 USB Power Delivery 소스 프로필 비교.',
        '케이블이 부하에 비해 너무 길거나 가는지 추정.',
        '충전기나 전원 허브를 구매하기 전에 적절한 여유분 선택.',
      ],
    },
  ],
  ui: {
    profileLabel: 'USB 소스 프로필',
    metricUnits: '미터법',
    imperialUnits: 'US',
    voltageLabel: '소스 전압 (V)',
    currentLabel: '소스 전류 (A)',
    cableLengthLabel: '케이블 길이',
    wireGaugeLabel: '전원 와이어 게이지',
    deviceLoadLabel: '장치당 부하 (W)',
    devicesLabel: '장치',
    headroomLabel: '여유분 (%)',
    sourcePower: '소스 전력',
    requiredPower: '필요 전력',
    cableDrop: '케이블 강하',
    deviceVoltage: '장치 전압',
    headroom: '여유분',
    utilization: '사용률',
    safeStatus: '전력 예산이 안전해 보입니다',
    tightStatus: '전력 예산이 빡빡합니다',
    overStatus: '예산 초과 또는 전압 강하 위험',
    safeAdvice: '선택한 여유분으로 부하가 맞습니다. 품질 좋은 케이블을 사용하고 장시간 실행 시 열을 확인하세요.',
    tightAdvice: '한계에 가깝습니다. 케이블 길이를 줄이거나, 더 굵은 도체를 사용하거나, 부하를 낮추거나, 더 강한 프로필을 선택하세요.',
    overAdvice: '이 설정은 전압 저하 또는 스로틀링이 발생할 가능성이 높습니다. 전원 허브, 더 강한 어댑터 또는 더 높은 전압 USB-C PD 프로필을 사용하세요.',
    busLane: 'USB 소스',
    loadLane: '장치 부하',
    cableLane: '강하',
    boardEyebrow: '실시간 USB 전력 경로',
    sourceSocket: '공급 소켓',
    deviceSocket: '하드웨어 부하',
    energyFlow: '에너지 흐름',
    reservedLabel: '여유분 후 사용 가능',
  },
};
