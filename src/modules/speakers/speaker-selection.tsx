/** @jsx jsx */

import { useDispatch } from 'react-redux';
import { actionSpeakersSelect } from '../../store/speakers/actions';
import { MouseEventType } from '../../types';
import { isInside } from '../../utils/intersection';
import useMouseClickAndMoveObserver from '../../utils/useMouseClickAndMoveObserver';
import { SpeakerRectInfo } from './speakers';

export interface SelectionRectProps {
  speakersRectInfo: SpeakerRectInfo[];
}

function SpeakerSelection({ speakersRectInfo }: SelectionRectProps) {
  // console.log('speakers selection render');

  const dispatch = useDispatch();
  const selectionAreaRef = useRef(null);
  const selectionRectRef = useRef<HTMLDivElement>(null);
  // const selectedSpeakersSet = useRef<Set<number>>(null);
  const { mouseState, mouseMovingRect } =
    useMouseClickAndMoveObserver(selectionAreaRef);

  useEffect(() => {
    if (mouseState === MouseEventType.UP) {

      // console.log('SpeakerSelection.mouseUP effect', mouseMovingRect);
      // deselecting prev selection if any
      dispatch(actionSpeakersSelect([], false));
      speakersRectInfo.forEach(speakerRectInfo => {
        if (isInside(new DOMRect(
          mouseMovingRect.left,
          mouseMovingRect.top,
          mouseMovingRect.width,
          mouseMovingRect.height), speakerRectInfo.domRect)) {
          console.log('is inside', speakerRectInfo.id);
          dispatch(actionSpeakersSelect([speakerRectInfo.id], true));
        } 
      });
    }
  }, [mouseState]); // eslint-disable-line

  return (
    <div
      onClick={e => e.stopPropagation()}
      ref={selectionAreaRef}
      css={css`
        /* display: ${mouseState === MouseEventType.DOWN ? 'block' : 'none'}; */
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        cursor: crosshair;
      `}
    >
      <div
        ref={selectionRectRef}
        css={css`
          display: ${mouseState === MouseEventType.DOWN ? 'block' : 'none'};
          /* display: block; */
          position: absolute;
          background: rgba(46, 115, 252, 0.11);
          border-radius: 0.1em;
          border: 2px solid rgba(98, 155, 255, 0.81);
          top: ${mouseMovingRect.top}px;
          left: ${mouseMovingRect.left}px;
          width: ${mouseMovingRect.width}px;
          height: ${mouseMovingRect.height}px;
          will-change: top, left, bottom, right, width, height;
          /* pointer-events: none; */
          z-index: 1;
        `}
      ></div>
    </div>
  );
}

// export default React.memo(SpeakerSelection);
export default SpeakerSelection;

