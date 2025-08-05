import React from 'react';

interface WheelPickerProps {
  items: string[];
  onChange?: (item: string) => void;
  value?: string;
  visibleCount?: 1 | 3 | 5 | 7;
  itemClassName?: string;
  containerClassName?: string;
  scrollContainerClassName?: string;
  indicatorClassName?: string;
  itemHeight?: number;
  indicatorBorderColor?: string;
  indicatorBorderWidth?: number;
}

interface InputProps {
  label?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  onClick?: () => void;
  rtl?: boolean;
}

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  text?: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  placement?: 'bottom' | 'center';
  children: React.ReactNode;
  className?: string;
  rtl?: boolean;
  closeIcon?: React.ReactNode;
}

type DatepickerInputProps = Omit<InputProps, 'onChange' | 'onClick' | 'readOnly' | 'value'>;
type DatepickerModalProps = Omit<ModalProps, 'isOpen' | 'onClose' | 'children'>;
type DatepickerButtonProps = Omit<ButtonProps, 'onClick' | 'children'>;

interface DatepickerProps
  extends Omit<
    WheelPickerProps,
    'onChange' | 'defaultValue' | 'items' | 'containerClassName' | 'defaultValue'
  > {
  value?: string;
  onChange?: (date: string) => void;
  minYear?: number;
  maxYear?: number;
  className?: string;
  calendarType?: 'jalali' | 'miladi';
  input?: DatepickerInputProps;
  modal?: DatepickerModalProps;
  button?: DatepickerButtonProps;
}



export type { WheelPickerProps, InputProps, ButtonProps, DatepickerProps, ModalProps, DatepickerButtonProps, DatepickerInputProps, DatepickerModalProps };
