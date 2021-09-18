import { ref, watch, Ref } from 'vue';
import {
  InfiniteScrollDoneCallback,
  InfiniteScrollOptions,
  UseInfiniteScroll,
  FilterCharacter,
} from '../../interfaces';

export const useInfiniteScroll = (
  filter : Ref<FilterCharacter>,
  loading: Ref<boolean>,
  hasNext: Ref<boolean>,
  loadMore: () => Promise<void>,
): UseInfiniteScroll => {
  const infiniteScrollRef = ref<InfiniteScrollOptions | null>(null);

  watch(filter, () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    infiniteScrollRef.value?.reset();
  });

  const onLoad = async (index: number, done: InfiniteScrollDoneCallback) => {
    if (loading.value) {
      done();
      return;
    }
    if (hasNext.value) {
      await loadMore();
    }
    done();
  };

  return {
    infiniteScrollRef,
    onLoad,
  };
};
