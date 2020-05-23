import React from 'react';
import { Track } from '../../data/tracks/types';
import styled from '@emotion/styled';

type Props = {
  track: Track
}

export default function TrackCard({
  track
} : Props) {
  return (
    <TrackCardWrapper>
      <TrackName>{track.url}</TrackName>
      <section>volume: {track.vol}</section>
    </TrackCardWrapper>
  );
}

const TrackName = styled.h3`
  font-size: 1.2rem;
  color: #aaa;
`;

const TrackCardWrapper = styled.li`
  cursor: pointer;
  padding: 1em .5em;
  margin-top: 1em;
  background-color: white;
  /* box-shadow: 0 1px 2px 0 rgba(34,36,38,.15); */
  box-shadow: 0 1px 2px #ccc;
  &:first-child {
    margin-top: 0;
  }
  &:hover {
    box-shadow: 0 2px 8px #bbb;
  }
`;