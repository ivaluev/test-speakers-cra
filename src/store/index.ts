import {useSelector} from 'react-redux'
import {applyMiddleware, combineReducers, createStore, Store} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {all, fork} from 'redux-saga/effects'
import {speakersReducer} from './speakers/reducer'
import {speakersSaga} from './speakers/sagas'
import {SpeakersState} from './speakers/types'
import {tracksReducer} from './tracks/reducer'
import {tracksSaga} from './tracks/sagas'
import {TracksState} from './tracks/types'

export type RootState = {
  speakers: SpeakersState
  tracks: TracksState
}

function* rootSaga() {
  yield all([fork(tracksSaga), fork(speakersSaga)])
}

export function configureStore(): Store<RootState> {
  const composeEnhansers = composeWithDevTools({})
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    combineReducers({
      tracks: tracksReducer,
      speakers: speakersReducer,
    }),
    composeEnhansers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}

export function useAppSelector<TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
  return useSelector<RootState, TSelected>(selector, equalityFn)
}
