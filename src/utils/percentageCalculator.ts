export function percentOf(percent: number, total: number): number {
  return (percent / 100) * total;
}

export function whatPercent(part: number, total: number): number {
  if (total === 0) return 0;
  return (part / total) * 100;
}

export function percentChange(oldValue: number, newValue: number): number {
  if (oldValue === 0) return 0;
  return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
}

export function percentIncrease(value: number, percent: number): number {
  return value + (value * percent) / 100;
}

export function percentDecrease(value: number, percent: number): number {
  return value - (value * percent) / 100;
}
