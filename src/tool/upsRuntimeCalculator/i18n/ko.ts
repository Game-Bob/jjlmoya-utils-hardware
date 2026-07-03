import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ups-runtime-calculator';
const title = 'UPS 런타임 계산기';
const description = 'UPS 배터리 런타임, 총 보호 부하, 사용 가능한 와트시, PC·모니터·라우터·NAS·홈랩 하드웨어에 권장되는 VA 용량을 계산합니다.';

const faqData = [
  {
    question: 'UPS 런타임은 어떻게 계산하나요?',
    answer: 'UPS에 연결된 각 기기의 와트 수를 합산하고, UPS 배터리 와트시에 인버터 효율을 곱한 후, 유지하려는 예비량을 빼고, 사용 가능한 와트시를 부하 와트로 나눕니다. 시간 단위 결과에 60을 곱하면 분 단위가 됩니다.',
  },
  {
    question: '실제 UPS 런타임이 추정치와 다른 이유는 무엇인가요?',
    answer: '런타임은 배터리 노후화, 온도, 방전율, 인버터 효율, 부하 급증, 제조사 차단 전압에 따라 달라집니다. 결과를 계획용 추정치로 간주하고, 제어된 종료 테스트로 검증하세요.',
  },
  {
    question: 'UPS를 와트와 VA 중 어느 기준으로 선택해야 하나요?',
    answer: '둘 다 확인하세요. 와트는 UPS가 공급할 수 있는 실제 전력을 나타내고, VA는 역률을 포함합니다. UPS는 부하를 와트 기준으로 초과해야 하며, 연결된 장비에 충분한 VA 여유가 있어야 합니다.',
  },
  {
    question: 'UPS 여유 용량은 얼마나 남겨둬야 하나요?',
    answer: '실용적인 목표는 정상 부하를 UPS 와트 정격의 약 70~80% 미만으로 유지하는 것입니다. 이렇게 하면 기동 전류 급증, 배터리 노후화, 향후 기기 추가를 위한 여유가 생깁니다.',
  },
  {
    question: '프린터나 히터를 UPS에 연결할 수 있나요?',
    answer: 'UPS가 명시적으로 지원하지 않는 한 레이저 프린터, 히터 및 기타 높은 돌입 전류 부하는 피하세요. 인버터에 과부하를 주고 런타임을 급격히 줄일 수 있습니다.',
  },
];

const howToData = [
  {
    name: '보호 대상 기기 나열',
    text: '정전 시 온라인 상태를 유지해야 하는 기기(컴퓨터, 모니터, 라우터, 모뎀, NAS, 네트워크 스위치 등)를 입력하세요.',
  },
  {
    name: '현실적인 와트 수 입력',
    text: '가능하면 벽면 콘센트에서 측정한 전력을 사용하세요. 전원 공급 장치 정격만 알고 있다면, 라벨의 최대값 대신 예상 작동 부하로 줄이세요.',
  },
  {
    name: '배터리 용량 및 가정 설정',
    text: 'UPS 배터리 와트시, 인버터 효율, 역률, 안전한 종료를 위해 유지할 예비 비율을 입력하세요.',
  },
  {
    name: '런타임 및 VA 권장값 확인',
    text: '추정된 시간(분)과 권장 VA를 구매 또는 구성 가이드로 사용하고, 안전한 정전 훈련으로 설정을 검증하세요.',
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
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
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
      text: 'UPS 런타임 계산기: 배터리 백업 시간 추정',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'UPS 런타임 추정은 정전 중에 하드웨어가 얼마나 오래 온라인 상태를 유지할 수 있는지, 그리고 UPS가 연결된 부하에 충분히 큰지에 대한 실용적인 답을 제공합니다. 이 계산기는 기기 와트 수, 배터리 와트시, 인버터 효율, 역률, 종료 예비율을 결합하여 단순한 배터리 용량 나눗셈보다 실제 계획에 가까운 결과를 제공합니다.',
    },
    {
      type: 'title',
      text: '런타임 공식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '예상 런타임(시간)은 <strong>사용 가능한 배터리 와트시를 총 부하 W로 나눈 값</strong>입니다. 사용 가능한 와트시는 표시된 배터리 용량이 아니라, 인버터 손실과 안전한 종료를 위해 유지할 예비량을 반영하여 조정해야 합니다. 예를 들어, 432Wh 배터리에 효율 86%, 예비율 20%인 경우 약 297Wh의 사용 가능한 에너지를 제공합니다.',
    },
    {
      type: 'table',
      headers: ['입력 항목', '중요한 이유', '실용적 가이드'],
      rows: [
        ['부하 와트', '런타임을 직접 제어합니다', '특히 게이밍 PC와 NAS 시스템의 경우 가능하면 벽면 콘센트 미터로 측정하세요.'],
        ['배터리 Wh', '에너지 총량을 결정합니다', '제조사 배터리 데이터 또는 정격 전압 × 암페어시를 사용하세요.'],
        ['효율', '인버터 손실을 반영합니다', '많은 소비자용 UPS 장치에 80~90%가 합리적인 계획 범위입니다.'],
        ['역률', '와트를 VA로 변환합니다', '알고 있다면 UPS 사양을 사용하고, 보급형 및 중급형 기기에서는 0.6~0.8이 일반적입니다.'],
        ['예비율', '종료 여유를 확보합니다', 'PC나 서버의 제어된 종료를 위해 10~25%가 적절합니다.'],
      ],
    },
    {
      type: 'title',
      text: '얼마나 많은 런타임이 필요하신가요?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5~10분: 짧은 깜빡임을 견디거나 데스크톱을 안전하게 종료하기에 충분합니다.',
        '10~20분: 라우터, 모뎀, NAS 장치, 소규모 홈랩 노드에 유용합니다.',
        '30분 이상: 네트워크 연속성, 원격 근무, 정전이 잦은 장소에 더 적합합니다.',
        '수 시간: 일반적으로 데스크톱 UPS가 아닌 더 큰 배터리 시스템이 필요합니다.',
      ],
    },
    {
      type: 'title',
      text: 'UPS 선택 시 와트 vs VA',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'UPS 제품명은 종종 VA를 강조하지만, 실제 장비에 대한 더 엄격한 제한은 와트 정격입니다. 900VA UPS가 540W만 지원할 수 있는 반면, 다른 900VA 모델은 600W 이상을 지원할 수 있습니다. 두 정격을 모두 확인하고, 과부하 경보, 배터리 수명 단축, 정전 시 전환 실패를 방지하기 위해 정상 작동을 최대치 미만으로 유지하세요.',
    },
    {
      type: 'title',
      text: '런타임 추정을 왜곡하는 부하',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '게이밍 PC는 유휴 시 낮은 소비에서 GPU 높은 소비로 몇 초 만에 전환될 수 있습니다.',
        '모니터는 밝기, HDR 모드, 패널 크기에 따라 크게 달라집니다.',
        'NAS 장치는 디스크 기동 및 재구축 중에 추가 전력을 소비합니다.',
        '레이저 프린터, 히터, 펌프, 압축기는 명시적으로 지원되지 않는 한 UPS에 부적합한 부하입니다.',
        '오래된 배터리는 원래 용량이 시사하는 것보다 훨씬 적은 런타임을 제공할 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '안전한 검증 체크리스트',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '테스트 전에 UPS를 완전히 충전하세요.',
        '열린 작업을 저장하고, 중요한 쓰기 작업이나 펌웨어 업데이트 중에는 테스트를 피하세요.',
        '장비가 아닌 벽 전원을 분리하고, UPS 부하 비율과 배터리 추정치를 관찰하세요.',
        '배터리가 소진되기 전에 PC, NAS 또는 서버가 종료 신호를 수신하는지 확인하세요.',
        '납축전지 UPS 배터리는 빠르게 노후화되므로 몇 달마다 테스트를 반복하세요.',
      ],
    },
  ],
  ui: {
    loadTitle: '보호 부하',
    addDevice: '장치 추가',
    deviceName: '장치',
    watts: '와트',
    remove: '장치 제거',
    batteryWh: '배터리 용량 (Wh)',
    efficiency: '인버터 효율',
    powerFactor: '역률',
    reserve: '종료 예비율',
    totalLoad: '총 부하',
    runtime: '예상 런타임',
    recommendedUps: '권장 크기',
    usableEnergy: '사용 가능 에너지',
    minutes: '분',
    hours: '시간',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'UPS 가정',
    presetDesktop: '데스크톱 PC',
    presetMonitor: '27인치 모니터',
    presetRouter: '라우터 및 모뎀',
    presetNas: '2베이 NAS',
    percentUnit: '%',
    bandLight: '여유로운 백업 시간, 권장 UPS 용량 약',
    bandBalanced: '균형 잡힌 백업 시간, 권장 UPS 용량 약',
    bandHeavy: '짧은 백업 시간；더 큰 배터리를 고려하거나 부하를 약',
    summaryPrefix: '이 구성은',
  },
};
