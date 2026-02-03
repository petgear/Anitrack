'use client';

import { useState } from 'react';

import TrackerSideBar from './TrackerSideBar';
import TrackerAnimeList from './TrackerAnimeList';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/store/store';
import { changeStatus, removeAnime, TrackerStatus } from '@/src/store/trackerSlice';

export default function Tracker() {
  const dispatch = useDispatch<AppDispatch>();
  const trackerList = useSelector((state: RootState) => state.tracker.list);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<'all' | TrackerStatus>('all');

  const filteredAnime =
    selectedStatus === 'all' ? trackerList : trackerList.filter((a) => a.status === selectedStatus);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r sticky top-0 h-screen">
        <TrackerSideBar
          selectedStatus={selectedStatus}
          onSelect={(status) => setSelectedStatus(status)}
        />
      </aside>

      <main className="flex flex-1 flex-col justify-center items-center overflow-y-auto">
        {trackerList.length === 0 ? (
          <p>Добавьте аниме в трекер!</p>
        ) : (
          <TrackerAnimeList
            filteredAnime={filteredAnime}
            onChangeStatus={(id, status) => dispatch(changeStatus({ id, status }))}
            onRemove={(id) => dispatch(removeAnime(id))}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
}
