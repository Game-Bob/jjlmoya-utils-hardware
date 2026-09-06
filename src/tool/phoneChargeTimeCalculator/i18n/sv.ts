import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Batterikapacitet', capacityUnit: 'mAh', capacityHint: 'Använd värdet från telefonens specifikationer.',
  currentLabel: 'Aktuell laddning', targetLabel: 'Målladdning', percentUnit: '%', powerLabel: 'Laddarens effekt', powerUnit: 'W',
  efficiencyLabel: 'Uppskattad verkningsgrad', efficiencyUnit: '%', efficiencyHint: 'Inkluderar omvandlings- och värmeförluster.',
  statusEmpty: 'Ange uppgifter om telefonen och laddaren.', statusReady: 'Uppdateras medan du skriver.', statusError: 'Kontrollera det markerade värdet.',
  resultTitle: 'Beräknad tid till målet', energyLabel: 'Energi som återstår', energyUnit: 'Wh', fromCurrentCharge: 'från aktuell laddning', startNowLabel: 'Om du börjar nu når den',
  scenarioTitle: 'Referensscenarier för laddare', scenarioAt: 'samma telefon och samma laddningsintervall', assumptionsTitle: 'Antaganden',
  assumptionsText: 'Använder en nominell batterispänning på {voltage} V, {efficiency}% verkningsgrad och cirka {taper}% extra avmattning över 70%. Din telefon kan ladda annorlunda.',
  errorCapacity: 'Ange en batterikapacitet över noll.', errorCurrent: 'Den aktuella laddningen måste vara mellan 0 och 100%.', errorTarget: 'Målladdningen måste vara mellan 1 och 100%.',
  errorTargetOrder: 'Målladdningen måste vara högre än den aktuella laddningen.', errorPower: 'Ange en effekt över noll.', errorEfficiency: 'Verkningsgraden måste vara mellan 50% och 100%.',
  targetMarker: 'mål', chargeProgressLabel: 'Laddningsintervall', hourUnit: 'tim', minuteUnit: 'min',
};

const faq = [
  { question: 'Kan jag beräkna laddningstiden med bara batteriprocenten?', answer: 'Nej. Samma procent motsvarar olika mycket energi i ett litet och ett stort batteri. Kalkylatorn behöver även kapacitet, effekten som når telefonen och en uppskattning av verkningsgraden.' },
  { question: 'Varför tar telefonen ibland längre tid än beräknat?', answer: 'Telefonen kan sänka effekten vid hög laddningsnivå, värme, begränsningar i kabel eller laddprotokoll och när den används under laddning. Resultatet är en planeringsuppskattning, inte en mätning i realtid.' },
  { question: 'Ska jag ange laddarens effekt eller den effekt telefonen tar emot?', answer: 'Ange effekten som sannolikt når telefonen när du känner till den. Om du bara känner till laddarens märkning, använd den som en övre uppskattning och räkna med längre verklig tid.' },
];

const howTo = [
  { name: 'Ange batterikapaciteten', text: 'Läs av telefonens batterikapacitet i specifikationerna och ange den i mAh. Använd inte kapaciteten från en powerbank eftersom spänning och omvandlingsförluster beskriver en annan laddningsväg.' },
  { name: 'Ange laddningsintervallet', text: 'Skriv in aktuell och önskad batteriprocent. En laddning från 20% till 50% ger ett annat resultat än en full laddning.' },
  { name: 'Lägg till effekt och verkningsgrad', text: 'Ange effekten i watt eller den faktiska laddningseffekt telefonen tar emot när du känner till den. Behåll standardvärdet för verkningsgrad utan en egen mätning.' },
  { name: 'Jämför scenarierna', text: 'Jämför resultatet med referenserna 5 W, 15 W och 30 W för att avgöra om laddaren räcker under tiden du har.' },
];

const seo = [
  { type: 'title' as const, text: 'Beräkna hur lång tid telefonen behöver ladda', level: 2 as const },
  { type: 'paragraph' as const, html: 'Använd den här kalkylatorn för laddningstid när du vill veta om telefonen når en användbar nivå innan du går, reser eller börjar ett långt samtal. Ange batterikapacitet, aktuell procent, målprocent, laddarens effekt och verkningsgrad. Resultatet uppskattar minuterna och energin för just den laddningen, så att du kan jämföra med tiden du har och med långsammare eller snabbare laddare.' },
  { type: 'title' as const, text: 'Vilka uppgifter ska du ange?', level: 2 as const },
  { type: 'list' as const, items: ['Kapacitet: använd telefonens kapacitet i mAh, inte kapaciteten som står på en powerbank.', 'Aktuell och önskad nivå: beskriv laddningen du faktiskt behöver; målet måste vara högre än den aktuella nivån.', 'Effekt och verkningsgrad: använd effekten som når telefonen om du känner till den. Annars är laddarens effekt bara en övre gräns.'] },
  { type: 'title' as const, text: 'Så tolkar du resultatet', level: 2 as const },
  { type: 'paragraph' as const, html: 'Huvudvärdet är den uppskattade tiden från aktuell procent till målet. Energin som återstår visar samma laddning i wattimmar och referensstaplarna visar skillnaden mellan 5 W, 15 W och 30 W. Om tiden inte räcker kan du sänka målet eller använda laddare och kabel som telefonen faktiskt kan utnyttja med högre effekt.' },
  { type: 'title' as const, text: 'Varför laddningen går långsammare nära 100%', level: 2 as const },
  { type: 'paragraph' as const, html: 'En telefon laddar vanligtvis inte med konstant effekt från tom till full. När batteriet närmar sig en hög nivå kan laddningen minska strömmen för att hantera värme och belastning. Därför är 20% till 80% ofta mer användbart för planering än en linjär uppskattning till 100%. För mål över 70% lägger kalkylatorn till en liten marginal för avmattning.' },
  { type: 'title' as const, text: 'Uppskattning: vad kalkylatorn inte kan upptäcka', level: 2 as const },
  { type: 'list' as const, items: ['Den kan inte läsa telefonmodell, batterihälsa, laddprotokoll, kabel, temperatur, användning eller aktuell laddningseffekt.', 'Den diagnostiserar inte ett slitet batteri och bekräftar inte kompatibilitet med snabbladdning. För ett exakt svar kan du tidta samma utrustning i den situation du vill planera.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'sv', slug: 'kalkylator-laddningstid-mobil', title: 'Kalkylator för telefonens laddningstid', description: 'Uppskatta hur lång tid det tar att nå en viss batteriprocent utifrån kapacitet, aktuell laddning, laddareffekt och verkningsgrad.', faq, howTo, seo, ui });
