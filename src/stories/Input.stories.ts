import type { Meta, StoryObj } from '@storybook/react-webpack5';
import Input from '../components/input/input';

const meta = {
  title: 'Components/Input',
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
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter birthday text...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Birthday',
    placeholder: 'Enter your birthday',
  },
};

export const WithError: Story = {
  args: {
    label: 'Birthday ',
    placeholder: 'Enter your birthday ',
    error: 'Birthday is invalid',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Birthday',
    placeholder: 'This birthday input is disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Birthday Field',
    placeholder: 'This birthday field is required',
    required: true,
  },
};

export const WithValue: Story = {
  args: {
    label: 'Birthday birthday',
    value: '1402/01/01',
    placeholder: 'Enter your birthday birthday',
  },
};
