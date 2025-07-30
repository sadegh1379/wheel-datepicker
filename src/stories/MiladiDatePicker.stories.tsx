import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import WheelDatePicker from '../components/datepicker/datepicker';
import { DatepickerProps } from '../components/types';

const meta = {
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
    inputProps: {
      control: { type: 'object' },
    },
    modalProps: {
      control: { type: 'object' },
    },
    buttonProps: {
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof WheelDatePicker>;

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
    <DatePickerWrapper modalProps={{ placement: "center" }} {...args}  />
  ),
};

export const WithLabel: Story = {
  args: {
    calendarType: 'miladi',
  },
  render: (args) => (
    <DatePickerWrapper {...args} inputProps={{ label: "Select Date" }} />
  ),
};

export const WithCustomYearRange: Story = {
  args: {
    calendarType: 'miladi',
    minYear: 1990,
    maxYear: 2030,
  },
  render: (args) => (
    <DatePickerWrapper {...args} inputProps={{ label: "Custom Year Range" }} minYear={1990} maxYear={2030} />
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