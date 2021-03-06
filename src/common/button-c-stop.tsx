import React from 'react';
import styled from '@emotion/styled';
import { PropsClassName, PropsOnClick } from './types';
import { ButtonC } from './button-c';

export default function ButtonCStop({
  className,
  onClick
}: PropsClassName & PropsOnClick) {
  return (
    <ButtonCHovered className={className} onClick={onClick}>
       <IconStop />
    </ButtonCHovered>
  );
}

const ButtonCHovered = styled(ButtonC)`
  &:hover > span {
    background: blue;
  }
`;

export const IconStop = styled.span`
  width: 10px;
  height: 10px;
  background-color: grey;
`;