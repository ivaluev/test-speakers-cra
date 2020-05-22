import { createAction } from 'typesafe-actions';
import { Track } from '../tracks/types';

export const speakersRequest = createAction('SPEAKERS_REQUEST')();
export const speakersResponse = createAction('SPEAKERS_RESPONSE')<Track[]>();
export const speakersResponseError = createAction('SPEAKERS_RESPONSE_ERROR')<string>();