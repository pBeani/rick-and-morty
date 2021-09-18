/* eslint-disable no-unused-vars */
import { Ref, ComputedRef } from 'vue';

export interface Props {
  modelValue: string;
}

export interface Emit {
  (event: string, payload: string | undefined): void;
}

export interface Character {
  id: string;
  name: string;
  image: string;
}

export interface CharactersQueryInfo {
  next: number;
}

export interface CharactersQuery {
  info: CharactersQueryInfo;
  results: Array<Character>
}

export interface CharactersQueryResult {
  characters: CharactersQuery;
}

export interface FilterCharacter {
  name: string;
}

export interface UseFetchCharatecters {
  characters: ComputedRef<Character[]>;
  loadMore: () => Promise<void>;
  loading: Ref<boolean>;
  hasNext: ComputedRef<boolean>;
}

export interface InfiniteScrollDoneCallback {
  (stop?: boolean): void;
}

export interface InfiniteScrollOptions {
  reset(): void;
  $el: Element;
}

export interface UseInfiniteScroll {
  infiniteScrollRef: Ref<InfiniteScrollOptions | null>;
  onLoad: (index: number, done: InfiniteScrollDoneCallback) => Promise<void>;
}

export interface Location {
  name: string;
}

export interface EpisodePreview {
  id: string;
  name: string;
  episode: string;
}

export interface CharacterProfile {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: EpisodePreview[],
  created: string;
}

export interface CharacterProfileQueryResult {
  character: CharacterProfile;
}

export interface UseFetchCharatecterProfile {
  character: ComputedRef<CharacterProfile>;
}
