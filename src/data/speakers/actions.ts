import { createAction } from 'typesafe-actions';
import { Speaker, Offset } from './types';

export const speakersRequest = createAction(
  'SPEAKERS_REQUEST',
  (w: number, h: number) => ({ w, h })
  )<Offset>();
export const speakersResponse = createAction('SPEAKERS_RESPONSE')<Speaker[]>();
export const speakersResponseError = createAction('SPEAKERS_RESPONSE_ERROR')<string>();

export const speakersSelect = createAction('SPEAKERS_SELECT')<number[]>();
export const speakersDelelect = createAction('SPEAKERS_DESELECT')<number[]>();