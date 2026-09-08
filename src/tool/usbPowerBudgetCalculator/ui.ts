export interface UsbPowerBudgetCalculatorUI extends Record<string, string> {
  profileLabel: string;
  metricUnits: string;
  imperialUnits: string;
  voltageLabel: string;
  currentLabel: string;
  cableLengthLabel: string;
  wireGaugeLabel: string;
  deviceLoadLabel: string;
  devicesLabel: string;
  headroomLabel: string;
  sourcePower: string;
  requiredPower: string;
  cableDrop: string;
  deviceVoltage: string;
  headroom: string;
  utilization: string;
  safeStatus: string;
  safeAdvice: string;
  cableLane: string;
  boardEyebrow: string;
  sourceSocket: string;
  deviceSocket: string;
  energyFlow: string;
  reservedLabel: string;
}
