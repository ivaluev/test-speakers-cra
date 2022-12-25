import {keyframes} from '@emotion/react'
import styled from '@emotion/styled'
import {darken, lighten} from 'polished'
import {PropsOnClick} from "../../common/types"
import {PropsDelay, PropsSelected} from "../../types"

const COL_1 = '#0099ff'
const COL_2 = '#d0e7f6'
const COL_NORMAL = '#3f51b5'
const COL_SELECTED = '#e91e63'

export default function SpeakerCircle({isSelected, onClick}: PropsSelected & PropsOnClick) {
  return (
    <Container onClick={onClick}>
      {!isSelected && (
        <>
          <CircleGlow delay={-3} isSelected={isSelected} />
          <CircleGlow delay={-2} isSelected={isSelected} />
          <CircleGlow delay={-1} isSelected={isSelected} />
          <CircleGlow delay={0} isSelected={isSelected} />
        </>
      )}
      <CircleOuter isSelected={isSelected}>
        <CircleKnob />
      </CircleOuter>
    </Container>
  )
}

const Container = styled.span`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 60px;
`

// .rounded-corners-gradient-borders {
//   width: 300px;
//   height: 80px;
//   border: double 4px transparent;
//   border-radius: 80px;
//   background-image: linear-gradient(white, white), radial-gradient(circle at top left, #f00,#3020ff);
//   background-origin: border-box;
//   background-clip: content-box, border-box;
// }

const CircleOuter = styled.div<PropsSelected>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  color: white;
  background: radial-gradient(${COL_1}, ${lighten(0.9, COL_1)} 85%);
  border: 6px solid ${props => (props.isSelected ? COL_SELECTED : COL_NORMAL)};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border-color: #e91e63;
  }
`
const CircleKnob = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(${COL_2}, ${darken(0.1, COL_1)} 70%);
`

const scaleIn = keyframes`
  from {
    transform: scale(.5, .5);
    opacity: .5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
`

const CircleGlow = styled.div<PropsDelay & PropsSelected>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: deepskyblue;
  width: 60px;
  height: 60px;
  opacity: 0;
  animation: ${scaleIn} 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
  animation-delay: ${props => props.delay}s;
  /* animation-play-state: ${props => (props.isSelected ? 'paused' : 'initial')}; */
`
