import { useMemo } from 'react';
import { GregorianDate } from '../../../utils/gregorian-date';
import { JalaliDate } from '../../../utils/jalali-date';
import { formatGregorianDate, isValidGregorianDate } from '../../../utils/gregorian-date';
import { formatJalaliDate, isValidJalaliDate } from '../../../utils/jalali-date';

interface UseDateValidationProps {
  selected: JalaliDate | GregorianDate;
  calendarType: 'jalali' | 'miladi';
  value?: string;
}

export const useDateValidation = ({ selected, calendarType, value }: UseDateValidationProps) => {
  // Display value for input
  const displayValue = useMemo(() => {
    if (!value) return '';
    if (calendarType === 'jalali') {
      return isValidJalaliDate(selected as JalaliDate)
        ? formatJalaliDate(selected as JalaliDate)
        : '';
    } else {
      return isValidGregorianDate(selected as GregorianDate)
        ? formatGregorianDate(selected as GregorianDate)
        : '';
    }
  }, [selected, calendarType, value]);

  // Validate and format date for onChange
  const validateAndFormatDate = (temp: JalaliDate | GregorianDate) => {
    if (calendarType === 'jalali') {
      if (isValidJalaliDate(temp as JalaliDate)) {
        return formatJalaliDate(temp as JalaliDate);
      }
    } else {
      if (isValidGregorianDate(temp as GregorianDate)) {
        return formatGregorianDate(temp as GregorianDate);
      }
    }
    return null;
  };

  return {
    displayValue,
    validateAndFormatDate
  };
};
