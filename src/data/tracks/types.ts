export class Track {
  public useCount: number = 0;
  constructor(
    public id: number,
    public url: string,
    public vol: number,
  ) {} 
}