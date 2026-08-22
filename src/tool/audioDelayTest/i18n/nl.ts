import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AudioDelayTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'audio-vertraging-test';
const title = 'Audio Vertraging Test';
const description = 'Test de waarneembare audiovertraging op luidsprekers, koptelefoons, Bluetooth-apparaten en videosynchronisatie met een lokale browsetest.';

const faq = [
  {
    question: 'Wat meet deze audiovertragingstest precies?',
    answer: 'De optionele microfoonmodus schat het tijdsverschil tussen de geplande klik in de browser en de opname via je microfoon.',
  },
  {
    question: 'Kan ik Bluetooth-latentie testen zonder microfoon?',
    answer: 'Ja. Start de pulsreeks, kies Bluetooth en verschuif de uitlijningsschuifregelaar tot flits en klik gelijktijdig lijken.',
  },
  {
    question: 'Waarom heeft de microfoonmodus toestemming nodig?',
    answer: 'De browser moet toegang hebben tot de microfoon om de testklik via de luidsprekers op te vangen. Alles wordt lokaal verwerkt.',
  },
  {
    question: 'Waarom kan het microfoonresultaat variëren?',
    answer: 'Kamerreflecties, microfoonverwerking en systeembufferings kunnen het resultaat beïnvloeden.',
  },
  {
    question: 'Welke testmodus moet ik kiezen?',
    answer: 'Kies Luidsprekers voor kamerafspeelmogelijkheden, Bedrade koptelefoon voor directe uitvoer en Bluetooth voor draadloze apparaten.',
  },
  {
    question: 'Wordt mijn microfoongeluid naar een server gestuurd?',
    answer: 'Nee. De microfoonstream wordt uitsluitend lokaal verwerkt en er worden geen opnames geüpload.',
  },
];

const howTo = [
  {
    name: 'Kies het afspeelpad',
    text: 'Selecteer luidsprekers, bedrade koptelefoon, Bluetooth of videosynchronisatie.',
  },
  {
    name: 'Start met de handmatige puls',
    text: 'Druk op Test starten, luister naar de klik en stel de schuifregelaar in tot de flits en klik samenvallen.',
  },
  {
    name: 'Schakel microfoonmeting in indien nodig',
    text: 'Klik op Microfoon inschakelen, verleen toestemming en plaats de microfoon op de luisterplek.',
  },
  {
    name: 'Lees het resultaat af als schatting',
    text: 'Gebruik de mediane vertraging en betrouwbaarheid om je installatie te vergelijken.',
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
    { type: 'title', text: 'Audio Vertraging Test voor Bluetooth en Videosynchronisatie', level: 2 },
    {
      type: 'paragraph',
      html: 'Deze audiovertragingstest in de browser helpt je bij het controleren van de tijdsvertraging tussen beeld en geluid.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Starten zonder microfoontoegang',
      badge: 'Lokaal en privé',
      html: '<p>De handmatige test werkt zonder microfoon. Pas de schuifregelaar aan tot beeld en geluid synchroon aanvoelen.</p>',
    },
    {
      type: 'title',
      text: 'Hoe Bluetooth Audio Latentie te Testen',
      level: 2,
    },
    {
      type: 'list',
      icon: 'mdi:check-circle',
      items: [
        'Selecteer Bluetooth en stel een comfortabel volume in.',
        'Start de pulsreeks vanuit je huidige browser.',
        'Vergelijk de visuele flits direct met de hoorbare klik.',
        'Verplaats de schuifregelaar tot beide samenvallen.',
        'Herhaal de test na het wijzigen van instellingen.',
      ],
    },
    {
      type: 'table',
      headers: ['Modus', 'Meest geschikt voor', 'Belangrijkste beperking'],
      rows: [
        ['Luidsprekers', 'Kamerweergave en TV', 'Afstand en kamreflecties beïnvloeden het signaal.'],
        ['Bedrade koptelefoon', 'Directe analoge uitvoer', 'Microfoon kan gesloten koptelefoon moeilijk opvangen.'],
        ['Bluetooth', 'Draadloze apparaten', 'Codec-buffering verschilt per apparaat.'],
        ['Videosynchronisation', 'Weergave- en spelerafstemming', 'De speler kan eigen videovertraging toevoegen.'],
      ],
    },
    {
      type: 'title',
      text: 'Optionele Microfoonmeting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Met microfoontoegang meet de tool de tijd tussen de geplande puls en de akoestische piekopname.',
    },
    {
      type: 'tip',
      title: 'Plaats de microfoon op de luisterplek',
      html: 'Plaats de microfoon bij luidsprekertests op je gebruikelijke zitplek in een stille ruimte.',
    },
    {
      type: 'title',
      text: 'Waarom Vertragingsresultaten Variëren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Audiovertraging ontstaat door de gehele keten van browser, besturingssysteem, Bluetooth-codec en luidspreker.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Interpretatie van het Resultaat',
      badge: 'Schatting',
      html: '<p>Gebruik de uitkomst om setups te vergelijken. Het is geen vervanging voor professionele apparatuur.</p>',
    },
  ],
  ui: {
    badge: 'Latentie Observatorium',
    modeLabel: 'Afspeelpad',
    modeSpeakers: 'Luidsprekers',
    modeWired: 'Kabel',
    modeBluetooth: 'Bluetooth',
    modeVideo: 'Videosynchronisatie',
    startTest: 'Test starten',
    stopTest: 'Test stoppen',
    enableMic: 'Microfoon inschakelen',
    micEnabled: 'Microfoon gereed',
    calibrationTitle: 'Uitlijningscorrectie',
    calibrationHint: 'Verschuif de schuifregelaar tot flits en klik samenvallen',
    calibrationEarly: 'Audio loopt voor',
    calibrationLate: 'Visueel loopt voor',
    calibrationCenter: 'Uitgelijnd',
    visualLane: 'Visueel',
    audioLane: 'Audio',
    statusReady: 'Gereed',
    statusRunning: 'Pulsreeks actief',
    statusWaiting: 'Wachten op puls',
    resultTitle: 'Huidige meting',
    latencyLabel: 'Gemeten vertraging',
    alignmentLabel: 'Uitlijningscorrectie',
    confidenceLabel: 'Betrouwbaarheid',
    samplesLabel: 'Metingen',
    notMeasured: 'Niet gemeten',
    manualConfidence: 'Alleen handmatig',
    lowConfidence: 'Lage betrouwbaarheid',
    mediumConfidence: 'Gemiddelde betrouwbaarheid',
    highConfidence: 'Hoge betrouwbaarheid',
    noMic: 'Microfooningang niet beschikbaar in deze browser',
    permissionDenied: 'Microfoontoestemming niet verleend',
    limitationTitle: 'Lees het resultaat als een schatting',
    limitationText: 'Kamerreflecties en systeembufferings beïnvloeden de meting. Er worden geen audio-opnames geüpload.',
    copyReport: 'Rapport kopiëren',
    copied: 'Gekopieerd',
    reset: 'Herstellen',
    safety: 'Begin op een laag volume. Stop als het geluid vervormt.',
    pulse: 'SYNCHRO',
  },
};
