import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { LaptopBatteryRuntimeUI } from '../ui';

const slug = 'dizustu-bilgisayar-batarya-suresi-hesaplayici';
const title = 'Dizüstü bilgisayar pil süresi hesaplayıcı';
const description = 'Dizüstü bilgisayarınızın mevcut şarjla hafif, dengeli ve yoğun işlerde ne kadar çalışacağını tahmin edin.';
const faq = [
  { question: 'Bu hesaplayıcı neyi tahmin eder?', answer: 'Mevcut pil enerjisini her kullanım için girdiğiniz güç değerine böler. Planlama amaçlı bir tahmindir; canlı ölçüm veya üretici garantisi değildir.' },
  { question: 'Pil kapasitesini ve sağlığını nerede bulabilirim?', answer: 'Pil raporunda veya üretici belgelerinde tasarım kapasitesini ve mevcut tam şarj kapasitesini arayın. Pil sağlığı, mevcut tam şarj kapasitesinin başlangıç kapasitesine oranıdır.' },
  { question: 'Çalışma türüne göre süre neden değişir?', answer: 'Daha fazla watt kullanan bir dizüstü bilgisayar aynı depolanmış enerjiyi daha hızlı tüketir. Görüntülü görüşmeler, oyunlar, harici ekran, yüksek parlaklık ve sürekli CPU veya GPU yükü ortalama tüketimi artırır.' },
  { question: 'Araç pili otomatik olarak okuyabilir mi?', answer: 'Hayır. Araç tarayıcıda yerel çalışır ve girdiğiniz değerleri kullanır. Daha iyi tahmin için örnekleri güncel rapor veya ölçülmüş ortalama güç ile değiştirin.' },
];
const howTo = [
  { name: 'Başlangıç kapasitesini okuyun', text: 'Tasarım kapasitesini watt-saat olarak girin. Yalnızca miliamper-saat ve volt biliyorsanız Wh = V × Ah ile önce dönüştürün.' },
  { name: 'Mevcut pili tanımlayın', text: 'Mevcut tam şarj kapasitesini başlangıç kapasitesinin yüzdesi olarak ayarlayın ve çalışmaya başlarken sahip olacağınız şarjı girin.' },
  { name: 'Gerçekçi tüketimler belirleyin', text: 'En yakın profili seçin ve dizüstü bilgisayarınızdan veya güç ölçerden ölçümünüz varsa watt değerlerini düzenleyin.' },
  { name: 'Seyahat kararı verin', text: 'Üç hattı okuyun ve yoğun iş için en kısa süreyi kullanın. Pay azsa tüketimi azaltın veya şarj cihazını yanınıza alın.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr' };

export const content: ToolLocaleContent<LaptopBatteryRuntimeUI> = {
  slug, title, description, faq, howTo, bibliography, schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Çalışma süresi tahmini aslında neyi ölçer?', level: 2 },
    { type: 'paragraph', html: 'Dizüstü bilgisayar pili enerjiyi watt-saat cinsinden depolar. Bilgisayar bu enerjiyi watt cinsinden bir güçle kullanır. Hesaplayıcı iki değeri zamana dönüştürerek yolculuk, toplantı, ders veya çalışma oturumu için şarjın yetip yetmeyeceğini anlamanıza yardım eder.' },
    { type: 'paragraph', html: 'Model önce başlangıç kapasitesi ve pil sağlığından mevcut tam şarj kapasitesini tahmin eder. Ardından başlangıçtaki şarj yüzdesini uygular. Her kullanım senaryosu aynı enerji bütçesinin bir bölümünü harcar.' },
    { type: 'title', text: 'Güvenilir girişleri seçme', level: 2 },
    { type: 'paragraph', html: 'Pil raporu veya üretici teknik özelliklerini kullanın. Tasarım kapasitesi, mevcut tam şarj kapasitesi ve kalan şarj farklı değerlerdir. Yalnızca volt ve amper-saat biliyorsanız <strong>Wh = V × Ah</strong> ile dönüştürün; 1.000 mAh, 1 Ah eder.' },
    { type: 'list', items: ['Sağlığı, mevcut tam şarj kapasitesini tasarım kapasitesine bölerek hesaplayın.', 'Oturum başladığında gerçekten bulunacak şarj yüzdesini girin.', 'Uzun bir iş için ölçülmüş ortalama güç değerini kullanın.', 'Harici ekranı, docku veya yoğun uygulamayı seçtiğiniz yüke ekleyin.'] },
    { type: 'title', text: 'Süreyi planlama payı olarak okumak', level: 2 },
    { type: 'paragraph', html: 'Hafif hat okuma ve basit belgeleri, dengeli hat normal çoklu görevi, yoğun hat ise yüksek tüketimin maliyetini temsil eder. İhtiyacınız olan süreyle karşılaştırın ve en kısa makul sonuca göre plan yapın.' },
    { type: 'table', headers: ['Sinyal', 'Anlamı', 'Ne yapmalı'], rows: [['Rahat', 'Bu tüketimde altı saat veya daha fazla', 'Oturum için geniş bir pay vardır.'], ['Uygun', 'Üç ile altı saat arası', 'Belirli bir oturum için uygundur, şarj cihazı planlayın.'], ['Sınırlı', 'Bir ile üç saat arası', 'Tüketimi azaltın veya şarj molası planlayın.'], ['Acil', 'Bir saatten az', 'İşi şarj cihazına bağlı kabul edin.']] },
    { type: 'title', text: 'Tahminin garanti edemeyeceği şeyler', level: 2 },
    { type: 'paragraph', html: 'Gerçek güç tüketimi her saniye değişir. Parlaklık, kablosuz bağlantılar, sıcaklık, arka plan işleri, aygıt yazılımı ve sistem rezervleri bitiş zamanını değiştirir. Araç sensörleri okumaz, pil kimyasını modellemez ve belirli bir süreyi garanti etmez.' },
    { type: 'tip', title: 'Ölçüm ipucu', html: 'Gerçek bir oturumda pil yüzdesini ve geçen süreyi kaydedin. Gözlenen ortalama ile profil watt değerlerini değiştirin ve her iş türü için hesabı tekrarlayın.' },
  ],
  ui: {
    batteryInputsLabel: 'Pil başlangıç noktası', designCapacityLabel: 'Pil başlangıç kapasitesi', designCapacityHint: 'Yeni pilin enerjisi', healthLabel: 'Pil sağlığı', healthHint: 'Mevcut tam şarjın yeni duruma göre karşılaştırması', chargeLabel: 'Başlangıç şarjı', chargeHint: 'İş başlarken beklenen şarj', scenariosLabel: 'Kullanıma göre çalışma süresi', scenariosHint: 'Her iş türü için ortalama gücü düzenleyin', powerLabel: 'Ortalama tüketim', wattsSuffix: 'W', presetsLabel: 'Bir iş setiyle başlayın', presetBalanced: 'Günlük çalışma', presetTravel: 'Seyahat tasarrufu', presetCreative: 'Yoğun yaratıcı çalışma', runwayLabel: 'Enerji yolu', runwayCaption: 'Her hat, aynı başlangıç şarjının o kullanımda ne zaman biteceğini gösterir.', availableEnergyLabel: 'Şu an kullanılabilir enerji', fullCapacityLabel: 'Mevcut tam şarj kapasitesi', shortestScenarioLabel: 'Şuna göre planla', runtimeLabel: 'Tahmini çalışma süresi', loadLabel: 'Güç tüketimi', healthStateExcellent: 'Pil durumu mükemmel', healthStateGood: 'Pil durumu iyi', healthStateAging: 'Pil yaşlanıyor', healthStateWorn: 'Pil yıpranmış', statusComfortable: 'Rahat pay', statusWorkable: 'Uygun oturum', statusTight: 'Sınırlı pay', statusUrgent: 'Şarj cihazı gerekli', scenarioLight: 'Hafif iş', scenarioBalanced: 'Dengeli iş', scenarioIntense: 'Yoğun iş', sceneBatteryLabel: 'Başlangıç şarjı', sceneEnergyLabel: 'Kullanılabilir enerji', sceneTimeLabel: 'Çalışma süresi', noteLabel: 'Model sınırı', noteText: 'Bu, girdiğiniz değerlere dayalı bir planlama tahminidir. Gerçek tüketim ve sistem rezervleri süreyi kısaltabilir.',
  },
};
