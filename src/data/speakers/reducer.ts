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

  if (isActionOf(actions.actionSpeakersResponse, action)) {
    return { ...state, loading: false, speakers: action.payload };
  }

  if (isActionOf(actions.actionSpeakersResponseError, action)) {
    return { ...state, loading: false, error: action.payload };
  }

  if (isActionOf(actions.actionSpeakersSelect, action)) {
    const multiple = false; //todo
    if (multiple) {
      return { ...state, speakersSelected: [...state.speakersSelected, ...action.payload] };
    } else {
      return { ...state, speakersSelected: [...action.payload] };
    }
  }

  if (isActionOf(actions.actionSpeakersDelelect, action)) {
    return { ...state, speakersSelected: state.speakersSelected.filter(s => !action.payload.includes(s)) };
  }

  if (isActionOf(actions.actionTrackAssign, action)) {
    const speakersUpdated = [...state.speakers];

    for (const s of speakersUpdated) {
      if (state.speakersSelected.includes(s.id)) {
      
        if (!s.tracks.some(t => t.id === action.payload.id)) {
          s.tracks = [...s.tracks, action.payload];
        }
      }
    }
    return { ...state, speakers: speakersUpdated };
  }

  return state;
}