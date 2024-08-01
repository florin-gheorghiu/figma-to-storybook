import React from 'react';
import { LabelText } from './LabelText'; // Make sure this import path is correct

export default {
  title: 'Components/LabelText',
  component: LabelText,
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = (args) => <LabelText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  text: 'This is a very long label text to see how it wraps',
};