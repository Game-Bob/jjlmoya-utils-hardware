import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'toetsenbord-chatter-test';
const title = 'Toetsenbord Chatter Test';
const description = 'Detecteer mechanisch toetsenbord chatteren, dubbel typen en defecte schakelaarbounce door te controleren hoe snel dezelfde toets twee keer verschijnt.';

const faqData = [
  {
    question: 'Wat is toetsenbord chatter?',
    answer: 'Toetsenbord chatter is een hardwarefout waarbij één fysieke druk wordt geregistreerd als meerdere drukken. Het komt vaak voor bij vuile, versleten, geoxideerde of slecht gedebouncete mechanische schakelaars.',
  },
  {
    question: 'Hoe werkt deze toetsenbord chatter test?',
    answer: 'Druk dezelfde verdachte toets langzaam in, één tik per keer. Als het logboek herhaalde drukken met slechts enkele milliseconden ertussen toont, kan de schakelaar stuiteren en dubbele letters produceren.',
  },
  {
    question: 'Welke delta betekent dat mijn toetsenbord dubbel typt?',
    answer: 'Een herhaalde druk onder 30 ms is sterk verdacht voor chatter. Herhalingen van 30 tot 50 ms verdienen aandacht. Normale opzettelijke herhaalde drukken zijn meestal boven 50 ms voor de meeste gebruikers.',
  },
  {
    question: 'Waarom toont de eerste druk geen delta?',
    answer: 'Een delta heeft een eerdere druk van dezelfde toets nodig. De eerste druk legt de basislijn vast, en latere drukken tonen het tijdsverschil in milliseconden.',
  },
  {
    question: 'Kan software toetsenbord chatteren oplossen?',
    answer: 'Debounce-software kan sommige symptomen verbergen, maar repareert de schakelaar niet. Schoonmaken, hot-swap schakelaars opnieuw plaatsen, de schakelaar vervangen of de toetsenbord-PCB repareren kan nodig zijn.',
  },
];

const howToData = [
  {
    name: 'Open de tool en druk normaal op toetsen',
    text: 'Er is geen startknop. Klik indien nodig in de tool en druk vervolgens op de toets die dubbel heeft getypt.',
  },
  {
    name: 'Tik de verdachte toets één voor één aan',
    text: 'Druk op de toets die dubbel typt. Als één fysieke druk meerdere logregels met kleine delta\'s creëert, chattering de schakelaar waarschijnlijk.',
  },
  {
    name: 'Lees de kleurcode',
    text: 'Groen betekent normaal boven 50 ms, geel betekent verdacht van 30 tot 50 ms en rood betekent chatter gedetecteerd onder 30 ms.',
  },
  {
    name: 'Exporteer het logboek indien nodig',
    text: 'Gebruik de downloadknop om een CSV-logboek op te slaan dat kan helpen bij het vergelijken van toetsen of het documenteren van een intermitterende fout.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Mechanische Toetsenbord Dubbel Typ Test',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze toetsenbord chatter test helpt bij het diagnosticeren van een mechanisch toetsenbord dat twee letters typt uit één druk, schone loslatingen mist of herhaalde tekens produceert zonder dat u opzettelijk twee keer tikte. Gebruik het voordat u schakelaars schoonmaakt, firmware debounce-instellingen wijzigt, een garantieclaim opent of een hot-swap schakelaar vervangt.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hoe het resultaat te lezen',
      badge: 'Delta drempelwaarden',
      html: '<p><strong>Normaal</strong> betekent dat de herhaling boven 50 ms was en meestal opzettelijk is. <strong>Verdacht</strong> betekent 30-50 ms en moet opnieuw worden getest op dezelfde toets. <strong>Chatter gedetecteerd</strong> betekent onder 30 ms, wat zeer waarschijnlijk één fysieke druk is die in meerdere elektrische contacten stuitert.</p>',
    },
    {
      type: 'title',
      text: 'Waarom Mechanische Schakelaars Chatteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een mechanische schakelaar sluit niet als een perfect schoon digitaal signaal. De metalen contacten kunnen enkele milliseconden stuiteren voordat ze tot rust komen. Toetsenbordfirmware filtert die stuiter normaal met een debounce-venster. Chatteren gebeurt wanneer het contact vuil, versleten, geoxideerd, los, gebarsten of slecht afgesteld is, zodanig dat het toetsenbord extra drukken meldt nadat het debounce-filter ze had moeten afhandelen.',
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Waarschijnlijke oorzaak', 'Wat eerst te proberen'],
      rows: [
        ['Eén toets typt dezelfde letter twee keer', 'Vuil of versleten schakelcontact', 'Verwijder de keycap, blaas stof weg en test opnieuw voordat u de schakelaar vervangt.'],
        ['Meerdere hot-swap toetsen chatteren na een build', 'Schakelpinnen niet goed geplaatst', 'Trek de schakelaar eruit en plaats hem opnieuw, controleer op gebogen pinnen of een losse socket.'],
        ['Gebeurt alleen na morsen of vochtigheid', 'Oxidatie of residu op contacten', 'Koppel het toetsenbord los en reinig volgens de richtlijnen van de fabrikant.'],
        ['Veel toetsen tonen kleine delta\'s', 'Firmware debounce te laag of scanprobleem', 'Vergelijk op een andere USB-poort en bekijk firmware debounce-instellingen indien beschikbaar.'],
      ],
    },
    {
      type: 'title',
      text: 'Testmethode Die Valse Positieven Vermindert',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Test één verdachte toets tegelijk in plaats van volledige zinnen te typen.',
        'Druk de toets één keer in, laat hem volledig los en wacht een moment voor de volgende druk.',
        'Vergelijk de verdachte toets met een nabijgelegen toets die gezond aanvoelt.',
        'Negeer de eerste rij voor een toets omdat er geen eerdere druk is om mee te vergelijken.',
        'Als dezelfde toets herhaaldelijk rode rijen onder 30 ms toont van enkele tikken, behandel het dan als een hardwarefout.',
        'Als er alleen gele rijen verschijnen, herhaal de test dan langzamer en controleer of uw tikritme het korte interval veroorzaakt.',
      ],
    },
    {
      type: 'title',
      text: 'Chatter vs. Opzettelijk Snel Typen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chatter',
          description: 'Geclusterd op één toets, vaak onder 30 ms, en verschijnt wanneer u één druk bedoelde.',
          points: ['Inspecteer de schakelaar of socket.', 'Vergelijk met een nabijgelegen gezonde toets.'],
        },
        {
          title: 'Snel typen',
          description: 'Beïnvloedt veel toetsen, volgt uw ritme en neigt boven 50 ms te zitten tussen herhaalde drukken van dezelfde toets.',
          points: ['Meestal normaal gebruik.', 'Her test met langzamere enkele tikken.'],
        },
        {
          title: 'OS toetsherhaling',
          description: 'Verschijnt bij het ingedrukt houden van een toets en herhaalt meestal op een regelmatig ritme ingesteld door uw besturingssysteem.',
          points: ['Laat volledig los tussen tikken.', 'Controleer toetsenbordherhalingsinstellingen apart.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wat te Doen Wanneer een Toets Faalt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sla een CSV-logboek op voordat u iets verandert, zodat u voor- en na-resultaten kunt vergelijken.',
        'Verwijder de keycap en inspecteer op vuil, vloeistofresten of een steel die niet soepel terugkeert.',
        'Voor hot-swap toetsenborden, herplaats of vervang de schakelaar en test dezelfde toetspositie opnieuw.',
        'Voor gesoldeerde toetsenborden, vergelijk firmware debounce-opties voordat u aanneemt dat de PCB gerepareerd moet worden.',
        'Probeer een andere kabel en USB-poort als meerdere niet-gerelateerde toetsen onmogelijke delta\'s tonen.',
        'Voor garantieondersteuning, vermeld de getroffen toets, herhaalde deltawaarden, toetsenbordmodel, firmwareversie en of de fout de schakelaar of de PCB-socket volgt.',
      ],
    },
    {
      type: 'summary',
      title: 'Snelle regel',
      items: [
        'Een enkele rode rij is een aanwijzing, geen vonnis.',
        'Herhaalde rode rijen onder 30 ms op dezelfde fysieke toets zijn sterk bewijs van toetsenbord chatter.',
        'Gebruik opzettelijke enkele tikken en vergelijk de verdachte schakelaar met een nabijgelegen gezonde toets voordat u hardware vervangt.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Druk op een toets',
    statusListening: 'Toetsdelta\'s meten',
    statusChatter: 'Chatter gedetecteerd',
    totalPresses: 'Totaal drukken',
    chatterEvents: 'Chatter gebeurtenissen',
    worstDelta: 'Slechtste delta',
    watchWindow: 'Rijen behouden',
    keyColumn: 'Toets',
    deltaColumn: 'Delta',
    verdictColumn: 'Oordeel',
    timeColumn: 'Tijd',
    normal: 'Normaal',
    suspect: 'Verdacht',
    chatter: 'Chatter',
    waiting: 'Wachten',
    clear: 'Logboek wissen',
    exportLog: 'CSV exporteren',
    hint: 'Het logboek bewaart de meest recente 80 rijen zodat lange sessies snel blijven. Ingedrukt-toets herhaling wordt genegeerd; rode rijen komen van afzonderlijke drukken die te dicht op elkaar plaatsvonden.',
    captureNotice: 'Geen startknop. Tik een verdachte toets één keer aan en bekijk de delta ten opzichte van de vorige druk.',
    keyboardAriaLabel: 'Recente toetsactiviteit',
    logAriaLabel: 'Toetsenbord chatter gebeurtenislogboek',
    escapeKey: 'Esc',
    backspaceKey: 'Back',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Caps',
    shiftKey: 'Shift',
    controlKey: 'Ctrl',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Spatie',
    csvHeader: 'toets,code,delta_ms,ernst,tijd',
  },
};
