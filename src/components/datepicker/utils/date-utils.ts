import { GregorianDate } from '../../../utils/gregorian-date';
import { JalaliDate } from '../../../utils/jalali-date';
import { getCurrentGregorianDate, parseGregorianDate } from '../../../utils/gregorian-date';
import { getCurrentJalaliDate, parseJalaliDate } from '../../../utils/jalali-date';
import { getDaysInGregorianMonth } from '../../../utils/gregorian-date';
import { getDaysInJalaliMonth } from '../../../utils/jalali-date';
import React from 'react';

export const getValidInitialDate = (
  value: string | undefined,
  calendarType: 'jalali' | 'miladi'
) => {
  if (value) {
    if (calendarType === 'jalali') {
      return parseJalaliDate(value) || getCurrentJalaliDate();
    } else {
      return parseGregorianDate(value) || getCurrentGregorianDate();
    }
  }
  return calendarType === 'jalali' ? getCurrentJalaliDate() : getCurrentGregorianDate();
};

export const getDaysInMonth = (
  temp: JalaliDate | GregorianDate,
  calendarType: 'jalali' | 'miladi'
) => {
  return calendarType === 'jalali'
    ? getDaysInJalaliMonth((temp as JalaliDate).year, (temp as JalaliDate).month)
    : getDaysInGregorianMonth((temp as GregorianDate).year, (temp as GregorianDate).month);
};

export const generateDaysArray = (daysInMonth: number) => {
  return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
};

export const getWheelOrder = (
  calendarType: 'jalali' | 'miladi',
  dayWheel: React.ReactElement,
  monthWheel: React.ReactElement,
  yearWheel: React.ReactElement
): React.ReactElement[] => {
  return calendarType === 'miladi'
    ? [yearWheel, monthWheel, dayWheel]
    : [dayWheel, monthWheel, yearWheel];
};
