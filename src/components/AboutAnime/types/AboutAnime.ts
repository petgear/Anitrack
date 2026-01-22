export type AboutAnimeData = {
  mal_id : number;
  images? : {
    jpg?: {
      image_url?: string;
    }
  }
  trailer: {
    youtube_id?: string;
    url?: string;
    embed_url?: string;
  }
  title: string;
  type?: string;
  episodes?: number;
  status?: string;
  airing?: boolean;
  aired?: {
    from?: string;
    to?: string;
  }
  duration?: string;
  rating?: string | null;
  score?: number | null;
  synopsis?: string | null;
  year?: number;
  genres: AboutAnimeGenre[];
}

export type AboutAnimeGenre = {
  mal_id: number;
  name?: string;
  type?: string;
  url?: string;
}