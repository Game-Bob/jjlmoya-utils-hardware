import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InputLagTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'input-lag-test';
const title = 'Input Lag en Systeem Latency Test';
const description = 'Online meetgereedschap voor hardware-invoer vertraging en systeem-latency met hoge precisie en schermsynchronisatie.';

const faqData = [
  {
    question: 'Wat is input lag en systeem-latency?',
    answer: 'Input lag is de totale tijdvertraging tussen een fysieke gebruikersactie (klikken op de muis of drukken op een toets) en de bijbehorende visuele weergave op het scherm.',
  },
  {
    question: 'Hoe meet deze online test de invoervertraging?',
    answer: 'De test legt hardware-gebeurtenistijdstempels vast via performance.now() en relateert deze aan opeenvolgende requestAnimationFrame-weergavecycli.',
  },
  {
    question: 'Wat is een goede input lag voor gaming?',
    answer: 'Minder dan 10 ms wordt beschouwd als ultrasnel voor esports. 10 ms tot 20 ms is snel, 20 ms tot 35 ms is gemiddeld en boven 35 ms is een merkbare vertraging.',
  },
  {
    question: 'Hoe kan ik input lag verminderen op mijn pc?',
    answer: 'Verhoog de verversingssnelheid van uw monitor, schakel VSync uit, schakel G-Sync of FreeSync in, verhoog de USB-reactiesnelheid van de muis naar 1000Hz+ en gebruik NVIDIA Reflex.',
  },
  {
    question: 'Beïnvloedt de verversingssnelheid van het scherm de input lag?',
    answer: 'Ja. Hogere verversingssnelheden verkorten de beeldduur. Een 60Hz scherm heeft een beeldduur van 16,67 ms, terwijl een 240Hz scherm een beeldduur van slechts 4,17 ms heeft.',
  },
];

const howToData = [
  {
    name: 'Kies testmodus',
    text: 'Selecteer Directe Respons, Toetsaanslag Latency of Visuele Reactie Latency.',
  },
  {
    name: 'Voer fysieke invoer uit',
    text: 'Klik in het doelvak of druk op toetsen om invoergebeurtenissen te genereren.',
  },
  {
    name: 'Bekijk realtime latency-statistieken',
    text: 'Bekijk de berekende gemiddelde, minimale, maximale latency en jitter.',
  },
  {
    name: 'Controleer scherm-timing',
    text: 'Houd de huidige FPS en beeldtijd in de gaten ter controle van schermstabiliteit.',
  },
  {
    name: 'Analyseer de meetgeschiedenis',
    text: 'Inspecteer het geschiedenislogboek om pieken en afwijkingen te identificeren.',
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

const uiData: InputLagTestUI = {
  title,
  description,
  badge: 'Systeem-Latency',
  modeInstant: 'Directe Respons',
  modeKey: 'Toetsaanslag Latency',
  modeVisual: 'Visuele Reactie Latency',
  targetClickPrompt: 'Klik of tik in dit vak om de latency te meten',
  targetKeyPrompt: 'Druk op een willekeurige toets (of Spatiebalk) om de toetsenbordlatency te meten',
  targetWaitPrompt: 'Wacht op de groene achtergrond...',
  targetNowPrompt: 'KLIK NU!',
  labelAvgLatency: 'Gemiddelde Latency',
  labelMinLatency: 'Minimale Latency',
  labelMaxLatency: 'Maximale Latency',
  labelJitter: 'Latency-Jitter (Standaardafw.)',
  labelFps: 'Huidige FPS',
  labelFrameTime: 'Beeldtijd',
  labelSamples: 'Metingen',
  labelGrade: 'Latency-Beoordeling',
  gradeUltraFast: 'Ultrasnel (<10ms)',
  gradeFast: 'Snel (10-20ms)',
  gradeModerate: 'Gemiddeld (20-35ms)',
  gradeHigh: 'Hoog (>35ms)',
  btnReset: 'Metingen Herstellen',
  btnCopyReport: 'Benchmark-Rapport Kopiëren',
  reportCopied: 'Rapport Gekopieerd!',
  historyTitle: 'Recente Latency-Metingen',
  pipelineTitle: 'Hardware Signaalpad Latency-Analyse',
  distributionTitle: 'Latency Frequentieverdeling',
  sampleCol: 'Meting',
  typeCol: 'Invoertype',
  latencyCol: 'Gemeten Latency',
};

export const content: ToolLocaleContent<InputLagTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  ui: uiData,
  seo: [
    {
      type: 'title',
      text: 'Wat is Input Lag en Systeem-Latency bij PC Gaming?',
    },
    {
      type: 'paragraph',
      html: 'Input lag (of invoervertraging) vertegenwoordigt de exacte tijdvertraging tussen een fysieke actie van de gebruiker (zoals het klikken met een muisknop of het indrukken van een toets op het toetsenbord) en de bijbehorende visuele weergave die op het beeldscherm verschijnt. In esports en snelle games is het minimaliseren van systeem-latency essentieel voor richtnauwkeurigheid, snelle reacties en algehele prestaties. De totale systeem-latency bestaat uit een opeenstapeling van vertragingen: USB-polling van het randapparaat, gebeurtenisverwerking door het besturingssysteem, de render-engine van de game, GPU-framebuffers en de eigen reactietijd van de monitorpixels.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '< 10 ms',
          label: 'Esports Doel-Latency',
          trend: 'Optimale competitieve waarde',
        },
        {
          value: '1000 Hz',
          label: 'Standaard USB Polling',
          trend: '1.0 ms interval tussen signalen',
        },
        {
          value: '240 Hz',
          label: 'Hoge Verversingssnelheid',
          trend: '4.16 ms beeldtijd per frame',
        },
        {
          value: '16.6 ms',
          label: '60Hz Beeldtijd',
          trend: 'Basisvertraging per getoond beeld',
        },
      ],
      columns: 4,
    },
    {
      type: 'card',
      title: 'Hoe werkt latency meting direct in uw browser?',
      html: 'Deze test maakt gebruik van hoge-precisie tijdstempels via <code>performance.now()</code> gecombineerd met DOM-invoergebeurtenissen (<code>pointerdown</code> en <code>keydown</code>). Door gebeurtenissen te synchroniseren met de daadwerkelijke schermververstijd via <code>requestAnimationFrame</code>, berekent de tool het tijdsverschil tussen de fysieke actie en de beeldverversing direct in uw browser op accurate wijze.',
    },
    {
      type: 'title',
      text: 'Het complete signaalpad van toetsaanslag tot schermweergave',
    },
    {
      type: 'paragraph',
      html: 'Om invoervertraging effectief te verminderen en te analyseren, moet het gehele signaalpad grondig worden geanalyseerd. De totale systeem-latency is de som van de randapparatuur, het besturingssysteem, de render-engine van het spel, de grafische kaart en de beeldschermverwerking.',
    },
    {
      type: 'table',
      headers: ['Component', 'Typische Vertraging', 'Hoofdoorzaak van Vertraging', 'Optimalisatiestrategie'],
      rows: [
        ['Randapparaat Schakelaar', '0.2 ms - 5.0 ms', 'Mechanische dender op de contacten', 'Optische schakelaars gebruiken'],
        ['USB-Reactiesnelheid', '0.125 ms - 8.0 ms', '125 Hz vs 1000 Hz / 8000 Hz USB', 'Verhoog naar 1000Hz of hoger'],
        ['Besturingssysteem Wachtrij', '0.5 ms - 3.0 ms', 'Achtergrondtaken van het besturingssysteem', 'Windows Gamemodus inschakelen'],
        ['Render Engine van het Spel', '4.0 ms - 20.0 ms', 'CPU-belasting en draadsynchronisatie', 'NVIDIA Reflex / Anti-Lag gebruiken'],
        ['GPU Framebuffer', '8.0 ms - 33.0 ms', 'VSync ingeschakeld, dubbele/drievoudige buffer', 'VSync uitschakelen, VRR gebruiken'],
        ['Schermverwerking', '1.0 ms - 15.0 ms', 'TV beeldverwerking en schaalalgoritmen', 'Spelmodus inschakelen op tv/monitor'],
      ],
    },
    {
      type: 'tip',
      title: 'Hoe verminder ik latency bij een hoge GPU belastingsgraad?',
      html: 'Wanneer de grafische kaart voor 99% wordt belast, slaat de driver meerdere beelden van tevoren op. Dit veroorzaakt een aanzienlijke invoervertraging (vaak 30 ms tot 50 ms). Beperk de beeldsnelheid iets onder de maximale capaciteit van de GPU of gebruik NVIDIA Reflex.',
    },
    {
      type: 'title',
      text: 'Vergelijking van latency bij muizen, toetsenborden en touchscreens',
    },
    {
      type: 'paragraph',
      html: 'Verschillende invoerapparaten vertonen uiteenlopende latency-eigenschappen afhankelijk van de toegepaste technologie.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Gaming Muizen',
          description: 'Snelle draadloze (2.4GHz) of bekabelde verbinding.',
          highlight: '0.5ms - 2ms Latency',
          points: [
            '1000Hz tot 8000Hz polling rate',
            'Optische schakelaars zonder dendervertraging',
            'Sensoren met zeer lage bewegingsvertraging',
          ],
        },
        {
          title: 'Mechanische Toetsenborden',
          description: 'Matrix-scanning met dender-controle.',
          highlight: '1ms - 10ms Latency',
          points: [
            'Magnetische Hall-effect schakelaars (Rapid Trigger)',
            'Scanfrequentie tot 8000Hz',
            'Instelbaar activatiepunt',
          ],
        },
        {
          title: 'Mobiele Touchscreens',
          description: 'Capacitieve sampling op mobiele apparaten.',
          highlight: '15ms - 45ms Latency',
          points: [
            'Touch-sampling frekwentie (120Hz - 480Hz)',
            'Vertraging door besturingssysteem-compositor',
            'Capacitieve filteralgoritmen',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Invloed van verversingssnelheid op beeldschermvertraging',
    },
    {
      type: 'paragraph',
      html: 'De verversingssnelheid van het scherm bepaalt de minimale weergavevertraging.',
    },
    {
      type: 'list',
      items: [
        '60 Hz scherm: 1 beeld = 16.67 ms beeldduur (Gemiddelde vertraging: ~8.33 ms)',
        '120 Hz scherm: 1 beeld = 8.33 ms beeldduur (Gemiddelde vertraging: ~4.16 ms)',
        '144 Hz scherm: 1 beeld = 6.94 ms beeldduur (Gemiddelde vertraging: ~3.47 ms)',
        '240 Hz scherm: 1 beeld = 4.17 ms beeldduur (Gemiddelde vertraging: ~2.08 ms)',
        '360 Hz scherm: 1 beeld = 2.78 ms beeldduur (Gemiddelde vertraging: ~1.39 ms)',
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Input Lag',
          definition: 'Totale tijd tussen de fysieke invoer en de visuele weergave op het beeldscherm.',
        },
        {
          term: 'Jitter (Latency-variatie)',
          definition: 'De standaardafwijking van metingen die de regelmatigheid van het systeem aangeeft.',
        },
        {
          term: 'VSync (Verticale Synchronisatie)',
          definition: 'Voorkomt schermscheuringen maar verhoogt de invoervertraging aanzienlijk.',
        },
        {
          term: 'Variable Refresh Rate (VRR)',
          definition: 'Technologieën zoals G-Sync en FreeSync die de verversingssnelheid afstemmen op de GPU.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Voor- en nadelen van browsergebaseerde latency-meting',
    },
    {
      type: 'paragraph',
      html: 'Het meten van latency in de browser biedt directe toegang zonder speciale hardware.',
    },
    {
      type: 'proscons',
      title: 'Beoordeling van browsermeting',
      items: [
        {
          pro: 'Geen software-installatie of speciale apparatuur nodig',
          con: 'Afhankelijk van de event-loop van de browser en de window-manager',
        },
        {
          pro: 'Hoge precisie dankzij de performance.now microseconden-timer',
          con: 'Meet niet direct de optische reactietijd van de schermpixels',
        },
        {
          pro: 'Directe vergelijkingsmeting tussen verschillende apparaten',
          con: 'Beveiligingsbeperkingen op de precisie van de browser-timer',
        },
      ],
    },
    {
      type: 'title',
      text: 'Diagnose bij hoge invoervertraging',
    },
    {
      type: 'paragraph',
      html: 'Als uw resultaten een hoge latency vertonen (>30 ms), controleer dan de onderstaande instellingen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Melding Hoge Latency',
      html: 'Als de gemiddelde latency hoger is dan 35 ms, controleer dan of VSync is ingeschakeld in het stuurprogramma van de grafische kaart. Uitgeschakelde hardware-versnelling in de browser kan ook vertragingen veroorzaken.',
    },
    {
      type: 'title',
      text: 'Stappen om de systeem-latency te optimaliseren',
    },
    {
      type: 'paragraph',
      html: 'Volg deze stappen om de vertraging op uw systeem te verminderen.',
    },
    {
      type: 'summary',
      title: 'Checklist voor Latency Optimalisatie',
      items: [
        'Stel de USB-reactiesnelheid van de muis in op 1000Hz of hoger.',
        'Schakel Hardware-accelerated GPU scheduling (HAGS) in via de Windows-instellingen.',
        'Schakel de Spelmodus op de tv of monitor in om beeldverwerking te omzeilen.',
        'Schakel VSync uit in de 3D-instellingen en gebruik G-Sync of FreeSync.',
        'Schakel NVIDIA Reflex of AMD Anti-Lag in bij ondersteunde games.',
        'Zorg ervoor dat Hardware-versnelling in de browser aan staat.',
      ],
    },
    {
      type: 'message',
      title: 'Best practice voor betrouwbare resultaten',
      html: 'Sluit voor optimale precisie achtergrondtoepassingen, gebruik de browser in volledig scherm en voer minstens 15 tot 20 metingen uit.',
    },
  ],
};
