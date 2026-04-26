import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpectrumCanvasUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'color-accuracy-test';
const title = '색상 정확도 테스트 - Spectrum Canvas';
const description =
  '디스플레이를 정밀하게 교정하세요. sRGB 및 DCI-P3 색 영역을 테스트하고, 색상 편차를 감지하며, Delta E 지표로 정확도를 측정하고 전문적인 캘리브레이션 보고서를 생성합니다.';

const faqData = [
  {
    question: '색상 정확도란 무엇이며 왜 중요한가요?',
    answer:
      '색상 정확도는 디스플레이가 표준 참조와 비교하여 얼마나 충실하게 색상을 재현하는지를 측정합니다. 디자이너, 사진작가 및 콘텐츠 제작자에게 정확한 색상은 작업물이 다양한 기기에서 일관되게 보이도록 하는 데 필수적입니다.',
  },
  {
    question: 'sRGB와 DCI-P3의 차이점은 무엇인가요?',
    answer:
      'sRGB는 웹 및 일반 소비자용 디스플레이의 표준 색 공간입니다. DCI-P3는 디지털 시네마 및 전문가용 디스플레이에서 사용되는 더 넓은 색 영역입니다. DCI-P3는 sRGB보다 약 25% 더 많은 색상을 표현할 수 있습니다.',
  },
  {
    question: 'Delta E란 무엇이며 어떻게 측정되나요?',
    answer:
      'Delta E(ΔE)는 사람의 눈으로 인지되는 색상 차이를 수치화한 것입니다. Delta E가 1 미만이면 인지할 수 없고, 2 미만이면 매우 우수하며, 4 미만이면 허용 가능한 수준이고, 4를 초과하면 차이가 두드러집니다. 본 테스트는 CIE 1976 Delta E 계산법을 사용합니다.',
  },
  {
    question: '이 도구를 하드웨어 캘리브레이션에 사용할 수 있나요?',
    answer:
      '이 도구는 시각적 교정 참조 및 정확도 측정값을 제공합니다. 전문가 수준의 교정을 위해서는 이 결과값을 하드웨어 교정 도구(색채계) 및 ColorThink 또는 Datacolor SpyderCheckr와 같은 전용 소프트웨어와 병행하여 사용해야 합니다.',
  },
  {
    question: '어떤 색 공간이 테스트되나요?',
    answer:
      'sRGB(표준), DCI-P3(시네마) 및 표준 광원 D65(6500K)와 D93(9300K)에 대한 화이트 포인트 정확도를 테스트합니다. 또한 감마 보정 확인 기능도 포함되어 있습니다.',
  },
];

const howToData = [
  {
    name: '색 영역(Gamut) 선택',
    text: 'sRGB(표준 웹/소비자용) 또는 DCI-P3(전문 시네마용) 중에서 선택하세요. 디스플레이의 테스트 팔레트가 선택에 따라 전환됩니다.',
  },
  {
    name: '하드웨어 이름 입력(선택 사항)',
    text: '모니터 또는 기기의 식별 이름(예: "MacBook Pro 16 M1")을 입력하세요. 보고서가 개인화됩니다.',
  },
  {
    name: '전체 화면 모드 진입',
    text: 'F11 키 또는 전체 화면 버튼을 눌러 브라우저 UI를 숨기고 정확한 테스트를 위한 최대 표시 영역을 확보하세요.',
  },
  {
    name: '색상 테스트 진행',
    text: '스펙트럼 순도(단색), 그라데이션 다이내믹스(부드러운 계조), 블랙 크러시 감지(암부 디테일), 화이트 포인트 캘리브레이션 순으로 진행합니다.',
  },
  {
    name: '결과 확인 및 내보내기',
    text: '3D 색 영역 시각화, Delta E 지표 및 교정 권장 사항이 포함된 시각적 보고서를 생성합니다. 보관을 위해 PDF로 내보낼 수 있습니다.',
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

export const content: ToolLocaleContent<SpectrumCanvasUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    {
      type: 'title',
      text: '전문가용 색상 정확도 테스트: 디스플레이 정밀 교정',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas는 색상이 중요한 작업을 수행하는 모든 사용자를 위해 설계된 전문가급 색상 정확도 테스트 도구입니다. 사진작가, 디자이너, 콘텐츠 제작자 또는 하드웨어 마니아라면 이 도구를 통해 <strong>색상 편차를 진단</strong>하고, <strong>디스플레이 정확도를 측정</strong>하며, <strong>교정 보고서를 생성</strong>할 수 있습니다.',
    },
    {
      type: 'title',
      text: '색상 정확도가 중요한 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '색 재현율에서 단 1%의 차이가 "놀라운 결과"와 "어딘가 이상한 결과" 사이의 차이를 만들 수 있습니다. 전문가용 디스플레이는 <strong>Delta E &lt; 2</strong> 이내의 정확도를 제공합니다. 일반 소비자용 디스플레이는 종종 Delta E 4-6 이상으로 틀어져 다음과 같은 문제를 일으킵니다.',
    },
    {
      type: 'paragraph',
      html: '<ul><li>모니터에서는 생생해 보이던 사진이 인쇄물에서는 칙칙하게 보임</li><li>영상 편집 결과물이 클라이언트의 기대치와 일치하지 않음</li><li>웹 디자인 시안이 브랜드 가이드라인의 색상 규격과 맞지 않음</li><li>하드웨어 프로젝트에서 색상 표시등을 잘못 해석함</li></ul>',
    },
    {
      type: 'title',
      text: '색 공간 이해하기: sRGB vs DCI-P3',
      level: 3,
    },
    {
      type: 'title',
      text: 'sRGB (표준 색 공간)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '1996년 Microsoft와 HP가 제정한 sRGB는 <strong>가전제품 및 웹의 범용 표준</strong>입니다. 세 가지 기본 색상(빨강: 0.6400x 0.3300, 초록: 0.3000 0.6000, 파랑: 0.1500 0.0600)으로 정의된 삼각형 모양의 색 영역을 사용합니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>특징:</strong><ul><li>가시광선 스펙트럼의 약 35%를 커버</li><li>일반적인 실내 조명 환경에 최적화됨</li><li>감마: 2.2 (대부분의 소비자용 디스플레이와 일치)</li><li>적합한 용도: 웹, 소셜 미디어, 일반 사진</li></ul>',
    },
    {
      type: 'title',
      text: 'DCI-P3 (디지털 시네마 색 영역)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Digital Cinema Initiatives 컨소시엄에서 개발한 DCI-P3는 영화 투사 및 전문 디스플레이를 위해 설계된 <strong>시네마급 색 공간</strong>입니다. sRGB보다 약 25% 더 많은 색상을 포함합니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>특징:</strong><ul><li>가시광선 스펙트럼의 약 53%를 커버</li><li>어두운 영화관 환경에 최적화됨</li><li>감마: 2.6 (고대비에 맞춰 감마 보정됨)</li><li>적합한 용도: 영화 제작, 전문 사진, HDR 콘텐츠</li></ul>',
    },
    {
      type: 'title',
      text: 'Delta E란? 색상 차이 수치화',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Delta E(ΔE)는 CIE LAB 색 공간에서 <strong>사람이 인지할 수 있는 색상 차이 지표</strong>입니다. 디스플레이 출력이 표준 참조 색상에 얼마나 가까운지를 알려줍니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>Delta E 스케일 (CIE 1976):</strong><ul><li>0–1: 사람의 눈으로 인지할 수 없음</li><li>1–2: 간신히 인지할 수 있는 수준</li><li>2–4: 인지할 수 있으나 일반적인 용도로는 허용 가능</li><li>4–6: 두드러지는 색상 편차</li><li>&gt;6: 매우 명백한 차이</li></ul>',
    },
    {
      type: 'paragraph',
      html: '전문가용 디스플레이는 가시 영역 전체에서 <strong>Delta E &lt; 2</strong>를 유지하도록 교정됩니다. 일반 소비자용 디스플레이는 대개 Delta E 3-5 수준입니다.',
    },
    {
      type: 'title',
      text: 'Spectrum Canvas 테스트 제품군',
      level: 3,
    },
    {
      type: 'title',
      text: '스펙트럼 순도 테스트',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '순수한 기본 및 보조 색상(빨강, 초록, 파랑, 시안, 마젠타, 노랑)을 표시하고 모니터가 이를 어떻게 재현하는지 측정합니다. 색상 "플러딩" 애니메이션을 통해 화면 전체의 일관된 색상 재현력을 확인할 수 있습니다.',
    },
    {
      type: 'title',
      text: '그라데이션 다이내믹스',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '전체 색 공간을 전환하는 부드러운 그라데이션입니다. 부드러운 전환 대신 계단 현상이 보이는 <strong>밴딩 아티팩트</strong>가 있는지 확인하세요. 이는 색상 비트 깊이가 부족하거나 감마 보정이 잘못되었음을 나타냅니다.',
    },
    {
      type: 'title',
      text: '블랙 크러시 감지 (블랙 홀 테스트)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '거의 보이지 않는 블랙에 가까운 음영이 있는 순수 블랙(0,0,0) 배경입니다. 암부 디테일이 뭉쳐서(크러시) 보인다면 모니터가 어두운 톤의 정보를 잃고 있는 것입니다. 모바일 디스플레이와 저가형 패널에서 흔히 발생합니다.',
    },
    {
      type: 'title',
      text: '화이트 포인트 캘리브레이션',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '다양한 상관 색온도(D65: 6500K = 주광, D93: 9300K = 스튜디오)를 테스트하여 색온도 드리프트나 열적 불안정성을 찾아냅니다.',
    },
    {
      type: 'title',
      text: '결과 해석하기',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spectrum Canvas는 다음을 포함하여 인쇄에 적합한 아름다운 시각적 보고서를 생성합니다.',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>3D 색 영역 시각화:</strong> 디스플레이의 실제 색상 볼륨을 표준 참조와 비교하여 보여주는 회전 가능한 3D 플롯</li><li><strong>Delta E 히트맵:</strong> 스펙트럼의 어느 부분에서 색상이 틀어지는지 표시</li><li><strong>감마 곡선:</strong> 0–255 범위에서의 밝기 선형성 확인</li><li><strong>교정 점수:</strong> 종합적인 정확도를 바탕으로 부여되는 단일 "Spectrum Grade" (Elite, Cinematic, Studio, Standard)</li></ul>',
    },
    {
      type: 'title',
      text: '심화: 수동 교정 팁',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '결과에 편차가 있는 경우 모니터의 OSD(On-Screen Display) 메뉴에서 다음 설정을 조정해 보세요.',
    },
    {
      type: 'paragraph',
      html: '<ul><li><strong>색온도:</strong> 색상이 너무 차갑거나 파랗게 보이면 "따뜻하게(Warmer)"로, 너무 따뜻하거나 노랗게 보이면 "차가운(Cooler)" 쪽으로 이동합니다.</li><li><strong>명암(Contrast):</strong> 검은색이 들떠 보이면 올리고, 디테일이 뭉쳐 보이면 내립니다.</li><li><strong>밝기(Brightness):</strong> 밝기 50%에서 색조가 없는 중립적인 회색이 되도록 조정합니다.</li><li><strong>채도(Saturation):</strong> 색상이 과도하게 진하면 낮추고, 칙칙해 보이면 높입니다.</li></ul>',
    },
    {
      type: 'title',
      text: '제한 사항 및 권장 사항',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>본 도구는 시각적 및 통계적 참조 자료를 제공합니다.</strong> 인증된 교정이 필요한 전문 작업의 경우 하드웨어 색 측정기(분광 광도계 또는 색채계) 및 전용 교정 소프트웨어를 사용하십시오.',
    },
    {
      type: 'paragraph',
      html: '<strong>권장 사항:</strong><ul><li>테스트 전 30분 동안 모니터를 켜서 예열하십시오 (열적 드리프트 안정화).</li><li>일정한 주변 조명 환경에서 테스트하십시오.</li><li>빛 반사를 피하십시오. 가능한 경우 모니터 후드를 사용하십시오.</li><li>시간에 따른 변화를 추적하기 위해 매주 테스트를 반복하십시오.</li><li>나중에 비교할 수 있도록 보고서를 디지털 아카이브로 보관하십시오.</li></ul>',
    },
  ],
  ui: {
    badge: '디스플레이 교정',
    title: 'Spectrum Canvas - 색상 정확도 테스트',
    description:
      '전문적인 디스플레이 교정과 시네마틱 미학의 만남. sRGB 및 DCI-P3를 테스트하고, Delta E 정확도를 측정하며, 색상 편차를 감지하고 데이터를 인사이트로 바꿔주는 시각적 보고서를 생성합니다.',
    btnStartCalibration: '교정 시작',
    btnFullscreen: '전체 화면',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: '전체 화면 모드',
    kbdReset: 'R',
    kbdResetLabel: '테스트 초기화',
    kbdEsc: 'ESC',
    kbdEscLabel: '나가기',
    gamutSRGB: 'sRGB',
    gamutDCIP3: 'DCI-P3',
    gamutToggle: '색 공간',
    hardwareName: '하드웨어/모니터 이름',
    hardwareNamePlaceholder: '예: MacBook Pro 16" M1 Max',
    purityTest: '스펙트럼 순도',
    gradientTest: '그라데이션 다이내믹스',
    blackHoleTest: '블랙 크러시 감지',
    whitePointTest: '화이트 포인트 캘리브레이션',
    colorCheckpoint: '색상 체크포인트',
    generateReport: '보고서 생성',
    viewResults: '결과 보기',
    btnExit: '나가기 (ESC)',
    compareSideBySide: '나란히 비교',
  },
};
