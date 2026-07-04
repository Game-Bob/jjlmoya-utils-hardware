import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeyboardChatterTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tastatur-chatter-test';
const title = 'Tastatur Chatter Test';
const description = 'Erkennen Sie mechanisches Tastatur-Chattern, Doppeltippen und fehlerhaftes Schalterprellen, indem Sie prüfen, wie schnell dieselbe Taste zweimal erscheint.';

const faqData = [
  {
    question: 'Was ist Tastatur-Chattern?',
    answer: 'Tastatur-Chattern ist ein Hardwarefehler, bei dem ein physischer Tastendruck als mehrere Tastendrücke registriert wird. Es tritt häufig bei verschmutzten, abgenutzten, oxidierten oder schlecht entprellten mechanischen Schaltern auf.',
  },
  {
    question: 'Wie funktioniert dieser Tastatur-Chatter-Test?',
    answer: 'Drücken Sie die verdächtige Taste langsam, einen Tipp nach dem anderen. Wenn das Protokoll wiederholte Tastendrücke mit nur wenigen Millisekunden Abstand zeigt, könnte der Schalter prellen und doppelte Buchstaben erzeugen.',
  },
  {
    question: 'Welches Delta bedeutet, dass meine Tastatur doppelt tippt?',
    answer: 'Ein wiederholter Tastendruck unter 30 ms ist stark verdächtig für Chattern. Wiederholungen zwischen 30 und 50 ms verdienen Aufmerksamkeit. Normale absichtliche Wiederholungen liegen bei den meisten Nutzern über 50 ms.',
  },
  {
    question: 'Warum zeigt der erste Tastendruck kein Delta an?',
    answer: 'Ein Delta benötigt einen vorherigen Druck derselben Taste. Der erste Tastendruck legt die Basislinie fest, und spätere Tastendrücke zeigen die Zeitlücke in Millisekunden.',
  },
  {
    question: 'Kann Software Tastatur-Chattern beheben?',
    answer: 'Entprell-Software kann einige Symptome verbergen, repariert aber nicht den Schalter. Reinigung, Wiedereinsetzen von Hot-Swap-Schaltern, Austausch des Schalters oder Reparatur der Tastaturplatine können erforderlich sein.',
  },
];

const howToData = [
  {
    name: 'Tool öffnen und Tasten normal drücken',
    text: 'Es gibt keinen Startknopf. Klicken Sie bei Bedarf in das Tool und drücken Sie dann die Taste, die doppelt getippt hat.',
  },
  {
    name: 'Die verdächtige Taste einzeln antippen',
    text: 'Drücken Sie die Taste, die doppelte Zeichen erzeugt. Wenn ein physischer Druck mehrere Protokolleinträge mit winzigen Deltas erzeugt, chattet der Schalter wahrscheinlich.',
  },
  {
    name: 'Den Farbcode lesen',
    text: 'Grün bedeutet normal über 50 ms, Gelb bedeutet verdächtig von 30 bis 50 ms und Rot bedeutet Chattern erkannt unter 30 ms.',
  },
  {
    name: 'Protokoll bei Bedarf exportieren',
    text: 'Verwenden Sie die Download-Schaltfläche, um ein CSV-Protokoll zu speichern, das beim Vergleichen von Tasten oder Dokumentieren eines zeitweiligen Fehlers hilft.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<KeyboardChatterTestUI> = {
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
      text: 'Mechanischer Tastatur-Doppeltipp-Test',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieser Tastatur-Chatter-Test hilft bei der Diagnose einer mechanischen Tastatur, die zwei Buchstaben aus einem Druck tippt, saubere Loslassen verpasst oder wiederholte Zeichen ohne absichtliches doppeltes Tippen erzeugt. Verwenden Sie ihn vor der Reinigung von Schaltern, dem Ändern von Firmware-Entprelleinstellungen, dem Öffnen eines Garantieanspruchs oder dem Austausch eines Hot-Swap-Schalters.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wie man das Ergebnis liest',
      badge: 'Delta-Schwellenwerte',
      html: '<p><strong>Normal</strong> bedeutet, dass die Wiederholung über 50 ms lag und normalerweise beabsichtigt ist. <strong>Verdächtig</strong> bedeutet 30-50 ms und sollte auf derselben Taste erneut getestet werden. <strong>Chattern erkannt</strong> bedeutet unter 30 ms, was sehr wahrscheinlich ein physischer Tastendruck ist, der in mehrere elektrische Kontakte prellt.</p>',
    },
    {
      type: 'title',
      text: 'Warum mechanische Schalter chattern',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ein mechanischer Schalter schließt nicht als perfekt sauberes digitales Signal. Die Metallkontakte können für einige Millisekunden prellen, bevor sie sich setzen. Die Tastatur-Firmware filtert dieses Prellen normalerweise mit einem Entprellfenster. Chattern tritt auf, wenn der Kontakt so verschmutzt, abgenutzt, oxidiert, locker, gerissen oder schlecht eingestellt ist, dass die Tastatur zusätzliche Tastendrücke meldet, nachdem der Entprellfilter sie hätte verarbeiten sollen.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Wahrscheinliche Ursache', 'Was zuerst versuchen'],
      rows: [
        ['Eine Taste tippt denselben Buchstaben zweimal', 'Verschmutzter oder abgenutzter Schaltkontakt', 'Tastenkappe entfernen, Staub ausblasen und erneut testen, bevor Sie den Schalter austauschen.'],
        ['Mehrere Hot-Swap-Tasten chattern nach einem Build', 'Schalterstifte sitzen nicht sauber', 'Schalter herausziehen und wieder einsetzen, auf verbogene Stifte oder lockeren Sockel prüfen.'],
        ['Tritt nur nach Verschüttungen oder Feuchtigkeit auf', 'Oxidation oder Rückstände auf Kontakten', 'Tastatur trennen und gemäß Herstelleranleitung reinigen.'],
        ['Viele Tasten zeigen winzige Deltas', 'Firmware-Entprellung zu niedrig oder Scan-Problem', 'An einem anderen USB-Anschluss vergleichen und Firmware-Entprelleinstellungen überprüfen, falls verfügbar.'],
      ],
    },
    {
      type: 'title',
      text: 'Testmethode zur Reduzierung von Fehlalarmen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Testen Sie eine verdächtige Taste nach der anderen, anstatt vollständige Sätze zu tippen.',
        'Drücken Sie die Taste einmal, lassen Sie sie vollständig los und warten Sie einen Moment vor dem nächsten Druck.',
        'Vergleichen Sie die verdächtige Taste mit einer benachbarten Taste, die gesund wirkt.',
        'Ignorieren Sie die erste Zeile für eine Taste, da es keinen vorherigen Druck zum Vergleichen gibt.',
        'Wenn dieselbe Taste wiederholt rote Zeilen unter 30 ms bei einzelnen Antippern zeigt, behandeln Sie es als Hardwarefehler.',
        'Wenn nur gelbe Zeilen erscheinen, wiederholen Sie den Test langsamer und prüfen Sie, ob Ihr Tipprhythmus das kurze Intervall verursacht.',
      ],
    },
    {
      type: 'title',
      text: 'Chattern vs. Absichtlich schnelles Tippen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Chattern',
          description: 'Auf eine Taste gehäuft, oft unter 30 ms, und erscheint, wenn Sie einen Tastendruck beabsichtigten.',
          points: ['Schalter oder Sockel inspizieren.', 'Mit einer benachbarten gesunden Taste vergleichen.'],
        },
        {
          title: 'Schnelles Tippen',
          description: 'Betrifft viele Tasten, folgt Ihrem Rhythmus und liegt tendenziell über 50 ms zwischen wiederholten Drücken derselben Taste.',
          points: ['Normalerweise normale Nutzung.', 'Erneut mit langsameren Einzelantippern testen.'],
        },
        {
          title: 'Betriebssystem Tastenwiederholung',
          description: 'Erscheint beim Halten einer Taste und wiederholt sich normalerweise in einem regelmäßigen Rhythmus, der vom Betriebssystem festgelegt wird.',
          points: ['Zwischen Antippern vollständig loslassen.', 'Tastaturwiederholungseinstellungen separat prüfen.'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Was zu tun ist, wenn eine Taste durchfällt',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Speichern Sie ein CSV-Protokoll, bevor Sie etwas ändern, damit Sie Vorher-Nachher-Ergebnisse vergleichen können.',
        'Entfernen Sie die Tastenkappe und prüfen Sie auf Schmutz, Flüssigkeitsrückstände oder einen Stößel, der nicht gleichmäßig zurückkehrt.',
        'Bei Hot-Swap-Tastaturen den Schalter neu einsetzen oder austauschen und dieselbe Tastenposition erneut testen.',
        'Bei gelöteten Tastaturen die Firmware-Entprelloptionen vergleichen, bevor Sie von einer Reparatur der Platine ausgehen.',
        'Ein anderes Kabel und einen anderen USB-Anschluss ausprobieren, wenn mehrere nicht verwandte Tasten unmögliche Deltas zeigen.',
        'Für den Garantiesupport: betroffene Taste, wiederholte Delta-Werte, Tastaturmodell, Firmware-Version und ob der Fehler dem Schalter oder dem PCB-Sockel folgt, angeben.',
      ],
    },
    {
      type: 'summary',
      title: 'Schnelle Regel',
      items: [
        'Eine einzelne rote Zeile ist ein Hinweis, kein Urteil.',
        'Wiederholte rote Zeilen unter 30 ms auf derselben physischen Taste sind starke Hinweise auf Tastatur-Chattern.',
        'Verwenden Sie bewusst einzelne Antipper und vergleichen Sie den verdächtigen Schalter mit einer benachbarten gesunden Taste, bevor Sie Hardware austauschen.',
      ],
    },
  ],
  ui: {
    statusIdle: 'Taste drücken',
    statusListening: 'Tasten-Deltas messen',
    statusChatter: 'Chattern erkannt',
    totalPresses: 'Gesamte Drücke',
    chatterEvents: 'Chatter-Ereignisse',
    worstDelta: 'Schlimmstes Delta',
    watchWindow: 'Zeilen behalten',
    keyColumn: 'Taste',
    deltaColumn: 'Delta',
    verdictColumn: 'Urteil',
    timeColumn: 'Zeit',
    normal: 'Normal',
    suspect: 'Verdächtig',
    chatter: 'Chattern',
    waiting: 'Warten',
    clear: 'Protokoll löschen',
    exportLog: 'CSV exportieren',
    hint: 'Das Protokoll behält die letzten 80 Zeilen, damit lange Sitzungen schnell bleiben. Tastenwiederholung bei gehaltener Taste wird ignoriert; rote Zeilen stammen von getrennten Drücken, die zu kurz aufeinander folgten.',
    captureNotice: 'Kein Startknopf. Tippen Sie eine verdächtige Taste einmal an und beobachten Sie das Delta von ihrem vorherigen Druck.',
    keyboardAriaLabel: 'Aktuelle Tastenaktivität',
    logAriaLabel: 'Tastatur-Chatter-Ereignisprotokoll',
    escapeKey: 'Esc',
    backspaceKey: 'Rück',
    tabKey: 'Tab',
    enterKey: 'Enter',
    capsLockKey: 'Fest',
    shiftKey: 'Umschalt',
    controlKey: 'Strg',
    metaKey: 'Meta',
    altKey: 'Alt',
    spaceKey: 'Leer',
    csvHeader: 'taste,code,delta_ms,schwere,zeit',
  },
};
