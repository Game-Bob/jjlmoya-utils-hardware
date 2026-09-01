import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "pcb-trace-width-impedance-calculator",
  title: "PCB配線幅とインピーダンスの確認ツール",
  description:
    "層構成と配線条件から、PCB配線の熱幅、電圧降下、損失、制御インピーダンスの目安を確認します。",
  ui: {
    metricLabel: "メートル法",
    imperialLabel: "ヤード・ポンド法",
    steadyLabel: "連続電流",
    pulseLabel: "繰り返しパルス",
    currentProfileTitle: "電流プロファイル",
    steadyCurrentLabel: "連続電流",
    pulseCurrentLabel: "パルスピーク電流",
    pulseDurationLabel: "パルス時間",
    dutyCycleLabel: "デューティ比",
    copperPathTitle: "銅配線",
    layerLabel: "配線層",
    externalLabel: "外層",
    internalLabel: "内層",
    copperThicknessLabel: "銅厚",
    temperatureRiseLabel: "許容温度上昇",
    lengthLabel: "配線長",
    availableWidthLabel: "使用可能幅",
    signalGeometryTitle: "信号ジオメトリ",
    targetImpedanceLabel: "目標インピーダンス",
    dielectricHeightLabel: "基準面までの誘電体",
    dielectricConstantLabel: "比誘電率",
    thermalWidthTitle: "熱的な最小幅",
    availableWidthTitle: "熱幅後の余裕",
    impedanceTitle: "熱幅でのインピーダンス",
    voltageDropTitle: "ピーク時の電圧降下",
    powerLossTitle: "銅の電力損失",
    pulseEnergyTitle: "1パルスのエネルギー",
    statusEmpty: "配線条件を入力してください。",
    statusInvalid:
      "正の値を使い、温度上昇とデューティ比を範囲内にしてください。",
    statusReady: "熱幅、電気損失、インピーダンスの3項目を確認できます。",
    externalModel: "外層はマイクロストリップモデル",
    internalModel: "内層はストリップラインモデル",
    thermalBadge: "熱条件を確認中",
    impedanceBadge: "インピーダンスを確認中",
    widthFits: "使用可能な幅に収まります",
    widthDoesNotFit: "より広い配線領域が必要です",
    impedanceClose: "10%の確認範囲内",
    impedanceFar: "10%の確認範囲外",
    resetLabel: "リセット",
    presetTitle: "配線例を読み込む",
    presetLogic: "2 A電源レール",
    presetSignal: "50 ohmロジック配線",
    presetPulse: "8 Aパルス経路",
    sceneLabel: "熱幅、使用可能幅、インピーダンス幅の比較",
    sceneCaption: "配線条件を選ぶと銅配線が表示されます。",
    referenceLineLabel: "インピーダンス目標幅",
    thermalLineLabel: "熱的最小幅",
    availableLineLabel: "使用可能な領域",
    modelNote: "層によって放熱と電界の形状が変わります。",
  },
  seo: [
    { type: "title", text: "配線前にPCBの配線幅を確認する", level: 2 },
    {
      type: "paragraph",
      html: "電流を流すには十分な幅でも、制御インピーダンス信号には不適切な配線幅になることがあります。このPCB配線幅計算ツールは、許容温度上昇から銅幅を求め、電気的な負担を測り、信号ジオメトリを別に確認します。",
    },
    {
      type: "paragraph",
      html: "近くの電源の定格ではなく、配線が実際に運ぶ電流を入力してください。35 µmの外層銅、温度上昇10 °C、連続2 Aの例では、小さなロジック配線より広い導体が熱モデルから求まります。同じ幅から抵抗、電圧降下、損失も判断できます。",
    },
    {
      type: "title",
      text: "熱設計とインピーダンスは別の問いに答える",
      level: 3,
    },
    {
      type: "paragraph",
      html: "熱の確認には I = k × ΔT^0.44 × A^0.725 の経験式を使います。Aは平方milの銅断面積で、kは外層と内層で異なります。パルスモードでは、繰り返し発熱のRMS近似としてピーク電流にデューティ比の平方根を掛けます。単発サージ、ビア配列、放熱プレーンはモデル化しません。",
    },
    {
      type: "list",
      items: [
        "公称の箔重量だけでなく、メーカーの仕上がり銅厚を使う。",
        "部品や絶縁材が温度に敏感なら、許容温度上昇を最小にする。",
        "余裕が負なら、単なる注意ではなく配線上の衝突として扱う。",
        "インピーダンス幅と熱幅が違う場合、電源配線、信号配線、または異なる設計目的かを確認する。",
      ],
    },
    { type: "title", text: "配線シーンの読み方", level: 3 },
    {
      type: "paragraph",
      html: "実線の銅帯は熱的な最小幅です。淡い帯はレイアウトで使える領域です。破線は入力した層構成で目標インピーダンスになる幅を示します。結果欄には熱幅でのインピーダンスも表示され、電流向けの幅が信号を目標から離したか分かります。",
    },
    { type: "title", text: "製造前に確認すること", level: 3 },
    {
      type: "paragraph",
      html: "公称インピーダンス式は、完成後の誘電体厚、樹脂量、エッチング形状、ソルダーマスク、隣接銅、許容差を知りません。IPC-2152も導体寸法が基板構造と熱拡散に依存することを示しています。このページで検討を整理し、メーカーの層構成、電磁界ソルバー、またはテストクーポンで確認してください。",
    },
    {
      type: "tip",
      title: "この結果は製造承認ではありません",
      html: "熱、電圧降下、インピーダンスを別々の確認項目として残してください。ビア、細くなる部分、プレーン、周囲温度、パルス熱、絶縁距離、メーカーの許容差を確認してから銅形状を確定します。",
    },
  ],
  faqTitle: "PCB配線幅とインピーダンスに関する質問",
  faq: [
    {
      question: "平均電流とピーク電流のどちらを入力しますか？",
      answer:
        "連続配線には連続電流を使います。繰り返しパルスではピーク電流、時間、デューティ比を入力し、熱のRMS近似を使います。1回だけの突入電流には過渡解析が必要です。",
    },
    {
      question: "なぜ内層配線には多くの銅が必要ですか？",
      answer:
        "簡易熱モデルでは、埋め込まれた銅は外層配線より熱を逃がしにくいとして、内層の係数を低くしています。実際の基板構造によって結果は変わります。",
    },
    {
      question: "使用可能幅とは何ですか？",
      answer:
        "完成した配線にレイアウトが割り当てられる領域を入力します。負の余裕は熱的最小幅が領域を超えることを示し、幅、銅厚、並列配線、温度目標の見直しが必要です。",
    },
    {
      question: "本当に50 ohmのPCB配線を計算できますか？",
      answer:
        "幅、銅厚、誘電体高さ、比誘電率から公称マイクロストリップまたはストリップラインのインピーダンスを推定します。制御インピーダンスとして解放する前にメーカーの確認が必要です。",
    },
    {
      question: "なぜ電圧降下をピーク電流で計算しますか？",
      answer:
        "パルス中の最悪の瞬時 I×R 降下を示すためです。パルスエネルギーは I²R×時間、熱幅は繰り返しRMS近似を使います。",
    },
  ],
  bibliographyTitle: "PCB設計の参考資料",
  howTo: [
    {
      name: "電流の動作を入力",
      text: "連続電流または繰り返しパルスを選び、電流プロファイルを入力します。",
    },
    {
      name: "完成後の層構成を入力",
      text: "層、銅厚、温度上昇、誘電体ジオメトリを指定します。",
    },
    {
      name: "配線を判断",
      text: "熱的最小幅、使用可能領域、インピーダンス目標を比較し、最終層構成をメーカーに確認します。",
    },
  ],
});
