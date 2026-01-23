import { useState } from "react";
import TrackerSideBar from "./TrackerSideBar";
import TrackerAnimeList from "./TrackerAnimeList";

import { AnimeStatusValue } from "./types/Tracker";
import { mockAnime } from "./mock";

export default function Tracker() { // Сделать отдельной Page
  const [selectedStatus, setSelectedStatus] = useState<'all' | AnimeStatusValue>('all');
  const filteredAnime = selectedStatus === 'all'
    ? mockAnime
    : mockAnime.filter(anime => anime.status === selectedStatus);

  return (
    <div>
      <div>
        <TrackerSideBar
          selectedStatus={selectedStatus}
          onSelect={(status) => setSelectedStatus(status)}
        />
      </div>

      <div>
        <TrackerAnimeList filteredAnime={filteredAnime}/>
      </div>
    </div>
  );
}

