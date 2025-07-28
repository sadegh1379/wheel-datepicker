import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "../components/button/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline"],
    },
    className: {
      control: { type: "text" },
    },
    style: {
      control: { type: "object" },
    },
    text: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Custom Title",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    text: "Custom Title",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    text: "Custom Title",
  },
};

export const CustomTitle: Story = {
  args: {
    text: "Custom Title",
  },
};
