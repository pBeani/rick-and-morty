import { ComputedRef, computed } from 'vue';
import { Episode } from './interfaces';

export const useEpisodeRecord = (episode: ComputedRef<Episode>) => {
  const record = computed(() => ({
    air_date: {
      label: 'Air date',
      value: episode.value.air_date,
    },
    created: {
      label: 'Created',
      value: episode.value.created,
    },
  }));

  return {
    record,
  };
};
