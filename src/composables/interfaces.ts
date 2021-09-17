/* eslint-disable no-unused-vars */
export interface Props {
  modelValue: string;
}

export interface Emit {
  (event: string, payload: string | undefined): void;
}
