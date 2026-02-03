import { Middleware } from '@reduxjs/toolkit';
import { TrackerState } from './trackerSlice';

export const trackerStorageMiddleware: Middleware<{}, { tracker: TrackerState }> =
  (store) => (next) => (action) => {
    const result = next(action);

    if (typeof action === 'object' && action !== null && 'type' in action) {
      const type = (action as { type: string }).type;

      if (type.startsWith('tracker/')) {
        const state = store.getState();
        localStorage.setItem('trackerList', JSON.stringify(state.tracker.list));
      }
    }

    return result;
  };
