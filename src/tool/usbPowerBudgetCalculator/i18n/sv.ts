import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UsbPowerBudgetCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkylator-for-usb-effektbudget';
const title = 'Kalkylator för USB effektbudget';
const description = 'Kontrollera om en USB-port, laddare, hub, kabel eller USB-C PD-profil säkert kan driva dina enheter efter marginal och kabelspänningsfall.';

const faqData = [
  {
    question: 'Hur vet jag om en USB-port kan driva min enhet?',
    answer: 'Jämför enhetens totala watttal med USB-källans watttal, reservera marginal och uppskatta kabelspänningsfallet. En installation kan misslyckas även när nominella watt ser höga ut om kabeln är lång, tunn eller bär hög ström vid 5 volt.',
  },
  {
    question: 'Varför spelar kabellängden roll för USB-ström?',
    answer: 'Ström som flyter genom koppar skapar spänningsfall. Långa kablar och tunna ledare har mer resistans, så enheten kan ta emot mindre spänning än vad laddaren ger. Detta är särskilt viktigt för Raspberry Pi-kort, hårddiskar, LED-strips, dockor och bussdrivna hubbar.',
  },
  {
    question: 'Vilken marginal ska jag använda?',
    answer: 'Använd minst 20 procent för normal elektronik, 30 procent för motorer, enheter, radioapparater eller kort med burst-belastningar, och mer om adapterns kvalitet är okänd eller enheten måste köra kontinuerligt.',
  },
  {
    question: 'Kan detta ersätta USB-C PD-förhandlingstester?',
    answer: 'Nej. Kalkylatorn kontrollerar den elektriska budgeten. Den verifierar inte om en laddare, kabel-e-markör, enhet eller hubb faktiskt förhandlar en specifik Power Delivery-profil.',
  },
];

const howToData = [
  { name: 'Välj en källprofil', text: 'Välj en vanlig USB- eller USB-C PD-profil, eller redigera spänning och ström manuellt.' },
  { name: 'Beskriv kabeln', text: 'Ange kabellängd och ledartjocklek. Tunna ledningar med högt AWG-nummer orsakar mer spänningsfall.' },
  { name: 'Lägg till lasten', text: 'Ange en enhetslast i watt och antalet enheter som delar samma källa.' },
  { name: 'Läs statusen', text: 'Använd status, kabelfall, slutspänning, utnyttjande och marginal för att avgöra om installationen är säker.' },
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

export const content: ToolLocaleContent<UsbPowerBudgetCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'USB-ström är en budget, inte en etikett', level: 2 },
    {
      type: 'paragraph',
      html: 'En USB-laddare märkt 15 W, 45 W eller 100 W beskriver vad källan kan erbjuda under rätt förhållanden. Din enhet ser bara resultatet efter protokollförhandling, strömbegränsningar, kabelresistans, kontaktkvalitet, hubb-förluster och lastspikar. Denna kalkylator fokuserar på den praktiska elektriska frågan: efter kabelfall och reservmarginal, finns det tillräckligt med ström kvar för hårdvaran du vill köra?',
    },
    {
      type: 'stats',
      items: [
        { label: 'USB 2.0 standardström', value: '0,5 A' },
        { label: 'USB-C standardmaximum vid 5 V', value: '3 A' },
        { label: 'Rekommenderad reserv', value: '20%+' },
      ],
    },
    { type: 'title', text: 'Hur man tolkar resultatet', level: 3 },
    {
      type: 'table',
      headers: ['Status', 'Betydelse', 'Bästa nästa steg'],
      rows: [
        ['Säker', 'Lasten ryms inom källans kapacitet efter vald reserv och den uppskattade enhetsspänningen förblir hälsosam.', 'Använd installationen, men håll koll på värmen om adaptern är liten eller innesluten.'],
        ['Stram', 'Lasten är nära den reserverade gränsen eller kabelfallet börjar bli betydande.', 'Korta av kabeln, välj tjockare ledare, minska lasten eller byt till en högre effektprofil.'],
        ['Över budget', 'Lasten överskrider den användbara källeffekten eller enhetsspänningen är sannolikt för låg.', 'Använd en starkare laddare, aktiv hubb, kortare kabel eller en enhet som förhandlar en högre USB-C PD-spänning.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'När watten räcker men enheten fortfarande startar om',
      html: '<p>Startströmmen kan vara mycket högre än det genomsnittliga watt-talet som står på en enhetsetikett. En 5 V-källa tappar spänning snabbare än en 20 V PD-profil för samma watt-tal eftersom den måste bära mer ström. Många billiga kablar använder tunna strömledare även när ytterhöljet ser tjockt ut, och bussdrivna hubbar delar en uppströmsbudget över varje nedströmsenhet.</p>',
    },
    { type: 'title', text: 'Kabelspänningsfall i enkla termer', level: 3 },
    {
      type: 'paragraph',
      html: 'Spänningsfall är förlusten som skapas när ström flyter genom kabelresistans. USB-ström har två ledare i strömvägen, så kalkylatorn använder tur-och-retur-längden. En enmeterskabel är elektriskt två meter koppar för strömslingan. Lägre AWG-nummer är tjockare och vanligtvis bättre för höga strömbelastningar.',
    },
    {
      type: 'comparative',
      items: [
        { title: 'Kort tjock kabel', description: 'Bäst för Raspberry Pi-kort, SSD-höljen, utvecklingskit och USB-C-dockor som drar burst-ström.' },
        { title: 'Lång tunn kabel', description: 'Acceptabelt för lågeffektsensorer eller långsam laddning, men riskabelt för enheter, LED-belastningar och datorkort.' },
        { title: 'Högre spänning PD', description: 'Minskar strömmen för samma watt-tal, vilket sänker kabelförlusten, men bara om källan, kabeln och enheten förhandlar det.' },
      ],
    },
    {
      type: 'tip',
      title: 'Praktisk regel',
      html: 'Om kalkylatorn säger att installationen är stram, behandla det som en fältvarning. USB-fel uppträder ofta som slumpmässiga frånkopplingar, underspänningsavbrott, långsam laddning, brusigt ljud eller lagringsfel innan de ser ut som ett tydligt strömproblem.',
    },
    {
      type: 'summary',
      title: 'Vad denna kalkylator är bäst för',
      items: [
        'Planera USB-hubbar, enkortsdatorer, externa enheter, utvecklingskort, lampor, fläktar och små labbuppsättningar.',
        'Jämföra USB 2.0-, USB 3.x-, USB-C- och USB Power Delivery-källprofiler.',
        'Uppskatta om en kabel är för lång eller för tunn för en last.',
        'Välja en förnuftig reserv innan du köper en laddare eller aktiv hubb.',
      ],
    },
  ],
  ui: {
    profileLabel: 'USB-källprofil',
    metricUnits: 'Metrisk',
    imperialUnits: 'US',
    voltageLabel: 'Källspänning (V)',
    currentLabel: 'Källström (A)',
    cableLengthLabel: 'Kabellängd',
    wireGaugeLabel: 'Ledartjocklek',
    deviceLoadLabel: 'Last per enhet (W)',
    devicesLabel: 'Enheter',
    headroomLabel: 'Reservmarginal (%)',
    sourcePower: 'Källeffekt',
    requiredPower: 'Behövd effekt',
    cableDrop: 'Kabelfall',
    deviceVoltage: 'Enhetsspänning',
    headroom: 'Marginal',
    utilization: 'Utnyttjande',
    safeStatus: 'Effektbudgeten ser säker ut',
    tightStatus: 'Effektbudgeten är stram',
    overStatus: 'Över budget eller risk för spänningsfall',
    safeAdvice: 'Lasten passar med vald marginal. Använd en kvalitetskabel och kontrollera värmen under långa körningar.',
    tightAdvice: 'Du är nära gränsen. Minska kabellängden, använd tjockare ledare, sänk lasten eller välj en starkare profil.',
    overAdvice: 'Denna installation kommer sannolikt att drabbas av spänningsfall eller strypning. Använd en aktiv hubb, starkare adapter eller en USB-C PD-profil med högre spänning.',
    busLane: 'USB-källa',
    loadLane: 'Enhetslast',
    cableLane: 'fall',
    boardEyebrow: 'Live USB-strömväg',
    sourceSocket: 'Matningsuttag',
    deviceSocket: 'Hårdvarulast',
    energyFlow: 'energiflöde',
    reservedLabel: 'användbart efter reserv',
  },
};
