import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import { datetimeFormats } from 'src/i18n';

const i18n = createI18n({
  legacy: false,
  locale: 'en-US',
  datetimeFormats,
});

export default boot(({ app }) => {
  app.use(i18n);
});

export { i18n };
