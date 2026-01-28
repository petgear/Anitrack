import { TRACKER_STATUSES } from '../constants/trackerStatuses';

export type AnimeStatusValue = (typeof TRACKER_STATUSES)[number]['value'];

export type TrackerAnime = {
  mal_id: number;
  title: string;
  image: string;
  episodes: number;
  status: AnimeStatusValue;
};
