/* eslint-disable no-unused-vars */
export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Character {
  id: string;
  name: string;
  image: string;
}

export interface CallbackFunction {
  (stop?: boolean): void;
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
