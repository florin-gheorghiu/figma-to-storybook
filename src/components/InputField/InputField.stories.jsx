import React from 'react';
import { InputField } from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    state: { 
      control: { type: 'select', options: ['__Default', '__Error', '__Disable', '__Success', '__Focus'] }
    },
    showMessage: { control: 'boolean' },
    message: { control: 'text' },
    onChange: { action: 'changed' }
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  state: '__Default',
  showMessage: true,
  message: 'Message',
};

export const Error = Template.bind({});
Error.args = {
  ...Default.args,
  state: '__Error',
  message: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  state: '__Disable',
  message: 'This input is disabled',
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  state: '__Success',
  message: 'Success message',
};

export const Focus = Template.bind({});
Focus.args = {
  ...Default.args,
  state: '__Focus',
};