import {Track} from '../tracks/types'

export type Offset = {
  w: number
  h: number
}

export type SpeakersState = {
  loading: boolean
  error?: string
  speakers: Speaker[]
  speakersSelected: number[]
}

// we copy in tracks from library to enable custom volume setup
export class Speaker {
  constructor(
    public id: number,
    public coord: [number, number],
    public tracks: Track[],
    public isPlaying: boolean,
    public isPlayingTrackIndex: number | null
  ) {}
}

export type SpeakerSelection = {
  ids: number[]
  keepSelection: boolean
}
