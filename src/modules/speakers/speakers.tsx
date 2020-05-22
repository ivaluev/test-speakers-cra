import React, { useEffect } from 'react';
import { RootState, Speaker } from '../../types';
import { connect } from 'react-redux';
import AppSpeaker from './speaker';

type Props = {
  speakers: Speaker[]
};

function AppSpeakers({ speakers }: Props) {
  useEffect(() => {

  }, []);

  return (
    <>
      {speakers.map(s => <AppSpeaker speaker={s} />)}
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  speakers: state.speakers
});

export default connect(mapStateToProps)(AppSpeakers);