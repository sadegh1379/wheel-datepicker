import {
  formatGregorianDate,
  getCurrentGregorianDate,
  getDaysInGregorianMonth,
  isValidGregorianDate,
  parseGregorianDate,
  type GregorianDate
} from '../../../utils/gregorian-date';
import {
  formatJalaliDate,
  getCurrentJalaliDate,
  getDaysInJalaliMonth,
  isValidJalaliDate,
  parseJalaliDate,
  type JalaliDate
} from '../../../utils/jalali-date';

export type CalendarType = 'jalali' | 'miladi';

export const getCurrentDate = (calendarType: CalendarType): JalaliDate | GregorianDate => {
  return calendarType === 'jalali' ? getCurrentJalaliDate() : getCurrentGregorianDate();
};

export const parseDate = (value: string, calendarType: CalendarType): JalaliDate | GregorianDate | null => {
  return calendarType === 'jalali' ? parseJalaliDate(value) : parseGregorianDate(value);
};

export const formatDate = (date: JalaliDate | GregorianDate, calendarType: CalendarType): string => {
  if (calendarType === 'jalali') {
    return isValidJalaliDate(date as JalaliDate) ? formatJalaliDate(date as JalaliDate) : '';
  } else {
    return isValidGregorianDate(date as GregorianDate) ? formatGregorianDate(date as GregorianDate) : '';
  }
};

export const isValidDate = (date: JalaliDate | GregorianDate, calendarType: CalendarType): boolean => {
  return calendarType === 'jalali' 
    ? isValidJalaliDate(date as JalaliDate) 
    : isValidGregorianDate(date as GregorianDate);
};

export const getDaysInMonth = (date: JalaliDate | GregorianDate, calendarType: CalendarType): number => {
  if (calendarType === 'jalali') {
    return getDaysInJalaliMonth((date as JalaliDate).year, (date as JalaliDate).month);
  } else {
    return getDaysInGregorianMonth((date as GregorianDate).year, (date as GregorianDate).month);
  }
};

export const getValidInitialDate = (
  value: string | undefined, 
  calendarType: CalendarType
): JalaliDate | GregorianDate => {
  if (value) {
    const parsed = parseDate(value, calendarType);
    if (parsed) return parsed;
  }
  return getCurrentDate(calendarType);
};
