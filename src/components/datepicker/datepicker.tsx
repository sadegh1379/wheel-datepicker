import React, { useEffect, useMemo } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import Modal from '../modal/modal';
import { DatepickerProps } from '../types';
import './datepicker.css';

// Import organized constants, hooks, and utilities
import { JALALI_MONTHS, GREGORIAN_MONTHS, DEFAULT_BUTTON_TEXTS } from './constants/calendar-data';
import { useDateState, useDateValidation, useDateRange, useDateHandlers } from './hooks';
import { getValidInitialDate, getDaysInMonth, generateDaysArray, getWheelOrder } from './utils';
import { createDayWheel, createMonthWheel, createYearWheel } from './utils';

const WheelDatePicker: React.FC<DatepickerProps> = ({
  value,
  onChange,
  minYear: minYearProp,
  maxYear: maxYearProp,
  className,
  input,
  modal,
  calendarType = 'jalali',
  button,
  ...wheelPickerProps
}) => {
  // Set RTL based on calendar type
  const rtl = calendarType === 'jalali';

  // Select months array based on calendar type
  const months = calendarType === 'jalali' ? JALALI_MONTHS : GREGORIAN_MONTHS;

  // Get valid initial date
  const getValidInitial = () => getValidInitialDate(value, calendarType);

  // Use custom hooks for state management
  const { selected, setSelected, modalOpen, setModalOpen, temp, setTemp } = useDateState({
    value,
    calendarType,
    getValidInitial
  });

  // Use custom hook for date range
  const { years } = useDateRange({
    minYear: minYearProp,
    maxYear: maxYearProp,
    calendarType
  });

  // Use custom hook for date validation
  const { displayValue, validateAndFormatDate } = useDateValidation({
    selected,
    calendarType,
    value
  });

  // Use custom hook for date handlers
  const { handleYearChange, handleMonthChange, handleDayChange, handleSet, handleCancel } =
    useDateHandlers({
      setTemp,
      setModalOpen,
      setSelected,
      onChange,
      calendarType,
      temp,
      selected,
      validateAndFormatDate
    });

  // Generate days in month based on calendar type
  const daysInMonth = useMemo(() => {
    return getDaysInMonth(temp, calendarType);
  }, [temp, calendarType]);

  const days = useMemo(() => {
    return generateDaysArray(daysInMonth);
  }, [daysInMonth]);

  // Update temp.day if overflow
  useEffect(() => {
    if (temp.day > daysInMonth) setTemp(t => ({ ...t, day: daysInMonth }));
  }, [daysInMonth, temp.day, setTemp]);

  // Create wheel picker components
  const dayWheel = createDayWheel({
    items: days,
    onChange: handleDayChange,
    value: temp.day.toString(),
    wheelPickerProps
  });

  const monthWheel = createMonthWheel({
    items: months,
    onChange: handleMonthChange,
    value: months[temp.month - 1],
    wheelPickerProps
  });

  const yearWheel = createYearWheel({
    items: years,
    onChange: handleYearChange,
    value: temp.year.toString(),
    wheelPickerProps
  });

  // Order wheels based on RTL setting
  const wheelOrder = getWheelOrder(calendarType, dayWheel, monthWheel, yearWheel);

  return (
    <>
      <Input
        name={input?.name}
        value={displayValue}
        onClick={() => setModalOpen(true)}
        label={input?.label}
        rtl={rtl}
        {...input}
      />
      <Modal
        placement="bottom"
        title={modal?.title}
        isOpen={modalOpen}
        onClose={handleCancel}
        rtl={rtl}
        {...modal}
      >
        <div className={`wd-datepicker-modal-content ${rtl ? 'wd-datepicker-rtl' : ''}`}>
          <div className={`wd-datepicker-wheels-container ${className || ''}`}>{wheelOrder}</div>
          <Button
            className="wd-datepicker-confirm-button"
            size="medium"
            onClick={handleSet}
            {...button}
          >
            {button?.text ? button.text : DEFAULT_BUTTON_TEXTS[calendarType]}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WheelDatePicker;
