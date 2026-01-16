"use client"

import Header from '@/src/components/Header/Header';
import SearchBar from "@/src/components/Header/SearchBar";
import Footer from '@/src/components/Footer/Footer'
import ThemeToggle from '@/src/components/Header/ThemeToggle'
import { useEffect, useState } from 'react';

import { Anime } from '@/src/types/Anime'
import SearchResults from '../components/Main/SearchResults';


export default function Home() {

  const [animeList, setAnimeList] = useState<Anime[] | null>(null);
  const [searchValue, setSearchValue] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.jikan.moe/v4/top/anime')
      .then(res => res.json())
      .then(data => setAnimeList(data.data))
  },[]);

  const filteredAnime = searchValue
    ? animeList?.filter(anime => 
        anime.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        (anime.title_english?.toLowerCase().includes(searchValue.toLowerCase()) ?? false)
      )
      : animeList;
  
  return (
    <div className='flex flex-col min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white'>
      <Header>
        <SearchBar
         value={searchValue}
         onChange={setSearchValue}
         />
        <ThemeToggle />
      </Header>

      <main className="flex min-h-screen justify-center bg-gray-100">
        <SearchResults query={filteredAnime || []}/>
      </main>
      <Footer/>
    </div>
  )
}