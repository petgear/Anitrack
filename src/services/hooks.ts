import { useQuery } from '@tanstack/react-query';
import { fetchAnimeById, fetchAnimeByQuery, fetchTopAnime } from './anime';
import { Anime } from '../types/Anime';

export const useTopAnimeQuery = () =>
  useQuery<Anime[], Error>({
    queryKey: ['topAnime'],
    queryFn: fetchTopAnime,
  });

export const useAnimeSearchQuery = (q: string) =>
  useQuery<Anime[], Error>({
    queryKey: ['searchAnime', q],
    queryFn: () => fetchAnimeByQuery(q),
    enabled: !!q,
  });

export const useAnimeByIdQuery = (id: string) =>
  useQuery<Anime, Error>({
    queryKey: ['anime', id],
    queryFn: () => fetchAnimeById(id),
    enabled: !!id,
  });
