'use client';
/* eslint-disable @next/next/no-img-element */

import { Button, Card, CardContent, CardMedia, Skeleton, Typography } from '@mui/material';
import { TrackerStatus, TrackerAnime, removeAnime } from '@/src/store/trackerSlice';
import SkeletonCard from '@/src/shared/SkeletonCard';

type TrackerAnimeListProps = {
  filteredAnime: TrackerAnime[];
  onChangeStatus: (id: number, status: TrackerStatus) => void;
  onRemove: (id: number) => void;
  isLoading: boolean;
};

export default function TrackerAnimeList({
  filteredAnime,
  onChangeStatus,
  onRemove,
  isLoading,
}: TrackerAnimeListProps) {
  if (isLoading) {
    return (
      <div>
        {[...Array(6)].map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (filteredAnime.length === 0) {
    return (
      <div className="flex items-center m-6">
        <p>Аниме с таким статусом нет</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-6 m-6">
      {filteredAnime.map((anime) => (
        <Card
          key={anime.mal_id}
          className="bg-violet-100 rounded overflow-hidden shadow-md/20 w-full flex flex-col"
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
          <CardContent className="p-3 flex flex-col gap-1 text-sm text-center flex-1">
            <Typography variant="h5">{anime.title}</Typography>
            <Typography variant="subtitle1">Эпизодов: {anime.episodes}</Typography>
            <Typography variant="subtitle1">Статус: {anime.status}</Typography>

            <div className="mt-auto flex gap-1 justify-center">
              <Button onClick={() => onChangeStatus(anime.mal_id, 'planned')}>Planned</Button>
              <Button onClick={() => onChangeStatus(anime.mal_id, 'watching')}>Watching</Button>
              <Button onClick={() => onChangeStatus(anime.mal_id, 'done')}>Done</Button>
              <Button onClick={() => onRemove(anime.mal_id)} color="error">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
