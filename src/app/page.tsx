'use client';

import SearchResults from '../components/Main/SearchResults';

import { useAnimeSearchQuery, useTopAnimeQuery } from '../services/hooks';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const topAnime = useTopAnimeQuery();
  const searchAnime = useAnimeSearchQuery(query || '');

  const { data, isLoading, isError } = query ? searchAnime : topAnime;

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      <main className="flex min-h-screen justify-center bg-gray-100">
        <SearchResults query={data || []} />
      </main>
    </div>
  );
}
