import {call, put, takeLatest} from 'redux-saga/effects'
import {getType} from 'typesafe-actions'
import {getTracks} from '../../api/tracks'
import {actionTracksRequest, actionTracksResponse} from './actions'

function* handleTracksRequest() {
  const tracks = yield call(getTracks)
  yield put(actionTracksResponse(tracks))
}

export function* tracksSaga() {
  yield takeLatest(getType(actionTracksRequest), handleTracksRequest)
}
