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
    value: '1402/01/01',
    placeholder: 'Enter your birthday',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Birthday',
    value: '1402/01/01',
    placeholder: 'Enter your birthday',
  },
};

export const WithError: Story = {
  args: {
    label: 'Birthday ',
    value: '1402/01/01',
    placeholder: 'Enter your birthday ',
    error: 'Birthday is invalid',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Birthday',
    value: '1402/01/01',
    placeholder: 'This birthday input is disabled',
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Birthday Field',
    value: '1402/01/01',
    placeholder: 'This birthday field is required',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Birthday',
    value: '1402/01/01',
    placeholder: 'Enter your birthday',
  },
};
