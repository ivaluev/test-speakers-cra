import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import AppSpeaker from './speaker';
import { RootState } from '../../data/store';
import { Speaker } from '../../data/speakers/types';
import { Dispatch } from 'redux';
import { speakersRequest } from '../../data/speakers/actions';
import styled from '@emotion/styled';
import Separator from '../common/separator';

type Props = {
  speakers: Speaker[]
  dispatch: Dispatch
};

function AppSpeakers({ speakers, dispatch }: Props) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let w = 0, h = 0;
    if (wrapperRef.current) {
      w = wrapperRef.current.clientWidth - 70;
      h = wrapperRef.current.clientHeight - 70;
    }
    console.log('size', w, h);
    dispatch(speakersRequest(w, h));
  }, [dispatch]);

  return (
    <Wrapper>
      <SpeakersHeader>Speakers</SpeakersHeader>
      <Separator />
      <SpeakersWrapper ref={wrapperRef}>
        {speakers.map(s => <AppSpeaker key={s.id} speaker={s} />)}
      </SpeakersWrapper>
    </Wrapper>
  );
}

const SpeakersWrapper = styled.div`
  flex: 1 1 auto;
  /* background-position-x: -2px; */
  /* background-position-y: -2px; */
  background-size: 100px 100px;
  background-image: radial-gradient(circle, #575757 1px, rgba(0, 0, 0, 0) 1px);
  /* background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(228, 228, 228) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(228, 228, 228) 1px, transparent 1px); */
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SpeakersHeader = styled.h1`
  font-size: 1.5rem;
  padding: 1em 1em;
`;

const mapStateToProps = (state: RootState) => ({
  speakers: state.speakers.speakers
});

export default connect(mapStateToProps)(AppSpeakers);