import styled from '@emotion/styled'
import React, {useCallback, useContext, useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import ButtonCMenu from '../../common/button-c-menu'
import ButtonCPlay from '../../common/button-c-play'
import ButtonCStop from '../../common/button-c-stop'
import {ModalContext} from '../../common/modal/modal'
import {RootState} from '../../store'
import {
  actionSpeakerPlaylistPlay,
  actionSpeakersDelelect,
  actionSpeakersSelect,
} from '../../store/speakers/actions'
import {Offset, Speaker} from '../../store/speakers/types'
import SpeakerCircle from './speaker-circle'
import SpeakerInfo from './speaker-info'
import {SpeakerRectInfo} from './speakers'

type Props = {
  speaker: Speaker
  speakersRectInfo: SpeakerRectInfo[]
  tracksLength: number
  isSelected: boolean
  isPlaying: boolean
  dispatch: Dispatch
}

function AppSpeaker({
  speaker,
  speakersRectInfo,
  tracksLength,
  isSelected,
  isPlaying,
  dispatch,
}: Props) {
  const speakerWrapperRef = useRef<HTMLDivElement>(null)
  const {renderModalContent} = useContext(ModalContext)
  const {coord} = speaker
  const showButtons = tracksLength > 0 && isSelected

  // console.log('speaker is selected', speaker.id, isSelected);

  function toggleSpeakerSelection(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation()
    const isCtrlPressed = e.ctrlKey

    isSelected
      ? dispatch(actionSpeakersDelelect([speaker.id]))
      : dispatch(actionSpeakersSelect([speaker.id], isCtrlPressed))
  }

  const openModal = useCallback(
    (e: React.MouseEvent) => {
      console.log('openModal speaker', speaker)

      renderModalContent(<SpeakerInfo speakerId={speaker.id} />)
    },
    [speaker, renderModalContent]
  ) // eslint-disable-line

  function togglePlay(e: React.MouseEvent) {
    e.stopPropagation()
    dispatch(actionSpeakerPlaylistPlay(speaker.id, !isPlaying))
  }

  useEffect(() => {
    if (!speakerWrapperRef.current) {
      throw new Error('unvalid speakerWrapperRef')
    }
    // this is a viewport DomRect - whereas we want relative to our div
    const domRect: DOMRect = new DOMRect(coord[0], coord[1], 100, 100) //speakerWrapperRef.current.getBoundingClientRect();
    speakersRectInfo.push(new SpeakerRectInfo(speaker.id, domRect))
  }, []) // eslint-disable-line

  return (
    <SpeakerWrapper ref={speakerWrapperRef} w={coord[0]} h={coord[1]}>
      <SpeakerCircle isSelected={isSelected} onClick={toggleSpeakerSelection} />
      {showButtons &&
        (isPlaying ? (
          <ButtonStopPositioned onClick={togglePlay} />
        ) : (
          <ButtonPlayPositioned onClick={togglePlay} />
        ))}
      {showButtons && <ButtonMenuPositioned onClick={openModal} />}
    </SpeakerWrapper>
  )
}

const mapStateToProps = (state: RootState, ownProps: Pick<Props, 'speaker'>) => ({
  tracksLength: state.speakers.speakers[ownProps.speaker.id].tracks.length,
  isSelected: state.speakers.speakersSelected.includes(ownProps.speaker.id),
  isPlaying: state.speakers.speakers[ownProps.speaker.id].isPlaying,
})

export default connect(mapStateToProps)(AppSpeaker)

const ButtonPlayPositioned = styled(ButtonCPlay)`
  position: absolute;
  top: -15px;
  left: -15px;
`

const ButtonStopPositioned = styled(ButtonCStop)`
  position: absolute;
  top: -15px;
  left: -15px;
`

const ButtonMenuPositioned = styled(ButtonCMenu)`
  position: absolute;
  top: -15px;
  right: -15px;
`

const SpeakerWrapper = styled.div<Offset>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${props => props.h}px;
  left: ${props => props.w}px;
  width: 100px;
  height: 100px;
`
