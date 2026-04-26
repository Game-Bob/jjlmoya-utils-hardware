import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ToneGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tone-frequency-generator';
const title = '온라인 톤 및 주파수 생성기';
const description =
  '사인파, 사각파, 삼각파, 톱니파를 생성합니다. 20Hz에서 20kHz까지의 주파수로 스피커, 헤드폰 또는 서브우퍼를 테스트하세요.';

const faqData = [
  {
    question: '주파수 생성기는 무엇에 사용되나요?',
    answer:
      '스피커와 헤드폰의 주파수 응답 테스트, 가구의 원치 않는 공진 감지, 청력 범위의 빈틈 찾기, 또는 노치 요법(notch therapy)을 통한 이명 완화 등에 사용됩니다.',
  },
  {
    question: '사인파와 사각파의 차이는 무엇인가요?',
    answer:
      '사인파는 고조파가 없는 순수한 음(부드럽고 둥근 소리)입니다. 사각파는 홀수 고조파가 풍부하며 훨씬 더 공격적이거나 디지털적인 소리가 납니다. 삼각파는 그 중간 단계로 오디오 합성에 유용합니다.',
  },
  {
    question: '이 도구로 스피커를 손상시킬 수 있나요?',
    answer:
      '네, 극한의 주파수(특히 30Hz 미만의 저음 또는 15kHz 이상의 고음)에서 매우 높은 볼륨을 사용하면 손상될 수 있습니다. 항상 낮은 시스템 볼륨에서 시작하여 점진적으로 높이세요.',
  },
  {
    question: '인간의 가청 범위는 어떻게 되나요?',
    answer:
      '이론적으로는 20Hz에서 20,000Hz(20kHz) 사이입니다. 하지만 나이가 들면서 15kHz 이상의 음을 듣는 능력이 떨어지는 것은 정상입니다. 이 테스트는 개인의 가청 상한선을 확인하는 데 도움이 됩니다.',
  },
];

const howToData = [
  {
    name: '파형 유형 선택',
    text: '수행하려는 테스트 유형에 따라 사인파(순음), 사각파, 삼각파 또는 톱니파 중에서 선택하세요.',
  },
  {
    name: '주파수 조정',
    text: '슬라이더를 움직여 가청 스펙트럼을 탐색하세요. 60Hz, 440Hz 또는 1kHz 단축키를 사용하여 기준 주파수에 빠르게 액세스할 수 있습니다.',
  },
  {
    name: '볼륨 조절',
    text: '재생 버튼을 누르기 전에 스피커 볼륨이 낮은지 확인하세요. 도구에서 직접 게인(gain)을 조정할 수 있습니다.',
  },
  {
    name: '응답 분석',
    text: '소리가 왜곡되거나 들리지 않는 지점이 있는지 확인하세요. 이는 오디오 하드웨어의 물리적 한계를 나타냅니다.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<ToneGeneratorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: '주파수와 음파에 대한 모든 것', level: 2 },
    {
      type: 'paragraph',
      html: '소리는 움직이는 순수한 물리 현상입니다. 이 도구를 사용하면 가슴으로 느낄 수 있는 깊은 저음부터 동물만이 감지할 수 있는 초음파 고음까지 오디오 파형을 실시간으로 조작할 수 있습니다.',
    },
    { type: 'title', text: '인간 가청 범위와 노인성 난청', level: 3 },
    {
      type: 'paragraph',
      html: '건강한 사람의 귀는 <strong>20Hz에서 20kHz</strong> 사이의 소리를 감지합니다. 나이가 들면서 상한선이 낮아지며, 50세 이상의 성인 대부분은 12kHz 이상의 소리를 듣지 못합니다. "모스키토 음"으로 알려진 17.4kHz 톤은 일반적으로 청소년들만 통과할 수 있는 고전적인 테스트입니다.',
    },
    { type: 'title', text: '파형 유형 및 용도', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>사인파:</strong> 고조파가 없는 순음으로, 의료용 청력 테스트 및 악기 보정에 사용됩니다. <strong>사각파:</strong> 홀수 고조파가 풍부하며 레트로 8비트 게임기 같은 소리가 납니다. <strong>톱니파:</strong> 모든 고조파를 포함하며 전자 음악 신시사이저의 기초가 됩니다. <strong>삼각파:</strong> 사인파와 사각파의 중간 지점으로, 사각파보다 부드럽지만 사인파보다 풍부한 배음을 갖습니다.',
    },
    { type: 'title', text: '스피커 테스트 및 진동 청소', level: 3 },
    {
      type: 'paragraph',
      html: '최대 볼륨에서 사각파나 톱니파 형태의 저주파 음(일반적으로 <strong>165Hz</strong>)을 재생하면 스피커 진동판이 강하게 진동하여 그릴에 맺힌 물방울을 기계적으로 밀어냅니다. 매우 높은 주파수를 최대 볼륨으로 장시간 재생하지 마세요. 소리가 들리지 않더라도 그 에너지가 장비의 트위터를 손상시킬 수 있습니다.',
    },
  ],
  ui: {
    badge: '오디오 생성기',
    title: '톤 생성기',
    description: '오디오 테스트를 위한 순수 주파수를 생성합니다.',
    freqLabel: '주파수',
    preset60: '60Hz',
    preset440: '440Hz',
    preset1k: '1kHz',
    rangeMin: '20Hz (서브 저음)',
    rangeMax: '20kHz (초음파)',
    waveLabel: '파형',
    waveSine: '사인파',
    waveSquare: '사각파',
    waveSawtooth: '톱니파',
    waveTriangle: '삼각파',
    volLabel: '볼륨',
    btnPlay: '톤 재생',
    btnStop: '정지',
  },
};
