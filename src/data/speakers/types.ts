import { Track } from '../tracks/types';

export type Offset = {
  w: number,
  h: number
}

export class Speaker {
  constructor(
    public id: number,
    public coord: [number, number],
    public tracks: Track[],
    public currentTrackIndex: number | null
  ) {}
}