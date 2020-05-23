import React from 'react';
import styled from '@emotion/styled';
import { Dispatch } from 'redux';
import { Speaker, Offset } from '../../data/speakers/types';
import { connect } from 'react-redux';
import { speakersSelect, speakersDelelect } from '../../data/speakers/actions';
import { RootState } from '../../data/store';

type PropsSelected = {
  isSelected: boolean
}

type Props = {
  speaker: Speaker,
  isSelected: boolean,
  dispatch: Dispatch
}

function AppSpeaker({ speaker, isSelected, dispatch }: Props) {
  const {coord, tracks} = speaker; 

  function toggleSpeakerSelection() {
    isSelected 
      ? dispatch(speakersDelelect([speaker.id]))
      : dispatch(speakersSelect([speaker.id]));
    
  }

  return (
    <AppSpeakerDiv 
      w={coord[0]} 
      h={coord[1]}
      isSelected={isSelected}
      onClick={toggleSpeakerSelection}
    >
        {tracks.length}
    </AppSpeakerDiv>
  );
}

const mapStateToProps = (state: RootState, ownProps: Pick<Props, 'speaker'>) => ({
  isSelected: state.speakers.speakersSelected.includes(ownProps.speaker.id)
});

export default connect(mapStateToProps)(AppSpeaker);

const AppSpeakerDiv = styled.div<Offset & PropsSelected>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${props => props.h}px;
  left: ${props => props.w}px;
  width: 70px;
  height: 70px;
  background-color: hotpink;
  border-radius: 50%;
  color: white;
  font-weight: 700;
  background-color: ${props => props.isSelected ? 'blue' : 'inital'};
  &:hover {
    cursor: pointer;
    background-color: blue;
  }
`;