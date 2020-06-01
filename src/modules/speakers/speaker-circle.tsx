import React from 'react';
import { PropsSelected, PropsDelay } from '../../types';
import styled from '@emotion/styled';
import { lighten, darken } from 'polished';
import { keyframes } from '@emotion/core';
import { PropsOnClick } from '../../packages/types';

const COL_1 = '#0099ff';
const COL_2 = '#d0e7f6';

export default function SpeakerCircle({
  isSelected,
  onClick
}: PropsSelected & PropsOnClick) {
  return (
    <Container onClick={onClick}>
      <CircleGlow delay={-3} isSelected={isSelected} />
      <CircleGlow delay={-2} isSelected={isSelected} />
      <CircleGlow delay={-1} isSelected={isSelected} />
      <CircleOuter isSelected={isSelected}>
        <CircleKnob />
      </CircleOuter>
    </Container>
  );
}

const Container = styled.span`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
`;

const CircleOuter = styled.div<PropsSelected>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: white;
  background: radial-gradient(${COL_1}, ${lighten(0.9, COL_1)} 85%);
  border-radius: 50%;
  border: 6px solid ${props => props.isSelected ? '#e91e63' : '#3f51b5'};
  cursor: pointer;
  &:hover {
    border-color: #e91e63;
  }
`;
const CircleKnob = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(${COL_2}, ${darken(0.1, COL_1)} 70%);
  /* border: 1px solid #666; */
`;

const scaleIn = keyframes`
  from {
    transform: scale(.5, .5);
    opacity: .5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
`;

const CircleGlow = styled.div<PropsDelay & PropsSelected>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 60px;
  height: 60px;
  opacity: 0;
  animation: ${scaleIn} 4s infinite cubic-bezier(.36, .11, .89, .32);
  animation-delay: ${props => props.delay}s;
  animation-play-state: ${props => props.isSelected ? 'paused' : 'initial'};
`;
