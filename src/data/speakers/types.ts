import { Track } from '../tracks/types';

export class Speaker {
  constructor(
    public id: number,
    public coord: [number, number],
    public tracks: Track[],
    public currentTrackIndex: number | null
  ) {}
}