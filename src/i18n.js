import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationKA from './locales/ka/translation.json';
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

const resources = {
  ka: { translation: translationKA },
  en: { translation: translationEN },
  ru: { translation: translationRU }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ka',
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
