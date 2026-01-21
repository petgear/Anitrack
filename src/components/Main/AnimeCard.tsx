import { Anime } from "@/src/types/Anime";
import {} from '@/public/image-placeholder.svg'


type AnimeCardProps = {
  anime: Anime;
}


export default function AnimeCard({anime}: AnimeCardProps) {
  const handleAnimeClick = () => {
    
  }
  return (
    <div className="flex flex-col bg-violet-100 rounded overflow-hidden shadow-md/20 w-60 h-115">
      <div className="w-full h-85 overflow-hidden rounded-lg shrink-0">
        <img
          src={anime.images?.jpg?.image_url ||'/image-placeholder.svg'}
          alt={anime.title}
          className="w-full h-full object-cover"
          onError={(e) => {e.currentTarget.src = '/image-placeholder.svg'}}
        />
      </div>
      <div className="p-3 flex flex-col gap-1 text-sm">
        <h3 className="text-center text-lg font-medium line-clamp-2">{anime.title || anime.title_english}</h3>
        <p>Score: {anime.score}</p>
        <p>Type: {anime.type}</p>
        <p>Episodes: {anime.episodes}</p>
      </div>
    </div>
  );
}