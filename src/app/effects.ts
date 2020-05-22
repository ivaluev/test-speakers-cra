import { getType } from 'typesafe-actions'
import { fork, takeLatest } from 'redux-saga/effects'
import { tracksRequest } from './actions'


function* handleTracksRequest() {
  yield []
}

export function* rootSaga() {
  yield takeLatest(getType(tracksRequest), handleTracksRequest)
}