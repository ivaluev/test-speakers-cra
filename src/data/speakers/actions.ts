import { createAction } from 'typesafe-actions';
import { Speaker, Offset, SpeakerSelection } from './types';
import { Track } from '../tracks/types';

export const speakersRequest = createAction(
  'SPEAKERS_REQUEST',
  (w: number, h: number) => ({ w, h })
  )<Offset>();
export const actionSpeakersResponse = createAction('SPEAKERS_RESPONSE')<Speaker[]>();
export const actionSpeakersResponseError = createAction('SPEAKERS_RESPONSE_ERROR')<string>();

export const actionSpeakersSelect = createAction(
  'SPEAKERS_SELECT',
  (ids: number[], keepSelection: boolean) => ({ids, keepSelection})
  )<SpeakerSelection>();
export const actionSpeakersDelelect = createAction('SPEAKERS_DESELECT')<number[]>();

// should we care about selected track?
export const actionTrackPlay = createAction('TRACK_PLAY')<number>();
export const actionTrackAssign = createAction('TRACK_ASSIGN')<Track>();