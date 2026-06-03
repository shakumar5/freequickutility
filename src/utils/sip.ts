export interface SIPResult {
  investedAmount: number;
  estimatedReturns: number;
  totalValue: number;
}

export function calculateSIP(monthlyInvestment: number, annualReturnRate: number, years: number): SIPResult {
  if (monthlyInvestment <= 0 || annualReturnRate <= 0 || years <= 0) {
    return { investedAmount: 0, estimatedReturns: 0, totalValue: 0 };
  }

  const months = years * 12;
  const monthlyRate = annualReturnRate / 12 / 100;

  const totalValue =
    monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = totalValue - investedAmount;

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(totalValue),
  };
}
