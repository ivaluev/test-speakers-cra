import React from 'react';
import styled from '@emotion/styled';

type Props = {
  trackId: number,
  vol: number
}

export default function TrackVolumeSlider({
  trackId,
  vol
}: Props) {
  return (
    <SliderWrapper>
      <p>volume:</p>
      <SliderInput type="range" min="0" max="1" value={vol} id="myRange" readOnly step="0.1" />
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  margin-top: .7rem;
`;

const SliderInput = styled.input`
  
`;