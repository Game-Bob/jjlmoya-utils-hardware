import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TestTecladoUI } from '../ui';

const slug = 'toetsenbord-test-online';
const title = 'Online Toetsenbord Test & Ghosting Detector';
const description = 'Controleer of uw toetsenbord last heeft van Ghosting of Key Jamming. Real-time toetsen-visualizer en N-Key Rollover teller.';

const faqData = [
  {
    question: 'Wat is Ghosting op een toetsenbord?',
    answer: 'Het is een defect dat optreedt wanneer u meerdere toetsen tegelijk indrukt en de computer sommige daarvan niet registreert. Het komt door beperkingen in de interne elektrische matrix van het toetsenbord die bepaalde combinaties niet kan verwerken.',
  },
  {
    question: 'Wat betekent N-Key Rollover (NKRO)?',
    answer: 'NKRO betekent dat het toetsenbord evenveel toetsen kan registreren als u tegelijkertijd kunt indrukken zonder fouten. Het is een premium functie, gebruikelijk bij high-end mechanische en gamingtoetsenborden.',
  },
  {
    question: 'Waarom hapert mijn toetsenbord als ik 3 toetsen tegelijk indruk?',
    answer: 'De meeste goedkope kantoortoetsenborden hebben een 2- of 3-toetsen rollover. Dit is voldoende voor typen, maar onvoldoende voor intensief gamen of complexe sneltoetsen.',
  },
  {
    question: 'Hoe kan ik een toets repareren die niet reageert?',
    answer: 'Als de test de toetsaanslag niet detecteert, kan dit komen door vuil onder de switch, een elektrisch contactfout of een beschadigde kabel. Probeer het toetsenbord te reinigen met perslucht voordat u het opgeeft.',
  },
];

const howToData = [
  {
    name: 'Focus de visualizer',
    text: 'Klik ergens op de pagina om ervoor te zorgen dat de browser focus heeft en hardware-toetsaanslagen kan vastleggen.',
  },
  {
    name: 'Voer de responstest uit',
    text: 'Druk de toetsen op uw toetsenbord één voor één in. De bijbehorende toets op het scherm licht groen op als deze correct werkt.',
  },
  {
    name: 'Controleer op ghosting',
    text: 'Druk veelgebruikte gaming-toetsen (W, A, S, D, Spatie, Shift) allemaal tegelijk in om te zien of ze blokkeren of allemaal oplichten.',
  },
  {
    name: 'Verifieer maximale rollover',
    text: 'Probeer met beide handen zoveel mogelijk toetsen tegelijk in te drukken en bekijk de maximale gelijktijdige toetsaanslagteller.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<TestTecladoUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Referenties',
  bibliography: [
    {
      name: 'USB Keyboard/Keypad Page - HID Usage Tables',
      url: 'https://www.usb.org/sites/default/files/documents/hut1_12v2.pdf',
    },
    {
      name: 'Mechanical vs Membrane Keyboards - Technical Deep Dive',
      url: 'https://deskthority.net/wiki/Rollover',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Online Toetsenbord Test: Detecteer Ghosting en N-Key Rollover',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een interactieve tool voor toetsenborddiagnostiek. Controleer of uw randapparatuur last heeft van ghosting, jamming of rollover-beperkingen. Visueel duidelijk met ondersteuning voor alle typen toetsenborden.',
    },
    {
      type: 'title',
      text: 'Wat is Ghosting?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ghosting treedt op wanneer u een specifieke combinatie van toetsen indrukt en het toetsenbord een fantoom-toetsaanslag registreert die u niet heeft gemaakt. Dit komt door beperkingen in de interne circuitmatrix.',
    },
    {
      type: 'title',
      text: 'N-Key Rollover en Maximale Rollover',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>NKRO (N-Key Rollover):</strong> Hiermee kunnen alle ingedrukte toetsen tegelijkertijd worden geregistreerd. <strong>6KRO:</strong> Oude USB-standaardlimiet. <strong>2-3KRO:</strong> Gebruikelijk op goedkope toetsenborden, voldoende voor typen.',
    },
    {
      type: 'title',
      text: 'Mechanische vs Membraan Toetsenborden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mechanische toetsenborden hebben individuele switches met geïsoleerde dioden, waardoor ghosting wordt geëlimineerd. Membraantoetsenborden delen geleiderbanen, wat fouten veroorzaakt bij gelijktijdige combinaties.',
    },
  ],
  ui: {
    badge: 'Input Test',
    title: 'Toetsenbord Test en Ghosting Detector',
    description: 'Verifieer N-Key Rollover en detecteer defecte toetsen.',
    simultaneousLabel: 'Gelijktijdig',
    eventLogLabel: 'Gebeurtenissenlogboek',
    resetBtn: 'Reset',
  },
};
