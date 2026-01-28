'use client';

import AnimeHeader from './AnimeHeader';
import AnimeInfo from './AnimeInfo';
import AnimeGenres from './AnimeGenres';
import AnimeTrackerControl from './AnimeTrackerControl';
import { AboutAnimeData } from './types/AboutAnime';

interface AboutAnimeProps {
  anime?: AboutAnimeData;
  isLoading?: boolean;
  isError?: boolean;
}

export default function AboutAnime({ anime, isLoading, isError }: AboutAnimeProps) {
  if (!anime && !isLoading) return <p>Ошибка загрузки аниме</p>;
  return (
    <div className="max-w-5x1 mx-auto px-4 py-6">
      <AnimeHeader anime={anime} isLoading={isLoading} />
      <AnimeInfo anime={anime} isLoading={isLoading} />
      <AnimeGenres anime={anime} isLoading={isLoading} />
      <AnimeTrackerControl anime={anime} isLoading={isLoading} />
    </div>
  );
}
