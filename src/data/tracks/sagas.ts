import { getType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { tracksRequest, tracksResponse } from './actions';
import { getTracks } from '../../api/tracks';

function* handleTracksRequest() {
  const tracks = yield call(getTracks);
  yield put(tracksResponse(tracks));
}

export function* tracksSaga() {
  yield takeLatest(getType(tracksRequest), handleTracksRequest);
}