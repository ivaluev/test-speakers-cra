import { getType } from 'typesafe-actions';
import { takeLatest, delay } from 'redux-saga/effects';
import { tracksRequest } from '../tracks/actions';


function* handleTracksRequest() {
  yield delay(1000);
  yield [];
}

export function* rootSaga() {
  yield takeLatest(getType(tracksRequest), handleTracksRequest);
}