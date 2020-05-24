import { getType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { actionTracksRequest, actionTracksResponse } from './actions';
import { getTracks } from '../../api/tracks';

function* handleTracksRequest() {
  const tracks = yield call(getTracks);
  yield put(actionTracksResponse(tracks));
}

export function* tracksSaga() {
  yield takeLatest(getType(actionTracksRequest), handleTracksRequest);
}