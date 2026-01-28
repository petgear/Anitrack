'use client';
/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { TrackerStatus, TrackerAnime } from '@/src/store/trackerSlice';

type TrackerAnimeListProps = {
  filteredAnime: TrackerAnime[];
  onChangeStatus: (id: number, status: TrackerStatus) => void;
};

export default function TrackerAnimeList({ filteredAnime, onChangeStatus }: TrackerAnimeListProps) {
  return (
    <div className="grid grid-cols-4 gap-6 m-6">
      {filteredAnime.map((anime) => (
        <Card
          key={anime.mal_id}
          className="bg-violet-100 rounded overflow-hidden shadow-md/20 w-full"
        >
          <CardMedia
            component="img"
            src={anime.images?.jpg?.image_url || '/image-placeholder.svg'}
            alt={anime.title}
            className="w-full h-72 object-cover"
            onError={(e) => {
              e.currentTarget.src = '/image-placeholder.svg';
            }}
          />
          <CardContent className="p-3 flex flex-col gap-1 text-sm text-center">
            <Typography variant="h5">{anime.title}</Typography>
            <Typography variant="subtitle1">Эпизодов: {anime.episodes}</Typography>
            <Typography variant="subtitle1">Статус: {anime.status}</Typography>

            <div>
              <button onClick={() => onChangeStatus(anime.mal_id, 'planned')}>Planned</button>
              <button onClick={() => onChangeStatus(anime.mal_id, 'watching')}>watching</button>
              <button onClick={() => onChangeStatus(anime.mal_id, 'done')}>done</button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
