import { ActionType, isActionOf } from 'typesafe-actions';
import { SpeakersState } from './types';
import * as actions from './actions';
import { Track } from '../tracks/types';
import speakers from '../../modules/speakers/speakers';

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
    if (action.payload.keepSelection) {
      return { ...state, speakersSelected: [...state.speakersSelected, ...action.payload.ids] };
    } else {
      return { ...state, speakersSelected: [...action.payload.ids] };
    }
  }

  if (isActionOf(actions.actionSpeakersDelelect, action)) {
    return { ...state, speakersSelected: state.speakersSelected.filter(s => !action.payload.includes(s)) };
  }

  if (isActionOf(actions.actionTrackAssign, action)) {
    const speakersUpdated = [...state.speakers];
    const trackAssignedCloned: Track = { ...action.payload };

    for (const selectedSpeakerId of state.speakersSelected) {

      // we want to replace entirely if one exist
      const speakerSelectedIndex = speakersUpdated.findIndex(s => s.id === selectedSpeakerId);
      
      // record new speaker into slot
      speakersUpdated[speakerSelectedIndex] = {...speakersUpdated[speakerSelectedIndex]};
      
      // get clone of speaker
      const speakerSelectedCloned = speakersUpdated[speakerSelectedIndex];

      const speakerSelectedTracksCloned = [...speakerSelectedCloned.tracks];

      // record new tracks array into speaker
      speakerSelectedCloned.tracks = speakerSelectedTracksCloned;

      const speakerSelectedTrackIndex = speakerSelectedTracksCloned.findIndex(t => t.id === trackAssignedCloned.id);

      if (speakerSelectedTrackIndex === -1) {
        
        // no track exist => add
        speakerSelectedTracksCloned.push(trackAssignedCloned);
      } else {
        
        // track exist => replace
        speakerSelectedTracksCloned[speakerSelectedTrackIndex] = trackAssignedCloned;
      }
    }
    return {...state, speakers: speakersUpdated};
  }

  if (isActionOf(actions.actionSpeakerPlaylistPlay, action)) {
    const speakersUpdated = [...state.speakers];
    const target = speakersUpdated.find(s => s.id === action.payload.id);
    if (target) {
      target.isPlaying = action.payload.isPlaying;
    }
    return { ...state, speakers: speakersUpdated };
  }

  if (isActionOf(actions.actionSpeakerSetTrackVol, action)) {
    const speakersUpdated = [...state.speakers];
    const speakerUpdated = speakersUpdated.find(s => s.id === action.payload.speakerId)!;
    speakerUpdated.tracks = [...speakerUpdated.tracks];
    speakerUpdated.tracks.find(t => t.id === action.payload.trackId)!.vol = action.payload.vol;
    return {...state, speakers: speakersUpdated};
  }

  return state;
}