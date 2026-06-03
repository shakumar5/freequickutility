export interface CAGRResult {
  cagr: number;
  absoluteReturn: number;
  absoluteReturnPercent: number;
}

export function calculateCAGR(beginningValue: number, endingValue: number, years: number): CAGRResult {
  if (beginningValue <= 0 || endingValue <= 0 || years <= 0) {
    return { cagr: 0, absoluteReturn: 0, absoluteReturnPercent: 0 };
  }

  const cagr = (Math.pow(endingValue / beginningValue, 1 / years) - 1) * 100;
  const absoluteReturn = endingValue - beginningValue;
  const absoluteReturnPercent = ((endingValue - beginningValue) / beginningValue) * 100;

  return {
    cagr: Math.round(cagr * 100) / 100,
    absoluteReturn: Math.round(absoluteReturn * 100) / 100,
    absoluteReturnPercent: Math.round(absoluteReturnPercent * 100) / 100,
  };
}
