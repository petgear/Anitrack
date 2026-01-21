import { Button, Chip, Collapse, Skeleton, Stack, Typography } from "@mui/material";
import { useState } from "react";

import { Anime, Genre } from "@/src/types/Anime";
import AnimeTrailer from "./AnimeTrailer";

  const options = [
    '-',
    'Посмотреть позже',
    'В процессе',
    'Отложенные',
    'Заброшенное',
  ];



export default function AboutAnime({anime}: any) { // переделать тип
  const [isSynopsisExpanded, setIsSynopsisExpanded] = useState(false);

  const handleSynopsisClick = () => {
    setIsSynopsisExpanded((prev) => !prev)
  }

  const handleGenreClick = (genre: Genre) => {

  }

  return (
    <div>
        <Typography variant="h4">{anime.title}</Typography>

      <div>

        <div>
          <img 
            src={anime.images.jpg.image_url}
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
        <Button 
        variant="text"
        onClick={handleSynopsisClick}
        >
          {isSynopsisExpanded ? 'Скрыть' : 'Показать еще'}
        </Button>

      </div>

        {/* заглушки для пустых данных '-' skeleton */}
      <div>
        <p>{anime.type ?? '-'}</p>
        <p>{anime.episodes ?? '-'}</p>
        <p>{anime.status ?? '-'}</p>
        <p>{anime.rating ?? '-'}</p>
        <p>{anime.duration ?? '-'}</p>
        <p>{/* ocenka */}</p>
        <p>{anime.score ?? '-'}</p>
        <p>{anime.year ?? '-'}</p>

        <Stack direction='row' spacing={1} flexWrap='wrap'>
          {anime.genres.length === 0 ? (
            <Skeleton variant="rectangular" width={60} height={32} />
          ) : (
            anime.genres.map((genre: Genre) => (
              <Chip
                key={genre.mal_id}
                label={genre.name}
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
        <button>{/*dropdown ИЗ MUI */}</button>
      </div>
    </div>

  );
}

// Header => перейти на популярное/поиск


// Main 

// Название
// Обложка
// Тип
// Эпизоды
// Статус
// Rating
// Трейлер
// Длительность
// Оценка?
// Синопсис
// Дата выпуска
// Жанры

// Добавить в =>
//  Просмотрено/Заброшено/В процессе


// Footer