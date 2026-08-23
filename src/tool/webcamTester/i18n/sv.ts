import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebcamTesterUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'privat-webbkamera-test-online';
const title = 'Privat webbkameratest';
const description = 'Kontrollera kameratillåtelse, live-visning, upplösning, bildförhållande, orientering och bildhastighet före ditt möte.';

const faq = [
  {
    question: 'Spelar detta webbkameratest in eller laddar upp min video?',
    answer: 'Nej. Sidan begär endast en lokal bildström för förhandsgranskning och ber aldrig om mikrofontillgång. Inga inspelningar görs och inga data laddas upp.',
  },
  {
    question: 'Varför ber webbläsaren om kameratillåtelse?',
    answer: 'En webbplats kan inte öppna kameran utan tillåtelse. Meddelandet gör att du kan välja om denna sida får ta emot en tillfällig bildström.',
  },
  {
    question: 'Vad är skillnaden mellan konfigurerad och uppmätt FPS?',
    answer: 'Konfigurerad FPS är målet för granskningen. Uppmätt FPS uppskattar hur många bilder som faktiskt tas emot medan fliken är synlig.',
  },
  {
    question: 'Varför kan den tillgängliga upplösningen skilja sig från specifikationen?',
    answer: 'Operativsystemet, drivrutinen och webbläsaren väljer ett kompatibelt läge tillsammans. Andra aktiva appar kan begränsa den tillgängliga upplösningen.',
  },
];

const howTo = [
  {
    name: 'Öppna den privata förhandsgranskningen',
    text: 'Välj Öppna kamera och tillåt videotillgång i webbläsaren. Ljud begärs inte.',
  },
  {
    name: 'Granska inramning och bild',
    text: 'Kontrollera fokus, belysning, bakgrund och ögonposition i live-visningen.',
  },
  {
    name: 'Verifiera bildströmmen',
    text: 'Läs av upplösning, bildförhållande, orientering och bildhastighet.',
  },
  {
    name: 'Byt eller stoppa kameran',
    text: 'Välj en annan tillgänglig kamera för jämförelse eller klicka på Stoppa kamera för att stänga alla spår.',
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
  inLanguage: 'sv',
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
  faqTitle: 'Vanliga frågor om webbkameratestet',
  faq,
  bibliographyTitle: 'Källor och guider för kamerainställningar',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Testa din webbkamera före videomötet',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Använd denna lokala förhandsgranskning för att kontrollera viktiga punkter före ett möte: öppnas kameran, är rätt enhet vald, är ansiktet välbelyst och flyter videon jämnt?',
    },
    {
      type: 'list',
      items: [
        'Välj rätt kamera om flera enheter är anslutna',
        'Placera kameran i ögonhöjd och håll ansiktet i den övre tredjedelen',
        'Belys ansiktet framifrån istället för att sitta framför ett starkt fönster',
        'Stäng andra mötesappar om kameran verkar upptagen',
        'Kontrollera upplösning och bildhastighet direkt på skärmen',
      ],
    },
    {
      type: 'title',
      text: 'Lösningar för svart skärm eller ej tillgänglig kamera',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Symptom', 'Möjlig orsak', 'Rekommenderad åtgärd'],
      rows: [
        ['Tillåtelse nekad', 'Kameratillgång är blockerad i webbläsaren eller systemet', 'Tillåt kameratillgång i inställningarna och uppdatera sidan'],
        ['Svart skärm eller upptagen', 'En annan mötesapp använder kameran', 'Stäng Zoom, Teams eller Meet och försök igen'],
        ['Felaktig bild', 'En virtuell eller sekundär kamera valdes', 'Välj en annan källa i rullgardinsmenyn'],
        ['Mörk eller kornig bild', 'För lite ljus framifrån eller starkt motljus', 'Placera en lampa framför dig eller vänd dig mot ett fönster'],
        ['Hackig video', 'Svag belysning eller hög datorbelastning', 'Öka belysningen och stäng krävande program'],
      ],
    },
    {
      type: 'title',
      text: 'Förstå upplösning och bildhastighet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En upplösning på 1280 × 720 räcker gott för vanliga möten. 1920 × 1080 ger högre skärpa men kräver en stabil anslutning. Konfigurerad FPS anger målet, medan uppmätt FPS visar den faktiska bildhastigheten.',
    },
    {
      type: 'tip',
      title: 'Testa under realistiska förhållanden',
      html: 'Utför testet vid samma tidpunkt och med samma belysning som ditt möte. Eftersom mötesappar kan ändra bildkvaliteten rekommenderas även en slutkontroll i din vanliga app.',
    },
    {
      type: 'title',
      text: 'Optimal inramning och placering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Placera kameran nära ögonhöjd och lämna lite utrymme ovanför huvudet. Ha huvudbelysningen framifrån. Om du bär glasögon, vinkla lampan något åt sidan för att undvika reflektioner.',
    },
  ],
  ui: {
    privacyNote: 'Ingen inspelning · Ingen uppladdning · Inget ljud',
    permissionHeading: 'Redo att testa din kamera?',
    permissionBody: 'Öppna en privat live-visning för att kontrollera bilden och tillgängliga videoformat. Stoppa kameran stänger all tillgång direkt.',
    startAction: 'Öppna kamera',
    stopAction: 'Stoppa kamera',
    retryAction: 'Försök igen',
    deviceLabel: 'Kamerakälla',
    devicePlaceholder: 'Välj kamera',
    defaultDevice: 'Kamera',
    mirrorAction: 'Spegelläge',
    guideAction: 'Inramningsguide',
    stageLabel: 'Privat förhandsgranskningsområde för webbkamera',
    resolutionLabel: 'Upplösning',
    aspectLabel: 'Bildförhållande',
    orientationLabel: 'Orientering',
    configuredFpsLabel: 'Konfigurerad FPS',
    observedFpsLabel: 'Uppmätt FPS',
    frameDeliveryLabel: 'Bildleverans',
    landscapeValue: 'Liggande',
    portraitValue: 'Stående',
    squareValue: 'Kvadratisk',
    frameStable: 'Nära målet',
    frameReduced: 'Under målet',
    frameConstrained: 'Kraftigt reducerad',
    framePending: 'Väntar på bilder',
    statusIdle: 'Kameran är stängd. Öppna den när du är redo att granska.',
    statusStarting: 'Väntar på tillåtelse och första bildrutan',
    statusReady: 'Live-visning aktiv. Kontrollera fokus, ljus, inramning och flyt.',
    statusStopped: 'Kameran stoppad. Alla videospår är stängda.',
    statusHidden: 'Håll denna flik synlig för en noggrann FPS-mätning.',
    statusUnsupported: 'Denna webbläsare stöder inte kameratillgång.',
    errorPermissionDenied: 'Tillåtelse nekad. Ge tillgång i webbläsaren och försök igen.',
    errorNoCamera: 'Ingen kamera hittades. Anslut en enhet och försök igen.',
    errorInUse: 'Kameran kunde inte starta. Stäng andra appar och försök igen.',
    errorSecureContext: 'Kameratillgång kräver HTTPS eller localhost.',
    errorGeneric: 'Kan inte öppna kameran. Kontrollera tillåtelser och enhet.',
    limitHeading: 'Vad detta test bekräftar',
    limitBody: 'Det bekräftar bilden och bildhastigheten i denna flik. Kvaliteten på objektivet eller bearbetning i andra appar utvärderas inte.',
    localOnlyLabel: 'Privat kamerakontroll',
    emptyValue: 'Ej tillgänglig',
    fpsUnit: 'FPS',
  },
};
