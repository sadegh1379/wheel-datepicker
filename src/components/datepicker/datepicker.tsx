import React, { useEffect, useMemo, useState } from "react";
import {
  formatGregorianDate,
  getCurrentGregorianDate,
  getDaysInGregorianMonth,
  isValidGregorianDate,
  parseGregorianDate,
  type GregorianDate,
} from "../../utils/gregorian-date";
import {
  formatJalaliDate,
  getCurrentJalaliDate,
  getDaysInJalaliMonth,
  isValidJalaliDate,
  parseJalaliDate,
  type JalaliDate,
} from "../../utils/jalali-date";
import Button from "../button/button";
import Input from "../input/input";
import Modal from "../modal/modal";
import { DatepickerProps } from "../types";
import WheelPicker from "../wheel-picker/wheel-picker";
import "./datepicker.css";

const jalaliMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];
const gregorianMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WheelDatePicker: React.FC<DatepickerProps> = ({
  value,
  onChange,
  minYear: minYearProp,
  maxYear: maxYearProp,
  className,
  input,
  modal,
  calendarType = "jalali",
  button,
  ...wheelPickerProps
}) => {

  // Set RTL based on calendar type
  const rtl = calendarType === "jalali";

  // Select months array based on calendar type
  const months = calendarType === "jalali" ? jalaliMonths : gregorianMonths;

  // Set maxYear based on calendar type
  const maxYear = useMemo(() => {
    if (typeof maxYearProp === "number") return maxYearProp;
    return calendarType === "jalali"
      ? getCurrentJalaliDate().year
      : getCurrentGregorianDate().year;
  }, [calendarType, maxYearProp]);

  // Set minYear based on calendar type
  const minYear = useMemo(() => {
    if (typeof minYearProp === "number") return minYearProp;
    return calendarType === "jalali" ? 1300 : 1900;
  }, [calendarType, minYearProp]);

  // Always return a valid date object
  const getValidInitial = () => {
    if (value) {
      if (calendarType === "jalali") {
        return parseJalaliDate(value) || getCurrentJalaliDate();
      } else {
        return parseGregorianDate(value) || getCurrentGregorianDate();
      }
    }
    return calendarType === "jalali"
      ? getCurrentJalaliDate()
      : getCurrentGregorianDate();
  };

  // State for the selected value (committed)
  const [selected, setSelected] = useState<JalaliDate | GregorianDate>(
    getValidInitial
  );

  // State for modal open/close
  const [modalOpen, setModalOpen] = useState(false);

  // State for the value being picked in modal (not committed until Set)
  const [temp, setTemp] = useState<JalaliDate | GregorianDate>(selected);

  // Generate years array
  const years = useMemo(() => {
    const arr = [];
    for (let y = minYear; y <= maxYear; y++) arr.push(y.toString());
    return arr;
  }, [minYear, maxYear]);

  // Generate days in month based on calendar type
  const daysInMonth = useMemo(() => {
    return calendarType === "jalali"
      ? getDaysInJalaliMonth(
          (temp as JalaliDate).year,
          (temp as JalaliDate).month
        )
      : getDaysInGregorianMonth(
          (temp as GregorianDate).year,
          (temp as GregorianDate).month
        );
  }, [temp, calendarType]);

  const days = useMemo(() => {
    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
  }, [daysInMonth]);

  // Update temp.day if overflow
  useEffect(() => {
    if (temp.day > daysInMonth) setTemp((t) => ({ ...t, day: daysInMonth }));
  }, [daysInMonth, temp.day]);

  // Handlers for wheel pickers in modal
  const handleYearChange = (val: string) =>
    setTemp((t) => ({ ...t, year: Number(val) }));
  const handleMonthChange = (val: string) =>
    setTemp((t) => ({
      ...t,
      month:
        calendarType === "jalali"
          ? jalaliMonths.indexOf(val) + 1
          : gregorianMonths.indexOf(val) + 1,
    }));
  const handleDayChange = (val: string) =>
    setTemp((t) => ({ ...t, day: Number(val) }));

  // Handle Set/Cancel
  const handleSet = () => {
    setSelected(temp);
    setModalOpen(false);
    if (calendarType === "jalali") {
      if (isValidJalaliDate(temp as JalaliDate)) {
        const dateString = formatJalaliDate(temp as JalaliDate);
        onChange?.(dateString);
      }
    } else {
      if (isValidGregorianDate(temp as GregorianDate)) {
        const dateString = formatGregorianDate(temp as GregorianDate);
        onChange?.(dateString);
      }
    }
  };
  const handleCancel = () => {
    setTemp(selected);
    setModalOpen(false);
  };

  // Display value for input
  const displayValue = useMemo(() => {
    if (!value) return "";
    if (calendarType === "jalali") {
      return isValidJalaliDate(selected as JalaliDate)
        ? formatJalaliDate(selected as JalaliDate)
        : "";
    } else {
      return isValidGregorianDate(selected as GregorianDate)
        ? formatGregorianDate(selected as GregorianDate)
        : "";
    }
  }, [selected, calendarType, value]);

  // Create wheel picker components
  const dayWheel = (
    <WheelPicker
      items={days}
      onChange={handleDayChange}
      value={temp.day.toString()}
      containerClassName={"wd-datepicker-wheel-container"}
      visibleCount={3}
      {...wheelPickerProps}
    />
  );

  const monthWheel = (
    <WheelPicker
      items={months}
      onChange={handleMonthChange}
      value={months[temp.month - 1]}
      containerClassName={"wd-datepicker-wheel-container"}
      visibleCount={3}
      {...wheelPickerProps}
    />
  );

  const yearWheel = (
    <WheelPicker
      items={years}
      onChange={handleYearChange}
      value={temp.year.toString()}
      containerClassName={"wd-datepicker-wheel-container"}
      visibleCount={3}
      {...wheelPickerProps}
    />
  );

  // Order wheels based on RTL setting
  const wheelOrder =
    calendarType === "miladi"
      ? [yearWheel, monthWheel, dayWheel]
      : [dayWheel, monthWheel, yearWheel];

  return (
    <>
      <Input
        name={input?.name}
        readonly
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
        <div
          className={`wd-datepicker-modal-content ${
            rtl ? "wd-datepicker-rtl" : ""
          }`}
        >
          <div className={`wd-datepicker-wheels-container ${className || ""}`}>
            {wheelOrder}
          </div>
          <Button
            className="wd-datepicker-confirm-button"
            size="medium"
            onClick={handleSet}
            {...button}
          >
            {button?.text ? button.text : calendarType === "jalali" ? 'تایید' : 'set'}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default WheelDatePicker;
