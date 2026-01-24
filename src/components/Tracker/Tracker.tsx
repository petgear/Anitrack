"use client"

import { useState } from "react";

import { mockAnime } from "./mock";

import TrackerSideBar from "./TrackerSideBar";
import TrackerAnimeList from "./TrackerAnimeList";

import { AnimeStatusValue } from "./types/Tracker";

export default function Tracker() {
  const [selectedStatus, setSelectedStatus] = useState<'all' | AnimeStatusValue>('all');
  const filteredAnime = selectedStatus === 'all'
    ? mockAnime
    : mockAnime.filter(anime => anime.status === selectedStatus);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r">
        <TrackerSideBar
          selectedStatus={selectedStatus}
          onSelect={(status) => setSelectedStatus(status)}
        />
      </aside>

      <main className="flex-1 overflow-y-auto">
        <TrackerAnimeList filteredAnime={filteredAnime}/>
      </main>
    </div>
  );
}

