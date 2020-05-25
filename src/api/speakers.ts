import { Speaker } from '../data/speakers/types';
import { delay } from '../utils/delay';

function snapToGrid(offset: number, range: number) {
  const step = 100;
  const result = new Array(Math.floor(range / step))
    .fill(0)
    .map((_, i) => i * step)
    .reduce((acc, cur) => Math.abs(cur - offset) < Math.abs(acc - offset) ? cur : acc);
  return result;
}

function getPosition(w: number, h: number): [number, number] {
  const wRand = snapToGrid(Math.floor(w * Math.random()), w) + 65;
  const hRand = snapToGrid(Math.floor(h * Math.random()), h) + 67;
  return [wRand, hRand];
}

export async function getSpeakers(w: number, h: number): Promise<Speaker[]> {
  return await delay(new Array(6)
    .fill(undefined)
    .map((v, i) => new Speaker(i, getPosition(w, h), [], null))
  );
}

export async function postSpeaker(speaker: Speaker): Promise<Speaker> {
  throw new Error('Not Implemented.');
}

// Методы:

// GET /api/speakers
// Получить список динамиков
// Ответ: [Speaker, …]
// Пример:
// [{
// id: 1,
// coord': [38.1, 45.2],
// tracks: [
// {id: 1, vol: 0.4},
// {id: 2}
// ]
// }, …]

// POST /api/speakers/<id> 
// Сохранить один динамик 
// POST payload: Speaker
// Ответ: Speaker


// POST /api/speakers
// Сохранить список динамиков
// POST payload: [Speaker, …]
// Ответ: [Speaker, …]