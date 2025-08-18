import React from 'react';
import WheelPicker from '../../wheel-picker/wheel-picker';
import { WheelPickerProps } from '../../types';

interface CreateWheelProps {
  items: string[];
  onChange: (val: string) => void;
  value: string;
  wheelPickerProps?: Partial<WheelPickerProps>;
}

export const createDayWheel = ({
  items,
  onChange,
  value,
  wheelPickerProps
}: CreateWheelProps): React.ReactElement => {
  return React.createElement(WheelPicker, {
    items,
    onChange,
    value,
    containerClassName: 'wd-datepicker-wheel-container',
    visibleCount: 3,
    ...wheelPickerProps
  });
};

export const createMonthWheel = ({
  items,
  onChange,
  value,
  wheelPickerProps
}: CreateWheelProps): React.ReactElement => {
  return React.createElement(WheelPicker, {
    items,
    onChange,
    value,
    containerClassName: 'wd-datepicker-wheel-container',
    visibleCount: 3,
    ...wheelPickerProps
  });
};

export const createYearWheel = ({
  items,
  onChange,
  value,
  wheelPickerProps
}: CreateWheelProps): React.ReactElement => {
  return React.createElement(WheelPicker, {
    items,
    onChange,
    value,
    containerClassName: 'wd-datepicker-wheel-container',
    visibleCount: 3,
    ...wheelPickerProps
  });
};
