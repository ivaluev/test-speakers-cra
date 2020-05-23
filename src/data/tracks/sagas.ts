import { getType } from 'typesafe-actions';
import { takeLatest, delay } from 'redux-saga/effects';
import { tracksRequest } from './actions';

function* handleTracksRequest() {
  yield delay(1000);
  yield [];
}

export function* tracksSaga() {
  yield takeLatest(getType(tracksRequest), handleTracksRequest);
}