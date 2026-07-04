import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WebBluetoothBleScannerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'skanner-ble-web-bluetooth';
const title = 'Web Bluetooth BLE skanner';
const description = 'Skanna Bluetooth Low Energy enheter i närheten från webbläsaren, inspektera exponerade GATT tjänst UUIDer och testa om din IoT- eller wearable-hårdvara är upptäckbar.';

const faqData = [
  {
    question: 'Kan en webbplats skanna Bluetooth enheter utan tillstånd?',
    answer: 'Nej. Web Bluetooth kräver alltid en användargest och en webbläsartillståndsväljare. Detta verktyg ser bara den enhet du uttryckligen väljer och lagrar inte MAC adresser, enhets-ID eller skanningsresultat.',
  },
  {
    question: 'Varför visar inte skannern alla närliggande BLE enheter?',
    answer: 'Webbläsare exponerar avsiktligt Bluetooth genom en tillståndsväljare, inte som en tyst bakgrundsskanner. Vissa enheter slutar också annonsera, döljer sitt namn, kräver parkoppling eller exponerar tjänster endast efter en anslutning.',
  },
  {
    question: 'Vilka webbläsare stöder Web Bluetooth?',
    answer: 'Web Bluetooth stöds bäst i Chromium-baserade skrivbordswebbläsare som Chrome och Edge. Det kräver vanligtvis HTTPS eller localhost och är inte tillgängligt i många Firefox-, Safari- och iOS-webbläsarkonfigurationer.',
  },
  {
    question: 'Kan detta läsa privata sensordata från en wearable?',
    answer: 'Endast om enheten exponerar kompatibla GATT tjänster och webbläsaren beviljar åtkomst. Många kommersiella wearables kräver leverantörsappar, kryptering, bindning eller proprietära egenskaper som en generisk webbläsarskanner inte kan avkoda.',
  },
  {
    question: 'Vad är GATT tjänst UUIDer?',
    answer: 'En GATT tjänst UUID identifierar en grupp Bluetooth Low Energy funktioner, såsom Batteritjänst, Puls, Enhetsinformation eller en anpassad leverantörstjänst som används av maker- och IoT-hårdvara.',
  },
];

const howToData = [
  {
    name: 'Använd en kompatibel webbläsare',
    text: 'Öppna verktyget i Chrome eller Edge via HTTPS eller localhost och se sedan till att Bluetooth är aktiverat på datorn eller telefonen.',
  },
  {
    name: 'Sätt hårdvaran i annonseringsläge',
    text: 'Väck BLE enheten, strömcykla den, tryck på dess parkopplingsknapp eller öppna dess annonseringsläge så att den visas i webbläsarens tillståndsväljare.',
  },
  {
    name: 'Skanna omgivningen',
    text: 'Tryck på Skanna omgivning och välj den BLE enhet du vill inspektera. Webbläsarens tillståndsdialog styr exakt vilken enhet som blir synlig för sidan.',
  },
  {
    name: 'Läs GATT tjänsterna',
    text: 'Efter anslutning, granska tjänst UUID korten för att identifiera standard Bluetooth profiler, anpassade firmwaretjänster och om enheten exponerar den dataväg du förväntade dig.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<WebBluetoothBleScannerUI> = {
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
      text: 'BLE testare online för IoT, Wearables och Maker Hårdvara',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Denna Web Bluetooth skanner låter dig testa om en närliggande Bluetooth Low Energy enhet är upptäckbar från en webbläsare och vilka GATT tjänster den exponerar efter att tillstånd har beviljats. Den är användbar vid felsökning av ESP32 firmware, Arduino BLE sketcher, smarta sensorer, fitnesswearables, tangentbord, anpassade beacons, miljömonitorer och prototyphårdvara innan du bygger en native mobilapp.',
    },
    {
      type: 'message',
      title: 'Integritetsmodell',
      html: 'GameBob lagrar inte MAC adresser, enhets-ID, namn, UUIDer, signaldata eller skanningshistorik. Webbläsarens tillståndsväljare bestämmer vilken enskild enhet sidan kan komma åt, och resultaten stannar i din nuvarande webbläsarsession.',
    },
    {
      type: 'table',
      headers: ['Vad du ser', 'Vad det betyder', 'Vad du ska kontrollera härnäst'],
      rows: [
        ['Enhetsnamn', 'Det annonserade Bluetooth namnet, om hårdvaran sänder ett.', 'Om det är tomt, kontrollera firmwarens annonseringsdata eller använd ett känt namnprefix under testning.'],
        ['Enhets-ID', 'En webbläsaromfattad identifierare, inte den faktiska offentliga MAC adressen.', 'Använd det endast för denna webbläsarsession; behandla det inte som ett universellt hårdvaruserienummer.'],
        ['GATT tjänst UUIDer', 'Tjänstgrupperna som exponeras efter att anslutningen har accepterats.', 'Jämför standard UUIDer med Bluetooth SIG listan eller din firmware tjänsttabell.'],
        ['Anpassad tjänst', 'En leverantörsspecifik eller projektspecifik UUID.', 'Öppna din firmware, mobilappsprofil eller BLE dokumentation för att mappa egenskaper och behörigheter.'],
      ],
    },
    {
      type: 'title',
      text: 'Varför Webbläsarbaserad Bluetooth Skanning är Annorlunda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inbyggda BLE skannerappar visar ofta kontinuerliga annonser från många närliggande enheter. Web Bluetooth är avsiktligt strängare: sidan måste öppnas i ett säkert sammanhang, skanningen måste starta från ett användarklick och webbläsaren visar en tillståndsväljare. Detta skyddar användare från tyst spårning samtidigt som utvecklare får ett praktiskt sätt att ansluta till vald BLE hårdvara från JavaScript.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Web Bluetooth skanner',
          description: 'Bäst för snabb firmwarevalidering, demos, supportflöden, klassrumslabb och webbläsarbaserad diagnostik där installationsfriktion spelar roll.',
        },
        {
          title: 'Inbyggd BLE app',
          description: 'Bättre för bakgrundsskanning, RSSI loggning, parkopplingsflöden, krypterade leverantörsprotokoll, stora egenskapsträd och långsiktig fältdiagnostik.',
        },
      ],
    },
    {
      type: 'title',
      text: 'Vanliga Anledningar till att en BLE Enhet inte Visas',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Bluetooth är avaktiverat på operativsystemsnivå eller webbläsaren saknar Bluetooth tillstånd.',
        'Enheten är ansluten till en annan telefon, laptop, leverantörsapp eller gateway och har slutat annonsera.',
        'Hårdvaran annonserar endast under en kort period efter uppstart eller efter att ha tryckt på en parkopplingsknapp.',
        'Webbläsaren är inte Chromium-baserad, sidan serveras inte via HTTPS eller plattformen blockerar Web Bluetooth.',
        'Firmwaren annonserar tillverkardata men döljer det lokala namnet, så väljaren kan visa en namnlös enhet.',
        'Enheten kräver bindning, kryptering eller proprietär autentisering innan tjänster blir läsbara.',
      ],
    },
    {
      type: 'title',
      text: 'Hur man Använder GATT UUIDer vid Felsökning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En framgångsrik anslutning med tjänst UUIDer talar om att webbläsaren kan nå kringutrustningen och att kringutrustningen exponerar åtminstone en del av sin GATT tabell. Standardtjänster som Batteritjänst, Enhetsinformation, Puls, Mänskligt Gränssnitt och Miljöavkänning är lätta att känna igen. Anpassade UUIDer pekar vanligtvis på firmwarespecifika funktioner och behöver egenskapskartan från din källkod eller leverantörsdokumentation.',
    },
    {
      type: 'table',
      headers: ['Symptom', 'Trolig orsak', 'Praktisk lösning'],
      rows: [
        ['Tillståndsväljaren är tom', 'Enheten annonserar inte eller webbläsarstöd saknas.', 'Starta om enheten, aktivera parkopplingsläge, gå närmare eller försök igen i Chrome/Edge.'],
        ['Anslutningen misslyckas omedelbart', 'Enheten är upptagen, utom räckhåll eller avvisar webbläsarens anslutning.', 'Koppla från leverantörsappar och håll kringutrustningen nära datorn.'],
        ['Inga tjänster listas', 'GATT är inte tillgängligt, tjänster är dolda eller åtkomst beviljades inte för dessa UUIDer.', 'Lägg till kända valfria tjänster i firmwaretester eller inspektera med ett inbyggt BLE verktyg.'],
        ['Endast anpassade UUIDer visas', 'Hårdvaran använder leverantörsspecifika firmwarertjänster.', 'Mappa UUIDer till källkods konstanter och dokumentera läs-/skrivbehörigheter för egenskaper.'],
      ],
    },
    {
      type: 'title',
      text: 'Säkerhets- och Integritetsgränser',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sidan kan inte tyst samla in närliggande Bluetooth enheter i bakgrunden.',
        'Webbläsaren kan dölja verkliga MAC adresser och istället tillhandahålla ett omfattat enhets-ID.',
        'Åtkomst börjar först efter att användaren klickar på skanningsknappen och väljer en enhet.',
        'Resultaten laddas inte upp eller lagras av GameBob.',
        'Känsliga kommersiella enheter kan kräva kryptering eller ett leverantörsparkopplingsflöde som denna generiska skanner inte kan kringgå.',
      ],
    },
  ],
  ui: {
    unsupportedTitle: 'Web Bluetooth är inte tillgängligt',
    unsupportedBody: 'Prova Chrome eller Edge på skrivbord eller Android, aktivera Bluetooth och öppna sidan via HTTPS eller localhost.',
    secureContext: 'Web Bluetooth kräver en säker HTTPS sida eller localhost. Ladda om verktyget från ett säkert ursprung och försök igen.',
    scanButton: 'Skanna omgivning',
    scanning: 'Skannar',
    reconnect: 'Skanna igen',
    disconnect: 'Koppla från',
    privacyTitle: 'Integritet genom design',
    privacyBody: 'GameBob lagrar inte MAC adresser, enhets-ID, namn, UUIDer eller skanningshistorik. Webbläsaren exponerar bara den enhet du väljer.',
    deviceLabel: 'Vald enhet',
    nameFallback: 'Namnlös BLE enhet',
    idLabel: 'Webbläsarens enhets-ID',
    servicesLabel: 'GATT tjänster',
    noServices: 'Inga läsbara primära tjänster returnerades för denna anslutning.',
    statusIdle: 'Redo att skanna närliggande BLE hårdvara',
    statusPermission: 'Väntar på webbläsarens tillståndsväljare',
    statusConnecting: 'Ansluter till den valda BLE enheten',
    statusConnected: 'Ansluten och tjänster laddade',
    statusDisconnected: 'Enhet frånkopplad',
    statusCancelled: 'Ingen BLE enhet valdes eller Bluetooth är avstängt/inte tillgängligt på denna enhet.',
    statusUnavailable: 'Bluetooth verkar vara avstängt, blockerat eller saknas på denna enhet. Aktivera Bluetooth eller försök från hårdvara som har en BLE adapter.',
    statusError: 'Bluetooth skanning misslyckades',
    signalUnknown: 'Signalstyrkan kontrolleras av webbläsarens väljare',
    gattUnavailable: 'Denna enhet exponerade inte en GATT server för webbläsaren',
    customServiceName: 'Anpassad eller leverantörsspecifik tjänst',
    serviceGenericAccess: 'Generisk Åtkomst',
    serviceGenericAttribute: 'Generiskt Attribut',
    serviceDeviceInformation: 'Enhetsinformation',
    serviceHeartRate: 'Puls',
    serviceBattery: 'Batteritjänst',
    serviceHumanInterfaceDevice: 'Mänskligt Gränssnitt',
    serviceCyclingSpeedCadence: 'Cykelhastighet och Kadens',
    serviceEnvironmentalSensing: 'Miljöavkänning',
    serviceUserData: 'Användardata',
    serviceFitnessMachine: 'Träningsmaskin',
    uuidHelp: 'UUIDer identifierar Bluetooth tjänster. Standardtjänster namnges automatiskt; leverantörsspecifika UUIDer behöver din firmware- eller enhetsdokumentation.',
    compatibilityHint: 'Fungerar bäst i Chromium-baserade webbläsare med Bluetooth aktiverat. Web Bluetooth är avsiktligt tillståndsbegränsat och visar kanske inte alla närliggande annonsörer.',
    serviceCountSingular: 'tjänst',
    serviceCountPlural: 'tjänster',
  },
};
