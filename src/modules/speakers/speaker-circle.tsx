import React from 'react';
import { PropsSelected } from '../../types';
import styled from '@emotion/styled';
import { lighten, darken } from 'polished';

const COL_1 = '#0099ff';
const COL_2 = '#d0e7f6';
const COL_SELECTED = 'hotpink';

export default function SpeakerCicle({
  isSelected
}: PropsSelected) {
  return (
    <CircleOuter>
      <CircleKnob />
    </CircleOuter>
  );
}

const CircleOuter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 6px solid ${COL_1};
  color: white;
  background: radial-gradient(${COL_1}, ${lighten(0.9, COL_1)} 85%);
`;
const CircleKnob = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(${COL_2}, ${darken(0.1, COL_1)} 70%);
  /* border: 1px solid #666; */
`;