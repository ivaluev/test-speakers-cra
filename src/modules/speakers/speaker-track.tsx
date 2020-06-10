import React, { useState, useCallback } from 'react';
import { Track } from '../../data/tracks/types';
import styled from '@emotion/styled';
import Slider from '../../packages/slider';
import ButtonCPlay from '../../packages/button-c-play';
import ButtonCDelete from '../../packages/button-c-delete';
import { useAppSelector } from '../../data/store';
import { actionSpeakerSetTrackVol } from '../../data/speakers/actions';
import { useDispatch } from 'react-redux';

export interface SpeakerTrackProps {
  speakerId: number,
  trackId: number
}

export default function SpeakerTrack({
  speakerId,
  trackId
}: SpeakerTrackProps) {

  // we load default volume for a track but keep ours in local track state
  // but what if we switch to another page and then return? our volume should be persisted!
  // now we also loose assined tracks!
  const trackVol = useAppSelector(state => state.speakers
    .speakers.find(s => s.id === speakerId)!
    .tracks.find(t => t.id === trackId)!).vol;
  const trackUrl = useAppSelector(state => state.speakers
    .speakers.find(s => s.id === speakerId)!
    .tracks.find(t => t.id === trackId)!).url;

  const dispatch = useDispatch();

  const setTrackVol = useCallback((vol: number) => {
    dispatch(actionSpeakerSetTrackVol(speakerId, trackId, vol));
  }, [speakerId, trackId, dispatch]);

  console.log('SpeakerTrack vol', trackVol);
  
  return (
    <Wrapper>
      <TrackName>{trackUrl}</TrackName>
      <TrackVol><Slider volume={trackVol} onChange={setTrackVol} /></TrackVol>
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