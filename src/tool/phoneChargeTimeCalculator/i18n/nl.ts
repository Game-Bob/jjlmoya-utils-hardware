import type { ToolLocaleContent } from '../../../types';
import type { PhoneChargeTimeCalculatorUI } from '../ui';
import { createPhoneChargeTimeCalculatorContent } from './createContent';

const ui: PhoneChargeTimeCalculatorUI = {
  capacityLabel: 'Batterijcapaciteit', capacityUnit: 'mAh', capacityHint: 'Gebruik de waarde uit de telefoonspecificaties.',
  currentLabel: 'Huidig laadniveau', targetLabel: 'Doellaadniveau', percentUnit: '%', powerLabel: 'Ladervermogen', powerUnit: 'W',
  efficiencyLabel: 'Geschat rendement', efficiencyUnit: '%', efficiencyHint: 'Inclusief omzettings- en warmteverlies.',
  statusEmpty: 'Vul de gegevens van je telefoon en lader in.', statusReady: 'Wordt bijgewerkt terwijl je typt.', statusError: 'Controleer de gemarkeerde waarde.',
  resultTitle: 'Geschatte tijd tot het doel', energyLabel: 'Nog benodigde energie', energyUnit: 'Wh', fromCurrentCharge: 'vanaf het huidige laadniveau', startNowLabel: 'Start je nu, dan bereikt hij',
  scenarioTitle: 'Referentiescenario\'s voor laders', scenarioAt: 'zelfde telefoon en laadbereik', assumptionsTitle: 'Aannames',
  assumptionsText: 'Gebruikt een nominale batterijspanning van {voltage} V, {efficiency}% rendement en ongeveer {taper}% extra laadvertraging boven 70%. Je telefoon kan anders laden.',
  errorCapacity: 'Voer een batterijcapaciteit groter dan nul in.', errorCurrent: 'Het huidige laadniveau moet tussen 0 en 100% liggen.', errorTarget: 'Het doellaadniveau moet tussen 1 en 100% liggen.',
  errorTargetOrder: 'Het doellaadniveau moet hoger zijn dan het huidige laadniveau.', errorPower: 'Voer een vermogen groter dan nul in.', errorEfficiency: 'Het rendement moet tussen 50% en 100% liggen.',
  targetMarker: 'doel', chargeProgressLabel: 'Laadbereik', hourUnit: 'uur', minuteUnit: 'min',
};

const faq = [
  { question: 'Kan ik de laadtijd alleen met het batterijpercentage berekenen?', answer: 'Nee. Hetzelfde percentage staat voor een andere hoeveelheid energie bij een kleine of grote batterij. Daarom zijn ook de capaciteit, het vermogen dat de telefoon bereikt en een rendementschatting nodig.' },
  { question: 'Waarom duurt het soms langer dan de schatting?', answer: 'De telefoon kan het vermogen verlagen bij een hoge lading, warmte, een beperkende kabel of laadstandaard, of actief gebruik. De uitkomst is bedoeld om te plannen en is geen live meting.' },
  { question: 'Vul ik het vermogen van de lader of van de telefoon in?', answer: 'Gebruik het vermogen dat de telefoon waarschijnlijk ontvangt wanneer je dat weet. Ken je alleen het nominale ladervermogen, gebruik dat dan als bovengrens en reken op een langere werkelijke laadtijd.' },
];

const howTo = [
  { name: 'Voer de batterijcapaciteit in', text: 'Zoek de capaciteit in de specificaties van de telefoon en voer die in mAh in. Gebruik niet de capaciteit van een powerbank: spanning en omzettingsverlies beschrijven een ander laadpad.' },
  { name: 'Stel het laadbereik in', text: 'Voer het huidige en gewenste percentage in. Een korte bijlading van 20% naar 50% duurt anders dan volledig opladen.' },
  { name: 'Voeg vermogen en rendement toe', text: 'Voer het vermogen in watt in, of het werkelijke laadvermogen dat de telefoon accepteert als je dat kent. Gebruik de standaardwaarde voor rendement zonder eigen meting.' },
  { name: 'Vergelijk de scenario\'s', text: 'Vergelijk de uitkomst met de referenties van 5 W, 15 W en 30 W om te bepalen of je lader past bij de beschikbare tijd.' },
];

const seo = [
  { type: 'title' as const, text: 'Bereken de laadtijd van je telefoon', level: 2 as const },
  { type: 'paragraph' as const, html: 'Gebruik deze calculator voor de laadtijd van je telefoon wanneer je wilt weten of de batterij op tijd een bruikbaar niveau bereikt voordat je vertrekt, reist of lang moet bellen. Vul de capaciteit, het huidige percentage, het doelpercentage, het ladervermogen en het rendement in. De uitkomst schat de minuten en energie voor precies die bijlading, zodat je de beschikbare tijd kunt vergelijken met langzamere of snellere laders.' },
  { type: 'title' as const, text: 'Welke gegevens moet je invullen?', level: 2 as const },
  { type: 'list' as const, items: ['Capaciteit: gebruik de capaciteit van de telefoon in mAh, niet die van een powerbank.', 'Huidig en doelpercentage: beschrijf de bijlading die je echt nodig hebt; het doel moet hoger zijn dan het huidige niveau.', 'Vermogen en rendement: gebruik het vermogen dat de telefoon ontvangt als je dat kent. Anders is het ladervermogen alleen een bovengrens.'] },
  { type: 'title' as const, text: 'De uitkomst lezen', level: 2 as const },
  { type: 'paragraph' as const, html: 'Het hoofdgetal is de geschatte tijd van het huidige percentage naar het doel. De resterende energie geeft dezelfde bijlading weer in wattuur; de referentiebalken tonen wat er verandert bij 5 W, 15 W en 30 W. Is je beschikbare tijd korter, verlaag dan het doel of gebruik een lader en kabel die de telefoon echt met meer vermogen kan benutten.' },
  { type: 'title' as const, text: 'Waarom laden bij 100% langzamer gaat', level: 2 as const },
  { type: 'paragraph' as const, html: 'Een telefoon laadt meestal niet van leeg tot vol met constant vermogen. Naarmate de batterij voller raakt, kan de laadregeling de stroom verlagen om warmte en belasting te beheersen. Daarom is 20% naar 80% vaak een bruikbaardere planning dan een lineaire berekening tot 100%. Voor doelen boven 70% rekent deze tool een kleine extra vertraging mee.' },
  { type: 'title' as const, text: 'Schatting: wat de calculator niet kan detecteren', level: 2 as const },
  { type: 'list' as const, items: ['De tool kan het telefoonmodel, de batterijconditie, laadstandaard, kabel, temperatuur, gebruik of actuele laadvermogen niet uitlezen.', 'Hij stelt geen versleten batterij vast en bevestigt geen compatibiliteit met snelladen. Voor een precies antwoord meet je dezelfde configuratie in de situatie die je wilt plannen.'] },
];

export const content: ToolLocaleContent<PhoneChargeTimeCalculatorUI> = createPhoneChargeTimeCalculatorContent({ locale: 'nl', slug: 'telefoon-oplaadtijd-calculator', title: 'Calculator voor de laadtijd van je telefoon', description: 'Schat hoelang je telefoon nodig heeft om een doelpercentage te bereiken met de batterijcapaciteit, huidige lading, ladervermogen en efficiëntie.', faq, howTo, seo, ui });
