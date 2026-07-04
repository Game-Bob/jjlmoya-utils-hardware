import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { StereoAudioTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stereo-audio-testen';
const title = 'Stereo audiotest';
const description = 'Controleer linker- en rechterluidsprekerkanalen, stereobalans, bekabelingsrichting en hoofdtelefoonbeeldvorming met door de browser gegenereerde testtonen.';

const faqData = [
  {
    question: 'Hoe test ik linker- en rechterluidsprekers online?',
    answer: 'Begin met laag volume, druk op Links en dan Rechts. De linker toon mag alleen uit de linker luidspreker of linkeroorschelp komen, en de rechter toon alleen van de rechterkant. Gebruik Midden om te bevestigen dat beide zijden gelijkmatig spelen.',
  },
  {
    question: 'Waarom spelen beide luidsprekers tijdens de linker- of rechtertest?',
    answer: 'Sommige apparaten, besturingssystemen, Bluetooth-luidsprekers, monomodi, toegankelijkheidsinstellingen of audioverbeteringen mixen stereo naar mono. Controleer systeembalans, mono-audio-instellingen, kabelbekabeling en app-specifieke audio-effecten.',
  },
  {
    question: 'Kan dit omgewisselde luidsprekerkabels diagnosticeren?',
    answer: 'Ja. Als de knop Links uit de rechter luidspreker speelt en de knop Rechts uit de linker luidspreker, is het uitvoerpad ergens tussen computer, kabel, versterker, luidsprekers of hoofdtelefoon omgekeerd.',
  },
  {
    question: 'Is een sinustoon veilig voor luidsprekers en hoofdtelefoons?',
    answer: 'Een korte sinustoon op matig volume is normaal gesproken veilig. Vermijd hoog volume, lange sessies of zeer hoge frequenties, vooral bij hoofdtelefoons, kleine laptopluidsprekers of onbekende versterkers.',
  },
  {
    question: 'Heeft de browser invloed op stereotesten?',
    answer: 'De tool gebruikt de Web Audio API StereoPannerNode. Het is betrouwbaar in moderne browsers, maar de uiteindelijke uitvoer hangt nog steeds af van routering van het besturingssysteem, stuurprogramma\'s, Bluetooth-codecs, externe DAC\'s en luidsprekerbekabeling.',
  },
];

const howToData = [
  {
    name: 'Stel een laag startvolume in',
    text: 'Verlaag het systeemvolume en gebruik de volumeschuif van de tool voordat u een testtoon afspeelt.',
  },
  {
    name: 'Test elke kant',
    text: 'Druk op Links en Rechts. Elke toon moet duidelijk geïsoleerd zijn aan de bijpassende luidspreker- of hoofdtelefoonzijde.',
  },
  {
    name: 'Controleer de middenbalans',
    text: 'Druk op Midden. De toon moet gecentreerd tussen beide luidsprekers klinken, niet sterk naar één kant getrokken.',
  },
  {
    name: 'Gebruik de sweep',
    text: 'Voer Sweep uit om beweging over het stereoveld te horen en uitvallers, omgekeerde bekabeling of ongelijkmatige beeldvorming te ontdekken.',
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

export const content: ToolLocaleContent<StereoAudioTestUI> = {
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
      text: 'Linker- en rechterluidsprekertest online',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gebruik deze online stereo-audiotest om te controleren of uw linker- en rechterluidsprekers, hoofdtelefoon, oordopjes, soundbar, DAC, versterker of monitorluidsprekers correct zijn gerouteerd. De tool speelt door de browser gegenereerde tonen via het linkerkanaal, rechterkanaal, beide kanalen of een bewegende stereosweep zodat u snel omgekeerde kanalen, mono-uitvoer, zwakke luidsprekers, balansproblemen en bekabelingsfouten kunt detecteren zonder audiosoftware te installeren.',
    },
    {
      type: 'paragraph',
      html: 'Een correcte stereo-opstelling behoudt de richting: de linker testtoon mag alleen uit de linker luidspreker of linkeroorschelp komen, de rechter testtoon alleen van de rechterkant, en de middentoon moet gelijkmatig gebalanceerd klinken tussen beide kanten. Als het geluid aan de verkeerde kant, aan beide kanten tegelijk of veel luider aan één kant verschijnt, ligt het probleem meestal in de uitvoerinstellingen, mono-toegankelijkheidsmodus, kabelbekabeling, Bluetooth-routering, luidsprekerplaatsing of audioverbeteringssoftware.',
    },
    {
      type: 'table',
      headers: ['Knop', 'Wat u zou moeten horen', 'Gebruik het om te diagnosticeren'],
      rows: [
        ['Links', 'Toon alleen van de linker luidspreker, linker hoofdtelefoondriver of linker oordop.', 'Omgekeerde kabels, verkeerde luidsprekerplaatsing, mono-uitvoer of kanaalhertoewijzing.'],
        ['Rechts', 'Toon alleen van de rechter luidspreker, rechter hoofdtelefoondriver of rechter oordop.', 'Omgewisselde uitvoeren, onjuiste adapterbekabeling of drivereffecten die de kanaalvolgorde wijzigen.'],
        ['Midden', 'Toon verschijnt in het midden omdat beide kanalen gelijkmatig spelen.', 'Systeembalansverschuiving, een zwakke luidspreker, geblokkeerd oordopjesgaas of ongelijke versterkerversterking.'],
        ['Sweep', 'Toon beweegt soepel over het stereobeeld van links naar rechts.', 'Uitvallers, onstabiele Bluetooth-verbindingen, faseproblemen, virtuele surround-artefacten of ongelijkmatige beeldvorming.'],
      ],
    },
    {
      type: 'title',
      text: 'Meest voorkomende stereoproblemen die deze test vindt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Linker- en rechterkanaal zijn omgekeerd: de linkerknop speelt aan de rechterkant, of de rechterknop speelt aan de linkerkant.',
        'Stereo is ingestort naar mono: links, rechts en midden klinken allemaal bijna identiek uit beide luidsprekers.',
        'Eén kant is zachter: middenaudio trekt naar één luidspreker, zelfs wanneer de systeembalansschuif gecentreerd lijkt.',
        'Hoofdtelefoon is verkeerd bekabeld of gedragen: gamestappen, muziekpanning en videogesprekken voelen ruimtelijk verwarrend aan.',
        'Bluetooth- of USB-audio wordt verwerkt: soundbars, docks, headsets en tv-modi kunnen het signaal downmixen of virtualiseren.',
        'Luidsprekerplaatsing is misleidend: een luidspreker te dicht bij een muur, geblokkeerd door meubels of verder weg kan het middenbeeld doen verschuiven.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe omgekeerde linker- en rechteraudio te herstellen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Verwissel voor bedrade luidsprekers de linker- en rechterstekkers bij de versterker, audio-interface, DAC of computeruitgang.',
        'Bevestig voor passieve luidsprekers dat de linker luidspreker is aangesloten op de linker versterkerterminals en de rechter luidspreker op de rechter terminals.',
        'Controleer voor hoofdtelefoons of ze in de juiste richting worden gedragen en test zonder adapters, verlengkabels of splitterkabels.',
        'Controleer voor Windows of macOS de uitvoerbalans en schakel mono-audio uit in de toegankelijkheids- of geluidsinstellingen.',
        'Schakel voor Bluetooth-luidsprekers en soundbars virtuele surround, partymodus, dual audio, ruimtecorrectie of tv-geluidsmodi uit tijdens het testen.',
        'Controleer voor audio-interfaces, DAW\'s en mixers de kanaalroutering, pan-regelaars, monitormixinstellingen en eventuele door de fabrikant geleverde softwaremixer.',
      ],
    },
    {
      type: 'title',
      text: 'Hoe de middenluidsprekertest te interpreteren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De middentoon is geen aparte fysieke middenluidspreker in een normale tweekanaalsopstelling. Het is hetzelfde signaal dat gelijkmatig naar links en rechts wordt gestuurd. Op een hoofdtelefoon moet het gecentreerd in het hoofd aanvoelen; op luidsprekers moet het een fantoommidden tussen hen vormen. Als het naar links of rechts leunt, controleer dan de systeembalans, luidsprekerafstand, luidsprekerhoek, volumeknoppen, versterkerafstelling, oordopjespasvorm, stof in het driverrooster en of een luidspreker gedeeltelijk geblokkeerd is of defect raakt.',
    },
    {
      type: 'table',
      headers: ['Wat gebeurt er', 'Waarschijnlijke oorzaak', 'Volgende stap'],
      rows: [
        ['Links speelt van beide kanten', 'Mono-audio, downmixing of ruimtelijke audioverwerking.', 'Schakel mono-uitvoer en virtuele surround uit en test opnieuw.'],
        ['Links speelt van de rechterkant', 'Kanalen zijn ergens in de afspeelketen omgewisseld.', 'Verwissel kabels of wijzig kanaalroutering in het stuurprogramma, de mixer of versterker.'],
        ['Midden is luider aan één kant', 'Balans, plaatsing, driverschade, oorpassing of geblokkeerd luidsprekerrooster.', 'Vergelijk met een andere hoofdtelefoon of luidsprekerpaar en inspecteer de fysieke plaatsing.'],
        ['Sweep springt of verdwijnt', 'Bluetooth-instabiliteit, audioverbeteringsartefacten of een defecte kabel/connector.', 'Test met bedrade uitvoer of een andere kabel om de zwakke schakel te isoleren.'],
      ],
    },
    {
      type: 'title',
      text: 'Hoofdtelefoon- en oordopjes links-rechts test',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voor hoofdtelefoons en oordopjes is de links/rechts-test bijzonder nuttig voor het gamen, audiobewerking, films kijken of deelnemen aan gesprekken. Zet de hoofdtelefoon normaal op, begin met laag volume, druk op Links en Rechts en bevestig dat elke toon op het juiste oor aankomt. Als beide kanten hetzelfde klinken, gebruikt uw apparaat mogelijk mono-audio. Als één kant dof of zachter is, reinig het oordopjesgaas, plaats de oortip opnieuw, controleer de kabel en vergelijk met een ander uitvoerapparaat.',
    },
    {
      type: 'title',
      text: 'Veilige audiotesttips',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Begin met laag systeemvolume, vooral bij hoofdtelefoons.',
        'Gebruik Lus tot stop alleen wanneer u actief continu geluid nodig hebt voor kabeltracering, plaatsing of balansaanpassing.',
        'Houd testtonen kort bij kleine luidsprekers; continue sinusgolven kunnen snel oncomfortabel worden.',
        'Vermijd maximale versterking op kleine laptopluidsprekers en onbekende versterkers.',
        'Plaats geen hoofdtelefoon op uw oren voordat u hebt bevestigd dat het volume veilig is.',
        'Herhaal na het wijzigen van kabels of instellingen de linker-, rechter-, midden- en sweeptests in die volgorde.',
        'Combineer voor studio- of thuisbioscoopkalibratie deze snelle test met een SPL-meter of de kalibratieroutine van de ontvanger.',
      ],
    },
    {
      type: 'title',
      text: 'Snelle diagnose',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Als links en rechts zijn omgewisseld, inspecteer dan eerst de fysieke bekabeling, want dat is de snelste oplossing voor desktopspeakers, versterkers en audio-interfaces. Als beide knoppen van beide kanten spelen, zoek dan naar mono-uitvoer, ruimtelijke audio, virtuele surround of een apparaat dat opzettelijk stereo downmixt. Als het midden uit het midden is maar links en rechts correct zijn gerouteerd, is het probleem meestal balans, plaatsing, oorpasvorm, geblokkeerde roosters of ongelijke luidsprekeruitvoer.',
    },
  ],
  ui: {
    left: 'Links',
    center: 'Midden',
    right: 'Rechts',
    sweep: 'Sweep',
    stop: 'Stop',
    volume: 'Volume',
    duration: 'Duur',
    infiniteMode: 'Lus tot stop',
    infiniteModeHint: 'Houd elk kanaal aan het spelen voor continu testen.',
    secondsUnit: 's',
    hertzUnit: 'Hz',
    tone: 'Toon',
    balance: 'Balans',
    activeIdle: 'Gereed',
    activeLeft: 'Linkerkanaal afspelen',
    activeCenter: 'Gecentreerde toon afspelen',
    activeRight: 'Rechterkanaal afspelen',
    activeSweep: 'Sweep over stereoveld',
    safety: 'Begin laag. Testtonen kunnen luid zijn via hoofdtelefoons, versterkers en kleine laptopluidsprekers.',
    leftSpeaker: 'Linker luidspreker',
    rightSpeaker: 'Rechter luidspreker',
    centerLine: 'Stereoveld',
  },
};
