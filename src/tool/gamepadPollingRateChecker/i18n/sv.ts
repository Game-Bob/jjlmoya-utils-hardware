import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'testa-gamepad-polling-rate-hertz';
const title = 'Testa Gamepad Polling Rate och Hertz';
const description = 'Mät webbläsarens observerade uppdateringsfrekvens, rapportintervall och tidsstabilitet för din USB- eller Bluetooth-handkontroll.';

const faq = [
  {
    question: 'Vad mäter detta verktyg för gamepad polling rate?',
    answer: 'Det mäter ändringar i Gamepad API tidsstämplar i webbläsaren när du rör en analog spak. Det visade Hertz-värdet är en observerad uppdateringsfrekvens i webbläsaren och inte en direkt elektrisk mätning på USB-bussen.',
  },
  {
    question: 'Kan webbläsaren bekräfta att min handkontroll körs i 1000 Hz?',
    answer: 'Den kan visa om uppdateringar når sidan jämnt och frekvent, men den kan inte certifiera en hårdvaru-överklockning av USB. Timers i webbläsaren och operativsystemet kan gruppera rapporter.',
  },
  {
    question: 'Varför måste jag snurra den analoga spaken i cirklar?',
    answer: 'Kontinuerlig cirkelrörelse ändrar båda axlarna hela tiden och genererar ett jämnt flöde av nya tillstånd. Om spaken står stilla uppstår för få ändringar.',
  },
  {
    question: 'Kan jag jämföra prestanda mellan USB och Bluetooth?',
    answer: 'Ja, kör testet med samma tidslängd och cirkelrörelse för varje anslutning i samma webbläsare för att jämföra frekvens, intervall och jitter.',
  },
];

const howTo = [
  {
    name: 'Anslut och aktivera handkontrollen',
    text: 'Anslut handkontrollen via USB eller Bluetooth och tryck på valfri knapp så att webbläsaren upptäcker den via Gamepad API.',
  },
  {
    name: 'Välj enhet och mättid',
    text: 'Välj handkontroll i listan och ställ in tio sekunder för en balanserad första mätning.',
  },
  {
    name: 'Snurra den analoga spaken kontinuerligt',
    text: 'Starta mätningen och gör jämna cirklar med vänster spak tills förloppsringen blir full.',
  },
  {
    name: 'Läs av frekvens och stabilitet',
    text: 'Jämför genomsnittlig Hertz, intervall i millisekunder och jitter under identiska testförhållanden.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
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
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga frågor om gamepad polling rate',
  faq,
  bibliographyTitle: 'Tekniska referenser',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Mät handkontrollens uppdateringsfrekvens i webbläsaren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verktyget övervakar högupplösta tidsstämplar från den valda handkontrollen medan den analoga spaken rör sig. Det rensar bort avvikelser, beräknar genomsnittligt intervall och omvandlar det till observerad Hertz (1000 dividerat med millisekunder). All beräkning sker lokalt.',
    },
    {
      type: 'table',
      headers: ['Mätvärde', 'Vad värdet visar', 'Vad det inte bevisar'],
      rows: [
        ['Observerad frekvens', 'Antal rapporter som sidan läser av varje sekund', 'Direkt elektrisk USB-polling rate'],
        ['Genomsnittligt intervall', 'Genomsnittlig tid mellan uppdateringar av tidsstämpeln', 'Total inmatningsfördröjning ända till skärmen'],
        ['Jitter (avvikelse)', 'Tidsskillnad mellan 5:e och 95:e percentilen', 'Ett definitivt hårdvarufel i sig självt'],
        ['Tillförlitlighet', 'Mängd och regelbundenhet hos insamlade mätvärden', 'Industriell kalibreringsprecision'],
      ],
    },
    {
      type: 'title',
      text: 'Så gör du ett upprepat och tillförlitligt Hertz-test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stäng tunga bakgrundsprogram, behåll fliken aktiv och rör samma spak med en jämn cirkelrörelse vid varje försök. Använd samma webbläsare och mättid när du jämför kablar, Bluetooth-adaptrar eller inställningar i operativsystemet.',
    },
    {
      type: 'tip',
      title: 'Jämför alltid under identiska förhållanden',
      html: 'Gör minst två mätningar efter att du har bytt kabel eller USB-port. En enskild topp är mindre värdefull än en stabil frekvens med lågt jitter.',
    },
    {
      type: 'title',
      text: 'Varför detta inte är ett komplett input lag-test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gamepad API läser av data efter att operativsystemet och webbläsaren har behandlat den. Det mäter inte kabelns elektriska responstid eller skärmens uppdateringstid. Det observerade intervallet är utmärkt för webbaserad jämförelse men utgör inte total latens.',
    },
  ],
  ui: {
    privacyNote: '100% lokal signalbehandling',
    stepConnect: 'Anslut och tryck på en knapp',
    stepMove: 'Snurra en spak i cirklar',
    stepRead: 'Jämför frekvens och stabilitet',
    deviceLabel: 'Aktiv handkontroll upptäckt',
    devicePlaceholder: 'Tryck på valfri knapp på kontrollen för att upptäcka',
    deviceFallback: 'Ansluten handkontroll',
    durationLabel: 'Mättid',
    durationFive: '5 sek',
    durationTen: '10 sek',
    durationTwenty: '20 sek',
    startAction: 'Starta test',
    stopAction: 'Stoppa',
    resetAction: 'Återställ',
    orbitInstruction: 'Rör vänster spak jämnt i cirklar under mätningen',
    traceLabel: 'Tidsstämpelgraf i realtid',
    observedRateLabel: 'Observerad frekvens',
    intervalLabel: 'Genomsnittligt intervall',
    jitterLabel: 'Avvikelse (Jitter)',
    samplesLabel: 'Giltiga mätpunkter',
    confidenceLabel: 'Testets tillförlitlighet',
    confidenceLow: 'Låg',
    confidenceMedium: 'Medel',
    confidenceHigh: 'Hög',
    statusWaiting: 'Väntar på en kompatibel handkontroll',
    statusReady: 'Klar. Tryck starta med tummen redo på spaken.',
    statusMeasuring: 'Spelar in tidsstämplar lokalt',
    statusNeedsMovement: 'Rör spaken i större cirklar för att samla mer data',
    statusComplete: 'Mätning klar. Upprepa under samma förhållanden.',
    statusUnsupported: 'Din webbläsare stöder inte Gamepad API',
    statusDisconnected: 'Ingen aktiv handkontroll. Anslut en och tryck på en knapp.',
    statusStopped: 'Mätning stoppad. Delresultatet visas fortfarande.',
    limitHeading: 'Teknisk begränsning vid webbläsarmätning',
    limitBody: 'Mäter uppdateringar som syns via Gamepad API. Certifierar inte USB-överklockning eller total latens.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'intervall',
    progressLabel: 'Mätningens förlopp',
  },
};
