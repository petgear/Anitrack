import { Chip, Skeleton, Stack } from '@mui/material';
import { AboutAnimeData, AboutAnimeGenre } from './types/AboutAnime';

type AnimeGenresProps = {
  anime?: AboutAnimeData;
  isLoading?: boolean;
};

export default function AnimeGenres({ anime, isLoading }: AnimeGenresProps) {
  const handleGenreClick = (genre: Pick<AboutAnimeGenre, 'mal_id' | 'name'>) => {};

  if (isLoading) {
    return (
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} variant="rectangular" width={60} height={32} />
        ))}
      </Stack>
    );
  }

  if (!anime || !anime.genres) return null;

  return (
    <div>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {anime.genres?.map((genre) => (
          <Chip
            key={genre.mal_id}
            label={genre.name ?? '-'}
            onClick={() => handleGenreClick(genre)}
            clickable
            color="primary"
            size="small"
          />
        ))}
      </Stack>
    </div>
  );
}
