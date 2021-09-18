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
