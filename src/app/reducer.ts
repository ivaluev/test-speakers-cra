import { ActionType, isActionOf } from 'typesafe-actions';
import { RootState } from '../types';
import * as actions from './actions';

export function rootReducer(state: RootState = {
  speakers: [],
  tracks: [],
}, action: ActionType<typeof actions>): RootState {

  if (isActionOf(actions.tracksRequest, action)) {
    return state;
  }

  if (isActionOf(actions.tracksResponse, action)) {
    return state;
  }

  if (isActionOf(actions.tracksResponseError, action)) {
    return state;
  }

  return state;
}