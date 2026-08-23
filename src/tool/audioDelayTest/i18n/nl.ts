import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audioverraging-test';
const title = 'Audiovertraging Test';
const description = 'Test waarneembare audiovertraging op luidsprekers, koptelefoons, Bluetooth-apparaten en videoweergave met een lokale browser-impulstest.';

const faq = [
  {
    question: 'Wat meet deze audiovertragingstest precies?',
    answer: 'De optionele microfoonmodus schat het interval tussen een door de browser geplande klik en het opvangen ervan door uw microfoon. De handmatige modus helpt bij het afstemmen op het gehoor. Geen van beide modi is een laboratoriummeting van uw gehele apparatenketen.',
  },
  {
    question: 'Kan ik Bluetooth-latentie testen zonder microfoon?',
    answer: 'Ja. Start de impulsreeks, kies Bluetooth en verschuif de uitlijnslider totdat de flits en de klik gelijktijdig lijken te vallen. Het resultaat wordt opgeslagen als een uitlijncorrectie.',
  },
  {
    question: 'Waarom heeft de microfoonmodus toestemming nodig?',
    answer: 'De browser heeft toegang tot de microfoon nodig om de testklik te horen nadat deze via uw luidsprekers of ruimte akoestiek is voortgeplant. Audio wordt lokaal in de browser verwerkt en niet geüpload.',
  },
  {
    question: 'Waarom kan het microfoonresultaat onnauwkeurig zijn?',
    answer: 'Kamerreflecties, microfoonverwerking, automatische versterkingsregeling en besturingssysteembuffers kunnen het resultaat beïnvloeden. Zie het getal als een schatting voor uw huidige opstelling.',
  },
  {
    question: 'Welke testmodus moet ik kiezen?',
    answer: 'Kies Luidsprekers voor weergave in de ruimte, Bedrade koptelefoon voor directe uitgang, Bluetooth voor draadloze apparaten en Videosynchronisatie bij controle van scherm en speler.',
  },
  {
    question: 'Verstuurt de test mijn microfoonaudio naar een server?',
    answer: 'Nee. De microfoonstream wordt lokaal door de browseranalysator gelezen en de test uploadt geen audio-opnamen.',
  },
];

const howTo = [
  {
    name: 'Kies het weergavepad',
    text: 'Selecteer luidsprekers, bedrade koptelefoon, Bluetooth of videosynchronisatie om de opstelling te definiëren.',
  },
  {
    name: 'Start met de handmatige impuls',
    text: 'Druk op Start test en luister naar de korte klik terwijl u de cyaan visuele impuls bekijkt. Gebruik de slider tot ze samenvallen.',
  },
  {
    name: 'Voeg microfoonmeting toe indien gewenst',
    text: 'Druk op Microfoon inschakelen, verleen toestemming, plaats de microfoon op de luisterplek en voer de reeks opnieuw uit.',
  },
  {
    name: 'Lees het resultaat als schatting',
    text: 'Gebruik de mediane vertraging en het betrouwbaarheidsniveau als indicatie voor uw opstelling.',
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

export const content: ToolLocaleContent<AudioDelayTestUI> = {
  slug,
  title,
  description,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Audiovertragingstest voor Bluetooth en Videosynchronisatie', level: 2 },
    {
      type: 'paragraph',
      html: 'Deze op de browser gebaseerde audiovertragingstest helpt u het tijdsverschil te controleren tussen een visueel signaal en een geluid op uw huidige apparaat. Het is nuttig voor Bluetooth-koptelefoons, draadloze luidsprekers, bedrade koptelefoons en controle van videosynchronisatie. De tool genereert lokaal korte kliks zonder dat u een bestand hoeft te downloaden.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Starten zonder microfoontoegang',
      badge: 'Lokaal en privé',
      html: '<p>De handmatige impulstest werkt zonder microfoon. Bekijk de visuele markering en pas de slider aan totdat het geluid en de flits gelijktijdig aanvoelen. Dit levert een nuttige correctie op zonder een exacte hardwarelatentie voor te spiegelen.</p>',
    },
    {
      type: 'title',
      text: 'Hoe Bluetooth-audiolatentie te testen',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Selecteer Bluetooth en stel een prettig luistervolume in voordat u begint.',
        'Voer de impulsreeks uit vanaf dezelfde browser en hetzelfde apparaat als u normaal gebruikt.',
        'Vergelijk de visuele impuls direct met de klik in plaats van een lang muziekstuk te beoordelen.',
        'Verschuif de uitlijnslider totdat de twee signalen samenvallen en noteer de correctie.',
        'Herhaal de test na het wijzigen van codec, besturingssysteem, browser of afstand.',
      ],
    },
    {
      type: 'table',
      headers: ['Modus', 'Aanbevolen voor', 'Belangrijkste beperking'],
      rows: [
        ['Luidsprekers', 'Weergave in de ruimte en TV-speakers', 'Afstand en reflecties in de ruimte beïnvloeden het akoestische pad.'],
        ['Bedrade koptelefoon', 'Directe koptelefoonuitgang', 'De microfoon kan moeite hebben geluid op te vangen bij gesloten koptelefoons.'],
        ['Bluetooth', 'Draadloze koptelefoons en luidsprekers', 'Codec-buffering kan variëren per apparaat en applicatie.'],
        ['Videosynchronisatie', 'Afstemming van scherm en speler', 'De videospeler kan een eigen vertraging toevoegen aan de beeldweergave.'],
      ],
    },
    {
      type: 'title',
      text: 'Optionele Microfoonmeting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wanneer microfoontoegang is ingeschakeld, analyseert de tool de lokale microfoon op elke klik en registreert de verstreken tijd vanaf het geplande geluid tot de gedetecteerde akoestische piek. De mediaan van de monsters wordt gebruikt om uitschieters te voorkomen.',
    },
    {
      type: 'tip',
      title: 'Plaats de microfoon op de luisterplek',
      html: 'Plaats de microfoon bij luidsprekers op de plek waar u luistert en houd de ruimte stil. Gebruik bij videosynchronisatie uw normale opstelling.',
    },
    {
      type: 'title',
      text: 'Waarom resultaten voor audiovertraging variëren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Audiovertraging ontstaat langs de hele keten: browser-AudioContext, buffers van het besturingssysteem, apparaatcodering en luidsprekers. De microfoon voegt een eigen pad toe. Daarom geeft deze test de huidige combinatie van uw apparatuur en instellingen weer.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gebruik het resultaat als schatting',
      badge: 'Alleen een indicatie',
      html: '<p>Gebruik het resultaat om opstellingen te vergelijken of duidelijke synchronisatieproblemen op te lossen. Het vervangt geen fabrieksspecificatie of gecalibreerde laboratoriummeting.</p>',
    },
  ],
  ui: {
    badge: 'Latentie-observatorium',
    modeLabel: 'Weergavepad',
    modeSpeakers: 'Luidsprekers',
    modeWired: 'Bedraad',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Videosynchronisatie',
    startTest: 'Start test',
    stopTest: 'Stop test',
    enableMic: 'Microfoon inschakelen',
    micEnabled: 'Microfoon gereed',
    calibrationTitle: 'Uitlijncorrectie',
    calibrationHint: 'Verschuif de slider tot flits en klik samenvallen',
    calibrationEarly: 'Audio voorlopend',
    calibrationLate: 'Visueel voorlopend',
    calibrationCenter: 'Uitgelijnd',
    visualLane: 'Visueel',
    audioLane: 'Audio',
    statusReady: 'Gereed',
    statusRunning: 'Impulsreeks actief',
    statusWaiting: 'Wachten op impuls',
    resultTitle: 'Huidige meting',
    latencyLabel: 'Gemeten vertraging',
    alignmentLabel: 'Uitlijncorrectie',
    confidenceLabel: 'Betrouwbaarheid',
    samplesLabel: 'Monsters',
    notMeasured: 'Niet gemeten',
    manualConfidence: 'Alleen handmatig',
    lowConfidence: 'Lage betrouwbaarheid',
    mediumConfidence: 'Gemiddelde betrouwbaarheid',
    highConfidence: 'Hoge betrouwbaarheid',
    noMic: 'Microfooningang niet beschikbaar in deze browser',
    permissionDenied: 'Microfoontoestemming niet verleend',
    limitationTitle: 'Lees het resultaat als een schatting',
    limitationText: 'Ruimtereflecties, microfoonverwerking en buffering beïnvloeden de vertraging. Er worden geen audiogegevens geüpload.',
    copyReport: 'Rapport kopiëren',
    copied: 'Gekopieerd',
    reset: 'Herstellen',
    safety: 'Begin op laag volume. Stop als het geluid vervormt.',
    pulse: 'SYNCHRO',
  },
};
