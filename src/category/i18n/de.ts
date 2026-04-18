import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'hardware-werkzeuge',
  title: 'Hardware-Test & Diagnosewerkzeuge',
  description: 'Überprüfe den Zustand deiner Peripheriegeräte und Anzeigen mit kostenlosen Online-Tools. Teste tote Pixel, Tastatur-Ghosting, Gamepad-Drift und Akkuzustand.',
  seo: [
    {
      type: 'title',
      text: 'Diagnose von Peripheriegeräten und Displays: Präzision ohne Software',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Wartung von Hardware erfordert keine schweren Diagnoseanwendungen mehr. In diesem Abschnitt bieten wir eine Sammlung von <strong>kostenlosen Online-Tools</strong>, die deine Komponenten mithilfe nativer Web-APIs testen. Vom Erkennen von LED-Panel-Erschöpfung bis zur Messung von Polling-Raten von Gaming-Peripheriegeräten wenden wir standardisierte Testprotokolle an, damit du den tatsächlichen Zustand deiner Ausrüstung kennst.',
    },
    {
      type: 'paragraph',
      html: 'Unsere Tools sind ideal für Nutzer, die gerade ein Produkt gekauft haben und dessen Integrität überprüfen möchten, oder für Gamer, die ihr Wettkampf-Setup optimieren wollen, indem sie Latenz- oder Genauigkeitsfehler aufdecken.',
    },
    {
      type: 'title',
      text: 'Visuelle Gesundheit: Tote Pixel testen und reparieren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Monitor mit defekten Pixeln kann deine Benutzererfahrung ruinieren. Unser <strong>Pixel-Test</strong> zeigt im Vollbild reine Farben an, um tote Pixel (schwarz) oder hängende Pixel (in einer Farbe eingefroren) zu erkennen. Außerdem haben wir einen Stroboskop-Optimierer, der entwickelt wurde, um Subpixel durch schnelle chromatische Frequenzwechsel zu lösen.',
    },
    {
      type: 'title',
      text: 'Eingabegeräte: Tastatur (Ghosting) und Maus (Hz)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Für Vielschreiber und FPS-Gamer sind Tastatur und Maus entscheidend. Der <strong>Ghosting-Test</strong> prüft, wie viele Tasten deine Tastatur gleichzeitig registrieren kann (Rollover), während unser <strong>Polling-Rate</strong>-Tool die Hertz (Hz) deiner Maus in Echtzeit misst und eine stabile Hochgeschwindigkeitsverbindung zu deinem PC sicherstellt.',
    },
    {
      type: 'title',
      text: 'Gaming und Konsolen: Joy-Con Drift und Trigger-Tests',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Joystick-Verschleiß (bekannt als Drift) ist der häufigste Defekt bei modernen PS5-, Xbox- und Switch-Controllern. Unser <strong>Controller-Simulator</strong> analysiert X/Y-Achsen mit Gleitkomma-Präzision und ermöglicht es dir, jede unerwünschte Bewegung oder fehlende Deadzone an deinen Sticks zu visualisieren. Außerdem kannst du die haptische Rückmeldung und Dual-Rumble-Motorvibration über den Browser testen.',
    },
    {
      type: 'title',
      text: 'Strom und Audio: Akkuzustand und reine Töne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lithiumbatterien verschlechtern sich mit jedem Ladezyklus. Unser <strong>Akku-Gesundheitsschätzer</strong> analysiert aktuelle Zyklen und Restkapazität, um vorherzusagen, wie viel Nutzungsdauer in deinem Laptop oder Mobilgerät noch verbleibt. Auf der anderen Seite ermöglicht unser <strong>Tongenerator</strong> die Überprüfung von Lautsprechern und Kopfhörern durch Frequenzdurchläufe von 20 Hz bis 20 kHz, um Verzerrungen oder Hörverlust in hohen Bereichen zu erkennen.',
    },
    {
      type: 'title',
      text: 'Chromatische Kalibrierung und Farbraum: Professionelle visuelle Präzision',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Monitore verschlechtern sich. Die werksseitige Farbtemperatur (Kelvin), typischerweise 6500K = D65-Tageslicht, verändert sich mit der Zeit. Für Grafikdesigner, Fotografen und Editoren ist dies katastrophal: Man bearbeitet Farben auf einem falsch kalibrierten Monitor, die Arbeit sieht auf anderen Displays anders aus, und der Kunde lehnt sie ab. Tiefe Kalibrierung erfordert Hardware (Kolorimeter für 300–1000 €), aber unser <strong>Farbraum-Test</strong> ermöglicht es dir zumindest zu prüfen, ob dein Monitor einen konsistenten Gammabereich (typischerweise 2,2) beibehält.',
    },
    {
      type: 'paragraph',
      html: 'Das Verständnis von sRGB vs. Adobe RGB vs. P3 ist ebenfalls entscheidend. sRGB ist der Webstandard (ausreichend für 99 % der Anwendungen), aber Adobe RGB deckt 40 % mehr Farben ab (notwendig für Profis). Ein Monitor mit nur 70 % sRGB-Abdeckung liefert unzureichende Farbsättigung. Unsere Tools ermöglichen die Prüfung ohne Investition in professionelle Ausrüstung für 1000 €.',
    },
    {
      type: 'title',
      text: 'Hardware-Leistung: Benchmarking und Engpasserkennung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gamer sprechen von „Bottleneck", wenn GPU und CPU unausgeglichen sind. Eine leistungsstarke GPU, die von einer schwachen CPU gespeist wird, erreicht nie ihr Potenzial. Das Konzept ist einfach: Wenn die GPU darauf wartet, dass die CPU fertig wird, ist das Verschwendung. Testwerkzeuge helfen zu diagnostizieren: Liegt mein Problem an der GPU oder CPU? Brauche ich ein Upgrade? Oder reicht es, die Videoeinstellungen zu reduzieren?',
    },
    {
      type: 'paragraph',
      html: 'Latenz-Tests sind auch für kompetitives Gaming entscheidend. Die Eingabe-zu-Display-Latenz (vom Drücken einer Taste bis zum Erscheinen auf dem Bildschirm) kann bei einem guten Setup 20–50 ms betragen, aber bei einem langsamen 200+ ms. In Wettkampfspielen (FPS, Kampfspiele) ist 50 ms der Unterschied zwischen Sieg und Niederlage. Deshalb investieren Profi-Gamer in 240-Hz-Monitore, 8000-Hz-Mäuse und optimierte PCs.',
    },
    {
      type: 'title',
      text: 'Lebenszyklus und Reparierbarkeit: Digitale Rechte',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '„Reparierbarkeit" ist im Jahr 2026 immer wichtiger. Ein „reparierbares" Telefon hält 6 Jahre; ein „versiegeltes" läuft in 2–3 Jahren ab. Ein Laptop mit aufrüstbarem RAM ist eine Investition; einer mit verlötetem RAM ist wegwerfbar. Die von uns implementierten Diagnosewerkzeuge stehen im Einklang mit der Recht-auf-Reparatur-Bewegung: Wir möchten, dass du genau weißt, was kaputt ist, bevor du deine Geräte wegwirfst.',
    },
    {
      type: 'paragraph',
      html: 'Die Dokumentation des Fehlers mit unseren Tools (Screenshot des fehlgeschlagenen Pixel-Tests, Video des driftenden Controllers) ist ein Beweis für Garantieansprüche. Viele Nutzer verlieren Geld, weil sie nicht dokumentieren, nicht diagnostizieren, einfach aufgeben und Neues kaufen. Unsere Werkzeuge demokratisieren technische Informationen: Jetzt kannst du mit Beweisen argumentieren.',
    },
    {
      type: 'title',
      text: 'Die Zukunft der Wearable-Hardware 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Jahr 2026 ist die Grenze zwischen Betriebssystem und Browser verschwommen. Dank Standards wie <strong>Web Serial und WebUSB</strong> können wir Diagnosen durchführen, die früher spezifische Treiber erforderten. Diese Tools sind Teil einer Bewegung hin zum Recht auf Reparatur und zur technischen Souveränität der Nutzer über ihre eigenen Geräte.',
    },
  ],
};
