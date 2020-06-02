import React from 'react';
import styled from '@emotion/styled';
import { PropsClassName, PropsOnClick } from './types';
import { ButtonC } from './button-c';

export default function ButtonCDelete({
  className,
  onClick
}: PropsClassName & PropsOnClick) {
  return (
    <ButtonCHovered className={className} onClick={onClick}>
       <IconDelete />
    </ButtonCHovered>
  );
}

const ButtonCHovered = styled(ButtonC)`
  &:hover > span {
    background: blue;
  }
`;

export const IconDelete = styled.span`
  width: 10px;
  height: 10px;
  background-color: grey;
`;