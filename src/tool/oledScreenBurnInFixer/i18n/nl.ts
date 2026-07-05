import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { OledScreenBurnInFixerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'oled-inbranding-hersteller';
const title = 'OLED Inbranding Hersteller';
const description =
  'Voer een volledig scherm OLED inbranding hersteller en LCD vastgelopen pixel trainer uit met snelle RGB kleurcycli, witte ruis, een verplichte fotosensitiviteitswaarschuwing en een ingebouwde timer.';

const faqData = [
  {
    question: 'Kan een OLED inbranding hersteller permanente inbranding verwijderen?',
    answer:
      'Geen enkele browsertool kan permanente organische subpixel slijtage terugdraaien. Een pixel trainer kan tijdelijke beeldretentie verminderen, lichte ghosting minder zichtbaar maken of helpen diagnosticeren of een markering tijdelijke retentie of permanente inbranding is.',
  },
  {
    question: 'Is dit veilig voor mensen met fotosensitieve epilepsie?',
    answer:
      'De test gebruikt snel knipperende kleuren en hoogcontrast statische ruis. Mensen met fotosensitieve epilepsie, migrainegevoeligheid, aanvalsrisico of ongemak door knipperende lichten mogen deze niet uitvoeren.',
  },
  {
    question: 'Kan dit een vastgelopen LCD pixel repareren?',
    answer:
      'Het kan soms een vastgelopen pixel die rood, groen, blauw of wit blijft helpen door de subpixel status snel te veranderen. Een dode zwarte pixel of fysieke paneelschade kan het niet repareren.',
  },
  {
    question: 'Hoe lang moet ik de pixel trainer laten draaien?',
    answer:
      'Begin met 5 tot 10 minuten voor een vastgelopen pixel of lichte beeldretentie. Langere sessies moeten onder toezicht staan, de helderheid redelijk blijven en het scherm de kans krijgen om af te koelen.',
  },
  {
    question: 'Waarom gebruikt de tool canvas in plaats van video?',
    answer:
      'De patronen worden rechtstreeks in HTML5 Canvas gegenereerd, zodat de pagina geen zware video bestanden nodig heeft. Dat houdt het laden snel en maakt de kleur en ruis cyclus responsief op de volledige schermgrootte.',
  },
];

const howToData = [
  {
    name: 'Lees de fotosensitiviteitswaarschuwing',
    text: 'Ga niet verder als knipperend licht, hoogcontrast patronen, migraine of aanvalsrisico jou of iemand in de buurt kunnen beïnvloeden.',
  },
  {
    name: 'Stel een korte eerste uitvoering in',
    text: 'Kies 5 tot 10 minuten voor een eerste doorgang, selecteer de Hybride modus en houd de helderheid op een comfortabel niveau.',
  },
  {
    name: 'Start de reparatie op volledig scherm',
    text: 'Bevestig de waarschuwing, druk op Reparatie starten en laat het canvas de RGB kleuren en statische ruis doorlopen zonder andere vensters over het scherm te verplaatsen.',
  },
  {
    name: 'Inspecteer de markering achteraf',
    text: 'Stop de test, toon neutraal grijs, wit, zwart, rood, groen en blauw schermen en vergelijk of het spookbeeld of de vastgelopen pixel is veranderd.',
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

export const content: ToolLocaleContent<OledScreenBurnInFixerUI> = {
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
      text: 'OLED Inbranding Hersteller en LCD Vastgelopen Pixel Trainer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze OLED scherm inbranding hersteller is een volledig scherm pixel trainer voor tijdelijke beeldretentie, vage spookbeelden en sommige vastgelopen LCD pixels. Hij genereert snelle rode, groene, blauwe, witte, zwarte, gele en statische patronen rechtstreeks in HTML5 Canvas. Er zijn geen video bestanden, geen externe afbeeldingsbronnen en geen downloadstap: de browser schildert elk frame op de huidige schermgrootte.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Fotosensitiviteitswaarschuwing',
      icon: 'mdi:alert',
      badge: 'Verplicht',
      html: 'Het reparatiepatroon gebruikt snelle flitsen, hoogcontrast overgangen en witte ruis. Voer het niet uit als je fotosensitieve epilepsie, aanvalsrisico, migrainegevoeligheid, duizeligheid door knipperende lichten hebt of als iemand in de buurt beïnvloed zou kunnen worden. Stop onmiddellijk als je oogbelasting, misselijkheid, hoofdpijn of ongemak ervaart.',
    },
    {
      type: 'paragraph',
      html: 'De tool is nuttig wanneer de praktische vraag is: <strong>is deze markering tijdelijke retentie die kan vervagen of permanente paneelslijtage?</strong> Een korte begeleide uitvoering kan soms een spookbeeld verminderen dat veroorzaakt is door vastgehouden statische UI elementen, en kan soms een subpixel die op een kleur vastzit wakker maken. Het kan versleten OLED materiaal niet opnieuw opbouwen, een gebarsten laag niet repareren, een dode aansturingslijn niet herstellen en herstel niet garanderen.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '0 MB', label: 'video bestanden geladen', icon: 'mdi:speedometer' },
        { value: 'RGB', label: 'primaire subpixel training', icon: 'mdi:palette' },
        { value: '1-120 min', label: 'ingebouwde sessie timer', icon: 'mdi:timer-outline' },
        { value: '100%', label: 'uitvoering aan clientzijde', icon: 'mdi:lock-outline' },
      ],
    },
    {
      type: 'title',
      text: 'Wat inbranding, beeldretentie en ghosting betekenen',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'OLED inbranding',
          definition: 'Permanente ongelijke slijtage van organische subpixels. Een statisch logo, taakbalk, navigatiebalk of game HUD kan een zichtbare vorm achterlaten omdat die pixels anders zijn verouderd dan de rest van het paneel.',
        },
        {
          term: 'Tijdelijke beeldretentie',
          definition: 'Een kortstondig spookbeeld dat achterblijft nadat statische inhoud verdwijnt. Het kan vervagen met normale gemengde inhoud, een compensatiecyclus of een pixel trainingspatroon.',
        },
        {
          term: 'LCD vastgelopen pixel',
          definition: 'Een pixel of subpixel die vastzit op rood, groen, blauw, wit of een andere vaste kleur. Snelle statuswisselingen kunnen hem soms bevrijden als het probleem geen fysieke schade is.',
        },
        {
          term: 'Dode pixel',
          definition: 'Een pixel die zwart blijft omdat hij geen licht meer correct uitzendt of doorlaat. Een browser pixel trainer kan een echt dode pixel normaal gesproken niet reanimeren.',
        },
        {
          term: 'LCD ghosting',
          definition: 'Bewegingssporen veroorzaakt door trage pixelrespons. Dat is anders dan scherm inbranding, hoewel gebruikers beide vaak als spookbeelden beschrijven.',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Tijdelijke retentie',
          description: 'Vervaagt meestal na gemengde inhoud, schermvernieuwingsroutines of een korte RGB en ruis sessie.',
          icon: 'mdi:history',
          highlight: true,
          points: ['Zichtbaar na statische inhoud', 'Vaak zachter aan de randen', 'Kan binnen minuten of uren verbeteren'],
        },
        {
          title: 'Permanente inbranding',
          description: 'Ongelijke OLED slijtage die zichtbaar blijft na rust, compensatiecycli en gevarieerde inhoud.',
          icon: 'mdi:contrast-circle',
          points: ['Komt overeen met langdurige statische UI', 'Het duidelijkst op effen kleuren', 'Verdwijnt niet na trainen'],
        },
        {
          title: 'Vastgelopen pixel',
          description: 'Een enkel punt of klein groepje vastgezet op een kleur in plaats van een groot spookbeeld.',
          icon: 'mdi:grain',
          points: ['Vaak één pixel breed', 'Kan rood, groen, blauw of wit zijn', 'Reageert soms op snelle kleurwisselingen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe de pixel trainer veilig te gebruiken',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Verlaag de helderheid voor de eerste uitvoering, vooral op OLED telefoons, OLED tv\'s en laptop OLED panelen.',
        'Begin met 5 tot 10 minuten; laat het scherm niet onbeheerd achter tijdens lange sessies.',
        'Gebruik volledig scherm zodat het getroffen gebied hetzelfde patroon ontvangt als de rest van het paneel.',
        'Maak de ruimte bewust van het knipperende licht; voer de test niet uit in de buurt van mensen die er niet mee hebben ingestemd.',
        'Stop als het paneel ongebruikelijk warm wordt, als de browser zwaar hapert of als je ongemak ervaart.',
        'Inspecteer na de uitvoering neutraal grijs, wit, zwart, rood, groen en blauw schermen om resultaten te vergelijken.',
      ],
    },
    {
      type: 'table',
      headers: ['Probleem', 'Eerste modus', 'Eerste duur', 'Helderheidsadvies'],
      rows: [
        ['Zwak OLED spookbeeld', 'Hybride RGB plus ruis', '5-10 minuten', 'Comfortabel, niet maximaal'],
        ['Recente statische logo retentie', 'RGB cyclus', '10-20 minuten', 'Gemiddelde helderheid'],
        ['Enkele gekleurde vastgelopen LCD pixel', 'Ruis of Hybride', '5-15 minuten', 'Normale desktop helderheid'],
        ['Oude permanente inbranding', 'Hybride alleen voor diagnose', '5 minuten', 'Vermijd lange sessies met hoge helderheid'],
        ['Dode zwarte pixel', 'Niet aanbevolen als reparatie', 'Alleen inspectie', 'Geen pixel trainer kan herstel garanderen'],
      ],
    },
    {
      type: 'tip',
      title: 'Gebruik eerst korte sessies',
      html: 'Een lange knippersessie is niet automatisch beter. Als een markering tijdelijk is, zie je vaak al na een korte doorgang verandering. Als er na een redelijke poging en een normale paneelvernieuwingsroutine niets verandert, kan het probleem permanente slijtage of een hardwaredefect zijn.',
    },
    {
      type: 'title',
      text: 'Kiezen tussen RGB cyclus, witte ruis en hybride modus',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verschillende artefacten reageren op verschillende patronen. Een rood groen blauw cyclus traint de primaire subpixels in een gecontroleerde volgorde. Witte ruis wisselt snel de helderheid af over veel kleine gebieden, wat kan helpen bij het blootleggen en trainen van geïsoleerde vastgelopen pixels. De hybride modus wisselt beide af, waardoor het de beste eerste keuze is als je niet zeker weet of het probleem beeldretentie of een luie subpixel is.',
    },
    {
      type: 'table',
      headers: ['Modus', 'Wat het doet', 'Beste voor', 'Let op'],
      rows: [
        ['RGB cyclus', 'Volledig scherm primaire en hoogcontrast velden', 'OLED retentie en kleurkanaal inspectie', 'Zichtbaar knipperen'],
        ['Witte ruis', 'Willekeurige zwart wit statische ruis over het paneel', 'Enkele vastgelopen pixels en kleine clusters', 'Hogere visuele intensiteit'],
        ['Hybride', 'Wisselt kleurvelden en statische ruis af', 'Algemene OLED inbranding hersteller workflow', 'Gebruik eerst een korte timer'],
      ],
    },
    {
      type: 'proscons',
      title: 'Online pixel trainer: realistische voordelen en grenzen',
      items: [
        {
          pro: 'Draait direct in de browser zonder software te installeren of video bestanden te laden.',
          con: 'Kan permanente OLED materiaalslijtage of fysieke paneelschade niet terugdraaien.',
        },
        {
          pro: 'Volledig scherm canvas bedekt het display met gegenereerde RGB en statische frames.',
          con: 'Browser timing, apparaatprestaties en volledig scherm ondersteuning kunnen de animatieconsistentie beïnvloeden.',
        },
        {
          pro: 'Nuttig voor een eerste diagnose voordat je de paneelonderhoudsroutines van de fabrikant probeert.',
          con: 'Moet de garantieservice voor nieuwe panelen met duidelijke defecten niet vervangen.',
        },
      ],
    },
    {
      type: 'title',
      text: 'OLED specifieke richtlijnen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'OLED pixels zenden hun eigen licht uit. Wanneer een statisch element vele uren op het scherm blijft, kunnen de subpixels onder dat element in een ander tempo verouderen. Daarom volgt inbranding vaak de vorm van tv zenderlogo\'s, telefoon statusbalken, navigatieknoppen, game HUD\'s, streaming app zijbalken of desktop taakbalken. Een pixel trainer kan tijdelijke retentie sneller laten vervagen, maar permanente differentiële veroudering blijft een materiaalprobleem.',
    },
    {
      type: 'card',
      icon: 'mdi:cog-outline',
      title: 'Controleer eerst de ingebouwde paneelzorg',
      html: 'Veel OLED tv\'s, monitoren, laptops en telefoons beschikken over pixel vernieuwing, paneel vernieuwing, logo dimming, screen shift, taakbalk dimming of compensatiecycli. Gebruik de fabrikantroutine volgens de instructies, vooral als het display onder garantie staat. Deze online tool wordt het best gezien als een milde diagnose en oefening voor tijdelijke retentie, niet als vervanging van de paneelzorg firmware.',
    },
    {
      type: 'list',
      items: [
        'Als het spookbeeld nieuw is, laat het scherm dan gevarieerde inhoud tonen of rusten voordat je uitgaat van permanente inbranding.',
        'Als de markering overeenkomt met een jaren oud statisch logo, is het onwaarschijnlijk dat een pixel trainer deze volledig verwijdert.',
        'Als het paneel een ingebouwde vernieuwingscyclus heeft, voer deze dan alleen uit zo vaak als de fabrikant aanbeveelt.',
        'Vermijd het urenlang draaien van testpatronen op maximale helderheid; hitte en helderheid dragen bij aan slijtage.',
        'Verberg taakbalken, schakel screensavers in en verlaag de helderheid van statische UI om herhaling te voorkomen.',
      ],
    },
    {
      type: 'title',
      text: 'LCD vastgelopen pixel richtlijnen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'LCD panelen branden niet op dezelfde manier in als OLED panelen, maar kunnen vastgelopen pixels, drukplekken, paneeldefecten en tijdelijke beeldpersistentie vertonen. Een vastgelopen pixel die rood, groen, blauw, cyaan, magenta, geel of wit blijft, kan worden veroorzaakt door een subpixel die niet correct schakelt. Snelle veranderingen kunnen soms helpen, hoewel er geen gegarandeerde online reparatie bestaat.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Dode pixel versus vastgelopen pixel',
      icon: 'mdi:information-outline',
      badge: 'Diagnose',
      html: 'Een gekleurd punt heeft een betere kans dan een zwart punt. Een zwarte pixel op elke testkleur is meestal dood of geblokkeerd. Een gekleurde pixel die op sommige achtergronden verandert maar op andere niet, kan een vastgelopen subpixel zijn en is een betere kandidaat voor een korte pixel trainingssessie.',
    },
    {
      type: 'summary',
      title: 'Voordat je druk of fysieke methoden gebruikt',
      items: [
        'Druk niet hard op OLED panelen, touchscreens of kwetsbare laptop schermen.',
        'Vermijd scherpe gereedschappen, in doek gewikkelde pennen en elke methode die het oppervlak kan krassen.',
        'Gebruik eerst software training, daarna garantieondersteuning als het defect blijft bestaan.',
        'Documenteer het defect met macrofoto\'s als het display nieuw is en retourbeleid nog van toepassing is.',
      ],
    },
    {
      type: 'title',
      text: 'Waarom Canvas beter is dan een zware reparatievideo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een video gebaseerde inbranding hersteller moet gecodeerde frames downloaden, decoderen, schalen naar het scherm en hopen dat de compressie de exacte overgangen niet heeft verzacht. Deze tool genereert elk frame rechtstreeks in de browser. De RGB velden zijn effen, de ruis wordt gemaakt voor de huidige canvas grootte en de pagina vermijdt grote mediabestanden die het laden zouden vertragen of de PageSpeed zouden verlagen.',
    },
    {
      type: 'list',
      items: [
        'Geen extern video bestand betekent snellere eerste rendering en minder netwerkafhankelijkheid.',
        'Canvas output schaalt naar het volledige schermoppervlak in plaats van beperkt te zijn door een videoresolutie.',
        'De timer kan de reparatie automatisch stoppen in plaats van een video eindeloos te herhalen.',
        'Modus, snelheid, duur en intensiteit kunnen worden gewijzigd zonder een ander bestand te laden.',
      ],
    },
    {
      type: 'message',
      title: 'Een praktische verwachting',
      ariaLabel: 'Inbranding hersteller verwachting',
      html: 'Gebruik deze tool als een gecontroleerde eerste stap: verminder tijdelijke retentie, train een mogelijke vastgelopen pixel en verzamel bewijs. Als de markering gevarieerde inhoud, ingebouwde paneelvernieuwingsroutines en voorzichtige korte trainingssessies overleeft, behandel het dan als een hardware of garantieprobleem.',
    },
  ],
  ui: {
    safetyTitle: 'Waarschuwing voor knipperend licht',
    safetyBody: 'Dit reparatiepatroon flitst snel met effen kleuren en hoogcontrast statische ruis. Gebruik het niet als jij of iemand in de buurt last kan hebben van fotosensitieve epilepsie, aanvallen, migraine, duizeligheid of knipperlichtgevoeligheid.',
    safetyChecklist: 'Houd de helderheid redelijk, houd toezicht op de sessie en stop onmiddellijk als je ongemak ervaart.',
    safetyConfirm: 'Ik begrijp het fotosensitiviteitsrisico en wil de reparatieknop inschakelen.',
    safetyContinue: 'Doorgaan naar instellingen',
    startRepair: 'Reparatie starten (Volledig scherm)',
    controlsLabel: 'OLED scherm reparatie bediening',
    modeLabel: 'Patroon modus',
    modeCycle: 'RGB cyclus',
    modeNoise: 'Witte ruis',
    modeHybrid: 'Hybride',
    modeCycleDescription: 'Effen primaire kleuren voor beeldretentie en kanaalcontrole.',
    modeNoiseDescription: 'Hoogfrequente ruis voor enkele vastgelopen pixels en kleine clusters.',
    modeHybridDescription: 'Beste eerste doorgang: wisselt RGB velden af met statische textuur.',
    speedLabel: 'Cyclussnelheid',
    durationLabel: 'Duur',
    durationShort: '5 min',
    durationStandard: '10 min',
    durationDeep: '20 min',
    durationShortDescription: 'Snelle controle',
    durationStandardDescription: 'Aanbevolen',
    durationDeepDescription: 'Uitvoering onder toezicht',
    fullscreenHint: 'Volledig scherm OLED inbranding reparatie canvas',
    intensityLabel: 'Statische intensiteit',
    warningBadge: 'Knipperende inhoud',
  },
};
