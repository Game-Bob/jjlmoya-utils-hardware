export interface BleServiceSummary {
  uuid: string;
  name: string;
}

export interface BleDeviceSummary {
  name: string;
  id: string;
  connected: boolean;
  services: BleServiceSummary[];
}

export interface BleDeviceSummaryInput {
  name: string;
  id: string;
  connected: boolean;
  serviceUuids: string[];
  labels: BleServiceLabels;
}

export interface BleServiceLabels {
  customServiceName: string;
  serviceGenericAccess: string;
  serviceGenericAttribute: string;
  serviceDeviceInformation: string;
  serviceHeartRate: string;
  serviceBattery: string;
  serviceHumanInterfaceDevice: string;
  serviceCyclingSpeedCadence: string;
  serviceEnvironmentalSensing: string;
  serviceUserData: string;
  serviceFitnessMachine: string;
}

export const optionalBleServices = [
  'generic_access',
  'generic_attribute',
  'device_information',
  'battery_service',
  'heart_rate',
  'human_interface_device',
  'cycling_speed_and_cadence',
  'environmental_sensing',
  'user_data',
  'fitness_machine',
];

export function normalizeBleUuid(uuid: string): string {
  return uuid.toLowerCase();
}

export function describeBleService(uuid: string, labels: BleServiceLabels): string {
  const knownServices: Record<string, string> = {
    '00001800-0000-1000-8000-00805f9b34fb': labels.serviceGenericAccess,
    '00001801-0000-1000-8000-00805f9b34fb': labels.serviceGenericAttribute,
    '0000180a-0000-1000-8000-00805f9b34fb': labels.serviceDeviceInformation,
    '0000180d-0000-1000-8000-00805f9b34fb': labels.serviceHeartRate,
    '0000180f-0000-1000-8000-00805f9b34fb': labels.serviceBattery,
    '00001812-0000-1000-8000-00805f9b34fb': labels.serviceHumanInterfaceDevice,
    '00001816-0000-1000-8000-00805f9b34fb': labels.serviceCyclingSpeedCadence,
    '0000181a-0000-1000-8000-00805f9b34fb': labels.serviceEnvironmentalSensing,
    '0000181c-0000-1000-8000-00805f9b34fb': labels.serviceUserData,
    '00001826-0000-1000-8000-00805f9b34fb': labels.serviceFitnessMachine,
  };

  return knownServices[normalizeBleUuid(uuid)] ?? labels.customServiceName;
}

export function summarizeBleDevice(input: BleDeviceSummaryInput): BleDeviceSummary {
  return {
    name: input.name,
    id: input.id,
    connected: input.connected,
    services: input.serviceUuids.map((uuid) => ({
      uuid,
      name: describeBleService(uuid, input.labels),
    })),
  };
}
