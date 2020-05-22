import { Track } from '../data/tracks/types';
import { delay } from '../utils/delay';

export async function getTracks(): Promise<Track[]> {
  return await delay([
    new Track(1, 'rammstein.mp3', 0.7),
    new Track(1, 'rammstein2.mp3', 0.7),
    new Track(1, 'rammstein3.mp3', 0.7),
    new Track(1, 'rammstein4.mp3', 0.7),
  ]);
}

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