import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PixelesPantallaUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dode-pixel-test-schermreparatie';
const title = 'Dode Pixel Test en Schermreparatie Tool';
const description =
  'Controleer of uw monitor dode of vastgelopen pixels heeft en repareer ze online met onze hoogfrequente stroboscoop-tool.';

const faqData = [
  {
    question: 'Wat is het verschil tussen een dode pixel en een vastgelopen pixel?',
    answer:
      'Een dode pixel is permanent zwart omdat deze geen stroom krijgt (doorgebrande transistor). Een vastgelopen pixel (stuck pixel) is meestal een felle kleur (rood, groen of blauw) en kan vaak worden gereactiveerd door middel van snelle stroboscopische stimulatie.',
  },
  {
    question: 'Hoe werkt de reparatietool (Strobe)?',
    answer:
      'Onze tool genereert snel knipperende primaire kleuren op hoge snelheid. Dit kan de vastgelopen vloeibare kristallen van de pixel dwingen om los te komen. Het wordt aanbevolen om het 10 tot 30 minuten te laten werken.',
  },
  {
    question: 'Kunnen dode pixels ontstaan door temperatuur?',
    answer:
      'Ja, extreme temperaturen kunnen het paneel beïnvloeden. De meest voorkomende oorzaken zijn echter fabricagefouten of fysieke impact die de elektrische contacten van het vloeibare kristal beschadigen.',
  },
  {
    question: 'Hoeveel dode pixels vallen onder de garantie?',
    answer:
      'Dit hangt af van de fabrikant en de ISO 9241-307 norm. Over het algemeen beschouwen merken tot 2 of 3 heldere pixels als "normaal" op Class 1 panelen, terwijl Class 0 panelen er geen toestaan.',
  },
];

const howToData = [
  {
    name: 'Reinig het scherm',
    text: 'Maak uw monitor voor aanvang grondig schoon met een microvezeldoek om te voorkomen dat u stof verwart met een dode pixel.',
  },
  {
    name: 'Activeer de volledig scherm modus',
    text: 'Druk op F11 of de knop voor volledig scherm, zodat de interface van de browser de defectdetectie niet hindert.',
  },
  {
    name: 'Wissel van kleur',
    text: 'Schakel tussen zwarte, witte, rode, groene en blauwe achtergronden. Zoek naar plekken die niet overeenkomen met de achtergrondkleur.',
  },
  {
    name: 'Start de reparatiecyclus',
    text: 'Als u een heldere plek vindt, plaatst u de Strobe-tool daaroverheen en laat u deze minimaal 20 minuten draaien.',
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

export const content: ToolLocaleContent<PixelesPantallaUI> = {
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
      text: 'Volledige Gids: Dode Pixels, Vastgelopen Pixels en Hoe ze te Repareren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Heeft u een vreemde plek op uw scherm opgemerkt die niet van kleur verandert? Het zou een defect aan het paneel kunnen zijn. Deze tool helpt u te diagnosticeren of uw monitor <strong>dode pixels</strong> of <strong>vastgelopen pixels</strong> heeft en biedt een oplossing om ze te proberen te repareren.',
    },
    {
      type: 'title',
      text: 'Wat is het verschil tussen een dode pixel en een vastgelopen pixel?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Er zijn twee hoofdtypen pixeldefecten bij moderne monitoren, elk met verschillende kenmerken en oplossingen.',
    },
    {
      type: 'title',
      text: 'Vastgelopen Pixel (Stuck Pixel)',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Dit is het meest voorkomende defect. Het treedt op wanneer een of meer subpixels (Rood, Groen of Blauw) vast komen te zitten in de "aan"-stand. <strong>Symptoom:</strong> U ziet een permanent helder gekleurd puntje (rood, groen, blauw of wit) tegen een donkere achtergrond. <strong>Vaak repareerbaar.</strong> Het vloeibare kristal reageert nog; het is simpelweg "geblokkeerd" in een specifieke polarisatie. Onze Strobe-reparatietool probeert het te ontgrendelen met snelle spanningsstimulatie.',
    },
    {
      type: 'title',
      text: 'Dode Pixel',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'Dit gebeurt wanneer de transistor die de pixel aanstuurt volledig faalt en geen licht doorlaat. <strong>Symptoom:</strong> Een permanent zwart puntje, vooral zichtbaar tegen lichte of witte achtergronden. <strong>Moeilijk te repareren (meestal permanent).</strong> De schade is op hardwareniveau (doorgebrand circuit). Geen enkele elektrische stimulatie kan dit verhelpen. Meestal is vervanging van het paneel nodig.',
    },
    {
      type: 'title',
      text: 'Hoe werkt de Strobe-reparatietool?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De functie "Pixel Repareren" maakt gebruik van een techniek die bekend staat als <strong>Pixel Exercising</strong>. Het genereert een hoogfrequent willekeurig ruispatroon (snel knipperen van kleuren) over het getroffen gebied.',
    },
    {
      type: 'title',
      text: 'Het mechanisme: Vloeibaar Kristal en Spanning',
      level: 4,
    },
    {
      type: 'paragraph',
      html: 'LCD-monitoren maken gebruik von vloeibare kristallen die hun transparantie veranderen op basis van de toegepaste spanning. Wanneer een subpixel vastloopt, betekent dit dat het kristal "bevroren" is in een specifieke polarisatie. Snelle spanningsveranderingen (bereikt door snelle primaire kleurverschuivingen) proberen het kristal te "trainen" en te dwingen van toestand te veranderen.',
    },
    {
      type: 'title',
      text: 'Aanbevelingen voor Gebruik',
      level: 4,
    },
    {
      type: 'paragraph',
      html: '<ul><li>Het wordt aanbevolen om de tool minimaal <strong>10 tot 20 minuten</strong> over het getroffen gebied te laten draaien.</li><li>Als het niet werkt, probeer dan langere sessies (tot 1 uur) of oefen heel lichte druk uit met een microvezeldoek op de pixel (op eigen risico).</li><li>In sommige gevallen verbetert het voorzichtig verwarmen van de monitor met een föhn (op lage temperatuur) voordat u Strobe activeert de resultaten.</li></ul>',
    },
    {
      type: 'title',
      text: 'Waarschuwing voor Epilepsie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De reparatiemodus maakt gebruik van snel knipperende lichten op hoge snelheid. Als u last heeft van lichtgevoelige epilepsie of overgevoeligheid voor licht, <strong>gebruik deze functie dan NIET</strong>. Blootstelling aan knipperende patronen kan bij gevoelige personen aanvallen veroorzaken.',
    },
    {
      type: 'title',
      text: 'Wanneer Garantie of Vervanging aanvragen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als u defecte pixels bevestigt (vooral meerdere dode pixels), kunt u onze test gebruiken als bewijs voor garantieclaims. Veel fabrikanten beschouwen meer dan 2-3 heldere pixels of 1 dode pixel als een fabricagefout die in aanmerking komt voor vervanging volgens de ISO 9241-307 (Class 1) norm.',
    },
    {
      type: 'title',
      text: 'Geschiedenis van Dode Pixel Normen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Al decennialang hebben LCD-monitoren last van pixeldefecten vanwege de complexiteit van de fabricage. Een Full HD-paneel (1920×1080) bevat 6.220.800 pixels (18.662.400 subpixels). De statistische kans op defecten is onvermijdelijk. Daarom bestaan er normen zoals ISO 9241-307 om "acceptabele dode pixels" te definiëren op basis van de monitorklasse.',
    },
  ],
  ui: {
    badge: 'Scherm Utility',
    title: 'Dode of vastgelopen pixels?',
    description:
      'Controleer de staat van uw monitor met zuivere egale kleuren en repareer vastgelopen pixels met onze hoogfrequente stimulatietool.',
    btnStartTest: 'Start Test',
    btnStartFix: 'Pixel Repareren',
    kbdFullscreen: 'F11',
    kbdFullscreenLabel: 'Volledig Scherm',
    kbdSpace: 'Spatie',
    kbdSpaceLabel: 'Kleur Wijzigen',
    kbdEsc: 'ESC',
    kbdEscLabel: 'Afsluiten',
    colorBlack: 'Zwart',
    colorWhite: 'Wit',
    colorRed: 'Rood',
    colorGreen: 'Groen',
    colorBlue: 'Blauw',
    btnToggleFixer: 'Open Reparatietool (Strobe)',
    btnExit: 'Afsluiten (ESC)',
  },
};
