import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import AppSpeaker from './speaker';
import { RootState } from '../../data/store';
import { Speaker } from '../../data/speakers/types';
import { Dispatch } from 'redux';
import { speakersRequest } from '../../data/speakers/actions';
import styled from '@emotion/styled';

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
    <Wrapper ref={wrapperRef}>
      {speakers.map(s => <AppSpeaker key={s.id} speaker={s} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
`;

const mapStateToProps = (state: RootState) => ({
  speakers: state.speakers.speakers
});

export default connect(mapStateToProps)(AppSpeakers);