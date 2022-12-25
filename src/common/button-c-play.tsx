import styled from '@emotion/styled'
import {ButtonC} from './button-c'
import {PropsClassName, PropsOnClick} from './types'

export default function ButtonCPlay({className, onClick}: PropsClassName & PropsOnClick) {
  return (
    <ButtonCHovered className={className} onClick={onClick}>
      <IconPlay />
    </ButtonCHovered>
  )
}

const ButtonCHovered = styled(ButtonC)`
  &:hover > span {
    border-left-color: blue;
  }
`

const IconPlay = styled.span`
  position: relative;
  left: 1px;
  width: 0;
  height: 0;
  border-left: 10px solid grey;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`
