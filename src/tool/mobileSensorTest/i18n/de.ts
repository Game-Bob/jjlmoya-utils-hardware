import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileSensorTestUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'mobile-sensor-test';
const title = 'Handy-Sensor-Test';
const description = 'Führen Sie einen Online-Test für Gyroskop, Beschleunigungssensor, Bewegungssensor und digitale Wasserwaage auf Ihrem Handy durch, um Neigung, Drehung, Drift und Sensor-Kalibrierungsprobleme zu überprüfen.';

const faqData = [
  {
    question: 'Wie kann ich mein Handy-Gyroskop online testen?',
    answer: 'Öffnen Sie den Test auf dem Handy, tippen Sie auf Kalibrierung starten, erlauben Sie bei Aufforderung den Zugriff auf die Bewegungssensoren und drehen und neigen Sie dann das Gerät. Ein funktionierendes Gyroskop und ein Orientierungssensor sollten Alpha, Beta und Gamma gleichmäßig aktualisieren, ohne einzufrieren oder wild zu springen.',
  },
  {
    question: 'Kann ich den Beschleunigungssensor mit einer Wasserwaage testen?',
    answer: 'Ja. Legen Sie das Handy nach dem Start des Tests auf einen flachen Tisch. Die Blase sollte sich nahe der Mitte einpendeln und die Beschleunigungswerte sollten stabil bleiben. Wenn die Blase stark driftet, während das Handy still liegt, muss der Beschleunigungssensor möglicherweise kalibriert werden oder die Hülle, der Tisch oder die Gerätehardware stören.',
  },
  {
    question: 'Warum fragt das iPhone nach Bewegungserlaubnis?',
    answer: 'Safari auf iPhone und iPad erfordert eine Berührung, bevor Websites auf Bewegungs- und Orientierungssensoren zugreifen können. Wenn die Erlaubnis verweigert wird, kann der Test keine Gyroskop- oder Beschleunigungsdaten lesen, bis Sie den Bewegungszugriff erlauben.',
  },
  {
    question: 'Kann dies einen defekten Kompass reparieren oder kalibrieren?',
    answer: 'Kein Browser-Tool kann Hardware reparieren oder die System-Kompasskalibrierung erzwingen. Dieser Test hilft Ihnen, Symptome zu erkennen: eingefrorene Messwerte, verrauschtes Signal, Drift, fehlende Berechtigungen oder einen Browser, der die Sensoren nicht bereitstellt.',
  },
];

const howToData = [
  { name: 'Öffnen Sie den Test auf Ihrem Handy', text: 'Verwenden Sie dasselbe iPhone, iPad, Android-Handy oder Tablet, das Sie diagnostizieren möchten. Desktop-Browser haben in der Regel keine Bewegungssensoren.' },
  { name: 'Bewegungszugriff erlauben', text: 'Tippen Sie auf Kalibrierung starten und akzeptieren Sie die Aufforderung zur Bewegungs- oder Orientierungserlaubnis, falls Ihr Browser eine anzeigt.' },
  { name: 'Neigung und Drehung testen', text: 'Kippen Sie das Handy nach vorne, rollen Sie es nach links und rechts, dann drehen Sie es flach auf einem Tisch. Achten Sie auf gleichmäßige Änderungen von Alpha, Beta, Gamma und Beschleunigung.' },
  { name: 'Drift auf einer flachen Oberfläche prüfen', text: 'Lassen Sie das Handy mehrere Sekunden lang still liegen. Ein gesunder Sensor sollte sich stabilisieren, anstatt ständig zu wandern, Spitzen zu zeigen oder einzufrieren.' },
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

export const content: ToolLocaleContent<MobileSensorTestUI> = {
  slug,
  title,
  description,
  faq: faqData,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  bibliography,
  seo: [
    { type: 'title', text: 'Online-Gyroskop- und Beschleunigungssensor-Test für Handys', level: 2 },
    {
      type: 'paragraph',
      html: 'Verwenden Sie diesen Handy-Sensor-Test, wenn sich die Bildschirmdrehung falsch anfühlt, Spiele oder AR-Apps driften, eine Wasserwaagen-App ungenau wirkt, die Navigation in die falsche Richtung zeigt oder das Handy nicht korrekt auf Neigung reagiert. Der Test zeigt live das Verhalten von Gyroskop, Beschleunigungssensor, Drehung und Wasserwaage, damit Sie ein Browser-Berechtigungsproblem von einem echten Sensor- oder Kalibrierungsproblem unterscheiden können.',
    },
    {
      type: 'stats',
      items: [
        { label: 'Hauptsuchabsicht', value: 'Gyroskop online testen' },
        { label: 'Prüft auch', value: 'Beschleunigungssensor-Drift' },
        { label: 'Bestes Gerät', value: 'Handy oder Tablet' },
      ],
    },
    { type: 'title', text: 'Was Ihnen die einzelnen Sensorwerte sagen', level: 3 },
    {
      type: 'table',
      headers: ['Messwert', 'Nützlich für', 'Warnsignale'],
      rows: [
        ['Alpha', 'Prüfung der Drehung um die vertikale Achse, nützlich für kompassartige Bewegungen und Kursänderungen.', 'Ändert sich nicht beim flachen Drehen des Handys, springt in großen Schritten oder bleibt bei Null eingefroren.'],
        ['Beta', 'Prüfung der Vorwärts-Rückwärts-Neigung für Bildschirmdrehung, Spiele, Kamera-Nivellierung und AR-Steuerung.', 'Bewegt sich in die falsche Richtung, bleibt bei einem Wert hängen oder driftet ständig, während das Handy still liegt.'],
        ['Gamma', 'Prüfung der Links-Rechts-Rollbewegung für Querformat-Drehung, Rennspiele, Wasserwaagen-Apps und Stabilisatoren.', 'Eine Seite reagiert anders, die Werte sind verrauscht oder die Blase zentriert sich nie auf einem flachen Tisch.'],
        ['Beschleunigung X/Y/Z', 'Prüfung der Beschleunigungssensor-Reaktion, Schüttelerkennung, Schwerkraftrichtung und Bewegungsstabilität.', 'Große Spitzen im Stillstand, keine Reaktion auf Bewegung oder instabile Messwerte nach Entfernen der Hülle.'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Symptome, bei deren Diagnose dieser Test hilft',
      html: '<p>Nutzen Sie die Live-Werte, um folgende Probleme zu untersuchen: Nicht funktionierende automatische Drehung, ein verzögert wirkendes Gyroskop, Beschleunigungssensor-Drift, Kompass-Kalibrierungswarnungen, wegrutschendes AR-Tracking, Kamera-Wasserwaagenfehler, Bewegungssteuerungen, die zu einer Seite ziehen, oder ein Handy, das Bewegung nur in nativen Apps, aber nicht im Browser meldet.</p>',
    },
    { type: 'title', text: 'Gyroskop vs. Beschleunigungssensor vs. Kompass', level: 3 },
    {
      type: 'comparative',
      items: [
        { title: 'Gyroskop', description: 'Misst die Drehgeschwindigkeit. Wichtig für AR, Spiele, Kamerastabilisierung, Bewegungssteuerung und gleichmäßige Orientierungsänderungen.' },
        { title: 'Beschleunigungssensor', description: 'Misst Beschleunigung und Schwerkraftrichtung. Ermöglicht Neigung, Schüttelerkennung, Schrittzählung und das Verhalten der digitalen Wasserwaage.' },
        { title: 'Kompass / Magnetometer', description: 'Hilft bei der Schätzung des Kurses, kann aber durch Magnete, Metallgegenstände, Autohalterungen, Hüllen, Lautsprecher, Laptops und nahe Elektronik gestört werden.' },
      ],
    },
    { type: 'title', text: 'So testen Sie die Sensorkalibrierung richtig', level: 3 },
    {
      type: 'list',
      items: [
        'Entfernen Sie vor dem Test magnetische Hüllen, MagSafe-Geldbörsen, Metallhalterungen, Controller-Clips und Zubehör.',
        'Legen Sie das Handy auf einen stabilen, flachen Tisch und warten Sie mehrere Sekunden, bevor Sie die Drift beurteilen.',
        'Drehen Sie das Handy langsam durch jede Achse, anstatt es sofort zu schütteln.',
        'Vergleichen Sie Safari oder Chrome mit einer nativen Sensor- oder Kompass-App, wenn der Browser keine Daten anzeigt.',
        'Starten Sie das Gerät neu und wiederholen Sie den Test, wenn die Messwerte in mehreren Apps eingefroren sind.',
      ],
    },
    {
      type: 'tip',
      title: 'Hinweis zu iPhone- und Android-Berechtigungen',
      html: 'Auf iPhone und iPad kann Safari nach einer Berührung nach Bewegungs- und Orientierungserlaubnis fragen. Unter Android stellt Chrome Bewegungssensoren in der Regel direkter bereit, aber Datenschutzeinstellungen, Browser-Flags, Energiesparmodi und eingebettete Webviews können die Sensordaten immer noch blockieren oder reduzieren.',
    },
    {
      type: 'table',
      headers: ['Problem', 'Wahrscheinliche Ursache', 'Nächster Schritt'],
      rows: [
        ['Keine Werte ändern sich', 'Erlaubnis verweigert, nicht unterstützter Browser, Desktop-Gerät oder eingeschränkte Webview.', 'Auf dem Handy selbst öffnen, Safari oder Chrome verwenden, Bewegungszugriff erlauben und die Seite neu laden.'],
        ['Blase driftet auf einem Tisch', 'Kalibrierungsproblem, unebene Oberfläche, Hüllen-Interferenz oder Beschleunigungssensor-Rauschen.', 'Hülle entfernen, eine bekanntermaßen ebene Fläche verwenden, neu starten und mit einer nativen Wasserwaagen-App vergleichen.'],
        ['Kompassrichtung ist falsch', 'Magnetische Interferenz oder System-Kompasskalibrierung.', 'Von Metall/Elektronik entfernen und den Kompass-Kalibrierungsablauf des Betriebssystems verwenden.'],
        ['Werte springen oder zeigen Spitzen', 'Sensorrauschen, beschädigte Hardware, aggressives Browser-Drosseling oder plötzliche physische Bewegung.', 'Im Stillstand testen, rechenintensive Apps schließen und mit einem anderen Browser oder einer nativen App vergleichen.'],
      ],
    },
    {
      type: 'summary',
      title: 'Wofür dieser Test gut ist',
      items: [
        'Testen eines Handy-Gyroskops online, ohne eine App zu installieren.',
        'Überprüfen der Beschleunigungssensor-Drift mit einer Live-Wasserwaage.',
        'Herausfinden, ob Bewegungssteuerungen aufgrund von Hardware, Kalibrierung, Berechtigungen oder Browser-Unterstützung versagen.',
        'Vorbereiten eines Handys für AR, Spiele, Kamera-Nivellierung, Navigation oder Fehlerbehebung bei der Bildschirmdrehung.',
      ],
    },
  ],
  ui: {
    startButton: 'Kalibrierung starten',
    permissionHint: 'Einmal tippen, um Bewegungssensoren freizuschalten',
    privacyBadge: 'Lokale Sensordaten',
    privacyCopy: 'Orientierungs- und Bewegungswerte bleiben innerhalb dieser Browser-Sitzung.',
    orientationPanel: 'Orientierung',
    motionPanel: 'Bewegung',
    bubblePanel: 'Digitale Wasserwaage',
    statusReady: 'Bereit für Sensorerlaubnis',
    statusWaiting: 'Warte auf Browser-Erlaubnis',
    statusDenied: 'Sensorzugriff wurde verweigert oder ist nicht verfügbar',
    statusUnsupported: 'Bewegungssensoren werden von diesem Browser nicht bereitgestellt',
    statusActive: 'Live-Sensorstrom aktiv',
    steadyLabel: 'Ruhig',
    movingLabel: 'In Bewegung',
    shakingLabel: 'Schüttelnd',
    alphaLabel: 'Alpha',
    betaLabel: 'Beta',
    gammaLabel: 'Gamma',
    accelXLabel: 'X',
    accelYLabel: 'Y',
    accelZLabel: 'Z',
    rotationAlphaLabel: 'Rot A',
    rotationBetaLabel: 'Rot B',
    rotationGammaLabel: 'Rot G',
    levelOffsetLabel: 'Wasserwaagen-Abweichung',
    motionMagnitudeLabel: 'Bewegungsstärke',
    cubeLabel: '3D-Geräte-Orientierungswürfel',
    bubbleLabel: 'Wasserwaagen-Anzeige',
    calibrationLabel: 'Live-Grad',
  },
};
