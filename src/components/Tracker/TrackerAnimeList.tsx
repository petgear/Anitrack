import { Card, Typography } from "@mui/material";
import { TrackerAnime } from "./types/Tracker";

type TrackerAnimeListProps = {
  filteredAnime: TrackerAnime[]; // исправить
}

export default function TrackerAnimeList({filteredAnime}: TrackerAnimeListProps) {
  return (
    <div>
        {filteredAnime.map((anime) => (
          <Card key={anime.mal_id}>
            <div>
              <img src={anime.image || 'image-placeholder.svg'}/>
            </div>
            <Typography variant="h4">{anime.title}</Typography>
            <Typography variant="subtitle1">{anime.episodes}</Typography>
            <Typography variant="subtitle1">{anime.status}</Typography>
          </Card>
        ))}
      </div>
  )
}