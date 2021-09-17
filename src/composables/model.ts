import { computed } from 'vue';
import { Emit } from './interfaces';

export function useModel(props: Readonly<Record<string, string | undefined>>, emit: Emit) {
  return computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  });
}
