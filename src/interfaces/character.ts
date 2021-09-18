import { Ref, ComputedRef } from 'vue';
import { EpisodePreview } from './episode';
import { Location } from './location';

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
  results: Character[]
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
