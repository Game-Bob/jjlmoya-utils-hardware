import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Pil kapasitesi', capacityUnit: 'mAh', capacityHint: 'Telefonun teknik özelliklerindeki değeri kullanın.',
  currentLabel: 'Mevcut şarj', targetLabel: 'Hedef şarj', percentUnit: '%', powerLabel: 'Şarj cihazı gücü', powerUnit: 'W',
  efficiencyLabel: 'Tahmini verimlilik', efficiencyUnit: '%', efficiencyHint: 'Dönüşüm ve ısı kayıplarını içerir.',
  statusEmpty: 'Telefon ve şarj cihazı bilgilerini girin.', statusReady: 'Siz yazdıkça güncellenir.', statusError: 'İşaretli değeri kontrol edin.',
  resultTitle: 'Hedefe kadar tahmini süre', energyLabel: 'Gereken enerji', energyUnit: 'Wh', fromCurrentCharge: 'mevcut şarjdan itibaren', startNowLabel: 'Şimdi başlarsanız ulaşır',
  scenarioTitle: 'Referans şarj cihazı senaryoları', scenarioAt: 'aynı telefon ve şarj aralığı', assumptionsTitle: 'Varsayımlar',
  assumptionsText: '{voltage} V nominal pil gerilimi, {efficiency}% verimlilik ve %70 üzerindeki hedefler için yaklaşık {taper}% ek yavaşlama kullanılır. Telefonunuz farklı şarj olabilir.',
  errorCapacity: 'Sıfırdan büyük bir pil kapasitesi girin.', errorCurrent: 'Mevcut şarj 0 ile 100% arasında olmalıdır.', errorTarget: 'Hedef şarj 1 ile 100% arasında olmalıdır.',
  errorTargetOrder: 'Hedef şarj mevcut şarjdan yüksek olmalıdır.', errorPower: 'Sıfırdan büyük bir güç girin.', errorEfficiency: 'Verimlilik %50 ile %100 arasında olmalıdır.',
  targetMarker: 'hedef', chargeProgressLabel: 'Şarj aralığı', hourUnit: 'sa', minuteUnit: 'dk',
};

const faq = [
  { question: 'Şarj süresini yalnızca pil yüzdesiyle hesaplayabilir miyim?', answer: 'Hayır. Aynı yüzde küçük ve büyük pillerde farklı miktarda enerji anlamına gelir. Hesaplama için kapasite, telefona ulaşan güç ve verimlilik tahmini de gerekir.' },
  { question: 'Telefonum neden bazen tahminden daha uzun sürede şarj oluyor?', answer: 'Telefon yüksek pil seviyesinde, sıcaklık arttığında, kablo veya şarj protokolü sınırladığında ya da kullanım sırasında gücü azaltabilir. Sonuç canlı ölçüm değil, planlama tahminidir.' },
  { question: 'Şarj cihazının gücünü mü yoksa telefonun aldığı gücü mü girmeliyim?', answer: 'Biliyorsanız telefona ulaşması beklenen gücü girin. Yalnızca şarj cihazının üzerindeki değeri biliyorsanız bunu üst sınır olarak kullanın ve gerçek sürenin daha uzun olabileceğini varsayın.' },
];

const howTo = [
  { name: 'Pil kapasitesini girin', text: 'Telefonun teknik özelliklerindeki pil kapasitesini bulun ve mAh olarak girin. Gerilim ve dönüşüm kayıpları farklı olduğu için powerbank kapasitesini kullanmayın.' },
  { name: 'Şarj aralığını belirleyin', text: 'Mevcut ve ulaşmak istediğiniz pil yüzdesini girin. %20\'den %50\'ye kısa bir şarj, tam şarjdan farklı sonuç verir.' },
  { name: 'Güç ve verimliliği ekleyin', text: 'Gücü watt cinsinden veya biliyorsanız telefonun gerçekten kabul ettiği şarj gücü olarak girin. Kendi ölçümünüz yoksa varsayılan verimliliği koruyun.' },
  { name: 'Senaryoları karşılaştırın', text: 'Şarj cihazının elinizdeki süre için yeterli olup olmadığını görmek üzere sonucu 5 W, 15 W ve 30 W referanslarıyla karşılaştırın.' },
];

const seo = [
  { type: 'title' as const, text: 'Telefon şarj süresini hesaplayın', level: 2 as const },
  { type: 'paragraph' as const, html: 'Bu telefon şarj süresi hesaplayıcısını, yola çıkmadan, seyahatte veya uzun bir görüşmeden önce pilin kullanılabilir bir seviyeye ulaşıp ulaşmayacağını öğrenmek için kullanın. Pil kapasitesini, mevcut yüzdesini, hedefi, şarj cihazı gücünü ve verimliliği girin. Sonuç, tam olarak bu şarj aralığı için gereken tahmini dakikayı ve enerjiyi gösterir; böylece elinizdeki süreyi daha yavaş veya hızlı şarj cihazlarıyla karşılaştırabilirsiniz.' },
  { type: 'title' as const, text: 'Hangi değerleri girmelisiniz?', level: 2 as const },
  { type: 'list' as const, items: ['Kapasite: powerbank üzerinde yazan değeri değil, telefonun mAh cinsinden kapasitesini kullanın.', 'Mevcut ve hedef seviye: gerçekten ihtiyacınız olan şarjı tanımlayın; hedef mevcut seviyeden yüksek olmalıdır.', 'Güç ve verimlilik: biliyorsanız telefona ulaşan gücü kullanın. Aksi halde şarj cihazı gücü yalnızca üst sınırdır.'] },
  { type: 'title' as const, text: 'Sonucu nasıl yorumlamalısınız?', level: 2 as const },
  { type: 'paragraph' as const, html: 'Ana değer mevcut yüzdeden hedefe kadar tahmini süredir. Gereken enerji aynı şarjı watt-saat cinsinden ifade eder; referans çubukları da 5 W, 15 W ve 30 W arasındaki farkı gösterir. Süreniz yetmiyorsa hedefi düşürün veya telefonun gerçekten daha yüksek güçte kullanabildiği bir şarj cihazı ve kablo seçin.' },
  { type: 'title' as const, text: 'Şarj neden %100\'e yaklaşırken yavaşlar?', level: 2 as const },
  { type: 'paragraph' as const, html: 'Telefon genellikle boş durumdan tamamen dolana kadar sabit güçte şarj olmaz. Pil seviyesi yükseldikçe şarj kontrolü ısıyı ve pil üzerindeki yükü yönetmek için akımı azaltabilir. Bu yüzden planlama için %20\'den %80\'e tahmin, %100\'e doğrusal bir hesaplamadan daha kullanışlıdır. %70 üzerindeki hedeflerde hesaplama küçük bir yavaşlama payı ekler.' },
  { type: 'title' as const, text: 'Tahmindir: Hesaplayıcı neyi algılayamaz?', level: 2 as const },
  { type: 'list' as const, items: ['Telefon modelini, pil sağlığını, şarj protokolünü, kabloyu, sıcaklığı, kullanımı veya anlık şarj gücünü okuyamaz.', 'Yıpranmış pili teşhis etmez ve hızlı şarj uyumluluğunu doğrulamaz. Kesin bir cevap için aynı kurulumu gerçek kullanım durumunda ölçün.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'tr', slug: 'telefon-sarj-suresi-hesaplama', title: 'Telefon Şarj Süresi Hesaplayıcı', description: 'Pil kapasitesi, mevcut şarj, şarj cihazı gücü ve verimlilikle telefonun hedef yüzdeye ulaşma süresini tahmin edin.', faq, howTo, seo, ui });
