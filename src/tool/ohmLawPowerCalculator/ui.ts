export interface OhmLawPowerCalculatorUI extends Record<string, string> {
  instructions: string;
  knownLabel: string;
  useAsKnownLabel: string;
  voltageLabel: string;
  currentLabel: string;
  resistanceLabel: string;
  powerLabel: string;
  voltageUnit: string;
  currentUnit: string;
  resistanceUnit: string;
  powerUnit: string;
  resultTitle: string;
  resultHint: string;
  formulaTitle: string;
  formulaHint: string;
  statusEmpty: string;
  statusInvalid: string;
  statusReady: string;
  presetTitle: string;
  presetLed: string;
  presetUsb: string;
  presetAmplifier: string;
  resetLabel: string;
  orbitCaption: string;
  solvedBadge: string;
}
