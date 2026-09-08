import { describe, expect, it } from 'vitest';
import * as backlightLogic from '../tool/backlightBleedBloomingTest/logic';
import * as colorAccuracyLogic from '../tool/colorAccuracyTest/logic';
import {
  classifyKeyDelta,
  formatDelta,
} from '../tool/keyboardChatterTest/logic';
import { assessMobileSensors } from '../tool/mobileSensorTest/logic';
import * as monitorGhostingLogic from '../tool/monitorGhostingTest/logic';
import * as mouseDoubleClickLogic from '../tool/mouseDoubleClickTest/logic';
import * as mouseDpiLogic from '../tool/mouseDpiAnalyzer/logic';
import * as mouseJitterLogic from '../tool/mouseJitterAngleSnappingTest/logic';
import * as mouseScrollLogic from '../tool/mouseScrollTest/logic';
import * as oledLogic from '../tool/oledScreenBurnInFixer/logic';
import {
  clampOutputLevel,
  formatPhaseLabel,
  getChannelGain,
} from '../tool/speakerPhaseTester/logic';
import {
  getStereoBalance,
  stereoPanPoints,
} from '../tool/stereoAudioTest/logic';
import {
  formatFrequency,
  getExponentialSweepFrequency,
} from '../tool/subwooferCrossoverTest/logic';
import {
  calculateCoveragePercent,
  summarizeTouchMetrics,
} from '../tool/touchScreenTester/logic';
import { calculateUpsRuntime } from '../tool/upsRuntimeCalculator/logic';
import {
  calculateUsbPowerBudget,
  usbPowerProfiles,
} from '../tool/usbPowerBudgetCalculator/logic';
import {
  describeBleService,
  normalizeBleUuid,
  summarizeBleDevice,
} from '../tool/webBluetoothBleScanner/logic';
import {
  buildMidiKeyboard,
  midiNoteName,
  normalizePitchBend,
  rangeFromSeenNotes,
} from '../tool/webMidiKeyboardTester/logic';
import {
  buildSerialPortLabel,
  decodeSerialChunk,
  encodeSerialLine,
  formatUsbId,
} from '../tool/webUsbSerialMonitor/logic';

describe('Logic modules expose reference behavior', () => {
  it('classifies keyboard chatter boundaries and formatting', () => {
    expect(classifyKeyDelta(29)).toBe('chatter');
    expect(classifyKeyDelta(50)).toBe('suspect');
    expect(classifyKeyDelta(51)).toBe('normal');
    expect(formatDelta(null)).toBe('--');
  });

  it('assesses mobile sensor stability', () => {
    const steady = assessMobileSensors({
      alpha: 0,
      beta: 0,
      gamma: 0,
      accelerationX: 0,
      accelerationY: 0,
      accelerationZ: 0,
      rotationAlpha: 0,
      rotationBeta: 0,
      rotationGamma: 0,
    });
    expect(steady.stability).toBe('steady');
  });

  it('keeps phase, stereo, sweep, and touch outputs bounded', () => {
    expect(getChannelGain('inverted')).toEqual({ left: 1, right: -1 });
    expect(clampOutputLevel(2)).toBe(0.7);
    expect(formatPhaseLabel('normal')).toContain('normal');
    expect(getStereoBalance(0, 0)).toBe(0);
    expect(stereoPanPoints).toHaveLength(4);
    expect(getExponentialSweepFrequency(0, 4).frequencyHz).toBe(200);
    expect(formatFrequency(200)).toBe('200 Hz');
    expect(calculateCoveragePercent(3, 4)).toBe(75);
    expect(summarizeTouchMetrics(4, 2, 3, 4).peakTouches).toBe(4);
  });

  it('calculates UPS and USB safety margins', () => {
    const ups = calculateUpsRuntime({
      loadItems: [{ name: 'laptop', watts: 100 }],
      batteryWh: 240,
      inverterEfficiency: 0.9,
      powerFactor: 0.8,
      reservePercent: 10,
    });
    expect(ups.totalWatts).toBe(100);
    expect(ups.runtimeMinutes).toBeGreaterThan(0);
    const usb = calculateUsbPowerBudget({
      sourceVoltage: 5,
      sourceCurrent: 3,
      cableLengthMeters: 1,
      wireGaugeAwg: 24,
      deviceLoadWatts: 8,
      devices: 1,
      headroomPercent: 20,
    });
    expect(usb.sourceWatts).toBe(15);
    expect(usbPowerProfiles.usb2.voltage).toBe(5);
  });

  it('normalizes BLE, MIDI, and serial transport data', () => {
    const labels = {
      customServiceName: 'Custom service',
      serviceGenericAccess: 'Generic access',
      serviceGenericAttribute: 'Generic attribute',
      serviceDeviceInformation: 'Device information',
      serviceHeartRate: 'Heart rate',
      serviceBattery: 'Battery',
      serviceHumanInterfaceDevice: 'Human interface device',
      serviceCyclingSpeedCadence: 'Cycling speed and cadence',
      serviceEnvironmentalSensing: 'Environmental sensing',
      serviceUserData: 'User data',
      serviceFitnessMachine: 'Fitness machine',
    };
    expect(normalizeBleUuid('180D')).toBe('180d');
    expect(describeBleService('0000180d-0000-1000-8000-00805f9b34fb', labels)).toBe('Heart rate');
    expect(summarizeBleDevice({ name: 'Sensor', id: 'abc', connected: true, serviceUuids: [], labels }).name).toBe('Sensor');
    expect(midiNoteName(60)).toBe('C4');
    expect(normalizePitchBend(0, 64)).toBe(0);
    expect(buildMidiKeyboard({ min: 60, max: 62 })).toHaveLength(3);
    expect(rangeFromSeenNotes([60, 72])).toEqual({ min: 60, max: 83 });
    expect(formatUsbId(0x1234)).toBe('0x1234');
    expect(buildSerialPortLabel({ info: { usbVendorId: 0x1234, usbProductId: 0x5678 }, fallback: 'Unknown' })).toContain('0x1234');
    expect(encodeSerialLine({ text: 'hello', appendNewline: true })).toBe('hello\r\n');
    expect(decodeSerialChunk(new TextEncoder().encode('hello'))).toBe('hello');
  });

  it('loads the remaining stateful logic modules', () => {
    expect(backlightLogic).toBeDefined();
    expect(colorAccuracyLogic).toBeDefined();
    expect(monitorGhostingLogic).toBeDefined();
    expect(mouseDoubleClickLogic).toBeDefined();
    expect(mouseDpiLogic).toBeDefined();
    expect(mouseJitterLogic).toBeDefined();
    expect(mouseScrollLogic).toBeDefined();
    expect(oledLogic).toBeDefined();
  });
});
