import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SpeakerPhaseTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'luidspreker-fase-tester';
const title = 'Luidspreker Fasetester';
const description =
  'Speel in-fase en 180 graden geïnverteerde stereo testsignalen af in je browser om de polariteit van luidsprekers, bedradingsfouten en fase-uitdoving te controleren.';

const faqData = [
  {
    question: 'Hoe weet ik of de polariteit van mijn luidsprekers correct is?',
    answer:
      'Speel het normale signaal af en daarna het geïnverteerde signaal vanaf dezelfde luisterpositie. Met correct aangesloten luidsprekers zou de geïnverteerde modus zwakker, holler of minder gecentreerd moeten klinken omdat het linker- en rechterkanaal elkaar in de ruimte gedeeltelijk uitdoven. Als de geïnverteerde modus voller of luider klinkt, is er mogelijk al één luidspreker met omgekeerde polariteit aangesloten.',
  },
  {
    question: 'Wat betekent geïnverteerde fase in deze test?',
    answer:
      'De tool stuurt hetzelfde signaal naar beide kanalen en vermenigvuldigt vervolgens één kanaal met -1 in de geïnverteerde modus. Daardoor wordt de golfvorm 180 graden omgekeerd zonder een audiobestand te downloaden. Het fysieke resultaat is gelijk aan het omkeren van plus en min op één luidspreker voor het testsignaal.',
  },
  {
    question: 'Kan deze test elke luidspreker in een home cinema controleren?',
    answer:
      'Het is het beste voor het controleren van een stereopaar of de voorste linker- en rechterluidsprekers van een groter systeem. Test voor volledige surroundsystemen de paren één voor één en combineer het resultaat met de kanaaltest van je AV-receiver, afstandskalibratie en een SPL- of meetmicrofoon indien beschikbaar.',
  },
  {
    question: 'Moet ik roze ruis of een sinustoon gebruiken?',
    answer:
      'Roze ruis is meestal makkelijker voor polariteitscontroles omdat het een breed frequentiebereik bestrijkt en uitdoving duidelijk maakt. Een sinustoon kan helpen om je op één frequentie te concentreren, maar ruimtemodi kunnen een enkele toon misleidend maken.',
  },
  {
    question: 'Is dit veilig voor luidsprekers en hoofdtelefoons?',
    answer:
      'Ja, op gematigde niveaus. Begin zacht, vermijd maximale versterkerwinst en speel geen continue tonen luid af via hoofdtelefoons, kleine laptopluidsprekers of onbekende luidsprekers. Stop onmiddellijk als je vervorming of mechanische spanning hoort.',
  },
];

const howToData = [
  {
    name: 'Plaats jezelf op de luisterpositie',
    text: 'Zit waar je normaal luistert, zodat de akoestische uitdoving die je waarneemt overeenkomt met de werkelijke ruimte en luidsprekerplaatsing.',
  },
  {
    name: 'Speel het normale signaal af',
    text: 'Druk op Afspelen In Fase en let op het middenbeeld, de luidheid en het tonale karakter.',
  },
  {
    name: 'Speel het geïnverteerde signaal af',
    text: 'Druk op Afspelen Uit Fase. Correct aangesloten luidsprekers zouden doorgaans diffuser, holler of stiller moeten klinken.',
  },
  {
    name: 'Inspecteer de bedrading als het resultaat omgekeerd is',
    text: 'Als de geïnverteerde modus sterker klinkt dan normaal, controleer dan de plus- en minaansluitingen op één luidspreker, de versterkerklemmen, banaanstekkers, wandplaten en adapters.',
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
  step: howToData.map((step, index) => ({
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SpeakerPhaseTesterUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Online Luidspreker Fase- en Polariteitstest', level: 2 },
    {
      type: 'paragraph',
      html: 'Deze luidspreker fasetester vergelijkt een normaal stereosignaal met een versie waarbij één kanaal <strong>180 graden</strong> is geïnverteerd. Het praktische doel is eenvoudig: bevestigen of de twee luidsprekers van een paar samen bewegen wanneer het moet. Wanneer de linker- en rechterluidspreker met dezelfde polariteit zijn bedraad, versterken lage en middentonen energie elkaar en voelt het middenbeeld stabiel aan. Wanneer één luidspreker verkeerd is aangesloten, bewegen de conussen in tegenovergestelde richtingen bij hetzelfde signaal, waardoor vocalen lichaam verliezen, lage tonen verdwijnen en het stereobeeld onnatuurlijk breed of hol aanvoelt.',
    },
    {
      type: 'paragraph',
      html: 'De test wordt lokaal in de browser gegenereerd. Er wordt geen zwaar audiobestand gestreamd. In de normale modus ontvangen beide kanalen dezelfde roze ruis of sinustoon. In de geïnverteerde modus wordt één kanaal vermenigvuldigd met <code>-1</code>, wat een wiskundig geïnverteerde golfvorm creëert. Als je daadwerkelijke bedrading correct is, zou die kunstmatige inversie duidelijke uitdoving moeten veroorzaken. Als je fysieke bedrading al omgekeerd is, kan de geïnverteerde knop de fout gedeeltelijk corrigeren, waardoor het luider, voller of meer gecentreerd kan klinken dan de normale knop.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle interpretatie',
      badge: 'Basisregel',
      html: '<p>Als <strong>Uit Fase</strong> dun, veraf, hol of stiller klinkt dan <strong>In Fase</strong>, is je linker/rechterpaar waarschijnlijk correct bedraad. Als Uit Fase voller of luider klinkt, controleer dan de rode en zwarte aansluitingen op één luidspreker, de versterker, banaanstekkers, wandplaten, autobekabeling of een adapter in de keten.</p>',
    },
    {
      type: 'table',
      headers: ['Wat je hoort', 'Waarschijnlijke betekenis', 'Volgende stap'],
      rows: [
        ['Normaal is vol, geïnverteerd is hol', 'De twee luidsprekers zijn waarschijnlijk met overeenkomende polariteit bedraad.', 'Laat de bedrading zoals die is en ga verder met plaatsing of kalibratie.'],
        ['Geïnverteerd is voller dan normaal', 'Eén luidspreker is mogelijk fysiek verkeerd bedraad.', 'Controleer de plus- en minaansluitingen op slechts één kant van het paar.'],
        ['Beide modi klinken bijna hetzelfde', 'De luidsprekers staan mogelijk te ver uit elkaar, kamerreflecties overheersen of de uitvoer is mono.', 'Ga naar de luisterpositie, schakel mono-verwerking uit en probeer roze ruis.'],
        ['Beide modi klinken zwak in het laag', 'Kameruitdoving, subwooferfase, cross-over of plaatsing kan het grotere probleem zijn.', 'Voer een lage tonen sweep uit en test de subwooferpolariteit apart.'],
      ],
    },
    { type: 'title', text: 'Waarom Omgekeerde Luidsprekerpolariteit Verkeerd Klinkt', level: 2 },
    {
      type: 'paragraph',
      html: 'Een luidspreker zet een elektrische golfvorm om in conusbeweging. Voor een positieve drukgolf moeten twee gelijke luidsprekers in principe lucht in dezelfde richting duwen op hetzelfde moment. Als bij één luidspreker de plus- en minleidingen zijn verwisseld, beweegt die luidspreker naar binnen terwijl de andere naar buiten beweegt bij hetzelfde signaal. In een stereopaar maakt dit het geluid niet gewoon overal zachter; de ruimte, luidsprekerafstand, golflengte en luisterpositie bepalen waar de uitdoving het sterkst is. De meest opvallende symptomen zijn meestal verminderde lage tonen, een zwak fantoommidden en vocalen die los lijken te komen van de ruimte tussen de luidsprekers.',
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Leadzang en dialogen moeten dicht bij het midden verankeren wanneer beide luidsprekers hetzelfde monosignaal weergeven.',
        'Kickdrum, basgitaar en lagere pianonoten moeten lichaam hebben in plaats van licht te klinken.',
        'Het stereobeeld mag niet kunstmatig breed aanvoelen wanneer de bron mono is.',
        'Het hoofd iets bewegen mag het middenbeeld niet volledig laten instorten.',
        'Een correct bedraad paar moet de geïnverteerde test minder natuurlijk laten klinken dan de normale.',
      ],
    },
    {
      type: 'glossary',
      items: [
        { term: 'Polariteit', definition: 'De positieve of negatieve oriëntatie van het elektrische signaal dat een luidsprekerdriver voedt.' },
        { term: 'Fase', definition: 'De tijdrelatie tussen twee golfvormen, vaak beschreven in graden over één cyclus.' },
        { term: '180-graden inversie', definition: 'Een verticaal gespiegelde golfvorm, zodat positieve druk op hetzelfde moment negatieve druk wordt.' },
        { term: 'Uitdoving', definition: 'Een vermindering van het geluidsniveau wanneer twee vergelijkbare golfvormen met tegengestelde polariteit of tijd aankomen.' },
        { term: 'Fantoommidden', definition: 'Het schijnbare middenbeeld dat ontstaat wanneer identiek geluid de linker- en rechterluidspreker gelijkmatig bereikt.' },
      ],
    },
    {
      type: 'tip',
      title: 'Test niet vanaf naast een luidspreker',
      html: 'Zit op de normale luisterpositie. Fase-uitdoving is ruimtelijk: een resultaat gehoord op een halve meter van de linkerluidspreker kan volledig verschillen van het resultaat op de bank, studiostoel of bestuurdersstoel.',
    },
    { type: 'title', text: 'Roze Ruis Versus Sinustoon Voor Polariteitscontroles', level: 2 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Roze ruis',
          description: 'Breedbandruis met meer energie in de lagere octaven dan witte ruis. Het maakt het makkelijker om het algehele tonale karakter, het middenbeeld en de uitdoving op het gehoor te beoordelen.',
          highlight: true,
          points: ['Beste eerste keuze voor snelle polariteitscontroles.', 'Minder kans om door één enkele ruimtemodus gedomineerd te worden.', 'Handig voor home cinema, studiomonitors en car-audio.'],
        },
        {
          title: 'Sinustoon',
          description: 'Een enkelvoudige frequentietoon die uitdoving bij een gekozen frequentie kan blootleggen, maar ook ruimtepieken en -dalen kan overdrijven.',
          points: ['Handig bij het onderzoeken van een specifiek cross-over- of laagprobleem.', 'Kan misleidend zijn als de ruimte een sterke dip heeft op die frequentie.', 'Houd het volume bescheiden, want zuivere tonen worden vermoeiend.'],
        },
      ],
    },
    {
      type: 'paragraph',
      html: 'Begin voor een snelle polariteitscontrole met roze ruis. Roze ruis spreidt energie over het spectrum, dus je beoordeelt het luidsprekerpaar als systeem in plaats van één frequentie te beoordelen die mogelijk in een ruimtedal zit. Gebruik de sinustoonregeling alleen wanneer je je wilt richten op een bekend probleemgebied, zoals een uitdoving in het stemgebied rond 300 Hz of een laagovergang rond 80 Hz. Als het resultaat met de sinustoon drastisch verandert wanneer je je hoofd een paar centimeter beweegt, beïnvloedt de ruimte die frequentie sterk.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '180°', label: 'Wiskundige inversie toegepast op één kanaal', icon: 'mdi:rotate-3d-variant' },
        { value: '-1', label: 'Versterkingsfactor gebruikt voor het geïnverteerde kanaal', icon: 'mdi:plus-minus-variant' },
        { value: '0 MB', label: 'Audiodownloads nodig voor het testsignaal', icon: 'mdi:cloud-off-outline' },
      ],
    },
    { type: 'title', text: 'Checklist Voor Home Cinema en Studiomonitors', level: 2 },
    {
      type: 'card',
      icon: 'mdi:sofa',
      title: 'Home cinema voorluidsprekers',
      html: 'Gebruik de normale en geïnverteerde knoppen alleen met de actieve voorste linker- en rechterluidsprekers. Schakel upmixers, virtuele surround, nachtmodus, dialoogverbetering en ruimtecorrectie uit als je eerst de onbewerkte bedrading wilt isoleren. Na bevestiging van de polariteit, schakel je de kalibratie weer in en controleer je of de dialoog gecentreerd blijft.',
    },
    {
      type: 'card',
      icon: 'mdi:music-circle',
      title: 'Studiomonitors',
      html: 'Stuur de browser door dezelfde interface-uitgangen die je DAW gebruikt. Controleer of beide gebalanceerde kabels consistent bedraad zijn en of de polariteitsschakelaars van de monitorcontroller niet geactiveerd zijn. Een geïnverteerde monitor kan mono-compatibiliteitsbeslissingen tijdens het mixen onbetrouwbaar maken.',
    },
    {
      type: 'card',
      icon: 'mdi:car-info',
      title: 'Car audio',
      html: 'Autocabines veroorzaken sterke reflecties en zitasymmetrie, luister dus vanaf de bestuurdersstoel en herhaal indien nodig vanaf de passagiersstoel. Fabriekskabelboomadapters, deur-luidsprekervervangingen en versterkerinstallaties zijn veelvoorkomende plaatsen waar plus- en minleidingen verwisseld kunnen zijn.',
    },
    {
      type: 'proscons',
      title: 'Sterktes en beperkingen van de browserfasetest',
      items: [
        { pro: 'Onmiddellijke controle zonder software te installeren of audiobestanden te downloaden.', con: 'Kan niet identificeren welke fysieke kabel verkeerd is zonder het systeem te inspecteren.' },
        { pro: 'Werkt goed voor een stereopaar, hoofdtelefoons, nearfield-monitors en snelle installatiecontroles.', con: 'Ruimteakoestiek kan het effect op sommige zitplaatsen verbergen of overdrijven.' },
        { pro: 'Roze ruis maakt breedbandige uitdoving makkelijker hoorbaar dan een enkele testtoon.', con: 'Meerkanaals surroundsystemen hebben nog steeds kanaal-voor-kanaal verificatie nodig.' },
      ],
    },
    { type: 'title', text: 'Een Mislukte Polariteitstest Oplossen', level: 2 },
    {
      type: 'list',
      icon: 'mdi:tools',
      items: [
        'Schakel de versterker uit voordat je luidsprekerkabels of banaanstekkers wijzigt.',
        'Kies één luidspreker in het paar en volg rood-op-rood en zwart-op-zwart van versterker naar luidspreker.',
        'Inspecteer elke wandplaat, veerklem, adapter, speakON-stekker of autokabelboom tussen versterker en luidspreker.',
        'Als de luidsprekerkabel een streep, ribbel, opdruk of koper/zilverzijde heeft, gebruik dan dezelfde geleider voor plus aan beide uiteinden.',
        'Nadat je één kant hebt gewijzigd, voer je de normale en geïnverteerde modus opnieuw uit vanaf de luisterpositie.',
        'Als het resultaat nog steeds onduidelijk is, plaats de luidsprekers dan tijdelijk dichter bij elkaar en herhaal op laag volume.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Subwoofers hebben een aparte fasecontrole nodig',
      badge: 'Lage tonen systemen',
      html: '<p>Deze tool vergelijkt een linker/rechterpaar. Een subwoofer cross-over kan elektrisch correct zijn maar akoestisch uit fase omdat afstand, DSP-vertraging, cross-over steilheid en plaatsing de timing veranderen. Gebruik deze test voor het hoofdpaar en daarna een cross-over sweep of receiverkalibratie voor de subwooferovergang.</p>',
    },
    {
      type: 'message',
      title: 'Praktische luisterregel',
      ariaLabel: 'Praktische luisterregel voor fasetesten',
      html: 'Voor echte installaties is de juiste instelling degene die mono-materiaal gefocust, vol en stabiel laat klinken op de daadwerkelijke luisterpositie. De geïnverteerde modus is een diagnostisch contrast, geen luistermodus.',
    },
    {
      type: 'summary',
      title: 'Samenvatting luidsprekerpolariteitdiagnose',
      items: [
        'Normaal zou sterker en meer gecentreerd moeten klinken dan geïnverteerd wanneer het luidsprekerpaar correct bedraad is.',
        'Geïnverteerd dat luider klinkt is een sterke aanwijzing dat één fysieke luidsprekerverbinding is omgekeerd.',
        'Roze ruis is het beste eerste signaal omdat het de kans verkleint dat je slechts één ruimtefrequentie beoordeelt.',
        'Sinustonen zijn nuttig voor gerichte probleemoplossing maar kunnen door ruimtemodi gedomineerd worden.',
        'Verlaag altijd het volume voordat je van modus wisselt, vooral bij hoofdtelefoons of krachtige versterkers.',
      ],
    },
  ],
  ui: {
    normal: 'In Fase',
    inverted: 'Geïnverteerd',
    stop: 'Stop',
    pause: 'Pauze',
    volume: 'Uitvoerniveau',
    noiseColor: 'Testsignaal',
    pinkNoise: 'Roze ruis',
    sineTone: 'Sinustoon',
    frequency: 'Toonfrequentie',
    statusReady: 'Gereed',
    statusNormal: 'In fase',
    statusInverted: 'Geïnverteerd',
    instruction:
      'Geïnverteerd zou dunner moeten klinken. Luider betekent bedrading controleren.',
    channelLabel: 'Luidspreker fasetester',
    leftChannel: 'Linkerkanaal',
    rightChannel: 'Rechterkanaal',
    leftShort: 'L',
    rightShort: 'R',
    polarityNormal: '0° gelijkfasig',
    polarityInverted: '180° geïnverteerd',
    safety: 'Begin zacht. Polariteitstests kunnen luid worden via versterkers, studiomonitors, car-audiosystemen en hoofdtelefoons.',
  },
};
