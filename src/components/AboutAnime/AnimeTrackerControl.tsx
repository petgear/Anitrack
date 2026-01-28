import { Button, Menu, MenuItem, Skeleton } from '@mui/material';
import { AboutAnimeData } from './types/AboutAnime';
import { useEffect, useState } from 'react';

import { addAnime, changeStatus, TrackerStatus } from '@/src/store/trackerSlice';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/src/store/store';
import { useSelector } from 'react-redux';
import type { RootState } from '@/src/store/store';


type AnimeTrackerProps = {
  anime?: AboutAnimeData;
  isLoading?: boolean;
};

type AnimeStatuses = (typeof ANIME_STATUSES)[number];

const ANIME_STATUSES = [
  { value: 'none', label: '-' },
  { value: 'planned', label: 'Посмотреть позже' },
  { value: 'watching', label: 'Смотрю' },
  { value: 'paused', label: 'Отложенные' },
  { value: 'dropped', label: 'Заброшенное' },
  { value: 'done', label: 'Просмотрено' },
] as const;

export default function AnimeTrackerControl({ anime, isLoading }: AnimeTrackerProps) {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const [status, setStatus] = useState<AnimeStatuses>(ANIME_STATUSES[0]);

  const dispatch = useDispatch<AppDispatch>();

  const trackerList = useSelector((state: RootState) => state.tracker.list);

  const handleSelectStatus = (s: AnimeStatuses) => {
    setStatus(s);
    if (!anime) return;
    if (s.value === 'none') return;

    const exists = trackerList.find((a) => a.mal_id === anime.mal_id);

    if (exists) {
      dispatch(changeStatus({ id: anime.mal_id, status: s.value }));
    } else {
      dispatch(addAnime((anime, s.value as TrackerStatus))); // переделеать
    }
    handleAddToClose();
  };

  const handleAddToOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleAddToClose = () => {
    setMenuAnchor(null);
  };

  useEffect(() => {
    if (!anime) return;
    const exists = trackerList.find((a) => a.mal_id === a.mal_id);
    if (exists) {
      const s = ANIME_STATUSES.find((st) => st.value === exists.status);
      if (s) setStatus(s);
    } else {
      setStatus(ANIME_STATUSES[0]);
    }
  }, [trackerList, anime]);

  return (
    <div>
      {isLoading ? (
        <Skeleton variant="rectangular" width={200} />
      ) : (
        <Button onClick={handleAddToOpen} variant="outlined" disabled={isLoading}>
          {status.value === 'none' ? 'Добавить в' : `Добавлено в "${status.label}"`}
        </Button>
      )}

      {!isLoading && (
        <Menu anchorEl={menuAnchor} onClose={handleAddToClose} open={Boolean(menuAnchor)}>
          {ANIME_STATUSES.map((s) => (
            <MenuItem
              key={s.value}
              onClick={() => {
                handleSelectStatus(s);
              }}
            >
              {s.label}
            </MenuItem>
          ))}
        </Menu>
      )}
    </div>
  );
}
