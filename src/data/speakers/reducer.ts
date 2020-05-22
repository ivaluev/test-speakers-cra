import { ActionType, isActionOf } from 'typesafe-actions';
import * as actions from './actions';
import { RootState } from '../store';

export function rootReducer(state: RootState = {
  speakers: [],
  tracks: [],
}, action: ActionType<typeof actions>): RootState {

  if (isActionOf(actions.speakersRequest, action)) {
    return state;
  }

  if (isActionOf(actions.speakersResponse, action)) {
    return state;
  }

  if (isActionOf(actions.speakersResponseError, action)) {
    return state;
  }

  return state;
}