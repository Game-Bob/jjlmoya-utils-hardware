import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UpsRuntimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkylator-drifttid-ups';
const title = 'UPS Drifttid Kalkylator';
const description = 'Beräkna UPS-batteritid, total skyddad last, användbara wattimmar och rekommenderad VA-storlek för datorer, bildskärmar, routrar, NAS-enheter och hemlabbutrustning.';

const faqData = [
  {
    question: 'Hur beräknar jag UPS-drifttid?',
    answer: 'Lägg ihop watttalet för varje enhet ansluten till UPS:en, multiplicera UPS-batteriets wattimmar med växelriktarens verkningsgrad, dra bort den reserv du vill behålla och dela sedan de användbara wattimmarna med lastens watt. Resultatet i timmar kan multipliceras med 60 för minuter.',
  },
  {
    question: 'Varför skiljer sig verklig UPS-drifttid från uppskattningen?',
    answer: 'Drifttiden förändras med batteriålder, temperatur, urladdningshastighet, växelriktarens verkningsgrad, lasttoppar och tillverkarens frånkopplingsspänning. Behandla resultatet som en planeringsuppskattning och verifiera det med ett kontrollerat avstängningstest.',
  },
  {
    question: 'Ska jag dimensionera en UPS efter watt eller VA?',
    answer: 'Kontrollera båda. Watt anger den verkliga effekt som UPS:en kan leverera, medan VA inkluderar effektfaktorn. UPS:en måste överskrida din last i watt och ha tillräckligt med VA-marginal för den anslutna utrustningen.',
  },
  {
    question: 'Hur mycket UPS-marginal bör jag behålla?',
    answer: 'Ett praktiskt mål är att hålla normal last under cirka 70-80 % av UPS:ens märkeffekt i watt. Detta lämnar utrymme för startspikar, batteriåldring och framtida enheter.',
  },
  {
    question: 'Kan jag ansluta skrivare eller värmare till en UPS?',
    answer: 'Undvik laserskrivare, värmare och andra laster med hög startström om inte UPS:en uttryckligen är klassad för dem. De kan överbelasta växelriktaren och kraftigt minska drifttiden.',
  },
];

const howToData = [
  {
    name: 'Lista skyddade enheter',
    text: 'Ange de enheter som måste vara online under ett strömavbrott, till exempel dator, bildskärm, router, modem, NAS och nätverksswitch.',
  },
  {
    name: 'Ange realistisk wattförbrukning',
    text: 'Använd uppmätt vägguttagseffekt när det är möjligt. Om du bara har nätaggregatets märkeffekt, minska den till den förväntade driftsbelastningen istället för att använda det maximala etikettvärdet.',
  },
  {
    name: 'Ställ in batterikapacitet och antaganden',
    text: 'Ange UPS-batteriets wattimmar, växelriktarens verkningsgrad, effektfaktorn och den reservprocent du vill behålla för en kontrollerad avstängning.',
  },
  {
    name: 'Läs av drifttid och VA-rekommendation',
    text: 'Använd de uppskattade minuterna och rekommenderad VA som en inköps- eller konfigurationsguide och validera sedan installationen med en säker strömavbrottsövning.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<UpsRuntimeCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'UPS Drifttid Kalkylator: Uppskatta Batteribackuptid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En uppskattning av UPS-drifttid besvarar två praktiska frågor: hur länge din hårdvara kan vara online under ett strömavbrott och om UPS:en är tillräckligt stor för den anslutna lasten. Denna kalkylator kombinerar enhetswatt, batteri-wattimmar, växelriktarens verkningsgrad, effektfaktor och avstängningsreserv så att resultatet ligger närmare verklig planering än en enkel uppdelning av batterikapaciteten.',
    },
    {
      type: 'title',
      text: 'Drifttidsformeln',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uppskattad drifttid i timmar är <strong>användbara batteri-wattimmar dividerat med total last i W</strong>. Användbara wattimmar är inte den tryckta batterikapaciteten: den bör justeras för växelriktarförluster och den reserv du vill behålla för en kontrollerad avstängning. Till exempel ger ett 432 Wh-batteri med 86 % verkningsgrad och 20 % reserv ungefär 297 Wh användbar energi.',
    },
    {
      type: 'table',
      headers: ['Indata', 'Varför det spelar roll', 'Praktisk vägledning'],
      rows: [
        ['Last i watt', 'Styr drifttiden direkt', 'Mät med en vägguttagsmätare när det är möjligt, särskilt för gamingdatorer och NAS-system.'],
        ['Batteri-Wh', 'Definierar energireserven', 'Använd tillverkarens batteridata eller nominell spänning multiplicerat med amperetimmar.'],
        ['Verkningsgrad', 'Kompencerar för växelriktarförluster', '80-90 % är ett rimligt planeringsintervall för många konsument-UPS-enheter.'],
        ['Effektfaktor', 'Omvandlar watt till VA', 'Använd UPS-specifikationen om den är känd; 0,6-0,8 är vanligt för budget- och mellanklassmodeller.'],
        ['Reserv', 'Behåller avstängningsmarginalen', '10-25 % är förnuftigt för kontrollerad avstängning av PC eller server.'],
      ],
    },
    {
      type: 'title',
      text: 'Hur Mycket Drifttid Behöver Du?',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '5-10 minuter: tillräckligt för att rida ut korta flimmer eller stänga av en stationär dator säkert.',
        '10-20 minuter: användbart för routrar, modem, NAS-enheter och små hemlabbnoder.',
        '30+ minuter: bättre för nätverkskontinuitet, distansarbete och platser med täta avbrott.',
        'Flera timmar: kräver vanligtvis ett större batterisystem, inte bara en stationär UPS.',
      ],
    },
    {
      type: 'title',
      text: 'Watt vs VA vid Val av UPS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'UPS-produktnamn anger ofta VA, men wattmärkningen är den hårdare gränsen för verklig utrustning. En 900 VA-UPS kanske bara stöder 540 W, medan en annan 900 VA-modell kan stödja 600 W eller mer. Kontrollera båda märkningarna och håll normal drift under maximum för att undvika överbelastningslarm, förkortad batterilivslängd och misslyckade överföringar vid ett avbrott.',
    },
    {
      type: 'title',
      text: 'Laster Som Förvränger Drifttidsuppskattningar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Gamingdatorer kan gå från låg tomgångsförbrukning till hög GPU-förbrukning på sekunder.',
        'Bildskärmar varierar kraftigt med ljusstyrka, HDR-läge och panelstorlek.',
        'NAS-enheter drar extra ström vid diskuppstart och ombyggnader.',
        'Laserskrivare, värmare, pumpar och kompressorer är dåliga UPS-laster om de inte uttryckligen stöds.',
        'Gamla batterier kan leverera mycket kortare drifttid än deras ursprungliga kapacitet antyder.',
      ],
    },
    {
      type: 'title',
      text: 'Checklista för Säker Validering',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Ladda UPS:en fullständigt före testning.',
        'Spara öppet arbete och undvik testning under kritiska skrivningar eller firmware-uppdateringar.',
        'Koppla bort väggströmmen, inte utrustningen, och övervaka UPS-belastningsprocent och batteriuppskattning.',
        'Bekräfta att din PC, NAS eller server tar emot avstängningssignalen innan batteriet är urladdat.',
        'Upprepa testet varannan månad eftersom bly-syra-UPS-batterier åldras snabbt.',
      ],
    },
  ],
  ui: {
    loadTitle: 'Skyddad last',
    addDevice: 'Lägg till enhet',
    deviceName: 'Enhet',
    watts: 'Watt',
    remove: 'Ta bort enhet',
    batteryWh: 'Batterikapacitet (Wh)',
    efficiency: 'Växelriktarens verkningsgrad',
    powerFactor: 'Effektfaktor',
    reserve: 'Avstängningsreserv',
    totalLoad: 'Total last',
    runtime: 'Beräknad drifttid',
    recommendedUps: 'Rekommenderad storlek',
    usableEnergy: 'Användbar energi',
    minutes: 'min',
    hours: 'tim',
    wattsUnit: 'W',
    vaUnit: 'VA',
    whUnit: 'Wh',
    assumptionsLabel: 'UPS-antaganden',
    presetDesktop: 'Stationär dator',
    presetMonitor: '27-tums bildskärm',
    presetRouter: 'Router och modem',
    presetNas: 'NAS med två fack',
    percentUnit: '%',
    bandLight: 'bekvämt backup-fönster med rekommenderad UPS nära',
    bandBalanced: 'balanserat backup-fönster med rekommenderad UPS nära',
    bandHeavy: 'kort backup-fönster; överväg ett större batteri eller minska lasten nära',
    summaryPrefix: 'Denna konfiguration har en',
  },
};
