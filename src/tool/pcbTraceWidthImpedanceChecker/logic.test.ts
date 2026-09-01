import { describe, expect, it } from "vitest";
import {
  DEFAULT_INPUTS,
  calculateImpedance,
  calculateTrace,
  copperThicknessMil,
  createDefaultState,
  parseInputValue,
  requiredCopperAreaMil2,
  thermalCurrent,
  validateInputs,
  widthForTargetImpedance,
} from "./logic";
import { formatInputValue } from "./format";

describe("PCB trace width and impedance logic", () => {
  it("parses finite numeric input and rejects blanks", () => {
    expect(parseInputValue(" 2.5 ")).toBe(2.5);
    expect(parseInputValue("")).toBeNull();
    expect(parseInputValue("nope")).toBeNull();
  });
  it("converts copper thickness and calculates the IPC area", () => {
    expect(copperThicknessMil(35)).toBeCloseTo(1.37795, 4);
    expect(requiredCopperAreaMil2(1, 10, "external")).toBeCloseTo(16.3, 1);
    expect(requiredCopperAreaMil2(1, 10, "internal")).toBeGreaterThan(30);
  });
  it("keeps imperial input values short and editable", () => {
    expect(formatInputValue(35 / 25.4, "copperThicknessUm", "imperial")).toBe(
      "1.378",
    );
    expect(formatInputValue(1.2 / 25.4, "availableWidthMm", "imperial")).toBe(
      "0.0472",
    );
    expect(
      formatInputValue(0.18 / 25.4, "dielectricHeightMm", "imperial"),
    ).toBe("0.0071");
  });
  it("uses RMS current for a repetitive pulse model", () => {
    const input = {
      ...DEFAULT_INPUTS,
      mode: "pulse" as const,
      pulseCurrentA: 10,
      dutyCyclePercent: 25,
    };
    expect(thermalCurrent(input)).toBe(5);
  });
  it("validates steady and pulse-specific fields", () => {
    expect(validateInputs(DEFAULT_INPUTS)).toBe(true);
    expect(validateInputs({ ...DEFAULT_INPUTS, temperatureRiseC: 101 })).toBe(
      false,
    );
    expect(
      validateInputs({ ...DEFAULT_INPUTS, mode: "pulse", pulseDurationMs: 0 }),
    ).toBe(false);
    expect(
      validateInputs({
        ...DEFAULT_INPUTS,
        mode: "pulse",
        dutyCyclePercent: 101,
      }),
    ).toBe(false);
  });
  it("calculates distinct microstrip and stripline estimates", () => {
    const base = {
      layer: "external" as const,
      copperThicknessUm: 35,
      dielectricHeightMm: 0.18,
      dielectricConstant: 4.1,
    };
    const external = calculateImpedance(base, 0.3);
    const internal = calculateImpedance({ ...base, layer: "internal" }, 0.3);
    expect(external).toBeGreaterThan(0);
    expect(internal).toBeGreaterThan(0);
    expect(external).not.toBeCloseTo(internal, 3);
  });
  it("solves a positive width for a target impedance", () => {
    const width = widthForTargetImpedance(DEFAULT_INPUTS);
    expect(width).toBeGreaterThan(0);
    expect(calculateImpedance(DEFAULT_INPUTS, width)).toBeCloseTo(
      DEFAULT_INPUTS.targetImpedanceOhm,
      4,
    );
  });
  it("returns thermal, electrical and pulse outputs", () => {
    const result = calculateTrace({ ...DEFAULT_INPUTS, mode: "pulse" });
    expect(result).not.toBeNull();
    expect(result?.thermalWidthMm).toBeGreaterThan(0);
    expect(result?.resistanceOhm).toBeGreaterThan(0);
    expect(result?.voltageDropV).toBeGreaterThan(0);
    expect(result?.pulseEnergyMj).toBeGreaterThan(0);
  });
  it("returns null for incomplete input", () => {
    expect(calculateTrace({ ...DEFAULT_INPUTS, currentA: 0 })).toBeNull();
  });
  it("creates a detached default state", () => {
    const state = createDefaultState();
    state.currentA = 8;
    expect(DEFAULT_INPUTS.currentA).toBe(2);
  });
});
