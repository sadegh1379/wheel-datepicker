import type { Meta, StoryObj } from '@storybook/react-webpack5';
import WheelPicker from '../components/wheel-picker/wheel-picker';

const meta = {
  title: 'Components/WheelPicker',
  component: WheelPicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: { control: { type: 'object' } },
    value: { control: { type: 'text' } },
    onChange: { action: 'changed' },
    visibleCount: { control: { type: 'number' } },
    itemClassName: { control: { type: 'text' } },
    containerClassName: { control: { type: 'text' } },
    className: { control: { type: 'text' } },
    indicatorClassName: { control: { type: 'text' } },
  },
  args: {
    items: ['Option 1', 'Option 2', 'Option 3'],
    value: 'Option 1',
  },
} satisfies Meta<typeof WheelPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithFiveOptions: Story = {
  args: {
    items: ['One', 'Two', 'Three', 'Four', 'Five'],
    value: 'Three',
  },
};

export const SecondSelected: Story = {
  args: {
    value: 'Option 2',
  },
};
