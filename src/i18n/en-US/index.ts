import { IntlDateTimeFormat } from 'vue-i18n';

export const messages = {
  failed: 'Action failed',
  success: 'Action was successful',
};

export const datetimeFormat: IntlDateTimeFormat = {
  short: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
};
