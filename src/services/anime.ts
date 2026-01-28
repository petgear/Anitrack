export const fetchTopAnime = async () => {
  const res = await fetch('https://api.jikan.moe/v4/top/anime');
  if (!res.ok) throw new Error('Failed to fetch top anime');
  const json = await res.json();
  return json.data;
};

export const fetchAnimeByQuery = async (q: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime?q=${q}&limit=20`);
  if (!res.ok) throw new Error('Failed to fetch anime by query');
  const json = await res.json();
  return json.data;
};

export const fetchAnimeById = async (id: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  if (!res.ok) throw new Error('Failed to fetch anime by id');
  const json = await res.json();
  return json.data;
};
