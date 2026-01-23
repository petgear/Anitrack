"use client"

import Header from '@/src/components/Header/Header';
import SearchBar from "@/src/components/Header/SearchBar";
import Footer from '@/src/components/Footer/Footer'
import ThemeToggle from '@/src/components/Header/ThemeToggle'
import { useEffect, useState } from 'react';

import { Anime } from '@/src/types/Anime'
import SearchResults from '../components/Main/SearchResults';
import AboutAnime from '../components/AboutAnime/AboutAnime';
import Tracker from '../components/Tracker/Tracker';

const MockAnime = {
  mal_id: 1,
  url: "https://myanimelist.net/anime/1",
  images: {
    jpg: { image_url: "/image-placeholder.svg" },
    webp: { image_url: "/image-placeholder.svg" }
  },
  trailer: { youtube_id: '9bZkp7q19f0', url: 'https://www.youtube.com/watch?v=9bZkp7q19f0', embed_url: "https://www.youtube.com/embed/9bZkp7q19f0" },
  approved: true,
  titles: [],
  title: "Naruto",
  title_english: "Naruto",
  title_japanese: "ナルト",
  title_synonyms: [],
  type: "TV",
  source: "Manga",
  episodes: 220,
  status: "Finished Airing",
  airing: false,
  aired: {},
  duration: "23 min per ep",
  rating: "PG-13",
  score: 8.3,
  scored_by: 1000000,
  rank: 100,
  popularity: 200,
  members: 2000000,
  favorites: 100000,
  synopsis: "A story about a young ninja...A story about a young ninja...A story about a young ninja...",
  background: "",
  season: "Fall",
  year: 2002,
  broadcast: {},
  producers: [],
  licensors: [],
  studios: [],
  genres: [
    { mal_id: 1, name: "Action" },
    { mal_id: 2, name: "Adventure" }
  ],
  explicit_genres: [],
  themes: [],
  demographics: []
};


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
        <Tracker /> {/*перенести в page */}

        <div>-----</div>
      <AboutAnime anime={MockAnime} /> {/*Перенести в page*/}
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