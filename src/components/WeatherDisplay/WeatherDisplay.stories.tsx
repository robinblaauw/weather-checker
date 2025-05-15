import type { Meta, StoryObj } from "@storybook/react";

import { WeatherDisplay } from "./WeatherDisplay";
import { dummy_data } from "./weatherDisplayDummyData";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/WeatherDisplay",
  component: WeatherDisplay,
  tags: ["autodocs"],
  argTypes: {
    date: {
      control: false,
    },
    active: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof WeatherDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: dummy_data.forecastday[0],
  },
};
