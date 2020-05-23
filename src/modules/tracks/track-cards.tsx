import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../data/store';
import { tracksRequest } from '../../data/tracks/actions';
import { Track } from '../../data/tracks/types';
import Separator from '../common/separator';
import TrackCard from './track-card';

export default function TrackCards() {
  const dispatch = useDispatch();
  const tracks = useAppSelector<Track[]>(state => state.tracks.tracks);

  useEffect(() => {
    dispatch(tracksRequest());
  }, [dispatch]);

  return (
    <Wrapper>
      <TracksHeader>Tracks</TracksHeader>
      <Separator />
      <TracksList>
        {tracks.map(t => <TrackCard key={t.id} track={t} />)}
      </TracksList>
    </Wrapper>
  );
}


const Wrapper = styled.div`
  height: 100%;
`;

const TracksHeader = styled.h1`
  padding: 1em 1em;
`;

const TracksList = styled.ul`
  /* background: red; */
  padding: 1em 0.5em;
`;