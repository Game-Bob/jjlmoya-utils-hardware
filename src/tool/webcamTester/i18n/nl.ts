import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'prive-webcam-camera-test-online';
const title = 'Prive webcam test';
const description = 'Controleer cameratoestemming, live video, resolutie, beeldverhouding, oriëntatie en de geleverde beeldsnelheid voor je vergadering.';

const faq = [
  {
    question: 'Slaat deze webcamtest mijn video op of wordt deze geüpload?',
    answer: 'Nee. De pagina vraagt alleen een lokale live videostream aan voor de weergave en vraagt nooit om microfoontoegang. Er worden geen opnames gemaakt of gegevens geüpload.',
  },
  {
    question: 'Waarom vraagt de browser om cameratoestemming?',
    answer: 'Een website kan de camera niet openen zonder toestemming. Met de melding kies je of deze pagina een tijdelijk lokaal videosignaal mag ontvangen.',
  },
  {
    question: 'Wat is het verschil tussen geconfigureerde en gemeten FPS?',
    answer: 'Geconfigureerde FPS is de doelsnelheid voor deze weergave. Gemeten FPS schat hoeveel beelden er daadwerkelijk binnenkomen terwijl het tabblad zichtbaar is.',
  },
  {
    question: 'Waarom kan de beschikbare resolutie afwijken van de specificaties?',
    answer: 'Het besturingssysteem, de driver en de browser kiezen samen een geschikte modus. Andere actieve apps of energiebeperkingen kunnen de resolutie verlagen.',
  },
];

const howTo = [
  {
    name: 'Open de privéweergave',
    text: 'Selecteer Camera openen en geef videotoestemming in de browser. Audio wordt niet gevraagd.',
  },
  {
    name: 'Controleer kader en beeld',
    text: 'Controleer scherpte, belichting, achtergrond en oogpositie in de live weergave.',
  },
  {
    name: 'Verifieer het videosignaal',
    text: 'Lees de resolutie, beeldverhouding, oriëntatie en de beeldsnelheid af.',
  },
  {
    name: 'Wissel of stop de camera',
    text: 'Kies een andere beschikbare camera of klik op Camera stoppen om alle sporen te sluiten.',
  },
];

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

export const content: ToolLocaleContent<WebcamTesterUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde vragen over de webcamtest',
  faq,
  bibliographyTitle: 'Bronmateriaal voor camera-instellingen',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Test je webcam voor een videogesprek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze lokale weergave om belangrijke vragen voor een gesprek te beantwoorden: opent de camera, is de juiste camera geselecteerd, is je gezicht goed belicht en beweegt het beeld vloeiend?',
    },
    {
      type: 'list',
      items: [
        'Kies de juiste camera als er meerdere apparaten zijn aangesloten',
        'Plaats de camera op ooghoogte en houd je gezicht in het bovenste derde deel van het beeld',
        'Belicht je gezicht van voren in plaats van voor een fel raam te zitten',
        'Sluit andere vergader-apps als de camera bezet lijkt',
        'Controleer resolutie en beeldsnelheid rechtstreeks op het scherm',
      ],
    },
    {
      type: 'title',
      text: 'Oplossingen voor een zwarte of niet-beschikbare camera',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Symptoom', 'Mogelijke oorzaak', 'Aanbevolen actie'],
      rows: [
        ['Toegang geweigerd', 'Cameratoegang is geblokkeerd in de browser of instellingen', 'Geef toestemming in de instellingen en herlaad de pagina'],
        ['Zwart beeld of bezet', 'Een andere vergader-app gebruikt de camera', 'Sluit Zoom, Teams of Meet en probeer het opnieuw'],
        ['Verkeerd beeld', 'Een virtuele camera of secundair apparaat is geselecteerd', 'Kies een andere bron in het keuzemenu'],
        ['Donker of korrelig beeld', 'Onvoldoende licht van voren of sterk tegenlicht', 'Zet een lamp voor je neer of draai je naar een raam'],
        ['Schokkerige video', 'Weinig licht of hoge computerbelasting', 'Zorg voor meer licht en sluit zware programma s'],
      ],
    },
    {
      type: 'title',
      text: 'Resolutie en beeldsnelheid begrijpen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een resolutie van 1280 × 720 is ruim voldoende voor normale gesprekken. 1920 × 1080 biedt meer scherpte maar vereist een stabiele verbinding. Geconfigureerde FPS geeft het doel aan, terwijl gemeten FPS de daadwerkelijke beeldsnelheid aangeeft.',
    },
    {
      type: 'tip',
      title: 'Test onder realistische omstandigheden',
      html: 'Voer de test uit op hetzelfde tijdstip en met dezelfde belichting als je gesprek. Omdat vergader-apps het beeld kunnen aanpassen, is een eindcontrole in je eigen app aanbevolen.',
    },
    {
      type: 'title',
      text: 'Optimale uitlijning en positie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Plaats de camera rond ooghoogte en laat wat ruimte boven je hoofd. Zorg voor direct licht van voren. Als je een bril draagt, plaats de lamp dan iets aan de zijkant om spiegeling te voorkomen.',
    },
  ],
  ui: {
    privacyNote: 'Geen opname · Geen upload · Geen audio',
    permissionHeading: 'Klaar om je camera te testen?',
    permissionBody: 'Open een privéweergave om het beeld en de beschikbare videoformaten te controleren. Stoppen sluit alle toegang direct.',
    startAction: 'Camera openen',
    stopAction: 'Camera stoppen',
    retryAction: 'Opnieuw proberen',
    deviceLabel: 'Camerabron',
    devicePlaceholder: 'Selecteer camera',
    defaultDevice: 'Camera',
    mirrorAction: 'Spiegelstand',
    guideAction: 'Kadergids',
    stageLabel: 'Priveweergave voor webcam',
    resolutionLabel: 'Resolutie',
    aspectLabel: 'Beeldverhouding',
    orientationLabel: 'Oriëntatie',
    configuredFpsLabel: 'Geconfigureerde FPS',
    observedFpsLabel: 'Gemeten FPS',
    frameDeliveryLabel: 'Beeldweergave',
    landscapeValue: 'Liggend',
    portraitValue: 'Staand',
    squareValue: 'Vierkant',
    frameStable: 'Dicht bij doel',
    frameReduced: 'Onder het doel',
    frameConstrained: 'Sterk verminderd',
    framePending: 'Wachten op beelden',
    statusIdle: 'Camera is gesloten. Open deze wanneer je klaar bent.',
    statusStarting: 'Wachten op toestemming en het eerste videobeeld',
    statusReady: 'Liveweergave actief. Controleer scherpte, licht en beeldsnelheid.',
    statusStopped: 'Camera gestopt. Alle videosporen zijn gesloten.',
    statusHidden: 'Houd dit tabblad zichtbaar voor een nauwkeurige FPS-meting.',
    statusUnsupported: 'Deze browser ondersteunt geen cameratoegang.',
    errorPermissionDenied: 'Toestemming geweigerd. Geef toegang in de browser en probeer opnieuw.',
    errorNoCamera: 'Geen camera gevonden. Sluit een apparaat aan en probeer opnieuw.',
    errorInUse: 'Camera kon niet starten. Sluit andere apps en probeer opnieuw.',
    errorSecureContext: 'Cameratoegang vereist HTTPS of localhost.',
    errorGeneric: 'Kan camera niet openen. Controleer toestemming en apparaat.',
    limitHeading: 'Wat deze test bevestigt',
    limitBody: 'Het bevestigt het beeld en de beeldsnelheid in dit tabblad. Kwaliteit van de lens of bewerkingen door vergader-apps worden niet beoordeeld.',
    localOnlyLabel: 'Privé cameracontrole',
    emptyValue: 'Niet beschikbaar',
    fpsUnit: 'FPS',
  },
};
