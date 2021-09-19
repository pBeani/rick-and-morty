import { ComputedRef, computed } from 'vue';
import { Episode } from '../../interfaces';
import { useDateFormat } from '../utils/dateFormat';

export const useEpisodeRecord = (episode: ComputedRef<Episode>) => {
  const record = computed(() => ({
    air_date: {
      label: 'Air date',
      value: episode.value.air_date,
    },
    created: {
      label: 'Created',
      value: useDateFormat(episode.value.created),
    },
  }));

  return {
    record,
  };
};
