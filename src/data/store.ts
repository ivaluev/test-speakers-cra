import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './speakers/reducer';
import { rootSaga } from './speakers/effects';
import { Speaker } from './speakers/types';
import { Track } from './tracks/types';

export type RootState = {
  speakers: Speaker[],
  tracks: Track[]  
}

export function configureStore(): Store<RootState> {
  // create the composing function for our middlewares
  const composeEnhansers = composeWithDevTools({});
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware();

  // We'll create our store with the combined reducers/sagas
  const store = createStore(
    rootReducer, 
    undefined, 
    composeEnhansers(applyMiddleware(sagaMiddleware))
  );

  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run(rootSaga);
  
  return store;
}

