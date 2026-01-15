import { Anime } from "@/src/types/Anime";
import {} from '@/public/image-placeholder.svg'

type AnimeCardProps = {
  anime: Anime;
}

export default function AnimeCard({anime}: AnimeCardProps) {
  return (
    <div className="flex flex-col bg-blue-100 rounded overflow-hidden shadow-md w-60 h-140">
      <div className="w-full h-100">
        <img
          src={anime.images?.jpg?.image_url ||'/image-placeholder.svg'}
          alt={anime.title}
          width={200}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h3>{anime.title_english}</h3>
        <p>Score: {anime.score}</p>
        <p>Type: {anime.type}</p>
        <p>Episodes: {anime.episodes}</p>
      </div>
    </div>
  );
}