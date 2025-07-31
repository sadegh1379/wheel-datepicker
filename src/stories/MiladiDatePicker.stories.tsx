import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import WheelDatePicker from '../components/datepicker/datepicker';
import { DatepickerProps } from '../components/types';

const meta: Meta<DatepickerProps> = {
  title: 'Components/Miladi/DatePicker',
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
    calendarType: 'miladi',
  },
  render: (args) => (
    <DatePickerWrapper modal={{ placement: "center" }} {...args}  />
  ),
};

export const WithLabel: Story = {
  args: {
    calendarType: 'miladi',
    input: { label: "Select Date" },
  },
  render: (args) => (
    <DatePickerWrapper {...args} />
  ),
};

export const WithCustomYearRange: Story = {
  args: {
    calendarType: 'miladi',
    minYear: 1990,
    maxYear: 2030,
    input: { label: "Custom Year Range" },
  },
  render: (args) => (
    <DatePickerWrapper {...args} />
  ),
};

export const WithInitialValue: Story = {
  args: {
    calendarType: 'miladi',
    value: '2023/09/06',
  },
  render: (args) => {
    const [value, setValue] = useState('2023/09/06');
    return (
      <WheelDatePicker
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
}; 