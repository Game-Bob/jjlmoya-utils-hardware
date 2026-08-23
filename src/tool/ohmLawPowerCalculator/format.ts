export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en', { maximumSignificantDigits: 6 }).format(value);
}
