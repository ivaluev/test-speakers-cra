import { getType } from 'typesafe-actions';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getSpeakers } from '../../api/speakers';
import { Speaker } from './types';
import { speakersRequest, speakersResponse } from './actions';


function* handleSpeakersRequest(action: ReturnType<typeof speakersRequest>) {
  const speakers: Speaker[] = yield call(getSpeakers, action.payload.w, action.payload.h);
  yield put(speakersResponse(speakers));
}

export function* speakersSaga() {
  yield takeLatest(getType(speakersRequest), handleSpeakersRequest);
}