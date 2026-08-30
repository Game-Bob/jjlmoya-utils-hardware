import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResistorColorCodeUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = "direnc-renk-kodu-hesaplayici";
const title = "Direnç renk kodu hesaplayıcı";
const description = "Bir direncin renk bantlarını çözümleyerek direnç değerini, toleransını, aralığını ve sıcaklık katsayısını hesaplayın. Hedef değerden geriye doğru çalışın veya SMD işaretlerini okuyun.";

const faqData = [{"question":"Direncin renk bantları nasıl okunur?","answer":"Genellikle biraz ayrı duran tolerans bandının karşı ucundan başlayın. İlk iki veya üç bant rakamları, sonraki bant çarpanı ve son bant toleransı gösterir."},{"question":"Dört bantlı direnç kodu ne anlama gelir?","answer":"İlk iki bant anlamlı rakamları, üçüncü bant çarpanı ve dördüncü bant toleransı gösterir."},{"question":"Üç bantlı direncin toleransı nedir?","answer":"Tolerans bandı yoksa üç bantlı kod genellikle artı veya eksi yüzde 20 olarak yorumlanır."},{"question":"Beş ve altı bant arasındaki fark nedir?","answer":"Beş bant üç rakam ve bir tolerans kullanır. Altıncı bant, santigrat derece başına ppm cinsinden sıcaklık katsayısını ekler."},{"question":"Araç SMD işaretlerini okuyabilir mi?","answer":"Evet. Üç veya dört rakamlı kodu ya da 4R7 gibi bir gösterimi girin. R harfi ondalık noktayı belirtir."},{"question":"Sonuç direncin güvenli olduğunu kanıtlar mı?","answer":"Hayır. Güç, çalışma gerilimi, sıcaklık aralığı, tolerans ve devre gereksinimlerini de kontrol edin."}];

const howToData = [{"name":"Bant sayısını seçin","text":"İncelediğiniz parçaya göre üç, dört, beş veya altı bant seçin."},{"name":"Her rengi seçin","text":"Bir bant konumunu etkinleştirin ve paletten rengini seçin. Çizim hemen güncellenir."},{"name":"Sonucu okuyun","text":"Ana değeri, toleransı, izin verilen aralığı ve varsa sıcaklık katsayısını kontrol edin."},{"name":"Yönü doğrulayın","text":"Mümkünse tolerans bandını sağda tutun ve sonucu şema veya veri sayfasıyla karşılaştırın."}];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: "tr",
};

export const content: ToolLocaleContent<ResistorColorCodeUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [{"type":"title","text":"Direnç renk kodu hesaplayıcı","level":2},{"type":"paragraph","html":"Üç, dört, beş ve altı bantlı dirençleri doğrudan tarayıcıda çözümleyin. Her renk anlamlı rakamlara, çarpana, toleransa, direnç aralığına ve sıcaklık katsayısına dönüştürülür."},{"type":"title","text":"Direnç renk kodu nasıl okunur","level":3},{"type":"paragraph","html":"Tolerans bandının karşı ucundan başlayın. İki veya üç bant rakamları, sonraki bant çarpanı ve tolerans bandı nominal değer çevresindeki değişimi gösterir."},{"type":"table","headers":["Bant sayısı","Anlamlı rakamlar","Ek işaret","Yaygın kullanım"],"rows":[["Üç bant","İki","Varsayılan yüzde 20 tolerans","Genel tanımlama"],["Dört bant","İki","Tolerans","Yaygın kablolu dirençler"],["Beş bant","Üç","Tolerans","Hassas dirençler"],["Altı bant","Üç","Tolerans ve sıcaklık katsayısı","Hassas devreler"]]},{"type":"title","text":"Hedef değerden kod üretme","level":3},{"type":"paragraph","html":"İstediğiniz direnç değerini biliyorsanız geriye doğru çalışma modunu kullanın. Araç, seçilen bant sayısıyla gösterilebilen bir değere yuvarlar ve renk sırasını gösterir."},{"type":"title","text":"SMD direnç işaretleri","level":3},{"type":"paragraph","html":"SMD dirençler çoğunlukla üç veya dört rakam kullanır. Son rakam ilk rakamlara uygulanacak onluk üssüdür. R ondalık noktayı değiştirir, bu yüzden 4R7 değeri 4,7 ohmdur."},{"type":"title","text":"Kurulumdan önce kontrol","level":2},{"type":"list","items":["Değeri şema veya servis belgeleriyle karşılaştırın.","Toleransı ve gücü veri sayfasından kontrol edin.","Okuma yönünü doğrulamak için tolerans bandının aralığını kullanın.","İşaret silik veya belirsizse parçayı devreden ayırıp ölçün.","Renk kodu elektriksel güvenliği kanıtlamaz."]},{"type":"tip","title":"Not","html":"Araç işareti tanımlar. Gerçek direnci, gücü, yalıtım gerilimini veya uzun süreli güvenilirliği ölçmez."}],
  ui: {"sceneKicker":"EIA renk spektrumu laboratuvarı","hint":"Bir banda dokunun ve renk seçin. Direnç hemen yanıt verir.","decodeMode":"Bantları çözümle","reverseMode":"Geriye doğru çalış","smdMode":"SMD çözümle","bandCount":"Bant sayısı","bandCount3":"3 bant","bandCount4":"4 bant","bandCount5":"5 bant","bandCount6":"6 bant","selectBand":"Bant seçin","colorPalette":"Renk paleti","bandLabel":"Bant","resistance":"Direnç","tolerance":"Tolerans","range":"İzin verilen aralık","temperatureCoefficient":"Sıcaklık katsayısı","noTempco":"Kodlanmamış","targetResistance":"Ohm cinsinden hedef direnç","targetHint":"4700 gibi bir sayı girin.","targetUnit":"ohm","toleranceChoice":"Hedef tolerans","tolerance20":"Yüzde 20","tolerance10":"Yüzde 10","tolerance5":"Yüzde 5","tolerance2":"Yüzde 2","tolerance1":"Yüzde 1","smdCode":"SMD işareti","smdHint":"4,7 kΩ için 472, 4,7 Ω için 4R7 kullanın.","decodeSmd":"İşareti çözümle","valueUnit":"Ω","ohms":"ohm","kiloohms":"kiloohm","megaohms":"megaohm","gigaohms":"gigaohm","minValue":"Minimum","maxValue":"Maksimum","actualValue":"Çözümlenen değer","requestedValue":"İstenen değer","status":"Durum","statusReady":"Okumaya hazır","statusCheck":"Gösterilebilen en yakın değer","statusInvalid":"Geçersiz kombinasyon","orientationNote":"Yön ipucu: biraz ayrı duran tolerans bandını sağda tutun. Altın ve gümüş anlamlı rakam bandı değildir.","reverseNote":"Geriye doğru mod, gösterilebilen bir değer seçer ve oluşan renk kodunu gösterir.","smdNote":"Bu kompakt görünüm SMD işaretini okur, ancak kodda olmayan bir tolerans üretmez.","colorBlack":"Siyah","colorBrown":"Kahverengi","colorRed":"Kırmızı","colorOrange":"Turuncu","colorYellow":"Sarı","colorGreen":"Yeşil","colorBlue":"Mavi","colorViolet":"Mor","colorGray":"Gri","colorWhite":"Beyaz","colorGold":"Altın","colorSilver":"Gümüş"},
};

