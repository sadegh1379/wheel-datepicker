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

export type { WheelPickerProps }