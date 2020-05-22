import { Speaker, Track } from '../types';

export function getSpeakers(): Speaker[] {
  return [
    new Speaker([123, 90], [], null),
    new Speaker([123, 90], [], null),
    new Speaker([123, 90], [], null),
    new Speaker([123, 90], [], null),
  ]
}

export function getTracks(): Track[] {
  return [
    new Track(1, "rammstein.mp3", 0.7),
    new Track(1, "rammstein2.mp3", 0.7),
    new Track(1, "rammstein3.mp3", 0.7),
    new Track(1, "rammstein4.mp3", 0.7),
  ]
}

// Методы:
// GET /api/library
// Получить фонотеку.
// Ответ: [Track, ...]
// Пример ответа: 
// [
// {id: 1, url: 'rammstein.mp3', vol:0.7},
// {id: 2, url: 'kremlin.mp3', vol:1}
// ]


// POST /api/library/upload
// Добавить трек в фонотеку.
// POST payload: file
// Ответ: Track

// POST /api/library/<id>
// Изменить свойства трека в фонотеке
// POST payload: {vol: 0.9}
// Ответ: Track

// DELETE /api/library/<id>
// Удалить трек из фонотеки

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