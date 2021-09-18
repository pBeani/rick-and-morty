/* eslint-disable no-unused-vars */
export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface CallbackFunction {
  (stop?: boolean): void;
}

export interface InfiniteScrollOptions {
  reset(): void;
  $el: Element;
}
