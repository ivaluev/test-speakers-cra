import { Speaker } from '../data/speakers/types';
import { delay } from '../utils/delay';

export async function getSpeakers(): Promise<Speaker[]> {
  return await delay([
    new Speaker(1, [123, 90], [], null),
    new Speaker(2, [268, 300], [], null),
    new Speaker(3, [400, 200], [], null),
    new Speaker(4, [300, 300], [], null)
  ]);
}

export async function postSpeaker(speaker: Speaker) {
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