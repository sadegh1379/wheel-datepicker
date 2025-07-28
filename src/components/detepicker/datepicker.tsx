import React, { useMemo, useState, useEffect } from 'react';
import moment from 'moment-jalaali';
import { DatepickerProps } from '../types';


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
  label,
  maxYear = moment().jYear(),
  className,
  name = 'date',
  inputProps,
  wheelPickerProps,
  modalProps
}) => {
  // parse initial value or fallback to today
  const initial = useMemo(() => {
    if (value && moment(value, WHEEL_DATE_FORMAT, true).isValid()) {
      return moment(value, WHEEL_DATE_FORMAT);
    }
    return moment().locale('fa');
  }, [value]);

  // state for the selected value (committed)
  const [selected, setSelected] = useState({
    year: initial.jYear(),
    month: initial.jMonth() + 1,
    day: initial.jDate()
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
    return moment.jDaysInMonth(temp.year, temp.month - 1);
  }, [temp.year, temp.month]);
  const days = useMemo(() => {
    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  }, [daysInMonth]);

  // update temp.day if overflow
  useEffect(() => {
    if (temp.day > daysInMonth) setTemp(t => ({ ...t, day: daysInMonth }));
  }, [daysInMonth, temp.day]);

  // when value or defaultValue prop changes, update selected and temp
  useEffect(() => {
    let m: moment.Moment | null = null;
    if (value && moment(value, WHEEL_DATE_FORMAT, true).isValid()) {
      m = moment(value, WHEEL_DATE_FORMAT);
    } else {
      m = moment().locale('fa');
    }
    if (m) {
      setSelected({
        year: m.jYear(),
        month: m.jMonth() + 1,
        day: m.jDate()
      });
      setTemp({
        year: m.jYear(),
        month: m.jMonth() + 1,
        day: m.jDate()
      });
    }
  }, [value]);

  // handlers for wheel pickers in modal
  const handleYearChange = (val: string) => setTemp(t => ({ ...t, year: Number(val) }));
  const handleMonthChange = (val: string) =>
    setTemp(t => ({ ...t, month: months.indexOf(val) + 1 }));
  const handleDayChange = (val: string) => setTemp(t => ({ ...t, day: Number(val) }));

  // handle Set/Cancel
  const handleSet = () => {
    setSelected(temp);
    setModalOpen(false);
    const m = moment(`${temp.year}/${temp.month}/${temp.day}`, 'jYYYY/jM/jD').locale('fa');
    onChange?.(m.format(WHEEL_DATE_FORMAT));
  };
  const handleCancel = () => {
    setTemp(selected);
    setModalOpen(false);
  };

  // display value for input
  const displayValue = useMemo(() => {
    if (!value) return '';

    const m = moment(`${selected.year}/${selected.month}/${selected.day}`, 'jYYYY/jM/jD').locale(
      'fa'
    );
    return m.format(WHEEL_DATE_FORMAT);
  }, [selected]);

  return (
    <>
      <Input
        name={name}
        readOnly
        value={displayValue}
        onClick={() => setModalOpen(true)}
        label={label}
        {...inputProps}
      />
      <Modal
        placement="bottom"
        title={label}
        isOpen={modalOpen}
        onClose={handleCancel}
        {...modalProps}
      >
        <div className="flex flex-col items-center w-full p-4 pb-0 gap-10">
          <div className={twMerge('flex items-center justify-stretch w-full', className)}>
            <WheelPicker
              items={days}
              onChange={handleDayChange}
              value={temp.day.toString()}
              containerClassName={'w-full'}
              visibleCount={3}
              {...wheelPickerProps}
            />
            <WheelPicker
              items={months}
              onChange={handleMonthChange}
              value={months[temp.month - 1]}
              containerClassName={'w-full'}
              visibleCount={3}
              {...wheelPickerProps}
            />
            <WheelPicker
              items={years}
              onChange={handleYearChange}
              value={temp.year.toString()}
              containerClassName={'w-full'}
              visibleCount={3}
              {...wheelPickerProps}
            />
          </div>
          <Button className="w-full" size="medium" onClick={handleSet}>
            تایید
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WheelDatePicker;