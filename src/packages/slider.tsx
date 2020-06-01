import React, { useState } from 'react';
import styled from '@emotion/styled';

type Props = {
  trackId: number,
  vol: number
}

export default function Slider({
  trackId,
  vol
}: Props) {

  const [volume, setVolume] = useState(vol);

  return (
    <SliderWrapper>
      <p>volume:</p>
      <SliderInput 
        type="range" 
        min="0" 
        max="1" 
        value={volume} 
        onChange={e => setVolume(+e.target.value)} 
        id="myRange" 
        step="0.1" 
      />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: .7rem;
`;

const SliderInput = styled.input`
  -webkit-appearance: none;
  margin-top: 7.5px;
  margin-bottom: 7.5px;
  width: 90%;
  height: 4px;
  background: #d3d3d3;
  outline: none;
  transition: opacity .2s;
  border-radius: 4px;
  &::-webkit-slider-thumb {
    cursor: w-resize;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #008EFF;
    /* background-color: #E91E63; */
    border-radius: 50%;
    /* cursor: pointer; */
  }
`;