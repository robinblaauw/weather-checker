import type { Meta, StoryObj } from "@storybook/react";

import { CountriesDropdown } from "./CountriesDropdown";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/CountriesDropdown",
  component: CountriesDropdown,
  tags: ["autodocs"],
} satisfies Meta<typeof CountriesDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};
