import { calculatePhoneChargeTime, validatePhoneChargeInput, type PhoneChargeTimeInput, type PhoneChargeTimeResult, type PhoneChargeValidation } from './logic';
import type { PhoneChargeTimeCalculatorUI } from './ui';

type PhoneChargeCalculatorConfig = PhoneChargeTimeCalculatorUI;

function formatDuration(minutes: number, hourLabel: string, minuteLabel: string): string {
  const rounded = Math.max(1, Math.round(minutes));
  if (rounded < 60) return `${rounded} ${minuteLabel}`;
  const hours = Math.floor(rounded / 60);
  const remaining = rounded % 60;
  return remaining === 0 ? `${hours} ${hourLabel}` : `${hours} ${hourLabel} ${remaining} ${minuteLabel}`;
}

function readNumber(root: HTMLElement, name: string): number {
  const input = root.querySelector<HTMLInputElement>(`[data-input="${name}"]`);
  return Number(input?.value ?? NaN);
}

function setFieldError(root: HTMLElement, field: string | undefined, message: string): void {
  root.querySelectorAll<HTMLElement>('[data-field-error]').forEach((element) => {
    element.textContent = '';
    element.hidden = true;
  });
  root.querySelectorAll<HTMLElement>('[data-field]').forEach((element) => element.removeAttribute('data-invalid'));
  if (!field) return;
  const fieldElement = root.querySelector<HTMLElement>(`[data-field="${field}"]`);
  const error = root.querySelector<HTMLElement>(`[data-field-error="${field}"]`);
  fieldElement?.setAttribute('data-invalid', 'true');
  if (error) {
    error.textContent = message;
    error.hidden = false;
  }
}

function validationMessage(config: PhoneChargeCalculatorConfig, reason: NonNullable<PhoneChargeValidation['reason']>): string {
  switch (reason) {
    case 'target-order': return config.errorTargetOrder;
    case 'capacity': return config.errorCapacity;
    case 'current': return config.errorCurrent;
    case 'target': return config.errorTarget;
    case 'power': return config.errorPower;
    case 'efficiency': return config.errorEfficiency;
  }
}

function showResult(root: HTMLElement, config: PhoneChargeCalculatorConfig, result: PhoneChargeTimeResult, input: PhoneChargeTimeInput): void {
  root.dataset.state = 'result';
  root.querySelector<HTMLElement>('[data-status]')!.textContent = config.statusReady;
  root.querySelector<HTMLElement>('[data-energy]')!.textContent = result.energyNeededWh.toFixed(2);
  root.querySelector<HTMLElement>('[data-time]')!.textContent = formatDuration(result.estimatedMinutes, config.hourUnit, config.minuteUnit);
  root.querySelector<HTMLElement>('[data-time-minutes]')!.textContent = config.fromCurrentCharge;
  root.querySelector<HTMLElement>('[data-target]')!.textContent = `${input.targetPercent}`;
  root.querySelector<HTMLElement>('[data-assumptions]')!.textContent = config.assumptionsText
    .replace('{voltage}', '3.85')
    .replace('{efficiency}', `${input.efficiencyPercent}`)
    .replace('{taper}', `${Math.round((result.taperFactor - 1) * 100)}%`);
  const progress = root.querySelector<HTMLElement>('[data-charge-progress]');
  root.style.setProperty('--charge-start', `${input.currentPercent}%`);
  root.style.setProperty('--charge-target', `${input.targetPercent}%`);
  progress?.setAttribute('aria-label', `${config.chargeProgressLabel}: ${input.currentPercent}% to ${input.targetPercent}%`);
  root.querySelector<HTMLElement>('[data-charge-progress-label]')!.textContent = `${input.currentPercent}% → ${input.targetPercent}%`;
  root.querySelector<HTMLElement>('[data-scenario-list]')!.innerHTML = result.scenarios.map((scenario) => `
    <li>
      <div><span>${scenario.watts} ${config.powerUnit}</span><strong>${formatDuration(scenario.minutes, config.hourUnit, config.minuteUnit)}</strong></div>
      <span class="phone-charge-scenario-track" aria-hidden="true"><span style="width: ${Math.min(100, scenario.watts / 30 * 100)}%"></span></span>
    </li>
  `).join('');
}

function calculate(root: HTMLElement, config: PhoneChargeCalculatorConfig): void {
  const input: PhoneChargeTimeInput = {
    capacityMah: readNumber(root, 'capacity'),
    currentPercent: readNumber(root, 'current'),
    targetPercent: readNumber(root, 'target'),
    chargerWatts: readNumber(root, 'power'),
    efficiencyPercent: readNumber(root, 'efficiency'),
  };
  const validation = validatePhoneChargeInput(input);
  if (!validation.valid) {
    setFieldError(root, validation.field, validationMessage(config, validation.reason!));
    root.dataset.state = 'error';
    root.querySelector<HTMLElement>('[data-status]')!.textContent = config.statusError;
    return;
  }
  setFieldError(root, undefined, '');
  const result = calculatePhoneChargeTime(input);
  if (result) showResult(root, config, result, input);
}

export function mountPhoneChargeCalculator(root: HTMLElement, config: PhoneChargeCalculatorConfig): void {
  root.querySelector<HTMLFormElement>('[data-charge-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    calculate(root, config);
  });
  root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => {
    input.addEventListener('input', () => calculate(root, config));
  });
  calculate(root, config);
}
