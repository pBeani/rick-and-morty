/* eslint-disable no-unused-vars */
import { Ref } from 'vue';

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
