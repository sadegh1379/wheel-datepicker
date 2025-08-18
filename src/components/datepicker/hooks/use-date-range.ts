import { useMemo } from 'react';
import { getCurrentGregorianDate } from '../../../utils/gregorian-date';
import { getCurrentJalaliDate } from '../../../utils/jalali-date';
import { DEFAULT_MIN_YEARS } from '../constants/calendar-data';

interface UseDateRangeProps {
  minYear?: number;
  maxYear?: number;
  calendarType: 'jalali' | 'miladi';
}

export const useDateRange = ({
  minYear: minYearProp,
  maxYear: maxYearProp,
  calendarType
}: UseDateRangeProps) => {
  // Set maxYear based on calendar type
  const maxYear = useMemo(() => {
    if (typeof maxYearProp === 'number') return maxYearProp;
    return calendarType === 'jalali' ? getCurrentJalaliDate().year : getCurrentGregorianDate().year;
  }, [calendarType, maxYearProp]);

  // Set minYear based on calendar type
  const minYear = useMemo(() => {
    if (typeof minYearProp === 'number') return minYearProp;
    return calendarType === 'jalali' ? DEFAULT_MIN_YEARS.jalali : DEFAULT_MIN_YEARS.miladi;
  }, [calendarType, minYearProp]);

  // Generate years array
  const years = useMemo(() => {
    const arr = [];
    for (let y = minYear; y <= maxYear; y++) arr.push(y.toString());
    return arr;
  }, [minYear, maxYear]);

  return {
    minYear,
    maxYear,
    years
  };
};
