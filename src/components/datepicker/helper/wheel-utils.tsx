import React from 'react';
import WheelPicker from '../../wheel-picker/wheel-picker';
import { WheelPickerProps } from '../../types';
import { jalaliMonths, gregorianMonths } from '../constants/constants';
import { CalendarType } from './date-utils';

export const generateYears = (minYear: number, maxYear: number): string[] => {
  const arr = [];
  for (let y = minYear; y <= maxYear; y++) arr.push(y.toString());
  return arr;
};

export const generateDays = (daysInMonth: number): string[] => {
  return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
};

export const getMonthIndex = (monthName: string, calendarType: CalendarType): number => {
  const months = calendarType === 'jalali' ? jalaliMonths : gregorianMonths;
  return months.indexOf(monthName) + 1;
};

export const getMonthName = (monthIndex: number, calendarType: CalendarType): string => {
  const months = calendarType === 'jalali' ? jalaliMonths : gregorianMonths;
  return months[monthIndex - 1];
};

export const createDayWheel = (
  days: string[],
  currentDay: number,
  onDayChange: (val: string) => void,
  wheelPickerProps: Partial<WheelPickerProps>
) => (
  <WheelPicker
    items={days}
    onChange={onDayChange}
    value={currentDay.toString()}
    containerClassName={'wd-datepicker-wheel-container'}
    visibleCount={3}
    {...wheelPickerProps}
  />
);

export const createMonthWheel = (
  months: string[],
  currentMonth: number,
  onMonthChange: (val: string) => void,
  wheelPickerProps: Partial<WheelPickerProps>
) => (
  <WheelPicker
    items={months}
    onChange={onMonthChange}
    value={months[currentMonth - 1]}
    containerClassName={'wd-datepicker-wheel-container'}
    visibleCount={3}
    {...wheelPickerProps}
  />
);

export const createYearWheel = (
  years: string[],
  currentYear: number,
  onYearChange: (val: string) => void,
  wheelPickerProps: Partial<WheelPickerProps>
) => (
  <WheelPicker
    items={years}
    onChange={onYearChange}
    value={currentYear.toString()}
    containerClassName={'wd-datepicker-wheel-container'}
    visibleCount={3}
    {...wheelPickerProps}
  />
);

export const getWheelOrder = (
  dayWheel: React.ReactElement,
  monthWheel: React.ReactElement,
  yearWheel: React.ReactElement,
  calendarType: CalendarType
): React.ReactElement[] => {
  return calendarType === 'miladi'
    ? [yearWheel, monthWheel, dayWheel]
    : [dayWheel, monthWheel, yearWheel];
};
