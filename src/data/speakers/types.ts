import { Track } from '../tracks/types';

export type Offset = {
  w: number,
  h: number
}
// we copy in tracks from library to enable custom volume setup
export class Speaker {
  constructor(
    public id: number,
    public coord: [number, number],
    public tracks: Track[],
    public currentTrackIndex: number | null
  ) {}
}

export type SpeakerSelection = {
  ids: number[],
  keepSelection: boolean
}