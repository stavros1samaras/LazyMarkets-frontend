import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// const { locale, translations } = await getLanguage()
import en from "../../public/locales/en/translation.json"
import el from "../../public/locales/el/translation.json"

i18n
    .use(initReactI18next)
    .init({

        resources: {
            en: {
                translation: en,
            },
            el: {
                translation: el,
            },
        },
        fallbackLng: "en",
    })

export default i18n