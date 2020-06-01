import React from 'react';
import { action } from '@storybook/addon-actions';
import styled from '@emotion/styled';
import ButtonCPlay from './button-c-play';

const ButtonCPlayPositioned = styled(ButtonCPlay)`
  position: absolute;
  top: 30px;
  left: 30px;
`;

export const Normal = () => (
  <div style={{
    width: '100%',
    position: 'relative'
  }}>
    <ButtonCPlayPositioned onClick={action('menu clicked')} />
  </div>
);

export default {
  title: 'Button-C-Play',
  component: ButtonCPlayPositioned,
};