import { makeLocaleContent } from "../locale-content";

export const content = makeLocaleContent({
  slug: "pcb-iz-genisligi-empedans-hesaplayici",
  title: "PCB İz Genişliği ve Empedans Denetleyicisi",
  description:
    "Katman ve stackup geometrisine göre PCB izinin termal genişliğini, gerilim düşümünü, kaybını ve kontrollü empedans tahminini inceleyin.",
  ui: {
    metricLabel: "Metrik",
    imperialLabel: "İngiliz",
    steadyLabel: "Sürekli akım",
    pulseLabel: "Tekrarlı darbe",
    currentProfileTitle: "Akım profili",
    steadyCurrentLabel: "Sürekli akım",
    pulseCurrentLabel: "Darbe tepe akımı",
    pulseDurationLabel: "Darbe süresi",
    dutyCycleLabel: "Görev döngüsü",
    copperPathTitle: "Bakır yolu",
    layerLabel: "İz katmanı",
    externalLabel: "Dış",
    internalLabel: "İç",
    copperThicknessLabel: "Bakır kalınlığı",
    temperatureRiseLabel: "İzin verilen artış",
    lengthLabel: "İz uzunluğu",
    availableWidthLabel: "Kullanılabilir genişlik",
    signalGeometryTitle: "Sinyal geometrisi",
    targetImpedanceLabel: "Hedef empedans",
    dielectricHeightLabel: "Referans düzlemine dielektrik",
    dielectricConstantLabel: "Bağıl geçirgenlik",
    thermalWidthTitle: "Minimum termal genişlik",
    availableWidthTitle: "Termal genişlik sonrası alan",
    impedanceTitle: "Termal genişlikte empedans",
    voltageDropTitle: "Tepe akımında gerilim düşümü",
    powerLossTitle: "Bakır güç kaybı",
    pulseEnergyTitle: "Darbe başına enerji",
    statusEmpty: "Başlamak için iz koşullarını girin.",
    statusInvalid:
      "Pozitif değerler kullanın; sıcaklık artışını ve görev döngüsünü aralıkta tutun.",
    statusReady:
      "Üç denetim etkin: termal genişlik, elektrik kaybı ve empedans.",
    externalModel: "Dış katman microstrip kullanır",
    internalModel: "İç katman stripline kullanır",
    thermalBadge: "Termal uyum bekleniyor",
    impedanceBadge: "Empedans incelemesi bekleniyor",
    widthFits: "Kullanılabilir alana sığıyor",
    widthDoesNotFit: "Daha fazla yönlendirme alanı gerekiyor",
    impedanceClose: "%10 denetimi içinde",
    impedanceFar: "%10 denetimi dışında",
    resetLabel: "Sıfırla",
    presetTitle: "Yönlendirme örneği yükle",
    presetLogic: "2 A güç hattı",
    presetSignal: "50 ohm mantık izi",
    presetPulse: "8 A darbe yolu",
    sceneLabel:
      "İzin termal, kullanılabilir ve empedans genişliklerinin karşılaştırması",
    sceneCaption: "Yol koşullarını seçin, bakır kendini çizecek.",
    referenceLineLabel: "Empedans hedef genişliği",
    thermalLineLabel: "Termal minimum",
    availableLineLabel: "Kullanılabilir koridor",
    modelNote: "Katman, ısı atımını ve alan geometrisini değiştirir.",
  },
  seo: [
    {
      type: "title",
      text: "Yönlendirmeden önce bir PCB izini denetleyin",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Bir iz akımı taşıyacak kadar geniş olabilir ancak kontrollü empedanslı bir sinyal için yine de yanlış genişlikte kalabilir. Bu PCB iz genişliği hesaplayıcısı iki kararı birlikte görünür tutar: seçilen sıcaklık artışına göre bakırı boyutlandırır, elektriksel bedeli ölçer ve sinyal geometrisini ayrıca inceler.",
    },
    {
      type: "paragraph",
      html: "Yakındaki güç kaynağının değerini değil, yolun gerçekten taşıdığı akımı girin. 35 µm dış katman bakırında, 10 °C artışla sürekli 2 A yol için termal model küçük bir mantık izinden daha geniş iletken ister. Aynı genişlik üzerinden direnç, gerilim düşümü ve kayıp da değerlendirilebilir.",
    },
    {
      type: "title",
      text: "Termal boyutlandırma ve empedans farklı soruları yanıtlar",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Termal denetim I = k × ΔT^0.44 × A^0.725 ampirik ilişkisini kullanır; A bakır kesitinin kare mil cinsidir ve k dış ile iç katman arasında değişir. Darbe modunda araç, tekrarlı ısınma için RMS yaklaşımı olarak tepe akımını görev döngüsünün kareköküyle çarpar. Tek seferlik yükselme, via alanı veya ısı yayıcı düzlem modellenmez.",
    },
    {
      type: "list",
      items: [
        "Yalnızca folyonun nominal ağırlığını değil, üreticinin bitmiş bakır kalınlığını kullanın.",
        "Bileşenler veya yalıtım sıcaklığa duyarlıysa izin verilen en küçük artışı seçin.",
        "Negatif alan payını yönlendirme çakışması olarak değerlendirin.",
        "Empedans ve termal genişlik ayrılıyorsa ağın güç, sinyal veya iki ayrı tasarım amacı taşıyıp taşımadığını belirleyin.",
      ],
    },
    { type: "title", text: "İz sahnesi nasıl okunur", level: 3 },
    {
      type: "paragraph",
      html: "Dolu bakır bandı minimum termal genişliktir. Açık renkli bant yerleşimdeki kullanılabilir koridordur. Kesikli referans çizgisi, girilen stackup varsayımlarıyla hedef empedansı sağlayacak genişliği gösterir. Sonuç paneli termal genişlikteki empedansı da göstererek akım kararının sinyali hedefinden uzaklaştırıp uzaklaştırmadığını belirtir.",
    },
    { type: "title", text: "Üretimden önce doğrulanması gerekenler", level: 3 },
    {
      type: "paragraph",
      html: "Nominal empedans denklemi bitmiş dielektrik kalınlığını, reçine içeriğini, aşındırma profilini, lehim maskesini, komşu bakırı veya toleransları bilemez. IPC-2152 de iletken boyutunu kart yapısı ve ısı yayılımıyla ilişkilendirir. Bu sayfayı mühendislik görüşmesini hazırlamak için kullanın; ardından üretici stackup'ını, alan çözücüyü veya test kuponunu doğrulayın.",
    },
    {
      type: "tip",
      title: "Denetim sonucu üretim onayı değildir",
      html: "Termal kontrolü, gerilim düşümünü ve empedansı ayrı inceleme maddeleri olarak tutun. Bakır geometrisini onaylamadan önce viaları, daralmaları, düzlemleri, ortam sıcaklığını, darbe davranışını, yalıtım mesafelerini ve üretici toleranslarını doğrulayın.",
    },
  ],
  faqTitle: "PCB iz genişliği ve empedansı hakkında sorular",
  faq: [
    {
      question: "Ortalama akımı mı, tepe akımını mı girmeliyim?",
      answer:
        "Sürekli bir yol için sürekli akımı kullanın. Tekrarlı darbe modunda termal RMS yaklaşımı için tepeyi, süreyi ve görev döngüsünü girin. Tek seferlik ani akım geçici analiz gerektirir.",
    },
    {
      question: "İç katman izi neden daha fazla bakır ister?",
      answer:
        "Hızlı ampirik model, gömülü bakırın genellikle dış izden daha az ısı attığını varsayarak iç katmanlarda daha düşük bir katsayı kullanır. Gerçek kart yapısı sonucu değiştirebilir.",
    },
    {
      question: "Kullanılabilir genişlik nedir?",
      answer:
        "Yerleşimin bitmiş ize ayırabileceği koridoru girin. Negatif pay, minimum termal genişliğin koridoru aştığını ve daha fazla alan, bakır, paralel yol veya farklı bir sıcaklık hedefi gerektiğini gösterir.",
    },
    {
      question: "Bu araç gerçek 50 ohm PCB izi hesaplar mı?",
      answer:
        "Genişlik, bakır, dielektrik yüksekliği ve bağıl geçirgenlikten nominal microstrip veya stripline empedansını tahmin eder. Kontrollü empedans yayını öncesinde üretici son geometriyi ve toleransları doğrulamalıdır.",
    },
    {
      question: "Gerilim düşümü neden tepe akımıyla hesaplanıyor?",
      answer:
        "Darbe sırasındaki en kötü anlık I çarpı R düşümünü gösterir. Darbe enerjisi I²R çarpı süreyi, termal genişlik ise tekrarlı RMS yaklaşımını kullanır.",
    },
  ],
  bibliographyTitle: "PCB tasarım referansları",
  howTo: [
    {
      name: "Akım davranışını tanımlayın",
      text: "Sürekli akımı veya tekrarlı darbeyi seçip akım profilini doldurun.",
    },
    {
      name: "Bitmiş stackup varsayımlarını girin",
      text: "Katmanı seçin; bakır, sıcaklık artışı ve dielektrik geometrisini girin.",
    },
    {
      name: "Yönlendirme kararını verin",
      text: "Termal minimumu, kullanılabilir koridoru ve empedans hedefini karşılaştırın; ardından stackup'ı üreticiyle doğrulayın.",
    },
  ],
});
