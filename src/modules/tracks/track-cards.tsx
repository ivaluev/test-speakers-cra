import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../data/store';
import { actionTracksRequest } from '../../data/tracks/actions';
import { Track } from '../../data/tracks/types';
import Separator from '../../packages/separator';
import TrackCard from './track-card';
import { Header } from '../../packages/header';

export default function TrackCards() {
  const dispatch = useDispatch();
  const tracks = useAppSelector<Track[]>(state => state.tracks.tracks);

  useEffect(() => {
    dispatch(actionTracksRequest());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>Tracks</Header>
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

const TracksList = styled.ul`
  /* background: red; */
  padding: 1em 0.5em;
`;