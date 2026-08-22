import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GamepadPollingRateCheckerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gamepad-polling-rate-tester-hertz';
const title = 'Gamepad Polling Rate en Hertz Tester';
const description = 'Meet de in de browser waargenomen verversingssnelheid, rapportage-interval en tijdsstabiliteit van uw USB- of Bluetooth-gamepad.';

const faq = [
  {
    question: 'Wat meet deze gamepad polling rate tester?',
    answer: 'Het meet wijzigingen in de Gamepad API tijdstempels in de browser terwijl u een analoge stick beweegt. De getoonde Hertz-waarde is een waargenomen verversingssnelheid in de browser en geen directe elektrische meting van het USB-signaal.',
  },
  {
    question: 'Kan de browser certificeren dat mijn controller op 1000 Hz werkt?',
    answer: 'Het kan tonen of tijdstempels vloeiend op de pagina binnenkomen, maar het kan geen 1000 Hz USB-overclocking garanderen. Browsertimings en het besturingssysteem kunnen rapporten groeperen.',
  },
  {
    question: 'Waarom moet ik de analoge stick in cirkels draaien?',
    answer: 'Door continu cirkelvormig te bewegen veranderen beide assen voortdurend, wat een constante stroom van nieuwe statussen oplevert. Als de stick stilstaat ontstaan er te weinig toestandsveranderingen.',
  },
  {
    question: 'Kan ik de prestaties van USB en Bluetooth vergelijken?',
    answer: 'Ja, voer de test uit met dezelfde duur en cirkelbeweging voor elke verbinding in dezelfde browser om frequentie, interval en jitter te vergelijken.',
  },
];

const howTo = [
  {
    name: 'Controller aansluiten en activeren',
    text: 'Sluit de gamepad aan via USB of Bluetooth en druk op een knop zodat de browser deze herkent via de Gamepad API.',
  },
  {
    name: 'Apparaat en meetduur selecteren',
    text: 'Kies de controller uit de lijst en stel tien seconden in voor een gebalanceerde eerste meting.',
  },
  {
    name: 'Analoge stick continu draaien',
    text: 'Start de meting en draai de linker stick in vloeiende cirkels totdat de voortgangsring vol is.',
  },
  {
    name: 'Waargenomen snelheid en stabiliteit aflezen',
    text: 'Vergelijk de gemiddelde Hertz, het milliseconden-interval en de jitter onder identieke testomstandigheden.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<GamepadPollingRateCheckerUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over gamepad polling rate',
  faq,
  bibliographyTitle: 'Technische referenties',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Meet de waargenomen verversingssnelheid van uw gamepad in de browser',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tool bewaakt de tijdstempels van de geselecteerde gamepad terwijl de analoge stick beweegt. Het verwijdert uitschieters, berekent het gemiddelde interval en rekent dit om naar waargenomen Hertz (1000 gedeeld door milliseconden). Alle berekeningen worden lokaal uitgevoerd.',
    },
    {
      type: 'table',
      headers: ['Meting', 'Wat deze waarde aangeeft', 'Wat het niet bewijst'],
      rows: [
        ['Waargenomen snelheid', 'Aantal ontvangen rapporten per seconde in de pagina', 'De elektrische USB-pollingsnelheid'],
        ['Gemiddeld interval', 'Gemiddelde tijd tussen twee tijdstempel-updates', 'De totale invoervertraging tot het scherm'],
        ['Jitter (variatie)', 'Tijdsverschil tussen het 5e en 95e percentiel', 'Een definitief defect aan de hardware'],
        ['Betrouwbaarheid', 'Hoeveelheid en regelmatigheid van verzamelde metingen', 'Een industriële laboratoriumprecisie'],
      ],
    },
    {
      type: 'title',
      text: 'Zo voert u een herhaalbare Hertz-test uit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sluit zware achtergrondtaken, houd het tabblad actief en draai de stick bij elke meting in dezelfde rustige beweging. Gebruik dezelfde browser en duur bij het vergelijken van kabels, Bluetooth-adapters of besturingssysteeminstellingen.',
    },
    {
      type: 'tip',
      title: 'Vergelijk altijd onder gelijke omstandigheden',
      html: 'Voer minimaal twee tests uit na het wisselen van kabel of USB-poort. Een losse piek is minder waardevol dan een stabiele verversingssnelheid met lage jitter.',
    },
    {
      type: 'title',
      text: 'Waarom dit geen volledige invoervertragingstest is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De Gamepad API leest gegevens nadat het besturingssysteem en de browser deze hebben verwerkt. Het meet niet de elektrische kabelrespons of de schermweergavetijd. Het is uitstekend voor vergelijkende metingen op het web, maar niet voor totale invoerlatantie.',
    },
  ],
  ui: {
    privacyNote: '100% lokale signaalverwerking',
    stepConnect: 'Aansluiten en knop indrukken',
    stepMove: 'Stick in cirkels draaien',
    stepRead: 'Snelheid en stabiliteit vergelijken',
    deviceLabel: 'Actieve gamepad detecteren',
    devicePlaceholder: 'Druk op een knop op de controller om te detecteren',
    deviceFallback: 'Aangesloten gamepad',
    durationLabel: 'Meetduur',
    durationFive: '5 sec',
    durationTen: '10 sec',
    durationTwenty: '20 sec',
    startAction: 'Meting starten',
    stopAction: 'Stoppen',
    resetAction: 'Herstellen',
    orbitInstruction: 'Draai de linker stick continu in cirkels tijdens de meting',
    traceLabel: 'Live tijdstempelweergave',
    observedRateLabel: 'Waargenomen snelheid',
    intervalLabel: 'Gemiddeld interval',
    jitterLabel: 'Variatie (Jitter)',
    samplesLabel: 'Geldige metingen',
    confidenceLabel: 'Betrouwbaarheid',
    confidenceLow: 'Laag',
    confidenceMedium: 'Gemiddeld',
    confidenceHigh: 'Hoog',
    statusWaiting: 'Wachten op een compatibele controller',
    statusReady: 'Klaar. Druk op starten met uw duim op de stick.',
    statusMeasuring: 'Tijdstempels worden lokaal opgeslagen',
    statusNeedsMovement: 'Draai de stick in ruimere cirkels voor meer meetpunten',
    statusComplete: 'Meting voltooid. Herhaal onder dezelfde omstandigheden.',
    statusUnsupported: 'Uw browser ondersteunt de Gamepad API niet',
    statusDisconnected: 'Geen actieve controller. Sluit er een aan en druk op een knop.',
    statusStopped: 'Meting gestopt. Gedeeltelijk resultaat blijft zichtbaar.',
    limitHeading: 'Technische beperking van browsermetingen',
    limitBody: 'Meet via de Gamepad API zichtbare updates. Garandeert geen USB-overclocking of totale invoerlatantie.',
    emptyValue: '-',
    hertzUnit: 'Hz',
    millisecondsUnit: 'ms',
    reportsUnit: 'intervallen',
    progressLabel: 'Voortgang van meting',
  },
};
