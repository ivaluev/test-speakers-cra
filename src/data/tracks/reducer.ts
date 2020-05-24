import { ActionType, isActionOf } from 'typesafe-actions';
import * as actions from './actions';
import { Track } from './types';

export type TracksState = {
  loading: boolean,
  error?: string, 
  tracks: Track[], // we need a couter for each track to show up
  trackPlaying?: number
}

export function tracksReducer(
  state: TracksState = { loading: false, tracks: [] }, 
  action: ActionType<typeof actions>): TracksState {

  if (isActionOf(actions.actionTracksRequest, action)) {
    return { ...state, loading: true };
  }

  if (isActionOf(actions.actionTracksResponse, action)) {
    return { ...state, loading: false, tracks: action.payload };
  }

  if (isActionOf(actions.actionTracksResponseError, action)) {
    return { ...state, loading: false, error: action.payload };
  }

  return state;
}