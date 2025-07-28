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

}

interface ButtonProps{

}

interface ModalProps {

}

interface DatepickerProps {
    value?: string;
    onChange?: (date: string) => void;
    minYear?: number;
    maxYear?: number;
    className?: string;
    name: string;
    label?: string;
    wheelPickerProps?: Omit<
    WheelPickerProps,
      'onChange' | 'defaultValue' | 'items' | 'containerClassName' | 'defaultValue'
    >;
    inputProps?: Omit<InputProps, 'name' | 'onChange' | 'onClick' | 'readOnly' | 'value' | 'label'>;
    modalProps?: ModalProps;
}

export type { WheelPickerProps, InputProps, ButtonProps, DatepickerProps, ModalProps }