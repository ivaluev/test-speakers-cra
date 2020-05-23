import { Speaker } from '../data/speakers/types';
import { delay } from '../utils/delay';

function getPosition(w: number, h: number): [number, number] {
  console.log('size-in', w, h);
  const wRand = Math.floor(w * Math.random());
  const hRand = Math.floor(h * Math.random());
  console.log('size-put', wRand, hRand);
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