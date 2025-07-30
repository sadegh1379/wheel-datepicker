import React from "react";

interface WheelPickerProps {
  items: string[];
  onChange?: (item: string) => void;
  value?: string;
  visibleCount?: number;
  itemClassName?: string;
  containerClassName?: string;
  className?: string;
  indicatorClassName?: string;
  itemHeight?: number
}

interface InputProps {
  label?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  readonly?: boolean;
  onClick?: () => void;
  rtl?: boolean;
}

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
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

interface DatepickerProps {
    value?: string;
    onChange?: (date: string) => void;
    minYear?: number;
    maxYear?: number;
    className?: string;
    calendarType?: 'jalali' | 'miladi';
    wheelPickerProps?: Omit<
      WheelPickerProps,
      'onChange' | 'defaultValue' | 'items' | 'containerClassName' | 'defaultValue'
    >;
    inputProps?: Omit<InputProps, 'onChange' | 'onClick' | 'readOnly' | 'value'>;
    modalProps?: Omit<ModalProps, 'isOpen' | 'onClose' | 'children'>;
    buttonProps?: Omit<ButtonProps, 'onClick'>
    
}

export type { WheelPickerProps, InputProps, ButtonProps, DatepickerProps, ModalProps }