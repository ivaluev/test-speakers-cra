import React from 'react';
import { Track } from '../../data/tracks/types';
import styled from '@emotion/styled';
import Slider from '../../packages/slider';

export interface SpeakerTrackProps {
  track: Track
}

export default function SpeakerTrack({
  track
}: SpeakerTrackProps) {
  return (
    <Wrapper>
      <TrackName>{track.url}</TrackName>
      <TrackVol><Slider trackId={track.id} vol={track.vol} /></TrackVol>
      <TrackActions>
        <span>BP</span>
        <span>DL</span>
      </TrackActions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: .9em;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gainsboro;
  /* box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.3); */
`;

const TrackName = styled.div`
  flex: 0 0 200px;
`;

const TrackVol = styled.div`
  flex: 1 1 auto; 
`;

const TrackActions = styled.div`
  flex: 0 0 60px;
`;