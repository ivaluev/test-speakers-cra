import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducer';
import { RootState } from '../types';


function configureStore(): Store<RootState> {
  // create the composing function for our middlewares
  const composeEnhansers = composeWithDevTools({})
  // create the redux-saga middleware
  const sagaMiddleware = createSagaMiddleware()

  // We'll create our store with the combined reducers/sagas
  const store = createStore(
    rootReducer, 
    undefined, 
    composeEnhansers(applyMiddleware(sagaMiddleware))
  )
  
  // Don't forget to run the root saga, and return the store object.
  sagaMiddleware.run()

  return store
}



export default store;