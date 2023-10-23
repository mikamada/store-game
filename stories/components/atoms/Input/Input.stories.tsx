import React from 'react';
import { Meta } from '@storybook/react';
import Input, { InputProps } from '../../../../components/atoms/Input';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template: React.FC<InputProps> = (args) => <Input {...args} />;
export const Default = () => <Template id='name' label="Full name" />;
