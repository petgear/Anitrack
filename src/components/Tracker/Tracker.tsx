'use client';

import { useState } from 'react';

import TrackerSideBar from './TrackerSideBar';
import TrackerAnimeList from './TrackerAnimeList';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/store/store';
import { changeStatus, TrackerStatus } from '@/src/store/trackerSlice';

export default function Tracker() {
  const dispatch = useDispatch<AppDispatch>();
  const trackerList = useSelector((state: RootState) => state.tracker.list);

  const [selectedStatus, setSelectedStatus] = useState<'all' | TrackerStatus>('all');

  const filteredAnime =
    selectedStatus === 'all' ? trackerList : trackerList.filter((a) => a.status === selectedStatus);

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 shrink-0 border-r">
        <TrackerSideBar
          selectedStatus={selectedStatus}
          onSelect={(status) => setSelectedStatus(status)}
        />
      </aside>

      <main className="flex-1 overflow-y-auto">
        <TrackerAnimeList
          filteredAnime={filteredAnime}
          onChangeStatus={(id, status) => dispatch(changeStatus({ id, status }))}
        />
      </main>
    </div>
  );
}
