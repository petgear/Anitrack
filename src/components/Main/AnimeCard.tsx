/* eslint-disable @next/next/no-img-element */
import { Anime } from "@/src/types/Anime";
import {} from '@/public/image-placeholder.svg'
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

type AnimeCardProps = {
  anime: Anime;
}

export default function AnimeCard({anime}: AnimeCardProps) {
  const handleAnimeClick = () => { // переход на AboutAnime по запросу AnimeById в API
    
  }
  return ( // переделать в карточку из MUI?
    <Card className="flex flex-col bg-violet-600 rounded overflow-hidden shadow-md/20 w-60 h-115">

      <CardMedia className="w-full h-85 overflow-hidden rounded-lg shrink-0">
        <img
          src={anime.images?.jpg?.image_url ||'/image-placeholder.svg'}
          alt={anime.title}
          className="w-full h-84 object-cover"
          onError={(e) => {e.currentTarget.src = '/image-placeholder.svg'}}
        />
      </CardMedia>

      <CardContent className="p-3 flex flex-col gap-1 text-sm">
        <Typography 
          variant="h6"
          className="text-center text-lg font-medium line-clamp-2" 
        >
          {anime.title || anime.title_english}
        </Typography>
        <Typography variant="subtitle1">Оценка: {anime.score ?? '-'}</Typography>
        <Typography variant="subtitle1">Тип: {anime.type ?? '-'}</Typography>
        <Typography variant="subtitle1">Эпиздово: {anime.episodes ?? '-'}</Typography>
      </CardContent>
    </Card>
  );
}