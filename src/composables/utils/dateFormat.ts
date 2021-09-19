/* eslint-disable @typescript-eslint/unbound-method */
import { useI18n } from 'vue-i18n';

export const useDateFormat = (dateString: string): string => {
  const { d } = useI18n();
  if (!dateString.length) {
    return dateString;
  }
  const localeDate = d(new Date(dateString), 'short');
  return localeDate;
};
