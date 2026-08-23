import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MicrophoneSpectrumTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'microphone-test-spectrum-analyzer';
const title = '마이크 테스트 및 실시간 스펙트럼 분석기';
const description = '웹 브라우저에서 마이크 입력, 실시간 음량 레벨, 클리핑(음왜곡), 실내 소음 및 주파수 응답을 안전하게 테스트하세요.';

const faq = [
  {
    question: '이 마이크 테스트는 제 음성을 녹음하거나 서버로 전송하나요?',
    answer: '아니요. 실시간 마이크 오디오 스트림은 브라우저 내부의 분석기에만 연결됩니다. 본 도구는 오디오 녹음 파일을 생성하지 않으며, 분석기를 오디오 출력으로 연결하거나 오디오 샘플을 서버로 업로드하지 않습니다.',
  },
  {
    question: '레벨 미터의 dBFS는 무엇을 의미하나요?',
    answer: 'dBFS는 디지털 풀스케일(Full Scale) 대비 데시벨 수치입니다. 0 dBFS가 디지털 표현의 최대 피크이므로 일반적인 측정값은 음수로 나타납니다. 이는 dB SPL로 측정된 보정된 음압 수치와는 다릅니다.',
  },
  {
    question: '마이크 음이 찢어지는지(클리핑) 어떻게 확인하나요?',
    answer: '평소 사용하는 가장 큰 목소리나 연주 크기로 말해보세요. 피크 수치가 0 dBFS 근처의 빨간색 클리핑 상태에 자주 도달하면 마이크 게인을 낮추거나, 거리를 두거나, 운영체제의 과도한 입력 처리 기능을 비활성화하세요.',
  },
  {
    question: '실내 소음 측정 기능은 무엇을 보여주나요?',
    answer: '3초 동안 주변이 조용한 상태에서 평균 디지털 RMS 소음 레벨을 측정합니다. 동일한 브라우저 및 공간 환경에서 설정을 비교하는 데 유용하지만, 자동 게인 제어(AGC) 및 노이즈 억제 기능으로 인해 결과가 달라질 수 있습니다.',
  },
  {
    question: '말할 때 주 주파수가 계속 바뀌는 이유는 무엇인가요?',
    answer: '사람의 음성은 변화하는 기본 주파수, 배음, 자음 및 잡음이 복합적으로 섞여 있습니다. 본 도구는 60 Hz에서 12 kHz 사이의 가장 강한 분석기 빈을 실시간으로 표시하므로 수치가 움직이는 것은 정상적인 동작입니다.',
  },
  {
    question: '이 스펙트럼 분석기로 마이크 성능이나 품질을 정밀 인증할 수 있나요?',
    answer: '아니요. 이는 브라우저 환경에서 입력 유무, 음량 레벨, 클리핑, 소음, 시각적 주파수 활동을 점검하는 실용적인 진단 도구입니다. 정밀한 주파수 응답이나 음압 인증에는 보정된 장비, 제어된 신호, 문서화된 측정 환경이 필요합니다.',
  },
];

const howTo = [
  {
    name: '마이크 접근 권한 허용',
    text: '마이크 시작 버튼을 누르고 브라우저의 접근 권한을 승인합니다. 처리 프로세스는 이 명시적인 작업 이후에만 시작됩니다.',
  },
  {
    name: '실제 작업 거리에서 발성하기',
    text: '평소 목소리 크기나 악기 레벨로 말하며 실시간 dBFS 수치, 피크 궤적, 스펙트럼의 움직임을 확인합니다.',
  },
  {
    name: '최대 예상 음량 상태 확인',
    text: '목소리를 높이거나 가장 큰 구절을 연주하세요. 선명하고 건강한 신호를 유지하면서 빨간색 클리핑 경고가 반복되지 않도록 조정합니다.',
  },
  {
    name: '실내 소음(룸 톤) 측정 및 캡처',
    text: '조용한 상태를 유지한 후 3초 측정 버튼을 누릅니다. 공간, 입력 장치, 게인 또는 처리 설정을 변경한 후 저장된 노이즈 플로어를 비교하세요.',
  },
];

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

export const content: ToolLocaleContent<MicrophoneSpectrumTesterUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '웹 브라우저에서 마이크 동작 및 음질을 테스트하는 방법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 마이크 테스트 도구는 별도의 앱을 설치하지 않고도 문제 해결에 필요한 질문들에 답합니다: 선택한 입력에서 신호가 발생하는가, 입력 레벨이 사용 가능한가, 음량이 커질 때 클리핑(음 왜곡)이 발생하는가, 실내 소음은 어떤가, 어떤 주파수가 활성화되어 있는가? 마이크 시작을 누르고 실제 작업 위치에서 발성하여 실시간 데이터를 확인하세요. 분석기는 현재 페이지에서 실행되며 오디오 파일을 생성하지 않습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '비공개 로컬 분석 처리',
      badge: '녹음 및 전송 없음',
      html: '<p>원시 오디오 입력은 민감한 정보이므로 브라우저가 마이크 접근 권한을 요청합니다. 본 도구는 해당 오디오 스트림을 로컬 분석기에만 연결합니다. 샘플을 외부 서버로 전송하지 않으며 마이크 중지를 누르면 모든 미디어 트랙이 즉시 중지됩니다.</p>',
    },
    {
      type: 'title',
      text: 'dBFS 단위의 마이크 레벨 읽기 및 평가',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '화면에 크게 표시되는 실시간 수치는 현재 시간 창의 에너지를 나타내는 RMS 추정치입니다. 피크는 해당 창에서 가장 큰 절대 샘플을 보여줍니다. 둘 다 디지털 풀스케일인 dBFS를 사용하며, 0이 디지털 최대 한계이고 조용한 신호일수록 더 큰 음수 수치를 가집니다. 발성 스타일, 마이크 종류, 프리아프 게인 및 대상 애플리케이션이 모두 중요하므로 상태 배지는 이 테스트를 위한 실용적인 가이드 역할을 합니다.',
    },
    {
      type: 'table',
      headers: ['측정 수치', '수치가 의미하는 상태', '권장 조치 및 확인사항'],
      rows: [
        ['무음 또는 -60 dBFS 미만', '선택한 입력 장치에서 유효한 테스트 신호가 감지되지 않습니다', '입력 장치 연결, 음소거 스위치, 브라우저 권한 및 OS 입력 레벨을 점검하세요'],
        ['소리 낮음 (-35 dBFS 미만)', '추가 게인 없이는 신호를 사용하기 어려울 수 있습니다', '피크를 모니터링하면서 마이크에 가까이 대거나 입력 게인을 올려보세요'],
        ['적정 및 건강한 레벨', '현재 신호가 적절한 레벨과 눈에 보이는 유효 헤드룸을 확보하고 있습니다', '예상되는 가장 큰 목소리나 연주 구절로 테스트를 반복하세요'],
        ['입력 높음 (-6 dBFS 피크 초과)', '남은 디지털 헤드룸이 다소 부족합니다', '큰 소리를 내기 전에 게인을 낮추거나 마이크와의 거리를 넓히세요'],
        ['클리핑 발생 (0 dBFS 근처)', '하나 이상의 샘플이 디지털 한계에 도달하여 음이 왜곡되었습니다', '게인을 줄이고 가장 큰 음량 부분의 테스트를 다시 수행하세요'],
      ],
    },
    {
      type: 'title',
      text: '실시간 마이크 주파수 스펙트럼 활용법',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '곡선 스펙트럼 디스플레이는 60 Hz에서 12 kHz까지의 분석기 빈을 로그 아크 상에 매핑하며, 발광 리본은 현재의 음파 형태를 실시간으로 보여줍니다. 이 디스플레이를 통해 저음, 중음, 고음역대의 반응이 브라우저에 정상적으로 전달되는지 시각적으로 검증할 수 있습니다. 주 주파수가 이동하는 것은 음성과 음악에서 지극히 정상입니다. 이 디스플레이는 동일한 마이크, 게인, 공간, 브라우저 및 거리를 유지한 상태에서 비교할 때 가장 유용합니다.',
    },
    {
      type: 'tip',
      title: '설정 변경은 한 번에 하나씩 비교 검증하세요',
      html: '실내 소음(룸 톤)을 먼저 캡처한 후 단 하나의 설정만 변경하고 동일한 위치에서 다시 캡처하세요. 운영체제의 노이즈 억제 및 자동 게인 제어(AGC) 기능은 음질을 변경하면서 마이크를 조용하게 만들 수 있으므로 visual 테스트를 확인하는 동시에 실제 애플리케이션에서도 직접 들어보는 것이 좋습니다.',
    },
    {
      type: 'title',
      text: '본 도구가 보정된 정밀 음압계가 아닌 이유',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '브라우저 샘플은 마이크, 오디오 인터페이스, 드라이버 및 자동 처리를 거친 후의 디지털 신호를 설명합니다.이는 마이크 캡슐에서의 실제 아쿠스틱 음압을 알려주지 않습니다. 그렇기 때문에 본 도구는 dB SPL 대신 dBFS를 보고하며 보정된 주파수 응답이나 자체 노이즈 규격을 보장하지 않습니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '공식 규격 검사에는 보정된 정밀 장비를 사용하세요',
      badge: '실용 진단 전용',
      html: '<p>본 도구를 통화, 스트리밍, 녹음 및 장치 선택 시의 문제 해결에 활용하세요. 측정 결과가 제품 규격 인증, 청각 안전, 법적 규제 또는 전문 음향 분석을 뒷받침해야 하는 경우 보정된 측정용 마이크와 정밀 장비를 사용해야 합니다.</p>',
    },
  ],
  ui: {
    journeyPermission: '1. 마이크 접근 허용',
    journeySpeak: '2. 편안하게 말하기',
    journeyInspect: '3. 레벨 및 스펙트럼 확인',
    startMicrophone: '마이크 시작',
    stopMicrophone: '마이크 중지',
    deviceLabel: '입력 장치',
    defaultDevice: '기본 마이크',
    statusIdle: '권한 대기 중',
    statusRequesting: '마이크 접근 권한 요청 중',
    statusLive: '실시간 측정 중',
    statusUnsupported: '이 브라우저에서는 마이크 접근이 지원되지 않습니다',
    statusDenied: '마이크 접근 권한이 거부되었습니다',
    statusError: '마이크를 시작할 수 없습니다',
    levelLabel: '실시간 레벨',
    peakLabel: '피크',
    frequencyLabel: '주 주파수',
    noiseFloorLabel: '실내 소음',
    captureNoise: '3초 소음 측정',
    capturingNoise: '실내 소음 측정 중입니다. 조용히 유지해 주세요',
    noiseCaptured: '실내 소음 측정 완료',
    roomToneHint: '현재 볼륨과 위치를 유지하고 3초 동안 조용히 해주세요.',
    unmeasured: '측정 안 됨',
    noSignalLevel: '신호 없음',
    noSignalPeak: '신호 없음',
    noSignalFrequency: '신호 없음',
    silentSignal: '유효한 신호 없음',
    quietSignal: '입력 소리 낮음',
    healthySignal: '적정 레벨',
    hotSignal: '입력 소리 높음',
    clippingSignal: '클리핑(음왜곡) 감지',
    dbfsUnit: 'dBFS',
    hzUnit: 'Hz',
    spectrumAriaLabel: '실시간 마이크 주파수 스펙트럼 및 파형',
    limitationTitle: '브라우저는 정밀 음압계가 아닙니다',
    limitationText: '표시 수치는 디지털 dBFS 수치입니다. 음성 데이터는 외부로 전송되지 않고 브라우저 내에서만 처리됩니다.',
  },
};
