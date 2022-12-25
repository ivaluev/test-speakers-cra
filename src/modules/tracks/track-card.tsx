import styled from '@emotion/styled'
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Button} from '../../common/button-r-primary'
import {Label} from '../../common/label'
import Slider from '../../common/slider'
import {useAppSelector} from '../../store'
import {actionTrackAssign} from '../../store/speakers/actions'
import {actionTrackUpdate} from '../../store/tracks/actions'

type Props = {
  trackId: number
}

export default function TrackCard({trackId}: Props) {
  const dispatch = useDispatch()

  const track = useAppSelector(s => s.tracks.tracks.find(t => t.id === trackId))!

  const assignedToCount = useAppSelector(state => {
    const result = state.speakers.speakers.filter(s => s.tracks.some(t => t.id === trackId)).length
    return result
  })

  const selectionCount = useAppSelector(st => st.speakers.speakersSelected.length)
  const selectionCountWithTrackAssigned = useAppSelector(
    state =>
      state.speakers.speakers
        .filter(s => state.speakers.speakersSelected.includes(s.id))
        .filter(s => s.tracks.some(t => t.id === trackId)).length
  )

  const assignDisabled = selectionCount === 0 || selectionCount === selectionCountWithTrackAssigned

  function onChange(volume: number) {
    dispatch(actionTrackUpdate({...track, vol: volume}))
  }

  const assignTrack = useCallback(() => {
    console.log('assined track', track)
    dispatch(actionTrackAssign(track))
  }, [track]) // eslint-disable-line

  return (
    <TrackCardWrapper>
      <TrackHandleCol>
        <TrackHandle />
      </TrackHandleCol>
      <TrackInfoCol>
        <TrackInfoName>{track.url}</TrackInfoName>
        <Slider volume={track.vol} onChange={onChange} />
      </TrackInfoCol>
      <TrackAssignedCol>
        <AssignedInfo>
          Назначен на <Label>{assignedToCount}</Label>
        </AssignedInfo>
        <AssignActions>
          <Button onClick={assignTrack} disabled={assignDisabled}>
            Назначить
          </Button>
        </AssignActions>
      </TrackAssignedCol>
    </TrackCardWrapper>
  )
}

const AssignActions = styled.div`
  text-align: right;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const AssignedInfo = styled.div`
  text-align: right;
`

const TrackAssignedCol = styled.div`
  display: flex;
  flex-direction: column;
`

const TrackInfoCol = styled.div`
  flex: 1;
`

const TrackInfoName = styled.h3`
  font-size: 1.2rem;
  color: #aaa;
`

const TrackHandleCol = styled.div`
  width: 2.7em;
  padding: 0 1rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: move;
`

const TrackHandle = styled.span`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: red;
  &:before {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 12px;
    /* left: 16px; */
  }
  &:after {
    content: '';
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    bottom: 12px;
    /* left: 16px; */
  }
`

const TrackCardWrapper = styled.li`
  padding: 1em 0.5em;
  padding-right: 1rem;
  margin-top: 1em;
  &:first-of-type {
    margin-top: 0;
  }
  /* box-shadow: 0 1px 2px #ccc; */
  /* &:hover {
    box-shadow: 0 2px 8px #bbb;
  } */
  display: flex;
  /* background-color: white; */
  background-color: #202f3c;
`
