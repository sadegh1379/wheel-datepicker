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
    className: {
      control: { type: "text" },
    },
   
    children: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Custom Title",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Custom Title",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Custom Title",
  },
};

export const CustomTitle: Story = {
  args: {
    children: "Custom Title",
  },
};
