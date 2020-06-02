import React from 'react';
import { Track } from '../../data/tracks/types';
import styled from '@emotion/styled';
import Slider from '../../packages/slider';
import { Label } from '../../packages/label';
import { Button } from '../../packages/button-r-primary';
import { useDispatch } from 'react-redux';
import { actionTrackAssign } from '../../data/speakers/actions';
import { useAppSelector } from '../../data/store';

type Props = {
  track: Track
}

export default function TrackCard({
  track
} : Props) {
  const dispatch = useDispatch();
  const assignedToCount = useAppSelector<number>(state => {
    const result = state.speakers.speakers
      .filter(s => s.tracks.some(t => t.id === track.id)) 
      .length;
    return result;
  });

  function onChange(volume: number) {
  }

  return (
    <TrackCardWrapper>
      <TrackHandleCol >
        <TrackHandle />
      </TrackHandleCol>
      <TrackInfoCol>
        <TrackInfoName>{track.url}</TrackInfoName>
        <Slider volume={track.vol} onChange={onChange} />
      </TrackInfoCol>
      <TrackAssignedCol>
        <AssignedInfo>
          Назначен на <Label>{assignedToCount}</Label>
        </AssignedInfo>
        <AssignActions>
          <Button onClick={() => dispatch(actionTrackAssign(track))}>Назначить</Button>
        </AssignActions>
      </TrackAssignedCol>
    </TrackCardWrapper>
  );
}

const AssignActions = styled.div`
  text-align: right;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const AssignedInfo = styled.div`
  text-align: right;
`;

const TrackAssignedCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackInfoCol = styled.div`
  flex: 1;
`;

const TrackInfoName = styled.h3`
  font-size: 1.2rem;
  color: #aaa;
`;

const TrackHandleCol = styled.div`
  width: 2.7em;
  padding: 0 1rem;
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
    top: 12px;
    /* left: 16px; */
  }
  &:after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    bottom: 12px;
    /* left: 16px; */
  }
`;

const TrackCardWrapper = styled.li`
  padding: 1em .5em;
  padding-right: 1rem;
  margin-top: 1em;
  &:first-of-type {
    margin-top: 0;
  }
  /* box-shadow: 0 1px 2px #ccc; */
  /* &:hover {
    box-shadow: 0 2px 8px #bbb;
  } */
  display: flex;
  /* background-color: white; */
  background-color: #202F3C;
`;