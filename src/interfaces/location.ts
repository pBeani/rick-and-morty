import { ComputedRef } from 'vue';
import { Character } from './character';

export interface LocationPreview {
  name: string;
  id: string;
}

export interface Location {
  name: string;
  type: string;
  dimension: string;
  residents: Character[],
  created: string;
}

export interface LocationQueryResult {
  location: Location;
}

export interface UseFetchLocation {
  location: ComputedRef<Location>;
}
