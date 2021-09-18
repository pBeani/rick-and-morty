import { computed } from 'vue';
import { ModelEmit } from '../../interfaces';

export function useModel(props: Readonly<Record<string, string | undefined>>, emit: ModelEmit) {
  return computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });
}
