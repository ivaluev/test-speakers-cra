import React, { useState } from 'react';
import { Track } from '../../data/tracks/types';
import styled from '@emotion/styled';
import Slider from '../../packages/slider';
import ButtonCPlay from '../../packages/button-c-play';
import ButtonCDelete from '../../packages/button-c-delete';

export interface SpeakerTrackProps {
  track: Track
}

export default function SpeakerTrack({
  track
}: SpeakerTrackProps) {

  // we load default volume for a track but keep ours in local track state
  // but what if we switch to another page and then return? our volume should be persisted!
  // now we also loose assined tracks!
  const [volume, setVolume] = useState(track.vol);

  return (
    <Wrapper>
      <TrackName>{track.url}</TrackName>
      <TrackVol><Slider volume={volume} onChange={setVolume} /></TrackVol>
      <TrackActions>
        <ButtonCPlay />
        <ButtonCDelete />
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
  display: flex;
  justify-content: flex-end;
  flex: 0 0 90px;
  & > * {
    margin-left: 0.7em;
  }
`;