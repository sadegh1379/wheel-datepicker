import React, { useMemo, useState, useEffect } from 'react';
import { DatepickerProps } from '../types';
import WheelPicker from '../wheel-picker/wheel-picker';
import Input from '../input/input';
import Modal from '../modal/modal';
import Button from '../button/button';
import { 
  parseJalaliDate, 
  formatJalaliDate, 
  getCurrentJalaliDate, 
  getDaysInJalaliMonth,
  isValidJalaliDate,
  type JalaliDate 
} from '../../utils/jalali-date';
import './datepicker.css';

const months = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند'
];

const WHEEL_DATE_FORMAT = 'jYYYY/jMM/jDD';

const WheelDatePicker: React.FC<DatepickerProps> = ({
  value,
  onChange,
  minYear = 1300,
  maxYear = getCurrentJalaliDate().year,
  className,
  inputProps,
  wheelPickerProps,
  modalProps,
  buttonProps,
  rtl = false
}) => {
  // parse initial value or fallback to today
  const initial = useMemo(() => {
    if (value) {
      const parsed = parseJalaliDate(value);
      if (parsed) return parsed;
    }
    return getCurrentJalaliDate();
  }, [value]);

  // state for the selected value (committed)
  const [selected, setSelected] = useState({
    year: initial.year,
    month: initial.month,
    day: initial.day
  });

  // state for modal open/close
  const [modalOpen, setModalOpen] = useState(false);

  // state for the value being picked in modal (not committed until Set)
  const [temp, setTemp] = useState(selected);

  //generate years
  const years = useMemo(() => {
    const arr = [];
    for (let y = minYear; y <= maxYear; y++) arr.push(y.toString());
    return arr;
  }, [minYear, maxYear]);

  // generate days based on month/year
  const daysInMonth = useMemo(() => {
    return getDaysInJalaliMonth(temp.year, temp.month);
  }, [temp.year, temp.month]);
  const days = useMemo(() => {
    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  }, [daysInMonth]);

  // update temp.day if overflow
  useEffect(() => {
    if (temp.day > daysInMonth) setTemp(t => ({ ...t, day: daysInMonth }));
  }, [daysInMonth, temp.day]);

  // when value or defaultValue prop changes, update selected and temp
  // useEffect(() => {
  //   if (value && moment(value, WHEEL_DATE_FORMAT, true).isValid()) {
  //     const m = moment(value, WHEEL_DATE_FORMAT);
  //     const newState = {
  //       year: m.jYear(),
  //       month: m.jMonth() + 1,
  //       day: m.jDate()
  //     };
  //     console.log('value', value)
  //     console.log('set temp and selected is use effect', newState)
  //     setSelected(newState);
  //     setTemp(newState);
  //   }
  // }, [value]);

  // handlers for wheel pickers in modal
  const handleYearChange = (val: string) => setTemp(t => ({ ...t, year: Number(val) }));
  const handleMonthChange = (val: string) =>
    setTemp(t => ({ ...t, month: months.indexOf(val) + 1 }));
  const handleDayChange = (val: string) => setTemp(t => ({ ...t, day: Number(val) }));

  // handle Set/Cancel
  const handleSet = () => {
    setSelected(temp);
    setModalOpen(false);
    
    if (isValidJalaliDate(temp)) {
      const dateString = formatJalaliDate(temp);
      onChange?.(dateString);
    }
  };
  const handleCancel = () => {
    setTemp(selected);
    setModalOpen(false);
  };

  // display value for input
  const displayValue = useMemo(() => {
    if (!value) return '';

    const dateObj = { year: selected.year, month: selected.month, day: selected.day };
    return isValidJalaliDate(dateObj) ? formatJalaliDate(dateObj) : '';
  }, [selected]);

  // Create wheel picker components
  const dayWheel = (
    <WheelPicker
      items={days}
      onChange={handleDayChange}
      value={temp.day.toString()}
      containerClassName={'wd-datepicker-wheel-container'}
      visibleCount={3}
      {...wheelPickerProps}
    />
  );

  const monthWheel = (
    <WheelPicker
      items={months}
      onChange={handleMonthChange}
      value={months[temp.month - 1]}
      containerClassName={'wd-datepicker-wheel-container'}
      visibleCount={3}
      {...wheelPickerProps}
    />
  );

  const yearWheel = (
    <WheelPicker
      items={years}
      onChange={handleYearChange}
      value={temp.year.toString()}
      containerClassName={'wd-datepicker-wheel-container'}
      visibleCount={3}
      {...wheelPickerProps}
    />
  );

  // Order wheels based on RTL setting
  const wheelOrder = rtl ? [yearWheel, monthWheel, dayWheel] : [dayWheel, monthWheel, yearWheel];

  return (
    <>
      <Input
        name={inputProps?.name}
        readonly
        value={displayValue}
        onClick={() => setModalOpen(true)}
        label={inputProps?.label}
        rtl={rtl}
        {...inputProps}
      />
      <Modal
        placement="bottom"
        title={modalProps?.title}
        isOpen={modalOpen}
        onClose={handleCancel}
        rtl={rtl}
        {...modalProps}
      >
        <div className={`wd-datepicker-modal-content ${rtl ? 'wd-datepicker-rtl' : ''}`}>
          <div className={`wd-datepicker-wheels-container ${className || ''}`}>
            {wheelOrder}
          </div>
          <Button 
            className="wd-datepicker-confirm-button" 
            size="medium" 
            onClick={handleSet} 
            text="تایید" 
            {...buttonProps}
          />
        </div>
      </Modal>
    </>
  );
};

export default WheelDatePicker;