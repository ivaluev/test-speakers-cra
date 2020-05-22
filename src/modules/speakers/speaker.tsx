import React from 'react';
import styled from '@emotion/styled';
import { Speaker } from '../../types';

type Position = {
  x: number,
  y: number
}

export default function AppSpeaker({ speaker }: { speaker: Speaker } ) {
  const {coord, tracks} = speaker; 

  return (
    <AppSpeakerDiv x={coord[0]} y={coord[1]}>{tracks.length}</AppSpeakerDiv>
  );
}

const AppSpeakerDiv = styled.div<Position>`
  position: absolute;
  top: ${props => props.x}px;
  left: ${props => props.y}px;
  width: 70px;
  height: 70px;
  background-color: hotpink;
  border-radius: 50%;
`;