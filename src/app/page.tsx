'use client';

import SearchResults from '../components/Main/SearchResults';

import { useAnimeSearchQuery, useTopAnimeQuery } from '../services/hooks';
import { useSearchParams } from 'next/navigation';
import SkeletonCard from '../shared/SkeletonCard';

export default function Home() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const topAnime = useTopAnimeQuery();
  const searchAnime = useAnimeSearchQuery(query || '');

  const { data, isLoading, isError } = query ? searchAnime : topAnime;
  const skeletonCount = data?.length || 10;

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-4 items-center justify-center my-8">
        {[...Array(skeletonCount)].map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    );
  }

  if (isError) return <div className="flex ">Ошибка загрузки</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white">
      <main className="flex min-h-screen justify-center bg-gray-100">
        <SearchResults query={data || []} />
      </main>
    </div>
  );
}
