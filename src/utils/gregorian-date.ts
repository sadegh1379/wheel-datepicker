// Gregorian date utilities

export type GregorianDate = {
  year: number;
  month: number; // 1-based (1 = January)
  day: number;
};

// Get current Gregorian date
export function getCurrentGregorianDate(): GregorianDate {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  };
}

// Parse a string in YYYY/MM/DD format to GregorianDate
export function parseGregorianDate(str: string): GregorianDate | null {
  const match = str.match(/^(\d{4})\/(\d{2})\/(\d{2})$/);
  if (!match) return null;
  const [, year, month, day] = match;
  return {
    year: Number(year),
    month: Number(month),
    day: Number(day),
  };
}

// Format a GregorianDate as YYYY/MM/DD
export function formatGregorianDate(date: GregorianDate): string {
  const mm = date.month.toString().padStart(2, '0');
  const dd = date.day.toString().padStart(2, '0');
  return `${date.year}/${mm}/${dd}`;
}

// Get the number of days in a given Gregorian month
export function getDaysInGregorianMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

// Check if a GregorianDate is valid
export function isValidGregorianDate(date: GregorianDate): boolean {
  if (
    date.month < 1 ||
    date.month > 12 ||
    date.day < 1 ||
    date.day > getDaysInGregorianMonth(date.year, date.month)
  ) {
    return false;
  }
  return true;
}