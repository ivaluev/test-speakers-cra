import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Dispatch } from 'redux';
import { Speaker, Offset } from '../../data/speakers/types';
import { connect } from 'react-redux';
import { 
  actionSpeakersSelect, 
  actionSpeakersDelelect, 
  actionSpeakerPlaylistPlay 
} from '../../data/speakers/actions';
import { RootState } from '../../data/store';
import { ModalContext } from '../../packages/modal/modal';
import SpeakerInfo from './speaker-info';
import ButtonCPlay from '../../packages/button-c-play';
import ButtonCMenu from '../../packages/button-c-menu';
import ButtonCStop from '../../packages/button-c-stop';
import SpeakerCircle from './speaker-circle';

type Props = {
  speaker: Speaker,
  tracksLength: number,
  isSelected: boolean,
  isPlaying: boolean,
  dispatch: Dispatch
}

function AppSpeaker({ 
  speaker, 
  tracksLength, 
  isSelected, 
  isPlaying,
  dispatch 
}: Props) {
  const { renderModalContent } = useContext(ModalContext);
  const { coord } = speaker;
  const showButtons = tracksLength > 0 && isSelected;

  function toggleSpeakerSelection(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const isShiftPressed = e.shiftKey;

    isSelected
      ? dispatch(actionSpeakersDelelect([speaker.id]))
      : dispatch(actionSpeakersSelect([speaker.id], isShiftPressed));
  }

  function openModal() {
    renderModalContent(<SpeakerInfo speaker={speaker} />);
  }

  function togglePlay() {
    dispatch(actionSpeakerPlaylistPlay(speaker.id, !isPlaying));
  }

  return (
    <AppSpeakerWrapper
      w={coord[0]}
      h={coord[1]}
    >
      <SpeakerCircle 
        isSelected={isSelected}
        onClick={toggleSpeakerSelection}
      />
      {showButtons && (isPlaying 
        ? <ButtonStopPositioned onClick={togglePlay} />
        : <ButtonPlayPositioned onClick={togglePlay} />)
      }
      {showButtons && <ButtonMenuPositioned onClick={openModal} />}
    </AppSpeakerWrapper>
  );
}

const mapStateToProps = (state: RootState, ownProps: Pick<Props, 'speaker'>) => ({
  tracksLength: state.speakers.speakers[ownProps.speaker.id].tracks.length,
  isSelected: state.speakers.speakersSelected.includes(ownProps.speaker.id),
  isPlaying: state.speakers.speakers[ownProps.speaker.id].isPlaying
});

export default connect(mapStateToProps)(AppSpeaker);

const ButtonPlayPositioned = styled(ButtonCPlay)`
  position: absolute;
  top: -15px;
  left: -15px;
`;

const ButtonStopPositioned = styled(ButtonCStop)`
  position: absolute;
  top: -15px;
  left: -15px;
`;

const ButtonMenuPositioned = styled(ButtonCMenu)`
  position: absolute;
  top: -15px;
  right: -15px;
`;

const AppSpeakerWrapper = styled.div<Offset>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${props => props.h}px;
  left: ${props => props.w}px;
  width: 100px;
  height: 100px;
`;