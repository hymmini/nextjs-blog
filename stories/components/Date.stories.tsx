import React from "react";
import { Story, Meta } from "@storybook/react";
import Date, { DateProps } from "@cs/date";

export default {
  title: "Components/Date",
  component: Date,
} as Meta;

const Template: Story<DateProps> = (args) => <Date {...args} />;

export const EnDateString = Template.bind({});
EnDateString.args = {
  dateString: "2020-01-02",
  locale: "en",
};

export const CnDateString = Template.bind({});
CnDateString.args = {
  dateString: "2020-11-12",
  locale: "cn",
};

export const DefaultDateString = Template.bind({});
DefaultDateString.args = {
  dateString: "2020-01-02"
};
