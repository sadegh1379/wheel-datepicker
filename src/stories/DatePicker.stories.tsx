import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { useState } from 'react';
import WheelDatePicker from '../components/detepicker/datepicker';

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
const DatePickerWrapper = ({ children, ...props }: any) => {
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
    <DatePickerWrapper {...args} />
  ),
};

export const WithLabel: Story = {
  args: {
  },
  render: (args) => (
    <DatePickerWrapper {...args} label="Select Date" />
  ),
};

export const WithCustomYearRange: Story = {
  args: {
    minYear: 1350,
    maxYear: 1410,
  },
  render: (args) => (
    <DatePickerWrapper {...args} label="Custom Year Range" minYear={1350} maxYear={1410} />
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