import { Button, Chip, Collapse, MenuItem, Skeleton, Stack, Typography, Menu } from "@mui/material";
import { useState } from "react";

import { AboutAnimeData, AboutAnimeGenre } from "./types/AboutAnime";
import AnimeTrailer from "./AnimeTrailer";

const ANIME_STATUSES = [
  { value: 'none', label: '-' },
  { value: 'planned', label: 'Посмотреть позже'},
  { value: 'watching', label: 'Смотрю'},
  { value: 'paused', label: 'Отложенные'},
  { value: 'dropped', label: 'Заброшенное'},
] as const;

type AboutAnimeProps = {
  anime: AboutAnimeData;
}

type AnimeStatuses = typeof ANIME_STATUSES[number];

export default function AboutAnime({anime}: AboutAnimeProps) { 
  const [isSynopsisExpanded, setIsSynopsisExpanded] = useState(false);
  const [status, setStatus] = useState<AnimeStatuses>(ANIME_STATUSES[0]);
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  
  const handleSynopsisClick = () => {
    setIsSynopsisExpanded((prev) => !prev)
  }

  const handleAddToOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  }

  const handleAddToClose = () => {
    setMenuAnchor(null);
  }

  const handleGenreClick = (genre: Pick<AboutAnimeGenre, 'mal_id' | 'name'>) => {

  }
  return (

    <div>
        <Typography variant="h4">{anime.title}</Typography>
      <div>

        <div>
          <img 
            src={anime.images?.jpg?.image_url || 'image-placeholder.svg'}
            alt={anime.title}
            loading="lazy"
            decoding="async"
            className="h-100 w-100"
          />
        </div>

        <div>
          <AnimeTrailer 
            embedUrl={anime.trailer?.embed_url}
            title={anime.title}
          />          
        </div>

      </div>

      <div>
        <Collapse in={isSynopsisExpanded} timeout='auto'>
          <Typography variant="subtitle1">{anime.synopsis ?? '-'}</Typography>
        </Collapse>
        {anime.synopsis && anime.synopsis?.length > 200 && (
        <Button 
        variant="text"
        onClick={handleSynopsisClick}
        >
          {isSynopsisExpanded ? 'Скрыть' : 'Показать еще'}
        </Button>
        )}
      </div>

      <div>
        <p>{anime.type ?? '-'}</p>
        <p>{anime.episodes ?? '-'}</p>
        <p>{anime.status ?? '-'}</p>
        <p>{anime.rating ?? '-'}</p>
        <p>{anime.duration ?? '-'}</p>
        <p>{anime.score ?? '-'}</p>
        <p>{anime.year ?? '-'}</p>

        <Stack direction='row' spacing={1} flexWrap='wrap'>
          {anime.genres.length === 0 ? (
            <Skeleton variant="rectangular" width={60} height={32} />
          ) : (
            anime.genres.map((genre) => (
              <Chip
                key={genre.mal_id}
                label={genre.name ?? '-'}
                onClick={() => handleGenreClick(genre)}
                clickable
                color='primary'
                size='small' 
              />
            ))
          )}
        </Stack>

      </div>

      <div>
        <Button onClick={handleAddToOpen} variant="outlined">
          {status.value === 'none' ? 'Добавить в' : `Добавлено в "${status.label}"`}
        </Button>

        <Menu
          anchorEl={menuAnchor}
          onClose={handleAddToClose}
          open={Boolean(menuAnchor)}
        >
          {ANIME_STATUSES.map((s) => (
            <MenuItem
              key={s.value}
              onClick={() => {
                setStatus(s)
                handleAddToClose()
              }}
              >
                {s.label}
            </MenuItem>
          ))}
        </Menu>
      </div>

    </div>
  );
}

// Header => перейти на популярное/поиск
