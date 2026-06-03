export interface BMIResult {
  bmi: number;
  category: string;
  healthRisk: string;
  color: string;
}

export function calculateBMI(weight: number, heightCm: number): BMIResult {
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const rounded = Math.round(bmi * 10) / 10;

  let category: string;
  let healthRisk: string;
  let color: string;

  if (bmi < 18.5) {
    category = 'Underweight';
    healthRisk = 'Possible nutritional deficiency and osteoporosis';
    color = '#0070f3';
  } else if (bmi < 25) {
    category = 'Normal weight';
    healthRisk = 'Low risk (healthy range)';
    color = '#0cce6b';
  } else if (bmi < 30) {
    category = 'Overweight';
    healthRisk = 'Moderate risk of cardiovascular disease';
    color = '#f5a623';
  } else if (bmi < 35) {
    category = 'Obese (Class I)';
    healthRisk = 'High risk of cardiovascular disease';
    color = '#ff6b35';
  } else if (bmi < 40) {
    category = 'Obese (Class II)';
    healthRisk = 'Very high risk of cardiovascular disease';
    color = '#ee0000';
  } else {
    category = 'Obese (Class III)';
    healthRisk = 'Extremely high risk of cardiovascular disease';
    color = '#c50000';
  }

  return { bmi: rounded, category, healthRisk, color };
}
