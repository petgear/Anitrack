import { Anime } from "@/src/types/Anime";
import {} from '@/public/image-placeholder.svg'

type AnimeCardProps = {
  anime: Anime;
}

export default function AnimeCard({anime}: AnimeCardProps) {
  return (
    <div className="flex flex-col bg-blue-100 rounded overflow-hidden shadow-md w-60">
      <div className="w-full aspect-[3/4] overflow-hidden rounded-lg flex-shrink-0">
        <img
          src={anime.images?.jpg?.image_url ||'/image-placeholder.svg'}
          alt={anime.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex flex-col gap-1 text-sm">
        <h3 className="text-center text-xl font-medium line-clamp-2">{anime.title_english}</h3>
        <p>Score: {anime.score}</p>
        <p>Type: {anime.type}</p>
        <p>Episodes: {anime.episodes}</p>
      </div>
    </div>
  );
}