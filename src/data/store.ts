import { createStore, applyMiddleware, Store, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { speakersSaga } from './speakers/sagas';
import { speakersReducer, SpeakersState } from './speakers/reducer';
import { tracksReducer, TracksState } from './tracks/reducer';
import { tracksSaga } from './tracks/sagas';

export type RootState = {
  speakers: SpeakersState,
  tracks: TracksState  
}

function* rootSaga() {
  yield all([fork(tracksSaga), fork(speakersSaga)]);
}

export function configureStore(): Store<RootState> {
  // create the composing function for our middlewares
  const composeEnhansers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // We'll create our store with the combined reducers/sagas
  const store = createStore(
    combineReducers({
      tracks: tracksReducer,
      speakers: speakersReducer
    }), 
    composeEnhansers(applyMiddleware(sagaMiddleware))
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  
  return store;
}

