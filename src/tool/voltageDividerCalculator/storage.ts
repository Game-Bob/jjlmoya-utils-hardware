import type { DividerInput } from './logic';

const STORAGE_KEY = 'jjlmoya-voltage-divider-input';

export function loadDividerInput(fallback: DividerInput): DividerInput {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored) as Partial<DividerInput>;
    return { ...fallback, ...parsed, mode: parsed.mode === 'target' ? 'target' : 'predict' };
  } catch {
    return fallback;
  }
}

export function saveDividerInput(input: DividerInput): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}
