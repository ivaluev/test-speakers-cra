import {call, put, takeLatest} from 'redux-saga/effects'
import {getType} from 'typesafe-actions'
import {getSpeakers} from '../../api/speakers'
import {actionSpeakersResponse, speakersRequest} from './actions'
import {Speaker} from './types'

function* handleSpeakersRequest(action: ReturnType<typeof speakersRequest>) {
  const speakers: Speaker[] = yield call(getSpeakers, action.payload.w, action.payload.h)
  yield put(actionSpeakersResponse(speakers))
}

export function* speakersSaga() {
  yield takeLatest(getType(speakersRequest), handleSpeakersRequest)
}
