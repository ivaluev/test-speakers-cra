import React from 'react';
import ButtonCMenu from './button-c-menu';
import { action } from '@storybook/addon-actions';
import styled from '@emotion/styled';

export default {
  title: 'Button-C-Menu',
  component: ButtonCMenu,
};

const ButtonCMenuPositioned = styled(ButtonCMenu)`
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const Normal = () => (
  <div style={{
    width: '100px',
    height: '100px',
    border: '1px solid red',
    position: 'relative'
  }}>
    <ButtonCMenuPositioned onClick={action('menu clicked')} />
  </div>
);
