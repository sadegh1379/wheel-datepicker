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
    label: {
      control: { type: 'text' },
    },
    minYear: {
      control: { type: 'number' },
    },
    maxYear: {
      control: { type: 'number' },
    },
    value: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
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
    name: 'default',
  },
  render: (args) => (
    <DatePickerWrapper {...args} />
  ),
};

export const WithLabel: Story = {
  args: {
    name: 'withLabel',
    label: 'Select Date',
  },
  render: (args) => (
    <DatePickerWrapper {...args} label="Select Date" />
  ),
};

export const WithCustomYearRange: Story = {
  args: {
    name: 'customYearRange',
    label: 'Custom Year Range',
    minYear: 1350,
    maxYear: 1410,
  },
  render: (args) => (
    <DatePickerWrapper {...args} label="Custom Year Range" minYear={1350} maxYear={1410} />
  ),
};

export const WithInitialValue: Story = {
  args: {
    name: 'withInitialValue',
    label: 'With Initial Value',
    value: '1402/06/15',
  },
  render: (args) => (
    <WheelDatePicker
      {...args}
      label="With Initial Value"
      value="1402/06/15"
      onChange={(date) => console.log('Selected date:', date)}
    />
  ),
};

export const WithCustomInputProps: Story = {
  args: {
    name: 'customInput',
    label: 'Custom Input',
    inputProps: {
      placeholder: 'Click to select date',
      style: { backgroundColor: '#f8f9fa' }
    },
  },
  render: (args) => (
    <DatePickerWrapper
      {...args}
      label="Custom Input"
      inputProps={{
        placeholder: 'Click to select date',
        style: { backgroundColor: '#f8f9fa' }
      }}
    />
  ),
};

export const WithCustomModalProps: Story = {
  args: {
    name: 'customModal',
    label: 'Custom Modal',
    modalProps: {
      placement: 'center',
      className: 'custom-modal'
    },
  },
  render: (args) => (
    <DatePickerWrapper
      {...args}
      label="Custom Modal"
      modalProps={{
        placement: 'center',
        className: 'custom-modal'
      }}
    />
  ),
};

export const WithCustomWheelPickerProps: Story = {
  args: {
    name: 'customWheelPicker',
    label: 'Custom Wheel Picker',
    wheelPickerProps: {
      visibleCount: 5,
      itemClassName: 'custom-wheel-item',
      indicatorClassName: 'custom-indicator'
    },
  },
  render: (args) => (
    <DatePickerWrapper
      {...args}
      label="Custom Wheel Picker"
      wheelPickerProps={{
        visibleCount: 5,
        itemClassName: 'custom-wheel-item',
        indicatorClassName: 'custom-indicator'
      }}
    />
  ),
};

export const MultipleDatePickers: Story = {
  args: {
    name: 'multiplePickers',
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <DatePickerWrapper {...args} label="Start Date" name="startDate" />
      <DatePickerWrapper {...args} label="End Date" name="endDate" />
    </div>
  ),
};

export const WithForm: Story = {
  args: {
    name: 'withForm',
  },
  render: (args) => (
    <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted'); }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <input type="text" placeholder="Name" />
        <DatePickerWrapper {...args} label="Birth Date" name="birthDate" />
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '0.25rem' }}>
          Submit
        </button>
      </div>
    </form>
  ),
}; 