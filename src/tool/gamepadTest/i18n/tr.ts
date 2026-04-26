import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestMandoUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oyun-kolu-testi-online';
const title = 'Çevrimiçi Oyun Kolu ve Kontrolcü Testi';
const description = 'Xbox, PlayStation veya PC kontrolcünüzü test edin. Ölü bölgeleri, joystick kaymasını ve düğmeleri görselleştirin.';

const faqData = [
  {
    question: 'Joystick Kayması (Drift) Nedir?',
    answer: 'Kayma, kontrolcü joystick\'e dokunulmadan hareket algıladığında meydana gelir. Bu, sabit bir yönde yanlış elektrik sinyali gönderen dahili potansiyometrelerdeki aşınmadan kaynaklanır.',
  },
  {
    question: 'Kaymayı yazılım yoluyla nasıl düzeltebilirim?',
    answer: 'Kayma hafifse, oyun ayarlarınızda daha büyük bir "Ölü Bölge" (Deadzone) yapılandırabilirsiniz. Bu, merkezdeki küçük joystick hareketlerini görmezden gelir.',
  },
  {
    question: 'PS5, Xbox ve Switch kontrolcüleriyle uyumlu mu?',
    answer: 'Evet. Aracımız, DualSense, DualShock 4 ve Xbox Kontrolcüleri dahil olmak üzere USB veya Bluetooth üzerinden bağlanan hemen hemen her kontrolcüyü algılayan modern tarayıcıların standart Gamepad API\'sini kullanır.',
  },
  {
    question: 'Tarayıcı neden kontrolcümü algılamıyor?',
    answer: 'Güvenlik nedeniyle tarayıcılar, oyun kolunu yalnızca ilk düğme basışından sonra etkinleştirir. Görünmüyorsa, herhangi bir düğmeye (A veya X gibi) basın ve katı gizli modda olmadığınızdan emin olun.',
  },
];

const howToData = [
  {
    name: 'Kontrolcüyü bağlayın',
    text: 'Oyun kolunuzu USB üzerinden prize takın veya bilgisayarınızla Bluetooth üzerinden eşleştirin.',
  },
  {
    name: 'Algılamayı etkinleştirin',
    text: 'Tarayıcının bağlı cihazı tanıması için joystickleri hareket ettirin veya herhangi bir düğmeye basın.',
  },
  {
    name: 'Ölü bölgeleri test edin',
    text: 'Joystickleri bırakın ve ekrandaki eksenleri gözlemleyin. Değerler 0.0000\'da değilse, hafif bir kayma (drift) var demektir.',
  },
  {
    name: 'Düğmeleri ve titreşimi doğrulayın',
    text: 'Her düğmeye ve tetiğe basın. Görsel göstergeler yanmalı ve kontrolcünüz destekliyorsa titreşim motorunu test edebilirsiniz.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<TestMandoUI> = {
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
      text: 'Çevrimiçi Oyun Kolu Testi: Kayma ve Joystick Sorunlarını Belirleyin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Xbox, PlayStation, Switch ve diğer kontrolcüleri test etmek için ücretsiz araç. Ölü bölgeleri görselleştirin, kaymayı algılayın ve titreşimi test edin.',
    },
    {
      type: 'title',
      text: 'Joystick Kayması (Drift) Nedir',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kayma, analog joysticklerde çubuğa dokunulmadan hareket algılandığı yaygın bir hatadır. Dahili potansiyometrelerdeki aşınmadan kaynaklanır.',
    },
    {
      type: 'title',
      text: 'Kontrolcü Uyumluluğu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Xbox One, Xbox Series X/S, PlayStation 4, PlayStation 5 (DualSense), Nintendo Switch Pro ve hemen hemen her modern USB veya Bluetooth oyun kolu ile uyumludur.',
    },
  ],
  ui: {
    badge: 'Giriş Testi',
    title: 'Oyun Kolu ve Kontrolcü Testi',
    description: 'Kontrolcünüzü test edin ve sorunları algılayın.',
    connectionMessage: 'USB veya Bluetooth cihazınızı bağlayın',
    connectionStatus: 'Bağlı',
    axisLabel: 'Eksenler',
    buttonsLabel: 'Düğmeler',
    vibrationTitle: 'Titreşim Testi',
    vibrationDescription: 'Tarayıcı desteği ve uyumlu oyun kolu gerektirir.',
    vibrationLow: 'Düşük (Rumble)',
    vibrationHigh: 'Yüksek (Buzz)',
    eventHistoryTitle: 'Olay Geçmişi',
    eventHistoryClear: 'Temizle',
    eventWaiting: 'Olaylar bekleniyor...',
    gameStartBtn: 'MÜCADELEYİ BAŞLAT',
    gameControllerWarning: 'Bir oyun kolu bağlayın veya klavye kullanın',
    gameTimer: 'Zamanlayıcı',
    gameScore: 'Puan',
    gameInstruction: 'Hızlı bas',
    gameCompleted: 'Mücadele Tamamlandı',
    gameNewRecord: 'YENİ REKOR',
    gameRestartBtn: 'Tekrar Dene',
    gameFeedback: 'Bir düğme efsanesisin',
    gameIntroTitlePre: 'Pro Gamer ',
    gameIntroHighlight: 'Refleksleri',
    gameIntroTitlePost: '?',
    gameIntroDescPre: 'Kontrolcü gecikmesini ve tepki hızınızı test edin. Düğmelerde ustalaşmak için ',
    gameIntroDescSeconds: '30 saniyeniz',
    gameIntroDescPost: ' var.',
    gameShareBtn: 'SIRALAMAYI PAYLAŞ',
    gameLogConnected: 'Bağlı',
    gameLogDisconnected: 'Bağlantı Kesildi',
    gameLogCleared: 'Günlük temizlendi...',
    gameLogBtnPrefix: 'Düğme',
    gameVibNotSupported: 'Titreşim desteklenmiyor.',
    gameVibLow: 'Düşük',
    gameVibHigh: 'Yüksek',
    gameMoveStick: 'ÇUBUĞU HAREKET ETTİR',
    gamePress: 'BAS',
    rankLegendaryName: 'EFSANEVİ',
    rankLegendaryDesc: 'Parmakların ses hızında hareket ediyor.',
    rankLegendaryFlavor: 'Kontrolcüm uçuyor!',
    rankProName: 'PRO GAMER',
    rankProDesc: 'Çelik gibi reflekslerin ve iyi kalibre edilmiş bir kontrolcün var.',
    rankProFlavor: 'Kontrolcüm uçuyor!',
    rankGamerName: 'GAMER',
    rankGamerDesc: 'Fena değil, ancak rekabetçi oyunlar için daha fazla pratiğe ihtiyacın var.',
    rankGamerFlavor: 'Neredeyse oluyordu!',
    rankNoobName: 'NOOB',
    rankNoobDesc: 'Kontrolcünün açık olduğundan emin misin?',
    rankNoobFlavor: 'Kontrolcü bana gıcık herhalde!',
    gameShareText: 'Beni yenebilir misin?',
    gameShareScorePrefix: 'Skorum:',
    gameShareScoreSuffix: 'isabet',
    gameShareTitle: 'Çevrimiçi Oyun Kolu Testi',
  },
};
