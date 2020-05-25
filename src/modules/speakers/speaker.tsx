import React from 'react';
import styled from '@emotion/styled';
import { Dispatch } from 'redux';
import { Speaker, Offset } from '../../data/speakers/types';
import { connect } from 'react-redux';
import { actionSpeakersSelect, actionSpeakersDelelect } from '../../data/speakers/actions';
import { RootState } from '../../data/store';

type PropsSelected = {
  isSelected: boolean
}

type Props = {
  speaker: Speaker,
  tracksLength: number,
  isSelected: boolean,
  dispatch: Dispatch
}

function AppSpeaker({ speaker, tracksLength, isSelected, dispatch }: Props) {
  const { coord } = speaker;

  function toggleSpeakerSelection(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const isShiftPressed = e.shiftKey;

    isSelected
      ? dispatch(actionSpeakersDelelect([speaker.id]))
      : dispatch(actionSpeakersSelect([speaker.id], isShiftPressed));
  }

  return (
    <AppSpeakerDiv
      w={coord[0]}
      h={coord[1]}
    >
      <AppSpeakerCounter isSelected={isSelected}
        onClick={toggleSpeakerSelection}
      >
        {tracksLength}
      </AppSpeakerCounter>
      <AppSpeakerPlayer isSelected={isSelected}>
        <ButtonPlay />
      </AppSpeakerPlayer>
      <AppSpeakerMenu isSelected={isSelected} onClick={() => alert('modal')}>
        <ButtonBurger />
      </AppSpeakerMenu>
    </AppSpeakerDiv>
  );
}

const mapStateToProps = (state: RootState, ownProps: Pick<Props, 'speaker'>) => ({
  isSelected: state.speakers.speakersSelected.includes(ownProps.speaker.id),
  tracksLength: state.speakers.speakers[ownProps.speaker.id].tracks.length
});

export default connect(mapStateToProps)(AppSpeaker);

const AppSpeakerPlayer = styled.div<PropsSelected>`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: -15px;
  left: -15px;
  border: 3px solid gainsboro;
  background-color: white;
  display: ${props => props.isSelected ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover > span {
    border-left-color: blue;
  }
`;
const ButtonPlay = styled.span`
  position: relative;
  left: 1px;
  width: 0;
  height: 0;
  border-left: 10px solid grey;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`;

const AppSpeakerMenu = styled.div<PropsSelected>`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  top: -15px;
  right: -15px;
  border: 3px solid gainsboro;
  background-color: white;
  display: ${props => props.isSelected ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover > span {
    background-color: blue;
  }
`;
const ButtonBurger = styled.span`
  width: 15px;
  height: 2px;
  background-color: grey;
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    top: 9px;
    background-color: inherit;
  }
  &:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 2px;
    bottom: 9px;
    background-color: inherit;
  }
`;

const AppSpeakerDiv = styled.div<Offset>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${props => props.h}px;
  left: ${props => props.w}px;
  width: 100px;
  height: 100px;
`;
const AppSpeakerCounter = styled.div<PropsSelected>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: white;
  font-weight: 700;
  background-color: hotpink;
  background-color: ${props => props.isSelected ? 'blue' : 'inital'};
  &:hover {
    cursor: pointer;
    background-color: blue;
  }
`;