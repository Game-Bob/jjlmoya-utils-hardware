import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SubwooferCrossoverTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'subwoofer-frequenzweichen-test-online';
const title = 'Subwoofer Frequenzweichentest';
const description =
  'Führe einen Sinus-Sweep von 200 Hz bis 10 Hz in deinem Browser durch, um zu finden, wo dein Subwoofer abfällt, aussetzt oder an die Hauptlautsprecher übergibt.';

const faqData = [
  {
    question: 'Was misst ein Subwoofer-Frequenzweichen-Test?',
    answer:
      'Er hilft dir, den Punkt zu hören, an dem der Bass zwischen deinen Hauptlautsprechern und dem Subwoofer nicht mehr durchgängig klingt. Eine Lücke, ein plötzlicher Pegelwechsel oder ein fehlender Bereich kann auf eine falsche Übergangsfrequenz, ein Phasenproblem, Raumauslöschung oder die Grenze des Subwoofers hinweisen.',
  },
  {
    question: 'Warum sweeped dieser Test von 200 Hz auf 10 Hz herunter?',
    answer:
      'Die meisten Heimkino-Übergangsfrequenzen liegen zwischen 60 Hz und 120 Hz, während viele Kompaktlautsprecher oberhalb oder unterhalb dieses Bereichs an Ausgabe verlieren. Das Heruntersweepen von 200 Hz macht die Lautsprecher-Subwoofer-Übergabe leicht hörbar, bevor der Ton den tiefen Subbass erreicht.',
  },
  {
    question: 'Kann dieser Online-Subwoofer-Basstest Lautsprecher beschädigen?',
    answer:
      'Ja, sehr tiefe Frequenzen bei hoher Lautstärke können kleine Lautsprecher überlasten oder einen Subwoofer überfordern. Starte leise, vermeide verstärkte Bassmoden und stoppe sofort, wenn du Klappern, Klopfen oder mechanische Überlastung hörst.',
  },
  {
    question: 'Ist die markierte Ausfallfrequenz die exakte Übergangsfrequenz, die ich einstellen sollte?',
    answer:
      'Nein. Betrachte sie als Hörtipp, nicht als Labormessung. Die beste Übergangsfrequenz hängt auch von den Lautsprecherspezifikationen, der Raumaufstellung, der Phase, der Entfernungskorrektur und dem Kalibrierungsziel ab.',
  },
];

const howToData = [
  {
    name: 'Stelle eine sichere Hörlautstärke ein',
    text: 'Reduziere zuerst die Systemlautstärke. Der Sweep verwendet eine erzeugte Sinuswelle, sodass der Bass auch dann intensiv werden kann, wenn die Browser-Lautstärke moderat erscheint.',
  },
  {
    name: 'Starte den 200 Hz bis 10 Hz Sweep',
    text: 'Drücke Sweep starten und höre von deinem normalen Sitzplatz aus. Der Ton bewegt sich gleichmäßig durch den Bassbereich, in dem sich Subwoofer, Hauptlautsprecher und Raumakustik überlappen.',
  },
  {
    name: 'Höre auf den Ausfall oder die Übergabe',
    text: 'Achte auf den Moment, in dem der Bass schwächer wird, verschwindet, den Ort wechselt oder zwischen Subwoofer und Hauptlautsprechern ungleichmäßig klingt.',
  },
  {
    name: 'Markiere die Frequenz',
    text: 'Drücke Ausfall markieren am ersten deutlichen Problempegel. Verwende diese Frequenz als Hinweis zur Anpassung von Übergangsfrequenz, Phase, Aufstellung oder Raumkorrektur.',
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
  inLanguage: 'de',
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
    { type: 'title', text: 'Finde Die Basslücke Zwischen Deinen Lautsprechern Und Dem Subwoofer', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Subwoofer sollte nicht wie eine separate Box in der Ecke klingen. Der Bass sollte gleichmäßig bleiben, wenn die Töne von deinen Hauptlautsprechern in den Sub übergehen. Dieser Test sweeped von <strong>200 Hz bis 10 Hz</strong>, damit du genau die Zone hören kannst, in der die Übergabe schwach, dröhnend, ortbar oder stumm wird.',
    },
    {
      type: 'table',
      headers: ['Was du hörst', 'Was es normalerweise bedeutet', 'Was du zuerst versuchen solltest'],
      rows: [
        ['Bass verschwindet um 70-100 Hz', 'Subwoofer und Lautsprecher löschen sich gegenseitig nahe der Übergangsfrequenz aus.', 'Phase umkehren, Entfernung/Verzögerung anpassen, dann den Sweep wiederholen.'],
        ['Bass dröhnt in einem schmalen Band', 'Raummode oder zu viel Überlappung zwischen Lautsprechern und Subwoofer.', 'Übergangsfrequenz leicht senken oder Subwoofer/Hörposition verschieben.'],
        ['Bass scheint vom Subwoofer-Standort zu kommen', 'Übergangsfrequenz zu hoch oder Subwoofer-Pegel zu heiß.', '80 Hz oder niedriger versuchen und Subwoofer-Verstärkung reduzieren.'],
        ['Tiefbass verblasst unter 30-40 Hz', 'Normale Ausdehnungsgrenze vieler Subs, besonders kompakter Modelle.', 'Subwoofer-Spezifikation prüfen, bevor du ein Problem verfolgst, das physikalisch sein könnte.'],
      ],
    },
    { type: 'title', text: 'Was Dir Die Ausfallfrequenz Sagt', level: 3 },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Verwende die markierte Frequenz als Abstimmungshinweis',
      badge: 'Hörtipps',
      html: '<p>Wenn der markierte Punkt nahe deiner AVR-Übergangsfrequenz liegt, ist das Problem wahrscheinlich Integration: Phase, Entfernung, Polarität, Pegel oder die Steilheit der Filter. Liegt der markierte Punkt viel tiefer, hörst du vielleicht, wie der Subwoofer an seine Leistungsgrenze stößt. Ändert sich das Problem stark, wenn du deinen Kopf bewegst, dominiert der Raum das Ergebnis.</p>',
    },
    {
      type: 'title',
      text: 'Übliche Übergangsfrequenzbereiche',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Lautsprechertyp', 'Typischer Übergangsfrequenz-Startpunkt', 'Warum'],
      rows: [
        ['Kleine Satelliten', '100-150 Hz', 'Winzige Gehäuse können normalerweise keinen sauberen oberen Bass bei Kino-Lautstärken wiedergeben.'],
        ['Regallautsprecher', '70-100 Hz', 'Oft genug Bass für eine saubere Übergabe, ohne den Sub ortbar zu machen.'],
        ['Standlautsprecher', '50-80 Hz', 'Größere Tieftöner können mehr Mittelbass bewältigen, aber der Raum kann trotzdem Subwoofer-Bassmanagement bevorzugen.'],
        ['THX-Setup', '80 Hz', 'Ein praktischer Standardwert, der für viele Systeme gut funktioniert und Tiefbass zum Sub leitet.'],
      ],
    },
    { type: 'title', text: 'Übergangsfrequenzproblem Oder Raumproblem?', level: 3 },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Übergangsfrequenz oder Phasenproblem',
          description: 'Die Schwachstelle erscheint nahe der Übergangsfrequenz und verbessert sich nach Änderung von Phase, Polarität, Entfernung oder Übergangsfrequenz-Einstellung.',
          points: ['Normalerweise vom gleichen Sitzplatz aus wiederholbar.', 'Oft um 60-120 Hz zentriert.'],
        },
        {
          title: 'Raumauslöschung',
          description: 'Die Schwachstelle ändert sich drastisch, wenn du deinen Kopf bewegst, den Sitzplatz wechselst oder den Subwoofer ein kurzes Stück verschiebst.',
          points: ['Sehr positionsabhängig.', 'Oft mehr durch Aufstellung als durch Einstellungen zu lösen.'],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Beste Art, den Test durchzuführen',
      html: 'Setze dich dorthin, wo du tatsächlich Filme schaust oder Musik hörst. Stehe nicht neben dem Subwoofer. Eine Übergangsfrequenz, die neben dem Gehäuse gut klingt, kann auf dem Sofa immer noch eine Lücke hinterlassen.',
    },
    {
      type: 'summary',
      title: 'Was nach dem Sweep zu ändern ist',
      items: [
        'Liegt die Lücke nahe der aktuellen Übergangsfrequenz, probiere 10-Hz-Änderungen und wiederhole den Sweep.',
        'Teste den Phasenschalter oder die Verzögerungseinstellung des Subwoofers, wenn das schwache Band nahe der Übergangsfrequenz liegt.',
        'Wird der Bass an einem Sitzplatz stärker und verschwindet an einem anderen, verschiebe den Subwoofer, bevor du alle AVR-Einstellungen änderst.',
        'Nach Aufstellungs- oder Übergangsfrequenzänderungen führe die Raumkorrektur erneut aus, damit der Receiver das neue Setup misst.',
        'Verwende die markierte Frequenz als Leitfaden für die Abstimmung und bestätige dann mit Musik, Filmen und vertrauten Basslinien.',
      ],
    },
  ],
  ui: {
    sweepLabel: 'Subwoofer-Tieffrequenz-Sweep',
    currentFrequency: 'Aktuelle Frequenz',
    targetFrequency: 'Ziel',
    elapsed: 'Verstrichen',
    statusReady: 'Bereit für Tief-Sweep',
    statusRunning: 'Sweepe nach unten',
    statusStopped: 'Sweep gestoppt',
    start: 'Sweep starten',
    stop: 'Sweep stoppen',
    markDropout: 'Ausfall markieren',
    reset: 'Zurücksetzen',
    volume: 'Ausgabepegel',
    duration: 'Sweep-Dauer',
    safeStart: 'Starte mit niedriger Lautstärke und markiere dann die erste Frequenz, bei der der Bass schwer hörbar wird.',
    roomNote: 'Raumposition und Phase können das Ergebnis drastisch verändern.',
    dropoutLabel: 'Markierter Punkt',
    dropoutEmpty: 'Noch nicht markiert',
    crossoverEstimate: 'Geschätzter Ausfallpunkt',
  },
};
