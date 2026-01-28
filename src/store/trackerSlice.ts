'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anime } from '../types/Anime';

export type TrackerStatus = 'planned' | 'watching' | 'paused' | 'dropped' | 'done'; // задаем тип статуса трэкера

export interface TrackerAnime extends Anime {
  status: TrackerStatus;
}

interface TrackerState {
  list: TrackerAnime[];
}

const initialState: TrackerState = {
  list: [],
};

const trackerSlice = createSlice({
  name: 'tracker',
  initialState,
  reducers: {
    addAnime: (state, action: PayloadAction<TrackerAnime>) => {
      const exists = state.list.find((a) => a.mal_id === action.payload.mal_id);
      if (!exists) state.list.push(action.payload);
    },
    removeAnime: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((a) => a.mal_id !== action.payload);
    },
    changeStatus: (state, action: PayloadAction<{ id: number; status: TrackerStatus }>) => {
      const anime = state.list.find((a) => a.mal_id === action.payload.id);
      if (anime) anime.status = action.payload.status;
    },
  },
});

export const { addAnime, removeAnime, changeStatus } = trackerSlice.actions;
export default trackerSlice.reducer;
