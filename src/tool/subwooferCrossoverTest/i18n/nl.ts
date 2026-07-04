import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'subwoofer-laagfrequentietest-online';
const title = 'Subwoofer Crossovertest';
const description =
  'Voer een sinus-sweep van 200 Hz tot 10 Hz uit in je browser om te vinden waar je subwoofer wegvalt, uitvalt of overdraagt aan je hoofdluidsprekers.';

const faqData = [
  {
    question: 'Wat meet een subwoofer crossover-test?',
    answer:
      'Het helpt je te horen op welk punt de bas niet meer continu klinkt tussen je hoofdluidsprekers en de subwoofer. Een gat, een plotselinge niveauschommeling of een ontbrekend bereik kan wijzen op een onjuiste crossoverfrequentie, een faseprobleem, kamerannulering of de limiet van de subwoofer.',
  },
  {
    question: 'Waarom veegt deze test van 200 Hz naar 10 Hz?',
    answer:
      'De meeste home theater-crossovers liggen tussen 60 Hz en 120 Hz, terwijl veel compacte luidsprekers boven of onder dat bereik uitvoer beginnen te verliezen. Het vegen vanaf 200 Hz maakt de overdracht van luidspreker naar subwoofer goed hoorbaar voordat de toon de diepe sub-bas bereikt.',
  },
  {
    question: 'Kan deze online subwoofer-basstest luidsprekers beschadigen?',
    answer:
      'Ja, zeer lage frequenties op hoog volume kunnen kleine luidsprekers overbelasten of een subwoofer overbelasten. Begin zacht, vermijd versterkte basmodi en stop onmiddellijk als je geratel, geklop of mechanische overbelasting hoort.',
  },
  {
    question: 'Is de gemarkeerde uitvalfrequentie de exacte crossover-instelling die ik moet gebruiken?',
    answer:
      'Nee. Beschouw het als een luisteraanwijzing, niet als een labmeting. De beste crossover-instelling hangt ook af van de luidsprekerspecificaties, kamerplaatsing, fase, afstandscorrectie en kalibratiedoel.',
  },
];

const howToData = [
  {
    name: 'Stel een veilig luistervolume in',
    text: 'Verlaag eerst het systeemvolume. De sweep gebruikt een gegenereerde sinusgolf, dus de bas kan intens worden, zelfs wanneer het browservolume bescheiden lijkt.',
  },
  {
    name: 'Start de 200 Hz tot 10 Hz sweep',
    text: 'Druk op Sweep starten en luister vanaf je normale zitplaats. De toon beweegt gelijkmatig door het basbereik waar subwoofers, hoofdluidsprekers en ruimteakoestiek elkaar overlappen.',
  },
  {
    name: 'Luister naar de uitval of overdracht',
    text: 'Let op het moment waarop de bas zwakker wordt, verdwijnt, van locatie verandert of ongelijk klinkt tussen de subwoofer en de hoofdluidsprekers.',
  },
  {
    name: 'Markeer de frequentie',
    text: 'Druk op Uitval markeren bij het eerste duidelijke probleempunt. Gebruik die frequentie als aanwijzing voor het aanpassen van crossover, fase, plaatsing of kamer correctie.',
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

export const content: ToolLocaleContent<SubwooferCrossoverTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Vind Het Basgat Tussen Je Luidsprekers En De Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'Een subwoofer mag niet klinken als een aparte doos in de hoek. De bas moet gelijkmatig blijven terwijl de noten van je hoofdluidsprekers naar de sub gaan. Deze test veegt van <strong>200 Hz tot 10 Hz</strong> zodat je precies de zone kunt horen waar de overdracht zwak, dreunend, lokaliseerbaar of stil wordt.',
    },
    {
      type: 'table',
      headers: ['Wat je hoort', 'Wat het meestal betekent', 'Wat je eerst moet proberen'],
      rows: [
        ['Bas verdwijnt rond 70-100 Hz', 'Subwoofer en luidsprekers kunnen elkaar opheffen bij de crossover.', 'Draai de fase om, pas afstand/vertraging aan en herhaal de sweep.'],
        ['Bas dreunt in één smalle band', 'Kamermodus of te veel overlap tussen luidsprekers en subwoofer.', 'Verlaag de crossover iets of verplaats de subwoofer/luisterpositie.'],
        ['Bas lijkt van de subwoofer-locatie te komen', 'Crossover is mogelijk te hoog of subwoofer-niveau te luid.', 'Probeer 80 Hz of lager en verlaag de subwoofer-versterking.'],
        ['Diepe bas vervaagt onder 30-40 Hz', 'Normale uitbreidingsgrens voor veel subs, vooral compacte modellen.', 'Controleer de subwoofer-specificatie voordat je een probleem najaagt dat fysiek kan zijn.'],
      ],
    },
    { type: 'title', text: 'Wat De Uitvalfrequentie Je Vertelt', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gebruik de gemarkeerde frequentie als afstemaanwijzing',
      badge: 'Luistertips',
      html: '<p>Als het gemarkeerde punt dicht bij je AVR-crossover ligt, is het probleem waarschijnlijk integratie: fase, afstand, polariteit, niveau of de steilheid van de filters. Als het gemarkeerde punt veel lager is, hoor je misschien dat de subwoofer zijn uitvoerlimiet bereikt. Als het probleem sterk verandert wanneer je je hoofd beweegt, domineert de kamer het resultaat.</p>',
    },
    {
      type: 'title',
      text: 'Gebruikelijke Crossover-Bereiken',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Luidsprekertype', 'Typisch crossover-startpunt', 'Waarom'],
      rows: [
        ['Kleine satellieten', '100-150 Hz', 'Kleine behuizingen kunnen meestal geen schone bovenbas op bioscoopniveau weergeven.'],
        ['Boekenplankluidsprekers', '70-100 Hz', 'Vaak genoeg bas voor een schone overdracht zonder de sub lokaliseerbaar te maken.'],
        ['Vloerstaande luidsprekers', '50-80 Hz', 'Grotere woofers kunnen meer middenbas aan, maar de kamer kan nog steeds subwoofer-basbeheer verkiezen.'],
        ['THX-opstelling', '80 Hz', 'Een praktische standaard die goed werkt voor veel systemen en diepe bas naar de sub leidt.'],
      ],
    },
    { type: 'title', text: 'Crossoverprobleem Of Kamerprobleem?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Crossover of faseprobleem',
          description: 'Het zwakke punt verschijnt dicht bij de crossoverfrequentie en verbetert na het veranderen van fase, polariteit, afstand of crossover-instelling.',
          points: ['Meestal herhaalbaar vanaf dezelfde zitplaats.', 'Vaak gecentreerd rond 60-120 Hz.'],
        },
        {
          title: 'Kamerannulering',
          description: 'Het zwakke punt verandert drastisch wanneer je je hoofd beweegt, van zitplaats wisselt of de subwoofer een korte afstand verplaatst.',
          points: ['Erg positieafhankelijk.', 'Vaak meer opgelost door plaatsing dan door instellingen.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Beste manier om de test uit te voeren',
      html: 'Ga zitten waar je daadwerkelijk films kijkt of naar muziek luistert. Ga niet naast de subwoofer staan. Een crossover die naast de kast goed klinkt, kan nog steeds een gat op de bank achterlaten.',
    },
    {
      type: 'summary',
      title: 'Wat te veranderen na de sweep',
      items: [
        'Als het gat dicht bij de huidige crossover ligt, probeer dan 10 Hz veranderingen en herhaal de sweep.',
        'Probeer de fase-schakelaar of de vertragingsinstelling van de subwoofer als de zwakke band dicht bij de crossover ligt.',
        'Als de bas sterker wordt op één zitplaats en verdwijnt op een andere, verplaats dan de subwoofer voordat je alle AVR-instellingen wijzigt.',
        'Voer na plaatsings- of crossover-aanpassingen de kamer correctie opnieuw uit zodat de receiver de nieuwe opstelling meet.',
        'Gebruik de gemarkeerde frequentie om het afstemmen te sturen en bevestig daarna met muziek, films en bekende baslijnen.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Subwoofer laagfrequente sweep',
    currentFrequency: 'Huidige frequentie',
    targetFrequency: 'Doel',
    elapsed: 'Verstreken',
    statusReady: 'Klaar voor lage sweep',
    statusRunning: 'Aan het vegen naar beneden',
    statusStopped: 'Sweep gestopt',
    start: 'Sweep starten',
    stop: 'Sweep stoppen',
    markDropout: 'Uitval markeren',
    reset: 'Resetten',
    volume: 'Uitvoerniveau',
    duration: 'Sweepduur',
    safeStart: 'Begin op laag volume en markeer dan de eerste frequentie waar de bas moeilijk hoorbaar wordt.',
    roomNote: 'Kamerpositie en fase kunnen het resultaat drastisch veranderen.',
    dropoutLabel: 'Gemarkeerd punt',
    dropoutEmpty: 'Nog niet gemarkeerd',
    crossoverEstimate: 'Geschat uitvalpunt',
  },
};
