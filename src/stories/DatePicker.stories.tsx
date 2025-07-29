import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import WheelDatePicker from '../components/datepicker/datepicker';
import { DatepickerProps } from '../components/types';

const meta = {
  title: 'Components/DatePicker',
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
    rtl: {
      control: { type: 'boolean' },
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
  },
  render: (args) => (
    <DatePickerWrapper modalProps={{ placement: "center" }} {...args}  />
  ),
};

export const WithLabel: Story = {
  args: {
  },
  render: (args) => (
    <DatePickerWrapper {...args} inputProps={{ label: "Select Date" }} />
  ),
};

export const WithCustomYearRange: Story = {
  args: {
    minYear: 1350,
    maxYear: 1410,
  },
  render: (args) => (
    <DatePickerWrapper {...args} inputProps={{ label: "Custom Year Range" }} minYear={1350} maxYear={1410} />
  ),
};

export const WithInitialValue: Story = {
  args: {
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

export const RTL: Story = {
  args: {
    rtl: true,
  },
  render: (args) => (
    <DatePickerWrapper {...args} inputProps={{ label: "انتخاب تاریخ" }} rtl={true} />
  ),
};

export const RTLWithInitialValue: Story = {
  args: {
    rtl: true,
    value: '1402/06/15',
  },
  render: (args) => {
    const [value, setValue] = useState('1402/06/15');
    return (
      <WheelDatePicker
        {...args}
        value={value}
        onChange={setValue}
        inputProps={{ label: "انتخاب تاریخ" }}
        rtl={true}
      />
    );
  },
};