import { JalaliDate } from '../../../utils/jalali-date';
import { GregorianDate } from '../../../utils/gregorian-date';
import { JALALI_MONTHS, GREGORIAN_MONTHS } from '../constants/calendar-data';

interface UseDateHandlersProps {
  setTemp: (
    value:
      | JalaliDate
      | GregorianDate
      | ((prev: JalaliDate | GregorianDate) => JalaliDate | GregorianDate)
  ) => void;
  setModalOpen: (open: boolean) => void;
  setSelected: (value: JalaliDate | GregorianDate) => void;
  onChange?: (date: string) => void;
  calendarType: 'jalali' | 'miladi';
  temp: JalaliDate | GregorianDate;
  selected: JalaliDate | GregorianDate;
  validateAndFormatDate: (temp: JalaliDate | GregorianDate) => string | null;
}

export const useDateHandlers = ({
  setTemp,
  setModalOpen,
  setSelected,
  onChange,
  calendarType,
  temp,
  selected,
  validateAndFormatDate
}: UseDateHandlersProps) => {
  // Handlers for wheel pickers in modal
  const handleYearChange = (val: string) => setTemp(t => ({ ...t, year: Number(val) }));

  const handleMonthChange = (val: string) =>
    setTemp(t => ({
      ...t,
      month:
        calendarType === 'jalali'
          ? JALALI_MONTHS.indexOf(val) + 1
          : GREGORIAN_MONTHS.indexOf(val) + 1
    }));

  const handleDayChange = (val: string) => setTemp(t => ({ ...t, day: Number(val) }));

  // Handle Set/Cancel
  const handleSet = () => {
    setSelected(temp);
    setModalOpen(false);
    const formattedDate = validateAndFormatDate(temp);
    if (formattedDate) {
      onChange?.(formattedDate);
    }
  };

  const handleCancel = () => {
    setTemp(selected);
    setModalOpen(false);
  };

  return {
    handleYearChange,
    handleMonthChange,
    handleDayChange,
    handleSet,
    handleCancel
  };
};
