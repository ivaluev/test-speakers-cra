import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { speakersSaga } from './speakers/sagas';
import { speakersReducer, SpeakersState } from './speakers/reducer';
import { tracksReducer, TracksState } from './tracks/reducer';
import { tracksSaga } from './tracks/sagas';
import { useSelector } from 'react-redux';

export type RootState = {
  speakers: SpeakersState,
  tracks: TracksState  
}

function* rootSaga() {
  yield all([fork(tracksSaga), fork(speakersSaga)]);
}

export function configureStore(): Store<RootState> {
  const composeEnhansers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      tracks: tracksReducer,
      speakers: speakersReducer
    }), 
    composeEnhansers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  
  return store;
}

export function useAppSelector<TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
  return useSelector<RootState, TSelected>(selector, equalityFn);
}

