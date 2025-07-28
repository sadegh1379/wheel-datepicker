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
  onClick?: () => void
}

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  text: React.ReactNode
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  placement?: 'bottom' | 'center';
  children: React.ReactNode;
  className?: string;
}

interface DatepickerProps {
    value?: string;
    onChange?: (date: string) => void;
    minYear?: number;
    maxYear?: number;
    className?: string;
    wheelPickerProps?: Omit<
    WheelPickerProps,
      'onChange' | 'defaultValue' | 'items' | 'containerClassName' | 'defaultValue'
    >;
    inputProps?: Omit<InputProps, 'onChange' | 'onClick' | 'readOnly' | 'value'>;
    modalProps?: Omit<ModalProps, 'isOpen' | 'onClose' | 'children' | 'placement'>;
    buttonProps?: Omit<ButtonProps, 'onClick'>
    
}

export type { WheelPickerProps, InputProps, ButtonProps, DatepickerProps, ModalProps }