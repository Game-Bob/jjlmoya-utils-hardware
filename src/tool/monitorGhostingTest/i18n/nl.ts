import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MonitorGhostingTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'monitor-ghosting-test-nederlands';
const title = 'Monitor Ghosting Test';
const description =
  'Test monitor ghosting, bewegingsonscherpte, overdrive-sporen en pixelresponsgedrag met bewegende balken, tekst en fullscreen bewegingspatronen.';

const faqData = [
  {
    question: 'Wat is monitor ghosting?',
    answer:
      'Monitor ghosting is een zichtbare sleep die bewegende objecten volgt wanneer pixels niet snel genoeg kunnen overgangen. Het komt veel voor bij trage LCD-panelen, slecht afgestelde overdrive-modi en schermen die onder hun optimale verversingssnelheid werken.',
  },
  {
    question: 'Kan deze test de exacte responstijd meten?',
    answer:
      'Een browsertest kan laboratoriumapparatuur zoals een pursuit-camera of fotodiode niet vervangen, maar kan wel zichtbare bewegingsartefacten onthullen, monitorinstellingen vergelijken en je helpen de minst onscherpe overdrive-modus te kiezen.',
  },
  {
    question: 'Waarom creert overdrive soms heldere sporen?',
    answer:
      'Overdrive duwt pixels harder om overgangen sneller te maken. Als het de doelkleur overschrijdt, zie je mogelijk inverse ghosting: een heldere of gekleurde halo achter bewegende objecten.',
  },
  {
    question: 'Moet ik op donkere of lichte achtergrond testen?',
    answer:
      'Beide. Sommige panelen vegen donker-naar-grijs overgangen meer uit dan licht-naar-donker overgangen, dus het veranderen van de achtergrond onthult artefacten die een enkel patroon kan verbergen.',
  },
];

const howToData = [
  {
    name: 'Stel de bewegingssnelheid in',
    text: 'Begin dicht bij de standaardsnelheid en verhoog deze totdat de sporen gemakkelijk te inspecteren zijn zonder het object uit het oog te verliezen.',
  },
  {
    name: 'Verander de spoorsterkte',
    text: 'Gebruik de spoorregeling om de persistentie beter zichtbaar te maken tijdens het vergelijken van monitorinstellingen.',
  },
  {
    name: 'Test meerdere achtergronden',
    text: 'Wissel tussen donkere, lichte en rasterachtergronden om zwarte vegen, inverse ghosting en overdrive-halo\'s te onthullen.',
  },
  {
    name: 'Vergelijk overdrive-instellingen',
    text: 'Open je monitor-OSD en test de modi Uit, Normaal, Snel en Extreem. Kies de modus met de helderste beweging en de minste halo.',
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

export const content: ToolLocaleContent<MonitorGhostingTestUI> = {
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
      text: 'Monitor Ghosting Test: Controleer Bewegingsonscherpte en Pixelrespons',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitor ghosting verschijnt wanneer bewegende objecten een zichtbare sleep achterlaten. Het kan games wazig laten aanvoelen, scrollende tekst moeilijker leesbaar maken en een monitor met hoge verversingssnelheid er slechter uit laten zien dan verwacht. Deze monitor ghosting test biedt bewegende balken, tekst en hoogcontrastpatronen zodat je overdrive-modi, verversingssnelheden, achtergronden en bewegingssnelheden kunt vergelijken zonder software te installeren.',
    },
    {
      type: 'paragraph',
      html: 'De test is ontworpen voor praktische inspectie. Het beweert geen grijs-naar-grijs responstijden op laboratoriumniveau, maar het helpt de vraag te beantwoorden die de meeste gebruikers werkelijk hebben: <strong>welke monitorinstelling ziet er het schoonst uit voor mijn ogen op dit scherm?</strong>',
    },
    {
      type: 'title',
      text: 'Hoe Ghosting Eruitziet',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Een donkere schaduw die het bewegende object volgt, vaak zwarte veeg genoemd',
        'Een bleke of gekleurde halo achter het object, vaak veroorzaakt door buitensporige overdrive',
        'Een lang doorschijnend spoor dat randen zacht doet lijken',
        'Meerdere vage kopieen van het object, vooral op schermen met trage pixelrespons',
        'Ongelijke helderheid tussen donkere, lichte en rasterachtergronden',
      ],
    },
    {
      type: 'title',
      text: 'Ghosting, Bewegingsonscherpte en Inverse Ghosting',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Artefact', 'Wat je ziet', 'Veelvoorkomende oorzaak'],
      rows: [
        ['Ghosting', 'Een donkerdere of vervaagde kopie volgt het object', 'Pixelrespons is te traag voor de bewegingssnelheid'],
        ['Bewegingsonscherpte', 'Het hele bewegende object ziet er zacht uit', 'Sample-and-hold onscherpte, lage verversingssnelheid of oogtrage onscherpte'],
        ['Inverse ghosting', 'Heldere halo of gekleurde overshoot-sporen', 'Overdrive-instelling is te agressief'],
        ['Zwarte veeg', 'Donkere scenes laten zware schaduwen achter', 'VA-paneel donkere overgangen zijn traag'],
        ['Stotteren', 'Beweging springt in plaats van te vloeien', 'Frame pacing, lage FPS of browser/systeem belasting'],
      ],
    },
    {
      type: 'title',
      text: 'Een Praktische Diagnostische Workflow',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Begin met je monitor ingesteld op zijn native resolutie en de hoogste stabiele verversingssnelheid. Als je een 144Hz-, 165Hz-, 240Hz- of 360Hz-monitor hebt, bevestig dan dat het besturingssysteem die modus daadwerkelijk gebruikt voordat je de bewegingshelderheid beoordeelt. Open de test in fullscreen, kies het helderheidsbalken-doel en bekijk de achterrand van het bewegende object. De achterrand is waar spooksporen, donkere vegen en heldere overdrive-halo\'s het makkelijkst te vergelijken zijn.',
    },
    {
      type: 'list',
      items: [
        'Gebruik donkere achtergrond om zwarte vegen en trage donkere overgangen te onthullen',
        'Gebruik lichte achtergrond om gekleurde overdrive-halo\'s te onthullen',
        'Gebruik rasterachtergrond om randscherpte te inspecteren tegen hoogcontrast referentielijnen',
        'Gebruik het tekstdoel wanneer je echte probleem wazig scrollen of moeilijk leesbare beweging is',
        'Gebruik fullscreen voordat je een monitor beoordeelt, omdat browser-chrome en schaling kunnen afleiden van bewegingsartefacten',
        'Verhoog de snelheid pas nadat je het object comfortabel kunt volgen',
        'Vergelijk een monitorinstelling per keer zodat je weet wat er is veranderd',
      ],
    },
    {
      type: 'title',
      text: 'De Beste Overdrive-Instelling voor Je Monitor Kiezen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meeste gaming monitors bevatten een overdrive-instelling genaamd Uit, Normaal, Snel, Sneller, Extreem, Responstijd of Trace Free. De snelste optie is niet altijd de beste. Een gematigde instelling biedt vaak de beste balans: minder onscherpte dan Uit, maar minder halo\'s dan Extreem.',
    },
    {
      type: 'table',
      headers: ['Overdrive-modus', 'Verwacht resultaat', 'Aanbeveling'],
      rows: [
        ['Uit', 'Minste overshoot, maar meer onscherpte', 'Nuttige basislijn voor vergelijking'],
        ['Normaal', 'Gematigde onscherptereductie', 'Vaak het beste voor dagelijks gebruik'],
        ['Snel', 'Scherpere beweging met enig risico op halo', 'Goed als de sporen schoon blijven'],
        ['Extreem', 'Laagste responstijd claim, hoogste overshoot-risico', 'Vermijden als heldere inverse sporen verschijnen'],
        ['Adaptief/Variabel', 'Gedrag verandert met verversingssnelheid', 'Opnieuw testen op het FPS-bereik dat je daadwerkelijk gebruikt'],
      ],
    },
    {
      type: 'title',
      text: 'Wat te Veranderen Wanneer de Test Slecht Oogt',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Wat je ziet', 'Waarschijnlijke oorzaak', 'Wat te proberen'],
      rows: [
        ['Lang donker spoor achter het doel', 'Trage donkere pixelovergangen of zwakke overdrive', 'Probeer een sterkere overdrive-modus, test opnieuw op donkere en rasterachtergrond'],
        ['Heldere halo of gekleurde omtrek achter het doel', 'Overdrive overshoot of inverse ghosting', 'Verlaag overdrive een stap en vergelijk op je echte verversingssnelheid'],
        ['Beweging ziet er schokkerig uit in plaats van wazig', 'Frame pacing, browserbelasting of verversingssnelheid-mismatch', 'Sluit zware apps, schakel fullscreen in, bevestig OS-verversingssnelheid'],
        ['Tekst wordt onleesbaar tijdens beweging', 'Sample-and-hold onscherpte, lage verversingssnelheid of trage respons', 'Verhoog de verversingssnelheid, test tekstpatroon, vergelijk overdrive-modi'],
        ['Artefacten veranderen wanneer FPS verandert', 'VRR of adaptief overdrive-gedrag', 'Test opnieuw op het FPS-bereik waarin je daadwerkelijk speelt of werkt'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom Verversingssnelheid Belangrijk Is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hogere verversingssnelheden verminderen de tijd dat elk frame zichtbaar blijft, wat beweging helderder kan laten lijken. Echter, verversingssnelheid alleen elimineert ghosting niet. Een 240Hz-monitor met trage pixelovergangen kan nog steeds vegen, terwijl een goed afgesteld 144Hz-paneel er schoner uit kan zien dan een slecht afgesteld sneller paneel.',
    },
    {
      type: 'table',
      headers: ['Verversingssnelheid', 'Frametijd', 'Wat te verwachten'],
      rows: [
        ['60Hz', '16,7 ms', 'Makkelijk om sample-and-hold onscherpte en langzamere beweging te zien'],
        ['120Hz', '8,3 ms', 'Veel vloeiender, maar pixelrespons doet er nog steeds toe'],
        ['144Hz', '6,9 ms', 'Gebruikelijke gaming-basislijn voor bewegingshelderheid'],
        ['240Hz', '4,2 ms', 'Zeer vloeiend als de responsafstelling goed is'],
        ['360Hz', '2,8 ms', 'Veeleisend: slechte overdrive-afstelling wordt duidelijk'],
      ],
    },
    {
      type: 'title',
      text: 'VRR, Gaming en Testen in de Echte Wereld',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Variabele verversingssnelheid kan het gedrag van een monitor veranderen omdat sommige schermen verschillende overdrive-afstellingen gebruiken bij verschillende verversingssnelheden. Als je probleem alleen in games verschijnt, test dan niet alleen op de maximale desktop-verversingssnelheid. Test opnieuw op het FPS-bereik waarin je daadwerkelijk speelt, vooral rond 60 FPS, 90 FPS, 120 FPS en elke capped frame rate die je gebruikt.',
    },
    {
      type: 'list',
      items: [
        'Als ghosting erger is bij lage FPS, heeft de monitor mogelijk zwakke variabele overdrive-afstelling',
        'Als halo\'s alleen verschijnen bij hoge verversingssnelheden, is de overdrive-modus mogelijk te agressief',
        'Als beweging stottert terwijl het spoor kort blijft, is het probleem waarschijnlijk frame pacing in plaats van pixelrespons',
        'Als fullscreen er anders uitziet dan windowed modus, controleer dan browserschaling, besturingssysteem-schaling en compositor-gedrag',
      ],
    },
    {
      type: 'title',
      text: 'Probleemoplossing bij Slechte Resultaten',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bevestig dat je displaykabel de beoogde verversingssnelheid ondersteunt',
        'Schakel motion smoothing, Black Frame Insertion of MPRT-modi uit tijdens het vergelijken van normale overdrive',
        'Test opnieuw na het instellen van de monitor op zijn native resolutie',
        'Gebruik fullscreen of verlaag de browserzoom als beweging inconsistent lijkt',
        'Sluit zware achtergrond-apps als de animatie stottert',
        'Test hetzelfde patroon na het wijzigen van de GPU-configuratiescherm-instellingen voor verversingssnelheid',
        'Probeer een andere kabel of poort als de monitor zijn geadverteerde verversingssnelheid niet kan bereiken',
        'Test opnieuw met VRR aan en uit wanneer ghosting verandert tussen desktop en games',
      ],
    },
    {
      type: 'title',
      text: 'Beperkingen van een Online Ghosting Test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een browser-gebaseerde ghosting test hangt af van browser-animatietiming, GPU-belasting, besturingssysteemcompositie en je schermconfiguratie. Het is uitstekend voor visuele vergelijking, maar exacte responstijdmetingen vereisen gespecialiseerde apparatuur zoals pursuit-camera\'s, fotodiodes of op oscilloscoop gebaseerde methoden. Gebruik deze test om instellingen te kiezen en duidelijke artefacten te herkennen, niet om beweringen van fabrikanten over responstijden te certificeren.',
    },
  ],
  ui: {
    badge: 'Bewegingshelderheid',
    speedLabel: 'Bewegingssnelheid',
    pixelsPerSecondUnit: 'px/s',
    pixelUnit: 'px',
    millisecondUnit: 'ms',
    trailLabel: 'Spoorsterkte',
    backgroundLabel: 'Achtergrond',
    backgroundDark: 'Donker',
    backgroundLight: 'Licht',
    backgroundGrid: 'Raster',
    patternLabel: 'Testdoel',
    patternBars: 'Helderheidsbalken',
    patternText: 'Tekstblok',
    patternUfo: 'UFO',
    pursuitLabel: 'Pursuit-gids',
    pursuitOn: 'Aan',
    pursuitOff: 'Uit',
    fullscreen: 'Fullscreen',
    exitFullscreen: 'Fullscreen verlaten',
    pause: 'Pauze',
    resume: 'Hervatten',
    targetText: 'BEWEGING',
    estimatedBlur: 'geschatte onscherpte',
    frameStep: 'Framestap',
    persistence: 'Persistentie',
    sampleCount: 'Spoormonsters',
    instructions: 'Bekijk de achterrand van het bewegende doel terwijl je snelheid, spoorsterkte, achtergrond, fullscreen-modus en monitor-overdrive-instellingen wijzigt.',
    reset: 'Resetten',
  },
};
