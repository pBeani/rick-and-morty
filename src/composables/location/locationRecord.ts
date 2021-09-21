import { ComputedRef, computed } from 'vue';
import { Location } from '../../interfaces';
import { useDateFormat } from '../utils/dateFormat';

export const useLocationRecord = (location: ComputedRef<Location>) => {
  const record = computed(() => ({
    type: {
      label: 'Type',
      value: location.value.type,
    },
    dimension: {
      label: 'Dimension',
      value: location.value.dimension,
    },
    created: {
      label: 'Created',
      value: useDateFormat(location.value.created),
    },
  }));

  return {
    record,
  };
};
