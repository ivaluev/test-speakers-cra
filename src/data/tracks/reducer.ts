import { ActionType, isActionOf } from 'typesafe-actions';
import { TracksState } from './types';
import * as actions from './actions';

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