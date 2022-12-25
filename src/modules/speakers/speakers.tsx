import styled from '@emotion/styled'
import {useEffect, useRef} from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {Header} from '../../common/header'
import Separator from '../../common/separator'
import {RootState} from '../../store'
import {actionSpeakersSelect, speakersRequest} from '../../store/speakers/actions'
import {Speaker} from '../../store/speakers/types'
import useKeyPressedMonitor from '../../utils/useKeyPressedMonitor'
import AppSpeaker from './speaker'
import SpeakerSelection from './speaker-selection'

export class SpeakerRectInfo {
  public id: number
  public domRect: DOMRect
  constructor(id: number, domRect: DOMRect) {
    this.id = id
    this.domRect = domRect

    console.log('speaker rect info created')
  }
}

type Props = {
  speakers: Speaker[]
  dispatch: Dispatch
}

function AppSpeakers({speakers, dispatch}: Props) {
  // console.log('app speakers run', speakers);
  const isShiftPressed = useKeyPressedMonitor(16)
  const wrapperRef = useRef<HTMLDivElement>(null)
  // speakers are kept in store - so assigning them info will trigger a rerender
  const speakersRectInfo = useRef<SpeakerRectInfo[]>([])

  // const [selectionVisible, setSelectionVisible] = useState(false);
  // const mouseDown = useRef(false);

  // function setMouseDown(down: boolean) {
  //   mouseDown.current = down;
  //   console.log('mouseDown', mouseDown.current);
  //   if (mouseDown.current) {
  //     setTimeout(() => {
  //       if (mouseDown.current) {
  //         console.log(mouseDown.current ? 'DOWN' : 'UP');
  //         setSelectionVisible(true);
  //       } else {
  //         // setSelectionVisible(false);
  //       }
  //     }, 1500);
  //   }
  // }

  function deselectAll() {
    // will fire on up...
    dispatch(actionSpeakersSelect([], false))
  }

  useEffect(() => {
    let w = 0,
      h = 0
    if (wrapperRef.current) {
      w = wrapperRef.current.clientWidth - 70
      h = wrapperRef.current.clientHeight - 70
    }
    console.log('speakers map size', w, h)
    dispatch(speakersRequest(w, h))
  }, []) // eslint-disable-line

  return (
    <Wrapper>
      <Header>Speakers</Header>
      <Separator />
      <SpeakersMapWrapper
        ref={wrapperRef}
        onClick={deselectAll}
        // onMouseDown={() => setMouseDown(true)}
        // onMouseUp={() => setMouseDown(false)}
      >
        {speakers.map(s => (
          <AppSpeaker key={s.id} speaker={s} speakersRectInfo={speakersRectInfo.current} />
        ))}
        {speakers.length > 0 && isShiftPressed && (
          <SpeakerSelection speakersRectInfo={speakersRectInfo.current} />
        )}
      </SpeakersMapWrapper>
    </Wrapper>
  )
}

const SpeakersMapWrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  background-size: 100px 100px;
  background-image: radial-gradient(circle, #575757 1px, rgba(0, 0, 0, 0) 1px);
  overflow: hidden;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const mapStateToProps = (state: RootState) => ({
  speakers: state.speakers.speakers,
})

export default connect(mapStateToProps)(AppSpeakers)
