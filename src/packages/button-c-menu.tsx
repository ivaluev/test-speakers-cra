import React from 'react';
import styled from '@emotion/styled';
import { PropsClassName, PropsOnClick } from './types';
import { ButtonC } from './button-c';

export default function ButtonCMenu({
  className,
  onClick
}: PropsClassName & PropsOnClick) {
  return (
    <ButtonCHovered className={className} onClick={onClick}>
      <IconMenu />
    </ButtonCHovered>
  );
}

const ButtonCHovered = styled(ButtonC)`
  &:hover > span {
    background-color: blue;
  }
`;

const IconMenu = styled.span`
  width: 15px;
  height: 2px;
  background-color: grey;
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    top: 9px;
    background-color: inherit;
  }
  &:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    bottom: 9px;
    background-color: inherit;
  }
`;

