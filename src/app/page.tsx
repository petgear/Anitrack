"use client"

import { useEffect, useState } from 'react';

import { MockAnime } from './mockHome';

import SearchResults from '../components/Main/SearchResults';
import AboutAnime from '../components/AboutAnime/AboutAnime';

import { Anime } from '@/src/types/Anime'


export default function Home({searchParams,}: {searchParams: { q?: string};}) {
  const query = searchParams.q;
  const [animeList, setAnimeList] = useState<Anime[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const res = await fetch(
          `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=20` 
        );
        const data = await res.json()
        setAnimeList(data.data);
      } else {
        const res = await fetch('https://api.jikan.moe/v4/top/anime');
        const data = await res.json();
        setAnimeList(data.data);
      }
    };

    fetchData();
  },[query]);
  
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white'>
      <AboutAnime anime={MockAnime} /> {/*Перенести в page*/}
      <main className="flex min-h-screen justify-center bg-gray-100">
        <SearchResults query={animeList || []}/>
      </main>

    </div>
  )
}