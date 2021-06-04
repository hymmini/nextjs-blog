import React from "react";
import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "@cs/LocalButton";

export default {
  title: "Components/LocalButton",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  locale: "en",
};

export const Secondary = Template.bind({});
Secondary.args = {
  locale: "cn",
};
