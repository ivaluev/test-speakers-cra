
export type TracksState = {
  loading: boolean,
  error?: string, 
  tracks: Track[], // we need a couter for each track to show up
  trackPlaying?: number
}

export class Track {
  public useCount: number = 0;
  constructor(
    public id: number,
    public url: string,
    public vol: number,
  ) {} 
}