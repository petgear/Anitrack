'use client';

import { configureStore } from '@reduxjs/toolkit';
import trackerReducer from './trackerSlice';
import { trackerStorageMiddleware } from './trackerStorageMiddleware';

export const store = configureStore({
  reducer: {
    tracker: trackerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(trackerStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
