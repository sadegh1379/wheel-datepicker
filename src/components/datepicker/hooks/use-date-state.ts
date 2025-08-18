import { useEffect, useState } from 'react';
import { JalaliDate } from '../../../utils/jalali-date';
import { GregorianDate } from '../../../utils/gregorian-date';

interface UseDateStateProps {
  value?: string;
  calendarType: 'jalali' | 'miladi';
  getValidInitial: () => JalaliDate | GregorianDate;
}

export const useDateState = ({ value, calendarType, getValidInitial }: UseDateStateProps) => {
  // State for the selected value (committed)
  const [selected, setSelected] = useState<JalaliDate | GregorianDate>(getValidInitial);

  // State for modal open/close
  const [modalOpen, setModalOpen] = useState(false);

  // State for the value being picked in modal (not committed until Set)
  const [temp, setTemp] = useState<JalaliDate | GregorianDate>(selected);

  // Update selected and temp when value prop changes
  useEffect(() => {
    const newSelected = getValidInitial();
    setSelected(newSelected);
    setTemp(newSelected);
  }, [value, getValidInitial]);

  return {
    selected,
    setSelected,
    modalOpen,
    setModalOpen,
    temp,
    setTemp
  };
};
