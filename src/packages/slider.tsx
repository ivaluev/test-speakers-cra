import React from 'react';
import styled from '@emotion/styled';

type Props = {
  trackId: number,
  vol: number
}

export default function Slider({
  trackId,
  vol
}: Props) {
  return (
    <SliderWrapper>
      <p>volume:</p>
      <SliderInput type="range" min="0" max="1" value={vol} id="myRange" step="0.1" />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.span`
  display: inline-block;
  width: 100%;
  margin-top: .7rem;
`;

const SliderInput = styled.input`
  width: 90%;
`;