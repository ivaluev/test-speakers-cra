import React from 'react';
import { Track } from '../../data/tracks/types';
import styled from '@emotion/styled';
import TrackVolumeSlider from '../common/track-volume-slider';

type Props = {
  track: Track
}

export default function TrackCard({
  track
} : Props) {
  return (
    <TrackCardWrapper draggable="true">
      <TrackHandleWrapper >
        <TrackHandle />
      </TrackHandleWrapper>
      <TrackInfoWrappper>
        <TrackInfoName>{track.url}</TrackInfoName>
        <TrackVolumeSlider trackId={track.id} vol={track.vol} />
      </TrackInfoWrappper>
      <TrackAssignedCol>7</TrackAssignedCol>
    </TrackCardWrapper>
  );
}

const TrackAssignedCol = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #aaa;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  font-size: 1.1rem;
  cursor: pointer;
`;

const TrackInfoWrappper = styled.div`
  flex: 1;
`;

const TrackInfoName = styled.h3`
  font-size: 1.2rem;
  color: #aaa;
`;

const TrackHandleWrapper = styled.div`
  width: 2em;
  padding-left: 1rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: move;
`;

const TrackHandle = styled.span`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  &:before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 16px;
    left: 16px;
  }
  &:after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
`;

const TrackCardWrapper = styled.li`
  padding: 1em .5em;
  padding-right: 1rem;
  margin-top: 1em;
  &:first-of-type {
    margin-top: 0;
  }
  box-shadow: 0 1px 2px #ccc;
  &:hover {
    box-shadow: 0 2px 8px #bbb;
  }
  display: flex;
  background-color: white;
`;