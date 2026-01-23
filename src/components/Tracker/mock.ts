import { TrackerAnime } from "./types/Tracker";

export const mockAnime: TrackerAnime[] = [
  {
    mal_id: 1,
    title: 'Attack on Titan',
    image: 'https://cdn.myanimelist.net/images/anime/10/47347.jpg',
    episodes: 25,
    status: 'watching',
  },
  {
    mal_id: 2,
    title: 'Steins;Gate',
    image: 'https://cdn.myanimelist.net/images/anime/5/73199.jpg',
    episodes: 24,
    status: 'planned',
  },
  {
    mal_id: 3,
    title: 'Death Note',
    image: 'https://cdn.myanimelist.net/images/anime/9/9453.jpg',
    episodes: 37,
    status: 'done', 
  },
  {
    mal_id: 4,
    title: 'Tokyo Ghoul',
    image: 'https://cdn.myanimelist.net/images/anime/5/64449.jpg',
    episodes: 12,
    status: 'dropped',
  },
];