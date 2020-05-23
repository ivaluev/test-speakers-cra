import { ActionType, isActionOf } from 'typesafe-actions';
import { Speaker } from './types';
import * as actions from './actions';

export type SpeakersState = {
  loading: boolean,
  error?: string,
  speakers: Speaker[],
  speakersSelected: number[]
}

export function speakersReducer(
  state: SpeakersState = { loading: false, speakers: [], speakersSelected: [] }, 
  action: ActionType<typeof actions>): SpeakersState {

  if (isActionOf(actions.speakersRequest, action)) {
    return { ...state, loading: true };
  }

  if (isActionOf(actions.speakersResponse, action)) {
    return { ...state, loading: false, speakers: action.payload };
  }

  if (isActionOf(actions.speakersResponseError, action)) {
    return { ...state, loading: false, error: action.payload };
  }

  if (isActionOf(actions.speakersSelect, action)) {
    return { ...state, speakersSelected: [...state.speakersSelected, ...action.payload] };
  }

  if (isActionOf(actions.speakersDelelect, action)) {
    return { ...state, speakersSelected: state.speakersSelected.filter(s => !action.payload.includes(s) ) };
  }

  return state;
}