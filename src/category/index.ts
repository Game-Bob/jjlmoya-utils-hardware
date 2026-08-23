import type { HardwareCategoryEntry } from '../types';
import { pixelesPantalla } from '../tool/deadPixelTest/entry';
import { testTeclado } from '../tool/keyboardTest/entry';
import { testMando } from '../tool/gamepadTest/entry';
import { gamepadPollingRateChecker } from '../tool/gamepadPollingRateChecker/entry';
import { probadorVibracionMando } from '../tool/gamepadVibrationTester/entry';
import { testRaton } from '../tool/mousePollingTest/entry';
import { mouseDoubleClickTest } from '../tool/mouseDoubleClickTest/entry';
import { mouseScrollTest } from '../tool/mouseScrollTest/entry';
import { mouseDpiAnalyzer } from '../tool/mouseDpiAnalyzer/entry';
import { estimadorSaludBateria } from '../tool/batteryHealthEstimator/entry';
import { toneGenerator } from '../tool/toneGenerator/entry';
import { waterEjector } from '../tool/waterEjector/entry';
import { subwooferCrossoverTest } from '../tool/subwooferCrossoverTest/entry';
import { speakerPhaseTester } from '../tool/speakerPhaseTester/entry';
import { refreshRateDetector } from '../tool/refreshRateDetector/entry';
import { monitorGhostingTest } from '../tool/monitorGhostingTest/entry';
import { backlightBleedBloomingTest } from '../tool/backlightBleedBloomingTest/entry';
import { oledScreenBurnInFixer } from '../tool/oledScreenBurnInFixer/entry';
import { spectrumCanvas } from '../tool/colorAccuracyTest/entry';
import { upsRuntimeCalculator } from '../tool/upsRuntimeCalculator/entry';
import { stereoAudioTest } from '../tool/stereoAudioTest/entry';
import { webBluetoothBleScanner } from '../tool/webBluetoothBleScanner/entry';
import { webMidiKeyboardTester } from '../tool/webMidiKeyboardTester/entry';
import { keyboardChatterTest } from '../tool/keyboardChatterTest/entry';
import { webUsbSerialMonitor } from '../tool/webUsbSerialMonitor/entry';
import { usbPowerBudgetCalculator } from '../tool/usbPowerBudgetCalculator/entry';
import { mobileSensorTest } from '../tool/mobileSensorTest/entry';
import { mouseJitterAngleSnappingTest } from '../tool/mouseJitterAngleSnappingTest/entry';
import { touchScreenTester } from '../tool/touchScreenTester/entry';
import { testInputLag } from '../tool/inputLagTest/entry';
import { psuPowerRequirementCalculator } from '../tool/psuPowerRequirementCalculator/entry';
import { resistorColorCodeCalculator } from '../tool/resistorColorCodeCalculator/entry';
import { ledResistorCalculator } from '../tool/ledResistorCalculator/entry';
import { audioDelayTest } from '../tool/audioDelayTest/entry';
import { microphoneSpectrumTester } from '../tool/microphoneSpectrumTester/entry';
import { webcamTester } from '../tool/webcamTester/entry';
import { voltageDividerCalculator } from '../tool/voltageDividerCalculator/entry';

export const hardwareCategory: HardwareCategoryEntry = {
  icon: 'mdi:memory',
  tools: [pixelesPantalla, touchScreenTester, testTeclado, keyboardChatterTest, webMidiKeyboardTester, testMando, gamepadPollingRateChecker, probadorVibracionMando, testRaton, mouseDoubleClickTest, mouseScrollTest, mouseDpiAnalyzer, mouseJitterAngleSnappingTest, estimadorSaludBateria, toneGenerator, waterEjector, subwooferCrossoverTest, speakerPhaseTester, microphoneSpectrumTester, webcamTester, refreshRateDetector, monitorGhostingTest, backlightBleedBloomingTest, oledScreenBurnInFixer, spectrumCanvas, upsRuntimeCalculator, usbPowerBudgetCalculator, mobileSensorTest, stereoAudioTest, webBluetoothBleScanner, webUsbSerialMonitor, testInputLag, psuPowerRequirementCalculator, resistorColorCodeCalculator, ledResistorCalculator, audioDelayTest, voltageDividerCalculator],

  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
