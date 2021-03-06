import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store';
import { actionTracksRequest } from '../../store/tracks/actions';
import { Track } from '../../store/tracks/types';
import Separator from '../../common/separator';
import TrackCard from './track-card';
import { Header } from '../../common/header';

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
        {tracks.map(t => <TrackCard key={t.id} trackId={t.id} />)}
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