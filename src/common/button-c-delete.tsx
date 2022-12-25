import styled from '@emotion/styled'
import {ButtonC} from './button-c'
import {PropsClassName, PropsOnClick} from './types'

export default function ButtonCDelete({className, onClick}: PropsClassName & PropsOnClick) {
  return (
    <ButtonCHovered className={className} onClick={onClick}>
      <IconDelete />
    </ButtonCHovered>
  )
}

const ButtonCHovered = styled(ButtonC)`
  &:hover > span {
    background: blue;
  }
`

export const IconDelete = styled.span`
  width: 10px;
  height: 10px;
  background-color: grey;
`
