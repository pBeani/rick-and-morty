/* eslint-disable camelcase */
import { ComputedRef } from 'vue';
import { Character } from './character';

export interface EpisodePreview {
  id: string;
  name: string;
  episode: string;
}

export interface Episode {
  name: string;
  air_date: string;
  episode: string;
  characters: Character[],
  created: string;
}

export interface EpisodeQueryResult {
  episode: Episode;
}

export interface UseFetchEpisode {
  episode: ComputedRef<Episode>;
}
