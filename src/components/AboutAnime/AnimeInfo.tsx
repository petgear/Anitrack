import { Skeleton } from '@mui/material';
import { AboutAnimeData } from './types/AboutAnime';

type AnimeInfoProps = {
  anime?: AboutAnimeData;
  isLoading?: boolean;
};

export default function AnimeInfo({ anime, isLoading }: AnimeInfoProps) {
  return (
    <div className="grid grid-cols-2 gap-2 text-sm">
      <p>Тип аниме: {isLoading ? <Skeleton width={80} /> : (anime?.type ?? '-')}</p>
      <p>Эпизодов: {isLoading ? <Skeleton width={50} /> : (anime?.episodes ?? '-')}</p>
      <p>Статус: {isLoading ? <Skeleton width={100} /> : (anime?.status ?? '-')}</p>
      <p>Рейтинг: {isLoading ? <Skeleton width={50} /> : (anime?.rating ?? '-')}</p>
      <p>Длительность: {isLoading ? <Skeleton width={70} /> : (anime?.duration ?? '-')}</p>
      <p>Score: {isLoading ? <Skeleton width={50} /> : (anime?.score ?? '-')}</p>
      <p>Год: {isLoading ? <Skeleton width={40} /> : (anime?.year ?? '-')}</p>
    </div>
  );
}
