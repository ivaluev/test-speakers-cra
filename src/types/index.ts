export class Track {
  constructor(
    public id: number,
    public url: string,
    public vol: number 
  ) {} 
}

export class Speaker {
  constructor(
    public coord: [number, number],
    public tracks: Track[],
    public currentTrackIndex: number | null
  ) {}
}

export type RootState = {
  speakers: Speaker[],
  tracks: Track[]  
}