import React from 'react';
import ButtonCMenu from './button-c-menu';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Button-C-Menu',
  component: ButtonCMenu
};

export const Normal = () => <ButtonCMenu onClick={action('menu clicked')} />
