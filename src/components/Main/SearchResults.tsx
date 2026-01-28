'use client';

import { Anime } from '@/src/types/Anime';
import AnimeCard from './AnimeCard';

type SearchResulstProps = {
  query: Anime[];
};

export default function SearchResults({ query }: SearchResulstProps) {
  // TODO: pagination

  return (
    <div className="grid grid-cols-4 gap-4 items-center justify-center my-8">
      {query.map((anime) => (
        <AnimeCard anime={anime} key={anime.mal_id} />
      ))}
    </div>
  );
}
