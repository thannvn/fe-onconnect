import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

interface Language {
  en: string;
  vi: string;
}

export const LANGUAGE: Language = {
  en: 'en', // English
  vi: 'vi', // Vietnamese
};

i18n
  // load translation using http -> see /public/locales/<language_code>/translation.json)
  .use(Backend)
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    fallbackLng: LANGUAGE.en,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
