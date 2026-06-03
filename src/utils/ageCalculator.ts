export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalMonths: number;
  nextBirthday: number;
}

export function calculateAge(birthDate: Date, toDate: Date = new Date()): AgeResult {
  let years = toDate.getFullYear() - birthDate.getFullYear();
  let months = toDate.getMonth() - birthDate.getMonth();
  let days = toDate.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(toDate.getFullYear(), toDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((toDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = years * 12 + months;

  // Next birthday
  const nextBday = new Date(toDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (nextBday <= toDate) {
    nextBday.setFullYear(nextBday.getFullYear() + 1);
  }
  const nextBirthday = Math.ceil((nextBday.getTime() - toDate.getTime()) / (1000 * 60 * 60 * 24));

  return { years, months, days, totalDays, totalWeeks, totalMonths, nextBirthday };
}
