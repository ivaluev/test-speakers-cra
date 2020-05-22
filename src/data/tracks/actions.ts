import { createAction } from 'typesafe-actions';
import { Track } from './types';

export const tracksRequest = createAction('TRACKS_REQUEST')();
export const tracksResponse = createAction('TRACKS_RESPONSE')<Track[]>();
export const tracksResponseError = createAction('TRACKS_RESPONSE_ERROR')<string>();