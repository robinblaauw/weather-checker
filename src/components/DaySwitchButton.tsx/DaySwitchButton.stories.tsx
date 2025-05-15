import type { Meta, StoryObj } from "@storybook/react";

import { DaySwitchButton } from "./DaySwitchButton";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/DaySwitchButton",
  component: DaySwitchButton,
  tags: ["autodocs"],
  argTypes: {
    date: {
      control: false,
    },
    active: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof DaySwitchButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    active: false,
    date: "2023-07-22",
  },
};
