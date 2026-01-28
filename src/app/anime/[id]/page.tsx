'use client';

import AboutAnime from '@/src/components/AboutAnime/AboutAnime';
import { useAnimeByIdQuery } from '@/src/services/hooks';
import { use } from 'react';

export default function AnimePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const { data, isLoading, isError } = useAnimeByIdQuery(id);
  return <AboutAnime anime={data} isLoading={isLoading} isError={isError} />;
}
