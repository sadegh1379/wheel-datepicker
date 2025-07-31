import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import WheelDatePicker from '../components/datepicker/datepicker';
import { DatepickerProps } from '../components/types';

const meta: Meta<DatepickerProps> = {
  title: 'Components/Jalali/DatePicker',
  component: WheelDatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    minYear: {
      control: { type: 'number' },
    },
    maxYear: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    calendarType: {
      control: { type: 'select' },
      options: ['jalali', 'miladi'],
    },
    wheelPickerProps: {
      control: { type: 'object' },
    },
    input: {
      control: { type: 'object' },
    },
    modal: {
      control: { type: 'object' },
    },
    button: {
      control: { type: 'object' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Wrapper component to handle date picker state
const DatePickerWrapper = ({ ...props }: DatepickerProps) => {
  const [value, setValue] = useState('');
  return (
    <WheelDatePicker
      {...props}
      value={value}
      onChange={setValue}
    />
  );
};

export const Default: Story = {
  args: {
    calendarType: 'jalali',
    modal: {
      title: "تاریخ",
    }
  },
  render: (args) => (
    <DatePickerWrapper modal={{ placement: "center" }} {...args}  />
  ),
};

export const WithLabel: Story = {
  args: {
    calendarType: 'jalali',
    input: { label: "انتخاب تاریخ" },
  },
  render: (args) => (
    <DatePickerWrapper {...args} />
  ),
};

export const WithCustomYearRange: Story = {
  args: {
    calendarType: 'jalali',
    minYear: 1350,
    maxYear: 1410,
    input: { label: "محدوده سال سفارشی" },
  },
  render: (args) => (
    <DatePickerWrapper {...args} minYear={1350} maxYear={1410} />
  ),
};

export const WithInitialValue: Story = {
  args: {
    calendarType: 'jalali',
    value: '1402/06/15',
  },
  render: (args) => {
    const [value, setValue] = useState('1402/06/15');
    return (
      <WheelDatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithCalendarType: Story = {
  args: {
    calendarType: 'jalali',
    input: { label: "انتخاب تاریخ" },
  },
  render: (args) => (
    <DatePickerWrapper {...args} />
  ),
}; 