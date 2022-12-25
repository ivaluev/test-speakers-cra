import styled from '@emotion/styled'
import {ModalProvider} from '../common/modal/modal'
import AppSpeakers from './speakers/speakers'
import TrackCards from './tracks/track-cards'

export default function App() {
  return (
    <ModalProvider>
      <Sidebar>
        <TrackCards />
      </Sidebar>
      <Main>
        <AppSpeakers />
      </Main>
    </ModalProvider>
  )
}

const Sidebar = styled.aside`
  width: 27%;
  min-width: 300px;
  /* background-color: #dcdcdc45; */
  background-color: #1b2126;
  color: white;
  border-right: 1px solid #eee;
`

const Main = styled.main`
  flex: 1;
  border-left: 1px solid #eee;
  /* box-shadow: -2px 0 6px rgb(204, 204, 204); */
  position: relative;
  user-select: none;
`
