export type UsbPowerProfile = 'usb2' | 'usb3' | 'bc12' | 'usbC15' | 'usbC27' | 'pd45' | 'pd65' | 'pd100';

export interface UsbPowerInput {
  sourceVoltage: number;
  sourceCurrent: number;
  cableLengthMeters: number;
  wireGaugeAwg: number;
  deviceLoadWatts: number;
  devices: number;
  headroomPercent: number;
}

export interface UsbPowerResult {
  sourceWatts: number;
  requiredWatts: number;
  availableWatts: number;
  headroomWatts: number;
  cableDropVolts: number;
  deviceEndVoltage: number;
  utilizationPercent: number;
  status: 'safe' | 'tight' | 'over';
}

export const usbPowerProfiles: Record<UsbPowerProfile, { label: string; voltage: number; current: number }> = {
  usb2: { label: 'USB 2.0 500 mA', voltage: 5, current: 0.5 },
  usb3: { label: 'USB 3.x 900 mA', voltage: 5, current: 0.9 },
  bc12: { label: 'BC 1.2 1.5 A', voltage: 5, current: 1.5 },
  usbC15: { label: 'USB-C 15 W', voltage: 5, current: 3 },
  usbC27: { label: 'USB-C 27 W', voltage: 9, current: 3 },
  pd45: { label: 'USB PD 45 W', voltage: 15, current: 3 },
  pd65: { label: 'USB PD 65 W', voltage: 20, current: 3.25 },
  pd100: { label: 'USB PD 100 W', voltage: 20, current: 5 },
};

const copperOhmsPerMeterByAwg: Record<number, number> = {
  20: 0.0333,
  22: 0.053,
  24: 0.0842,
  26: 0.134,
  28: 0.213,
  30: 0.339,
};

export function metersToFeet(meters: number): number {
  return meters * 3.28084;
}

export function feetToMeters(feet: number): number {
  return feet / 3.28084;
}

export function calculateUsbPowerBudget(input: UsbPowerInput): UsbPowerResult {
  const sourceWatts = input.sourceVoltage * input.sourceCurrent;
  const requiredWatts = input.deviceLoadWatts * input.devices;
  const availableWatts = sourceWatts * (1 - input.headroomPercent / 100);
  const headroomWatts = availableWatts - requiredWatts;
  const loadCurrent = input.sourceVoltage > 0 ? requiredWatts / input.sourceVoltage : 0;
  const conductorOhms = copperOhmsPerMeterByAwg[input.wireGaugeAwg] ?? copperOhmsPerMeterByAwg[28];
  const roundTripOhms = conductorOhms * input.cableLengthMeters * 2;
  const cableDropVolts = loadCurrent * roundTripOhms;
  const deviceEndVoltage = Math.max(0, input.sourceVoltage - cableDropVolts);
  const utilizationPercent = sourceWatts > 0 ? (requiredWatts / sourceWatts) * 100 : 0;
  let status: UsbPowerResult['status'] = 'safe';

  if (requiredWatts > availableWatts || deviceEndVoltage < input.sourceVoltage * 0.9) {
    status = 'over';
  } else if (requiredWatts > availableWatts * 0.85 || deviceEndVoltage < input.sourceVoltage * 0.94) {
    status = 'tight';
  }

  return {
    sourceWatts,
    requiredWatts,
    availableWatts,
    headroomWatts,
    cableDropVolts,
    deviceEndVoltage,
    utilizationPercent,
    status,
  };
}
