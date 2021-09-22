import { Ref } from 'vue';

export interface InputRef {
  blur(): void;
}

export interface UseBlurInput {
  inputRef: Ref<InputRef | null>;
  blur: () => void;
}
