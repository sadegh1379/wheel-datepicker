import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Input from '../components/input/input';

const meta = {
  title: 'Components/Jalali/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    name: {
      control: { type: 'text' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '1402/01/01',
    placeholder: 'تاریخ تولد خود را وارد کنید',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'تاریخ تولد',
    value: '1402/01/01',
    placeholder: 'تاریخ تولد خود را وارد کنید',
  },
};

export const WithError: Story = {
  args: {
    label: 'تاریخ تولد',
    value: '1402/01/01',
    placeholder: 'تاریخ تولد خود را وارد کنید',
    error: 'تاریخ تولد نامعتبر است',
  },
};

export const Disabled: Story = {
  args: {
    label: 'تاریخ تولد غیرفعال',
    value: '1402/01/01',
    placeholder: 'این فیلد تاریخ تولد غیرفعال است',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'فیلد تاریخ تولد اجباری',
    value: '1402/01/01',
    placeholder: 'این فیلد تاریخ تولد اجباری است',
  },
};

export const WithValue: Story = {
  args: {
    label: 'تاریخ تولد',
    value: '1402/01/01',
    placeholder: 'تاریخ تولد خود را وارد کنید',
  },
}; 