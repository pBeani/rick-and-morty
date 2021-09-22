import { ref } from 'vue';
import { InputRef, UseBlurInput } from '../../interfaces';

export const useBlurInput = ():UseBlurInput => {
  const inputRef = ref<InputRef | null>(null);
  const blur = () => {
    inputRef.value?.blur();
  };
  return {
    blur,
    inputRef,
  };
};
