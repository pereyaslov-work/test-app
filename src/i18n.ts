
import i18n from 'i18next'
import moment from 'moment'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-xhr-backend'
/**
 *  Configures localization API. Also sets up react hooks, specifies how to download translations and how to format date in messages
 */
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['testapp'],
    defaultNS: 'testapp',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json'
    },
    react: {
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      format: function (value, format) {
        if (value instanceof Date) return moment(value).format(format)
        return value
      }
    }
  })

export default i18n
