import styled from '@emotion/styled'
import {ButtonC} from './button-c'
import {PropsClassName, PropsOnClick} from './types'

export default function ButtonCMenu({className, onClick}: PropsClassName & PropsOnClick) {
  return (
    <ButtonCHovered className={className} onClick={onClick}>
      <IconMenu />
    </ButtonCHovered>
  )
}

const ButtonCHovered = styled(ButtonC)`
  &:hover > span {
    background-color: blue;
  }
`

const IconMenu = styled.span`
  width: 15px;
  height: 2px;
  background-color: grey;
  &:before {
    content: '';
    display: block;
    position: relative;
    width: 15px;
    height: 2px;
    top: -5px;
    /* inherit hover or static colors */
    background-color: inherit;
  }
  &:after {
    content: '';
    display: block;
    position: relative;
    width: 15px;
    height: 2px;
    top: 3px;
    background-color: inherit;
  }
`
