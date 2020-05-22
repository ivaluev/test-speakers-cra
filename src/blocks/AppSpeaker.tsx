import React from 'react'
import styled from '@emotion/styled'
import { Track } from '../types'

type Position = {
  x: number,
  y: number
}

type Props = {
  tracks: Track[]
} & Position

export default function AppSpeaker({ x, y, tracks } : Props) {
  return (
    <AppSpeakerDiv x={x} y={y}>7</AppSpeakerDiv>
  )
}

const AppSpeakerDiv = styled.div<Position>`
  position: absolute;
  top: ${props => props.x}px;
  left: ${props => props.y}px;
  width: 70px;
  height: 70px;
  background-color: hotpink;
  border-radius: 50%;
`