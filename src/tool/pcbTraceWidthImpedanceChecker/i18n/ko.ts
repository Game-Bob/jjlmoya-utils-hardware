import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "pcb-trace-width-impedance-calculator",
  title: "PCB 트레이스 폭 및 임피던스 검사기",
  description:
    "레이어와 스택업 형상에 따라 PCB 트레이스의 열 폭, 전압 강하, 손실 및 제어 임피던스를 확인합니다.",
  ui: {
    metricLabel: "미터법",
    imperialLabel: "야드파운드법",
    steadyLabel: "연속 전류",
    pulseLabel: "반복 펄스",
    currentProfileTitle: "전류 프로필",
    steadyCurrentLabel: "연속 전류",
    pulseCurrentLabel: "펄스 피크 전류",
    pulseDurationLabel: "펄스 시간",
    dutyCycleLabel: "듀티 사이클",
    copperPathTitle: "구리 경로",
    layerLabel: "트레이스 레이어",
    externalLabel: "외층",
    internalLabel: "내층",
    copperThicknessLabel: "구리 두께",
    temperatureRiseLabel: "허용 온도 상승",
    lengthLabel: "트레이스 길이",
    availableWidthLabel: "사용 가능 폭",
    signalGeometryTitle: "신호 형상",
    targetImpedanceLabel: "목표 임피던스",
    dielectricHeightLabel: "기준면까지 유전체",
    dielectricConstantLabel: "상대 유전율",
    thermalWidthTitle: "최소 열 폭",
    availableWidthTitle: "열 폭 이후 여유",
    impedanceTitle: "열 폭에서의 임피던스",
    voltageDropTitle: "피크 전압 강하",
    powerLossTitle: "구리 전력 손실",
    pulseEnergyTitle: "펄스당 에너지",
    statusEmpty: "시작하려면 트레이스 조건을 입력하세요.",
    statusInvalid:
      "양수 값을 사용하고 온도 상승과 듀티 사이클을 범위 안에 두세요.",
    statusReady: "열 폭, 전기 손실, 임피던스 세 항목을 확인합니다.",
    externalModel: "외층은 마이크로스트립 모델 사용",
    internalModel: "내층은 스트립라인 모델 사용",
    thermalBadge: "열 적합성 확인 대기",
    impedanceBadge: "임피던스 검토 대기",
    widthFits: "사용 가능한 공간에 들어갑니다",
    widthDoesNotFit: "더 넓은 라우팅 공간이 필요합니다",
    impedanceClose: "10% 확인 범위 이내",
    impedanceFar: "10% 확인 범위 밖",
    resetLabel: "초기화",
    presetTitle: "라우팅 예시 불러오기",
    presetLogic: "2 A 전원 레일",
    presetSignal: "50 ohm 로직 트레이스",
    presetPulse: "8 A 펄스 경로",
    sceneLabel: "트레이스의 열 폭, 사용 가능 폭, 임피던스 폭 비교",
    sceneCaption: "경로 조건을 선택하면 구리 형상이 그려집니다.",
    referenceLineLabel: "임피던스 목표 폭",
    thermalLineLabel: "열 최소값",
    availableLineLabel: "사용 가능 영역",
    modelNote: "레이어는 열 방출과 전자기장 형상을 바꿉니다.",
  },
  seo: [
    { type: "title", text: "라우팅 전에 PCB 트레이스를 확인하세요", level: 2 },
    {
      type: "paragraph",
      html: "전류를 전달하기에는 충분히 넓어도 제어 임피던스 신호에는 맞지 않는 트레이스가 있습니다. 이 PCB 트레이스 폭 계산기는 허용 온도 상승에 맞춰 구리 폭을 정하고, 전기적 부담을 측정하며, 신호 형상을 별도로 점검합니다.",
    },
    {
      type: "paragraph",
      html: "가까운 전원 공급기의 정격이 아니라 실제 경로가 전달하는 전류를 입력하세요. 35 µm 외층 구리, 10 °C 상승, 연속 2 A 경로라면 열 모델은 작은 로직 트레이스보다 넓은 도체를 요구합니다. 같은 폭으로 저항, 전압 강하, 손실도 판단할 수 있습니다.",
    },
    {
      type: "title",
      text: "열 설계와 임피던스는 서로 다른 질문에 답합니다",
      level: 3,
    },
    {
      type: "paragraph",
      html: "열 검사는 I = k × ΔT^0.44 × A^0.725 경험식을 사용합니다. A는 제곱 mil 단위의 구리 단면적이고 k는 외층과 내층에서 달라집니다. 펄스 모드에서는 반복 발열의 RMS 근사로 피크 전류에 듀티 사이클의 제곱근을 곱합니다. 단일 서지, 비아 배열, 방열 플레인은 모델링하지 않습니다.",
    },
    {
      type: "list",
      items: [
        "공칭 포일 중량만 사용하지 말고 제조사의 완성 구리 두께를 사용하세요.",
        "부품이나 절연재가 열에 민감하면 허용 온도 상승을 가장 작게 설정하세요.",
        "음수 공간 여유는 가벼운 권고가 아니라 라우팅 충돌로 보세요.",
        "임피던스 폭과 열 폭이 다르면 전원 경로인지 신호 경로인지, 또는 설계 목적이 둘인지 확인하세요.",
      ],
    },
    { type: "title", text: "트레이스 장면 읽는 방법", level: 3 },
    {
      type: "paragraph",
      html: "실선 구리 띠는 최소 열 폭입니다. 밝은 띠는 레이아웃에서 사용할 수 있는 영역입니다. 점선 기준선은 입력한 스택업 가정에서 목표 임피던스를 만드는 폭을 보여 줍니다. 결과 패널은 열 폭에서의 임피던스도 표시하므로 전류 폭 선택이 신호를 목표에서 벗어나게 했는지 알 수 있습니다.",
    },
    { type: "title", text: "제조 전에 확인할 사항", level: 3 },
    {
      type: "paragraph",
      html: "공칭 임피던스 식은 완성된 유전체 두께, 수지 함량, 식각 프로파일, 솔더 마스크, 인접 구리, 허용오차를 알 수 없습니다. IPC-2152 역시 도체 치수가 보드 구조와 열 확산에 좌우됨을 보여 줍니다. 이 페이지로 설계 논의를 정리한 다음 제조사 스택업과 필드 솔버 또는 테스트 쿠폰으로 확인하세요.",
    },
    {
      type: "tip",
      title: "검사 결과는 제조 승인서가 아닙니다",
      html: "열, 전압 강하, 임피던스 검사를 별도의 검토 항목으로 남기세요. 비아, 폭이 좁아지는 부분, 플레인, 주변 온도, 펄스 열 거동, 절연 거리, 제조사 허용오차를 확인한 뒤 구리 형상을 확정하세요.",
    },
  ],
  faqTitle: "PCB 트레이스 폭 및 임피던스 질문",
  faq: [
    {
      question: "평균 전류와 피크 전류 중 무엇을 입력하나요?",
      answer:
        "연속 경로에는 연속 전류를 사용합니다. 반복 펄스에서는 피크, 시간, 듀티 사이클을 입력해 열 RMS 근사를 사용합니다. 한 번뿐인 돌입 전류에는 과도 검토가 필요합니다.",
    },
    {
      question: "왜 내층 트레이스에는 더 많은 구리가 필요한가요?",
      answer:
        "간단한 열 모델은 매립된 구리가 외층 트레이스보다 열을 덜 방출한다고 보고 내층 계수를 낮게 사용합니다. 실제 보드 구조에 따라 결과는 달라질 수 있습니다.",
    },
    {
      question: "사용 가능 폭은 무엇인가요?",
      answer:
        "완성 트레이스에 레이아웃이 할당할 수 있는 통로를 입력합니다. 음수 여유는 최소 열 폭이 통로보다 크다는 뜻이며 공간, 구리, 병렬 경로 또는 온도 목표를 조정해야 합니다.",
    },
    {
      question: "실제 50 ohm PCB 트레이스를 계산하나요?",
      answer:
        "폭, 구리 두께, 유전체 높이, 상대 유전율로 공칭 마이크로스트립 또는 스트립라인 임피던스를 추정합니다. 제어 임피던스로 출시하기 전에 제조사가 완성 형상과 허용오차를 확인해야 합니다.",
    },
    {
      question: "전압 강하는 왜 피크 전류로 계산하나요?",
      answer:
        "펄스에서 최악의 순간 I×R 강하를 보여 주기 위해서입니다. 펄스 에너지는 I²R×시간을 사용하고 열 폭은 반복 RMS 근사를 사용합니다.",
    },
  ],
  bibliographyTitle: "PCB 설계 참고 자료",
  howTo: [
    {
      name: "전류 동작 입력",
      text: "연속 전류 또는 반복 펄스를 선택하고 전류 프로필을 입력합니다.",
    },
    {
      name: "완성 스택업 가정 입력",
      text: "레이어, 구리 두께, 온도 상승, 유전체 형상을 지정합니다.",
    },
    {
      name: "라우팅 결정",
      text: "최소 열 폭, 사용 가능 영역, 임피던스 목표를 비교하고 제조사와 최종 스택업을 확인합니다.",
    },
  ],
});
